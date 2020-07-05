import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { PhotoAlbumEntity } from '../photo-album.entity';

@ValidatorConstraint({ async: true })
export class IsPhotoAlbumNameAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate(name: string, _args: ValidationArguments) {
    const photo = await PhotoAlbumEntity.findOne({ name });
    return !photo;
  }

  defaultMessage() {
    return 'Photo album name "$value" was exist, choose another name.';
  }
}

export function IsPhotoAlbumNameAlreadyExist(validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string): any => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsPhotoAlbumNameAlreadyExistConstraint,
    });
  };
}