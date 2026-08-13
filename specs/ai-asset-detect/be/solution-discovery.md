# Solution discovery — ai-asset-detect

> Status: **confirmed** (`solution_confirm=approve` · autopilot · autoApprove=ON)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · no-parent-json-field  
> **SA detail:** `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · `form-type-task-pack.md`  
> Requires: `ui/design.md` **confirmed** · design_confirm=`approve`  
> **Khác `ai-vision`:** taxonomy thiết bị TS → Asset · **cấm** class ổ gà / Incident · **cấm ERP.***

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| packKind | `list` · featureClass `ai` (Kind B+D+F) |
| status | `confirmed` |
| design_confirm | approve |
| domain_map | **AiVision** · kebab `ai-vision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision` |
| mfe (đề xuất) | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · `/ai-vision/ai-asset-detect` |
| sa_tz_gate | **tz_required** |
| sa_xco_gate | **xco_get_only** |
| sa_shared_table | **share_tenant** (tenant_keep) |
| solution_confirm | **approve** |
| contentHash (data-analy) | `sha256:97450ff90d8d4576a8de82e118d463e705b49b21f212a76fd178527a8b38793e` |
| skillVersion | `2026.08.10.1` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.10.3` |
| rulesVersion | `2026.08.11.1` |
| versionGate | `ok` |
| updatedAt | `2026-08-12T14:35:00.000Z` |

## 0. Path guard

**Only** `Linm.RMMS.WebService` / `Domains/AiVision` (+ Asset confirm create · Integration lookups).  
**Cấm** `Linm.Web.ERP.WebService` · `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

`beRepo` / `uiRepo` board tick = **user only trước Dev** — SA chốt path đề xuất (không auto tick).

## 1. Ownership

| Layer | Repo / module |
|-------|----------------|
| MFE | `Linm.Web.RMMS.AiVision` · route đề xuất `/ai-vision/ai-asset-detect` *(ui_repo_confirm board)* |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` *(be_repo_confirm board)* |
| Domain | **AiVision** / `ai-vision` — DOMAIN-MAP + hàng slug `ai-asset-detect` |
| API host | `api/src/RMMS.Service.Api/Domains/AiVision/` |
| Models/DTO | `api/domains/ai-vision/LINM.RMMS.AiVision.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` · `AiVisionAssetCandidateEntity` |
| Migrations | `api/shared/RMMS.Service.Migrations/Migrations/` |
| BFF | `bff/domains/ai-vision/…` · **proxy only** |
| Confirm → Asset | inject `IRoadAssetService` (domain Asset · cùng process) |
| Lookups | Integration `asset-types` · `road-routes` (SearchInput) |
| Seed ITS_CAMERA | Integration `rmms_asset_types` + `docs/context/seed/asset-type-seed.json` |

### Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | AiVision / `ai-vision` · **không** domain mới |
| API prefix | `api/v1/ai-vision` |
| BFF | `web-bff/api/v1/ai-vision/**` · proxy only = **yes** |
| MFE | `Linm.Web.RMMS.AiVision` · **không** Master catalogs |
| Response | ApiResponse / paged (local stub → CommonLib) |
| Auth perm | `ai-vision.asset-candidates.read|create|update|delete|confirm|dismiss` (stub Attribute TODO CommonLib) |
| Persist | flat `TenantEntity` scalars · **no** parent `*LinesJson` |
| Sibling | `rmms_ai_vision_detections` = mặt đường — **tách** bảng candidates |
| Out of pack | Real GPT/ONNX · auto-create P2 · Patrol trip lookup · PostGIS prod-only DEFER · camera-connect |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination |
| HTTP | apiClient SSOT | re-export only |
| BE | Linm.Platform.CommonLib | ApiResponse envelope |
| Auth | Linm.Platform.Authentication | RequirePermission khi ≥1.4.0 |
| Persist | `no-parent-json-field` | `BboxJson` = scalar text bbox · **không** child collection blob |
| Catalog | Integration asset-type / road-route | SearchInput — **cấm** free-text khi seed sẵn |

## 2. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity | data-import / mock |
|-------------------|-------------|-------------|--------|---------------------|
| S-LIST filters | search · routeId · assetClass · status · fromDate · toDate | demo + master lookup | Candidate | demo `ai-asset-detect-data.js` |
| S-LIST grid | columns Design §5 | tx | Candidate | seed AC-101…104 |
| S-FORM Create/Edit/Copy | assetClass* · score* · engine* · lat/lng* · routeId* · routeLabel · sectionId · patrolTripId · bboxJson · note · imageUrl · detectedAt | tx + LOOKUP_STATIC | Candidate | — |
| S-FORM View | all + assetCode · nearby* · modelVersion · updatedAt | tx readOnly | Candidate | — |
| S-MOD-CONFIRM | assetTypeCode* (SearchInput) | master asset-type | Candidate + RoadAsset | map AI class → code |
| S-MOD-DISMISS | reason? (optional P1 free note) | tx | Candidate | — |
| S-MAP | pins AI new / confirmed / existing TS | tx + Asset list | Candidate + RoadAsset | demo pins HL/CS/CN |
| S-FEED | Giả lập frame | detect stub | Candidate | toolbar |

### controlHint → API (chốt)

| controlHint | Field | API consumer |
|-------------|-------|--------------|
| SearchInput (text) | search | `GET …/asset-candidates?search=` |
| SearchInput **road-route** | routeId | `GET …/integration/road-routes/search` |
| Dropdown enum 8 | assetClass | `GET …/asset-candidates/init-data` · LOOKUP_STATIC |
| Dropdown status | status | init-data |
| Date | fromDate / toDate / detectedAt | list filter + form · **TZ required** |
| SearchInput **asset-type** | assetTypeCode (Confirm) | `GET …/integration/asset-types/search` · default map §2b |
| Text number | score · lat · lng | POST/PUT body scalars |
| Checkbox | nearbyRisk | computed server / persisted flag |
| Text | note · bboxJson · sectionId · patrolTripId | scalars |

### 2b. AI class → asset-type (Confirm default)

| assetClass (AI Dropdown) | `asset-type.code` default | Notes |
|--------------------------|---------------------------|-------|
| Biển báo | `GANTRY_SIGN` | seed có |
| Hộ lan | `GUARDRAIL` | seed có |
| Cột Km | `KM_POST` | seed có |
| Cột H | `DELINEATOR` | seed có |
| Đèn chiếu sáng | `LIGHTING` | seed có |
| Cống | `CULVERT_X` (default) / `CULVERT_L` | user đổi trên Confirm |
| Taluy | `SLOPE_PROTECT` | seed có |
| Camera ITS | **`ITS_CAMERA`** | **seed mới** · groupCode=`GIAO_THONG` |

**Cấm** trộn 10 class mặt đường `ai-vision` vào Dropdown này (GAP-F-AAD-01 CLOSED).

## 3. FormType pack (REQUIRED)

`packKind=list` + `featureClass=ai` → **list pack + ai pack**.

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
| Map existing pins | — | **reuse** `GET /api/v1/asset/road-assets` (Asset) |
| History | — | DEFER stub toast (toolbar) |
| road-route SearchInput | — | Integration API road-routes `/search` |
| asset-type SearchInput | — | Integration API asset-types `/search` |

**GAP-SA-FORMTYPE-01:** closed — map trên.

### Task pack ids (handoff TL)

**List:** T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-QA-CRUD-01  
**AI:** T-UI-AI-01 · T-UI-AI-FORM-01 · T-BE-AI-01 · T-QA-AI-01  
**Map overlay:** T-UI-MAP-01 (Kind F cùng page · OMS rút gọn)  
**+** T-CTX · T-BFF · T-MIG · T-SEED-ITS_CAMERA · T-BE-CONFIRM-ASSET

## 4. API catalog

Base: `api/v1/ai-vision` · BFF `web-bff/api/v1/ai-vision`

### API-01 GET `/asset-candidates`

| | |
|--|--|
| Purpose | Kind B list paged + Zone B filters · search **must work** |
| Permission | `ai-vision.asset-candidates.read` |
| Tenant | `X-Company-Id` · HasQueryFilter CompanyCode |
| Query | `search` · `routeId` · `assetClass` · `status` · `fromDate` · `toDate` · `page` · `pageSize`∈{50,100,200,500} |
| Response | `ApiResponse<AssetCandidatePagedResult>` |
| Form surfaces | S-LIST |
| Field map | search→Code/AssetClass/RouteLabel/Trip/Section/AssetCode/Note/Model · dates→DetectedAt UTC |
| **gates.tz** | **yes** — fromDate start UTC · toDate end-of-day UTC |
| **gates.xco** | n/a (list tenant filter) |
| **gates.shared** | tenant_keep |
| **Context** | `docs/context/features/ai-asset-detect.md` §3 |
| **Demo** | `ai-asset-detect.html` · Zone FILTER/C |
| **Demo JSON** | `js/ai-asset-detect-data.js` candidates |
| **data-import** | N/A (scan_workflow · no Excel) |
| Migration | Schema_RmmsAiVisionAssetCandidates |

### API-02 GET `/asset-candidates/init-data`

| | |
|--|--|
| Purpose | LOOKUP_STATIC Dropdown assetClass (8) · status · engine |
| Permission | read |
| Response | `{ assetClasses[], statuses[], engines[], nearbyRadiusMeters }` |
| **gates.tz** | n/a |
| Context / Demo | control-map · ASSET_CLASSES |

### API-03 GET `/asset-candidates/{id}`

| | |
|--|--|
| Purpose | Form View/Edit/Copy load |
| Permission | read |
| **gates.xco** | **yes** — IgnoreQueryFilters + AllowedCompanyIds trên GET |
| **gates.tz** | yes — DetectedAt/UpdatedAt serialize ISO UTC |
| Errors | 404 · 403 XCO |

### API-04 POST `/asset-candidates`

| | |
|--|--|
| Purpose | Create / Copy save Draft |
| Permission | create |
| Request | CreateAssetCandidateRequest (scalars §6) |
| Behavior | Code server-gen `AC-YYYYMMDD-NNNN` · Status=`Draft` · compute NearbyRisk vs radius |
| **gates.tz** | yes — DetectedAt normalize UTC |
| Validation | assetClass ∈ 8 · score 0–1 · lat/lng required · routeId required |

### API-05 PUT `/asset-candidates/{id}`

| | |
|--|--|
| Purpose | Edit save · **chỉ** khi Status=`Draft` |
| Permission | update |
| Errors | 422 nếu Confirmed/Dismissed |

### API-06 DELETE `/asset-candidates/{id}`

| | |
|--|--|
| Purpose | Soft-delete (`IsActive=false`) · Draft only P1 |
| Permission | delete |

### API-07 POST `/detect-assets`

| | |
|--|--|
| Purpose | Toolbar «Giả lập frame» — **stub** P1 (không gọi GPT thật) |
| Permission | create |
| Request | `{ imageUrl? · lat · lng · routeId · routeLabel? · patrolTripId? · engine? }` |
| Response | 1–N candidates persisted Draft (+ nearby flags) |
| Context | §3 detect-assets · GAP-F-AAD-03 dataset OUT |

### API-08 POST `/detect-assets/batch`

| | |
|--|--|
| Purpose | Batch theo chuyến tuần đường (stub P1) |
| Request | `{ patrolTripId · frames:[{lat,lng,imageUrl?}] · routeId }` |
| Response | `{ created: AssetCandidateDto[] }` |

### API-09 GET `/asset-candidates/nearby`

| | |
|--|--|
| Purpose | Toolbar Nearby · banner duplicate |
| Query | `lat` · `lng` · `assetClass` · `radiusM?` (default from config) · `excludeId?` |
| Behavior | Haversine P1 trên candidates + optional RoadAsset cùng Type |
| Default radius | **25 m** (demo parity) · config `AiVision:AssetDetect:NearbyRadiusMeters` · prod ITS override **10** |
| **gates.tz** | n/a |

### API-10 POST `/asset-candidates/{id}/confirm`

| | |
|--|--|
| Purpose | HITL Confirm → tạo RoadAsset · **bắt buộc** (GAP-F-AAD-02) |
| Permission | confirm |
| Request | `{ assetTypeCode* · name? · note? }` |
| Behavior | Status must Draft → call `IRoadAssetService.CreateAsync` · Code=`TS-AI-YYYYMMDD-NNNN` · Type=assetTypeCode · Route=routeId · KmFrom from routeLabel/chainage parse or `"0"` · Status=`Draft` · Lat/Lng copy · Note + Source=`ai-asset-detect` · SourceRef=candidate Code · candidate Status=`Confirmed` · AssetCode set · **không** auto-create nếu skipped Confirm |
| Nearby | nếu NearbyRisk=true → vẫn cho Confirm sau user ack (FE modal) · BE không block |
| Response | `{ candidate, asset }` |
| **gates.tz** | yes |
| **gates.xco** | get path on candidate before mutate |

### API-11 POST `/asset-candidates/{id}/dismiss`

| | |
|--|--|
| Purpose | False positive |
| Permission | dismiss |
| Request | `{ note? }` |
| Behavior | Status=`Dismissed` · Draft only |

### Lookups (existing — không tạo mới)

| API | Path | Consumer |
|-----|------|----------|
| L-01 | `GET /api/v1/integration/road-routes/search` | SearchInput routeId |
| L-02 | `GET /api/v1/integration/asset-types/search` | Confirm SearchInput · gồm `ITS_CAMERA` |
| L-03 | `GET /api/v1/asset/road-assets` | Map existing pins |

## 5. BFF vs API · tenant

- BFF: **proxy only** — extend BFF controller cùng route `web-bff/api/v1/ai-vision` forward `asset-candidates/**` · `detect-assets/**`.
- Forward headers: `Authorization` · `X-Company-Id`.
- Tenant: mọi candidate query `CompanyCode` filter; Confirm tạo Asset cùng company.

## 6. Data model / EF

### Entity `AiVisionAssetCandidateEntity` → table `rmms_ai_vision_asset_candidates`

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | string | TenantEntity |
| Code | varchar(64) | `AC-*` UK / tenant |
| AssetClass | varchar(64) | 8 AI class |
| Score | decimal(6,4) | 0–1 |
| Status | varchar(32) | Draft / Confirmed / Dismissed |
| Engine | varchar(16) | P1 / P2 |
| Lat / Lng | decimal(12,8) | Point scalars |
| RouteId | varchar(64) | road-route code/id |
| RouteLabel | varchar(256) | display / chainage |
| SectionId | varchar(64)? | free P1 |
| PatrolTripId | varchar(64)? | free P1 |
| BboxJson | varchar(512)? | `[x1,y1,x2,y2]` scalar text |
| ModelVersion | varchar(128)? | readonly |
| NearbyRisk | bool | |
| NearbyOf | varchar(64)? | peer Code |
| Note | varchar(2000)? | |
| AssetCode | varchar(64)? | set on Confirm |
| AssetId | uuid? | soft link |
| ImageUrl | varchar(1024)? | |
| DetectedAt | timestamptz | |
| IsActive | bool | soft-delete |
| CreatedAt / UpdatedAt | timestamptz | |

### Asset extend (Confirm link)

| Column on `rmms_road_assets` | Type | Notes |
|------------------------------|------|-------|
| Source | varchar(64)? | `ai-asset-detect` |
| SourceRef | varchar(64)? | candidate Code |

Migration: **`Schema_RmmsAiVisionAssetCandidates`** (+ alter RoadAssets Source/SourceRef).

### Seed

| Seed | Notes |
|------|-------|
| Candidates DoD | AC-101…104 — optional Dev seed / reset-seed FE |
| **ITS_CAMERA** | Insert `rmms_asset_types` · name=`Camera ITS / camera giám sát giao thông` · `groupCode=GIAO_THONG` · update `docs/context/seed/asset-type-seed.json` |

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON string inventory | **none** for child lines |
| BboxJson | scalar bbox string OK (parity detections) |
| Child tables | n/a |
| API shape | header scalars only |

## 5b. Implement gates (confirm) — REQUIRED

Autopilot ON · auto-confirm:

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_required** | API-01 from/to · form DetectedAt · API-03/04/05/10 | `/review-timezone-implement` | FE Date → UTC · BE filter UTC bounds |
| XCO | **xco_get_only** | API-03 GET/{id} (+ confirm/dismiss load) | `/implement-view-cross-company` | IgnoreQueryFilters + AllowedCompanyIds |
| SHARE | **share_tenant** | `AiVisionAssetCandidateEntity` | `/implement-shared-table` | tenant-only AI candidates |

AskQuestion (autopilot): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-08-12T14:35:00.000Z`

## 7. Dedupe (chốt)

| Env | Radius | Impl |
|-----|--------|------|
| P1 / demo parity | **25 m** | Haversine · NearbyRisk · **không** auto-create |
| Prod ITS SSOT | **10 m** | `NearbyRadiusMeters=10` · PostGIS `ST_DWithin` **DEFER** (GAP-F-AAD-GEO) |

## 8. DOMAIN-MAP

Thêm hàng: `ai-asset-detect` → **AiVision** / `ai-vision`.

## 9. Risks / DEFER

| ID | Decision |
|----|----------|
| GAP-F-AAD-01 | CLOSED — taxonomy riêng |
| GAP-F-AAD-02 | CLOSED — Confirm bắt buộc P1 |
| GAP-F-AAD-03 | OUT — stub detect · no local mAP |
| GAP-F-AAD-GEO | DEFER PostGIS 10 m |
| GAP-F-AAD-PATROL | DEFER Patrol trip SearchInput |
| GAP-F-AAD-HIST | DEFER history API — toolbar stub |
| JWT Authorize | TODO platform auth (parity siblings) |

## Confirm

`solution_confirm` = **approve** (autopilot · autoApprove=ON · task_fc26e595 · 2026-08-12).

## Handoff → Team lead

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| next | `/agent-team-lead` · roleOnly khi enqueue |
| API ids | API-01…11 · L-01…03 |
| Form↔API | §3 |
| Gates | TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`share_tenant` |
| Migrations | `Schema_RmmsAiVisionAssetCandidates` · RoadAsset Source/SourceRef · seed `ITS_CAMERA` |
| BFF | proxy `asset-candidates` · `detect-assets` |
| MFE | `Linm.Web.RMMS.AiVision` · `route_confirm` đề xuất `/ai-vision/ai-asset-detect` · cập nhật CONTEXT.md §2–§3 |
| Tasks | list pack + ai pack + T-UI-MAP · T-MIG · T-SEED · T-BE-CONFIRM-ASSET · T-CTX · T-PERM · T-BFF |
| SSOT grid | 1× LinPageLayout · LinCatalogDataGrid kéo cột ON · LinCatalogListPagination · slideout footer only |
| beRepo/uiRepo | **chưa tick** — user board trước Dev |
| Cấm | ERP.* · class ổ gà · nested CatalogListShell · footerPagination |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.10.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.3 |
| rulesVersion | 2026.08.11.1 |
| generatedAt | 2026-08-12T14:35:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.08.10.1 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
