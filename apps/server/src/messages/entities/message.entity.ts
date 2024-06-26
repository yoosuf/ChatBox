import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema, Types } from 'mongoose';

export enum MessageType {
  Text = 'text',
  Video = 'video',
  Audio = 'audio',
  Link = 'link',
  Image = 'image', // Assuming you might also handle images
  Document = 'document', // For PDFs, Word documents, etc.
  Location = 'location', // If you want to send geographical locations
  Contact = 'contact', // If you want to send contact information
}
// Define the sub-schema for deletion records
const DeletionRecordSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User' },
  deletedAt: { type: Date },
});

@ObjectType()
class DeletionRecord {
  @Field(() => ID, { description: 'ID of the user who deleted the message' })
  userId: Types.ObjectId;

  @Field(() => Date, { description: 'Date when the message was deleted' })
  deletedAt: Date;
}

// Define the sub-schema for seen status records
const statusSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User' },
  deliveredAt: { type: Date, default: Date.now },
  seenAt: { type: Date, default: Date.now },
});

@ObjectType()
class status {
  @Field(() => ID, { description: 'ID of the user who saw the message' })
  userId: Types.ObjectId;

  @Field(() => Date, { description: 'Date when the message was delivered' })
  deliveredAt: Date;

  @Field(() => Date, { description: 'Date when the message was seen' })
  seenAt: Date;
}

@ObjectType()
export class Message extends Document {
  @Prop({ type: Types.ObjectId })
  @Field(() => ID, { description: 'Message Id' })
  _id: string;

  @Prop({ type: Types.ObjectId, ref: 'Conversation' })
  @Field(() => ID, { description: 'Conversation ID this message belongs to' })
  conversationId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  @Field(() => ID, { description: 'User ID this message belongs to' })
  senderId: Types.ObjectId;

  @Prop({ enum: MessageType })
  @Field(() => MessageType, { description: 'Message Content Type' })
  type: MessageType;

  @Field(() => String, { description: 'Message text' })
  text: string;

  @Prop({ type: [statusSchema], default: [] })
  @Field(() => [status], { description: 'Seen statuses of the message' })
  status: status[];

  @Prop({ type: [DeletionRecordSchema], default: [] })
  @Field(() => [DeletionRecord], { description: 'Records of deletions' })
  deleted: DeletionRecord[];

  @Prop({ type: Date })
  @Field(() => Date, { description: 'Creation Date' })
  createdAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
