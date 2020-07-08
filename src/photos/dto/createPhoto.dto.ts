import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IsPhotoAlbumIdAlreadyExist } from '../validators/IsPhotoAlbumIdAlreadyExist';


export class CreatePhotoDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPhotoAlbumIdAlreadyExist()
  photoAlbumId: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  url: string
}