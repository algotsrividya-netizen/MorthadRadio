// Time-synced radio player hook
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Playlist,
  Track,
  getCurrentPlaylist,
  getElapsedTime,
  getPlaylistDuration,
  getRemainingTime,
  playlists,
} from '@/lib/playlists';

interface RadioPlayerState {
  isPlaying: boolean;
  currentPlaylist: Playlist | null;
  currentTrackTitle: string;
  elapsedTime: number;
  remainingTime: number;
  totalDuration: number;
  hasContent: boolean;
  isReady: boolean;
}

// Store actual durations after loading
const trackDurations: Map<string, number> = new Map();
let durationsLoaded = false;

// Load all track durations upfront
const loadAllDurations = (): Promise<void> => {
  return new Promise((resolve) => {
    const allTracks: Track[] = [];
    playlists.forEach(p => allTracks.push(...p.tracks));
    
    if (allTracks.length === 0) {
      durationsLoaded = true;
      resolve();
      return;
    }

    let loaded = 0;
    const total = allTracks.length;

    allTracks.forEach((track) => {
      const audio = new Audio();
      audio.preload = 'metadata';
      
      const handleLoaded = () => {
        if (audio.duration && isFinite(audio.duration)) {
          trackDurations.set(track.src, audio.duration);
          track.duration = audio.duration;
        }
        loaded++;
        if (loaded >= total) {
          durationsLoaded = true;
          resolve();
        }
      };

      audio.onloadedmetadata = handleLoaded;
      audio.onerror = handleLoaded;
      audio.src = track.src;
    });

    setTimeout(() => {
      if (!durationsLoaded) {
        durationsLoaded = true;
        resolve();
      }
    }, 5000);
  });
};

// Get track duration (from cache or default)
const getTrackDuration = (track: Track): number => {
  return trackDurations.get(track.src) || track.duration;
};

// Get current track and position based on SYSTEM TIME
const getTimeBasedTrackInfo = (playlist: Playlist): { 
  track: Track; 
  seekPosition: number; 
  trackIndex: number;
  elapsedInPlaylist: number;
} | null => {
  const now = new Date();
  const startTime = new Date(now);
  startTime.setHours(playlist.startHour, playlist.startMinute, 0, 0);
  
  const elapsedSeconds = (now.getTime() - startTime.getTime()) / 1000;
  
  if (elapsedSeconds < 0) return null;
  
  let accumulatedTime = 0;
  
  for (let i = 0; i < playlist.tracks.length; i++) {
    const track = playlist.tracks[i];
    const trackDuration = getTrackDuration(track);
    
    if (accumulatedTime + trackDuration > elapsedSeconds) {
      const seekPosition = elapsedSeconds - accumulatedTime;
      return {
        track,
        seekPosition,
        trackIndex: i,
        elapsedInPlaylist: elapsedSeconds,
      };
    }
    accumulatedTime += trackDuration;
  }
  
  return null; // Playlist has ended
};

export const useRadioPlayer = () => {
  const [state, setState] = useState<RadioPlayerState>({
    isPlaying: false,
    currentPlaylist: null,
    currentTrackTitle: '',
    elapsedTime: 0,
    remainingTime: 0,
    totalDuration: 0,
    hasContent: false,
    isReady: false,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const syncIntervalRef = useRef<number | null>(null);
  const currentTrackIndexRef = useRef<number>(-1);
  const currentSrcRef = useRef<string>('');
  const isPlayingRef = useRef(false);
  const playRequestIdRef = useRef(0);
  const isSyncingRef = useRef(false); // Prevent concurrent syncs

  // Sync playback to system time - the core time-sync logic
  const syncPlayback = useCallback(() => {
    // Prevent concurrent sync calls
    if (isSyncingRef.current) return;
    if (!isPlayingRef.current || !audioRef.current) return;

    const audio = audioRef.current;

    const playlist = getCurrentPlaylist();
    if (!playlist || playlist.tracks.length === 0) {
      audio.pause();
      isPlayingRef.current = false;
      setState(prev => ({ ...prev, isPlaying: false }));
      return;
    }

    const trackInfo = getTimeBasedTrackInfo(playlist);

    if (!trackInfo) {
      audio.pause();
      isPlayingRef.current = false;
      setState(prev => ({ ...prev, isPlaying: false }));
      return;
    }

    const { track, seekPosition, trackIndex } = trackInfo;
    const trackDuration = getTrackDuration(track);
    const clampedSeek = Math.min(Math.max(0, seekPosition), trackDuration - 0.1);

    // Check if we need to switch tracks
    if (track.src !== currentSrcRef.current) {
      isSyncingRef.current = true;
      currentTrackIndexRef.current = trackIndex;
      currentSrcRef.current = track.src;

      const currentRequestId = ++playRequestIdRef.current;

      audio.src = track.src;

      const handleMetadata = () => {
        // Ignore stale loads
        if (playRequestIdRef.current !== currentRequestId || !audioRef.current) {
          isSyncingRef.current = false;
          return;
        }

        audio.currentTime = clampedSeek;
        audio.play().catch((err) => {
          console.error('Sync play failed:', err);
        });
        isSyncingRef.current = false;
      };

      // Use { once: true } for automatic cleanup
      audio.addEventListener('loadedmetadata', handleMetadata, { once: true });
      audio.load();
    } else {
      // Same track - check if we need to resync (drift > 1 second)
      const drift = Math.abs(audio.currentTime - clampedSeek);
      if (drift > 1 && audio.readyState >= 2) {
        audio.currentTime = clampedSeek;
      }
    }
  }, []);

  // Handle track ended - resync with small delay to prevent race conditions
  const handleTrackEnded = useCallback(() => {
    if (isPlayingRef.current && !isSyncingRef.current) {
      // Small delay to let audio element reset properly
      setTimeout(() => {
        syncPlayback();
      }, 50);
    }
  }, [syncPlayback]);

  // Handle audio errors
  const handleAudioError = useCallback(() => {
    console.error('Audio error occurred');
    if (isPlayingRef.current && !isSyncingRef.current) {
      setTimeout(() => {
        syncPlayback();
      }, 100);
    }
  }, [syncPlayback]);

  // Initialize audio and load durations
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    // Set up persistent event handlers ONCE
    audio.onended = handleTrackEnded;
    audio.onerror = handleAudioError;

    loadAllDurations().then(() => {
      setState(prev => ({ ...prev, isReady: true }));
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.onended = null;
        audioRef.current.onerror = null;
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (syncIntervalRef.current) clearInterval(syncIntervalRef.current);
    };
  }, [handleTrackEnded, handleAudioError]);

  // Update display every second
  const updateTimeDisplay = useCallback(() => {
    const playlist = getCurrentPlaylist();
    
    if (!playlist) {
      setState(prev => ({
        ...prev,
        currentPlaylist: null,
        hasContent: false,
        currentTrackTitle: '',
        elapsedTime: 0,
        remainingTime: 0,
        totalDuration: 0,
      }));
      return;
    }

    const totalDuration = getPlaylistDuration(playlist);
    const elapsed = getElapsedTime(playlist);
    const remaining = getRemainingTime(playlist);
    const hasContent = playlist.tracks.length > 0;
    
    const trackInfo = getTimeBasedTrackInfo(playlist);

    setState(prev => ({
      ...prev,
      currentPlaylist: playlist,
      hasContent,
      currentTrackTitle: trackInfo?.track.title || '',
      elapsedTime: elapsed,
      remainingTime: remaining,
      totalDuration,
    }));

    // Auto-stop if playlist ended while playing
    if (remaining <= 0 && isPlayingRef.current) {
      if (audioRef.current) audioRef.current.pause();
      isPlayingRef.current = false;
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  }, []);

  // Start display update interval
  useEffect(() => {
    updateTimeDisplay();
    intervalRef.current = window.setInterval(updateTimeDisplay, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [updateTimeDisplay]);

  // Main play function - syncs to system time
  const play = useCallback(() => {
    const playlist = getCurrentPlaylist();
    if (!playlist || playlist.tracks.length === 0 || !audioRef.current) {
      return;
    }

    const trackInfo = getTimeBasedTrackInfo(playlist);
    
    if (!trackInfo) {
      setState(prev => ({ ...prev, isPlaying: false }));
      return;
    }

    const { track, seekPosition, trackIndex } = trackInfo;
    const trackDuration = getTrackDuration(track);
    const clampedSeek = Math.min(Math.max(0, seekPosition), trackDuration - 0.5);
    
    const currentRequestId = ++playRequestIdRef.current;
    
    isPlayingRef.current = true;
    currentTrackIndexRef.current = trackIndex;
    
    // Check if same track is already loaded and ready
    if (track.src === currentSrcRef.current && audioRef.current.readyState >= 2) {
      audioRef.current.currentTime = clampedSeek;
      audioRef.current.play().catch((err) => {
        console.error('Play failed:', err);
        isPlayingRef.current = false;
        setState(prev => ({ ...prev, isPlaying: false }));
      });
    } else {
      // Need to load new track
      currentSrcRef.current = track.src;
      audioRef.current.src = track.src;
      
      const handleCanPlay = () => {
        if (playRequestIdRef.current !== currentRequestId || !audioRef.current) return;
        
        audioRef.current.currentTime = clampedSeek;
        audioRef.current.play().catch((err) => {
          console.error('Play failed:', err);
          isPlayingRef.current = false;
          setState(prev => ({ ...prev, isPlaying: false }));
        });
      };
      
      // Use { once: true } for automatic cleanup
      audioRef.current.addEventListener('canplaythrough', handleCanPlay, { once: true });
      audioRef.current.load();
    }

    setState(prev => ({ ...prev, isPlaying: true }));
    
    // Start continuous sync interval (every 3 seconds)
    if (syncIntervalRef.current) clearInterval(syncIntervalRef.current);
    syncIntervalRef.current = window.setInterval(syncPlayback, 3000);
  }, [syncPlayback]);

  // Pause
  const pause = useCallback(() => {
    playRequestIdRef.current++;
    
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (syncIntervalRef.current) {
      clearInterval(syncIntervalRef.current);
      syncIntervalRef.current = null;
    }
    isPlayingRef.current = false;
    isSyncingRef.current = false;
    setState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  // Toggle
  const togglePlayPause = useCallback(() => {
    if (state.isPlaying) {
      pause();
    } else {
      play();
    }
  }, [state.isPlaying, play, pause]);

  return {
    ...state,
    play,
    pause,
    togglePlayPause,
  };
};
