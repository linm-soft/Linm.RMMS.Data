# HTML → native map — home

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-home`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.vn-hero-tools` | `LinmHeroTools` | Profile trái · Notify phải · tap 44 |
| `.hero-ico` person | `LinmProfileButton` | `reuse=me` · tab Tôi |
| `.hero-ico` bell | `LinmNotifyButton` · `LinmNotifyCountBadge` | badge **0 ẩn** · **cấm** hardcode `3` |
| `.role` + `data-net-signal` | `LinmStatusCapsule` · `LinmNetSignalMark` | role **ẩn live** · 4 cột · Tốt/TB/Yếu · **cấm** wifi glyph · **cấm** «Có mạng» |
| `.who` | typography hero | GET `auth/profile` `fullName` |
| `.vn-quick` / quick buttons | `LinmQuickActions` · `LinmQuickItem` | 2 ô title + phụ |
| `.section-label` | `LinmSectionLabel` | Nghiệp vụ thường dùng |
| `.home-grid` · DES-MOB-HOME-GRID | `LinmHomeGrid` | 3 cột · **cấm** raw `LazyVGrid` / `LazyVerticalGrid` |
| `.home-tile` | `LinmHomeTile` | icon + `iconColor`/`background` hex · nhãn VN |
| `.wallet-card` · DES-MOB-HOME-WALLET | `LinmWalletCard` | static demo copy · sibling `asset-hub` |
| `.home-foot` | — | **skip** · watermark Gói · **cấm** ship |
| `.tabbar` · DES-MOB-TABBAR | `LinmTabBar` | `shell-tabs` · `tabLabel` **10** · Tuần đường `location.fill` ≡ `Place` · **cấm** `TabView` / M3 `NavigationBar` / proto 11 |
| toast | `LinmToast` | sibling nhãn · signal **Đã làm mới** |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.
