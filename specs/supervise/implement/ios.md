# Dev — Implement — supervise (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review`  
> task `task_a7ad9582` · T-IOS-SUP-FILTER · T-IOS-SUP-MAP-NAV · changeScope=`edit_page`

| Feature | `supervise` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` · A4-IPAD DEFER |
| xcodegen | **PASS** |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmSheet` · `LinmTextField` · `LinmPrimaryButton`/`LinmSecondaryButton` (sheet actions) · `LinmToast` · `EmptyChromeView` · `LinmMapPinGlyph` · `LinmBusyOverlay` · card = feature composition · DatePicker system |

## Layers

| Presentation | `SuperviseView` · `SuperviseViewModel` · `SuperviseUiState` · filter sheet `#filter-sheet` · `AppRouter` Home/Field → `#sc-patrol-map` |
| Domain | `FetchSuperviseCheckinsUseCase` ±`route` + client `CheckInAt` day · `SuperviseCheckinItem.checkInAt` |
| Data | `SuperviseRepositoryImpl` GET `patrol/attendance-logs` `page`/`pageSize`/`route` · mapper parse Instant/Date |

## Behavior (§ Delta live)

- **Lọc** → owner `LinmSheet` Tuyến+Ngày · Apply GET ±`route` + client day · Clear clear+reload · **cấm** toast fake.
- Segment **Bản đồ** → push `#sc-patrol-map` (Home `showPatrolMapFromHome` / Field `showPatrolMapFromField`) · reset seg **0** · **cấm** toast/embed.
- Tap card → keep `supervise-detail` · EmptyChrome live-only · loadFail toast only.
- Optional `#filter-chip` when appliedRoute/date set.
- E2E ids: `sc-supervise` · `btn-sup-filter` · `filter-sheet` · `filterRoute` · `filterDate` · `filterApply` · `filterClear` · `sup-segment` · `sup-empty` · `sup-card-*` · `filter-chip`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` **BUILD SUCCEEDED**.  
BFF `dotnet build` **PASS** (no Write this turn · reuse GET). Step 4b **N/A**.

## Debt

- GAP-MOB-SUP-04 BE fromDate **P2**
- iPad Pro 13" smoke **DEFER** (family `1`)

<!-- Version meta: skillId=agent-dev-ios+dev-ios-swiftui skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_a7ad9582 -->
