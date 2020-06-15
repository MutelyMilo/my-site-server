import { IsNotEmpty } from 'class-validator';
import { CheckUserExistAndComparePassword } from '../validators/CheckUserExistAndComparePassword';

export class LoginInput {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @CheckUserExistAndComparePassword('username')
  password: string;
}