import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.model';
import { AuthorModule } from '../authors/authors.module';
import { PostsResolver } from './posts.resolver';
import { Author } from "../authors/entities/author.model";

@Module({
  imports: [
    TypeOrmModule.forFeature([Author, Post]),
    AuthorModule, // Import AuthorModule for access to AuthorService
  ],
  providers: [PostsResolver],
})
export class PostModule {}
