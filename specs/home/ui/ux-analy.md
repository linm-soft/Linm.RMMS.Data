# UX analy — home

**Sources:** prototype/ios · prototype/android · ui/design.md · mobile-p1 `#sc-home`  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · sky `#2A9AD4` · success `#3CB448` · warn `#FCB43C` · danger `#F03C30` · surface `#F2F2F7`

## 1. IA

```
Cold start → #sc-home guest · **ẩn tab 5**
- .who = Khách · FAQ mid · dock bottom: btn-home-login + btn-home-privacy
- Overlay #sc-faq / #sc-privacy · **Về Trang Chủ** dismiss về guest Home
- Overlay login · back về guest Home
- Staff: .who live · ẩn login/FAQ/privacy · hiện LinmTabBar + quick + grid + wallet
- Tile staff khi guest → toast needLogin + overlay
- Hồ sơ guest → overlay login · staff → tab Tôi
- Thông báo / tín hiệu = toast (signal guest không GET profile)
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-HOME `#sc-home` | Trang Chủ | Hero flush · **guest ẩn tab** · staff tab Trang Chủ | Hero flush · **guest ẩn tab** · staff tab Trang Chủ | quick + grid + wallet |
| DES-MOB-HOME-HELLO | Hero | tools 44 · capsule · who | same | |
| DES-MOB-HOME-QUICK | Quick 2 | 2 ô title+phụ | same | toast sibling |
| DES-MOB-HOME-GRID | Grid 3×2 | 6 tile icon+nhãn | same | toast sibling |
| DES-MOB-HOME-WALLET | Ví | gradient card | same | toast **Tài sản** |
| DES-MOB-HOME-FAQ `#sc-faq` | Câu hỏi thường gặp | overlay · capsule search | same · **cấm** M3 `TextField` | pills + `#f-faq-search` + list |
| DES-MOB-TABBAR | Tab 5 | `LinmTabBar` | `LinmTabBar` | |

## 3. Zone

### DES-MOB-HOME

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|----------------------------------------|---------|---------|
| Hero tools | Hồ sơ · chuông → `#sc-ops` | A `.vn-hero-tools` · `.hero-ico` | `LinmHeroTools` · `LinmNotifyButton` | same |
| Status | Role demo + cột sóng + hạng | A `.role` + `data-net-signal` | `LinmStatusCapsule` · area **ẩn live** | same |
| Who | Tên phiên | A `.who` | Text / title style hero | same |
| Guest FAQ | Hỗ trợ người dân + FAQ row | A `#section-guest` · `#btn-home-faq` | FAQ card mid | same |
| FAQ overlay search | Capsule `card` · placeholder **Tìm kiếm câu hỏi** · trailing search | A `.faq-search` · `#f-faq-search` | `TextField` + `LinmSearchGlyph` · `fieldText` · `controlHeight` | `BasicTextField` + `LinmSearchGlyph` · **cấm** M3 `TextField` (56 min / extra alpha) |
| Guest brand | Logo RMMS giữa khoảng trống | A `.guest-mid` · `#home-brand` | `AppLogo` `brandLogoSm` | `app_logo` |
| Guest dock | Đăng nhập + privacy pin đáy | A `.guest-dock` · `#btn-home-login` · `#btn-home-privacy` | VStack bottom | Column + Spacer |
| Quick | Điểm tuần · Ghi sự cố + phụ | A `.vn-quick` | `LinmQuickActions` · `LinmQuickItem` | same |
| Section | Nghiệp vụ thường dùng | A `.section-label` | `LinmSectionLabel` | same |
| Grid | 6 ô màu + pict | A `.home-grid` / `.home-tile` | `LinmHomeGrid` · `LinmHomeTile` | same |
| Wallet | HỒ SƠ TÀI SẢN · QL.1 · Khu IV · 32 loại… | A `.wallet-card` | `LinmWalletCard` | same |
| Foot | Phiên bản Gói… | — | **skip** · **cấm** Text | **skip** |
| Tab | 5 tab **staff only** · label **13** · Tuần đường `#i-mappin` | A `.tabbar` | `LinmTabBar` `LinmMapPinGlyph` · **ẩn guest** | same |
| Feedback | toast nhãn | toast | `LinmToast` | `LinmToast` |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET profile (staff) **chỉ khi `.who` / `lastDisplayName` trống** · back Home = cache · GET `notification/overview` guest+staff · `.who` · badge live 0 ẩn |
| empty name | fallback login `user.fullName` / JWT `full_name` / `lastUserName` / «Tài khoản» · hub vẫn mở |
| loading | staff GET `auth/profile` **lần đầu** · `.who` empty = bone pulse `home-who-skeleton` (`brandLogo`×`heroWho` · `onPrimary` × `overlayScrim`) · **cấm** flash Khách · **cấm** `LinmBusyOverlay` / full-screen block hub · back Home / refresh khi đã có tên: giữ `.who` từ cache (không bone · **cấm** GET lại) |
| error / offline | toast in-app · `.who` = `lastUserName` · **cấm** block tab |
| permission | GPS/camera **N/A** trên hub |
| leave dirty | **N/A** (không form) |

## 4. Copy SSOT

Trang Chủ · Hồ sơ · Thông báo · Điểm tuần · Ghim định vị · lý trình · Ghi sự cố · Chọn tài sản · mẫu sự cố · Nghiệp vụ thường dùng · Giám sát · Tuần đường · Công việc · Vấn đề · Tài sản · Lưu trữ · HỒ SƠ TÀI SẢN · QL.1 · Khu IV · 32 loại KCHT · thông số + checklist sự cố · Tốt / Trung bình / Yếu · Đã làm mới · (toast sibling đúng nhãn control)

**Copy `#sc-privacy` (2026-09-21):** `home.privacy.body` user-facing - Khách (FAQ + thông báo chung, không GPS/cam lúc mở) - đăng nhập tùy chọn nếu đã có tài khoản - quyền vị trí/camera/thông báo khi dùng tính năng - không bán/quảng cáo - liên hệ pháp nhân Miền Trung + SĐT. **Cấm** copy «dành cho cán bộ / một đơn vị» trên guest Home (Guideline 3.2). **Cấm** ghi chú nội bộ landing HTTPS / Store URL. GAP-MOB-MESET-PRIVACY-01 Store HTTPS **vẫn** chờ khách giao - **không** invent URL in-app.

**Cấm trên máy:** «Có mạng» · «Hiện trường · iPhone» · «· Android» title · «Phiên bản Gói N» / foot Gói · badge hardcode `3` · device label · proto tap-cycle tín hiệu · «gen realapp» · «URL Privacy / Support Store sẽ gắn khi khách giao landing HTTPS».

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · sky `#2A9AD4` · success `#3CB448` · warn `#FCB43C` · danger `#F03C30` · surface `#F2F2F7`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab indicator.

## 6. Signal

4 cột sóng + hạng **Tốt / Trung bình / Yếu** — bind `NWPathMonitor` / Connectivity · **cấm** wifi glyph trên mark · **cấm** boolean «Có mạng» · **cấm** tap cycle proto. Tap = toast **Đã làm mới** + refresh profile. Role «Khu QLĐB IV» **ẩn live** (không field org trên DTO).

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Tab Trang Chủ | house | `house.fill` | `Home` |
| Tab Tuần đường | mappin | `mappin.and.ellipse` | `Place` |
| Tab Vấn đề | warning | `exclamationmark.triangle` | `Warning` |
| Tab Công việc | wrench | `wrench.fill` | `Build` |
| Tab Tôi | person | `person.fill` | `Person` |
| Hồ sơ | person | `person` | `AccountCircle` |
| Thông báo | bell | `bell` | `Notifications` |
| Giám sát | list | `list.bullet` | `List` |
| Tuần đường tile | mappin | `mappin` | `Place` |
| Công việc tile | wrench | `wrench` | `Build` |
| Vấn đề tile | warning | `exclamationmark.triangle` | `Warning` |
| Tài sản | cube | `cube` | `ViewInAr` |
| Lưu trữ | sync | `arrow.triangle.2.circlepath` | `Sync` |

Tile bg hex: Giám sát/Vấn đề `#FCB43C` · Tuần đường `#F03C30` · Công việc `#3CB448` · Tài sản `#0C84C0` · Lưu trữ `#086A9A`.

## 8. Motion

Không `/wf-anim` trên hub `home`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-F-HOME-01 | Role + wallet không API | Role **ẩn live** · wallet **static demo** 3 dòng · **cấm** invent |
| GAP-F-HOME-02 | Badge `3` trên mobile-p1 | **supersede** `GAP-MOB-EDIT-GUEST-OPS` · live overview · **cấm** hardcode `3` |
| GAP-MOB-EDIT-NOTIFY | iOS notify push Ops · không lưu banner | **PASS** Home bell → `#sc-ops` cùng Tôi · guest GET inbox/overview **AllowAnonymous** · mark-read **staff only** |
| GAP-F-HOME-03 | `.home-foot` Gói | **Cấm** ship · skip zone |
| GAP-MOB-SIGNAL-01/02 | Proto tap-cycle | OS path + toast **Đã làm mới** · **cấm** cycle |
| GAP-MOB-ACT-05 | Kit home đã map | reuse · **cấm** raw grid / TabView |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy + 6 tile + 2 quick + wallet · `LinmTabBar` dual |
| GAP-MOB-ALIGN-01d | Tab chữ + icon Tuần đường | `tabLabel` **13** · `LinmMapPinGlyph` `#i-mappin` · **cấm** fill |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto **không** foot · **không** badge 3 · khớp design.md |
| GAP-MOB-EDIT-GUEST-TAB | Guest hiện tab 5 + login trong hero | **PASS** ẩn `LinmTabBar` guest · pin `btn-home-login` + `btn-home-privacy` đáy · staff hiện tab · **cấm** revert |
| GAP-MOB-EDIT-GUEST-OPS | Chuông Home toast-only · cấm inbox guest | **PASS** `#sc-ops` reuse · GET inbox/overview **không JWT** · **cấm** revert |
| GAP-MOB-EDIT-GUEST-BRAND | Logo hero nhỏ · back `#sc-ops` hiện tab guest | **PASS** `home-brand` giữa page · guest `#sc-ops` fullScreenCover · ẩn tab khi ops · back **không** hiện `LinmTabBar` · **cấm** revert |
| GAP-MOB-EDIT-PRIVACY-COPY | Body privacy ghi chú nội bộ Store/landing | **PASS** `home.privacy.body` user-facing khớp app (Khách · cán bộ · quyền · liên hệ) · **cấm** invent HTTPS · **cấm** revert placeholder |
| GAP-MOB-EDIT-HOME-WHO-SKEL | Staff `.who` flash **Khách** lúc GET profile | **PASS** bone pulse dual · hub không block · **cấm** revert |
| GAP-MOB-EDIT-HOME-WHO-CACHE | Back Home reload GET `auth/profile` mỗi lần | **PASS** `.who` từ `lastDisplayName` / in-memory · GET **chỉ** lần đầu (cache trống) hoặc tap tín hiệu · **cấm** revert |
| GAP-MOB-EDIT-FAQ-SEARCH | Android `#f-faq-search` M3 `TextField` clip 44 · placeholder extra alpha · Material Search | **PASS** capsule `card` dual · `BasicTextField` / iOS `TextField` · `fieldText` 16 · `LinmSearchGlyph` trailing · placeholder `muted` · **cấm** M3 `TextField` / SF `magnifyingglass` · **cấm** revert |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.19.07 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T05:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.19.07 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
