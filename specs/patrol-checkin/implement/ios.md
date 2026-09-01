# Dev — Implement iOS — patrol-checkin

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| platform | iOS |
| this role | `dev` · `/edit-mobile-feature` · `/agent-dev-ios` |
| status | **confirmed** |
| changeScope | `edit_page` (cleanup_mock) |
| packKind | **`sheet`** |
| taskId | `task_2f18d421` |
| updatedAt | `2026-09-01T06:40:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

## Notes (cleanup_mock)

- **GAP-MOB-EDIT-DEMO-01 closed** — gỡ `PatrolCheckInCopy.demoRoute/demoPlan*/demoContent` · `demo-session` · `itemsOrDemo` trên path check-in.
- Prefill = live `GET patrol/sessions` active `.route` · empty/no active = `patrol.empty.active.route` · fail = toast `cam.toast.sessionFail`.
- Plan lat/lng = live GPS pin (chưa có BE plan-points) · **cấm** invent `QL.1` / Km demo.
- Save chặn khi `sessionId` trống hoặc `matchOk=false`.
- Seed: reuse sessions + POST check-ins · Step 4b **N/A**.

## Shipped (prior + this edit)

| Area | Path / note |
|------|-------------|
| Sheet + leave + detail | `Presentation/Features/PatrolCheckIn/*` · `LinmSheet` · DES-MOB-LEAVE |
| Entry | Hub/map `.checkIn` + pin handoff |
| GPS match | Live GPS · haversine 50 m · **cấm** demo plan coords |
| Submit | `POST …/check-ins` · else offline queue |
| Live session | `FetchPatrolSessionsOutcome` · **cấm** itemsOrDemo |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro | **PASS** |
| demo route/plan/latlng | **removed** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-01T06:40:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
