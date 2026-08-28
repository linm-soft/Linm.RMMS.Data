# SA — Solution — kcht-cong-trinh (Công trình KCHT · Khu QLĐB IV)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_dd7ab2e1` · `/agent-sa`)  
> Standards: api-endpoint · bff-api-structure · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates**  
> **Cấm** ERP.WebService · `ERP.Service.*` · Domains/Master · `api/v1/rmms/*`

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| this role | `sa` · `/agent-sa` |
| packKind | `list` (Kind **B** catalog A–D + **full-page** form **4 tab**) |
| changeScope | `new_page` |
| status | `confirmed` |
| design_confirm | **approve** (`task_64fb2fd7`) |
| solution_confirm | **approve** (autoApprove ON · `task_dd7ab2e1`) |
| prior · design | `confirmed` · `ui/design.md` + prototype · `2026-08-27T00:30:00.000Z` |
| prior · po | `confirmed` · `po/requirement.md` · `task_3b4ed0d9` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` · `kcht-cong-trinh-real-data.md` · hash `sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe` |
| updatedAt | `2026-08-27T07:10:00.000Z` |
| taskId | `task_dd7ab2e1` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` · `/kcht-cong-trinh` |

**Cấm:** invent `api/v1/rmms/kcht/*` · Slideout form · demo-json SSOT · PH2–PH5 API trong wave 1 · byte file trên DB nghiệp vụ.

---

## 1. Ownership (DOMAIN-MAP)

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` · routes `/kcht-cong-trinh` · `/kcht-cong-trinh/tao-moi` · `/kcht-cong-trinh/:id` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `api/src/RMMS.Service.Api/Domains/Contract/` (**widen** — không tạo domain mới) |
| Models / DTO | `api/domains/contract/LINM.RMMS.Contract.Models/DTOs/` · `KchtProjectDtos.cs` (NEW) |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/` · `KchtProject*` NEW · `ContractEntity` widen |
| Migrations | `api/shared/RMMS.Service.Migrations/` — **IN P1** (4 bảng mới + widen `rmms_contracts`) |
| BFF | `bff/domains/contract/LINM.RMMS.Contract.Bff/` · `KchtProjectsBffController` (NEW) |
| UI schema (Integration) | `Domains/Integration` · `CatalogUiSchemaRegistry` kind **`kcht-projects`** |
| Integration reads | `road-routes` · `org-units` · `partner-units` · `users` (P2) |
| File | FileService platform `/integrate-file-upload-web` presign — metadata bind trên `rmms_kcht_project_attachments` |
| Docs | DOMAIN-MAP Contract widen · `docs/context/features/kcht-cong-trinh.md` |

### Architecture

| Layer | Choice |
|-------|--------|
| Feature Kind | **B** list + full-page form 4 tab |
| Domain (logical) | **Contract** widen × **KchtProject** NEW (DOMAIN-MAP — thêm row `kcht-cong-trinh` → Contract) |
| API host folder | `Domains/Contract/` (cite `ContractsController` pattern) |
| Route prefix (SA chốt) | **`api/v1/kcht-ct`** · BFF **`web-bff/api/v1/kcht-ct`** |
| Resource | `/projects` → `api/v1/kcht-ct/projects` |
| BFF | **proxy only** = yes (`Request.QueryString` forward) |
| Response | CommonLib-shaped `ApiResponse<T>` / paged result |
| Auth perm | `kcht.projects.read\|create\|update\|delete` (stub `[RequirePermission]` until NuGet) |
| Persist | flat scalars + **child** tables — **cấm** parent JSON blob |
| Out of pack | PH2 đoạn tuyến/BH · PH3 tiến độ tuần · PH4 giải ngân · PH5 BC/KPI strip · dedicated province master GET |

---

## Route decision (GAP-KCT-API-01 — **closed**)

| | Choice |
|--|--------|
| Prefix rationale | Tách route KCHT khỏi `/contract/contracts` (HĐ bảo trì) · align công văn PH1 · implementation vẫn trong Contract domain folder (tương tự `api/v1/contract-accounts`) |
| Domain prefix | **`api/v1/kcht-ct`** |
| BFF prefix | **`web-bff/api/v1/kcht-ct`** |
| Resource | `/projects` |
| FE BASE | `/kcht-ct/projects` (via BFF) |
| Contract child (reuse) | `web-bff/api/v1/contract/contracts` — cite `ContractListPage` / `endpoint.ts` |
| UI schema | `GET/PUT api/v1/integration/catalogs/kcht-projects/ui-schema` |
| Handoff HĐ read-only | `/hd-ns/:id?from=kcht&projectId={id}` — FE route only |

**Cấm** `api/v1/contract/projects` (nhầm inventory/contracts) · **cấm** `api/v1/rmms/*`.

---

## Implement gates (SA chốt)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| **TZ** | **tz_na** (list) | List filter **không** date P1 | Form `decisionDate` · contract dates · `uploadedAt` store **UTC** · display local FE |
| **XCO** | **required** (`xco_get_only`) | `GET …/kcht-ct/projects/{id}` | `IgnoreQueryFilters` + `allowed_company_ids` · 403 nếu không thuộc claim. **Không** XCO list/POST/PUT/DELETE project. |
| **SHARE** | **tenant_keep** (`share_tenant`) | `KchtProjectEntity` · `ContractEntity` · `ICompanyContext` | junction + children theo tenant parent |

AskQuestion (autoApprove=ON): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve`.

---

## 2. FormMode ↔ API (REQUIRED)

| FormMode | UI route | API | Notes |
|----------|----------|-----|-------|
| **list** | `/kcht-cong-trinh` | `GET /kcht-ct/projects` | query filters §3 · pageSize 50/100/200/500 |
| **create** | `/kcht-cong-trinh/tao-moi` | `POST /kcht-ct/projects` | body Tab 0 + optional `decisions[]` · contracts/attachments qua tab API sau create |
| **edit** | `/kcht-cong-trinh/:id` | `PUT /kcht-ct/projects/{id}` | Tab 0 + replace `decisions[]` · Tab 2/3 qua nested endpoints |
| **view** | `/kcht-cong-trinh/:id` (read) | `GET /kcht-ct/projects/{id}` | include `decisions[]` · `contracts[]` summary · `attachments[]` metadata · FE `<dl>` |
| list delete | row menu | `DELETE /kcht-ct/projects/{id}` | soft `IsActive=false` |
| tab QĐ inline | form tab 1 | nested in GET/PUT project **hoặc** `…/decisions` CRUD | P1: **nested in project DTO** (pattern `ContractPayment`) |
| tab HĐ link | form tab 2 | `GET/POST/DELETE …/projects/{id}/contracts` | junction · create HĐ qua `POST /contract/contracts` rồi link |
| tab File | form tab 3 | `GET/POST/DELETE …/projects/{id}/attachments` | presign upload ngoài band · POST bind metadata |
| open HĐ ↗ | action | `GET /contract/contracts/{contractId}` | read-only handoff |

---

## 3. Form data → entities

| Screen | Fields | Entity |
|--------|--------|--------|
| List filter | search · projectType · roadRouteCode · provinceCode · orgUnitCode · bqlOrgUnitCode · ownerUserId · contractorCode · status · page · pageSize | — |
| List grid | code · name · projectType · roadRouteCode · provinceCode · orgUnitCode · bqlOrgUnitCode · primaryContractor · capitalPlanAmount · status | `KchtProjectEntity` + computed join |
| Tab 0 Chung | Design §3 inventory | `KchtProjectEntity` |
| Tab 1 QĐ | decisions[] inline | `KchtProjectDecisionEntity` (FK ProjectId) |
| Tab 2 HĐ | contracts[] | `KchtProjectContractEntity` → `ContractEntity` widen |
| Tab 3 File | attachments[] | `KchtProjectAttachmentEntity` (FileService ref) |

### Field map — Tab 0 (ui → dto → db)

| uiField | dtoField | dbColumn (`rmms_kcht_projects`) | Notes |
|---------|----------|-----------------------------------|-------|
| code | Code | `code` | IdCode `CT-yyyyMMdd-nnnn` server-gen stub |
| name | Name | `name` | * required |
| projectType | ProjectType | `project_type` | * enum `kcht-project-type` |
| continuityKind | ContinuityKind | `continuity_kind` | enum |
| planYear | PlanYear | `plan_year` | int? |
| roadRouteCode | RoadRouteCode | `road_route_code` | * Integration master code |
| provinceCode | ProvinceCode | `province_code` | * P1 FE static lookup |
| routeSegmentSummary | RouteSegmentSummary | `route_segment_summary` | text PH1 |
| lengthM | LengthM | `length_m` | decimal? |
| structureRefs | StructureRefs | `structure_refs` | text |
| capitalSourceKind | CapitalSourceKind | `capital_source_kind` | enum SA |
| capitalPlanAmount | CapitalPlanAmount | `capital_plan_amount` | decimal(18,2)? |
| orgUnitCode | OrgUnitCode | `org_unit_code` | * Integration |
| ownerUserId | OwnerUserId | `owner_user_id` | Guid? optional P1 |
| bqlOrgUnitCode | BqlOrgUnitCode | `bql_org_unit_code` | Integration `SU-BQLDA-S` |
| status | Status | `status` | * enum |
| note | Note | `note` | text |

### Field map — Tab 1 decisions (child)

| uiField | dtoField | dbColumn (`rmms_kcht_project_decisions`) | Notes |
|---------|----------|------------------------------------------|-------|
| decisions[].decisionKind | DecisionKind | `decision_kind` | * |
| decisions[].decisionNo | DecisionNo | `decision_no` | * |
| decisions[].decisionDate | DecisionDate | `decision_date` | * UTC |
| decisions[].issuingAgency | IssuingAgency | `issuing_agency` | |
| decisions[].totalInvestment | TotalInvestment | `total_investment` | decimal? |
| decisions[].approvedEstimate | ApprovedEstimate | `approved_estimate` | decimal? |
| decisions[].adjustedTotalInvestment | AdjustedTotalInvestment | `adjusted_total_investment` | decimal? last/computed |

### Field map — Tab 2 contracts (junction + widen Contract)

| uiField | dtoField | db / entity | Notes |
|---------|----------|-------------|-------|
| contracts[].id | ContractId | junction `contract_id` | FK `rmms_contracts` |
| contracts[].contractNo | ContractNo | `contract_no` | widen entity |
| contracts[].name | Name | `name` | |
| contracts[].type | Type | `type` | enum `kcht-contract-type` widen |
| contracts[].contractor | Contractor | `contractor` | partner-unit code |
| contracts[].amount | Amount | `amount` | |
| contracts[].signedAt | SignedAt | `signed_at` | existing |
| contracts[].startDate | StartDate | `start_date` | **NEW** widen |
| contracts[].completionDate | CompletionDate | `completion_date` | **NEW** |
| contracts[].durationMonths | DurationMonths | `duration_months` | **NEW** int? |
| contracts[].extensionDate | ExtensionDate | `extension_date` | **NEW** |
| contracts[].completionAfterExtension | CompletionAfterExtension | `completion_after_extension` | **NEW** |
| contracts[].adjustedAmount | AdjustedAmount | `adjusted_amount` | **NEW** decimal? |
| contracts[].status | Status | `status` | reuse contract status enum |
| contracts[].appendices | Appendices | `appendices` | **NEW** text P1 |

Junction `rmms_kcht_project_contracts`: `project_id` · `contract_id` · `link_kind` (`primary-xl` optional) · unique (project_id, contract_id).

### Field map — Tab 3 attachments

| uiField | dtoField | dbColumn (`rmms_kcht_project_attachments`) | Notes |
|---------|----------|--------------------------------------------|-------|
| attachments[].fileName | FileName | `file_name` | from FileService |
| attachments[].docKind | DocKind | `doc_kind` | enum |
| attachments[].uploadedAt | UploadedAt | `uploaded_at` | UTC readonly |
| attachments[].attachmentId | AttachmentId | `attachment_id` | FileService ref Guid/string |
| attachments[].storageKey | StorageKey | `storage_key` | presign metadata |

**Cấm** `varbinary` file bytes trên bảng nghiệp vụ.

---

## 4. API catalog (CRUD — scaffold P1)

Base API: `api/v1/kcht-ct`. Base BFF: `web-bff/api/v1/kcht-ct`. FE `apiClient` relative paths below.

| id | Method | Path | Perm | Notes |
|----|--------|------|------|-------|
| API-01 | GET | `/kcht-ct/projects` | read | query: `search` `projectType` `roadRouteCode` `provinceCode` `orgUnitCode` `bqlOrgUnitCode` `ownerUserId` `contractorCode` `status` `page` `pageSize` |
| API-02 | GET | `/kcht-ct/projects/{id}` | read · **XCO** | include `decisions[]` · `contracts[]` · `attachments[]` |
| API-03 | POST | `/kcht-ct/projects` | create | nested `decisions[]` optional · IdCode server |
| API-04 | PUT | `/kcht-ct/projects/{id}` | update | replace decision lines (pattern payments) |
| API-05 | DELETE | `/kcht-ct/projects/{id}` | delete | soft `IsActive=false` |
| API-06 | GET | `/kcht-ct/projects/{id}/contracts` | read | linked `ContractDto` + KCHT widen fields |
| API-07 | POST | `/kcht-ct/projects/{id}/contracts` | update | body `{ contractId }` link **hoặc** nested create payload → create contract + link |
| API-08 | DELETE | `/kcht-ct/projects/{id}/contracts/{contractId}` | update | unlink junction · **cấm** delete contract row |
| API-09 | GET | `/kcht-ct/projects/{id}/attachments` | read | metadata list |
| API-10 | POST | `/kcht-ct/projects/{id}/attachments` | update | bind after presign `{ attachmentId, fileName, docKind, storageKey }` |
| API-11 | DELETE | `/kcht-ct/projects/{id}/attachments/{attachmentId}` | update | soft-delete ref |

### Contract reuse (live cite)

| id | Method | Path | Notes |
|----|--------|------|-------|
| C-01 | GET | `/contract/contracts` | picker link existing HĐ |
| C-02 | POST | `/contract/contracts` | create child HĐ · widen DTO accepts KCHT date fields |
| C-03 | PUT | `/contract/contracts/{id}` | update child fields |
| C-04 | GET | `/contract/contracts/{id}` | handoff read-only |

FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract/src/services/contract/endpoint.ts`.

BFF: `KchtProjectsBffController` proxy-only — **không** strip query (T-BFF-KCT-01).

---

## 5. Lookup APIs (SA chốt — align controlHint)

| Lookup | catalogKind | controlHint | API P1 | Decision |
|--------|-------------|-------------|--------|----------|
| projectType | `kcht-project-type` | SearchInput | **none** | in-memory enum 5+1 công văn · `useFormOptions()` |
| status | `kcht-project-status` | SearchInput | **none** | in-memory enum 4 |
| continuityKind | `kcht-continuity-kind` | SearchInput | **none** | `moi` · `chuyen-tiep` |
| decisionKind | `kcht-decision-kind` | SearchInput | **none** | 3 loại QĐ |
| contract type | `kcht-contract-type` | SearchInput | **none** | TVTK · TVGS · XL · QLDA · khác — **widen** contract `type` enum FE |
| capitalSourceKind | `kcht-capital-source` | SearchInput | **none** | enum SA §6 |
| docKind | `kcht-attachment-doc-kind` | SearchInput | **none** | QĐ · HĐ · BBNT · khác |
| road-route | `road-route` | SearchInput | `GET /integration/road-routes/search` | **LIVE** cite `RoadRoutesController` |
| org-unit | `org-unit` | SearchInput | `GET /integration/org-units/search` | **LIVE** · seed `REG-IV*` pilot |
| partner-unit | `partner-unit` | SearchInput | `GET /integration/partner-units/search` | **LIVE** nhà thầu |
| **province** | `province` | SearchInput | **LOOKUP_STATIC P1 FE** | reuse `PROVINCES` pattern pavement + partner `provinceCode` labels — **cấm** invent Integration GET P1 |
| **ownerUserId** | `users` | SearchInput | `GET /integration/users?search=` | **optional P1** · nullable field · P2 harden RBAC scope |
| catalog UI schema | `kcht-projects` | Zone F | `GET/PUT /integration/catalogs/kcht-projects/ui-schema` | **IN P1** · seed **GAP** → T-BE-SCHEMA-KCT-01 |

**Cấm** native `<select>`. **Cấm** free-text substitute Integration master khi lookup empty.

### Enum values P1 (SA chốt)

**kcht-project-type** — align Design

| value | Label |
|-------|--------|
| `sua-chua-dinh-ky` | SCĐK |
| `sua-chua-dot-xuat` | SCĐX |
| `khac-phuc-thien-tai` | KPTT |
| `diem-den-atgt` | Điểm đen ATGT |
| `khac` | Khác |

**kcht-project-status**

| value | Label |
|-------|--------|
| `nhap` | Nháp |
| `dang-thuc-hien` | Đang thực hiện |
| `hoan-thanh` | Hoàn thành |
| `dong` | Đóng |

**kcht-capital-source** (GAP — SA chốt công văn «Loại nguồn vốn»)

| value | Label |
|-------|--------|
| `ngan-sach-trung-uong` | Ngân sách trung ương |
| `ngan-sach-dia-phuong` | Ngân sách địa phương |
| `von-oda` | Vốn ODA |
| `von-doanh-thu` | Vốn doanh thu |
| `khac` | Khác |

**kcht-attachment-doc-kind**

| value | Label |
|-------|--------|
| `quyet-dinh` | Quyết định |
| `hop-dong` | Hợp đồng |
| `bbnt` | Biên bản nghiệm thu |
| `khac` | Khác |

---

## 6. Tables & migration (T-BE-KCT-02 — **IN P1**)

| Table | Notes |
|-------|-------|
| `rmms_kcht_projects` | tenant · `IsActive` soft-delete · flat scalars §3 |
| `rmms_kcht_project_decisions` | FK `project_id` · `LineNo` optional · cascade delete |
| `rmms_kcht_project_contracts` | junction `project_id` + `contract_id` unique |
| `rmms_kcht_project_attachments` | FK `project_id` · FileService refs |
| `rmms_contracts` (**widen**) | add `start_date` `completion_date` `duration_months` `extension_date` `completion_after_extension` `adjusted_amount` `appendices` |

Entity files (propose):

- `KchtProjectEntity.cs`
- `KchtProjectDecisionEntity.cs`
- `KchtProjectContractEntity.cs`
- `KchtProjectAttachmentEntity.cs`
- widen `ContractEntity.cs`

Controller (propose): `KchtProjectsController.cs` · route `api/v1/kcht-ct/projects`.

**Step 4b Dev:** `/database-migration` + `/new-endpoint` on Contract domain.

---

## 7. FileService bind (GAP-KCT-FILE-01)

| Step | Surface | Notes |
|------|---------|-------|
| 1 | FE upload action | presign `POST /integrate-file-upload-web` (platform — **không** implement ở Contract API) |
| 2 | FE bind | `POST …/kcht-ct/projects/{id}/attachments` metadata only |
| 3 | Download | presign GET từ FileService client |
| 4 | Delete | soft `IsActive=false` trên attachment row |

**Cấm** store bytes trên `rmms_kcht_project_attachments`.

---

## 8. Live verify (this SA role — read BE, no write)

| Check | Result |
|-------|--------|
| KchtProject API | **GAP** — net-new scaffold |
| `GET /contract/contracts` | **PASS** — reuse child HĐ |
| Integration road-route search | **PASS** — `RoadRoutesController` `GET search` |
| Integration org-unit search | **PASS** — cite inventory `orgLookupConfig` |
| Integration partner-unit search | **PASS** |
| Integration users list | **PASS** — `AppUsersController` `GET ?search=` (owner P1 optional) |
| CatalogUiSchema `kcht-projects` | **FAIL / GAP** — registry **không** có kind → T-BE-SCHEMA-KCT-01 |
| Province master GET | **n/a P1** — FE static (align pavement-section SA) |
| FileService presign | platform READY — bind **GAP** |
| Parent JSON on project | **n/a** — design child tables |

---

## 9. Gaps closed (SA)

| ID | Decision |
|----|----------|
| GAP-KCT-01 | Entity `KchtProject` NEW · 1 CT : n HĐ via junction |
| GAP-KCT-API-01 | Prefix **`api/v1/kcht-ct/projects`** confirmed |
| GAP-PO-PK-01 | packKind `list` Kind B — KPI strip DEFER wave 5 |
| GAP-PO-PROVINCE-01 | **P1 FE static** `province` lookup · store `province_code` · Integration master **DEFER P2** |
| GAP-PO-OWNER-01 | `ownerUserId` **optional P1** · Integration users search |
| GAP-PO-SLIDEOUT-01 | **Cấm** Slideout — full-page 4 tab |
| GAP-KCT-FILE-01 | FileService presign + attachment metadata table |
| GAP-TAB-01 | Tab index 0–3 lock — **cấm** reorder |
| PH2–PH5 | **DEFER** waves 2–5 |

---

## 10. Tasks for TL (emit pack)

| id | layer | SA verdict |
|----|-------|------------|
| T-CTX-01 | docs | pending — add `kcht-cong-trinh` row DOMAIN-MAP → Contract |
| T-BE-KCT-01 | api | **NEW** — `KchtProjectsController` + service + DTO |
| T-BE-KCT-02 | migration | **NEW IN P1** — 4 tables + widen contracts |
| T-BE-KCT-03 | api | **NEW** — widen `ContractEntity` + DTO KCHT date fields |
| T-BE-SCHEMA-KCT-01 | Integration | **NEW IN P1** — registry + seed kind `kcht-projects` |
| T-BFF-KCT-01 | bff | **NEW** — `KchtProjectsBffController` proxy-only |
| T-PERM-KCT-01 | ui+api | pending — `kcht.projects.*` codes |
| T-UI-KCT-* | ui | pending TL — Kind B A–D + full-page 4 tab per Design |
| T-QA-* | qa | queued `/agent-qa*` — E2E `mfeStdUrl` |

---

## 11. Confirm

`solution_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_dd7ab2e1`). Roles sau = **pending** đến lượt. Chain **team-lead**.

Repo: `be_repo_confirm` = `Linm.RMMS.WebService` (cite path) · `ui_repo_confirm` = `Linm.Web.RMMS.Contract` (ứng viên — TL tick).

**This SA role: no FE/BE source write.** Build n/a. Dev must `yarn build` + `dotnet build` when implementing.

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.21.01 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-27T07:10:00.000Z |
| versionGate | rechecked |
| contentHashPriorDesign | sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe |
| contentHashPriorDataAnaly | sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe |
| orchestratorSkillVersion | 2026.08.21.01 |
| orchestratorWorkflowVersion | 2026.08.21.01 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| designSkillVersion | 2026.08.21.01 |
| poSkillVersion | 2026.08.21.01 |
| dataAnalySkillVersion | 2026.08.21.01 |
| taskId | `task_dd7ab2e1` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.21.01 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe taskId=task_dd7ab2e1 -->
