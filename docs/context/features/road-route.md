# Tuyến đường — Feature Context (Master)

> **Slug:** `road-route` · **Module:** Master · **Phase:** P1  
> **Status:** Context · **data-analy confirmed A** (2026-08-08)  
> **Feature Kind:** **B** — Catalog list + form  
> **packKind:** `master` — **không demo** · UI confirm Design  
> **Data-analy:** [`../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md`](../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md) §3  
> **MFE:** `Linm.Web.RMMS.Master` · `/master/road-route`  
> **Hub:** [`master.md`](master.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Danh mục tuyến / đoạn đường — SearchInput trên Asset, map, import |
| Nguồn data | Folder cấp 2 dưới đơn vị trong `RMMS CUC 2` |
| Raw keys | ~42 · **canonical ~25** sau gộp alias |
| DoD | CRUD list · search CI · seed từ import · `legacyFolderName[]` |

## 2. Design / UI

| Screen | Pattern |
|--------|---------|
| List | Kind B CatalogListShell — cột Mã · Tên · Loại (QL/HCM/CT) · Trạng thái |
| Form | Modal/Slideout: code · name · routeKind · parentRouteCode? · notes |

## 3. API (outline)

`api/v1/integration/road-routes` · `GET ?search=` · `/search` SearchInput (Step **2li**) · BFF `web-bff/api/v1/integration/road-routes`.

## 4. Fields

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | `QL.1`, `HCM`, `QL.46B` |
| name | Text | |
| routeKind | LOOKUP | `QUOC_LO` · `HCM` · `CAO_TOC` · `KHAC` |
| parentCode | SearchInput road-route | đoạn/tránh thuộc tuyến mẹ (optional) |
| legacyAliases | tags/json | folder names import |
| isActive | Switch | |

## 5. Seed ưu tiên (từ CUC 2)

QL.1 · HCM · QL.7 · QL.8 · QL.9 · QL.10 · QL.12A/C · QL.15* · QL.16 · QL.45 · QL.46* · QL.47* · QL.48* · QL.49* · QL.217* · CT.NS-HCM · Cao tốc (TBD)

## 6. Gaps

| ID | |
|----|--|
| GAP-ROUTE-01 | `QL1;000` / `;052` — segment code vs route — Ask SA |
| GAP-ROUTE-02 | Tránh/hầm: child route hay attribute `sectionName` |
| GAP-ROUTE-03 | Noise `Đã Import Xong` — exclude seed |
