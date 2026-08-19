# Kit scan — supervise

| | |
|--|--|
| feature | `supervise` |
| scan_scope | `chrome` + packet map |
| demo | `ui/prototype/ios/index.html` · `android/index.html` |
| map | `docs/html-to-native-map.md` · `ui/html-to-native-map.md` |
| at | `2026-08-19T15:25:00.000Z` |
| taskId | `task_b163f3ae` |

## Inventory

| Demo (cả 2 HTML) | Ý nghĩa | Kit | Status |
|------------------|---------|-----|--------|
| `.nav-bar` / `.top-bar` text slots | Title + Trang Chủ + Lọc | `LinmTopBar` | **exists** |
| `.seg` 2 tabs | Danh sách / Bản đồ | `LinmSegment` | **exists** |
| `.rich-card` | Check-in card | `LinmCard` + feature composition | **exists** (zone) · **cấm** invent `LinmRichCheckinCard` |
| `.toast` | In-app toast | `LinmToast` | **exists** |
| `#sc-supervise` | Feature page | — | **defer** |
| Tab bar 5 | IA shell | — | **defer** (không trên màn này) |
| Filter sheet / map | Sibling | — | **defer** P1 toast |

`kit_new` = **none**. `kit_missing_confirm` = **N/A**.  
`kit_scan_noop` — không `/edit-mobile-kit-control` turn này.
