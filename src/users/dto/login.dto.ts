import { IsNotEmpty } from 'class-validator';
import { CheckUserExistAndComparePassword } from '../validators/CheckUserExistAndComparePassword';

export class LoginDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @CheckUserExistAndComparePassword('username')
  password: string;
}