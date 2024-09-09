import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthorModule } from './modules/authors/authors.module';
import { DatabaseInfo } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './modules/authors/entities/author.model';
import { Post } from './modules/posts/entities/post.model';
import { Module } from '@nestjs/common';
import { PostModule } from "./modules/posts/posts.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatabaseInfo.DATABASE_HOST,
      port: DatabaseInfo.DATABASE_PORT,
      username: DatabaseInfo.DATABASE_USERNAME,
      password: DatabaseInfo.DATABASE_PASSWORD,
      database: DatabaseInfo.DATABASE_NAME,
      entities: [Author, Post],
      logging: true,
      synchronize: true,
    }),

    AuthorModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
