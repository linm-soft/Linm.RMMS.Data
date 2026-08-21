# Bản đồ ca (mobile) — Feature Context

> **Slug:** `patrol-map` · **Module:** `Patrol` · **Phase:** P1  
> **Status:** Signed · mobile field push từ hub Tuần đường  
> **Demo HTML:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-map` · `DES-MOB-PAT-MAP` · `DES-MOB-OMS-PATROL`  
> **BE:** `Linm.RMMS.WebService` · domain **Patrol** · `api/v1/patrol/sessions`  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/patrol/sessions` (proxy)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Bản đồ ca đang chạy · hành trình · pin điểm tuần · nền OSM/Esri · overlay kế tiếp |
| Persona | Tuần đường |
| Entry | Hub `patrol-home` hero **Tiếp tục bản đồ** · row **Bản đồ ca** |
| DoD P1 | Push `#sc-patrol-map` · live MapKit/OSM · GET sessions bind header · demo OMS overlay · check-in **toast** (sheet = sibling) · pin-here **loc + zoom + pin here** |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|-------|
| Nav | Back + title **Ca đang chạy** + **Ghi điểm tuần** | iOS leading text Tuần đường · Android icon back |
| Map | Full-page OMS | polyline **OSRM tim đường** (corridor + track) · pin đã ghi / kế tiếp `projectToPath` |
| Next card | Overlay | **Điểm tiếp theo · OSRM** · Km 468+200 · Vinh |
| Pin | Primary | **Ghim vị trí hiện tại** · loc live · **snap tim đường** · zoom follow · pin `.here` tip neo đáy · deny/timeout toast · **cấm** fake lat/lng |
| Map bar | Chips wrap | Đường · Phố · Vệ tinh · Toàn tuyến |
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
