# QA fix plan — asset

> Status: **pending_confirm** · `qaFixPhase=plan` · **cấm** Write code tới khi board Approve  
> Nguồn: `qa/scenarios.md` · `qa/bugs/task_0aaf071e.md` · `handoff/qa-compact.md` · STATUS blockers  
> Phase: `qaFixPhase=plan` · taskId=`task_ad15226f` · qaFailFrom=`task_0aaf071e` · prior implement=`task_fa241430`  
> lane: **mobile** · packKind: **`list`** · `#sc-asset-list` · **cấm** mfeStdUrl / yarn start:std / e2e ở Dev

## Gaps (từ QA `task_0aaf071e`)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-STORE-03** | **P0 / Must** | Maestro Android assert `#row-asset-0` FAIL · hierarchy `asset-list-empty` · P6-CORE EmptyChrome | Android Maestro · store |
| **GAP-MOB-ASSET-AND-FETCH-01** | **P0 / Must** | Emulator mở `#sc-asset-list` · **0** `GET .../asset/road-assets` từ `10.0.2.2` · có login/session/asset-types/road-routes/asset-candidates · host/iOS GET 200 + items · EmptyChrome «Chưa có tài sản» | Android `AssetListScreen` → VM → `FetchAssetListUseCase` → OkHttp |
| **GAP-MOB-UX-DUAL-01** | **P0 / Must** | iOS A3-CORE live rows ↔ Android P6-CORE empty — dual not aligned | align-ux · dual CORE |
| **R-QA-01** | **P0** gate | QA verdict **fail** · `qa_fail_rollback` → Dev plan (task này) | Workflow |

**Prior fix chưa đóng:** `task_fa241430` SideEffect + Appear — VERIFY build PASS · re-QA `task_0aaf071e` **FAIL** (runtime vẫn 0 `road-assets`).

**Không reopen (CLOSED / N/A):** cleanup_mock live-only (`task_dc98ed58`) · demoRows list path · Step 4b invent · ERP.* · filter type/route/km P2 · web Kind B · sibling asset-detail/collect/adjust · Appear keyed by `onBack`/`onOpenDetail` (đã bỏ).

**Non-block:** Android `auth/profile` → BFF rewrite log `web-bff` 500 (login vẫn 200).

## Disk audit (plan turn · 2026-09-20) — verify only · **không** Write code

| Check | Result | Note |
|-------|--------|------|
| Android `#sc-asset-list` | **PRESENT** | `AssetListScreen.kt` · `testTag("sc-asset-list")` · EmptyChrome `asset-list-empty` · rows `row-asset-$index` |
| Nav entry | **PRESENT** | `MainTabScreen` `composable("asset-list")` + `asset-list/type/{type}` · hub `#tile-list` → list |
| Appear wiring (disk) | **RISK REOPEN** | `SideEffect` set handlers OK · **`LaunchedEffect(typeFilter) { setTypeFilter; Appear }`** — **không** khớp peer `LaunchedEffect(Unit)` (`IncidentListScreen`) · lệch claim plan cũ `LaunchedEffect(Unit)` |
| Initial UI state | **RISK** | `AssetListUiState.isLoading` default **`false`** + `items=[]` → EmptyChrome **trước** first load · nếu Appear/load không emit network → đúng symptom QA (empty + 0 GET) |
| ViewModel load | **PRESENT** | `Appear → load()` · `viewModelScope.launch` · fail → toast + empty · Loaded → items |
| UseCase / Repo / API | **PRESENT** | `FetchAssetListUseCase` → `AssetRepositoryImpl.fetchList` → `@GET("asset/road-assets")` · mapIndexedNotNull |
| Live-only | **CONFIRMED** | empty → EmptyChrome · fail → toast · **cấm** demoRows on list path |
| Peer pattern | **PRESENT** | `IncidentListScreen` · `LaunchedEffect(Unit) { setOn*; Appear }` |
| iOS list | **OK prior QA** | A3-CORE live rows · **không** đổi controlHint trừ dual re-verify |
| BFF GET road-assets | **LIVE OK** | `:5202` · host/iOS 200 + ≥50 · And **0** call · Step 4b **N/A** |
| Prior VERIFY builds | **PASS** | `task_fa241430` · **không** re-claim ở plan |

**Root-cause hypothesis (implement verify theo thứ tự):**

1. **Android 0 GET / EmptyChrome (AND-FETCH-01 / STORE-03) — primary:** Appear→`load`→OkHttp **không chạy trên APK e2e** dù wire Screen có. Evidence QA: traffic And khác OK · chỉ thiếu `road-assets`. Disk drift: `LaunchedEffect(typeFilter)` vs peer `Unit`; initial `isLoading=false` che “chưa fetch”.  
   **Fix candidates (implement, sau Approve):**
   - Align peer: `LaunchedEffect(Unit) { Appear }` + `typeFilter` riêng (`LaunchedEffect(typeFilter)` chỉ `setTypeFilter` + reload **sau** first appear, hoặc key ổn định).
   - First-load gate: `isLoading=true` default **hoặc** `hasLoadedOnce` — EmptyChrome **chỉ** sau fetch settled (Loaded empty thật).
   - Lifecycle: `LifecycleEventObserver` / `DisposableEffect` **ON_START|ON_RESUME** → Appear/load nếu chưa có in-flight (nav transition cancel effect).
   - Confirm Maestro install **fresh** `assembleDebug` APK chứa fix (không stale binary).
   - Dev logcat: Appear / load start / Retrofit call — chứng minh emit trên emulator.
2. **Mapper all-null (secondary, chỉ nếu đã thấy GET 200):** `listRow` mapIndexedNotNull → Loaded([]) dù BE có items — **không** giải thích 0 GET hiện tại; verify sau khi network xuất hiện.
3. **Dual (UX-DUAL-01):** sau fetch live, P6 rows như A3; EmptyChrome chỉ khi GET OK empty thật.
4. **iOS:** không đổi list AC / controlHint trừ dual smoke.

## Plan (sau board Approve `qa_fix_plan` · `qaFixPhase=implement`)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Trace+fix Android fetch path — peer `LaunchedEffect(Unit)` Appear · first-load gate · optional Lifecycle Resume · **cấm** Appear keyed unstable lambdas | Android | `AssetListScreen.kt` · `AssetListViewModel.kt` · `AssetListUiState.kt` | Emulator **≥1** `GET road-assets` từ `10.0.2.2` · `#row-asset-0` · **đóng** AND-FETCH-01 · STORE-03 |
| 2 | Giữ live-only — empty/fail → EmptyChrome+toast · **cấm** re-introduce `demoRows` | Android | VM · Screen | BE empty → EmptyChrome đúng; BE có data → rows |
| 3 | Dual smoke — iOS A3 vẫn rows · Android P6 live sau fix | iOS · Android | — | **đóng** UX-DUAL-01 (visual) |
| 4 | VERIFY GATE builds | iOS · Android · BFF | — | `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · `./gradlew :app:assembleDebug` · `dotnet build` Mobile.Bff **PASS** · e2e dùng APK vừa build |
| 5 | Sync STATUS + implement notes + handoff | Data | `STATUS.md` · `implement/ios.md` · `android.md` · `handoff/dev-compact.md` | blockers closed hoặc còn open rõ · implement done · QA pending |
| 6 | Re-QA (role `/agent-qa-mobile` · **không** chạy ở Dev) | QA | scenarios · store · screens · align-ux | e2eQa ON · `yarn e2e-qa-mobile` · A3+P6 live · Maestro `row-asset-0` PASS |

## Peer reference

| Piece | Peer |
|-------|------|
| Appear once | `IncidentListScreen` · `LaunchedEffect(Unit)` |
| Handlers | SideEffect / DisposableEffect setOn* · Appear tách |
| Live-only list | `task_dc98ed58` cleanup_mock |
| BFF | GET `mobile-bff/api/v1/asset/road-assets` · reuse · Step 4b N/A |
| Prior Appear attempt | `task_fa241430` · **runtime gap còn** |

## Out of scope / Cấm

- Write iOS/Android/BFF/BE **trong** `qaFixPhase=plan` (task `task_ad15226f`)
- `autoApprove` bỏ `qa_fix_plan` / `qa_fail_rollback`
- `mfeStdUrl` · `yarn start:std` · web e2e · GenerateImage / fake CORE PNG
- Invent endpoint · ERP.* · Step 4b migration · filter P2 toolbar
- Re-run PO→Design→SA→TL · change controlHint không AskQuestion
- Chain `/agent-qa*` / review trong task plan này
- Fix `auth/profile` web-bff 500 (note riêng)

## Evidence

- FAIL: `qa/scenarios.md` · `qa/bugs/task_0aaf071e.md` · `handoff/qa-compact.md` · P6 EmptyChrome · `task_0aaf071e`
- Prior plan/implement: `implement/asset-qa-fix-plan.md` (superseded bởi bản này) · `task_7e0b31e2` / `task_fa241430`
- Disk: `AssetListScreen.kt` `LaunchedEffect(typeFilter)` · `AssetListUiState.isLoading=false` default
- iOS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS`
- Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android`
- BFF: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff`
- BE: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Product: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data`

## Handoff

| Field | Value |
|-------|-------|
| this role | `dev` · `qaFixPhase=plan` · **pending_confirm** |
| next | board Approve `qa_fix_plan` → Dev `qaFixPhase=implement` · rồi `/agent-qa-mobile` |
| STATUS | Dev plan **pending_confirm** · QA pending · Review blocked |
| code | **none** this turn |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios + agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-09-20T04:15:00.000Z` |
| versionGate | ok |
| qaFixPhase | plan |
| taskId | task_ad15226f |
| qaFailFrom | task_0aaf071e |
| dorGate | PASS |
| contentHash | sha256:asset-qa-fix-plan-fetch-20260920 |

---
<!-- Version meta: skillId=agent-dev-ios+android dorGate=PASS qaFixPhase=plan -->
