import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/createPhoto.dto';
import { Repository } from 'typeorm';
import { PhotosEntity } from './photos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoAlbumEntity } from '../photo-album/photo-album.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(PhotosEntity)
    private readonly photosRepository: Repository<PhotosEntity>,
    @InjectRepository(PhotoAlbumEntity)
    private readonly photoAlbumRepository: Repository<PhotosEntity>,
  ) {

  }
  async create(createPhotoDto: CreatePhotoDto, photoAlbumId: number) {
    const photoAlbum = await this.photoAlbumRepository.findOne(photoAlbumId)
    return this.photosRepository.create({
      ...createPhotoDto,
      photoAlbum
    }).save()
  }
}
