import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { PhotoAlbumEntity } from '../../photo-album/photo-album.entity';

@ValidatorConstraint({ async: true })
export class IsPhotoAlbumIdAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate(id: number, _args: ValidationArguments) {
    const photo = await PhotoAlbumEntity.findOne({ id });
    return !!photo
  }

  defaultMessage() {
    return 'Photo album ID is not exist, please check it.';
  }
}

export function IsPhotoAlbumIdAlreadyExist(validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string): any => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsPhotoAlbumIdAlreadyExistConstraint,
    });
  };
}