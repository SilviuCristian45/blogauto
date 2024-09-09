// src/authors/author.resolver.ts

import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { Author } from './entities/author.model';
import { Post } from '../posts/entities/post.model';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  // Query to get all authors
  @Query(() => [Author])
  getAllAuthors() {
    return this.authorService.findAllAuthors();
  }

  // Query to get a specific author by ID
  @Query(() => Author, { nullable: true })
  getAuthorById(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findAuthorById(id);
  }

  @Mutation(() => Author)
  async createAuthor(
    @Args('createAuthorInput') createAuthorDto: CreateAuthorDto,
  ) {
    return await this.authorService.createAuthor(createAuthorDto);
  }
}
