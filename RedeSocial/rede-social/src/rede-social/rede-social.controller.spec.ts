import { Test, TestingModule } from '@nestjs/testing';
import { RedeSocialController } from './rede-social.controller';

describe('RedeSocialController', () => {
  let controller: RedeSocialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedeSocialController],
    }).compile();

    controller = module.get<RedeSocialController>(RedeSocialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
