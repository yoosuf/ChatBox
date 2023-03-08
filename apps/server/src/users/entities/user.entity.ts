import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'User Id' })
  _id: String;

  @Field(() => String, { description: 'User First Name' })
  firstName: String;

  @Field(() => String, { description: 'User Last Name' })
  lastName: String;

  @Field(() => String, { description: 'User Email' })
  email: String;

  @Field(() => String, { description: 'User Phone' })
  phone: String;

  @Field(() => Boolean, { description: 'User Active status' })
  isActive: Boolean;
}
