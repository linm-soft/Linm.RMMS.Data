# handoff-compact — team_lead → dev · gis-draw-live

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `gis-draw-live` |
| packKind | `map` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_efbc1d08` |
| priorTaskId | `task_2e873d37` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.25.02` |
| writtenAt | `2026-09-07T03:50:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| route_confirm | `/gis/tai-san` |
| mfeStdRoute | `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| formPattern | `Full page` (+ inspect panel/popup) |
| Leave | `LeaveConfirmModal` |
| Grid/Report AC | `N/A` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Gis · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` |
| migration | `none` · **cấm** Step 4b |

## Decisions

- formType=`map` · pack §2b + GAP NEW only · KEEP shell/OMS/locate/props text
- FileService.Bff resign · KPI SA-locked paths · entity/migration none
- versionGate=`rechecked` · UNCLEAR=none

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photo.*FileIds | Ảnh TS 3 tabs | ImageGallery | files/* resign |
| xsect.fileIds | Mặt cắt | ImageGallery | empty OK |
| kpi.* | KPI tuyến | Stat / ChipList | 3 GETs |
| inspectRows | Thuộc tính | Text | keep |
| basemap/locate | Map-bar | Chip / Button | keep · cấm Fit |

## Screens / zones (ids only)

- SCR-MAP / SCR-INSPECT / SCR-LOCATE
- Z-PHOTO · Z-XSECT · Z-KPI (+ shell KEEP)
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`
- peerStdUrl=`/gis/draw` · `/gis` · `/gis/ha-tang`

## API / tasks (ids only)

| Mode | Op |
|------|-----|
| map load | purpose=live KEEP |
| inspect | props + files resign + KPI×3 |
| save draw | n/a |

| T-* | role | devSlash | deps |
|-----|------|----------|------|
| T-BE-GIS-01 | dev | (query API) | — |
| T-BE-FILE-01 | dev | FileService.Bff | — |
| T-UI-MAP-01 | dev | **`/agent-dev-oms-map`** | T-BE-GIS-01 |
| T-UI-MAP-FORM-01 | dev | **`/agent-dev-oms-map`** + leave | T-BE-GIS-01,T-BE-FILE-01 |
| T-PERM-01 | dev | — | — |
| T-UI-UX-01 | dev | ux constitution + responsive | T-UI-MAP-FORM-01 |
| T-QA-MAP-01 | qa | `/agent-qa` | UI+BE NEW |

KPI: incidents `routeName` KEEP · repairs `work-orders?routeName=` NEW · assetByType `summary-by-type?route=` NEW

## UNCLEAR

- none

## Full paths (Read only if needed)

- task: `specs/gis-draw-live/task/gis-draw-live.md`
- solution: `specs/gis-draw-live/be/solution-discovery.md`
- design: `specs/gis-draw-live/ui/design.md`
- prior: `handoff/sa-compact.md`

## Handoff next

| Role | Do |
|------|----|
| Dev | NEW T-* only · OMS nếu paint · **cấm** ERP.* |
| QA | After Dev · e2e queued |
| Review | After QA |

## Cấm

- ERP.* · invent FilesController · persist presigned · migration/Step4b · e2e/start:std ở TL · start role khác trong task này

<!-- compact schemaVersion=1 role=team_lead feature=gis-draw-live taskId=task_efbc1d08 -->
