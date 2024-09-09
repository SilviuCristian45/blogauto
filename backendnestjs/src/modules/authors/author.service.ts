// src/authors/author.service.ts

import { BadRequestException, Injectable } from "@nestjs/common";
import { Author } from './entities/author.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Post } from '../posts/entities/post.model';
import { CreatePostDto } from "../posts/dto/create-post.dto";

@Injectable()
export class AuthorService {
  // Simulate an in-memory database
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  // Fetch all authors
  async findAllAuthors(): Promise<Author[]> {
    return this.authorsRepository.find({});
  }

  // Find an author by id
  async findAuthorById(id: number): Promise<Author> {
    return this.authorsRepository.findOneBy({ id: id });
  }

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const { firstName, lastName } = createAuthorDto;

    const author = new Author();
    author.firstName = firstName;
    author.lastName = lastName;
    author.posts = []; // Initialize with an empty array

    return await this.authorsRepository.save(author);
  }

  upvotePost(authorId: number, postId: number) {
    throw new Error('Method not implemented.');
  }
  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const { authorId, title, votes } = createPostDto;
    const post = new Post();
    const postAuthor = await this.authorsRepository.findOneBy({ id: authorId });

    if (!postAuthor) throw new Error('Author not found');
    post.author = postAuthor;
    post.title = title;
    post.votes = votes;
    return await this.postRepository.save(post);
  }
}
