# Design — attendance-report (mobile · Báo cáo công)

| Field | Value |
|-------|-------|
| feature | `attendance-report` |
| title | [Design] [Mobile] [Chấm công] -> Báo cáo công |
| this role | `design` · `/agent-design-mobile` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_52898ccc`) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ATT-RPT-PACK-01) |
| changeScope | `new_page` |
| stack | `native_dual` |
| kit_missing_confirm | **N/A** — reuse kit dual (`LinmTopBar` · `LinmSegment` · KPI · `LinmListRow` · `LinmBadge` · `LinmSectionLabel` · `LinmEmptyChrome` · `LinmToast` · `LinmTabBar`) |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/ios/index.html#sc-attendance-report` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/android/index.html#sc-attendance-report` |
| peerStdUrl | — (native · **cấm** mfeStdUrl) |
| real_view_parity | `v1` |
| ux-analy | `ui/ux-analy.md` §1–§9 |
| demo-parity | `ui/review/demo-parity.md` · Must **closed** |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` |
| prior · data_analy | `confirmed` · `_data-analy/attendance-report-control-hint.md` · `attendance-report-real-data.md` · **hash skip** · **cấm** re-scan |
| updatedAt | `2026-09-01T15:11:25.000Z` |
| taskId | `task_52898ccc` |

## 0. Context & Demo

| ID | Path |
|----|------|
| CTX | `docs/context/features/attendance-report.md` |
| CTX parent | `docs/context/features/attendance.md` |
| DEM-P1 | mobile-p1 `{ios,android}` `#sc-attendance` entry btn Báo cáo · target `#sc-attendance-report` (inventory DA — **không** re-scan) |
| DEM | `specs/attendance-report/ui/prototype/{ios,android}/index.html` |
| MAP | `docs/html-to-native-map.md` + `ui/html-to-native-map.md` |
| DA | `_data-analy/attendance-report-control-hint.md` · bff · action-tree · real-data |
| PO | `po/requirement.md` |

**Cấm** `mfeStdUrl` / `yarn start:std` / WebView HTML-as-app / ERP.*.  
**Hash skip:** inventory + controlHint + real-data §A+§B từ DA — **cấm** re-scan demo HTML (`GAP-DES-DEMO-RESCAN-01`).

## 1. Pattern

| Surface | Full screen push `#sc-attendance-report` · shell tab `field` (Tuần đường) · **không** Modal/bottom-sheet |
| Action this slug | GET `patrol/attendance-logs` + client period aggregate · KPI · day list · toast err · empty · back hub · tap day → attendance-day |
| Frame | iOS 390×844 · Android 412×915 |
| BFF | **chỉ** GetList + client filter · **cấm** invent `/attendance/report` |

## 2. Screens / DES-MOB-*

| DES / sc-* | Tên VN | CTA / hành vi |
|------------|--------|---------------|
| `DES-MOB-ATT-RPT` `#sc-attendance-report` | Báo cáo công | period · KPI · day list · empty |
| `DES-MOB-TABBAR` | Tab 5 | chrome shell · selected **Tuần đường** · **cấm** invent |

### IA lock

```
(auth) Login → Tab 5
  Tuần đường → #sc-patrol-home → segment Chấm công → #sc-attendance
    → hero Báo cáo → push #sc-attendance-report DES-MOB-ATT-RPT  ← this pack
  Back → go('attendance')
  Appear → GET patrol/attendance-logs · filter period · bind KPI + day rows
  Period Tuần|Tháng → client re-filter (default Tuần)
  Empty count=0 → EmptyChrome · hide section
  GET fail → toast + demo SSOT fallback UI · **cấm** fake 200
  Tap dayRow → go('attendance-day') + dayKey · **cấm** re-enqueue attendance-day
  không Excel / map / POST hub
```

## 3. Field inventory (kit dual)

| Field | VN | Kit dual | SF ↔ Material | Notes |
|-------|----|----------|---------------|-------|
| navBack | Chấm công | `LinmTopBar` leading `#i-chevron-left` | `chevron.left` ↔ `ArrowBack` | `go('attendance')` · iOS text+chevron · Android icon-only |
| title | Báo cáo công | `LinmTopBar` title | — | dual fixed SSOT |
| periodSeg | Tuần / Tháng | `LinmSegment` | segmented ↔ FilterChip | default **Tuần** · label **13** |
| kpiDays | Ngày đủ công | KPI / Stat | — | days ≥2 · value **≥16** |
| kpiChecks | Số lần chấm | KPI / Stat | — | count logs |
| kpiInZone | % Trong vùng | KPI / Stat | — | ratio · 0 logs → «—» |
| kpiOut | Ngoài vùng | KPI / Stat | — | `InZone==false` |
| sectionDays | Chi tiết theo ngày | `LinmSectionLabel` | — | hide khi empty |
| dayTitle | (T7 09/08) | `LinmListRow` title | — | ≥16 |
| daySub | range / — | `LinmListRow` subtitle | — | 13 · first–last CheckInAt |
| dayBadge | Đủ công / Nghỉ / Đã chấm | `LinmBadge` | — | hub map |
| emptyPeriod | Không có dữ liệu kỳ này | `LinmEmptyChrome` | — | GET ok empty |
| toastErr | (lỗi mạng) | `LinmToast` | — | GET fail · **cấm** fake ok |
| tabField | Tuần đường | `LinmTabBar` | map ↔ Route | selected · **13** |

### Entry (parent)

| Field | VN | Kit | Notes |
|-------|----|-----|-------|
| btnReport | Báo cáo | `LinmHeroAction` ghost | hub · toast→**wire** `go('attendance-report')` |

### Badge map

| logs/day | Badge |
|----------|-------|
| 0 | Nghỉ |
| 1 | Đã chấm |
| ≥2 | Đủ công |

### Period

| Segment | Window |
|---------|--------|
| Tuần | startOfWeek → today (local) |
| Tháng | startOfMonth → today (local) |

### Demo SSOT (GET fail fallback only)

| KPI / days | Value |
|------------|-------|
| đủ công / checks / inZone / out | 2 · 4 · 100% · 0 |
| rows | T7 09/08 · T6 08/08 |

## 4. Brand

| Token | Hex | Dùng |
|-------|-----|------|
| Primary | `#0C84C0` | tint · tab · segment on |
| Deep | `#086A9A` | header deep |
| Success | `#3CB448` / `#34C759` | badge Đủ công |
| Warn | `#FCB43C` | optional lệch |
| Idle | `#8E8E93` / `#79747E` | muted |
| Surface iOS | `#F2F2F7` | nền |
| Surface Android | `#FFFBFE` | Material · DEFER chrome |

**Cấm** skin đỏ CCCD · M3 tím indicator.

## 5. Typography

| Role | Size |
|------|------|
| tab / caption / label / section / segment | **13** |
| title | **17** (iOS) · Android top **22** chrome OK |
| KPI value / day title | **≥16** (KPI display **20**) |

## 6. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ios/index.html` · `ui/prototype/android/index.html` |
| Zones | TopBar · Segment · KPI×4 · Section · day ListRows · Empty · Tab · Toast |
| Form zones | N/A — report screen readonly |
| SSOT | control-hint · real-data · PO · artifact-prefix |
| **reviewUrlIos** | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/ios/index.html#sc-attendance-report` |
| **reviewUrlAndroid** | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/attendance-report/ui/prototype/android/index.html#sc-attendance-report` |
| **peerStdUrl** | — |
| **real_view_parity** | `v1` |

### Wire

```
[Nav] ← Chấm công | Báo cáo công
[Seg] Tuần | Tháng
[KPI] Ngày đủ công · Số lần chấm · % Trong vùng · Ngoài vùng
[Sec] Chi tiết theo ngày
[List] dayTitle · range · badge → attendance-day
[Empty] Không có dữ liệu kỳ này
[Tab] Trang Chủ · Tuần đường(on) · Vấn đề · Công việc · Tôi
```

## 7. Cấm

- WebView HTML · mfeStdUrl · yarn start:std / e2e / build ở role này
- Invent `/attendance/report` · Excel/map mobile P1 · hub POST
- Re-enqueue attendance-day · invent tab 6
- Fake GET 200 · watermark Gói · device label · «Có mạng» · window.alert
- Re-scan demo (`GAP-DES-DEMO-RESCAN-01`) · Step 4b / migration
- Board path không prefix `ios/`·`android/` (`GAP-MOB-DES-PFX-01`)

## 8. Handoff → SA

| Field | Value |
|-------|-------|
| API P1 | GET `patrol/attendance-logs` + client period aggregate |
| OUT | dedicated report path · Excel/map · Step 4b N/A |
| Nav | hub btnReport wire push · day tap → attendance-day |
| reviewUrl | dual file:// above |
| compact | `handoff/design-compact.md` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | `2026-09-01T15:11:25.000Z` |
| versionGate | ok · autopilot keep_current |
| contentHash | sha256:3f9c045045e58aa32dbf36fb0c5a9a55dcb159b8e1c052efa69c1cad33e4c3e9 |
| taskId | `task_52898ccc` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.09.01.1 versionGate=ok -->
