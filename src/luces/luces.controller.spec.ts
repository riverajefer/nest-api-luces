import { Test, TestingModule } from '@nestjs/testing';
import { LucesController } from './luces.controller';

describe('Luces Controller', () => {
  let controller: LucesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LucesController],
    }).compile();

    controller = module.get<LucesController>(LucesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
