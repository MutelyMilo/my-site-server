import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosEntity } from './photos.entity';
import { PhotoAlbumEntity } from '../photo-album/photo-album.entity';

@Module({
  imports: [
    // 在引用其他模块的时候如果涉及到查询等功能，要把 entity 带过来
    TypeOrmModule.forFeature([PhotosEntity, PhotoAlbumEntity]),
  ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
