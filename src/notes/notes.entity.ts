import { Column, Entity } from 'typeorm';
import { Base } from '../common/base.entity';

@Entity("notes")
export class NotesEntity extends Base {
  @Column('varchar')
  title: string;

  @Column('varchar')
  content: string;
}