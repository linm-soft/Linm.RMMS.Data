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
| Nguồn data | SSOT [`import-gov-ssot.md`](import-gov-ssot.md) · set `gov-vn` `road_routes.csv` **429** (live DRVN 604). `RMMS CUC 2` = demo / archive. |
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
| code | Text code | `QL.1`, `HCM`, `QL.46B` |
| name | Text | |
| routeKind | LOOKUP | `QUOC_LO` · `HCM` · `CAO_TOC` · `KHAC` |
| parentCode | SearchInput road-route | đoạn/tránh thuộc tuyến chính (optional) |
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
