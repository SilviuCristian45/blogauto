import { InputType, Field, Int } from '@nestjs/graphql';

@InputType() // Use InputType for input data
export class CreatePostDto {
  @Field() // Mark title as a required GraphQL field
  title: string;

  @Field((type) => Int, { nullable: true }) // Mark votes as a nullable GraphQL field
  votes?: number;

  @Field((type) => Int) // Include authorId to link the post with an author
  authorId: number;
}
