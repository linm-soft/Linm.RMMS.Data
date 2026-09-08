# handoff-compact — design → sa · gis-draw-live

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `design` |
| feature | `gis-draw-live` |
| packKind | `map` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_1e588399` |
| priorTaskId | `task_2aa163f0` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.25.02` |
| writtenAt | `2026-09-06T20:45:00.000Z` |
| autoApprove | `ON` |
| design_confirm | `approve` |
| formPattern | `Full page` (+ inspect panel/popup) |
| real_view_parity | `v1` |
| Grid AC | `N/A` |
| Report AC | `N/A` |
| Leave | `LeaveConfirmModal` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Gis · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` |
| analyReuse | hash skip · **cấm** re-scan demo |

## Decisions

- Keep Kind F shell (OMS/Carto/locate/props text) · patch PHOTO/XSECT/KPI only
- Control = controlHint (ImageGallery / Stat / ChipList)
- FileService.Bff `web-bff/api/v1/files/*` · cấm invent FilesController / persist presigned
- KPI path → SA · UNCLEAR=none
- versionGate=`rechecked` → SSOT

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photo.*FileIds | Ảnh TS 3 tabs | ImageGallery | files/* resign |
| xsect.fileIds | Mặt cắt | ImageGallery | empty copy |
| kpi.* | KPI tuyến | Stat / ChipList | SA path |
| inspectRows | Thuộc tính | Text | keep |
| basemap/locate | Map-bar | Chip / Button | keep · cấm Fit |

## Screens / zones (ids only)

- SCR-MAP / SCR-INSPECT / SCR-LOCATE
- Zones: Z-SIDE-LAYER · Z-MAP · Z-MAP-BAR · Z-PROPS · **Z-PHOTO** · **Z-XSECT** · **Z-KPI** · Z-LOCATE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`
- peerStdUrl=`http://localhost:9302/gis/draw` · `/gis` · `/gis/ha-tang`
- real_view_parity=`v1`
- devSlash=`/agent-dev-oms-map`

## API / bind (ids only)

- Gis: `api/v1/gis` · BFF `web-bff/api/v1/gis`
- Files: `web-bff/api/v1/files/*`
- KPI: Incident/Maintenance **or** Gis aggregate — SA chốt

## UNCLEAR

- none · KPI path deferred SA

## Full paths (Read only if needed)

- design: `specs/gis-draw-live/ui/design.md`
- prototype: `specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`
- control-hint: `specs/_data-analy/features/gis-draw-live-control-hint.md`
- real-data: `specs/_data-analy/features/gis-draw-live-real-data.md`
- po: `specs/gis-draw-live/po/requirement.md`
- prior compact: `specs/gis-draw-live/handoff/po-compact.md`

## Handoff next

| Role | Do |
|------|----|
| SA | FileService + KPI path confirm |
| TL/Dev | Tasks GAP NEW only · OMS nếu paint |
| QA | After Dev · e2e queued |

## Cấm

- ERP.* · re-scan demo · Dev/BE/e2e/start:std ở Design · invent FilesController · start role khác trong task này

<!-- compact schemaVersion=1 role=design feature=gis-draw-live taskId=task_1e588399 -->
