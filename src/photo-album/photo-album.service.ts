import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoAlbumEntity } from './photo-album.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoAlbumService {
  constructor(
    @InjectRepository(PhotoAlbumEntity)
    private readonly photoAlbumEntityRepository: Repository<PhotoAlbumEntity>
  ) {}

  async all(): Promise<PhotoAlbumEntity[]> {
    return this.photoAlbumEntityRepository.find();
  }

  async create(): Promise<PhotoAlbumEntity> {
    return this.photoAlbumEntityRepository.create().save()
  }
}
