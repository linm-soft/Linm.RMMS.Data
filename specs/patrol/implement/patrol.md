# Implement — patrol (crud_formtype delta)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| packKind | `list` |
| taskId | `task_4f8ea737` |
| autoApprove | **ON** |
| updatedAt | `2026-08-14T18:20:00.000Z` |

## retry.ssot_rereview (Dev · trước Write)

checklist: `tl-retry-ssot-rereview` · `list_parity` · form · cùng surface GAP  
result: **gaps** then **fix_all** (không patch 1 chỗ)

| Check | Live before | After |
|-------|-------------|-------|
| 1× `LinPageLayout` kind=catalog · no nested `CatalogListShell` | PASS | KEEP |
| `LinCatalogDataGrid` `resizable: true` | PASS | KEEP |
| Footer `LinCatalogListPagination` · cấm footerPagination / pageSizeBar | PASS | KEEP |
| flex + skeleton `useServerPagedListLoading` 8 rows | PASS | KEEP |
| toolbar refresh · history · `fa-cog` · create · delete | PASS | KEEP |
| Zone B SearchTextInput + status + **route SearchInput** · `filterCols=3` | GAP route | **PASS** |
| `filterMaxWidthPx` | không | KEEP |
| listTitle `Sổ phiên tuần tra / check-in` | GAP | **PASS** |
| form `route` SearchInput Integration | Input Text | **PASS** |
| View `<dl>` · cấm Resource / Slideout / View=readOnly | PASS | KEEP |
| footer-only Lưu/Hủy (gỡ Z1 `btn-save-top` / `btn-cancel-top`) | GAP | **PASS** |
| seed ∈ 38 · bump STORAGE_KEY | ĐT.784 / QL.1A | **QL.1 / HCM** · `rows:v3` |
| GET list `?route=` exact | GAP | **PASS** API+BFF+FE |
| Create/Update catalog + enum VN | GAP | **PASS** 422 |

## Done this turn (`task_4f8ea737`)

| Task | Result |
|------|--------|
| T-BE-Q-01 | `GET api/v1/patrol/sessions` + `route?` exact trim · pageSize 50/100/200/500 |
| T-BE-VAL-01 | Route ∈ `rmms_road_routes` IsActive · Status/PatrolType allow-list VN · 422 `ĐT.784`/`QL.1A` |
| T-BFF-01 | `BuildListPath` `Request.QueryString` — **đã passthrough** `?route=` · no new controller |
| T-FE-API-01 | `patrolEndpoint.getList` + `localList`/`filterRows` exact `route` |
| T-UI-LKP-01 | Form + Zone B reuse `ROAD_ROUTE_LOOKUP_CONFIG` (`/integration/road-routes/search`) |
| T-UI-FIELD-01 | controlHint ↔ DTO · persist **code** · enum **nhãn VN** |
| T-UI-PROD-01 | seed `ĐT.784`→`QL.1` · `QL.1A`→`HCM` · STORAGE_KEY v3 · cấm Slideout |
| T-UI-LIST-01 extend | KEEP A–D · filter tuyến · listTitle `/ check-in` |
| T-UI-FORM-01 extend | SearchInput route · footer-only Lưu/Hủy |
| T-UI-UX-01 | constitution · dropdownPortal ON (lookup) · GAP-TL-PAT-FOOTER-ACT đóng |
| T-QA-* | **không** làm (QA role) |

**Cấm** `ERP.*` · parent JSON · Resource · Slideout · invent mã ngoài 38 · users LKP P1.

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `Domains/Patrol/Controllers/PatrolSessionsController.cs` · `PatrolSessionService.cs` |
| BFF | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/PatrolSessionsBffController.cs` |
| Lookup | Integration `api/v1/integration/road-routes/search` — **không** copy Patrol |
| MFE | `PatrolListPage.tsx` · `PatrolFormPage.tsx` · `endpoint.ts` · `patrolService.ts` · `lookups.ts` · `patrolStore.ts` |
| Route | `api/v1/patrol/sessions` · FE `/patrol/sessions` |
| mfeStdUrl | `http://localhost:9304/patrol` |

## Step 4b BE ALIGN

- Edit existing GET list (`route` query) + Create/Update validate catalog — **không** Schema_* mới.
- BFF proxy-only QueryString.

## Build

```
yarn build (Linm.Web.RMMS.Field) → PASS (webpack compiled · size warnings only)
dotnet build RMMS.Service.Api -c Release → PASS (0 Error(s))
dotnet build LINM.RMMS.Patrol.Bff -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| Kind E map/tracks/coverage/kpi | P2 out of pack |
| GAP-F-PAT-01 | Offline conflict merge — flag only |
| History API | stub |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T18:20:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| tlSkillVersion | 2026.08.14.5 |
| orchestratorSkillVersion | 2026.08.09.02 |
| taskId | `task_4f8ea737` |
