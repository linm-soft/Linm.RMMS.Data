# HTML → native map — attendance-day

Cite SSOT `docs/html-to-native-map.md`. Feature deltas (`#sc-attendance-day`):

| Demo | Kit dual | Notes |
|------|----------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | title dual **Chi tiết ngày công** · leading back |
| `.nav-btn` / `.icon-btn` back `#i-chevron-left` | `LinmTopBar` leading | `go('attendance')` · iOS text «Chấm công» + chevron · Android icon-only · **cấm** reimplement hub |
| `.hero-day` dayTitle | Display Text bold | iOS **28** · Android **24** · nav `dayTitle` |
| `.badge` Đủ công / Nghỉ | `LinmBadge` | derived aggregate · ok / idle / warn |
| `.card-group` `.row` Khoảng giờ | `LinmListRow` | label **13** / value **≥16** · min/max `CheckInAt` |
| `.row` Tuyến · ca | `LinmListRow` | first log `Route` · shift demo «Ca sáng» offline |
| `.row` Số lần chấm | `LinmListRow` | `{n} lần chấm` |
| `.section-label` Các lần chấm | `LinmSectionLabel` | hidden khi count=0 |
| `.row` log time + sub | `LinmListRow` | title `CheckInAt` HH:mm · sub `{Route} · {Status} · {InZone VN}` · onTap toast |
| `.badge` log InZone optional | `LinmBadge` | Trong vùng / Ngoài vùng |
| empty day | `LinmEmptyChrome` | «Không có lần chấm trong ngày» · badge Nghỉ |
| toast | `LinmToast` | GET fail · tap log «Chi tiết lần chấm» · **cấm** `window.alert` |
| `.tab` / DES-MOB-TABBAR | `LinmTabBar` | shell · selected **Tuần đường** · label **13** · **cấm** invent |

**Bind (real-data §B):**

| Line | Rule |
|------|------|
| dayHero | nav `dayTitle` hoặc format `E dd/MM` từ `dayKey` |
| badge | 0 → Nghỉ · 1 → Đã chấm · ≥2 → Đủ công · any outZone → warn optional |
| range | 0 logs → «—» · 1 → `HH:mm` · ≥2 → `{min} – {max}` local |
| route | first log `Route` · ca = demo «Ca sáng» khi offline |
| count | `{n} lần chấm` · 0 → hide section / show empty |
| log row | sort `CheckInAt` asc · sub = `{Route} · {Status} · {InZone VN}` |
| inZone | `true` → «Trong vùng» · `false` → «Ngoài vùng» |
| nav key | `dayKey` (epoch) · `dayTitle` (VN) |
| tap log | toast P1 · **cấm** GetById push |

**Verify dual kit:** `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` — `kit_missing_confirm` **N/A**.

**Cấm:** raw `NavigationBar` / M3 bar / `TabView` · WebView HTML · `mfeStdUrl` · invent `api/v1/attendance-day` · bottom-sheet chrome · embed map · POST/PUT/DELETE.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T03:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-control-hint-20260831 |
| taskId | `task_db7380c8` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
