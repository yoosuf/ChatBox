import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';

@ObjectType()
export class User extends Document {
  @Prop({ type: Types.ObjectId })
  @Field(() => ID, { description: 'User Id' })
  _id: Schema.Types.ObjectId;

  @Field(() => String, { description: 'User First Name' })
  firstName: string;

  @Field(() => String, { description: 'User Last Name' })
  lastName: string;

  @Prop({ required: true })
  @Field(() => String, { description: 'User Email' })
  email: string;

  @Prop({ required: true })
  @Field(() => String, { description: 'User Password' })
  password: string;

  @Field(() => String, { description: 'User Phone' })
  phone: string;

  @Field(() => Boolean, { description: 'User Active status' })
  isVerified: boolean;

  @Prop({ default: null })
  verificationToken: string;

  @Prop({ default: null })
  verifiedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

@ObjectType()
export class PasswordReset extends Document {
  @Field(() => Types.ObjectId, { description: 'Password Reset user Object' })
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: string;

  @Field(() => String, { description: 'Password Reset resetToken' })
  @Prop({ default: null })
  resetToken: string;

  @Field(() => Date, { description: 'Password Reset status' })
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PasswordResetSchema = SchemaFactory.createForClass(PasswordReset);

UserSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

@ObjectType()
export class Contact extends User {
  @Field(() => String, { description: 'Contact Group', nullable: true })
  @Prop()
  group?: string;

  @Field(() => String, { description: 'User First Name' })
  firstName: string;

  @Field(() => String, { description: 'User Last Name' })
  lastName: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
