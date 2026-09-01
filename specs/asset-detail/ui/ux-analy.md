# UX analy — asset-detail

**Sources:** prototype/ios · prototype/android · ui/design.md · control-hint + real-data (hash skip) · PO  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Trang Chủ: asset list → push #sc-asset-detail DES-MOB-ASSET-DETAIL   ← this pack
  (entry cũng từ adjust «Sửa» pass Id)
- Tuần đường / Vấn đề / Công việc / Tôi: reuse sibling
#sc-asset-detail
  → Back = go('asset-list')
  → Ghim trên bản đồ = go('gis-map') / toast P1
  → 404 = EmptyChrome · back list
  → GET fail = demo SSOT + toast · **cấm** fake 200
  → không child form / sheet / segment
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.  
Surface: `tabs: none` · shell tab `home` giữ (`GAP-TAB-01`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ASSET-DETAIL `#sc-asset-detail` | Chi tiết / Chi tiết tài sản | nav-bar · back text «Tài sản» | top-bar · icon-only back | Ghim trên bản đồ |
| DES-MOB-TABBAR | Tab 5 | tab Trang Chủ on | same | shell |

## 3. Zone

### DES-MOB-ASSET-DETAIL

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md` + `ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|---------------------------------------------------------------------|---------|---------|
| Header | Back · title Chi tiết / Chi tiết tài sản | A `.nav-bar` / `.top-bar` | `LinmTopBar` | `LinmTopBar` |
| Hero | Mã TS caption 13 · Code 28/24 | A hero | Text | same |
| Rows | Loại · Tuyến · lý trình · Tọa độ | A `.card-group` `.row` | `LinmListRow` | same |
| CTA | Primary Ghim trên bản đồ | A `.btn-primary` | `LinmPrimaryButton` | same |
| Tab | 5 · Trang Chủ selected · label **13** | A `.tab` | `LinmTabBar` | same |
| Feedback | toast lỗi / sibling toast | toast | `LinmToast` | `LinmToast` |
| Empty | 404 | empty | `LinmEmptyChrome` | same |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET `asset/road-assets/{id}` · bind hero + rows |
| empty 404 | `LinmEmptyChrome` · back list · **cấm** alert |
| loading | nhẹ · **cấm** full-screen block tab |
| error / offline | demo SSOT TS-20260810-014 · toast lỗi · screen **vẫn mở** · **cấm** fake 200 |
| permission | GPS request **N/A** — tọa độ readonly bind · **cấm** invent coords khi live |
| leave dirty | **N/A** — không form dirty |
| gps null | ẩn row Tọa độ dual |

## 4. Copy SSOT

Chi tiết · Chi tiết tài sản · Tài sản · Mã TS · TS-20260810-014 · Loại · Cống · Tuyến · lý trình · QL.1 · Km 1556+000 · Tọa độ · 11.5300, 109.0040 · Ghim trên bản đồ · Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi

**Cấm trên máy:** «Có mạng» · device label «iPhone» / «· Android» · «Phiên bản Gói N» / foot Gói · «gen realapp» · list/collect/adjust/AI copy · invent Lat/Lng khi live · PUT/DELETE copy.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab indicator.

## 6. Signal

**N/A** trên `#sc-asset-detail` (signal trên hub `home`). **Cấm** «Có mạng» · **cấm** tap-cycle trên detail.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron-left `#i-chevron-left` | `chevron.left` | `ArrowBack` |
| Tab Trang Chủ | house motif | `house` | `Home` |

**Cấm** invent `#i-*` mới trên detail P1. CTA = text button · không icon row.

## 8. Motion

Không `/wf-anim` trên detail `asset-detail`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-ASSET-DET-PACK-01 | STATUS/scan sheet vs full screen | **screen** · **cấm** bottom-sheet chrome |
| GAP-MOB-ASSET-DET-TITLE-01 | iOS Chi tiết · Android Chi tiết tài sản | **Giữ dual** chrome OK |
| GAP-MOB-ASSET-DET-GPS-01 | iOS p1 thiếu Tọa độ · Android có | **Parity dual** khi có Lat/Lng — pack proto **cả hai** có row · ẩn nếu null · demo coords **chỉ** offline |
| GAP-MOB-ASSET-DET-TYPE-01 | Type code vs label | reuse `typeLabel` · **không** lookup API |
| GAP-MOB-ASSET-DET-NAV-01 | List toast → push | wire push khi ship |
| GAP-MOB-ACT-01/02 | Gộp list/collect/adjust/AI/sheet | **Cấm** |
| GAP-MOB-ACT-05 | Kit đã map | reuse · **cấm** raw NavBar / TabView |
| GAP-MOB-ACT-06 | gis-map | nav khi ship · toast P1 · **cấm** start sibling |
| GAP-MOB-ACT-07 | GET / CTA | **cùng slug** · **không** enqueue |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng zones + copy · back/title HIG vs Material OK |
| GAP-TAB-01 | Tab index | shell `home` · `tabs: none` surface |
| GAP-TYP-01 | Type | caption/tab **13** · code ≥**24/28** · rows ≥**16** |
| GAP-DES-DEMO-RESCAN-01 | Hash skip | **Cấm** re-scan · dùng control-hint + real-data |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp design.md · GPS dual · **không** foot Gói |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T21:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-control-hint-20260830 |
| taskId | `task_039c59ba` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
