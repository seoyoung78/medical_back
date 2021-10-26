import { Column, Entity } from "typeorm";

@Entity("crkcddgcmt", { schema: "cli" })
export class Crkcddgcmt {
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
    name: "dgns_cd_dvsn",
    nullable: true,
    comment: "진단코드구분",
    length: 1,
  })
  dgnsCdDvsn: string | null;

  @Column("varchar", {
    primary: true,
    name: "dgns_cd",
    comment: "원내 상병기호",
    length: 10,
  })
  dgnsCd: string;

  @Column("varchar", { name: "kcd_cd", comment: "KCD 상병기호", length: 10 })
  kcdCd: string;

  @Column("varchar", {
    name: "dgns_enm",
    nullable: true,
    comment: "진단영문명",
    length: 300,
  })
  dgnsEnm: string | null;

  @Column("varchar", {
    name: "dgns_hnm",
    nullable: true,
    comment: "진단한글명",
    length: 300,
  })
  dgnsHnm: string | null;

  @Column("varchar", {
    name: "icd_cd",
    nullable: true,
    comment: "ICD코드",
    length: 20,
  })
  icdCd: string | null;

  @Column("varchar", {
    name: "icd_nm",
    nullable: true,
    comment: "ICD명",
    length: 500,
  })
  icdNm: string | null;

  @Column("varchar", {
    name: "apdy",
    nullable: true,
    comment: "시작일",
    length: 8,
  })
  apdy: string | null;

  @Column("varchar", {
    name: "endy",
    nullable: true,
    comment: "종료일",
    length: 8,
  })
  endy: string | null;

  @Column("varchar", {
    name: "cmpl_cd_dvsn",
    nullable: true,
    comment: "완전코드구분",
    length: 1,
  })
  cmplCdDvsn: string | null;

  @Column("varchar", {
    name: "main_dgns_use_dvsn",
    nullable: true,
    comment: "주상병사용구분",
    length: 1,
  })
  mainDgnsUseDvsn: string | null;

  @Column("varchar", {
    name: "cmds_grad",
    nullable: true,
    comment: "법정감염병구분",
    length: 1,
  })
  cmdsGrad: string | null;

  @Column("varchar", {
    name: "sex_dvsn",
    nullable: true,
    comment: "성별구분",
    length: 1,
  })
  sexDvsn: string | null;

  @Column("varchar", {
    name: "uplm_age",
    nullable: true,
    comment: "상한연령",
    length: 3,
  })
  uplmAge: string | null;

  @Column("varchar", {
    name: "lwlm_age",
    nullable: true,
    comment: "하한연령",
    length: 3,
  })
  lwlmAge: string | null;

  @Column("varchar", {
    name: "wmom_dvsn",
    nullable: true,
    comment: "양한방구분",
    length: 20,
  })
  wmomDvsn: string | null;

  @Column("varchar", {
    name: "spcf_rgno",
    nullable: true,
    comment: "특정기호",
    length: 5,
  })
  spcfRgno: string | null;

  @Column("varchar", {
    name: "chrn_dsse_cd",
    nullable: true,
    comment: "만성질환 코드",
    length: 1,
  })
  chrnDsseCd: string | null;

  @Column("varchar", {
    name: "dvsn",
    nullable: true,
    comment: "구분",
    length: 10,
  })
  dvsn: string | null;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;

  @Column("varchar", {
    name: "mdcr_use_yn",
    nullable: true,
    comment: "진료사용여부",
    length: 1,
  })
  mdcrUseYn: string | null;

  @Column("varchar", {
    name: "dnfr_chck_yn",
    nullable: true,
    comment: "치식체크여부",
    length: 1,
  })
  dnfrChckYn: string | null;
}
