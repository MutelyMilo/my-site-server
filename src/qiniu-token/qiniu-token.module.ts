import { Module } from '@nestjs/common';
import { QiniuTokenController } from './qiniu-token.controller';
import { QiniuTokenService } from './qiniu-token.service';

@Module({
  controllers: [QiniuTokenController],
  providers: [QiniuTokenService],
})

export class QiniuTokenModule {}
