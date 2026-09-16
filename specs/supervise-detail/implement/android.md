# Dev — Implement — supervise-detail (Android)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| role | `dev` · `/agent-dev-android` · **qaFixPhase=implement** |
| status | **PASS** |
| packKind | **`screen`** |
| changeScope | `edit_page` |
| gap | `qaFailFix` · GAP-QA-SUP-DET-AND-LIST-01 · GAP-QA-STORE-03 |
| route_confirm | **route_a** |
| taskId | `task_112638ae` |
| qaFailFrom | `task_02d20b55` |
| plan | `implement/supervise-detail-qa-fix-plan.md` · Approve `qa_fix_plan` |
| updatedAt | `2026-09-01T15:25:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| Plan §1 list GET emit | **done** | `ON_RESUME` → Appear → `GET patrol/attendance-logs?page=1&pageSize=50` · Log.i `SuperviseList` |
| Plan §2 tenant | **done** | reuse `AuthInterceptor` + `applyCompanyId` → `X-Company-Id` |
| Plan §3 fail UX | **done** | LoadFailed → empty + toast · **cấm** OfflineDemo · CancellationException rethrow |
| Plan §4 detail | **done** | path live-only GetById unchanged (cleanup_mock) · unblocked by list cards |
| Plan §5 VERIFY | **PASS** | `assembleDebug` |
| T-BE / Step 4b | **N/A** | reuse live · **cấm** invent |

## Ship summary (qaFailFix)

- **`SuperviseScreen`:** `DisposableEffect` Lifecycle `ON_RESUME` → `Appear` · handlers via `SideEffect` (**cấm** lambda-keyed Appear)
- **`SuperviseViewModel`:** start `isLoading=true` (không flash `sup-empty`) · cancel/restart loadJob · log GET
- **`FetchSuperviseCheckinsUseCase`:** không nuốt `CancellationException` thành LoadFailed
- **Home / PatrolHome:** `SideEffect` setOpenSupervise (entry tile/quick → `#sc-supervise`)
- Detail / nav `supervise-detail/{id}`: **unchanged** live-only

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev · queued QA) |

## Files

| Path | Change |
|------|--------|
| `presentation/feature/supervise/SuperviseScreen.kt` | ON_RESUME Appear · SideEffect handlers |
| `presentation/feature/supervise/SuperviseViewModel.kt` | isLoading init · loadJob · Log |
| `domain/usecase/SuperviseUseCases.kt` | CancellationException rethrow |
| `presentation/feature/home/HomeScreen.kt` | SideEffect handlers (entry) |
| `presentation/feature/patrolhome/PatrolHomeScreen.kt` | SideEffect handlers · Appear Unit |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-qa-fix-android-20260901 |
| androidContentHash | sha256:supervise-detail-implement-android-qafix-20260901 |
| taskId | `task_112638ae` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.19.26 schemaVersion=1 qaFixPhase=implement taskId=task_112638ae -->
