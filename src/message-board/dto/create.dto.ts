import { IsNotEmpty } from 'class-validator';

export class CreateDto {

  @IsNotEmpty()
  body: string
}