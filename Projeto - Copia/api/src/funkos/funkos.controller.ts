import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Funkos } from './funkos.model';
import { FunkosService } from './funkos.service';

@Controller('funkos')
export class FunkosController {
    constructor(private readonly funkosService: FunkosService){}

    @Post()
    async createFunko(@Body() funko: Funkos): Promise<any>{
        var result = await this.funkosService.createFunko(funko);
        return result;
    }

    @Get()
    async getFunkos(): Promise<any>{
        var result = await this.funkosService.getFunkos();
        return result;
    }

    // @Put()
    // async changeFunko(@Body() funko: Funkos): Promise<any>{
    //     var result = await this.funkosService.changeFunko(funko);
    //     return result;
    // }

    @Delete("/delete:id")
    async deleteFunko(@Param() params): Promise<string>{
        // var result = await this.funkosService.deleteFunko(params);
        console.log(params._id)
        return "Entrou"
        // return result;
    }
}
