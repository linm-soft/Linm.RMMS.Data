# HTML → native map — patrol-history

| HTML / DES | Zone | Kit iOS | Kit Android | Notes |
|------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` · DES-MOB-PAT-LIST-NAV | Nav | `LinmTopBar` | `LinmTopBar` | leading **Tuần đường** · trailing **Lọc** |
| `.large-title` | Title | `LinmLargeTitle` | same | **Lịch sử ca** |
| `.search` + `#i-search` · DES-MOB-PAT-LIST-SEARCH | Search | `LinmSearchField` · `LinmSearchGlyph` | same | native placeholder **Tìm** |
| `.row.no-icon` · DES-MOB-PAT-LIST-ROWS | List row | `LinmListRow` `leadingSlot: 0` | same | **cấm** leading icon |
| `.row-title` | Code | title ≥16 | same | PAT-* |
| `.row-sub` | Subtitle | subtitle 13 | same | status-aware |
| `.badge` | Status | `LinmBadge` info/success/danger/warning | same | **cấm** «Xong» |
| `.chev` + `#i-chevron-right` | Chevron | `showsChevron` | optional | iOS primary |
| `.toast` | Feedback | `LinmToast` | same | **cấm** alert |
| `.tab` · DES-MOB-TABBAR | Tab shell | `LinmTabBar` | same | Tuần đường selected |
| `#sc-patrol-history` | Screen | `PatrolHistoryView` | `PatrolHistoryScreen` | **defer** feature page |

**Cấm** raw `List` / M3 `NavigationBar` / `TabView` on this screen · WebView HTML.

See also: `docs/html-to-native-map.md` (global SSOT) — `.row` → `LinmListRow` · `.search` → `LinmSearchField`.
