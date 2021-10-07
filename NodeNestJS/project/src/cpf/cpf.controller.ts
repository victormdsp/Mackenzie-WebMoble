import { Controller, Get, Param } from '@nestjs/common';
import { CpfService } from './cpf.service';

@Controller('cpf')
export class CpfController {
    constructor(private readonly cpfService: CpfService){}

    @Get(':cpf')
    getCPF(@Param('cpf') cpf:number):string{
        return this.cpfService.getCPF(cpf);
    }
}
