# Dev — Implement — patrol-history-detail (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| packKind | **`sheet`** meta · surface Full `#sc-patrol-detail` |
| changeScope | `new_page` |
| route_confirm | **route_a** |
| taskId | `task_158bf625` · prior `task_69386cbc` |
| updatedAt | `2026-09-01T11:10:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-AND-PAT-DETAIL | **done** | dual parity · GET by id · icon-only back · timeline demo · list → push |
| T-BE / T-BFF | **n/a · reuse** | same path · Retrofit `@GET("patrol/sessions/{id}")` |
| Step 4b | **N/A** | SA chốt |

## Ship summary

- **Screen** `#sc-patrol-detail` · `PatrolHistoryDetailScreen` · Compose push
- **Entry (edit `task_158bf625`):** `patrol-home` today + `patrol-history` row → `patrol-history-detail/{id}` · supersede toast
- **API:** live-only GetById · fail/404 EmptyChrome+toast · **cấm** OfflineDemo
- **Chrome / CTA / timeline** — dual parity iOS
- **Cấm** AlertDialog · invent path · PUT · GET check-ins

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** (`task_158bf625` re-VERIFY) |
| BFF `dotnet build` | **PASS** (verify only) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `presentation/feature/patrolhistorydetail/*` | NEW Screen · VM · UiState |
| `domain/model/PatrolHistoryDetailModels.kt` | NEW · demo SSOT |
| `domain/usecase/FetchPatrolSessionByIdUseCase.kt` | NEW |
| `domain/repository/PatrolRepository.kt` | +`fetchSessionById` |
| `data/repository/PatrolRepositoryImpl.kt` | +GET by id |
| `data/remote/ApiService.kt` · `PatrolDto.kt` | +`patrolSessionById` |
| `data/mapper/PatrolDtoMapper.kt` | +`detail` |
| `presentation/feature/patrolhistory/*` | push wire |
| `presentation/navigation/MainTabScreen.kt` | route detail |
| `presentation/copy/LinmCopy.kt` | `patrol.detail.*` |

## Debt

- Same as iOS: ListRow substitute TimelineRow · map Id not consumed · checkin-detail toast

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260831 |
| realDataHash | sha256:patrol-history-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-sessions-getbyid-passthrough |
| actionTreeHash | sha256:patrol-history-detail-action-tree-20260831 |
| androidContentHash | sha256:patrol-history-detail-implement-android-20260901 |
| taskId | `task_69386cbc` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.31.2 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
