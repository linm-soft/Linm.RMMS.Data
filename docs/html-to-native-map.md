# HTML → native map — RMMS mobile

**SSOT rule:** `common/skill/mobile-ui-ux-analy/example/html-to-native-map.md`  
**Tokens:** `docs/mobile-tokens.json` · `specs/mobile-p1/ui/design.md` §3  
**Kits:** `LinmMobileKit` (SPM · `Linm.Mobile.Kit.iOS`) · `org.linmsoft.mobile:ui` (Maven · `Linm.Mobile.Kit.Android`)

Map **ý nghĩa**. Cấm clone `px` / `class`. Cấm 1 binary UI 2 OS.

## A — Chrome

| Demo | Ý nghĩa | SwiftUI (`LinmMobileKit`) | Compose (`org.linmsoft.mobile:ui`) |
|------|---------|---------------------------|------------------------------------|
| `.tabbar` | 5 tab IA | `TabView` + SF | `NavigationBar` + Material |
| top bar | Cao 56 · title giữa · 2 bên 44 | `LinmTopBar` | `LinmTopBar` |
| `.btn-ok` | CTA chính | `LinmPrimaryButton` | `LinmPrimaryButton` |
| `.btn-skip` | Phụ | `LinmSecondaryButton` | `LinmSecondaryButton` |
| `.list` / `.rich-card` | Hàng | `LinmListRow` | `LinmListRow` |
| `.card` / form card | Thẻ | `LinmCard` | `LinmCard` |
| overflow / `⋯` | Menu | `LinmMenu` (HIG `Menu`) | `LinmMenu` — host `DropdownMenu` + **token skin** (cấm M3 tím) |
| `.sheet` | Overlay · size compact/medium/large · chrome Huỷ/Lưu · footer `LinmSheetButton` main/second · fullWidth \| inline | `.linmSheet` + `LinmSheet` · `LinmSheetSize` · `LinmSheetChrome` · `LinmSheetButton` | `LinmSheet` cùng props |
| toast / banner | Thông báo | `LinmToast` / `LinmBanner` | `LinmToast` / `LinmBanner` |
| leave modal | Dirty **popup** giữa màn | `LinmLeaveConfirm` / `.linmLeaveConfirm` | `LinmLeaveConfirm` (`Dialog`) |
| `.chip` | Filter chip | `LinmChip` | `LinmChip` |
| `.seg` · DES-MOB-PAT-SEG | Segment | `LinmSegment` | `LinmSegment` |
| `.badge` | Status pill · cấm P1/P2 | `LinmBadge` | `LinmBadge` |
| `.kpi` / `.kpi-strip` · DES-MOB-PAT-KPI | KPI | `LinmKpi` / `LinmKpiStrip` | same |
| `.hub-tile` | Hub card · app truyền `icon` + `iconColor` + `background` | `LinmHubTile` | `LinmHubTile` |
| `.home-grid` · DES-MOB-HOME-GRID | 3-col | `LinmHomeGrid` | `LinmHomeGrid` |
| `.fab` | Primary overlay | `LinmFab` (HIG: toolbar + ưu tiên) | `LinmFab` (FAB) |
| kit gallery | Local catalog (test) | `LinmKitGallery` | `LinmKitGallery` |
| `.hero-ico` hồ sơ | Nút tròn profile · tap 44 · vòng 36 | `LinmProfileButton` | `LinmProfileButton` |
| `.hero-ico` + badge số | Notify + count (`0` ẩn) · badge **22** · chữ **11** · ring 1.5 · trong tap 44 · **cấm** M3 `Badge` | `LinmNotifyButton` · `LinmNotifyCountBadge` | same |
| `.vn-hero-tools` | Profile trái · notify phải | `LinmHeroTools` | `LinmHeroTools` |
| `.role` + `data-net-signal` | Khu + wifi + cột sóng + Tốt/TB/Yếu · **cấm** «Có mạng» | `LinmStatusCapsule` | `LinmStatusCapsule` |
| `#i-mappin` / GPS on·off | Pin vị trí · **cấm** kit đọc GPS | `LinmGpsIcon` · `LinmGpsMark` · `LinmGpsButton` | same |
| `#i-wifi` + bars | Tín hiệu Tốt/TB/Yếu · **cùng vẽ** 3-cung + chấm (cấm SF/M3 wifi nhỏ) + 4 cột 4/6/8/11 | `LinmWifiGlyph` · `LinmSignalIcon` · `LinmNetSignalMark` · `LinmSignalButton` | same |
| `.vn-quick` | 2 ô hero title + phụ | `LinmQuickActions` · `LinmQuickItem` | same |
| `.wallet-card` · DES-MOB-HOME-WALLET | Ví tuyến gradient | `LinmWalletCard` | same |
| `.section-label` | Nhãn nhóm | `LinmSectionLabel` | same |
| `.progress` | Thanh tiến độ 0…1 | `LinmProgress` | same |
| `.home-tile` | Ô 3 cột · share `icon` + `iconColor` + `background` · cùng motif `#i-*` | `LinmHomeTile` | same |
| `.hero-card` · DES-MOB-PAT-ACTIVE | Thẻ ca + CTA trắng/ghost | `LinmHeroCard` · `LinmHeroAction` | same |
| `.large-title` | Tiêu đề lớn | `LinmLargeTitle` | same |
| `.kind-pills` · DES-MOB-INC-KIND | 3 pill loại | `LinmKindPills` | same |

## B — HTML

| HTML | Ý nghĩa | SwiftUI | Compose |
|------|---------|---------|---------|
| `button` primary | Action chính | `LinmPrimaryButton` | `LinmPrimaryButton` |
| `input type=text` | Text | `LinmTextField` | `LinmTextField` |
| `input type=password` + `.trail` eye (`#i-eye` / `#i-eye-off`) | SecureText · hiện/ẩn MK | `LinmSecureTextField` · `LinmEyeGlyph` / `LinmEyeOffGlyph` | `LinmSecureTextField` · same |
| `input type=search` / `.search` / `#i-search` | Tìm · vòng + cán · **cấm** `⌕` / SF-M3 lệch nét | `LinmSearchField` · `LinmSearchGlyph` | same |
| `input type=checkbox` | On/off | `LinmToggle` | `LinmToggle` |

## C — CSS token

| CSS / design | Hex | Native |
|--------------|-----|--------|
| primary / tint | `#0C84C0` | `LinmTokens.primary` |
| card radius | `16` cả 2 OS | `LinmTokens.cardRadius` |
| sheet radius / detent | `24` · `0.40` / `0.55` / `0.90` | `sheetRadius` · `sheetCompactFraction` · `sheetMediumFraction` · `sheetLargeFraction` |
| control / button | `44` | `controlHeight` / `buttonHeight` |
| hero circle / capsule / badge / wifi | `36` / `28` / `22` / `11` / `1.5` / `14` | `iconCircle` / `statusCapsuleHeight` / `notifyBadge` / `notifyBadgeFont` / `notifyBadgeRing` / `signalWifi` |
| home tile / progress / large title / quick | `48` / `6` / `34` / `14` / `#FFF8E8` | `iconHomeTile` / `progressHeight` / `largeTitle` / `quickRadius` / `quickStart` |
| header | `#086A9A` → `#0C84C0` | `headerStart` / `headerEnd` |
| success | `#3CB448` | `LinmTokens.success` |
| warning | `#FCB43C` | `LinmTokens.warning` |
| danger | `#F03C30` | `LinmTokens.danger` |

## E — Cấm

1 GitHub Package UI 2 OS · WebView HTML-as-app · `alert` / `confirm` · fork `@linm-soft-org/linm-web-common-components`.
