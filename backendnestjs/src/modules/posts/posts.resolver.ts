// src/authors/author.resolver.ts

import { Resolver, Args, Mutation, Int } from '@nestjs/graphql';
import { Post } from './entities/post.model';
import { AuthorService } from '../authors/author.service';
import { CreatePostDto } from "./dto/create-post.dto";

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly authorService: AuthorService) {}
  @Mutation(() => Post)
  createPost(
    @Args('createPostInput', { type: () => CreatePostDto })
    createPostDto: CreatePostDto,
  ) {
    return this.authorService.createPost(createPostDto);
  }

  // Mutation to upvote a post
  @Mutation(() => Post)
  upvotePost(
    @Args('authorId', { type: () => Int }) authorId: number,
    @Args('postId', { type: () => Int }) postId: number,
  ) {
    return this.authorService.upvotePost(authorId, postId);
  }
}
