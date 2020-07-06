import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoAlbumEntity } from './photo-album.entity';
import { Repository } from 'typeorm';
import { CreatePhotoAlbumDto } from './dto/createPhotoAlbum.dto';
import { DeletePhotoAlbumDto } from './dto/deletePhotoAlbum.dto';

@Injectable()
export class PhotoAlbumService {
  constructor(
    @InjectRepository(PhotoAlbumEntity)
    private readonly photoAlbumEntityRepository: Repository<PhotoAlbumEntity>
  ) {}

  async all(): Promise<PhotoAlbumEntity[]> {
    return await this.photoAlbumEntityRepository.find();
  }

  async create(createPhotoAlbumDto: CreatePhotoAlbumDto): Promise<PhotoAlbumEntity> {
    return await this.photoAlbumEntityRepository.create(createPhotoAlbumDto).save()
  }

  async delete(deletePhotoAlbumDto: DeletePhotoAlbumDto): Promise<any> {
    await this.photoAlbumEntityRepository.delete(deletePhotoAlbumDto)
    return {
      message: "Delete success."
    }
  }
}
