import { Base } from '../common/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { PhotoAlbumEntity } from '../photo-album/photo-album.entity';

@Entity('photos')
export class PhotosEntity extends Base {

  @Column()
  name: string;

  @Column()
  coverUrl: string;

  @ManyToOne(
    () => PhotoAlbumEntity,
    photoAlbum => photoAlbum.photos,
    { eager: true },
  )
  photoAlbum: PhotoAlbumEntity;
}