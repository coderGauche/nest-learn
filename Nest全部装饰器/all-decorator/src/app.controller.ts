import { Controller, Get, HttpException, HttpStatus, Inject, Optional, Redirect, SetMetadata, UseFilters, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './test.filter';
import { AaaGuard } from './test.guard';

@Controller()
@SetMetadata('roles', ['user'])
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Inject(AppService)
  private readonly appService: AppService;

  /**
   * 这些依赖如果没有的话，创建对象时会报错，
   * 但如果他是可选的，可以用@Optional声明下，这样没有对应的provider也能正常创建对象
   */
  @Optional()
  @Inject('Guang')
  private readonly guang: Record<string, any>;

  constructor(@Optional() private appservice: AppService) {}

  @Get()
  @UseFilters(AaaFilter)
  @UseGuards(AaaGuard)
  // @UseInterceptors(AaaFilter)
  // @UsePipes(AaaFilter)
  @SetMetadata('roles', ['admin'])
  // @Redirect('')
  getHello(): string {
    console.log(this.guang);
    throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    return this.appService.getHello();
  }
}
