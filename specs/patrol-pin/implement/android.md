# Dev — Implement — patrol-pin (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| task | `T-AND-PAT-PIN` · `task_5bb83877` |
| role | `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `sheet` |
| updatedAt | `2026-08-21T03:41:21.000Z` |

## Layers

| Layer | Path |
|-------|------|
| Domain | `domain/model/PatrolPinCopy.kt` · `GetCurrentLocationUseCase` · `LocationReading` |
| Data | `data/repository/AndroidLocationReader.kt` · timeout 8s · **cấm** fake lat/lng |
| Presentation | `PatrolHome*` · `PatrolMap*` · `GpsDenyDialog` (`LinmPrimaryButton` + `LinmSecondaryButton`) |
| Copy | `LinmCopy` parity VN |
| DI | Hilt · permission launcher hub/map · `setOpenCheckIn` sibling stub |
| BFF | **chỉ** `GET patrol/sessions` · Step 4b **N/A** |

## Behavior (DoD)

1. Hub + map CTA **Ghim vị trí hiện tại** (`LinmPrimaryButton` + `LinmMapPinGlyph`) → permission launcher → live GPS → toast Route/±m (roundToInt parity iOS).
2. Map: pin `.here` + follow · **cấm** fake coords.
3. Deny → in-app `GpsDenyDialog` · clipboard body + toast · **cấm** system `AlertDialog`.
4. Timeout → `patrol.map.locTimeout`.
5. Offline ghim local OK · GET fail → demo route · **cấm** full-screen block.
6. Handoff check-in stub toast only · **cấm** form / POST.
7. Tab 5 shell giữ · pack `tabs: none`.

## Build (VERIFY GATE)

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew assembleDebug
```

**PASS** — `2026-08-21T03:41:21.000Z`.

## BFF (shared VERIFY)

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff
dotnet build bff/src/RMMS.Mobile.Bff/RMMS.Mobile.Bff.csproj
```

**PASS** — `2026-08-21T03:41:21.000Z` · Step 4b **N/A** (SA).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| contentHash | sha256:patrol-pin-control-hint-20260821 |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260821 |
