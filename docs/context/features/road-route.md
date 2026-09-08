# Tuyến đường — Feature Context (Master)

> **Slug:** `road-route` · **Module:** Master · **Phase:** P1  
> **Status:** Context · **data-analy confirmed A** (2026-08-08)  
> **Feature Kind:** **B** — Catalog list + form  
> **packKind:** `master` — **không demo** · UI confirm Design  
> **Data-analy:** [`../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md`](../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md) §3  
> **Đề cương tuần đường:** [`../24-TUAN-DUONG-DUONG-BO.md`](../24-TUAN-DUONG-DUONG-BO.md) §6 RADS / LRS — lớp **đường bộ** (nền), không phải CRUD ca tuần  
> **MFE:** `Linm.Web.RMMS.Master` · `/mas/tuyen-duong`  
> **Hub:** [`master.md`](master.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Danh mục tuyến / đoạn đường — SearchInput trên Asset, map, import, **ca tuần đường**. Unique `code` (vd `QL.1`) = khóa LRS `RouteID + Km + m` khi GIS snap GPS (P2). |
| Nguồn data | SSOT [`import-gov-ssot.md`](import-gov-ssot.md) · set `gov-vn` `road_routes.csv` **T6.2026 normalize** (~210 tuyến chính + named/đoạn có `parent_code`). Script `normalize-routes-from-t6.mjs`. `RMMS CUC 2` = demo / archive. |
| **Khóa join (HARD)** | `RoadRoute.Code` = **slug từ file** (dump `road_name` / Excel T6 / `long_route_name` / `name_of_route_asset`) qua `RoadRouteService.NormCatalogCode` (in hoa, bỏ dấu, max 64, SHA suffix nếu dài). **Không** `IIdCodeService`. **Không** Guid FK. Tài sản / phân khu join **cùng chuỗi `Code`**. |
| Raw keys | ~42 · **canonical ~25** sau gộp alias |
| DoD | CRUD list · search CI · seed từ import · `legacyFolderName[]` |

## 2. Design / UI

| Screen | Pattern |
|--------|---------|
| List | Kind B CatalogListShell — cột Mã · Tên · Loại (QL/HCM/CT) · Trạng thái |
| Form | Modal/Slideout: code · name · routeKind · parentRouteCode? · notes |

## 3. API (outline)

`api/v1/integration/road-routes` · `GET ?search=&routeKind=` · `/search` SearchInput (Step **2li**) · `/init-data` · BFF `web-bff/api/v1/integration/road-routes` · **cấm** `open-api` SSOT.

## 4. Fields

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | `QL.1`, `QL.HCM`, `QL.46B` — **slug dump/T6**, không mã hệ thống sinh sẵn |
| name | Text | |
| routeKind | LOOKUP | `QUOC_LO` · `HCM` · `CAO_TOC` · `KHAC` |
| parentCode | SearchInput road-route | named/BOT / đoạn thuộc tuyến chính (`QL.1`) — import asset upsert `parent_code` |
| legacyAliases | tags/json | folder names import |
| isActive | Switch | |

**LRS (đề cương tuần đường):** điểm hiện trường lưu `routeCode` + `km` + `m`. Transform VN-2000 ↔ WGS-84 không đổi `code`. Chi tiết + cấm invent API: [`../24-TUAN-DUONG-DUONG-BO.md`](../24-TUAN-DUONG-DUONG-BO.md) §6.

## 5. Seed ưu tiên (từ `gov/raw` tuyến)

QL.1 · HCM và các mã **có trong** `Sau-sat-nhap/gov/raw`. Không seed từ folder CUC 2.

QL.1 · HCM · QL.7 · QL.8 · QL.9 · QL.10 · QL.12A/C · QL.15* · QL.16 · QL.45 · QL.46* · QL.47* · QL.48* · QL.49* · QL.217* · CT.NS-HCM · Cao tốc (TBD)

## 6. Gaps

| ID | |
|----|--|
| GAP-ROUTE-01 | `QL1;000` / `;052` — segment code vs route — Ask SA |
| GAP-ROUTE-02 | Tránh/hầm: child route hay attribute `sectionName` |
| GAP-ROUTE-03 | Noise `Đã Import Xong` — exclude seed |
| GAP-TD-LRS-01 | Snap GPS WGS-84 → lý trình Km+m trên `code` tuyến. Runtime map SRID 4326 ([`map-service.md`](map-service.md)); VN-2000 chỉ khi nộp hồ sơ. **Cấm** invent `api/v1/lrs-*` trước SA. |
| GAP-ROUTE-04 | Unique ID đoạn HĐ (RADS đề cương) vs `code` tuyến — SA: attribute HĐ hay child route |
| GAP-ROUTE-05 | Dropdown BC dùng tên `Km 0+000…` (NHANH/TRANH/GOM) như tuyến chính — peer [`org-route-scope.md`](org-route-scope.md) GAP-ORS-05 |
| GAP-ROUTE-NAMED-01 | **đóng** — import `road_assets` upsert named/đoạn (kind KHAC, `parent_code` = QL / named) · `GET …/road-routes/search?parentCode=` · form `/so-ts` + Biểu 1 SearchInput. Rebuild ghi đoạn vào `road_routes.csv`. |
| GAP-GOV-ROUTE-3LVL | **partial 2026-09-04** — `normalize-routes-from-t6.mjs` + Excel T6.2026 → mains `QUOC_LO`/`HCM`/`CAO_TOC` · named/đoạn `KHAC`+parent. **Cấm** đoán alias (vd Nghi Sơn–Bãi Trành → QL.45). Cần `ReImportSeed`+`ReInitData`. |
| GAP-ROUTE-UI-KM-01 | **partial** — list đầy `KM0+000…` kind Khác: import skip orphan KM; catalog gắn parent từ dump triple. Filter UI nên ưu tiên `QUOC_LO`/`HCM`/`CAO_TOC`. |
