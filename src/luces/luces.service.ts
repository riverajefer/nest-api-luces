import { Injectable } from '@nestjs/common';
import { LucesObjecto } from './luces.interface';
import { LucesGpioService } from '../luces-gpio/luces-gpio.service';

@Injectable()
export class LucesService {

    constructor(private readonly lucesGpioService: LucesGpioService) {  }

    async changeState(luz: LucesObjecto): Promise<LucesObjecto> {
        // tslint:disable-next-line:no-console
        console.log('luz console: ', luz);
        // tslint:disable-next-line:no-console
        this.lucesGpioService.onLuz(luz);
        return luz;
    }
}
