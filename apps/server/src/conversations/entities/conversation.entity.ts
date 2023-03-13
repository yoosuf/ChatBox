import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
export class Conversation extends Document {
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


export const ConversationSchema = SchemaFactory.createForClass(Conversation);
