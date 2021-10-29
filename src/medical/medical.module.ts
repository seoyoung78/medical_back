import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cbotrcinnt } from '../entities/Cbotrcinnt';
import { Cbptbainmt } from '../entities/Cbptbainmt';
import { Crbasprsnt } from '../entities/Crbasprsnt';
import { Crdrinprnt } from '../entities/Crdrinprnt';
import { Crexmprsnt } from '../entities/Crexmprsnt';
import { Crkcddgcmt } from '../entities/Crkcddgcmt';
import { Crprsccdmt } from '../entities/Crprsccdmt';
import { Crptdgnsnt } from '../entities/Crptdgnsnt';
import { Crsetdigdt } from '../entities/Crsetdigdt';
import { Crsetmngmt } from '../entities/Crsetmngmt';
import { Crsetprsdt } from '../entities/Crsetprsdt';
import { Crslipclmt } from '../entities/Crslipclmt';
import { Czcomcodmt } from '../entities/Czcomcodmt';
import { MedicalController } from './medical.controller';
import { MedicalService } from './medical.service';

@Module({
  imports: [TypeOrmModule.forFeature([Crprsccdmt, Cbptbainmt, Crkcddgcmt, 
                                      Crexmprsnt, Crslipclmt, Czcomcodmt, 
                                      Cbotrcinnt, Crdrinprnt, Crsetmngmt,
                                      Crsetdigdt, Crsetprsdt, Crptdgnsnt,
                                      Crsetmngmt, Crsetprsdt, Crsetdigdt,
                                      Crbasprsnt, Crdrinprnt, ])],
  controllers: [MedicalController],
  providers: [MedicalService]
})
export class MedicalModule {}
