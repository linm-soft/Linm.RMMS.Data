# Implement — iOS — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| platform | iOS |
| role | `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **done** |
| changeScope | `new_page` |
| taskId | `task_f3b9d3f4` · `T-IOS-PAT-CI` |
| updatedAt | `2026-08-28T20:25:00.000Z` |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

## Shipped

| Area | Path / note |
|------|-------------|
| Sheet + leave + detail | `Presentation/Features/PatrolCheckIn/*` · `LinmSheet` chrome Hủy/Lưu · PhotoRow + camera · DES-MOB-LEAVE in-app |
| Entry wire | Hub/map `.checkIn` + pin handoff → `PatrolCheckInViewModel.open` (thay toast stub) |
| GPS match | Live `GetCurrentLocationUseCase` · haversine · `MATCH_RADIUS_M=50` · banner + disable save |
| Submit | `SubmitPatrolCheckInUseCase` · `POST patrol/sessions/{id}/check-ins` · else `OfflineQueueKind.checkIn` enqueue · **cấm** fake 200 |
| DI | `AppContainer.submitPatrolCheckInUseCase` · `AppRouter` sheet/overlays |
| Copy | `LinmCopy` checkin.* VN SSOT Design |

## Build gate

| Gate | Result |
|------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **PASS** |

## Out of pack

Pin form / map host · invent `api/v1/patrol-checkin` · e2e QA (queued `/agent-qa*`) · watermark Gói.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-28T20:25:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
