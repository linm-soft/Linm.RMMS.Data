# Dev — Implement iOS — incident-list

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **done** |
| packKind | `list` |
| route_confirm | **route_a** |
| taskId | `task_3a718e5d` |
| updatedAt | `2026-09-01T04:15:00.000Z` |

## Notes (`/edit-mobile-feature`)

- **GAP-MOB-EDIT-STATUS-01:** status = 1 text `Trạng thái: {label}` full width dưới `.rc-main` · **cấm** `LinmBadge` trùng · **cấm** nhét bar vào cột meta cạnh thumb.
- **GAP-MOB-EDIT-ACT-01:** 4 `LinmIconButton` `frame(maxWidth: .infinity)` dàn đều · tap 44 · **cấm** `Spacer` đẩy trái.

## Summary

Shipped `#sc-incident-list` `DES-MOB-INC-LIST` as tab `.incident` root + Home `tile-incident` → list (quick-incident giữ create). GET `incident/incidents?page=1&pageSize=50` via `FetchIncidentsUseCase` · fail/empty → demo **2** SSOT cards. FAB → `incident-create` · sibling CTAs / Lọc / banner = `LinmToast` · assign → tab work · map → patrol map.

## Files

| Layer | Path |
|-------|------|
| View | `Presentation/Features/IncidentList/IncidentListView.swift` |
| VM / state | `IncidentListViewModel.swift` · `IncidentListUiState.swift` |
| Domain | `Domain/Entities/IncidentListModels.swift` · `Domain/Repositories/IncidentRepository.swift` · `Domain/UseCases/FetchIncidentsUseCase.swift` |
| Data | `Data/Dto/IncidentListDto.swift` · `Data/Repositories/IncidentRepositoryImpl.swift` |
| DI / router | `App/AppContainer.swift` · `App/AppRouter.swift` · `HomeViewModel.setOpenIncidentList` |
| Copy | `Presentation/Shared/LinmCopy.swift` (`inc.list.*`) |

## Behavior

| Entry | Behavior |
|-------|----------|
| Tab `incident` | `IncidentListView` (replaced `TabPlaceholderView`) |
| Home `tile-incident` | `tab = .incident` (staff) |
| Home `quick-incident` | **giữ** create |
| Back | `tab = .home` |
| Segment Bản đồ / `#i-mappin` | Field · patrol map |
| FAB / `#i-plus` | `incident-create` |
| Search | client filter title/code/route |
| Lọc / banner / chat / detail | toast P1 · **cấm** sibling API |
| Assign `#i-briefcase` | `tab = .work` |
| Bind | RouteName+KmStart · Reporter/Assignee · **cấm** PlaceName/OrgName invent · thumb DEFER |

## VERIFY GATE

```text
xcodegen generate → PASS
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build → **BUILD SUCCEEDED**
```

## Cấm / out of scope

- Sibling vis-capture / incident-detail / incident-chat / gis-map ship
- Step 4b / invent `incident-list` path / PlaceName / OrgName
- e2e / `mfeStdUrl` / watermark Gói

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:59:14.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-list-20260829 |
| bffContentHash | sha256:incident-incidents-proxy-passthrough |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
