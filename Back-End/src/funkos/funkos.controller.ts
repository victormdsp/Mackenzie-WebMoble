import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
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

    @Patch(':id')
    async updatePost( @Param('id') id: number ,@Body() funko: Funkos ): Promise<any>{
        return await this.funkosService.updateFunko(id, funko);
    }

    @Delete(':id')
    async deletePost( @Param('id') id: number ): Promise<any>{
        return await this.funkosService.deleteFunko(id);
    }
}
