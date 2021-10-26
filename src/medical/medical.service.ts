import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cbotrcinnt } from '../entities/Cbotrcinnt';
import { Cbptbainmt } from '../entities/Cbptbainmt';
import { Crexmprsnt } from '../entities/Crexmprsnt';
import { Crkcddgcmt } from '../entities/Crkcddgcmt';
import { Crprsccdmt } from '../entities/Crprsccdmt';
import { Crptdgnsnt } from '../entities/Crptdgnsnt';
import { Crsetdigdt } from '../entities/Crsetdigdt';
import { Crsetmngmt } from '../entities/Crsetmngmt';
import { Crsetprsdt } from '../entities/Crsetprsdt';
import { Crslipclmt } from '../entities/Crslipclmt';
import { Czcomcodmt } from '../entities/Czcomcodmt';

@Injectable()
export class MedicalService {
  constructor(
    @InjectRepository(Crprsccdmt) private CrprsccdmRepository: Repository<Crprsccdmt>,    // 처방마스터
    @InjectRepository(Cbptbainmt) private CbptbainmtRepository: Repository<Cbptbainmt>,   // 환자기본정보마스터
    @InjectRepository(Crkcddgcmt) private CrkcddgcmtRepository: Repository<Crkcddgcmt>,   // 진단마스터
    @InjectRepository(Crexmprsnt) private CrexmprsntRepository: Repository<Crexmprsnt>,   // 검사처방
    @InjectRepository(Crslipclmt) private CrslipclmtRepository: Repository<Crslipclmt>,   // slip분류정보
    @InjectRepository(Czcomcodmt) private CzcomcodmtRepository: Repository<Czcomcodmt>,   // 공통코드
    @InjectRepository(Cbotrcinnt) private CbotrcinntRepository: Repository<Cbotrcinnt>,   // 외래접수정보
    @InjectRepository(Crptdgnsnt) private CrptdgnsntRepository: Repository<Crptdgnsnt>,   // 진단
    @InjectRepository(Crsetmngmt) private CrsetmngmtRepository: Repository<Crsetmngmt>,   // 약속처방관리마스터
    @InjectRepository(Crsetprsdt) private CrsetprsdtRepository: Repository<Crsetprsdt>,   // 약속처방관리 처방 상세
    @InjectRepository(Crsetdigdt) private CrsetdigdtRepository: Repository<Crsetdigdt>,   // 약속처방관리 진단 상세
  ) {}

  // 진단 -----------------------------------------------------------------------------------------
  // 진단 기록 읽기
  async getDigList(data): Promise<any> {
    console.log(data);
    // const getDigList = await this.CrkcddgcmtRepository.createQueryBuilder('CRKCDDGCMT')
    //   .select(`*`,)
    //   .where(`CRKCDDGCMT.hsptCd = :hid`, {hid : data})
    //   .andWhere(`CRKCDDGCMT.pid = :pid`, {pid : data})
    //   .andWhere(`CRKCDDGCMT.rcpnSqno = :rsq`, {rsq : data})
    //   .getRawMany();

    // return getDigList;
  }
  // 진단 목록 불러오기
  async searchDList(keyword : string) : Promise<any[]> {
    const getDList = await this.CrkcddgcmtRepository.createQueryBuilder('CRKCDDGCMT')
      .select(`
        CRKCDDGCMT.hsptCd, 
        CRKCDDGCMT.frstRgstUsid,
        CRKCDDGCMT.frstRgdt,
        CRKCDDGCMT.lastUpdtUsid,
        CRKCDDGCMT.lastUddt,
        CRKCDDGCMT.dgnsCd,
        CRKCDDGCMT.dgnsEnm,
        CRKCDDGCMT.dgnsHnm`
      ,)
      .where(`CRKCDDGCMT.dgnsCd like :code`, {code: '%' + keyword + '%'})
      .orWhere(`CRKCDDGCMT.dgnsEnm like :name`, {name: '%' + keyword + '%'})
      .orWhere(`CRKCDDGCMT.dgnsHnm like :name`, {name: '%' + keyword + '%'})
      .getRawMany();

      console.log(getDList.length);
    return getDList;
  }
  // 진단 저장
  async createDList(data): Promise<any> {
    console.log(data);
    
    // await this.CrptdgnsntRepository.createQueryBuilder('CRPPTNSNT')
    //   .insert()
    //   .into(Crptdgnsnt)
    //   .values({
    //     hsptCd: '',
    //     frstRgdt: new Date(),
    //     frstRgstUsid: 'ADMIN',
    //     lastUddt: new Date(),
    //     lastUpdtUsid: 'ADMIN',
    //     pid: data.pid,
    //     inptDt: '',
    //     rcpnSqno: data.rcpn.rcpn_sqno,
    //     mddpCd: '',
    //     drId: '',
    //     dgnsSqno: 0,
    //     dgnsCd: data.dig.dgns_cd,
    //     dgnsNm: data.dig.dgns_nm,
    //     dvsn: data.dig.dvsn,
    //     rlot: data.dig.rlot,
    //     site: data.dig.site,
    //     spcfRgno: data.dig.spcf_rgno,
    //     delYn: 'N'
    //   })
    //   .execute();    
  }
  // 진단 설정 저장
  async saveDigSetting(data): Promise<any> {
    console.log(data);
  }

  // 환자정보/접수정보 -----------------------------------------------------------------------------------------
  // 환자 목록 불러오기
  async getPatientsList(keyword : string) : Promise<any[]> {
    const getPatientsList = await this.CbptbainmtRepository.createQueryBuilder('CBPTBAINMT')
      .select(`
        CBPTBAINMT.pid,
        CBPTBAINMT.ptNm,
        CBPTBAINMT.ptFrrn,
        CBPTBAINMT.ptSrrn,
        CBPTBAINMT.sexCd,
        CBPTBAINMT.dobr,
        CBPTBAINMT.cntcTel,
        CBPTBAINMT.clphNo,
        CBPTBAINMT.pstlNo,
        CBPTBAINMT.bascAddr,
        CBPTBAINMT.detlAddr,
        CBPTBAINMT.mdcrMemo,
        CBPTBAINMT.rcpnMemo,
        CBPTBAINMT.vipPtYn,
        CBPTBAINMT.cncnPtYn,
        CBPTBAINMT.privPtYn,
        CBPTBAINMT.lastCmhsDt
      `,)
      .where(`CBPTBAINMT.ptNm like :name`, {name: '%' + keyword + '%'})
      .andWhere(`CBPTBAINMT.delYn = 'N'`)
      .getRawMany();

    return getPatientsList;
  }
  // 환자 접수 정보 불러오기
  async getPatientInfo(pid : string) : Promise<any> {
    const getPatientInfo = await this.CbotrcinntRepository.createQueryBuilder('CBOTRCINNT')
      .select(`
        CBOTRCINNT.rcpnSqno,
        CBOTRCINNT.mdcrDate,
        CBOTRCINNT.mdcrHm,
        CBOTRCINNT.mddpCd,
        CBOTRCINNT.mdcrDrId,
        CBOTRCINNT.fvnrDvcd,
        CBOTRCINNT.insnTycd,
        CBOTRCINNT.typeAsstCd
      `,)
      .where(`CBOTRCINNT.pid = :pid`, { pid })
      .orderBy(`CBOTRCINNT.mdcrDate`, 'DESC')
      .limit(1)
      .getRawOne();

    console.log(getPatientInfo);
    return getPatientInfo;
  };
  // 환자 접수정보 수정
  async updatePt(data) : Promise<any> {
    // 환자정보 수정
    const updatePt = await this.CbptbainmtRepository.createQueryBuilder('CBPTBAINMT')

    // 접수정보 수정
    const updateInfo = await this.CbotrcinntRepository.createQueryBuilder('CBOTRCINNT')
  };
  // 관심환자 저장
  async saveCncnPt(patient) : Promise<any> {
    await this.CbptbainmtRepository.createQueryBuilder('CBPTBAINMT')
      .update(Cbptbainmt)
      .set({
        lastUddt : new Date(),
        cncnPtYn : patient.cncn_pt_yn
      })
      .where(`pid = :id`, {id: patient.pid})
      .execute();
  };
  // 진료메모 저장
  async saveMdcrMemo(patient) : Promise<any> {
    await this.CbptbainmtRepository.createQueryBuilder('CBPTBAINMT')
      .update(Cbptbainmt)
      .set({
        lastUddt : new Date(),
        mdcrMemo : patient.mdcr_memo})
      .where(`pid = :id`, {id: patient.pid})
      .execute();
  };
  // 접수메모 저장
  async saveRcpnMemo(patient) : Promise<any> {
    await this.CbptbainmtRepository.createQueryBuilder('CBPTBAINMT')
      .update(Cbptbainmt)
      .set({
        lastUddt : new Date(),
        rcpnMemo : patient.rcpn_memo})
      .where(`pid = :id`, {id: patient.pid})
      .execute();
  };
  // 공통코드 - 접수구분
  async getCommonList(id: string) : Promise<any[]> {
    const getCommonList = await this.CzcomcodmtRepository.createQueryBuilder('CZCOMCODMT')
      .select(`
        CZCOMCODMT.cmcdId,
        CZCOMCODMT.cmcdNm
      `,)
      .where(`CZCOMCODMT.cmcdClsfId = :id`, {id})
      .getRawMany();

    return getCommonList;
  };
  // 공통고드 - 진료과 목록
  // async getDeptNm() : Promise<any[]> {
  //   const getDeptNm = await this.
  // }

  // 약속처방 -----------------------------------------------------------------------------------------
  // 검색한 처방목록 불러오기
  async getPrsList(keyword : string) : Promise<any[]> {
    const getPrsList = await this.CrprsccdmRepository.createQueryBuilder('CRPRSCCDMT')
      .select(`*`,)
      .where(`CRPRSCCDMT.prscCd like :code`, {code: '%' + keyword + '%'})
      .orWhere(`CRPRSCCDMT.prscNm like :name`, {name: '%' + keyword + '%'})
      .getRawMany();

    return getPrsList;
  }
  
  // -----------------------------------------------------------------------------------------
  // 환자코드 별 검사처방 결과 불러오기
  async getExmList(pid : string) : Promise<any[]> {
    const getExmList = await this.CrexmprsntRepository.createQueryBuilder('CREXMPRSNT')
      .select(`*`,)
      .where(`CREXMPRSNT.pid = :pid`, { pid })
      .getRawMany();

    return getExmList;
  }
  
   // 처방목록 불러오기
   async getAll(): Promise<any[]> {
    const getAllList = await this.CrprsccdmRepository.createQueryBuilder('CRPRSCCDMT')
      .select(`
        CRPRSCCDMT.prscCd,
        CRPRSCCDMT.prscNm,
        CRPRSCCDMT.prscClsfCd,
        CRPRSCCDMT.iotmCd,
        CRPRSCCDMT.ctnt,
        CRPRSCCDMT.insnTycd,
        CRPRSCCDMT.inpyDvcd,
        CRPRSCCDMT.hsotPrscYn
      `,)
      .where(`CRPRSCCDMT.prscClsfCd = 'B4'`)
      .getRawMany();

    return getAllList;
  }

  // SLIP 목록 불러오기
  async getSlipList() : Promise<any[]> {
    const getSlipList = await this.CrslipclmtRepository.createQueryBuilder('CRSLIPCLMT')
      .select(`*`,)
      .where(`CRSLIPCLMT.scrnMarkYn = 'Y'`)
      .getRawMany();

    return getSlipList;
  }
}
