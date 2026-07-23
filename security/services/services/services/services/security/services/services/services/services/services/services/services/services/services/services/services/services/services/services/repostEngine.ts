// Caches Rich Description & Repost Amplification Engine

export interface RepostPayload {
  repostId: string;
  originalMediaId: string;
  userId: string;
  customDescription: string;
  timestamp: number;
}

// Validates and formats repost payloads for low-data network propagation
export function createRepostWithDescription(originalMediaId: string, userId: string, description: string): RepostPayload {
  return {
    repostId: `rpt_${Math.random().toString(36).substring(2, 9)}`,
    originalMediaId,
    userId,
    customDescription: description.trim().slice(0, 300), // Strict character cap for fast feed rendering
    timestamp: Date.now(),
  };
}

export function calculateRepostAmplificationBoost(repostCount: number): number {
  // Multiplies viral distribution score based on community repost velocity
  return Math.min(50.0, repostCount * 1.5);
}
