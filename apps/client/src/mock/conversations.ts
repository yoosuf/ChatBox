import { Message } from "../types/conversation";
import { users } from "./users";

export const initialMessages: { [key: number]: Message[] } = {
    1: [
      { id: 1, text: 'Hello, John!', timestamp: new Date('2023-06-01T10:00:00'), user: users[1] },
      { id: 2, text: 'Hi! How are you?', timestamp: new Date('2023-06-01T10:05:00'), user: users[0] },
      { id: 3, text: 'I am good, thank you! How about you?', timestamp: new Date('2023-06-01T10:10:00'), user: users[1] },
      { id: 4, text: 'I am fine too!', timestamp: new Date('2023-06-01T10:15:00'), user: users[0] },
      { id: 5, text: 'What are you up to today?', timestamp: new Date('2023-06-02T10:20:00'), user: users[1] },
      { id: 6, text: 'Just working on some projects. You?', timestamp: new Date('2023-06-02T10:25:00'), user: users[0] },
      { id: 7, text: 'Hello, John!', timestamp: new Date('2023-06-01T10:00:00'), user: users[1] },
      { id: 8, text: 'Hi! How are you?', timestamp: new Date('2023-06-01T10:05:00'), user: users[0] },
      { id: 9, text: 'I am good, thank you! How about you?', timestamp: new Date('2023-06-01T10:10:00'), user: users[1] },
      { id: 10, text: 'I am fine too!', timestamp: new Date('2023-06-01T10:15:00'), user: users[0] },
      { id: 11, text: 'What are you up to today?', timestamp: new Date('2023-06-02T10:20:00'), user: users[1] },
      { id: 12, text: 'Just working on some projects. You?', timestamp: new Date('2023-06-02T10:25:00'), user: users[0] },
      { id: 13, text: 'Hello, John!', timestamp: new Date('2023-06-01T10:00:00'), user: users[1] },
      { id: 14, text: 'Hi! How are you?', timestamp: new Date('2023-06-01T10:05:00'), user: users[0] },
      { id: 15, text: 'I am good, thank you! How about you?', timestamp: new Date('2023-06-01T10:10:00'), user: users[1] },
      { id: 16, text: 'I am fine too!', timestamp: new Date('2023-06-01T10:15:00'), user: users[0] },
      { id: 17, text: 'What are you up to today?', timestamp: new Date('2023-06-02T10:20:00'), user: users[1] },
      { id: 18, text: 'Just working on some projects. You?', timestamp: new Date('2023-06-02T10:25:00'), user: users[0] },
      { id: 19, text: 'Hello, John!', timestamp: new Date('2023-06-01T10:00:00'), user: users[1] },
      { id: 20, text: 'Hi! How are you?', timestamp: new Date('2023-06-01T10:05:00'), user: users[0] },
      { id: 21, text: 'I am good, thank you! How about you?', timestamp: new Date('2023-06-01T10:10:00'), user: users[1] },
    ],
    2: [
      { id: 1, text: 'Hello, Jane!', timestamp: new Date('2023-06-02T09:00:00'), user: users[0] },
      { id: 2, text: 'Hi! I am good. How about you?', timestamp: new Date('2023-06-02T09:05:00'), user: users[1] },
      { id: 3, text: 'Doing great, thanks!', timestamp: new Date('2023-06-02T09:10:00'), user: users[0] },
      { id: 4, text: 'Good to hear!', timestamp: new Date('2023-06-02T09:15:00'), user: users[1] },
    ],
    3: [
      { id: 1, text: 'Hey Alice, long time no see!', timestamp: new Date('2023-06-03T14:00:00'), user: users[0] },
      { id: 2, text: 'Indeed, it has been a while!', timestamp: new Date('2023-06-03T14:05:00'), user: users[2] },
      { id: 3, text: 'How have you been?', timestamp: new Date('2023-06-03T14:10:00'), user: users[0] },
      { id: 4, text: 'I have been great, just busy with work.', timestamp: new Date('2023-06-03T14:15:00'), user: users[2] },
    ],
    4: [
      { id: 1, text: 'Hey Bob!', timestamp: new Date('2023-06-04T16:00:00'), user: users[0] },
      { id: 2, text: 'Hello! How are things?', timestamp: new Date('2023-06-04T16:05:00'), user: users[3] },
      { id: 3, text: 'Things are good, just staying busy.', timestamp: new Date('2023-06-04T16:10:00'), user: users[0] },
      { id: 4, text: 'Same here. Let’s catch up soon.', timestamp: new Date('2023-06-04T16:15:00'), user: users[3] },
    ],
    5: [
      { id: 1, text: 'Hi Charlie!', timestamp: new Date('2023-06-05T12:00:00'), user: users[0] },
      { id: 2, text: 'Hey! What’s up?', timestamp: new Date('2023-06-05T12:05:00'), user: users[4] },
      { id: 3, text: 'Not much, just working. You?', timestamp: new Date('2023-06-05T12:10:00'), user: users[0] },
      { id: 4, text: 'Same here. Let’s grab coffee sometime.', timestamp: new Date('2023-06-05T12:15:00'), user: users[4] },
    ],
  };
  