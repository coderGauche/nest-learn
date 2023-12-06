import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule implements OnModuleInit, OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log('CccModule onApplicationBootstrap');
  }
  onModuleInit() {
    console.log('CccModule onModuleInit');
  }
  OnModuleInit() {
    console.log('OnModuleInit');
  }
  OnApplicationBootstrap() {
    console.log('OnModuleInit');
  }
}
