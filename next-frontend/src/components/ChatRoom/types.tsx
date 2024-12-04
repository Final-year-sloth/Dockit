// types.tsx
export interface Message {
    messageId: string;
    senderId: string;
    recieverId: string;
    timestamp: number;
    messageContent: string;
  }
export interface User {
    id: string;
    name: string;
    avatarUrl: string;
    lastMessage: string;
    lastMessageTimestamp: number; // Timestamp of the last message
  }