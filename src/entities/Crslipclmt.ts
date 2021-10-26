import { Column, Entity } from "typeorm";

@Entity("crslipclmt", { schema: "cli" })
export class Crslipclmt {
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
    name: "slip_cd",
    comment: "SLIP코드",
    length: 10,
  })
  slipCd: string;

  @Column("varchar", {
    name: "slip_nm",
    nullable: true,
    comment: "SLIP명",
    length: 150,
  })
  slipNm: string | null;

  @Column("varchar", {
    name: "prsc_clsf_cd",
    nullable: true,
    comment: "처방분류코드",
    length: 2,
  })
  prscClsfCd: string | null;

  @Column("int", {
    name: "slip_dspl_seq",
    nullable: true,
    comment: "SLIP나열순서",
  })
  slipDsplSeq: number | null;

  @Column("varchar", {
    name: "scrn_mark_yn",
    nullable: true,
    comment: "화면표시여부",
    length: 1,
  })
  scrnMarkYn: string | null;

  @Column("varchar", {
    name: "slip_uprn_clsf_cd",
    nullable: true,
    comment: "상위Slip분류코드",
    length: 10,
  })
  slipUprnClsfCd: string | null;

  @Column("varchar", {
    name: "clsf_dvcd",
    nullable: true,
    comment: "분류구분코드",
    length: 6,
  })
  clsfDvcd: string | null;

  @Column("varchar", {
    name: "lwrn_yn",
    nullable: true,
    comment: "하위분류존재여부",
    length: 1,
  })
  lwrnYn: string | null;

  @Column("varchar", {
    name: "exmn_rslt_tycd",
    nullable: true,
    comment: "검사결과유형코드",
    length: 1,
  })
  exmnRsltTycd: string | null;

  @Column("varchar", {
    name: "exmn_dvcd",
    nullable: true,
    comment: "검사구분코드",
    length: 6,
  })
  exmnDvcd: string | null;
}
