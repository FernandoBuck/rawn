import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto) {
        return await this.usersRepository.insert(createUserDto);
    }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.usersRepository.findOneBy({ id: id });
    }

    async findOneByUsername(username: string): Promise<User> {
        return await this.usersRepository.findOneBy({ username: username });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        return await this.usersRepository.update(id, updateUserDto);
    }

    async remove(id: string) {
        return await this.usersRepository.delete(id);
    }
}
