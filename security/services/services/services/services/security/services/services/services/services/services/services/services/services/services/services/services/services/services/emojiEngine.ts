// Caches Emoji & Rich Text Reaction Engine

export interface EmojiReactionPayload {
  reactionId: string;
  userId: string;
  emojiSymbol: string;
  timestamp: number;
}

export interface StyledTextOverlay {
  textId: string;
  content: string;
  fontStyle: 'BOLD' | 'ITALIC' | 'NEON' | 'STANDARD';
  textColor: string;
}

// Sanitizes and validates emoji input for real-time chat and stream overlays
export function processEmojiReaction(userId: string, emojiSymbol: string): EmojiReactionPayload {
  return {
    reactionId: `rxn_${Math.random().toString(36).substring(2, 9)}`,
    userId,
    emojiSymbol: emojiSymbol.trim().slice(0, 2), // Restricts to clean single/double emoji packets
    timestamp: Date.now(),
  };
}

export function createStyledTextOverlay(content: string, fontStyle: 'BOLD' | 'ITALIC' | 'NEON' | 'STANDARD', textColor: string): StyledTextOverlay {
  return {
    textId: `txt_${Math.random().toString(36).substring(2, 9)}`,
    content: content.trim().slice(0, 150), // Optimized for low-data transmission
    fontStyle,
    textColor,
  };
}
