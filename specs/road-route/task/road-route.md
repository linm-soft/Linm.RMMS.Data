# Team lead — tasks — road-route

| Field | Value |
|-------|-------|
| feature | `road-route` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `master` (Kind B flat + Modal) |
| solution_confirm | **approve** |
| domain_map | **Integration** |
| gates | TZ=`tz_na` · XCO=`xco_na` · SHARE=`share_a` |
| updatedAt | 2026-08-08T13:00:00.000Z |
| retry | from `team_lead` · task_781e6158 |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | `/master/road-route` · Modal form |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Integration** |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Integration/` |
| `source.bff` | `bff/domains/integration/LINM.RMMS.Integration.Bff/` |
| Seed | `docs/context/seed/road-route-seed.json` (38) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/road-route/ui/prototype/road-route-list-prototype.html` |
| mfeStdRoute | `/master/road-route` |
| mfeStdUrl | `http://localhost:9314/master/road-route` |

## Implement HOW

| Topic | Decision |
|-------|----------|
| Wire | Page → `services/roadRoute/endpoint.ts` → apiClient → BFF → API |
| List | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Footer | `CatalogListPagination` (+ `CatalogPagerNav`) — **cấm** `footerPagination` / `pageSizeBar` |
| Form | Modal local · View **readOnly** (cấm disabled xám) · `/erp-form-context` |
| parentCode | **SearchInput** → API-02 — **cấm** Text |
| routeKind | Dropdown ← init-data |
| FE BASE | `/integration/road-routes` |
| Perms | `useRoadRoutePermissions` · codes `master.road-routes.*` |

**ssot.reuse:**
  ui: LinPageLayout · CatalogListPagination · CatalogPagerNav · LinListTableConfigModal · SearchTextInput · CatalogRowActionMenu
  http: apiClient
  grid: no footerPagination · no pageSizeBar · no nested CatalogListShell
**implement.list_parity:**
  pilot_ux: OrgUnitListPage (RMMS Master flat parity)
  layout: flex-root + GAP-P2-LAYOUT-06 smoke
  tree: N/A (flat Kind B)
  filter: SearchTextInput only (no Tìm btn) · pulseSearch
  loading: useServerPagedListLoading + skeletonRows
  footer: CatalogListPagination (shared Master catalog component · T-LIB promote common = debt)
  row_menu: GAP-P2-94 CatalogRowActionMenu
  zone_f: LinListTableConfigModal + fa-cog
  perm: master.road-routes.* + local mode
**implement.form:**
  View: Input/SearchInput readOnly — **cấm** disabled xám (GAP-P2-VIEW-DISABLED)
  parentCode: SearchInput
**skills:** /erp-form-context · tl-retry-ssot-rereview · tl-grid-ssot · tl-catalog-list-parity
**DoD (retry HARD):**
- [ ] Dev re-review checklist § HARD (`tl-retry-ssot-rereview`) **trước Write**
- [ ] 1× LinPageLayout · no nested CatalogListShell
- [ ] Footer CatalogListPagination · no pageSizeBar
- [ ] Flex + skeleton · toolbar config · row menu · perm
- [ ] Form View readOnly · SearchInput parent
- [ ] ghi `retry.ssot_rereview` trên implement MD
- [ ] yarn build + typecheck · BE dotnet build PASS

## Task pack

### T-CTX-01
**DoD:** Context + DOMAIN-MAP Integration · control-map khớp design

### T-BE-01
**layer:** api · deps: T-CTX-01  
**DoD:** Entity + DTOs + Service + Controller API-01…07 · share_a · `dotnet build` PASS

### T-BE-02
**layer:** migration Schema · deps: T-BE-01  
**DoD:** `Schema_RmmsRoadRoutes` · UK code · IX route_kind · build PASS

### T-SEED-01
**layer:** Seed · deps: T-BE-02  
**DoD:** `Seed_RmmsRoadRoutes` 38 rows · build PASS

### T-BFF-01
**layer:** bff · deps: T-BE-01  
**DoD:** proxy `web-bff/api/v1/integration/road-routes/**`

### T-PERM-01
**DoD:** codes `master.road-routes.*` · FE hook + BE stub TODO RequirePermission

### T-UI-LIST-01
**page:** `/master/road-route` · deps: T-BFF-01  
**DoD:** zones A–D · SSOT shell · search CI · CatalogRowActionMenu · CatalogListPagination · yarn build PASS

### T-UI-FORM-01
**deps:** T-UI-LIST-01  
**DoD:** Modal CRUD · SearchInput parent · init-data kinds · View readOnly (no disabled gray) · delete via row menu

### T-QA-01
**deps:** T-UI-FORM-01  
**DoD:** `qa/scenarios.md` · mfeStdUrl smoke note

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.08.25 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.25 |
| rulesVersion | 2026.08.08.20 |
| generatedAt | 2026-08-08T13:00:00.000Z |
| versionGate | ok |
