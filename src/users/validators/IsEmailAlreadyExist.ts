import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { User } from '../users.entity';

@ValidatorConstraint({ async: true })
export class IsEmailAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate(email: string, _args: ValidationArguments) {
    const user = await User.findOne({ email });
    return !user;
  }

  defaultMessage() {
    return 'Email $value already exists. Choose another email.';
  }
}

export function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string): any => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAlreadyExistConstraint,
    });
  };
}