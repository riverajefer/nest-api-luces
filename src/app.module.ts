import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LucesController } from './luces/luces.controller';
import { LucesService } from './luces/luces.service';
import { LucesGpioService } from './luces-gpio/luces-gpio.service';

@Module({
  imports: [],
  controllers: [AppController, LucesController],
  providers: [AppService, LucesService, LucesGpioService],
})
export class AppModule {}
