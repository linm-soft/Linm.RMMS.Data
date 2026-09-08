# handoff-compact — sa → team-lead · gis-draw-live

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `sa` |
| feature | `gis-draw-live` |
| packKind | `map` |
| changeScope | `edit_page` |
| status | `done` |
| solution_confirm | `approve` |
| taskId | `task_2e873d37` |
| priorTaskId | `task_1e588399` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.25.02` |
| writtenAt | `2026-09-06T21:05:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Gis · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` |
| formPattern | `Full page` (+ inspect panel/popup) |
| Leave | `LeaveConfirmModal` |
| Grid/Report AC | `N/A` |

## Artifacts (full)

| Kind | Path |
|------|------|
| solution | `specs/gis-draw-live/be/solution-discovery.md` |
| prior compact | `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md` |
| keep | purpose=live basemap/layers/geojson · OMS R1–R11 · locate |

## § Delta (NEW P1 · TL/Dev ONLY)

| ID | SA chốt | Layer |
|----|---------|-------|
| GAP-MAP-INSPECT-FILE-HARD | FileService.Bff **đã** register · `web-bff/api/v1/files/*` resign · cấm invent FilesController / persist presigned | BFF |
| GAP-MAP-INSPECT-PHOTO-01 | ImageGallery 3 tabs · geojson props fileIds + resign | API+FE |
| GAP-MAP-INSPECT-XSECT-01 | `xsect.fileIds` gallery · empty OK | API+FE |
| GAP-MAP-INSPECT-KPI-01 | cross-domain READ (bảng dưới) · soft toast | FE+API query |
| GAP-MAP-OMS-KEEP | R1–R11 · cấm Fit · OMS slash chỉ nếu paint | FE |

## KPI path (LOCKED)

| uiField | Path |
|---------|------|
| kpi.incidents | `GET …/incident/incidents?routeName=&page=1&pageSize=1` → `TotalCount` (KEEP) |
| kpi.repairs | `GET …/maintenance/work-orders?routeName=` → `TotalCount` (**NEW** query) |
| kpi.assetByType | `GET …/gis/summary-by-type?route=` (**NEW** query) |

**Cấm** Gis fake KPI tables · **cấm** `maintenance/summary` global làm route KPI.

## FormMode ↔ API

| Mode | Op |
|------|-----|
| map load | GET basemap/layers/geojson `purpose=live` KEEP |
| inspect | GET props + files resign + 3 KPI GETs |
| drawing save | **n/a** · cấm Lưu bản vẽ |

## Entity / migration / gates

| Field | Value |
|-------|-------|
| Entity | **none** new Gis · fileIds trên source (Asset/Patrol props) |
| Migration | **none** · query-only · **cấm** Step 4b ở SA |
| BFF vs API | proxy-only + platform files |
| TZ/XCO/SHARE | `tz_na` · `xco_get_only` · `tenant_keep` |
| Files gate | `file_service_bff_reuse` |

## Screens / zones (ids only)

- SCR-MAP / SCR-INSPECT / SCR-LOCATE
- Z-PHOTO · Z-XSECT · Z-KPI (+ shell zones KEEP)
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`

## UNCLEAR

- none

## Full paths (Read only if needed)

- solution: `specs/gis-draw-live/be/solution-discovery.md`
- design: `specs/gis-draw-live/ui/design.md`
- real-data: `specs/_data-analy/features/gis-draw-live-real-data.md`
- DOMAIN-MAP: `Linm.RMMS.WebService/docs/DOMAIN-MAP.md`

## Handoff next

| Role | Do |
|------|----|
| TL | Tasks **chỉ** GAP NEW · OMS nếu paint |
| Dev | geojson fileId props · summary `?route=` · work-orders `routeName` · gallery resign · KPI bind |
| QA | After Dev · e2e queued |

## Cấm

- ERP.* · invent FilesController · persist presigned · re-open PostGIS · e2e/start:std/Step4b ở SA · start role khác trong task này

<!-- compact schemaVersion=1 role=sa feature=gis-draw-live taskId=task_2e873d37 -->
