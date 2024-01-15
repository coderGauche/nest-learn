import { Controller, Get, Inject } from '@nestjs/common';
import { CccModuleOptions, ConfigurableModuleClass } from './ccc.module-definition';

@Controller('ccc')
export class CccController {
    @Inject(ConfigurableModuleClass)
    private options:CccModuleOptions;

    @Get('')
    hello(){ 
        return this.options
    }
}
