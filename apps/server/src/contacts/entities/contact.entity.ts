import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Contact {
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
