import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('note-type')
export class NoteTypeEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}