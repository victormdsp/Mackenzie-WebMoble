import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Funkos } from './funkos.model';

let idFunko = 0;

@Injectable()
export class FunkosService {
    constructor(
        @InjectModel('Funkos') private readonly funkoModel: Model<Funkos>){}

    //funko
    async createFunko(funko: Funkos) {
        let funkos: any = await this.funkoModel.find({ name: funko.name });

        if (funko.name.length <= 2 || funko.name == null) {
            return 'Nome inválido de funko.'
        }

        if (funko.img.length <= 2 || funko.img == null) {
            return 'Imagem inválida.'
        }

        if (funko[0]) {
            return 'Funko já registrado.'
        }

        funkos = new this.funkoModel({
            user: funko.user,
            img: funko.img,
            name: funko.name,
            colecao: funko.colecao,
            tipo: funko.tipo,
            preco: funko.preco,
            id: idFunko
        });

        const result = await funkos.save();
        idFunko += 1;
        console.log(idFunko);
        return result as string;

    }

    //GET
    async getFunkos() {
        const funko = this.funkoModel.find().exec()
        return funko;
    }

    //UPDATE
    async updateFunko(id: number, funko: Funkos): Promise<any>{
        // if (!funko){
        //     throw new NotFoundException('funko should not be null');
        // }
        const updatedfunko = await this.funkoModel.findOne({id: id});

        if (funko.user){
            updatedfunko.user = funko.user;
        }
        if (funko.img){
            updatedfunko.img = funko.img;
        }
        if (funko.name){
            updatedfunko.name = funko.name;
        }
        if (funko.colecao){
            updatedfunko.colecao = funko.colecao;
        }
        if (funko.tipo){
            updatedfunko.tipo = funko.tipo;
        }
        if (funko.preco){
            updatedfunko.preco = funko.preco;
        }

        updatedfunko.save();
        const result = updatedfunko;
        const dbresponse = {
            statusCode: 200,
            message: 'funko updated',
            response: result
        }
        return dbresponse
    }

    //DELETE
    async deleteFunko(id: number) {
        const response = await this.funkoModel.deleteOne({ id: id });
        return {
            statusCode: 200,
            message: "Funko deletado!",
            response: null
        }
    }

    // }
}

