import { Module } from '@nestjs/common';
import { ChatGateway } from './app.gateway';

@Module({
  imports: [],
  providers: [ChatGateway],
})
export class AppModule {}
