import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Inject(AppService)
  private readonly appService:AppService;

  /**
   * 这些依赖如果没有的话，创建对象时会报错，
   * 但如果他是可选的，可以用@Optional声明下，这样没有对应的provider也能正常创建对象
   */
  @Optional()
  @Inject('Guang')
  private readonly guang:Record<string,any>;

  constructor(@Optional() private appservice:AppService){

  }

  @Get()
  getHello(): string {
    console.log(this.guang);
    
    return this.appService.getHello();
  }
}
