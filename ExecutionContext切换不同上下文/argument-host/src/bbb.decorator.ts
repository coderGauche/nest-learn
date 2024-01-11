import { Get, UseGuards, applyDecorators } from '@nestjs/common';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';

export function Bbb(path,role){
    return applyDecorators(
        Get(path),
        Aaa(role),
        UseGuards(AaaGuard)
    )
}
