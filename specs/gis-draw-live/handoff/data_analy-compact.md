# handoff-compact — data_analy → po · gis-draw-live

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `gis-draw-live` |
| packKind | `map` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_0b94a0ca` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| analyzedAt | `2026-09-06T20:20:00.000Z` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.25.02` |
| autoApprove | `ON` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Gis · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` |
| runMode | `full_pipeline` · E2E QA queued |

## Artifacts (full)

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/gis-draw-live-control-hint.md` |
| real-data | `specs/_data-analy/features/gis-draw-live-real-data.md` |
| context | `docs/context/features/gis-draw-live.md` |
| demo | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` |
| keep PO | `specs/gis-draw-live/po/requirement.md` |
| keep Design | `specs/gis-draw-live/ui/design.md` + prototype |

## § Delta (mandatory)

| ID | Current → New | Owner |
|----|---------------|-------|
| GAP-MAP-INSPECT-PHOTO-01 | text inspect only → gallery ảnh TS (tài sản/tuần kiểm/tuần đường) · file id + resign | Design/SA/Dev |
| GAP-MAP-INSPECT-XSECT-01 | no xsect → ảnh mặt cắt ngang KT | Design/SA/Dev |
| GAP-MAP-INSPECT-KPI-01 | no corridor KPI → sự cố · tu sửa · tổng TS loại (route) | SA/Dev |
| GAP-MAP-INSPECT-FILE-HARD | — → FileService.Bff `files/*` · cấm implement-file-service / copy FilesController / persist presigned / ERP.* | SA/Dev |
| GAP-MAP-OMS-KEEP | OMS/Carto/locate ship → giữ · Dev `/agent-dev-oms-map` nếu đụng paint | Dev |

## Kind / zones

| Zone | Pattern |
|------|---------|
| Map | Kind F Leaflet · clip Carto · overlay Tuyến · locate |
| Props | Inspect rows (**keep**) + PHOTO tabs + XSECT + KPI |
| Map-bar | Tiêu chuẩn\|Vệ tinh · Live\|Cache · Vị trí của tôi · **cấm** Fit |

## Controls (delta only)

| key | controlHint | cite |
|-----|-------------|------|
| photo.*FileIds | ImageGallery | `web-bff/api/v1/files/*` · FileService.Bff |
| xsect.fileIds | ImageGallery | same |
| kpi.* | Stat / ChipList | `summary-by-type` + Incident/Maintenance read (SA) |

## Bind prefix

- Gis: `api/v1/gis` · BFF `web-bff/api/v1/gis`
- Files: `web-bff/api/v1/files/*`
- DOMAIN-MAP: slug `gis-draw-live` → Gis

## Open / defer

- PostGIS persist · multi-user lock · commit → Asset = DEFER (prior)
- KPI exact controller path = SA chốt (Incident/Maintenance vs Gis aggregate)
- UNCLEAR = none (File NuGet present on host)

## Handoff next

| Role | Do |
|------|----|
| PO | Patch requirement § Delta only · keep prior map DoD |
| Design | Prototype + reviewUrl · PHOTO/XSECT/KPI zones |
| SA | FileService + KPI path confirm |
| TL/Dev | Tasks chỉ GAP NEW · OMS gate nếu paint |
| QA | After Dev · re-queue e2e |

## Cấm

- ERP.* · invent FilesController · persist presigned · demo-json SSOT · yarn build/e2e/start:std ở data_analy · start PO/Design/Dev trong cùng task

<!-- compact schemaVersion=1 role=data_analy feature=gis-draw-live taskId=task_0b94a0ca -->
