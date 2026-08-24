# Solution discovery — its-anpr-overload

> Status: **confirmed** (`solution_confirm=approve` · Autopilot · autoApprove=ON · task_864dfd9e)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · no-parent-json-field  
> **SA detail:** `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · `form-type-task-pack.md`  
> Requires: `ui/design.md` **confirmed** · design_confirm=`approve`  
> **≠ `its-traffic-detect`:** ANPR+WIM+registry · không taxonomy biển báo/cọc. **≠ `ai-asset-detect`:** không Confirm→RoadAsset. **≠ `ai-vision`:** không class ổ gà.  
> **Cấm ERP.***

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| packKind | `ai` (Kind B list + Kind D HITL · S-LIST / S-DETECT · S-MAP DEFER) |
| featureClass | `ai` |
| status | `confirmed` |
| design_confirm | **approve** (autoApprove=ON · task_864dfd9e) |
| domain_map | **AiVision** · kebab `ai-vision` · slug `its-anpr-overload` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/anpr/events` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · `/its-anpr-overload` |
| sa_tz_gate | **tz_required** |
| sa_xco_gate | **xco_get_only** |
| sa_shared_table | **share_tenant** (tenant_keep) |
| solution_confirm | **approve** |
| contentHash (data-analy) | `sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865` |
| skillVersion | `2026.08.15.15` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` |
| updatedAt | `2026-08-24T15:50:00.000Z` |
| taskId | `task_864dfd9e` |

## 0. Path guard

**Only** `Linm.RMMS.WebService` / `Domains/AiVision` (+ Integration CatalogUiSchema).  
**Cấm** `Linm.Web.ERP.WebService` · `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · bare `/api/v1/its/anpr/*` without AiVision prefix.

Spec P2 `/its/anpr/*` → **normalize** `api/v1/ai-vision/anpr/events`.

`beRepo` / `uiRepo` = board tick (**pending** · **không auto**) — SA chốt path · Dev chỉ sau board tick.

Live audit (2026-08-24): entity · migration · API controller · service · BFF · MFE page/service **đã có**. SA chốt delta Dev phải đóng (GAP dưới).

## 1. Ownership

| Layer | Repo / module |
|-------|----------------|
| MFE | `Linm.Web.RMMS.AiVision` · route `/its-anpr-overload` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | **AiVision** / `ai-vision` — DOMAIN-MAP slug `its-anpr-overload` |
| API host | `api/src/RMMS.Service.Api/Domains/AiVision/` |
| Controller | `AiVisionAnprEventsController` |
| Service | `AiVisionAnprEventService` / `IAiVisionAnprEventService` |
| Models/DTO | `api/domains/ai-vision/LINM.RMMS.AiVision.Models/DTOs/AnprEventDtos.cs` |
| Persistence | `AiVisionAnprEventEntity` → `rmms_ai_vision_anpr_events` |
| Migrations | `20260817120000_Schema_RmmsAiVisionAnprEvents` **EXISTS** |
| BFF | `bff/domains/ai-vision/.../AiVisionAnprEventsBffController` · **proxy only** |
| Confirm → Incident | P1 stub `VI-ANPR-*` on entity · full Incident domain **DEFER P2** |
| Registry | mock in-service P1 · real Cục Đăng kiểm adapter **DEFER P2** |
| Catalog UI schema | **MISSING** kind `its-anpr-overload` — Dev **MUST** add Registry + Seed (**GAP-SA-ANPR-UI-SCHEMA-01**) |

### Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | AiVision / `ai-vision` · **không** domain mới |
| API prefix | `api/v1/ai-vision/anpr/events` |
| BFF | `web-bff/api/v1/ai-vision/anpr/events/**` · proxy only = **yes** |
| MFE | `Linm.Web.RMMS.AiVision` · **không** Master catalogs |
| Response | ApiResponse / paged |
| Auth perm | `ai-vision.anpr-events.read\|create\|update\|delete\|confirm\|dismiss` (FE `permissions.ts` · BE TODO Attribute) |
| Persist | flat `TenantEntity` scalars · `RegistryJson` / `ViolationsJson` = scalar text snapshots · **no** parent `*LinesJson` |
| Sibling | `rmms_ai_vision_its_traffic_objects` · `rmms_ai_vision_asset_candidates` — **tách** bảng ANPR |
| Out of pack | S-MAP pin · live camera/WIM ingest · real registry adapter · full Incident create · tenant speed/overload thresholds config P2 |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · **LinCatalogUiSchemaEditorModal** FULL |
| HTTP | apiClient SSOT | `/ai-vision/anpr/events` |
| BE | Linm.Platform.CommonLib | ApiResponse envelope |
| Persist | `no-parent-json-field` | RegistryJson/ViolationsJson = scalar JSON text · **không** child collection blob |
| Catalog | init-data cameras/statuses | Dropdown enum · **cấm** free-text camera khi seed sẵn |
| AI chrome | `ai-chrome-skip` | **Cấm** badge/tag `AI` / P1/P2 trên header / `beforeToolbar` |

## 2. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity | data-import / mock |
|-------------------|-------------|-------------|--------|---------------------|
| S-LIST filters | search · cameraId · status | demo + init-data | AnprEvent | demo `its-anpr-overload-data.js` |
| S-LIST grid | Design §5.2 columns | tx | AnprEvent | seed ANPR-2401…2405 |
| S-DETECT panel | camera · registry · violations | tx + lookup | AnprEvent | row select + POST lookup |
| S-FORM Create/Edit/Copy | plate* · cameraId* · speedKmh* · wimKg · confidence · capturedAt* · note | tx + init-data | AnprEvent | — |
| S-FORM View | all + code · status · owner…registry readonly · violationCodes · incidentId | tx readOnly | AnprEvent | — |
| HITL Confirm/Dismiss | note? | tx | AnprEvent | footer slideout · Pending only |
| KPI strip | Total · Pending · Critical · Confirmed | computed list | AnprEvent | optional |
| S-MAP | — | — | — | **DEFER P2** |

Filter shell: Zone B **`Dropdown` camera/status** + **`SearchInput` biển số cụm phải** — **cấm** nút Tìm trùng toolbar.

### controlHint → API (chốt)

| controlHint | Field | API consumer |
|-------------|-------|--------------|
| SearchInput (text) | search | `GET …/anpr/events?search=` (alias `q` FE OK · BE param **`search`**) |
| Dropdown enum | cameraId | `GET …/anpr/events/init-data` · Cameras[] + list filter `cameraId=` |
| Dropdown enum | status | init-data Statuses[] + list filter `status=` |
| Text (number) | speedKmh · wimKg · confidence | POST/PUT body scalars |
| Date | capturedAt | form · **TZ required** |
| Dropdown | status (form/HITL) | Pending/Confirmed/Dismissed · mutate via Confirm/Dismiss |
| Text readonly | owner…inspectExpire · violationCodes | from `RegistryJson` after lookup |
| Text multiline | note | Confirm/Dismiss/Edit · dirty leave-confirm |
| Text readonly | incidentId | set after Confirm stub |

**Registry lookup:** **chốt** `POST /anpr/events/{id}/lookup` (persist RegistryJson + ViolationsJson + Severity). **Không** expose standalone `GET …/registry/vehicles/{plate}` P1 — internal mock only.

### Rule codes (SSOT)

| Code | Trigger |
|------|---------|
| `SPEED` | speedKmh > SpeedLimit |
| `OVERLOAD_GVW` | wimKg > registry.GvwMaxKg |
| `OVERLOAD_PAYLOAD` | (wimKg - CurbWeightKg) > PayloadMaxKg |
| `NO_REGISTRY` | plate not in mock registry |

Ngưỡng tốc độ/tải **không** hardcode MFE — SpeedLimit từ camera seed · rule evaluate server-side (tenant config P2).

## 3. FormType pack (REQUIRED)

`packKind=ai` + Kind B+D → **list pack + ai detect/HITL pack** · S-MAP **DEFER**.

### FormMode ↔ API

| Surface | FormMode | Endpoint |
|---------|----------|----------|
| List search/page/filter | — | API-01 GET `/anpr/events` |
| init-data Dropdowns | — | API-02 GET `/anpr/events/init-data` |
| View / Edit / Copy load | view / edit / copy | API-03 GET `/anpr/events/{id}` |
| Create / Copy save | create / copy | API-04 POST `/anpr/events` |
| Edit save | edit | API-05 PUT `/anpr/events/{id}` |
| Soft-delete | — | API-06 DELETE `/anpr/events/{id}` |
| Simulate toolbar | — | API-07 POST `/anpr/events/simulate` |
| Registry + rules | — | API-08 POST `/anpr/events/{id}/lookup` |
| Confirm HITL → stub Incident | HITL | API-09 POST `/anpr/events/{id}/confirm` |
| Dismiss HITL | HITL | API-10 POST `/anpr/events/{id}/dismiss` |
| Catalog config FULL | — | Integration CatalogUiSchema `catalogKind=its-anpr-overload` (**new seed**) |

### Task pack ids (handoff TL)

**List:** T-CTX · T-PERM-01 · T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-LEAVE-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-QA-CRUD-01  
**AI/HITL:** T-UI-AI-01 · T-UI-AI-FORM-01 · T-BE-AI-01 · T-QA-AI-01 (S-DETECT panel · Confirm/Dismiss footer)  
**Config FULL:** T-UI-CONFIG-01 · T-BE-UI-SCHEMA-01 (`its-anpr-overload`)  
**+** T-BFF · T-MIG (verify exists) · T-BE-LOOKUP · T-BE-CONFIRM-STUB

**devSlash:** S-LIST/CRUD=`/agent-dev` · S-DETECT/HITL=`/agent-dev-ai-detect` · Camera live=`/agent-dev-camera-connect` (P1 simulate OK) · Map=**DEFER**.

## 4. API catalog

Base: `api/v1/ai-vision/anpr/events` · BFF `web-bff/api/v1/ai-vision/anpr/events`

### API-01 GET `/anpr/events`

| | |
|--|--|
| Purpose | Kind B list paged + Zone B filters · search **must work** |
| Permission | `ai-vision.anpr-events.read` |
| Tenant | `X-Company-Id` · HasQueryFilter CompanyCode |
| Query | `search` · `cameraId` · `status` · `page` · `pageSize`∈{50,100,200,500} |
| Response | `ApiResponse<AnprEventPagedResult>` |
| Form surfaces | S-LIST |
| Field map | search→Code/Plate/CameraId/CameraLabel/Note/IncidentCode |
| **gates.tz** | n/a (list) |
| **gates.xco** | n/a (list tenant filter) |
| **gates.shared** | tenant_keep |
| Live | **EXISTS** · demo seed on first list per company |

### API-02 GET `/anpr/events/init-data`

| | |
|--|--|
| Purpose | LOOKUP_STATIC Dropdown cameras · statuses · severities |
| Permission | read |
| Response | `{ cameras[], statuses[], severities[] }` |
| Live | **EXISTS** · CAM-QL1-286/312/340 · Pending/Confirmed/Dismissed |

### API-03 GET `/anpr/events/{id}`

| | |
|--|--|
| Purpose | Form View/Edit/Copy · S-DETECT detail |
| Permission | read |
| **gates.xco** | **yes** — IgnoreQueryFilters + AllowedCompanyIds on GET |
| **gates.tz** | yes — CapturedAt/UpdatedAt ISO UTC |
| Errors | 404 · 403 XCO |

### API-04 POST `/anpr/events`

| | |
|--|--|
| Purpose | Create / Copy save · Status=`Pending` |
| Permission | create |
| Request | CreateAnprEventRequest |
| Behavior | Code server-gen `ANPR-YYYYMMDD-NNNN` |
| **gates.tz** | yes — CapturedAt normalize UTC |

### API-05 PUT `/anpr/events/{id}`

| | |
|--|--|
| Purpose | Edit save · **chỉ** khi Status=`Pending` |
| Permission | update |
| Behavior | clears RegistryJson/ViolationsJson on edit |
| Errors | 422 nếu Confirmed/Dismissed |

### API-06 DELETE `/anpr/events/{id}`

| | |
|--|--|
| Purpose | Soft-delete (`IsActive=false`) |
| Permission | delete |

### API-07 POST `/anpr/events/simulate`

| | |
|--|--|
| Purpose | Toolbar «Mô phỏng» — random plate/camera/speed/WIM |
| Permission | create |
| Live | **EXISTS** |

### API-08 POST `/anpr/events/{id}/lookup`

| | |
|--|--|
| Purpose | Tra cứu Cục Đăng kiểm mock + evaluate violations |
| Permission | read/update (persist snapshot) |
| Response | `{ event, registry?, violations }` |
| Behavior | Updates RegistryJson · ViolationsJson · Severity on entity |
| **gates.xco** | get path before mutate |
| **gates.tz** | n/a |

### API-09 POST `/anpr/events/{id}/confirm`

| | |
|--|--|
| Purpose | HITL Confirm → stub Incident `VI-ANPR-YYYYMMDD-NNNN` |
| Permission | confirm |
| Request | `{ note? }` |
| Behavior | Status Pending→Confirmed · IncidentId/Code set · **không** create Incident entity P1 |
| **gates.xco** | get path before mutate |
| **gates.tz** | yes — ResolvedAt UTC |

### API-10 POST `/anpr/events/{id}/dismiss`

| | |
|--|--|
| Purpose | HITL Dismiss false positive |
| Permission | dismiss |
| Request | `{ note? }` |
| Behavior | Status Pending→Dismissed |

### Lookups (existing — không tạo mới P1)

| API | Path | Consumer |
|-----|------|----------|
| L-01 | CatalogUiSchema `its-anpr-overload` | Config FULL (**new seed**) |

## 5. BFF vs API · tenant

- BFF: **proxy only** — `AiVisionAnprEventsBffController` forward all routes.
- Forward headers: `Authorization` · `X-Company-Id`.
- Tenant: mọi event query `CompanyCode` filter; lookup/confirm/dismiss use IgnoreQueryFilters + XCO check on GET path.

## 6. Data model / EF

### Entity `AiVisionAnprEventEntity` → table `rmms_ai_vision_anpr_events`

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | string | TenantEntity |
| Code | varchar(64) | `ANPR-*` UK / tenant |
| CameraId | varchar(64) | CAM-* |
| CameraLabel / CameraKm | varchar | display |
| SpeedLimit | int | from camera · rule input |
| Plate | varchar(32) | |
| SpeedKmh | numeric(8,2) | |
| WimKg | numeric(12,2)? | |
| Confidence | numeric(6,4) | 0–1 |
| Status | varchar(32) | Pending / Confirmed / Dismissed |
| Severity | varchar(16) | ok / warn / critical |
| CapturedAt | timestamptz | |
| RegistryJson | text? | snapshot AnprRegistryDto |
| ViolationsJson | text? | snapshot AnprViolationsDto |
| Note | varchar(2000)? | HITL |
| IncidentId / IncidentCode | varchar(64)? | stub after Confirm |
| ResolvedAt | timestamptz? | Confirm/Dismiss |
| IsActive | bool | soft-delete |
| CreatedAt / UpdatedAt | timestamptz | |

Migration: **EXISTS** `20260817120000_Schema_RmmsAiVisionAnprEvents` — Dev verify apply · **không** recreate.

### CatalogUiSchema seed (REQUIRED delta)

| catalogKind | Notes |
|-------------|-------|
| `its-anpr-overload` | Registry + Seed columns Design §5.2 · title «Cấu hình hiển thị danh mục» · **cấm** `configHint` / `LinListTableConfigModal` |

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON string inventory | RegistryJson · ViolationsJson = scalar snapshots OK |
| Child tables | n/a |
| API shape | header scalars + JSON text fields |

## 5b. Implement gates (confirm) — REQUIRED

Autopilot ON · auto-confirm:

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_required** | form CapturedAt · API-03/04/05/09 ResolvedAt | `/review-timezone-implement` | FE Date → UTC · BE normalize UTC |
| XCO | **xco_get_only** | API-03 GET/{id} (+ lookup/confirm/dismiss load path) | `/implement-view-cross-company` | IgnoreQueryFilters + AllowedCompanyIds |
| SHARE | **share_tenant** | `AiVisionAnprEventEntity` | `/implement-shared-table` | tenant-only ANPR events |

## 7. DOMAIN-MAP

Verified: `its-anpr-overload` → **AiVision** / `ai-vision` (`docs/DOMAIN-MAP.md`).

## 8. Risks / DEFER / GAP (SA → TL/Dev)

| ID | Decision |
|----|----------|
| GAP-SA-ANPR-UI-SCHEMA-01 | **OPEN** — CatalogUiSchemaRegistry + Seed `its-anpr-overload` |
| GAP-ANPR-01 | **CLOSED** live — entity/migration/controllers/BFF/MFE exist |
| GAP-ANPR-02 | **CLOSED P1** — mock registry in-service · real adapter **DEFER P2** |
| GAP-ANPR-03 | **CLOSED P1 stub** — Confirm sets `VI-ANPR-*` · full Incident **DEFER P2** |
| GAP-AI-HITL-01 | **CLOSED** — Kind D slideout footer Confirm/Dismiss |
| GAP-AI-DETECT-CHROME | **CLOSED** — **cấm** AI badge header |
| GAP-PO-LEAVE-01 | **CLOSED** — LeaveConfirmModal |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | **OPEN** — Config FULL ui-schema seed missing |
| S-MAP | **DEFER P2** — không pin map P1 |
| Live camera/WIM ingest | **DEFER P2** — P1 simulate OK |
| JWT Authorize Attribute | TODO platform auth (parity siblings) |
| Registry GET by plate | **OUT P1** — use POST lookup on event only |

## Confirm

`solution_confirm` = **approve** (Autopilot · autoApprove=ON · task_864dfd9e · 2026-08-24).

## Handoff → Team lead

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| next | `/agent-team-lead` · roleOnly khi enqueue |
| API ids | API-01…10 · L-01 |
| Form↔API | §3 |
| Gates | TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`share_tenant` |
| Migrations | verify `Schema_RmmsAiVisionAnprEvents` · **+** CatalogUiSchema seed |
| BFF | proxy `anpr/events` (exists) |
| MFE | `Linm.Web.RMMS.AiVision` · `mfeStdRoute=/its-anpr-overload` · `mfeStdUrl=http://localhost:9303/its-anpr-overload` |
| Tasks | list+ai packs · T-UI-CONFIG · T-BE-UI-SCHEMA · T-UI-LEAVE · T-UI-LKP/FIELD/PROD/UX · T-BE-LOOKUP · T-BE-CONFIRM-STUB |
| SSOT grid | 1× LinPageLayout · LinCatalogDataGrid kéo cột ON · LinCatalogListPagination · slideout footer only · Config FULL |
| beRepo/uiRepo | **pending** board tick trước Dev |
| Cấm | ERP.* · nested CatalogListShell · footerPagination · configHint · AI chrome header · S-MAP P1 |

## Version meta (REQUIRED)

| Field | Value |
|-------|--------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.15 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-24T15:50:00.000Z |
| versionGate | ok |
| contentHash | sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865 |

---
<!-- Version meta: skillVersion=2026.08.15.15 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
