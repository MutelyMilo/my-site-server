import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { IsEqual } from '../validators/IsEqual';
import { IsUserAlreadyExist } from '../validators/IsUserAlreadyExist';

export class RegisterInput {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsUserAlreadyExist()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEqual('password')
  confirmPassword: string;
}