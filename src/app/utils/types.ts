// TypeScript interfaces that are used across the application
export interface PlayerInfo {
  thumbnail: string;
  name: string;
  position: string;
  height: string;
  weight: string;
  number: string;
}

export interface GameInfo {
  homeTeam: {
    badgeLogo: string;
    name: string;
    score?: string;
  };
  awayTeam: {
    badgeLogo: string;
    name: string;
    score?: string;
  };
  timestamp: string;
  video?: string;
  videoThumbnail?: string;
  status: string;
}

export interface TeamInfo {
  name: string;
  stadium: string;
  stadiumLocation: string;
  stadiumCapacity: string;
  badgeLogo: string;
  jerseyImage: string;
  story: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    website: string;
  };
}

export interface ErrorMessage {
  message: string;
  error: boolean;
}
