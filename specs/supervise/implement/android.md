# Dev — Implement — supervise (Android)

> Status: **done** · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review`  
> task `task_a7ad9582` · T-AND-SUP-FILTER · T-AND-SUP-MAP-NAV · changeScope=`edit_page`

| Feature | `supervise` |
| assembleDebug | **PASS** |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmSheet` · `LinmToast`/`LoginToastHub` · `EmptyChrome` · `LinmMapPinGlyph` · `LinmBusyOverlay` · card = feature composition · Material3 `DatePickerDialog` |

## Layers

| Presentation | `SuperviseScreen` · `SuperviseViewModel` · `SuperviseUiState` · filter sheet · `MainTabScreen` Home→Field `pendingPatrolMap` / Field `navigate("patrol-map")` |
| Domain | `FetchSuperviseCheckinsUseCase` ±`route` + client `CheckInAt` day · `SuperviseCheckinItem.checkInAt` |
| Data | `ApiService.attendanceLogs(…, route)` · `SuperviseRepositoryImpl` · mapper Instant |

## Behavior (§ Delta live)

- **Lọc** → owner `LinmSheet` Tuyến+Ngày · Apply GET ±`route` + client day · Clear · **cấm** toast fake.
- Segment **Bản đồ** → push `#sc-patrol-map` · reset seg **0** · **cấm** toast/embed.
- Tap card → keep `supervise-detail` · EmptyChrome live-only · loadFail toast only.
- Optional `#filter-chip` when filtered.
- E2E tags: `sc-supervise` · `btn-sup-filter` · `filter-sheet` · `filterRoute` · `filterDate` · `filterApply` · `filterClear` · `sup-segment` · `sup-empty` · `sup-card-*` · `filter-chip`.

## VERIFY GATE

`./gradlew :app:assembleDebug` **BUILD SUCCESSFUL**.  
BFF `dotnet build` **PASS**. Step 4b **N/A**.

## Debt

- GAP-MOB-SUP-04 BE fromDate **P2**

<!-- Version meta: skillId=agent-dev-android+dev-android-compose skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_a7ad9582 -->
