import { Column, Entity } from "typeorm";

@Entity("crsetprsdt", { schema: "cli" })
export class Crsetprsdt {
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

  @Column("varchar", { name: "prsc_cd", comment: "처방코드", length: 15 })
  prscCd: string;

  @Column("varchar", {
    name: "prsc_nm",
    nullable: true,
    comment: "처방명",
    length: 300,
  })
  prscNm: string | null;

  @Column("varchar", {
    name: "mix_yn",
    nullable: true,
    comment: "MIX여부",
    length: 1,
  })
  mixYn: string | null;

  @Column("decimal", {
    name: "ontm_vol",
    nullable: true,
    comment: "1회량",
    precision: 10,
    scale: 2,
  })
  ontmVol: string | null;

  @Column("decimal", {
    name: "totl_vol",
    nullable: true,
    comment: "총량",
    precision: 10,
    scale: 2,
  })
  totlVol: string | null;

  @Column("int", { name: "notm", nullable: true, comment: "횟수" })
  notm: number | null;

  @Column("int", { name: "nody", nullable: true, comment: "일수" })
  nody: number | null;

  @Column("varchar", {
    name: "iotm_cd",
    nullable: true,
    comment: "용법코드",
    length: 20,
  })
  iotmCd: string | null;

  @Column("varchar", {
    name: "prsc_pay_dvcd",
    nullable: true,
    comment: "처방급여구분코드",
    length: 1,
  })
  prscPayDvcd: string | null;

  @Column("varchar", {
    name: "hsin_hsot_dvcd",
    nullable: true,
    comment: "원내/원외구분코드",
    length: 1,
  })
  hsinHsotDvcd: string | null;

  @Column("varchar", {
    name: "hsin_prsc_resn_cd",
    nullable: true,
    comment: "원내처방사유코드",
    length: 2,
  })
  hsinPrscResnCd: string | null;

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
