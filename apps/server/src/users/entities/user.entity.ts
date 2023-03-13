import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';

@ObjectType()
export class User extends Document {
  @Field(() => String, { description: 'User ID' })
  _id: String;

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

  @Prop({ type: Schema.Types.ObjectId, ref: 'User' })
  user: String;

  @Prop({ default: null })
  resetToken: String;

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