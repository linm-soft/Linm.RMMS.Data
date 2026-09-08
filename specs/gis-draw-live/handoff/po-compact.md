# handoff-compact — po → design · gis-draw-live

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `po` |
| feature | `gis-draw-live` |
| packKind | `map` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_2aa163f0` |
| priorTaskId | `task_0b94a0ca` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.25.02` |
| writtenAt | `2026-09-06T20:30:00.000Z` |
| autoApprove | `ON` |
| Grid AC | `N/A` |
| Report AC | `N/A` |
| Leave | `LeaveConfirmModal` · cấm native alert/confirm |
| formPattern | `Full page` (+ inspect panel/popup) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Gis · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` |
| analyReuse | hash skip · **cấm** re-scan demo |

## Decisions

- changeScope=`edit_page` · packKind=`map` confirm
- Keep prior map DoD (OMS/Carto/locate/inspect text) · patch § Delta media+KPI only
- versionGate=`rechecked` (bump from `2026.08.10.3` → SSOT · autoApprove)
- open: KPI path → SA · UNCLEAR=none

## § Delta (mandatory)

| ID | New |
|----|-----|
| GAP-MAP-INSPECT-PHOTO-01 | Gallery 3 tabs · fileIds + resign |
| GAP-MAP-INSPECT-XSECT-01 | Mặt cắt ngang KT |
| GAP-MAP-INSPECT-KPI-01 | Sự cố · tu sửa · TS loại (route) |
| GAP-MAP-INSPECT-FILE-HARD | `web-bff/api/v1/files/*` · cấm invent FilesController / presigned persist |
| GAP-MAP-OMS-KEEP | Giữ R1–R11 |

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photo.*FileIds | Ảnh TS tabs | ImageGallery | files/* |
| xsect.fileIds | Mặt cắt | ImageGallery | empty copy |
| kpi.* | KPI tuyến | Stat / ChipList | SA path |
| inspectRows | Thuộc tính | Text | keep |
| basemap/locate | Map-bar | Chip / Button | keep · cấm Fit |

## Screens / zones (ids only)

- SCR-MAP Full `/gis/tai-san` · SCR-INSPECT panel/popup · SCR-LOCATE popup
- Zones: Map · Props(+PHOTO/XSECT/KPI) · Map-bar · Locate
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`
- peerStdUrl=`/gis` · `/gis/ha-tang`
- devSlash=`/agent-dev-oms-map`

## API / bind (ids only)

- Gis: `api/v1/gis` · BFF `web-bff/api/v1/gis`
- Files: `web-bff/api/v1/files/*`
- KPI: Incident/Maintenance **or** Gis aggregate — SA chốt

## UNCLEAR

- none (File NuGet present) · KPI path deferred SA

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/gis-draw-live-control-hint.md`
- real-data: `specs/_data-analy/features/gis-draw-live-real-data.md`
- po: `specs/gis-draw-live/po/requirement.md`
- prior compact: `specs/gis-draw-live/handoff/data_analy-compact.md`
- design keep: `specs/gis-draw-live/ui/design.md` + prototype

## Handoff next

| Role | Do |
|------|----|
| Design | Prototype PHOTO/XSECT/KPI + reviewUrl · keep shell |
| SA | FileService + KPI path |
| TL/Dev | Tasks GAP NEW only · OMS nếu paint |
| QA | After Dev · e2e queued |

## Cấm

- ERP.* · re-scan demo · implement · e2e/start:std ở PO · invent FilesController · start role khác trong task này

<!-- compact schemaVersion=1 role=po feature=gis-draw-live taskId=task_2aa163f0 -->
