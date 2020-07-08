import { Module } from '@nestjs/common';
import { PhotoAlbumEntity } from './photo-album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoAlbumController } from './photo-album.controller';
import { PhotoAlbumService } from './photo-album.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PhotoAlbumEntity])
  ],
  controllers: [PhotoAlbumController],
  providers: [PhotoAlbumService],
  exports: [PhotoAlbumService]
})

export class PhotoAlbumModule {}
