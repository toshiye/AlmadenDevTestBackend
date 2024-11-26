/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PasswordCardsService } from './passwordCards/passwordCards.service';
import { PasswordCardsController } from './passwordCards/passwordCards.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
  ],
  controllers: [PasswordCardsController],
  providers: [PasswordCardsService],
})
export class AppModule {}
