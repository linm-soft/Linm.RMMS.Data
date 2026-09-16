# Data-analy — attendance-report (controlHint · mobile Báo cáo công)

| | |
|---|---|
| feature | `attendance-report` |
| title | [Mobile] [Chấm công] -> Báo cáo công |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / queue · ACTION-TREE) · surface = full screen `#sc-attendance-report` |
| changeScope | `new_page` |
| status | **confirmed** · autoApprove=ON |
| taskId | `task_cc8d9202` |
| demo | mobile-p1 / attendance prototype `{ios,android}` · entry `#sc-attendance` btn Báo cáo · **target** `#sc-attendance-report` · `DES-MOB-ATT-RPT` |
| ctx | `docs/context/features/attendance-report.md` · peer `attendance.md` · web peer `rpt-bao-cao-cong.md` |
| generatedAt | `2026-09-01T00:48:12.000Z` |

**Cấm:** watermark Gói · invent `api/v1/attendance/report` · gộp hub POST Chấm vào · gộp `attendance-day` owner · copy web Excel/map Kind E · ERP.* · mfeStdUrl · system alert · fake toast success.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`attendance-report-bff-endpoints.md`](attendance-report-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`attendance-report-action-tree.md`](attendance-report-action-tree.md) | 7 tree + share/reuse |
| [`attendance-report-real-data.md`](attendance-report-real-data.md) | 6b real-data bind |

## § Source form → tables (report)

| sourceForm | sourceTables | notes |
|------------|--------------|-------|
| Mobile hub Chấm công / Check-in | `rmms_attendance_logs` (`AttendanceLog`) | CTX attendance §4 · **cấm** bảng report riêng P1 |
| Web peer `rpt-bao-cao-cong` | same entity read-model | **không** bind web Excel/map vào mobile P1 |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + demo target + GET aggregate) | Surface |
|----|------------------|------------------------------------------|---------|
| GAP-MOB-ATT-RPT-NAV-01 | Hero **Báo cáo** → toast `attendance.toast.report` · **không** push | Push `#sc-attendance-report` · back → `#sc-attendance` | attendance · attendance-report |
| GAP-MOB-ATT-RPT-SCR-01 | Không màn báo cáo | Full `#sc-attendance-report` · `DES-MOB-ATT-RPT` · period · KPI · day list | screen |
| GAP-MOB-ATT-RPT-DEMO-01 | Không `#sc-attendance-report` dual | Design + rewire `go('attendance-report')` | demo |
| GAP-MOB-ATT-RPT-DATA-01 | — | GET `patrol/attendance-logs` · client period filter · KPI/day derived · fail → demo SSOT · **cấm** mock-only ship | BFF |
| GAP-MOB-ATT-RPT-API-01 | CTX `/attendance/report` MISSING | **Không invent** · P1 reuse GetList | meta |
| GAP-MOB-ATT-RPT-PACK-01 | STATUS `sheet` | Full screen report sheet — PO/Design chốt | meta |

**Không** đổi (OUT): hub Chấm vào POST · segment Tuần đường/Chấm công · day-row owner `attendance-day` · web Kind E Excel/map · supervise GetById.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | Display-only derived từ logs · **không** request location trên report |
| Camera | n/a | |
| Offline | yes | GET fail → toast + demo SSOT fallback · **cấm** fake 200 |
| Map | n/a | **không** embed map P1 (web peer có Leaflet) |
| Biometric | n/a | |
| token | Keychain / Encrypted | Bearer trên GET |
| Export | n/a | Excel **OUT** mobile P1 |

## § Tab index

`tabs: none` trên surface — shell Tab **Tuần đường** giữ parent. Period **segment** Tuần/Tháng = filter (không Tab shell) · `GAP-TAB-01`.

## § Demo dual

| # | iOS target `#sc-attendance-report` | Android target `#sc-attendance-report` | `#i-*` |
|---|------------------------------------|----------------------------------------|--------|
| Back | text «Chấm công» + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Báo cáo công | Báo cáo công | — |
| periodSeg | Tuần · Tháng | **same** | segment |
| kpiDays | Ngày đủ công | **same** | KPI chip |
| kpiChecks | Số lần chấm | **same** | KPI chip |
| kpiInZone | % Trong vùng | **same** | KPI chip |
| kpiOut | Ngoài vùng | **same** | KPI chip |
| sectionDays | Chi tiết theo ngày | **same** | `LinmSectionLabel` |
| dayRow | T7 09/08 · range · badge | **same** | `LinmListRow` |
| emptyPeriod | Không có dữ liệu kỳ này | **same** | `LinmEmptyChrome` |
| Entry | toast → **wire push** | **same** | `#sc-attendance` hero Báo cáo |

## controlHint — `#sc-attendance-report` (`DES-MOB-ATT-RPT`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Chấm công | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('attendance')` / pop |
| title | Báo cáo công | TopBar title | 17 | `LinmTopBar` | fixed SSOT |
| periodSeg | Tuần / Tháng | Segment | 13 | `LinmSegment` | default **Tuần** · client filter |
| kpiDays | Ngày đủ công | KPI / Stat | label **13** / value **≥16** | | count days badge Đủ công |
| kpiChecks | Số lần chấm | KPI / Stat | 13 / ≥16 | | count logs in period |
| kpiInZone | % Trong vùng | KPI / Stat | 13 / ≥16 | | `InZone==true` / total |
| kpiOut | Ngoài vùng | KPI / Stat | 13 / ≥16 | | count `InZone==false` |
| sectionDays | Chi tiết theo ngày | SectionLabel | 13 | `LinmSectionLabel` | hide khi empty |
| dayTitle | (T7 09/08) | ListRow title | ≥16 | `LinmListRow` | local day key |
| daySub | range / — | ListRow subtitle | 13 | same | first–last CheckInAt |
| dayBadge | Đủ công / Nghỉ / Đã chấm | Badge | 13 | `LinmBadge` | same hub map |
| emptyPeriod | Không có dữ liệu kỳ này | EmptyChrome | 13–16 | `LinmEmptyChrome` | GET ok empty |
| toastErr | (lỗi mạng) | Toast | 13–16 | `LinmToast` | GET fail · **cấm** fake ok |

### Entry (parent — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| btnReport | Báo cáo | `LinmHeroAction` ghost | hero | toast → **wire** `go('attendance-report')` |

### Badge map (khớp hub / attendance-day)

| logs/day | Badge |
|----------|-------|
| 0 | Nghỉ |
| 1 | Đã chấm |
| ≥2 | Đủ công |

### Period filter rule

| Segment | Window |
|---------|--------|
| Tuần | startOfWeek → today (local) |
| Tháng | startOfMonth → today (local) |

## Typography

label **13** · field/value **≥16** · tab/segment **13** · title **17** · KPI value bold ≥16.

## Open / UNCLEAR

| Item | Decision |
|------|----------|
| Dedicated report API | P2 · P1 GetList aggregate — **không** UNCLEAR |
| Excel / map mobile | OUT P1 — web peer |
| Default period | Tuần |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | `2026-09-01T00:48:12.000Z` |
| versionGate | ok · autopilot keep_current |
| contentHash | sha256:3f9c045045e58aa32dbf36fb0c5a9a55dcb159b8e1c052efa69c1cad33e4c3e9 |
| taskId | `task_cc8d9202` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.09.01.1 versionGate=ok -->
