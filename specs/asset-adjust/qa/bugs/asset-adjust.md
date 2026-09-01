# QA bugs — asset-adjust

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| role | `qa` · `/agent-qa-mobile` |
| verdict | **fail** |
| taskId | `task_74581051` |
| STATUS | **OPEN** · Must **1** · Should **1** |
| align_confirm | **confirm_fix** (autoApprove=ON · Must → Dev) |
| Handoff | `/edit-mobile-feature` sau `qa_fail_rollback` + `qa_fix_plan` |
| updatedAt | `2026-08-31T00:20:00.000Z` |

## Open Must

| ID | Zone | Demo | iOS | Android | SSOT | Lệch | Owner |
|----|------|------|-----|---------|------|------|-------|
| GAP-QA-REAL-01 | `#sc-asset-adjust` list | demo rows sample | A3-CORE live `KM-QL1-NA-461`… | P6-CORE demo `TS-20260810-014` + toast loadFail | real-data · GAP-MOB-REAL-02 | BFF live · Android mock-only CORE | Dev |

## Should / DEFER

| ID | Zone | Note | Owner |
|----|------|------|-------|
| GAP-MOB-SEARCH-PLACEHOLDER | SearchField | Kit `LinmSearchField` hardcode `Tìm` · MapFile/PO SSOT «Tìm mã TS cần sửa hoặc bớt…» · T-KIT n/a | Kit / DEFER |

## Fix plan required

Dev **`implement/asset-adjust-qa-fix-plan.md`** + confirm **`qa_fix_plan`** trước Write. **Cấm** autoApprove skip `qa_fail_rollback`.

Suggested:

1. Android: verify `X-Company-Id` (JWT company) trên GET `asset/road-assets` — cùng root cause asset-detail (Auth-only → empty → OfflineDemo).
2. Emulator: confirm `bff.base=http://10.0.2.2:5202` reachable + token after login.
3. Re-run `yarn e2e-qa-mobile` · assert live code trên **cả** A3 + P6 (cấm `TS-20260810-*` demo trên CORE).
4. Read align-ux lại · Must 0 trước review.

## Notes

- iOS CORE **PASS** live — chứng minh BFF+seed OK.
- Demo HTML không `.row-icon` row → **không** GAP-MOB-UX-COMP-03.
- QA **cấm** tự sửa native/BFF (roleOnly=`qa`).
