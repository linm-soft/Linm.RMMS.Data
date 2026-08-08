# Team lead — tasks — asset-type

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `master` (Kind B flat + Modal) |
| solution_confirm | **approve** |
| domain_map | **Integration** |
| gates | TZ=`tz_na` · XCO=`xco_na` · SHARE=`share_a` |
| retryFrom | `team_lead` |
| updatedAt | 2026-08-08T13:05:00.000Z |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | `/master/asset-type` · Modal form |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Integration** |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Integration/` |
| `source.bff` | `bff/domains/integration/LINM.RMMS.Integration.Bff/` |
| Seed | `docs/context/seed/asset-type-seed.json` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset-type/ui/prototype/asset-type-list-prototype.html` |
| mfeStdRoute | `/master/asset-type` |
| mfeStdUrl | `http://localhost:9314/master/asset-type` |

## Implement HOW

| Topic | Decision |
|-------|----------|
| Wire | Page → `services/assetType/endpoint.ts` → apiClient → BFF → API |
| List | **1** `LinPageLayout` — **cấm** nested `CatalogListShell` |
| Footer | `footer={<CatalogListPagination />}` — **cấm** `footerPagination` · **cấm** `pageSizeBar` |
| Loading | `useServerPagedListLoading` · skeleton filter / overlay page |
| Filter | `LinListFilterField` + `SearchTextInput` only — **cấm** nút Tìm |
| Toolbar | refresh · history · config `fa-cog` (`LinListTableConfigModal`) · +Thêm · row edit/view/delete |
| Row menu | `CatalogRowActionMenu` · GAP-P2-94 |
| Form | Modal · View `readOnly` (**cấm** `disabled` xám) · `/erp-form-context` |
| groupCode | Dropdown ← init-data |
| FE BASE | `/integration/asset-types` |
| Perm | `master.asset-types.*` + local mode |

## Retry SSOT (HARD — trước Dev Write)

Load `tl-retry-ssot-rereview.md` · re-audit live page vs OrgUnit / RoadRoute parity.

**Dev re-review checklist § HARD trước Write** — fix **mọi** GAP cùng surface (không patch 1 chỗ).

| # | Check | Live gap (2026-08-08 retry) |
|---|-------|------------------------------|
| 1 | 1 LinPageLayout · cấm nested CatalogListShell | **FAIL** — nested shell |
| 2 | CatalogListPagination footer | **FAIL** — `footerPagination` |
| 3 | Cấm pageSizeBar in body | **FAIL** |
| 4 | flex + useServerPagedListLoading | **FAIL** — useCatalogTableBusy |
| 5 | Toolbar config fa-cog · history · row actions | **FAIL** |
| 6 | SearchTextInput only | **FAIL** — nút Tìm |
| 7 | tree_master? | N/A (flat) |
| 8 | Form View readOnly | **FAIL** — disabled |

## ssot.reuse

```
ui: LinPageLayout · CatalogListPagination · CatalogPagerNav · LinListTableConfigModal · CatalogRowActionMenu · SearchTextInput · LinListFilterField
grid: no local pager/table clone (tl-grid-ssot)
```

## implement.list_parity

```
pilot_ux: DoiTuongPage / RoadRouteListPage
layout: flex-root + data-catalog-list-page + GAP-P2-LAYOUT-06 smoke
tree: N/A flat
filter: SearchTextInput only (no Tìm btn)
loading: useServerPagedListLoading + CatalogTableSkeleton
footer: CatalogListPagination (common path / local catalog shim OK)
row_menu: GAP-P2-94
zone_f: LinListTableConfigModal
perm: master.asset-types.* + local mode
```

## Task pack

### T-CTX-01
**DoD:** Context + DOMAIN-MAP Integration · API path `api/v1/integration/asset-types`

### T-BE-01
**layer:** api · deps: T-CTX-01  
**DoD:** Entity + DTOs + Service + Controller API-01…08 · share_a · `dotnet build` PASS

### T-BE-02
**layer:** migration Schema · deps: T-BE-01  
**DoD:** `Schema_RmmsAssetTypes` · UK code · IX group_code · seed 23 · build PASS

### T-SEED-01
**layer:** Seed · deps: T-BE-02  
**DoD:** seed in schema migration · JSON SSOT 23 rows

### T-BFF-01
**layer:** bff · deps: T-BE-01  
**DoD:** proxy `web-bff/api/v1/integration/asset-types/**`

### T-PERM-01
**DoD:** codes `master.asset-types.read|create|update|delete` · `useAssetTypePermissions` + toolbar/menu gate · local mode

### T-UI-LIST-01
**page:** `/master/asset-type` · deps: T-BFF-01  
**DoD:** zones A–D · list_parity above · **Dev re-review checklist § HARD trước Write** · yarn build + typecheck PASS · STATUS `mfeStdUrl`

### T-UI-FORM-01
**deps:** T-UI-LIST-01  
**DoD:** Modal CRUD · init-data groups · legacyAliases · View `readOnly` (no grey disabled) · Create/Edit/Copy

### T-QA-01
**deps:** T-UI-FORM-01  
**DoD:** `qa/scenarios.md` · mfeStdUrl smoke checklist

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.08.25 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.25 |
| rulesVersion | 2026.08.08.20 |
| generatedAt | 2026-08-08T13:05:00.000Z |
| versionGate | ok |
