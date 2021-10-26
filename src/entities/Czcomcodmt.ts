import { Column, Entity } from "typeorm";

@Entity("czcomcodmt", { schema: "cli" })
export class Czcomcodmt {
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
    primary: true,
    name: "cmcd_id",
    comment: "공통코드ID",
    length: 20,
  })
  cmcdId: string;

  @Column("varchar", {
    name: "cmcd_nm",
    nullable: true,
    comment: "공통코드명",
    length: 600,
  })
  cmcdNm: string | null;

  @Column("varchar", {
    name: "cmcd_expl",
    nullable: true,
    comment: "공통코드설명",
    length: 1000,
  })
  cmcdExpl: string | null;

  @Column("int", {
    name: "cmcd_prnt_seq",
    nullable: true,
    comment: "공통코드출력순서",
  })
  cmcdPrntSeq: number | null;

  @Column("varchar", {
    name: "cmcd_valu_1",
    nullable: true,
    comment: "공통코드값1",
    length: 100,
  })
  cmcdValu_1: string | null;

  @Column("varchar", {
    name: "cmcd_valu_expl_1",
    nullable: true,
    comment: "공통코드값설명1",
    length: 1000,
  })
  cmcdValuExpl_1: string | null;

  @Column("varchar", {
    name: "cmcd_valu_2",
    nullable: true,
    comment: "공통코드값2",
    length: 100,
  })
  cmcdValu_2: string | null;

  @Column("varchar", {
    name: "cmcd_valu_expl_2",
    nullable: true,
    comment: "공통코드값설명2",
    length: 1000,
  })
  cmcdValuExpl_2: string | null;

  @Column("varchar", {
    name: "cmcd_valu_3",
    nullable: true,
    comment: "공통코드값3",
    length: 100,
  })
  cmcdValu_3: string | null;

  @Column("varchar", {
    name: "cmcd_valu_expl_3",
    nullable: true,
    comment: "공통코드값설명3",
    length: 1000,
  })
  cmcdValuExpl_3: string | null;

  @Column("varchar", {
    name: "cmcd_apdy",
    nullable: true,
    comment: "공통코드적용일자",
    length: 8,
  })
  cmcdApdy: string | null;

  @Column("varchar", {
    name: "cmcd_endy",
    nullable: true,
    comment: "공통코드종료일자",
    length: 8,
  })
  cmcdEndy: string | null;
}
