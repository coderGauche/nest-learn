import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';

@Module({
  imports: [BbbModule.register({aaa:1,bbb:2333}), CccModule.register({
    aaa:3,
    bbb:'cccc'
  })], //import 的时候就得这样用了，通过 register 方法传入参数，返回值就是模块定义：
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
