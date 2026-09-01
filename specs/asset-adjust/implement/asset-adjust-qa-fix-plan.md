# QA fix plan — asset-adjust

> Status: **await_confirm** · **cấm** Write iOS/Android/BFF/BE trước board Approve `qa_fix_plan`  
> Nguồn: `qa/scenarios.md` · `qa/bugs/asset-adjust.md` · `ui/review/align-ux.md` · STATUS blockers  
> Phase: `qaFixPhase=plan` · taskId=`task_c02a17d5` · qaFailFrom=`task_74581051`  
> lane: **mobile** · packKind: **`screen`** · `#sc-asset-adjust` · **cấm** mfeStdUrl / yarn start:std / e2e ở phase plan

## Gaps (từ QA `task_74581051`)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-REAL-01** | **P0 / Must** | e2e CLI PASS · A3-CORE iOS live `KM-QL1-NA-*` · P6-CORE Android **1** row demo `TS-20260810-014 · Cống` + toast «Không tải được danh sách. Đang dùng dữ liệu mẫu.» trong khi BFF `:5202` + API `:5111` healthy | Android `#sc-asset-adjust` · `FetchAssetAdjustListUseCase` → `OfflineDemo` · `asset.adjust.toast.loadFail` |
| **GAP-MOB-SEARCH-PLACEHOLDER** | Should · **DEFER kit** | Kit `LinmSearchField` hardcode `Tìm` · MapFile/PO SSOT dài | Kit / **OUT** Dev implement |
| **R-QA-01** | **P0** gate | QA verdict **fail** · queue `failed` · board `qa_fail_rollback` → Dev plan | Workflow |

**Không reopen (đã CLOSED prior):** GAP-MOB-ASSET-ADJUST-PACK/EDIT/SEARCH/ROW/MEDIA · GAP-MOB-UX-COMP-03 · PUT UI · media · Step 4b invent.

## Disk audit (plan turn · 2026-09-01) — verify only · **không** Write code

| Check | Result | Note |
|-------|--------|------|
| iOS `#sc-asset-adjust` | **PRESENT** · A3 live PASS | `Presentation/Features/AssetAdjust/` · `FetchAssetAdjustListUseCase` same OfflineDemo-on-throw pattern |
| Android `#sc-asset-adjust` | **PRESENT** · P6 demo+toast FAIL | `presentation/feature/assetadjust/` · ViewModel load → `OfflineDemo` |
| Hub `#tile-adjust` → navigate | **WIRED** dual | Maestro QA-03 PASS |
| Soft-delete modal cancel | **PASS** smoke | QA-06 |
| `AuthInterceptor` `X-Company-Id` | **PRESENT** | `companyStore.readCompanyCode()` · login `applyCompanyId(JWT company_id)` |
| `bff.base` | **SET** | `local.properties` → `http://10.0.2.2:5202` · cleartext allowlist |
| GET `asset/road-assets` | **REUSE** | `ApiService` + `AssetRepositoryImpl.fetchList` · BFF catch-all · **cấm** invent |
| UseCase catch → OfflineDemo | **CONFIRMED** | empty → `Empty` (no toast) · **exception** → demo + toast — P6 = **throw path** |
| Peer asset-detail | **SAME family** | Auth-only (no company) → list `totalCount=0` · GetById need `X-Company-Id: LINM` · seed live OK |
| Step 4b / BE | **N/A Signed** | SA+TL · SoftDelete + GetList reuse · **cấm** ERP.* |

**Root-cause hypothesis (implement verify):** Android GET list **throws** (HTTP/network/map) → OfflineDemo despite BFF live on iOS. Primary suspects: (1) `X-Company-Id` missing/stale after login on emulator → API 4xx/empty edge; (2) Retrofit/HttpException on non-2xx; (3) DTO map throw. iOS A3 live proves seed+BFF OK — **không** seed gap. Fix = make Android GET succeed with same tenant as iOS (`company_id=LINM`), not remove Offline fallback contract.

## Plan (sau board Approve `qa_fix_plan` · `qaFixPhase=implement`)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Verify login → `applyCompanyId` → `CompanyContextStore` trước GET list (JWT `company_id=LINM`) | Android | `AuthRepositoryImpl` · `JwtCompanyClaims` · `AuthInterceptor` · login persist path | Mọi GET `asset/road-assets*` có header `X-Company-Id: LINM` (peer iOS) |
| 2 | Diagnose throw path `FetchAssetAdjustListUseCase` / `AssetRepositoryImpl.fetchList` trên emulator | Android | `FetchAssetAdjustListUseCase.kt` · `AssetRepositoryImpl.kt` · `ApiService` | Log/code path: HTTP code vs parse · empty → `Empty` (không toast demo) · live → `KM-QL1-NA-*` **cấm** `TS-20260810-*` trên CORE |
| 3 | Minimal fix only nếu step 1–2 chứng minh app bug (header/session/map) — **cấm** invent API · **cấm** đổi controlHint | Android (+ iOS chỉ nếu cùng root) | assetadjust / Auth interceptor / mapper | P6-CORE live codes · **0** loadFail toast khi BFF healthy · **đóng** GAP-QA-REAL-01 |
| 4 | KEEP OfflineDemo chỉ khi thật offline/HTTP fail — **cấm** dùng demo khi GET 200 live | Android | UseCase + ViewModel | Không regress offline toast contract |
| 5 | VERIFY GATE builds | iOS · Android · BFF | — | `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · `./gradlew :app:assembleDebug` · `dotnet build` Mobile.Bff **PASS** |
| 6 | Sync STATUS + implement notes | Data | `STATUS.md` · `implement/ios.md` · `android.md` · `handoff/dev-compact.md` | blocker GAP-QA-REAL-01 closed hoặc còn open rõ · pipeline Dev done · QA pending |
| 7 | Re-QA (role `/agent-qa-mobile` · **không** chạy ở Dev) | QA | `qa/scenarios.md` · store · screens · align-ux | e2eQa ON · `yarn e2e-qa-mobile` · A3+P6 live · **cấm** `TS-20260810-*` CORE · Must 0 |

## Peer reference

| Piece | Peer |
|-------|------|
| Tenant header | asset-detail QA note · `X-Company-Id: LINM` · AuthInterceptor |
| List GET + SoftDelete | SA solution-discovery · BFF catch-all |
| OfflineDemo contract | iOS `FetchAssetAdjustListUseCase` · Android twin |
| Search placeholder | Kit DEFER · GAP-MOB-SEARCH-PLACEHOLDER |

## Out of scope / Cấm

- Write iOS/Android/BFF/BE **trong** `qaFixPhase=plan` (task này)
- `autoApprove` bỏ `qa_fix_plan` / `qa_fail_rollback`
- `mfeStdUrl` · `yarn start:std` · web e2e · GenerateImage / fake CORE PNG
- Fix kit Search placeholder (DEFER)
- PUT UI · media · invent `api/v1/asset-adjust` · ERP.* · Step 4b migration
- Re-run PO→Design→SA→TL · change controlHint không AskQuestion
- Chain `/agent-qa*` / review trong task plan này

## Evidence

- Prior FAIL: `qa/scenarios.md` · `qa/bugs/asset-adjust.md` · `ui/review/align-ux.md` · A3-CORE / P6-CORE · task `task_74581051`
- iOS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS`
- Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android`
- BFF: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff`
- BE: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Product: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data`

## Handoff

| Field | Value |
|-------|-------|
| this role | `dev` · `qaFixPhase=plan` · **done** |
| next gate | board **`qa_fix_plan`** Approve |
| after Approve | enqueue Dev `qaFixPhase=implement` · Plan §1–6 · **cấm** e2e ở Dev |
| after implement PASS | `/agent-qa-mobile` · e2eQa ON · Plan §7 |
| STATUS | Dev plan **await_confirm** · QA vẫn **blocked** (prior fail) · **cấm** review |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios + agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-01T09:45:09.000Z` |
| versionGate | ok |
| qaFixPhase | plan |
| taskId | task_c02a17d5 |
| dorGate | PASS (plan-only) |
| contentHash | sha256:asset-adjust-qa-fix-plan-20260901 |

---
<!-- Version meta: skillId=agent-dev-ios+android dorGate=PASS qaFixPhase=plan -->
