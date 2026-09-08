# handoff-compact — dev → qa · gis-draw-live

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `dev` |
| feature | `gis-draw-live` |
| packKind | `map` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_b9cb81b3` |
| priorTaskId | `task_efbc1d08` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.25.02` |
| writtenAt | `2026-09-06T20:57:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| mfeStdRoute | `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| build | FE typecheck+build **PASS** · BE Release **PASS** |
| migration | `none` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |

## Decisions

- Query-only KPI filters · FileService.Bff reuse · ImageGallery = getObject blob
- LeaveConfirmModal on inspect media/KPI bind · **0** window.alert
- OMS paint untouched (KEEP)
- UNCLEAR=none

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photo.*FileIds | Ảnh TS 3 tabs | ImageGallery | files getObject |
| xsect.fileIds | Mặt cắt | ImageGallery | empty OK |
| kpi.* | KPI tuyến | Stat / ChipList | 3 GETs soft |
| inspectRows | Thuộc tính | Text | KEEP |

## Screens / zones (ids only)

- SCR-MAP / SCR-INSPECT / SCR-LOCATE
- Z-PHOTO · Z-XSECT · Z-KPI (+ shell KEEP)
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`

## API / tasks (ids only)

| Mode | Op |
|------|-----|
| map load | purpose=live KEEP |
| inspect | props + files object + KPI×3 |
| save draw | n/a |

| T-* | status |
|-----|--------|
| T-BE-GIS-01 | done |
| T-BE-FILE-01 | done |
| T-UI-MAP-01 | done |
| T-UI-MAP-FORM-01 | done |
| T-PERM-01 | done |
| T-UI-UX-01 | done |
| T-QA-MAP-01 | pending QA |

## Debt

- JWT TODO · empty galleries until fileIds in dumpSpecs/props
- DEFER PostGIS / lock / commit→Asset

## UNCLEAR

- none

## Full paths (Read only if needed)

- implement: `specs/gis-draw-live/implement/gis-draw-live.md`
- task: `specs/gis-draw-live/task/gis-draw-live.md`
- solution: `specs/gis-draw-live/be/solution-discovery.md`

## Handoff next

| Role | Do |
|------|----|
| QA | T-QA-MAP-01 e2e · PHOTO/XSECT/KPI · Leave · OMS smoke |
| Review | After QA |

## Cấm

- ERP.* · invent FilesController · persist presigned · e2e/start:std ở Dev · start role khác trong task này

<!-- compact schemaVersion=1 role=dev feature=gis-draw-live taskId=task_b9cb81b3 -->
