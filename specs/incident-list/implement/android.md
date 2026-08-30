# Dev — Implement Android — incident-list

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **done** |
| packKind | `list` |
| route_confirm | **route_a** |
| taskId | `task_0d0a8786` |
| updatedAt | `2026-08-29T02:45:00.000Z` |

## Notes (`/edit-mobile-feature`)

- **GAP-MOB-EDIT-STATUS-01:** status = 1 text `Trạng thái: {label}` full width dưới `.rc-main` · **cấm** `LinmBadge` trùng · dual iOS.
- **GAP-MOB-EDIT-ACT-01:** 4 action `Modifier.weight(1f)` dàn đều · tap 44 · **cấm** left-pack.

## Summary

Shipped `#sc-incident-list` `DES-MOB-INC-LIST` as `MainTab.Incident` root + Home `tile-incident` → list (quick-incident giữ create). GET `incident/incidents?page=1&pageSize=50` via `FetchIncidentsUseCase` · fail/empty → demo **2** SSOT cards. FAB → `incident-create` · dual parity iOS · trailing filter icon `#i-list`.

## Files

| Layer | Path |
|-------|------|
| Screen | `presentation/feature/incidentlist/IncidentListScreen.kt` |
| VM / state | `IncidentListViewModel.kt` · `IncidentListUiState.kt` |
| Domain | `domain/model/IncidentListModels.kt` · `domain/repository/IncidentRepository.kt` · `domain/usecase/FetchIncidentsUseCase.kt` |
| Data | `data/remote/IncidentListDto.kt` · `ApiService.incidents` · `data/mapper/IncidentListDtoMapper.kt` · `IncidentRepositoryImpl` |
| Nav / home | `MainTabScreen` · `IncidentStack` · `HomeViewModel.setOpenIncidentList` |
| Copy | `presentation/copy/LinmCopy.kt` (`inc.list.*`) |

## Behavior

| Entry | Behavior |
|-------|----------|
| Tab `Incident` | `IncidentListScreen` (replaced `TabPlaceholder`) |
| Home `tile-incident` | `tab = MainTab.Incident` |
| Home quick-incident | **giữ** create |
| Back | `tab = Home` |
| Segment Bản đồ / map action | Field · `patrol-map` |
| FAB | navigate `incident-create` |
| Search | client filter title/code/route |
| Lọc / banner / chat / detail | `LoginToastHub` · **cấm** AlertDialog |
| Assign | `tab = Work` |
| Bind | cùng §B iOS · thumb DEFER |

## VERIFY GATE

```text
./gradlew :app:assembleDebug → **BUILD SUCCESSFUL**
dotnet build (Linm.RMMS.Mobile.Bff) → **Build succeeded** (0 Warning / 0 Error)
```

## Cấm / out of scope

- Sibling vis-capture / incident-detail / incident-chat implement
- Step 4b / invent path / PlaceName / OrgName
- e2e / `mfeStdUrl` / watermark Gói

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:59:14.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-list-20260829 |
| bffContentHash | sha256:incident-incidents-proxy-passthrough |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
