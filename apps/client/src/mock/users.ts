import { Contact, DispapraeingMessageType, User, UserProfile } from "../types/user";

export const userData: User[] = [
  { "id": 1, "name": "John Doe", "avatar": "https://source.unsplash.com/random/40x40/?portrait" },
  { "id": 2, "name": "Jane Smith", "avatar": "https://source.unsplash.com/random/40x40/?portrait" },
  { "id": 3, "name": "Alice Johnson", "avatar": "https://source.unsplash.com/random/40x40/?portrait" },
  { "id": 4, "name": "Bob Brown", "avatar": "https://source.unsplash.com/random/40x40/?portrait" },
  { "id": 5, "name": "Charlie Davis", "avatar": "https://source.unsplash.com/random/40x40/?portrait" },
  { "id": 6, "name": "David Evans", "avatar": "https://source.unsplash.com/random/40x40/?portrait" },
  { "id": 7, "name": "Eve Foster", "avatar": "https://source.unsplash.com/random/40x40/?portrait" },
  { "id": 8, "name": "Frank Green", "avatar": "https://source.unsplash.com/random/40x40/?portrait" },
  { "id": 9, "name": "Grace Harris", "avatar": "https://source.unsplash.com/random/40x40/?portrait" },
  { "id": 10, "name": "Henry Irving", "avatar": "https://source.unsplash.com/random/40x40/?portrait" }
]
  ;


export const userProfileData: UserProfile[] = [
  { id: 0, name: "Alice Smith", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Loves to read books", status: "Online" },
  { id: 1, name: "Bob Johnson", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Enjoys hiking", status: "Offline" },
  { id: 2, name: "Charlie Brown", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Guitar player", status: "Busy" },
  { id: 3, name: "Daisy Thomas", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Yoga enthusiast", status: "Online" },
  { id: 4, name: "Ethan Walker", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Loves cooking", status: "Offline" },
  { id: 5, name: "Fiona Davis", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Traveler", status: "Offline" },
  { id: 6, name: "George Harris", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Tech geek", status: "Online" },
  { id: 7, name: "Hannah Clark", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Photography lover", status: "Online" },
  { id: 8, name: "Ian Lewis", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Fitness freak", status: "Offline" },
  { id: 9, name: "Jack Miller", avatar: "https://source.unsplash.com/random/40x40/?portrait", about: "Avid gamer", status: "Busy" },
];


export const contactsData: Contact[] = [
  {
    ...userProfileData[0], 
    faved: [],
    muteNotification: false,
    dispapraeingMessage: DispapraeingMessageType.Off,
    blocked: false,
  },
  {
    ...userProfileData[1], 
    faved: [],
    muteNotification: true,
    dispapraeingMessage: DispapraeingMessageType.ONEDAY,
    blocked: false,
  },
  {
    ...userProfileData[2], 
    faved: [],
    muteNotification: false,
    dispapraeingMessage: DispapraeingMessageType.SEVENDAYS,
    blocked: true,
  },
  {
    ...userProfileData[3], 
    faved: [],
    muteNotification: false,
    dispapraeingMessage: DispapraeingMessageType.Off,
    blocked: false,
  },
  {
    ...userProfileData[4], 
    faved: [],
    muteNotification: true,
    dispapraeingMessage: DispapraeingMessageType.NINTYDAYS,
    blocked: false,
  },
  {
    ...userProfileData[5], 
    faved: [],
    muteNotification: true,
    dispapraeingMessage: DispapraeingMessageType.NINTYDAYS,
    blocked: false,
  },
  {
    ...userProfileData[6], 
    faved: [],
    muteNotification: true,
    dispapraeingMessage: DispapraeingMessageType.NINTYDAYS,
    blocked: false,
  },
  {
    ...userProfileData[7], 
    faved: [],
    muteNotification: true,
    dispapraeingMessage: DispapraeingMessageType.NINTYDAYS,
    blocked: false,
  },
  {
    ...userProfileData[8], 
    faved: [],
    muteNotification: true,
    dispapraeingMessage: DispapraeingMessageType.NINTYDAYS,
    blocked: false,
  },
  {
    ...userProfileData[9], 
    faved: [],
    muteNotification: true,
    dispapraeingMessage: DispapraeingMessageType.NINTYDAYS,
    blocked: false,
  },
];
