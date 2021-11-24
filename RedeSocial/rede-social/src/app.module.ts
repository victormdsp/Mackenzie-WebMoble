import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedeSocialModule } from './rede-social/rede-social.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RedeSocialModule, MongooseModule.forRoot('mongodb+srv://victormdsp:81005496@cluster0.ziqd8.mongodb.net/RedeSocial?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
