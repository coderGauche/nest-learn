import { BbbService } from './bbb.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
export declare class BbbController {
    private readonly bbbService;
    private confingOptions;
    constructor(bbbService: BbbService, confingOptions: Record<string, any>);
    create(createBbbDto: CreateBbbDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBbbDto: UpdateBbbDto): string;
    remove(id: string): string;
}
