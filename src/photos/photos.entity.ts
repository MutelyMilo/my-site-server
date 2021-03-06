import { Base } from '../common/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { PhotoAlbumEntity } from '../photo-album/photo-album.entity';

@Entity('photos')
export class PhotosEntity extends Base {

  @Column()
  name: string;

  @Column()
  url: string;

  @ManyToOne(
    () => PhotoAlbumEntity,
    photoAlbum => photoAlbum.photos,
    {
      eager: true,
      onDelete: 'CASCADE',
    },
  )
  photoAlbum: PhotoAlbumEntity;
}