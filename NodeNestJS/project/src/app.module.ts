import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrasesModule } from './frases/frases.module';
import { CpfModule } from './cpf/cpf.module';

@Module({
  imports: [FrasesModule, CpfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
