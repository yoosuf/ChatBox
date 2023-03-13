import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
export class Contact extends Document {
  @Field(() => String, { description: 'Contact Id' })
  _id: String;

  @Field(() => String, { description: 'Contact First Name' })
  firstName: String;

  @Field(() => String, { description: 'Contact Last Name' })
  lastName: String;

  @Field(() => String, { description: 'Contact Email' })
  email: String;

  @Field(() => String, { description: 'Contact Phone' })
  phone: String;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
