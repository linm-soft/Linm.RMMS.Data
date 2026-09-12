# QA fix plan — asset

> Status: **approved** · **implemented** (`task_fa241430`) · next `/agent-qa-mobile`  
> Nguồn: `qa/scenarios.md` · `qa/bugs/task_4ec34586.md` · `handoff/qa-compact.md` · STATUS blockers  
> Phase: `qaFixPhase=implement` **done** · taskId=`task_fa241430` · plan=`task_7e0b31e2` · qaFailFrom=`task_4ec34586`  
> lane: **mobile** · packKind: **`list`** · `#sc-asset-list` · **cấm** mfeStdUrl / yarn start:std / e2e ở Dev

## Gaps (từ QA `task_4ec34586`)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-STORE-03** | **P0 / Must** | Maestro Android assert `#row-asset-0` FAIL trên `#sc-asset-list` · P6-CORE EmptyChrome | Android Maestro · store |
| **GAP-MOB-ASSET-AND-FETCH-01** | **P0 / Must** | Emulator mở list · **0** `GET .../asset/road-assets` từ `10.0.2.2` trong BFF log · host/iOS GET 200 + items · Android EmptyChrome «Chưa có tài sản» | Android `AssetListScreen` Appear/fetch |
| **GAP-MOB-UX-DUAL-01** | **P0 / Must** | iOS A3-CORE live rows ↔ Android P6-CORE empty — dual not aligned | align-ux · dual CORE |
| **R-QA-01** | **P0** gate | QA verdict **fail** · `qa_fail_rollback` → Dev plan | Workflow |

**Không reopen (đã CLOSED / N/A):** cleanup_mock live-only (`task_dc98ed58`) · demoRows list path · Step 4b invent · ERP.* · filter type/route/km P2 · web Kind B · sibling asset-detail/collect/adjust.

**Non-block (theo dõi riêng):** Android `auth/profile` → BFF rewrite log `web-bff` 500 (login vẫn 200).

## Disk audit (plan turn · 2026-09-01) — verify only · **không** Write code

| Check | Result | Note |
|-------|--------|------|
| Android `#sc-asset-list` | **PRESENT** | `presentation/feature/assetlist/AssetListScreen.kt` · `testTag("sc-asset-list")` |
| Appear / load wiring | **RISK CONFIRMED** | `LaunchedEffect(onBack, onOpenDetail) { setOnBack; setOnOpenDetail; Appear }` — keys = lambda → recomposition restart/cancel trước `load()` |
| ViewModel Appear → load | **PRESENT** | `AssetListIntent.Appear → load(_state.value.searchText)` |
| Live-only empty/fail | **CONFIRMED** | empty → EmptyChrome · fail → toast · **cấm** demoRows on list path |
| Peer pattern | **PRESENT** | `IncidentListScreen` / `SuperviseScreen` / `OpsScreen` · `LaunchedEffect(Unit) { Appear }` |
| iOS list | **OK prior QA** | A3-CORE live rows · **không** đổi trừ dual re-verify |
| BFF GET road-assets | **LIVE OK** | `:5202` · host/iOS 200 + ≥50 items · Step 4b **N/A** |
| Prior VERIFY builds | **PASS** | `task_dc98ed58` · iOS/Android/BFF — re-run ở implement |

**Root-cause hypothesis (implement verify):**

1. **Android 0 GET / EmptyChrome (AND-FETCH-01 / STORE-03):** `LaunchedEffect(onBack, onOpenDetail)` lấy unstable lambdas làm key → effect cancel trước coroutine `Appear`/`load()` hoàn tất → UI stay empty dù BE có data. Fix: `LaunchedEffect(Unit) { viewModel.onIntent(Appear) }` + set handlers tách `DisposableEffect(onBack, onOpenDetail)` (hoặc SideEffect) — **không** gắn Appear vào lambda keys.
2. **Dual (UX-DUAL-01):** sau fix fetch, P6 phải show live rows như A3; EmptyChrome chỉ khi GET OK empty thật.
3. **iOS:** không đổi controlHint / list AC trừ verify dual sau Android fix.

## Plan (sau board Approve `qa_fix_plan` · `qaFixPhase=implement`)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Fix Android Appear/fetch race — `LaunchedEffect(Unit) { Appear }` · handlers qua `DisposableEffect`/`SideEffect` · **cấm** Appear trong effect keyed by `onBack`/`onOpenDetail` | Android | `AssetListScreen.kt` · optional VM | Emulator GET `road-assets` từ `10.0.2.2` · rows `#row-asset-0` · **đóng** GAP-MOB-ASSET-AND-FETCH-01 · GAP-QA-STORE-03 |
| 2 | Giữ live-only — empty/fail → EmptyChrome+toast · **cấm** re-introduce `demoRows` trên list path | Android | `AssetListViewModel` · Screen | BE empty → EmptyChrome đúng; BE có data → rows |
| 3 | Dual smoke (manual/log) — iOS rows vẫn OK · Android P6 live sau fix | iOS · Android | — | **đóng** GAP-MOB-UX-DUAL-01 (visual) · Dev claim dual wire |
| 4 | VERIFY GATE builds | iOS · Android · BFF | — | `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · `./gradlew :app:assembleDebug` · `dotnet build` Mobile.Bff **PASS** |
| 5 | Sync STATUS + implement notes + handoff | Data | `STATUS.md` · `implement/ios.md` · `android.md` · `handoff/dev-compact.md` | blockers closed hoặc còn open rõ · Dev implement done · QA pending |
| 6 | Re-QA (role `/agent-qa-mobile` · **không** chạy ở Dev) | QA | `qa/scenarios.md` · store · screens · align-ux | e2eQa ON · `yarn e2e-qa-mobile` · A3+P6 live · Maestro `row-asset-0` PASS · **cấm** EmptyChrome false |

## Peer reference

| Piece | Peer |
|-------|------|
| Appear once | `IncidentListScreen` · `SuperviseScreen` · `OpsScreen` · `LaunchedEffect(Unit)` |
| Handlers | DisposableEffect / SideEffect setOn* · Appear tách |
| Live-only list | prior `task_dc98ed58` cleanup_mock · attendance-day / supervise pattern |
| BFF | GET `mobile-bff/api/v1/asset/road-assets` · reuse · Step 4b N/A |
| Sibling | asset-detail QA plan · company header family (không scope task này trừ dual verify) |

## Out of scope / Cấm

- Write iOS/Android/BFF/BE **trong** `qaFixPhase=plan` (task này)
- `autoApprove` bỏ `qa_fix_plan` / `qa_fail_rollback`
- `mfeStdUrl` · `yarn start:std` · web e2e · GenerateImage / fake CORE PNG
- Invent endpoint · ERP.* · Step 4b migration · filter P2 toolbar
- Re-run PO→Design→SA→TL · change controlHint không AskQuestion
- Chain `/agent-qa*` / review trong task plan này
- Fix `auth/profile` web-bff 500 (note riêng)

## Evidence

- Prior FAIL: `qa/scenarios.md` · `qa/bugs/task_4ec34586.md` · `handoff/qa-compact.md` · P6-CORE EmptyChrome · task `task_4ec34586`
- Disk: `AssetListScreen.kt` L46–49 `LaunchedEffect(onBack, onOpenDetail)`
- iOS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS`
- Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android`
- BFF: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff`
- BE: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Product: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data`

## Handoff

| Field | Value |
|-------|-------|
| this role | `dev` · `qaFixPhase=implement` · **done** |
| next | `/agent-qa-mobile` · e2eQa ON · Plan §6 |
| STATUS | Dev implement **confirmed** · QA **pending** · Review pending |
| code | Android `AssetListScreen` SideEffect + LaunchedEffect(Unit) · iOS no delta |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios + agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-09-01T16:15:30.000Z` |
| versionGate | ok |
| qaFixPhase | implement |
| taskId | task_fa241430 |
| dorGate | PASS |
| contentHash | sha256:asset-qa-fix-appear-20260901 |

---
<!-- Version meta: skillId=agent-dev-ios+android dorGate=PASS qaFixPhase=implement -->
