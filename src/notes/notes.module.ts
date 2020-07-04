import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesEntity } from './notes.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NotesEntity])
  ],
  providers: [NotesService],
  controllers: [NotesController]
})
export class NotesModule {}
