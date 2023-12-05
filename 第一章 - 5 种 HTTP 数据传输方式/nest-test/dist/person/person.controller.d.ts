/// <reference types="multer" />
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    uploadFile(createPersonDto: CreatePersonDto, files: Array<Express.Multer.File>): string;
    create(createPersonDto: CreatePersonDto): string;
    create1(createPersonDto: CreatePersonDto): string;
    findAll(): string;
    findN(name: string, age: number): string;
    findOne(id: string): string;
    update(id: string, updatePersonDto: UpdatePersonDto): string;
    remove(id: string): string;
}
