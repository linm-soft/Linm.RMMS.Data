# Master catalogs â€” Feature hub

> **Slug:** `master` Â· **Module:** Master Â· **Phase:** P1  
> **Status:** Context Â· **data-analy** (catalog seed DRVN Â· import set **`gov-vn`** â€” [`import-gov-ssot.md`](import-gov-ssot.md))  
> **Feature Kind:** **B** â€” Catalog list/tree  
> **packKind:** `master` â€” **khÃ´ng demo** Â· UI confirm Design  
> **MFE:** `Linm.Web.RMMS.Master` Â· `/mas`  
> **Investigate:** [`../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md`](../../specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md)  
> **SSOT org:** [`../20-ORG-STRUCTURE-DRVN.md`](../20-ORG-STRUCTURE-DRVN.md) Â· **seed:** [`../seed/org-unit-seed.json`](../seed/org-unit-seed.json) (60 nodes)

## 1. Tá»•ng quan

| | |
|--|--|
| Má»¥c tiÃªu | 4 danh má»¥c dÃ¹ng chung â€” seed DRVN + CSV set **`gov-vn`**. `RMMS CUC 2` = demo. |
| Demo | **N/A** |
| DoD | Context + seed map + API search + Kind B pages |

## 2. Catalogs (tá»« investigate)

| # | Slug | catalogKind | Data signal (hiá»‡n táº¡i) | Priority |
|---|------|-------------|------------------------|----------|
| 1 | [`org-unit`](org-unit.md) | org-unit | Seed DRVN Â· CUC 2 folder = demo | **P0** |
| 2 | [`road-route`](road-route.md) | road-route | `gov/raw` tuyáº¿n Khu 2 | **P0** |
| 3 | [`asset-type`](asset-type.md) | asset-type | `gov/raw` cáº§u/háº§m + catalog | **P0** |
| 4 | [`partner-unit`](partner-unit.md) | partner-unit | 13 Sá»Ÿ/BOT/Cty | **P1** |

## 3. UI routes

| Path | Feature |
|------|---------|
| `/mas/co-cau-tc` | tree + form |
| `/mas/tuyen-duong` | list + form |
| `/mas/loai-ts` | list + form |
| `/mas/doi-tac` | list + form |

## 4. API prefix

`api/v1/integration/org-units` Â· `road-routes` Â· `asset-types` Â· `partner-units` (+ `/search` Â· `/init-data`) â€” DOMAIN-MAP **Integration** Â· BFF `web-bff/api/v1/integration/{resource}` Â· **cáº¥m** `api/v1/open-api/*` song song Â· **cáº¥m** `api/v1/rmms/*` Â· **cáº¥m** ERP.*

## 5. Consumer fields (erp-form-context 2li) â€” controlHint tá»« data-analy

| Catalog | Field trÃªn Asset / import | **controlHint** (approved) |
|---------|---------------------------|----------------------------|
| org-unit | `orgUnitCode` | **SearchInput tree** |
| road-route | `routeCode` | **SearchInput** |
| asset-type | `assetTypeCode` | **SearchInput** (nhiá»u alias) |
| partner-unit | `partnerUnitCode` | **SearchInput** |
| Ghi chÃº / mÃ´ táº£ / sá»‘ Ä‘o thÃ´ | â€” | **Text** / Number (free-style) |
| Enum nhá» á»•n Ä‘á»‹nh (náº¿u xuáº¥t hiá»‡n trong sheet) | â€” | **Dropdown** |

SSOT rule: Linm `example/data-analy-control-hint.md` â€” Design chá»‘t control-map; SA chá»‘t API lookup.

## 6. Pipeline

| Feature | STATUS |
|---------|--------|
| org-unit | `specs/org-unit/STATUS.md` |
| road-route | `specs/road-route/STATUS.md` |
| asset-type | `specs/asset-type/STATUS.md` |
| partner-unit | `specs/partner-unit/STATUS.md` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-08-29T07:38:26.087Z` |
| mobile | — | — | — |
