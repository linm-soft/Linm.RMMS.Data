# Dev — Implement iOS — cam-patrol

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| platform | iOS |
| this role | `dev` · `/edit-mobile-feature` · `/agent-dev-ios` |
| status | **confirmed** |
| changeScope | `edit_page` (cleanup_mock) |
| packKind | **`screen`** |
| taskId | `task_e7101ed6` |
| updatedAt | `2026-09-01T06:00:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:cam-patrol-control-hint-20260828 |
| realDataHash | sha256:cam-patrol-real-data-20260828 |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260828 |

## Notes (cleanup_mock)

- **GAP-MOB-EDIT-DEMO-01 closed** — gỡ `CamPatrolCopy.demoRouteStamp` / `itemsOrDemo` trên path cam-patrol.
- Route stamp = live `GET patrol/sessions` active `.route` · empty/no active = `patrol.empty.active.route` · fail = toast `cam.toast.sessionFail` (không claim dữ liệu mẫu).
- Confirm `routeName` = live stamp / detect.routeLabel · **cấm** invent `QL.1`.
- Seed: BE empty OK (stamp empty label) · reuse sessions endpoint · Step 4b **N/A**.

## Shipped (prior + this edit)

| Area | Path / note |
|------|-------------|
| Screen | `Presentation/Features/CamPatrol/*` · `#sc-cam-patrol` |
| Finder | AVCapture · FOV `#5AC8FA` |
| Detect / Confirm / Skip | live BFF · GPS gate · offline `.incident` |
| Live route | `FetchPatrolSessionsOutcome` · **cấm** demo SSOT |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro | **PASS** |
| Invent cam-patrol API | **none** |
| demoRouteStamp | **removed** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-01T06:00:00.000Z` |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
