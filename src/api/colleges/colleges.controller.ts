import { Controller, Get } from '@nestjs/common';
import { CollegesService } from './colleges.service';

@Controller('colleges')
export class CollegesController {

    constructor(private readonly collegeService: CollegesService) { }

    @Get()
    async findAll() {
        return this.collegeService.findAll();
    }
}
