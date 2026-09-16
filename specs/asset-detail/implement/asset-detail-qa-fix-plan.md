# QA fix plan — asset-detail (round 2 · Android-only)

> Status: **pending board Approve** · `qaFixPhase=plan` · **cấm** Write native/BFF trong task này  
> Nguồn: `qa/scenarios.md` · `qa/bugs/asset-detail.md` · `ui/review/align-ux.md` · STATUS blockers  
> Phase: `qaFixPhase=plan` · planId=`task_512c67ce` · qaFailFrom=`task_20e8f629` · prior implement=`task_714bba2c`  
> lane: **mobile** · packKind: **`screen`** · `#sc-asset-detail` · **cấm** mfeStdUrl / yarn start:std / e2e ở Dev

## Gaps (từ QA `task_20e8f629` · re-QA sau implement round 1)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-STORE-03** | **P0 / Must** | Maestro Android FAIL · `#sc-asset-list` · `asset-list-empty` **Chưa có tài sản** · timeout `.*KM-QL1-NA-461.*` | Android Maestro · P6 |
| **GAP-QA-REAL-01** | **P0 / Must (Android)** | List không bind GET BFF live trên emulator · P6 harvest = empty list · BFF seed OK host `X-Company-Id: LINM` | Android `#sc-asset-list` |
| **GAP-MOB-E2E-VIS-01** | Should · QA note | CLI P6 PASS ≠ visual Aligned detail · harvest empty ≠ `#sc-asset-detail` live | store / align-ux · re-QA |
| **R-QA-02** | **P0** gate | re-QA verdict **fail** · iOS PASS · Android FAIL · `qa_fail_rollback` → Dev plan round 2 | Workflow |

**Closed (không reopen trừ regress):**

| ID | OS | Note |
|----|-----|------|
| GAP-MOB-ASSET-DET-NAV-02 | iOS | Detail live GET · hero `KM-QL1-NA-461` · nav item: + onChange |
| GAP-QA-STORE-01 | iOS | Maestro PASS · YAML tap seed by code |
| GAP-QA-REAL-01 | iOS | A3-CORE live seed bind |
| GAP-QA-STORE-03 | iOS | Maestro PASS round 2 |

**Không reopen:** GAP-MOB-ASSET-DET-PACK-01 · PO TITLE/GPS/TYPE · Step 4b · ERP.* · sibling gis-map ship (toast P1 OK).

## Disk audit (plan turn · 2026-09-01) — verify only · **không** Write code

| Check | Result | Note |
|-------|--------|------|
| iOS `#sc-asset-detail` | **PASS re-QA** | A3 live `KM-QL1-NA-461` · **cấm** touch trừ regress |
| Android `#sc-asset-list` | **FAIL runtime** | `asset-list-empty` **Chưa có tài sản** · không thấy `row-asset-*` live |
| Android `#sc-asset-detail` | **PRESENT** · **BLOCKED** | live-only GetById · không reach từ list empty |
| Android list VM | **LIVE-ONLY** | `FetchAssetListUseCase` · Loaded empty **hoặc** LoadFailed → `items=[]` |
| Empty vs fail UI | **SAME chrome** | `AssetListScreen` empty khi `!loading && items.isEmpty()` · LoadFailed thêm toast `asset.list.toast.loadFail` |
| `AuthInterceptor` | **PRESENT** | `X-Company-Id` từ `CompanyContextStore` · JWT fallback persist |
| `LoginUseCase` | **PRESENT** | `persist` → `applyCompanyId(accessToken)` |
| Cold start hydrate | **PRESENT** | `AppSessionViewModel.init` · `applyCompanyId` từ stored token |
| `bff.base` | **SET** | default `http://10.0.2.2:5202` · cleartext allowlist `10.0.2.2` |
| GET `asset/road-assets` | **REUSE** | `ApiService.roadAssets` · `AssetRepositoryImpl.fetchList` |
| BFF seed (host) | **OK** | list 3 rows incl. `KM-QL1-NA-461` với `X-Company-Id: LINM` |
| Step 4b / BE | **N/A Signed** | SA+TL · GetById reuse · **cấm** ERP.* |

**Root-cause hypothesis (implement verify — Android-only):**

1. **GET 200 empty (no tenant):** `X-Company-Id` thiếu/stale trên request list đầu sau login emulator → BFF trả `items=[]` → UI **Chưa có tài sản** (không toast). iOS cùng JWT/BFF **PASS** → nghi timing Android: list `Appear` trước `applyCompanyId` persist hoặc interceptor miss token lần đầu.
2. **GET throw (LoadFailed):** network/HTTP/parse trên emulator → empty + toast loadFail. QA screenshot P6 chủ yếu empty chrome — verify log có toast hay không.
3. **Mapper filter all rows:** ít khả năng — seed DTO có `id`+`code` · `AssetDtoMapper.listRow` OK nếu body non-empty.
4. **Không phải demo regression:** round 1 đã bỏ `demoRows` CORE · empty = live path fail/empty · **cấm** re-introduce demo.

## Plan (sau board Approve `qa_fix_plan` · `qaFixPhase=implement`)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | **Diagnose emulator:** login `linm-soft` → log OkHttp GET `asset/road-assets` — status · `Authorization` · `X-Company-Id` · body item count | Android | `AuthInterceptor` (debug log) · hoặc `adb logcat` filter | Chứng minh empty = 200+0 items vs 4xx/throw vs missing header |
| 2 | **Fix tenant timing:** đảm bảo `applyCompanyId` chạy đồng bộ trước mọi asset GET — gộp vào `persist()` **hoặc** gate list load on `CompanyContextStore` ready | Android | `AuthRepositoryImpl` · `LoginUseCase` · optional `SessionState` companyReady | Mọi GET list/by-id có `X-Company-Id: LINM` ngay request đầu sau login |
| 3 | **Retry empty (minimal):** nếu list Loaded `[]` ngay sau login trong window ngắn → retry GET 1 lần sau company persist — **cấm** demo fallback | Android | `AssetListViewModel` · optional | P6 thấy `KM-QL1-NA-461` · **đóng** GAP-QA-STORE-03 |
| 4 | **Parse/HTTP fix** chỉ nếu step 1 chứng minh throw — **cấm** invent API | Android | `AssetRepositoryImpl` · Retrofit · mapper | GET 200 · ≥1 row live · **đóng** GAP-QA-REAL-01 Android |
| 5 | **iOS freeze:** **cấm** sửa iOS trừ regress từ step 2–4 shared Auth | iOS | — | A3 re-QA vẫn PASS |
| 6 | VERIFY GATE builds | Android · BFF (+ iOS smoke) | — | `./gradlew :app:assembleDebug` · `dotnet build` Mobile.Bff · iOS `xcodegen` + dest **iPhone 17 Pro** **PASS** |
| 7 | Sync STATUS + implement notes | Data | `STATUS.md` · `implement/android.md` · `handoff/dev-compact.md` | blockers closed/open rõ · Dev implement done · QA pending |
| 8 | Re-QA (role `/agent-qa-mobile` · **không** chạy ở Dev) | QA | `qa/scenarios.md` · store · align-ux | e2eQa ON · Maestro Android P6 live detail · **cấm** empty CORE · đóng E2E-VIS-01 |

## Peer reference

| Piece | Peer |
|-------|------|
| Tenant header | asset-adjust QA plan round 1 · `AuthInterceptor` · JWT `company_id=LINM` |
| List GET | `FetchAssetListUseCase` live-only · BFF catch-all |
| iOS PASS path | round 1 nav fix · YAML tap `.*KM-QL1-NA-461.*` |
| Empty chrome | `asset-list-empty` testTag · Maestro `android.yaml` L60–67 |

## Out of scope / Cấm

- Write iOS/Android/BFF/BE **trong** `qaFixPhase=plan` (task `task_512c67ce`)
- `autoApprove` bỏ `qa_fix_plan` / `qa_fail_rollback`
- `mfeStdUrl` · `yarn start:std` · web e2e · GenerateImage / fake CORE PNG
- Re-introduce `demoRows` / OfflineDemo CORE · invent GetById · ERP.* · Step 4b
- iOS nav/detail rework (closed round 1) trừ regress
- Chain `/agent-qa*` / review trong task plan này

## Evidence

- re-QA FAIL: `qa/scenarios.md` · `qa/bugs/asset-detail.md` · `ui/review/align-ux.md` · `P6-CORE.png` · task `task_20e8f629`
- Prior implement: `task_714bba2c` · plan round 1 `task_24109163`
- Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android`
- BFF: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff`
- BE: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Product: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data`

## Handoff

| Field | Value |
|-------|-------|
| this role | `dev` · `qaFixPhase=plan` · **done** |
| next | board `pending_confirm` `qa_fix_plan` → implement task → `/agent-qa-mobile` |
| scope | **Android-only** list live · iOS freeze |
| STATUS | plan written · Dev implement **pending** · QA **blocked** · **cấm** review |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios + agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-01T16:55:00.000Z` |
| qaFixPhase | plan |
| taskId | task_512c67ce |
| qaFailFrom | task_20e8f629 |
| dorGate | PASS |
| contentHash | sha256:asset-detail-qa-fix-plan-20260901-r2 |

---
<!-- Version meta: skillId=agent-dev-ios+android dorGate=PASS qaFixPhase=plan taskId=task_512c67ce -->
