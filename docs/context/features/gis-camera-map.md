# Bản đồ camera (GIS) — Feature Context

> **Slug:** `gis-camera-map` · **Module:** `Gis` + `Camera` · **Phase:** P2 list thật + HLS wall  
> **Status:** Dev — wall/map đọc `GET /cameras` + events (không seed CAM-VINH)  
> **`{appId}`:** RMMS GIS  
> **`{MfeRoot}`:** `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis`  
> **MFE:** page `GisCameraMapPage` · route **`/gis/camera`** · menu **Bản đồ camera**  
> **`yarn start:std`:** `http://localhost:9302/gis/camera`  
> **Peer chrome:** [`gis-draw-live.md`](gis-draw-live.md) (clip Leaflet · **chỉ** pin camera · **cấm** lớp 36 loại TS)  
> **Wall/pool UX:** [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html)  
> **Popup:** `/map-inspect-popup` · default 2 KPI · click → 3 tab  
> **Map stack:** `/implement-map-stack` Wave 4 reuse `attachVnClipBasemap` — **cấm** OSM.org tile  
> **Sibling:** [`camera-connect.md`](camera-connect.md) (CRUD `/camera`) · **cấm** gộp slug  
> **Live:** mode mặc định **HLS** (`POST /cameras/{id}/live/start` `mode=hls` · `profile=sub`) — SSOT [`../30-CAMERA-LIVE-STREAM-CONFIG.md`](../30-CAMERA-LIVE-STREAM-CONFIG.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Bản đồ camera** — pool + wall HLS mọi camera ITS đã lưu · pin GIS theo mã/tuyến+Km/lớp cameras · KPI + inspect từ event ISAPI hôm nay |
| Persona | Vận hành Chi cục · ITS · điều hành giao thông |
| DoD | Route `/gis/camera` · **cấm** mock CAM-VINH · list = `GET /api/v1/cameras` · events hôm nay · wall tile **HLS mặc định** · map 50/50 ẩn được · pool+wall kéo-thả · popup KPI · 3 tab inspect · **cấm** `alert` |

**UI pattern:** Kind F map + wall (không form ≥10 field). `devSlash`: `/edit-web-feature` sau lock.

## 2. Current vs New

| Hạng mục | Đã có (cite) | Mới | Gap |
|----------|--------------|-----|-----|
| Screen / route | `/gis/tai-san` · `/gis/tuan-duong` · HTML wall demo | `/gis/camera` | GAP-CAM-MAP-01 closed |
| Entity | `CameraDevice` CRUD `/camera` · ingest events | Wall+map **cùng** list + event | GAP-CAM-MAP-BE-01 **closed** (list/events) |
| Map | Clip BFF · chip Tiêu chuẩn/Vệ tinh · `{MapPopup}` | Pin camera có tọa độ (mã GIS seed / tuyến+Km) | CameraDevice **không** cột GPS — không Schema |
| Popup | Tên · Mã TS · KM · GPS · Tuyến | + tổng xe (event hôm nay) · vượt tốc (speed > 60) | — |
| Wall | Kéo-thả localStorage | Tile **HLS** auto-start ô wall · heartbeat lease | JPEG fallback **không** auto trên wall |
| Permission | Camera list `camera.*` | Đề xuất `gis.camera.map` xem | seed `/gen-navigation-menu-import` sau |

## 3. Screens

| Screen | Route | Pattern | FormMode | Notes |
|--------|-------|---------|----------|-------|
| Bản đồ camera | `/gis/camera` | Kind F · wall + map | — | Dropdown bố cục · map 50/50 / ẩn · pool trái · wall giữa · map phải |

## 4. Design / UI

| Zone | Nội dung |
|------|----------|
| Toolbar | KPI (online · đếm xe · vượt tốc · mất tín hiệu) · **Select bố cục wall** · **Select bản đồ** (50/50 mặc định · Ẩn) |
| Pool | List cam chưa gán wall · kéo vào ô / click thêm · drop-zone gỡ |
| Wall | Lưới 2×2 / 3×2 / 1 cam / thêm tự do · kéo sắp xếp · Gỡ · Xem live · Toàn màn hình (**cấm** `alert`) |
| Map | Clip BFF · Tiêu chuẩn \| Vệ tinh · Vị trí của tôi · **cấm** Fit · **cấm** `setView` click pin · maxZoom 16 |
| Popup default | `{MapPopup}` hàng: Tên · Mã TS · KM · GPS · Tuyến · **Tổng số phương tiện** · **Tổng số xe vượt tốc độ** · meta EPSG:4326 |
| Inspect (click cam) | Tab 1 **Thông tin camera** · Tab 2 **Đếm phương tiện** · Tab 3 **Tốc độ** (event vượt) |

**Layout dropdown (wall):** Lưới 2×2 · Lưới 3×2 · 1 cam lớn · Thêm tự do.  
**Bản đồ dropdown:** Bản đồ 50/50 (default) · Ẩn bản đồ. Kéo splitter wall↔map persist `%`.

## 5. Fields / data

| Field | Control | Required | Note |
|-------|---------|----------|------|
| Bố cục wall | `Select` common | yes | Options local — GAP-CAM-MAP-LABEL-01 |
| Bản đồ | `Select` common | yes | `split50` / `off` |
| Mã TS | text | yes | `CameraDevice.code` |
| Tên / vị trí | text | yes | `CameraDevice.name` · tuyến `roadRouteCode` · `kmMark` |
| countToday | number | event | `GET /cameras/events?host=` `totalCount` hôm nay |
| speedEvents | list | event | `speedKmh` > 60 (mặc định QL) |
| Live | HLS | yes | Wall + fullscreen auto `mode=hls` |

**Cấm** hardcode nhãn form ERP. Chrome map = SSOT GIS live (`Tiêu chuẩn` · `Vệ tinh` · `Vị trí của tôi`).

## 6. Workflow

| Status | Ai | Action |
|--------|-----|--------|
| Online / Offline | `CameraDevice.online` | Wall + pin màu |
| Live | MediaMTX HLS | Auto-start ô wall online · heartbeat lease · stop khi gỡ/unmount |
| Event KPI | ingest ISAPI | Refresh 15s · **cấm** tick mock +xe |
| Layout persist | localStorage `rmms:gis-camera-map:layout` | Slot id = Guid device · bỏ slot CAM-VINH cũ |

## 7. API / DB (**cấm** invent `gis-camera-map`)

| Method | Path | Status |
|--------|------|--------|
| GET | `/api/v1/cameras` | **SSOT list** — GIS gọi BFF cùng host |
| GET | `/api/v1/cameras/events` | `host` · default hôm nay VN · stats loại xe |
| POST | `/api/v1/cameras/{id}/live/start` | `mode=hls` `profile=sub` |
| POST | `/api/v1/cameras/{id}/live/heartbeat` | TTL lease |
| POST | `/api/v1/cameras/{id}/live/stop` | Gỡ tile / unmount |
| GET | `/api/v1/gis/geojson/cameras` | Tọa độ pin khi mã khớp seed lớp cameras |
| GET/PUT | `/api/v1/cameras/wall/layout` | Chưa — localStorage |
| — | Invent `api/v1/gis-camera-map` | **Cấm** |

Entity: reuse `CameraDevice` + `CameraEvent`. **Không** thêm cột GPS turn này (snap mã / Km). TenantEntity + `company_id`. DateTime UTC.

## 8. Perm + menu

| | |
|--|--|
| `permissionCode` | `gis.camera.map` (xem) · peer `camera.device.view` |
| Package | GIS · ADMIN |
| L2 path | GIS → **Bản đồ camera** `/gis/camera` |
| Seed CSV | `/gen-navigation-menu-import` khi implement Auth — **chưa** seed turn này |

## 9. Gaps

| ID | Default | OUT |
|----|---------|-----|
| GAP-CAM-MAP-01 | Màn MFE mới — **cấm** nhét wall vào `/gis/tai-san` | closed |
| GAP-CAM-MAP-BE-01 | List+events thật từ `camera-connect` | Schema GPS / wall layout |
| GAP-CAM-MAP-POP-01 | Popup KPI 2 hàng + 3 tab inspect | **closed** — không title-only |
| GAP-CAM-MAP-WALL-01 | Pool/wall HLS trên MFE | **closed** — JPEG không auto trên wall |
| GAP-CAM-MAP-LABEL-01 | Select options local (không `useFormOptions` — Kind F GIS) | ERP form |
| GAP-MAP-CLICK-ZOOM | Click pin = popup only | `setView` |
| GAP-WEB-NEW-05 | Không Schema GPS | CLI khi cột DB |

## 10. Handoff

| Slash | Khi |
|-------|-----|
| `/edit-web-feature` | Lock specs sau code |
| `/agent-dev-camera-connect` | Connect form · JPEG · gateway |
| `/gen-navigation-menu-import` | Seed menu Auth |
| `/database-migration` | Khi persist layout **hoặc** GPS trên `CameraDevice` |
| `/implement-map-stack` | **Không** Wave 1–3 lại — reuse clip |

**Cấm** `/agent-dev` analyze_only. **Cấm** native trong pack này.
