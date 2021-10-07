import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';

@Injectable()
export class FrasesService {
    listaFrases = ["Bom dia!", "Dia bão", "OOOOOOOba", "É o que?"];

    getFrase():string{
        let num = randomInt(this.listaFrases.length);
        return this.listaFrases[num];
    }

    getFraseByIndex(index:number):string{
        let num = index;
        if(index >= this.listaFrases.length){
            num = this.listaFrases.length - 1;
        }

        else if(index < 0){
            num = 0;
        }

        return this.listaFrases[Math.floor(num)];
    }
}

