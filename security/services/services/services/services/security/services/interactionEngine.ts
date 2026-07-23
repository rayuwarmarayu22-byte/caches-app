// Caches Real-Time Chat & Follow Interaction Engine

export interface ChatMessage {
  messageId: string;
  userId: string;
  text: string;
  timestamp: number;
}

export interface FollowEvent {
  followerId: string;
  creatorId: string;
  createdAt: number;
}

// Optimizes chat packet delivery for low-data networks (compressing text payloads)
export function sanitizeAndPackMessage(rawText: string): string {
  return rawText.trim().slice(0, 250); // Strict length guard for speed and efficiency
}

export function processInstantFollow(followerId: string, creatorId: string): FollowEvent {
  return {
    followerId,
    creatorId,
    createdAt: Date.now(),
  };
}
