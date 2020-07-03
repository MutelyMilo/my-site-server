import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import configuration from '../../config/configuration';
import { User } from '../../users/users.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(
    private readonly authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configuration.auth.secretKey,
    });
  }

  async validate(payload: User) {
    const user = await this.authService.validateUser(payload.email, payload.password)
    if (user) return user;
    throw new UnauthorizedException("No such user or token timeout");
  }
}