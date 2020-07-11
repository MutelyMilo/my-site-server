import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CreatePhotoDto } from './dto/createPhoto.dto';
import { PhotosService } from './photos.service';
import { DeletePhotoDto } from './dto/deletePhoto.dto';

@Controller('photos')
export class PhotosController {
  constructor(
    private readonly photosService: PhotosService
  ) {}

  @Post()
  async create(@Body() createPhotoDto: CreatePhotoDto) {
    return await this.photosService.create(createPhotoDto)
  }

  @Delete()
  async delete(@Body() deletePhotoDto: DeletePhotoDto) {
    return await this.photosService.delete(deletePhotoDto)
  }
}
