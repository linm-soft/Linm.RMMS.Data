# UX analy — attendance-day

**Sources:** prototype/ios · prototype/android · ui/design.md · control-hint + real-data (hash skip) · PO  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · success `#3CB448` / `#34C759` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Tuần đường: #sc-patrol-home → segment Chấm công → #sc-attendance → push #sc-attendance-day DES-MOB-ATT-DAY  ← this pack
- Trang Chủ / Vấn đề / Công việc / Tôi: reuse sibling
#sc-attendance-day
  → Back = go('attendance')
  → Appear = GET patrol/attendance-logs · filter dayKey · bind hero + summary + logs
  → Empty count=0 = EmptyChrome · badge Nghỉ
  → GET fail = demo SSOT + toast · screen mở · cấm fake 200
  → Tap log row = toast «Chi tiết lần chấm» · cấm push supervise-detail
  → không child form / sheet / segment
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.  
Surface: `tabs: none` · shell tab `field` (Tuần đường) giữ (`GAP-TAB-01`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ATT-DAY `#sc-attendance-day` | Chi tiết ngày công | nav-bar · back text «Chấm công» | top-bar · icon-only back | — (readonly detail) |
| DES-MOB-TABBAR | Tab 5 | tab Tuần đường on | same | shell |

## 3. Zone

### DES-MOB-ATT-DAY

| Zone | Demo (user thấy) | Map row (`docs/html-to-native-map.md` + `ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|---------------------------------------------------------------------|---------|---------|
| Header | Back · title Chi tiết ngày công | A `.nav-bar` / `.top-bar` | `LinmTopBar` | `LinmTopBar` |
| Hero | T7 09/08 28/24 bold · badge Đủ công | A `.hero` + `.badge` | Text display + `LinmBadge` | same |
| Summary | Khoảng giờ · Tuyến · ca · Số lần chấm | A `.card-group` `.row` | `LinmListRow` | same |
| Section | Các lần chấm | A `.section-label` | `LinmSectionLabel` | same |
| Logs | 07:05 / 16:40 rows · sub route/status/inZone | A `.card-group` `.row` tappable | `LinmListRow` | same |
| Tab | 5 · Tuần đường selected · label **13** | A `.tab` | `LinmTabBar` | same |
| Feedback | toast lỗi / tap log | toast | `LinmToast` | `LinmToast` |
| Empty | Không có lần chấm trong ngày | empty | `LinmEmptyChrome` | same |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET list + filter dayKey · bind hero + summary + log rows |
| empty day | count=0 · badge Nghỉ · `LinmEmptyChrome` · hide section logs |
| loading | nhẹ · **cấm** full-screen block tab |
| error / offline | demo SSOT T7 09/08 / 07:05–16:40 · toast lỗi · **cấm** fake 200 |
| permission | GPS request **N/A** — Lat/Lng readonly nếu bind sub |
| leave dirty | **N/A** — không form dirty |
| missing dayKey | back hub + toast · **cấm** blank invent |
| tap log row | toast «Chi tiết lần chấm» · **cấm** GetById push |

## 4. Copy SSOT

Chi tiết ngày công · Chấm công · T7 09/08 · Đủ công · Khoảng giờ · 07:05 – 16:40 · Tuyến · ca · QL.1 · Ca sáng · Số lần chấm · 2 lần chấm · Các lần chấm · 07:05 · 16:40 · QL.1 · Đúng tuyến · Trong vùng · Không có lần chấm trong ngày · Nghỉ · Chi tiết lần chấm · Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi

**Cấm trên máy:** «Có mạng» · device label «iPhone» / «· Android» · «Phiên bản Gói N» / foot Gói · «gen realapp» · hub hero/segment copy · report/supervise copy · invent shift API.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · success `#3CB448` / `#34C759` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`.  
**Cấm** skin đỏ CCCD · **cấm** M3 tím tab indicator.

## 6. Signal

**N/A** trên `#sc-attendance-day`. **Cấm** «Có mạng» · **cấm** tap-cycle trên detail.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron-left `#i-chevron-left` | `chevron.left` | `ArrowBack` |
| Tab Tuần đường | map motif | `map` | `Route` |

**Cấm** invent `#i-*` mới trên detail P1 ngoài bảng trên. Log rows = text ListRow · không icon row bắt buộc.

## 8. Motion

Không `/wf-anim` trên detail `attendance-day`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-ATT-DAY-PACK-01 | STATUS/scan sheet vs full screen | **screen** · **cấm** bottom-sheet chrome |
| GAP-MOB-ATT-DAY-DEMO-01 | Hub row toast only | Pack `#sc-attendance-day` · Dev rewire `go('attendance-day')` + dayKey |
| GAP-MOB-ATT-DAY-NAV-01 | List toast → push | Wire push + dayKey + dayTitle khi pack ship |
| GAP-MOB-ATT-DAY-SCR-01 | Thiếu màn detail | Design ship dual `#sc-attendance-day` `DES-MOB-ATT-DAY` |
| GAP-MOB-ATT-DAY-DATA-01 | GET + filter | GET list live · client filter · fail → demo SSOT |
| GAP-MOB-ATT-DAY-TITLE-01 | Chrome title | Dual «Chi tiết ngày công» · back iOS text / Android icon-only |
| GAP-MOB-ACT-01/02 | Gộp hub/report/supervise | **Cấm** |
| GAP-MOB-ACT-05 | Kit đã map | reuse · **cấm** raw NavBar / TabView |
| GAP-MOB-ACT-06 | attendance-report / supervise-detail | toast P1 · **cấm** start sibling |
| GAP-MOB-ACT-07 | GET / tap log | **cùng slug** · **không** enqueue |
| GAP-MOB-ALIGN-01 | Dual chrome | Cùng zones + copy · back HIG vs Material OK |
| GAP-TAB-01 | Tab index | shell `field` · `tabs: none` surface |
| GAP-TYP-01 | Type | caption/section **13** · hero ≥**24/28** · rows ≥**16** |
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
| generatedAt | 2026-08-31T03:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-control-hint-20260831 |
| taskId | `task_db7380c8` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
