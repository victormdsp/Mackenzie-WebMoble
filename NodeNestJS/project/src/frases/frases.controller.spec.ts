import { Test, TestingModule } from '@nestjs/testing';
import { FrasesController } from './frases.controller';

describe('FrasesController', () => {
  let controller: FrasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrasesController],
    }).compile();

    controller = module.get<FrasesController>(FrasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
