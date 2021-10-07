import { Injectable } from '@nestjs/common';

@Injectable()
export class CpfService {
    getCPF(cpf:number):string{
        if (cpf % 1 !== 0 || cpf / 11 < 909090909){
            return "CPF inválido"
        }

        else{
            let cpfSoma = 0;
            let penultimoDigito = 0;
            let ultimoDigito = 0;
            let cpfString = cpf.toString();
            for(let i = 1; i < 10; i++){
                cpfSoma += parseInt(cpfString[i-1]) * i;
            }

            penultimoDigito = cpfSoma % 11;
            cpfSoma = 0;
            cpfSoma += (penultimoDigito % 10) * 9;

            for(let i = 0; i < 9; i++){
                cpfSoma += parseInt(cpfString[i]) * i;
            }

            ultimoDigito = cpfSoma % 11;

            if(cpfSoma % 11 === 10){
                ultimoDigito = 0;
            }

            if(penultimoDigito === parseInt(cpfString[9]) && ultimoDigito === parseInt(cpfString[10])){
                return "CPF válido."
            }

            else return "CPF inválido.";
        }
    }
}
