export type SocialLink = {
  label: string;
  href: string;
};

export type CoverPlatform = "Instagram" | "TikTok" | "YouTube Shorts";

export type WeeklyCoverChannel = {
  platform: CoverPlatform;
  description: string;
  href: string;
};

export type EPTrackStatus = "out now" | "upcoming";

export type EPTrack = {
  title: string;
  status: EPTrackStatus;
  description: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  visualVideoUrl?: string;
};

export type EP = {
  title: string;
  description: string;
  tracks: EPTrack[];
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type CoveredSong = {
  title: string;
  artist?: string;
  featuring?: string;
  instagramPostUrl: string;
  youtubeUrl?: string;
};

export const site = {
  artistName: "Terence Dumas",
  tagline: "Original EP in progress • Weekly covers",
  bio:
    "I'm currently a student at UT Austin studying Computer Science, Math and Robotics. Completely unrelated to school, music and video production are my favorite hobbies. I pride myself in doing everything from the ground up: I write, record, and produce my own songs and videos. As of right now, I am building an original EP (opener song out now). I also post weekly covers across Instagram, TikTok, and YouTube.",

  streaming: [
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/3EQzwSPbIFX0rWxWCP5ofw?si=rcyTIzviR7iNNiuLQJn_jw",
    },
    {
      label: "Apple Music",
      href: "https://music.apple.com/us/artist/terence-dumas/1872041101",
    },
  ] satisfies SocialLink[],

  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/terencedumas/",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@terencedumasmusic",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@terencedumas",
    },
  ] satisfies SocialLink[],

  weeklyCovers: [
    {
      platform: "Instagram",
      description: "This is where I post my full covers. Definitely not algorithm friendly, but I'm doing this mainly as a self portfolio, and a way for friends and family to enjoy my work.",
      href: "https://www.instagram.com/terencedumas/",
    },
    {
      platform: "TikTok",
      description: "This is where I try to optimize my videos for the algorithm. Not working super great so far, but I feel like I am slowly getting the hang of it.",
      href: "https://www.tiktok.com/@terencedumasmusic",
    },
    {
      platform: "YouTube Shorts",
      description: "This is a sort of middle ground between my strategy for Instagram and Tiktok.",
      href: "https://www.youtube.com/@terencedumas/shorts",
    },
  ] satisfies WeeklyCoverChannel[],

  albumCover: {
    src: "/images/Cover.png",
    alt: "Album cover art",
  } satisfies ImageAsset,

  ep: {
    title: "Myself First - EP roadmap",
    description:
      "Four tracks. Track 1 is out now — the next three are currently upcoming.",
    tracks: [
      {
        title: "It Can't Understand",
        status: "out now",
        description:
          "Track 1 of the EP. This is the intro song, with a visual video available.",
        spotifyUrl:
          "https://open.spotify.com/track/3NxBvEOmhce0gEupxAI9kt?si=ac7dfa59d87047f9",
        appleMusicUrl: "https://music.apple.com/us/song/it-cant-understand/1872271006",
        visualVideoUrl: "https://www.youtube.com/watch?v=w8b0pCX_ojw",
      },
      {
        title: "Track 2",
        status: "upcoming",
        description: "Upcoming track.",
      },
      {
        title: "Track 3",
        status: "upcoming",
        description: "Upcoming track.",
      },
      {
        title: "Track 4",
        status: "upcoming",
        description: "Upcoming track.",
      },
    ],
  } satisfies EP,

  coversDescription:
    "I release one cover per week across platforms. Everything you hear has been actually played by me, whether that is on the keyboard, guitar, or cajon. Most of the times, all the instruments you hear are visible in the video as a camera angle, except for harmonies. Below is a running index linked to the Instagram post for each cover.",

  coverIndex: [
    { title: "Next Summer",          artist: "Damiano David",   instagramPostUrl: "https://www.instagram.com/p/DPo3vKyElJi/", youtubeUrl: "https://www.youtube.com/watch?v=QyqnFLOXE8c" },
    { title: "Mon Amour",            artist: "Slimane",         instagramPostUrl: "https://www.instagram.com/p/DQpGjV_gK-h/", youtubeUrl: "https://www.youtube.com/watch?v=w5OO7PpbFRE" },
    { title: "Glimpse of Us",        artist: "Joji",            instagramPostUrl: "https://www.instagram.com/p/DQuQcqGEWz5/" },
    { title: "The A Team",           artist: "Ed Sheeran",      instagramPostUrl: "https://www.instagram.com/p/DQ7ER-EEQAB/" },
    { title: "Lucky",                artist: "Channie Duffman", instagramPostUrl: "https://www.instagram.com/p/DRNDKzwER3s/" },
    { title: "Yesterday",            artist: "The Beatles",     instagramPostUrl: "https://www.instagram.com/p/DRfR5hgj9wb/" },
    { title: "The Vow",              artist: "Ed Sheeran",      featuring: "Robin Dumas", instagramPostUrl: "https://www.instagram.com/p/DRz0dcJEWM9/", youtubeUrl: "https://www.youtube.com/watch?v=5pxcGWEHCt4" },
    { title: "Break My Heart Again", artist: "FINNEAS",         instagramPostUrl: "https://www.instagram.com/p/DSDQRU5kSjF/" },
    { title: "I'd Rather Pretend",   artist: "Bryant Barnes",   instagramPostUrl: "https://www.instagram.com/p/DSVPR9tkcKG/" },
    { title: "Photograph",           artist: "Cody Fry",        instagramPostUrl: "https://www.instagram.com/p/DSoHjx0CLO0/" },
    { title: "Who Knows",            artist: "Daniel Caesar",   instagramPostUrl: "https://www.instagram.com/p/DS0xzwQDwWA/" },
    { title: "Wherever You Go",      artist: "Max Allais",      instagramPostUrl: "https://www.instagram.com/p/DTHA0zxDBDY/" },
    { title: "Sparks",               artist: "Coldplay",        instagramPostUrl: "https://www.instagram.com/p/DTZEO7hjIw9/" },
    { title: "Someone You Loved",    artist: "Lewis Capaldi",   instagramPostUrl: "https://www.instagram.com/p/DTrCSCcD91S/", youtubeUrl: "https://www.youtube.com/watch?v=ATpNmi7Ubjg" },
    { title: "Don't Want a Love Song", artist: "Bryant Barnes", instagramPostUrl: "https://www.instagram.com/p/DT8_hB4j6-h/" },
    { title: "All I Ask",            artist: "Adele",           instagramPostUrl: "https://www.instagram.com/p/DUPGAUaD8TJ/" },
    { title: "Ponyo",                artist: "Randjess",        instagramPostUrl: "https://www.instagram.com/p/DUdt4xqkTrJ/" },
    { title: "Rewrite the Stars",    artist: "The Greatest Showman", instagramPostUrl: "https://www.instagram.com/p/DUwcM-5j6xr/" },
    { title: "So Good",              artist: "Weston Estate",   instagramPostUrl: "https://www.instagram.com/p/DVFF7lCjwHD/" },
  ] satisfies CoveredSong[],

} as const;
