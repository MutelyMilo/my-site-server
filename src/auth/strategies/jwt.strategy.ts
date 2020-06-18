import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import configuration from '../../config/configuration';
import { User } from '../../users/users.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configuration.auth.secretKey,
    });
  }

  async validate(payload: {id: number;
    email: string;}) {
    const user = await User.findOne(payload.id);
    if (!user) {
      throw new UnauthorizedException('No such user');
    }

    return user;
  }
}