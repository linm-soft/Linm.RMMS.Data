# Solution discovery — ai-asset-detect

> Status: **confirmed** (`solution_confirm=approve` · autopilot · autoApprove=ON)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · no-parent-json-field  
> **SA detail:** `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · `form-type-task-pack.md`  
> Requires: `ui/design.md` **confirmed** · design_confirm=`approve`  
> **changeScope:** `edit_page` · reopen SA — **GAP-AAD-FILE-01** + miss reconcile + filter-bar query keys  
> **Khác `ai-vision`:** taxonomy thiết bị TS → Asset · **cấm** class ổ gà / YOLO «mất» · **cấm ERP.***

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| packKind | `list` · featureClass `ai` (Kind B+D+F) |
| changeScope | `edit_page` |
| status | `confirmed` |
| design_confirm | approve |
| domain_map | **AiVision** · kebab `ai-vision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · `/ai-vision/ai-asset-detect` |
| hostInfer | `Linm.RMMS.Vision` (stub P1 · **cấm** invent missing-detect API) |
| sa_tz_gate | **tz_required** |
| sa_xco_gate | **xco_get_only** |
| sa_shared_table | **share_tenant** (tenant_keep) |
| solution_confirm | **approve** |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.06.1` |
| versionGate | `ok` |
| updatedAt | `2026-09-06T16:50:00.000Z` |
| taskId | `task_7381f42c` |

## 0. Path guard

**Only** `Linm.RMMS.WebService` / `Domains/AiVision` (+ Asset confirm · Incident miss · Integration lookups · FileService BFF).  
**Cấm** `Linm.Web.ERP.WebService` · `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · invent `api/v1/ai-kd/*`.

## 1. Ownership

| Layer | Repo / module |
|-------|----------------|
| MFE | `Linm.Web.RMMS.AiVision` · `/ai-vision/ai-asset-detect` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | **AiVision** / `ai-vision` |
| API host | `api/src/RMMS.Service.Api/Domains/AiVision/` |
| Models/DTO | `api/domains/ai-vision/LINM.RMMS.AiVision.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` · `AiVisionAssetCandidateEntity` |
| Migrations | `api/shared/RMMS.Service.Migrations/Migrations/` |
| BFF | `bff/domains/ai-vision/…` · **proxy only** |
| Files | **reuse** `web-bff/api/v1/files/*` · `Linm.Platform.FileService.Bff` — **cấm** scaffold API file mới |
| Confirm → Asset | inject `IRoadAssetService` |
| Miss → Incident | inject Incident create · `POST /api/v1/incident/incidents` (peer) |
| Lookups | Integration `asset-types` · `road-routes` · Asset `road-assets` |
| Infer host | `Linm.RMMS.Vision` (P1 stub detect trong AiVision API) |

### Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | AiVision / `ai-vision` · **không** domain mới |
| API prefix | `api/v1/ai-vision` |
| BFF | `web-bff/api/v1/ai-vision/**` · proxy only = **yes** |
| Files BFF | `web-bff/api/v1/files/**` · existing |
| MFE | `Linm.Web.RMMS.AiVision` |
| Response | ApiResponse / paged |
| Auth perm | `ai-vision.asset-candidates.read\|create\|update\|delete\|confirm\|dismiss\|miss` |
| Persist | flat `TenantEntity` scalars · **no** parent `*LinesJson` |
| Sibling | `rmms_ai_vision_detections` = mặt đường — **tách** bảng candidates |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · **LinErpListFilterBar** · LeaveConfirmModal · FileUpload |
| HTTP | apiClient SSOT | re-export only |
| BE | Linm.Platform.CommonLib | ApiResponse envelope |
| Files | FileService BFF | upload · resign by `imageFileId` |
| Persist | `no-parent-json-field` | `BboxJson` = scalar text bbox |
| Catalog | Integration asset-type / road-route · Asset road-assets | SearchInput |

## 2. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity | data-import / mock |
|-------------------|-------------|-------------|--------|---------------------|
| S-LIST filters | search · routeId · assetClass · status · fromDate · toDate · **missOnly** | query + LOOKUP | Candidate | demo |
| S-LIST grid | Design columns + row **Mất?** | tx | Candidate | AC-101… |
| S-FORM Create/Edit/Copy | assetClass* · score* · engine* · lat/lng* · routeId* · routeLabel · sectionId · patrolTripId · bboxJson · note · **imageFileId** · detectedAt | tx + LOOKUP + files | Candidate | — |
| S-FORM View | all + assetCode · nearby* · modelVersion · **imageUrl (resigned)** · updatedAt · expectedAssetId · incidentDraftId | tx readOnly | Candidate | — |
| S-MOD-CONFIRM | assetTypeCode* (SearchInput) | master asset-type | Candidate + RoadAsset | map §2b |
| S-MOD-DISMISS | reason? | tx | Candidate | — |
| S-MOD-MISS | expectedAssetId* · missWindowMin · note? | asset + tx | Candidate + Incident | NEW |
| S-MAP | pins AI / confirmed / existing / **miss** | tx + Asset | Candidate + RoadAsset | — |
| S-FEED | Giả lập frame | detect stub | Candidate | toolbar |
| S-LEAVE | LeaveConfirmModal | UI only | — | — |

### List filter query keys (LinErpListFilterBar — **WHAT only**)

| Query key | controlHint | Notes |
|-----------|-------------|-------|
| `search` | SearchInput | |
| `routeId` | SearchInput road-route | |
| `assetClass` | Dropdown LOOKUP_STATIC | 8 · **no** «mất» |
| `status` | Dropdown | Draft/Confirmed/Dismissed |
| `fromDate` / `toDate` | Date | **TZ** bounds |
| `missOnly` | Checkbox | NEW · filter miss-reconcile queue |
| `page` / `pageSize` | pagination | 50/100/200/500 |

**Cấm** `filterItems` HOW — TL owns layout task.

### controlHint → API (chốt)

| controlHint | Field | API consumer |
|-------------|-------|--------------|
| SearchInput (text) | search | `GET …/asset-candidates?search=` |
| SearchInput **road-route** | routeId | `GET …/integration/road-routes/search` |
| Dropdown enum 8 | assetClass | `GET …/asset-candidates/init-data` |
| Dropdown status | status | init-data |
| Date | fromDate / toDate / detectedAt | list + form · **TZ required** |
| Checkbox | missOnly | `GET …/asset-candidates?missOnly=true` |
| FileUpload | imageFileId | `web-bff/api/v1/files/*` upload → guid · persist **ImageFileId** · resign on GET |
| SearchInput **asset-type** | assetTypeCode (Confirm) | `GET …/integration/asset-types/search` |
| SearchInput **road-asset** | expectedAssetId (Miss) | `GET …/asset/road-assets` (search) |
| Number | missWindowMin · score · lat · lng | body scalars |
| Text | note · bboxJson · sectionId · patrolTripId | scalars |

### 2b. AI class → asset-type (Confirm default)

| assetClass | `asset-type.code` default |
|------------|---------------------------|
| Biển báo | `GANTRY_SIGN` |
| Hộ lan | `GUARDRAIL` |
| Cột Km | `KM_POST` |
| Cột H | `DELINEATOR` |
| Đèn chiếu sáng | `LIGHTING` |
| Cống | `CULVERT_X` / `CULVERT_L` |
| Taluy | `SLOPE_PROTECT` |
| Camera ITS | **`ITS_CAMERA`** |

**Cấm** trộn 10 class mặt đường `ai-vision` · **cấm** YOLO class «mất».

### 2c. GAP-AAD-FILE-01 — **CLOSED**

| Decision | Value |
|----------|-------|
| Persist | **`ImageFileId`** `uuid?` (FileService guid) |
| Write path | POST/PUT/detect body `imageFileId` — **cấm** persist full URL làm SSOT |
| Display | DTO `imageUrl` = **resign** từ FileService by id (computed) |
| Legacy | `ImageUrl` column **nullable keep** (demo/stub) · new writes prefer FileId · migrate: copy none |
| Upload API | **reuse only** `web-bff/api/v1/files/*` |
| Migration | `Schema_RmmsAiVisionAssetCandidates_ImageFileId` ALTER ADD |

## 3. FormType pack (REQUIRED)

`packKind=list` + `featureClass=ai` → **list pack + ai pack** (+ map overlay + miss).

### FormMode ↔ API

| Surface | FormMode | Endpoint |
|---------|----------|----------|
| List search/page/filter | — | API-01 GET `/asset-candidates` |
| init-data Dropdowns | — | API-02 GET `/asset-candidates/init-data` |
| View / Edit load | view / edit / copy | API-03 GET `/{id}` |
| Create / Copy save | create / copy | API-04 POST `/` |
| Edit save | edit | API-05 PUT `/{id}` |
| Soft-delete Draft | — | API-06 DELETE `/{id}` |
| Detect frame (sim) | — | API-07 POST `/detect-assets` |
| Detect batch | — | API-08 POST `/detect-assets/batch` |
| Nearby check | — | API-09 GET `/asset-candidates/nearby` |
| Confirm → Asset | HITL | API-10 POST `/{id}/confirm` |
| Dismiss FP | HITL | API-11 POST `/{id}/dismiss` |
| **Miss reconcile** | HITL Modal | **API-12** POST `/{id}/miss` → Incident |
| Map existing pins | — | **reuse** `GET /api/v1/asset/road-assets` |
| File upload | FileUpload | **reuse** `web-bff/api/v1/files/*` |
| road-route / asset-type | SearchInput | Integration `/search` |
| expected Asset | SearchInput | Asset road-assets |

**GAP-SA-FORMTYPE-01:** closed.

### Task pack ids (handoff TL)

**List:** T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · **T-UI-FILTER-01** · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-QA-CRUD-01  
**AI:** T-UI-AI-01 · T-UI-AI-FORM-01 · T-BE-AI-01 · T-QA-AI-01  
**Map:** T-UI-MAP-01  
**Delta edit:** T-UI-MISS-01 · T-BE-MISS-01 · T-MIG-FILE-01 · T-UI-FILE-01 · T-BE-FILE-01  
**+** T-CTX · T-BFF · T-MIG · T-SEED-ITS_CAMERA · T-BE-CONFIRM-ASSET

**devSlash:** list=`/agent-dev` · detect=`/agent-dev-ai-detect` · map=`/agent-dev-oms-map`

## 4. API catalog

Base: `api/v1/ai-vision` · BFF `web-bff/api/v1/ai-vision`

### API-01 GET `/asset-candidates`

| | |
|--|--|
| Purpose | Kind B list paged + Zone B filters · search **must work** |
| Permission | `ai-vision.asset-candidates.read` |
| Tenant | `X-Company-Id` · HasQueryFilter CompanyCode |
| Query | `search` · `routeId` · `assetClass` · `status` · `fromDate` · `toDate` · **`missOnly`** · `page` · `pageSize`∈{50,100,200,500} |
| `missOnly=true` | rows with `MissFlag=true` OR `ExpectedAssetId` set OR Status Draft + empty frame + GPS near existing Asset (server predicate P1: `MissFlag`) |
| Response | `ApiResponse<AssetCandidatePagedResult>` · DTO includes `imageFileId` · `imageUrl` (resigned) · `missFlag` · `expectedAssetId` · `incidentDraftId` |
| Form surfaces | S-LIST |
| **gates.tz** | **yes** — fromDate start UTC · toDate end-of-day UTC |
| **gates.xco** | n/a |
| **gates.shared** | tenant_keep |
| **Context** | `docs/context/features/ai-asset-detect.md` |
| **Demo** | `ai-vision/ai-asset-detect.html` · Zone B/C |
| **data-import** | N/A |
| Migration | base + ImageFileId alter |

### API-02 GET `/asset-candidates/init-data`

| | |
|--|--|
| Purpose | LOOKUP_STATIC assetClass (8) · status · engine · nearbyRadiusMeters · missWindowMinDefault |
| Permission | read |
| Response | `{ assetClasses[], statuses[], engines[], nearbyRadiusMeters, missWindowMinDefault }` |

### API-03 GET `/asset-candidates/{id}`

| | |
|--|--|
| Purpose | Form View/Edit/Copy load · resign `imageUrl` from `imageFileId` |
| Permission | read |
| **gates.xco** | **yes** |
| **gates.tz** | yes |

### API-04 POST `/asset-candidates`

| | |
|--|--|
| Purpose | Create / Copy save Draft |
| Permission | create |
| Request | scalars §6 + **`imageFileId?`** · `expectedAssetId?` · `missWindowMin?` · `missFlag?` |
| Behavior | Code `AC-YYYYMMDD-NNNN` · Status=`Draft` · NearbyRisk vs radius |
| **gates.tz** | yes |

### API-05 PUT `/asset-candidates/{id}`

| | |
|--|--|
| Purpose | Edit save · Draft only |
| Permission | update |
| Request | same as create · **`imageFileId`** replace |
| Errors | 422 Confirmed/Dismissed |

### API-06 DELETE `/asset-candidates/{id}`

| | |
|--|--|
| Purpose | Soft-delete Draft only P1 |
| Permission | delete |

### API-07 POST `/detect-assets`

| | |
|--|--|
| Purpose | Toolbar «Giả lập frame» — **stub** P1 (host Vision later) |
| Permission | create |
| Request | `{ imageFileId? · imageUrl? · lat · lng · routeId · routeLabel? · patrolTripId? · engine? }` |
| Persist | prefer **ImageFileId** when provided |
| Response | 1–N candidates Draft |

### API-08 POST `/detect-assets/batch`

| | |
|--|--|
| Purpose | Batch stub P1 |
| Request | `{ patrolTripId · frames:[{lat,lng,imageFileId?,imageUrl?}] · routeId }` |

### API-09 GET `/asset-candidates/nearby`

| | |
|--|--|
| Purpose | Nearby · duplicate banner |
| Query | `lat` · `lng` · `assetClass` · `radiusM?` · `excludeId?` |
| Default radius | **25 m** P1 · config `AiVision:AssetDetect:NearbyRadiusMeters` · prod ITS **10** |

### API-10 POST `/asset-candidates/{id}/confirm`

| | |
|--|--|
| Purpose | HITL Confirm → RoadAsset |
| Permission | confirm |
| Request | `{ assetTypeCode* · name? · note? }` |
| Behavior | Draft → `IRoadAssetService.CreateAsync` · candidate `Confirmed` |

### API-11 POST `/asset-candidates/{id}/dismiss`

| | |
|--|--|
| Purpose | False positive |
| Permission | dismiss |
| Request | `{ note? }` |
| Behavior | Status=`Dismissed` · Draft only |

### API-12 POST `/asset-candidates/{id}/miss` (**NEW**)

| | |
|--|--|
| Purpose | Miss reconcile HITL — GPS có TS · frame trống / user gim mất (GAP-ITS-MISS-01) · **không** YOLO class «mất» |
| Permission | `ai-vision.asset-candidates.miss` |
| Request | `{ expectedAssetId* · missWindowMin? · note? }` |
| Behavior | Validate Draft · call **existing** `POST /api/v1/incident/incidents` (peer Incident) · set `MissFlag=true` · `ExpectedAssetId` · `MissWindowMin` · `IncidentDraftId` · **cấm** invent `missing-detect` API |
| Response | `{ candidate, incident }` |
| **gates.tz** | yes · window relative DetectedAt UTC |
| **gates.xco** | get path on candidate before mutate |
| Context | ITS miss policy · real-data §E |
| Demo | Zone toolbar Reconcile · S-MOD-MISS |

### Lookups / files (existing — không tạo mới)

| API | Path | Consumer |
|-----|------|----------|
| L-01 | `GET /api/v1/integration/road-routes/search` | routeId |
| L-02 | `GET /api/v1/integration/asset-types/search` | Confirm |
| L-03 | `GET /api/v1/asset/road-assets` | Map + expectedAssetId |
| L-04 | `web-bff/api/v1/files/*` | FileUpload imageFileId · resign |
| L-05 | `POST /api/v1/incident/incidents` | API-12 peer |

## 5. BFF vs API · tenant

- BFF AiVision: **proxy only** — `asset-candidates/**` · `detect-assets/**` (incl. `/{id}/miss`).
- Files: existing FileService BFF — MFE gọi trực tiếp SSOT.
- Forward: `Authorization` · `X-Company-Id`.
- Tenant: CompanyCode filter; Confirm/Miss cùng company.

## 6. Data model / EF

### Entity `AiVisionAssetCandidateEntity` → `rmms_ai_vision_asset_candidates`

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | string | TenantEntity |
| Code | varchar(64) | `AC-*` UK / tenant |
| AssetClass | varchar(64) | 8 AI class |
| Score | decimal(6,4) | |
| Status | varchar(32) | Draft / Confirmed / Dismissed |
| Engine | varchar(16) | |
| Lat / Lng | decimal(12,8) | |
| RouteId | varchar(64) | |
| RouteLabel | varchar(256)? | |
| SectionId | varchar(64)? | |
| PatrolTripId | varchar(64)? | |
| BboxJson | varchar(512)? | scalar OK |
| ModelVersion | varchar(128)? | |
| NearbyRisk | bool | |
| NearbyOf | varchar(64)? | |
| Note | varchar(2000)? | |
| AssetCode | varchar(64)? | |
| AssetId | uuid? | |
| **ImageFileId** | **uuid?** | **NEW · FileService · GAP-AAD-FILE-01 CLOSED** |
| ImageUrl | varchar(1024)? | legacy/stub display only |
| **MissFlag** | **bool** | **NEW · miss queue** |
| **ExpectedAssetId** | **uuid?** | **NEW · miss** |
| **MissWindowMin** | **int?** | **NEW · default from init-data** |
| **IncidentDraftId** | **uuid?** | **NEW · after API-12** |
| DetectedAt | timestamptz | |
| IsActive | bool | |
| CreatedAt / UpdatedAt | timestamptz | |

### Asset extend (Confirm)

| Column `rmms_road_assets` | Notes |
|---------------------------|-------|
| Source / SourceRef | `ai-asset-detect` / candidate Code |

### Migrations

| Migration | Notes |
|-----------|-------|
| `Schema_RmmsAiVisionAssetCandidates` | base (prior) |
| **`Schema_RmmsAiVisionAssetCandidates_ImageFileId`** | ALTER ADD ImageFileId · MissFlag · ExpectedAssetId · MissWindowMin · IncidentDraftId |
| RoadAsset Source/SourceRef | prior if missing |
| Seed `ITS_CAMERA` | prior |

### Persist gate

| | |
|--|--|
| Parent JSON inventory | **none** |
| BboxJson | scalar OK |
| ImageFileId | uuid scalar · **not** URL blob as SSOT |

## 5b. Implement gates (confirm) — REQUIRED

Autopilot ON · auto-confirm:

| Gate | Decision | Endpoints | Skill |
|------|----------|-----------|-------|
| TZ | **tz_required** | API-01/03/04/05/10/12 · DetectedAt | `/review-timezone-implement` |
| XCO | **xco_get_only** | API-03 · load before confirm/dismiss/miss | `/implement-view-cross-company` |
| SHARE | **share_tenant** | `AiVisionAssetCandidateEntity` | `/implement-shared-table` |

AskQuestion (autopilot): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-06T16:50:00.000Z`

## 7. Dedupe (chốt — UNCLEAR CLOSED)

| Env | Radius | Impl |
|-----|--------|------|
| P1 / demo parity | **25 m** | Haversine · NearbyRisk · **không** auto-create |
| Prod ITS SSOT | **10 m** | `NearbyRadiusMeters=10` · PostGIS `ST_DWithin` **DEFER** |

## 8. DOMAIN-MAP

Hàng: `ai-asset-detect` → **AiVision** / `ai-vision` (giữ).

## 9. Risks / DEFER / CLOSED

| ID | Decision |
|----|----------|
| GAP-AAD-FILE-01 | **CLOSED** — ImageFileId + FileService resign |
| GAP-AAD-MISS-UI-01 | CLOSED Design · SA API-12 + missOnly |
| GAP-DA-DEMO-01 | CLOSED PO · demo baseline `ai-vision/ai-asset-detect.html` |
| GAP-F-AAD-01 | CLOSED taxonomy |
| GAP-F-AAD-02 | CLOSED Confirm bắt buộc |
| GAP-F-AAD-03 | OUT stub detect |
| GAP-F-AAD-GEO | DEFER PostGIS |
| GAP-F-AAD-PATROL | DEFER |
| GAP-F-AAD-HIST | DEFER |
| wait_aiservice | Follow-up GPT-4o · out of this SA reopen |

## Confirm

`solution_confirm` = **approve** (autopilot · autoApprove=ON · task_7381f42c · 2026-09-06).

## Handoff → Team lead

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| changeScope | `edit_page` |
| next | `/agent-team-lead` · roleOnly khi enqueue |
| API ids | API-01…**12** · L-01…05 |
| FormMode↔API | §3 |
| Filter keys | search · routeId · assetClass · status · fromDate · toDate · missOnly · LinErpListFilterBar |
| Gates | TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`share_tenant` |
| Migrations | base + **ImageFileId/Miss\*** alter · seed ITS_CAMERA |
| BFF | proxy asset-candidates · detect-assets · miss |
| Files | reuse FileService BFF |
| MFE | `Linm.Web.RMMS.AiVision` · mfeStd `/ai-vision/ai-asset-detect` |
| Tasks | list+ai+map + T-UI-FILTER · T-UI-MISS · T-BE-MISS · T-MIG-FILE · T-UI-FILE · T-BE-FILE |
| Open questions | **none** (GAP-AAD-FILE-01 · dedupe CLOSED) |
| Cấm | ERP.* · YOLO «mất» · invent missing-detect · HOW filter layout |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.06.1 |
| generatedAt | 2026-09-06T16:50:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.09.05.03 · versionGate=ok -->
