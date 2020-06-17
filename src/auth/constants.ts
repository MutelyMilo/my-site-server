import configuration from '../config/configuration';

export const jwtConstants = {
  secret: configuration.auth.secretKey,
};
