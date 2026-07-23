// Caches Low-Data Streaming Engine: Adaptive Bitrate & Quality Control

export interface StreamConfig {
  resolution: '360p' | '480p' | '720p' | '1080p';
  bitrateKbps: number;
  dataSaverActive: boolean;
}

export function getOptimalStreamSettings(networkSpeedMbps: number, userPrefersDataSaver: boolean): StreamConfig {
  if (userPrefersDataSaver || networkSpeedMbps < 3.0) {
    // Optimized profile: Uses up to 50% less data for smooth, buffer-free playback
    return {
      resolution: '480p',
      bitrateKbps: 650,
      dataSaverActive: true,
    };
  }

  // High-clarity profile for strong connections
  return {
    resolution: '720p',
    bitrateKbps: 1500,
    dataSaverActive: false,
  };
}
