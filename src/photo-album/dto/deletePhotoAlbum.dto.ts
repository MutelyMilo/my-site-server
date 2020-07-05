import { IsPhotoAlbumIdAlreadyExist } from '../validators/IsPhotoAlbumIdAlreadyExist';

export class DeletePhotoAlbumDto {
  @IsPhotoAlbumIdAlreadyExist()
  id: number
}