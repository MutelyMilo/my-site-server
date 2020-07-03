import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../common/base.entity';
import { PhotosEntity } from '../photos/photos.entity';

@Entity('photo-album')
export class PhotoAlbumEntity extends Base {

  @Column()
  name: string;

  @Column()
  coverUrl: string;

  @OneToMany(
    () => PhotosEntity,
    photos => photos.photoAlbum,
  )
  photos: PhotosEntity[];
}