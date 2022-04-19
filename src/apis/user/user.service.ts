import { HttpException, Injectable } from '@nestjs/common';
import { UserRepo } from './repo/user.repo';
import { CreateUserDto, UpdateNicknameDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {}

  async create(dto: CreateUserDto) {
    try {
      const user = await this.userRepo.findOne({ email: dto.email });
      if (user) {
        return { message: 'ALREADY_EXIST' };
      }
      await this.userRepo.save(
        {
          email: dto.email,
          pw: dto.pw,
          name: dto.name,
          nickName: dto.nickname,
        },
        { transaction: false },
      );
      return { message: 'SUCCESS' };
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  async updateProfile(email: string, dto: UpdateNicknameDto) {
    try {
      await this.userRepo.update({ email }, { nickName: dto.nickname });
      return { message: 'PROFILE UPDATED' };
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }

  async deleteUser(uid: string) {
    try {
      await this.userRepo.delete({ uid });
      return { message: 'USER DELETED' };
    } catch (e) {
      throw new HttpException(e, 500);
    }
  }
}
