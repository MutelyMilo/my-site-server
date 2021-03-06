import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { IsEqual } from '../validators/IsEqual';
import { IsEmailAlreadyExist } from '../validators/IsEmailAlreadyExist';

export class CreateUserDto {
  @IsEmail()
  @IsEmailAlreadyExist()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsEqual('password')
  confirmPassword: string;
}