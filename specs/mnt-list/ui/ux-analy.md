# UX analy — mnt-list

**Sources:** prototype/ios · prototype/android · ui/design.md · control-hint + real-data (hash skip) · PO  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Trang Chủ: #sc-home (reuse · tile Công việc)
- Tuần đường / Vấn đề: sibling / placeholder
- Công việc: push #sc-mnt-list DES-MOB-MNT-LIST   ← this pack
- Tôi: #sc-me (reuse)
#sc-mnt-list
  → Back = pop home
  → Lọc = toast «Bộ lọc · tuyến đường» (không sheet)
  → Search = client filter (không API P1)
  → Hub «Giao việc xử lý» / card #i-sum = toast P1 (sibling estimate pending_confirm)
  → #i-chat / #i-sync / #i-list = toast P1 (siblings pending_confirm)
  → không child form / segment
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.  
In-screen tabs trên list: **none** (`GAP-TAB-01`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-MNT-LIST `#sc-mnt-list` | Danh sách công việc | nav-bar + text «Lọc» | top-bar + icon `#i-list` | search · hub · 2 cards |
| DES-MOB-MNT-HUB | Giao việc xử lý | list row + chevron | list row (no chevron OK) | toast **Giao việc xử lý** |
| DES-MOB-MNT-CARD | WO card | rich-card · status · actions | same copy | toast sibling icons |
| DES-MOB-TABBAR | Tab 5 | tab Công việc on | same | shell |

## 3. Zone

### DES-MOB-MNT-LIST

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|----------------------------------------|---------|---------|
| Header | Back chevron · title · Lọc | A top bar | `LinmTopBar` | `LinmTopBar` |
| Search | Tìm kiếm công việc… · `#i-search` | B `.search` / `#i-search` | `LinmSearchField` · `LinmSearchGlyph` | same |
| Hub | Giao việc xử lý · phụ · `#i-sum` green | A `.row` / `.row-icon` | `LinmListRow` `leading:` | same |
| Cards | 2 rich-card title/lines/status/actions | A `.rich-card` | rich card / `LinmListRow` | same |
| Status | warn / ok bar text **1 dòng** prefix+label | A `.rc-status` | status bar text · **cấm** `LinmBadge` | same |
| Actions | chat · sync · sum · list(done) **dàn đều** | icon 44 · flex 1 | `LinmIconButton` equal width | same |
| Tab | 5 · Công việc selected · label **13** | A `.tabbar` | `LinmTabBar` | same |
| Feedback | toast nhãn | toast | `LinmToast` | `LinmToast` |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET `maintenance/work-orders` · bind live cards |
| empty live + no demo gate | optional `EmptyChrome` · list vẫn mở |
| loading | nhẹ · **cấm** full-screen block tab |
| error / offline | demo SSOT **2** cards · optional toast · **cấm** native alert |
| permission | GPS/camera **N/A** trên list |
| leave dirty | **N/A** (search ≠ form dirty) |

## 4. Copy SSOT

Danh sách công việc · Lọc · Tìm kiếm công việc… · Giao việc xử lý · Khối lượng · thời hạn · giao việc · Vá mặt đường · Hạt trưởng VP-IV.1 giao việc cho Nguyễn Văn A · Tổ tuần đường · 2026-08-10 08:30 — 2026-08-12 17:00 · Từ sự cố SC-2401 · QL.1 Km 1556+080 · Tình trạng xử lý: Chờ xử lý · Nạo cống · Hạt trưởng giao việc cho Trần Khánh · Chi cục II.2 · 2026-08-09 07:00 — 2026-08-09 16:00 · Tuyến HCM · Tình trạng xử lý: Đã hoàn thành · Trao đổi công việc · Cập nhật trạng thái · ảnh + định vị · Nhật ký xử lý · Bộ lọc · tuyến đường · Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi

**Cấm trên máy:** «Có mạng» · device label «iPhone» / «· Android» · «Phiên bản Gói N» / foot Gói · «gen realapp» · filter sheet copy · estimate form fields.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab indicator.

## 6. Signal

**N/A** trên `#sc-mnt-list` (signal trên hub `home`). **Cấm** «Có mạng» · **cấm** tap-cycle trên list.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron-left | `chevron.left` | `ArrowBack` |
| Filter (Android) | list | `list.bullet` | `List` |
| Search | search | `magnifyingglass` | `Search` |
| Hub / estimate | sum | `sum` / sigma motif | `Functions` / custom stroke |
| Chat | chat | `bubble.left` | `Chat` |
| Progress | sync | `arrow.triangle.2.circlepath` | `Sync` |
| Log | list | `list.bullet` | `List` |
| Tab Công việc | wrench | `wrench.fill` | `Build` |

`#i-*` dual cùng `d=` (`/convert-web-icon-to-mobile`).

## 8. Motion

Không `/wf-anim` trên list `mnt-list`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-MNT-DEMO-01 | Android 1 card · copy lệch | **PASS closed** — dual pack + mobile-p1 Android = **2** cards + iOS copy |
| GAP-F-MNT-MOB-01 | AssignerName thiếu DTO | Bind TeamName+AssigneeName · demo copy fallback · **cấm** invent |
| GAP-MOB-ACT-01/02 | Gộp estimate/chat | **Cấm** · toast P1 only trên slug |
| GAP-MOB-ACT-05 | Kit đã map | reuse · **cấm** raw List / TabView / M3 NavBar |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy + 2 cards + hub · HIG text Lọc vs Material icon OK |
| GAP-TAB-01 | Tab index | shell `work` entry · in-screen **none** |
| GAP-TYP-01 | Type | tab/label **13** · search/card **≥16** |
| GAP-DES-DEMO-RESCAN-01 | Hash skip | **Cấm** re-scan · dùng control-hint + real-data |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp design.md · **không** foot Gói |
| GAP-MOB-EDIT-STATUS-01 | Live status + badge trùng prefix | Status = **1** text `Tình trạng xử lý: {label}` · **cấm** `LinmBadge` cạnh prefix · cùng lock `incident-list` |
| GAP-MOB-EDIT-ACT-01 | Nút action dồn trái | `.rc-actions` **flex:1** / `weight(1)` dàn đều full card · tap 44 · **cấm** `Spacer` đẩy trái |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-list-20260828 |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
