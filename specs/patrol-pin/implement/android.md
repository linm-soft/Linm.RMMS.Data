# Dev — Implement Android — patrol-pin

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| platform | Android |
| this role | `dev` · `/edit-mobile-feature` · `/agent-dev-android` |
| status | **confirmed** |
| changeScope | `edit_page` (cleanup_mock) |
| packKind | **`sheet`** |
| taskId | `task_c9fd5cec` |
| updatedAt | `2026-09-01T07:25:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:patrol-pin-control-hint-20260821 |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260821 |

## Notes (cleanup_mock)

- **GAP-MOB-EDIT-DEMO-01 closed** — dual parity iOS · gỡ `PatrolPinCopy.demoRoute` · map **cấm** `itemsOrDemo` / `nextDemoTitle`.
- Toast route = live `GET patrol/sessions` active · empty = `patrol.empty.active.route` (resolve copy key) · fail = `cam.toast.sessionFail`.
- GPS pin local OK offline · **cấm** invent `QL.1 · Km 1561+134`.
- Seed: reuse sessions · Step 4b **N/A** · BE empty OK.
- Action gate: sheet CTA pin + GpsDenyDialog · list/search N/A · CRUD forms N/A.

## Shipped (prior + this edit)

| Area | Path / note |
|------|-------------|
| Domain | `domain/model/PatrolPinCopy.kt` · **no** demoRoute |
| Hub CTA | `PatrolHomeViewModel.pinHere` · resolve live route label |
| Map CTA | `PatrolMapViewModel` live sessions · nextTitle empty-label |
| Deny | `GpsDenyDialog` · **cấm** system AlertDialog |
| BFF | `GET patrol/sessions` only |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| demoRoute / nextDemoTitle pin path | **removed** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
