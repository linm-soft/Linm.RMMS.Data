# Review findings — asset

> Status: **done**  
> Mode: `review_only` (autopilot · autoApprove ON · không AskQuestion)  
> reviewHash: `task_bf4df098-asset-list-kindb-20260814` · rulesVersion: `2026.08.14.9`

| Field | Value |
|-------|-------|
| feature | `asset` |
| this role | `review` · `/agent-review` |
| review_confirm | **approve** (autoApprove ON · `task_bf4df098`) |
| packKind | `list` · Kind B catalog + full-page form |
| taskId | `task_bf4df098` |
| prior QA | `task_d460f577` · scenarios **done** |
| updatedAt | `2026-08-14T16:55:00.000Z` |

## Scope

| Surface | Repo / path |
|---------|-------------|
| List | `Linm.Web.RMMS.Asset` · `AssetListPage` · `/asset` |
| Form | `AssetFormPage` · `/asset/new` · `/:id` · `/:id/edit` · `/:id/copy` |
| API | `Linm.RMMS.WebService` · `api/v1/asset/road-assets` · domain **Asset** |
| BFF | `web-bff/api/v1/asset/road-assets` · proxy-only |
| Prototype | `specs/asset/ui/prototype/asset-list-prototype.html` |

## Findings

| ID | Class | Sev | Where | Repro | Fix hint |
|----|-------|-----|-------|-------|----------|
| REV-Q-01 | query | — | List GET `search,type,route,kmFrom,kmTo,orgUnit,page,pageSize` · ILIKE + Integration alias keys | Live controller + service | **OK** |
| REV-Q-02 | query | — | Lookup 422 type/route Integration | Create/Update | **OK** |
| REV-S-01 | security | P2 | `[RequirePermission]` TODO CommonLib | All CUD | Debt **SD-AUTH** — không P0 |
| REV-S-02 | security | — | GetById XCO `IgnoreQueryFilters` + `allowed_company_ids` → 403 | Cross-company | **OK** |
| REV-S-03 | security | — | List/CUD tenant `CompanyCode` · soft delete · no parent JSON | Service | **OK** |
| REV-UI-01 | ui-fn | — | 1× `LinPageLayout` · `LinCatalogDataGrid` + `tableConfig` · footer `LinCatalogListPagination` | `AssetListPage.tsx` | **OK** · **cấm** nested CatalogListShell / footerPagination / pageSizeBar |
| REV-UI-LAYOUT-06 | ui-fn | — | `.page` `height:100%` flex column · `gridWrap` `flex:1;min-height:0` · `skeletonRows=8` | CSS + layout | **OK** (static + QA S1) |
| REV-UI-DEMO-NOTE-01 | ui-fn | — | List/form **không** note stub/Kind D/chờ AiService | Pages | **OK** |
| REV-UI-02 | ui-fn | — | Full-page form · View `<dl>` · code `readOnly` **không** `disabled` · **cấm** Slideout/Resource | Form | **OK** |
| REV-UI-03 | ui-fn | — | SearchInput Integration 23/38 type/route/org · **cấm** `ASSET_TYPES` production · **cấm** `filterMaxWidthPx` | lookups + list | **OK** (`ASSET_TYPES` chỉ demo store unused) |
| REV-BE-01 | be-fn | — | Domain Asset · **cấm ERP.*** · BFF proxy list QS + init-data | Controller + Bff | **OK** |
| REV-BE-02 | be-fn | P1 | History API stub client | Modal | Debt P1 out of list pack |

**P0:** none.

## Query (`/review-query`)

- Field SSOT list: search/type/route/km/org + paging 50/100/200/500.
- N+1/OOM: paged `AsNoTracking` + `IsActive`; type/route filter resolve keys rồi `Contains` — chấp nhận P1 scale.
- Lookup master: FE `/integration/asset-types/search` · `road-routes/search` · `org-units/tree` flatten.

## Security

- JWT/`X-Company-Id` forwarded BFF.
- Permission codes FE `asset.road-assets.*`; BE attribute **debt** SD-AUTH.
- IDOR GetById XCO deny 403.
- Không secrets trong MFE asset pages.

## UI / BE function

- Zone A–D + F schema editor + history modal + row menu View/Sửa/Copy/History/Delete.
- FormMode↔API: POST create (không gửi `code`) · PUT + `source` · GET init-data statuses/sources.
- Leave-dirty confirm trên form.
- Path: `api/v1/asset/road-assets` khớp SA/DOMAIN-MAP Asset.

## Gates

| Gate | Result |
|------|--------|
| Version recheck | **PASS** — workflow **2026.08.14.5** · `recheck_new` · agent-review **2026.08.14.1** |
| SSOT list shell | **PASS** |
| FormType LKP/FIELD/PROD/UX | **PASS** (QA QA-28..31) |
| Prototype + reviewUrl | **PASS** |
| mfeStdUrl | `http://localhost:9301/asset` · source `historyApiFallback: true` · `index.tsx` routes |
| Confirms BE+UI | **PASS** (board tick giữ) |
| `yarn typecheck` | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 0 errors · size warnings) |
| BE Write this role | **n/a** — review_only verify |
| Prior Dev `dotnet` API+BFF | **PASS** (`task_d31bfbd3`) |

## Accept TODOs (không chặn)

- SD-AUTH `[RequirePermission]` khi CommonLib ≥1.4.0
- History API / Excel / Leaflet+AI — P1 out of pack
- Org tree visual widget — P2 (flatten SearchInput khớp TL)

## Confirm

`review_confirm` = **approve** (autoApprove ON · `task_bf4df098`) — **không** `fix_gaps`.

## Verdict

**ACCEPT** — Kind B list pack `asset` đóng pipeline (data-analy → … → review). STATUS → **done**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.14.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| reviewHash | `task_bf4df098-asset-list-kindb-20260814` |
| generatedAt | 2026-08-14T16:55:00.000Z |
| versionGate | rechecked (`recheck_new` · SSOT workflow **2026.08.14.5**) |
| taskId | `task_bf4df098` |
