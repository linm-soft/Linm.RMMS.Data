# HTML → native map — incident-list

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-incident-list`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | title **Quản lý vấn đề** · leading back · trailing Lọc |
| `.nav-btn` / `.icon-btn` back `#i-chevron-left` | `LinmTopBar` leading | pop `home` · **cấm** reimplement hub |
| trailing «Lọc» / `#i-list` | `LinmTopBar` trailing | iOS text · Android icon · toast **Lọc tuyến · loại · trạng thái** · **cấm** sheet |
| `.seg` Danh sách / Bản đồ | `LinmSegment` | selected Danh sách · Bản đồ → `go('gis-map')` · label **13** |
| `.search` / `#i-search` | `LinmSearchField` · `LinmSearchGlyph` | placeholder **Tìm kiếm vấn đề…** · client filter |
| `.vn-banner` `#i-camera` | banner / `LinmListRow` | title + sub · toast P1 / later `vis-capture` |
| `.rich-card` · `.rc-title` / `.rc-line` / `.rc-time` | rich card / `LinmListRow` | title · typeCode · loc · person · time |
| `.rc-thumb` | Image / placeholder | media **DEFER** · empty OK |
| `.rc-status.warn` / `.ok` | status bar text only | VN map · prefix `Trạng thái: ` · full width dưới `.rc-main` · **cấm** `LinmBadge` cạnh prefix (**GAP-MOB-EDIT-STATUS-01**) |
| `.rc-actions` `#i-chat` `#i-briefcase` `#i-list` `#i-mappin` | `LinmIconButton` | tap 44 · **flex:1 dàn đều** full card (**GAP-MOB-EDIT-ACT-01**) · toast / nav sibling · **cấm** CRUD trên slug |
| `.fab` `#i-plus` | `LinmFAB` | `startIncidentPick()` · owner `incident-create` |
| `.tab` / `.tabbar` · DES-MOB-TABBAR | `LinmTabBar` | shell · selected **Vấn đề** · label **13** · **cấm** invent |
| toast | `LinmToast` | Lọc · chat · banner/detail P1 · **cấm** `window.alert` |
| empty | `EmptyChrome` / `LinmEmptyChrome` | optional |

**Card bind (real-data §B):**

| Line | Rule |
|------|------|
| typeCode | `"{IncidentType} · {Code}"` · thiếu type → `Code` only |
| loc | `"{RouteName} Km {KmStart}"` · place fallback AssetLabel/Description · **cấm** fake lat/lng · **cấm** invent PlaceName |
| person | `ReporterName` · nếu `AssigneeName` khác → append ` · {AssigneeName}` · **cấm** invent OrgName |
| time | `RequestedAt` → `yyyy-MM-dd HH:mm:ss` local |
| status | Status → VN map control-hint · prefix `Trạng thái: ` |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm:** raw `List` / `LazyVStack` product chrome · M3 `NavigationBar` · `TabView` · WebView HTML · `mfeStdUrl` · invent `api/v1/incident-list`.
