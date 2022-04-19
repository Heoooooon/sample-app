import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  pw: string;

  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsDefined()
  @IsNotEmpty()
  nickname: string;
}

export class UpdateNicknameDto {
  @IsDefined()
  @IsNotEmpty()
  nickname: string;
}

export class UpdatePasswordDto {
  @IsDefined()
  @IsNotEmpty()
  pw: string;
}
