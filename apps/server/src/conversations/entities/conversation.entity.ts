import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema as NestSchema, SchemaFactory } from '@nestjs/mongoose'; // Alias Schema from @nestjs/mongoose to avoid conflicts
import { Document, Schema, Types } from 'mongoose'; // Ensure Schema is imported from 'mongoose'
import { Message } from 'src/messages/entities/message.entity';

export enum ConversationType {
  Direct = 'direct',
  Group = 'group',
}

// Register the ConversationType enum with GraphQL
registerEnumType(ConversationType, {
  name: 'ConversationType',
  description: 'The type of the conversation',
});

export enum ConversationRole {
  Admin = 'admin',
  Member = 'member',
  Guest = 'guest',
}

registerEnumType(ConversationRole, {
  name: 'ConversationRole',
  description: 'Role of the participant in the conversation',
});

// Define the participant sub-schema using Mongoose's Schema, ensuring that it's the correct Schema class from Mongoose
const ParticipantSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User' },
  role: {
    type: String,
    enum: Object.values(ConversationRole),
    default: ConversationRole.Member,
  },
});

@ObjectType()
class Participant {
  @Field(() => ID, { description: 'User ID of the participant' })
  userId: Types.ObjectId;

  @Field(() => ConversationRole, {
    description: 'Role of the participant in the conversation',
  })
  role: ConversationRole;
}

@ObjectType()
@NestSchema() // Use the aliased @NestSchema decorator here
export class Conversation extends Document {
  @Prop({ type: Types.ObjectId })
  @Field(() => ID, { description: 'Conversation Id' })
  _id: string;

  @Prop({ type: String, enum: ConversationType })
  @Field(() => ConversationType, { description: 'Type of the conversation' })
  kind: ConversationType; // Add this line to include the conversation type

  @Prop()
  @Field(() => String, { description: 'Conversation Title' })
  title: string;

  @Prop({ type: [ParticipantSchema], default: [] })
  @Field(() => [Participant], {
    description: 'Participants in the conversation',
  })
  participants: Participant[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Message' }] })
  @Field(() => [Message], { description: 'List of Messages' })
  messages: Message[];

  @Prop({ type: Date })
  @Field(() => Date, { description: 'Creation Date' })
  createdAt: Date;

  @Prop({ type: Date, required: false })
  @Field(() => Date, { description: 'Update Date', nullable: true })
  updatedAt?: Date;
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
