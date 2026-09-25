# Dev — Implement — mnt-log (iOS)

| Field | Value |
|-------|-------|
| Feature | `mnt-log` |
| Title | [Mobile] [Công việc] -> Nhật ký xử lý |
| Role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| changeScope | `new_page` |
| packKind | **sheet** → surface **screen** `#sc-mnt-log` · **cấm** bottom-sheet |
| taskId | `task_5e1ef0bb` · T-IOS-MNT-LOG |
| updatedAt | `2026-09-19T14:00:00.000Z` |

## Summary

Readonly **Nhật ký xử lý** SwiftUI · entry mnt-list `#i-list` (**done**) push · GET `maintenance/work-orders/{id}` + client derive timeline newest-first · **cấm** invent `…/logs` · Step 4b **N/A**. Hash-refresh reconfirm + close A11Y-01 (log glyph label).

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/MntLog/MntLogView.swift` | Screen · TopBar · banner · ListRow×3 · TimelineList · EmptyChrome · zone ids |
| `Presentation/Features/MntLog/MntLogViewModel.swift` | Appear / GetWO / derive / toast |
| `Presentation/Features/MntLog/MntLogUiState.swift` | Seed · state · intents |
| `Domain/UseCases/DeriveWorkOrderTimelineUseCase.swift` | Signed-field derive map |
| `Presentation/Features/MntList/MntListView.swift` | `.log` a11y `mnt.log.a11y` |
| `Presentation/Shared/LinmCopy.swift` | `mnt.log.*` + `mnt.log.a11y` |
| `App/AppRouter.swift` | destination + wire (prior) |

## API / behavior

| Case | Behavior |
|------|----------|
| Appear + id | seed header → GET GetById → bind + derive |
| Missing id | `#banner-missing` · empty · **no API** |
| GET fail | toast **Không tải được nhật ký** · empty · **cấm** fake |
| Success | newest-first · `#empty` nếu 0 |
| Back | pop mnt-list · leading **Công việc** |
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
| BFF / Step 4b | **N/A** reuse GetById · BFF build peer **PASS** |
| e2e | **SKIP** · queued `/agent-qa*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.2 |
| rulesVersion | 2026.09.19.5 |
| versionGate | recheck_new |
| contentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| realDataHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| bffContentHash | sha256:maintenance-work-orders-getbyid-proxy-passthrough |
| actionTreeHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| ctxContentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| demoContentHash | sha256:d3ecd6203f20b49c25a282887298b7cf657385f1d610b3304da5a5bb393323d0 |
| taskId | `task_5e1ef0bb` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.19.2 rulesVersion=2026.09.19.5 versionGate=recheck_new -->
