# Bản đồ ca (mobile) — Feature Context

> **Slug:** `patrol-map` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Signed · mobile field push từ hub Tuần đường  
> **Chrome SSOT (2026-09-01):** **copy web live** `/gis/live` — [`gis-draw-live.md`](gis-draw-live.md) · [`gis-osm-clip.md`](gis-osm-clip.md) · `mfe-gis-live-ssot.md` · `/map-inspect-popup`  
> **Web helper (done):** `locateUserOnMap` · `buildMyLocationPopupHtml` · `bindAssetPopup`  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-map` · `DES-MOB-PAT-MAP` · `DES-MOB-OMS-PATROL`  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · `api/v1/td-tk/sessions`  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions` (proxy)  
> **Implement:** `/edit-mobile-feature` `patrol-map` (+ `/map-inspect-popup`) · tiles Wave 4 `/implement-gis-map` (**pending** · **cấm** fake)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Bản đồ ca đang chạy · hành trình · pin điểm tuần · nền **cùng style web** · overlay kế tiếp |
| Persona | Tuần đường |
| Entry | Hub `patrol-home` hero **Tiếp tục bản đồ** · row **Bản đồ ca** |
| DoD P1 | Push `#sc-patrol-map` · GET sessions bind header · demo OMS overlay · check-in **toast** (sheet = sibling) · **Vị trí của tôi** loc + zoom + pin · map-bar **Tiêu chuẩn \| Vệ tinh** |
| DoD chrome | **Cùng** web `/gis/live` **đã implement** — 2 chip · locate pin+vùng · card **Tên: Vị trí của bạn** + **GPS:** · **cấm** Đường/Phố/Default/Streets/Sat EN · **cấm** Fit / Toàn tuyến · **cấm** MapKit title-only |
| Tiles | Wave 4 native **pending** (`GAP-MAP-PARITY-01`) — **cấm** fake clip BFF done · demo HTML được OSM/Esri |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|-------|
| Nav | Back + title **Ca đang chạy** + **Ghi điểm tuần** | iOS leading text Tuần đường · Android icon back |
| Map | Full-page OMS | polyline **OSRM tim đường** (corridor + track) · pin đã ghi / kế tiếp `projectToPath` |
| Next card | Overlay | **Điểm tiếp theo · OSRM** · Km 468+200 · Vinh |
| Pin / locate | Primary map-bar | **Vị trí của tôi** — GPS · vòng vùng accuracy · pin teal neo đáy · zoom vùng · deny/timeout **toast** (cấm `alert`) · **cấm** fake lat/lng · tuần: **snap tim đường** (khác GIS web inspect) · **click pin** → card **Tên: Vị trí của bạn** · **GPS:** (`/map-inspect-popup`) |
| Map bar | 2 chip + locate | **Tiêu chuẩn \| Vệ tinh** (paint clip khi tile Wave 4; P1 demo = cùng **nhãn**) · **Vị trí của tôi** · **cấm** Đường · Phố · Sat EN · **cấm** Toàn tuyến · **cấm** Fit |
| Legend | Chips wrap | Tất cả · Hành trình · Đã ghi điểm tuần · Điểm kế tiếp |

### 2b. Parity web `/gis/live` (HARD — copy live, không proto cũ)

Web **đã xong** 2026-09-01. Native **cùng** copy + chrome. Tiles clip BFF = Wave 4 riêng.

| Web (MFE done) | Mobile (cùng) |
|----------------|---------------|
| Chip **Tiêu chuẩn** \| **Vệ tinh** (`CLIP_STYLE_OPTIONS`) | Cùng nhãn · **cấm** Đường / Phố / Streets / Default / Sat EN |
| Paint Carto muted · đường nền+biên · water `#aad3df` | Cùng palette khi có tile Wave 4 · P1 demo = **nhãn** trước |
| Map-bar **Vị trí của tôi** — pin teal `#0f766e` + vòng `#14b8a6` | Cùng pin + vùng · **cấm** nút Fit / Toàn tuyến |
| Click pin locate: card `{MapPopup}` **Tên: Vị trí của bạn** · **GPS:** 5 decimal · × phải · meta `GPS · EPSG:4326` | `/map-inspect-popup` · **cấm** title-only / toast tọa độ / `alert` |
| Click TS: Tên · Mã TS · KM · GPS · Tuyến · **cấm** `setView` | Cùng card nếu hiện pin TS / check-in |
| Attribution `RMMS.vn` | Product name · **cấm** OSM.org wordmark release |

Load = fit ca / clip (không chip). Isolate list / next-card OK.

### 2c. Implement native

1. Load `/map-inspect-popup` + [`gis-draw-live.md`](gis-draw-live.md) §2 · **không** copy `#sc-patrol-map` Đường/Phố/Toàn tuyến.  
2. Slash `/edit-mobile-feature` `patrol-map` (iOS + Android).  
3. Dual OS cùng copy. **Cấm** fake clip tiles done. Sơn nền Wave 4 = [`gis-osm-clip.md`](gis-osm-clip.md) §2 (water `#aad3df` · **cấm** mask fill).

## 3. API (mobile BFF)

| Method | `{BffPrefix}` path | Status |
|--------|-------------------|--------|
| GET | `patrol/sessions` | **Live** — active session cho overlay copy |
| GET | `patrol/sessions/{id}` | **Live** — P2 drill |
| POST | `patrol/sessions/{id}/tracks` | **P2** CTX Kind E — **cấm invent P1** |
| GET | `patrol/sessions/{id}/coverage` | **P2** — **cấm invent P1** |

P1 geometry = demo SSOT `map-oms.js` (QL.1 Bến Thủy → Vinh · Nghệ An) khi tracks API chưa live. Mock DB: `local-script/seed-nghe-an-mock.sql` (`rmms_patrol_sessions` + pavement + assets).

**Cấm invent:** `api/v1/patrol-map` · ERP.* · app `:5101` trực tiếp.

## 4. Sibling (không gộp slug)

| Slug | Từ patrol-map |
|------|----------------|
| `patrol-home` | Back · reuse |
| `gis-draw-live` / `gis-osm-clip` | Chrome map-bar **cùng style** — không gộp slug |
| check-in sheet | **Ghi điểm tuần** · P1 toast · **cấm** sheet (`GAP-MOB-ACT-02`) |

## 5. Demo SSOT

Frame iOS 390×844 · Android 412×915. Proto `#sc-patrol-map` Đường/Phố/Toàn tuyến + popup title-only = **GAP** — Dev copy **web `/gis/live`**, không HTML cũ.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MAP-PARITY-01 | Native **tiles** ≠ web clip BFF — Wave 4 `/implement-gis-map` · **cấm** fake done |
| GAP-MAP-CHROME-01 | Chrome+popup **LOCKED 2026-09-01** = web live · native UI **pending** `/edit-mobile-feature` |
| GAP-MAP-LOCATE-POPUP-01 | **CLOSED web** (`buildMyLocationPopupHtml`) · native **pending** — card **Tên: Vị trí của bạn** + **GPS:** · **cấm** title-only |
