# HTML → native map — supervise

| HTML / DES | Zone | Kit iOS | Kit Android | Notes |
|------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` · DES-MOB-SUP-NAV | Nav text | `LinmTopBar` | `LinmTopBar` | leading **Trang Chủ** · trailing **Lọc** → sheet |
| `.nav-title` | Title | same | same | Giám sát tuần đường |
| `#btn-sup-filter` | Open filter | trailingText | same | **cấm** toast filter |
| `.seg` · DES-MOB-SUP-SEG | Segment 2 | `LinmSegment` | same | idx 0 owner · idx 1 → push `patrol-map` |
| `#filter-sheet` · DES-MOB-SUP-FILTER | Sheet Lọc | `.sheet` / Modal | BottomSheet | route + date + Apply/Clear |
| `#filterRoute` | Tuyến | TextField | OutlinedTextField | → GET `route` |
| `#filterDate` | Ngày | DatePicker | DatePicker | client `CheckInAt` day |
| `#filterApply` | Áp dụng | Primary button | FilledButton | dismiss · reload |
| `#filterClear` | Xóa lọc | Ghost | TextButton | clear · reload |
| `#filter-chip` · DES-MOB-SUP-FILTER-CHIP | Active filter | optional chip | same | show when filtered |
| `.rich-card` · DES-MOB-SUP-CARD | Check-in card | `LinmCard` + composition | same | **cấm** invent `LinmRichCheckinCard` |
| `.rc-title` | UserName | Text 17 | Text ≥16 | |
| `.rc-line` + `#i-building` | Org | composition | same | Note / fallback |
| `.rc-line` + `#i-mappin` | Loc | composition | same | Route + KmPoint |
| `.rc-time` | Time | muted | same | CheckInAt local |
| `.rc-status` | Status strip | Text 13 | same | ok/warn |
| `.rc-thumb` | Placeholder | 56 gradient | same | camera P2 |
| `#sup-empty` | Empty | `EmptyChromeView` | `EmptyChrome` | 0 after filter / fail |
| `.toast` | Feedback | `LinmToast` | same | **loadFail only** · **cấm** filter/map toast · **cấm** alert |
| `#nav-cue` | Proto nav demo | — | — | design-only · native = Navigation push |
| `#sc-supervise` | Screen | `SuperviseView` | `SuperviseScreen` | live GET ± filter |

**Cấm** raw `TabView` / M3 `NavigationBar` · WebView HTML · embed map on list.

See also: `docs/html-to-native-map.md` (global SSOT).
