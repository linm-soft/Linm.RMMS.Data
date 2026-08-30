# HTML → native map — incident-detail

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-incident-detail`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | iOS title **Chi tiết** · Android **Chi tiết sự cố** · leading back |
| `.nav-btn` / `.icon-btn` back `#i-chevron-left` | `LinmTopBar` leading | `go('incident-list')` · iOS text «Vấn đề» + chevron · Android icon-only · **cấm** reimplement list |
| `.code-label` Mã | Caption Text **13** | fixed |
| `.code-value` SC-* | Display Text bold | iOS **28** · Android **24** · DTO `Code` |
| `.badge` severity×status | `LinmBadge` | VN map control-hint · red / warn / gray |
| `.card-group` `.row` Loại | `LinmListRow` | `Title` / `IncidentType` |
| `.row` Vị trí ghim tự động | `LinmListRow` | `"{RouteName} · Km {KmStart}"` |
| `.row` Định vị | `LinmListRow` | `HasGps` · **cấm** fake lat/lng · demo coords offline only |
| `.row` Nguồn | `LinmListRow` | `DetectionId` / reporter · dual parity · empty omit |
| `.btn-primary` Giao việc xử lý | `LinmPrimaryButton` | `go('estimate')` · **không** POST assign |
| `.btn-secondary` Xem trên bản đồ | `LinmSecondaryButton` | `go('gis-map')` |
| `.btn-secondary` Đóng sự cố | `LinmSecondaryButton` | POST close · disable nếu closed |
| toast | `LinmToast` | **Đã đóng sự cố** · sibling toast P1 · **cấm** `window.alert` |
| empty 404 | `LinmEmptyChrome` | NotFound · back list |
| `.tab` / DES-MOB-TABBAR | `LinmTabBar` | shell · selected **Vấn đề** · label **13** · **cấm** invent |

**Bind (real-data §B):**

| Line | Rule |
|------|------|
| code | `Code` raw (SC-*) |
| badge | `"{SeverityVN} · {StatusVN}"` · map control-hint |
| type | `Title` ưu tiên · thiếu → `IncidentType` |
| loc | `"{RouteName} · Km {KmStart}"` · thiếu Km → Route only · **cấm** fake |
| gps | Lat/Lng nếu Signed sau · else `HasGps` → loc + «đã chốt» · else «Chưa có định vị» · demo coords **chỉ** offline |
| source | `DetectionId` «AI DET-…» · hoặc «Tuần đường …» · empty omit |
| close | 200 → toast · badge Đã đóng · disable CTA |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm:** raw `NavigationBar` / M3 bar / `TabView` · WebView HTML · `mfeStdUrl` · invent `api/v1/incident-detail` · bottom-sheet chrome · sửa định vị · DELETE.
