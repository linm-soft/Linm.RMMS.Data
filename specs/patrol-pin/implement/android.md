# Dev — Implement Android — patrol-pin

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| platform | Android |
| this role | `dev` · `/agent-dev-android` · `/dev-android-compose` |
| status | **confirmed** |
| changeScope | `edit_page` (GAP-MOB-PIN-PERSIST-01) |
| packKind | **`sheet`** |
| taskId | `task_f90e803b` |
| updatedAt | `2026-09-12T12:20:00.000Z` |
| autoApprove | ON |
| contentHash | sha256:patrol-pin-control-hint-20260912-persist |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260912-persist |

## Notes (edit_page · persist handoff)

- Dual parity iOS — real `#sheet-handoff-checkin` (`PinHandoffSheet`) · payload `sessionId`+`LocationFix`.
- **Tiếp tục** → `PatrolCheckInIntent.OpenWithHandoff` · apply fix · **cấm** pin auto-POST.
- Deny / timeout → **không** handoff · Offline → `patrol.pin.queued`.
- Permission launcher hub+map giữ · Step 4b **N/A**.

## Shipped

| Area | Path / note |
|------|-------------|
| Payload | `domain/model/PatrolPinCopy.kt` · `PatrolPinHandoffPayload` |
| Sheet | `presentation/feature/shared/PinHandoffSheet.kt` |
| Hub | `PatrolHomeViewModel.pinHere` → handoff · `activeSessionId` |
| Map | `PatrolMapViewModel` + network · pin + follow + handoff |
| Sibling | `OpenWithHandoff` · `applyFix` |
| Wire | `MainTabScreen` FieldStack continue callbacks |
| Copy | `patrol.handoff.*` · `patrol.pin.queued` |

## Build gate

| Check | Result |
|-------|--------|
| `./gradlew assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (reuse) |
| pin auto-POST / invent `/pins` | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
