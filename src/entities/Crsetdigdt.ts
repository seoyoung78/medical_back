import { Column, Entity } from "typeorm";

@Entity("crsetdigdt", { schema: "cli" })
export class Crsetdigdt {
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

  @Column("varchar", { name: "dgns_cd", comment: "진단코드", length: 10 })
  dgnsCd: string;

  @Column("varchar", {
    name: "dgns_nm",
    nullable: true,
    comment: "진단명",
    length: 300,
  })
  dgnsNm: string | null;

  @Column("varchar", {
    primary: true,
    name: "set_cd",
    comment: "약속처방 코드(seq)",
    length: 100,
  })
  setCd: string;

  @Column("varchar", {
    primary: true,
    name: "sqno",
    comment: "순번",
    length: 100,
  })
  sqno: string;
}
