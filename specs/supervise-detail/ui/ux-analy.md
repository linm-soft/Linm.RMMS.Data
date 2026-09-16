# UX analy — supervise-detail

**Sources:** prototype/ios · prototype/android · ui/design.md · control-hint + real-data (hash skip) · PO  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Trang Chủ: hub → Giám sát list #sc-supervise → push #sc-supervise-detail DES-MOB-SUP-DETAIL  ← this pack
- Tuần đường / Vấn đề / Công việc / Tôi: reuse sibling
#sc-supervise-detail
  → Back = go('supervise')
  → Xem trên bản đồ = go('gis-map') pass Id/Lat/Lng · toast P1 nếu chưa ship
  → 404 = EmptyChrome · back list
  → GET fail = demo SSOT + toast · screen mở · cấm fake 200
  → không child form / sheet / segment
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.  
Surface: `tabs: none` · shell tab `home` (Trang Chủ) giữ (`GAP-TAB-01`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-SUP-DETAIL `#sc-supervise-detail` | Chi tiết check-in | nav-bar · back text «Giám sát» | top-bar · icon-only back | Xem trên bản đồ |
| DES-MOB-TABBAR | Tab 5 | tab Trang Chủ on | same | shell |

## 3. Zone

### DES-MOB-SUP-DETAIL

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md` + `ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|---------------------------------------------------------------------|---------|---------|
| Header | Back · title Chi tiết check-in | A `.nav-bar` / `.top-bar` | `LinmTopBar` | `LinmTopBar` |
| Hero | UserName 28/24 bold · Mã 13 · Code ≥16 | A `.hero` | Text display | same |
| Rows | Tổ · Tuyến · Thời điểm · Trạng thái · Tọa độ · Trong vùng | A `.card-group` `.row` | `LinmListRow` | same |
| CTA | Primary Xem trên bản đồ | A `.btn-primary` | `LinmPrimaryButton` | same |
| Tab | 5 · Trang Chủ selected · label **13** | A `.tab` | `LinmTabBar` | same |
| Feedback | toast lỗi mạng | toast | `LinmToast` | `LinmToast` |
| Empty | 404 | empty | `LinmEmptyChrome` | same |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET `patrol/attendance-logs/{id}` · bind hero + rows |
| empty 404 | `LinmEmptyChrome` · back list · **cấm** alert |
| loading | nhẹ · **cấm** full-screen block tab |
| error / offline | demo SSOT Nguyễn Văn A / CC-20260810-001 · toast lỗi · **cấm** fake 200 |
| permission | GPS request **N/A** — Lat/Lng readonly |
| leave dirty | **N/A** — không form dirty |
| missing Id | back list + toast · **cấm** blank invent |

## 4. Copy SSOT

Chi tiết check-in · Giám sát · Nguyễn Văn A · Mã · CC-20260810-001 · Tổ / đơn vị · Tổ tuần đường · VP-IV.1 · Tuyến · lý trình · QL.1 Km 1556+000 · Xuân Hải · Thời điểm · 2026-08-10 08:40:12 · Trạng thái · Đã ghi điểm tuần · Tọa độ · 11.5300, 109.0040 · Trong vùng · Xem trên bản đồ · Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi

**Cấm trên máy:** «Có mạng» · device label «iPhone» / «· Android» · «Phiên bản Gói N» / foot Gói · «gen realapp» · «Ghi điểm tuần» title CI-DETAIL · list/filter/segment copy · invent OrgUnit · invent coords khi live.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · success `#3CB448` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab indicator.

## 6. Signal

**N/A** trên `#sc-supervise-detail` (signal trên hub `home`). **Cấm** «Có mạng» · **cấm** tap-cycle trên detail.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron-left `#i-chevron-left` | `chevron.left` | `ArrowBack` |
| Org (optional) | building `#i-building` | `building.2` | `Apartment` |
| Loc (optional) | mappin `#i-mappin` | `mappin` | `Place` |
| Tab Trang Chủ | house motif | `house` | `Home` |

**Cấm** invent `#i-*` mới trên detail P1 ngoài bảng trên. CTA = text PrimaryButton · không icon row bắt buộc.

## 8. Motion

Không `/wf-anim` trên detail `supervise-detail`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-SUP-DET-PACK-01 | STATUS/scan sheet vs full screen | **screen** · **cấm** bottom-sheet chrome |
| GAP-MOB-SUP-DET-DEMO-01 | Card → CI-DETAIL | Pack `#sc-supervise-detail` · Dev rewire `go('supervise-detail')` · **cấm** reuse CI-DETAIL |
| GAP-MOB-SUP-DET-ORG-01 | OrgUnit thiếu DTO | `Note` / demo «Tổ tuần đường · VP-IV.1» · **cấm** invent API |
| GAP-MOB-SUP-DET-NAV-01 | List toast only | Wire push + Id khi pack ship |
| GAP-MOB-SUP-DET-MAP-01 | CTA map | Nav `gis-map` · **không** embed · toast P1 OK |
| GAP-MOB-SUP-DET-TITLE-01 | Chrome title | Dual «Chi tiết check-in» · back iOS text / Android icon-only |
| GAP-MOB-ACT-01/02 | Gộp list/checkin/sheet | **Cấm** |
| GAP-MOB-ACT-05 | Kit đã map | reuse · **cấm** raw NavBar / TabView |
| GAP-MOB-ACT-06 | gis-map / patrol-checkin | nav khi ship · **cấm** start sibling |
| GAP-MOB-ACT-07 | GET / CTA | **cùng slug** · **không** enqueue |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng zones + copy · back HIG vs Material OK |
| GAP-TAB-01 | Tab index | shell `home` · `tabs: none` surface |
| GAP-TYP-01 | Type | caption/tab **13** · hero ≥**24/28** · rows ≥**16** |
| GAP-DES-DEMO-RESCAN-01 | Hash skip | **Cấm** re-scan · dùng control-hint + real-data |
| GAP-MOB-UX-07 | design ↔ HTML | Pack proto khớp design.md · **không** foot Gói |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T02:10:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-control-hint-20260831 |
| taskId | `task_d9769d91` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
