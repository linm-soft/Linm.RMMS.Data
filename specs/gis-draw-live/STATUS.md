# STATUS — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `map` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis-draw-live.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/gis` (DOMAIN-MAP — **cấm ERP.***) |
| mfeStdRoute | `/gis/tai-san` |
| mfeStdUrl | `http://localhost:9302/gis/tai-san` |
| taskId | `task_6e79dde5` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-09-03T00:00:00.000Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD · Autopilot)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | `Linm.RMMS.WebService` | **cấm** ERP.WebService / Domains/Master |
| uiRepo | `MFE-Source` | `Linm.Web.RMMS.Gis` |
| design_confirm | approve | prototype + reviewUrl |
| solution_confirm | approve | SA · RMMS Gis only |
| route_confirm | `/gis/tai-san` | `/gis/live` redirect giữ `?type=` |
| review_confirm | approve | findings.md |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/gis-draw-live.md | **done** |
| 4 | dev | implement/gis-draw-live.md | **done** |
| 5 | qa | qa/scenarios.md | **done** |
| 6 | review | review/findings.md | **done** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX | gis-draw-live | dev | — | done | |
| T-PERM | gis-draw-live | dev | — | done | JWT TODO |
| T-BE-01 | map | dev | — | done | purpose=live + live basemap |
| T-BE-02 | map | dev | T-BE-01 | done | BFF query forward |
| T-UI-MAP | /gis/live | dev | — | done | Kind F · OMS |
| T-FE-CLIENT | client | dev | T-BE-01,T-UI-MAP | done | BFF + fallback |
| T-QA-01 | gis-draw-live | qa | T-UI-MAP,T-BE-02 | done | scenarios.md |
| T-RV-01 | gis-draw-live | review | T-QA-01 | done | findings.md |

## Blockers / open questions

- None open. DEFER: PostGIS persist · multi-user lock · commit → Asset.

## Links
- mfeStdUrl: `http://localhost:9302/gis/draw`
- mfeStdRoute: `/gis/draw`

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
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
