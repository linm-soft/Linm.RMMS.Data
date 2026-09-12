# Dev — Implement — asset (iOS)

| Field | Value |
|-------|-------|
| Feature | `asset` |
| Title | [Mobile] List `#sc-asset-list` · QA-FIX dual verify (no code delta) |
| Role | `dev` · `/agent-dev-ios` · qaFixPhase=implement |
| status | **PASS** |
| changeScope | `edit_page` |
| packKind | **`list`** · `#sc-asset-list` · `DES-MOB-ASSET-LIST` |
| taskId | `task_fa241430` · from `task_7e0b31e2` · qaFailFrom=`task_4ec34586` |
| dest | **iPhone 17 Pro** · **BUILD SUCCEEDED** |
| updatedAt | `2026-09-01T16:15:30.000Z` |

## Summary

QA-FIX implement: **không** đổi iOS list code / controlHint — prior A3-CORE live rows OK. Gap là Android Appear race only. Re-VERIFY `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS. Dual GAP-MOB-UX-DUAL-01 đóng sau Android fix (re-QA e2e).

## Notes (qa fix)

| Item | Result |
|------|--------|
| Source delta | **none** (list path live-only giữ từ `task_dc98ed58`) |
| controlHint | **unchanged** |
| Dual | claim wire after Android Appear fix · visual confirm = QA |

## Files

| Path | Change |
|------|--------|
| — | no iOS source change this turn |

## ACTION WORK GATE

| Action | Result |
|--------|--------|
| Search | debounce → GET `search=` · **work** |
| View (row) | push `#sc-asset-detail` · **work** |
| Create / Edit / Copy | **N/A** — list P1 |

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms` dest **iPhone 17 Pro** | **BUILD SUCCEEDED** |
| Mobile.Bff `dotnet build` | **PASS** |
| Step 4b / e2e / mfeStdUrl | **N/A** / **cấm** Dev |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T16:15:30.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-qa-fix-appear-20260901 |
| bffContentHash | sha256:asset-mobile-list-road-assets-proxy-20260823 |
| taskId | task_fa241430 |
| qaFixPhase | implement |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
