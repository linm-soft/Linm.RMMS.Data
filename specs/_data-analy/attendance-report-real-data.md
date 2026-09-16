# Real-data bind — attendance-report

| | |
|---|---|
| feature | `attendance-report` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol GetList attendance-logs + client period aggregate |
| taskId | `task_cc8d9202` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `attendance-report.md` · `AttendanceLogsController.GetList` · `AttendanceLogDto` | 0 logs period → empty chrome | Toast lỗi · demo SSOT fallback · **cấm** fake 200 |
| `derived` | client period window + day buckets + KPI | kpi «—» khi 0 | — |
| `demo` | mobile-p1 `#sc-attendance` hero SSOT · target `#sc-attendance-report` | UI-only khi GET fail | **không** SSOT ship khi live OK |
| `nav` | entry từ hub btnReport | thiếu → stay hub | — |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| periodSeg | Tuần / Tháng | Segment | — | local | period | gap | yes |
| kpiDays | Ngày đủ công | KPI | — | derived | day buckets ≥2 | gap | yes |
| kpiChecks | Số lần chấm | KPI | — | derived | count logs | gap | yes |
| kpiInZone | % Trong vùng | KPI | — | derived | `InZone` ratio | gap | yes |
| kpiOut | Ngoài vùng | KPI | — | derived | `InZone==false` | gap | yes |
| dayTitle | (T7 09/08) | ListRow | — | derived | day key local | yes | yes |
| daySub | range / — | ListRow | — | derived | min/max `CheckInAt` | yes | yes |
| dayBadge | Đủ công / Nghỉ | Badge | — | derived | log count day | yes | yes |
| emptyPeriod | Không có dữ liệu kỳ này | EmptyChrome | — | derived | count=0 | — | yes |
| toastErr | (lỗi) | Toast | — | after GET fail | — | — | yes |

§B path **khớp** `attendance-report-bff-endpoints.md` — **không** invent `attendance/report` path.  
`write field=—` toàn bộ (read-only report).

### Display rules

| Line | Rule |
|------|------|
| period | default Tuần · switch re-filter client (không re-GET bắt buộc nếu cache đủ page) |
| kpiDays | count days với ≥2 logs |
| kpiChecks | `n` logs in window |
| kpiInZone | `0` logs → «—» · else `round(100*inZone/total)%` |
| kpiOut | count out-of-zone |
| day rows | sort dayKey desc · badge map hub · tap → `attendance-day` + dayKey |
| empty | GET ok + 0 in window → EmptyChrome |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| period labels | — (static Tuần/Tháng) | control-hint | Invent period BE P1 |
| badge map | — | hub / attendance-day | Invent status catalog API |
| — | — | DB `rmms_attendance_logs` | In-app hardcode KPI khi BFF OK |

## §D — Map / vẽ

`map: none` trên `#sc-attendance-report`. Web peer Leaflet **không** bind mobile P1.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Report load | AttendanceLog[] filtered | appear / period change | GET list + filter | KPI + day rows |
| Empty period | count=0 | derived | GET ok empty | empty chrome |
| GET fail | — | network | GET error | toast · demo SSOT |
| Tap day | dayKey | user | — | push `attendance-day` |
| Create/update/delete | — | — | POST/PUT/DELETE | **OUT** — owner `attendance` |
| Dedicated report API | CTX MISSING | — | `/attendance/report` | P2 only |

`progress: none` (không workflow chip %).

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «Báo cáo toast → push · period · KPI · day list · drill day · GET live» |
| Design | dual `#sc-attendance-report` · rewire hero Báo cáo · control-map §B |
| SA | giữ GetList proxy · **cấm** invent report path · Step 4b N/A P1 · optional from/to P2 |
| Dev iOS + Android | cùng §B · wire toast → push · prefix mobile-bff |

## Demo SSOT (fallback UI only — **không** fake GET 200)

| Case | KPI / days |
|------|------------|
| tuần mẫu | đủ công 2 · checks 4 · inZone 100% · out 0 · rows T7/T6 |
| empty | empty «Không có dữ liệu kỳ này» |
| Back | Chấm công → hub |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-ATT-RPT-NAV-01 | toast only | Nav push report |
| GAP-MOB-ATT-RPT-DATA-01 | — | Bind KPI + days from GetList |
| GAP-MOB-ATT-RPT-DEMO-01 | no report screen | own `#sc-attendance-report` |
| GAP-MOB-ATT-RPT-API-01 | report MISSING | document · P1 aggregate |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success khi GET fail  
- Invent mobile path `attendance/report` · `attendance/summary`  
- Bind `mfeStdUrl` / ERP.* / web Excel  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Ship từ hardcode khi BFF live → **GAP-MOB-REAL-02**  
- Enqueue POST · re-enqueue attendance-day → **GAP-MOB-ACT-07/06**  

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
