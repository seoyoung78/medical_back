import { Column, Entity } from "typeorm";

@Entity("crprsccdht", { schema: "cli" })
export class Crprsccdht {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
  hsptCd: string;

  @Column("varchar", {
    name: "frst_rgst_usid",
    comment: "최초등록사용자ID",
    length: 20,
  })
  frstRgstUsid: string;

  @Column("datetime", {
    name: "frst_rgdt",
    comment: "최초등록일시",
    default: () => "'2000-00-06 00:00:00'",
  })
  frstRgdt: Date;

  @Column("varchar", {
    name: "last_updt_usid",
    comment: "최종수정사용자ID",
    length: 20,
  })
  lastUpdtUsid: string;

  @Column("datetime", {
    name: "last_uddt",
    comment: "최종수정일시",
    default: () => "'2000-00-06 00:00:00'",
  })
  lastUddt: Date;

  @Column("varchar", {
    primary: true,
    name: "prsc_cd",
    comment: "처방코드",
    length: 15,
  })
  prscCd: string;

  @Column("varchar", {
    name: "prsc_nm",
    nullable: true,
    comment: "처방명",
    length: 300,
  })
  prscNm: string | null;

  @Column("varchar", {
    name: "prsc_upcs_nm",
    nullable: true,
    comment: "처방명UpperCase",
    length: 300,
  })
  prscUpcsNm: string | null;

  @Column("varchar", {
    name: "prsc_clsf_cd",
    nullable: true,
    comment: "처방분류코드",
    length: 2,
  })
  prscClsfCd: string | null;

  @Column("varchar", { name: "slip_cd", comment: "SLIP코드", length: 10 })
  slipCd: string;

  @Column("varchar", {
    name: "prsc_psbl_yn",
    nullable: true,
    comment: "처방가능여부",
    length: 1,
  })
  prscPsblYn: string | null;

  @Column("varchar", {
    name: "mdpr_nm",
    nullable: true,
    comment: "약품명",
    length: 300,
  })
  mdprNm: string | null;

  @Column("varchar", {
    name: "mcds_nm",
    nullable: true,
    comment: "상품명",
    length: 300,
  })
  mcdsNm: string | null;

  @Column("varchar", {
    name: "ingr_nm",
    nullable: true,
    comment: "성분명",
    length: 300,
  })
  ingrNm: string | null;

  @Column("varchar", {
    name: "efcc_clsf_cd",
    nullable: true,
    comment: "효능분류코드",
    length: 20,
  })
  efccClsfCd: string | null;

  @Column("varchar", {
    name: "mdpr_clsf_cd",
    nullable: true,
    comment: "약품분류코드",
    length: 10,
  })
  mdprClsfCd: string | null;

  @Column("varchar", {
    name: "clcl_yn",
    nullable: true,
    comment: "계산여부",
    length: 1,
  })
  clclYn: string | null;

  @Column("varchar", {
    name: "drug_injc_dvsn",
    nullable: true,
    comment: "약주사구분",
    length: 1,
  })
  drugInjcDvsn: string | null;

  @Column("varchar", {
    name: "iotm_cd",
    nullable: true,
    comment: "용법코드",
    length: 20,
  })
  iotmCd: string | null;

  @Column("decimal", {
    name: "ctnt",
    nullable: true,
    comment: "함량",
    precision: 10,
    scale: 2,
  })
  ctnt: string | null;

  @Column("decimal", {
    name: "adlt_priz_dosg",
    nullable: true,
    comment: "성인상용량",
    precision: 10,
    scale: 1,
  })
  adltPrizDosg: string | null;

  @Column("decimal", {
    name: "chld_priz_dosg",
    nullable: true,
    comment: "소아상용량",
    precision: 10,
    scale: 1,
  })
  chldPrizDosg: string | null;

  @Column("varchar", {
    name: "intc_cd",
    nullable: true,
    comment: "상호작용코드",
    length: 2,
  })
  intcCd: string | null;

  @Column("varchar", {
    name: "efcc_clsf_cd_1",
    nullable: true,
    comment: "효능분류코드1",
    length: 2,
  })
  efccClsfCd_1: string | null;

  @Column("varchar", {
    name: "efcc_clsf_cd_2",
    nullable: true,
    comment: "효능분류코드2",
    length: 2,
  })
  efccClsfCd_2: string | null;

  @Column("varchar", {
    name: "efcc_clsf_cd_3",
    nullable: true,
    comment: "효능분류코드3",
    length: 2,
  })
  efccClsfCd_3: string | null;

  @Column("decimal", {
    name: "ddly_lmtd_qty",
    nullable: true,
    comment: "일일제한수량",
    precision: 15,
    scale: 3,
  })
  ddlyLmtdQty: string | null;

  @Column("varchar", {
    name: "stex_yn",
    nullable: true,
    comment: "SET검사여부",
    length: 1,
  })
  stexYn: string | null;

  @Column("varchar", {
    name: "spcm_cd_1",
    nullable: true,
    comment: "검체코드1",
    length: 10,
  })
  spcmCd_1: string | null;

  @Column("varchar", {
    name: "spcm_cd_2",
    nullable: true,
    comment: "검체코드2",
    length: 10,
  })
  spcmCd_2: string | null;

  @Column("varchar", {
    name: "spcm_cd_3",
    nullable: true,
    comment: "검체코드3",
    length: 11,
  })
  spcmCd_3: string | null;

  @Column("varchar", {
    name: "spcm_ctnr_cd_1",
    nullable: true,
    comment: "검체용기코드1",
    length: 10,
  })
  spcmCtnrCd_1: string | null;

  @Column("varchar", {
    name: "spcm_ctnr_cd_2",
    nullable: true,
    comment: "검체용기코드2",
    length: 10,
  })
  spcmCtnrCd_2: string | null;

  @Column("varchar", {
    name: "spcm_ctnr_cd_3",
    nullable: true,
    comment: "검체용기코드3",
    length: 11,
  })
  spcmCtnrCd_3: string | null;

  @Column("decimal", {
    name: "spcm_need_vol_1",
    nullable: true,
    comment: "검체필요량1",
    precision: 4,
    scale: 1,
  })
  spcmNeedVol_1: string | null;

  @Column("decimal", {
    name: "spcm_need_vol_2",
    nullable: true,
    comment: "검체필요량2",
    precision: 4,
    scale: 1,
  })
  spcmNeedVol_2: string | null;

  @Column("decimal", {
    name: "spcm_need_vol_3",
    nullable: true,
    comment: "검체필요량3",
    precision: 4,
    scale: 2,
  })
  spcmNeedVol_3: string | null;

  @Column("varchar", {
    name: "exmn_dowk_1",
    nullable: true,
    comment: "검사요일_일",
    length: 1,
  })
  exmnDowk_1: string | null;

  @Column("varchar", {
    name: "exmn_dowk_2",
    nullable: true,
    comment: "검사요일_월",
    length: 1,
  })
  exmnDowk_2: string | null;

  @Column("varchar", {
    name: "exmn_dowk_3",
    nullable: true,
    comment: "검사요일_화",
    length: 1,
  })
  exmnDowk_3: string | null;

  @Column("varchar", {
    name: "exmn_dowk_4",
    nullable: true,
    comment: "검사요일_수",
    length: 1,
  })
  exmnDowk_4: string | null;

  @Column("varchar", {
    name: "exmn_dowk_5",
    nullable: true,
    comment: "검사요일_목",
    length: 1,
  })
  exmnDowk_5: string | null;

  @Column("varchar", {
    name: "exmn_dowk_6",
    nullable: true,
    comment: "검사요일_금",
    length: 1,
  })
  exmnDowk_6: string | null;

  @Column("varchar", {
    name: "exmn_dowk_7",
    nullable: true,
    comment: "검사요일_토",
    length: 1,
  })
  exmnDowk_7: string | null;

  @Column("varchar", {
    name: "exrm_cd",
    nullable: true,
    comment: "검사실코드",
    length: 6,
  })
  exrmCd: string | null;

  @Column("varchar", {
    name: "exmn_rslt_tycd",
    nullable: true,
    comment: "검사결과유형코드",
    length: 1,
  })
  exmnRsltTycd: string | null;

  @Column("varchar", {
    name: "exmn_rslt_unit_nm",
    nullable: true,
    comment: "검사결과단위명",
    length: 30,
  })
  exmnRsltUnitNm: string | null;

  @Column("varchar", {
    name: "snsp_yn",
    nullable: true,
    comment: "단독검체여부",
    length: 1,
  })
  snspYn: string | null;

  @Column("varchar", {
    name: "delt_yn",
    nullable: true,
    comment: "DELTA수행여부",
    length: 1,
  })
  deltYn: string | null;

  @Column("varchar", {
    name: "panc_yn",
    nullable: true,
    comment: "PANIC수행여부",
    length: 1,
  })
  pancYn: string | null;

  @Column("varchar", {
    name: "nrvl_yn",
    nullable: true,
    comment: "정상치수행여부",
    length: 1,
  })
  nrvlYn: string | null;

  @Column("varchar", {
    name: "npo_yn",
    nullable: true,
    comment: "금식여부",
    length: 1,
  })
  npoYn: string | null;

  @Column("varchar", {
    name: "entd_exmn_yn",
    nullable: true,
    comment: "수탁검사가능여부",
    length: 1,
  })
  entdExmnYn: string | null;

  @Column("varchar", {
    name: "bldt_yn",
    nullable: true,
    comment: "채혈팀채혈여부",
    length: 1,
  })
  bldtYn: string | null;

  @Column("varchar", {
    name: "mdcr_bf_apnt_yn",
    nullable: true,
    comment: "진료전예약여부",
    length: 1,
  })
  mdcrBfApntYn: string | null;

  @Column("varchar", {
    name: "exmn_need_time",
    nullable: true,
    comment: "검사소요시간",
    length: 20,
  })
  exmnNeedTime: string | null;

  @Column("varchar", {
    name: "cntt_exmn_yn",
    nullable: true,
    comment: "연속검사여부",
    length: 1,
  })
  cnttExmnYn: string | null;

  @Column("varchar", {
    name: "acml_yn",
    nullable: true,
    comment: "누적여부",
    length: 1,
  })
  acmlYn: string | null;

  @Column("int", { name: "dspl_seq", nullable: true, comment: "나열순서" })
  dsplSeq: number | null;

  @Column("varchar", {
    name: "rslt_cd_mngm_yn",
    nullable: true,
    comment: "결과코드관리여부",
    length: 1,
  })
  rsltCdMngmYn: string | null;

  @Column("varchar", {
    name: "exmn_clsf_cd",
    nullable: true,
    comment: "검사분류",
    length: 6,
  })
  exmnClsfCd: string | null;

  @Column("varchar", {
    name: "apnt_exmn_yn",
    nullable: true,
    comment: "예약검사여부",
    length: 1,
  })
  apntExmnYn: string | null;

  @Column("varchar", {
    name: "mddp_apnt_yn",
    nullable: true,
    comment: "진료과예약여부",
    length: 1,
  })
  mddpApntYn: string | null;

  @Column("varchar", {
    name: "oprm_exmn_yn",
    nullable: true,
    comment: "수술장검사여부",
    length: 1,
  })
  oprmExmnYn: string | null;

  @Column("varchar", {
    name: "exmn_eqpm_cd",
    nullable: true,
    comment: "검사장비코드",
    length: 30,
  })
  exmnEqpmCd: string | null;

  @Column("varchar", {
    name: "exmn_spmn_matr",
    nullable: true,
    comment: "검사특기사항",
    length: 2000,
  })
  exmnSpmnMatr: string | null;

  @Column("varchar", {
    name: "prtb_yn",
    nullable: true,
    comment: "Portable여부",
    length: 1,
  })
  prtbYn: string | null;

  @Column("varchar", {
    name: "clnc_opnn_inpt_yn",
    nullable: true,
    comment: "임상소견필수입력여부",
    length: 1,
  })
  clncOpnnInptYn: string | null;

  @Column("varchar", {
    name: "emrg_exmn_psbl_yn",
    nullable: true,
    comment: "응급검사가능여부",
    length: 1,
  })
  emrgExmnPsblYn: string | null;

  @Column("varchar", {
    name: "pt_vist_dept_cd",
    nullable: true,
    comment: "환자방문부서코드",
    length: 10,
  })
  ptVistDeptCd: string | null;

  @Column("varchar", {
    name: "inbs_aply_dvcd",
    nullable: true,
    comment: "보험기준적용구분코드",
    length: 2,
  })
  inbsAplyDvcd: string | null;

  @Column("varchar", {
    name: "insn_tycd",
    nullable: true,
    comment: "보험유형코드",
    length: 2,
  })
  insnTycd: string | null;

  @Column("varchar", {
    name: "inpy_dvcd",
    nullable: true,
    comment: "보험급여구분코드",
    length: 1,
  })
  inpyDvcd: string | null;

  @Column("varchar", {
    name: "apdy",
    nullable: true,
    comment: "적용일자",
    length: 8,
  })
  apdy: string | null;

  @Column("varchar", {
    name: "endy",
    nullable: true,
    comment: "종료일자",
    length: 8,
  })
  endy: string | null;

  @Column("varchar", {
    name: "mndt_inpt_dvcd",
    nullable: true,
    comment: "필수입력구분코드",
    length: 1,
  })
  mndtInptDvcd: string | null;

  @Column("varchar", {
    name: "drg_op_trtm_yn",
    nullable: true,
    comment: "DRG수술처치여부",
    length: 1,
  })
  drgOpTrtmYn: string | null;

  @Column("varchar", {
    name: "hsot_prsc_yn",
    nullable: true,
    comment: "원외처방여부",
    length: 1,
  })
  hsotPrscYn: string | null;

  @Column("varchar", {
    name: "spfm_excp_cd",
    nullable: true,
    comment: "의약분업예외코드",
    length: 2,
  })
  spfmExcpCd: string | null;

  @Column("varchar", {
    name: "prsc_gods_yn",
    nullable: true,
    comment: "처방물품여부",
    length: 1,
  })
  prscGodsYn: string | null;

  @Column("varchar", {
    name: "prco_psbl_yn",
    nullable: true,
    comment: "선실시가능여부",
    length: 1,
  })
  prcoPsblYn: string | null;

  @Column("varchar", {
    name: "exmn_opnn_inpt_yn",
    nullable: true,
    comment: "검사소견입력여부",
    length: 1,
  })
  exmnOpnnInptYn: string | null;

  @Column("varchar", {
    name: "mdpr_dvcd",
    nullable: true,
    comment: "약품구분코드",
    length: 1,
  })
  mdprDvcd: string | null;

  @Column("varchar", {
    name: "trtm_mdcn_yn",
    nullable: true,
    comment: "처치약제여부",
    length: 1,
  })
  trtmMdcnYn: string | null;

  @Column("varchar", {
    name: "wrkl_refl_yn",
    nullable: true,
    comment: "Worklist반영여부",
    length: 1,
  })
  wrklReflYn: string | null;

  @Column("varchar", {
    name: "dnfr_chck_yn",
    nullable: true,
    comment: "치식체크여부",
    length: 1,
  })
  dnfrChckYn: string | null;

  @Column("varchar", {
    name: "apnt_exmn_nb",
    nullable: true,
    comment: "예약검사주의사항",
    length: 4000,
  })
  apntExmnNb: string | null;

  @Column("varchar", {
    name: "prnt_id",
    nullable: true,
    comment: "출력물ID",
    length: 20,
  })
  prntId: string | null;

  @Column("varchar", {
    name: "prsc_nots",
    nullable: true,
    comment: "처방참고내용",
    length: 500,
  })
  prscNots: string | null;

  @Column("varchar", {
    name: "cnmd_use_yn",
    nullable: true,
    comment: "조영제사용유무",
    length: 1,
  })
  cnmdUseYn: string | null;

  @Column("varchar", {
    name: "rmrk",
    nullable: true,
    comment: "비고",
    length: 500,
  })
  rmrk: string | null;

  @Column("varchar", {
    name: "rffm_cd",
    nullable: true,
    comment: "의뢰서코드",
    length: 20,
  })
  rffmCd: string | null;

  @Column("varchar", {
    name: "wrcn_cd",
    nullable: true,
    comment: "동의서코드",
    length: 20,
  })
  wrcnCd: string | null;

  @Column("varchar", {
    name: "qc_yn",
    nullable: true,
    comment: "정도관리여부",
    length: 1,
  })
  qcYn: string | null;

  @Column("varchar", {
    name: "mddl_rptg_yn",
    nullable: true,
    comment: "중간보고여부",
    length: 1,
  })
  mddlRptgYn: string | null;

  @Column("varchar", {
    name: "iptn_rprt_yn",
    nullable: true,
    comment: "판독보고서여부",
    length: 1,
  })
  iptnRprtYn: string | null;

  @Column("varchar", {
    name: "rffm_need_yn",
    nullable: true,
    comment: "의뢰서필요여부",
    length: 1,
  })
  rffmNeedYn: string | null;

  @Column("varchar", {
    name: "wrcn_need_yn",
    nullable: true,
    comment: "동의서필요여부",
    length: 1,
  })
  wrcnNeedYn: string | null;

  @Column("int", { name: "brcd_nosh", nullable: true, comment: "바코드매수" })
  brcdNosh: number | null;

  @Column("varchar", {
    name: "brcd_prnt_frmt_dvcd",
    nullable: true,
    comment: "바코드출력형식구분코드",
    length: 20,
  })
  brcdPrntFrmtDvcd: string | null;

  @Column("varchar", {
    name: "germ_exmn_clsf_dvcd",
    nullable: true,
    comment: "미생물검사분류구분코드",
    length: 2,
  })
  germExmnClsfDvcd: string | null;

  @Column("varchar", {
    name: "spcl_grp_cd",
    nullable: true,
    comment: "특수그룹코드",
    length: 2,
  })
  spclGrpCd: string | null;

  @Column("varchar", {
    name: "ents_exmn_inst_cd",
    nullable: true,
    comment: "위탁검사기관코드",
    length: 2,
  })
  entsExmnInstCd: string | null;

  @Column("varchar", {
    name: "exmn_need_nody",
    nullable: true,
    comment: "검사소요일수",
    length: 10,
  })
  exmnNeedNody: string | null;

  @Column("varchar", {
    name: "pckn_catn_matr",
    nullable: true,
    comment: "채취주의사항",
    length: 500,
  })
  pcknCatnMatr: string | null;

  @Column("varchar", {
    name: "dcpr_nodg",
    nullable: true,
    comment: "소수부자리수",
    length: 10,
  })
  dcprNodg: string | null;

  @Column("varchar", {
    name: "prsc_abnm",
    nullable: true,
    comment: "처방약어명",
    length: 250,
  })
  prscAbnm: string | null;

  @Column("varchar", {
    name: "urntv_yn",
    nullable: true,
    comment: "UrineTotalVolume여부",
    length: 1,
  })
  urntvYn: string | null;

  @Column("varchar", {
    name: "rtin_exmn_yn",
    nullable: true,
    comment: "Routine검사여부",
    length: 1,
  })
  rtinExmnYn: string | null;

  @Column("varchar", {
    name: "atmt_rptg_yn",
    nullable: true,
    comment: "자동보고여부",
    length: 1,
  })
  atmtRptgYn: string | null;

  @Column("decimal", {
    name: "basc_dosg",
    nullable: true,
    comment: "기본용량",
    precision: 10,
    scale: 3,
  })
  bascDosg: string | null;

  @Column("decimal", {
    name: "basc_notm",
    nullable: true,
    comment: "기본횟수",
    precision: 10,
    scale: 3,
  })
  bascNotm: string | null;

  @Column("varchar", {
    name: "unit_chck_yn",
    nullable: true,
    comment: "검사결과단위체크여부",
    length: 1,
  })
  unitChckYn: string | null;

  @Column("varchar", {
    name: "basc_exmn_rslt_yn",
    nullable: true,
    comment: "기본검사결과여부",
    length: 1,
  })
  bascExmnRsltYn: string | null;

  @Column("varchar", {
    name: "exmn_spmn_matr_mndt_yn",
    nullable: true,
    comment: "검사특기사항필수여부",
    length: 1,
  })
  exmnSpmnMatrMndtYn: string | null;

  @Column("varchar", {
    name: "clcl_mthd_cd",
    nullable: true,
    comment: "계산구분코드",
    length: 1,
  })
  clclMthdCd: string | null;

  @Column("varchar", {
    name: "suga_clcl_yn",
    nullable: true,
    comment: "수가계산여부",
    length: 1,
  })
  sugaClclYn: string | null;

  @Column("varchar", {
    name: "actg_trtm_inpt_yn",
    nullable: true,
    comment: "시행처입력여부",
    length: 1,
  })
  actgTrtmInptYn: string | null;

  @Column("varchar", {
    name: "basc_aomd_uncd",
    nullable: true,
    comment: "기본투여단위코드",
    length: 20,
  })
  bascAomdUncd: string | null;

  @Column("varchar", {
    name: "ctnt_uncd",
    nullable: true,
    comment: "함량단위코드",
    length: 20,
  })
  ctntUncd: string | null;

  @Column("varchar", {
    name: "exmn_rslt_uncd",
    nullable: true,
    comment: "검사결과단위코드",
    length: 20,
  })
  exmnRsltUncd: string | null;

  @Column("varchar", {
    name: "drcn_prsc_yn",
    nullable: true,
    comment: "지시처방여부",
    length: 1,
  })
  drcnPrscYn: string | null;

  @Column("varchar", {
    name: "mdtr_site_cd",
    nullable: true,
    comment: "치료부위코드",
    length: 10,
  })
  mdtrSiteCd: string | null;

  @Column("varchar", {
    name: "basc_spcm_yn_1",
    nullable: true,
    comment: "기본검체여부1",
    length: 1,
  })
  bascSpcmYn_1: string | null;

  @Column("varchar", {
    name: "basc_spcm_yn_2",
    nullable: true,
    comment: "기본검체여부2",
    length: 1,
  })
  bascSpcmYn_2: string | null;

  @Column("varchar", {
    name: "basc_spcm_yn_3",
    nullable: true,
    comment: "기본검체여부3",
    length: 1,
  })
  bascSpcmYn_3: string | null;
}
