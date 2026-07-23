// Caches Advanced User Settings & Playback Quality Control Engine

export interface UserAppSettings {
  userId: string;
  preferredQuality: '360p' | '480p' | '720p' | '1080p' | 'AUTO';
  dataSaverMode: boolean;
  autoPlayNext: boolean;
  playbackSpeed: number; // e.g., 1.0, 1.25, 1.5, 2.0
}

export function getDefaultAppSettings(userId: string): UserAppSettings {
  return {
    userId,
    preferredQuality: 'AUTO',
    dataSaverMode: true, // Optimized for low-data environments by default
    autoPlayNext: true,
    playbackSpeed: 1.0,
  };
}

export function updateQualityPreference(settings: UserAppSettings, newQuality: '360p' | '480p' | '720p' | '1080p' | 'AUTO'): UserAppSettings {
  return {
    ...settings,
    preferredQuality: newQuality,
    dataSaverMode: newQuality === '360p' || newQuality === '480p',
  };
}
