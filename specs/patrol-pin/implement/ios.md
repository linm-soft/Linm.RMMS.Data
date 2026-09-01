# Dev — Implement iOS — patrol-pin

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| platform | iOS |
| this role | `dev` · `/edit-mobile-feature` · `/agent-dev-ios` |
| status | **confirmed** |
| changeScope | `edit_page` (cleanup_mock) |
| packKind | **`sheet`** |
| taskId | `task_c9fd5cec` |
| updatedAt | `2026-09-01T07:25:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:patrol-pin-control-hint-20260821 |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260821 |

## Notes (cleanup_mock)

- **GAP-MOB-EDIT-DEMO-01 closed** — gỡ `PatrolPinCopy.demoRoute` · map pin path **cấm** `itemsOrDemo` / `nextDemoTitle`.
- Toast route = live `GET patrol/sessions` active · empty/no active = `patrol.empty.active.route` · fail = toast `cam.toast.sessionFail`.
- GPS pin local vẫn OK khi offline · **cấm** invent `QL.1 · Km 1561+134`.
- Seed: reuse sessions · Step 4b **N/A** · BE empty OK.
- Action gate: sheet CTA pin + GpsDenyModal · **không** list/search · Create/Edit/View/Copy N/A.

## Shipped (prior + this edit)

| Area | Path / note |
|------|-------------|
| Domain | `Domain/Entities/PatrolPinModels.swift` · **no** demoRoute |
| Hub CTA | `PatrolHomeViewModel.pinHere` · live `activeSession.routeKm` |
| Map CTA | `PatrolMapViewModel` live sessions · nextTitle empty-label |
| Deny | `GpsDenyModal` · **cấm** UIAlert |
| BFF | `GET patrol/sessions` only |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro | **PASS** |
| demoRoute / nextDemoTitle pin path | **removed** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
