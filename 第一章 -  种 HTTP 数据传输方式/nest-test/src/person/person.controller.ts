import { Controller, Get, Post, Body, Patch, Param, Delete,Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  uploadFile(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    return `received: ${JSON.stringify(createPersonDto)}`;
  }

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Post('find2')
  create1(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get('find')
  findN(@Query('name') name: string, @Query('age') age: number) {
    return `${name}||${age}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
