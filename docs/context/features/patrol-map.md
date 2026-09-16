# Bản đồ ca (mobile) — Feature Context

> **Slug:** `patrol-map` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Signed · mobile field push từ hub Tuần đường  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-map` · `DES-MOB-PAT-MAP` · `DES-MOB-OMS-PATROL`  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · `api/v1/td-tk/sessions`  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions` (proxy)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Bản đồ ca đang chạy · hành trình · pin điểm tuần · **nền = cùng clip Bản đồ tài sản** (`GisClipMapView`) · overlay kế tiếp |
| Persona | Tuần đường |
| Entry | Hub `patrol-home` hero **Tiếp tục bản đồ** · row **Bản đồ ca** |
| DoD P1 | Push `#sc-patrol-map` · **reuse `GisClipMapView`** (clip gis.vn · chips Tiêu chuẩn/Vệ tinh · **cấm** MapKit world · **cấm** OSM.org/Esri/Google) · GET sessions bind header · overlay ca · check-in **toast** (sheet = sibling) · pin-here **loc + zoom + pin here** |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|-------|
| Nav | Back + title **Ca đang chạy** + **Ghi điểm tuần** | iOS leading text Tuần đường · Android icon back |
| Map | Full-page clip | **Host dual = `GisClipMapView`** (clip gis.vn · MapLibre BFF MVT · **cấm** MapKit world · **cấm** osmdroid PBF raster · **cấm** OSM.org/Esri/Google) · polyline **OSRM tim đường** (`OsrmBase` Debug public) · pin đã ghi / kế tiếp `projectToPath` · **GAP-MOB-AND-MAP-LOAD-01 closed** · **GAP-MAP-OSRM-CONFIG-01 closed** |
| Next card | Overlay | **Điểm tiếp theo · OSRM** · Km 468+200 · Vinh |
| Pin | Primary | **Ghim vị trí hiện tại** · loc live · **snap tim đường** · zoom follow · pin `.here` tip neo đáy · deny/timeout toast · **cấm** fake lat/lng |
| Map bar | Chips wrap | **Tiêu chuẩn** · **Vệ tinh** (cùng clip) · Toàn tuyến · **cấm** Đường/Phố OSM.org |
| Legend | Chips wrap | Tất cả · Hành trình · Đã ghi điểm tuần · Điểm kế tiếp |

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
| check-in sheet | **Ghi điểm tuần** · P1 toast · **cấm** sheet (`GAP-MOB-ACT-02`) |

## 5. Demo SSOT

Frame iOS 390×844 · Android 412×915 · copy VN từ `#sc-patrol-map`.

## 6. Cấm / next

- MapKit world / OSM.org / Esri / Google làm nền  
- Fork style clip khác `#sc-gis-map`  
- Next: `/implement-gis-map` `ios_replace_all_maps` (reuse `GisClipMapView`)

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-16T04:44:53.117Z` |
