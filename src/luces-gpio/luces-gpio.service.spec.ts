import { Test, TestingModule } from '@nestjs/testing';
import { LucesGpioService } from './luces-gpio.service';

describe('LucesGpioService', () => {
  let service: LucesGpioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LucesGpioService],
    }).compile();

    service = module.get<LucesGpioService>(LucesGpioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
