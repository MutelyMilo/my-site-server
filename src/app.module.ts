import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import {typeOrmConfig} from 'src/config/typeORM'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MessageBoardModule } from './message-board/message-board.module';
import { CommentModule } from './comment/comment.module';
// 渲染前端静态代码需要的
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig as TypeOrmModuleOptions),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    UsersModule,
    AuthModule,
    MessageBoardModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
