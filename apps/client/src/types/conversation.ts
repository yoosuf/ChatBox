import { Message } from "./message";
import { Participant } from "./user";


export enum ConversationType {
  Direct = "direct",
  Group = "group"
}



export interface Conversation {
  id: number;
  title: string;
  participants: Participant[];
  messages: Message[];
  type: ConversationType;
  createdAt: Date;
  updatedAt?: Date;
}