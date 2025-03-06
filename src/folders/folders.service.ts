import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Folder } from './entities/folder.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoldersService {

  constructor(@InjectRepository(Folder) private readonly folderRepository: Repository<Folder>) { }

  async create(createFolderDto: CreateFolderDto) {
    const folder = await this.folderRepository.create(createFolderDto);
    return this.folderRepository.save(folder);
  }

  async findAll() {
    const folders = await this.folderRepository.find();
    return folders;
  }

  async findOne(id: string) {
    const folder = await this.folderRepository.findOne({ where: { id } });
    if (!folder) throw new NotFoundException(`Folder with ID ${id} not found`);
    return folder;
  }

  async update(id: string, updateFolderDto: UpdateFolderDto) {
    const folder = await this.folderRepository.update(id, updateFolderDto);
    return folder;
  }

  async remove(id: string) {
    const result = await this.folderRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Folder with ID ${id} not found`);
    }
  }
}
