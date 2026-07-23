// Caches Viral Momentum & Cross-Border Trend Ignition Engine

export interface ViralIgnitionCampaign {
  campaignId: string;
  mediaId: string;
  creatorName: string;
  targetRegions: string[];
  momentumVelocityScore: number;
  ignitionStatus: 'IGNITING' | 'PEAK_VIRAL' | 'GLOBAL_TAKEOVER';
}

// Detects early engagement spikes and launches cross-border distribution surges
export function triggerViralIgnition(mediaId: string, creatorName: string, initialLikes: number): ViralIgnitionCampaign {
  const velocity = Math.min(100.0, Number((initialLikes * 0.45).toFixed(1)));

  let status: 'IGNITING' | 'PEAK_VIRAL' | 'GLOBAL_TAKEOVER' = 'IGNITING';
  if (velocity >= 75) {
    status = 'GLOBAL_TAKEOVER';
  } else if (velocity >= 40) {
    status = 'PEAK_VIRAL';
  }

  return {
    campaignId: `ign_${Math.random().toString(36).substring(2, 9)}`,
    mediaId,
    creatorName: creatorName.trim(),
    targetRegions: ['UK', 'West Africa', 'North America', 'Latin America', 'Europe'],
    momentumVelocityScore: velocity,
    ignitionStatus: status,
  };
}

export function calculateNetworkSpikeBoost(campaign: ViralIgnitionCampaign): number {
  // Multiples organic feed reach when ignition status hits peak viral levels
  switch (campaign.ignitionStatus) {
    case 'GLOBAL_TAKEOVER': return 10.0;
    case 'PEAK_VIRAL': return 5.0;
    case 'IGNITING': return 2.0;
    default: return 1.0;
  }
}
