import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CrudService } from 'src/shared/services/crud.service';

import { UserEntity } from './user.entity';
import { UserDto, UserResponseObject } from './user.dto';

@Injectable()
export class UsersService extends CrudService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  async register(data: UserDto): Promise<UserResponseObject> {
    const { email } = data;
    let user: UserEntity = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException('User with provided email already exists', HttpStatus.BAD_REQUEST);
    }
    user = await this.create(data);
    return user.serialize({ includeToken: true });
  }

  async login(data: UserDto): Promise<UserResponseObject> {
    const { email, password } = data;
    const user: UserEntity = await this.userRepository.findOne({ where: { email } });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException('Invalid email/password combination', HttpStatus.BAD_REQUEST);
    }
    return user.serialize({ includeToken: true });
  }
}
