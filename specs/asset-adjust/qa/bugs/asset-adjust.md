# QA bugs — asset-adjust

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| role | `qa` · `/agent-qa-mobile` |
| verdict | **fail** |
| taskId | `task_385e599f` |
| qaFailFrom | `task_74581051` |
| STATUS | **OPEN** · Must **1** · Should **1** |
| align_confirm | **confirm_fix** (autoApprove=ON · Must → Dev) |
| Handoff | `/edit-mobile-feature` sau `qa_fail_rollback` + `qa_fix_plan` |
| updatedAt | `2026-09-01T16:06:00.000Z` |

## Open Must

| ID | Zone | Demo | iOS | Android | SSOT | Lệch | Owner |
|----|------|------|-----|---------|------|------|-------|
| GAP-QA-REAL-01 | `#sc-asset-adjust` list | demo rows sample | A3-CORE live `BB/HL/KM-QL1-NA-*` | P6-CORE **LoadFailed** empty + toast «Không tải được danh sách tài sản.» | real-data · GAP-MOB-REAL-02 | BFF live · Android GET fail (không còn OfflineDemo `TS-*`) | Dev |

## Should / DEFER

| ID | Zone | Note | Owner |
|----|------|------|-------|
| GAP-MOB-SEARCH-PLACEHOLDER | SearchField | Kit `LinmSearchField` hardcode `Tìm` · MapFile/PO SSOT dài · T-KIT n/a | Kit / DEFER |

## Re-QA delta (`task_d8ada3bb` → `task_385e599f`)

| Check | Prior FAIL | This run |
|-------|------------|----------|
| OfflineDemo `TS-20260810-*` on P6 | **yes** + toast «dữ liệu mẫu» | **gone** · LoadFailed empty |
| Live codes on P6 | no | **still no** |
| Live codes on A3 | yes | **yes** (`BB-QL1-NA-478` · `HL-QL1-NA-468` · `KM-QL1-NA-461`) |

## Fix plan required

Dev **re-open** `implement/asset-adjust-qa-fix-plan.md` + confirm **`qa_fix_plan`** trước Write. **Cấm** autoApprove skip `qa_fail_rollback`.

Suggested:

1. Emulator: capture HTTP status/body GET `asset/road-assets` + headers (`Authorization` · `X-Company-Id`) khi mở `#sc-asset-adjust`.
2. Confirm `bff.base=http://10.0.2.2:5202` reachable from app process after login (peer A10-BFF host OK ≠ app path OK).
3. Distinguish throw (HttpException/parse) vs empty 200 — LoadFailed toast implies **throw path** still.
4. Re-run `yarn e2e-qa-mobile` · assert live codes trên **cả** A3 + P6 · **cấm** empty LoadFailed CORE khi BFF healthy.
5. Read align-ux lại · Must 0 trước review.

## Notes

- iOS CORE **PASS** live — chứng minh BFF+seed OK.
- OfflineDemo→LoadFailed contract (epic cleanup) **giữ** — không regress toast «dữ liệu mẫu».
- Demo HTML không `.row-icon` row → **không** GAP-MOB-UX-COMP-03.
- QA **cấm** tự sửa native/BFF (roleOnly=`qa`).
