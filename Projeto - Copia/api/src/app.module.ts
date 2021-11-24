import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { FunkosModule } from './funkos/funkos.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://victormdsp:81005496@cluster0.ziqd8.mongodb.net/RedeSocial?retryWrites=true&w=majority'), UserModule, FunkosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
