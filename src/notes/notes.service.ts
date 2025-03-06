import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';
import { Folder } from 'src/folders/entities/folder.entity';

@Injectable()
export class NotesService {

  constructor(@InjectRepository(Note) private readonly noteRepository: Repository<Note>) { }


  async create(createNoteDto: CreateNoteDto) {
    const note = await this.noteRepository.create({...createNoteDto, folder: { id: createNoteDto.folder } as Folder });
    return this.noteRepository.save(note);
  }

  async findAll() {
    const notes = await this.noteRepository.createQueryBuilder("notes")
      .leftJoinAndSelect('notes.folder', 'folder')
      .select(['notes', 'folder.name', 'folder.id'])
      .getMany();
    return notes;
  }

  findOne(id: string) {
    const note = this.noteRepository.findOne({ where: { id }, relations: ['folder'] });
    return note;
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    const UpdateData={...updateNoteDto, folder: { id: updateNoteDto.folder } as Folder }
    const note = this.noteRepository.update(id, UpdateData);
    return note;
  }

  remove(id: string) {
    const result = this.noteRepository.delete(id);
    return result;
  }
}
