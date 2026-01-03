// Playlist configuration for Morthad Radio
// Each playlist has a start time (24h format) and audio tracks

export interface Track {
  id: string;
  title: string;
  src: string;
  duration: number; // Duration in seconds
}

export interface Playlist {
  id: string;
  name: string;
  startHour: number;
  startMinute: number;
  tracks: Track[];
}

// Playlist definitions with start times
// Playlist 1: 9:00 AM
// Playlist 2: 2:00 PM
// Playlist 3: 6:40 PM (Today's broadcast)
// Playlist 4: 10:50 PM

export const playlists: Playlist[] = [
  {
    id: 'playlist-1',
    name: 'Morning Waves',
    startHour: 11,
    startMinute: 0,
    tracks: [
  {
        id: 'mw-38',
        title: 'Shivamani Telugu Movie __ Rama Rama Video Song __ Nagarjuna_ Asin(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Shivamani%20Telugu%20Movie%20__%20Rama%20Rama%20Video%20Song%20__%20Nagarjuna_%20Asin(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9TaGl2YW1hbmkgVGVsdWd1IE1vdmllIF9fIFJhbWEgUmFtYSBWaWRlbyBTb25nIF9fIE5hZ2FyanVuYV8gQXNpbihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY3MDE0MTkxLCJleHAiOjE3OTg1NTAxOTF9.OnrKoHEAmcvzldirPsFsOa-_gjw8ARGyN1417cC_oQY',
        duration: 300,
},
{
        id: 'mw-39',
        title: 'Shivamani Telugu Movie __ Yenaatiki Video Songs __ Nagarjuna_ Asin(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Shivamani%20Telugu%20Movie%20__%20Yenaatiki%20Video%20Songs%20__%20Nagarjuna_%20Asin(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9TaGl2YW1hbmkgVGVsdWd1IE1vdmllIF9fIFllbmFhdGlraSBWaWRlbyBTb25ncyBfXyBOYWdhcmp1bmFfIEFzaW4oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2NzAxNDI0NiwiZXhwIjoxNzk4NTUwMjQ2fQ.vgX8UeV-RcopTT0ERE8q1-G_cWIJEszffWpx5tskob0',
        duration: 300,
},
{
        id: 'mw-40',
        title: 'Sirimalle Vaana Full Video Song - Vaana Video Songs - Vinay_ Meera Chopra(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Sirimalle%20Vaana%20Full%20Video%20Song%20-%20Vaana%20Video%20Songs%20-%20Vinay_%20Meera%20Chopra(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9TaXJpbWFsbGUgVmFhbmEgRnVsbCBWaWRlbyBTb25nIC0gVmFhbmEgVmlkZW8gU29uZ3MgLSBWaW5heV8gTWVlcmEgQ2hvcHJhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjcwMTQyOTYsImV4cCI6MTc5ODU1MDI5Nn0.8ZE9xCLsdgJVt1lkhrQo9lNhA6xBzjDE4ghZ7jO3G28',
        duration: 300,
},
{
        id: 'mw-41',
        title: 'Sontham Video Songs _ Telusunaa _ Namitha_ Aryan Rajesh _ TeluguOne(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Sontham%20Video%20Songs%20_%20Telusunaa%20_%20Namitha_%20Aryan%20Rajesh%20_%20TeluguOne(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Tb250aGFtIFZpZGVvIFNvbmdzIF8gVGVsdXN1bmFhIF8gTmFtaXRoYV8gQXJ5YW4gUmFqZXNoIF8gVGVsdWd1T25lKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjcwMTQzOTEsImV4cCI6MTc5ODU1MDM5MX0.jifkzokRhS9_YFYnx9eg8h5D6wLU2Ta_uyXlin2akaE',
        duration: 300,
},
{
        id: 'mw-42',
        title: 'Tamalapaku _ Dil _ Nithin_ Neha _ R. P. Patnaik_ Usha _ Telugu Love Songs _ Dance Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Tamalapaku%20_%20Dil%20_%20Nithin_%20Neha%20_%20R.%20P.%20Patnaik_%20Usha%20_%20Telugu%20Love%20Songs%20_%20Dance%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9UYW1hbGFwYWt1IF8gRGlsIF8gTml0aGluXyBOZWhhIF8gUi4gUC4gUGF0bmFpa18gVXNoYSBfIFRlbHVndSBMb3ZlIFNvbmdzIF8gRGFuY2UgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2NzAxNDQ1OCwiZXhwIjoxNzk4NTUwNDU4fQ.__pMzv6sDNVm6VEvf-KaqLJaMFGlViQqZmpet11rfTo',
        duration: 300,
},
{
        id: 'mw-43',
        title: 'Tella Tellani Cheera - Lyrical _ Deviputrudu _ Venkatesh_ Anjala Zaveri _Udit Narayan_ Sujatha Mohan(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Tella%20Tellani%20Cheera%20-%20Lyrical%20_%20Deviputrudu%20_%20Venkatesh_%20Anjala%20Zaveri%20_Udit%20Narayan_%20Sujatha%20Mohan(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9UZWxsYSBUZWxsYW5pIENoZWVyYSAtIEx5cmljYWwgXyBEZXZpcHV0cnVkdSBfIFZlbmthdGVzaF8gQW5qYWxhIFphdmVyaSBfVWRpdCBOYXJheWFuXyBTdWphdGhhIE1vaGFuKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjcwMTQ0ODUsImV4cCI6MTc5ODU1MDQ4NX0.DvC3bJyb2-RLEgm16SNBKCFLzo1uCAsTcpWhj7rTAR0',
        duration: 300,
},
{
        id: 'mw-44',
        title: 'Thara Thaluku Thara Song - Lakshmi Video Song - Venkatesh_ Nayanthara_ Charmi(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Thara%20Thaluku%20Thara%20Song%20-%20Lakshmi%20Video%20Song%20-%20Venkatesh_%20Nayanthara_%20Charmi(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9UaGFyYSBUaGFsdWt1IFRoYXJhIFNvbmcgLSBMYWtzaG1pIFZpZGVvIFNvbmcgLSBWZW5rYXRlc2hfIE5heWFudGhhcmFfIENoYXJtaShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY3MDE0NTAzLCJleHAiOjE3OTg1NTA1MDN9.Qx5WAySiZ0CXVFPUMrTyuH29SJImsqq3jBMlQcGGWAo',
        duration: 300,
},
{
        id: 'mw-45',
        title: 'Thirumalavasa Telugu Lyrics _ Bhadra Movie _ Ravi Teja_ MeeraJasmine _ Maa Paata Mee Nota(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Thirumalavasa%20Telugu%20Lyrics%20_%20Bhadra%20Movie%20_%20Ravi%20Teja_%20MeeraJasmine%20_%20Maa%20Paata%20Mee%20Nota(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9UaGlydW1hbGF2YXNhIFRlbHVndSBMeXJpY3MgXyBCaGFkcmEgTW92aWUgXyBSYXZpIFRlamFfIE1lZXJhSmFzbWluZSBfIE1hYSBQYWF0YSBNZWUgTm90YShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY3MDE0NTY0LCJleHAiOjE3OTg1NTA1NjR9.jnTfCbdHydUusypV1jhfgfgr21ZfRxkIy4rzrblFZL0',
        duration: 300,
},
{
        id: 'mw-46',
        title: 'Unnatundi Gundey Video Song _ Ninnu Kori _ Nani _ Nivetha Thomas _ Gopi Sundar(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Unnatundi%20Gundey%20Video%20Song%20_%20Ninnu%20Kori%20_%20Nani%20_%20Nivetha%20Thomas%20_%20Gopi%20Sundar(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Vbm5hdHVuZGkgR3VuZGV5IFZpZGVvIFNvbmcgXyBOaW5udSBLb3JpIF8gTmFuaSBfIE5pdmV0aGEgVGhvbWFzIF8gR29waSBTdW5kYXIoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2NzAxNDU5MiwiZXhwIjoxNzk4NTUwNTkyfQ.w-otvnhxiwNFHPQU-Qco0WiZ1ANpvKbysf5egtXLHXw',
        duration: 300,
},
{
        id: 'mw-47',
        title: 'Vaaji Vaaji __ Sivaji Telugu Video Songs __ A R RAHMAN(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Vaaji%20Vaaji%20__%20Sivaji%20Telugu%20Video%20Songs%20__%20A%20R%20RAHMAN(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9WYWFqaSBWYWFqaSBfXyBTaXZhamkgVGVsdWd1IFZpZGVvIFNvbmdzIF9fIEEgUiBSQUhNQU4oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2NzAxNDY1NSwiZXhwIjoxNzk4NTUwNjU1fQ.dZg7B2vtY9tLpN-AZy2m0C5rkdx01AvGltIeBsMPnX8',
        duration: 300,
},
{
        id: 'mw-48',
        title: 'Vachindamma Video Song With Lyrics _ Geetha Govindam Movie _ Vijay Devarakonda_ Rashmika(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Vachindamma%20Video%20Song%20With%20Lyrics%20_%20Geetha%20Govindam%20Movie%20_%20Vijay%20Devarakonda_%20Rashmika(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9WYWNoaW5kYW1tYSBWaWRlbyBTb25nIFdpdGggTHlyaWNzIF8gR2VldGhhIEdvdmluZGFtIE1vdmllIF8gVmlqYXkgRGV2YXJha29uZGFfIFJhc2htaWthKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjcwMTQ3MTksImV4cCI6MTc5ODU1MDcxOX0.bpdptoUDxMNyRctADHDluyoN-MSGXubSpIcfN9gY960',
        duration: 300,
},
{
        id: 'mw-49',
        title: 'Valentines Day Special Songs - Ounani Antav - Uday Kiran_ Richa Sharma(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Valentines%20Day%20Special%20Songs%20-%20Ounani%20Antav%20-%20Uday%20Kiran_%20Richa%20Sharma(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9WYWxlbnRpbmVzIERheSBTcGVjaWFsIFNvbmdzIC0gT3VuYW5pIEFudGF2IC0gVWRheSBLaXJhbl8gUmljaGEgU2hhcm1hKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjcwMTQ3NTcsImV4cCI6MTc5ODU1MDc1N30.mC8bzoiFJvMfV6cOf1OVG4IEfYQ0UulUw4X5YtQLmts',
        duration: 300,
},
{
        id: 'mw-50',
        title: 'Varanasi - GlobeTrotter Song _ Mahesh Babu_ Priyanka Chopra_ Prithviraj _MM Keeravaani _SS Rajamouli(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Varanasi%20-%20GlobeTrotter%20Song%20_%20Mahesh%20Babu_%20Priyanka%20Chopra_%20Prithviraj%20_MM%20Keeravaani%20_SS%20Rajamouli(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9WYXJhbmFzaSAtIEdsb2JlVHJvdHRlciBTb25nIF8gTWFoZXNoIEJhYnVfIFByaXlhbmthIENob3ByYV8gUHJpdGh2aXJhaiBfTU0gS2VlcmF2YWFuaSBfU1MgUmFqYW1vdWxpKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjcwMTQ4MDcsImV4cCI6MTc5ODU1MDgwN30.Yf5RVRO3R5jqFNbrEgz4QcjFGP-1jdPHJtRGurBkIcQ',
        duration: 300,
},
{
        id: 'mw-51',
        title: 'Vasu Telugu Movie Video Songs _ Paataku Pranam _ Venkatesh _ Bhoomika _ Harris Jayaraj(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Vasu%20Telugu%20Movie%20Video%20Songs%20_%20Paataku%20Pranam%20_%20Venkatesh%20_%20Bhoomika%20_%20Harris%20Jayaraj(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9WYXN1IFRlbHVndSBNb3ZpZSBWaWRlbyBTb25ncyBfIFBhYXRha3UgUHJhbmFtIF8gVmVua2F0ZXNoIF8gQmhvb21pa2EgXyBIYXJyaXMgSmF5YXJhaihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY3MDE0ODQxLCJleHAiOjE3OTg1NTA4NDF9.gXlzjBiAKYry2a46C1l0YTbTa_4Hs_ZOyHb0Eh8r4Vc',
        duration: 300,
},
{
        id: 'mw-52',
        title: 'Veyi Kannulatho _ Nee Sneham _ Uday Kiran_ Aarti Agarwal _ R. P. Patnaik_ Usha _ Telugu Love Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Veyi%20Kannulatho%20_%20Nee%20Sneham%20_%20Uday%20Kiran_%20Aarti%20Agarwal%20_%20R.%20P.%20Patnaik_%20Usha%20_%20Telugu%20Love%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9WZXlpIEthbm51bGF0aG8gXyBOZWUgU25laGFtIF8gVWRheSBLaXJhbl8gQWFydGkgQWdhcndhbCBfIFIuIFAuIFBhdG5haWtfIFVzaGEgXyBUZWx1Z3UgTG92ZSBTb25ncyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY3MDE0ODY2LCJleHAiOjE3OTg1NTA4NjZ9.i4yj1UMGondvWS_myZ8UBMgI04YC_HvabCiEhr6-HAI',
        duration: 300,
},
{
        id: 'mw-53',
        title: 'Vibe Undi - Lyrical _ Mirai _ Teja Sajja_ Ritika Nayak _ Karthik Gattamneni _Gowra Hari_Armaan Malik(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Vibe%20Undi%20-%20Lyrical%20_%20Mirai%20_%20Teja%20Sajja_%20Ritika%20Nayak%20_%20Karthik%20Gattamneni%20_Gowra%20Hari_Armaan%20Malik(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9WaWJlIFVuZGkgLSBMeXJpY2FsIF8gTWlyYWkgXyBUZWphIFNhamphXyBSaXRpa2EgTmF5YWsgXyBLYXJ0aGlrIEdhdHRhbW5lbmkgX0dvd3JhIEhhcmlfQXJtYWFuIE1hbGlrKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjcwMTQ5MDgsImV4cCI6MTc5ODU1MDkwOH0.He4R2Bg1AbgBypmLl3ADNotHJgbXNjZ4l3Vfi9WFyQY',
        duration: 300,
},
{
        id: 'mw-54',
        title: 'Virupaksha - Nachavule Nachavule Video _ Sai Dharam Tej_ Samyuktha_ SukumarB_ KarthikDandu_ Ajaneesh(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Virupaksha%20-%20Nachavule%20Nachavule%20Video%20_%20Sai%20Dharam%20Tej_%20Samyuktha_%20SukumarB_%20KarthikDandu_%20Ajaneesh(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9WaXJ1cGFrc2hhIC0gTmFjaGF2dWxlIE5hY2hhdnVsZSBWaWRlbyBfIFNhaSBEaGFyYW0gVGVqXyBTYW15dWt0aGFfIFN1a3VtYXJCXyBLYXJ0aGlrRGFuZHVfIEFqYW5lZXNoKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjcwMTQ5NDYsImV4cCI6MTc5ODU1MDk0Nn0.rvQ-PeP0xC6z13a01tyuAFeHlsnbkNRQ24Uhl9iUVrs',
        duration: 300,
},
{
        id: 'mw-55',
        title: 'Yamadonga Songs _ Nuvvu Muttukunte Video Song _ Jr NTR_ Mamta Mohandas _ Sri Balaji Video(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Yamadonga%20Songs%20_%20Nuvvu%20Muttukunte%20Video%20Song%20_%20Jr%20NTR_%20Mamta%20Mohandas%20_%20Sri%20Balaji%20Video(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9ZYW1hZG9uZ2EgU29uZ3MgXyBOdXZ2dSBNdXR0dWt1bnRlIFZpZGVvIFNvbmcgXyBKciBOVFJfIE1hbXRhIE1vaGFuZGFzIF8gU3JpIEJhbGFqaSBWaWRlbyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY3MDE0OTc2LCJleHAiOjE3OTg1NTA5NzZ9.jTNHSgNUYGjYt9UTAHqN45KvhAfVZwgpDlSfoKtZqV4',
        duration: 300,
},
{
        id: 'mw-56',
        title: 'Yamadonga Video Songs _ Rabbaru Gajulu Video Song _ Jr.NTR_ Priyamani _ Sri Balaji Video(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Yamadonga%20Video%20Songs%20_%20Rabbaru%20Gajulu%20Video%20Song%20_%20Jr.NTR_%20Priyamani%20_%20Sri%20Balaji%20Video(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9ZYW1hZG9uZ2EgVmlkZW8gU29uZ3MgXyBSYWJiYXJ1IEdhanVsdSBWaWRlbyBTb25nIF8gSnIuTlRSXyBQcml5YW1hbmkgXyBTcmkgQmFsYWppIFZpZGVvKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjcwMTUwMDgsImV4cCI6MTc5ODU1MTAwOH0.sXK2l60WdqnzWpSGmHSkK8rdt7P6CvmNKqp2vYVKOkU',
        duration: 300,
},
{
        id: 'mw-57',
        title: 'Yeduta Nilichindi Choodu Video Song - Vaana Video Songs - Vinay_ Meera Chopra(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Yeduta%20Nilichindi%20Choodu%20Video%20Song%20-%20Vaana%20Video%20Songs%20-%20Vinay_%20Meera%20Chopra(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9ZZWR1dGEgTmlsaWNoaW5kaSBDaG9vZHUgVmlkZW8gU29uZyAtIFZhYW5hIFZpZGVvIFNvbmdzIC0gVmluYXlfIE1lZXJhIENob3ByYShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY3MDE1MDM4LCJleHAiOjE3OTg1NTEwMzh9.Exoa3JZw7EhV9QGfhkUkGkjeAxGaobBcviAvKay_GWo',
        duration: 300,
},
{
        id: 'mw-58',
        title: 'Yeh Oore Chinadana Full Video Song __ Bhadra Movie __ Ravi Teja_ Meera Jasmine(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Yeh%20Oore%20Chinadana%20Full%20Video%20Song%20__%20Bhadra%20Movie%20__%20Ravi%20Teja_%20Meera%20Jasmine(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9ZZWggT29yZSBDaGluYWRhbmEgRnVsbCBWaWRlbyBTb25nIF9fIEJoYWRyYSBNb3ZpZSBfXyBSYXZpIFRlamFfIE1lZXJhIEphc21pbmUoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2NzAxNTA3MywiZXhwIjoxNzk4NTUxMDczfQ.uFlZNQ2dsC6cVaVNirPIpiCD1v9OYkRCHnbypjSppVM',
        duration: 300,
},
{
        id: 'mw-59',
        title: 'Yenaatiki Manamokatenani HD Video Song - Shivamani(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Yenaatiki%20Manamokatenani%20HD%20Video%20Song%20-%20Shivamani(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9ZZW5hYXRpa2kgTWFuYW1va2F0ZW5hbmkgSEQgVmlkZW8gU29uZyAtIFNoaXZhbWFuaShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY3MDE1MTQxLCJleHAiOjE3OTg1NTExNDF9.KNXRNVDqaNPv7TeYiTG2vI0DXe4tihhQYuHSi3HqNqA',
        duration: 300,
},
{
        id: 'mw-60',
        title: 'Yevetti Full Song ll Student No.1 Songs ll Jr.N.T.R_ Ghajala(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Yevetti%20Full%20Song%20ll%20Student%20No.1%20Songs%20ll%20Jr.N.T.R_%20Ghajala(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9ZZXZldHRpIEZ1bGwgU29uZyBsbCBTdHVkZW50IE5vLjEgU29uZ3MgbGwgSnIuTi5ULlJfIEdoYWphbGEoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2NzAxNTE2OCwiZXhwIjoxNzk4NTUxMTY4fQ.K96povIzmua5xmgvrdft2FyHSqKPUwCbYXkYSj-zmyM',
        duration: 300,
},
{
        id: 'mw-1',
        title: 'Vachinde Mellaga',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/_Vachinde%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9fVmFjaGluZGUgRnVsbCBWaWRlbyBTb25nIF9fIEZpZGFhIEZ1bGwgVmlkZW8gU29uZ3MgX18gVmFydW4gVGVqXyBTYWkgUGFsbGF2aSBfXyBTZWtoYXIgS2FtbXVsYShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2MzQxLCJleHAiOjE3OTg1MjIzNDF9.31giCxdfT-RVp3sXCjY1vJCCe6wtl37MIlg3A0laIV4',
        duration: 300,
},
{
        id: 'mw-2',
        title: 'Nuvante Nakistamani',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvante%20Nakistamani%20Full%20Song%20II%20Santhosham%20Movie%20II%20Nagarjuna_%20Shreya%20_%20Telugu%20Love%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZhbnRlIE5ha2lzdGFtYW5pIEZ1bGwgU29uZyBJSSBTYW50aG9zaGFtIE1vdmllIElJIE5hZ2FyanVuYV8gU2hyZXlhIF8gVGVsdWd1IExvdmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjQyMiwiZXhwIjoxNzk4NTIyNDIyfQ.cBHD7HXft7-kFfc1j4cBYnIrj2YxBuziuEkexbLLqN8',
        duration: 300,
},
{
        id: 'mw-3',
        title: 'Nuvu Choodu Chudakapo Full Video Song _ Okatonumber Kurradu _ Taraka Ratna _ M.M.Keeravaani(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvu%20Choodu%20Chudakapo%20Full%20Video%20Song%20_%20Okatonumber%20Kurradu%20_%20Taraka%20Ratna%20_%20M.M.Keeravaani(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ1IENob29kdSBDaHVkYWthcG8gRnVsbCBWaWRlbyBTb25nIF8gT2thdG9udW1iZXIgS3VycmFkdSBfIFRhcmFrYSBSYXRuYSBfIE0uTS5LZWVyYXZhYW5pKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY0MzMsImV4cCI6MTc5ODUyMjQzM30.8ukuC6JtdTucGVurZgoXLkrdlPIiyaXu9Gs-DFK1F1Y',
        duration: 300,
},
{
        id: 'mw-4',
        title: 'Nuvvakkadunte Full Video Song - Gopi Gopika Godavari Video Songs - Venu_ Kamalini Mukherjee(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvakkadunte%20Full%20Video%20Song%20-%20Gopi%20Gopika%20Godavari%20Video%20Songs%20-%20Venu_%20Kamalini%20Mukherjee(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2YWtrYWR1bnRlIEZ1bGwgVmlkZW8gU29uZyAtIEdvcGkgR29waWthIEdvZGF2YXJpIFZpZGVvIFNvbmdzIC0gVmVudV8gS2FtYWxpbmkgTXVraGVyamVlKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY2NTQsImV4cCI6MTc5ODUyMjY1NH0.fsZ-cKFHhxZypjWb17ZhM5SKEDkqeSoS3Oxky2TQHBI',
        duration: 300,
},
{
        id: 'mw-5',
        title: 'Nuvve Kavali Movie Songs - Kallaloki Kallu Petti Chudavenduku -  Tarun_Richa_Sai Kiran(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Kavali%20Movie%20Songs%20-%20Kallaloki%20Kallu%20Petti%20Chudavenduku%20-%20%20Tarun_Richa_Sai%20Kiran(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBLYXZhbGkgTW92aWUgU29uZ3MgLSBLYWxsYWxva2kgS2FsbHUgUGV0dGkgQ2h1ZGF2ZW5kdWt1IC0gIFRhcnVuX1JpY2hhX1NhaSBLaXJhbihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2Nzg5LCJleHAiOjE3OTg1MjI3ODl9.dUOx-iE5c0bW_WfZHEFeNFgb6m_GhGpLgcsSj5lWmhE',
        duration: 300,
},
{
        id: 'mw-6',
        title: 'Nuvve Nuvve Kavalantundi Full Song With Telugu Lyrics II Chitra Hits  II Nuvve Nuvve Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Nuvve%20Kavalantundi%20Full%20Song%20With%20Telugu%20Lyrics%20II%20Chitra%20Hits%20%20II%20Nuvve%20Nuvve%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBOdXZ2ZSBLYXZhbGFudHVuZGkgRnVsbCBTb25nIFdpdGggVGVsdWd1IEx5cmljcyBJSSBDaGl0cmEgSGl0cyAgSUkgTnV2dmUgTnV2dmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgwMSwiZXhwIjoxNzk4NTIyODAxfQ.I4qD9ApfVa8u0EUrYlbpiA1qpAkQhM6rWHW_T6FWWW8',
        duration: 300,
},
{
        id: 'mw-7',
        title: 'Nuvvosthanante Song _ Varsham Movie Songs _ Prabhas _ Trisha _ DSP _ TeluguOne(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvosthanante%20Song%20_%20Varsham%20Movie%20Songs%20_%20Prabhas%20_%20Trisha%20_%20DSP%20_%20TeluguOne(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2b3N0aGFuYW50ZSBTb25nIF8gVmFyc2hhbSBNb3ZpZSBTb25ncyBfIFByYWJoYXMgXyBUcmlzaGEgXyBEU1AgXyBUZWx1Z3VPbmUoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgxMywiZXhwIjoxNzk4NTIyODEzfQ.PfYRRXGmmqBPO1pdsZTSKwut_tLsBuQrSEX-hUrw8iQ',
        duration: 300,
},
{
        id: 'mw-8',
        title: 'Nuvvu Nenu Kalisunte FULL VIDEO SONG  4K WITH 5.1 DTS AUDIO _  Gangothri _Allu Arjun_ Aditi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Kalisunte%20FULL%20VIDEO%20SONG%20%204K%20WITH%205.1%20DTS%20AUDIO%20_%20%20Gangothri%20_Allu%20Arjun_%20Aditi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IEthbGlzdW50ZSBGVUxMIFZJREVPIFNPTkcgIDRLIFdJVEggNS4xIERUUyBBVURJTyBfICBHYW5nb3RocmkgX0FsbHUgQXJqdW5fIEFkaXRpIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgyMywiZXhwIjoxNzk4NTIyODIzfQ.eNBKIHGiUMhW_U7SX5_zuSdPoW9ublfJIPNbJD0Y9FE',
        duration: 300,
},
{
        id: 'mw-9',
        title: 'Nuvvu Nenu Movie __ Nuvve Naku Pranam Video Song __ Uday Kiran_ Anitha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Movie%20__%20Nuvve%20Naku%20Pranam%20Video%20Song%20__%20Uday%20Kiran_%20Anitha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IE1vdmllIF9fIE51dnZlIE5ha3UgUHJhbmFtIFZpZGVvIFNvbmcgX18gVWRheSBLaXJhbl8gQW5pdGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4NTcsImV4cCI6MTc5ODUyMjg1N30.uQuh5q2luK4Aw0c2nsxbBwm6Uptx4dGkWkUiIxRqHLg',
        duration: 300,
},
{
        id: 'mw-10',
        title: 'Nuvvu Nuvvu Video Song _ Khadgam Full Video Songs _ Srikanth _ Sonali Bendre _ DSP _ Vega Music(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nuvvu%20Video%20Song%20_%20Khadgam%20Full%20Video%20Songs%20_%20Srikanth%20_%20Sonali%20Bendre%20_%20DSP%20_%20Vega%20Music(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOdXZ2dSBWaWRlbyBTb25nIF8gS2hhZGdhbSBGdWxsIFZpZGVvIFNvbmdzIF8gU3Jpa2FudGggXyBTb25hbGkgQmVuZHJlIF8gRFNQIF8gVmVnYSBNdXNpYyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2ODY4LCJleHAiOjE3OTg1MjI4Njh9.aw8syBzrIyIwFQbl4puIPyMjYdHvrcPIsDPRGjOKJx8',
        duration: 300,
},
{
        id: 'mw-11',
        title: 'O Manasa O Manasa Full Video Song - Bhadra Video Songs - Ravi Teja_ Meera Jasmine _ Telugu Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Manasa%20O%20Manasa%20Full%20Video%20Song%20-%20Bhadra%20Video%20Songs%20-%20Ravi%20Teja_%20Meera%20Jasmine%20_%20Telugu%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIE1hbmFzYSBPIE1hbmFzYSBGdWxsIFZpZGVvIFNvbmcgLSBCaGFkcmEgVmlkZW8gU29uZ3MgLSBSYXZpIFRlamFfIE1lZXJhIEphc21pbmUgXyBUZWx1Z3UgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njg3OCwiZXhwIjoxNzk4NTIyODc4fQ.hyD4A_razQlcHr-xNc0fK9xFzESoLmH9hyllGsi_0UY',
        duration: 300,
},
{
        id: 'mw-12',
        title: 'O Priyathama Full Video Song__ Nuvvu Naku Nachav (2001) Movie __ Venkatesh _ Aarthi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Priyathama%20Full%20Video%20Song__%20Nuvvu%20Naku%20Nachav%20(2001)%20Movie%20__%20Venkatesh%20_%20Aarthi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIFByaXlhdGhhbWEgRnVsbCBWaWRlbyBTb25nX18gTnV2dnUgTmFrdSBOYWNoYXYgKDIwMDEpIE1vdmllIF9fIFZlbmthdGVzaCBfIEFhcnRoaSBBZ2Fyd2FsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4ODgsImV4cCI6MTc5ODUyMjg4OH0.rSAqPUcSLbCJZEr3XFwLKfjQLhI8K42psHjZ4t2iSI8',
        duration: 300,
},
{
        id: 'mw-13',
        title: 'Oh Prema _ Deviputrudu _ Venkatesh_ Soundarya _ S. P. Balasubrahmanyam_ Prasanna _ Telugu Love Song(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oh%20Prema%20_%20Deviputrudu%20_%20Venkatesh_%20Soundarya%20_%20S.%20P.%20Balasubrahmanyam_%20Prasanna%20_%20Telugu%20Love%20Song(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PaCBQcmVtYSBfIERldmlwdXRydWR1IF8gVmVua2F0ZXNoXyBTb3VuZGFyeWEgXyBTLiBQLiBCYWxhc3VicmFobWFueWFtXyBQcmFzYW5uYSBfIFRlbHVndSBMb3ZlIFNvbmcoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkyMCwiZXhwIjoxNzk4NTIyOTIwfQ.T7Y_E7ruRCa3BGDC20QPbTC0Xweg4coSR3NtEr8X69c',
        duration: 300,
},
{
        id: 'mw-14',
        title: 'Oka Maru Kalisina __ Ghajini Movie Song __ Suriya_ Asin __ Volga Musicbox(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oka%20Maru%20Kalisina%20__%20Ghajini%20Movie%20Song%20__%20Suriya_%20Asin%20__%20Volga%20Musicbox(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2EgTWFydSBLYWxpc2luYSBfXyBHaGFqaW5pIE1vdmllIFNvbmcgX18gU3VyaXlhXyBBc2luIF9fIFZvbGdhIE11c2ljYm94KE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5MzAsImV4cCI6MTc5ODUyMjkzMH0.-hKExwNe5VOilzu0qAfEclqWCUHIbDOyvsVrrfDYvvs',
        duration: 300,
},
{
        id: 'mw-15',
        title: 'Okariki Okarai Video Song _ Student No.1 _ Jr NTR _ MM Keeravaani _ SS Rajamouli _Vyjayanthi Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Okariki%20Okarai%20Video%20Song%20_%20Student%20No.1%20_%20Jr%20NTR%20_%20MM%20Keeravaani%20_%20SS%20Rajamouli%20_Vyjayanthi%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2FyaWtpIE9rYXJhaSBWaWRlbyBTb25nIF8gU3R1ZGVudCBOby4xIF8gSnIgTlRSIF8gTU0gS2VlcmF2YWFuaSBfIFNTIFJhamFtb3VsaSBfVnlqYXlhbnRoaSBNb3ZpZXMoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkzOCwiZXhwIjoxNzk4NTIyOTM4fQ._kULZetwgVwYdG6GuH3NDhoZ-TipXqCnVBCv72VRMLw',
        duration: 300,
},
{
        id: 'mw-16',
        title: 'Oo Antava Mawa..Oo Oo Antava Video Song (Telugu) _ Pushpa Songs _ Allu Arjun_ DSP _Sukumar _Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oo%20Antava%20Mawa..Oo%20Oo%20Antava%20Video%20Song%20(Telugu)%20_%20Pushpa%20Songs%20_%20Allu%20Arjun_%20DSP%20_Sukumar%20_Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PbyBBbnRhdmEgTWF3YS4uT28gT28gQW50YXZhIFZpZGVvIFNvbmcgKFRlbHVndSkgXyBQdXNocGEgU29uZ3MgXyBBbGx1IEFyanVuXyBEU1AgX1N1a3VtYXIgX1NhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NTAsImV4cCI6MTc5ODUyMjk1MH0.C3JGOOYXJM41SOzLG2NhlptwBXyjpCxAcL6nRvjxrJU',
        duration: 300,
},
{
        id: 'mw-17',
        title: 'Oosupodu Full Video Song __ Fidaa Full Video Songs __ Varun Tej_ Sai Pallavi __ Sekhar Kammula(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oosupodu%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pb3N1cG9kdSBGdWxsIFZpZGVvIFNvbmcgX18gRmlkYWEgRnVsbCBWaWRlbyBTb25ncyBfXyBWYXJ1biBUZWpfIFNhaSBQYWxsYXZpIF9fIFNla2hhciBLYW1tdWxhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NjAsImV4cCI6MTc5ODUyMjk2MH0.Zh2DT7LOdEb8mkxYneB_8PkifyM_kJFYUzIrDjfonxA',
        duration: 300,
},
{
        id: 'mw-18',
        title: 'Orugalluke Pilla Full HD Video Song __ Sainikudu __ Mahesh Babu_ Trisha __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Orugalluke%20Pilla%20Full%20HD%20Video%20Song%20__%20Sainikudu%20__%20Mahesh%20Babu_%20Trisha%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PcnVnYWxsdWtlIFBpbGxhIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBTYWluaWt1ZHUgX18gTWFoZXNoIEJhYnVfIFRyaXNoYSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2OTcxLCJleHAiOjE3OTg1MjI5NzF9.r16_Vh8n5sBJnDl68Zoe2N38VDO6YsFNvcfStmtKN7U',
        duration: 300,
},
{
        id: 'mw-19',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadaara%20Full%20Song%20II%20Magadheera%20II%20Ram%20Charan%20Teja_%20Kajal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYWFyYSBGdWxsIFNvbmcgSUkgTWFnYWRoZWVyYSBJSSBSYW0gQ2hhcmFuIFRlamFfIEthamFsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NzksImV4cCI6MTc5ODUyMjk3OX0.pbdi6zMs1BIvrPNWHg1NyLyLFrAq1ElDBncCcBI3Va8',
        duration: 300,
},
{
        id: 'mw-20',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadara%20Bomma%20Full%20Video%20Song%20__%20Magadheera%20Movie%20__%20Ram%20Charan_%20Kajal%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYXJhIEJvbW1hIEZ1bGwgVmlkZW8gU29uZyBfXyBNYWdhZGhlZXJhIE1vdmllIF9fIFJhbSBDaGFyYW5fIEthamFsIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njk5MSwiZXhwIjoxNzk4NTIyOTkxfQ.7XUnyiH3nIOtdPzqbp5X4MDHEgNeMaoJfsLaR2VTO1k',
        duration: 300,
},
{
        id: 'mw-21',
        title: 'Pillaa Raa Video Song _ RX 100 _ Kartikeya _ Payal Rajput _ Anurag Kulkarni _ Chaitan Bharadwaj(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pillaa%20Raa%20Video%20Song%20_%20RX%20100%20_%20Kartikeya%20_%20Payal%20Rajput%20_%20Anurag%20Kulkarni%20_%20Chaitan%20Bharadwaj(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QaWxsYWEgUmFhIFZpZGVvIFNvbmcgXyBSWCAxMDAgXyBLYXJ0aWtleWEgXyBQYXlhbCBSYWpwdXQgXyBBbnVyYWcgS3Vsa2FybmkgXyBDaGFpdGFuIEJoYXJhZHdhaihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDA2LCJleHAiOjE3OTg1MjMwMDZ9.BMyyhJs6MU5Z0VxuX_2jrcsKQy0pnajv2S9lqhzjieE',
        duration: 300,
},
{
        id: 'mw-22',
        title: 'Poolamme Pilla _ HanuMan (Telugu) _ Prasanth Varma _Teja Sajja_ Amritha _ GowraHari _ Kasarla Shyam(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Poolamme%20Pilla%20_%20HanuMan%20(Telugu)%20_%20Prasanth%20Varma%20_Teja%20Sajja_%20Amritha%20_%20GowraHari%20_%20Kasarla%20Shyam(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qb29sYW1tZSBQaWxsYSBfIEhhbnVNYW4gKFRlbHVndSkgXyBQcmFzYW50aCBWYXJtYSBfVGVqYSBTYWpqYV8gQW1yaXRoYSBfIEdvd3JhSGFyaSBfIEthc2FybGEgU2h5YW0oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzA3OCwiZXhwIjoxNzk4NTIzMDc4fQ.8aBqUbZZMbLVTVce7-EJURN_K1Jo6OhFg5NM1TMUT4k',
        duration: 300,
},
{
        id: 'mw-23',
        title: 'Premalo -  8K Video _ Court _ Priyadarshi_ Harsh Roshan_ Sridevi _ Vijai Bulganin _ Ram Jagadeesh(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Premalo%20-%20%208K%20Video%20_%20Court%20_%20Priyadarshi_%20Harsh%20Roshan_%20Sridevi%20_%20Vijai%20Bulganin%20_%20Ram%20Jagadeesh(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QcmVtYWxvIC0gIDhLIFZpZGVvIF8gQ291cnQgXyBQcml5YWRhcnNoaV8gSGFyc2ggUm9zaGFuXyBTcmlkZXZpIF8gVmlqYWkgQnVsZ2FuaW4gXyBSYW0gSmFnYWRlZXNoKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcwODcsImV4cCI6MTc5ODUyMzA4N30.kw7SAVeO_V8CQUKskoQXFbYsHxLk8Javy8VKez-JlkI',
        duration: 300,
},
{
        id: 'mw-24',
        title: 'Priyathama Telusuna Full HD Video Song __ Jayam __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Priyathama%20Telusuna%20Full%20HD%20Video%20Song%20__%20Jayam%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qcml5YXRoYW1hIFRlbHVzdW5hIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBKYXlhbSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDk0LCJleHAiOjE3OTg1MjMwOTR9.yZ91HLET_yYM0mFzSAIM8PADvqRqMJuLC43WQx_rwLA',
        duration: 300,
},
{
        id: 'mw-25',
        title: 'PUSHPA PUSHPA Telugu Film Version - Pushpa 2 The Rule _ Allu Arjun _ Sukumar _ DSP(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/PUSHPA%20PUSHPA%20Telugu%20Film%20Version%20-%20Pushpa%202%20The%20Rule%20_%20Allu%20Arjun%20_%20Sukumar%20_%20DSP(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QVVNIUEEgUFVTSFBBIFRlbHVndSBGaWxtIFZlcnNpb24gLSBQdXNocGEgMiBUaGUgUnVsZSBfIEFsbHUgQXJqdW4gXyBTdWt1bWFyIF8gRFNQKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxMDUsImV4cCI6MTc5ODUyMzEwNX0.PstdjkfgWO5NKqTX5edsvSTEbz71VYKHrfYFtoz49Vk',
        duration: 300,
},
{
        id: 'mw-26',
        title: 'Pushpa_ Srivalli - Lyrical (Telugu) _ Allu Arjun_ Rashmika Mandanna _ Sid Sriram _ DSP _ Sukumar(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pushpa_%20Srivalli%20-%20Lyrical%20(Telugu)%20_%20Allu%20Arjun_%20Rashmika%20Mandanna%20_%20Sid%20Sriram%20_%20DSP%20_%20Sukumar(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QdXNocGFfIFNyaXZhbGxpIC0gTHlyaWNhbCAoVGVsdWd1KSBfIEFsbHUgQXJqdW5fIFJhc2htaWthIE1hbmRhbm5hIF8gU2lkIFNyaXJhbSBfIERTUCBfIFN1a3VtYXIoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzExNSwiZXhwIjoxNzk4NTIzMTE1fQ.HzKylZ4N9GtQX5dNw-Vl6LyQ11JoXdXSGdmEkAWTEPY',
        duration: 300,
},
{
        id: 'mw-27',
        title: 'Rambai Neemeedha Naku Video Song _ Raju Weds Rambai _ A ETV win Original production _ NOV 21(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rambai%20Neemeedha%20Naku%20Video%20Song%20_%20Raju%20Weds%20Rambai%20_%20A%20ETV%20win%20Original%20production%20_%20NOV%2021(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW1iYWkgTmVlbWVlZGhhIE5ha3UgVmlkZW8gU29uZyBfIFJhanUgV2VkcyBSYW1iYWkgXyBBIEVUViB3aW4gT3JpZ2luYWwgcHJvZHVjdGlvbiBfIE5PViAyMShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MTI0LCJleHAiOjE3OTg1MjMxMjR9.8YVc-D1MbGhOkPaTBo5pLBSy5GwDj1JrXZa4KlfbxSI',
        duration: 300,
},
{
        id: 'mw-28',
        title: 'Ramuloo Ramulaa Full Video _ Allu Arjun_ Pooja Hegde _ Ala Vaikunthapurramuloo _ Trivikram _ Thaman(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ramuloo%20Ramulaa%20Full%20Video%20_%20Allu%20Arjun_%20Pooja%20Hegde%20_%20Ala%20Vaikunthapurramuloo%20_%20Trivikram%20_%20Thaman(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW11bG9vIFJhbXVsYWEgRnVsbCBWaWRlbyBfIEFsbHUgQXJqdW5fIFBvb2phIEhlZ2RlIF8gQWxhIFZhaWt1bnRoYXB1cnJhbXVsb28gXyBUcml2aWtyYW0gXyBUaGFtYW4oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzEzNCwiZXhwIjoxNzk4NTIzMTM0fQ.I8xScN6uDOCfGiHqIjS4NVN4rrLx-okoPFz-8WMG-Rg',
        duration: 300,
},
{
        id: 'mw-29',
        title: 'Rangamma Mangamma Full Video Song _ Rangasthalam Video Songs _Ram Charan_ Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rangamma%20Mangamma%20Full%20Video%20Song%20_%20Rangasthalam%20Video%20Songs%20_Ram%20Charan_%20Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW5nYW1tYSBNYW5nYW1tYSBGdWxsIFZpZGVvIFNvbmcgXyBSYW5nYXN0aGFsYW0gVmlkZW8gU29uZ3MgX1JhbSBDaGFyYW5fIFNhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxNDUsImV4cCI6MTc5ODUyMzE0NX0._Tqfy6wRvy_arL0FxAM3Db32MggbXijlm_CCRDvtXzs',
        duration: 300,
},

{
        id: 'mw-30',
        title: 'Ranu Ranu Antune Chinnado Full Movie Videos Song _ Nithiin_ Sadha _ Telugu Videos(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ranu%20Ranu%20Antune%20Chinnado%20Full%20Movie%20Videos%20Song%20_%20Nithiin_%20Sadha%20_%20Telugu%20Videos(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW51IFJhbnUgQW50dW5lIENoaW5uYWRvIEZ1bGwgTW92aWUgVmlkZW9zIFNvbmcgXyBOaXRoaWluXyBTYWRoYSBfIFRlbHVndSBWaWRlb3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzE4NSwiZXhwIjoxNzk4NTIzMTg1fQ.QFwB2wVDiiXBpFDsDRNRgdZqyohHB-OSSqLTHV-yz50',
        duration: 300,
},
      {
        id: 'mw-31',
        title: 'Oke Oka Mata (Chakram)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chakram%20songs%20-%20Oke%20Oka%20Mata%20-%20Prabhas%20Asin%20Charmi(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-32',
        title: 'Chennai Chandrama',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-33',
        title: 'Edo Priyaragam (Aarya)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Edo%20Priyaragam%20Video%20Song%20__%20Aarya%20Video%20Songs%20__%20Allu%20Arjun_%20Anuradha%20Mehta(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-34',
        title: 'Hrudhayam (Parugu)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Hrudhayam%20Full%20Video%20Song%20_%20Parugu%20Video%20Songs%20_%20Allu%20Arjun_%20Sheela%20_%20Bhaskar%20_%20Mani%20Sharma(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-35',
        title: 'Violin Song (Iddarammayilatho)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Iddarammayilatho%20Video%20Songs%20_%20Violin%20Song%20(Girl%20Just)%20Video%20Song%20_%20Allu%20Arjun_%20Amala%20Paul(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-36',
        title: 'Megham Karigenu (Naaga)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Naaga%20Movie%20Video%20Songs%20__%20Megham%20Karigenu%20Video%20Song%20__%20Jr.NTR%20_%20Sada(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-37',
        title: 'Taal Se Taal Mila',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Taal%20Se%20Taal%20Mila%20_%20A.R%20Rahman%20_%20Alka%20Yagnik%20_%20Udit%20Narayan%20_%20Taal%20(1999)(M4A_128K).m4a',
        duration: 300,
      },
    ],
  },
  {
    id: 'playlist-2',
    name: 'Morning Vibes',
    startHour: 17, // 2:00 PM
    startMinute: 0,
    tracks: [
  {
        id: 'mw-1',
        title: 'Vachinde Mellaga',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/_Vachinde%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9fVmFjaGluZGUgRnVsbCBWaWRlbyBTb25nIF9fIEZpZGFhIEZ1bGwgVmlkZW8gU29uZ3MgX18gVmFydW4gVGVqXyBTYWkgUGFsbGF2aSBfXyBTZWtoYXIgS2FtbXVsYShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2MzQxLCJleHAiOjE3OTg1MjIzNDF9.31giCxdfT-RVp3sXCjY1vJCCe6wtl37MIlg3A0laIV4',
        duration: 300,
},
{
        id: 'mw-2',
        title: 'Nuvante Nakistamani',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvante%20Nakistamani%20Full%20Song%20II%20Santhosham%20Movie%20II%20Nagarjuna_%20Shreya%20_%20Telugu%20Love%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZhbnRlIE5ha2lzdGFtYW5pIEZ1bGwgU29uZyBJSSBTYW50aG9zaGFtIE1vdmllIElJIE5hZ2FyanVuYV8gU2hyZXlhIF8gVGVsdWd1IExvdmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjQyMiwiZXhwIjoxNzk4NTIyNDIyfQ.cBHD7HXft7-kFfc1j4cBYnIrj2YxBuziuEkexbLLqN8',
        duration: 300,
},
{
        id: 'mw-3',
        title: 'Nuvu Choodu Chudakapo Full Video Song _ Okatonumber Kurradu _ Taraka Ratna _ M.M.Keeravaani(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvu%20Choodu%20Chudakapo%20Full%20Video%20Song%20_%20Okatonumber%20Kurradu%20_%20Taraka%20Ratna%20_%20M.M.Keeravaani(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ1IENob29kdSBDaHVkYWthcG8gRnVsbCBWaWRlbyBTb25nIF8gT2thdG9udW1iZXIgS3VycmFkdSBfIFRhcmFrYSBSYXRuYSBfIE0uTS5LZWVyYXZhYW5pKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY0MzMsImV4cCI6MTc5ODUyMjQzM30.8ukuC6JtdTucGVurZgoXLkrdlPIiyaXu9Gs-DFK1F1Y',
        duration: 300,
},
{
        id: 'mw-4',
        title: 'Nuvvakkadunte Full Video Song - Gopi Gopika Godavari Video Songs - Venu_ Kamalini Mukherjee(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvakkadunte%20Full%20Video%20Song%20-%20Gopi%20Gopika%20Godavari%20Video%20Songs%20-%20Venu_%20Kamalini%20Mukherjee(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2YWtrYWR1bnRlIEZ1bGwgVmlkZW8gU29uZyAtIEdvcGkgR29waWthIEdvZGF2YXJpIFZpZGVvIFNvbmdzIC0gVmVudV8gS2FtYWxpbmkgTXVraGVyamVlKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY2NTQsImV4cCI6MTc5ODUyMjY1NH0.fsZ-cKFHhxZypjWb17ZhM5SKEDkqeSoS3Oxky2TQHBI',
        duration: 300,
},
{
        id: 'mw-5',
        title: 'Nuvve Kavali Movie Songs - Kallaloki Kallu Petti Chudavenduku -  Tarun_Richa_Sai Kiran(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Kavali%20Movie%20Songs%20-%20Kallaloki%20Kallu%20Petti%20Chudavenduku%20-%20%20Tarun_Richa_Sai%20Kiran(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBLYXZhbGkgTW92aWUgU29uZ3MgLSBLYWxsYWxva2kgS2FsbHUgUGV0dGkgQ2h1ZGF2ZW5kdWt1IC0gIFRhcnVuX1JpY2hhX1NhaSBLaXJhbihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2Nzg5LCJleHAiOjE3OTg1MjI3ODl9.dUOx-iE5c0bW_WfZHEFeNFgb6m_GhGpLgcsSj5lWmhE',
        duration: 300,
},
{
        id: 'mw-6',
        title: 'Nuvve Nuvve Kavalantundi Full Song With Telugu Lyrics II Chitra Hits  II Nuvve Nuvve Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Nuvve%20Kavalantundi%20Full%20Song%20With%20Telugu%20Lyrics%20II%20Chitra%20Hits%20%20II%20Nuvve%20Nuvve%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBOdXZ2ZSBLYXZhbGFudHVuZGkgRnVsbCBTb25nIFdpdGggVGVsdWd1IEx5cmljcyBJSSBDaGl0cmEgSGl0cyAgSUkgTnV2dmUgTnV2dmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgwMSwiZXhwIjoxNzk4NTIyODAxfQ.I4qD9ApfVa8u0EUrYlbpiA1qpAkQhM6rWHW_T6FWWW8',
        duration: 300,
},
{
        id: 'mw-7',
        title: 'Nuvvosthanante Song _ Varsham Movie Songs _ Prabhas _ Trisha _ DSP _ TeluguOne(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvosthanante%20Song%20_%20Varsham%20Movie%20Songs%20_%20Prabhas%20_%20Trisha%20_%20DSP%20_%20TeluguOne(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2b3N0aGFuYW50ZSBTb25nIF8gVmFyc2hhbSBNb3ZpZSBTb25ncyBfIFByYWJoYXMgXyBUcmlzaGEgXyBEU1AgXyBUZWx1Z3VPbmUoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgxMywiZXhwIjoxNzk4NTIyODEzfQ.PfYRRXGmmqBPO1pdsZTSKwut_tLsBuQrSEX-hUrw8iQ',
        duration: 300,
},
{
        id: 'mw-8',
        title: 'Nuvvu Nenu Kalisunte FULL VIDEO SONG  4K WITH 5.1 DTS AUDIO _  Gangothri _Allu Arjun_ Aditi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Kalisunte%20FULL%20VIDEO%20SONG%20%204K%20WITH%205.1%20DTS%20AUDIO%20_%20%20Gangothri%20_Allu%20Arjun_%20Aditi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IEthbGlzdW50ZSBGVUxMIFZJREVPIFNPTkcgIDRLIFdJVEggNS4xIERUUyBBVURJTyBfICBHYW5nb3RocmkgX0FsbHUgQXJqdW5fIEFkaXRpIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgyMywiZXhwIjoxNzk4NTIyODIzfQ.eNBKIHGiUMhW_U7SX5_zuSdPoW9ublfJIPNbJD0Y9FE',
        duration: 300,
},
{
        id: 'mw-9',
        title: 'Nuvvu Nenu Movie __ Nuvve Naku Pranam Video Song __ Uday Kiran_ Anitha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Movie%20__%20Nuvve%20Naku%20Pranam%20Video%20Song%20__%20Uday%20Kiran_%20Anitha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IE1vdmllIF9fIE51dnZlIE5ha3UgUHJhbmFtIFZpZGVvIFNvbmcgX18gVWRheSBLaXJhbl8gQW5pdGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4NTcsImV4cCI6MTc5ODUyMjg1N30.uQuh5q2luK4Aw0c2nsxbBwm6Uptx4dGkWkUiIxRqHLg',
        duration: 300,
},
{
        id: 'mw-10',
        title: 'Nuvvu Nuvvu Video Song _ Khadgam Full Video Songs _ Srikanth _ Sonali Bendre _ DSP _ Vega Music(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nuvvu%20Video%20Song%20_%20Khadgam%20Full%20Video%20Songs%20_%20Srikanth%20_%20Sonali%20Bendre%20_%20DSP%20_%20Vega%20Music(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOdXZ2dSBWaWRlbyBTb25nIF8gS2hhZGdhbSBGdWxsIFZpZGVvIFNvbmdzIF8gU3Jpa2FudGggXyBTb25hbGkgQmVuZHJlIF8gRFNQIF8gVmVnYSBNdXNpYyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2ODY4LCJleHAiOjE3OTg1MjI4Njh9.aw8syBzrIyIwFQbl4puIPyMjYdHvrcPIsDPRGjOKJx8',
        duration: 300,
},
{
        id: 'mw-11',
        title: 'O Manasa O Manasa Full Video Song - Bhadra Video Songs - Ravi Teja_ Meera Jasmine _ Telugu Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Manasa%20O%20Manasa%20Full%20Video%20Song%20-%20Bhadra%20Video%20Songs%20-%20Ravi%20Teja_%20Meera%20Jasmine%20_%20Telugu%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIE1hbmFzYSBPIE1hbmFzYSBGdWxsIFZpZGVvIFNvbmcgLSBCaGFkcmEgVmlkZW8gU29uZ3MgLSBSYXZpIFRlamFfIE1lZXJhIEphc21pbmUgXyBUZWx1Z3UgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njg3OCwiZXhwIjoxNzk4NTIyODc4fQ.hyD4A_razQlcHr-xNc0fK9xFzESoLmH9hyllGsi_0UY',
        duration: 300,
},
{
        id: 'mw-12',
        title: 'O Priyathama Full Video Song__ Nuvvu Naku Nachav (2001) Movie __ Venkatesh _ Aarthi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Priyathama%20Full%20Video%20Song__%20Nuvvu%20Naku%20Nachav%20(2001)%20Movie%20__%20Venkatesh%20_%20Aarthi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIFByaXlhdGhhbWEgRnVsbCBWaWRlbyBTb25nX18gTnV2dnUgTmFrdSBOYWNoYXYgKDIwMDEpIE1vdmllIF9fIFZlbmthdGVzaCBfIEFhcnRoaSBBZ2Fyd2FsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4ODgsImV4cCI6MTc5ODUyMjg4OH0.rSAqPUcSLbCJZEr3XFwLKfjQLhI8K42psHjZ4t2iSI8',
        duration: 300,
},
{
        id: 'mw-13',
        title: 'Oh Prema _ Deviputrudu _ Venkatesh_ Soundarya _ S. P. Balasubrahmanyam_ Prasanna _ Telugu Love Song(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oh%20Prema%20_%20Deviputrudu%20_%20Venkatesh_%20Soundarya%20_%20S.%20P.%20Balasubrahmanyam_%20Prasanna%20_%20Telugu%20Love%20Song(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PaCBQcmVtYSBfIERldmlwdXRydWR1IF8gVmVua2F0ZXNoXyBTb3VuZGFyeWEgXyBTLiBQLiBCYWxhc3VicmFobWFueWFtXyBQcmFzYW5uYSBfIFRlbHVndSBMb3ZlIFNvbmcoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkyMCwiZXhwIjoxNzk4NTIyOTIwfQ.T7Y_E7ruRCa3BGDC20QPbTC0Xweg4coSR3NtEr8X69c',
        duration: 300,
},
{
        id: 'mw-14',
        title: 'Oka Maru Kalisina __ Ghajini Movie Song __ Suriya_ Asin __ Volga Musicbox(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oka%20Maru%20Kalisina%20__%20Ghajini%20Movie%20Song%20__%20Suriya_%20Asin%20__%20Volga%20Musicbox(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2EgTWFydSBLYWxpc2luYSBfXyBHaGFqaW5pIE1vdmllIFNvbmcgX18gU3VyaXlhXyBBc2luIF9fIFZvbGdhIE11c2ljYm94KE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5MzAsImV4cCI6MTc5ODUyMjkzMH0.-hKExwNe5VOilzu0qAfEclqWCUHIbDOyvsVrrfDYvvs',
        duration: 300,
},
{
        id: 'mw-15',
        title: 'Okariki Okarai Video Song _ Student No.1 _ Jr NTR _ MM Keeravaani _ SS Rajamouli _Vyjayanthi Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Okariki%20Okarai%20Video%20Song%20_%20Student%20No.1%20_%20Jr%20NTR%20_%20MM%20Keeravaani%20_%20SS%20Rajamouli%20_Vyjayanthi%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2FyaWtpIE9rYXJhaSBWaWRlbyBTb25nIF8gU3R1ZGVudCBOby4xIF8gSnIgTlRSIF8gTU0gS2VlcmF2YWFuaSBfIFNTIFJhamFtb3VsaSBfVnlqYXlhbnRoaSBNb3ZpZXMoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkzOCwiZXhwIjoxNzk4NTIyOTM4fQ._kULZetwgVwYdG6GuH3NDhoZ-TipXqCnVBCv72VRMLw',
        duration: 300,
},
{
        id: 'mw-16',
        title: 'Oo Antava Mawa..Oo Oo Antava Video Song (Telugu) _ Pushpa Songs _ Allu Arjun_ DSP _Sukumar _Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oo%20Antava%20Mawa..Oo%20Oo%20Antava%20Video%20Song%20(Telugu)%20_%20Pushpa%20Songs%20_%20Allu%20Arjun_%20DSP%20_Sukumar%20_Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PbyBBbnRhdmEgTWF3YS4uT28gT28gQW50YXZhIFZpZGVvIFNvbmcgKFRlbHVndSkgXyBQdXNocGEgU29uZ3MgXyBBbGx1IEFyanVuXyBEU1AgX1N1a3VtYXIgX1NhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NTAsImV4cCI6MTc5ODUyMjk1MH0.C3JGOOYXJM41SOzLG2NhlptwBXyjpCxAcL6nRvjxrJU',
        duration: 300,
},
{
        id: 'mw-17',
        title: 'Oosupodu Full Video Song __ Fidaa Full Video Songs __ Varun Tej_ Sai Pallavi __ Sekhar Kammula(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oosupodu%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pb3N1cG9kdSBGdWxsIFZpZGVvIFNvbmcgX18gRmlkYWEgRnVsbCBWaWRlbyBTb25ncyBfXyBWYXJ1biBUZWpfIFNhaSBQYWxsYXZpIF9fIFNla2hhciBLYW1tdWxhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NjAsImV4cCI6MTc5ODUyMjk2MH0.Zh2DT7LOdEb8mkxYneB_8PkifyM_kJFYUzIrDjfonxA',
        duration: 300,
},
{
        id: 'mw-18',
        title: 'Orugalluke Pilla Full HD Video Song __ Sainikudu __ Mahesh Babu_ Trisha __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Orugalluke%20Pilla%20Full%20HD%20Video%20Song%20__%20Sainikudu%20__%20Mahesh%20Babu_%20Trisha%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PcnVnYWxsdWtlIFBpbGxhIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBTYWluaWt1ZHUgX18gTWFoZXNoIEJhYnVfIFRyaXNoYSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2OTcxLCJleHAiOjE3OTg1MjI5NzF9.r16_Vh8n5sBJnDl68Zoe2N38VDO6YsFNvcfStmtKN7U',
        duration: 300,
},
{
        id: 'mw-19',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadaara%20Full%20Song%20II%20Magadheera%20II%20Ram%20Charan%20Teja_%20Kajal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYWFyYSBGdWxsIFNvbmcgSUkgTWFnYWRoZWVyYSBJSSBSYW0gQ2hhcmFuIFRlamFfIEthamFsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NzksImV4cCI6MTc5ODUyMjk3OX0.pbdi6zMs1BIvrPNWHg1NyLyLFrAq1ElDBncCcBI3Va8',
        duration: 300,
},
{
        id: 'mw-20',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadara%20Bomma%20Full%20Video%20Song%20__%20Magadheera%20Movie%20__%20Ram%20Charan_%20Kajal%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYXJhIEJvbW1hIEZ1bGwgVmlkZW8gU29uZyBfXyBNYWdhZGhlZXJhIE1vdmllIF9fIFJhbSBDaGFyYW5fIEthamFsIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njk5MSwiZXhwIjoxNzk4NTIyOTkxfQ.7XUnyiH3nIOtdPzqbp5X4MDHEgNeMaoJfsLaR2VTO1k',
        duration: 300,
},
{
        id: 'mw-21',
        title: 'Pillaa Raa Video Song _ RX 100 _ Kartikeya _ Payal Rajput _ Anurag Kulkarni _ Chaitan Bharadwaj(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pillaa%20Raa%20Video%20Song%20_%20RX%20100%20_%20Kartikeya%20_%20Payal%20Rajput%20_%20Anurag%20Kulkarni%20_%20Chaitan%20Bharadwaj(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QaWxsYWEgUmFhIFZpZGVvIFNvbmcgXyBSWCAxMDAgXyBLYXJ0aWtleWEgXyBQYXlhbCBSYWpwdXQgXyBBbnVyYWcgS3Vsa2FybmkgXyBDaGFpdGFuIEJoYXJhZHdhaihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDA2LCJleHAiOjE3OTg1MjMwMDZ9.BMyyhJs6MU5Z0VxuX_2jrcsKQy0pnajv2S9lqhzjieE',
        duration: 300,
},
{
        id: 'mw-22',
        title: 'Poolamme Pilla _ HanuMan (Telugu) _ Prasanth Varma _Teja Sajja_ Amritha _ GowraHari _ Kasarla Shyam(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Poolamme%20Pilla%20_%20HanuMan%20(Telugu)%20_%20Prasanth%20Varma%20_Teja%20Sajja_%20Amritha%20_%20GowraHari%20_%20Kasarla%20Shyam(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qb29sYW1tZSBQaWxsYSBfIEhhbnVNYW4gKFRlbHVndSkgXyBQcmFzYW50aCBWYXJtYSBfVGVqYSBTYWpqYV8gQW1yaXRoYSBfIEdvd3JhSGFyaSBfIEthc2FybGEgU2h5YW0oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzA3OCwiZXhwIjoxNzk4NTIzMDc4fQ.8aBqUbZZMbLVTVce7-EJURN_K1Jo6OhFg5NM1TMUT4k',
        duration: 300,
},
{
        id: 'mw-23',
        title: 'Premalo -  8K Video _ Court _ Priyadarshi_ Harsh Roshan_ Sridevi _ Vijai Bulganin _ Ram Jagadeesh(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Premalo%20-%20%208K%20Video%20_%20Court%20_%20Priyadarshi_%20Harsh%20Roshan_%20Sridevi%20_%20Vijai%20Bulganin%20_%20Ram%20Jagadeesh(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QcmVtYWxvIC0gIDhLIFZpZGVvIF8gQ291cnQgXyBQcml5YWRhcnNoaV8gSGFyc2ggUm9zaGFuXyBTcmlkZXZpIF8gVmlqYWkgQnVsZ2FuaW4gXyBSYW0gSmFnYWRlZXNoKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcwODcsImV4cCI6MTc5ODUyMzA4N30.kw7SAVeO_V8CQUKskoQXFbYsHxLk8Javy8VKez-JlkI',
        duration: 300,
},
{
        id: 'mw-24',
        title: 'Priyathama Telusuna Full HD Video Song __ Jayam __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Priyathama%20Telusuna%20Full%20HD%20Video%20Song%20__%20Jayam%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qcml5YXRoYW1hIFRlbHVzdW5hIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBKYXlhbSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDk0LCJleHAiOjE3OTg1MjMwOTR9.yZ91HLET_yYM0mFzSAIM8PADvqRqMJuLC43WQx_rwLA',
        duration: 300,
},
{
        id: 'mw-25',
        title: 'PUSHPA PUSHPA Telugu Film Version - Pushpa 2 The Rule _ Allu Arjun _ Sukumar _ DSP(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/PUSHPA%20PUSHPA%20Telugu%20Film%20Version%20-%20Pushpa%202%20The%20Rule%20_%20Allu%20Arjun%20_%20Sukumar%20_%20DSP(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QVVNIUEEgUFVTSFBBIFRlbHVndSBGaWxtIFZlcnNpb24gLSBQdXNocGEgMiBUaGUgUnVsZSBfIEFsbHUgQXJqdW4gXyBTdWt1bWFyIF8gRFNQKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxMDUsImV4cCI6MTc5ODUyMzEwNX0.PstdjkfgWO5NKqTX5edsvSTEbz71VYKHrfYFtoz49Vk',
        duration: 300,
},
{
        id: 'mw-26',
        title: 'Pushpa_ Srivalli - Lyrical (Telugu) _ Allu Arjun_ Rashmika Mandanna _ Sid Sriram _ DSP _ Sukumar(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pushpa_%20Srivalli%20-%20Lyrical%20(Telugu)%20_%20Allu%20Arjun_%20Rashmika%20Mandanna%20_%20Sid%20Sriram%20_%20DSP%20_%20Sukumar(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QdXNocGFfIFNyaXZhbGxpIC0gTHlyaWNhbCAoVGVsdWd1KSBfIEFsbHUgQXJqdW5fIFJhc2htaWthIE1hbmRhbm5hIF8gU2lkIFNyaXJhbSBfIERTUCBfIFN1a3VtYXIoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzExNSwiZXhwIjoxNzk4NTIzMTE1fQ.HzKylZ4N9GtQX5dNw-Vl6LyQ11JoXdXSGdmEkAWTEPY',
        duration: 300,
},
{
        id: 'mw-27',
        title: 'Rambai Neemeedha Naku Video Song _ Raju Weds Rambai _ A ETV win Original production _ NOV 21(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rambai%20Neemeedha%20Naku%20Video%20Song%20_%20Raju%20Weds%20Rambai%20_%20A%20ETV%20win%20Original%20production%20_%20NOV%2021(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW1iYWkgTmVlbWVlZGhhIE5ha3UgVmlkZW8gU29uZyBfIFJhanUgV2VkcyBSYW1iYWkgXyBBIEVUViB3aW4gT3JpZ2luYWwgcHJvZHVjdGlvbiBfIE5PViAyMShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MTI0LCJleHAiOjE3OTg1MjMxMjR9.8YVc-D1MbGhOkPaTBo5pLBSy5GwDj1JrXZa4KlfbxSI',
        duration: 300,
},
{
        id: 'mw-28',
        title: 'Ramuloo Ramulaa Full Video _ Allu Arjun_ Pooja Hegde _ Ala Vaikunthapurramuloo _ Trivikram _ Thaman(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ramuloo%20Ramulaa%20Full%20Video%20_%20Allu%20Arjun_%20Pooja%20Hegde%20_%20Ala%20Vaikunthapurramuloo%20_%20Trivikram%20_%20Thaman(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW11bG9vIFJhbXVsYWEgRnVsbCBWaWRlbyBfIEFsbHUgQXJqdW5fIFBvb2phIEhlZ2RlIF8gQWxhIFZhaWt1bnRoYXB1cnJhbXVsb28gXyBUcml2aWtyYW0gXyBUaGFtYW4oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzEzNCwiZXhwIjoxNzk4NTIzMTM0fQ.I8xScN6uDOCfGiHqIjS4NVN4rrLx-okoPFz-8WMG-Rg',
        duration: 300,
},
{
        id: 'mw-29',
        title: 'Rangamma Mangamma Full Video Song _ Rangasthalam Video Songs _Ram Charan_ Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rangamma%20Mangamma%20Full%20Video%20Song%20_%20Rangasthalam%20Video%20Songs%20_Ram%20Charan_%20Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW5nYW1tYSBNYW5nYW1tYSBGdWxsIFZpZGVvIFNvbmcgXyBSYW5nYXN0aGFsYW0gVmlkZW8gU29uZ3MgX1JhbSBDaGFyYW5fIFNhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxNDUsImV4cCI6MTc5ODUyMzE0NX0._Tqfy6wRvy_arL0FxAM3Db32MggbXijlm_CCRDvtXzs',
        duration: 300,
},

{
        id: 'mw-30',
        title: 'Ranu Ranu Antune Chinnado Full Movie Videos Song _ Nithiin_ Sadha _ Telugu Videos(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ranu%20Ranu%20Antune%20Chinnado%20Full%20Movie%20Videos%20Song%20_%20Nithiin_%20Sadha%20_%20Telugu%20Videos(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW51IFJhbnUgQW50dW5lIENoaW5uYWRvIEZ1bGwgTW92aWUgVmlkZW9zIFNvbmcgXyBOaXRoaWluXyBTYWRoYSBfIFRlbHVndSBWaWRlb3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzE4NSwiZXhwIjoxNzk4NTIzMTg1fQ.QFwB2wVDiiXBpFDsDRNRgdZqyohHB-OSSqLTHV-yz50',
        duration: 300,
},
      {
        id: 'mw-31',
        title: 'Oke Oka Mata (Chakram)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chakram%20songs%20-%20Oke%20Oka%20Mata%20-%20Prabhas%20Asin%20Charmi(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-32',
        title: 'Chennai Chandrama',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-33',
        title: 'Edo Priyaragam (Aarya)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Edo%20Priyaragam%20Video%20Song%20__%20Aarya%20Video%20Songs%20__%20Allu%20Arjun_%20Anuradha%20Mehta(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-34',
        title: 'Hrudhayam (Parugu)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Hrudhayam%20Full%20Video%20Song%20_%20Parugu%20Video%20Songs%20_%20Allu%20Arjun_%20Sheela%20_%20Bhaskar%20_%20Mani%20Sharma(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-35',
        title: 'Violin Song (Iddarammayilatho)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Iddarammayilatho%20Video%20Songs%20_%20Violin%20Song%20(Girl%20Just)%20Video%20Song%20_%20Allu%20Arjun_%20Amala%20Paul(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-36',
        title: 'Megham Karigenu (Naaga)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Naaga%20Movie%20Video%20Songs%20__%20Megham%20Karigenu%20Video%20Song%20__%20Jr.NTR%20_%20Sada(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-37',
        title: 'Taal Se Taal Mila',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Taal%20Se%20Taal%20Mila%20_%20A.R%20Rahman%20_%20Alka%20Yagnik%20_%20Udit%20Narayan%20_%20Taal%20(1999)(M4A_128K).m4a',
        duration: 300,
      },
    ],
  },
  {
    id: 'playlist-3',
    name: 'Morning Vibes',
    startHour: 20, // 2:00 PM
    startMinute: 20,
    tracks: [
                  {
        id: 'mw-1',
        title: 'Vachinde Mellaga',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/_Vachinde%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9fVmFjaGluZGUgRnVsbCBWaWRlbyBTb25nIF9fIEZpZGFhIEZ1bGwgVmlkZW8gU29uZ3MgX18gVmFydW4gVGVqXyBTYWkgUGFsbGF2aSBfXyBTZWtoYXIgS2FtbXVsYShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2MzQxLCJleHAiOjE3OTg1MjIzNDF9.31giCxdfT-RVp3sXCjY1vJCCe6wtl37MIlg3A0laIV4',
        duration: 300,
},
{
        id: 'mw-2',
        title: 'Nuvante Nakistamani',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvante%20Nakistamani%20Full%20Song%20II%20Santhosham%20Movie%20II%20Nagarjuna_%20Shreya%20_%20Telugu%20Love%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZhbnRlIE5ha2lzdGFtYW5pIEZ1bGwgU29uZyBJSSBTYW50aG9zaGFtIE1vdmllIElJIE5hZ2FyanVuYV8gU2hyZXlhIF8gVGVsdWd1IExvdmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjQyMiwiZXhwIjoxNzk4NTIyNDIyfQ.cBHD7HXft7-kFfc1j4cBYnIrj2YxBuziuEkexbLLqN8',
        duration: 300,
},
{
        id: 'mw-3',
        title: 'Nuvu Choodu Chudakapo Full Video Song _ Okatonumber Kurradu _ Taraka Ratna _ M.M.Keeravaani(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvu%20Choodu%20Chudakapo%20Full%20Video%20Song%20_%20Okatonumber%20Kurradu%20_%20Taraka%20Ratna%20_%20M.M.Keeravaani(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ1IENob29kdSBDaHVkYWthcG8gRnVsbCBWaWRlbyBTb25nIF8gT2thdG9udW1iZXIgS3VycmFkdSBfIFRhcmFrYSBSYXRuYSBfIE0uTS5LZWVyYXZhYW5pKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY0MzMsImV4cCI6MTc5ODUyMjQzM30.8ukuC6JtdTucGVurZgoXLkrdlPIiyaXu9Gs-DFK1F1Y',
        duration: 300,
},
{
        id: 'mw-4',
        title: 'Nuvvakkadunte Full Video Song - Gopi Gopika Godavari Video Songs - Venu_ Kamalini Mukherjee(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvakkadunte%20Full%20Video%20Song%20-%20Gopi%20Gopika%20Godavari%20Video%20Songs%20-%20Venu_%20Kamalini%20Mukherjee(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2YWtrYWR1bnRlIEZ1bGwgVmlkZW8gU29uZyAtIEdvcGkgR29waWthIEdvZGF2YXJpIFZpZGVvIFNvbmdzIC0gVmVudV8gS2FtYWxpbmkgTXVraGVyamVlKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY2NTQsImV4cCI6MTc5ODUyMjY1NH0.fsZ-cKFHhxZypjWb17ZhM5SKEDkqeSoS3Oxky2TQHBI',
        duration: 300,
},
{
        id: 'mw-5',
        title: 'Nuvve Kavali Movie Songs - Kallaloki Kallu Petti Chudavenduku -  Tarun_Richa_Sai Kiran(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Kavali%20Movie%20Songs%20-%20Kallaloki%20Kallu%20Petti%20Chudavenduku%20-%20%20Tarun_Richa_Sai%20Kiran(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBLYXZhbGkgTW92aWUgU29uZ3MgLSBLYWxsYWxva2kgS2FsbHUgUGV0dGkgQ2h1ZGF2ZW5kdWt1IC0gIFRhcnVuX1JpY2hhX1NhaSBLaXJhbihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2Nzg5LCJleHAiOjE3OTg1MjI3ODl9.dUOx-iE5c0bW_WfZHEFeNFgb6m_GhGpLgcsSj5lWmhE',
        duration: 300,
},
{
        id: 'mw-6',
        title: 'Nuvve Nuvve Kavalantundi Full Song With Telugu Lyrics II Chitra Hits  II Nuvve Nuvve Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Nuvve%20Kavalantundi%20Full%20Song%20With%20Telugu%20Lyrics%20II%20Chitra%20Hits%20%20II%20Nuvve%20Nuvve%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBOdXZ2ZSBLYXZhbGFudHVuZGkgRnVsbCBTb25nIFdpdGggVGVsdWd1IEx5cmljcyBJSSBDaGl0cmEgSGl0cyAgSUkgTnV2dmUgTnV2dmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgwMSwiZXhwIjoxNzk4NTIyODAxfQ.I4qD9ApfVa8u0EUrYlbpiA1qpAkQhM6rWHW_T6FWWW8',
        duration: 300,
},
{
        id: 'mw-7',
        title: 'Nuvvosthanante Song _ Varsham Movie Songs _ Prabhas _ Trisha _ DSP _ TeluguOne(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvosthanante%20Song%20_%20Varsham%20Movie%20Songs%20_%20Prabhas%20_%20Trisha%20_%20DSP%20_%20TeluguOne(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2b3N0aGFuYW50ZSBTb25nIF8gVmFyc2hhbSBNb3ZpZSBTb25ncyBfIFByYWJoYXMgXyBUcmlzaGEgXyBEU1AgXyBUZWx1Z3VPbmUoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgxMywiZXhwIjoxNzk4NTIyODEzfQ.PfYRRXGmmqBPO1pdsZTSKwut_tLsBuQrSEX-hUrw8iQ',
        duration: 300,
},
{
        id: 'mw-8',
        title: 'Nuvvu Nenu Kalisunte FULL VIDEO SONG  4K WITH 5.1 DTS AUDIO _  Gangothri _Allu Arjun_ Aditi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Kalisunte%20FULL%20VIDEO%20SONG%20%204K%20WITH%205.1%20DTS%20AUDIO%20_%20%20Gangothri%20_Allu%20Arjun_%20Aditi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IEthbGlzdW50ZSBGVUxMIFZJREVPIFNPTkcgIDRLIFdJVEggNS4xIERUUyBBVURJTyBfICBHYW5nb3RocmkgX0FsbHUgQXJqdW5fIEFkaXRpIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgyMywiZXhwIjoxNzk4NTIyODIzfQ.eNBKIHGiUMhW_U7SX5_zuSdPoW9ublfJIPNbJD0Y9FE',
        duration: 300,
},
{
        id: 'mw-9',
        title: 'Nuvvu Nenu Movie __ Nuvve Naku Pranam Video Song __ Uday Kiran_ Anitha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Movie%20__%20Nuvve%20Naku%20Pranam%20Video%20Song%20__%20Uday%20Kiran_%20Anitha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IE1vdmllIF9fIE51dnZlIE5ha3UgUHJhbmFtIFZpZGVvIFNvbmcgX18gVWRheSBLaXJhbl8gQW5pdGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4NTcsImV4cCI6MTc5ODUyMjg1N30.uQuh5q2luK4Aw0c2nsxbBwm6Uptx4dGkWkUiIxRqHLg',
        duration: 300,
},
{
        id: 'mw-10',
        title: 'Nuvvu Nuvvu Video Song _ Khadgam Full Video Songs _ Srikanth _ Sonali Bendre _ DSP _ Vega Music(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nuvvu%20Video%20Song%20_%20Khadgam%20Full%20Video%20Songs%20_%20Srikanth%20_%20Sonali%20Bendre%20_%20DSP%20_%20Vega%20Music(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOdXZ2dSBWaWRlbyBTb25nIF8gS2hhZGdhbSBGdWxsIFZpZGVvIFNvbmdzIF8gU3Jpa2FudGggXyBTb25hbGkgQmVuZHJlIF8gRFNQIF8gVmVnYSBNdXNpYyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2ODY4LCJleHAiOjE3OTg1MjI4Njh9.aw8syBzrIyIwFQbl4puIPyMjYdHvrcPIsDPRGjOKJx8',
        duration: 300,
},
{
        id: 'mw-11',
        title: 'O Manasa O Manasa Full Video Song - Bhadra Video Songs - Ravi Teja_ Meera Jasmine _ Telugu Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Manasa%20O%20Manasa%20Full%20Video%20Song%20-%20Bhadra%20Video%20Songs%20-%20Ravi%20Teja_%20Meera%20Jasmine%20_%20Telugu%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIE1hbmFzYSBPIE1hbmFzYSBGdWxsIFZpZGVvIFNvbmcgLSBCaGFkcmEgVmlkZW8gU29uZ3MgLSBSYXZpIFRlamFfIE1lZXJhIEphc21pbmUgXyBUZWx1Z3UgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njg3OCwiZXhwIjoxNzk4NTIyODc4fQ.hyD4A_razQlcHr-xNc0fK9xFzESoLmH9hyllGsi_0UY',
        duration: 300,
},
{
        id: 'mw-12',
        title: 'O Priyathama Full Video Song__ Nuvvu Naku Nachav (2001) Movie __ Venkatesh _ Aarthi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Priyathama%20Full%20Video%20Song__%20Nuvvu%20Naku%20Nachav%20(2001)%20Movie%20__%20Venkatesh%20_%20Aarthi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIFByaXlhdGhhbWEgRnVsbCBWaWRlbyBTb25nX18gTnV2dnUgTmFrdSBOYWNoYXYgKDIwMDEpIE1vdmllIF9fIFZlbmthdGVzaCBfIEFhcnRoaSBBZ2Fyd2FsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4ODgsImV4cCI6MTc5ODUyMjg4OH0.rSAqPUcSLbCJZEr3XFwLKfjQLhI8K42psHjZ4t2iSI8',
        duration: 300,
},
{
        id: 'mw-13',
        title: 'Oh Prema _ Deviputrudu _ Venkatesh_ Soundarya _ S. P. Balasubrahmanyam_ Prasanna _ Telugu Love Song(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oh%20Prema%20_%20Deviputrudu%20_%20Venkatesh_%20Soundarya%20_%20S.%20P.%20Balasubrahmanyam_%20Prasanna%20_%20Telugu%20Love%20Song(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PaCBQcmVtYSBfIERldmlwdXRydWR1IF8gVmVua2F0ZXNoXyBTb3VuZGFyeWEgXyBTLiBQLiBCYWxhc3VicmFobWFueWFtXyBQcmFzYW5uYSBfIFRlbHVndSBMb3ZlIFNvbmcoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkyMCwiZXhwIjoxNzk4NTIyOTIwfQ.T7Y_E7ruRCa3BGDC20QPbTC0Xweg4coSR3NtEr8X69c',
        duration: 300,
},
{
        id: 'mw-14',
        title: 'Oka Maru Kalisina __ Ghajini Movie Song __ Suriya_ Asin __ Volga Musicbox(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oka%20Maru%20Kalisina%20__%20Ghajini%20Movie%20Song%20__%20Suriya_%20Asin%20__%20Volga%20Musicbox(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2EgTWFydSBLYWxpc2luYSBfXyBHaGFqaW5pIE1vdmllIFNvbmcgX18gU3VyaXlhXyBBc2luIF9fIFZvbGdhIE11c2ljYm94KE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5MzAsImV4cCI6MTc5ODUyMjkzMH0.-hKExwNe5VOilzu0qAfEclqWCUHIbDOyvsVrrfDYvvs',
        duration: 300,
},
{
        id: 'mw-15',
        title: 'Okariki Okarai Video Song _ Student No.1 _ Jr NTR _ MM Keeravaani _ SS Rajamouli _Vyjayanthi Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Okariki%20Okarai%20Video%20Song%20_%20Student%20No.1%20_%20Jr%20NTR%20_%20MM%20Keeravaani%20_%20SS%20Rajamouli%20_Vyjayanthi%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2FyaWtpIE9rYXJhaSBWaWRlbyBTb25nIF8gU3R1ZGVudCBOby4xIF8gSnIgTlRSIF8gTU0gS2VlcmF2YWFuaSBfIFNTIFJhamFtb3VsaSBfVnlqYXlhbnRoaSBNb3ZpZXMoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkzOCwiZXhwIjoxNzk4NTIyOTM4fQ._kULZetwgVwYdG6GuH3NDhoZ-TipXqCnVBCv72VRMLw',
        duration: 300,
},
{
        id: 'mw-16',
        title: 'Oo Antava Mawa..Oo Oo Antava Video Song (Telugu) _ Pushpa Songs _ Allu Arjun_ DSP _Sukumar _Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oo%20Antava%20Mawa..Oo%20Oo%20Antava%20Video%20Song%20(Telugu)%20_%20Pushpa%20Songs%20_%20Allu%20Arjun_%20DSP%20_Sukumar%20_Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PbyBBbnRhdmEgTWF3YS4uT28gT28gQW50YXZhIFZpZGVvIFNvbmcgKFRlbHVndSkgXyBQdXNocGEgU29uZ3MgXyBBbGx1IEFyanVuXyBEU1AgX1N1a3VtYXIgX1NhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NTAsImV4cCI6MTc5ODUyMjk1MH0.C3JGOOYXJM41SOzLG2NhlptwBXyjpCxAcL6nRvjxrJU',
        duration: 300,
},
{
        id: 'mw-17',
        title: 'Oosupodu Full Video Song __ Fidaa Full Video Songs __ Varun Tej_ Sai Pallavi __ Sekhar Kammula(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oosupodu%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pb3N1cG9kdSBGdWxsIFZpZGVvIFNvbmcgX18gRmlkYWEgRnVsbCBWaWRlbyBTb25ncyBfXyBWYXJ1biBUZWpfIFNhaSBQYWxsYXZpIF9fIFNla2hhciBLYW1tdWxhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NjAsImV4cCI6MTc5ODUyMjk2MH0.Zh2DT7LOdEb8mkxYneB_8PkifyM_kJFYUzIrDjfonxA',
        duration: 300,
},
{
        id: 'mw-18',
        title: 'Orugalluke Pilla Full HD Video Song __ Sainikudu __ Mahesh Babu_ Trisha __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Orugalluke%20Pilla%20Full%20HD%20Video%20Song%20__%20Sainikudu%20__%20Mahesh%20Babu_%20Trisha%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PcnVnYWxsdWtlIFBpbGxhIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBTYWluaWt1ZHUgX18gTWFoZXNoIEJhYnVfIFRyaXNoYSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2OTcxLCJleHAiOjE3OTg1MjI5NzF9.r16_Vh8n5sBJnDl68Zoe2N38VDO6YsFNvcfStmtKN7U',
        duration: 300,
},
{
        id: 'mw-19',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadaara%20Full%20Song%20II%20Magadheera%20II%20Ram%20Charan%20Teja_%20Kajal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYWFyYSBGdWxsIFNvbmcgSUkgTWFnYWRoZWVyYSBJSSBSYW0gQ2hhcmFuIFRlamFfIEthamFsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NzksImV4cCI6MTc5ODUyMjk3OX0.pbdi6zMs1BIvrPNWHg1NyLyLFrAq1ElDBncCcBI3Va8',
        duration: 300,
},
{
        id: 'mw-20',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadara%20Bomma%20Full%20Video%20Song%20__%20Magadheera%20Movie%20__%20Ram%20Charan_%20Kajal%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYXJhIEJvbW1hIEZ1bGwgVmlkZW8gU29uZyBfXyBNYWdhZGhlZXJhIE1vdmllIF9fIFJhbSBDaGFyYW5fIEthamFsIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njk5MSwiZXhwIjoxNzk4NTIyOTkxfQ.7XUnyiH3nIOtdPzqbp5X4MDHEgNeMaoJfsLaR2VTO1k',
        duration: 300,
},
{
        id: 'mw-21',
        title: 'Pillaa Raa Video Song _ RX 100 _ Kartikeya _ Payal Rajput _ Anurag Kulkarni _ Chaitan Bharadwaj(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pillaa%20Raa%20Video%20Song%20_%20RX%20100%20_%20Kartikeya%20_%20Payal%20Rajput%20_%20Anurag%20Kulkarni%20_%20Chaitan%20Bharadwaj(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QaWxsYWEgUmFhIFZpZGVvIFNvbmcgXyBSWCAxMDAgXyBLYXJ0aWtleWEgXyBQYXlhbCBSYWpwdXQgXyBBbnVyYWcgS3Vsa2FybmkgXyBDaGFpdGFuIEJoYXJhZHdhaihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDA2LCJleHAiOjE3OTg1MjMwMDZ9.BMyyhJs6MU5Z0VxuX_2jrcsKQy0pnajv2S9lqhzjieE',
        duration: 300,
},
{
        id: 'mw-22',
        title: 'Poolamme Pilla _ HanuMan (Telugu) _ Prasanth Varma _Teja Sajja_ Amritha _ GowraHari _ Kasarla Shyam(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Poolamme%20Pilla%20_%20HanuMan%20(Telugu)%20_%20Prasanth%20Varma%20_Teja%20Sajja_%20Amritha%20_%20GowraHari%20_%20Kasarla%20Shyam(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qb29sYW1tZSBQaWxsYSBfIEhhbnVNYW4gKFRlbHVndSkgXyBQcmFzYW50aCBWYXJtYSBfVGVqYSBTYWpqYV8gQW1yaXRoYSBfIEdvd3JhSGFyaSBfIEthc2FybGEgU2h5YW0oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzA3OCwiZXhwIjoxNzk4NTIzMDc4fQ.8aBqUbZZMbLVTVce7-EJURN_K1Jo6OhFg5NM1TMUT4k',
        duration: 300,
},
{
        id: 'mw-23',
        title: 'Premalo -  8K Video _ Court _ Priyadarshi_ Harsh Roshan_ Sridevi _ Vijai Bulganin _ Ram Jagadeesh(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Premalo%20-%20%208K%20Video%20_%20Court%20_%20Priyadarshi_%20Harsh%20Roshan_%20Sridevi%20_%20Vijai%20Bulganin%20_%20Ram%20Jagadeesh(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QcmVtYWxvIC0gIDhLIFZpZGVvIF8gQ291cnQgXyBQcml5YWRhcnNoaV8gSGFyc2ggUm9zaGFuXyBTcmlkZXZpIF8gVmlqYWkgQnVsZ2FuaW4gXyBSYW0gSmFnYWRlZXNoKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcwODcsImV4cCI6MTc5ODUyMzA4N30.kw7SAVeO_V8CQUKskoQXFbYsHxLk8Javy8VKez-JlkI',
        duration: 300,
},
{
        id: 'mw-24',
        title: 'Priyathama Telusuna Full HD Video Song __ Jayam __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Priyathama%20Telusuna%20Full%20HD%20Video%20Song%20__%20Jayam%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qcml5YXRoYW1hIFRlbHVzdW5hIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBKYXlhbSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDk0LCJleHAiOjE3OTg1MjMwOTR9.yZ91HLET_yYM0mFzSAIM8PADvqRqMJuLC43WQx_rwLA',
        duration: 300,
},
{
        id: 'mw-25',
        title: 'PUSHPA PUSHPA Telugu Film Version - Pushpa 2 The Rule _ Allu Arjun _ Sukumar _ DSP(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/PUSHPA%20PUSHPA%20Telugu%20Film%20Version%20-%20Pushpa%202%20The%20Rule%20_%20Allu%20Arjun%20_%20Sukumar%20_%20DSP(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QVVNIUEEgUFVTSFBBIFRlbHVndSBGaWxtIFZlcnNpb24gLSBQdXNocGEgMiBUaGUgUnVsZSBfIEFsbHUgQXJqdW4gXyBTdWt1bWFyIF8gRFNQKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxMDUsImV4cCI6MTc5ODUyMzEwNX0.PstdjkfgWO5NKqTX5edsvSTEbz71VYKHrfYFtoz49Vk',
        duration: 300,
},
{
        id: 'mw-26',
        title: 'Pushpa_ Srivalli - Lyrical (Telugu) _ Allu Arjun_ Rashmika Mandanna _ Sid Sriram _ DSP _ Sukumar(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pushpa_%20Srivalli%20-%20Lyrical%20(Telugu)%20_%20Allu%20Arjun_%20Rashmika%20Mandanna%20_%20Sid%20Sriram%20_%20DSP%20_%20Sukumar(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QdXNocGFfIFNyaXZhbGxpIC0gTHlyaWNhbCAoVGVsdWd1KSBfIEFsbHUgQXJqdW5fIFJhc2htaWthIE1hbmRhbm5hIF8gU2lkIFNyaXJhbSBfIERTUCBfIFN1a3VtYXIoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzExNSwiZXhwIjoxNzk4NTIzMTE1fQ.HzKylZ4N9GtQX5dNw-Vl6LyQ11JoXdXSGdmEkAWTEPY',
        duration: 300,
},
{
        id: 'mw-27',
        title: 'Rambai Neemeedha Naku Video Song _ Raju Weds Rambai _ A ETV win Original production _ NOV 21(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rambai%20Neemeedha%20Naku%20Video%20Song%20_%20Raju%20Weds%20Rambai%20_%20A%20ETV%20win%20Original%20production%20_%20NOV%2021(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW1iYWkgTmVlbWVlZGhhIE5ha3UgVmlkZW8gU29uZyBfIFJhanUgV2VkcyBSYW1iYWkgXyBBIEVUViB3aW4gT3JpZ2luYWwgcHJvZHVjdGlvbiBfIE5PViAyMShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MTI0LCJleHAiOjE3OTg1MjMxMjR9.8YVc-D1MbGhOkPaTBo5pLBSy5GwDj1JrXZa4KlfbxSI',
        duration: 300,
},
{
        id: 'mw-28',
        title: 'Ramuloo Ramulaa Full Video _ Allu Arjun_ Pooja Hegde _ Ala Vaikunthapurramuloo _ Trivikram _ Thaman(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ramuloo%20Ramulaa%20Full%20Video%20_%20Allu%20Arjun_%20Pooja%20Hegde%20_%20Ala%20Vaikunthapurramuloo%20_%20Trivikram%20_%20Thaman(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW11bG9vIFJhbXVsYWEgRnVsbCBWaWRlbyBfIEFsbHUgQXJqdW5fIFBvb2phIEhlZ2RlIF8gQWxhIFZhaWt1bnRoYXB1cnJhbXVsb28gXyBUcml2aWtyYW0gXyBUaGFtYW4oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzEzNCwiZXhwIjoxNzk4NTIzMTM0fQ.I8xScN6uDOCfGiHqIjS4NVN4rrLx-okoPFz-8WMG-Rg',
        duration: 300,
},
{
        id: 'mw-29',
        title: 'Rangamma Mangamma Full Video Song _ Rangasthalam Video Songs _Ram Charan_ Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rangamma%20Mangamma%20Full%20Video%20Song%20_%20Rangasthalam%20Video%20Songs%20_Ram%20Charan_%20Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW5nYW1tYSBNYW5nYW1tYSBGdWxsIFZpZGVvIFNvbmcgXyBSYW5nYXN0aGFsYW0gVmlkZW8gU29uZ3MgX1JhbSBDaGFyYW5fIFNhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxNDUsImV4cCI6MTc5ODUyMzE0NX0._Tqfy6wRvy_arL0FxAM3Db32MggbXijlm_CCRDvtXzs',
        duration: 300,
},

{
        id: 'mw-30',
        title: 'Ranu Ranu Antune Chinnado Full Movie Videos Song _ Nithiin_ Sadha _ Telugu Videos(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ranu%20Ranu%20Antune%20Chinnado%20Full%20Movie%20Videos%20Song%20_%20Nithiin_%20Sadha%20_%20Telugu%20Videos(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW51IFJhbnUgQW50dW5lIENoaW5uYWRvIEZ1bGwgTW92aWUgVmlkZW9zIFNvbmcgXyBOaXRoaWluXyBTYWRoYSBfIFRlbHVndSBWaWRlb3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzE4NSwiZXhwIjoxNzk4NTIzMTg1fQ.QFwB2wVDiiXBpFDsDRNRgdZqyohHB-OSSqLTHV-yz50',
        duration: 300,
},
      {
        id: 'mw-31',
        title: 'Oke Oka Mata (Chakram)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chakram%20songs%20-%20Oke%20Oka%20Mata%20-%20Prabhas%20Asin%20Charmi(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-32',
        title: 'Chennai Chandrama',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-33',
        title: 'Edo Priyaragam (Aarya)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Edo%20Priyaragam%20Video%20Song%20__%20Aarya%20Video%20Songs%20__%20Allu%20Arjun_%20Anuradha%20Mehta(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-34',
        title: 'Hrudhayam (Parugu)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Hrudhayam%20Full%20Video%20Song%20_%20Parugu%20Video%20Songs%20_%20Allu%20Arjun_%20Sheela%20_%20Bhaskar%20_%20Mani%20Sharma(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-35',
        title: 'Violin Song (Iddarammayilatho)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Iddarammayilatho%20Video%20Songs%20_%20Violin%20Song%20(Girl%20Just)%20Video%20Song%20_%20Allu%20Arjun_%20Amala%20Paul(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-36',
        title: 'Megham Karigenu (Naaga)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Naaga%20Movie%20Video%20Songs%20__%20Megham%20Karigenu%20Video%20Song%20__%20Jr.NTR%20_%20Sada(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-37',
        title: 'Taal Se Taal Mila',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Taal%20Se%20Taal%20Mila%20_%20A.R%20Rahman%20_%20Alka%20Yagnik%20_%20Udit%20Narayan%20_%20Taal%20(1999)(M4A_128K).m4a',
        duration: 300,
      },
    ],
  },
  {
    id: 'playlist-4',
    name: 'Afternoon Vibes',
    startHour: 1, // 2:00 PM
    startMinute: 0,
    tracks: [
                       {
        id: 'mw-1',
        title: 'Vachinde Mellaga',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/_Vachinde%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9fVmFjaGluZGUgRnVsbCBWaWRlbyBTb25nIF9fIEZpZGFhIEZ1bGwgVmlkZW8gU29uZ3MgX18gVmFydW4gVGVqXyBTYWkgUGFsbGF2aSBfXyBTZWtoYXIgS2FtbXVsYShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2MzQxLCJleHAiOjE3OTg1MjIzNDF9.31giCxdfT-RVp3sXCjY1vJCCe6wtl37MIlg3A0laIV4',
        duration: 300,
},
{
        id: 'mw-2',
        title: 'Nuvante Nakistamani',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvante%20Nakistamani%20Full%20Song%20II%20Santhosham%20Movie%20II%20Nagarjuna_%20Shreya%20_%20Telugu%20Love%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZhbnRlIE5ha2lzdGFtYW5pIEZ1bGwgU29uZyBJSSBTYW50aG9zaGFtIE1vdmllIElJIE5hZ2FyanVuYV8gU2hyZXlhIF8gVGVsdWd1IExvdmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjQyMiwiZXhwIjoxNzk4NTIyNDIyfQ.cBHD7HXft7-kFfc1j4cBYnIrj2YxBuziuEkexbLLqN8',
        duration: 300,
},
{
        id: 'mw-3',
        title: 'Nuvu Choodu Chudakapo Full Video Song _ Okatonumber Kurradu _ Taraka Ratna _ M.M.Keeravaani(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvu%20Choodu%20Chudakapo%20Full%20Video%20Song%20_%20Okatonumber%20Kurradu%20_%20Taraka%20Ratna%20_%20M.M.Keeravaani(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ1IENob29kdSBDaHVkYWthcG8gRnVsbCBWaWRlbyBTb25nIF8gT2thdG9udW1iZXIgS3VycmFkdSBfIFRhcmFrYSBSYXRuYSBfIE0uTS5LZWVyYXZhYW5pKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY0MzMsImV4cCI6MTc5ODUyMjQzM30.8ukuC6JtdTucGVurZgoXLkrdlPIiyaXu9Gs-DFK1F1Y',
        duration: 300,
},
{
        id: 'mw-4',
        title: 'Nuvvakkadunte Full Video Song - Gopi Gopika Godavari Video Songs - Venu_ Kamalini Mukherjee(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvakkadunte%20Full%20Video%20Song%20-%20Gopi%20Gopika%20Godavari%20Video%20Songs%20-%20Venu_%20Kamalini%20Mukherjee(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2YWtrYWR1bnRlIEZ1bGwgVmlkZW8gU29uZyAtIEdvcGkgR29waWthIEdvZGF2YXJpIFZpZGVvIFNvbmdzIC0gVmVudV8gS2FtYWxpbmkgTXVraGVyamVlKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY2NTQsImV4cCI6MTc5ODUyMjY1NH0.fsZ-cKFHhxZypjWb17ZhM5SKEDkqeSoS3Oxky2TQHBI',
        duration: 300,
},
{
        id: 'mw-5',
        title: 'Nuvve Kavali Movie Songs - Kallaloki Kallu Petti Chudavenduku -  Tarun_Richa_Sai Kiran(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Kavali%20Movie%20Songs%20-%20Kallaloki%20Kallu%20Petti%20Chudavenduku%20-%20%20Tarun_Richa_Sai%20Kiran(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBLYXZhbGkgTW92aWUgU29uZ3MgLSBLYWxsYWxva2kgS2FsbHUgUGV0dGkgQ2h1ZGF2ZW5kdWt1IC0gIFRhcnVuX1JpY2hhX1NhaSBLaXJhbihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2Nzg5LCJleHAiOjE3OTg1MjI3ODl9.dUOx-iE5c0bW_WfZHEFeNFgb6m_GhGpLgcsSj5lWmhE',
        duration: 300,
},
{
        id: 'mw-6',
        title: 'Nuvve Nuvve Kavalantundi Full Song With Telugu Lyrics II Chitra Hits  II Nuvve Nuvve Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Nuvve%20Kavalantundi%20Full%20Song%20With%20Telugu%20Lyrics%20II%20Chitra%20Hits%20%20II%20Nuvve%20Nuvve%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBOdXZ2ZSBLYXZhbGFudHVuZGkgRnVsbCBTb25nIFdpdGggVGVsdWd1IEx5cmljcyBJSSBDaGl0cmEgSGl0cyAgSUkgTnV2dmUgTnV2dmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgwMSwiZXhwIjoxNzk4NTIyODAxfQ.I4qD9ApfVa8u0EUrYlbpiA1qpAkQhM6rWHW_T6FWWW8',
        duration: 300,
},
{
        id: 'mw-7',
        title: 'Nuvvosthanante Song _ Varsham Movie Songs _ Prabhas _ Trisha _ DSP _ TeluguOne(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvosthanante%20Song%20_%20Varsham%20Movie%20Songs%20_%20Prabhas%20_%20Trisha%20_%20DSP%20_%20TeluguOne(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2b3N0aGFuYW50ZSBTb25nIF8gVmFyc2hhbSBNb3ZpZSBTb25ncyBfIFByYWJoYXMgXyBUcmlzaGEgXyBEU1AgXyBUZWx1Z3VPbmUoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgxMywiZXhwIjoxNzk4NTIyODEzfQ.PfYRRXGmmqBPO1pdsZTSKwut_tLsBuQrSEX-hUrw8iQ',
        duration: 300,
},
{
        id: 'mw-8',
        title: 'Nuvvu Nenu Kalisunte FULL VIDEO SONG  4K WITH 5.1 DTS AUDIO _  Gangothri _Allu Arjun_ Aditi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Kalisunte%20FULL%20VIDEO%20SONG%20%204K%20WITH%205.1%20DTS%20AUDIO%20_%20%20Gangothri%20_Allu%20Arjun_%20Aditi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IEthbGlzdW50ZSBGVUxMIFZJREVPIFNPTkcgIDRLIFdJVEggNS4xIERUUyBBVURJTyBfICBHYW5nb3RocmkgX0FsbHUgQXJqdW5fIEFkaXRpIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgyMywiZXhwIjoxNzk4NTIyODIzfQ.eNBKIHGiUMhW_U7SX5_zuSdPoW9ublfJIPNbJD0Y9FE',
        duration: 300,
},
{
        id: 'mw-9',
        title: 'Nuvvu Nenu Movie __ Nuvve Naku Pranam Video Song __ Uday Kiran_ Anitha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Movie%20__%20Nuvve%20Naku%20Pranam%20Video%20Song%20__%20Uday%20Kiran_%20Anitha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IE1vdmllIF9fIE51dnZlIE5ha3UgUHJhbmFtIFZpZGVvIFNvbmcgX18gVWRheSBLaXJhbl8gQW5pdGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4NTcsImV4cCI6MTc5ODUyMjg1N30.uQuh5q2luK4Aw0c2nsxbBwm6Uptx4dGkWkUiIxRqHLg',
        duration: 300,
},
{
        id: 'mw-10',
        title: 'Nuvvu Nuvvu Video Song _ Khadgam Full Video Songs _ Srikanth _ Sonali Bendre _ DSP _ Vega Music(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nuvvu%20Video%20Song%20_%20Khadgam%20Full%20Video%20Songs%20_%20Srikanth%20_%20Sonali%20Bendre%20_%20DSP%20_%20Vega%20Music(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOdXZ2dSBWaWRlbyBTb25nIF8gS2hhZGdhbSBGdWxsIFZpZGVvIFNvbmdzIF8gU3Jpa2FudGggXyBTb25hbGkgQmVuZHJlIF8gRFNQIF8gVmVnYSBNdXNpYyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2ODY4LCJleHAiOjE3OTg1MjI4Njh9.aw8syBzrIyIwFQbl4puIPyMjYdHvrcPIsDPRGjOKJx8',
        duration: 300,
},
{
        id: 'mw-11',
        title: 'O Manasa O Manasa Full Video Song - Bhadra Video Songs - Ravi Teja_ Meera Jasmine _ Telugu Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Manasa%20O%20Manasa%20Full%20Video%20Song%20-%20Bhadra%20Video%20Songs%20-%20Ravi%20Teja_%20Meera%20Jasmine%20_%20Telugu%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIE1hbmFzYSBPIE1hbmFzYSBGdWxsIFZpZGVvIFNvbmcgLSBCaGFkcmEgVmlkZW8gU29uZ3MgLSBSYXZpIFRlamFfIE1lZXJhIEphc21pbmUgXyBUZWx1Z3UgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njg3OCwiZXhwIjoxNzk4NTIyODc4fQ.hyD4A_razQlcHr-xNc0fK9xFzESoLmH9hyllGsi_0UY',
        duration: 300,
},
{
        id: 'mw-12',
        title: 'O Priyathama Full Video Song__ Nuvvu Naku Nachav (2001) Movie __ Venkatesh _ Aarthi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Priyathama%20Full%20Video%20Song__%20Nuvvu%20Naku%20Nachav%20(2001)%20Movie%20__%20Venkatesh%20_%20Aarthi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIFByaXlhdGhhbWEgRnVsbCBWaWRlbyBTb25nX18gTnV2dnUgTmFrdSBOYWNoYXYgKDIwMDEpIE1vdmllIF9fIFZlbmthdGVzaCBfIEFhcnRoaSBBZ2Fyd2FsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4ODgsImV4cCI6MTc5ODUyMjg4OH0.rSAqPUcSLbCJZEr3XFwLKfjQLhI8K42psHjZ4t2iSI8',
        duration: 300,
},
{
        id: 'mw-13',
        title: 'Oh Prema _ Deviputrudu _ Venkatesh_ Soundarya _ S. P. Balasubrahmanyam_ Prasanna _ Telugu Love Song(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oh%20Prema%20_%20Deviputrudu%20_%20Venkatesh_%20Soundarya%20_%20S.%20P.%20Balasubrahmanyam_%20Prasanna%20_%20Telugu%20Love%20Song(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PaCBQcmVtYSBfIERldmlwdXRydWR1IF8gVmVua2F0ZXNoXyBTb3VuZGFyeWEgXyBTLiBQLiBCYWxhc3VicmFobWFueWFtXyBQcmFzYW5uYSBfIFRlbHVndSBMb3ZlIFNvbmcoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkyMCwiZXhwIjoxNzk4NTIyOTIwfQ.T7Y_E7ruRCa3BGDC20QPbTC0Xweg4coSR3NtEr8X69c',
        duration: 300,
},
{
        id: 'mw-14',
        title: 'Oka Maru Kalisina __ Ghajini Movie Song __ Suriya_ Asin __ Volga Musicbox(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oka%20Maru%20Kalisina%20__%20Ghajini%20Movie%20Song%20__%20Suriya_%20Asin%20__%20Volga%20Musicbox(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2EgTWFydSBLYWxpc2luYSBfXyBHaGFqaW5pIE1vdmllIFNvbmcgX18gU3VyaXlhXyBBc2luIF9fIFZvbGdhIE11c2ljYm94KE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5MzAsImV4cCI6MTc5ODUyMjkzMH0.-hKExwNe5VOilzu0qAfEclqWCUHIbDOyvsVrrfDYvvs',
        duration: 300,
},
{
        id: 'mw-15',
        title: 'Okariki Okarai Video Song _ Student No.1 _ Jr NTR _ MM Keeravaani _ SS Rajamouli _Vyjayanthi Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Okariki%20Okarai%20Video%20Song%20_%20Student%20No.1%20_%20Jr%20NTR%20_%20MM%20Keeravaani%20_%20SS%20Rajamouli%20_Vyjayanthi%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2FyaWtpIE9rYXJhaSBWaWRlbyBTb25nIF8gU3R1ZGVudCBOby4xIF8gSnIgTlRSIF8gTU0gS2VlcmF2YWFuaSBfIFNTIFJhamFtb3VsaSBfVnlqYXlhbnRoaSBNb3ZpZXMoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkzOCwiZXhwIjoxNzk4NTIyOTM4fQ._kULZetwgVwYdG6GuH3NDhoZ-TipXqCnVBCv72VRMLw',
        duration: 300,
},
{
        id: 'mw-16',
        title: 'Oo Antava Mawa..Oo Oo Antava Video Song (Telugu) _ Pushpa Songs _ Allu Arjun_ DSP _Sukumar _Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oo%20Antava%20Mawa..Oo%20Oo%20Antava%20Video%20Song%20(Telugu)%20_%20Pushpa%20Songs%20_%20Allu%20Arjun_%20DSP%20_Sukumar%20_Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PbyBBbnRhdmEgTWF3YS4uT28gT28gQW50YXZhIFZpZGVvIFNvbmcgKFRlbHVndSkgXyBQdXNocGEgU29uZ3MgXyBBbGx1IEFyanVuXyBEU1AgX1N1a3VtYXIgX1NhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NTAsImV4cCI6MTc5ODUyMjk1MH0.C3JGOOYXJM41SOzLG2NhlptwBXyjpCxAcL6nRvjxrJU',
        duration: 300,
},
{
        id: 'mw-17',
        title: 'Oosupodu Full Video Song __ Fidaa Full Video Songs __ Varun Tej_ Sai Pallavi __ Sekhar Kammula(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oosupodu%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pb3N1cG9kdSBGdWxsIFZpZGVvIFNvbmcgX18gRmlkYWEgRnVsbCBWaWRlbyBTb25ncyBfXyBWYXJ1biBUZWpfIFNhaSBQYWxsYXZpIF9fIFNla2hhciBLYW1tdWxhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NjAsImV4cCI6MTc5ODUyMjk2MH0.Zh2DT7LOdEb8mkxYneB_8PkifyM_kJFYUzIrDjfonxA',
        duration: 300,
},
{
        id: 'mw-18',
        title: 'Orugalluke Pilla Full HD Video Song __ Sainikudu __ Mahesh Babu_ Trisha __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Orugalluke%20Pilla%20Full%20HD%20Video%20Song%20__%20Sainikudu%20__%20Mahesh%20Babu_%20Trisha%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PcnVnYWxsdWtlIFBpbGxhIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBTYWluaWt1ZHUgX18gTWFoZXNoIEJhYnVfIFRyaXNoYSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2OTcxLCJleHAiOjE3OTg1MjI5NzF9.r16_Vh8n5sBJnDl68Zoe2N38VDO6YsFNvcfStmtKN7U',
        duration: 300,
},
{
        id: 'mw-19',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadaara%20Full%20Song%20II%20Magadheera%20II%20Ram%20Charan%20Teja_%20Kajal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYWFyYSBGdWxsIFNvbmcgSUkgTWFnYWRoZWVyYSBJSSBSYW0gQ2hhcmFuIFRlamFfIEthamFsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NzksImV4cCI6MTc5ODUyMjk3OX0.pbdi6zMs1BIvrPNWHg1NyLyLFrAq1ElDBncCcBI3Va8',
        duration: 300,
},
{
        id: 'mw-20',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadara%20Bomma%20Full%20Video%20Song%20__%20Magadheera%20Movie%20__%20Ram%20Charan_%20Kajal%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYXJhIEJvbW1hIEZ1bGwgVmlkZW8gU29uZyBfXyBNYWdhZGhlZXJhIE1vdmllIF9fIFJhbSBDaGFyYW5fIEthamFsIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njk5MSwiZXhwIjoxNzk4NTIyOTkxfQ.7XUnyiH3nIOtdPzqbp5X4MDHEgNeMaoJfsLaR2VTO1k',
        duration: 300,
},
{
        id: 'mw-21',
        title: 'Pillaa Raa Video Song _ RX 100 _ Kartikeya _ Payal Rajput _ Anurag Kulkarni _ Chaitan Bharadwaj(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pillaa%20Raa%20Video%20Song%20_%20RX%20100%20_%20Kartikeya%20_%20Payal%20Rajput%20_%20Anurag%20Kulkarni%20_%20Chaitan%20Bharadwaj(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QaWxsYWEgUmFhIFZpZGVvIFNvbmcgXyBSWCAxMDAgXyBLYXJ0aWtleWEgXyBQYXlhbCBSYWpwdXQgXyBBbnVyYWcgS3Vsa2FybmkgXyBDaGFpdGFuIEJoYXJhZHdhaihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDA2LCJleHAiOjE3OTg1MjMwMDZ9.BMyyhJs6MU5Z0VxuX_2jrcsKQy0pnajv2S9lqhzjieE',
        duration: 300,
},
{
        id: 'mw-22',
        title: 'Poolamme Pilla _ HanuMan (Telugu) _ Prasanth Varma _Teja Sajja_ Amritha _ GowraHari _ Kasarla Shyam(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Poolamme%20Pilla%20_%20HanuMan%20(Telugu)%20_%20Prasanth%20Varma%20_Teja%20Sajja_%20Amritha%20_%20GowraHari%20_%20Kasarla%20Shyam(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qb29sYW1tZSBQaWxsYSBfIEhhbnVNYW4gKFRlbHVndSkgXyBQcmFzYW50aCBWYXJtYSBfVGVqYSBTYWpqYV8gQW1yaXRoYSBfIEdvd3JhSGFyaSBfIEthc2FybGEgU2h5YW0oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzA3OCwiZXhwIjoxNzk4NTIzMDc4fQ.8aBqUbZZMbLVTVce7-EJURN_K1Jo6OhFg5NM1TMUT4k',
        duration: 300,
},
{
        id: 'mw-23',
        title: 'Premalo -  8K Video _ Court _ Priyadarshi_ Harsh Roshan_ Sridevi _ Vijai Bulganin _ Ram Jagadeesh(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Premalo%20-%20%208K%20Video%20_%20Court%20_%20Priyadarshi_%20Harsh%20Roshan_%20Sridevi%20_%20Vijai%20Bulganin%20_%20Ram%20Jagadeesh(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QcmVtYWxvIC0gIDhLIFZpZGVvIF8gQ291cnQgXyBQcml5YWRhcnNoaV8gSGFyc2ggUm9zaGFuXyBTcmlkZXZpIF8gVmlqYWkgQnVsZ2FuaW4gXyBSYW0gSmFnYWRlZXNoKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcwODcsImV4cCI6MTc5ODUyMzA4N30.kw7SAVeO_V8CQUKskoQXFbYsHxLk8Javy8VKez-JlkI',
        duration: 300,
},
{
        id: 'mw-24',
        title: 'Priyathama Telusuna Full HD Video Song __ Jayam __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Priyathama%20Telusuna%20Full%20HD%20Video%20Song%20__%20Jayam%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qcml5YXRoYW1hIFRlbHVzdW5hIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBKYXlhbSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDk0LCJleHAiOjE3OTg1MjMwOTR9.yZ91HLET_yYM0mFzSAIM8PADvqRqMJuLC43WQx_rwLA',
        duration: 300,
},
{
        id: 'mw-25',
        title: 'PUSHPA PUSHPA Telugu Film Version - Pushpa 2 The Rule _ Allu Arjun _ Sukumar _ DSP(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/PUSHPA%20PUSHPA%20Telugu%20Film%20Version%20-%20Pushpa%202%20The%20Rule%20_%20Allu%20Arjun%20_%20Sukumar%20_%20DSP(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QVVNIUEEgUFVTSFBBIFRlbHVndSBGaWxtIFZlcnNpb24gLSBQdXNocGEgMiBUaGUgUnVsZSBfIEFsbHUgQXJqdW4gXyBTdWt1bWFyIF8gRFNQKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxMDUsImV4cCI6MTc5ODUyMzEwNX0.PstdjkfgWO5NKqTX5edsvSTEbz71VYKHrfYFtoz49Vk',
        duration: 300,
},
{
        id: 'mw-26',
        title: 'Pushpa_ Srivalli - Lyrical (Telugu) _ Allu Arjun_ Rashmika Mandanna _ Sid Sriram _ DSP _ Sukumar(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pushpa_%20Srivalli%20-%20Lyrical%20(Telugu)%20_%20Allu%20Arjun_%20Rashmika%20Mandanna%20_%20Sid%20Sriram%20_%20DSP%20_%20Sukumar(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QdXNocGFfIFNyaXZhbGxpIC0gTHlyaWNhbCAoVGVsdWd1KSBfIEFsbHUgQXJqdW5fIFJhc2htaWthIE1hbmRhbm5hIF8gU2lkIFNyaXJhbSBfIERTUCBfIFN1a3VtYXIoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzExNSwiZXhwIjoxNzk4NTIzMTE1fQ.HzKylZ4N9GtQX5dNw-Vl6LyQ11JoXdXSGdmEkAWTEPY',
        duration: 300,
},
{
        id: 'mw-27',
        title: 'Rambai Neemeedha Naku Video Song _ Raju Weds Rambai _ A ETV win Original production _ NOV 21(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rambai%20Neemeedha%20Naku%20Video%20Song%20_%20Raju%20Weds%20Rambai%20_%20A%20ETV%20win%20Original%20production%20_%20NOV%2021(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW1iYWkgTmVlbWVlZGhhIE5ha3UgVmlkZW8gU29uZyBfIFJhanUgV2VkcyBSYW1iYWkgXyBBIEVUViB3aW4gT3JpZ2luYWwgcHJvZHVjdGlvbiBfIE5PViAyMShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MTI0LCJleHAiOjE3OTg1MjMxMjR9.8YVc-D1MbGhOkPaTBo5pLBSy5GwDj1JrXZa4KlfbxSI',
        duration: 300,
},
{
        id: 'mw-28',
        title: 'Ramuloo Ramulaa Full Video _ Allu Arjun_ Pooja Hegde _ Ala Vaikunthapurramuloo _ Trivikram _ Thaman(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ramuloo%20Ramulaa%20Full%20Video%20_%20Allu%20Arjun_%20Pooja%20Hegde%20_%20Ala%20Vaikunthapurramuloo%20_%20Trivikram%20_%20Thaman(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW11bG9vIFJhbXVsYWEgRnVsbCBWaWRlbyBfIEFsbHUgQXJqdW5fIFBvb2phIEhlZ2RlIF8gQWxhIFZhaWt1bnRoYXB1cnJhbXVsb28gXyBUcml2aWtyYW0gXyBUaGFtYW4oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzEzNCwiZXhwIjoxNzk4NTIzMTM0fQ.I8xScN6uDOCfGiHqIjS4NVN4rrLx-okoPFz-8WMG-Rg',
        duration: 300,
},
{
        id: 'mw-29',
        title: 'Rangamma Mangamma Full Video Song _ Rangasthalam Video Songs _Ram Charan_ Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rangamma%20Mangamma%20Full%20Video%20Song%20_%20Rangasthalam%20Video%20Songs%20_Ram%20Charan_%20Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW5nYW1tYSBNYW5nYW1tYSBGdWxsIFZpZGVvIFNvbmcgXyBSYW5nYXN0aGFsYW0gVmlkZW8gU29uZ3MgX1JhbSBDaGFyYW5fIFNhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxNDUsImV4cCI6MTc5ODUyMzE0NX0._Tqfy6wRvy_arL0FxAM3Db32MggbXijlm_CCRDvtXzs',
        duration: 300,
},

{
        id: 'mw-30',
        title: 'Ranu Ranu Antune Chinnado Full Movie Videos Song _ Nithiin_ Sadha _ Telugu Videos(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ranu%20Ranu%20Antune%20Chinnado%20Full%20Movie%20Videos%20Song%20_%20Nithiin_%20Sadha%20_%20Telugu%20Videos(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW51IFJhbnUgQW50dW5lIENoaW5uYWRvIEZ1bGwgTW92aWUgVmlkZW9zIFNvbmcgXyBOaXRoaWluXyBTYWRoYSBfIFRlbHVndSBWaWRlb3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzE4NSwiZXhwIjoxNzk4NTIzMTg1fQ.QFwB2wVDiiXBpFDsDRNRgdZqyohHB-OSSqLTHV-yz50',
        duration: 300,
},
      {
        id: 'mw-31',
        title: 'Oke Oka Mata (Chakram)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chakram%20songs%20-%20Oke%20Oka%20Mata%20-%20Prabhas%20Asin%20Charmi(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-32',
        title: 'Chennai Chandrama',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-33',
        title: 'Edo Priyaragam (Aarya)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Edo%20Priyaragam%20Video%20Song%20__%20Aarya%20Video%20Songs%20__%20Allu%20Arjun_%20Anuradha%20Mehta(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-34',
        title: 'Hrudhayam (Parugu)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Hrudhayam%20Full%20Video%20Song%20_%20Parugu%20Video%20Songs%20_%20Allu%20Arjun_%20Sheela%20_%20Bhaskar%20_%20Mani%20Sharma(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-35',
        title: 'Violin Song (Iddarammayilatho)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Iddarammayilatho%20Video%20Songs%20_%20Violin%20Song%20(Girl%20Just)%20Video%20Song%20_%20Allu%20Arjun_%20Amala%20Paul(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-36',
        title: 'Megham Karigenu (Naaga)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Naaga%20Movie%20Video%20Songs%20__%20Megham%20Karigenu%20Video%20Song%20__%20Jr.NTR%20_%20Sada(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-37',
        title: 'Taal Se Taal Mila',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Taal%20Se%20Taal%20Mila%20_%20A.R%20Rahman%20_%20Alka%20Yagnik%20_%20Udit%20Narayan%20_%20Taal%20(1999)(M4A_128K).m4a',
        duration: 300,
      },
    ],
  }, 
{
    id: 'playlist-5',
    name: 'Afternoon Vibes',
    startHour: 14, // 2:00 PM
    startMinute: 30,
    tracks: [
                             {
        id: 'mw-1',
        title: 'Vachinde Mellaga',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/_Vachinde%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9fVmFjaGluZGUgRnVsbCBWaWRlbyBTb25nIF9fIEZpZGFhIEZ1bGwgVmlkZW8gU29uZ3MgX18gVmFydW4gVGVqXyBTYWkgUGFsbGF2aSBfXyBTZWtoYXIgS2FtbXVsYShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2MzQxLCJleHAiOjE3OTg1MjIzNDF9.31giCxdfT-RVp3sXCjY1vJCCe6wtl37MIlg3A0laIV4',
        duration: 300,
},
{
        id: 'mw-2',
        title: 'Nuvante Nakistamani',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvante%20Nakistamani%20Full%20Song%20II%20Santhosham%20Movie%20II%20Nagarjuna_%20Shreya%20_%20Telugu%20Love%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZhbnRlIE5ha2lzdGFtYW5pIEZ1bGwgU29uZyBJSSBTYW50aG9zaGFtIE1vdmllIElJIE5hZ2FyanVuYV8gU2hyZXlhIF8gVGVsdWd1IExvdmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjQyMiwiZXhwIjoxNzk4NTIyNDIyfQ.cBHD7HXft7-kFfc1j4cBYnIrj2YxBuziuEkexbLLqN8',
        duration: 300,
},
{
        id: 'mw-3',
        title: 'Nuvu Choodu Chudakapo Full Video Song _ Okatonumber Kurradu _ Taraka Ratna _ M.M.Keeravaani(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvu%20Choodu%20Chudakapo%20Full%20Video%20Song%20_%20Okatonumber%20Kurradu%20_%20Taraka%20Ratna%20_%20M.M.Keeravaani(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ1IENob29kdSBDaHVkYWthcG8gRnVsbCBWaWRlbyBTb25nIF8gT2thdG9udW1iZXIgS3VycmFkdSBfIFRhcmFrYSBSYXRuYSBfIE0uTS5LZWVyYXZhYW5pKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY0MzMsImV4cCI6MTc5ODUyMjQzM30.8ukuC6JtdTucGVurZgoXLkrdlPIiyaXu9Gs-DFK1F1Y',
        duration: 300,
},
{
        id: 'mw-4',
        title: 'Nuvvakkadunte Full Video Song - Gopi Gopika Godavari Video Songs - Venu_ Kamalini Mukherjee(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvakkadunte%20Full%20Video%20Song%20-%20Gopi%20Gopika%20Godavari%20Video%20Songs%20-%20Venu_%20Kamalini%20Mukherjee(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2YWtrYWR1bnRlIEZ1bGwgVmlkZW8gU29uZyAtIEdvcGkgR29waWthIEdvZGF2YXJpIFZpZGVvIFNvbmdzIC0gVmVudV8gS2FtYWxpbmkgTXVraGVyamVlKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY2NTQsImV4cCI6MTc5ODUyMjY1NH0.fsZ-cKFHhxZypjWb17ZhM5SKEDkqeSoS3Oxky2TQHBI',
        duration: 300,
},
{
        id: 'mw-5',
        title: 'Nuvve Kavali Movie Songs - Kallaloki Kallu Petti Chudavenduku -  Tarun_Richa_Sai Kiran(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Kavali%20Movie%20Songs%20-%20Kallaloki%20Kallu%20Petti%20Chudavenduku%20-%20%20Tarun_Richa_Sai%20Kiran(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBLYXZhbGkgTW92aWUgU29uZ3MgLSBLYWxsYWxva2kgS2FsbHUgUGV0dGkgQ2h1ZGF2ZW5kdWt1IC0gIFRhcnVuX1JpY2hhX1NhaSBLaXJhbihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2Nzg5LCJleHAiOjE3OTg1MjI3ODl9.dUOx-iE5c0bW_WfZHEFeNFgb6m_GhGpLgcsSj5lWmhE',
        duration: 300,
},
{
        id: 'mw-6',
        title: 'Nuvve Nuvve Kavalantundi Full Song With Telugu Lyrics II Chitra Hits  II Nuvve Nuvve Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvve%20Nuvve%20Kavalantundi%20Full%20Song%20With%20Telugu%20Lyrics%20II%20Chitra%20Hits%20%20II%20Nuvve%20Nuvve%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2ZSBOdXZ2ZSBLYXZhbGFudHVuZGkgRnVsbCBTb25nIFdpdGggVGVsdWd1IEx5cmljcyBJSSBDaGl0cmEgSGl0cyAgSUkgTnV2dmUgTnV2dmUgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgwMSwiZXhwIjoxNzk4NTIyODAxfQ.I4qD9ApfVa8u0EUrYlbpiA1qpAkQhM6rWHW_T6FWWW8',
        duration: 300,
},
{
        id: 'mw-7',
        title: 'Nuvvosthanante Song _ Varsham Movie Songs _ Prabhas _ Trisha _ DSP _ TeluguOne(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvosthanante%20Song%20_%20Varsham%20Movie%20Songs%20_%20Prabhas%20_%20Trisha%20_%20DSP%20_%20TeluguOne(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2b3N0aGFuYW50ZSBTb25nIF8gVmFyc2hhbSBNb3ZpZSBTb25ncyBfIFByYWJoYXMgXyBUcmlzaGEgXyBEU1AgXyBUZWx1Z3VPbmUoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgxMywiZXhwIjoxNzk4NTIyODEzfQ.PfYRRXGmmqBPO1pdsZTSKwut_tLsBuQrSEX-hUrw8iQ',
        duration: 300,
},
{
        id: 'mw-8',
        title: 'Nuvvu Nenu Kalisunte FULL VIDEO SONG  4K WITH 5.1 DTS AUDIO _  Gangothri _Allu Arjun_ Aditi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Kalisunte%20FULL%20VIDEO%20SONG%20%204K%20WITH%205.1%20DTS%20AUDIO%20_%20%20Gangothri%20_Allu%20Arjun_%20Aditi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IEthbGlzdW50ZSBGVUxMIFZJREVPIFNPTkcgIDRLIFdJVEggNS4xIERUUyBBVURJTyBfICBHYW5nb3RocmkgX0FsbHUgQXJqdW5fIEFkaXRpIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjgyMywiZXhwIjoxNzk4NTIyODIzfQ.eNBKIHGiUMhW_U7SX5_zuSdPoW9ublfJIPNbJD0Y9FE',
        duration: 300,
},
{
        id: 'mw-9',
        title: 'Nuvvu Nenu Movie __ Nuvve Naku Pranam Video Song __ Uday Kiran_ Anitha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nenu%20Movie%20__%20Nuvve%20Naku%20Pranam%20Video%20Song%20__%20Uday%20Kiran_%20Anitha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOZW51IE1vdmllIF9fIE51dnZlIE5ha3UgUHJhbmFtIFZpZGVvIFNvbmcgX18gVWRheSBLaXJhbl8gQW5pdGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4NTcsImV4cCI6MTc5ODUyMjg1N30.uQuh5q2luK4Aw0c2nsxbBwm6Uptx4dGkWkUiIxRqHLg',
        duration: 300,
},
{
        id: 'mw-10',
        title: 'Nuvvu Nuvvu Video Song _ Khadgam Full Video Songs _ Srikanth _ Sonali Bendre _ DSP _ Vega Music(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Nuvvu%20Nuvvu%20Video%20Song%20_%20Khadgam%20Full%20Video%20Songs%20_%20Srikanth%20_%20Sonali%20Bendre%20_%20DSP%20_%20Vega%20Music(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9OdXZ2dSBOdXZ2dSBWaWRlbyBTb25nIF8gS2hhZGdhbSBGdWxsIFZpZGVvIFNvbmdzIF8gU3Jpa2FudGggXyBTb25hbGkgQmVuZHJlIF8gRFNQIF8gVmVnYSBNdXNpYyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2ODY4LCJleHAiOjE3OTg1MjI4Njh9.aw8syBzrIyIwFQbl4puIPyMjYdHvrcPIsDPRGjOKJx8',
        duration: 300,
},
{
        id: 'mw-11',
        title: 'O Manasa O Manasa Full Video Song - Bhadra Video Songs - Ravi Teja_ Meera Jasmine _ Telugu Songs(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Manasa%20O%20Manasa%20Full%20Video%20Song%20-%20Bhadra%20Video%20Songs%20-%20Ravi%20Teja_%20Meera%20Jasmine%20_%20Telugu%20Songs(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIE1hbmFzYSBPIE1hbmFzYSBGdWxsIFZpZGVvIFNvbmcgLSBCaGFkcmEgVmlkZW8gU29uZ3MgLSBSYXZpIFRlamFfIE1lZXJhIEphc21pbmUgXyBUZWx1Z3UgU29uZ3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njg3OCwiZXhwIjoxNzk4NTIyODc4fQ.hyD4A_razQlcHr-xNc0fK9xFzESoLmH9hyllGsi_0UY',
        duration: 300,
},
{
        id: 'mw-12',
        title: 'O Priyathama Full Video Song__ Nuvvu Naku Nachav (2001) Movie __ Venkatesh _ Aarthi Agarwal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/O%20Priyathama%20Full%20Video%20Song__%20Nuvvu%20Naku%20Nachav%20(2001)%20Movie%20__%20Venkatesh%20_%20Aarthi%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PIFByaXlhdGhhbWEgRnVsbCBWaWRlbyBTb25nX18gTnV2dnUgTmFrdSBOYWNoYXYgKDIwMDEpIE1vdmllIF9fIFZlbmthdGVzaCBfIEFhcnRoaSBBZ2Fyd2FsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY4ODgsImV4cCI6MTc5ODUyMjg4OH0.rSAqPUcSLbCJZEr3XFwLKfjQLhI8K42psHjZ4t2iSI8',
        duration: 300,
},
{
        id: 'mw-13',
        title: 'Oh Prema _ Deviputrudu _ Venkatesh_ Soundarya _ S. P. Balasubrahmanyam_ Prasanna _ Telugu Love Song(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oh%20Prema%20_%20Deviputrudu%20_%20Venkatesh_%20Soundarya%20_%20S.%20P.%20Balasubrahmanyam_%20Prasanna%20_%20Telugu%20Love%20Song(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PaCBQcmVtYSBfIERldmlwdXRydWR1IF8gVmVua2F0ZXNoXyBTb3VuZGFyeWEgXyBTLiBQLiBCYWxhc3VicmFobWFueWFtXyBQcmFzYW5uYSBfIFRlbHVndSBMb3ZlIFNvbmcoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkyMCwiZXhwIjoxNzk4NTIyOTIwfQ.T7Y_E7ruRCa3BGDC20QPbTC0Xweg4coSR3NtEr8X69c',
        duration: 300,
},
{
        id: 'mw-14',
        title: 'Oka Maru Kalisina __ Ghajini Movie Song __ Suriya_ Asin __ Volga Musicbox(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oka%20Maru%20Kalisina%20__%20Ghajini%20Movie%20Song%20__%20Suriya_%20Asin%20__%20Volga%20Musicbox(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2EgTWFydSBLYWxpc2luYSBfXyBHaGFqaW5pIE1vdmllIFNvbmcgX18gU3VyaXlhXyBBc2luIF9fIFZvbGdhIE11c2ljYm94KE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5MzAsImV4cCI6MTc5ODUyMjkzMH0.-hKExwNe5VOilzu0qAfEclqWCUHIbDOyvsVrrfDYvvs',
        duration: 300,
},
{
        id: 'mw-15',
        title: 'Okariki Okarai Video Song _ Student No.1 _ Jr NTR _ MM Keeravaani _ SS Rajamouli _Vyjayanthi Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Okariki%20Okarai%20Video%20Song%20_%20Student%20No.1%20_%20Jr%20NTR%20_%20MM%20Keeravaani%20_%20SS%20Rajamouli%20_Vyjayanthi%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pa2FyaWtpIE9rYXJhaSBWaWRlbyBTb25nIF8gU3R1ZGVudCBOby4xIF8gSnIgTlRSIF8gTU0gS2VlcmF2YWFuaSBfIFNTIFJhamFtb3VsaSBfVnlqYXlhbnRoaSBNb3ZpZXMoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NjkzOCwiZXhwIjoxNzk4NTIyOTM4fQ._kULZetwgVwYdG6GuH3NDhoZ-TipXqCnVBCv72VRMLw',
        duration: 300,
},
{
        id: 'mw-16',
        title: 'Oo Antava Mawa..Oo Oo Antava Video Song (Telugu) _ Pushpa Songs _ Allu Arjun_ DSP _Sukumar _Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oo%20Antava%20Mawa..Oo%20Oo%20Antava%20Video%20Song%20(Telugu)%20_%20Pushpa%20Songs%20_%20Allu%20Arjun_%20DSP%20_Sukumar%20_Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PbyBBbnRhdmEgTWF3YS4uT28gT28gQW50YXZhIFZpZGVvIFNvbmcgKFRlbHVndSkgXyBQdXNocGEgU29uZ3MgXyBBbGx1IEFyanVuXyBEU1AgX1N1a3VtYXIgX1NhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NTAsImV4cCI6MTc5ODUyMjk1MH0.C3JGOOYXJM41SOzLG2NhlptwBXyjpCxAcL6nRvjxrJU',
        duration: 300,
},
{
        id: 'mw-17',
        title: 'Oosupodu Full Video Song __ Fidaa Full Video Songs __ Varun Tej_ Sai Pallavi __ Sekhar Kammula(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Oosupodu%20Full%20Video%20Song%20__%20Fidaa%20Full%20Video%20Songs%20__%20Varun%20Tej_%20Sai%20Pallavi%20__%20Sekhar%20Kammula(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Pb3N1cG9kdSBGdWxsIFZpZGVvIFNvbmcgX18gRmlkYWEgRnVsbCBWaWRlbyBTb25ncyBfXyBWYXJ1biBUZWpfIFNhaSBQYWxsYXZpIF9fIFNla2hhciBLYW1tdWxhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NjAsImV4cCI6MTc5ODUyMjk2MH0.Zh2DT7LOdEb8mkxYneB_8PkifyM_kJFYUzIrDjfonxA',
        duration: 300,
},
{
        id: 'mw-18',
        title: 'Orugalluke Pilla Full HD Video Song __ Sainikudu __ Mahesh Babu_ Trisha __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Orugalluke%20Pilla%20Full%20HD%20Video%20Song%20__%20Sainikudu%20__%20Mahesh%20Babu_%20Trisha%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9PcnVnYWxsdWtlIFBpbGxhIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBTYWluaWt1ZHUgX18gTWFoZXNoIEJhYnVfIFRyaXNoYSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg2OTcxLCJleHAiOjE3OTg1MjI5NzF9.r16_Vh8n5sBJnDl68Zoe2N38VDO6YsFNvcfStmtKN7U',
        duration: 300,
},
{
        id: 'mw-19',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadaara%20Full%20Song%20II%20Magadheera%20II%20Ram%20Charan%20Teja_%20Kajal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYWFyYSBGdWxsIFNvbmcgSUkgTWFnYWRoZWVyYSBJSSBSYW0gQ2hhcmFuIFRlamFfIEthamFsKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODY5NzksImV4cCI6MTc5ODUyMjk3OX0.pbdi6zMs1BIvrPNWHg1NyLyLFrAq1ElDBncCcBI3Va8',
        duration: 300,
},
{
        id: 'mw-20',
        title: 'Panchadaara Full Song II Magadheera II Ram Charan Teja_ Kajal(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Panchadara%20Bomma%20Full%20Video%20Song%20__%20Magadheera%20Movie%20__%20Ram%20Charan_%20Kajal%20Agarwal(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QYW5jaGFkYXJhIEJvbW1hIEZ1bGwgVmlkZW8gU29uZyBfXyBNYWdhZGhlZXJhIE1vdmllIF9fIFJhbSBDaGFyYW5fIEthamFsIEFnYXJ3YWwoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4Njk5MSwiZXhwIjoxNzk4NTIyOTkxfQ.7XUnyiH3nIOtdPzqbp5X4MDHEgNeMaoJfsLaR2VTO1k',
        duration: 300,
},
{
        id: 'mw-21',
        title: 'Pillaa Raa Video Song _ RX 100 _ Kartikeya _ Payal Rajput _ Anurag Kulkarni _ Chaitan Bharadwaj(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pillaa%20Raa%20Video%20Song%20_%20RX%20100%20_%20Kartikeya%20_%20Payal%20Rajput%20_%20Anurag%20Kulkarni%20_%20Chaitan%20Bharadwaj(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QaWxsYWEgUmFhIFZpZGVvIFNvbmcgXyBSWCAxMDAgXyBLYXJ0aWtleWEgXyBQYXlhbCBSYWpwdXQgXyBBbnVyYWcgS3Vsa2FybmkgXyBDaGFpdGFuIEJoYXJhZHdhaihNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDA2LCJleHAiOjE3OTg1MjMwMDZ9.BMyyhJs6MU5Z0VxuX_2jrcsKQy0pnajv2S9lqhzjieE',
        duration: 300,
},
{
        id: 'mw-22',
        title: 'Poolamme Pilla _ HanuMan (Telugu) _ Prasanth Varma _Teja Sajja_ Amritha _ GowraHari _ Kasarla Shyam(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Poolamme%20Pilla%20_%20HanuMan%20(Telugu)%20_%20Prasanth%20Varma%20_Teja%20Sajja_%20Amritha%20_%20GowraHari%20_%20Kasarla%20Shyam(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qb29sYW1tZSBQaWxsYSBfIEhhbnVNYW4gKFRlbHVndSkgXyBQcmFzYW50aCBWYXJtYSBfVGVqYSBTYWpqYV8gQW1yaXRoYSBfIEdvd3JhSGFyaSBfIEthc2FybGEgU2h5YW0oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzA3OCwiZXhwIjoxNzk4NTIzMDc4fQ.8aBqUbZZMbLVTVce7-EJURN_K1Jo6OhFg5NM1TMUT4k',
        duration: 300,
},
{
        id: 'mw-23',
        title: 'Premalo -  8K Video _ Court _ Priyadarshi_ Harsh Roshan_ Sridevi _ Vijai Bulganin _ Ram Jagadeesh(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Premalo%20-%20%208K%20Video%20_%20Court%20_%20Priyadarshi_%20Harsh%20Roshan_%20Sridevi%20_%20Vijai%20Bulganin%20_%20Ram%20Jagadeesh(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QcmVtYWxvIC0gIDhLIFZpZGVvIF8gQ291cnQgXyBQcml5YWRhcnNoaV8gSGFyc2ggUm9zaGFuXyBTcmlkZXZpIF8gVmlqYWkgQnVsZ2FuaW4gXyBSYW0gSmFnYWRlZXNoKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcwODcsImV4cCI6MTc5ODUyMzA4N30.kw7SAVeO_V8CQUKskoQXFbYsHxLk8Javy8VKez-JlkI',
        duration: 300,
},
{
        id: 'mw-24',
        title: 'Priyathama Telusuna Full HD Video Song __ Jayam __ Jordaar Movies(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Priyathama%20Telusuna%20Full%20HD%20Video%20Song%20__%20Jayam%20__%20Jordaar%20Movies(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9Qcml5YXRoYW1hIFRlbHVzdW5hIEZ1bGwgSEQgVmlkZW8gU29uZyBfXyBKYXlhbSBfXyBKb3JkYWFyIE1vdmllcyhNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MDk0LCJleHAiOjE3OTg1MjMwOTR9.yZ91HLET_yYM0mFzSAIM8PADvqRqMJuLC43WQx_rwLA',
        duration: 300,
},
{
        id: 'mw-25',
        title: 'PUSHPA PUSHPA Telugu Film Version - Pushpa 2 The Rule _ Allu Arjun _ Sukumar _ DSP(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/PUSHPA%20PUSHPA%20Telugu%20Film%20Version%20-%20Pushpa%202%20The%20Rule%20_%20Allu%20Arjun%20_%20Sukumar%20_%20DSP(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QVVNIUEEgUFVTSFBBIFRlbHVndSBGaWxtIFZlcnNpb24gLSBQdXNocGEgMiBUaGUgUnVsZSBfIEFsbHUgQXJqdW4gXyBTdWt1bWFyIF8gRFNQKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxMDUsImV4cCI6MTc5ODUyMzEwNX0.PstdjkfgWO5NKqTX5edsvSTEbz71VYKHrfYFtoz49Vk',
        duration: 300,
},
{
        id: 'mw-26',
        title: 'Pushpa_ Srivalli - Lyrical (Telugu) _ Allu Arjun_ Rashmika Mandanna _ Sid Sriram _ DSP _ Sukumar(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Pushpa_%20Srivalli%20-%20Lyrical%20(Telugu)%20_%20Allu%20Arjun_%20Rashmika%20Mandanna%20_%20Sid%20Sriram%20_%20DSP%20_%20Sukumar(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9QdXNocGFfIFNyaXZhbGxpIC0gTHlyaWNhbCAoVGVsdWd1KSBfIEFsbHUgQXJqdW5fIFJhc2htaWthIE1hbmRhbm5hIF8gU2lkIFNyaXJhbSBfIERTUCBfIFN1a3VtYXIoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzExNSwiZXhwIjoxNzk4NTIzMTE1fQ.HzKylZ4N9GtQX5dNw-Vl6LyQ11JoXdXSGdmEkAWTEPY',
        duration: 300,
},
{
        id: 'mw-27',
        title: 'Rambai Neemeedha Naku Video Song _ Raju Weds Rambai _ A ETV win Original production _ NOV 21(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rambai%20Neemeedha%20Naku%20Video%20Song%20_%20Raju%20Weds%20Rambai%20_%20A%20ETV%20win%20Original%20production%20_%20NOV%2021(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW1iYWkgTmVlbWVlZGhhIE5ha3UgVmlkZW8gU29uZyBfIFJhanUgV2VkcyBSYW1iYWkgXyBBIEVUViB3aW4gT3JpZ2luYWwgcHJvZHVjdGlvbiBfIE5PViAyMShNNEFfMTI4SykubTRhIiwiaWF0IjoxNzY2OTg3MTI0LCJleHAiOjE3OTg1MjMxMjR9.8YVc-D1MbGhOkPaTBo5pLBSy5GwDj1JrXZa4KlfbxSI',
        duration: 300,
},
{
        id: 'mw-28',
        title: 'Ramuloo Ramulaa Full Video _ Allu Arjun_ Pooja Hegde _ Ala Vaikunthapurramuloo _ Trivikram _ Thaman(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ramuloo%20Ramulaa%20Full%20Video%20_%20Allu%20Arjun_%20Pooja%20Hegde%20_%20Ala%20Vaikunthapurramuloo%20_%20Trivikram%20_%20Thaman(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW11bG9vIFJhbXVsYWEgRnVsbCBWaWRlbyBfIEFsbHUgQXJqdW5fIFBvb2phIEhlZ2RlIF8gQWxhIFZhaWt1bnRoYXB1cnJhbXVsb28gXyBUcml2aWtyYW0gXyBUaGFtYW4oTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzEzNCwiZXhwIjoxNzk4NTIzMTM0fQ.I8xScN6uDOCfGiHqIjS4NVN4rrLx-okoPFz-8WMG-Rg',
        duration: 300,
},
{
        id: 'mw-29',
        title: 'Rangamma Mangamma Full Video Song _ Rangasthalam Video Songs _Ram Charan_ Samantha(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Rangamma%20Mangamma%20Full%20Video%20Song%20_%20Rangasthalam%20Video%20Songs%20_Ram%20Charan_%20Samantha(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW5nYW1tYSBNYW5nYW1tYSBGdWxsIFZpZGVvIFNvbmcgXyBSYW5nYXN0aGFsYW0gVmlkZW8gU29uZ3MgX1JhbSBDaGFyYW5fIFNhbWFudGhhKE00QV8xMjhLKS5tNGEiLCJpYXQiOjE3NjY5ODcxNDUsImV4cCI6MTc5ODUyMzE0NX0._Tqfy6wRvy_arL0FxAM3Db32MggbXijlm_CCRDvtXzs',
        duration: 300,
},

{
        id: 'mw-30',
        title: 'Ranu Ranu Antune Chinnado Full Movie Videos Song _ Nithiin_ Sadha _ Telugu Videos(M4A_128K)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/sign/Songs/Ranu%20Ranu%20Antune%20Chinnado%20Full%20Movie%20Videos%20Song%20_%20Nithiin_%20Sadha%20_%20Telugu%20Videos(M4A_128K).m4a?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWNmZGQ2MS01YjM2LTRmY2UtODJjOC0xOTgwNGRjMjU4YjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTb25ncy9SYW51IFJhbnUgQW50dW5lIENoaW5uYWRvIEZ1bGwgTW92aWUgVmlkZW9zIFNvbmcgXyBOaXRoaWluXyBTYWRoYSBfIFRlbHVndSBWaWRlb3MoTTRBXzEyOEspLm00YSIsImlhdCI6MTc2Njk4NzE4NSwiZXhwIjoxNzk4NTIzMTg1fQ.QFwB2wVDiiXBpFDsDRNRgdZqyohHB-OSSqLTHV-yz50',
        duration: 300,
},
      {
        id: 'mw-31',
        title: 'Oke Oka Mata (Chakram)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chakram%20songs%20-%20Oke%20Oka%20Mata%20-%20Prabhas%20Asin%20Charmi(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-32',
        title: 'Chennai Chandrama',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Chennai%20Chandrama%20Ravi%20Teja_%20Asin%20Super%20Hit%20Movie%20Song%20_%20Telugu%20Videos(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-33',
        title: 'Edo Priyaragam (Aarya)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Edo%20Priyaragam%20Video%20Song%20__%20Aarya%20Video%20Songs%20__%20Allu%20Arjun_%20Anuradha%20Mehta(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-34',
        title: 'Hrudhayam (Parugu)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Hrudhayam%20Full%20Video%20Song%20_%20Parugu%20Video%20Songs%20_%20Allu%20Arjun_%20Sheela%20_%20Bhaskar%20_%20Mani%20Sharma(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-35',
        title: 'Violin Song (Iddarammayilatho)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Iddarammayilatho%20Video%20Songs%20_%20Violin%20Song%20(Girl%20Just)%20Video%20Song%20_%20Allu%20Arjun_%20Amala%20Paul(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-36',
        title: 'Megham Karigenu (Naaga)',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Naaga%20Movie%20Video%20Songs%20__%20Megham%20Karigenu%20Video%20Song%20__%20Jr.NTR%20_%20Sada(M4A_128K).m4a',
        duration: 300,
      },
      {
        id: 'mw-37',
        title: 'Taal Se Taal Mila',
        src: 'https://sbkhajogqrzeqmnikxnl.supabase.co/storage/v1/object/public/Songs%20for%20Radio/Taal%20Se%20Taal%20Mila%20_%20A.R%20Rahman%20_%20Alka%20Yagnik%20_%20Udit%20Narayan%20_%20Taal%20(1999)(M4A_128K).m4a',
        duration: 300,
      },
    ],
  },
  
];

// Calculate total duration of a playlist in seconds
export const getPlaylistDuration = (playlist: Playlist): number => {
  return playlist.tracks.reduce((total, track) => total + track.duration, 0);
};

// Get playlist start time as Date object for today
export const getPlaylistStartTime = (playlist: Playlist): Date => {
  const now = new Date();
  const startTime = new Date(now);
  startTime.setHours(playlist.startHour, playlist.startMinute, 0, 0);
  return startTime;
};

// Get the currently active playlist based on system time
export const getCurrentPlaylist = (): Playlist | null => {
  const now = new Date();
  
  // Sort playlists by start time
  const sortedPlaylists = [...playlists].sort((a, b) => {
    const aMinutes = a.startHour * 60 + a.startMinute;
    const bMinutes = b.startHour * 60 + b.startMinute;
    return aMinutes - bMinutes;
  });

  // Find the active playlist
  for (let i = sortedPlaylists.length - 1; i >= 0; i--) {
    const playlist = sortedPlaylists[i];
    const startTime = getPlaylistStartTime(playlist);
    const duration = getPlaylistDuration(playlist);
    const endTime = new Date(startTime.getTime() + duration * 1000);

    if (now >= startTime && now < endTime) {
      return playlist;
    }
  }

  return null;
};

// Calculate elapsed time since playlist started (in seconds)
export const getElapsedTime = (playlist: Playlist): number => {
  const now = new Date();
  const startTime = getPlaylistStartTime(playlist);
  const elapsedMs = now.getTime() - startTime.getTime();
  return Math.max(0, Math.floor(elapsedMs / 1000));
};

// Find which track should be playing and at what position
export const getCurrentTrackInfo = (
  playlist: Playlist
): { track: Track; position: number; trackIndex: number } | null => {
  const elapsed = getElapsedTime(playlist);
  let accumulated = 0;

  for (let i = 0; i < playlist.tracks.length; i++) {
    const track = playlist.tracks[i];
    if (accumulated + track.duration > elapsed) {
      return {
        track,
        position: elapsed - accumulated,
        trackIndex: i,
      };
    }
    accumulated += track.duration;
  }

  return null; // Playlist has ended
};

// Get remaining time in the playlist
export const getRemainingTime = (playlist: Playlist): number => {
  const duration = getPlaylistDuration(playlist);
  const elapsed = getElapsedTime(playlist);
  return Math.max(0, duration - elapsed);
};

// Get the next upcoming playlist (with tracks) that hasn't started yet
export const getNextUpcomingPlaylist = (): { playlist: Playlist; secondsUntilStart: number } | null => {
  const now = new Date();
  
  // Filter playlists that have tracks and sort by start time
  const playlistsWithTracks = playlists
    .filter(p => p.tracks.length > 0)
    .map(playlist => {
      const startTime = getPlaylistStartTime(playlist);
      const secondsUntilStart = Math.floor((startTime.getTime() - now.getTime()) / 1000);
      return { playlist, startTime, secondsUntilStart };
    })
    .filter(p => p.secondsUntilStart > 0) // Only future playlists
    .sort((a, b) => a.secondsUntilStart - b.secondsUntilStart);

  if (playlistsWithTracks.length === 0) {
    return null;
  }

  const next = playlistsWithTracks[0];
  return { playlist: next.playlist, secondsUntilStart: next.secondsUntilStart };
};

// Format time as MM:SS or HH:MM:SS
export const formatTime = (seconds: number): string => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};
