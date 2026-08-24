# Implement — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| taskId | `task_67ce475b` |
| updatedAt | `2026-08-23T16:35:00.000Z` |
| versionGate | rechecked |

## retry.ssot_rereview (task_d31bfbd3 · live re-audit trước + sau Write)

Live: `AssetListPage.tsx` + `AssetFormPage.tsx` + `lookups.ts` + `index.tsx`.

| # | Check | After Write | Verdict |
|---|-------|-------------|---------|
| 1 | 1× `LinPageLayout` kind=catalog — cấm nested `CatalogListShell` | 1× LinPageLayout | **PASS** |
| 2 | Footer `LinCatalogListPagination` | only | **PASS** |
| 3 | Flex root + skeleton + LAYOUT-06 | `.page` flex column | **PASS** |
| 4 | Toolbar catalog refresh · history · cog · +Tạo mới trên B | catalogToolbar | **PASS** |
| 5 | Zone B: Search + type + route + km + org + Xóa điều kiện · cấm Tìm · cấm Select 8 | SearchInput Integration + Text km + clear | **PASS** (closed GAP-TL-LIST-FILTER-01) |
| 6 | `LinCatalogDataGrid` kéo cột default ON | tableConfig | **PASS** |
| 7 | Zone F schema editor | present | **PASS** |
| 8 | History stub | present | **PASS** |
| 9 | tree_master? | n/a · org tree = filter | n/a |
| 10 | Form C/E/V/Copy full-page · cấm Slideout | routes `/new` `/:id` `/:id/edit` `/:id/copy` | **PASS** (closed GAP-TL-ROUTE-01) |
| 11 | Type/route SearchInput master 23/38 | Integration search APIs | **PASS** (closed GAP-TL-LKP-01) |
| 12 | Dropdown status/source init-data | Select bind API-06 | **PASS** (closed GAP-TL-FIELD-01) |
| 13 | View `<dl>` · code readOnly not disabled | Input `readOnly` | **PASS** (closed GAP-TL-UX-CODE-01) |
| 14 | photos mock · Money · note multiline | TextArea + mock photos | **PASS** (closed GAP-TL-FIELD-02) |
| 15 | Dedicated `/edit` `/copy` | yes | **PASS** |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke`.

## Done this turn (task_67ce475b · edit_page · Dev verify)

| Task | Result |
|------|--------|
| GAP-L3-REAL-DATA | `specs/_data-analy/features/asset-real-data.md` §A+§B |
| GAP-RPT-SRC-ASSET-01 | `Quantity` + `UnitCode` verified live: entity · DTO · list cols · form · init-data `units` · `CatalogUiSchemaSeed.RoadAssets` |
| GAP-HARNESS-02 | STATUS + HARNESS sync |

## Done this turn (task_d31bfbd3 · Dev)

| Task | Result |
|------|--------|
| T-CTX-01 | `docs/context/features/asset.md` — full-page · SearchInput 23/38 · init-data · cấm Slideout/ERP |
| T-BE-01 | ApiResponse paged · XCO GetById giữ · no ERP |
| T-BE-CRUD-01 | List QS `route,kmFrom,kmTo,orgUnit` · search ILIKE code/name/qr/route/type · type/route 422 Integration · PUT `source` · alias-map filter |
| T-BE-INIT-01 | `GET …/road-assets/init-data` statuses/sources |
| T-BE-02 | **n/a** — table exists; btree `CompanyCode+Code` + `CompanyCode+Type+IsActive` đủ P1; không fake trigram |
| T-BFF-01 | Proxy list QS + `GET init-data` |
| T-PERM-01 | FE `asset.road-assets.*` · BE `[RequirePermission]` TODO documented |
| T-UI-LIST-01 | Zone B filters + display `code — name` |
| T-UI-FORM-01 | Full-page routes + leave-confirm |
| T-UI-ACT-01 | Handlers wired list+form |
| T-UI-LKP-01 | Integration SearchInput · cấm `ASSET_TYPES` production config |
| T-UI-FIELD-01 | init-data Dropdown · source on PUT · photos mock not persist |
| T-UI-PROD-01 | no Slideout/Resource · no 8-label dropdown |
| T-UI-UX-01 | code readOnly · SearchInput portal ON |
| T-QA-* | pending QA role |

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Asset/` |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/` |
| MFE | `Linm.Web.RMMS.Asset` · `/asset` |
| mfeStdUrl | `http://localhost:9301/asset` |

**Cấm** ERP.* — void.

```
yarn typecheck → PASS (task_67ce475b)
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 0 errors · size warnings only)
dotnet build RMMS.Service.Api -c Release → PASS (0 Error(s))
```

## Build (REQUIRED · task_67ce475b verify)


## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| Excel / History API / Leaflet | P1 out of pack |
| T-BE-02 | n/a extra CI/trigram indexes |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T16:30:00.000Z |
| versionGate | rechecked (`recheck_new` · SSOT workflow **2026.08.14.5**) |
| taskId | `task_d31bfbd3` |
