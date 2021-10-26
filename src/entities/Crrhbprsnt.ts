import { Column, Entity } from "typeorm";

@Entity("crrhbprsnt", { schema: "cli" })
export class Crrhbprsnt {
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

  @Column("varchar", {
    name: "mdcr_apnt_hm",
    nullable: true,
    comment: "진료예약시분",
    length: 4,
  })
  mdcrApntHm: string | null;

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
    name: "mdtr_site_cd",
    nullable: true,
    comment: "치료부위코드",
    length: 10,
  })
  mdtrSiteCd: string | null;

  @Column("varchar", {
    name: "mdtr_frqn",
    nullable: true,
    comment: "치료빈도",
    length: 10,
  })
  mdtrFrqn: string | null;

  @Column("int", { name: "ondy_notm", nullable: true, comment: "1일횟수" })
  ondyNotm: number | null;

  @Column("int", { name: "nody", nullable: true, comment: "일수" })
  nody: number | null;

  @Column("int", { name: "apnt_notm", nullable: true, comment: "예약횟수" })
  apntNotm: number | null;

  @Column("int", { name: "cndt_notm", nullable: true, comment: "실시횟수" })
  cndtNotm: number | null;

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
    name: "clnc_opnn",
    nullable: true,
    comment: "임상소견",
    length: 2000,
  })
  clncOpnn: string | null;

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
    name: "spmn_matr",
    nullable: true,
    comment: "특기사항",
    length: 250,
  })
  spmnMatr: string | null;

  @Column("varchar", {
    name: "prsc_inpt_dt",
    nullable: true,
    comment: "처방입력일시",
    length: 50,
  })
  prscInptDt: string | null;

  @Column("varchar", {
    name: "prsc_pay_dvcd",
    nullable: true,
    comment: "처방급여구분코드",
    length: 1,
  })
  prscPayDvcd: string | null;

  @Column("varchar", {
    name: "pt_insn_tycd",
    nullable: true,
    comment: "환자보험유형코드",
    length: 2,
  })
  ptInsnTycd: string | null;

  @Column("varchar", {
    name: "adms_pt_insn_tycd",
    nullable: true,
    comment: "입원환자보험유형코드",
    length: 2,
  })
  admsPtInsnTycd: string | null;

  @Column("varchar", {
    name: "dc_drcn_dt",
    nullable: true,
    comment: "DC지시일시",
    length: 50,
  })
  dcDrcnDt: string | null;

  @Column("varchar", {
    name: "dc_drcn_dr_id",
    nullable: true,
    comment: "DC지시의ID",
    length: 20,
  })
  dcDrcnDrId: string | null;

  @Column("varchar", {
    name: "pt_tycd",
    nullable: true,
    comment: "환자유형코드",
    length: 2,
  })
  ptTycd: string | null;

  @Column("varchar", {
    name: "apnt_dt",
    nullable: true,
    comment: "치료예약일시",
    length: 50,
  })
  apntDt: string | null;

  @Column("varchar", {
    name: "cndt_dt",
    nullable: true,
    comment: "실시일시",
    length: 50,
  })
  cndtDt: string | null;

  @Column("varchar", {
    name: "cndt_prsn_id",
    nullable: true,
    comment: "실시자ID",
    length: 20,
  })
  cndtPrsnId: string | null;

  @Column("varchar", {
    name: "rtrn_yn",
    nullable: true,
    comment: "반납여부",
    length: 1,
  })
  rtrnYn: string | null;

  @Column("varchar", {
    name: "rtrn_prsn_id",
    nullable: true,
    comment: "반납자ID",
    length: 20,
  })
  rtrnPrsnId: string | null;

  @Column("varchar", {
    name: "rtrn_rqst_date",
    nullable: true,
    comment: "반납요청일자",
    length: 8,
  })
  rtrnRqstDate: string | null;

  @Column("varchar", {
    name: "rtrn_dt",
    nullable: true,
    comment: "반납일시",
    length: 50,
  })
  rtrnDt: string | null;

  @Column("varchar", {
    name: "rtrn_rqst_yn",
    nullable: true,
    comment: "반납요청여부",
    length: 1,
  })
  rtrnRqstYn: string | null;

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
    name: "revw_stat_cd",
    nullable: true,
    comment: "심사상태코드",
    length: 1,
  })
  revwStatCd: string | null;

  @Column("varchar", {
    name: "type_asst_cd",
    nullable: true,
    comment: "유형보조코드",
    length: 2,
  })
  typeAsstCd: string | null;

  @Column("decimal", {
    name: "clcl_suga_amt",
    nullable: true,
    comment: "계산수가금액",
    precision: 13,
    scale: 2,
  })
  clclSugaAmt: string | null;

  @Column("varchar", {
    name: "prsc_prgr_stat_cd",
    nullable: true,
    comment: "처방진행상태코드",
    length: 1,
  })
  prscPrgrStatCd: string | null;
}
