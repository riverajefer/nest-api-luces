import { Test, TestingModule } from '@nestjs/testing';
import { LucesService } from './luces.service';

describe('LucesService', () => {
  let service: LucesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LucesService],
    }).compile();

    service = module.get<LucesService>(LucesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
