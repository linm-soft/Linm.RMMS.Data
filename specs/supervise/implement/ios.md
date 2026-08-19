# Dev — Implement — supervise (iOS)

> Status: **done** · `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` · `/ios-new-api-call` · `/dev-ui-review` · `/convert-web-icon-to-mobile`  
> task `task_e29847e6` · T-IOS-SUPERVISE

| Feature | `supervise` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** · family `1` · A4-IPAD DEFER |
| xcodegen | **PASS** |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmToast` · `LinmMapPinGlyph` · `LinmBusyOverlay` · card = feature composition (`LinmCard` title+pad 16 **không** khớp thumb + status strip) |

## Layers

| Presentation | `Presentation/Features/Supervise/SuperviseView.swift` · `SuperviseViewModel.swift` · `SuperviseUiState.swift` · `AppRouter` Home/Field `navigationDestination` |
| Domain | `FetchSuperviseCheckinsUseCase` · `SuperviseCopy.orgFallback` · `SuperviseCopy.demoItems` |
| Data | `SuperviseRepositoryImpl` · `SuperviseDtoMapper.checkin(from:)` · `GET patrol/attendance-logs` `page`/`pageSize` |

## IA / API

- route_a: Home tile **Giám sát** + patrol-home quick **Giám sát** → push `#sc-supervise` · back **Trang Chủ** = pop.
- Appear GET `patrol/attendance-logs` Bearer · empty/fail/offline → demo SSOT 2 rows · list **mở**.
- Empty `Note` → «Tổ tuần đường · VP-IV.1» (`GAP-MOB-SUP-03`).
- Lọc / segment **Bản đồ** / tap card → `LinmToast` · **cấm** push sibling · **cấm** `UIAlert`.
- `#i-building` Path `d=` · `#i-mappin` `LinmMapPinGlyph` · type 17/13/13.
- E2E: `sc-supervise` · `btn-sup-back` · `btn-sup-filter` · `sup-segment` · `sup-card-demo-1` / `sup-card-demo-2`.

## VERIFY GATE

`xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` **BUILD SUCCEEDED**.

## Notes

Step 4b / T-BE **N/A** — reuse live `GET patrol/attendance-logs`. **Cấm** `GET supervise` / sibling map-detail.
