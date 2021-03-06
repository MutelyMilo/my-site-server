import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import {typeOrmConfig} from './config/TypeORM'
// 渲染前端静态代码需要的
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
// Modules
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MessageBoardModule } from './message-board/message-board.module';
import { CommentModule } from './comment/comment.module';
import { PhotoAlbumModule } from './photo-album/photo-album.module';
import { PhotosModule } from './photos/photos.module';
import { NotesModule } from './notes/notes.module';
import { NoteTypeModule } from './note-type/note-type.module';
import { QiniuTokenModule } from './qiniu-token/qiniu-token.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig as TypeOrmModuleOptions),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '/'),
    // }),
    UsersModule,
    AuthModule,
    MessageBoardModule,
    CommentModule,
    PhotoAlbumModule,
    PhotosModule,
    NotesModule,
    NoteTypeModule,
    QiniuTokenModule,
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
