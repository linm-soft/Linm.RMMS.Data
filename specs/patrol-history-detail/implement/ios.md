# Dev — Implement — patrol-history-detail (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| packKind | **`sheet`** · Full `#sc-patrol-detail` |
| changeScope | `edit_page` · GAP timeline live |
| route_confirm | **route_a** keep |
| taskId | `task_4d0880f9` · prior TL `task_cacd86c6` |
| updatedAt | `2026-09-12T14:10:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-IOS-PAT-DETAIL | **done** | strip `timelineDemo` · GET check-ins parallel · tap → `#sc-checkin-detail` · map Id · end toast |
| T-BE / T-BFF | **n/a** | API-01+API-02 Live · Step 4b N/A |
| Gaps | **closed** | TIMELINE-01 · TAP-01 · MAP-01 · END-01 |

## Ship summary

- Appear: `async let` GET `patrol/sessions/{id}` + GET `…/check-ins`
- Timeline: live bind · empty OK (`tl-empty`) · fail → empty + toast
- Tap done: fullScreenCover `PatrolCheckInDetailView` (payload từ check-in Id)
- Map: `onOpenMap(sessionId)` · no toast khi có Id
- End / Share: toast P1 · **cấm** PUT / share sheet
- **cấm** `timelineDemo` runtime

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` scheme **LinmRmms** dest **iPhone 17 Pro** | **PASS** |
| BFF `dotnet build` | **PASS** |
| e2e / mfeStdUrl | **SKIP** (cấm Dev) |

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/PatrolHistoryDetail/*` | live check-ins · empty TL · CI detail cover |
| `Domain/UseCases/FetchPatrolCheckInsUseCase.swift` | NEW |
| `Domain/Repositories/PatrolRepository.swift` | +`fetchCheckIns` |
| `Data/Repositories/PatrolRepositoryImpl.swift` | GET check-ins |
| `Data/Dto/PatrolDto.swift` | expand DTO + timeline mapper |
| `Domain/Entities/PatrolHistoryDetailModels.swift` | strip demo default · detail payload |
| `App/AppContainer.swift` · `AppRouter.swift` | DI |
| `Presentation/Shared/LinmCopy.swift` | empty / timelineFail |

## Debt

- PatrolMap chưa consume session Id (nav pass Id OK · P2 map focus)
- Kit thiếu `LinmTimelineRow` → `LinmListRow`

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-control-hint-20260912-timeline-live |
| realDataHash | sha256:patrol-history-detail-real-data-20260912-timeline-live |
| bffContentHash | sha256:patrol-sessions-getbyid-plus-checkins |
| actionTreeHash | sha256:patrol-history-detail-action-tree-20260912-timeline-live |
| iosContentHash | sha256:patrol-history-detail-implement-ios-20260912-timeline-live |
| taskId | `task_4d0880f9` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.31.2 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
