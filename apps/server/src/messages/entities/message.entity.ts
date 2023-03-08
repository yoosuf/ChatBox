import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field(() => String, { description: 'Message Id' })
  _id: String;

  @Field(() => String, { description: 'Message Content Type' })
  contentType: String;

  @Field(() => String, { description: 'Message Content' })
  content: String;

  @Field(() => String, { description: 'Message Sender ID' })
  senderId: String;

  @Field(() => [String], { description: 'Message Seen Staus' })
  seenStaus: [String];

  @Field(() => [String], { description: 'Conversation Deleted By' })
  deletedBy: [String];
}
