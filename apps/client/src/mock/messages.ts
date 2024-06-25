import { Message } from "../types/message";
import { userData } from "./users";

export const messagesArray: Message[] = [
    // Conversation 1
    { id: 1, text: "Hello, John!", timestamp: new Date("2024-06-22T10:00:00Z"), user: userData[2], conversationId: 1 },
    { id: 2, text: "Hi! How are you?", timestamp: new Date("2024-06-22T10:05:00Z"), user: userData[1], conversationId: 1 },
    { id: 3, text: "I am good, thank you! How about you?", timestamp: new Date("2024-06-22T10:10:00Z"), user: userData[2], conversationId: 1 },
    { id: 4, text: "I am fine too!", timestamp: new Date("2024-06-22T10:15:00Z"), user: userData[1], conversationId: 1 },
    { id: 5, text: "What are you up to today?", timestamp: new Date("2024-06-22T10:20:00Z"), user: userData[2], conversationId: 1 },
    { id: 6, text: "Just working on some projects. You?", timestamp: new Date("2024-06-22T10:25:00Z"), user: userData[1], conversationId: 1 },
    { id: 27, text: "Finished the project report?", timestamp: new Date("2024-06-23T09:00:00Z"), user: userData[0], conversationId: 1 },
    { id: 28, text: "Almost done.", timestamp: new Date("2024-06-23T09:15:00Z"), user: userData[1], conversationId: 1 },

    // Conversation 2
    { id: 7, text: "Hello, Jane!", timestamp: new Date("2024-06-22T09:00:00Z"), user: userData[1], conversationId: 2 },
    { id: 8, text: "Hi! I am good. How about you?", timestamp: new Date("2024-06-22T09:05:00Z"), user: userData[2], conversationId: 2 },
    { id: 9, text: "Doing great, thanks!", timestamp: new Date("2024-06-22T09:10:00Z"), user: userData[1], conversationId: 2 },
    { id: 10, text: "Good to hear!", timestamp: new Date("2024-06-22T09:15:00Z"), user: userData[2], conversationId: 2 },
    { id: 29, text: "Any plans for the weekend?", timestamp: new Date("2024-06-23T08:00:00Z"), user: userData[6], conversationId: 2 },
    { id: 30, text: "Yes, going hiking!", timestamp: new Date("2024-06-23T08:30:00Z"), user: userData[7], conversationId: 2 },

    // Conversation 3
    { id: 11, text: "What book are we reading next?", timestamp: new Date("2024-06-22T08:00:00Z"), user: userData[7], conversationId: 3 },
    { id: 12, text: "How about 'The Great Gatsby'?", timestamp: new Date("2024-06-22T08:05:00Z"), user: userData[8], conversationId: 3 },
    { id: 13, text: "I love that book!", timestamp: new Date("2024-06-22T08:10:00Z"), user: userData[9], conversationId: 3 },
    { id: 14, text: "Let's do it.", timestamp: new Date("2024-06-22T08:15:00Z"), user: userData[1], conversationId: 3 },
    { id: 31, text: "When is our next meeting?", timestamp: new Date("2024-06-23T07:00:00Z"), user: userData[6], conversationId: 3 },
    { id: 32, text: "Next Tuesday.", timestamp: new Date("2024-06-23T07:30:00Z"), user: userData[7], conversationId: 3 },

    // Conversation 4
    { id: 15, text: "Hey Alice, long time no see!", timestamp: new Date("2024-06-03T14:00:00Z"), user: userData[1], conversationId: 4 },
    { id: 16, text: "Indeed, it has been a while!", timestamp: new Date("2024-06-03T14:05:00Z"), user: userData[3], conversationId: 4 },
    { id: 17, text: "How have you been?", timestamp: new Date("2024-06-03T14:10:00Z"), user: userData[1], conversationId: 4 },
    { id: 18, text: "I have been great, just busy with work.", timestamp: new Date("2024-06-03T14:15:00Z"), user: userData[3], conversationId: 4 },
    { id: 33, text: "Let's catch up soon.", timestamp: new Date("2024-06-23T06:00:00Z"), user: userData[0], conversationId: 4 },
    { id: 34, text: "Sure, let's plan for next weekend.", timestamp: new Date("2024-06-23T06:30:00Z"), user: userData[2], conversationId: 4 },

    // Conversation 5
    { id: 19, text: "Hey Bob!", timestamp: new Date("2024-06-04T16:00:00Z"), user: userData[1], conversationId: 5 },
    { id: 20, text: "Hello! How are things?", timestamp: new Date("2024-06-04T16:05:00Z"), user: userData[4], conversationId: 5 },
    { id: 21, text: "Things are good, just staying busy.", timestamp: new Date("2024-06-04T16:10:00Z"), user: userData[1], conversationId: 5 },
    { id: 22, text: "Same here. Let’s catch up soon.", timestamp: new Date("2024-06-04T16:15:00Z"), user: userData[4], conversationId: 5 },
    { id: 35, text: "Any updates on the project?", timestamp: new Date("2024-06-23T05:00:00Z"), user: userData[0], conversationId: 5 },
    { id: 36, text: "Yes, we are on track.", timestamp: new Date("2024-06-23T05:30:00Z"), user: userData[3], conversationId: 5 },

    // Conversation 6
    { id: 23, text: "Hi Charlie!", timestamp: new Date("2024-06-05T12:00:00Z"), user: userData[1], conversationId: 6 },
    { id: 24, text: "Hey! What’s up?", timestamp: new Date("2024-06-05T12:05:00Z"), user: userData[5], conversationId: 6 },
    { id: 25, text: "Not much, just working. You?", timestamp: new Date("2024-06-05T12:10:00Z"), user: userData[1], conversationId: 6 },
    { id: 26, text: "Same here. Let’s grab coffee sometime.", timestamp: new Date("2024-06-05T12:15:00Z"), user: userData[5], conversationId: 6 },
    { id: 37, text: "Let's meet this weekend.", timestamp: new Date("2024-06-23T04:00:00Z"), user: userData[0], conversationId: 6 },
    { id: 38, text: "Sure, looking forward to it.", timestamp: new Date("2024-06-23T04:30:00Z"), user: userData[4], conversationId: 6 },

    // Conversation 7
    { id: 39, text: "Good morning team!", timestamp: new Date("2024-06-22T09:00:00Z"), user: userData[0], conversationId: 7 },
    { id: 40, text: "Morning! Let's start the standup.", timestamp: new Date("2024-06-22T09:05:00Z"), user: userData[1], conversationId: 7 },
    { id: 41, text: "I completed the task assigned to me.", timestamp: new Date("2024-06-22T09:10:00Z"), user: userData[2], conversationId: 7 },
    { id: 42, text: "Great! I am working on mine.", timestamp: new Date("2024-06-22T09:15:00Z"), user: userData[3], conversationId: 7 },
    { id: 43, text: "Let's wrap up and continue our work.", timestamp: new Date("2024-06-23T03:00:00Z"), user: userData[0], conversationId: 7 },
    { id: 44, text: "Okay, see you all tomorrow.", timestamp: new Date("2024-06-23T03:30:00Z"), user: userData[1], conversationId: 7 },

    // Conversation 8
    { id: 45, text: "Who's excited for the weekend trip?", timestamp: new Date("2024-06-22T08:00:00Z"), user: userData[4], conversationId: 8 },
    { id: 46, text: "I can't wait!", timestamp: new Date("2024-06-22T08:05:00Z"), user: userData[5], conversationId: 8 },
    { id: 47, text: "It's going to be fun!", timestamp: new Date("2024-06-22T08:10:00Z"), user: userData[6], conversationId: 8 },
    { id: 48, text: "Absolutely!", timestamp: new Date("2024-06-22T08:15:00Z"), user: userData[7], conversationId: 8 },
    { id: 49, text: "See you all on Saturday!", timestamp: new Date("2024-06-23T02:00:00Z"), user: userData[4], conversationId: 8 },
    { id: 50, text: "Yes, see you!", timestamp: new Date("2024-06-23T02:30:00Z"), user: userData[5], conversationId: 8 },

    // Conversation 9
    { id: 51, text: "Ready for gym today?", timestamp: new Date("2024-06-22T07:00:00Z"), user: userData[1], conversationId: 9 },
    { id: 52, text: "Yes, let's crush it!", timestamp: new Date("2024-06-22T07:05:00Z"), user: userData[7], conversationId: 9 },
    { id: 53, text: "I am bringing my new workout plan.", timestamp: new Date("2024-06-22T07:10:00Z"), user: userData[1], conversationId: 9 },
    { id: 54, text: "Awesome! Can't wait.", timestamp: new Date("2024-06-22T07:15:00Z"), user: userData[7], conversationId: 9 },
    { id: 55, text: "Let's do this!", timestamp: new Date("2024-06-23T01:00:00Z"), user: userData[1], conversationId: 9 },
    { id: 56, text: "Yes, let's go!", timestamp: new Date("2024-06-23T01:30:00Z"), user: userData[7], conversationId: 9 },

    // Conversation 10
    { id: 57, text: "Who's up for gaming night?", timestamp: new Date("2024-06-22T06:00:00Z"), user: userData[8], conversationId: 10 },
    { id: 58, text: "Count me in!", timestamp: new Date("2024-06-22T06:05:00Z"), user: userData[9], conversationId: 10 },
    { id: 59, text: "I'll bring the snacks.", timestamp: new Date("2024-06-22T06:10:00Z"), user: userData[2], conversationId: 10 },
    { id: 60, text: "Sounds great!", timestamp: new Date("2024-06-22T06:15:00Z"), user: userData[8], conversationId: 10 },
    { id: 61, text: "See you all tonight!", timestamp: new Date("2024-06-23T00:00:00Z"), user: userData[9], conversationId: 10 },
    { id: 62, text: "Yes, can't wait!", timestamp: new Date("2024-06-23T00:30:00Z"), user: userData[2], conversationId: 10 }
];
