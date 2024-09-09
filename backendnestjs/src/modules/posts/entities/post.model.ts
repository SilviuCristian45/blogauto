// src/posts/entities/post.entity.ts

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author } from '../../authors/entities/author.model';
// Import the Author entity

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  votes?: number;

  @Field(() => Author)
  @ManyToOne(() => Author, (author) => author.posts) // Correctly set up the many-to-one relationship
  author: Author;
}
