import { Message } from "./message";

export enum DispapraeingMessageType {
  ONEDAY = "24 Hours",
  SEVENDAYS = "7 Days",
  NINTYDAYS = "90 Days",
  Off = "Off",
}

export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface UserProfile extends User {
  about: string;
  status: string;
}

export interface Contact extends UserProfile {
  faved: Message[];
  muteNotification: Boolean;
  dispapraeingMessage: DispapraeingMessageType;
  blocked: Boolean;
}

export interface Participant extends UserProfile {
  role: string;
}