# QA fix plan — supervise-detail

> Status: **await_confirm** · **cấm** Write iOS/Android/BFF/BE trước board Approve `qa_fix_plan`  
> Nguồn: `qa/scenarios.md` · `qa/bugs/supervise-detail.md` · `ui/review/align-ux.md` · STATUS blockers · `handoff/qa-compact.md`  
> Phase: `qaFixPhase=plan` · taskId=`task_dcfaf100` · qaFailFrom=`task_02d20b55`  
> lane: **mobile** · packKind: **`screen`** · `#sc-supervise-detail` · entry `#sc-supervise` · **cấm** mfeStdUrl / yarn start:std / e2e ở phase plan

## Gaps (từ QA `task_02d20b55`)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-SUP-DET-AND-LIST-01** | **P0 / Must** | Login OK · company LINM · open `#sc-supervise` → `sup-empty`. BFF: **0** GET `attendance-logs` từ `10.0.2.2` (login + `patrol/sessions` OK). Blocks tap `sup-card-*` → detail | Android list `#sc-supervise` (entry detail) |
| **GAP-QA-STORE-03** | **P0** | Maestro-AND FAIL · P6-CORE / P6-CORE-2 invalid (empty list) | Android Maestro / store |
| **R-QA-01** | **P0** gate | QA verdict **fail** · queue `failed` · board `qa_fail_rollback` → Dev plan | Workflow |

**iOS A3-CORE PASS** (live Nguyễn Văn A · CC-20260810-001 · seed `a0000001-2026-0810-0001-000000000001`) — **không** reopen iOS detail trừ regression sau Android fix.

**Không reopen (đã CLOSED prior):** GAP-MOB-SUP-DET-DEMO-01 · GAP-MOB-SUP-DET-PACK-01 · GAP-MOB-SUP-DET-ORG-01 · cleanup_mock OfflineDemo · Step 4b invent · ERP.* · change controlHint.

## Disk audit (plan turn · 2026-09-01) — verify only · **không** Write code

| Check | Result | Note |
|-------|--------|------|
| Android `#sc-supervise` | **PRESENT** | `presentation/feature/supervise/SuperviseScreen.kt` · `LaunchedEffect(Unit)` → `Appear` → `load()` |
| Android list live-only | **CONFIRMED** | empty → `sup-empty` · LoadFailed → empty + toast · **cấm** demo inject |
| Android UC list | **PRESENT** | `FetchSuperviseCheckinsUseCase` → `SuperviseRepositoryImpl.fetchCheckins` → `GET patrol/attendance-logs` |
| Android `#sc-supervise-detail` | **PRESENT** | live-only GetById · OfflineDemo **removed** (cleanup_mock) |
| Nav wire | **WIRED** | Home + Patrol NavHost · `supervise` → `SuperviseScreen` · `onOpenDetail` → `supervise-detail/{id}` |
| Auth / tenant | **PRESENT** | `AuthInterceptor` + `CompanyContextStore` · `LoginUseCase.applyCompanyId` |
| iOS detail / list | **PASS prior QA** | A3 live · GET by id 200 |
| BFF GetById / list | **REUSE live** | `GET patrol/attendance-logs` · `{id}` · seed LINM · **cấm** invent |
| Step 4b / BE | **N/A Signed** | SA+TL · EmptyChrome OK 404/fail |

**Root-cause hypothesis (implement verify):**

1. **No GET on BFF (primary):** Android `#sc-supervise` shows `sup-empty` nhưng BFF **không** nhận `GET patrol/attendance-logs` từ emulator — nghi `Appear`/`load()` không chạy đúng lifecycle (NavHost dual Home/Patrol · composition skip), **hoặc** coroutine abort trước OkHttp. Fix ưu tiên: verify Appear luôn fire (Lifecycle `ON_RESUME` / re-Appear) + log/OkHttp chứng minh request ra `10.0.2.2:5202`.
2. **Silent LoadFailed:** nếu GET có nhưng QA miss window — LoadFailed → empty + toast; vẫn cần GET emit + `X-Company-Id: LINM`. Fix header/session/`bff.base` nếu throw trước/sau call.
3. **Empty 200 (secondary):** GET 200 `items=[]` vì tenant/seed — verify seed LINM còn trên BFF; **cấm** re-introduce OfflineDemo/demo rows để pass CORE.
4. **Detail blocked:** không có `sup-card-*` → không vào `#sc-supervise-detail` — đóng list GET trước; detail path đã live-only (iOS chứng minh).

## Plan (sau board Approve `qa_fix_plan` · `qaFixPhase=implement`)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Android list: đảm bảo mỗi lần vào `#sc-supervise` gọi `GET patrol/attendance-logs?page=1&pageSize=50` (Appear/ON_RESUME) · BFF thấy request từ emulator | Android | `SuperviseScreen.kt` · `SuperviseViewModel.kt` · optional Lifecycle | BFF log ≥1 GET list · **đóng** GAP-QA-SUP-DET-AND-LIST-01 (emit) |
| 2 | Dual tenant: login → `applyCompanyId` → mọi GET attendance-logs* có `X-Company-Id: LINM` | Android (verify iOS) | `AuthInterceptor` · `CompanyContextStore` · login | List 200 với seed row · card `sup-card-a0000001-2026-0810-0001-000000000001` |
| 3 | List fail UX: LoadFailed giữ empty+toast · **cấm** OfflineDemo / demo rows trên CORE | Android | `FetchSuperviseCheckinsUseCase` · VM · Screen | empty chỉ khi thật empty/fail · không mock |
| 4 | Detail path: tap card → `GET …/{id}` live · EmptyChrome 404/fail giữ cleanup_mock | Android | `SuperviseDetail*` · nav `supervise-detail/{id}` | P6 hero live · **đóng** GAP-QA-STORE-03 |
| 5 | VERIFY GATE builds | iOS · Android · BFF | — | `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · `./gradlew :app:assembleDebug` · `dotnet build` Mobile.Bff **PASS** |
| 6 | Sync STATUS + implement notes | Data | `STATUS.md` · `implement/ios.md` · `android.md` · `handoff/dev-compact.md` | blockers closed hoặc còn open rõ · QA pending |
| 7 | Re-QA (role `/agent-qa-mobile` · **không** chạy ở Dev) | QA | `qa/scenarios.md` · store · screens · align-ux | e2eQa ON · `yarn e2e-qa-mobile` · iOS A3 + Android P6 live · **cấm** `sup-empty` khi seed có |

## Peer reference

| Piece | Peer |
|-------|------|
| List GET | iOS Supervise list (QA PASS) · `GET patrol/attendance-logs` |
| Detail GET | BFF passthrough · SA solution-discovery · Step 4b N/A |
| Tenant | `AuthInterceptor` / `CompanyContextStore` · JWT company LINM |
| Entry | PatrolHome / Home tile → `supervise` · TapItem → detail |
| Sibling | asset-detail / asset-adjust QA-fix-plan · cùng pattern plan→Approve→implement |

## Out of scope / Cấm

- Write iOS/Android/BFF/BE **trong** `qaFixPhase=plan` (task này)
- `autoApprove` bỏ `qa_fix_plan` / `qa_fail_rollback`
- `mfeStdUrl` · `yarn start:std` · web e2e · GenerateImage / fake CORE PNG
- Invent attendance-logs path · ERP.* · Step 4b migration
- Re-introduce `SuperviseDetailCopy.demo` / OfflineDemo
- Re-run PO→Design→SA→TL · đổi controlHint không AskQuestion
- Chain `/agent-qa*` / review trong task plan này
- Sửa iOS detail khi không regression (prior A3 PASS)

## Evidence

- Prior FAIL: `qa/scenarios.md` · `qa/bugs/supervise-detail.md` · `qa/store/supervise-detail/CAPTURE.md` · P6-CORE · task `task_02d20b55`
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
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-01T09:56:24.000Z` |
| versionGate | rechecked |
| qaFixPhase | plan |
| taskId | task_dcfaf100 |
| dorGate | PASS (plan-only) |
| contentHash | sha256:supervise-detail-qa-fix-plan-20260901 |

---
<!-- Version meta: skillId=agent-dev-ios+android dorGate=PASS qaFixPhase=plan -->
