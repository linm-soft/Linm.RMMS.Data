# HTML → native map — mnt-list

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-mnt-list`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | title **Danh sách công việc** · leading back · trailing Lọc |
| `.nav-btn` / `.icon-btn` back `#i-chevron-left` | `LinmTopBar` leading | pop `home` · **cấm** reimplement hub |
| trailing «Lọc» / `#i-list` | `LinmTopBar` trailing | iOS text · Android icon · toast **Bộ lọc · tuyến đường** · **cấm** sheet |
| `.search` / `#i-search` | `LinmSearchField` · `LinmSearchGlyph` | placeholder **Tìm kiếm công việc…** · client filter |
| `.row` hub · `.row-icon` `#i-sum` green | `LinmListRow` `leading:` · `LinmRowIcon` + stroke glyph | title + sub · toast P1 / later estimate |
| `.rich-card` · `.rc-title` / `.rc-line` | rich card / `LinmListRow` | title · assign · range · meta |
| `.rc-status.warn` / `.ok` | status bar text only | VN map new→Chờ xử lý · done→Đã hoàn thành · **cấm** `LinmBadge` trùng prefix (**GAP-MOB-EDIT-STATUS-01**) |
| `.rc-actions` buttons `#i-chat` `#i-sync` `#i-sum` `#i-list` | `LinmIconButton` | tap 44 · **flex:1 dàn đều** full card (**GAP-MOB-EDIT-ACT-01**) · toast sibling · **cấm** API trên slug |
| `.tab` / `.tabbar` · DES-MOB-TABBAR | `LinmTabBar` | shell · selected **Công việc** · label **13** · **cấm** invent |
| toast | `LinmToast` | Lọc · hub · chat · sync · log · estimate |
| empty | `EmptyChrome` / `LinmEmptyChrome` | optional |

**Assign bind:** `"{teamName} giao việc cho {assigneeName}"` · thiếu team → `"Giao việc cho {assigneeName}"` · cả thiếu → demo copy fallback · **cấm** invent AssignerName.

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm:** raw `List` / `LazyVStack` product chrome · M3 `NavigationBar` · `TabView` · WebView HTML · `mfeStdUrl`.
