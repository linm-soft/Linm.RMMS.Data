# UX analy — me

**Sources:** prototype/ios · prototype/android · ui/design.md  
**Brand tokens:** primary `#0C84C0` · success `#3CB448` · warn `#FCB43C` · danger `#F03C30` · surface `#F2F2F7`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Trang Chủ: kit gallery + btn-logout (login e2e)
- Tuần đường / Vấn đề / Công việc: placeholder «Đang cập nhật»
- Tôi: #sc-me DES-MOB-ME
    → hàng sibling = toast (không push màn sibling)
    → Đăng xuất = pop Login
```

**Cấm** invent tab. Số tab = 5 · thứ tự demo.

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ME `#sc-me` | Tôi | Large title · tab Tôi | Large title · nav Tôi | rows |
| DES-MOB-TABBAR | Tab 5 | `LinmTabBar` | `LinmTabBar` | |

## 3. Zone

### DES-MOB-ME

| Zone | Demo (user thấy) | Map row | SwiftUI | Compose |
|------|------------------|---------|---------|---------|
| Header | Tôi | A `.large-title` | `LinmLargeTitle` | same |
| Profile | Tên + phụ + (iOS chevron) | A `.list` / `.row` | `LinmListRow` | same |
| Đồng bộ | Hàng đợi · Tín hiệu | A `.section-label` + `.row` | `LinmSectionLabel` + `LinmListRow` | same |
| Signal | cột sóng + hạng | A `data-net-signal` | `LinmNetSignalMark` | same |
| Info | Góp ý · Camera · Thông báo · (iOS Cài đặt) · Đăng xuất | A `.row` | `LinmListRow` | same · **không** Cài đặt |
| Tab | 5 tab | A `.tabbar` | `LinmTabBar` | `LinmTabBar` |

**States:** default = live name · empty name = «Tài khoản» · loading = `LinmBusyOverlay` · error/offline = fallback lastUserName · permission N/A · leave N/A

## 4. Copy SSOT

Tôi · Hàng đợi mất sóng · `{n} chờ đồng bộ` · Tín hiệu · Tốt/Trung bình/Yếu · Góp ý · Phản ánh tính năng phần mềm · Camera xem · Thông báo · Cài đặt · Đăng xuất · Đã đăng xuất · Đã làm mới · Đang cập nhật

**Cấm trên máy:** «Có mạng» · «Hiện trường · iPhone» · «bản Gói N» · «· iPhone» / «· Android» title.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · danger `#F03C30` · **cấm** skin đỏ CCCD · **cấm** M3 tím indicator.

## 6. Signal

4 cột + Tốt / Trung bình / Yếu — bind OS path · **cấm** wifi glyph trên mark · **cấm** boolean online · **cấm** tap cycle proto. iOS tap = toast **Đã làm mới** (demo). Android display-only.

## 7. Pictogram

Tab: house / mappin / warning / wrench / person. Rows: person · sync (Android) · cột sóng · info · video · bell · gear (iOS). SF ↔ Material cùng ý.

## 8. Motion

Không `/wf-anim`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-UX-04 | iOS Cài đặt · Android thiếu | Giữ platform · không invent Android settings |
| GAP-MOB-UX-04b | iOS chevron profile · Android không | Chrome platform |
| GAP-F-ME-01 | Mock «Nguyễn Văn A» | Live `fullName` · subtitle ẩn |
| kit | `LinmListRow` thiếu tap | implement_kit dual |
| GAP-MOB-ALIGN-01 | iOS `TabView` floating ≠ Android `NavigationBar` | **PASS** `LinmTabBar` dual · token 64×32 · label 10 · flush + safe area |
| GAP-MOB-ALIGN-01b | `LinmTopBar` Android chữ ▦/⋯ + icon dính đỉnh ≠ iOS SF | **PASS** vector 22 / tap 44 căn giữa dual |
| GAP-MOB-ALIGN-01c | Tab label iOS scale 0.8 + proto Android 11 ≠ token **10** · iOS `mappin` ≠ Place | **PASS** `tabLabel` 10 dual · SF `location.fill` ≡ Place |

## Version meta

skillId=mobile-ui-ux-analy · skillVersion=2026.08.19.07 · workflowVersion=2026.08.19.19 · generatedAt=2026-08-19T02:20:00.000Z
