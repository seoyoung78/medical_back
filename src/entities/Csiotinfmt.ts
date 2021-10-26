import { Column, Entity } from "typeorm";

@Entity("csiotinfmt", { schema: "cli" })
export class Csiotinfmt {
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
    name: "iotm_cd",
    comment: "용법코드",
    length: 20,
  })
  iotmCd: string;

  @Column("varchar", {
    name: "iotm_nm",
    nullable: true,
    comment: "용법명",
    length: 200,
  })
  iotmNm: string | null;

  @Column("varchar", {
    name: "prsc_clsf_cd",
    nullable: true,
    comment: "처방분류코드",
    length: 2,
  })
  prscClsfCd: string | null;

  @Column("int", { name: "tkng_notm", nullable: true, comment: "복용횟수" })
  tkngNotm: number | null;

  @Column("varchar", {
    name: "envl_prnt_dvsn",
    nullable: true,
    comment: "봉투출력구분",
    length: 1,
  })
  envlPrntDvsn: string | null;

  @Column("varchar", {
    name: "envl_cnts_1",
    nullable: true,
    comment: "봉투내용1",
    length: 200,
  })
  envlCnts_1: string | null;

  @Column("varchar", {
    name: "envl_cnts_2",
    nullable: true,
    comment: "봉투내용2",
    length: 200,
  })
  envlCnts_2: string | null;

  @Column("varchar", {
    name: "injc_tnfe_yn",
    nullable: true,
    comment: "주사수기료여부",
    length: 1,
  })
  injcTnfeYn: string | null;

  @Column("varchar", {
    name: "atmt_ocrr_suga_cd",
    nullable: true,
    comment: "자동발생수가코드",
    length: 15,
  })
  atmtOcrrSugaCd: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;

  @Column("int", { name: "sqno", nullable: true, comment: "순번" })
  sqno: number | null;
}
