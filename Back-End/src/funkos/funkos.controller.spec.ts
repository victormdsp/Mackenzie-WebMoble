import { Test, TestingModule } from '@nestjs/testing';
import { FunkosController } from './funkos.controller';

describe('FunkosController', () => {
  let controller: FunkosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FunkosController],
    }).compile();

    controller = module.get<FunkosController>(FunkosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
