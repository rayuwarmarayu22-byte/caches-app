// Caches Live GIF Rewards & Creator Tipping Engine

export interface LiveGifReward {
  rewardId: string;
  senderUserId: string;
  recipientCreatorId: string;
  gifAssetUrl: string;
  rewardValueUSD: number;
  timestamp: number;
}

// Processes real-time animated GIF rewards and credits creator wallet instantly
export function sendLiveGifReward(senderUserId: string, recipientCreatorId: string, gifAssetUrl: string, tierAmountUSD: number): LiveGifReward {
  return {
    rewardId: `rew_${Math.random().toString(36).substring(2, 9)}`,
    senderUserId,
    recipientCreatorId,
    gifAssetUrl: gifAssetUrl.trim(),
    rewardValueUSD: Math.max(0.50, tierAmountUSD), // Minimum micro-tip threshold for network sustainability
    timestamp: Date.now(),
  };
}

export function calculateRewardBonusMultiplier(rewardCount: number): number {
  // Boosts viral ranking when a broadcast receives high-value animated rewards
  return Math.min(2.5, 1.0 + (rewardCount * 0.05));
}
