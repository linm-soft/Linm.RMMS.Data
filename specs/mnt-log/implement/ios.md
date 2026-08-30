# Dev — Implement — mnt-log (iOS)

| Field | Value |
|-------|-------|
| Feature | `mnt-log` |
| Title | [Mobile] [Công việc] -> Nhật ký xử lý |
| Role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| changeScope | `new_page` |
| packKind | **sheet** → surface **screen** `#sc-mnt-log` · **cấm** bottom-sheet |
| taskId | `task_3af3ded6` · T-IOS-MNT-LOG |
| updatedAt | `2026-08-29T07:45:00.000Z` |

## Summary

Ship readonly **Nhật ký xử lý** SwiftUI screen. Entry mnt-list `#i-list` (**done** only) **push** thay toast. Prefill nav seed + `GET maintenance/work-orders/{id}` · **client derive** timeline newest-first · **cấm** invent `…/logs`. Step 4b **N/A**.

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/MntLog/MntLogView.swift` | **NEW** · TopBar · banner · 3× ListRow · SectionLabel · TimelineList · EmptyChrome |
| `Presentation/Features/MntLog/MntLogViewModel.swift` | **NEW** · Appear / GetWO / derive / toast |
| `Presentation/Features/MntLog/MntLogUiState.swift` | **NEW** · Seed · state · intents · copy |
| `Domain/UseCases/DeriveWorkOrderTimelineUseCase.swift` | **NEW** · Signed-field derive map |
| `Data/Dto/MntProgressDto.swift` | map `createdAt`/`dueAt`/`description`/`updatedAt` → `WorkOrderDetail` |
| `Presentation/Features/MntList/MntListViewModel.swift` | `.log` → `onOpenLog(seed)` |
| `App/AppRouter.swift` | destination + wire + reset |
| `App/AppContainer.swift` | register DeriveTimeline UC |
| `Presentation/Shared/LinmCopy.swift` | VN keys `mnt.log.*` |

## API / behavior

| Case | Behavior |
|------|----------|
| Appear + id | seed header → GET GetById → bind + derive |
| Missing id | banner · empty · **no API** |
| GET fail | toast **Không tải được nhật ký** · empty · **cấm** fake timeline |
| Success | newest-first rows · empty chrome nếu 0 |
| Back | pop `mnt-list` · leading **Công việc** |
| Write | **none** |

## VERIFY GATE

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build
```

| Check | Result |
|-------|--------|
| xcodegen | **PASS** |
| xcodebuild iPhone 17 Pro Max | **PASS** |
| BFF / Step 4b | **N/A** reuse GetById · optional BFF build PASS (peer) |
| e2e | **SKIP** · queued `/agent-qa*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| versionGate | rechecked |
| contentHash | sha256:mnt-log-mobile-control-hint-20260829 |
| realDataHash | sha256:mnt-log-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-log-mobile-bff-20260829 |
| actionTreeHash | sha256:mnt-log-mobile-action-tree-20260829 |
| ctxContentHash | sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_3af3ded6` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
