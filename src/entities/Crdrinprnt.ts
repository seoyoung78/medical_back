import { Column, Entity } from "typeorm";

@Entity("crdrinprnt", { schema: "cli" })
export class Crdrinprnt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
  hsptCd: string;

  @Column("varchar", {
    name: "frst_rgst_usid",
    comment: "최초등록사용자ID",
    length: 20,
  })
  frstRgstUsid: string;

  @Column("datetime", { name: "frst_rgdt", comment: "최초등록일시" })
  frstRgdt: Date;

  @Column("varchar", {
    name: "last_updt_usid",
    comment: "최종수정사용자ID",
    length: 20,
  })
  lastUpdtUsid: string;

  @Column("datetime", { name: "last_uddt", comment: "최종수정일시" })
  lastUddt: Date;

  @Column("varchar", {
    primary: true,
    name: "pid",
    comment: "환자등록번호",
    length: 20,
  })
  pid: string;

  @Column("varchar", {
    primary: true,
    name: "prsc_date",
    comment: "처방일자",
    length: 8,
  })
  prscDate: string;

  @Column("int", { primary: true, name: "prsc_sqno", comment: "처방순번" })
  prscSqno: number;

  @Column("varchar", {
    name: "prsc_cd",
    nullable: true,
    comment: "처방코드",
    length: 15,
  })
  prscCd: string | null;

  @Column("varchar", {
    name: "prsc_nm",
    nullable: true,
    comment: "처방명",
    length: 300,
  })
  prscNm: string | null;

  @Column("varchar", {
    name: "mdcr_date",
    nullable: true,
    comment: "진료일자",
    length: 8,
  })
  mdcrDate: string | null;

  @Column("int", { name: "rcpn_sqno", comment: "접수일련번호" })
  rcpnSqno: number;

  @Column("varchar", {
    name: "pt_dvcd",
    nullable: true,
    comment: "환자구분코드",
    length: 1,
  })
  ptDvcd: string | null;

  @Column("varchar", {
    name: "ptaf_pt_dvcd",
    nullable: true,
    comment: "원무환자구분코드",
    length: 1,
  })
  ptafPtDvcd: string | null;

  @Column("varchar", {
    name: "prsc_clsf_cd",
    nullable: true,
    comment: "처방분류코드",
    length: 2,
  })
  prscClsfCd: string | null;

  @Column("varchar", {
    name: "slip_cd",
    nullable: true,
    comment: "SLIP코드",
    length: 10,
  })
  slipCd: string | null;

  @Column("varchar", {
    name: "prsc_shpe_cd",
    nullable: true,
    comment: "처방형태코드",
    length: 1,
  })
  prscShpeCd: string | null;

  @Column("varchar", {
    name: "prsc_kind_cd",
    nullable: true,
    comment: "처방종류코드",
    length: 1,
  })
  prscKindCd: string | null;

  @Column("varchar", {
    name: "dc_yn",
    nullable: true,
    comment: "D/C여부",
    length: 1,
  })
  dcYn: string | null;

  @Column("varchar", {
    name: "mddp_cd",
    nullable: true,
    comment: "진료과코드",
    length: 6,
  })
  mddpCd: string | null;

  @Column("varchar", {
    name: "mdcr_dr_id",
    nullable: true,
    comment: "진료의사ID",
    length: 20,
  })
  mdcrDrId: string | null;

  @Column("varchar", {
    name: "prsc_dr_id",
    nullable: true,
    comment: "처방의사ID",
    length: 20,
  })
  prscDrId: string | null;

  @Column("decimal", {
    name: "dosg_1",
    nullable: true,
    comment: "용량1",
    precision: 10,
    scale: 2,
  })
  dosg_1: string | null;

  @Column("decimal", {
    name: "dosg_2",
    nullable: true,
    comment: "용량2",
    precision: 10,
    scale: 2,
  })
  dosg_2: string | null;

  @Column("decimal", {
    name: "dosg_3",
    nullable: true,
    comment: "용량3",
    precision: 10,
    scale: 2,
  })
  dosg_3: string | null;

  @Column("decimal", {
    name: "dosg_4",
    nullable: true,
    comment: "용량4",
    precision: 10,
    scale: 2,
  })
  dosg_4: string | null;

  @Column("decimal", {
    name: "dosg_5",
    nullable: true,
    comment: "용량5",
    precision: 10,
    scale: 2,
  })
  dosg_5: string | null;

  @Column("varchar", {
    name: "uncd",
    nullable: true,
    comment: "단위코드",
    length: 30,
  })
  uncd: string | null;

  @Column("varchar", {
    name: "optn_unit_dvcd",
    nullable: true,
    comment: "선택단위구분코드",
    length: 1,
  })
  optnUnitDvcd: string | null;

  @Column("decimal", {
    name: "ontm_vol",
    nullable: true,
    comment: "1회량",
    precision: 10,
    scale: 2,
  })
  ontmVol: string | null;

  @Column("decimal", {
    name: "totl_vol",
    nullable: true,
    comment: "총량",
    precision: 10,
    scale: 2,
  })
  totlVol: string | null;

  @Column("int", { name: "notm", nullable: true, comment: "횟수" })
  notm: number | null;

  @Column("int", { name: "nody", nullable: true, comment: "일수" })
  nody: number | null;

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

  @Column("varchar", {
    name: "iotm_rmrk",
    nullable: true,
    comment: "용법비고",
    length: 40,
  })
  iotmRmrk: string | null;

  @Column("varchar", {
    name: "pt_insn_tycd",
    nullable: true,
    comment: "환자보험유형코드",
    length: 2,
  })
  ptInsnTycd: string | null;

  @Column("varchar", {
    name: "prsc_pay_dvcd",
    nullable: true,
    comment: "처방급여구분코드",
    length: 1,
  })
  prscPayDvcd: string | null;

  @Column("varchar", {
    name: "pwdr_yn",
    nullable: true,
    comment: "Powder여부",
    length: 1,
  })
  pwdrYn: string | null;

  @Column("varchar", {
    name: "ast_yn",
    nullable: true,
    comment: "AST여부",
    length: 1,
  })
  astYn: string | null;

  @Column("varchar", {
    name: "mix_yn",
    nullable: true,
    comment: "MIX여부",
    length: 1,
  })
  mixYn: string | null;

  @Column("varchar", {
    name: "dc_drcn_dr_id",
    nullable: true,
    comment: "DC지시의ID",
    length: 20,
  })
  dcDrcnDrId: string | null;

  @Column("varchar", {
    name: "dc_drcn_dt",
    nullable: true,
    comment: "DC지시일시",
    length: 50,
  })
  dcDrcnDt: string | null;

  @Column("varchar", {
    name: "hsin_hsot_dvcd",
    nullable: true,
    comment: "원내/원외구분코드",
    length: 1,
  })
  hsinHsotDvcd: string | null;

  @Column("varchar", {
    name: "hsin_prsc_resn_cd",
    nullable: true,
    comment: "원내처방사유코드",
    length: 2,
  })
  hsinPrscResnCd: string | null;

  @Column("varchar", {
    name: "ward_cd",
    nullable: true,
    comment: "병동코드",
    length: 6,
  })
  wardCd: string | null;

  @Column("varchar", {
    name: "room_cd",
    nullable: true,
    comment: "병실코드",
    length: 5,
  })
  roomCd: string | null;

  @Column("varchar", {
    name: "prsc_cndt_dept_cd",
    nullable: true,
    comment: "처방실시부서코드",
    length: 10,
  })
  prscCndtDeptCd: string | null;

  @Column("varchar", {
    name: "rcpt_dt",
    nullable: true,
    comment: "수납일시",
    length: 50,
  })
  rcptDt: string | null;

  @Column("varchar", {
    name: "rcpt_stat_cd",
    nullable: true,
    comment: "수납상태코드",
    length: 1,
  })
  rcptStatCd: string | null;

  @Column("varchar", {
    name: "prsc_prgr_stat_cd",
    nullable: true,
    comment: "처방진행상태코드",
    length: 1,
  })
  prscPrgrStatCd: string | null;

  @Column("int", { name: "mdct_no", nullable: true, comment: "투약번호" })
  mdctNo: number | null;

  @Column("varchar", {
    name: "spmn_matr",
    nullable: true,
    comment: "특기사항",
    length: 250,
  })
  spmnMatr: string | null;

  @Column("varchar", {
    name: "prsc_edtn_cnts_1",
    nullable: true,
    comment: "처방편집내용1",
    length: 300,
  })
  prscEdtnCnts_1: string | null;

  @Column("varchar", {
    name: "prsc_edtn_cnts_2",
    nullable: true,
    comment: "처방편집내용2",
    length: 300,
  })
  prscEdtnCnts_2: string | null;

  @Column("varchar", {
    name: "prsc_inpt_dt",
    nullable: true,
    comment: "처방입력일시",
    length: 50,
  })
  prscInptDt: string | null;

  @Column("varchar", {
    name: "revw_stat_cd",
    nullable: true,
    comment: "심사상태코드",
    length: 1,
  })
  revwStatCd: string | null;

  @Column("varchar", {
    name: "prsc_spmn_matr",
    nullable: true,
    comment: "처방특기사항",
    length: 200,
  })
  prscSpmnMatr: string | null;

  @Column("varchar", {
    name: "mdpr_clsf_cd",
    nullable: true,
    comment: "약품분류코드",
    length: 10,
  })
  mdprClsfCd: string | null;

  @Column("varchar", {
    name: "insn_clam_date",
    nullable: true,
    comment: "보험청구일자",
    length: 8,
  })
  insnClamDate: string | null;

  @Column("varchar", {
    name: "injc_prar_date",
    nullable: true,
    comment: "주사예정일자",
    length: 8,
  })
  injcPrarDate: string | null;

  @Column("varchar", {
    name: "mdad_info_cnts",
    nullable: true,
    comment: "급여정보내용",
    length: 2000,
  })
  mdadInfoCnts: string | null;

  @Column("varchar", {
    name: "insn_tycd",
    nullable: true,
    comment: "보험유형코드",
    length: 2,
  })
  insnTycd: string | null;

  @Column("varchar", {
    name: "mdcr_hm",
    nullable: true,
    comment: "진료시분",
    length: 4,
  })
  mdcrHm: string | null;

  @Column("varchar", {
    name: "pack_dvcd",
    nullable: true,
    comment: "포장구분코드",
    length: 3,
  })
  packDvcd: string | null;

  @Column("varchar", {
    name: "clcl_yn",
    nullable: true,
    comment: "계산여부",
    length: 1,
  })
  clclYn: string | null;

  @Column("varchar", {
    name: "prsc_memo",
    nullable: true,
    comment: "메모",
    length: 1000,
  })
  prscMemo: string | null;

  @Column("varchar", {
    name: "jx999",
    nullable: true,
    comment: "JX999",
    length: 1000,
  })
  jx999: string | null;

  @Column("varchar", {
    name: "dc_resn",
    nullable: true,
    comment: "DC 사유",
    length: 1000,
  })
  dcResn: string | null;

  @Column("varchar", {
    name: "dc_resn_cd",
    nullable: true,
    comment: "DC 사유 코드",
    length: 1,
  })
  dcResnCd: string | null;
}
