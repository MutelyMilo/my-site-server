import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import config from '../../config/configuration';
import { User } from '../../users/users.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.auth.secretKey,
    });
  }
  
  async validate(payload: {id: number;
    username: string;}) {
    const user = await User.findOne(payload.id);
    
    if (!user) {
      throw new UnauthorizedException('No such user');
    }
    
    return user;
  }
}