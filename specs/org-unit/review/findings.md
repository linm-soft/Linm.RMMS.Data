# Review findings — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| status | `reviewed` |
| updatedAt | 2026-08-09T01:32:00.000Z |
| task | `task_9c375c48` |

## Summary

Dev pack delivered Integration shared Type A org-unit (BE + BFF + Master FE Modal/tree). Re-review (close gate) confirms list SSOT + dropdown-from-BE; Design VN + SearchInput + SA share_a hold.

## Findings

| ID | Sev | Finding | Disposition |
|----|-----|---------|-------------|
| R-01 | info | `[RequirePermission]` still TODO until CommonLib upgrade | Accept · codes documented |
| R-02 | pass | List = `LinPageLayout` + `LinCatalogDataGrid` + `LinCatalogListPagination` (no nested CatalogListShell · no raw `<table>` · no footerPagination) | Fixed / current |
| R-03 | info | Seed Down() SQL SQLite-oriented | OK for local SQLite |
| R-04 | pass | BASE `/integration/org-units` · no `/rmms/` | Fixed GAP-SA-ROUTE-01 |
| R-05 | pass | No parent JSON · shared no tenant filter | OK |
| R-06 | pass | parentCode = SearchInput | OK |
| R-07 | pass | Kind Select options **only** from BE `GET …/init-data` — removed FE hardcode VN fallback (**GAP-DEV-DROPDOWN-HARDCODE-01**) | Fixed 2026-08-09 |

## SSOT re-review (list / form)

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested CatalogListShell) | **pass** |
| `LinCatalogDataGrid` + column resize default ON · ui-schema bootstrap | **pass** |
| Footer `LinCatalogListPagination` | **pass** |
| Tree master (`LinTreeNav` + `LinTreeGridLayout`) | **pass** |
| Toolbar catalog config | **pass** |
| Dropdown / kind from init-data only | **pass** |
| Form parent SearchInput | **pass** |

## Gate

| Gate | Result |
|------|--------|
| Design parity (VN · Modal · tree · hệ cũ) | **pass** |
| Solution share_a · Integration | **pass** |
| ssot-no-duplicate (Lin* · apiClient) | **pass** |
| Build | API/BFF PASS · FE typecheck PASS · FE prod build PASS |

## Verify (2026-08-09)

| Check | Result |
|-------|--------|
| `dotnet build` RMMS.Service.Api Release | **PASS** |
| `dotnet build` Integration.Bff + RMMS.Service.Bff Release | **PASS** |
| `yarn typecheck` Master | **PASS** |
| `yarn build` Master (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | **PASS** |

## Next

- Apply migrations on API startup / docker
- Manual QA `qa/scenarios.md` (optional board)
- AskQuestion `commit_confirm` before git commit (out of Autopilot packet)
