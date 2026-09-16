# UX analy — incident-detail

**Sources:** prototype/ios · prototype/android · ui/design.md · control-hint + real-data (hash skip) · PO  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Trang Chủ / Tuần đường / Công việc / Tôi: reuse sibling
- Vấn đề: list → push #sc-incident-detail DES-MOB-INC-DETAIL   ← this pack
  (entry cũng từ create toast pass Id)
#sc-incident-detail
  → Back = go('incident-list')
  → Giao việc xử lý = go('estimate') / toast P1
  → Xem trên bản đồ = go('gis-map')
  → Đóng sự cố = POST close · toast «Đã đóng sự cố»
  → 404 = EmptyChrome · back list
  → không child form / sheet / segment
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.  
Surface: `tabs: none` · shell tab `incident` giữ (`GAP-TAB-01`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-INC-DETAIL `#sc-incident-detail` | Chi tiết / Chi tiết sự cố | nav-bar · back text «Vấn đề» | top-bar · icon-only back | Giao việc · Bản đồ · Đóng |
| DES-MOB-TABBAR | Tab 5 | tab Vấn đề on | same | shell |

## 3. Zone

### DES-MOB-INC-DETAIL

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md` + `ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|---------------------------------------------------------------------|---------|---------|
| Header | Back · title Chi tiết / Chi tiết sự cố | A `.nav-bar` / `.top-bar` | `LinmTopBar` | `LinmTopBar` |
| Hero | Mã caption 13 · Code 28/24 · badge | A hero + `.badge` | Text + `LinmBadge` | same |
| Rows | Loại · Vị trí · Định vị · Nguồn | A `.card-group` `.row` | `LinmListRow` | same |
| CTA | Primary + 2 secondary | A `.btn-primary` / `.btn-secondary` | `LinmPrimaryButton` · `LinmSecondaryButton` | same |
| Tab | 5 · Vấn đề selected · label **13** | A `.tab` | `LinmTabBar` | same |
| Feedback | toast Đã đóng sự cố | toast | `LinmToast` | `LinmToast` |
| Empty | 404 | empty | `LinmEmptyChrome` | same |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET `incident/incidents/{id}` · bind hero + rows |
| empty 404 | `LinmEmptyChrome` · back list · **cấm** alert |
| loading | nhẹ · **cấm** full-screen block tab |
| error / offline | demo SSOT SC-2401 · optional toast · Close cần online |
| permission | GPS edit **N/A** — định vị readonly · **cấm** fake lat/lng |
| leave dirty | **N/A** — không form dirty |
| closed | badge Đã đóng · disable btnClose · toast «Đã đóng» nếu tap |

## 4. Copy SSOT

Chi tiết · Chi tiết sự cố · Vấn đề · Mã · SC-2401 · Nghiêm trọng · Đang mở · Loại · Nứt mặt đường · Vị trí ghim tự động · QL.1 · Km 1556+080 · Định vị · 10.9620, 106.8518 · ±5 m · Nguồn · Tuần đường PAT-…0014 · Giao việc xử lý · Xem trên bản đồ · Đóng sự cố · Đã đóng sự cố · Đã đóng · Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi

**Cấm trên máy:** «Có mạng» · device label «iPhone» / «· Android» · «Phiên bản Gói N» / foot Gói · «gen realapp» · list/create/chat/sheet copy · invent Lat/Lng khi live · invent Nguồn khi empty.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab indicator.

## 6. Signal

**N/A** trên `#sc-incident-detail` (signal trên hub `home`). **Cấm** «Có mạng» · **cấm** tap-cycle trên detail.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron-left `#i-chevron-left` | `chevron.left` | `ArrowBack` |
| Tab Vấn đề | warning motif | `exclamationmark.triangle` | `Report` |

**Cấm** invent `#i-*` mới trên detail P1. CTA = text buttons · không icon row.

## 8. Motion

Không `/wf-anim` trên detail `incident-detail`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-INC-DETAIL-PACK-01 | STATUS/scan sheet vs full screen | **screen** · **cấm** bottom-sheet chrome |
| GAP-MOB-INC-DETAIL-GPS-01 | Demo lat/lng · DTO thiếu Lat/Lng | HasGps+Route/Km · demo coords **chỉ** offline · **cấm** fake khi live · SA Signed sau |
| GAP-MOB-INC-DETAIL-SRC-01 | iOS p1 thiếu Nguồn · Android có | **Parity dual** khi có data — pack proto **cả hai** có Nguồn SSOT · empty omit |
| GAP-MOB-ACT-01/02 | Gộp list/create/sheet/chat | **Cấm** |
| GAP-MOB-ACT-05 | Kit đã map | reuse · **cấm** raw NavBar / TabView |
| GAP-MOB-ACT-06 | estimate / gis-map | nav khi ship · toast P1 · **cấm** start sibling |
| GAP-MOB-ACT-07 | Close / GET | **cùng slug** · **không** enqueue |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng zones + copy · back/title HIG vs Material OK |
| GAP-TAB-01 | Tab index | shell `incident` · `tabs: none` surface |
| GAP-TYP-01 | Type | caption/badge/tab **13** · code ≥**24/28** · rows ≥**16** |
| GAP-DES-DEMO-RESCAN-01 | Hash skip | **Cấm** re-scan · dùng control-hint + real-data |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp design.md · Nguồn dual · **không** foot Gói |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T03:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-control-hint-20260829 |
| taskId | `task_db8582b2` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
