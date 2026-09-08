# STATUS — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| phase | `qa` |
| status | `in_progress` |
| taskId | `task_c44629a3` |
| priorTaskId | `task_b9cb81b3` |
| changeScope | `edit_page` |
| packKind | `map` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis-draw-live.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/gis` (DOMAIN-MAP — **cấm ERP.***) |
| mfeStdRoute | `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/draw` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.02` |
| versionGate | `rechecked` |
| contentHash | `sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02` |
| updatedAt | `2026-09-06T21:02:53.720Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| qa | `gis-draw-live` | `task_c44629a3` | `2026-09-06T21:02:53.720Z` · **held** |
| dev | `gis-draw-live` | `task_b9cb81b3` | `2026-09-06T20:58:24.000Z` · **released** (DoR PASS) |

## Confirms (packet HARD · Autopilot)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | `Linm.RMMS.WebService` | **cấm** ERP.WebService / Domains/Master |
| uiRepo | `MFE-Source` | `Linm.Web.RMMS.Gis` |
| design_confirm | approve | autopilot · prototype PHOTO/XSECT/KPI + reviewUrl · `task_1e588399` |
| solution_confirm | approve | autopilot · FileService reuse + KPI cross-domain read · `task_2e873d37` |
| route_confirm | `/gis/tai-san` | autopilot keep · `/gis/live` redirect giữ `?type=` · peer `/gis/draw` |
| review_confirm | approve | findings.md |
| po_confirm | approve | autopilot · requirement § Delta + compact |
| team_lead_confirm | approve | autopilot · task pack map §2b + GAP NEW · `task_efbc1d08` |
| dev_confirm | approve | autopilot · PHOTO/XSECT/KPI + builds PASS · `task_b9cb81b3` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | `_data-analy/features/gis-draw-live-{control-hint,real-data}.md` + `handoff/data_analy-compact.md` | **done** |
| 1 | po | po/requirement.md + `handoff/po-compact.md` (§ Delta · keep prior) | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl + `handoff/design-compact.md` | **confirmed** |
| 2.2 | sa | be/solution-discovery.md + `handoff/sa-compact.md` | **confirmed** |
| 3 | team-lead | task/gis-draw-live.md + `handoff/team_lead-compact.md` | **confirmed** |
| 4 | dev | implement/gis-draw-live.md + `handoff/dev-compact.md` | **confirmed** |
| 5 | qa | qa/scenarios.md | **in_progress** |
| 6 | review | review/findings.md | pending |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX | gis-draw-live | dev | — | done | |
| T-PERM | gis-draw-live | dev | — | done | JWT TODO · refresh T-PERM-01 NEW |
| T-BE-01 | map | dev | — | done | purpose=live + live basemap |
| T-BE-02 | map | dev | T-BE-01 | done | BFF query forward |
| T-UI-MAP | /gis/live | dev | — | done | Kind F · OMS |
| T-FE-CLIENT | client | dev | T-BE-01,T-UI-MAP | done | BFF + fallback |
| T-QA-01 | gis-draw-live | qa | T-UI-MAP,T-BE-02 | done | scenarios.md |
| T-RV-01 | gis-draw-live | review | T-QA-01 | done | findings.md |
| T-PO-DELTA | gis-draw-live | po | data_analy | **done** | § Delta PHOTO/XSECT/KPI/FILE · `task_2aa163f0` |
| T-BE-GIS-01 | map | dev | — | **done** | summary-by-type?route= · work-orders?routeName= |
| T-BE-FILE-01 | map | dev | — | **done** | FileService.Bff resign reuse |
| T-UI-MAP-01 | /gis/tai-san | dev | T-BE-GIS-01 | **done** | `/agent-dev-oms-map` KEEP · no paint |
| T-UI-MAP-FORM-01 | SCR-INSPECT | dev | T-BE-GIS-01,T-BE-FILE-01 | **done** | Z-PHOTO/XSECT/KPI + LeaveConfirm |
| T-PERM-01 | gis-draw-live | dev | — | **done** | map/inspect/files/KPI read · JWT TODO |
| T-UI-UX-01 | map | dev | T-UI-MAP-FORM-01 | **done** | constitution + D/T/M |
| T-QA-MAP-01 | gis-draw-live | qa | T-UI-MAP-01,T-UI-MAP-FORM-01,T-BE-GIS-01 | **pending** | e2e queued |

## Blockers / open questions

- KPI path → **CLOSED** SA (`task_2e873d37`): Incident `routeName` TotalCount · Maintenance `work-orders?routeName=` · Gis `summary-by-type?route=` · FileService.Bff reuse.
- DEFER: PostGIS persist · multi-user lock · commit → Asset.

## Edit (`task_b9cb81b3` · `/agent-dev` · roleOnly=dev)

- changeScope=`edit_page` · packKind=`map`
- NEW done: T-BE-GIS-01 · T-BE-FILE-01 · T-UI-MAP-01 · T-UI-MAP-FORM-01 · T-PERM-01 · T-UI-UX-01
- FE typecheck+build PASS · BE Release PASS · migration **none**
- Artifacts: `implement/gis-draw-live.md` + `handoff/dev-compact.md`
- `dev_confirm=approve` · Next = QA (`T-QA-MAP-01` e2e queued)
- **Cấm** e2e/start:std ở Dev · **cấm** start role khác

## Edit (`task_efbc1d08` · `/agent-team-lead` · roleOnly=team_lead)

- changeScope=`edit_page` · packKind=`map`
- Analy hash skip · **cấm** implement code · **cấm** e2e/start:std/Step4b
- Artifacts: `task/gis-draw-live.md` + `handoff/team_lead-compact.md`
- form-type pack §2b: T-BE-GIS-01 · T-BE-FILE-01 · T-UI-MAP-01 · T-UI-MAP-FORM-01 · T-PERM-01 · T-UI-UX-01 · T-QA-MAP-01
- `route_confirm=/gis/tai-san` (autopilot keep) · `team_lead_confirm=approve`
- Next = Dev (GAP NEW PHOTO/XSECT/KPI/FILE) · e2e queued QA
- **Cấm** yarn build/e2e/start:std · **cấm** start role khác

## Edit (`task_2e873d37` · `/agent-sa` · roleOnly=sa)

- changeScope=`edit_page` · packKind=`map`
- Analy hash skip · **cấm** re-scan demo · **cấm** Write MFE/native
- Artifacts: `be/solution-discovery.md` + `handoff/sa-compact.md`
- Chốt: FileService.Bff `files/*` · KPI cross-domain READ · gates tz_na/xco_get_only/tenant_keep · migration **none**
- `solution_confirm=approve` (autoApprove) · Next = TL (GAP NEW only)
- **Cấm** yarn build/e2e/start:std · **cấm** Step 4b/migration · **cấm** start role khác

## Edit (`task_1e588399` · `/agent-design` · roleOnly=design)

- changeScope=`edit_page` · packKind=`map`
- Analy hash skip · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**)
- Artifacts: `ui/design.md` + `ui/prototype/gis-draw-live-prototype.html` + `handoff/design-compact.md`
- Zones Z-PHOTO / Z-XSECT / Z-KPI · reviewUrl · real_view_parity=v1 · `design_confirm=approve`
- Next = SA (FileService + KPI path)
- **Cấm** yarn build/e2e/start:std · **cấm** Step 4b/migration · **cấm** Dev ở role này

## Edit (`task_2aa163f0` · `/agent-po` · roleOnly=po)

- changeScope=`edit_page` · packKind=`map`
- Analy hash skip · **cấm** re-scan demo
- Artifacts: `po/requirement.md` (§ Delta keep prior) + `handoff/po-compact.md`
- Screens SCR-MAP/INSPECT/LOCATE · LeaveConfirmModal · Grid/Report AC=N/A
- Next = Design (PHOTO/XSECT/KPI zones + reviewUrl)
- **Cấm** yarn build/e2e/start:std · **cấm** Step 4b/migration ở role này

## Edit (`task_0b94a0ca` · `/agent-data-analy` · họp 04/09 — 5 · map-inspect)

- changeScope=`edit_page` · packKind=`map`
- Delta: click vị trí → ảnh TS (tài sản/tuần kiểm/tuần đường) + mặt cắt ngang KT + KPI tuyến (sự cố · tu sửa · tổng TS loại)
- FileService HARD: `web-bff/api/v1/files/*` · **cấm** implement-file-service / copy FilesController / persist presigned / ERP.*
- Artifacts: control-hint + real-data + `handoff/data_analy-compact.md`
- Keep prior PO/Design · next = PO § Delta only
- **Cấm** yarn build/e2e/start:std ở role này

## Links
- mfeStdUrl: `http://localhost:9302/gis/draw`
- mfeStdRoute: `/gis/tai-san` · peer `/gis/draw`
- handoff: `specs/gis-draw-live/handoff/dev-compact.md` · prior `team_lead-compact.md` · `sa-compact.md` · `design-compact.md` · `po-compact.md` · `data_analy-compact.md`
- implement: `specs/gis-draw-live/implement/gis-draw-live.md`
- task: `specs/gis-draw-live/task/gis-draw-live.md`
- solution: `specs/gis-draw-live/be/solution-discovery.md`
- design: `specs/gis-draw-live/ui/design.md`
- requirement: `specs/gis-draw-live/po/requirement.md`

- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- Prototype reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-draw-live/ui/prototype/gis-draw-live-prototype.html`

## Close (`task_6e79dde5`)

- edit_page: mock localStorage → `api/v1/gis/liveings` + OMS R1–R11 · default OSM
- BE only `Linm.RMMS.WebService` domain Gis · `purpose=live`
- Verify gate 2026-08-11: FE typecheck/build + BE Release **PASS**

## Edit (2026-09-03 `/hey-linm` · DRAW-STREET context)

- Overlay Tuyến: **cấm** dump GPS thưa (`isSparseGpsChord`) · fail = nét đứt (`GAP-MAP-DRAW-STREET-01`)
- Zoom sát: giữ bake `national` (`GAP-MAP-INDEX-PAINT`) — **cấm** worker paint dump “tạm”
- Dest: `gis-draw-live.md` · `gis-osm-clip.md` · `map-service.md` · FEATURE-TRACKING

## Edit (2026-09-01 `/edit-web-feature` · road nền + biên)

- OSM Carto **nền + biên** (class fill + casing · overzoom z14–16) · overlay Tuyến pair blue `#2563EB`/`#1D4ED8`
- **Cấm** nét đơn xanh / casing +0.35px — `GAP-MAP-ROAD-CARTO-01`
- Dest: `vnClipBasemap.ts` · `GisDrawLivePage` · demo live-app

## Edit (2026-09-01 `/map-inspect-popup` · locate card)

- Click pin **Vị trí của tôi** → card **Tên: Vị trí của bạn** + **GPS:** · **cấm** title-only
- Dest: `locateUserOnMap.ts` `buildMyLocationPopupHtml`

## Edit (2026-09-01 `/edit-web-feature` · locate me)

- Map-bar **Vị trí của tôi** — GPS pin + vùng · **cấm** nút Fit
- Context lock: design / ux / task / po / implement / qa · `locateUserOnMap.ts`

## Edit (2026-09-01 `/edit-web-feature` · map-bar 2 chip)

- Map-bar **Tiêu chuẩn \| Vệ tinh** — **cấm** Default/Streets/Sat EN · **cấm** chip Streets
- Context lock: design / ux / task / po / implement / qa · `CLIP_STYLE_OPTIONS`

## Edit (2026-09-01 `/edit-web-feature` · land/sea revert)

- Revert sơn Carto: `water` `#aad3df` dưới `vn-land` · bỏ mask invert. Lệch so HEAD đã làm mất màu đất/biển
- Giữ GL: không đụng canvas transform

## Edit (2026-09-01 `/edit-web-feature` · land/sea)

- Biển một màu `theme.sea` · đất `vn-land` · **cấm** OSM water làm màu đại dương (mép dọc)
- GL: không đụng canvas transform · overflow chỉ tile-pane
- GAP-MAP-LAND-SEA-01

## Edit (2026-09-01 `/edit-web-feature` · bake jump + GL left)

- Nét bake/index: nhiều polyline cùng id khi nhảy >150 km · **cấm** chord biển
- Canvas: không reset GL transform mỗi pan · mask MVT · overflow visible
- GAP-MAP-BAKE-JUMP · GAP-MAP-GL-LEFT · context lock design/ux/task/implement/po/qa

## Edit (2026-09-01 `/edit-web-feature` · index paint)

- z≤8 `/gis/live`: vẽ tuyến **osrm-bake + index** đủ nét (QL Bắc không bị ẩn)
- Overlay `tuyến · N đã ghim` = số LineString bake/index đang paint
- GAP-MAP-INDEX-PAINT · context lock design/ux/task/implement

## Edit (2026-09-01 `/edit-web-feature`)

- Bỏ header Dev/GIS/title · toolbar seed · bottom isolate legend
- Map dock flex fill remaining · click TS trên map không auto zoom
- Tab Thuộc tính inspect (popup + gov 3 tầng + dumpSpecs) · **cấm** Lưu bản vẽ / Huỷ
- Attribution ẩn Leaflet · `RMMS.vn` · bỏ map-bar meta cụm/TS
- Context lock: `ui/design.md` · `ui/ux-analy.md` · task · implement Notes

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.25.02 · versionGate=rechecked · contentHash=sha256:24f695fc96706b7876dffb8960f4186e34b439fb0d5b519d0fa282a01760de02 · taskId=task_b9cb81b3 · dev_confirm=approve · route_confirm=/gis/tai-san -->
