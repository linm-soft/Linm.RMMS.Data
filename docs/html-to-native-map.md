# HTML → native map — RMMS mobile

**SSOT rule:** `common/skill/mobile-ui-ux-analy/example/html-to-native-map.md`  
**Tokens:** `docs/mobile-tokens.json` · `specs/mobile-p1/ui/design.md` §3  
**Kits:** `LinmMobileKit` (SPM · `Linm.Mobile.Kit.iOS`) · `org.linmsoft.mobile:ui` (Maven · `Linm.Mobile.Kit.Android`)

Map **ý nghĩa**. Cấm clone `px` / `class`. Cấm 1 binary UI 2 OS.

## A — Chrome

| Demo | Ý nghĩa | SwiftUI (`LinmMobileKit`) | Compose (`org.linmsoft.mobile:ui`) |
|------|---------|---------------------------|------------------------------------|
| `.tabbar` | 5 tab IA · full-width flush · slot 64×32 · glyph **22** outline · **cấm pill nền** · **cấm** `Icons.Filled` · **cấm** Material `Build` · `#i-home/mappin/warning/wrench/person` → `Linm*Glyph` **cùng `d=`** (`/convert-web-icon-to-mobile`) · iOS SF cùng motif (`house`/`wrench`/…) · lệch nét OK · **cấm** đổi metaphor · label **`tabLabel` 13** / height **16** | `LinmTabBar` | `LinmTabBar` |
| top bar | Cao 56 · title giữa · 2 bên tap 44 · glyph **vector 22** (SF `square.grid.2x2` / `ellipsis.circle` ≡ GridView / MoreHoriz) · **cấm** chữ `▦`/`⋯` | `LinmTopBar` | `LinmTopBar` |
| `.btn-ok` | CTA chính · loading `isBusy` spinner giữa nút (ẩn title) | `LinmPrimaryButton` `isBusy` | `LinmPrimaryButton` `isBusy` |
| `.btn-skip` | Phụ | `LinmSecondaryButton` | `LinmSecondaryButton` |
| `.list` / `.rich-card` / `.row` | Hàng · leading `.row-icon` → `LinmRowIcon` + `LinmStrokeGlyph` `#i-*` cùng `d=` (`/convert-web-icon-to-mobile`) · iOS 36 rounded-rect · Android 40 circle · không icon thì **không** chừa slot trống · chevron / badge / `onTap` | `LinmListRow` `leading:` | `LinmListRow` `leading` |
| `.card` / form card | Thẻ | `LinmCard` | `LinmCard` |
| overflow / `⋯` | Menu | `LinmMenu` (HIG `Menu`) | `LinmMenu` — host `DropdownMenu` + **token skin** (cấm M3 tím) |
| `.sheet` | Overlay · size compact/medium/large · chrome Huỷ/Lưu · footer `LinmSheetButton` main/second · fullWidth \| inline | `.linmSheet` + `LinmSheet` · `LinmSheetSize` · `LinmSheetChrome` · `LinmSheetButton` | `LinmSheet` cùng props |
| toast / banner | Thông báo · đóng phải `#i-x` · auto `toastAutoDismissMs` 5000 · giữ text (không đóng) · `bottomBarHeight` app đo footer/`LinmTabBar` → toast **trên** tab · gap `toastBottomGap` 20 · `includeNotification` → app `onNotify` · **cấm** `alert` | `LinmToast` / `LinmToastHost` / `LinmBanner` | same |
| leave modal | Dirty **popup** giữa màn | `LinmLeaveConfirm` / `.linmLeaveConfirm` | `LinmLeaveConfirm` (`Dialog`) |
| loading full page | Spinner giữa · blur nền `busyBlur` 12 | `LinmBusyOverlay` / `.linmBusyOverlay` | `LinmBusyOverlay` |
| `.chip` | Filter chip | `LinmChip` | `LinmChip` |
| `.seg` · DES-MOB-PAT-SEG | Segment | `LinmSegment` | `LinmSegment` |
| `.badge` | Status pill · cấm P1/P2 | `LinmBadge` | `LinmBadge` |
| `.kpi` / `.kpi-strip` · DES-MOB-PAT-KPI | KPI | `LinmKpi` / `LinmKpiStrip` | same |
| `.hub-tile` | Hub card · app truyền `icon` + `iconColor` + `background` · hàng 2 cột **stretch cùng height** · subtitle slot 2 dòng | `LinmHubTile` | `LinmHubTile` |
| `.ak32-tile` / `.ak32-ico` | Ô chọn loại TS · pict 36 QCVN `code`→`LinmAssetKchtPict` · 3 cột stretch · label 3 dòng | `LinmAssetKchtPict` | `LinmAssetKchtPict` |
| `.home-grid` · DES-MOB-HOME-GRID | 3-col | `LinmHomeGrid` | `LinmHomeGrid` |
| `.fab` | Primary overlay | `LinmFab` (HIG: toolbar + ưu tiên) | `LinmFab` (FAB) |
| kit gallery | Local catalog (test) | `LinmKitGallery` | `LinmKitGallery` |
| Home demo **Đăng xuất** | Chrome retest login · e2e `btn-logout` · **không** `#sc-me` | `LinmSecondaryButton` (app `LogoutUseCase`) | same |
| `.hero-ico` hồ sơ | Nút tròn profile · tap 44 · vòng 36 | `LinmProfileButton` | `LinmProfileButton` |
| `.hero-ico` + badge số | Notify + count (`0` ẩn) · badge **22** · chữ **11** · ring 1.5 · trong tap 44 · **cấm** M3 `Badge` | `LinmNotifyButton` · `LinmNotifyCountBadge` | same |
| `.vn-hero-tools` | Profile trái · notify phải | `LinmHeroTools` | `LinmHeroTools` |
| `.role` + `data-net-signal` | Khu + cột sóng + Tốt/TB/Yếu · **cấm** wifi glyph · **cấm** «Có mạng» | `LinmStatusCapsule` | `LinmStatusCapsule` |
| `#i-mappin` / GPS on·off | Pin vị trí · **cấm** kit đọc GPS | `LinmGpsIcon` · `LinmGpsMark` · `LinmGpsButton` | same |
| `#i-wifi` | Glyph 3-cung nút tròn (không dùng trên hàng Tín hiệu) | `LinmWifiGlyph` · `LinmSignalButton` | same |
| 4 cột 4/6/8/11 | Tín hiệu Tốt/TB/Yếu · **chỉ** cột sóng · **cấm** wifi glyph trên mark · **cấm** «Có mạng» | `LinmSignalIcon` · `LinmNetSignalMark` | same |
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
| `button` primary | Action chính · busy = spinner giữa · **cấm** overlay màn | `LinmPrimaryButton` `isBusy` | `LinmPrimaryButton` `isBusy` |
| `input type=text` | Text · cùng `formFieldHeight` 52 · lead khi demo có · IME pin · optional Enter/`Go` | `LinmTextField` (+ `leading` · `onSubmit`) trong `LinmKeyboardAwareScroll` | same · `ImeAction.Go` khi `onSubmit` |
| `input type=password` + `.trail` eye (`#i-eye` / `#i-eye-off`) | SecureText · hiện/ẩn MK · **giữ IME** · optional Enter/`Go` | `LinmSecureTextField` (`UITextField` + `isSecureTextEntry` · `onSubmit`) · `LinmEyeGlyph` / `LinmEyeOffGlyph` | `LinmSecureTextField` · VisualTransformation · `onSubmit` · eye `canFocus=false` |
| `input type=search` / `.search` / `#i-search` | Tìm · vòng + cán · **cấm** `⌕` / SF-M3 lệch nét | `LinmSearchField` · `LinmSearchGlyph` | same |
| `input type=checkbox` | On/off | `LinmToggle` | `LinmToggle` |

## C — CSS token

| CSS / design | Hex | Native |
|--------------|-----|--------|
| primary / tint | `#0C84C0` | `LinmTokens.primary` |
| card radius | `16` cả 2 OS | `LinmTokens.cardRadius` |
| sheet radius / detent | `24` · `0.40` / `0.55` / `0.90` | `sheetRadius` · `sheetCompactFraction` · `sheetMediumFraction` · `sheetLargeFraction` |
| control / button | `44` | `controlHeight` / `buttonHeight` |
| busy overlay blur | `12` | `busyBlur` |
| form field row | `52` | `formFieldHeight` |
| IME focus gap | `12` | `imeFocusGap` · `LinmKeyboardAwareScroll` |
| tab slot / label / field | `64` × `32` tap · **cấm pill nền** · label **13** · field **16** | `tabIndicatorWidth` · `tabIndicatorHeight` · `tabLabel` · `label` · `fieldText` |
| hero circle / capsule / badge / wifi / toast | `36` / `28` / `22` / `11` / `1.5` / `14` / `5000` / `20` / `64` | `iconCircle` / `statusCapsuleHeight` / `notifyBadge` / `notifyBadgeFont` / `notifyBadgeRing` / `signalWifi` / `toastAutoDismissMs` / `toastBottomGap` / `tabBarContentHeight` |
| home tile / progress / large title / quick | `48` / `6` / `34` / `14` / `#FFF8E8` | `iconHomeTile` / `progressHeight` / `largeTitle` / `quickRadius` / `quickStart` |
| header | `#086A9A` → `#0C84C0` | `headerStart` / `headerEnd` |
| success | `#3CB448` | `LinmTokens.success` |
| warning | `#FCB43C` | `LinmTokens.warning` |
| danger | `#F03C30` | `LinmTokens.danger` |

## E — Cấm

1 GitHub Package UI 2 OS · WebView HTML-as-app · `alert` / `confirm` · fork `@linm-soft-org/linm-web-common-components`.
