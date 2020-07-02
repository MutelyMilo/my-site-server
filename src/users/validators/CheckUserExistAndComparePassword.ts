import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { User } from '../users.entity';
import bcrypt from 'bcrypt';

@ValidatorConstraint({ async: true })
export class CheckUserExistAndComparePasswordConstraint
  implements ValidatorConstraintInterface {
  async validate(password: string, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const email = (args.object as any)[relatedPropertyName];
    const user = await User.findOne({ email });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) return true;
    }

    return false;
  }

  defaultMessage() {
    return 'User not found or wrong credentials';
  }
}

export function CheckUserExistAndComparePassword(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: CheckUserExistAndComparePasswordConstraint,
    });
  };
}