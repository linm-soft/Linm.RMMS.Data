# Dev — Implement — patrol-pin (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| task | `T-IOS-PAT-PIN` · `task_5bb83877` |
| role | `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `sheet` |
| updatedAt | `2026-08-21T03:41:21.000Z` |

## Layers

| Layer | Path |
|-------|------|
| Domain | `Domain/Entities/PatrolPinModels.swift` (`PatrolPinCopy`) · `GetCurrentLocationUseCase` · `LocationReading` |
| Data | `Data/Location/CoreLocationReader.swift` · timeout 8s · **cấm** fake lat/lng |
| Presentation | `PatrolHomeView*` · `PatrolMapView*` · `GpsDenyModal` (`LinmPrimaryButton` + `LinmSecondaryButton`) |
| Copy | `LinmCopy` keys `patrol.pinHere` / `patrol.gpsDeny.*` / `patrol.map.locTimeout` |
| DI | `AppContainer` · `AppRouter.setOpenCheckIn` sibling stub toast |
| BFF | **chỉ** `GET patrol/sessions` via `FetchPatrolSessionsUseCase` · Step 4b **N/A** |

## Behavior (DoD)

1. Hub + map CTA **Ghim vị trí hiện tại** (`LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin`) → live GPS → toast `Đã ghim vị trí hiện tại · {route} · ±N m` (active Route / demo `QL.1 · Km 1561+134`).
2. Map: pin `.here` + camera follow (`followToken`) · **cấm** fake coords.
3. Deny → in-app `GpsDenyModal` · Sao chép → `UIPasteboard` + toast · Để sau dismiss · **cấm** `UIAlertController`.
4. Timeout/unavailable → `patrol.map.locTimeout` toast.
5. Offline: GPS local OK · GET fail → demo route toast · **cấm** full-screen block.
6. Handoff `patrol-checkin` = stub toast only · **cấm** form / POST check-ins.
7. Tab 5 shell giữ · pack `tabs: none`.

## Build (VERIFY GATE)

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

**PASS** — `2026-08-21T03:41:21.000Z` · dest **iPhone 17 Pro**.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| contentHash | sha256:patrol-pin-control-hint-20260821 |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260821 |
