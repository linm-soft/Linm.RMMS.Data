# HTML → native map — home

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-home`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.vn-hero-tools` | `LinmHeroTools` | Profile trái · **AppLogo** giữa `home-brand` · Notify phải · tap 44 |
| `.hero-ico` person | `LinmProfileButton` | `reuse=me` · tab Tôi |
| `.hero-ico` bell | `LinmNotifyButton` · `LinmNotifyCountBadge` | tap → `#sc-ops` cùng Me `row-ops` · GET `notification/overview` · guest **AllowAnonymous** · **cấm** hardcode `3` |
| `#home-brand` | `AppLogo` / `app_logo` | 36 · giữa hero · a11y `brand.appName` |
| `.role` + `data-net-signal` | `LinmStatusCapsule` · `LinmNetSignalMark` | role **ẩn live** · 4 cột · Tốt/TB/Yếu · **cấm** wifi glyph · **cấm** «Có mạng» |
| `.who` | typography hero | guest `home.guest.who` · staff GET profile |
| `#btn-home-login` | Button card **guest dock** (không hero) | `home.login` + `home.login.sub` · ẩn staff · e2e `btn-home-login` · pin đáy |
| `#btn-home-faq` / `#sc-faq` | overlay FAQ | pills `chip-faq-*` · `f-faq-search` · `row-faq-*` · static `LinmCopy` · **cấm** invent API |
| `#btn-home-privacy` / `#sc-privacy` | overlay privacy | `privacy-body` · static `home.privacy.body` · pin đáy dưới login |
| `.guest-dock` | VStack / Column bottom | login + privacy · **cấm** tab guest |
| `.vn-quick` / quick buttons | `LinmQuickActions` · `LinmQuickItem` | 2 ô title + phụ |
| `.section-label` | `LinmSectionLabel` | Nghiệp vụ thường dùng |
| `.home-grid` · DES-MOB-HOME-GRID | `LinmHomeGrid` | 3 cột · **cấm** raw `LazyVGrid` / `LazyVerticalGrid` |
| `.home-tile` | `LinmHomeTile` | icon + `iconColor`/`background` hex · nhãn VN |
| `.wallet-card` · DES-MOB-HOME-WALLET | `LinmWalletCard` | static demo copy · sibling `asset-hub` |
| `.home-foot` | — | **skip** · watermark Gói · **cấm** ship |
| `.tabbar` · DES-MOB-TABBAR | `LinmTabBar` | `shell-tabs` · **ẩn guest** · staff `tabLabel` **13** · Tuần đường `LinmMapPinGlyph` · **cấm** fill Place / `location.fill` |
| toast | `LinmToast` | sibling nhãn · signal **Đã làm mới** · notify **Thông báo** + local UN |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.
