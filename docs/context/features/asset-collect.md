# Context — asset-collect (mobile · Thu thập thủ công)

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| title | [Mobile] [Tài sản] -> Thủ công |
| des | `DES-MOB-ASSET-COLLECT` |
| demo | `#sc-asset-collect` · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · STATUS demo `Linm.RMMS.Demo/src/demo/ios/index.html` |
| packKind | **`screen`** (PO chốt · scan meta `sheet` = mislabel · surface = full `#sc-asset-collect`) |
| changeScope | `new_page` |
| parent | `asset-hub` tile «Thủ công» / `#i-plus` · `go('asset-collect')` |
| domain | Asset · `CreateRoadAssetRequest` / `RoadAssetDto` / `rmms_road_assets` — CTX web `asset.md` · peer `asset-hub` · mobile list `asset` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP Asset — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/asset/road-assets` POST · init-data · types catalog |
| peers | `asset.md` · `asset-hub.md` · `asset-detail.md` · `asset-kcht-32.md` · `gis.md` · mobile P1 `mobile/context.md` §7–8 |
| perm | `asset.road-assets.create` |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Form **Thu thập thủ công**: chọn loại · tên/mô tả · tuyến/lý trình · GPS ghim tự động · tình trạng (iOS) · ảnh · CTA **Thêm tài sản** → POST create · toast mã TS |
| Persona | Tuần đường · Hạt QLĐB |
| Entry | Hub `#sc-asset-hub` tile Thủ công · chip jump «Thu thập tay» |
| DoD P1 | Dual `#sc-asset-collect` · POST create thật · GPS auto-pin · type từ catalog · **cấm** gõ tay lat/lng · **cấm** invent `asset-collect` path · **cấm** gộp AI / adjust / list |

## 2. Design / UI

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Screen | Full form | `DES-MOB-ASSET-COLLECT` | Title «Thu thập thủ công» · back hub |
| Type | Select * | — | VN labels demo · bind code Integration |
| Name | Text * | — | Tên / mô tả |
| RouteKm | Text readonly * | — | «Tuyến / lý trình» · GPS/session snap |
| GpsPin | Text readonly * | — | «Định vị ghim tự động» · lat,lng · ±m |
| Status | Text/Select | — | iOS «Tình trạng» · Android **thiếu** — dual GAP |
| Photos | PhotoRow | — | `#i-camera` · `openCapture('asset')` |
| Primary | Thêm tài sản | — | POST · toast `Đã thêm tài sản · {Code}` |

**Không** gộp: `#sc-asset-ai` · `#sc-asset-adjust` · `#sc-asset-list` · `#sc-asset-detail` · web Kind B Create form · soft delete.

## 3. API (mobile BFF — cấm invent path `asset-collect`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `asset/road-assets/init-data` | Statuses · Sources · Units | **Live** — status/source |
| GET | `integration/asset-types` | catalog loại | **Live** — select Type |
| GET | `integration/road-routes/search` | tuyến | **Live** — resolve Route code |
| GET | `patrol/sessions` | ca đang tuần (optional prefill Route/Km) | **Live** · optional |
| POST | `asset/road-assets` | `RoadAssetsController.Create` | **Live** — submit |
| POST | `…/media` / asset media | planned CTX `asset.md` | **MISSING** P1 — GAP media |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/asset-collect` · Finance `api/v1/assets` · ERP.*.

`CreateRoadAssetRequest` required: `Name` · `Type` · `Route` · `KmFrom` · `Status`. Default `Source=manual` trên service. `Code` server `TS-yyyyMMdd-nnn`.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `asset-hub` | Parent / back |
| `asset-ai` | Sibling Camera AI — **OUT** |
| `asset-adjust` | Sibling cập nhật/bớt — **OUT** |
| `asset` / list · `asset-detail` | Tra cứu sau tạo — **OUT** pack |
| `gis-map` | Không CTA trên collect P1 |

## 5. Demo SSOT

| Field | iOS | Android |
|-------|-----|---------|
| Title | Thu thập thủ công | **same** |
| Back | text «Tài sản» + chevron | icon-only chevron |
| Loại options | Cột km · Biển báo · Cống · Hộ lan · **Cầu** | thiếu **Cầu** (4) |
| Tên | Cột Km 1556 | **same** |
| Tuyến / lý trình | QL.1 · Km 1556+000 | **same** |
| Định vị | 11.5300, 109.0040 · ±5 m | **same** |
| Tình trạng | Tốt | **thiếu field** |
| Ảnh section label | «Ảnh» | **không** label |
| CTA | Thêm tài sản | **same** |
| Toast | Đã thêm tài sản · TS-20260818-021 | **same** |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-ASSET-COLLECT-PACK-01 | **PO closed** — surface = `screen` full form · Design cập nhật STATUS |
| GAP-MOB-ASSET-COLLECT-STATUS-01 | Android thiếu Tình trạng — dual · Prefer Select từ init-data |
| GAP-MOB-ASSET-COLLECT-TYPE-01 | Option «Cầu» iOS-only · catalog live = SSOT options |
| GAP-MOB-ASSET-COLLECT-MEDIA-01 | Photo local P1 · **không** invent media path · SA nếu Signed upload |
| GAP-MOB-ASSET-COLLECT-ROUTE-01 | Demo 1 field gộp → wire `Route` + `KmFrom` (+ GPS Lat/Lng) |
| GAP-MOB-ASSET-COLLECT-GPS-01 | Deny / poor GPS → `DES-MOB-GPS-DENY` · **cấm** fake · **cấm** gõ tay |

## 7. Cấm

- Invent `POST api/v1/asset-collect` / dedicated CollectController trên BFF  
- ERP.* · Finance `api/v1/assets` · `mfeStdUrl` · WebView HTML  
- Gộp Camera AI / adjust / list / detail vào slug  
- Fake toast success khi POST fail · system alert · watermark Gói  
- Gõ tay lat/lng · ship `demoItems` khi BFF live (`GAP-MOB-REAL-02`)  
- Start sibling trước Approve (`GAP-MOB-ACT-06`) · enqueue submit (`GAP-MOB-ACT-07`)

<!-- context: asset-collect mobile P1 · data_analy 2026-08-30 -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-30T23:25:31.802Z` |
