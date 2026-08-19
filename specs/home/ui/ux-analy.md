# UX analy — home

**Sources:** prototype/ios · prototype/android · ui/design.md · mobile-p1 `#sc-home`  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · sky `#2A9AD4` · success `#3CB448` · warn `#FCB43C` · danger `#F03C30` · surface `#F2F2F7`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Trang Chủ: #sc-home DES-MOB-HOME          ← this pack
- Tuần đường / Vấn đề / Công việc: sibling / placeholder
- Tôi: #sc-me (reuse=me · đã ship)
#sc-home
  → Hồ sơ = chuyển tab Tôi (không push)
  → Thông báo / quick / tile / wallet (chưa ship) = LinmToast nhãn
  → Tín hiệu = toast «Đã làm mới» + refresh profile (OS path)
  → không child form / sheet
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-HOME `#sc-home` | Trang Chủ | Hero flush · tab Trang Chủ | Hero flush · tab Trang Chủ | quick + grid + wallet |
| DES-MOB-HOME-HELLO | Hero | tools 44 · capsule · who | same | |
| DES-MOB-HOME-QUICK | Quick 2 | 2 ô title+phụ | same | toast sibling |
| DES-MOB-HOME-GRID | Grid 3×2 | 6 tile icon+nhãn | same | toast sibling |
| DES-MOB-HOME-WALLET | Ví | gradient card | same | toast **Tài sản** |
| DES-MOB-TABBAR | Tab 5 | `LinmTabBar` | `LinmTabBar` | |

## 3. Zone

### DES-MOB-HOME

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|----------------------------------------|---------|---------|
| Hero tools | Hồ sơ · Thông báo (badge 0 ẩn) | A `.vn-hero-tools` · `.hero-ico` | `LinmHeroTools` + `LinmProfileButton` + `LinmNotifyButton` | same |
| Status | Role demo + cột sóng + hạng | A `.role` + `data-net-signal` | `LinmStatusCapsule` · area **ẩn live** | same |
| Who | Tên phiên | A `.who` | Text / title style hero | same |
| Quick | Điểm tuần · Ghi sự cố + phụ | A `.vn-quick` | `LinmQuickActions` · `LinmQuickItem` | same |
| Section | Nghiệp vụ thường dùng | A `.section-label` | `LinmSectionLabel` | same |
| Grid | 6 ô màu + pict | A `.home-grid` / `.home-tile` | `LinmHomeGrid` · `LinmHomeTile` | same |
| Wallet | HỒ SƠ TÀI SẢN · QL.1 · Khu IV · 32 loại… | A `.wallet-card` | `LinmWalletCard` | same |
| Foot | Phiên bản Gói… | — | **skip** · **cấm** Text | **skip** |
| Tab | 5 tab · label **13** · Tuần đường `#i-mappin` | A `.tabbar` | `LinmTabBar` `LinmMapPinGlyph` | same |
| Feedback | toast nhãn | toast | `LinmToast` | `LinmToast` |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET profile · `.who` = `fullName` trim · badge ẩn · wallet static |
| empty name | fallback login `user.fullName` / JWT `full_name` / `lastUserName` / «Tài khoản» · hub vẫn mở |
| loading | refresh profile nhẹ · **cấm** full-screen block hub |
| error / offline | toast in-app · `.who` = `lastUserName` · **cấm** block tab |
| permission | GPS/camera **N/A** trên hub |
| leave dirty | **N/A** (không form) |

## 4. Copy SSOT

Trang Chủ · Hồ sơ · Thông báo · Điểm tuần · Ghim định vị · lý trình · Ghi sự cố · Chọn tài sản · mẫu sự cố · Nghiệp vụ thường dùng · Giám sát · Tuần đường · Công việc · Vấn đề · Tài sản · Lưu trữ · HỒ SƠ TÀI SẢN · QL.1 · Khu IV · 32 loại KCHT · thông số + checklist sự cố · Tốt / Trung bình / Yếu · Đã làm mới · (toast sibling đúng nhãn control)

**Cấm trên máy:** «Có mạng» · «Hiện trường · iPhone» · «· Android» title · «Phiên bản Gói N» / foot Gói · badge hardcode `3` · device label · proto tap-cycle tín hiệu · «gen realapp».

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
| GAP-F-HOME-02 | Badge `3` trên mobile-p1 | Hub `notifyCount=0` **ẩn** · **cấm** GET inbox · owner `ops` |
| GAP-F-HOME-03 | `.home-foot` Gói | **Cấm** ship · skip zone |
| GAP-MOB-SIGNAL-01/02 | Proto tap-cycle | OS path + toast **Đã làm mới** · **cấm** cycle |
| GAP-MOB-ACT-05 | Kit home đã map | reuse · **cấm** raw grid / TabView |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy + 6 tile + 2 quick + wallet · `LinmTabBar` dual |
| GAP-MOB-ALIGN-01d | Tab chữ + icon Tuần đường | `tabLabel` **13** · `LinmMapPinGlyph` `#i-mappin` · **cấm** fill |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto **không** foot · **không** badge 3 · khớp design.md |
| Placeholder gallery | iOS/Android hiện gallery | Dev **thay** bằng hub · **cấm** `btn-logout` trên home |

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
