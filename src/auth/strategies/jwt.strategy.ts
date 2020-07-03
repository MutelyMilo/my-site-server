import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import configuration from '../../config/configuration';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configuration.auth.secretKey,
    });
  }

  async validate(payload: { email: string; password: string}) {
    const user = await this.authService.validateUser(payload.email, payload.password);
    if (!user) {
      throw new UnauthorizedException('No such user');
    }

    return user;
  }
}