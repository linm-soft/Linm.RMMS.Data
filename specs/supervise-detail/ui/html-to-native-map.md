# HTML → native map — supervise-detail

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-supervise-detail`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | title dual **Chi tiết check-in** · leading back |
| `.nav-btn` / `.icon-btn` back `#i-chevron-left` | `LinmTopBar` leading | `go('supervise')` · iOS text «Giám sát» + chevron · Android icon-only · **cấm** reimplement list |
| `.hero-name` UserName | Display Text bold | iOS **28** · Android **24** · DTO `UserName` |
| `.code-label` Mã | Caption Text **13** | fixed |
| `.code-value` CC-* | Text ≥16 | DTO `Code` |
| `.card-group` `.row` Tổ / đơn vị | `LinmListRow` | `Note` · demo fallback · optional `#i-building` |
| `.row` Tuyến · lý trình | `LinmListRow` | `"{Route} Km {KmPoint}"` · địa danh · optional `#i-mappin` |
| `.row` Thời điểm | `LinmListRow` | `CheckInAt` `yyyy-MM-dd HH:mm:ss` local |
| `.row` / `.status-ok` Trạng thái | `LinmListRow` | Status VN map · ok / warn tint |
| `.row` Tọa độ | `LinmListRow` | `"{Lat}, {Lng}"` |
| `.row` Trong vùng | `LinmListRow` | `InZone` → Trong vùng / Ngoài vùng |
| `.btn-primary` Xem trên bản đồ | `LinmPrimaryButton` | `go('gis-map')` · pass Id/Lat/Lng · **không** embed |
| toast | `LinmToast` | GET fail · sibling toast P1 · **cấm** `window.alert` |
| empty 404 | `LinmEmptyChrome` | NotFound · back list |
| `.tab` / DES-MOB-TABBAR | `LinmTabBar` | shell · selected **Trang Chủ** · label **13** · **cấm** invent |

**Bind (real-data §B):**

| Line | Rule |
|------|------|
| hero | `UserName` raw |
| code | `Code` raw (CC-*) |
| org | `Note` non-empty · else `Tổ tuần đường · VP-IV.1` |
| loc | `"{Route} Km {KmPoint}"` · thiếu Km → Route only · địa danh demo append OK offline |
| time | `CheckInAt` format `yyyy-MM-dd HH:mm:ss` local |
| status | map control-hint · default «Đã ghi điểm tuần» khi raw khớp demo |
| gps | `"{Lat}, {Lng}"` (DTO non-null decimal) |
| inZone | `true` → «Trong vùng» · `false` → «Ngoài vùng» |
| map CTA | pass `Id` + Lat/Lng · **không** fake coords khi live OK |
| nav key | `Id` |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm:** raw `NavigationBar` / M3 bar / `TabView` · WebView HTML · `mfeStdUrl` · invent `api/v1/supervise-detail` · bottom-sheet chrome · reuse CI-DETAIL · POST/PUT/DELETE.
