import { Test, TestingModule } from '@nestjs/testing';
import { RedeSocialService } from './rede-social.service';

describe('RedeSocialService', () => {
  let service: RedeSocialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedeSocialService],
    }).compile();

    service = module.get<RedeSocialService>(RedeSocialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
