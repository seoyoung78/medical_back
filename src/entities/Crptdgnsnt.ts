import { Column, Entity } from "typeorm";

@Entity("crptdgnsnt", { schema: "cli" })
export class Crptdgnsnt {
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
    name: "inpt_dt",
    nullable: true,
    comment: "입력일시",
    length: 50,
  })
  inptDt: string | null;

  @Column("int", { primary: true, name: "rcpn_sqno", comment: "접수일련번호" })
  rcpnSqno: number;

  @Column("varchar", {
    name: "mddp_cd",
    nullable: true,
    comment: "진료과코드",
    length: 6,
  })
  mddpCd: string | null;

  @Column("varchar", {
    name: "dr_id",
    nullable: true,
    comment: "진단의",
    length: 20,
  })
  drId: string | null;

  @Column("int", { name: "dgns_sqno", nullable: true, comment: "진단일련번호" })
  dgnsSqno: number | null;

  @Column("varchar", {
    primary: true,
    name: "dgns_cd",
    comment: "진단코드",
    length: 10,
  })
  dgnsCd: string;

  @Column("varchar", {
    name: "dgns_nm",
    nullable: true,
    comment: "진단명",
    length: 300,
  })
  dgnsNm: string | null;

  @Column("varchar", {
    name: "dvsn",
    nullable: true,
    comment: "형태",
    length: 1,
  })
  dvsn: string | null;

  @Column("varchar", {
    name: "rlot",
    nullable: true,
    comment: "R/O",
    length: 1,
  })
  rlot: string | null;

  @Column("varchar", {
    name: "site",
    nullable: true,
    comment: "부위",
    length: 1,
  })
  site: string | null;

  @Column("varchar", {
    name: "spcf_rgno",
    nullable: true,
    comment: "특정기호",
    length: 10,
  })
  spcfRgno: string | null;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;
}
