import { Conversation, ConversationType } from "../types/conversation";
import { contactsData } from "./users";
import { messagesArray } from "./messages";

export const conversationsData: Conversation[] = [
  {
    id: 1,
    title: "Project Discussion",
    participants: [
      { ...contactsData[0], role: "Admin" },
      { ...contactsData[1], role: "Member" },
      { ...contactsData[2], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 1),
    type: ConversationType.Group,
    createdAt:new Date("2024-06-22T09:00:00Z")

  },
  {
    id: 2,
    title: "Weekend Plans",
    participants: [
      { ...contactsData[6], role: "Admin" },
      { ...contactsData[7], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 2),
    type: ConversationType.Direct,
    createdAt:new Date("2024-06-22T09:00:00Z")
  },
  {
    id: 3,
    title: "Book Club",
    participants: [
      { ...contactsData[0], role: "Admin" },
      { ...contactsData[1], role: "Member" },
      { ...contactsData[2], role: "Member" },
      { ...contactsData[3], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 3),
    type: ConversationType.Group,
    createdAt:new Date("2024-06-22T09:00:00Z")
  },
  {
    id: 4,
    title: "Catch Up",
    participants: [
      { ...contactsData[0], role: "Admin" },
      { ...contactsData[2], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 4),
    type: ConversationType.Direct,
    createdAt:new Date("2024-06-22T09:00:00Z")
  },
  {
    id: 5,
    title: "Work Updates",
    participants: [
      { ...contactsData[0], role: "Admin" },
      { ...contactsData[3], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 5),
    type: ConversationType.Direct,
    createdAt:new Date("2024-06-22T09:00:00Z")
  },
  {
    id: 6,
    title: "Coffee Chat",
    participants: [
      { ...contactsData[0], role: "Admin" },
      { ...contactsData[4], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 6),
    type: ConversationType.Direct,
    createdAt:new Date("2024-06-22T09:00:00Z")
  },
  {
    id: 7,
    title: "Daily Standup",
    participants: [
      { ...contactsData[0], role: "Admin" },
      { ...contactsData[1], role: "Member" },
      { ...contactsData[2], role: "Member" },
      { ...contactsData[3], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 7),
    type: ConversationType.Group,
    createdAt:new Date("2024-06-22T09:00:00Z")
  },
  {
    id: 8,
    title: "Weekend Trip",
    participants: [
      { ...contactsData[4], role: "Admin" },
      { ...contactsData[5], role: "Member" },
      { ...contactsData[6], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 8),
    type: ConversationType.Group,
    createdAt:new Date("2024-06-22T09:00:00Z")
  },
  {
    id: 9,
    title: "Gym Buddies",
    participants: [
      { ...contactsData[1], role: "Admin" },
      { ...contactsData[7], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 9),
    type: ConversationType.Direct,
    createdAt:new Date("2024-06-22T09:00:00Z")
  },
  {
    id: 10,
    title: "Gaming Night",
    participants: [
      { ...contactsData[8], role: "Admin" },
      { ...contactsData[9], role: "Member" },
      { ...contactsData[2], role: "Member" },
    ],
    messages: messagesArray.filter(message => message.conversationId === 10),
    type: ConversationType.Group,
    createdAt:new Date("2024-06-22T09:00:00Z")
  }
];