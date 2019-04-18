import { Injectable } from '@nestjs/common';
import { LucesObjecto } from 'src/luces/luces.interface';

@Injectable()
export class LucesGpioService {
    async onLuz(luz: LucesObjecto) {
        // tslint:disable-next-line:no-console
        console.log('On luz');
    }
}

/*
import { Injectable } from '@nestjs/common';
import { LucesObjecto } from 'src/luces/luces.interface';

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED_CENTRAL   = new Gpio(26, 'high'); //use GPIO pin 4, and specify that it is out
var LED_LATERALES = new Gpio(16, 'high'); //use GPIO pin 4, and specify that it is out


@Injectable()
export class LucesGpioService {
    async onLuz(luz: LucesObjecto) {
        this.toggleLuz(luz.name);
    }

    toggleLuz(luzName: String) {
        if (luzName === 'central') {
            if (LED_CENTRAL.readSync() === 0) { //check the pin state, if the state is 0 (or off)
                LED_CENTRAL.writeSync(1); //set pin state to 1 (turn LED on)
            } else {
                LED_CENTRAL.writeSync(0); //set pin state to 0 (turn LED off)
            }
        } else {
            if (LED_LATERALES.readSync() === 0) { //check the pin state, if the state is 0 (or off)
                LED_LATERALES.writeSync(1); //set pin state to 1 (turn LED on)
            } else {
                LED_LATERALES.writeSync(0); //set pin state to 0 (turn LED off)
            }
        }
    }

}

 */
