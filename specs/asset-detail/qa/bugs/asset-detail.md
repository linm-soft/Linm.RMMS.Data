# QA bugs — asset-detail

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| role | `qa` · `/agent-qa-mobile` |
| verdict | **fail** |
| taskId | `task_20e8f629` |
| updatedAt | `2026-09-01T16:41:26.000Z` |

## Open Must

| ID | OS | Summary | Evidence | Owner |
|----|-----|---------|----------|-------|
| GAP-QA-STORE-03 | Android | Maestro FAIL · `#sc-asset-list` empty **Chưa có tài sản** · không thấy live `KM-QL1-NA-461` | `_maestro_android` · `P6-CORE.png` | Dev |
| GAP-QA-REAL-01 | Android | List không bind GET BFF live trên emulator · P6 harvest ≠ detail | `qa/screens/P6-CORE.png` | Dev |
| GAP-MOB-E2E-VIS-01 | Android | CLI P6 PASS ≠ visual Aligned detail | `P6-CORE.png` empty list | QA note |

## Closed this re-QA

| ID | OS | Note |
|----|-----|------|
| GAP-MOB-ASSET-DET-NAV-02 | iOS | Detail live GET · hero `KM-QL1-NA-461` · EmptyChrome gone |
| GAP-QA-STORE-01 | iOS | Maestro PASS · YAML tap seed by code (not `row-asset-0`) |
| GAP-QA-REAL-01 | iOS | A3-CORE live seed bind | 

## Fix plan required

Dev **`qa_fail_rollback`** → plan/implement **Android list live** (tenant `X-Company-Id: LINM` · `bff.base` · LoadFailed empty). **Cấm** skip `qa_fix_plan`. iOS detail **không** reopen trừ regress.

Suggested:

1. Emulator: login `linm-soft` → log OkHttp GET `asset/road-assets` status + `X-Company-Id`.
2. Persist JWT `company_id=LINM` trước list load · retry nếu empty.
3. Re-run `yarn e2e-qa-mobile` · P6 CORE must show `KM-QL1-NA-461` detail.

## Notes

- BFF seed OK: list 3 rows incl. `KM-QL1-NA-461` với `X-Company-Id: LINM`.
- iOS A3 visual Aligned demo `#sc-asset-detail` (title Chi tiết · Mã TS · rows · CTA).
- QA **cấm** tự sửa native/BFF (roleOnly=`qa`) · YAML tap seed đã sửa trong `qa/e2e/*.yaml`.
