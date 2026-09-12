# HTML → native map — attendance-report

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-attendance-report`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | title dual **Báo cáo công** · leading back |
| `.nav-btn` / `.icon-btn` back `#i-chevron-left` | `LinmTopBar` leading | `go('attendance')` · iOS text «Chấm công» + chevron · Android icon-only |
| `.seg` Tuần / Tháng | `LinmSegment` | default **Tuần** · label **13** · client filter |
| `.kpi-grid` `.kpi` | KPI / Stat | label **13** / value **≥16** (proto **20**) · 4 chips |
| `#kpi-days` | KPI | days badge ≥2 |
| `#kpi-checks` | KPI | count logs in window |
| `#kpi-inzone` | KPI | `InZone` ratio · 0 → «—» |
| `#kpi-out` | KPI | count `InZone==false` |
| `.section-label` Chi tiết theo ngày | `LinmSectionLabel` | hide khi empty |
| `.row` dayTitle + sub + badge | `LinmListRow` + `LinmBadge` | tap → `attendance-day` + dayKey |
| `.empty` | `LinmEmptyChrome` | «Không có dữ liệu kỳ này» |
| `.toast` | `LinmToast` | GET fail · period toast demo · **cấm** `window.alert` |
| `.tab` / DES-MOB-TABBAR | `LinmTabBar` | shell · **Tuần đường** · **13** · **cấm** invent |

**Bind (real-data §B):**

| Line | Rule |
|------|------|
| period | default Tuần · Tháng = startOfMonth→today · re-filter client |
| kpiDays | count days với ≥2 logs |
| kpiChecks | `n` logs in window |
| kpiInZone | 0 logs → «—» · else `round(100*inZone/total)%` |
| kpiOut | count out-of-zone |
| day rows | sort dayKey desc · badge hub map · tap → attendance-day |
| empty | GET ok + 0 in window → EmptyChrome |
| GET fail | toast + demo SSOT · **cấm** fake 200 |
| write | **—** toàn bộ (read-only) |
| API | GET `patrol/attendance-logs` · **cấm** invent `/attendance/report` |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm:** raw `NavigationBar` / M3 bar / `TabView` · WebView · mfeStdUrl · Excel/map · POST/PUT/DELETE · bottom-sheet chrome · ERP.*.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | `2026-09-01T15:11:25.000Z` |
| versionGate | ok |
| contentHash | sha256:3f9c045045e58aa32dbf36fb0c5a9a55dcb159b8e1c052efa69c1cad33e4c3e9 |
| taskId | `task_52898ccc` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.09.01.1 versionGate=ok -->
