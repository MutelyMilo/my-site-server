import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotesEntity } from './notes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NotesEntity)
    private readonly notesEntityRepository: Repository<NotesEntity>
  ) {}

  async create() {
    return this.notesEntityRepository.find()
  }
}
