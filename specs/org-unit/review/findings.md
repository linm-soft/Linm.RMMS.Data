# Review findings — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| status | `reviewed` |
| updatedAt | 2026-08-08T18:15:00.000Z |

## Summary

Dev pack delivered Integration shared Type A org-unit (BE + BFF + Master FE Modal/tree) matching Design VN + SearchInput and SA share_a.

## Findings

| ID | Sev | Finding | Disposition |
|----|-----|---------|-------------|
| R-01 | info | `[RequirePermission]` still TODO until CommonLib upgrade | Accept · codes documented |
| R-02 | info | List grid is HTML table (not ErpDataListGrid) — acceptable P1 Kind B | Follow-up optional |
| R-03 | info | Seed Down() SQL SQLite-oriented | OK for local SQLite |
| R-04 | pass | BASE `/integration/org-units` · no `/rmms/` | Fixed GAP-SA-ROUTE-01 |
| R-05 | pass | No parent JSON · shared no tenant filter | OK |
| R-06 | pass | parentCode = SearchInput | OK |

## Gate

| Gate | Result |
|------|--------|
| Design parity (VN · Modal · tree · hệ cũ) | **pass** |
| Solution share_a · Integration | **pass** |
| ssot-no-duplicate (Lin* · apiClient) | **pass** |
| Build | API/BFF PASS · FE typecheck PASS |

## Next

- Apply migrations on API startup / docker
- Manual QA `qa/scenarios.md`
- AskQuestion `commit_confirm` before git commit
