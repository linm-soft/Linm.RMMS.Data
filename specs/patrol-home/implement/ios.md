# Dev — Implement — patrol-home (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| task | `T-IOS-PAT-HOME` · `task_488d0e96` |
| role | `/agent-dev-ios` |
| status | **confirmed** |
| changeScope | `new_page` |
| route_confirm | **route_a** |

## Delta (this turn)

| Surface | Before | After |
|---------|--------|-------|
| Fetch sessions | empty/fail → `demoToday`/`demoActive` | **`FetchPatrolSessionsOutcome`** live-only · empty = `emptyActive` + EmptyChrome |
| Today section | always 2 demo rows | live GET · empty → `patrol-today-empty` |
| Hero / KPI | demo active session | live active or `emptyActive` |
| Fail | silent demo | toast `patrol.toast.loadFail` |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `Presentation/Features/PatrolHome/*` · `PatrolHomeNavBar` |
| Shell | `AppRouter` field tab · Home `setOpenPatrolHome` |
| Domain | `PatrolHomeUseCases` · `FetchPatrolSessionsUseCase` · `FetchOfflineQueueCountUseCase` |
| Data | `PatrolRepositoryImpl` · GET `patrol/sessions` |

## Kit zones (verified)

`LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmProgress` · **`LinmPrimaryButton`** · `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `LinmNetSignalMark` · `LinmToast`

## Behavior (route_a)

- Tab field = `#sc-patrol-home` · nav sync / row Lưu trữ → push `patrol-offline`
- Home quick/tile → switch tab field
- GET `patrol/sessions` · client filter «Đang tuần» · demo fallback on fail
- Bell → toast **Thông báo** · badge **0 ẩn**
- Segment 1 → toast **Chấm công** · reset idx 0
- Hero / pin / quick siblings → toast · **cấm** sheet check-in
- Offline badge → local count · **ẩn khi 0**

## Build (VERIFY GATE)

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

**PASS** (`edit-mobile-feature` task_22fa5cba · cleanup_mock live-only).
