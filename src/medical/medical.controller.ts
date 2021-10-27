import { Body, Controller, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { MedicalService } from './medical.service';

@Controller('medical')
export class MedicalController {
  constructor(private medicalService: MedicalService) {}
  
  // 진단 ----------------------------------------------------------------------
  // 과거 진단기록 읽기
  @Get('d')
  async GetDigList(@Body() data): Promise<any[]> {
    return this.medicalService.getDigList(data);
  }
  // 검색 진단 목록 불러오기
  @Get('d:keyword')
  async SearchDig(@Param('keyword') keyword: string) : Promise<any[]> {
    return this.medicalService.searchDList(keyword);
  }
  // 진단 저장하기
  @Post('d')
  async SaveDigList(@Body() data): Promise<any> {
    return this.medicalService.createDList(data);
  }
  // 진단 수정하기
  @Patch('d')
  async UpdateDigList(@Body() data): Promise<any> {
    
  }
  // 진단 설정
  @Patch('d/setting')
  async SaveDigSetting(@Body() data): Promise<any> {
    return this.medicalService.saveDigSetting(data);
  }

  // 환자정보/접수정보 ----------------------------------------------------------------------
  // 검색 환자 목록 불러오기
  @Get('pt:keyword')
  async GetP(@Param('keyword') keyword: string): Promise<any[]> {
    return this.medicalService.getPatientsList(keyword);
  }  
  // 환자 접수 정보 불러오기
  @Get('pt/rcpn:pid')
  async GetPRcpn(@Param('pid') pid: string): Promise<any> {
    return this.medicalService.getPatientInfo(pid);
  }
  // 환자 접수정보 수정
  @Patch('pt')
  async UpdatePatient(@Body() data): Promise<any> {
    console.log('info:', data);
  }
  // 관심환자 저장
  @Patch('pt/cncn')
  async SaveCncnPt(@Body() patient): Promise<any> {
    return this.medicalService.saveCncnPt(patient);
  }
  // 환자 진료메모 저장
  @Patch('pt/mdcr')
  async SaveMdcrMemo(@Body() patient): Promise<any> {
    return this.medicalService.saveMdcrMemo(patient);
  }
  // 환자 접수메모 저장
  @Patch('pt/rcpn')
  async SaveRcpnMemo(@Body() patient): Promise<any> {
    return this.medicalService.saveRcpnMemo(patient);
  }
  // 접수정보 수정 접수 구분
  @Get('c:id')
  async GetCommonList(@Param('id') id: string): Promise<any[]> {
    return this.medicalService.getCommonList(id);
  }

  // 약속처방 ----------------------------------------------------------------------
  // 약속처방 목록
  @Get('set')
  async GetSetList(@Query() data) : Promise<any> {
    return this.medicalService.getSetLists(data);
  }
  // 약속처방 분류 목록
  @Get('set/clsf')
  async GetAllSetClsf() : Promise<any> {
    return this.medicalService.getAllSetClsf();
  };
  // 약속처방 처방 검색 목록 불러오기
  @Get('set/prs:keyword')
  async GetPrsList(@Param('keyword') keyword: string): Promise<any[]> {
    return this.medicalService.getPrsList(keyword);
  }
  // 약속처방 저장
  @Post('set')
  async SaveSetList(@Body() data): Promise<any> {
    return this.medicalService.saveSetList(data);
  }

  // ----------------------------------------------------------------------
  // 환자별 검사 처방 목록 불러오기
  @Get('e:pid')
  async GetExmList(@Param('pid') pid: string): Promise<any[]> {
    return this.medicalService.getExmList(pid);
  }
  // 처방 목록 불러오기
  @Get('prsc')
  async Get(): Promise<any[]> {
    return this.medicalService.getAll();
  }  
  // 슬립 목록 불러오기
  @Get('s')
  async GetSlip() : Promise<any[]> {
    return this.medicalService.getSlipList();
  }  
}