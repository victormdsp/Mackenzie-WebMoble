import { Module } from '@nestjs/common';
import { FrasesController } from './frases.controller';
import { FrasesService } from './frases.service';

@Module({
  controllers: [FrasesController],
  providers: [FrasesService]
})
export class FrasesModule {}
