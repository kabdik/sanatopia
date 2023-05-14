import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import type { EntityManager, Repository } from 'typeorm';

import type { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import type { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  public async create(data: CreateUserDto, em?: EntityManager): Promise<User> {
    const entityManager = em || this.userRepo.manager;
    if (await entityManager.findOneBy(UserEntity, { email: data.email })) {
      throw new BadRequestException('This user with this email already exists');
    }

    const user = <User>entityManager.create(UserEntity, data);
    user.password = await this.hashPassword(user.password);

    return entityManager.save(UserEntity, user);
  }

  public async getByEmail(email:string): Promise<User | null> {
    return <User | null> await this.userRepo.findOne({ where: { email } });
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hash(password, salt).then((hash: string) => hash);
  }
}
