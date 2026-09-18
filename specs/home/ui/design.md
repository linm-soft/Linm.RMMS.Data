# Design — home (mobile hub)

| Field | Value |
|-------|-------|
| feature | `home` |
| title | [Design] [Mobile] Trang Chủ |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_41cb12f0`) |
| packKind | **`hub`** (PO confirm) |
| changeScope | `new_page` |
| kit_missing_confirm | **N/A** — reuse map home kit dual (`LinmHeroTools` · `LinmQuickActions` · `LinmHomeGrid` · `LinmWalletCard` …) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/home/ui/prototype/ios/index.html#sc-home` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/home/ui/prototype/android/index.html#sc-home` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| updatedAt | `2026-09-16T08:33:00.000Z` |
| taskId | `task_41cb12f0` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/home.md` |
| DEM-P1 | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-home` |
| DEM | `specs/home/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/home-control-hint.md` · `home-bff-endpoints.md` · `home-action-tree.md` |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std`.

## 1. Pattern

| Surface | Tab 5 **staff** · guest **ẩn** `LinmTabBar` · hero + FAQ · logo giữa page · **Đăng nhập + privacy pin bottom** · staff quick 2 · grid 3×2 · wallet · **không** Modal/Sheet |
| Action this slug | Display `.who` · tap chrome/tiles theo PO §3 (toast sibling / Hồ sơ → tab Tôi) |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | `GET auth/profile` · wallet reuse `GET` road-routes search + asset-types count (cùng AssetHub · **cấm** invent `api/v1/home`) |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-HOME` `#sc-home` | Trang Chủ | hero · quick · grid · wallet |
| `DES-MOB-HOME-HELLO` | Hero chào | tools + signal + who · login **không** trong hero (guest dock) / quick staff |
| `DES-MOB-HOME-FAQ` `#sc-faq` | Câu hỏi thường gặp | back · pills · search · list chevron · expand answer · static |
| `DES-MOB-HOME-PRIVACY` `#sc-privacy` | Chính sách quyền riêng tư | back · body static user-facing (Khách · cán bộ · quyền · liên hệ) · `fieldText` · **cấm** invent HTTPS |
| `DES-MOB-HOME-GUEST-DOCK` | Guest bottom | `btn-home-login` + `btn-home-privacy` pin đáy · **cấm** tab |
| `DES-MOB-HOME-QUICK` | Quick 2 | Điểm tuần · Ghi sự cố |
| `DES-MOB-HOME-GRID` | Lưới 6 | Giám sát · Tuần đường · Công việc · Vấn đề · Tài sản · Lưu trữ |
| `DES-MOB-HOME-WALLET` | Ví tuyến | static demo → sibling `asset-hub` |
| `DES-MOB-TABBAR` | Tab 5 | chrome `shell-tabs` · `LinmTabBar` dual · **ẩn guest** · staff label **`tabLabel` 13** · Tuần đường **`LinmMapPinGlyph`** `#i-mappin` · **cấm** `TabView` / fill Place / `location.fill` |

### IA lock

```
Cold start → #sc-home guest (Khách + FAQ) · **ẩn** DES-MOB-TABBAR
  Guest body: FAQ mid · dock bottom = Đăng nhập + Chính sách quyền riêng tư
  btn-home-faq → #sc-faq · btn-home-privacy → #sc-privacy · back về guest Home
  Đăng nhập tách → overlay login (slug login)
  Staff → .who live · ẩn login/FAQ/privacy · hiện tab 5 + quick + grid + wallet
  Tile khi guest → toast needLogin + overlay (tab staff **không** hiện)
  Tôi / Tuần đường / … ← sibling · staff only
```

**Cấm** invent tab · «Có mạng» · watermark Gói · device label «iPhone»/«Android» trên title · badge hardcode `3`.

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| profileBtn | Hồ sơ | `LinmProfileButton` trong `LinmHeroTools` | `person` ↔ `Person` / `AccountCircle` | tap → tab **Tôi** |
| notifyBtn | Thông báo | `LinmNotifyButton` · `LinmNotifyCountBadge` | `bell` ↔ `Notifications` | tap → **cùng** `#sc-ops` (Tôi → Thông báo) · GET `notification/overview` badge · guest **không** JWT · **cấm** toast-only · **cấm** hardcode `3` |
| brandLogo | RMMS | `AppLogo` / `app_logo` | — | giữa khoảng trống guest (FAQ ↔ dock) · `home-brand` · `brandLogoSm` 96 · **cấm** hero · **cấm** kit bump |
| roleLine | Khu QLĐB IV | `LinmStatusCapsule` `area` | — | **ẩn live** (GAP-F-HOME-01) · demo SSOT only |
| signal | Tín hiệu | `LinmStatusCapsule` / `LinmNetSignalMark` | bars only | Tốt/TB/Yếu · OS path · tap toast **Đã làm mới** · **cấm** cycle |
| who | Khách / FullName | typography hero | — | guest copy · staff GET profile · loading `.who` empty = bone pulse `home-who-skeleton` (`brandLogo`×`heroWho`) · **cấm** flash Khách · **cấm** `LinmBusyOverlay` hub · **cấm** hardcode production |
| loginBtn | Đăng nhập | Button card | — | `btn-home-login` · phụ Dành cho cán bộ · **pin bottom** guest · ẩn staff |
| guestFaq | Câu hỏi thường gặp | row card | chevron | `btn-home-faq` · guest only · overlay `#sc-faq` |
| faqSearch | Tìm kiếm câu hỏi | capsule `card` + `LinmSearchGlyph` | **cấm** M3 `TextField` / SF `magnifyingglass` | `#f-faq-search` · height `controlHeight` 44 · pad 14 · `fieldText` 16 · placeholder `muted` (no extra alpha) · trailing `#i-search` glyph · IME Search · **GAP-MOB-EDIT-FAQ-SEARCH** |
| guestPrivacy | Chính sách quyền riêng tư | underline link | — | `btn-home-privacy` · guest only · **pin bottom dưới login** · overlay `#sc-privacy` · body `home.privacy.body` user-facing · **cấm** invent HTTPS |
| quickPatrol | Điểm tuần | `LinmQuickItem` | `mappin` ↔ `Place` | phụ **Ghim định vị · lý trình** · toast |
| quickIncident | Ghi sự cố | `LinmQuickItem` | `exclamationmark.triangle` ↔ `Warning` | phụ **Chọn tài sản · mẫu sự cố** · toast |
| sectionBiz | Nghiệp vụ thường dùng | `LinmSectionLabel` | — | không route |
| tileSupervise | Giám sát | `LinmHomeTile` bg `#FCB43C` | `list.bullet` ↔ `List` | toast |
| tilePatrol | Tuần đường | `LinmHomeTile` bg `#F03C30` | `mappin` ↔ `Place` | toast |
| tileMnt | Công việc | `LinmHomeTile` bg `#3CB448` | `wrench` ↔ `Build` | toast |
| tileIncident | Vấn đề | `LinmHomeTile` bg `#FCB43C` | `exclamationmark.triangle` ↔ `Warning` | toast |
| tileAsset | Tài sản | `LinmHomeTile` bg `#0C84C0` | `cube` ↔ `ViewInAr` | toast |
| tileOffline | Lưu trữ | `LinmHomeTile` bg `#086A9A` | `arrow.triangle.2.circlepath` ↔ `Sync` | toast |
| wallet | HỒ SƠ TÀI SẢN | `LinmWalletCard` | — | **live** `walletTitle`/`walletSubtitle` · fail/empty = trống · **cấm** QL.1 / 32 loại cứng |
| foot | Phiên bản Gói… | — | — | **cấm ship** (GAP-F-HOME-03) |
| tabHome | Trang Chủ | `LinmTabBar` | `house` ↔ `Home` | **staff only** · selected · label **13** · **ẩn guest** |
| tabField | Tuần đường | `LinmTabBar` | **`LinmMapPinGlyph`** `#i-mappin` | outline + vòng trong · **cấm** fill |

Toast / banner → `LinmToast`. **Cấm** raw `LazyVGrid` / `LazyVerticalGrid` / `TabView` / M3 `NavigationBar`.

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | hero mid · tab selected · tile Tài sản |
| Deep | `#086A9A` | hero start · wallet · tile Lưu trữ |
| Sky | `#2A9AD4` | hero end |
| Success | `#3CB448` | tile Công việc |
| Warn | `#FCB43C` | tile Giám sát / Vấn đề |
| Danger | `#F03C30` | tile Tuần đường |
| Surface | `#F2F2F7` | nền |

**Cấm** skin đỏ CCCD / Ministry · **cấm** M3 tím indicator.

## 5. Cấm

- WebView HTML · `mfeStdUrl` · `yarn start:std`
- Invent tab / «Có mạng» / foot Gói / badge `3` / `btn-logout` trên `#sc-home`
- Hiện `LinmTabBar` khi guest · trên `#sc-ops` guest · sau back guest (`GAP-MOB-EDIT-GUEST-TAB` · `GAP-MOB-EDIT-GUEST-BRAND`)
- Logo RMMS trong hero — giữa khoảng trống page (`GAP-MOB-EDIT-GUEST-BRAND`)
- `UIAlert` / `AlertDialog` / `window.alert`
- Gộp sibling screens · start `pending_confirm`
- Ship `LinmKitGallery` trên production Trang Chủ
- Flash **Khách** lúc staff GET `auth/profile` · `LinmBusyOverlay` trên hub (`GAP-MOB-EDIT-HOME-WHO-SKEL`) — loading = bone `home-who-skeleton` dual
- `#f-faq-search` M3 `TextField` / SF `magnifyingglass` / Material Search (`GAP-MOB-EDIT-FAQ-SEARCH`) — capsule `BasicTextField` + `LinmSearchGlyph` dual

## 6. Handoff → SA

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa-mobile` |
| BFF | `GET auth/profile` only · Step 4b `/new-endpoint` **N/A** |
| Open Q | GAP-F-HOME-01/02/03 đã chốt PO |
| Chain | roleOnly=design · **không** chain SA turn này |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.19.07 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T05:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed |
| bffContentHash | sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.19.07 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
