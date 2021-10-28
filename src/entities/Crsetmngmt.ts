import { Column, Entity } from "typeorm";

@Entity("crsetmngmt", { schema: "cli" })
export class Crsetmngmt {
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

  @Column("varchar", { name: "inps_usid", comment: "입력자ID", length: 20 })
  inpsUsid: string;

  @Column("varchar", {
    name: "set_clsf",
    comment: "약속처방 분류",
    length: 100,
  })
  setClsf: string;

  @Column("varchar", {
    name: "set_clsf_cd",
    comment: "약속처방 분류 코드",
    length: 100,
  })
  setClsfCd: string;

  @Column("varchar", { name: "set_nm", comment: "약속 명칭", length: 100 })
  setNm: string;

  @Column("varchar", {
    primary: true,
    name: "set_cd",
    comment: "약속처방 코드(seq)",
    length: 100,
    // default: () => "'nextval(`cli`.`seq_cl_set_cd`)'",
  })
  setCd: string;
}
