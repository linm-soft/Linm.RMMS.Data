# HTML → native map — me

Cite SSOT `docs/html-to-native-map.md`. Feature deltas:

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.large-title` Tôi | `LinmLargeTitle` | |
| `.section-label` | `LinmSectionLabel` | |
| `.row` hub | `LinmListRow` `onTap` / `leading` / `showsChevron` / `badge` | implement_kit this turn |
| `.badge` | `LinmBadge` | 0 ẩn |
| `data-net-signal` | `LinmNetSignalMark` | **chỉ** 4 cột · Tốt/TB/Yếu · **cấm** wifi glyph |
| `.tabbar` | `LinmTabBar` dual | `shell-tabs` · `tabLabel` **10** · Tuần đường `location.fill` ≡ `Place` · **cấm** `TabView` / `NavigationBar` / `mappin` |
| top bar (Home kit) | `LinmTopBar` dual | glyph vector 22 · tap 44 · **cấm** chữ `▦`/`⋯` |
| toast | `LinmToast` | sibling + logout |
| Đăng xuất đỏ | `LinmListRow` `titleColor` danger | **không** `LinmSecondaryButton` trên `#sc-me` |
