import { Column, Entity } from "typeorm";

@Entity("cxdepinfmt", { schema: "cli" })
export class Cxdepinfmt {
  @Column("varchar", { name: "hspt_cd", comment: "병원코드", length: 13 })
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
    name: "dept_cd",
    comment: "부서코드",
    length: 10,
  })
  deptCd: string;

  @Column("varchar", {
    name: "dept_apdy",
    nullable: true,
    comment: "부서적용일자",
    length: 8,
  })
  deptApdy: string | null;

  @Column("varchar", {
    name: "dept_endy",
    nullable: true,
    comment: "부서종료일자",
    length: 8,
  })
  deptEndy: string | null;

  @Column("varchar", {
    name: "bass_uprn_dept_cd",
    nullable: true,
    comment: "기준상위부서코드",
    length: 10,
  })
  bassUprnDeptCd: string | null;

  @Column("varchar", {
    name: "rprn_dept_cd",
    nullable: true,
    comment: "대표부서코드",
    length: 10,
  })
  rprnDeptCd: string | null;

  @Column("varchar", { name: "dept_hnm", comment: "부서한글명", length: 300 })
  deptHnm: string;

  @Column("varchar", {
    name: "dept_enm",
    nullable: true,
    comment: "부서영문명",
    length: 300,
  })
  deptEnm: string | null;

  @Column("varchar", {
    name: "mdcr_dept_cd",
    nullable: true,
    comment: "진료부서코드",
    length: 6,
  })
  mdcrDeptCd: string | null;

  @Column("int", {
    name: "dept_lvl_no",
    nullable: true,
    comment: "부서레벨구분",
  })
  deptLvlNo: number | null;

  @Column("int", {
    name: "dept_lvl_prnt_seq",
    nullable: true,
    comment: "부서레벨출력순서",
  })
  deptLvlPrntSeq: number | null;

  @Column("varchar", {
    name: "otpt_mdcr_dept_yn",
    nullable: true,
    comment: "외래진료부서여부",
    length: 1,
  })
  otptMdcrDeptYn: string | null;

  @Column("varchar", {
    name: "adms_mdcr_dept_yn",
    nullable: true,
    comment: "입원진료부서여부",
    length: 1,
  })
  admsMdcrDeptYn: string | null;

  @Column("varchar", {
    name: "ward_yn",
    nullable: true,
    comment: "병동여부",
    length: 1,
  })
  wardYn: string | null;

  @Column("varchar", {
    name: "mdcn_ward_grp_cd",
    nullable: true,
    comment: "약제병동그룹코드",
    length: 1,
  })
  mdcnWardGrpCd: string | null;

  @Column("varchar", {
    name: "icu_yn",
    nullable: true,
    comment: "중환자실여부",
    length: 1,
  })
  icuYn: string | null;

  @Column("varchar", {
    name: "mlap_dept_yn",
    nullable: true,
    comment: "협진부서여부",
    length: 1,
  })
  mlapDeptYn: string | null;

  @Column("varchar", {
    name: "op_dept_yn",
    nullable: true,
    comment: "수술부서여부",
    length: 1,
  })
  opDeptYn: string | null;

  @Column("varchar", {
    name: "pt_crnt_lctn_yn",
    nullable: true,
    comment: "환자현위치여부",
    length: 1,
  })
  ptCrntLctnYn: string | null;

  @Column("varchar", {
    name: "prsc_issu_dept_yn",
    nullable: true,
    comment: "처방발행부서여부",
    length: 1,
  })
  prscIssuDeptYn: string | null;

  @Column("varchar", {
    name: "mdcr_rffm_need_yn",
    nullable: true,
    comment: "진료의뢰서필요여부",
    length: 1,
  })
  mdcrRffmNeedYn: string | null;

  @Column("varchar", {
    name: "clnr_rsrc_trgt_yn",
    nullable: true,
    comment: "임상간호연구대상부서여부",
    length: 1,
  })
  clnrRsrcTrgtYn: string | null;

  @Column("varchar", {
    name: "nrsn_duty_rptg_yn",
    nullable: true,
    comment: "간호근무보고부서여부",
    length: 1,
  })
  nrsnDutyRptgYn: string | null;

  @Column("varchar", {
    name: "hraf_dept_yn",
    nullable: true,
    comment: "인사부서여부",
    length: 1,
  })
  hrafDeptYn: string | null;

  @Column("varchar", {
    name: "aomp_cd",
    nullable: true,
    comment: "진료과목코드",
    length: 4,
  })
  aompCd: string | null;

  @Column("varchar", {
    name: "mdcr_fiel_dvcd",
    nullable: true,
    comment: "청구진료분야구분코드",
    length: 1,
  })
  mdcrFielDvcd: string | null;

  @Column("varchar", {
    name: "adms_chrg_dvcd",
    nullable: true,
    comment: "입원료발생기준구분코드",
    length: 2,
  })
  admsChrgDvcd: string | null;

  @Column("varchar", {
    name: "mddp_dnts_dvcd",
    nullable: true,
    comment: "의과계, 치과계 구분 코드",
    length: 1,
  })
  mddpDntsDvcd: string | null;

  @Column("varchar", {
    name: "entr_rgsr_tycd",
    nullable: true,
    comment: "입실관리부서구분코드",
    length: 1,
  })
  entrRgsrTycd: string | null;

  @Column("int", {
    name: "mddp_prnt_seq",
    nullable: true,
    comment: "진료과리스트조회출력순서",
  })
  mddpPrntSeq: number | null;

  @Column("int", {
    name: "clam_dept_prnt_seq",
    nullable: true,
    comment: "청구부서출력순서",
  })
  clamDeptPrntSeq: number | null;

  @Column("varchar", {
    name: "tel",
    nullable: true,
    comment: "전화번호",
    length: 30,
  })
  tel: string | null;

  @Column("varchar", {
    name: "dept_lctn_nm",
    nullable: true,
    comment: "부서위치명",
    length: 20,
  })
  deptLctnNm: string | null;

  @Column("varchar", {
    name: "exrm_clsf_cd",
    nullable: true,
    comment: "검사실분류코드",
    length: 3,
  })
  exrmClsfCd: string | null;

  @Column("varchar", {
    name: "mdpr_wrhs_dept_cd",
    nullable: true,
    comment: "약품창고부서코드",
    length: 10,
  })
  mdprWrhsDeptCd: string | null;

  @Column("varchar", {
    name: "mcsp_use_dept_yn",
    nullable: true,
    comment: "진료지원사용부서여부",
    length: 1,
  })
  mcspUseDeptYn: string | null;

  @Column("varchar", {
    name: "mdaf_rcrd_mngm_yn",
    nullable: true,
    comment: "의무기록관리여부",
    length: 1,
  })
  mdafRcrdMngmYn: string | null;

  @Column("varchar", {
    name: "hlck_rslt_mngm_yn",
    nullable: true,
    comment: "건강검진결과관리여부",
    length: 1,
  })
  hlckRsltMngmYn: string | null;

  @Column("varchar", {
    name: "emrg_yn",
    nullable: true,
    comment: "응급여부",
    length: 1,
  })
  emrgYn: string | null;
}
