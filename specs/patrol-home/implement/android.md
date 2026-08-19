# Dev — Implement — patrol-home (Android)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| task | `T-AND-PAT-HOME` · `task_488d0e96` |
| role | `/agent-dev-android` |
| status | **confirmed** |
| changeScope | `new_page` |
| route_confirm | **route_a** |

## Delta (this turn)

| Surface | Before | After |
|---------|--------|-------|
| Today / Quick `.row-icon` | `LinmListRow` text + badge only | **`LinmRowIcon`** circle 40 + cùng `d=` |
| Hero CTA | text only | `#i-map` / `#i-plus` |
| Pin | text only | `LinmMapPinGlyph` `#i-mappin` |

## Layers

| Layer | Path |
|-------|------|
| Presentation | `presentation/feature/patrolhome/*` |
| Shell | `MainTabScreen` field tab · Home → select field tab |
| Domain | `FetchPatrolSessionsUseCase` · `FetchOfflineQueueCountUseCase` |
| Data | `PatrolRepositoryImpl` · GET `patrol/sessions` |

## Kit zones (verified)

`LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmProgress` · **`LinmPrimaryButton`** · `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `LinmToast`

## Behavior (route_a)

Dual parity iOS — toast siblings · badge 0 ẩn · nav sync/Lưu trữ → `patrol-offline` · **cấm** `AlertDialog` · **cấm** push ops on bell.

## Build (VERIFY GATE)

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

**PASS** (`edit-mobile-feature` 2026-08-20 · `LinmRowIcon` circle 40 + pin/hero glyphs).
