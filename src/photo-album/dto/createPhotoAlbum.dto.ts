import { IsNotEmpty } from 'class-validator';
import { IsPhotoAlbumNameAlreadyExist } from '../validators/IsPhotoAlbumNameAlreadyExist';

export class CreatePhotoAlbumDto {
  @IsNotEmpty()
  @IsPhotoAlbumNameAlreadyExist()
  name: string;

  @IsNotEmpty()
  coverUrl: string;
}