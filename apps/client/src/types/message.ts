import { User } from "./user";

export interface Message {
    id: number;
    text: string;
    timestamp: Date;
    user: User;
    conversationId: number;
  }
  