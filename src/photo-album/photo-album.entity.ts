import { Column, Entity } from 'typeorm';
import { Base } from '../common/base.entity';

@Entity('photo-album')
export class PhotoAlbumEntity extends Base {

  @Column()
  name: string;

  @Column()
  coverUrl: string;
}