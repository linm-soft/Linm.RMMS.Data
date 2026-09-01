# Dev — Implement Android — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| platform | Android |
| this role | `dev` · `/edit-mobile-feature` · `/agent-dev-android` |
| status | **confirmed** |
| changeScope | `edit_page` (cleanup_mock) |
| packKind | **`sheet`** |
| taskId | `task_2f18d421` |
| updatedAt | `2026-09-01T06:40:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

## Notes (cleanup_mock)

- **GAP-MOB-EDIT-DEMO-01 closed** — gỡ `PatrolCheckInCopy.demo*` · `demo-session` · `itemsOrDemo` trên path check-in.
- Prefill = live `GET patrol/sessions` active `.route` · empty = `patrol.empty.active.route` · fail = toast `cam.toast.sessionFail`.
- Plan lat/lng = live GPS pin · **cấm** invent demo coords / QL.1.
- Save chặn khi `sessionId` blank hoặc `matchOk=false`.
- Seed: reuse sessions + POST check-ins · Step 4b **N/A**.

## Shipped (prior + this edit)

| Area | Path / note |
|------|-------------|
| Sheet + leave + detail | `presentation/feature/patrolcheckin/*` · Dialog leave |
| Entry | `FieldStack` · home/map `onOpenCheckIn` |
| GPS match | Fused · haversine 50 m · live plan pin |
| Submit | Retrofit `POST …/check-ins` · offline `CheckIn` |
| Live session | `FetchPatrolSessionsOutcome` · **cấm** itemsOrDemo |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew assembleDebug` | **PASS** |
| demo route/plan/latlng | **removed** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-01T06:40:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
