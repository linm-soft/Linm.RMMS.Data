# SA — solution-discovery — gis-draw-live (edit_page · inspect PHOTO/XSECT/KPI)

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `map` |
| Feature Kind | **F** Leaflet OMS · Full page + inspect panel/popup |
| domain | **Gis** · kebab `gis` (DOMAIN-MAP slug `gis-draw-live`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · route **`/gis/tai-san`** · alias `/gis/draw` · `mfeStdUrl=http://localhost:9302/gis/draw` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_2e873d37`) |
| prior · design | `confirmed` · `handoff/design-compact.md` · `task_1e588399` |
| prior · po | `confirmed` · `handoff/po-compact.md` · `task_2aa163f0` |
| prior · data_analy | `confirmed` · `handoff/data_analy-compact.md` · contentHash `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| prior · sa | map shell **KEEP** (purpose=live · basemap/layers/geojson/drawings) — **cấm** re-open PostGIS / Fit / OMS R1–R11 |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role SA |
| versionGate | `rechecked` (`version_mismatch_action=recheck_new` · bump `2026.08.10.3` → SSOT) |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.02` |
| taskId | `task_2e873d37` |
| updatedAt | `2026-09-06T21:05:00.000Z` |

> SA **chốt** FileService.Bff reuse + KPI path (Incident/Maintenance **read** + Gis `summary-by-type`). Design **chốt** Z-PHOTO/Z-XSECT/Z-KPI.
> **Cấm** ERP.* · invent FilesController · persist presigned · invent Gis-only fake KPI tables · Write MFE/native · re-scan demo · Step 4b / migration / e2e ở role SA.

**SUPERSEDED pack:** prior SA map shell (basemap live · layers · drawings store) — **KEEP**. **This pack NEW:** inspect media resign + route KPI binds.

---

## § Delta P1 (ONLY these for TL/Dev)

| ID | Live (cite) | Required | Layer | Dev slash |
|----|-------------|----------|-------|-----------|
| **GAP-MAP-INSPECT-FILE-HARD** | BFF host **đã** `AddLinmFileServiceBff` (`RMMS.Service.Bff/Program.cs`) | Reuse **`web-bff/api/v1/files/*`** · resign view · **cấm** invent FilesController / `/implement-file-service` / persist presigned / ERP.* | BFF platform | `/integrate-file-upload-web` (gallery resign only) |
| **GAP-MAP-INSPECT-PHOTO-01** | Inspect text only | ImageGallery 3 tabs · bind `photo.assetFileIds` / `photo.patrolCheckFileIds` / `photo.roadPatrolFileIds` từ GeoJSON props (extend props nếu thiếu) · resign `files/{id}` | API Gis geojson props + FE | `/agent-dev` + `/map-inspect-popup` |
| **GAP-MAP-INSPECT-XSECT-01** | No xsect | ImageGallery `xsect.fileIds` · empty copy khi [] | same | `/agent-dev` |
| **GAP-MAP-INSPECT-KPI-01** | No corridor KPI | Bind 3 KPI qua **cross-domain READ** (bảng dưới) · soft toast khi 0/fail | FE + small API query extend | `/agent-dev` |
| **GAP-MAP-OMS-KEEP** | OMS/Carto/locate ship | **Giữ** R1–R11 · **cấm** Fit button · **cấm** Cesium trên `/gis/tai-san` | FE | `/agent-dev-oms-map` **chỉ nếu** đụng paint |

**Out / KEEP closed:** PostGIS persist · multi-user lock · commit → Asset · JWT platform TODO · drawings CRUD contract · purpose=live basemap/layers.

### KPI path (LOCKED · AskQuestion autoApprove)

| uiField | controlHint | Path (BFF → API) | Cite | Note |
|---------|-------------|------------------|------|------|
| `kpi.incidents` | Stat | `GET web-bff/api/v1/incident/incidents?routeName={route}&page=1&pageSize=1` → `TotalCount` | `IncidentsController` · `IncidentPagedResult.TotalCount` · query `routeName` **đã có** | **READ** Incident · **cấm** invent Gis incident table |
| `kpi.repairs` | Stat | `GET web-bff/api/v1/maintenance/work-orders?routeName={route}&page=1&pageSize=1` → `TotalCount` | `WorkOrdersController` — **NEW** optional `routeName` filter + paged total (Maintenance domain) | **cấm** dùng global `maintenance/summary` làm route KPI |
| `kpi.assetByType` | ChipList | `GET web-bff/api/v1/gis/summary-by-type?route={route}` | `GisMapController` `summary-by-type` — **NEW** optional `route` filter trên `GetSummaryByTypeAsync` (RoadAssets by route) | Keep items `Type/Count` |

AskQuestion (autoApprove=ON): `solution_confirm=approve` · `sa_kpi_path=cross_domain_read` · `sa_files_gate=file_service_bff_reuse` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=tenant_keep` · `2026-09-06T21:05:00.000Z`.

---

## Architecture (repo SSOT)

| Layer | Path |
|-------|------|
| API Gis | `api/src/RMMS.Service.Api/Domains/Gis/` · `GisMapController` `api/v1/gis` |
| API Incident (read) | `Domains/Incident/` · `api/v1/incident/incidents` |
| API Maintenance (read+query extend) | `Domains/Maintenance/` · `api/v1/maintenance/work-orders` |
| Models | `api/domains/gis|incident|maintenance/…Models` |
| BFF Gis | `bff/domains/gis/…/GisBffController` · `web-bff/api/v1/gis/**` proxy |
| BFF Files | NuGet **`Linm.Platform.FileService.Bff`** · host `bff/src/RMMS.Service.Bff` · **`web-bff/api/v1/files/*`** |
| DOMAIN-MAP | slug `gis-draw-live` → **Gis** |
| MFE | `Linm.Web.RMMS.Gis` · `GisDrawLivePage` · `GisAssetInspectPanel` |

**BFF vs API:** business + query extend trên API domains; BFF **proxy-only** (forward `route` / `routeName` / `purpose`). Files = platform BFF only.

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

## § SSOT / anti-duplicate

| Concern | Decision |
|---------|----------|
| KPI counts | Incident/Maintenance/Gis **existing** endpoints — không fake table |
| Media | FileService.Bff only — peer Incident/Patrol media pattern |
| Map shell | Reuse purpose=live APIs — không endpoint drawings mới |
| OMS | `/agent-dev-oms-map` R1–R11 KEEP |

---

## FormType pack (`packKind=map`)

| Surface | Pattern | Notes |
|---------|---------|-------|
| SCR-MAP | Full page Kind F | OMS clip · overlay Tuyến · map-bar |
| SCR-INSPECT | Panel/popup | Props text KEEP + Z-PHOTO + Z-XSECT + Z-KPI |
| SCR-LOCATE | Popup | `buildMyLocationPopupHtml` KEEP |
| Grid / Report | N/A | — |
| Leave | `LeaveConfirmModal` | dirty inspect/media only · cấm native alert |

### FormMode ↔ API (delta + keep)

| FormMode / surface | Op | Path | Body/Query |
|--------------------|----|------|------------|
| map load (KEEP) | GET | `/web-bff/api/v1/gis/basemap-config?purpose=live` | — |
| map load (KEEP) | GET | `/web-bff/api/v1/gis/layers?purpose=live` | — |
| map inventory (KEEP) | GET | `/web-bff/api/v1/gis/geojson/{layer}?bbox=&route=` | — |
| inspect select | GET | geojson feature props (+ extend fileId arrays) | read-only |
| inspect PHOTO/XSECT | GET | `/web-bff/api/v1/files/{id}` (resign) | **cấm** persist URL |
| inspect KPI incidents | GET | `/web-bff/api/v1/incident/incidents?routeName=&page=1&pageSize=1` | use `TotalCount` |
| inspect KPI repairs | GET | `/web-bff/api/v1/maintenance/work-orders?routeName=&page=1&pageSize=1` | use `TotalCount` |
| inspect KPI assetByType | GET | `/web-bff/api/v1/gis/summary-by-type?route=` | ChipList items |
| create/edit drawing | — | **n/a** trên page này | **cấm** Lưu bản vẽ |
| list filter bar | — | N/A map | — |

---

## Form data inventory (controlHint → API)

| Screen | uiField | controlHint | Source | Persist | Notes |
|--------|---------|-------------|--------|---------|-------|
| SCR-INSPECT | inspect.* | Text | geojson props | — | KEEP |
| SCR-INSPECT | photo.*FileIds | ImageGallery | geojson/asset/patrol **fileIds[]** | source entities only | resign files/* |
| SCR-INSPECT | xsect.fileIds | ImageGallery | same | — | empty OK |
| SCR-INSPECT | kpi.incidents | Stat | Incident list TotalCount | — | derived |
| SCR-INSPECT | kpi.repairs | Stat | WorkOrders TotalCount | — | derived |
| SCR-INSPECT | kpi.assetByType | ChipList | Gis summary-by-type | — | derived |
| SCR-MAP | basemap/locate | Chip/Button | basemap-config · geolocation | — | KEEP · cấm Fit |

**Persist gate:** không parent `*Json` blob cho gallery/KPI · fileIds = `string[]` / CSV trên entity nguồn (Asset/Patrol) — **không** migration Gis P1.
**Migration:** **none** ở Gis · Maintenance `routeName` = query filter only · **cấm** Step 4b ở SA.

---

## API catalog

### API-01 (KEEP): GET `/api/v1/gis/basemap-config?purpose=live`

| | |
|--|--|
| Purpose | Basemap live (OSM/Carto clip + sat) |
| Permission | gis.map.read |
| Tenant | X-Company-Id |
| Request | `purpose=live` |
| Response | `GisBasemapConfigDto` |
| Form surfaces | SCR-MAP |
| Migration | none |

### API-02 (KEEP): GET `/api/v1/gis/layers?purpose=live`

| | |
|--|--|
| Purpose | Layer catalog live |
| Response | `GisLayerDto[]` |
| Form surfaces | Z-SIDE-LAYER |
| Migration | none |

### API-03 (KEEP): GET `/api/v1/gis/geojson/{layer}`

| | |
|--|--|
| Purpose | Inventory GeoJSON · inspect pick |
| Request | `bbox` · `route` · … |
| Response | FeatureCollection — **extend properties**: `assetFileIds` · `patrolCheckFileIds` · `roadPatrolFileIds` · `xsectFileIds` (`string[]`, empty ok) |
| Field map | `photo.*` / `xsect.fileIds` → props → resign |
| Form surfaces | SCR-MAP · SCR-INSPECT |
| Migration | none (props from existing columns / related ids) |

### API-04 (EXTEND): GET `/api/v1/gis/summary-by-type`

| | |
|--|--|
| Purpose | TS theo loại (route KPI) |
| Request | **NEW** optional `route` (string) — filter RoadAssets |
| Response | `GisTypeSummaryResult` (`Items[].Type/Count` · `TotalCount`) |
| Field map | `kpi.assetByType` → ChipList |
| Form surfaces | Z-KPI |
| Migration | none |
| BFF | forward `route` |

### API-05 (READ · Incident KEEP path): GET `/api/v1/incident/incidents`

| | |
|--|--|
| Purpose | Count sự cố theo tuyến |
| Request | `routeName` · `page=1` · `pageSize=1` |
| Response | `IncidentPagedResult.TotalCount` |
| Field map | `kpi.incidents` → Stat |
| Form surfaces | Z-KPI |
| Migration | none |
| Domain | **Incident** (cross-read · không đổi ownership feature) |

### API-06 (EXTEND · Maintenance): GET `/api/v1/maintenance/work-orders`

| | |
|--|--|
| Purpose | Count tu sửa theo tuyến |
| Request | **NEW** optional `routeName` (+ existing page/pageSize) · return paged `TotalCount` |
| Response | paged result (peer Incident shape) |
| Field map | `kpi.repairs` → Stat |
| Form surfaces | Z-KPI |
| Migration | none (query) |
| Domain | **Maintenance** |
| Cấm | dùng `GET /api/v1/maintenance/summary` (global stub) làm route KPI |

### API-07 (PLATFORM · Files KEEP): `web-bff/api/v1/files/*`

| | |
|--|--|
| Purpose | Upload/view resign |
| Package | `Linm.Platform.FileService.Bff` · **đã register** host |
| Field map | ImageGallery fileIds → resign URL (session only) |
| Form surfaces | Z-PHOTO · Z-XSECT |
| Migration | none |
| Cấm | invent FilesController · persist presigned · ERP.* |

### API-08 (KEEP): drawings / clusters / heatmap / health

Không đổi contract P1 · page **không** Lưu bản vẽ.

---

## Implement gates

| Gate | Value | Slash / note |
|------|-------|--------------|
| `sa_tz_gate` | **tz_na** | Inspect/KPI GET · no datetime write delta |
| `sa_xco_gate` | **xco_get_only** | Cross-company view via tenant header · GET only |
| `sa_shared_table` | **tenant_keep** | RoadAssets / incidents / work-orders theo company |
| `sa_files_gate` | **file_service_bff_reuse** | `/integrate-file-upload-web` · **cấm** `/implement-file-service` |

## data-import

N/A map inspect · đơn vị default RMMS CUC 2/II.1/QL.1 · không Excel P1.

## OMS (packKind=map)

MapGateSlash = `/agent-dev-oms-map` · R1–R11 KEEP · locate `/map-inspect-popup` · **cấm** Fit · maxZoom 16 · sparse GPS = nét đứt (prior).

## Gaps / DEFER

| ID | Note |
|----|------|
| GAP-F-GDL-01 | PostGIS persist — DEFER |
| GAP-F-GDL-02 | Multi-user lock — DEFER |
| GAP-F-GDL-03 | Commit drawing → Asset — DEFER |
| GAP-F-GDL-04 | JWT Authorize — platform TODO |
| GAP-MAP-INSPECT-* | **P1 NEW** — bảng § Delta |

## Handoff → Team-lead

| Field | Value |
|-------|-------|
| phase_from / phase_to | sa → team_lead |
| STATUS | solution **confirmed** |
| APIs | API-03 props extend · API-04 `?route=` · API-05 read · API-06 `routeName` · API-07 files |
| FormMode↔API | inspect view + KPI reads · **no** drawing save |
| TZ/XCO/SHARE | tz_na · xco_get_only · tenant_keep |
| entity/migration | **none** Gis · query-only Maintenance |
| BFF vs API | proxy-only + FileService platform |
| Open questions | **none** |
| Next | TL tasks **chỉ** GAP NEW · Dev OMS nếu paint · QA e2e queued |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.25.02 · versionGate=rechecked · contentHash=sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02 · taskId=task_2e873d37 · solution_confirm=approve -->
