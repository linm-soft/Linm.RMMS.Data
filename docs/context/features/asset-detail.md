# Context — asset-detail (mobile · Chi tiết tài sản)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| title | [Mobile] [Tài sản] -> Chi tiết tài sản |
| des | `DES-MOB-ASSET-DETAIL` |
| demo | `#sc-asset-detail` · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-DET-PACK-01 · surface = full `#sc-asset-detail`) |
| changeScope | `new_page` |
| parent | `asset` list `#sc-asset-list` row · adjust «Sửa» |
| domain | Asset · `RoadAssetDto` / `rmms_road_assets` — CTX web `asset.md` · peer list `asset` mobile |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Asset — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/asset/road-assets/{id}` |
| peers | `asset.md` · `asset-hub.md` · `gis.md` · mobile list `asset` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Chi tiết tài sản**: mã TS · loại · tuyến · lý trình · tọa độ (Android) · CTA ghim bản đồ |
| Persona | Tuần đường · Hạt QLĐB |
| Entry | List row `#sc-asset-list` `row-asset-*` (live = toast P1) · adjust «Sửa» |
| DoD P1 | Dual `#sc-asset-detail` · GET by id · nav `gis-map` · demo fallback · **cấm** mfeStdUrl · **cấm** invent `asset-detail` path · **cấm** PUT/DELETE trên slug này |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full detail | `DES-MOB-ASSET-DETAIL` | Title iOS «Chi tiết» / Android «Chi tiết tài sản» · back list |
| Hero | Mã TS | — | caption 13 + `Code` bold ≥24/28 |
| Rows | ListRow group | — | Loại · Tuyến · lý trình · (Android) Tọa độ |
| Primary | Ghim trên bản đồ | — | → `gis-map` · pass id/lat/lng nếu có |

**Không** gộp: `#sc-asset-list` · `#sc-asset-collect` · `#sc-asset-adjust` · `#sc-asset-ai` · form Create/Edit web · soft delete.

## 3. API (mobile BFF — cấm invent path `asset-detail`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `asset/road-assets/{id}` | `RoadAssetsController.GetById` · XCO | **Live** — detail bind |
| PUT/DELETE | `asset/road-assets/{id}` | Update / SoftDelete | **OUT** P1 slug — owner `asset-adjust` |
| GET | `asset/road-assets` | list | parent `asset` — **OUT** |
| GET | `asset/road-assets/init-data` | dropdowns | **OUT** P1 detail |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/asset-detail` · Finance `api/v1/assets` · ERP.*.

`RoadAssetDto` có `Lat`/`Lng` nullable — Android row Tọa độ bind khi có · iOS demo **thiếu** row → dual GAP.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `asset` / `#sc-asset-list` | Parent / back |
| `asset-hub` | Grandparent hub |
| `gis-map` | CTA Ghim trên bản đồ |
| `asset-adjust` | Entry «Sửa» · **không** gộp PUT/DELETE |
| `asset-collect` / `asset-ai` | OUT |

## 5. Demo SSOT

| Field | Value |
|-------|-------|
| Code | TS-20260810-014 |
| Loại | Cống |
| Tuyến · lý trình | QL.1 · Km 1556+000 |
| Tọa độ (Android) | 11.5300, 109.0040 |
| CTA | Ghim trên bản đồ |
| Back | Tài sản → list |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-ASSET-DET-PACK-01 | **CLOSED PO** · packKind=`screen` · **cấm** bottom-sheet |
| GAP-MOB-ASSET-DET-TITLE-01 | **CLOSED PO** · giữ dual iOS «Chi tiết» / Android «Chi tiết tài sản» |
| GAP-MOB-ASSET-DET-GPS-01 | **CLOSED PO** · parity dual · bind `Lat`/`Lng` khi có · ẩn nếu null |
| GAP-MOB-ASSET-DET-TYPE-01 | **CLOSED PO** · reuse `typeLabel` · **không** lookup API P1 |

## 7. Cấm

- Invent `GET api/v1/asset-detail` / dedicated DetailController trên BFF  
- ERP.* · Finance `api/v1/assets` · `mfeStdUrl` · WebView HTML  
- Gộp collect / adjust / AI / form web vào slug  
- Fake toast success · system alert · watermark Gói  
- Start sibling `gis-map` / adjust trước Approve (`GAP-MOB-ACT-06`)

<!-- context: asset-detail mobile P1 · data_analy 2026-08-30 -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `qa` | `await_confirm` | `2026-08-30T22:23:26.832Z` |
