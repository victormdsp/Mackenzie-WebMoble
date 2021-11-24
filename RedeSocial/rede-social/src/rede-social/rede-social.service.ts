import { HttpStatus, Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { FotoModel } from '../schemas/foto'

@Injectable()
export class RedeSocialService {
    constructor(@InjectModel('Foto') private readonly fotoModel: Model<Foto>){}

    postFoto() :string{
        console.log()
        return "Teste Rede"
    }

    getPosts(autor :string) :string{
        return autor
    }
}
