# Dev — Implement — so-ts-type-grid

| Field | Value |
|-------|-------|
| feature | `so-ts-type-grid` |
| title | Sổ TS — grid/form theo loại (shell + section) |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `list` |
| route_confirm | `route_a` · `/so-ts-type-grid` → `/so-ts` · `?type=` |
| mfeStdUrl | `http://localhost:9301/so-ts-type-grid` |
| peerStdUrl | `http://localhost:9301/so-ts` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/road-assets` |
| taskId | `task_14d5a6f8` |
| yarnBuild | **PASS** (size warnings only) |
| dotnetBuild | **PASS** Asset.Bff + Asset.Models · full sln OOM host (paging) — Step 4b **n/a** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c` |
| updatedAt | `2026-09-19T01:45:00.000Z` |

## Summary

`edit_page` trên live `/so-ts`: alias feature slug, shared `typeColumnProfiles`, gap-no-source empty+toast, S-* section markers + cluster map, DOMAIN-MAP/CTX cite road-assets. **Cấm** invent API · **cấm** seed CULVERT_X · Step 4b **n/a**.

## Shipped

| Task | Result |
|------|--------|
| T-ROUTE-01 | `PreserveSearchNavigate` `/so-ts-type-grid` → `/so-ts` giữ query · webpack + devRoutes |
| T-PROF-01 | `typeColumnProfiles.ts` · `getTypeColumnProfile` / `applyTypeColumnProfile` · hide-empty + ensure |
| T-FILTER-01 | live `LinErpListFilterBar` · cấm nút Tìm · search → page=1 |
| T-SEC-01 | `formSectionClusters.ts` · `data-form-sections` / `data-section` S-META·S-ATTR·S-GPS |
| T-FORM-01 | CatalogFormShell 5col · dumpSpecs editable S-ATTR · cấm tab legacy |
| T-LEAVE-01 | `useFormLeaveGuard` + LeaveConfirmModal (live) |
| T-CHILD-01 | GAP `CULVERT_X` · empty message + toast · disable +Tạo · cấm seed |
| T-DOC-01 | DOMAIN-MAP `so-ts-type-grid` → Asset · CTX §7 cite `asset/road-assets` |
| T-BE-VERIFY | **n/a** · road-assets live · no new endpoint / migration |

## Out-of-shell

`PAVEMENT` → `/so-ts/pl-mat-duong` · `NHANH|TRANH|GOM` → `/mas/tuyen-duong` (+ toast).

## Debt

- Schema_* flatten **P2** · full solution `dotnet build` OOM host (retry `-m:1` / more pagefile) · E2E `/agent-qa*` only · S-* full file-split extract DEFER (markers + cluster map P1)

## Files (key)

- `src/pages/AssetListPage/typeColumnProfiles.ts`
- `src/pages/AssetListPage/AssetListPage.tsx`
- `src/pages/AssetFormPage/formSectionClusters.ts`
- `src/pages/AssetFormPage/AssetFormPage.tsx`
- `src/router/PreserveSearchNavigate.tsx` · `src/index.tsx`
- `docs/DOMAIN-MAP.md` (BE) · CTX `so-ts-type-grid.md`
