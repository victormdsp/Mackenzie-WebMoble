import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Funkos } from './funkos.model';

@Injectable()
export class FunkosService {
    constructor(@InjectModel('Funkos') private readonly funkoModel: Model<Funkos>){}

    async createFunko(funko: Funkos){
        let funkos: any = await this.funkoModel.find({name: funko.name});

        if(funko.name.length <= 2 || funko.name == null){
            return 'Nome inválido de funko.'
        }

        if(funko.img.length <= 2 || funko.img == null){
            return 'Imagem inválida.'
        }

        if(funko[0]){
            return 'Funko já registrado.'
        }

        funkos = new this.funkoModel({
            user: funko.user,
            img: funko.img,
            name: funko.name,
            colecao: funko.colecao,
            tipo: funko.tipo,
            preco: funko.preco
        });

        const result = await funkos.save();
        return result as string;
    }

    async getFunkos(){
        const funko = this.funkoModel.find().exec()
        return funko;
    }

    // async changeFunko(funko: Funkos){

    async deleteFunko(id: string){
        console.log(id)
        // let funkos: any = await this.funkoModel.find(idFunko => idFunko._id == id);
        // if(funkos[0]){
        //     await funkos.delete(id);
        //     return "Funko deletado"
        // }

        // else{
        //     let result = "Funko não encontrado!"
        //     return result;
        // }
    }

    // }
}

