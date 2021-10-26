import { Column, Entity } from "typeorm";

@Entity("crdlyprsnt", { schema: "cli" })
export class Crdlyprsnt {
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
    name: "pid",
    comment: "환자등록번호",
    length: 20,
  })
  pid: string;

  @Column("varchar", {
    primary: true,
    name: "cndt_prar_date",
    comment: "실시예정일자",
    length: 8,
  })
  cndtPrarDate: string;

  @Column("int", { primary: true, name: "cndt_sqno", comment: "실시순번" })
  cndtSqno: number;

  @Column("int", {
    name: "dlys_pt_basc_sqno",
    nullable: true,
    comment: "투석환자기본일련번호",
  })
  dlysPtBascSqno: number | null;

  @Column("varchar", {
    name: "dlys_pt_dvcd",
    nullable: true,
    comment: "투석환자구분코드",
    length: 1,
  })
  dlysPtDvcd: string | null;

  @Column("varchar", {
    name: "cndt_yn",
    nullable: true,
    comment: "실시여부",
    length: 1,
  })
  cndtYn: string | null;

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
    name: "mddp_cd",
    nullable: true,
    comment: "진료과코드",
    length: 6,
  })
  mddpCd: string | null;

  @Column("varchar", {
    name: "ward_cd",
    nullable: true,
    comment: "병동번호",
    length: 6,
  })
  wardCd: string | null;

  @Column("varchar", {
    name: "prsc_cd",
    nullable: true,
    comment: "처방코드",
    length: 15,
  })
  prscCd: string | null;

  @Column("varchar", {
    name: "dlys_kind_cd",
    nullable: true,
    comment: "투석종류코드",
    length: 2,
  })
  dlysKindCd: string | null;

  @Column("varchar", {
    name: "vesl_kind_cd",
    nullable: true,
    comment: "혈관종류코드",
    length: 2,
  })
  veslKindCd: string | null;

  @Column("varchar", {
    name: "dlys_time_cd",
    nullable: true,
    comment: "투석시간코드",
    length: 2,
  })
  dlysTimeCd: string | null;

  @Column("varchar", {
    name: "spmn_matr",
    nullable: true,
    comment: "특기사항",
    length: 500,
  })
  spmnMatr: string | null;

  @Column("varchar", {
    name: "insn_tycd",
    nullable: true,
    comment: "보험유형코드",
    length: 2,
  })
  insnTycd: string | null;

  @Column("varchar", {
    name: "rcpt_stat_cd",
    nullable: true,
    comment: "수납상태코드",
    length: 1,
  })
  rcptStatCd: string | null;

  @Column("varchar", {
    name: "mdcr_date",
    nullable: true,
    comment: "진료일자",
    length: 8,
  })
  mdcrDate: string | null;

  @Column("varchar", {
    name: "mdcr_hm",
    nullable: true,
    comment: "진료시분",
    length: 4,
  })
  mdcrHm: string | null;

  @Column("varchar", {
    name: "mdcr_dr_id",
    nullable: true,
    comment: "진료의사ID",
    length: 20,
  })
  mdcrDrId: string | null;

  @Column("varchar", {
    name: "type_asst_cd",
    nullable: true,
    comment: "유형보조코드",
    length: 2,
  })
  typeAsstCd: string | null;

  @Column("varchar", {
    name: "mdng_dvcd",
    nullable: true,
    comment: "심야구분코드",
    length: 1,
  })
  mdngDvcd: string | null;

  @Column("varchar", {
    name: "hope_date",
    nullable: true,
    comment: "희망일자",
    length: 8,
  })
  hopeDate: string | null;

  @Column("varchar", {
    name: "prsc_inpt_dt",
    nullable: true,
    comment: "처방입력일시",
    length: 50,
  })
  prscInptDt: string | null;
}
