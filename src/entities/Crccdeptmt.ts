import { Column, Entity } from "typeorm";

@Entity("crccdeptmt", { schema: "cli" })
export class Crccdeptmt {
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
    name: "mddp_cd",
    comment: "진료과코드",
    length: 6,
  })
  mddpCd: string;

  @Column("varchar", { name: "cc_cd", comment: "주호소코드", length: 15 })
  ccCd: string;

  @Column("varchar", {
    name: "cc_item_dvcd",
    comment: "주호소항목구분코드",
    length: 15,
  })
  ccItemDvcd: string;

  @Column("varchar", {
    name: "del_yn",
    nullable: true,
    comment: "삭제여부",
    length: 1,
  })
  delYn: string | null;
}
