import { Column, Entity } from "typeorm";

@Entity("crslpmngmt", { schema: "cli" })
export class Crslpmngmt {
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
    name: "slip_cd",
    comment: "SLIP코드",
    length: 10,
  })
  slipCd: string;

  @Column("varchar", {
    primary: true,
    name: "part_cd",
    comment: "파트코드",
    length: 5,
  })
  partCd: string;

  @Column("int", {
    name: "scrn_prnt_seq",
    nullable: true,
    comment: "화면출력순서",
  })
  scrnPrntSeq: number | null;

  @Column("varchar", {
    name: "rmrk",
    nullable: true,
    comment: "비고",
    length: 500,
  })
  rmrk: string | null;

  @Column("varchar", {
    name: "slip_nm",
    nullable: true,
    comment: "SLIP명",
    length: 150,
  })
  slipNm: string | null;

  @Column("varchar", {
    name: "slip_scrn_nm",
    nullable: true,
    comment: "SLIP화면명",
    length: 50,
  })
  slipScrnNm: string | null;

  @Column("varchar", {
    name: "slip_labl_nm",
    nullable: true,
    comment: "SLIP라벨명",
    length: 20,
  })
  slipLablNm: string | null;

  @Column("varchar", {
    name: "use_dept_dvcd",
    nullable: true,
    comment: "사용부서구분코드",
    length: 1,
  })
  useDeptDvcd: string | null;

  @Column("varchar", {
    name: "use_yn",
    nullable: true,
    comment: "사용여부",
    length: 1,
  })
  useYn: string | null;
}
