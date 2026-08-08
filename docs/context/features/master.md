# Master catalogs — Feature hub

> **Slug:** `master` · **Module:** Master · **Phase:** P1  
> **Status:** Context  
> **Feature Kind:** **B** — Catalog list/tree (erp-form-context)  
> **packKind:** `master` — **không demo** · UI confirm Design  
> **MFE:** `Linm.Web.RMMS.Master` · `/master`  
> **BE:** `Linm.RMMS.WebService` · `api/v1/rmms/*` — **cấm** ERP.Master  
> **Workflow:** `/agent-qldb-workflow` · Linm `example/master-catalog-no-demo.md`  
> **SSOT org:** [`../20-ORG-STRUCTURE-DRVN.md`](../20-ORG-STRUCTURE-DRVN.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Danh mục dùng chung cho toàn RMMS — implement **trước** page nghiệp vụ dùng SearchInput |
| Persona | Admin Cục · Khu · Văn phòng QLĐB |
| Demo HTML | **N/A** — không Signed demo; prototype tại Design |
| DoD module | 4 catalog Kind B + shared seed + lookup API work |

## 2. Catalogs (pages)

| # | Slug | catalogKind | UI | Priority |
|---|------|-------------|-----|----------|
| 1 | [`org-unit`](org-unit.md) | `org-unit` | Tree list + SearchInput | **P0** |
| 2 | `road-route` | `road-route` | List mã+tên tuyến | P0 |
| 3 | `asset-type` | `asset-type` | List loại TS (folder import) | P0 |
| 4 | `partner-unit` | `partner-unit` | Sở / BOT / Cty | P1 |

## 3. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| `/master/org-unit` | Kind B + **tree** | LinPageLayout · toolbar · tree grid · modal/slideout form |
| `/master/road-route` | Kind B list | CatalogListShell · search |
| `/master/asset-type` | Kind B list | CatalogListShell |
| `/master/partner-unit` | Kind B list | CatalogListShell |

**Confirm UI:** Design prototype + `reviewUrl` — **không** chờ demo HTML.

## 4. API (outline — SA chốt per feature)

Base prefix: `api/v1/rmms/`

| Catalog | Path |
|---------|------|
| org-units | `/rmms/org-units` · `/rmms/org-units/tree` · `/rmms/org-units/search` |
| road-routes | `/rmms/road-routes` · search |
| asset-types | `/rmms/asset-types` · search |
| partner-units | `/rmms/partner-units` · search |

Auth: JWT · tenant `companyCode` / `X-Company-Id` · shared Scope theo rule RMMS.

## 5. data-import

| ID | Path | Dùng cho |
|----|------|----------|
| DI-ORG | DRVN SSOT + map CUC 2 Chi cục | org-unit seed |
| DI-ROUTE | `RMMS CUC 2/**/{tuyến}/` folder names | road-route |
| DI-ATYPE | folder loại TS dưới tuyến | asset-type |
| DI-PARTNER | Sở / BOT / Cty top-level CUC 2 | partner-unit |

## 6. Workflow tasks

| Feature | STATUS | packKind | Gate |
|---------|--------|----------|------|
| `org-unit` | `specs/org-unit/STATUS.md` | `master` | no demo · design_confirm |
| (tiếp) road-route / asset-type / partner-unit | specs/… | `master` | same |

## 7. Out of scope

- CRUD tài sản / GIS / AI → MFE Asset / Gis / AiVision  
- Auth user package → Integration / Auth (khác org-unit tree)
