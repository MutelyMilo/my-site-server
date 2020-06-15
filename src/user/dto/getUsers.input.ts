import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetUsersInput {
  @Field()
  current?: string;
  
  @Field()
  pageSize?: string;
}