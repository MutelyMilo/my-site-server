import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosEntity } from './photos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PhotosEntity])
  ],
  controllers: [PhotosController],
  providers: [PhotosService]
})
export class PhotosModule {}
