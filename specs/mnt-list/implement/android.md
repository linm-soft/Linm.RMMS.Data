# Dev — Implement Android — mnt-list

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **done** |
| packKind | `list` |
| route_confirm | **route_a** |
| taskId | `task_53934dab` |
| updatedAt | `2026-09-01T04:45:00.000Z` |

## Notes (`/edit-mobile-feature`)

- **cleanup_mock** (`task_53934dab`): live-only · `FetchWorkOrdersOutcome` · GET OK empty = `[]` + `EmptyChrome` · fail = toast `mnt.list.toast.loadFail` · **cấm** `MntListCopy.demoItems`.
- **GAP-MOB-EDIT-STATUS-01:** status = 1 text `Tình trạng xử lý: {label}` · **cấm** `LinmBadge` trùng · dual iOS.
- **GAP-MOB-EDIT-ACT-01:** action `Modifier.weight(1f)` dàn đều · tap 44 · **cấm** left-pack. Cùng pattern `incident-list`.

## Summary

Shipped `#sc-mnt-list` dual parity with iOS. `MainTab.Work` → `MntListScreen` · Home `TileMnt` → Work tab. Retrofit `GET maintenance/work-orders` · live-only · empty = EmptyChrome · toast sibling CTAs. Trailing filter = `#i-list` icon (parity GAP-MOB-ALIGN-01).

## Files

| Layer | Path |
|-------|------|
| Screen | `presentation/feature/mntlist/MntListScreen.kt` |
| VM / state | `MntListViewModel.kt` · `MntListUiState.kt` |
| Domain | `domain/model/MntListModels.kt` · `domain/repository/MaintenanceRepository.kt` · `domain/usecase/FetchWorkOrdersUseCase.kt` |
| Data | `data/remote/MntListDto.kt` · `data/mapper/MntListDtoMapper.kt` · `data/repository/MaintenanceRepositoryImpl.kt` |
| API / DI | `ApiService.workOrders` · `AuthBindModule.maintenanceRepository` |
| Nav / Home | `MainTabScreen.WorkStack` · `HomeViewModel.setOpenMnt` · `HomeScreen.onOpenMnt` |
| Copy | `presentation/copy/LinmCopy.kt` (`mnt.list.*`) |

## Behavior

| Entry | Behavior |
|-------|----------|
| `MainTab.Work` | `MntListScreen` (replaced placeholder) |
| `HomeIntent.TileMnt` | `tab = Work` |
| Back | `tab = Home` |
| Search / hub / card actions | same toast map as iOS |
| Assign / status VN | same SSOT bind rules |

## VERIFY GATE

```text
./gradlew :app:assembleDebug → **BUILD SUCCESSFUL**
dotnet build RMMS.Mobile.Bff.csproj → **Build succeeded** (0 Error)
```

## Cấm / out of scope

- Sibling screens API
- Step 4b / invent path
- e2e / `mfeStdUrl`

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T19:12:11.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-list-20260828 |
| bffContentHash | sha256:mnt-list-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
