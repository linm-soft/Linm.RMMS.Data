# Team lead — tasks — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `map` |
| formType | `map` |
| formPattern | `Full page` (+ inspect panel/popup) |
| mfeStdRoute | `/gis/tai-san` |
| peerStdRoute | `/gis/draw` · `/gis` · `/gis/ha-tang` |
| mfeStdUrl | `http://localhost:9302/gis/draw` (Dev sets live) |
| route_confirm | `/gis/tai-san` · autopilot keep · `/gis/live` redirect giữ `?type=` |
| Leave | `LeaveConfirmModal` · **cấm** `window.alert`/`confirm` |
| Grid/Report AC | `N/A` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.02` |
| versionGate | `rechecked` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| taskId | `task_efbc1d08` |
| priorTaskId | `task_2e873d37` |
| updatedAt | `2026-09-07T03:50:00.000Z` |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · route `/gis/tai-san` |
| BE API/BFF | `D:/AI-QLBD/Linm.RMMS.WebService` · domain `Gis` · BFF `web-bff/api/v1/gis` |
| Files | FileService.Bff **reuse** · `web-bff/api/v1/files/*` · **cấm** invent FilesController / persist presigned |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` |
| Context | `Linm.RMMS.Data/docs/context/features/gis-draw-live.md` |
| Design | `specs/gis-draw-live/ui/design.md` · reviewUrl prototype |
| Solution | `specs/gis-draw-live/be/solution-discovery.md` |

**Cấm:** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP · Step 4b / migration (SA: none).

## Scope (edit_page · GAP NEW only)

**KEEP (shipped — cấm regress):** Kind F shell · OMS R1–R11 · clip Carto · overlay Tuyến · locate popup · inspect text rows · purpose=live basemap/layers/geojson · map-bar Tiêu chuẩn\|Vệ tinh · **cấm** Fit trên locate · **cấm** Lưu bản vẽ.

**NEW P1 (Dev MUST):**

| GAP | Do |
|-----|----|
| GAP-MAP-INSPECT-FILE-HARD | Wire resign qua `web-bff/api/v1/files/*` · **cấm** invent FilesController |
| GAP-MAP-INSPECT-PHOTO-01 | Z-PHOTO · ImageGallery 3 tabs (tài sản / tuần kiểm / tuần đường) · geojson `photo.*FileIds` |
| GAP-MAP-INSPECT-XSECT-01 | Z-XSECT · gallery `xsect.fileIds` · empty copy OK |
| GAP-MAP-INSPECT-KPI-01 | Z-KPI · soft toast on fail · paths dưới |
| GAP-MAP-OMS-KEEP | Re-run `/agent-dev-oms-map` **chỉ nếu** đụng paint/basemap |

### KPI path (LOCKED · SA)

| uiField | Path |
|---------|------|
| kpi.incidents | `GET …/incident/incidents?routeName=&page=1&pageSize=1` → `TotalCount` (KEEP) |
| kpi.repairs | `GET …/maintenance/work-orders?routeName=` → `TotalCount` (**NEW** query) |
| kpi.assetByType | `GET …/gis/summary-by-type?route=` (**NEW** query) |

**Cấm** Gis fake KPI tables · **cấm** `maintenance/summary` global làm route KPI.

## Screens / zones

- SCR-MAP · SCR-INSPECT · SCR-LOCATE
- Zones: Z-SIDE-LAYER · Z-MAP · Z-MAP-BAR · Z-PROPS · **Z-PHOTO** · **Z-XSECT** · **Z-KPI** · Z-LOCATE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`

## FormMode ↔ API

| Mode | Op |
|------|-----|
| map load | GET basemap/layers/geojson `purpose=live` KEEP |
| inspect | GET props + files resign + 3 KPI GETs |
| drawing save | **n/a** · cấm Lưu bản vẽ |

## ssot.reuse

| id | Reuse |
|----|-------|
| map | `/agent-dev-oms-map` R1–R11 · `/map-inspect-popup` · clip BFF · **cấm** OSM DTO |
| files | platform FileService.Bff resign only |
| leave | `/implement-show-leave-confirm` · `LeaveConfirmModal` |
| ux | `dev-ui-ux-constitution` · `/dev-web-responsive` · `/dev-ui-review` |
| kpi | cross-domain READ only · query-only · migration **none** |

## implement.wire / state

| Surface | Wire | State |
|---------|------|-------|
| Z-PHOTO / Z-XSECT | geojson props fileIds → resign `files/*` → ImageGallery | loading / empty / error toast |
| Z-KPI | parallel 3 GETs by `route`/`routeName` | soft fail per Stat · không block inspect |
| Leave | dirty inspect media/KPI bind | `LeaveConfirmModal` only |

## Tasks — KEEP (done)

| id | status | notes |
|----|--------|-------|
| T-CTX | done | |
| T-PERM | done | JWT TODO |
| T-BE-01 | done | purpose=live basemap |
| T-BE-02 | done | BFF query forward |
| T-UI-MAP | done | Kind F · OMS (prior id) |
| T-FE-CLIENT | done | BFF + fallback |
| T-QA-01 | done | prior scenarios |
| T-RV-01 | done | findings |

## Tasks — NEW (form-type map pack §2b + delta)

| id | page | layer | role | deps | **devSlash** / skills | DoD |
|----|------|-------|------|------|----------------------|-----|
| T-BE-GIS-01 | map | api | dev | — | new-endpoint (query-only) | `summary-by-type?route=` + `work-orders?routeName=` · **cấm** migration/Step4b · **cấm** ERP.* · build PASS (Dev role) |
| T-BE-FILE-01 | map | bff | dev | — | FileService.Bff reuse | Confirm `web-bff/api/v1/files/*` resign proxy · **cấm** invent FilesController / persist presigned |
| T-UI-MAP-01 | `/gis/tai-san` | ui-map | dev | T-BE-GIS-01 | **`/agent-dev-oms-map`** · `/map-inspect-popup` | KEEP shell · OMS R1–R11 **chỉ nếu paint** · **cấm** Fit locate · popup-only click · peer `/gis` `/gis/ha-tang` |
| T-UI-MAP-FORM-01 | SCR-INSPECT | ui | dev | T-BE-GIS-01,T-BE-FILE-01 | **`/agent-dev-oms-map`** · `/implement-show-leave-confirm` · `/map-inspect-popup` | Z-PHOTO 3 tabs + Z-XSECT + Z-KPI bind · inspect rows KEEP · dirty → **LeaveConfirmModal** · **cấm** Lưu bản vẽ / native alert · **GAP-DEV-LEAVE-01** |
| T-PERM-01 | gis-draw-live | perm | dev | — | — | Map/inspect/files/KPI read codes · local-mode OK · JWT TODO |
| T-UI-UX-01 | map | ui | dev | T-UI-MAP-FORM-01 | `dev-ui-ux-constitution` · `/dev-web-responsive` · `/dev-ui-review` | P1–7 · 1280/768/375 · **GAP-DEV-UX-01** |
| T-QA-MAP-01 | gis-draw-live | qa | qa | T-UI-MAP-01,T-UI-MAP-FORM-01,T-BE-GIS-01 | `/agent-qa` · e2e queued | PHOTO/XSECT/KPI + empty + soft toast · R1–R11 smoke · Leave Modal · **cấm** start:std ở TL |

## Deps order (NEW)

T-BE-GIS-01 ∥ T-BE-FILE-01 → T-UI-MAP-01 → T-UI-MAP-FORM-01 → T-UI-UX-01 → T-PERM-01 → (Dev verify) → T-QA-MAP-01

## retry.ssot_rereview

N/A — không `retryFrom` · edit_page GAP NEW only. Dev: **cấm** regress KEEP OMS/Carto/locate.

## Handoff next

| Role | Do |
|------|----|
| Dev | Implement NEW T-* · slash OMS · **cấm** ERP.* |
| QA | After Dev · e2e queued `e2eQa=ON` |
| Review | After QA |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.25.02 · versionGate=rechecked · contentHash=sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02 · taskId=task_efbc1d08 · route_confirm=/gis/tai-san · packKind=map -->
