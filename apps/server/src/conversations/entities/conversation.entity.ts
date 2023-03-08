import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Conversation {
  @Field(() => String, { description: 'Conversation Id' })
  _id: String;

  @Field(() => String, { description: 'Conversation Title' })
  title: String;

  @Field(() => String, { description: 'Conversation Creator ID' })
  creatorId: String;

  @Field(() => [String], { description: 'Conversation Creator ID' })
  participants: [String];

  @Field(() => [String], { description: 'Conversation Deleted By' })
  deletedBy: [String];
}
