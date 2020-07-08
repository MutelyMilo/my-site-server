import { Body, Controller, Post } from '@nestjs/common';
import { CreatePhotoDto } from './dto/createPhoto.dto';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(
    private readonly photosService: PhotosService
  ) {}

  @Post()
  async create(@Body() createPhotoDto: CreatePhotoDto, photoAlbumId: number) {
    return await this.photosService.create(createPhotoDto, photoAlbumId)
  }
}
