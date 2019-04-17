import { Controller, Get, Post, Body } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { LucesService } from './luces.service';
import { ChangeLuzDto } from './change-luz.dto';
import { LucesObjecto } from './luces.interface';

@Controller('luces')
export class LucesController {
    constructor(private readonly lucesService: LucesService) { }

    @Get()
    async getStatus(): Promise<string> {
        return 'Status';
    }

    @Post()
    async changeLuz(@Body()  changeLuzDto: ChangeLuzDto): Promise<LucesObjecto> {
        // tslint:disable-next-line:no-console
        console.log('body: ', changeLuzDto);
        return this.lucesService.changeState(changeLuzDto);
    }

}
