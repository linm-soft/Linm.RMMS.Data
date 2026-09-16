# UX analy — incident-list

**Sources:** prototype/ios · prototype/android · ui/design.md · control-hint + real-data (hash skip) · PO  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Trang Chủ: #sc-home (reuse · tile Vấn đề)
- Tuần đường: sibling / placeholder
- Vấn đề: push #sc-incident-list DES-MOB-INC-LIST   ← this pack
- Công việc / Tôi: reuse sibling
#sc-incident-list
  → Back = pop home
  → Segment Danh sách (on) / Bản đồ → stay / go('gis-map')
  → Lọc = toast «Lọc tuyến · loại · trạng thái» (không sheet)
  → Search = client filter (không API P1)
  → Banner «Nhận diện mặt đường» = toast P1 / go('vis-capture') khi ship
  → Card / #i-list = toast P1 / go('incident-detail') pass Id
  → #i-briefcase = go('mnt-list') reuse
  → #i-chat = toast «Trao đổi sự cố»
  → #i-mappin = go('gis-map')
  → FAB #i-plus = startIncidentPick() → incident-create
  → không child form / filter sheet
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.  
In-screen trên list: **segment-2** Danh sách | Bản đồ (`GAP-TAB-01` · **cấm** invent tab thứ 6).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-INC-LIST `#sc-incident-list` | Quản lý vấn đề | nav-bar + text «Lọc» | top-bar + icon `#i-list` | segment · search · banner · 2 cards · FAB |
| DES-MOB-INC-BANNER | Nhận diện mặt đường | vn-banner + chevron | same + chevron | toast / vis-capture |
| DES-MOB-INC-CARD | Incident card | rich-card · thumb · status · actions | same copy | toast / nav siblings |
| DES-MOB-TABBAR | Tab 5 | tab Vấn đề on | same | shell |

## 3. Zone

### DES-MOB-INC-LIST

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md` + `ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|---------------------------------------------------------------------|---------|---------|
| Header | Back chevron · title · Lọc | A top bar | `LinmTopBar` | `LinmTopBar` |
| Segment | Danh sách / Bản đồ · label **13** | A `.seg` | `LinmSegment` | same |
| Search | Tìm kiếm vấn đề… · `#i-search` | B `.search` / `#i-search` | `LinmSearchField` · `LinmSearchGlyph` | same |
| Banner | Nhận diện mặt đường · phụ · `#i-camera` | A `.vn-banner` | banner / `LinmListRow` | same |
| Cards | 2 rich-card title/lines/thumb/status/actions | A `.rich-card` | rich card / `LinmListRow` | same |
| Status | warn / ok bar text **1 dòng** prefix+label | A `.rc-status` | status bar text · full width dưới meta+thumb · **cấm** `LinmBadge` | same |
| Actions | chat · briefcase · list · mappin **dàn đều** | icon 44 · flex 1 | `LinmIconButton` equal width | same |
| FAB | plus · Ghi sự cố | A `.fab` | `LinmFAB` | same |
| Tab | 5 · Vấn đề selected · label **13** | A `.tabbar` | `LinmTabBar` | same |
| Feedback | toast nhãn | toast | `LinmToast` | `LinmToast` |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET `incident/incidents` · bind live cards |
| empty live + no demo gate | optional `EmptyChrome` · list vẫn mở |
| loading | nhẹ · **cấm** full-screen block tab |
| error / offline | demo SSOT **2** cards · optional toast · **cấm** native alert |
| permission | GPS/camera **N/A** trên list (sibling create / vis-capture / map) |
| leave dirty | **N/A** (search ≠ form dirty) |

## 4. Copy SSOT

Quản lý vấn đề · Lọc · Danh sách · Bản đồ · Tìm kiếm vấn đề… · Nhận diện mặt đường · Chụp + định vị → gắn sự cố · Nứt mặt đường · Sự cố nhanh · SC-2401 · QL.1 Km 1556+080 · Xuân Hải · Nguyễn Văn A · Tổ tuần đường VP-IV.1 · 2026-08-10 08:12:40 · Trạng thái: Đợi phân công giám sát · Cống tắc · Hệ thống an toàn · SC-2398 · HCM · Km 12+400 · Trần Khánh · Chi cục II.2 · 2026-08-09 14:40:13 · Trạng thái: Đang được giám sát · Trao đổi sự cố · Lọc tuyến · loại · trạng thái · Chi tiết vấn đề · Ghi sự cố · Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi

**Cấm trên máy:** «Có mạng» · device label «iPhone» / «· Android» · «Phiên bản Gói N» / foot Gói · «gen realapp» · filter sheet copy · create/detail form fields · invent PlaceName/OrgName.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab indicator.

## 6. Signal

**N/A** trên `#sc-incident-list` (signal trên hub `home`). **Cấm** «Có mạng» · **cấm** tap-cycle trên list.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron-left | `chevron.left` | `ArrowBack` |
| Filter (Android) | list | `list.bullet` | `List` |
| Search | search | `magnifyingglass` | `Search` |
| Banner | camera | `camera` | `PhotoCamera` |
| Type | warning | `exclamationmark.triangle` | `Warning` |
| Loc / map act | mappin | `mappin` | `Place` |
| Person | person | `person` | `Person` |
| Chat | chat | `bubble.left` | `Chat` |
| Assign | briefcase | `briefcase` | `Work` |
| Detail | list | `list.bullet` | `List` |
| FAB | plus | `plus` | `Add` |
| Tab Vấn đề | warning motif | `exclamationmark.triangle` | `Report` |

`#i-*` dual cùng `d=` (`/convert-web-icon-to-mobile`).

## 8. Motion

Không `/wf-anim` trên list `incident-list`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-INC-LIST-PLACE-01 | Demo «Xuân Hải» · không PlaceName DTO | Bind RouteName+KmStart · place fallback AssetLabel/Description · demo copy OK · **cấm** invent |
| GAP-MOB-INC-LIST-ORG-01 | Demo org trong person line | ReporterName(+Assignee) · org trong tên hoặc omit |
| GAP-MOB-INC-LIST-THUMB-01 | Thumb media | **DEFER** P1 · empty placeholder OK |
| GAP-MOB-ACT-01/02 | Gộp create/detail/map/sheet | **Cấm** · toast/nav sibling only |
| GAP-MOB-ACT-05 | Kit đã map | reuse · **cấm** raw List / TabView / M3 NavBar |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng copy + 2 cards + banner + segment · HIG text Lọc vs Material icon OK |
| GAP-TAB-01 | Tab index | shell `incident` entry · in-screen **segment-2** |
| GAP-TYP-01 | Type | tab/segment/label **13** · search/card **≥16** |
| GAP-DES-DEMO-RESCAN-01 | Hash skip | **Cấm** re-scan · dùng control-hint + real-data |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp design.md · **không** foot Gói |
| GAP-MOB-EDIT-STATUS-01 | Live status lệch + badge trùng prefix | Status = **1** text `Trạng thái: {label}` full width dưới `.rc-main` · **cấm** `LinmBadge` · **cấm** nhét bar vào cột meta cạnh thumb |
| GAP-MOB-EDIT-ACT-01 | 4 nút action dồn trái | `.rc-actions` **flex:1** / `weight(1)` dàn đều full card · tap 44 · **cấm** `Spacer` đẩy trái |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-list-20260829 |
| taskId | `task_6800d075` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
