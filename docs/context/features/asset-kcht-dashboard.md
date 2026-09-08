# Dashboard Hạng mục KCHT — Feature Context

> **Slug:** `asset-kcht-dashboard` · **Module:** `Asset` · **Phase:** P1  
> **Status:** Context · **2026-08-24** hub bind live DRVN (t05 `PONTOON` · t16 `SPILLWAY` · t24 `RESCUE_VEHICLE`) · count = DB sau import `gov-vn`  
> **formType:** `dashboard` · Kind **E** tiles (count cards) · **không** gộp slug `dashboard` (KPI điều hành Report)  
> **Sources:** screenshot GOVOne «Hạng Mục Kết Cấu Hạ Tầng» · [`import-gov-ssot.md`](import-gov-ssot.md) · `asset.md` · `asset-kcht-32.md` · `asset-type.md` · `road-route.md` · `pavement-section.md`  
> **MFE provider:** `Linm.Web.RMMS.Asset` · route `/so-ts/hang-muc` · `mfeStdUrl` `http://localhost:9301/so-ts/hang-muc`  
> **Consumer (shell):** `D:\MFE-CORE\Linm.Web.Dashboard` · package `@linm/dashboard` · route `/dashboard` · `yarn start` **:8502**  
> **Cấm** copy 40 ô vào Dashboard hoặc Report · **cấm** `ParcelComponent` / `ParcelLinkConfig` (đó là SearchInput create — skill `/migrate-to-parcel`)  
> **Peer:** `asset` (list done) · `asset-type` (master done) · `asset-kcht-32` · `so-ts-type-grid` · `csdl-so-sach` (**khác lớp chứng từ** — không gộp row) · `dashboard` (KPI Report — khác màn)  
> **Parent / list nguồn:** `asset` · tables `rmms_road_assets` (+ `rmms_road_routes` · `rmms_pavement_sections` cho 2 ô tuyến/đoạn)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Hub 4 cột × 10 hàng: mỗi ô = loại hạng mục KCHT + **số lượng** · click → list `/so-ts?type=` (hoặc master/report đúng nguồn) |
| Persona | Hạt · Khu QLĐB · lãnh đạo |
| App hiện có | GOVOne lưới «Hạng Mục Kết Cấu Hạ Tầng» · Web Sổ TS list (chưa có hub count) |
| DoD P1 | Component shared trong Asset · page `/so-ts/hang-muc` · widget `@linm/rmms-asset-kcht-widget` · Dashboard `WIDGET_REGISTRY` mount · count API work · click drill |
| Align MFE | Standalone Asset `http://localhost:9301/so-ts/hang-muc` · shell widget `http://localhost:9000/dashboard` (Root `yarn start:rmms`) · Dashboard std `http://localhost:8502/dashboard` |

**Cấm** enqueue/implement nhầm slug `dashboard` (KPI tuần đường / map sự cố trên Report).

**≠ CSDL Cục:** lưới này **không** phải `/so-ts/csdl-so-sach`. Hai lớp — hang-muc/Sổ TS = từng cái (`rmms_road_assets`); biểu Cục = hàng in Excel. LOOKUP `road-route` chung · **cấm** gộp form (`GAP-CSDL-CUC-11` · [`csdl-cuc-2026.md`](csdl-cuc-2026.md) §1b). 9 loại 1:1 (cống, rãnh, hầm chui, kè, đèn, tường ồn, ITS, nút giao, đoạn mặt đường) vẫn 2 bảng.

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Hub KCHT (Asset) | Full · 4-col card grid | Title «Hạng Mục Kết Cấu Hạ Tầng» · cards (icon tròn · label · count) |
| Embed Dashboard | Widget slot | Header title từ registry · **body = cards only** (không H1 trùng) · không chrome GOVOne · không clone KPI Report |
| Drill | Navigate | Asset list filter `type` · tuyến → `/mas` road-route · đoạn → `/so-ts/pl-mat-duong` · 3 ô ops 0 → Report leaf |

**Card:** nền trắng · icon xanh trái · tên giữa · số đậm phải (format `vi-VN` · `22.045`).  
**Chrome:** skip GOVOne logo/Hồ sơ/Đổi MK · **cấm** `window.alert`/`confirm` · **LeaveConfirmModal** nếu form sau drill dirty.

### Host contract — `Linm.Web.Dashboard` (không Report)

Cơ chế thật (`WidgetArea.tsx`):

| | |
|--|--|
| Registry | Authen `menuType=widget` → FE `resolveParcelWidgets()` — `{ id, title, parcelName?, cols?: 1\|2\|3 }` |
| Mount | `System.import(parcelName)` → **`parcelModule.bootstrap` bắt buộc** → `mountRootParcel(parcelModule, { domElement })` |
| customProps | **chỉ** `domElement` — widget **không** nhận props từ host · đọc API tự · drill `navigateToUrl` |
| Lỗi | `catch` nuốt → placeholder (không invent toast trên host) |
| Layout | Grid 3 cột · `cols: 3` = full row (`.widgetCols3`) · header title luôn hiện |

**Entry registry P1 (Authen SSOT — không hardcode ERP placeholder):**

Authen · `menuType=widget` · set `dashboard` (quick-links) + `rmms-dashboard` (chỉ `rmms-*`):

| menuId | Title | size (`defaultUrl`) | parcel (`redirectTo`) | mountType | perm |
|--------|-------|---------------------|-----------------------|-----------|------|
| `dashboard-widget-quick-links` | Lối tắt nhanh | `3` | — | `native` | `dashboard:widget:quick-links:read` |
| `dashboard-widget-rmms-asset` | **Tổng quan tài sản** | `3` | `@linm/rmms-asset-kcht-widget` | `parcel` | `dashboard:widget:rmms-asset:read` |

Gói RMMS (`STAFF` · `MANAGER` · `ADMIN` · `MANAGER-RMMS`). Sidebar **ẩn** `menuType=widget`. View widget = cùng lưới 40 ô KCHT (`embedMode`).

**Export widget (Asset webpack entry riêng)** — khớp `dashboard.tsx` (named, không `exportName`):

```
export const { bootstrap, mount, unmount } = singleSpaReact({ … rootComponent: KchtHangMucDashboard … });
```

| | |
|--|--|
| Import map key | `@linm/rmms-asset-kcht-widget` (comment host: `*-widget`, vd. `@linm/erp-accounting-widget`) |
| Webpack | entry `linm-rmms-asset-kcht-widget.js` — **cấm** load main UMD `@linm/rmms-asset` (`linm-rmms-asset.js`) vào slot widget |
| Shared UI | `Linm.Web.RMMS.Asset/src/components/kcht/KchtHangMucDashboard/` |
| Widget wrapper | `…/src/widgets/kchtHangMucDashboardWidgetEntry.ts` (thin `singleSpaReact`) |
| Provider dev | Asset `yarn start` **:9201** |
| Host dev | Dashboard `yarn start` **:8502** · Root `yarn start:rmms` **:9000** `/dashboard` |
| Pages | `_manifest.json` thêm key widget (không trùng file hash của `@linm/rmms-asset`) |

**Import map (GAP-AKD-WIDGET-MAP):** profile RMMS Root hiện `fragments: ["common"]` — có `@linm/dashboard` :8502, **chưa** có `@linm/rmms-asset`. Local phải thêm alias:

`"@linm/rmms-asset-kcht-widget": "//localhost:9201/linm-rmms-asset-kcht-widget.js"`

(override / fragment RMMS — **không** nhét widget key vào `ParcelLinkConfig` của Report.)

**CSS host (GAP-AKD-WIDGET-CSS):** `.widgetBody` đang `align-items: center; justify-content: center` (placeholder). Khi `parcelName` set: `align-items: stretch; justify-content: flex-start` + min-height đủ 10 hàng · **cấm** để lưới 40 ô bị nén giữa slot.

**Không dùng** `/migrate-to-parcel` consumer path (`ParcelComponent` · `exportName` · `ensureParcelDevRuntime` trên Report). Skill đó chỉ khi SearchInput «Tạo mới» TS ngoài Asset — **sau** hub P1.

## 3. API

Base Asset · BFF `web-bff/api/v1/asset/…` · **cấm** invent `api/v1/dashboard/kcht` · **cấm** ERP.* · **cấm** API trên `@linm/dashboard`.

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `/api/v1/asset/road-assets/summary-by-type` | Count `RoadAsset` group `type` (tenant) |
| GET | `/api/v1/open-api/asset-types` | Catalog label + code + icon |
| GET | `/api/v1/open-api/road-routes` | Count ô «Thông tin tuyến» |
| GET | `/api/v1/asset/pavement-sections` | Count ô «Thông tin đoạn tuyến» (paged total) |

Auth: JWT · `X-Company-Id` · perm `asset.road-assets.read`.

**Chưa có** `summary-by-type` trên `RoadAssetsController` (chỉ list/CRUD) — SA thêm GET aggregate · **cấm** N+1 GET list pageSize lớn.

## 4. Database

| Nguồn | Table | Ô |
|-------|-------|---|
| TS theo loại | `rmms_road_assets.Type` | phần lớn 40 ô |
| Tuyến | `rmms_road_routes` | Thông tin tuyến |
| Đoạn | `rmms_pavement_sections` | Thông tin đoạn tuyến |
| Master loại | `asset-types` seed | label / thứ tự |

Indexes: `(CompanyCode, Type, IsActive)` trên `rmms_road_assets` nếu thiếu (`db-query-index.md`).

## 5. Events / tích hợp

Không publish. Count đọc DB. P2: subscribe `asset.updated` refresh widget.

## 6. Inventory 40 ô (screenshot SSOT visual)

Thứ tự **cột 1→4, trên→dưới**. Count trên ảnh = mock GOVOne — **không** seed production.

| # | Nhãn screenshot | Map P1 | Ghi |
|---|-----------------|--------|-----|
| 1 | Thông tin tuyến | `road-route` count | Master `/mas/tuyen-duong` · không `RoadAsset.type` |
| 2 | Thông tin đoạn tuyến | `pavement-section` count | `/so-ts/pl-mat-duong` |
| 3 | Bến phà và phà | `FERRY` | |
| 4 | Bến xe ô tô | `BUS_STATION` | |
| 5 | Cầu phao | `PONTOON` | live DRVN · CSV `tbl_pontoon` · catalog `BRIDGE` không bind ô |
| 6 | Cống chui dân sinh, hào kỹ thuật | `UNDERPASS` | |
| 7 | Cống thoát nước ngang | `CULVERT_X` | |
| 8 | Công trình HTKT trong phạm vi GPMB | `ROW_UTIL` | |
| 9 | Cột km | `KM_POST` | |
| 10 | Cống dọc, rãnh dọc, hào kỹ thuật dọc… | `DITCH` / `CULVERT_L` | seed còn `CULVERT_L` · context 36 gộp `DITCH` |
| 11 | Dải phân cách giữa | `MEDIAN` | |
| 12 | Bảo vệ mái dốc (gia cố mái ta luy) | `SLOPE_PROTECT` | |
| 13 | Điểm dừng đỗ xe bus, xe khách | `BUS_STOP` | |
| 14 | Cọc tiêu, cọc h | `DELINEATOR` | |
| 15 | Điểm giao bằng với đường sắt | `RAIL_CROSS` | |
| 16 | Đường tràn, cầu tràn, bến tràn, ngầm | `SPILLWAY` | live DRVN · CSV `tbl_spill_way` · catalog `TUNNEL` không bind ô |
| 17 | Hộ lan, tôn sóng, hàng rào… | `GUARDRAIL` | |
| 18 | Hệ thống chiếu sáng đường | `LIGHTING` | |
| 19 | Hệ thống giao thông thông minh | `ITS_CAMERA` | imported `tbl_its` · không copy Camera MFE |
| 20 | Kè, tường chắn | `RETAINING` | |
| 21 | Kho bãi vật tư dự phòng | **GAP-AKD-01** | gần `inventory` — **cấm** CRUD Contract |
| 22 | Nhà hạt QLĐB, trụ sở chi cục | `STATION_HOUSE` | |
| 23 | Nút giao đường bộ | `INTERCHANGE` | |
| 24 | Trạm phương tiện cứu hộ cứu nạn | `RESCUE_VEHICLE` | live DRVN count 8 · facility `RESCUE_STATION` list only |
| 25 | Rào chắn ồn | `NOISE_BARRIER` | imported |
| 26 | Trạm dừng nghỉ | `REST_AREA` | imported · không gộp PARKING |
| 27 | Trạm kiểm soát trọng tải xe | `WEIGH_STATION` | imported |
| 28 | Trạm thu phí | `TOLL` | |
| 29 | Trạm trực cấp cứu… | `EMS_POST` | |
| 30 | Trạm đếm | `COUNT_STATION` | imported · ≠ `rpt-dem-xe` grid |
| 31 | Giá long môn, cột cần vượt, gương cầu | `CONVEX_MIRROR` (+ `GANTRY_SIGN` alias 0) | dump = gương cầu · không bảng long môn |
| 32 | Biển báo | `TRAFFIC_SIGN` | catalog 36 · seed 23 thiếu |
| 33 | Đất thuộc TS hạ tầng đường bộ… | `LAND_ROW` | |
| 34 | Đường nhánh | `road-route` `NHANH` | dump `duongnhanh` · `/mas/tuyen-duong?routeKind=NHANH` |
| 35 | Đường tránh | `road-route` `TRANH` | dump `duongtranh` |
| 36 | Đường gom song hành | `road-route` `GOM` | dump `duonggom` |
| 37 | Bãi đỗ xe | `PARKING` | tách `tbl_rest_stops.type_work_id` |
| 38 | Thống kê tai nạn giao thông | `rpt-tngt` | count 0 · **navigate Report** · không Asset CRUD |
| 39 | Điểm đen, điểm tiềm ẩn TNGT | **GAP-AKD-03** | count 0 · ops/report |
| 40 | Biện pháp xử lý khắc phục | **GAP-AKD-03** | count 0 · ops/report |

Catalog 36 (`PAVEMENT` · `BRIDGE` · `TUNNEL` · ATGT con…) **không** = 40 ô ảnh — Design không bịa ô thiếu; ẩn loại không có trên screenshot trừ khi PO `expand_tiles`.

## 7. Gaps

| ID | Question | Default |
|----|----------|---------|
| GAP-AKD-01 | Ô không có `asset-type` code | P1 còn **t21** kho bãi · count 0 + toast · **không** invent API |
| GAP-AKD-02 | Bãi đỗ vs trạm dừng nghỉ | **Closed** · t26 `REST_AREA` · t37 `PARKING` (rebuild `type_work_id`) |
| GAP-AKD-03 | 3 ô ops count 0 | Link Report leaf · không bảng Asset |
| GAP-AKD-04 | 36 vs 40 vs seed 23 | Hub = **screenshot 40** P1 · seed/type thiếu = 0 |
| GAP-P2-QUERY-01 | Aggregate N+1 | Một GET `summary-by-type` |
| GAP-AKD-WIDGET-HOST | Consumer = MFE-CORE Dashboard | Sửa `WIDGET_REGISTRY` + CSS stretch tại `D:\MFE-CORE\Linm.Web.Dashboard` · **không** Report |
| GAP-AKD-WIDGET-MAP | Import map key widget | Root + Pages `_manifest.json` · **cấm** trỏ `@linm/rmms-asset` (app `#root`) |
| GAP-AKD-WIDGET-CSS | `.widgetBody` center placeholder | Stretch khi có `parcelName` |
| GAP-AKD-WIDGET-BOOT | `parcelModule.bootstrap` | Named export `{ bootstrap, mount, unmount }` |

## 8. Demo checklist

- [ ] 40 card · title khớp screenshot (standalone Asset có H1)
- [ ] Widget trên `/dashboard`: header **Tổng quan tài sản** · body không H1 trùng
- [ ] Count format vi-VN
- [ ] Click loại TS → `/so-ts?type=`
- [ ] `System.import('@linm/rmms-asset-kcht-widget')` mount · thiếu importmap = placeholder (không crash shell)
- [ ] 0 `Maximum update depth` · 0 `alert`
- [ ] Không chrome GOVOne · không copy grid vào Report `/bao-cao/dashboard`

<!-- context: asset-kcht-dashboard web P1 · Dashboard WidgetArea 2026-08-23 -->
