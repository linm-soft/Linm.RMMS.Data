# Dev — Implement iOS — mnt-list

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **done** |
| packKind | `list` |
| route_confirm | **route_a** |
| taskId | `task_e238765c` |
| updatedAt | `2026-08-29T02:50:00.000Z` |

## Notes (`/edit-mobile-feature`)

- **GAP-MOB-EDIT-STATUS-01:** status = 1 text `Tình trạng xử lý: {label}` · **cấm** `LinmBadge` trùng.
- **GAP-MOB-EDIT-ACT-01:** action `frame(maxWidth: .infinity)` dàn đều · tap 44 · **cấm** `Spacer` đẩy trái. Cùng pattern `incident-list`.

## Summary

Shipped `#sc-mnt-list` `DES-MOB-MNT-LIST` as tab `.work` root + Home `tile-mnt` → tab Công việc. GET `maintenance/work-orders?page=1&pageSize=50` via `FetchWorkOrdersUseCase` · fail/empty → demo **2** SSOT cards. Sibling CTAs / Lọc / hub = `LinmToast` only.

## Files

| Layer | Path |
|-------|------|
| View | `Presentation/Features/MntList/MntListView.swift` |
| VM / state | `MntListViewModel.swift` · `MntListUiState.swift` |
| Domain | `Domain/Entities/MntListModels.swift` · `Domain/Repositories/MaintenanceRepository.swift` · `Domain/UseCases/FetchWorkOrdersUseCase.swift` |
| Data | `Data/Dto/MntListDto.swift` · `Data/Repositories/MaintenanceRepositoryImpl.swift` |
| DI / router | `App/AppContainer.swift` · `App/AppRouter.swift` · `HomeViewModel.setOpenMnt` |
| Copy | `Presentation/Shared/LinmCopy.swift` (`mnt.list.*`) |

## Behavior

| Entry | Behavior |
|-------|----------|
| Tab `work` | `MntListView` (replaced `TabPlaceholderView`) |
| Home `tile-mnt` | `tab = .work` (staff) |
| Back | `tab = .home` |
| Search | client filter title/code/route/assign |
| Hub / `#i-sum` / chat / sync / log | toast P1 · **cấm** sibling API |
| Assign bind | `teamName`+`assigneeName` · **cấm** AssignerName |

## VERIFY GATE

```text
xcodegen generate → PASS
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build → **BUILD SUCCEEDED**
```

## Cấm / out of scope

- Sibling estimate / mnt-chat / mnt-progress / mnt-log implement
- Step 4b / new endpoint / invent AssignerName
- e2e / `mfeStdUrl` / watermark Gói

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T19:12:11.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-list-20260828 |
| bffContentHash | sha256:mnt-list-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
