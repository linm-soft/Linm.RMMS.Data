# Master catalogs — Feature hub

> **Slug:** `master` · **Module:** Master · **Phase:** P1  
> **Status:** Context · **data-analy** (catalog seed DRVN · import set **`gov-vn`** — [`import-gov-ssot.md`](import-gov-ssot.md))  
> **Feature Kind:** **B** — Catalog list/tree  
> **packKind:** `master` — **không demo** · UI confirm Design  
> **MFE:** `Linm.Web.RMMS.Master` · `/mas`  
> **Investigate:** [`../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md`](../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md)  
> **SSOT org:** [`../20-ORG-STRUCTURE-DRVN.md`](../20-ORG-STRUCTURE-DRVN.md) · **seed:** [`../seed/org-unit-seed.json`](../seed/org-unit-seed.json) (60 nodes)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | 4 danh mục dùng chung — seed DRVN + CSV set **`gov-vn`**. `RMMS CUC 2` = demo. |
| Demo | **N/A** |
| DoD | Context + seed map + API search + Kind B pages |

## 2. Catalogs (từ investigate)

| # | Slug | catalogKind | Data signal (hiện tại) | Priority |
|---|------|-------------|------------------------|----------|
| 1 | [`org-unit`](org-unit.md) | org-unit | Seed DRVN · CUC 2 folder = demo | **P0** |
| 2 | [`road-route`](road-route.md) | road-route | `gov/raw` tuyến Khu 2 | **P0** |
| 3 | [`asset-type`](asset-type.md) | asset-type | `gov/raw` cầu/hầm + catalog | **P0** |
| 4 | [`partner-unit`](partner-unit.md) | partner-unit | 13 Sở/BOT/Cty | **P1** |

## 3. UI routes

| Path | Feature |
|------|---------|
| `/mas/co-cau-tc` | tree + form |
| `/mas/tuyen-duong` | list + form |
| `/mas/loai-ts` | list + form |
| `/mas/doi-tac` | list + form |

## 4. API prefix

`api/v1/open-api/org-units` · `road-routes` · `asset-types` · `partner-units` (+ `/search`) — DOMAIN-MAP **Integration** · **cấm** `api/v1/rmms/*`

## 5. Consumer fields (erp-form-context 2li) — controlHint từ data-analy

| Catalog | Field trên Asset / import | **controlHint** (approved) |
|---------|---------------------------|----------------------------|
| org-unit | `orgUnitCode` | **SearchInput tree** |
| road-route | `routeCode` | **SearchInput** |
| asset-type | `assetTypeCode` | **SearchInput** (nhiều alias) |
| partner-unit | `partnerUnitCode` | **SearchInput** |
| Ghi chú / mô tả / số đo thô | — | **Text** / Number (free-style) |
| Enum nhỏ ổn định (nếu xuất hiện trong sheet) | — | **Dropdown** |

SSOT rule: Linm `example/data-analy-control-hint.md` — Design chốt control-map; SA chốt API lookup.

## 6. Pipeline

| Feature | STATUS |
|---------|--------|
| org-unit | `specs/org-unit/STATUS.md` |
| road-route | `specs/road-route/STATUS.md` |
| asset-type | `specs/asset-type/STATUS.md` |
| partner-unit | `specs/partner-unit/STATUS.md` |
