# Dev — Implement — patrol-history-detail (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| packKind | **`sheet`** · Full `#sc-patrol-detail` |
| changeScope | `edit_page` · GAP timeline live |
| route_confirm | **route_a** keep |
| taskId | `task_4d0880f9` · prior TL `task_cacd86c6` |
| updatedAt | `2026-09-12T14:10:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-AND-PAT-DETAIL | **done** | strip `timelineDemo` · GET check-ins parallel · tap → `#sc-checkin-detail` Dialog · map Id · end toast |
| T-BE / T-BFF | **n/a** | API-01+API-02 Live · Step 4b N/A |
| Gaps | **closed** | TIMELINE-01 · TAP-01 · MAP-01 · END-01 |

## Ship summary

- Appear: `async` GET session + GET check-ins
- Timeline: live · empty OK (`tl-empty`) · fail → empty + toast
- Tap: Dialog `PatrolCheckInDetailScreen` từ check-in payload
- Map: `onOpenMap(sessionId)` · no toast khi có Id
- End / Share: toast P1
- **cấm** `timelineDemo` runtime

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** |
| e2e / mfeStdUrl | **SKIP** (cấm Dev) |

## Files

| Path | Change |
|------|--------|
| `…/patrolhistorydetail/*` | live check-ins · empty TL · CI detail Dialog |
| `…/FetchPatrolCheckInsUseCase.kt` | NEW |
| `…/PatrolRepository*.kt` | +`fetchCheckIns` |
| `…/ApiService.kt` · `PatrolCheckInDto.kt` | GET list + DTO fields |
| `…/PatrolDtoMapper.kt` | timelineItem |
| `…/PatrolHistoryDetailModels.kt` | strip demo default |
| `…/LinmCopy.kt` | empty / timelineFail |

## Debt

- PatrolMap chưa consume session Id (nav pass Id OK)
- Kit thiếu TimelineRow → ListRow

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260912-timeline-live |
| realDataHash | sha256:patrol-history-detail-real-data-20260912-timeline-live |
| bffContentHash | sha256:patrol-sessions-getbyid-plus-checkins |
| actionTreeHash | sha256:patrol-history-detail-action-tree-20260912-timeline-live |
| androidContentHash | sha256:patrol-history-detail-implement-android-20260912-timeline-live |
| taskId | `task_4d0880f9` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.31.2 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
