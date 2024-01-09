import { AppService } from './app.service';
export declare class AppController {
    private appservice;
    private readonly appService;
    private readonly guang;
    constructor(appservice: AppService);
    getHello(): string;
}
