import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}



@ObjectType()
export class AuthPayload {
  @Field()
  accessToken: string;
}