# CLICKABLES — gis-map

| Field | Value |
|-------|-------|
| feature | `gis-map` |
| source | `/agent-review-mobile` Step 5d · **no live `--crawl`** (roleOnly packet **cấm** e2e) |
| evidence | action-tree · QA Maestro dual · CORE PNG |
| updatedAt | `2026-08-31T01:40:50.000Z` |

## Entries (owner / shared_action)

| id | label | expectId | OS | result | gap |
|----|-------|----------|----|--------|-----|
| hub-tile-map | Xem trên bản đồ / `#tile-map` | `#sc-gis-map` | dual | **PASS** | — |
| hub-row-map | Row map `#i-scope` | `#sc-gis-map` | dual | **PASS** | — |
| detail-ghim | Ghim trên bản đồ | `#sc-gis-map` (+ focus id) | dual | **PASS** | — |
| incident-map | Bản đồ / Xem trên bản đồ | `#sc-gis-map` | dual | **PASS** | — |
| and-danh-sach | Danh sách | `asset` list (reuse) | Android | **PASS** | — · **không** enqueue |
| back-hub | Back Tài sản / chevron | `asset-hub` | dual | **PASS** | — |

## Chrome / same-slug (GAP-MOB-ACT-07 · không enqueue)

| id | label | result |
|----|-------|--------|
| basemap-* | Đường · Phố · Vệ tinh · Toàn tuyến | **PASS** (local) |
| legend-* | Tất cả · Tài sản · Sự cố · Hành lang(iOS) | **PASS** (isolate) |
| search | Tìm tài sản, sự cố… | **PASS** iOS · N/A Android dual |
| lop | Lớp toast P1 | **PASS** iOS |
| map-host | MapKit / OSM host | **PASS** |

## GAP-MOB-ACT-03

**none** — không FAIL toast/no-op chưa enqueue. Sibling list/detail/incident **đã** pipeline · **cấm** start (`GAP-MOB-ACT-06`).

## Note

Live `/run-mobile-e2e --crawl` **không** chạy ở role review (VERIFY GATE). Backstop = analy action-tree + QA e2e `ok:true`.
