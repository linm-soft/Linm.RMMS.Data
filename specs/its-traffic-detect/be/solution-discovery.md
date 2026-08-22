# Solution discovery — its-traffic-detect

> Status: **confirmed** (`solution_confirm=approve` · Autopilot · autoApprove=ON · task_6dd0470a)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · no-parent-json-field  
> **SA detail:** `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · `form-type-task-pack.md`  
> Requires: `ui/design.md` **confirmed** · design_confirm=`approve`  
> **≠ `ai-vision`:** không class ổ gà / Incident. **≠ `ai-asset-detect`:** taxonomy chỉ `bien_bao`/`coc_tieu` · dedupe **10 m** (peer = 25 m).  
> **Cấm ERP.***

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| packKind | `ai` (packet list → ai Kind B+D+F) |
| featureClass | `ai` |
| status | `confirmed` |
| design_confirm | **approve** (autoApprove=ON · task_6dd0470a) |
| domain_map | **AiVision** · kebab `ai-vision` · slug `its-traffic-detect` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/its` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · `/its-traffic-detect` (+ alias `/ai-vision/its-traffic-detect`) |
| sa_tz_gate | **tz_required** |
| sa_xco_gate | **xco_get_only** |
| sa_shared_table | **share_tenant** (tenant_keep) |
| solution_confirm | **approve** |
| contentHash (data-analy) | `sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526` |
| skillVersion | `2026.08.19.04` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.20.01` |
| rulesVersion | `2026.08.20.8` |
| versionGate | `ok` · Autopilot `recheck_new` từ `qldb-workflow-skill-version.json` |
| updatedAt | `2026-08-21T05:35:00.000Z` |
| taskId | `task_6dd0470a` |

## 0. Path guard

**Only** `Linm.RMMS.WebService` / `Domains/AiVision` (+ Asset confirm create · Integration lookups · CatalogUiSchema).  
**Cấm** `Linm.Web.ERP.WebService` · `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · bare `/api/v1/its/*` without AiVision prefix.

`beRepo` / `uiRepo` = board tick (**đã approved** trên STATUS packet) — SA không auto-tick lại.

Live audit (2026-08-21): entity · migration · controllers · BFF · MFE page/service **đã có**. SA chốt delta Dev phải đóng (GAP dưới).

## 1. Ownership

| Layer | Repo / module |
|-------|----------------|
| MFE | `Linm.Web.RMMS.AiVision` · route `/its-traffic-detect` · alias `/ai-vision/its-traffic-detect` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | **AiVision** / `ai-vision` — DOMAIN-MAP slug `its-traffic-detect` |
| API host | `api/src/RMMS.Service.Api/Domains/AiVision/` |
| Controllers | `AiVisionItsTrafficObjectsController` · `AiVisionItsDetectController` |
| Service | `AiVisionItsTrafficObjectService` / `IAiVisionItsTrafficObjectService` |
| Models/DTO | `api/domains/ai-vision/LINM.RMMS.AiVision.Models/DTOs/ItsTrafficObjectDtos.cs` |
| Persistence | `AiVisionItsTrafficObjectEntity` → `rmms_ai_vision_its_traffic_objects` |
| Migrations | `20260817160000_Schema_RmmsAiVisionItsTrafficObjects` **EXISTS** |
| BFF | `bff/domains/ai-vision/.../AiVisionItsTrafficObjectsBffController` · **proxy only** |
| Confirm → Asset | inject `IRoadAssetService` · `Source=its-traffic-detect` · `CodePrefix=TS-AI-` |
| Lookups | Integration `asset-types` · `road-routes` · Asset `road-assets` (map pins) |
| Catalog UI schema | **MISSING** kind `its-traffic-detect` — Dev **MUST** add Registry + Seed (**GAP-SA-ITS-UI-SCHEMA-01**) |

### Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | AiVision / `ai-vision` · **không** domain mới |
| API prefix | `api/v1/ai-vision/its` |
| BFF | `web-bff/api/v1/ai-vision/its/**` · proxy only = **yes** |
| MFE | `Linm.Web.RMMS.AiVision` · **không** Master catalogs |
| Response | ApiResponse / paged |
| Auth perm | `ai-vision.its/objects.read\|create\|update\|delete\|confirm\|dismiss` (FE `permissions.ts`) |
| Persist | flat `TenantEntity` scalars · **no** parent `*LinesJson` |
| Sibling | `rmms_ai_vision_detections` = mặt đường · `rmms_ai_vision_asset_candidates` = taxonomy rộng — **tách** bảng ITS |
| Out of pack | Real YOLO/GPU · SignalR · live RTSP CCTV · PostGIS `ST_DWithin` · Incident «mất» reconcile · OTA mobile — **DEFER P2** |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · LinCatalogUiSchemaEditorModal |
| HTTP | apiClient SSOT | `/ai-vision/its/objects` |
| BE | Linm.Platform.CommonLib | ApiResponse envelope |
| Persist | `no-parent-json-field` | `BboxJson` = scalar text · **không** child collection blob |
| Catalog | Integration asset-type / road-route | SearchInput — **cấm** free-text khi seed sẵn |
| AI chrome | `ai-chrome-skip` | **Cấm** badge/tag `AI` / P1/P2 trên header / `beforeToolbar` |

## 2. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity | data-import / mock |
|-------------------|-------------|-------------|--------|---------------------|
| S-LIST filters | search · routeId · objectClass · source · status · engine · fromDate · toDate | demo + LOOKUP_STATIC + master | TrafficObject | demo `its-traffic-detect-data.js` |
| S-LIST grid | Design §5.2 columns | tx | TrafficObject | seed ITS-* |
| S-DETECT Create/Edit/Copy | objectClass* · score* · engine* · lat/lng* · routeId* · routeLabel · source* · deviceId · headingDeg · alphaDeg · bboxJson · note · imageUrl · observedAt | tx + LOOKUP_STATIC | TrafficObject | — |
| S-DETECT View | all + code · nearby* · modelVersion · assetCode · updatedAt | tx readOnly | TrafficObject | — |
| S-MOD-CONFIRM | assetTypeCode* (SearchInput) | master asset-type | TrafficObject + RoadAsset | `bien_bao`→`GANTRY_SIGN` · `coc_tieu`→`DELINEATOR` |
| S-MOD-DISMISS | note? | tx | TrafficObject | — |
| S-MAP | pins existing / Draft / nearby / Confirmed | tx + Asset list | TrafficObject + RoadAsset | demo pins TS-QL1-* |
| S-FEED (sim) | Sim Mobile / Dashcam / CCTV | detect stub | TrafficObject | toolbar |

Filter shell: **`LinErpListFilterBar`** (1 hàng wrap · search cụm phải) — **cấm** `filterItems` HOW ở SA.

### controlHint → API (chốt)

| controlHint | Field | API consumer |
|-------------|-------|--------------|
| SearchInput (text) | search | `GET …/objects?search=` |
| SearchInput **road-route** | routeId | `GET …/integration/road-routes/search` |
| Dropdown enum 2 | objectClass | `GET …/objects/init-data` · LOOKUP_STATIC |
| Dropdown source | source | init-data **Sources[]** (**GAP-SA-ITS-INIT-SOURCE-01**) + list query `source=` (**GAP-SA-ITS-FILTER-01**) |
| Dropdown status | status | init-data |
| Dropdown engine | engine | init-data + list query `engine=` (**GAP-SA-ITS-FILTER-01**) |
| Date | fromDate / toDate / observedAt | list filter + form · **TZ required** |
| SearchInput **asset-type** | assetTypeCode (Confirm) | `GET …/integration/asset-types/search` |
| Text number | score · lat · lng · headingDeg · alphaDeg | POST/PUT body scalars |
| Checkbox | nearbyRisk | computed server / persisted flag |
| Text | note · bboxJson · deviceId · routeLabel | scalars |

### 2b. AI class → asset-type (Confirm default)

| objectClass (AI) | `asset-type.code` default | Notes |
|------------------|---------------------------|-------|
| bien_bao | `GANTRY_SIGN` | seed có · user đổi SearchInput |
| coc_tieu | `DELINEATOR` | seed có · user đổi SearchInput |

**Cấm** trộn 10 class mặt đường `ai-vision` · **cấm** 8 class `ai-asset-detect` vào Dropdown ITS.

## 3. FormType pack (REQUIRED)

`packKind=ai` + Kind B+D+F → **list pack + ai pack + map overlay**.

### FormMode ↔ API

| Surface | FormMode | Endpoint |
|---------|----------|----------|
| List search/page/filter | — | API-01 GET `/objects` |
| init-data Dropdowns | — | API-02 GET `/objects/init-data` |
| View / Edit load | view / edit / copy | API-03 GET `/objects/{id}` |
| Create / Copy save | create / copy | API-04 POST `/objects` |
| Edit save | edit | API-05 PUT `/objects/{id}` |
| Soft-delete Draft | — | API-06 DELETE `/objects/{id}` |
| Detect frame (sim×3) | — | API-07 POST `/detect` |
| Nearby check | — | API-08 GET `/objects/nearby` |
| Confirm → Asset | HITL | API-09 POST `/objects/{id}/confirm` |
| Dismiss FP | HITL | API-10 POST `/objects/{id}/dismiss` |
| Map existing pins | — | **reuse** `GET /api/v1/asset/road-assets` (Asset) |
| History | — | DEFER stub toast / `LinCatalogHistoryModal` local |
| road-route SearchInput | — | Integration API road-routes `/search` |
| asset-type SearchInput | — | Integration API asset-types `/search` |
| Catalog config FULL | — | Integration CatalogUiSchema `catalogKind=its-traffic-detect` |

**GAP-SA-FORMTYPE-01:** closed — map trên.

### Task pack ids (handoff TL)

**List:** T-CTX · T-PERM-01 · T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-LEAVE-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-QA-CRUD-01  
**AI:** T-UI-AI-01 · T-UI-AI-FORM-01 · T-BE-AI-01 · T-QA-AI-01  
**Map:** T-UI-MAP-01 (Kind F · `/agent-dev-oms-map`)  
**Config FULL:** T-UI-CONFIG-01 · T-BE-UI-SCHEMA-01 (`its-traffic-detect`)  
**+** T-BFF · T-MIG (verify exists) · T-BE-CONFIRM-ASSET · T-BE-FILTER-SOURCE-ENGINE · T-BE-DETECT

**devSlash:** S-LIST/CRUD=`/agent-dev` · HITL=`/agent-dev-ai-detect` · Map=`/agent-dev-oms-map` · Camera live=`/agent-dev-camera-connect` (P2).

## 4. API catalog

Base: `api/v1/ai-vision/its` · BFF `web-bff/api/v1/ai-vision/its`

### API-01 GET `/objects`

| | |
|--|--|
| Purpose | Kind B list paged + Zone B filters · search **must work** |
| Permission | `ai-vision.its/objects.read` |
| Tenant | `X-Company-Id` · HasQueryFilter CompanyCode |
| Query | `search` · `routeId` · `objectClass` · **`source`** · `status` · **`engine`** · `fromDate` · `toDate` · `page` · `pageSize`∈{50,100,200,500} |
| Live | **GAP:** controller/service **chưa** nhận `source`/`engine` — Dev **MUST** thêm (**GAP-SA-ITS-FILTER-01**) |
| Response | `ApiResponse<TrafficObjectPagedResult>` |
| Form surfaces | S-LIST |
| Field map | search→Code/ObjectClass/Route*/Device/AssetCode/Note/Model/Source · dates→ObservedAt UTC |
| **gates.tz** | **yes** — fromDate start UTC · toDate end-of-day UTC |
| **gates.xco** | n/a (list tenant filter) |
| **gates.shared** | tenant_keep |
| **Context** | `docs/context/features/its-traffic-detect.md` |
| **Demo** | `its-traffic-detect.html` · Zone FILTER/C |
| Migration | `Schema_RmmsAiVisionItsTrafficObjects` |

### API-02 GET `/objects/init-data`

| | |
|--|--|
| Purpose | LOOKUP_STATIC Dropdown objectClass (2) · status · engine · **sources** |
| Permission | read |
| Live | ObjectClasses · Statuses · Engines · NearbyRadiusMeters=10 — **thiếu Sources[]** (**GAP-SA-ITS-INIT-SOURCE-01**) |
| Response | `{ objectClasses[], statuses[], engines[], sources[], nearbyRadiusMeters }` |
| **gates.tz** | n/a |

### API-03 GET `/objects/{id}`

| | |
|--|--|
| Purpose | Form View/Edit/Copy load |
| Permission | read |
| **gates.xco** | **yes** — IgnoreQueryFilters + AllowedCompanyIds trên GET |
| **gates.tz** | yes — ObservedAt/UpdatedAt serialize ISO UTC |
| Errors | 404 · 403 XCO |

### API-04 POST `/objects`

| | |
|--|--|
| Purpose | Create / Copy save Draft |
| Permission | create |
| Request | CreateTrafficObjectRequest (scalars §6) |
| Behavior | Code server-gen `ITS-YYYYMMDD-NNNN` · Status=`Draft` · ApplyNearbyFlags 10 m |
| **gates.tz** | yes — ObservedAt normalize UTC |
| Validation | objectClass ∈ bien_bao\|coc_tieu · score 0–1 · engine · lat/lng · routeId required |

### API-05 PUT `/objects/{id}`

| | |
|--|--|
| Purpose | Edit save · **chỉ** khi Status=`Draft` |
| Permission | update |
| Errors | 422 nếu Confirmed/Dismissed |

### API-06 DELETE `/objects/{id}`

| | |
|--|--|
| Purpose | Soft-delete (`IsActive=false`) · Draft only P1 |
| Permission | delete |

### API-07 POST `/detect`

| | |
|--|--|
| Purpose | Toolbar Sim Mobile/Dashcam/CCTV — **stub** P1 (không YOLO thật) |
| Permission | create |
| Request | DetectTrafficRequest `{ imageUrl? · lat · lng · routeId · routeLabel? · deviceId? · source? · engine? · hasImage? }` |
| Response | 1–N TrafficObjectDto Draft (+ nearby flags) |
| Context | demo sim · GAP-ITS-LIC / GPU OUT hardcode MFE |

### API-08 GET `/objects/nearby`

| | |
|--|--|
| Purpose | Toolbar Nearby · form banner duplicate |
| Query | `lat` · `lng` · `objectClass` · `radiusM?` (default **10**) · `excludeId?` |
| Behavior | Haversine P1 trên objects cùng class + RoadAsset cùng Type map |
| Default radius | **10 m** (`DefaultNearbyRadiusMeters`) · PostGIS **DEFER** |
| **gates.tz** | n/a |

### API-09 POST `/objects/{id}/confirm`

| | |
|--|--|
| Purpose | HITL Confirm → tạo RoadAsset · **bắt buộc** P1 |
| Permission | confirm |
| Request | `{ assetTypeCode* · name? · note? }` |
| Behavior | Status must Draft → `IRoadAssetService.CreateAsync` · Code=`TS-AI-*` · Type=assetTypeCode · Route=routeId · Status=`Draft` · Lat/Lng copy · Source=`its-traffic-detect` · SourceRef=object Code · object Status=`Confirmed` · AssetCode set · soft-fallback code nếu Asset create fail |
| Nearby | NearbyRisk=true → vẫn Confirm sau user ack (FE) · BE không block |
| Response | `{ candidate, asset }` |
| **gates.tz** | yes |
| **gates.xco** | get path on object before mutate |

### API-10 POST `/objects/{id}/dismiss`

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
| L-02 | `GET /api/v1/integration/asset-types/search` | Confirm SearchInput |
| L-03 | `GET /api/v1/asset/road-assets` | Map existing pins |
| L-04 | CatalogUiSchema `its-traffic-detect` | Config FULL (**new seed**) |

## 5. BFF vs API · tenant

- BFF: **proxy only** — `AiVisionItsTrafficObjectsBffController` forward `objects/**` · `detect`.
- Forward headers: `Authorization` · `X-Company-Id`.
- Tenant: mọi object query `CompanyCode` filter; Confirm tạo Asset cùng company.

## 6. Data model / EF

### Entity `AiVisionItsTrafficObjectEntity` → table `rmms_ai_vision_its_traffic_objects`

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | string | TenantEntity |
| Code | varchar(64) | `ITS-*` UK / tenant |
| ObjectClass | varchar(64) | bien_bao / coc_tieu |
| Score | decimal(6,4) | 0–1 |
| Status | varchar(32) | Draft / Confirmed / Dismissed |
| Engine | varchar(16) | P1 / P2 |
| Lat / Lng | decimal(12,8) | Point scalars |
| RouteId | varchar(64) | road-route code/id |
| RouteLabel | varchar(256) | display / chainage |
| Source | varchar(32) | mobile / dashcam / cctv |
| DeviceId | varchar(64)? | |
| HeadingDeg / AlphaDeg | decimal(8,2)? | |
| BboxJson | varchar(512)? | `[x1,y1,x2,y2]` scalar text |
| ModelVersion | varchar(128)? | readonly |
| NearbyRisk | bool | |
| NearbyOf | varchar(64)? | peer Code |
| Note | varchar(2000)? | |
| AssetCode | varchar(64)? | set on Confirm |
| AssetId | uuid? | soft link |
| ImageUrl | varchar(1024)? | |
| ObservedAt | timestamptz | |
| IsActive | bool | soft-delete |
| CreatedAt / UpdatedAt | timestamptz | |

### Asset Confirm link

| Column on `rmms_road_assets` | Notes |
|--------------------------------|-------|
| Source | `its-traffic-detect` |
| SourceRef | object Code |

Migration table: **EXISTS** `20260817160000_Schema_RmmsAiVisionItsTrafficObjects` — Dev verify apply · **không** recreate.

### CatalogUiSchema seed (REQUIRED delta)

| catalogKind | Notes |
|-------------|-------|
| `its-traffic-detect` | Registry + Seed columns Design §5.2 · title «Cấu hình hiển thị danh mục» · **cấm** `configHint` / `LinListTableConfigModal` |

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON string inventory | **none** for child lines |
| BboxJson | scalar bbox string OK |
| Child tables | n/a |
| API shape | header scalars only |

## 5b. Implement gates (confirm) — REQUIRED

Autopilot ON · auto-confirm:

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_required** | API-01 from/to · form ObservedAt · API-03/04/05/09 | `/review-timezone-implement` | FE Date → UTC · BE filter UTC bounds |
| XCO | **xco_get_only** | API-03 GET/{id} (+ confirm/dismiss load) | `/implement-view-cross-company` | IgnoreQueryFilters + AllowedCompanyIds |
| SHARE | **share_tenant** | `AiVisionItsTrafficObjectEntity` | `/implement-shared-table` | tenant-only ITS objects |

AskQuestion (autopilot): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-08-21T05:35:00.000Z`

## 7. Dedupe (chốt)

| Env | Radius | Impl |
|-----|--------|------|
| P1 / demo parity | **10 m** | Haversine · NearbyRisk · **không** auto-create |
| Prod | **10 m** | PostGIS `ST_DWithin` **DEFER** (GAP-ITS-GEO) |

## 8. DOMAIN-MAP

Verified: `its-traffic-detect` → **AiVision** / `ai-vision` (`docs/DOMAIN-MAP.md`).

## 9. Risks / DEFER / GAP (SA → TL/Dev)

| ID | Decision |
|----|----------|
| GAP-SA-ITS-FILTER-01 | **OPEN** — add list query `source` + `engine` (BE + MFE endpoint params) |
| GAP-SA-ITS-INIT-SOURCE-01 | **OPEN** — init-data return `sources[]` mobile/dashcam/cctv |
| GAP-SA-ITS-UI-SCHEMA-01 | **OPEN** — CatalogUiSchemaRegistry + Seed `its-traffic-detect` |
| GAP-ITS-03 | **CLOSED** live — entity/migration/controllers/BFF exist |
| GAP-ITS-GEO | DEFER PostGIS |
| GAP-ITS-GPU / SignalR / live CCTV | DEFER P2 |
| GAP-ITS-MISS-01 | DEFER Incident reconcile «mất» |
| GAP-AI-DETECT-CHROME | CLOSED design — **cấm** AI badge header |
| JWT Authorize Attribute | TODO platform auth (parity siblings) |

## Confirm

`solution_confirm` = **approve** (Autopilot · autoApprove=ON · task_6dd0470a · 2026-08-21).

## Handoff → Team lead

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| next | `/agent-team-lead` · roleOnly khi enqueue |
| API ids | API-01…10 · L-01…04 |
| Form↔API | §3 |
| Gates | TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`share_tenant` |
| Migrations | verify `Schema_RmmsAiVisionItsTrafficObjects` · **+** CatalogUiSchema seed |
| BFF | proxy `its/objects` · `its/detect` (exists) |
| MFE | `Linm.Web.RMMS.AiVision` · `mfeStdRoute=/its-traffic-detect` · `mfeStdUrl=http://localhost:9303/its-traffic-detect` |
| Tasks | list+ai+map packs · T-UI-CONFIG · T-BE-UI-SCHEMA · T-BE-FILTER-SOURCE-ENGINE · T-CTX · T-PERM · T-BFF · T-UI-LEAVE · T-UI-LKP/FIELD/PROD/UX |
| SSOT grid | 1× LinPageLayout · LinCatalogDataGrid kéo cột ON · LinCatalogListPagination · slideout footer only · Config FULL |
| beRepo/uiRepo | **approved** trên STATUS |
| Cấm | ERP.* · class ổ gà · nested CatalogListShell · footerPagination · configHint · AI chrome header |

## Version meta (REQUIRED)

| Field | Value |
|-------|--------|
| skillId | agent-sa |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.01 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | 2026-08-21T05:35:00.000Z |
| versionGate | ok |
| contentHash | sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526 |

---
<!-- Version meta: skillVersion=2026.08.19.04 · schemaVersion=1 · workflowVersion=2026.08.20.01 · versionGate=ok -->
