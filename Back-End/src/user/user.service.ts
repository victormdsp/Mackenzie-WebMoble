import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import * as fs from 'fs';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async createUser(user: User){
        let userModel: any = await this.userModel.find({login: user.login});

        if(user.login.length <= 2 || user.login == null){
            return 'Usuário cadastrado inválido.'
        }

        if(user.senha.length <= 2 || user.senha == null){
            return 'Senha cadastrada inválida.'
        }

        if(userModel[0]){
            return 'Usuário ja registrado.'
        }

        userModel = new this.userModel({
            login: user.login,
            senha: user.senha
        });
        const result = await userModel.save();
        return result as string;
    }

    async readUser(){
        const user = await this.userModel.find().exec();
        return user;
    }

    async readOneUser(user: User){
        let userModel: any = await this.userModel.find({login: user.login})

        if(!userModel[0]){
            return "404 || Usuário não encontrado!"
        }

        const userSearch = await this.userModel.find().exec();
        return userSearch;
    }
}
