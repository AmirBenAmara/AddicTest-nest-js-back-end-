import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { CollegesModule } from './colleges/colleges.module';
@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost:27017/instasure'), UsersModule, CommonModule,  CollegesModule],
    controllers: [],
    providers: [],
})
export class ApiModule {}
