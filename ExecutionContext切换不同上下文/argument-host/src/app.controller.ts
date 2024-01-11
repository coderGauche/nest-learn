import { Controller, Get, Headers, SetMetadata, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa.filter';
import { AaaException } from './AaaException';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyHeaders } from './MyHeaders.decorator';
import { log } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseFilters(AaaFilter)
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    // throw new AaaException('aaa','bbb')
    return this.appService.getHello();
  }

  @Get('hello')
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('hello1', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  getHello4(@Ccc() c) {
    return c;
  }

  @Get('hello3')
  getHello5(@Headers('Accept') Headers1,@MyHeaders('Accept') heders2) {
    console.log('header', Headers1);
    console.log('header2',heders2);
    
    
  }
}
