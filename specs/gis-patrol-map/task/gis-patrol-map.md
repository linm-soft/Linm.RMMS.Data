# Tasks — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| formType / packKind | `map` |
| changeScope | `edit_page` |
| status | `confirmed` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| taskId | `task_ed7b6ec1` |
| mfeStdRoute | `/gis/tuan-duong` |
| mfeStdUrl | `http://localhost:9301/gis-patrol-map` (Dev sets live) |
| liveRoute | `/gis/tuan-duong` |
| route_confirm | `/gis/tuan-duong` keep (STATUS · autoApprove) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Domain Patrol · `api/v1/patrol` |
| bff | `web-bff/api/v1/patrol/*` · files `web-bff/api/v1/files/*` FileService.Bff |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html` |
| writtenAt | `2026-09-12T06:45:00.000Z` |
| prior | SA `task_a393d3b7` · design/po/data_analy confirmed |
| e2eQa | ON — queued `/agent-qa*` only |

## SD / scope

- **Keep shell:** NAV-GIS · TAB-ROAD · TAB-CHECK · TAB-DETAIL · LIST-PERSON · MAP-HOST · MAP-BAR · track OSRM · pins · animate arc-length · MapPopup inspect.
- **Delta NEW:** `GALLERY-PATROL` · `GAP-MAP-PATROL-PHOTO-01` — ImageGallery FileService resign (`PhotoLocalIds`=guid) · popup + Chi tiết parity (U-GALLERY-ZONE locked).
- **FormMode:** View / read-only map P1 — **no** PATCH/POST files on page · **no** drawing attribute save.
- **Cấm:** ERP.* · invent FilesController · implement-file-service · OSM.org/Esri/Google MFE basemap · Kind B list template · `/match` 100m · polyline chord = xong · re-add Bản đồ giám sát 2D / Vẽ Google / tree Loại tài sản.

## Screens / zones

| id | Surface | Pattern | FormMode | Actions | devSlash |
|----|---------|---------|----------|---------|----------|
| SCR-MAP | S-MAP full page | Full | View | fit · select session · track/pins | `/agent-dev-oms-map` |
| SCR-INSPECT | MapPopup | Modal | View | open gallery | `/agent-dev-oms-map` + `/map-inspect-popup` |
| SCR-DETAIL | TAB-DETAIL | Panel | View | history → gallery | `/agent-dev-oms-map` |

Zones: NAV-GIS · TAB-* · LIST-PERSON · MAP-HOST · MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL

## Tasks (form-type-task-pack §2b map)

| Task id | Role | deps | devSlash / skills | DoD |
|---------|------|------|-------------------|-----|
| T-BE-GIS-01 | Dev | — | BE wire · **cấm** migration mới | Reuse PatrolSessions/CheckIns · BFF proxy `web-bff/api/v1/patrol/sessions` + `/{id}/check-ins` · files resign `web-bff/api/v1/files/*` · PhotoLocalIds=guid · TZ=tz_required · XCO=xco_get_only · SHARE=tenant_keep · **no** invent FilesController / ERP.* · migration=`none` |
| T-PERM-01 | Dev | T-BE-GIS-01 | perm codes map/view | Permission codes cho sessions/check-ins/files resign · FormMode View only |
| T-UI-MAP-01 | Dev | T-BE-GIS-01 · T-PERM-01 | **`/agent-dev-oms-map`** · `/map-inspect-popup` · `/map-snap-centerline` · `/gis-tai-san-snap` | Full-page GIS map · **R1–R11** (+R4b/R4c/R4d/R4e/R5b/R7b/R7c) · MFE clip basemap · host→bar · `fitVnClipMap` · OSRM `routeDrivingTrack` · pin teardrop badge xanh/đỏ · `projectToPath` · click popup only (no click-zoom) · animate arc-length · leftover shell keep · **GAP-MAP-PATROL-PHOTO-01:** `GALLERY-PATROL` trong MAP-POPUP-INSPECT + TAB-DETAIL parity · ImageGallery resign FileService · **cấm** stub gallery / legacy local path |
| T-UI-MAP-FORM-01 | Dev | T-UI-MAP-01 | `/map-inspect-popup` · Leave N/A | **P1 read-only** — inspect popup + gallery only · **no** attribute/drawing save form · **no** dirty Leave · toast/`useAlert` · **cấm** `window.alert`/`confirm` (**GAP-DEV-ALERT-01**) |
| T-UI-UX-01 | Dev | T-UI-MAP-01 | `dev-ui-ux-constitution` · UI-Ux.md | P1–7 · **GAP-DEV-UX-01** · no demo/seed chrome on live |
| T-UI-RESP-01 | Dev | T-UI-MAP-01 | `/dev-web-responsive` · `/dev-ui-review` | 1280 / 768 / 375 · map shell usable |
| T-QA-MAP-01 | QA | all T-UI-* · T-BE-* | **`/agent-qa*`** only · e2e queued | Live `mfeStdUrl` · sessions→track/pins · popup gallery resign · Chi tiết parity · R1–R11 smoke · **no** draw/save required (read-only) · PNG if e2eQa |

## ssot.reuse

| Area | Reuse (cấm fork) |
|------|------------------|
| Map paint | OMS R1–R11 · GIS MFE clip · `routeDrivingTrack` / OSRM · `projectToPath` |
| Inspect | `{MapPopup}` · `/map-inspect-popup` |
| Files | FileService.Bff · `web-bff/api/v1/files/*` resign |
| Patrol API | Existing Domain Patrol · migration none |
| Alert | `useAlert` / Modal — **cấm** native dialog |

## implement.wire

1. FE list sessions → LIST-PERSON · status badge.
2. Select session → GET check-ins → MAP pins + TAB-DETAIL timeline + OSRM track.
3. Pin/history click → MAP-POPUP-INSPECT · photoIds → resign → GALLERY-PATROL (popup + Chi tiết).
4. State: sessionId · checkIns · photoUrls (resigned) · selectedPin — read-only.

## implement.state (Dev smoke — not QA e2e)

- Load `/gis/tuan-duong` · fit VN clip · pick person · track+pins · open gallery with ≥1 guid photo.
- Fail if gallery empty when PhotoLocalIds non-empty · or FileService invent · or OMS R* fail.

## Source.routes (confirmed)

| Key | Path |
|-----|------|
| live | `/gis/tuan-duong` |
| peerStd | `/gis-patrol-map` → `http://localhost:9301/gis-patrol-map` |

## Handoff next

| Role | Do |
|------|----|
| Dev | `/agent-dev-oms-map` · T-BE-GIS-01 → T-UI-MAP-01 (+ FORM/UX/RESP) · photo gap |
| QA | T-QA-MAP-01 · e2e queued — **cấm** e2e ở TL/Dev start:std trừ QA |

## Cấm TL/Dev này

- Implement product code ở role TL · yarn build/e2e/start:std ở TL · migration · ERP.* · Kind B list pack · start role khác (**GAP-PKT-ROLE-01**)

<!-- task schemaVersion=1 role=team_lead feature=gis-patrol-map taskId=task_ed7b6ec1 packKind=map -->
