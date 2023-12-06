import { OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';
export declare class CccService implements OnModuleInit, OnApplicationBootstrap {
    onApplicationBootstrap(): void;
    onModuleInit(): void;
    create(createCccDto: CreateCccDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCccDto: UpdateCccDto): string;
    remove(id: number): string;
}
