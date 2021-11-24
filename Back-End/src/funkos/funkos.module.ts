import { Module } from '@nestjs/common';
import { FunkosService } from './funkos.service';
import { FunkosController } from './funkos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FunkosSchema } from './funkos.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Funkos', schema: FunkosSchema}])],
  providers: [FunkosService],
  controllers: [FunkosController]
})
export class FunkosModule {}
