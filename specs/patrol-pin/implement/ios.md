# Dev — Implement iOS — patrol-pin

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| platform | iOS |
| this role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` |
| status | **confirmed** |
| changeScope | `edit_page` (GAP-MOB-PIN-PERSIST-01) |
| packKind | **`sheet`** |
| taskId | `task_f90e803b` |
| updatedAt | `2026-09-12T12:20:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:patrol-pin-control-hint-20260912-persist |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260912-persist |

## Notes (edit_page · persist handoff)

- **GAP-MOB-PIN-PERSIST-01** — sau pin OK → real `#sheet-handoff-checkin` (`PinHandoffSheet`) payload `sessionId`+`LocationFix`.
- **Tiếp tục** → sibling `PatrolCheckIn` via `.openWithHandoff` (apply fix · **cấm** re-GPS) · **cấm** pin auto-POST.
- Deny / timeout → **không** handoff · Offline → toast `patrol.pin.queued` · **không** mở sheet.
- Hero **Ghi điểm tuần** vẫn `.open` (form sibling · không payload pin).
- Step 4b **N/A** · BFF reuse `GET patrol/sessions` only.

## Shipped

| Area | Path / note |
|------|-------------|
| Payload | `Domain/Entities/PatrolPinModels.swift` · `PatrolPinHandoffPayload` |
| Sheet | `Presentation/Shared/PinHandoffSheet.swift` · `DES-MOB-HANDOFF-CHECKIN` |
| Hub | `PatrolHomeViewModel.pinHere` → handoff · `activeSessionId` |
| Map | `PatrolMapViewModel.pinHere` → `.here`+follow + handoff · network inject |
| Sibling | `PatrolCheckInIntent.openWithHandoff` · applyFix |
| Wire | `AppRouter` `setContinuePinHandoff` |
| Copy | `patrol.handoff.*` · `patrol.pin.queued` |

## Build gate

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` iPhone 17 Pro Max | **PASS** |
| BFF `dotnet build` | **PASS** (reuse · no pin controller) |
| pin auto-POST / invent `/pins` | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
