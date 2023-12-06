import { OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { CreateDddDto } from './dto/create-ddd.dto';
import { UpdateDddDto } from './dto/update-ddd.dto';
export declare class DddService implements OnModuleInit, OnApplicationBootstrap {
    onApplicationBootstrap(): void;
    onModuleInit(): void;
    create(createDddDto: CreateDddDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDddDto: UpdateDddDto): string;
    remove(id: number): string;
}
