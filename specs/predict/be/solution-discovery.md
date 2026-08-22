# Solution discovery — predict

> Status: **`confirmed`** (`solution_confirm=approve` · Autopilot ON · **autoApprove=ON** · task `task_fe23f841`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · no-parent-json-field · list Config FULL  
> Requires: `ui/design.md` **confirmed** · `design_confirm=approve`  
> **DOMAIN-MAP:** slug `predict` → **AiVision** · **cấm** legacy `/api/v1/ai-predict/*` · **cấm ERP.***

| Field | Value |
|-------|-------|
| feature | `predict` |
| this role | `sa` · `/agent-sa` |
| packKind | `ai` · Kind B+D |
| changeScope | `new_page` |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · task_fe23f841 · reviewUrl ready) |
| domain_map | **AiVision** · kebab `ai-vision` · slug `predict` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/predict` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · `/ai-vision/predict` |
| catalogKind | **`ai-predict`** (ui-schema Config FULL) |
| sa_tz_gate | **tz_required** |
| sa_xco_gate | **xco_get_only** |
| sa_shared_table | **share_tenant** (tenant_keep) |
| solution_confirm | **approve** (`autoApprove=ON` · chain TL next) |
| contentHash (data-analy) | `sha256:predict-ctx-demo-20260817` |
| liveBe | **present** — Controller/Service/DTO/Entity/Migration/BFF đã có · SA **re-audit** vs Design 2026-08-17 / task_fe23f841 |
| skillVersion | `2026.08.15.15` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` · keep_current (khớp STATUS/Design/PO chain · SSOT agents.agent-sa mới hơn — không regen prior) |
| taskId | `task_fe23f841` |
| updatedAt | `2026-08-21T07:20:00.000Z` |

## 0. Path guard

**Only** `Linm.RMMS.WebService` / `Domains/AiVision`.  
**Cấm** `Linm.Web.ERP.WebService` · `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `/api/v1/ai-predict/*`.

`beRepo` / `uiRepo` = **pending board tick** trước Dev (**không auto** · SA chỉ chốt path đề xuất).

## 1. Ownership

| Layer | Repo / module |
|-------|----------------|
| MFE | `Linm.Web.RMMS.AiVision` · `/ai-vision/predict` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | **AiVision** / `ai-vision` |
| API host | `api/src/RMMS.Service.Api/Domains/AiVision/` · `AiVisionPredictController` |
| Models/DTO | `api/domains/ai-vision/LINM.RMMS.AiVision.Models/DTOs/PredictDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/` · `PredictResultEntity` · `PredictAuditEntity` |
| Migrations | `api/shared/RMMS.Service.Migrations/Migrations/20260817180000_Schema_RmmsAiVisionPredict.cs` |
| BFF | `bff/domains/ai-vision/…/AiVisionPredictBffController.cs` · **proxy only** |
| Lookups | init-data `routes` · `recommends` · `drivers` (LOOKUP_STATIC P1) · P2 SearchInput road-route |
| Ui-schema | Integration `CatalogUiSchemaRegistry` + Seed · kind **`ai-predict`** (**GAP — missing**) |

### Architecture

| Layer | Choice |
|-------|--------|
| API prefix | `api/v1/ai-vision/predict` |
| BFF | `web-bff/api/v1/ai-vision/predict/**` · proxy only = **yes** |
| Response | ApiResponse / paged (`PredictPagedResult` + `PredictKpiDto`) |
| Auth perm | `ai-vision.predict.read\|create\|update\|delete\|run` (Attribute stub OK P1 · CommonLib ready → wire) |
| Persist | flat TenantEntity · **child audits table** · **drivers child required** (no parent DriversJson) · chart stub policy below |
| Out of pack | Local train XGBoost · auto WO · `predict.updated` push · real weather/traffic feed |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · **LinCatalogUiSchemaEditorModal** · LeaveConfirmModal · LinCatalogHistoryModal |
| HTTP | apiClient SSOT | re-export only |
| BE | Linm.Platform.CommonLib | ApiResponse envelope |
| Persist | `no-parent-json-field` | drivers = child rows · **cấm** parent `DriversJson` inventory |
| BFF | proxy only | **no** business logic |
| Config | CatalogUiSchema | **cấm** `configHint` / `LinListTableConfigModal` Zone F-only |
| Chrome | `ai-chrome-skip` | **cấm** AI badge / P1-P2 / model id trên list header |

## 2. Form data analysis

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| S-LIST filters | routeId · horizonMonths · topN · scoreMin | LOOKUP_STATIC + number | PredictResult (+ KPI horizon) |
| S-LIST grid | rank·sectionId·name·score·remainingLife·recommend·model·meta·predictedAt·⋮ | tx | PredictResult |
| S-LIST KPI | count · avgScore · majorRehabCount · horizonMonths | derived | list result |
| S-FORM V/E | header features · drivers[] · chart[] · note | tx + child | PredictResult (+ drivers) |
| S-MOD-CONFIG | cột List/width/filter/sort | ui-schema | catalogKind=`ai-predict` |
| S-MOD-LEAVE | dirty leave | — | note dirty |
| S-MOD-HIST | history | audit child | PredictAudit · `LinCatalogHistoryModal` |

### controlHint → API (chốt)

| controlHint | Field | API consumer |
|-------------|-------|--------------|
| Dropdown | routeId | `GET …/priority-list?routeId=` · values from init-data `routes` (ALL/QL1A/QL22/QL14) |
| Text (number) | horizonMonths | `GET …/priority-list?horizonMonths=` · KPI horizon · default 12 · 1–60 |
| Text (number) | topN | `GET …/priority-list?topN=` · default 8 · 1–50 |
| Text (number) | scoreMin | `GET …/priority-list?scoreMin=` · 0–100 |
| Dropdown | recommend | init-data `recommends` · major_rehab / routine / watch |
| list | drivers[] | GET section · POST re-predict · **persist child table** (not parent JSON) |
| chart | chart[] | GET section · PCI trend stub bars · P1 opaque snapshot OK **hoặc** child points |
| Text multiline | note | `PUT …/sections/{id}/note` · dirty leave-confirm |
| Date | predictedAt | ISO UTC · FE local display · **TZ required** |

## 3. FormType pack

`packKind=ai` → **list pack + ai pack** (batch/re-predict actions).

### FormMode ↔ API

| Surface | FormMode | Endpoint |
|---------|----------|----------|
| List | — | API-01 GET `/priority-list` |
| init-data | — | API-02 GET `/init-data` |
| View / Edit load | view / edit | API-03 GET `/sections/{sectionId}` |
| Re-predict 1 | act | API-04 POST `/sections/{sectionId}` |
| Batch predict | act | API-05 POST `/batch` |
| History | — | API-06 GET `/sections/{sectionId}/history` |
| Lưu ghi chú | edit | API-07 PUT `/sections/{sectionId}/note` |
| Create seed | create | API-08 POST `/sections` |
| Soft-delete | — | API-09 DELETE `/sections/{sectionId}` |

**Task pack ids (handoff TL):** T-CTX · T-PERM · T-BE-CRUD · T-MIG · T-BFF · T-UI-LIST · T-UI-FORM · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-UI-LEAVE-01 · T-UI-CONFIG-01 (`ai-predict`) · T-QA-*

**devSlash:** `/agent-dev` · **cấm** `/agent-dev-ai-detect`.

## 4. API catalog

Base: `api/v1/ai-vision/predict` · BFF `web-bff/api/v1/ai-vision/predict`

### API-01 GET `/priority-list`

| | |
|--|--|
| Purpose | Kind B list paged + Zone B filters + KPI strip |
| Permission | `ai-vision.predict.read` |
| Query | `routeId` · `horizonMonths` · `topN` · `scoreMin` · `page` · `pageSize`∈{50,100,200,500} · `sortDesc` |
| Response | `ApiResponse<PredictPagedResult>` (`items` · pager · `kpi`) |
| **gates.tz** | **yes** — `predictedAt` / CreatedAt ISO UTC on items |
| **gates.shared** | tenant_keep |
| Live | **present** — filters route/scoreMin/topN/sort work · horizon → KPI (not row filter) OK vs Design |

### API-02 GET `/init-data`

| | |
|--|--|
| Purpose | LOOKUP_STATIC Dropdowns Zone B + form |
| Response | `{ routes[], recommends[], drivers[], defaultHorizonMonths, defaultTopN }` |
| Live | **present** |

### API-03 GET `/sections/{sectionId}`

| | |
|--|--|
| Purpose | Form View/Edit load · include drivers[] · chart[] · note |
| Permission | read |
| **gates.xco** | **yes** — IgnoreQueryFilters + AllowedCompanyIds (live present) |
| **gates.tz** | yes — PredictedAt/CreatedAt/UpdatedAt ISO UTC |

### API-04 POST `/sections/{sectionId}`

| | |
|--|--|
| Purpose | Chạy lại dự báo 1 đoạn · append audit |
| Permission | `ai-vision.predict.run` |
| Behavior | Recompute score/life/recommend · update PredictedAt · audit row · P1 stub LLM (no train) |
| **gates.tz** | yes |

### API-05 POST `/batch`

| | |
|--|--|
| Purpose | Chạy dự báo hàng loạt (toolbar) |
| Permission | run |
| Request | `{ routeId?, topN? }` |
| Response | `PredictPagedResult` (refreshed list slice) |

### API-06 GET `/sections/{sectionId}/history`

| | |
|--|--|
| Purpose | Audit re-runs · feed `LinCatalogHistoryModal` |
| Permission | read |
| Response | `PredictAuditDto[]` (`at` · `score` · `model` · `raw`) |
| **gates.tz** | yes — `at` UTC |

### API-07 PUT `/sections/{sectionId}/note`

| | |
|--|--|
| Purpose | Lưu ghi chú khuyến nghị (footer only) |
| Permission | update |
| Request | `{ note: string }` |
| Errors | 404 / 422 |

### API-08 POST `/sections`

| | |
|--|--|
| Purpose | Create seed đoạn (P1 admin/seed) |
| Permission | create |
| Request | `CreatePredictSectionRequest` |
| Behavior | SectionId `SEC-*` · initial predict stub |

### API-09 DELETE `/sections/{sectionId}`

| | |
|--|--|
| Purpose | Soft-delete (`IsActive=false`) |
| Permission | delete |

### Lookups (reuse)

| API | Path | Consumer |
|-----|------|----------|
| L-01 | init-data `routes` / `recommends` / `drivers` | Dropdown Zone B + form |
| L-02 | P2 SearchInput road-route master | **DEFER P2** — P1 enum init-data |

## 5. BFF vs API · tenant

- BFF: **proxy only** — forward `predict/**` (live `AiVisionPredictBffController`)
- Forward headers: `Authorization` · `X-Company-Id`
- Tenant: `CompanyCode` HasQueryFilter · UK `(CompanyCode, SectionId)`

## 6. Data model / EF (live SSOT + required delta)

### Entity `PredictResultEntity` → `rmms_ai_vision_predict_results`

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | string | TenantEntity |
| SectionId | varchar(64) | `SEC-*` UK / tenant |
| RouteId | varchar(64) | QL1A/QL22/QL14 |
| Name | varchar(256) | |
| Score | int | 0–100 |
| RemainingLifeMonths | int | |
| Recommend | varchar(32) | major_rehab / routine / watch |
| Model | varchar(128)? | `gpt-4o-mini` · cột/form only |
| Pci / Traffic / AgeYears | int | features |
| Material / WeatherAgg / RepairHistory | string? | features |
| PredictedAt | timestamptz | |
| Note | varchar(4000)? | dirty leave |
| IsActive | bool | soft-delete |
| CreatedAt / UpdatedAt | timestamptz | |

**Cấm** cột parent **`DriversJson`** (inventory nested) — **GAP-SA-PRD-JSON-01**.  
**ChartJson:** P1 cho phép opaque PCI trend stub (snapshot output) · TL có thể giữ text JSON chart **hoặc** child points — ghi DoD.

### Entity `PredictAuditEntity` → `rmms_ai_vision_predict_audits` (live)

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| PredictResultId | uuid FK | cascade |
| CompanyCode | string | tenant |
| At | timestamptz | |
| Score | int | |
| Model | varchar(128)? | |
| Raw | varchar(2000)? | stub payload |

### Entity **required** `PredictDriverEntity` → `rmms_ai_vision_predict_drivers` (**GAP**)

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| PredictResultId | uuid FK | |
| CompanyCode | string | tenant |
| SortOrder | int | |
| Key | varchar(64) | age/traffic/pci/… |
| Weight | int | |

API shape: header + `drivers[]` DTO mapped from child rows — **cấm** FE `JSON.stringify(drivers)` → parent string.

### DEFER P2

| Concern | Decision |
|---------|----------|
| Local train / ONNX | **OUT P1** · `GAP-F-PRD-01` |
| Real weather/traffic | Stub / import · `GAP-F-PRD-02` |
| Auto WO | Stub toast · `GAP-F-PRD-04` |
| `predict.updated` event | **DEFER P2** |
| road-route SearchInput | P2 · P1 init-data enum |

Migration live: **`Schema_RmmsAiVisionPredict`** (results + audits) — **already applied**.  
Delta: **`Schema_RmmsAiVisionPredictDrivers`** (drop DriversJson after backfill) — T-MIG.

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON inventory | **DriversJson** = **FAIL** live → must migrate child |
| ChartJson | P1 opaque snapshot OK (PCI trend stub) · optional child later |
| Child tables | `PredictAuditEntity` **present** · `PredictDriverEntity` **required** |
| API shape | header + `drivers[]` · `chart[]` DTO |

## 5b. Implement gates (confirm) — REQUIRED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_required** | API-01/03/04/06/07 · `predictedAt` · audit `at` · CreatedAt/UpdatedAt | FE Date → UTC · local display |
| XCO | **xco_get_only** | API-03 GET `/sections/{sectionId}` | IgnoreQueryFilters + AllowedCompanyIds — live OK |
| SHARE | **share_tenant** | PredictResult + Audit + Drivers | tenant-only |

Autopilot gate stamp (no AskQuestion tool · matrix Kind B tenant + datetime fields + GET-by-id):  
`sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-08-21T07:20:00.000Z`

## 6. Live audit → GAP (TL/Dev DoD)

| ID | Gap | Severity | Fix owner |
|----|-----|----------|-----------|
| **GAP-SA-PRD-JSON-01** | Parent `DriversJson` vi phạm `no-parent-json-field` | P0 | T-MIG + T-BE-CRUD |
| **GAP-SA-PRD-01** | `CatalogUiSchemaRegistry` + Seed **không** có `ai-predict` | P0 Config FULL | T-BE + T-UI-CONFIG-01 |
| **GAP-SA-PRD-02** | MFE `PredictListPage` còn **`configHint`** + leftover `const columns` / `LinCatalogDataColumn` | P0 | T-UI-LIST · **cấm** GAP-DEV-CONFIG-PLACEHOLDER-01 / GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 |
| **GAP-SA-PRD-03** | History list dùng custom `Modal` markup — phải `LinCatalogHistoryModal` (đã import hook một phần) | P1 | T-UI-ACT / T-UI-UX |
| **GAP-SA-PRD-04** | `[RequirePermission]` còn TODO comment | P1 stub OK | T-PERM |
| GAP-F-PRD-01 | Local train | DEFER P2 | — |
| GAP-F-PRD-02 | Weather/traffic real | Stub P1 | — |
| GAP-F-PRD-04 | Auto WO | DEFER P2 | — |
| GAP-F-PRD-EVT | `predict.updated` | DEFER P2 | — |

## 7. DOMAIN-MAP

Slug `predict` → **AiVision** / `ai-vision` (**already present**).  
Document reconcile: context `/ai-predict` → implement `/ai-vision/predict`.

## 8. Risks / DEFER

| ID | Decision |
|----|----------|
| GAP-F-PRD-01 | CLOSED for P1 — no local train |
| GAP-F-PRD-03 | CLOSED — path `ai-vision/predict` |
| GAP-F-PRD-04 | CLOSED for P1 — stub toast only |
| GAP-F-PRD-AI-BADGE | CLOSED — no AI badge header |
| GAP-F-PRD-EVT | DEFER `predict.updated` |
| JWT Authorize | stub Attribute OK · wire when CommonLib ready |

## Confirm

`solution_confirm` = **approve** · `autoApprove=ON` · STATUS SA **done** · TL **pending** (enqueue `/agent-team-lead` sau board / chain).

Repo confirm (`beRepo` · `uiRepo`) vẫn **pending** board tick trước Dev (**không auto**).

## Handoff → Team lead → Dev

| Field | Value |
|-------|-------|
| feature | `predict` |
| next | `/agent-team-lead` → task pack · Dev **sau** board tick `beRepo && uiRepo` |
| API ids | API-01…09 · L-01 |
| Gates | TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`share_tenant` |
| Migrations | `Schema_RmmsAiVisionPredict` (exist) + **Drivers child** + **Seed ui-schema `ai-predict`** |
| BFF | proxy `predict` (exist) |
| MFE | `route_confirm=route_a` `/ai-vision/predict` · Config FULL · LeaveConfirmModal (live form OK) · **no AI badge** |
| Must-fix before QA | GAP-SA-PRD-JSON-01 · GAP-SA-PRD-01 · GAP-SA-PRD-02 |
| Cấm | ERP.* · parent DriversJson · nested CatalogListShell · `/ai-predict` · `configHint` · AI header badge |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.15 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-21T07:20:00.000Z |
| versionGate | ok |
| contentHash | sha256:predict-ctx-demo-20260817 |
| taskId | task_fe23f841 |

---
<!-- Version meta: skillVersion=2026.08.15.15 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
