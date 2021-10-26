import { Column, Entity } from "typeorm";

@Entity("cricdgrcnt", { schema: "cli" })
export class Cricdgrcnt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
  hsptCd: string;

  @Column("varchar", { name: "del_dt", comment: "삭제일시", length: 50 })
  delDt: string;

  @Column("varchar", { name: "updt_prsn_id", comment: "수정자ID", length: 13 })
  updtPrsnId: string;

  @Column("varchar", { name: "updt_prsn_ip", comment: "수정자IP", length: 15 })
  updtPrsnIp: string;

  @Column("varchar", { name: "uddt", comment: "수정일시", length: 50 })
  uddt: string;

  @Column("varchar", {
    name: "grp_clsf_dvsn",
    comment: "그룹분류구분",
    length: 1,
  })
  grpClsfDvsn: string;

  @Column("varchar", {
    primary: true,
    name: "lcls_cd",
    comment: "대분류코드",
    length: 3,
  })
  lclsCd: string;

  @Column("varchar", {
    primary: true,
    name: "mcls_cd",
    comment: "중분류코드",
    length: 3,
  })
  mclsCd: string;

  @Column("varchar", {
    primary: true,
    name: "scls_cd",
    comment: "소분류코드",
    length: 4,
  })
  sclsCd: string;

  @Column("varchar", {
    name: "grp_clsf_nm",
    nullable: true,
    comment: "그룹분류명",
    length: 200,
  })
  grpClsfNm: string | null;

  @Column("varchar", {
    primary: true,
    name: "icd_cd_dvsn",
    comment: "ICD코드구분",
    length: 1,
  })
  icdCdDvsn: string;
}
