import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { College } from './interfaces/college.interface';
import { Model } from 'mongoose';


@Injectable()
export class CollegesService {

    constructor(@InjectModel('College') private readonly sinistreModel: Model<College>) { }

    async findAll(): Promise<College[]> {
        return await this.sinistreModel.find().exec();
    }

}
