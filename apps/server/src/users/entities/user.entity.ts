import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';

@ObjectType()
export class User extends Document {
  @Prop({ type: Types.ObjectId })
  @Field(() => Types.ObjectId, { description: 'User ID' })
  _id: Schema.Types.ObjectId

  @Field(() => String, { description: 'User First Name' })
  firstName: String;

  @Field(() => String, { description: 'User Last Name' })
  lastName: String;

  @Prop({ required: true })
  @Field(() => String, { description: 'User Email' })
  email: String;

  @Prop({ required: true })
  @Field(() => String, { description: 'User Password' })
  password: String;

  @Field(() => String, { description: 'User Phone' })
  phone: String;

  @Field(() => Boolean, { description: 'User Active status' })
  isVerified: Boolean;

  @Prop({ default: null })
  verificationToken: String;

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
  user: String;

  @Field(() => String, { description: 'Password Reset resetToken' })
  @Prop({ default: null })
  resetToken: String;

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