import { Controller, Get, Post } from '@nestjs/common';
import { PhotoAlbumService } from './photo-album.service';
import { PhotoAlbumEntity } from './photo-album.entity';

@Controller('photo-album')
export class PhotoAlbumController {
  constructor(
    private readonly photoAlbumService: PhotoAlbumService
  ) {}

  @Get()
  async all(): Promise<PhotoAlbumEntity[]> {
    return this.photoAlbumService.all();
  }

  @Post()
  async create(): Promise<PhotoAlbumEntity> {
    return this.photoAlbumService.create();
  }
}
