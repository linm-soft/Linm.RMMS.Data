# UX analy — attendance-report

**Sources:** prototype/ios · prototype/android · ui/design.md · control-hint + real-data (hash skip) · PO  
**Brand tokens:** primary `#0C84C0` · deep `#086A9A` · success `#3CB448` / `#34C759` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`

## 1. IA

```
Login (ngoài tab) → Tab 5
- Tuần đường: #sc-patrol-home → segment Chấm công → #sc-attendance
    → hero Báo cáo → push #sc-attendance-report DES-MOB-ATT-RPT  ← this pack
- Trang Chủ / Vấn đề / Công việc / Tôi: reuse sibling
#sc-attendance-report
  → Back = go('attendance')
  → Appear = GET patrol/attendance-logs · period filter · KPI + day rows
  → Period Tuần|Tháng = client re-filter (default Tuần)
  → Empty = EmptyChrome «Không có dữ liệu kỳ này»
  → GET fail = toast + demo SSOT UI · cấm fake 200
  → Tap day = go('attendance-day') + dayKey · cấm re-enqueue
  → không Excel / map / child form / sheet
```

**Cấm** invent tab. Số tab = 5 · thứ tự: Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi.  
Surface: `tabs: none` · shell tab `field` giữ (`GAP-TAB-01`).

## 2. Màn

| DES / sc-* | Tên VN | iOS chrome | Android chrome | CTA |
|------------|--------|------------|----------------|-----|
| DES-MOB-ATT-RPT `#sc-attendance-report` | Báo cáo công | nav-bar · back text «Chấm công» | top-bar · icon-only back | period segment · day tap |
| DES-MOB-TABBAR | Tab 5 | tab Tuần đường on | same | shell |

## 3. Zone

### DES-MOB-ATT-RPT

| Zone | Demo (user thấy) | Map row (`ui/html-to-native-map.md`) | SwiftUI | Compose |
|------|------------------|--------------------------------------|---------|---------|
| Header | Back · title Báo cáo công | A `.nav-bar` / `.top-bar` | `LinmTopBar` | `LinmTopBar` |
| Period | Tuần / Tháng segment | A `.seg` | `LinmSegment` | same |
| KPI | 4 chip: đủ công · checks · % vùng · ngoài | A `.kpi-grid` `.kpi` | KPI Stat | same |
| Section | Chi tiết theo ngày | A `.section-label` | `LinmSectionLabel` | same |
| Days | T7/T6 rows · range · badge Đủ công | A `.card-group` `.row` | `LinmListRow` + `LinmBadge` | same |
| Empty | Không có dữ liệu kỳ này | `.empty` | `LinmEmptyChrome` | same |
| Tab | 5 · Tuần đường selected · **13** | A `.tab` | `LinmTabBar` | same |
| Feedback | toast kỳ / back / err | `.toast` | `LinmToast` | `LinmToast` |

**States:**

| State | Hành vi |
|-------|---------|
| default | GET list · period Tuần · bind KPI + days (SSOT demo 2/4/100%/0 · T7/T6) |
| empty period | count=0 · EmptyChrome · hide section |
| loading | nhẹ · **cấm** full-screen block tab |
| error / offline | toast lỗi · demo SSOT fallback · **cấm** fake 200 |
| permission | GPS **N/A** trên report |
| leave dirty | **N/A** |
| period change | client re-filter · không bắt buộc re-GET nếu cache đủ |
| tap day | push attendance-day |

## 4. Copy SSOT

Báo cáo công · Chấm công · Tuần · Tháng · Ngày đủ công · Số lần chấm · % Trong vùng · Ngoài vùng · Chi tiết theo ngày · T7 09/08 · T6 08/08 · 07:05 – 16:40 · 07:12 – 16:28 · Đủ công · Không có dữ liệu kỳ này · Chi tiết ngày công · Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi · Kỳ: Tuần · Kỳ: Tháng

**Cấm trên máy:** «Có mạng» · device label · «Phiên bản Gói N» · Excel/map web copy · invent `/attendance/report` · window.alert.

## 5. Brand

Primary `#0C84C0` · deep `#086A9A` · success `#3CB448`/`#34C759` · warn `#FCB43C` · surface iOS `#F2F2F7` · Android `#FFFBFE`.  
**Cấm** skin đỏ CCCD · M3 tím tab.

## 6. Signal

**N/A** trên `#sc-attendance-report`. **Cấm** «Có mạng» · tap-cycle.

## 7. Pictogram

| Control | Motif demo | SF Symbol | Material |
|---------|------------|-----------|----------|
| Back | chevron-left `#i-chevron-left` | `chevron.left` | `ArrowBack` |
| Tab Tuần đường | map | `map` | `Route` |

**Cấm** invent `#i-*` mới ngoài chevron back.

## 8. Motion

**N/A** — không `/wf-anim`.

## 9. GAP

| ID | Demo vs native | Quyết định |
|----|----------------|------------|
| GAP-MOB-ATT-RPT-NAV-01 | toast → push | Wire hub Báo cáo |
| GAP-MOB-ATT-RPT-SCR-01 | own report screen | Dual `#sc-attendance-report` |
| GAP-MOB-ATT-RPT-DATA-01 | GetList aggregate | Bind KPI + days |
| GAP-MOB-ATT-RPT-API-01 | report MISSING | P1 aggregate · P2 only |
| GAP-MOB-ATT-RPT-PACK-01 | sheet→screen | packKind **screen** |
| GAP-MOB-ATT-RPT-DEMO-01 | dual proto | Dev rewire + ship |
| GAP-TAB-01 | shell tab | giữ Tuần đường · cấm invent |
| GAP-DES-DEMO-RESCAN-01 | hash skip | dùng DA · cấm re-scan |
| GAP-MOB-DES-PFX-01 | ios/ · android/ | board prefix OK |

## Version meta

| Field | Value |
|-------|-------|
| skillId | mobile-ui-ux-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | `2026-09-01T15:11:25.000Z` |
| versionGate | ok |
| contentHash | sha256:3f9c045045e58aa32dbf36fb0c5a9a55dcb159b8e1c052efa69c1cad33e4c3e9 |
| taskId | `task_52898ccc` |

---
<!-- Version meta: skillId=mobile-ui-ux-analy skillVersion=2026.08.25.01 schemaVersion=1 -->
