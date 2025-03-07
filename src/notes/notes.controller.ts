import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) { }

  @Post()
  create(@Body() createNoteDto: CreateNoteDto,  @Request() req) {
    return this.notesService.create(createNoteDto,req.user);
  }

  @Get()
  findAll(  @Request() req) {
    return this.notesService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string,  @Request() req) {
    return this.notesService.findOne(id,req.user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto,  @Request() req) {
    return this.notesService.update(id, updateNoteDto,req.user);
  }

  @Delete(':id')
  remove(@Param('id') id: string,  @Request() req) {
    return this.notesService.remove(id,req.user);
  }
}
