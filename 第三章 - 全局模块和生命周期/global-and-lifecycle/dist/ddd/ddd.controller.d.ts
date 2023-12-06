import { OnModuleInit, OnApplicationBootstrap } from '@nestjs/common';
import { DddService } from './ddd.service';
import { CreateDddDto } from './dto/create-ddd.dto';
import { UpdateDddDto } from './dto/update-ddd.dto';
export declare class DddController implements OnModuleInit, OnApplicationBootstrap {
    private readonly dddService;
    constructor(dddService: DddService);
    onApplicationBootstrap(): void;
    onModuleInit(): void;
    create(createDddDto: CreateDddDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDddDto: UpdateDddDto): string;
    remove(id: string): string;
}
