import { Module } from '@nestjs/common';
import { NoteTypeService } from './note-type.service';
import { NoteTypeController } from './note-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteTypeEntity } from './note-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NoteTypeEntity])
  ],
  providers: [NoteTypeService],
  controllers: [NoteTypeController]
})
export class NoteTypeModule {}
