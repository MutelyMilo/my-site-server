import { IsEmail, IsNotEmpty } from 'class-validator';
import { CheckUserExistAndComparePassword } from '../validators/CheckUserExistAndComparePassword';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @CheckUserExistAndComparePassword('email')
  password: string;
}