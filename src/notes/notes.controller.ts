import { Controller, Post } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(
    private readonly notesService: NotesService
  ) {}

  @Post()
  async create() {
    return this.notesService.create()
  }
}
