import { IsNotEmpty, IsNumber } from 'class-validator';

export class DeletePhotoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}