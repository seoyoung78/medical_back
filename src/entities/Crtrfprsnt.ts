import { Column, Entity } from "typeorm";

@Entity("crtrfprsnt", { schema: "cli" })
export class Crtrfprsnt {
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

  @Column("varchar", { name: "prsc_cd", comment: "처방코드", length: 15 })
  prscCd: string;

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
    name: "qty",
    nullable: true,
    comment: "수량",
    precision: 10,
    scale: 3,
  })
  qty: string | null;

  @Column("varchar", {
    name: "fltr_yn",
    nullable: true,
    comment: "FILTER여부",
    length: 1,
  })
  fltrYn: string | null;

  @Column("varchar", {
    name: "ast_yn",
    nullable: true,
    comment: "AST여부",
    length: 1,
  })
  astYn: string | null;

  @Column("varchar", {
    name: "self_trfs_yn",
    nullable: true,
    comment: "자가수혈여부",
    length: 1,
  })
  selfTrfsYn: string | null;

  @Column("varchar", {
    name: "trfs_lctn_cd",
    nullable: true,
    comment: "수혈장소코드",
    length: 1,
  })
  trfsLctnCd: string | null;

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

  @Column("decimal", {
    name: "frns_qty",
    nullable: true,
    comment: "불출수량",
    precision: 15,
    scale: 3,
  })
  frnsQty: string | null;

  @Column("decimal", {
    name: "rtrn_qty",
    nullable: true,
    comment: "반납수량",
    precision: 15,
    scale: 3,
  })
  rtrnQty: string | null;

  @Column("decimal", {
    name: "dsps_qty",
    nullable: true,
    comment: "폐기수량",
    precision: 15,
    scale: 3,
  })
  dspsQty: string | null;

  @Column("varchar", {
    name: "rtrn_yn",
    nullable: true,
    comment: "반납여부",
    length: 1,
  })
  rtrnYn: string | null;

  @Column("varchar", {
    name: "prsc_inpt_dt",
    nullable: true,
    comment: "처방입력일시",
    length: 50,
  })
  prscInptDt: string | null;

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
}
