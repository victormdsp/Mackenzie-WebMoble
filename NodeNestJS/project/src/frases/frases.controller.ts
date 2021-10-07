import { Controller, Get, Param } from '@nestjs/common';
import { FrasesService } from './frases.service';

@Controller('frases')
export class FrasesController {
    constructor(private readonly frasesService: FrasesService){}

    @Get()
    getFrase():string{
        return this.frasesService.getFrase();
    }

    @Get(':index')
    getFrasesIndex(@Param('index') index: number):string{
        return this.frasesService.getFraseByIndex(index);
    }

}
