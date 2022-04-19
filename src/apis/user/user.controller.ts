import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateNicknameDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Put('update/:email')
  async updateProfile(
    @Param('email') email: string,
    @Body() dto: UpdateNicknameDto,
  ) {
    return await this.userService.updateProfile(email, dto);
  }

  @Delete('/:uid')
  async remove(@Param('uid') uid: string) {
    return await this.userService.deleteUser(uid);
  }
}
