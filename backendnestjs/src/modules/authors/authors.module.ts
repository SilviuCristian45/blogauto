import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.model';
import { Post } from '../posts/entities/post.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author, Post]), // Register both entities
  ],
  providers: [AuthorService, AuthorResolver],
  exports: [AuthorService],
})
export class AuthorModule {}
