import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/modules/posts/entities/post.model';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// Import the Post entity

@ObjectType()
@Entity()
export class Author {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  lastName?: string;

  @Field(() => [Post])
  @OneToMany(() => Post, (post) => post.author, { cascade: true }) // Correctly set up the one-to-many relationship
  posts: Post[];
}
