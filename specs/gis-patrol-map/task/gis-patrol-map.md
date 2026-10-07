# Tasks — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| formType / packKind | `map` |
| changeScope | `edit_page` |
| status | `confirmed` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| taskId | `task_31f40050` |
| mfeStdRoute | `/gis/tuan-duong` |
| mfeStdUrl | `http://localhost:9301/gis-patrol-map` (Dev sets live) |
| liveRoute | `/gis/tuan-duong` |
| route_confirm | `/gis/tuan-duong` keep (STATUS · autoApprove) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Domain Patrol · `api/v1/patrol` |
| bff | `web-bff/api/v1/patrol/*` · files `web-bff/api/v1/files/*` FileService.Bff · gis/chainage+bake cite peer `web-rmms-patrol-map` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html` |
| writtenAt | `2026-09-30T16:00:00.000Z` |
| prior | SA `task_1bd936ce` · design/po/data_analy confirmed · autoApprove |
| e2eQa | ON — queued `/agent-qa*` only |
| tl_devSlash | `/agent-dev-oms-map` |

## SD / scope

- **Keep shell:** NAV-GIS · TAB-ROAD · TAB-CHECK · TAB-DETAIL · FILTER-BAR · LIST-PERSON · MAP-HOST · MAP-BAR · track OSRM · pins · animate arc-length · MapPopup inspect · **GALLERY-PATROL** PHOTO (prior PHOTO-01 keep).
- **Delta NEW (edit cycle):** REAL-01 · SCOPE-01 · LAYER-01 · FIT-01 · PIN-02 · KMPOST-01 · BASE-01 · CHAIN-01 · KM-EMPTY-01 — ca thật · scope segment BE · LAYER-ASSIGNED + LAYER-KMPOST clamp · fitBounds person · pin HARD fields · attachVnClipBasemap · chainage/bake reuse · empty km ok.
- **FormMode:** View / read-only map P1 — **no** PATCH/POST files on page · **no** drawing attribute save.
- **Cấm:** ERP.* · invent FilesController / PatrolMapController · implement-file-service · OSM.org/Esri/Google MFE basemap · VietnamBoundaries embed · Kind B list template · `/match` 100m · polyline chord = xong · client bypass SCOPE · seed Vinh trong mọi trường hợp · bịa km · cột `LineM` trên DB RMMS.

## Screens / zones

| id | Surface | Pattern | FormMode | Actions | devSlash |
|----|---------|---------|----------|---------|----------|
| SCR-MAP | S-MAP full page | Full | View | filter · select person · fit nét · layers · track/pins | `/agent-dev-oms-map` |
| SCR-INSPECT | MapPopup | Modal | View | PIN-02 fields · open gallery | `/agent-dev-oms-map` + `/map-inspect-popup` |
| SCR-DETAIL | TAB-DETAIL | Panel | View | history → gallery parity | `/agent-dev-oms-map` |

Zones: NAV-GIS · FILTER-BAR · TAB-* · LIST-PERSON · MAP-HOST · LAYER-ASSIGNED · LAYER-KMPOST · MAP-BAR · MAP-POPUP-INSPECT · GALLERY-PATROL

## Tasks (form-type-task-pack §2b map)

| Task id | Role | deps | devSlash / skills | DoD |
|---------|------|------|-------------------|-----|
| T-BE-GIS-01 | Dev | — | BE wire · **cấm** migration GIS trên RMMS | Reuse PatrolSessions/CheckIns · BFF `web-bff/api/v1/patrol/sessions` + `/{id}/check-ins` · **SCOPE-01** BE filter ROLE (TDTK→own `rmms_user_route_segments` · Admin/MANAGER-RMMS→company) · **REAL-01** không seed Vinh kể cả API trống · **CHAIN-01** cite RMMS `GET gis/chainage` (API gọi Map.Api `chainage` / `route-measures` qua `Gis__MapServiceBaseUrl`, không phải `ServiceEndpoints__MapService` của BFF). `LineM` ở MapService `route_centerlines`. Bake JSON `GisRouteGeoms.CoordinatesJson` chỉ là nguồn tọa độ · files resign `web-bff/api/v1/files/*` · PhotoLocalIds=guid · TZ=tz_required · XCO=xco_get_only · SHARE=tenant_keep · **cấm** invent FilesController / PatrolMapController / ERP.* · **cấm** PostGIS trên DB RMMS |
| T-PERM-01 | Dev | T-BE-GIS-01 | perm codes map/view | Permission codes sessions/check-ins/files resign/segments cite · FormMode View only · SCOPE enforced server-side |
| T-UI-MAP-01 | Dev | T-BE-GIS-01 · T-PERM-01 | **`/agent-dev-oms-map`** · `/map-inspect-popup` · `/map-snap-centerline` · `/gis-tai-san-snap` | Full-page GIS · **R1–R11** (+R4b/R4c/R4d/R4e/R5b/R7b/R7c) · **BASE-01** `attachVnClipBasemap` MapService · host→bar · `fitVnClipMap` · **LAYER-01** LAYER-ASSIGNED polyline (segments+bake) · **KMPOST-01** LAYER-KMPOST clamp km đoạn chọn · **FIT-01** click list.personName → fitBounds nét giao · OSRM `routeDrivingTrack` · pin teardrop xanh/đỏ · `projectToPath` · click popup only · animate arc-length · **PIN-02** HARD: Tên/Mã/chainageLabel/GPS6dp/giờ · **KM-EMPTY-01** list.kmFromTo empty ok · **keep PHOTO-01** GALLERY-PATROL resign · **OMS-KEEP** no regress · **cấm** OSM.org/Esri · stub gallery · seed chrome |
| T-UI-MAP-FORM-01 | Dev | T-UI-MAP-01 | `/map-inspect-popup` · Leave N/A | **P1 read-only** — inspect + gallery only · **no** attribute/drawing save · **no** dirty Leave · toast/`useAlert` · **cấm** `window.alert`/`confirm` (**GAP-DEV-ALERT-01**) |
| T-UI-UX-01 | Dev | T-UI-MAP-01 | `dev-ui-ux-constitution` · UI-Ux.md | P1–7 · **GAP-DEV-UX-01** · **REAL-01** không seed Vinh, kể cả API trống |
| T-UI-RESP-01 | Dev | T-UI-MAP-01 | `/dev-web-responsive` · `/dev-ui-review` | 1280 / 768 / 375 · FILTER-BAR + map shell usable · layers readable |
| T-QA-MAP-01 | QA | all T-UI-* · T-BE-* | **`/agent-qa*`** only · e2e queued | Live `mfeStdUrl` · REAL/SCOPE/LAYER/FIT/PIN-02/KMPOST/BASE/CHAIN/KM-EMPTY · PHOTO gallery · OMS R1–R11 smoke · **no** draw/save · PNG if e2eQa |

## Map AC → Task map

| AC id | Owner task | Notes |
|-------|------------|-------|
| REAL-01 | T-BE-GIS-01 · T-UI-UX-01 | không seed Vinh trong mọi trường hợp |
| SCOPE-01 | T-BE-GIS-01 · T-PERM-01 | BE ROLE filter · no client bypass |
| LAYER-01 | T-UI-MAP-01 | LAYER-ASSIGNED |
| FIT-01 | T-UI-MAP-01 | fitBounds person → nét |
| PIN-02 | T-UI-MAP-01 · T-UI-MAP-FORM-01 | HARD inspect fields |
| KMPOST-01 | T-UI-MAP-01 | LAYER-KMPOST clamp |
| BASE-01 | T-UI-MAP-01 | attachVnClipBasemap |
| CHAIN-01 | T-BE-GIS-01 · T-UI-MAP-01 | chainage + bake cite |
| KM-EMPTY-01 | T-UI-MAP-01 | empty km ok · cấm bịa |
| PHOTO-01 / SNAP-01 / PIN-01 / OMS-KEEP | T-UI-MAP-01 · T-QA-MAP-01 | keep prior |

## ssot.reuse

| Area | Reuse (cấm fork) |
|------|------------------|
| Map paint | OMS R1–R11 · GIS MFE clip · `attachVnClipBasemap` · `routeDrivingTrack` / OSRM · `projectToPath` |
| Inspect | `{MapPopup}` · `/map-inspect-popup` |
| Chainage/bake | peer `web-rmms-patrol-map` · `GET gis/chainage` · `GisRouteGeoms` |
| Segments | `rmms_user_route_segments` cite |
| Files | FileService.Bff · `web-bff/api/v1/files/*` resign |
| Patrol API | Existing Domain Patrol · migration none |
| Alert | `useAlert` / Modal — **cấm** native dialog |

## implement.wire

1. FE FILTER-BAR (office/route/mode) → GET sessions **scoped** → LIST-PERSON (personName · employeeCode · kmFromTo empty-ok).
2. Select person → LAYER-ASSIGNED (segments+bake) · LAYER-KMPOST clamp · **FIT-01** fitBounds nét.
3. Select session → GET check-ins (+chainage) → MAP pins + TAB-DETAIL · OSRM track.
4. Pin/history click → MAP-POPUP-INSPECT **PIN-02** · photoIds → resign → GALLERY-PATROL (popup + Chi tiết).
5. State: filters · sessionId · segments · kmPosts · checkIns · photoUrls · selectedPin — read-only.

## implement.state (Dev smoke — not QA e2e)

- Load `/gis/tuan-duong` · BASE clip · pick person → LAYER-ASSIGNED+KMPOST · fitBounds · track+pins · PIN-02 fields · gallery ≥1 guid.
- Fail if: seed when sessions exist · SCOPE client-only · empty km bịa · OMS R* fail · FileService invent · OSM basemap.

## Source.routes (confirmed)

| Key | Path |
|-----|------|
| live | `/gis/tuan-duong` |
| peerStd | `/gis-patrol-map` → `http://localhost:9301/gis-patrol-map` |

## Handoff next

| Role | Do |
|------|----|
| Dev | `/agent-dev-oms-map` · T-BE-GIS-01 → T-PERM-01 → T-UI-MAP-01 (+ FORM/UX/RESP) · Delta REAL…KM-EMPTY · keep PHOTO |
| QA | T-QA-MAP-01 · e2e queued — **cấm** e2e ở TL/Dev start:std trừ QA |

## Cấm TL/Dev này

- Implement product code ở role TL · yarn build/e2e/start:std ở TL · migration · ERP.* · Kind B list pack · start role khác (**GAP-PKT-ROLE-01**)

<!-- task schemaVersion=1 role=team_lead feature=gis-patrol-map taskId=task_31f40050 packKind=map -->
