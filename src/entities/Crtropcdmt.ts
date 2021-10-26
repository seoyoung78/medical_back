import { Column, Entity } from "typeorm";

@Entity("crtropcdmt", { schema: "cli" })
export class Crtropcdmt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 20 })
  hsptCd: string;

  @Column("varchar", {
    name: "frst_rgdt",
    comment: "최초등록사용자ID",
    length: 20,
  })
  frstRgdt: string;

  @Column("datetime", { name: "last_updt_usid", comment: "최초등록일시" })
  lastUpdtUsid: Date;

  @Column("varchar", {
    name: "last_uddt",
    comment: "최종수정사용자ID",
    length: 20,
  })
  lastUddt: string;

  @Column("datetime", { name: "mdcr_dept_cd", comment: "최종수정일시" })
  mdcrDeptCd: Date;

  @Column("varchar", {
    name: "del_dt",
    nullable: true,
    comment: "삭제일시",
    length: 50,
  })
  delDt: string | null;

  @Column("varchar", {
    primary: true,
    name: "trtm_op_cd",
    comment: "처치수술코드",
    length: 10,
  })
  trtmOpCd: string;

  @Column("varchar", {
    name: "trtm_op_hnm",
    nullable: true,
    comment: "처치수술한글명",
    length: 300,
  })
  trtmOpHnm: string | null;

  @Column("varchar", {
    name: "trtm_op_enm",
    nullable: true,
    comment: "처치수술영문명",
    length: 300,
  })
  trtmOpEnm: string | null;

  @Column("varchar", {
    name: "icd_cd",
    nullable: true,
    comment: "ICD코드",
    length: 10,
  })
  icdCd: string | null;

  @Column("varchar", { name: "lcls_cd", comment: "대분류코드", length: 5 })
  lclsCd: string;

  @Column("varchar", { name: "mcls_cd", comment: "중분류코드", length: 3 })
  mclsCd: string;

  @Column("varchar", { name: "scls_cd", comment: "소분류코드", length: 4 })
  sclsCd: string;

  @Column("varchar", {
    name: "vrsn",
    nullable: true,
    comment: "코드버전",
    length: 3,
  })
  vrsn: string | null;

  @Column("varchar", {
    name: "icd_cd_yn",
    nullable: true,
    comment: "ICD코드여부",
    length: 1,
  })
  icdCdYn: string | null;

  @Column("varchar", {
    name: "rmrk",
    nullable: true,
    comment: "비고",
    length: 2000,
  })
  rmrk: string | null;

  @Column("varchar", {
    name: "mdcr_use_yn",
    nullable: true,
    comment: "진료사용여부",
    length: 1,
  })
  mdcrUseYn: string | null;
}
