import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // 比如我这里引入OtherModule（当它存在）OtherModule 里有 XxxService、YyyService 这两个 provider，导出了 XxxService
  // 就可以用它 exports 的 XxxService 来注入了。
  // YyyService 没有在 exports 导出，只可以在模块内注入。
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  exports: [], // xxService
})
export class AppModule {}
