import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/createPhoto.dto';
import { Repository } from 'typeorm';
import { PhotosEntity } from './photos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoAlbumEntity } from '../photo-album/photo-album.entity';
import { DeletePhotoDto } from './dto/deletePhoto.dto';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotosEntity)
    private readonly photosRepository: Repository<PhotosEntity>,
    @InjectRepository(PhotoAlbumEntity)
    private readonly photoAlbumRepository: Repository<PhotosEntity>,
  ) {}

  async create(createPhotoDto: CreatePhotoDto) {
    const photoAlbum = await this.photoAlbumRepository.findOne(createPhotoDto.photoAlbumId)
    return this.photosRepository.create({
      ...createPhotoDto,
      photoAlbum
    }).save()
  }

  async delete(deletePhotoDto: DeletePhotoDto) {
    await this.photosRepository.delete(deletePhotoDto)
    return {
      message: "Delete success."
    }
  }
}
