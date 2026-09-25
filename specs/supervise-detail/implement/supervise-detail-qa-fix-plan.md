# QA fix plan — supervise-detail (round 2)

> Status: **draft** · **await_confirm** · **cấm** Write code trước board Approve `qa_fix_plan`  
> Nguồn: `qa/scenarios.md` · `qa/bugs/supervise-detail.md` · `qa/store/supervise-detail/CAPTURE.md` · `handoff/qa-compact.md` · STATUS blockers  
> Phase: `qaFixPhase=plan` · planTask=`task_1fd8b207` · qaFailFrom=`task_4063c6a2` · prior implement=`task_112638ae` (claim **not closed**)  
> lane: **mobile** · packKind: **`screen`** · `#sc-supervise-detail` · entry `#sc-supervise` · **cấm** mfeStdUrl / yarn start:std / e2e ở Dev

## Gaps (từ QA `task_4063c6a2` · re-QA sau implement round 1)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-SUP-DET-AND-LIST-01** | **P0 / Must** | Login OK · company LINM · tile Giám sát → `#sc-supervise` `sup-empty`. Logcat `I/SuperviseList: GET patrol/attendance-logs…` (pid 30648 · 22:40:10) **không** kèm OkHttp. BFF **0** GET `attendance-logs` từ `10.0.2.2` (login + session-window OK). Seed curl list 200. | Android list `#sc-supervise` |
| **GAP-QA-STORE-03** | **P0 / Must** | Maestro-AND FAIL · assert `sup-card-a0000001-2026-0810-0001-000000000001` · P6-CORE / P6-CORE-2 invalid | Android Maestro / store |
| **R-QA-02** | **P0** gate | re-QA **ok:false** · iOS PASS · Android FAIL · `qa_fail_rollback` → Dev plan round 2 | Workflow |

**iOS A3-CORE PASS** (live Nguyễn Văn A · CC-20260810-001 · seed `a0000001-2026-0810-0001-000000000001`) — **không** sửa iOS trừ regression sau Android fix.

**Không reopen:** GAP-MOB-SUP-DET-DEMO-01 · GAP-MOB-SUP-DET-PACK-01 · GAP-MOB-SUP-DET-ORG-01 · cleanup_mock OfflineDemo · Step 4b · ERP.* · đổi controlHint.

## Disk audit (plan turn · 2026-09-20) — verify only · **không** Write code

| Check | Result | Note |
|-------|--------|------|
| Round-1 ON_RESUME | **SHIPPED · NOT CLOSED** | `SuperviseScreen` `ON_RESUME` → `Appear` → `load()`. QA logcat có đúng 1 dòng `SuperviseList` |
| Pre-call log | **REJECT** | `SuperviseViewModel.load` `Log.i` **trước** `fetchCheckins`. QA: Appear log ≠ OkHttp emit |
| Outcome UI | **EMPTY** | `sup-empty` chỉ khi `!isLoading && items.isEmpty()` → Loaded(empty) **hoặc** LoadFailed |
| Use case | **SWALLOW** | `FetchSuperviseCheckinsUseCase` `catch (_: Exception)` → LoadFailed · **không** log class/message |
| Repo | **ALWAYS HTTP** | `SuperviseRepositoryImpl.fetchCheckins` gọi `api.attendanceLogs` · không mock |
| OkHttp client | **NO LOGGER** | `NetworkModule` chỉ `AuthInterceptor` · không EventListener / HttpLogging |
| Base URL | **DEFAULT** `http://10.0.2.2:5202` + prefix `mobile-bff/api/v1/` | Login từ emulator **đã** vào BFF cùng host — list GET thì không |
| Mapper | **DROP** `userName` blank | Chỉ sau HTTP 200 · không giải thích BFF 0 request |
| Detail | **LIVE** · blocked | GetById cleanup_mock giữ · không vào được vì không có card |
| iOS | **PASS re-QA** | A3 · **cấm** touch |
| BFF / Step 4b | **N/A** | reuse `GET patrol/attendance-logs` · **cấm** invent |

**Root cause (ưu tiên):** coroutine đã chạy (`SuperviseList` log) nhưng request **không** tới BFF. UI empty khớp LoadFailed (exception nuốt) hơn là 200 rỗng (200 thì BFF phải thấy GET cùng IP với login). Round 1 chỉ chứng minh Appear, không chứng minh `chain.proceed`.

Nhánh phụ (chỉ khi OkHttp log `<-- 200`): body `items` rỗng hoặc mapper drop `userName` — đối chiếu curl `X-Company-Id: LINM`. **Cấm** bơm OfflineDemo.

## Plan (sau board Approve `qa_fix_plan` · `qaFixPhase=implement`)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Bỏ DoD log trước call. Log **sau** suspend: code + full URL host + item count. Exception: class + message, rồi LoadFailed | Android | `SuperviseViewModel.kt` · `SuperviseUseCases.kt` · `SuperviseRepositoryImpl.kt` | Logcat có `okhttp` + `10.0.2.2` + HTTP code. **Cấm** đóng gap bằng `Log.i` trước `fetchCheckins` |
| 2 | Single-flight: nếu `loadJob` đang active thì không `cancel()` trước response. Cancel chỉ khi rời màn / filter mới | Android | `SuperviseViewModel.kt` | Không cancel trước `chain.proceed`. Empty không phải từ job bị huỷ giữa chừng |
| 3 | Nếu log là IOException / cleartext / host lệch: sửa `BffConfig` / `bff.base` debug = `http://10.0.2.2:5202` (cùng login). Không thêm endpoint | Android | `BffConfig.kt` · `local.properties` `bff.base` nếu lệch | BFF access log ≥1 `GET …/patrol/attendance-logs` từ `10.0.2.2` |
| 4 | Nếu `<-- 200` và mapped 0: log raw count trước mapper. Raw >0 → giữ row có `userName`. Raw 0 → đối chiếu `X-Company-Id: LINM` với curl seed. **Cấm** demo rows | Android | `SuperviseDtoMapper.kt` · `AuthInterceptor.kt` (chỉ nếu header thiếu) | Card `sup-card-a0000001-2026-0810-0001-000000000001` |
| 5 | Tap card → `GET …/attendance-logs/{id}` live · EmptyChrome 404 giữ | Android | `SuperviseDetail*` · nav đã có | P6 không còn `sup-empty` khi seed có · đóng GAP-QA-STORE-03 |
| 6 | VERIFY GATE (implement turn) | iOS · Android · BFF | — | `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** · `./gradlew :app:assembleDebug` · `dotnet build` Mobile.Bff **PASS**. iOS source **không** đổi trừ regress |
| 7 | Sync STATUS + implement notes | Data | `STATUS.md` · `implement/android.md` · `handoff/dev-compact.md` | GAP còn open hoặc đóng kèm evidence OkHttp+BFF · QA pending |
| 8 | Re-QA | **không** chạy ở Dev | `/agent-qa-mobile` | `yarn e2e-qa-mobile` · iOS A3 giữ PASS · Android P6 card seed · **cấm** start:std |

## Peer reference

| Piece | Peer |
|-------|------|
| List GET | iOS list (QA PASS) · cùng `GET patrol/attendance-logs?page=1&pageSize=50` |
| Proof | OkHttp response log + BFF access `10.0.2.2` — không phải `SuperviseList` pre-log |
| Tenant | `AuthInterceptor` · `X-Company-Id: LINM` |
| Entry | Home / PatrolHome tile → `#sc-supervise` |
| Sibling | `asset-detail` plan round 2 · plan → Approve → implement |

## Cấm

- Sửa ngoài gap list
- Write iOS/Android/BFF/BE trong `qaFixPhase=plan` (task này)
- `autoApprove` bỏ `qa_fix_plan` / `qa_fail_rollback`
- Copy note demo · `SuperviseDetailCopy.demo` / OfflineDemo
- `mfeStdUrl` · `yarn start:std` · GenerateImage / fake CORE PNG
- Invent attendance-logs path · ERP.* · Step 4b migration
- Đổi controlHint
- Chain `/agent-qa*` trong task plan
- Mark Dev implement done trước OkHttp+BFF evidence và build PASS
- Đóng gap vì log `SuperviseList` trước network

## Evidence

- FAIL: `qa/scenarios.md` · `qa/bugs/supervise-detail.md` · `qa/store/supervise-detail/CAPTURE.md` · P6-CORE · task `task_4063c6a2`
- Logcat: `qa/screens/_maestro_android/android-5/logs/device-logcat.txt` dòng `SuperviseList` · không có OkHttp
- iOS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS`
- Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android`
- BFF: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff`
- BE: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Product: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data`
- mfeStdUrl: —

## Handoff

| Field | Value |
|-------|-------|
| this role | `dev` · `qaFixPhase=plan` round 2 · **done** (plan only) |
| next gate | board **`qa_fix_plan`** Approve · **pending_confirm** |
| after Approve | enqueue Dev `qaFixPhase=implement` · Plan §1–7 · **cấm** e2e ở Dev |
| after implement PASS | `/agent-qa-mobile` · Plan §8 |
| STATUS | plan **await_confirm** · QA vẫn **blocked** · **cấm** review |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios + agent-dev-android |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-20T00:22:25.000Z` |
| versionGate | rechecked |
| qaFixPhase | plan |
| taskId | task_1fd8b207 |
| dorGate | PASS (plan-only · builds SKIP) |
| contentHash | sha256:supervise-detail-qa-fix-plan-20260920-r2 |

---
<!-- Version meta: skillId=agent-dev-ios+android dorGate=PASS qaFixPhase=plan taskId=task_1fd8b207 -->
