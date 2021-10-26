import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalController } from './medical/medical.controller';
import { MedicalService } from './medical/medical.service';
import { MedicalModule } from './medical/medical.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), MedicalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
