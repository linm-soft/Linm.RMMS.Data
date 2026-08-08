# Loại tài sản — Feature Context (Master)

> **Slug:** `asset-type` · **Module:** Master · **Phase:** P1  
> **Status:** Context · **data-analy confirmed A** (2026-08-08)  
> **Feature Kind:** **B** — Catalog list + form  
> **packKind:** `master` — **không demo** · UI confirm Design  
> **Data-analy:** [`../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md`](../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md) §4  
> **MFE:** `Linm.Web.RMMS.Master` · `/master/asset-type`  
> **Hub:** [`master.md`](master.md) · consumer [`asset.md`](asset.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Danh mục loại TS KCHT — filter Asset list + import map folder → type |
| Nguồn data | Folder cấp 3 dưới tuyến trong `RMMS CUC 2` |
| Raw keys | ~99 · **canonical ~23** sau gộp alias (không dấu / underscore / typo) |
| DoD | CRUD · SearchInput · seed + alias map · gắn Asset.type |

## 2. Design / UI

| Screen | Pattern |
|--------|---------|
| List | Kind B — Mã · Tên · Nhóm · Số alias |
| Form | code · name · groupCode · legacyAliases · icon? |

## 3. API

`api/v1/rmms/asset-types` · search · (optional) `GET /alias-map` cho import job.

## 4. Fields

| Field | Control | Notes |
|-------|---------|-------|
| code | Text code | `CULVERT_X`, `KM_POST`… |
| name | Text | Tên VN chuẩn |
| groupCode | LOOKUP | THOAT_NUOC · AN_TOAN · GIAO_THONG · NHA_TRAM · KHAC |
| legacyAliases | multi | mọi tên folder import |
| isActive | Switch | |

## 5. Canonical P0 (seed)

CULVERT_X · INTERCHANGE · SLOPE_PROTECT · LIGHTING · GANTRY_SIGN · GUARDRAIL · DELINEATOR · CULVERT_L · MEDIAN · ROW_UTIL · STATION_HOUSE · RETAINING · KM_POST · BUS_STATION · UNDERPASS · RAIL_CROSS · BUS_STOP · EMS_POST · TOLL · TUNNEL · FERRY · REST_AREA · LAND_ROW  

Chi tiết alias: INVESTIGATE §4.

## 6. Gaps

| ID | |
|----|--|
| GAP-ATYPE-01 | Spelling loạn (dãi/giải/giữaa) — cần alias table |
| GAP-ATYPE-02 | Folder QL.* nhầm dưới type — exclude |
| GAP-ATYPE-03 | Header Excel per type — cluster sau (fingerprint) |
