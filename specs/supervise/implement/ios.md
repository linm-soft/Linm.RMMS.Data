# Dev — Implement — supervise (iOS)

> Status: **done** · `/edit-mobile-feature` · cleanup_mock · `/agent-dev-ios`  
> task `task_65931a17` · T-IOS-SUPERVISE · parent `mobile-cleanup-mock`

| Feature | `supervise` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` · A4-IPAD DEFER |
| xcodegen | **PASS** |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmToast` · `EmptyChromeView` · `LinmMapPinGlyph` · `LinmBusyOverlay` · card = feature composition |

## Layers

| Presentation | `Presentation/Features/Supervise/SuperviseView.swift` · `SuperviseViewModel.swift` · `SuperviseUiState.swift` · `AppRouter` Home/Field `navigationDestination` |
| Domain | `FetchSuperviseCheckinsUseCase` → `FetchSuperviseCheckinsOutcome` · `SuperviseCopy.orgFallback` · `SuperviseCopy.loadFailToast` · **no** `demoItems` |
| Data | `SuperviseRepositoryImpl` · `SuperviseDtoMapper.checkin(from:)` · `GET patrol/attendance-logs` `page`/`pageSize` |

## Behavior (live-only · **cấm** `SuperviseCopy.demoItems`)

- route_a: Home tile **Giám sát** + patrol-home quick **Giám sát** → push `#sc-supervise` · back **Trang Chủ** = pop.
- Appear GET `patrol/attendance-logs` Bearer · OK + empty → `EmptyChromeView` (`supervise.empty.*`) · id `sup-empty`.
- Fail/offline → empty + toast `supervise.toast.loadFail` · **cấm** «Đang dùng dữ liệu mẫu» · list **mở**.
- Empty `Note` → «Tổ tuần đường · VP-IV.1» (`GAP-MOB-SUP-03` mapper only).
- Lọc / segment **Bản đồ** → `LinmToast` · tap card → open detail sibling · **cấm** `UIAlert`.
- E2E: `sc-supervise` · `btn-sup-back` · `btn-sup-filter` · `sup-segment` · `sup-empty` · `sup-card-*`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` **BUILD SUCCEEDED**.

## Notes

`/edit-mobile-feature` 2026-09-01: **cleanup_mock** · remove demo fallback · dual EmptyChrome + loadFail toast. Step 4b / T-BE **N/A** — reuse live `GET patrol/attendance-logs` · EmptyChrome OK khi tenant rỗng · **cấm** seed hardcode app · **cấm** `mfeStdUrl`.

<!-- Version meta: skillId=edit-mobile-feature+agent-dev-ios skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_65931a17 -->
