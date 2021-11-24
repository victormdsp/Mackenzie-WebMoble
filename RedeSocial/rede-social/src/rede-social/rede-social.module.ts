import { Module } from '@nestjs/common';
import { RedeSocialService } from './rede-social.service';
import { RedeSocialController } from './rede-social.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FotoSchema } from 'src/schemas/foto';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Foto', schema: FotoSchema}])],
  controllers: [RedeSocialController],
  providers: [RedeSocialService]
})
export class RedeSocialModule {}
