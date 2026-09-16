# Real-data bind — attendance-day

| | |
|---|---|
| feature | `attendance-day` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · proxy Patrol GetList attendance-logs + client day filter |
| taskId | `task_3fdb1cea` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` | CTX `attendance-day.md` · `AttendanceLogsController.GetList` · `AttendanceLogDto` | 0 logs day → empty chrome | Toast lỗi · demo SSOT fallback · **cấm** fake 200 |
| `nav` | parent row pass `dayKey` + `dayTitle` | thiếu dayKey → back hub · toast | — |
| `derived` | hub `AttendanceDtoMapper.days` bucket 1 ngày | badge/range/count | — |
| `demo` | mobile-p1 `#sc-attendance` row SSOT · target `#sc-attendance-day` | UI-only khi GET fail | **không** SSOT ship khi live OK |

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| dayHero | (T7 09/08) | Text display | — | nav | `dayTitle` | gap | yes |
| dayBadge | Đủ công / Nghỉ | Badge | — | derived | log count day | yes | yes |
| rowRange | Khoảng giờ | ListRow | — | derived | min/max `CheckInAt` | yes | yes |
| rowRoute | Tuyến · ca | ListRow | — | GET first log | `Route` · shift label | yes | yes |
| rowCount | Số lần chấm | ListRow | — | derived | count filtered logs | yes | yes |
| logTime | HH:mm | ListRow | — | GET per log | `CheckInAt` | yes | yes |
| logSub | Route · Status · InZone | ListRow | — | GET per log | `Route` · `Status` · `InZone` | yes | yes |
| logBadge | Trong vùng | Badge | — | GET | `InZone` | yes | yes |
| emptyDay | Không có lần chấm… | EmptyChrome | — | derived | count=0 | — | yes |
| toastErr | (lỗi) | Toast | — | after GET fail | — | — | yes |

§B path **khớp** `attendance-day-bff-endpoints.md` — **không** invent `attendance-day` path.

### Display rules

| Line | Rule |
|------|------|
| dayHero | nav `dayTitle` hoặc format `E dd/MM` từ `dayKey` |
| badge | 0 → Nghỉ · 1 → Đã chấm · ≥2 → Đủ công · any outZone → warn optional |
| range | 0 logs → «—» · 1 → `HH:mm` · ≥2 → `{min} – {max}` local |
| route | first log `Route` · ca = demo «Ca sáng» khi offline |
| count | `{n} lần chấm` · 0 → hide section / show empty |
| log row | sort `CheckInAt` asc · sub = `{Route} · {Status} · {InZone VN}` |
| inZone | `true` → Trong vùng · `false` → Ngoài vùng |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| status display | — (client map) | control-hint · hub same | Invent status catalog API |
| shift label | — | demo SSOT | Invent shift BE P1 |
| — | — | DB `rmms_attendance_logs` | In-app `demoDays` làm nguồn khi BFF OK |

## §D — Map / vẽ

`map: none` trên `#sc-attendance-day`. **Không** CTA bản đồ P1 (khác supervise-detail).

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Day load | AttendanceLog[] filtered | appear / nav dayKey | GET list + filter | bind summary + rows |
| Empty day | count=0 | derived | GET ok empty | empty chrome |
| GET fail | — | network | GET error | toast · demo SSOT |
| Tap log row | — | user | — | toast P1 · **cấm** GetById push |
| Create/update/delete | — | — | POST/PUT/DELETE | **OUT** — owner `attendance` |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «row hub → push · GET filter dayKey · summary + logs · screen riêng ≠ supervise-detail» · GAP demo/pack |
| Design | dual `#sc-attendance-day` · rewire demo rows · control-map khớp §B |
| SA | giữ GetList proxy · **cấm** ERP.* · Step 4b N/A · date filter BE = P2 optional |
| Dev iOS + Android | cùng §B · wire toast → push · pass dayKey · prefix mobile-bff |

## Demo rows SSOT (fallback UI only — **không** fake GET 200)

| dayKey case | dayTitle | badge | range | logs |
|-------------|----------|-------|-------|------|
| đủ công | T7 09/08 | Đủ công | 07:05 – 16:40 | 07:05 · 16:40 · QL.1 · Đúng tuyến · Trong vùng |
| nghỉ | CN 10/08 | Nghỉ | — | empty «Không có lần chấm trong ngày» |
| Back | — | — | — | Chấm công → hub |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-ATT-DAY-NAV-01 | row toast only | Nav dayKey + GET filter |
| GAP-MOB-ATT-DAY-DATA-01 | — | Bind summary + log rows from list |
| GAP-MOB-ATT-DAY-DEMO-01 | no demo screen | own `#sc-attendance-day` fallback |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success khi GET fail  
- Invent mobile-only path `attendance-day`  
- Bind `mfeStdUrl` / ERP.*  
- Skip §B ≠ BFF → **GAP-MOB-REAL-01**  
- Ship từ hardcode khi BFF live → **GAP-MOB-REAL-02**  
- Enqueue POST/PUT/DELETE · GetById primary → **GAP-MOB-ACT-07**  
- Gộp hub hero · report · supervise-detail  

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T02:55:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-real-data-20260831 |
| taskId | `task_3fdb1cea` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
