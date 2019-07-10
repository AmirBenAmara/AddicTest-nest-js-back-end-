import { Module } from '@nestjs/common';
import { CollegesController } from './colleges.controller';
import { CollegesService } from './colleges.service';
import { MongooseModule } from '@nestjs/mongoose';
import { collegesSchema } from './schemas/college.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'College', schema: collegesSchema }])],
    
  controllers: [CollegesController],
  providers: [CollegesService]
})
export class CollegesModule {}
