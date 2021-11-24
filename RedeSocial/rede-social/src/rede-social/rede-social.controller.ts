import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { RedeSocialService} from './rede-social.service';
import { FotoModel } from '../schemas/foto'
 
@Controller('rede-social')
export class RedeSocialController {
    constructor(private readonly fotoService: RedeSocialService) {}

    @Get('/:autor')
    getPosts(@Param('autor') autor:string):string{
        return this.fotoService.getPosts(autor);
    }

    @Post()
    postFoto(@Body() foto: FotoModel):string{
        return this.fotoService.postFoto();
    }

}
