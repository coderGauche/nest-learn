import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from 'express';

export class AaaFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const response:Response = host.switchToHttp().getResponse();
        response.status(exception.getStatus()).json({
            msg:exception.message
        })
    }
}