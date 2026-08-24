# HTML → native map — asset (mobile list)

| HTML / DES | Zone | Kit iOS | Kit Android | Notes |
|------------|------|---------|-------------|-------|
| `.nav-bar` / `.top-bar` · DES-MOB-ASSET-LIST-NAV | Nav | `LinmTopBar` | `LinmTopBar` | leading **Tài sản** (iOS text) / icon (Android) · title **Danh sách** |
| `.search` + `#i-search` · DES-MOB-ASSET-LIST-SEARCH | Search | `LinmSearchField` · `LinmSearchGlyph` | same | hint **Tìm mã TS, tuyến, loại…** |
| `.row` · DES-MOB-ASSET-LIST-ROWS | List row | `LinmListRow` + `LinmRowIcon` | same | `#i-cube` indigo/gray |
| `.row-title` | Title | title ≥16 | same | `{code} · {name}` |
| `.row-sub` | Subtitle | subtitle 13 | same | route · km · type |
| `.chev` + `#i-chevron-right` | Chevron | `showsChevron` | optional | iOS primary |
| `.toast` | Feedback | `LinmToast` | same | **cấm** alert |
| `#sc-asset-list` | Screen | `AssetListView` | `AssetListScreen` | **defer** feature page |

**Cấm** raw `List` / M3 `SearchBar` / tab bar on this screen · WebView HTML.

See also: `docs/html-to-native-map.md` (global SSOT) — `.row` → `LinmListRow` · `.search` → `LinmSearchField`.
