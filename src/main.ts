import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import { ValidationPipe } from '@nestjs/common';
// 安全性
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { TransformInterceptor } from './interceptor/transform.interceptor';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  // 开启跨域限制
  // app.enableCors();
  app.use(cookieParser());
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 拦截所有错误统一格式
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(configuration.port);
}

bootstrap().then(() => {
  console.log(`This serve running in port ${configuration.port}`);
});
