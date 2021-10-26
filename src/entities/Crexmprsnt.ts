import { Column, Entity } from "typeorm";

@Entity("crexmprsnt", { schema: "cli" })
export class Crexmprsnt {
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

  @Column("varchar", {
    name: "dgns_cd",
    nullable: true,
    comment: "진단코드",
    length: 10,
  })
  dgnsCd: string | null;

  @Column("varchar", {
    name: "dgns_nm",
    nullable: true,
    comment: "진단명",
    length: 300,
  })
  dgnsNm: string | null;

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
    name: "spcm_cd_1",
    nullable: true,
    comment: "검체코드1",
    length: 5,
  })
  spcmCd_1: string | null;

  @Column("varchar", {
    name: "spcm_cd_2",
    nullable: true,
    comment: "검체코드2",
    length: 5,
  })
  spcmCd_2: string | null;

  @Column("varchar", {
    name: "spcm_cd_3",
    nullable: true,
    comment: "검체코드3",
    length: 4,
  })
  spcmCd_3: string | null;

  @Column("varchar", {
    name: "spcm_no_1",
    nullable: true,
    comment: "검체번호1",
    length: 20,
  })
  spcmNo_1: string | null;

  @Column("varchar", {
    name: "spcm_no_2",
    nullable: true,
    comment: "검체번호2",
    length: 20,
  })
  spcmNo_2: string | null;

  @Column("varchar", {
    name: "spcm_no_3",
    nullable: true,
    comment: "검체번호3",
    length: 20,
  })
  spcmNo_3: string | null;

  @Column("varchar", {
    name: "hope_exrm_cd",
    nullable: true,
    comment: "희망검사실코드",
    length: 5,
  })
  hopeExrmCd: string | null;

  @Column("varchar", {
    name: "exmn_hope_dt",
    nullable: true,
    comment: "검사희망일시",
    length: 50,
  })
  exmnHopeDt: string | null;

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

  @Column("varchar", {
    name: "blcl_dt",
    nullable: true,
    comment: "채혈일시",
    length: 50,
  })
  blclDt: string | null;

  @Column("varchar", {
    name: "apnt_dt",
    nullable: true,
    comment: "예약일시",
    length: 50,
  })
  apntDt: string | null;

  @Column("varchar", {
    name: "rcpn_dt",
    nullable: true,
    comment: "접수일시",
    length: 50,
  })
  rcpnDt: string | null;

  @Column("varchar", {
    name: "cndt_dt",
    nullable: true,
    comment: "실시일시",
    length: 50,
  })
  cndtDt: string | null;

  @Column("varchar", {
    name: "iptn_dt",
    nullable: true,
    comment: "판독일시",
    length: 50,
  })
  iptnDt: string | null;

  @Column("varchar", {
    name: "rptg_dt",
    nullable: true,
    comment: "보고일시",
    length: 50,
  })
  rptgDt: string | null;

  @Column("varchar", {
    name: "entd_exmn_yn",
    nullable: true,
    comment: "수탁검사여부",
    length: 1,
  })
  entdExmnYn: string | null;

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
    name: "prsc_memo",
    nullable: true,
    comment: "처방메모",
    length: 200,
  })
  prscMemo: string | null;

  @Column("varchar", {
    name: "apnt_yn",
    nullable: true,
    comment: "예약여부",
    length: 1,
  })
  apntYn: string | null;

  @Column("varchar", {
    name: "ptaf_rcpt_apdy",
    nullable: true,
    comment: "원무수납적용일자",
    length: 50,
  })
  ptafRcptApdy: string | null;

  @Column("varchar", {
    name: "dc_drcn_dt",
    nullable: true,
    comment: "반납지시일시",
    length: 50,
  })
  dcDrcnDt: string | null;

  @Column("varchar", {
    name: "dc_drcn_dr_id",
    nullable: true,
    comment: "반납지시의ID",
    length: 20,
  })
  dcDrcnDrId: string | null;

  @Column("int", { name: "dspl_seq", nullable: true, comment: "나열순서" })
  dsplSeq: number | null;

  @Column("varchar", {
    name: "bldt_blcl_yn",
    nullable: true,
    comment: "채혈팀채혈여부",
    length: 1,
  })
  bldtBlclYn: string | null;

  @Column("varchar", {
    name: "inps_id",
    nullable: true,
    comment: "입력자ID",
    length: 20,
  })
  inpsId: string | null;

  @Column("varchar", {
    name: "mdng_yn",
    nullable: true,
    comment: "심야여부",
    length: 1,
  })
  mdngYn: string | null;

  @Column("varchar", {
    name: "cr_yn",
    nullable: true,
    comment: "임상연구여부",
    length: 1,
  })
  crYn: string | null;

  @Column("varchar", {
    name: "exrm_spmn_matr",
    nullable: true,
    comment: "검사실특기사항",
    length: 2000,
  })
  exrmSpmnMatr: string | null;

  @Column("varchar", {
    name: "mdcr_hm",
    nullable: true,
    comment: "진료시분",
    length: 4,
  })
  mdcrHm: string | null;

  @Column("varchar", {
    name: "insn_tycd",
    nullable: true,
    comment: "보험유형코드",
    length: 2,
  })
  insnTycd: string | null;

  @Column("varchar", {
    name: "type_asst_cd",
    nullable: true,
    comment: "유형보조코드",
    length: 2,
  })
  typeAsstCd: string | null;

  @Column("varchar", {
    name: "exmn_pich_id",
    nullable: true,
    comment: "검사담당자ID",
    length: 20,
  })
  exmnPichId: string | null;
}
