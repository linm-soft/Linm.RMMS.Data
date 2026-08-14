# Team lead — tasks — partner-unit

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `master` (Kind B flat + Modal) |
| solution_confirm | **approve** |
| domain_map | **Integration** |
| gates | TZ=`tz_na` · XCO=`xco_na` · SHARE=`share_a` |
| retryFrom | `team_lead` |
| updatedAt | `2026-08-08T16:15:00.000Z` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | `/master/partner-unit` · Modal form |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Integration** |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Integration/` |
| `source.bff` | `bff/domains/integration/LINM.RMMS.Integration.Bff/` |
| Seed | `docs/context/seed/partner-unit-seed.json` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/partner-unit/ui/prototype/partner-unit-list-prototype.html` |
| mfeStdUrl | `http://localhost:9318/master/partner-unit` |

## Retry SSOT re-audit (pre-Write)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **GAP** — nested shell |
| 2 | Footer `LinCatalogListPagination` | **GAP** — `footerPagination` generic |
| 3 | Cấm `pageSizeBar` in body | **GAP** |
| 4 | Flex + `useServerPagedListLoading` | **GAP** |
| 5 | Toolbar refresh · history · config · +Thêm · row menu | **GAP** — thiếu history/row menu |
| 6 | Filter `SearchTextInput` only | partial (extra Search button) |
| 7 | `LinCatalogDataGrid` + column resize ON | **GAP** — raw `<table>` |
| 8 | Tree? | N/A (flat catalog) |
| 9 | Form Create/Edit/View/Copy | OK modal · re-check after list |

**Decision:** `fix_all` list surface trước form polish. Parity reference: `AssetTypeListPage`.

## Implement HOW

| Topic | Decision |
|-------|----------|
| Wire | Page → `services/partnerUnit/endpoint.ts` → apiClient → BFF → API |
| List | **1** `LinPageLayout` · children = `LinCatalogDataGrid` only · **cấm** nested `CatalogListShell` |
| Footer | `footer={<LinCatalogListPagination …/>}` — **cấm** `footerPagination` / `pageSizeBar` |
| Loading | `useServerPagedListLoading` · flex root CSS (GAP-P2-LAYOUT-06) |
| Toolbar | FULL: refresh · history · schema config · add · edit/view/delete on activeRow |
| Row | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| Form | Modal local · View readOnly · `/erp-form-context` |
| partnerUnitCode | **SearchInput** → API search — **cấm** Text (consumer) |
| partnerKind | Dropdown ← init-data |
| FE BASE | `/integration/partner-units` |
| Perms | `usePartnerUnitPermissions` · codes `master.partner-units.*` |

## Task pack

### T-CTX-01
**DoD:** Context + DOMAIN-MAP Integration · API path `api/v1/integration/partner-units`

### T-BE-01
**layer:** api · deps: T-CTX-01  
**DoD:** Entity + DTOs + Service + Controller API-01…07 · share_a · `dotnet build` PASS

### T-BE-02
**layer:** migration Schema · deps: T-BE-01  
**DoD:** `Schema_RmmsPartnerUnits` · UK code · IX partner_kind · seed 13 · build PASS

### T-SEED-01
**layer:** Seed · deps: T-BE-02  
**DoD:** seed in schema migration · JSON SSOT 13 rows

### T-BFF-01
**layer:** bff · deps: T-BE-01  
**DoD:** proxy `web-bff/api/v1/integration/partner-units/**`

### T-PERM-01
**DoD:** `usePartnerUnitPermissions` · codes `master.partner-units.read|create|update|delete` · local mode · wire toolbar/row menu

### T-UI-LIST-01
**page:** `/master/partner-unit` · deps: T-BFF-01  
**DoD zones A–D + SSOT:**  
- A header LinPageLayout catalog  
- B toolbar FULL + SearchTextInput  
- C `LinCatalogDataGrid` (+ column filter/sort/resize)  
- D `LinCatalogListPagination` as `footer`  
- **HARD:** Dev re-review checklist `tl-retry-ssot-rereview` § HARD trước Write  
- yarn typecheck + build PASS

### T-UI-FORM-01
**deps:** T-UI-LIST-01  
**DoD:** Modal CRUD · init-data kinds · province · legacyFolder · View readOnly · create/edit/copy

### T-QA-01
**deps:** T-UI-FORM-01  
**DoD:** `qa/scenarios.md` · smoke mfeStdUrl list shell

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.08.31 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.25 |
| generatedAt | 2026-08-08T16:15:00.000Z |
| versionGate | rechecked |
