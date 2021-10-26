import { Column, Entity } from "typeorm";

@Entity("czcomclsmt", { schema: "cli" })
export class Czcomclsmt {
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
    name: "cmcd_clsf_id",
    comment: "공통코드분류ID",
    length: 10,
  })
  cmcdClsfId: string;

  @Column("varchar", {
    name: "cmcd_clsf_nm",
    nullable: true,
    comment: "공통코드분류명",
    length: 200,
  })
  cmcdClsfNm: string | null;

  @Column("varchar", {
    name: "cmcd_clsf_expl",
    nullable: true,
    comment: "공통코드분류설명",
    length: 1000,
  })
  cmcdClsfExpl: string | null;

  @Column("int", {
    name: "cmcd_lngt",
    nullable: true,
    comment: "공통코드길이값",
  })
  cmcdLngt: number | null;

  @Column("varchar", {
    name: "cmcd_clsf_apdy",
    nullable: true,
    comment: "공통코드분류적용일자",
    length: 8,
  })
  cmcdClsfApdy: string | null;

  @Column("varchar", {
    name: "cmcd_clsf_endy",
    nullable: true,
    comment: "공통코드분류종료일자",
    length: 8,
  })
  cmcdClsfEndy: string | null;

  @Column("int", {
    name: "clsf_dspl_seq",
    nullable: true,
    comment: "분류나열순서",
  })
  clsfDsplSeq: number | null;

  @Column("varchar", {
    name: "uprn_clsf_cd",
    nullable: true,
    comment: "상위분류코드",
    length: 10,
  })
  uprnClsfCd: string | null;

  @Column("varchar", {
    name: "lwrn_yn",
    nullable: true,
    comment: "하위분류존재여부",
    length: 1,
  })
  lwrnYn: string | null;
}
