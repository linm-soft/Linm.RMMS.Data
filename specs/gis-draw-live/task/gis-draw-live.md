# Team lead — tasks — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| status | `confirmed` |
| mfeStdRoute | `/gis/tai-san` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-09-01T21:20:00.000Z` |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| BE API/BFF | `D:/AI-QLBD/Linm.RMMS.WebService` · domain `Gis` |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html` |
| Context | `Linm.RMMS.Data/docs/context/features/gis-draw-live.md` |
| Design zones | A sidebar · C map chrome (host→bar, **không** legend isolate) · D props/results · **không** header/toolbar B |

**Cấm:** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP.

## UI notes (2026-09-01 `/edit-web-feature`)

Canonical route **`/gis/tai-san`**. **`/gis/live`** · `/gis` · `/gis/ha-tang` · `/gis/tao-moi` → redirect **giữ `search`+`hash`**. `parseAssetTypeQuery` + `layerMatchesTypeQuery` — vd `?type=BUS_STOP` tick lớp Điểm đỗ. **Cấm** revert về `/gis/live` làm canonical.

**Cấm revert:** không header `← Dev ← GIS` + title · không toolbar seed/export · không bottom isolate legend. Menu GIS **chỉ** Bản đồ tài sản + Bản đồ Tuần đường — **cấm** re-add giám sát 2D / ha-tang / tạo mới.

Pin tài sản **chỉ xem** — **cấm** Leaflet.draw edit/CREATED · **cấm** `draggable` · **cấm** persist sau kéo (`GAP-MAP-DISPLAY-ONLY`).

Tab **Thuộc tính** = inspect (parity popup: Tên · Mã TS · KM · GPS · Tuyến) + gov `/data-gov-integration`: 3 tầng tuyến · dumpSpecs loại. **Cấm** Lưu bản vẽ / Huỷ · **cấm** textarea GeoJSON.

Lớp lazy default off + count. z≤8: nét **đã bake/index** (GetCorridors không bbox · overlay bake bỏ geomKey). Zoom sát: **giữ** cache `national` overlay Tuyến — **cấm** refetch bbox / `clipPathToView` ẩn nét (`GAP-MAP-INDEX-PAINT`). Snap `projectToPath` đúng `props.route` — cấm nearest inventory. Bake pairwise fail **không** nối chord; FE `splitPathOnJump` nhiều polyline cùng id. Nền: biển `theme.sea` một màu · đất `vn-land` · **cấm** OSM water 2 tone. GL: không đụng canvas transform.

Map-bar **2 chip: Tiêu chuẩn · Vệ tinh** (`CLIP_STYLE_OPTIONS`) — **cấm** Default/Streets/Sat EN · **cấm** chip Streets.

Đường nền clip: **nền + biên** OSM Carto (`GAP-MAP-ROAD-CARTO-01`) · overlay Tuyến = pair blue `guideBlue` / `routeBlueCase` (`GAP-MAP-ROUTE-BLUE`) — **cấm** peach `#fcd6a4`.
Map-bar **Vị trí của tôi** (`locateUserOnMap`) — **cấm** nút Fit. Click pin: **Tên: Vị trí của bạn** + **GPS:** (`/map-inspect-popup`).

Clip camera: **cấm** `setMaxBounds` sau `map.remove()` — `isVnClipMapAlive` + clear timer `attachVnClipBasemap` (`GAP-MAP-PANE-ALIVE`).

Overlay Tuyến: **cấm** dump GPS thưa (`isSparseGpsChord`) — fail = nét đứt (`GAP-MAP-DRAW-STREET-01` · `/map-draw-street`).

## Platform SSOT / permissions

| id | DoD |
|----|-----|
| T-CTX | Context + demo wired in implement MD |
| T-PERM | Local-mode OK · JWT TODO when platform auth lands |

## Tasks

| id | page | layer | role | deps | skills | DoD |
|----|------|-------|------|------|--------|-----|
| T-CTX | gis-draw-live | docs | dev | — | — | Stamp implement paths |
| T-PERM | gis-draw-live | perm | dev | — | — | Local mode note |
| T-BE-01 | map | api | dev | — | new-endpoint | purpose=live layers + live basemap · reuse drawings · build PASS |
| T-BE-02 | map | bff | dev | T-BE-01 | create-bff-api-feature | BFF forward purpose · build PASS |
| T-UI-MAP | /gis/draw | ui-map | dev | — | agent-dev-oms-map | Kind F A–D rút gọn · OMS R1–R11 · build PASS |
| T-FE-CLIENT | client | ui-api | dev | T-BE-01,T-UI-MAP | — | wire drawings + local fallback |
| T-QA-01 | gis-draw-live | qa | qa | T-UI-MAP,T-BE-02 | — | scenarios.md |
| T-RV-01 | gis-draw-live | review | review | T-QA-01 | review-query | findings.md |

## retry.ssot_rereview (HARD)

Live page `/gis/draw` audit before Write:

| Check | Result |
|-------|--------|
| 1 LinPageLayout nested CatalogListShell | N/A — Kind F map (not Kind B list) |
| footer CatalogListPagination | N/A |
| flex+skeleton | map-host flex fill · loading state |
| toolbar config | map-bar only (Fit · clip · toggle) — **cấm** zone B seed toolbar |
| list_parity | N/A packKind=map |
| tree_master | layer tree sidebar (not catalog tree_master) |
| form checklist | props panel after draw (not Slideout form) |
| OMS R1–R11 | required on T-UI-MAP |

## Deps order

T-BE-01 → T-BE-02 · T-UI-MAP → T-FE-CLIENT → verify builds → T-QA-01 → T-RV-01

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
