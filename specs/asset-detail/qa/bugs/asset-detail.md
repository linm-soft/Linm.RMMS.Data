# QA bugs — asset-detail

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| role | `qa` · `/agent-qa-mobile` |
| verdict | **fail** |
| taskId | `task_cbda6a54` |
| updatedAt | `2026-08-30T22:21:24.000Z` |

## Open Must

| ID | OS | Summary | Evidence | Owner |
|----|-----|---------|----------|-------|
| GAP-QA-REAL-01 | dual | CORE không bind live GET by id · Android demo list `TS-20260810-*` · iOS EmptyChrome sau live row | `qa/screens/A3-CORE-EMPTY.png` · `P6-LIST-DEMO.png` | Dev |
| GAP-QA-STORE-01 | iOS | Maestro FAIL · `label-code` / EmptyChrome **Không tìm thấy tài sản** | Maestro `2026-08-31_051357` | Dev |
| GAP-QA-STORE-03 | Android | Maestro FAIL · không thấy live `KM-QL1-NA-461` | Maestro `2026-08-31_051512` | Dev |
| GAP-MOB-ASSET-DET-NAV-02 | iOS | List live OK → push detail EmptyChrome · nghi `assetDetailId` stale trên `navigationDestination(isPresented:)` / `appear("")` · hoặc GET by id thiếu `X-Company-Id` → 404 | BFF: list `:5202` 200 · by-id thường vắng hoặc 404 | Dev |
| GAP-MOB-E2E-VIS-01 | dual | CLI case PASS ≠ visual Aligned · harvest A3/P6 sau fail không phải detail live | `qa/screens/A3-CORE.png` | QA note |

## Fix plan required

Dev **`implement/asset-detail-qa-fix-plan.md`** + confirm **`qa_fix_plan`** trước Write. **Cấm** autoApprove skip `qa_fail_rollback`.

Suggested:

1. iOS: nav detail bằng `navigationDestination(item:)` hoặc `onChange(of: assetId)` → reload GET.
2. Dual: mọi GET `asset/road-assets*` gửi `X-Company-Id` (JWT `company_id=LINM`).
3. Android: chờ list live (không demo) trước tap row · verify interceptor company.
4. Re-run `yarn e2e-qa-mobile` · assert live code trên CORE · Read align-ux.

## Notes

- BFF live seed OK với `X-Company-Id: LINM`: list 3 rows · GetById `c33e0001-0001-4c01-8c01-000000000001` → 200.
- Auth-only (token, no company) → list `totalCount=0` → app fallback demoRows.
- QA **cấm** tự sửa native/BFF (roleOnly=`qa`).
