import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersService) {}

  @Get()
  async all() {
    return this.userServices.all()
  };

}
