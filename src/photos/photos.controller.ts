import { Controller, Post } from '@nestjs/common';
// import { PhotoAlbumService } from '../photo-album/photo-album.service';

@Controller('photos')
export class PhotosController {
  constructor(
    // private readonly photosService: PhotoAlbumService
  ) {}

  @Post()
  async create() {

  }
}
