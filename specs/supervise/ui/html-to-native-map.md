# HTML → native map — supervise

| HTML / DES | Zone | Kit iOS | Kit Android | Notes |
|------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` · DES-MOB-SUP-NAV | Nav text | `LinmTopBar` | `LinmTopBar` | leading **Trang Chủ** · trailing **Lọc** |
| `.nav-title` | Title | same | same | Giám sát tuần đường |
| `.seg` · DES-MOB-SUP-SEG | Segment 2 | `LinmSegment` | same | idx 0/1 lock |
| `.rich-card` · DES-MOB-SUP-CARD | Check-in card | `LinmCard` + feature composition | same | **cấm** invent `LinmRichCheckinCard` |
| `.rc-title` | UserName | Text 17 | Text ≥16 | |
| `.rc-line` + `#i-building` | Org | composition | same | demo / Note |
| `.rc-line` + `#i-mappin` | Loc | composition | same | Route + KmPoint |
| `.rc-time` | Time | muted | same | CheckInAt local |
| `.rc-status` | Status strip | Text 13 | same | ok/warn |
| `.rc-thumb` | Placeholder | 56 gradient | same | camera P2 |
| `.toast` | Feedback | `LinmToast` | same | **cấm** alert · loadFail list |
| empty list | Empty | `EmptyChromeView` | `EmptyChrome` | id `sup-empty` · live-only |
| `#sc-supervise` | Screen | `SuperviseView` | `SuperviseScreen` | live GET · **cấm** demoItems |

**Cấm** raw `TabView` / M3 `NavigationBar` · WebView HTML.

See also: `docs/html-to-native-map.md` (global SSOT) — `.rich-card` / `.list` / `.row` → `LinmListRow` **hoặc** card composition cùng zone.
