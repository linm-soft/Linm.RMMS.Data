# Kit scan — mobile-p1

**DemoRoot:** `specs/mobile-p1`  
**scan_scope:** `all_ab`  
**implement_now:** `all_missing`  
**then_build:** `yes`  
**Ngày:** 2026-08-18  
**Map:** `docs/html-to-native-map.md`  
**Packet:** `ui/ux-analy.md`

HTML iOS + Android cùng selector. Control chỉ 1 HTML = defer.

| Demo (cả 2 HTML) | Ý nghĩa | Kit | Status |
|------------------|---------|-----|--------|
| `.hero-ico` person | Hồ sơ | `LinmProfileButton` | exists |
| `.hero-ico` bell + `.dot` | Notify + count | `LinmNotifyButton` | exists |
| `.vn-hero-tools` | Profile + notify | `LinmHeroTools` | exists |
| `.role` + `data-net-signal` | Khu + Tốt/TB/Yếu | `LinmStatusCapsule` · `LinmSignal*` | exists |
| `#i-mappin` GPS on·off | Pin vị trí | `LinmGpsIcon` · `LinmGpsButton` | exists |
| overflow `⋯` | Menu | `LinmMenu` | exists |
| top bar / `.nav-bar` | Title 56 | `LinmTopBar` | exists |
| `.btn-primary` | CTA chính | `LinmPrimaryButton` | exists |
| `.btn-secondary` | Phụ | `LinmSecondaryButton` | exists |
| `.row` / `.rich-card` | Hàng | `LinmListRow` | exists |
| `.card` / `.card-group` | Thẻ | `LinmCard` | exists |
| `.sheet` | Overlay + Huỷ/Lưu | `LinmSheet` | exists |
| `.toast` | Thông báo đáy | `LinmToast` | exists |
| leave modal | Dirty popup | `LinmLeaveConfirm` | exists |
| `.chip` (in-app) | Filter chip | `LinmChip` | exists |
| `.seg` | Segment | `LinmSegment` | exists |
| `.badge` | Status pill | `LinmBadge` | exists |
| `.kpi` / `.kpi-strip` | KPI | `LinmKpi` / `LinmKpiStrip` | exists |
| `.hub-tile` | Hub 2 cột | `LinmHubTile` | exists |
| `.home-grid` | Lưới 3 cột | `LinmHomeGrid` | exists (Android export cùng turn) |
| `.fab` | CTA overlay | `LinmFab` | exists |
| `input` / `.search` | Text · tìm | `LinmTextField` · `LinmSearchField` | exists |
| checkbox / toggle | On/off | `LinmToggle` | exists |
| `.vn-quick` | 2 ô hero · title + phụ | `LinmQuickActions` | **kit_new** |
| `.wallet-card` | Ví tuyến gradient | `LinmWalletCard` | **kit_new** |
| `.section-label` | Nhãn nhóm | `LinmSectionLabel` | **kit_new** |
| `.progress` | Thanh tiến độ | `LinmProgress` | **kit_new** |
| `.home-tile` | Ô 3 cột · share `icon`+`iconColor`+`background` | `LinmHomeTile` | exists |
| `.hero-card` | Thẻ ca / hero | `LinmHeroCard` | **kit_new** |
| `.large-title` | Tiêu đề lớn | `LinmLargeTitle` | **kit_new** |
| `.kind-pills` | 3 pill loại | `LinmKindPills` | **kit_new** |
| `.tab-bar` / 5 tab | IA app | TabView / NavigationBar | **defer** |
| map OMS / `.map-shell` | Feature page | — | **defer** |
| Login brand + form | Màn đăng nhập · app logo | — | **pilot login** · brand = AppIcon |
| `.ak32-tile` / 32 loại | Catalog feature | — | **defer** |
| `.finder` / camera | Feature | — | **defer** |
| `.chk-row` CSS only | Chưa dùng 2 HTML body | — | **defer** |
| jump chips reviewer | Ngoài máy | — | **defer** |

**Implement turn:** mọi `kit_new` · iOS + Android · gallery section **9** · rồi `/build-mobile-kit-to-app`.
