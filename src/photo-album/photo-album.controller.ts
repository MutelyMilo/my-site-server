import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { PhotoAlbumService } from './photo-album.service';
import { PhotoAlbumEntity } from './photo-album.entity';
import { CreatePhotoAlbumDto } from './dto/createPhotoAlbum.dto';
import { DeletePhotoAlbumDto } from './dto/deletePhotoAlbum.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
  async create(@Body() createPhotoAlbumDto: CreatePhotoAlbumDto): Promise<PhotoAlbumEntity> {
    return this.photoAlbumService.create(createPhotoAlbumDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async delete(@Body() deletePhotoAlbumDto: DeletePhotoAlbumDto): Promise<PhotoAlbumEntity> {
    return this.photoAlbumService.delete(deletePhotoAlbumDto);
  }
}
