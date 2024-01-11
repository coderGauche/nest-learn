import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AaaException } from './AaaException';
import { Response } from 'express';

@Catch(AaaException)
export class AaaFilter implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    console.log(exception,host);
    host
    if(host.getType() == 'http'){
      const ctx = host.switchToHttp()
      const reponse = ctx.getResponse<Response>()
      const request = ctx.getRequest<Request>()


      reponse.status(500).json({
        aaa:exception.aaa,
        bbb:exception.bbb
      })
    }else if(host.getType() == 'ws'){

    }else if (host.getType() === 'rpc') {
    }
  }
}
