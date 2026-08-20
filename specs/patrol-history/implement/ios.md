# Dev — Implement — patrol-history (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| task | `T-IOS-PAT-HIST` |
| role | `/agent-dev-ios` |
| status | **confirmed** |
| taskId | `task_c3705a2f` |

## Delta (TL GAP fixes)

| ID | Fix |
|----|-----|
| GAP-F-PAT-HIST-01 | `historyBadgeTitle` → `patrol.history.badge.done` = **Hoàn thành** (cấm `patrol.badge.done` «Xong») |
| GAP-F-PAT-HIST-03 | `offlineQueued` + `Offline queue` → badge **Mất sóng** / warning · subtitle offline row |
| GAP-F-PAT-HIST-04 | `patrol.history.badge.done` in `LinmCopy` + `mobile-strings.json` |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `Presentation/Features/PatrolHistory/*` |
| Domain | `PatrolHistoryModels` · `PatrolHomeModels` (`offlineQueued`) · `FetchPatrolHistoryUseCase` |
| Data | `PatrolDto.swift` mapper plumbs `offlineQueued` |
| Shell | `AppContainer` · `AppRouter` · `PatrolHomeViewModel` |

## Behavior

- Hub row **Lịch sử phiên** → push `#sc-patrol-history`
- Nav back **Tuần đường** · trailing **Lọc** → toast
- Large title **Lịch sử ca** · `LinmSearchField` client filter
- GET `patrol/sessions` · demo 4 rows fallback
- Tap row → toast **Chi tiết phiên** · **cấm** detail push P1
- Rows: `leadingSlot: 0` · badge 4 trạng thái · chevron

## Build (VERIFY GATE)

**PASS** — `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** (`task_c3705a2f` · `2026-08-20`).
