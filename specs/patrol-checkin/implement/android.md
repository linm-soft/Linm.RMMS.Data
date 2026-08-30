# Implement — Android — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| platform | Android |
| role | `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **done** |
| changeScope | `new_page` |
| taskId | `task_f3b9d3f4` · `T-AND-PAT-CI` |
| updatedAt | `2026-08-28T20:25:00.000Z` |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

## Shipped

| Area | Path / note |
|------|-------------|
| Sheet + leave + detail | `presentation/feature/patrolcheckin/*` · `LinmSheet` Large · section-label **Ảnh** · leave overlay |
| Entry wire | `FieldStack` host · home/map `onOpenCheckIn` + pin handoff |
| GPS match | Fused location · haversine 50 m · banner + soft gate |
| Submit | `SubmitPatrolCheckInUseCase` · Retrofit `POST …/check-ins` · else `OfflineQueueKind.CheckIn` |
| Copy | `LinmCopy` checkin.* parity iOS |

## Build gate

| Gate | Result |
|------|--------|
| `./gradlew assembleDebug` | **PASS** |

## Out of pack

Pin form / map host · invent slug · e2e QA (queued) · watermark Gói.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-28T20:25:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
