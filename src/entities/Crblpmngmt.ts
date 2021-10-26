import { Column, Entity } from "typeorm";

@Entity("crblpmngmt", { schema: "cli" })
export class Crblpmngmt {
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

  @Column("varchar", { name: "inps_usid", comment: "입력자ID", length: 2 })
  inpsUsid: string;

  @Column("varchar", { name: "uprn_clsf", comment: "상위 분류", length: 100 })
  uprnClsf: string;

  @Column("varchar", { name: "blpe_clsf", comment: "상용구 분류", length: 100 })
  blpeClsf: string;

  @Column("varchar", { name: "blpe_nm", comment: "상용구 명칭", length: 100 })
  blpeNm: string;

  @Column("varchar", {
    primary: true,
    name: "blpe_cd",
    comment: "상용구 코드(seq)",
    length: 100,
  })
  blpeCd: string;
}
