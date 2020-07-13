import { Controller, Get } from '@nestjs/common';
import { QiniuTokenService } from './qiniu-token.service';

@Controller('qiniu-token')
export class QiniuTokenController {
  constructor(
    private readonly qiniuTokenService: QiniuTokenService
  ) {}
  @Get()
  async getToken() {
    return await this.qiniuTokenService.getToken()
  }
}
