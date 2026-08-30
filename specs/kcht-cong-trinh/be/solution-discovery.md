# SA — Solution — kcht-cong-trinh (Công trình KCHT · edit_page PH2–PH4)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_210b1351` · `/agent-sa`)  
> Standards: api-endpoint · bff-api-structure · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates**  
> **Cấm** ERP.WebService · `ERP.Service.*` · Domains/Master · `api/v1/rmms/*` · invent nested path as DONE · Write MFE/native ở role SA

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| this role | `sa` · `/agent-sa` |
| packKind | `list` (Kind **B** + nested Kind B đoạn/tuần/sổ + full-page CT **4 tab**) |
| changeScope | `edit_page` (PH2–PH4) · Wave 1 PH1 **giữ** |
| status | `confirmed` |
| design_confirm | **approve** (`task_92f4685f`) |
| solution_confirm | **approve** (autoApprove ON · `task_210b1351`) · Wave 1 `task_dd7ab2e1` **giữ** |
| prior · design | `confirmed` · `ui/design.md` + prototype · `task_92f4685f` |
| prior · po | `confirmed` · `po/requirement.md` · `task_5e779467` |
| prior · data_analy | `confirmed` · control-hint + real-data · contentHash `sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd` · headerFingerprint `sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167` |
| updatedAt | `2026-08-29T04:50:00.000Z` |
| taskId | `task_210b1351` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` **locked** |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` · `ui_repo_confirm` **locked** · `/kcht-cong-trinh` · `:9312` |

**Cấm:** invent `api/v1/rmms/kcht/*` · Slideout form CT · demo-json SSOT · re-scan demo · PH5 Kind E · byte file DB · giả API KBNN · mark PH2–PH4 path live trước Dev.

**Wave 1 cite (PH1 live):** `KchtProjectsController` · `IKchtProjectsService` · `KchtProjectsBffController` · `KchtProjectEntity` (+ Decision/Contract/Attachment) · catalog `kcht-projects` · route `api/v1/kcht-ct/projects` · MFE `BASE=/kcht-ct/projects`.

---

## 1. Ownership (DOMAIN-MAP)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Contract` · PH1 + nested PH2–PH4 (Design) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `api/src/RMMS.Service.Api/Domains/Contract/` (**widen**) |
| Models / DTO | `api/domains/contract/LINM.RMMS.Contract.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/` · NEW segment/weekly/capital/disburse/kbn |
| Migrations | `api/shared/RMMS.Service.Migrations/` — CLI **`Schema_KchtCongTrinhDisburse`** · **IN P1** |
| BFF | `bff/domains/contract/LINM.RMMS.Contract.Bff/` · widen proxy nested · **proxy only = yes** |
| UI schema | Integration · `kcht-projects` live · NEW `kcht-segments` · `kcht-weekly-progress` · `kcht-disbursements` |
| Integration | road-routes · org-units · partner-units · users P2 · province **FE static P1** |
| File | FileService `/integrate-file-upload-web` — bind trên **dòng GD** |
| Docs | DOMAIN-MAP `kcht-cong-trinh` → Contract · prefix `kcht-ct` |

### Architecture

| Layer | Choice |
|-------|--------|
| Feature Kind | **B** + nested Kind B + full-page CT 4 tab · NEW forms **5 cột** |
| Domain | **Contract** widen × **KchtProject** live × PH2–PH4 **NEW** |
| API prefix | **`api/v1/kcht-ct`** · BFF **`web-bff/api/v1/kcht-ct`** (PH1 live — giữ) |
| Nest | `/projects/{id}/segments` · `/weekly-progress` · `/capital-plans` · `/disbursements` · `/kbn-compare` |
| BFF | proxy only = yes |
| Response | CommonLib `ApiResponse<T>` / paged |
| Auth | `kcht.projects.*` + `kcht.segments.*` · `kcht.weekly.*` · `kcht.disbursements.*` · `kcht.capital-plans.*` (stub) |
| Persist | child tables — **cấm** parent `*Json` |
| Out of pack | PH5 · map canvas · Integration province GET · live KBNN API |

### SSOT / anti-duplicate

| Concern | Package / rule |
|---------|----------------|
| UI | `@linm-soft-org/linm-web-common-components` |
| HTTP | apiClient SSOT |
| BE | Linm.Platform.CommonLib |
| Auth | Linm.Platform.Authentication |
| Persist | no-parent-json-field |
| Labels | `useFormOptions()` — **cấm** hardcode VN |

---

## Route decision (PH2–PH4 — **closed**)

| Surface | UI path | API (SA chốt · **GAP**) |
|---------|---------|-------------------------|
| List/Form CT | `/kcht-cong-trinh` · `/tao-moi` · `/:id` | projects **live** |
| Đoạn | `/:id/doan-tuyen` · `…/:segId` | `…/projects/{id}/segments` |
| Tuần | `/:id/tien-do` · `…/:weekId` | `…/projects/{id}/weekly-progress` |
| Sổ GN | `/:id/giai-ngan` **1 URL** | capital-plans + disbursements + kbn-compare |
| Handoff HĐ | `/hd-ns/:id?from=kcht&projectId=` | contract **live** |

**GAP-PO-SO-ROUTE-01:** 1 URL sổ · layout SCĐK\|SCTX theo `projectType`.  
**GAP-KCT-SEG-ENT-01:** **NEW `KchtRouteSegment`** — không `ContractRoute` (không tồn tại BE).  
**Cấm** thêm tab CT — PH2–PH4 = routes + secondary links.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill |
|------|----------|----------------------|-------|
| **TZ** | **tz_required** | segment dates · weekOf · voucherDate · warranty* | `/review-timezone-implement` |
| **XCO** | **xco_get_only** | GET project **live** · nested GET inherit parent company | `/implement-view-cross-company` |
| **SHARE** | **share_tenant** | All NEW under `KchtProject` / `ICompanyContext` | `/implement-shared-table` |

AskQuestion (autoApprove=ON · `2026-08-29T04:50:00.000Z`):  
`sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve`.

---

## 2. FormMode ↔ API (REQUIRED)

### PH1 — giữ (live)

| FormMode | UI | API | Notes |
|----------|-----|-----|-------|
| list/create/edit/view | PH1 routes | projects CRUD **live** | 4 tab lock |
| contracts/attachments | tab 2–3 | nested **live** | |

**Tab 0 PH2:** `routeSegmentSummary` — GET derived từ segments **hoặc** omit write khi `count≥1`.  
**Tab 0 PH4:** `capitalPlanAmount` display P1 · sổ SSOT = `KchtCapitalPlan`.

### PH2 — đoạn (**GAP**)

| FormMode | UI | API |
|----------|-----|-----|
| list | `/:id/doan-tuyen` | `GET …/segments` · filters: search · status · roadRouteCode · warrantyAlert · page · pageSize |
| create | `…/tao-moi` | `POST …/segments` |
| edit/view | `…/:segId` | `PUT/GET …/segments/{segId}` |
| delete | row | `DELETE …/segments/{segId}` soft |

`warrantyAlert` = **derived** (warrantyEnd vs UtcNow) — DTO; optional cache column OK.

### PH3 — tuần (**GAP**)

| FormMode | UI | API |
|----------|-----|-----|
| list | `/:id/tien-do` | `GET …/weekly-progress` |
| create | `…/tao-moi` | `POST` · unique (projectId, weekOf, tenant) · 422 dup |
| edit/view/delete | `…/:weekId` | PUT/GET/DELETE |

Header = read-model trên GET. `prevWeekPct` · `weekDeltaPct` · `alerts[]` = **derived DTO** P1 (+ job optional).

### PH4 — sổ + KBN (**GAP**)

| FormMode | UI | API |
|----------|-----|-----|
| sổ | `/:id/giai-ngan` | GET capital-plans + disbursements |
| capital | header | `GET/PUT …/capital-plans?year=` upsert |
| dòng GD | grid/modal | CRUD `…/disbursements` |
| attach dòng | file | `…/disbursements/{lineId}/attachments` |
| KBN | panel | `GET/PUT …/kbn-compare?year=` · `POST …/import` Excel · **cấm** API KBNN |

---

## 3. Form data → entities

| Entity | Table | Notes |
|--------|-------|-------|
| `KchtRouteSegmentEntity` | `rmms_kcht_route_segments` | LRS + BH · 6 status · FK project |
| `KchtWeeklyProgressEntity` | `rmms_kcht_weekly_progress` | unique (project_id, week_of, company_id) |
| `KchtCapitalPlanEntity` | `rmms_kcht_capital_plans` | unique (project_id, year, company_id) |
| `KchtDisbursementEntity` | `rmms_kcht_disbursements` | 1 GD = 1 row · optional `contract_payment_id` |
| `KchtDisbursementAttachmentEntity` | `rmms_kcht_disbursement_attachments` | FileService refs |
| `KchtKbnCompareLineEntity` | `rmms_kcht_kbn_compare_lines` | pmValue · kbnValue · diff derived |

**Cấm** parent JSON trên `KchtProject`. **Cấm** `varbinary`.

### Field map — PH2 segment

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| roadRouteCode | RoadRouteCode | `road_route_code` | * Integration |
| provinceCode | ProvinceCode | `province_code` | * FE static P1 |
| kmFrom / kmTo | KmFrom / KmTo | `km_from` / `km_to` | * |
| lengthM | LengthM | `length_m` | |
| workItem | WorkItem | `work_item` | |
| assetRef | AssetRef | `asset_ref` | tham chiếu — không tạo TS |
| contractId | ContractId | `contract_id` | Guid? |
| contractorCode | ContractorCode | `contractor_code` | partner-unit |
| startAt · finishAt · acceptAt · handoverAt | * | `*_at` | UTC |
| warrantyMonths · warrantyStart · warrantyEnd | * | `warranty_*` | |
| status | Status | `status` | * 6 enum |
| warrantyAlert | WarrantyAlert | — | derived |

### Field map — PH3 weekly

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| weekOf | WeekOf | `week_of` | * |
| planPctToWeek · actualPctToWeek | * | `plan_pct_to_week` · `actual_pct_to_week` | |
| valueCum · valueWeek | * | `value_cum` · `value_week` | money |
| situation · nextWeekWork · issues · solution | * | text cols | |
| delayCause | DelayCause | `delay_cause` | enum |
| rag | Rag | `rag` | enum |
| prevWeekPct · weekDeltaPct · alerts[] | — | — | derived |

### Field map — PH4 capital

| uiField | dtoField | dbColumn |
|---------|----------|----------|
| year | Year | `year` |
| yearEstimate | YearEstimate | `year_estimate` |
| supplementAmount | SupplementAmount | `supplement_amount` |
| adjustAmount | AdjustAmount | `adjust_amount` |
| savingDeducted | SavingDeducted | `saving_deducted` |
| yearEstimateFinal | YearEstimateFinal | `year_estimate_final` |
| capitalPlan | CapitalPlan | `capital_plan` |

### Field map — PH4 disbursement

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| costGroup | CostGroup | `cost_group` | * TT1–8 |
| content | Content | `content` | * |
| lineNo · parentLineId | * | `line_no` · `parent_line_id` | cây |
| quarterCode | QuarterCode | `quarter_code` | SCTX |
| contractValue · paymentValue · disbursedValue · outstandingValue | * | money cols | outstanding default payment−disbursed |
| partyCode · partyKind | * | `party_code` · `party_kind` | * |
| voucherKind · voucherNo · voucherDate | * | voucher_* | UTC date |
| contractPaymentId | ContractPaymentId | `contract_payment_id` | optional FK |
| bookLayout | BookLayout | `book_layout` | `scdk`\|`sctx` optional |

### Field map — KBN

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| lineLabel | LineLabel | `line_label` | |
| pmValue · kbnValue | * | `pm_value` · `kbn_value` | |
| diff | Diff | — | derived |
| year | Year | `year` | * |

---

## 4. API catalog (PH2–PH4 · GAP scaffold)

Base: `api/v1/kcht-ct` · BFF `web-bff/api/v1/kcht-ct`.

### Segments

| id | Method | Path | Perm |
|----|--------|------|------|
| API-S01 | GET | `/kcht-ct/projects/{id}/segments` | segments.read |
| API-S02 | GET | `/kcht-ct/projects/{id}/segments/{segId}` | segments.read · XCO parent |
| API-S03 | POST | `/kcht-ct/projects/{id}/segments` | segments.create |
| API-S04 | PUT | `/kcht-ct/projects/{id}/segments/{segId}` | segments.update |
| API-S05 | DELETE | `/kcht-ct/projects/{id}/segments/{segId}` | segments.delete |

### Weekly

| id | Method | Path | Perm |
|----|--------|------|------|
| API-W01 | GET | `/kcht-ct/projects/{id}/weekly-progress` | weekly.read |
| API-W02 | GET | `/kcht-ct/projects/{id}/weekly-progress/{weekId}` | weekly.read |
| API-W03 | POST | `/kcht-ct/projects/{id}/weekly-progress` | weekly.create |
| API-W04 | PUT | `/kcht-ct/projects/{id}/weekly-progress/{weekId}` | weekly.update |
| API-W05 | DELETE | `/kcht-ct/projects/{id}/weekly-progress/{weekId}` | weekly.delete |

### Capital / Disburse / KBN

| id | Method | Path | Perm |
|----|--------|------|------|
| API-C01 | GET | `/kcht-ct/projects/{id}/capital-plans` | capital-plans.read |
| API-C02 | PUT | `/kcht-ct/projects/{id}/capital-plans` | capital-plans.update |
| API-D01 | GET | `/kcht-ct/projects/{id}/disbursements` | disbursements.read |
| API-D02 | GET | `/kcht-ct/projects/{id}/disbursements/{lineId}` | disbursements.read |
| API-D03 | POST | `/kcht-ct/projects/{id}/disbursements` | disbursements.create |
| API-D04 | PUT | `/kcht-ct/projects/{id}/disbursements/{lineId}` | disbursements.update |
| API-D05 | DELETE | `/kcht-ct/projects/{id}/disbursements/{lineId}` | disbursements.delete |
| API-D06–08 | GET/POST/DELETE | `…/disbursements/{lineId}/attachments` | bind FileService |
| API-K01 | GET | `/kcht-ct/projects/{id}/kbn-compare` | disbursements.read |
| API-K02 | PUT | `/kcht-ct/projects/{id}/kbn-compare` | disbursements.update |
| API-K03 | POST | `/kcht-ct/projects/{id}/kbn-compare/import` | Excel · **cấm** KBNN API |

PH1 API-01…11 projects/contracts/attachments — **PASS live** · không đổi contract.  
BFF: widen `KchtProjectsBffController` proxy nested (T-BFF-KCT-02).

---

## 5. Lookup APIs (controlHint · Design)

| Lookup | catalogKind | controlHint | API P1 | Decision |
|--------|-------------|-------------|--------|----------|
| segment status | `kcht-segment-status` | SearchInput | none | `chua-tc` · `dang-tc` · `ht` · `nt` · `dang-bh` · `het-bh` |
| delay cause | `kcht-delay-cause` | SearchInput | none | công văn PH3 |
| rag | `kcht-rag` | SearchInput | none | `xanh` · `vang` · `do` |
| cost group | `kcht-cost-group` | SearchInput | none | TT1–8 SRC-KCT-GN03 |
| voucher kind | `kcht-voucher-kind` | SearchInput | none | `giay-rut` · `pg` · `unc` |
| party kind | `kcht-party-kind` | SearchInput | none | `contractor` · `khu` · `bql` · `cuc` |
| disb doc kind | `kcht-disb-doc-kind` | SearchInput | none | 6 loại công văn |
| road-route | `road-route` | SearchInput | Integration search | **LIVE** |
| org-unit | `org-unit` | SearchInput | Integration search | **LIVE** |
| partner-unit | `partner-unit` | SearchInput | Integration search | **LIVE** |
| province | `province` | SearchInput | **LOOKUP_STATIC FE** | Integration GET **DEFER P2** |
| project contracts | picker | SearchInput | `GET …/contracts` live | |
| catalog UI | `kcht-segments` · `kcht-weekly-progress` · `kcht-disbursements` | Zone F | registry | **NEW IN P1** |

**Cấm** native `<select>` · free-text substitute master.

**kcht-cost-group values:** `tvtk` · `hsmt` · `xay-lap` · `giam-sat` · `qlda` · `le-phi-td` · `kiem-toan` · `tham-tra-qt`.

---

## 6. Tables & migration

| Schema CLI | Tables |
|------------|--------|
| **`Schema_KchtCongTrinhDisburse`** | `rmms_kcht_route_segments` · `rmms_kcht_weekly_progress` · `rmms_kcht_capital_plans` · `rmms_kcht_disbursements` · `rmms_kcht_disbursement_attachments` · `rmms_kcht_kbn_compare_lines` |

Entity files: `KchtRouteSegmentEntity` · `KchtWeeklyProgressEntity` · `KchtCapitalPlanEntity` · `KchtDisbursementEntity` · `KchtDisbursementAttachmentEntity` · `KchtKbnCompareLineEntity`.

**Step 4b Dev only** — SA **không** chạy migration.

### Jobs (TL/Dev)

| Job | Rule |
|-----|------|
| T-BE-JOB-BH-01 | warrantyEnd → badge 90/60/30 |
| T-BE-JOB-WEEK-01 | thiếu weekly tuần hiện tại → alert |

---

## 7. FileService bind (GAP-KCT-PH4-04)

1. FE presign `POST /integrate-file-upload-web`  
2. Bind `POST …/disbursements/{lineId}/attachments` metadata only  
3. Download FileService GET  
4. Delete soft ref  

**Cấm** stub-only trên dòng GD · **cấm** bytes DB.

---

## 8. Live verify (SA read-only)

| Check | Result |
|-------|--------|
| Projects CRUD + contracts/attachments | **PASS live** |
| BFF projects | **PASS live** · nested PH2–PH4 **GAP** |
| Catalog `kcht-projects` | **PASS live** |
| Segments / weekly / capital / disburse / kbn | **GAP** |
| `ContractPaymentEntity` | **PASS cite** — không đủ PH4 |
| `ContractRoute` | **N/A** → NEW `KchtRouteSegment` |
| Integration road/org/partner | **PASS** |
| Province Integration GET | **n/a P1** |
| FileService | READY · dòng GD bind **GAP** |
| DOMAIN-MAP `kcht-cong-trinh` | **GAP** → T-CTX-01 |

---

## 9. Gaps closed (SA)

| ID | Decision |
|----|----------|
| GAP-KCT-PH2-01/02/03 | NEW segment + API + routes · BH trên đoạn |
| GAP-KCT-PH3-01/02 | weekly + API + job thiếu tuần |
| GAP-KCT-PH4-01…05 | capital · disburse · attach · 1 URL sổ · KBN Excel |
| GAP-KCT-SEG-ENT-01 | **NEW KchtRouteSegment** |
| GAP-PO-SO-ROUTE-01 | **1 URL** `/giai-ngan` |
| GAP-PO-PROVINCE-01 | FE static P1 |
| GAP-PO-KBNN-01 | **Cấm** API KBNN |
| GAP-KCT-PH5-01 | **PARK** |
| GAP-KCT-DM-01 | DOMAIN-MAP row |
| GAP-TAB-01 | Tab 0–3 lock |
| GAP-DES-DEMO-RESCAN-01 | hash skip |

---

## 10. Tasks for TL (WHAT)

| id | layer | SA verdict |
|----|-------|------------|
| T-CTX-01 | docs | DOMAIN-MAP row (SA cập nhật) |
| T-BE-KCT-PH2-01 | api+migration | **NEW** segments |
| T-BE-KCT-PH3-01 | api+migration | **NEW** weekly |
| T-BE-KCT-PH4-01 | api+migration | **NEW** capital/disburse/kbn · Schema_KchtCongTrinhDisburse |
| T-BE-SCHEMA-KCT-02 | Integration | NEW catalog kinds |
| T-BE-JOB-BH-01 · WEEK-01 | job | **NEW** |
| T-BFF-KCT-02 | bff | nested proxy |
| T-PERM-KCT-02 | ui+api | nested perms |
| T-UI-KCT-PH2…4 | ui | pending TL |
| T-QA-* | qa | queued `/agent-qa*` |

---

## 11. Confirm

`solution_confirm` = **approve** — autoApprove **ON** (`task_210b1351`).  
Roles sau = **pending**. Chain **team-lead**.

`be_repo_confirm` = `Linm.RMMS.WebService` · `ui_repo_confirm` = `Linm.Web.RMMS.Contract` (**locked**).

**This SA role: no FE/BE source write · no migration · no e2e · no yarn build/start:std.**

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.29.01 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.29.01 |
| rulesVersion | 2026.08.29.17 |
| generatedAt | 2026-08-29T04:50:00.000Z |
| versionGate | rechecked |
| contentHashPriorDesign | sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd |
| contentHashPriorDataAnaly | sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd |
| headerFingerprintPrior | sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 |
| orchestratorSkillVersion | 2026.08.29.01 |
| orchestratorWorkflowVersion | 2026.08.29.01 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| designSkillVersion | 2026.08.29.01 |
| poSkillVersion | 2026.08.21.01 |
| dataAnalySkillVersion | 2026.08.21.01 |
| taskId | `task_210b1351` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.29.01 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.29.01 rulesVersion=2026.08.29.17 versionGate=rechecked contentHashPriorDataAnaly=sha256:4652f6331035f6521fe50b83cf35ad19d594ca0b4de1fbb40a44f17d52a337dd headerFingerprintPrior=sha256:b42f332386243b15594ca97c71e26d37f16a62eb27badbe7df51aabbe4554167 taskId=task_210b1351 -->
