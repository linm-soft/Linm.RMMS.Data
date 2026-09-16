# Solution discovery — estimate

> Status: **`confirmed`** (`solution_confirm=approve` · Autopilot ON · **autoApprove=ON** · TL `task_a88111e4`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · no-parent-json-field · list Config FULL  
> Requires: `ui/design.md` **confirmed** · `design_confirm=approve`  
> **DOMAIN-MAP:** slug `estimate` → **AiVision** · **cấm** legacy `/api/v1/ai-estimate/*` · **cấm ERP.***

| Field | Value |
|-------|-------|
| feature | `estimate` |
| this role | `sa` · `/agent-sa` |
| packKind | `ai` · Kind B+D |
| changeScope | `new_page` |
| status | `confirmed` |
| design_confirm | **approve** (board · task_ecb4792c) |
| domain_map | **AiVision** · kebab `ai-vision` · slug `estimate` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/estimates` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · `/ai-vision/estimate` |
| catalogKind | **`ai-estimates`** (ui-schema Config FULL) |
| sa_tz_gate | **tz_required** |
| sa_xco_gate | **xco_get_only** |
| sa_shared_table | **share_tenant** (tenant_keep) |
| solution_confirm | **approve** (`autoApprove=ON` · chain TL `task_a88111e4`) |
| contentHash (data-analy) | `sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983` |
| liveBe | **present** — Controller/Service/DTO/Entity/Migration/BFF đã có · SA **re-audit** vs Design 2026-08-17 |
| skillVersion | `2026.08.15.15` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` · keep_current (khớp STATUS/Design/PO chain) |
| taskId | `task_ecb4792c` |
| updatedAt | `2026-08-17T14:50:00.000Z` |

## 0. Path guard

**Only** `Linm.RMMS.WebService` / `Domains/AiVision`.  
**Cấm** `Linm.Web.ERP.WebService` · `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `/api/v1/ai-estimate/*`.

`beRepo` / `uiRepo` = **pending board tick** trước Dev (**không auto** · SA chỉ chốt path đề xuất).

## 1. Ownership

| Layer | Repo / module |
|-------|----------------|
| MFE | `Linm.Web.RMMS.AiVision` · `/ai-vision/estimate` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | **AiVision** / `ai-vision` |
| API host | `api/src/RMMS.Service.Api/Domains/AiVision/` · `AiVisionEstimatesController` |
| Models/DTO | `api/domains/ai-vision/LINM.RMMS.AiVision.Models/DTOs/EstimateDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/` · `EstimateAuditEntity` · `EstimateLineEntity` |
| Migrations | `api/shared/RMMS.Service.Migrations/Migrations/20260817100000_Schema_RmmsAiVisionEstimates.cs` |
| BFF | `bff/domains/ai-vision/…/AiVisionEstimatesBffController.cs` · **proxy only** |
| Lookups | init-data enums + `HostIncidents` stub P1 · Incident search reuse P1+ |
| Ui-schema | Integration `CatalogUiSchemaRegistry` + Seed · kind **`ai-estimates`** (**GAP — missing**) |

### Architecture

| Layer | Choice |
|-------|--------|
| API prefix | `api/v1/ai-vision/estimates` |
| BFF | `web-bff/api/v1/ai-vision/estimates/**` · proxy only = **yes** |
| Response | ApiResponse / paged |
| Auth perm | `ai-vision.estimates.read\|create\|update\|delete\|confirm` (Attribute stub OK P1 · CommonLib ready → wire) |
| Persist | flat TenantEntity · **child lines table** · **no** parent `*LinesJson` |
| Status enum (SSOT live) | **`Draft`** · **`Confirmed`** (init-data) — FE **không** hardcode `draft`/`confirmed` lowercase |
| Date query (SSOT live) | **`from`** · **`to`** (UTC normalize) — Design labels «Từ/Đến» map vào keys này |
| Out of pack | UnitPriceCatalog UI P2 · auto WO · `estimate.created` · real GPT |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · **LinCatalogUiSchemaEditorModal** |
| HTTP | apiClient SSOT | re-export only |
| BE | Linm.Platform.CommonLib | ApiResponse envelope |
| Persist | `no-parent-json-field` | lines = `EstimateLineEntity` rows |
| BFF | proxy only | **no** business logic |
| Config | CatalogUiSchema | **cấm** `configHint` / `LinListTableConfigModal` Zone F-only |

## 2. Form data analysis

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| S-LIST filters | search · status · sourceType · from · to | LOOKUP_STATIC + Date | EstimateAudit |
| S-LIST grid | STT·□·Mã·Sự cố·Nguồn·Tuyến·Loại·Tổng·TT·Model·Ngày·⋮ | tx | EstimateAudit |
| S-FORM C/E/V | header + lines grid | tx + LOOKUP_STATIC | EstimateAudit + EstimateLine |
| S-MOD-CONFIRM | ack note? | tx | EstimateAudit.Status → Confirmed |
| S-MOD-CONFIG | cột List/width/filter/sort | ui-schema | catalogKind=`ai-estimates` |
| S-MOD-LEAVE | dirty leave | — | — |
| S-MOD-HIST | history stub | — | LinCatalogHistoryModal |

### controlHint → API (chốt)

| controlHint | Field | API consumer |
|-------------|-------|--------------|
| SearchInput (text) | search | `GET …/estimates?search=` — EST · incident · tuyến · model · detectionIds · defectType |
| Dropdown | status | `GET …/estimates?status=` · values **Draft\|Confirmed** from init-data |
| Dropdown | sourceType | `GET …/estimates?sourceType=` — **GAP-SA-EST-01** (live list thiếu filter) |
| Date | from / to | list filter · **TZ required** · start/end UTC |
| SearchInput incident | incidentId | init-data `hostIncidents` P1 · Incident search reuse |
| Dropdown | defectType · severity | `GET …/estimates/init-data` |
| LabelMoney | unitPrice · amount · total | PUT/draft body · computed amount = qty×unitPrice |
| pattern_inline_grid | lines | child table via update/draft · **no** parent JSON |

## 3. FormType pack

`packKind=ai` → **list pack + ai pack** (estimate generate actions).

### FormMode ↔ API

| Surface | FormMode | Endpoint |
|---------|----------|----------|
| List | — | API-01 GET `/estimates` |
| init-data | — | API-02 GET `/estimates/init-data` |
| View / Edit load | view / edit | API-03 GET `/{id}` |
| from-incident | create | API-04 POST `/from-incident/{incidentId}` |
| from-defects | create | API-05 POST `/from-defects` |
| Edit save | edit | API-06 PUT `/{id}` |
| Lưu nháp | edit | API-07 POST `/{id}/draft` |
| Confirm | HITL | API-08 POST `/{id}/confirm` |
| Soft-delete | — | API-09 DELETE `/{id}` |

**Task pack ids (handoff TL):** T-CTX · T-PERM · T-BE-CRUD · T-MIG · T-BFF · T-UI-LIST · T-UI-FORM · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-UI-LEAVE-01 · T-UI-CONFIG-01 (`ai-estimates`) · T-QA-*

**devSlash:** `/agent-dev` · **cấm** `/agent-dev-ai-detect`.

## 4. API catalog

Base: `api/v1/ai-vision/estimates` · BFF `web-bff/api/v1/ai-vision/estimates`

### API-01 GET `/estimates`

| | |
|--|--|
| Purpose | Kind B list paged + Zone B filters · search **must work** |
| Permission | `ai-vision.estimates.read` |
| Query | `search` · `status` · **`sourceType`** · `from` · `to` · `page` · `pageSize`∈{50,100,200,500} |
| Response | `ApiResponse<EstimatePagedResult>` |
| **gates.tz** | **yes** — `from` start UTC · `to` end-of-day UTC |
| **gates.shared** | tenant_keep |
| Live gap | **GAP-SA-EST-01** — controller/service thiếu `sourceType` query |

### API-02 GET `/estimates/init-data`

| | |
|--|--|
| Purpose | LOOKUP_STATIC Dropdowns + host incident stubs P1 |
| Response | `{ statuses[], sourceTypes[], defectTypes[], severities[], unitCatalog[], hostIncidents[] }` |
| Status values | **Draft** / **Confirmed** |

### API-03 GET `/estimates/{id}`

| | |
|--|--|
| Purpose | Form View/Edit load · include `lines[]` |
| Permission | read |
| **gates.xco** | **yes** — IgnoreQueryFilters + AllowedCompanyIds (live present) |
| **gates.tz** | yes — CreatedAt/UpdatedAt/ConfirmedAt ISO UTC |

### API-04 POST `/estimates/from-incident/{incidentId}`

| | |
|--|--|
| Purpose | AI ước lượng từ sự cố (P1 stub generate lines) |
| Permission | create |
| Behavior | Code `EST-YYYYMMDD-NNNN` · Status=`Draft` · seed lines from defect area · persist header+lines |
| **gates.tz** | yes |

### API-05 POST `/estimates/from-defects`

| | |
|--|--|
| Purpose | AI ước lượng từ detection IDs |
| Request | `{ detectionIds: string[]\|string · incidentId? · overrides? }` |
| Behavior | same as API-04 · sourceType=`from-defects` |

### API-06 PUT `/estimates/{id}`

| | |
|--|--|
| Purpose | Update header + **replace/upsert lines** · Draft only |
| Permission | update |
| Request | UpdateEstimateRequest (scalars + `lines[]`) |
| Errors | 422 nếu Confirmed |

### API-07 POST `/estimates/{id}/draft`

| | |
|--|--|
| Purpose | Lưu nháp (explicit draft save) |
| Permission | update |
| Behavior | Status stays/sets `Draft` · persist lines |

### API-08 POST `/estimates/{id}/confirm`

| | |
|--|--|
| Purpose | Xác nhận số liệu thủ công · **không** tạo WO |
| Permission | confirm |
| Behavior | Status=`Confirmed` · ConfirmedAt UTC · **no** Maintenance call P1 |
| **gates.xco** | get path before mutate |

### API-09 DELETE `/estimates/{id}`

| | |
|--|--|
| Purpose | Soft-delete (`IsActive=false`) · Draft only P1 |
| Permission | delete |

### Lookups (reuse)

| API | Path | Consumer |
|-----|------|----------|
| L-01 | init-data `hostIncidents` (P1) · Incident search reuse | SearchInput `incidentId` |

## 5. BFF vs API · tenant

- BFF: **proxy only** — forward `estimates/**` (live `AiVisionEstimatesBffController`)
- Forward headers: `Authorization` · `X-Company-Id`
- Tenant: `CompanyCode` HasQueryFilter

## 6. Data model / EF (live SSOT)

### Entity `EstimateAuditEntity` → `rmms_ai_vision_estimates`

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | string | TenantEntity |
| Code | varchar(64) | `EST-*` UK / tenant |
| IncidentId | varchar(64)? | |
| SourceType | varchar(32) | from-incident / from-defects |
| DetectionIds | varchar(1024)? | CSV scalar OK |
| RouteSection | varchar(256)? | |
| DefectType | varchar(64)? | |
| DefectArea | decimal(18,4) | |
| Severity | varchar(32)? | |
| ModelVersion | varchar(128)? | UI label «Model AI» |
| LaborHours | decimal(18,4) | |
| Equipment | varchar(512)? | |
| DurationDays | decimal(18,4) | |
| TotalAmount | decimal(18,2) | |
| Status | varchar(32) | **Draft** / **Confirmed** |
| IsActive | bool | soft-delete |
| CreatedAt / UpdatedAt / ConfirmedAt | timestamptz | |

**Cấm** cột `LinesJson` / `*LinesJson` trên parent.

### Entity `EstimateLineEntity` → `rmms_ai_vision_estimate_lines`

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| EstimateId | uuid FK | → EstimateAudit |
| CompanyCode | string | tenant |
| SortOrder | int | STT (Design LineNo) |
| ItemCode | varchar(64) | BTN/BOC/… |
| ItemName | varchar(256) | |
| Qty | decimal(18,4) | |
| Unit | varchar(32) | |
| UnitPrice | decimal(18,2) | |
| Amount | decimal(18,2) | qty × unitPrice |
| Note | varchar(2000)? | |

### DEFER P2

| Entity | Decision |
|--------|----------|
| `UnitPriceCatalog` | **DEFER P2** — P1 `unitCatalog` stub in init-data + manual unitPrice |

Migration: **`Schema_RmmsAiVisionEstimates`** (audits + lines) — **already applied in repo**.

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON string inventory | **none** for child lines |
| Child tables | `EstimateLineEntity` **required** |
| API shape | header + `lines[]` DTO (mapped from child rows) |

## 5b. Implement gates (confirm) — REQUIRED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_required** | API-01 from/to · CreatedAt/UpdatedAt/ConfirmedAt · mutations | FE Date → UTC |
| XCO | **xco_get_only** | API-03 GET/{id} (+ confirm/draft load) | IgnoreQueryFilters + AllowedCompanyIds — live OK |
| SHARE | **share_tenant** | EstimateAudit + EstimateLine | tenant-only |

Autopilot gate stamp (no AskQuestion tool · matrix Kind B tenant + date filters):  
`sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-08-17T14:40:00.000Z`

## 6. Live audit → GAP (TL/Dev DoD)

| ID | Gap | Severity | Fix owner |
|----|-----|----------|-----------|
| **GAP-SA-EST-01** | List API thiếu query `sourceType` (Design/PO Zone B) | P0 | T-BE-CRUD |
| **GAP-SA-EST-02** | `CatalogUiSchemaRegistry` + Seed **không** có `ai-estimates` | P0 Config FULL | T-BE + T-UI-CONFIG-01 |
| **GAP-SA-EST-03** | MFE `EstimateListPage` còn **`configHint`** placeholder | P0 | T-UI-LIST · **cấm** GAP-DEV-CONFIG-PLACEHOLDER-01 |
| **GAP-SA-EST-04** | MFE list client thiếu `sourceType` param | P0 | T-UI-LIST + endpoint.ts |
| GAP-F-EST-01 | Auto WO | DEFER P2 | — |
| GAP-F-EST-04 | UnitPriceCatalog UI | DEFER P2 | — |
| GAP-F-EST-EVT | `estimate.created` | DEFER P2 | — |
| JWT Authorize | `[RequirePermission]` when CommonLib ready | P1 stub OK | T-PERM |

## 7. DOMAIN-MAP

Slug `estimate` → **AiVision** / `ai-vision` (**already present**).  
Document reconcile: context `/ai-estimate` → implement `/ai-vision/estimates`.

## 8. Risks / DEFER

| ID | Decision |
|----|----------|
| GAP-F-EST-01 | CLOSED for P1 — no auto WO |
| GAP-F-EST-02 | CLOSED — confirm required |
| GAP-F-EST-03 | CLOSED — path `ai-vision/estimates` |
| GAP-F-EST-04 | DEFER UnitPriceCatalog P2 |
| GAP-F-EST-EVT | DEFER `estimate.created` |
| JWT Authorize | stub Attribute OK · wire when CommonLib ready |

## Confirm

`solution_confirm` = **approve** · `autoApprove=ON` · STATUS SA **done** · TL **completed** (`task_a88111e4`).

Repo confirm (`beRepo` · `uiRepo`) vẫn **pending** board tick trước Dev (**không auto**).

## Handoff → Team lead → Dev

| Field | Value |
|-------|-------|
| feature | `estimate` |
| next | `/agent-dev` **sau** board tick `beRepo && uiRepo` (TL pack sẵn `specs/estimate/task/estimate.md`) |
| API ids | API-01…09 · L-01 |
| Gates | TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`share_tenant` |
| Migrations | `Schema_RmmsAiVisionEstimates` (exist) + **Seed ui-schema `ai-estimates`** |
| BFF | proxy `estimates` (exist) |
| MFE | `route_confirm=route_a` `/ai-vision/estimate` · Config FULL · LeaveConfirmModal · **no AI badge** |
| Must-fix before QA | GAP-SA-EST-01…04 |
| Cấm | ERP.* · `*LinesJson` · nested CatalogListShell · `/ai-estimate` · `configHint` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.15 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-17T14:50:00.000Z |
| versionGate | ok |
| contentHash | sha256:f49800a01d06c3df4ab4058c5b2b6ecde131fe8362a040481a88daa4897e8983 |
| taskId | task_ecb4792c |

---
<!-- Version meta: skillVersion=2026.08.15.15 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
