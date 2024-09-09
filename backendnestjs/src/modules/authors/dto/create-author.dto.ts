import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorDto {
  @Field() // Required field for firstName
  firstName: string;

  @Field() // Required field for lastName
  lastName: string;
}
