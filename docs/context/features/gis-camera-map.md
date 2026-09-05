# Bản đồ camera (GIS) — Feature Context

> **Slug:** `gis-camera-map` · **Module:** `Gis` + `Camera` · **Phase:** P1 mock  
> **Status:** Draft → Dev (chat `/new-web-feature` `implement` 2026-09-02)  
> **`{appId}`:** RMMS GIS  
> **`{MfeRoot}`:** `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis`  
> **MFE:** page `GisCameraMapPage` · route **`/gis/camera`** · menu **Bản đồ camera**  
> **`yarn start:std`:** `http://localhost:9302/gis/camera`  
> **Peer chrome:** [`gis-draw-live.md`](gis-draw-live.md) (clip Leaflet · **chỉ** pin camera · **cấm** lớp 36 loại TS)  
> **Wall/pool UX:** [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html)  
> **Popup:** `/map-inspect-popup` · default 2 KPI · click → 3 tab  
> **Map stack:** `/implement-map-stack` Wave 4 reuse `attachVnClipBasemap` — **cấm** OSM.org tile  
> **Sibling:** [`camera-connect.md`](camera-connect.md) (CRUD `/camera`) · **cấm** gộp slug

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Bản đồ camera** — wall nhiều cam + bản đồ clip GIS **chỉ camera ANPR** · seed ngã tư Vinh–Nghệ An · mock đếm xe live + vượt tốc |
| Persona | Vận hành Chi cục · ITS · điều hành giao thông |
| DoD P1 | Route `/gis/camera` · 10 cam seed · dropdown bố cục · map 50/50 ẩn được · pool+wall kéo-thả · popup KPI · 3 tab inspect · **cấm** `alert` |

**UI pattern:** Kind F map + wall (không form ≥10 field). `devSlash`: `/edit-web-feature` sau lock.

## 2. Current vs New

| Hạng mục | Đã có (cite) | Mới | Gap |
|----------|--------------|-----|-----|
| Screen / route | `/gis/tai-san` Bản đồ tài sản · `/gis/tuan-duong` tuần đường · HTML wall `camera-ops-dashboard-demo.html` | `/gis/camera` Bản đồ camera | GAP-CAM-MAP-01 |
| Entity / status | `CameraDevice` CRUD `/camera` · pin CAM trên live | Seed mock 10 ANPR Vinh · không Schema P1 | GAP-CAM-MAP-BE-01 |
| Map | Clip BFF · chip Tiêu chuẩn/Vệ tinh · `{MapPopup}` | Cùng stack · **chỉ** pin camera · default split 50/50 | — |
| Popup | Tên · Mã TS · KM · GPS · Tuyến | + **Tổng số phương tiện** · **Tổng số xe vượt tốc độ** | GAP-CAM-MAP-POP-01 |
| Wall | Demo HTML kéo-thả localStorage | Cùng hành vi trên MFE · dropdown layout | GAP-CAM-MAP-WALL-01 |
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

## 5. Fields / mock

| Field | Control | Required | Note |
|-------|---------|----------|------|
| Bố cục wall | `Select` common | yes | Options local P1 — GAP-CAM-MAP-LABEL-01 |
| Bản đồ | `Select` common | yes | `split50` / `off` |
| Mã TS | text | yes | `CAM-VINH-01`…`10` · IdCode pending BE |
| Ngã tư | text | yes | Seed Vinh |
| countToday | number live | mock | Tab 2 |
| speedEvents | list | mock | Tab 3 · tốc độ > giới hạn |

**Cấm** hardcode nhãn form ERP. Chrome map = SSOT GIS live (`Tiêu chuẩn` · `Vệ tinh` · `Vị trí của tôi`).

## 6. Workflow

| Status | Ai | Action |
|--------|-----|--------|
| Online / Offline | mock seed | Wall + pin màu |
| Live tick | client 3s | +xe · thỉnh thoảng event vượt |
| Layout persist | localStorage `rmms:gis-camera-map:layout` | P2 → `GET/PUT /cameras/wall/layout` |

## 7. API / DB (sketch — **cấm** CLI Schema P1)

| Method | Path | Status |
|--------|------|--------|
| GET | `/api/v1/cameras` | Peer `camera-connect` — P1 màn này **mock seed** |
| GET/PUT | `/api/v1/cameras/wall/layout` | P2 |
| GET | `/api/v1/cameras/{id}/events` | P2 · P1 mock vượt tốc |
| — | Invent `api/v1/gis-camera-map` | **Cấm** |

Entity: reuse `CameraDevice` + `CameraEvent` (peer). IdCode prefix **CAM** pending `IIdCodeService`. TenantEntity + `company_id`. DateTime UTC.

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
| GAP-CAM-MAP-01 | Màn MFE mới — **cấm** nhét wall vào `/gis/tai-san` | — |
| GAP-CAM-MAP-BE-01 | P1 seed client · BE live P2 `camera-connect` | Schema |
| GAP-CAM-MAP-POP-01 | Popup KPI 2 hàng + 3 tab inspect | title-only |
| GAP-CAM-MAP-WALL-01 | Pool/wall = demo HTML | — |
| GAP-CAM-MAP-LABEL-01 | Select options local (không `useFormOptions` — Kind F GIS) | ERP form |
| GAP-MAP-CLICK-ZOOM | Click pin = popup only | `setView` |
| GAP-WEB-NEW-05 | Không Schema P1 | CLI khi cột DB |

## 10. Handoff

| Slash | Khi |
|-------|-----|
| `/edit-web-feature` | Lock specs sau code |
| `/agent-dev-camera-connect` | Live JPEG / gateway P2 |
| `/gen-navigation-menu-import` | Seed menu Auth |
| `/database-migration` | Khi persist layout/event DB |
| `/implement-map-stack` | **Không** Wave 1–3 lại — reuse clip |

**Cấm** `/agent-dev` analyze_only. **Cấm** native trong pack này.
