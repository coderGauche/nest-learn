import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Guang } from './guang';

@Global() //全局
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,Guang,{
    provide:'Guang',
    useFactory(){
      return {
        name:'guang1'
      }
    }
  }],
})
export class AppModule {}
