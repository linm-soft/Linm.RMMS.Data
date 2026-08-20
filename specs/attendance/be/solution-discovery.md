# SA — Solution — attendance (mobile list · Chấm công)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| title | [Mobile] Chấm công |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_58acefd1`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO + Design confirm · UI hub DES-MOB-ATT) |
| stack | `native_dual` |
| Feature Kind | **hub/list** push `#sc-attendance` · **cấm** Kind A–G web / Lin* grid / Report |
| domain | **Patrol** attendance-logs GET+POST · **cấm** invent `api/v1/attendance/*` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-attendance` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · data_analy | **confirmed** · `_data-analy/attendance-*.md` · contentHash `sha256:attendance-mobile-hub-20260819` · bffContentHash `sha256:attendance-mobile-bff-20260819` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_58acefd1` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_58acefd1` |
| updatedAt | `2026-08-19T20:45:22.000Z` |
| thisAction | **Chấm công hub** `#sc-attendance` only · GET+POST attendance-logs · toast report/day · **cấm** gộp sibling |

**Cấm:** invent report/zones endpoints · clone controller trên Mobile.Bff · app `:5101` · gộp sibling · filter invent · ERP.* · `mfeStdUrl` · native alert · start sibling `pending_confirm`.

---

## Architecture

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `AttendanceLogsController` |
| API downstream | GET/POST `api/v1/patrol/attendance-logs` |
| BFF mobile | `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `AttendanceRepositoryImpl` · Android same + `ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | report live · day detail · invent zones |

### Route decision

| | Choice |
|--|--------|
| Slug | `attendance` → hub `#sc-attendance` |
| App path | `GET` + `POST` `patrol/attendance-logs` (Bearer) |
| Step 4b | **N/A** — endpoints live · **cấm** `/new-endpoint` |
| Rationale | Live Patrol attendance-logs đủ history + check-in P1 |

---

## BFF / API contract

| Action | App path | Downstream | Live |
|--------|----------|------------|------|
| History 7d | `GET patrol/attendance-logs` | GetList | **PASS** |
| Chấm vào | `POST patrol/attendance-logs` | CreateAsync | **PASS** |
| Báo cáo | — | toast | **N/A** API P1 |
| Day detail | — | toast | **N/A** P1 |

### POST body P1

`userName` · `route`=`QL.1` · `checkInAt` · `lat`/`lng` · `inZone`=`true` · `status`=`Đúng tuyến`

DTO: `AttendanceLogDto` — `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note`

---

## Implement gates

| Gate | Decision |
|------|----------|
| TZ | **tz_na** — display local from `CheckInAt` |
| XCO | **xco_na** — current-company logs |
| SHARE | **n/a** — read/write existing `rmms_attendance_logs` |
| Offline | demo fallback · screen **mở** |
| GPS | **yes** — Chấm vào · deny → toast · no POST |
| Camera | **n/a** |
| Step 4b | **N/A** |

AskQuestion (autoApprove=ON): `solution_confirm=approve` · `2026-08-19T20:45:22.000Z`.

---

## VERIFY GATE (`task_58acefd1`)

| Check | Result |
|-------|--------|
| iOS xcodegen | **PASS** |
| iOS xcodebuild iPhone 17 Pro | **BUILD SUCCEEDED** |
| Android assembleDebug | **BUILD SUCCESSFUL** |
| Mobile.Bff dotnet build | **Build succeeded** |
| Step 4b | **N/A** — reuse GET+POST `patrol/attendance-logs` |
| Native cite | iOS `AttendanceRepositoryImpl` · Android `AttendanceRepositoryImpl` · `patrol/attendance-logs` |

---

## Persist gate

| | |
|--|--|
| Child tables | **n/a** — existing `AttendanceLogEntity` |
| Migration | **không** |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| GET+POST attendance-logs | BE + BFF proxy live | **Giữ** |
| Native `#sc-attendance` | **shipped** dual (AttendanceView / AttendanceScreen) | **VERIFY** · cite implement |
| Patrol seg → push | wired | **Giữ** |
| Report / day detail | toast | **cấm** push sibling |
| Invent report API | **không** | **Cấm** |

---

## Field map

| uiField | Label VN | dtoField | Wire |
|---------|----------|----------|------|
| largeTitle | Chấm công | — | fixed |
| segPatrol / segAtt | Tuần đường / Chấm công | — | pop / owner |
| heroTitle | Chưa / Đã chấm | derived | GET today / POST |
| heroMeta | Vị trí · Ca | Lat/Lng + demo | GPS |
| checkIn | Chấm vào | POST body | GPS+POST |
| report | Báo cáo | — | toast |
| days | 7 ngày gần đây | CheckInAt aggregate | GET |

---

## Navigation

| Control | Behavior P1 |
|---------|-------------|
| Patrol seg Chấm công | push `#sc-attendance` |
| Seg Tuần đường | pop `#sc-patrol-home` |
| Chấm vào | GPS → POST |
| Báo cáo | toast **Báo cáo công** |
| Tap day | toast **Chi tiết ngày công** |

---

## Client architecture

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/Attendance/*` | `presentation/feature/attendance/*` |
| Use case | `FetchAttendanceHistoryUseCase` · `CreateAttendanceCheckInUseCase` | same |
| Repo | `AttendanceRepositoryImpl` | same |
| Shell | `AppRouter` `showAttendanceFromField` | `MainTabScreen` route `attendance` |
| Demo | `AttendanceCopy.demoDays` / `demoHero` | same |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| Tasks | `T-IOS-ATTENDANCE` · `T-AND-ATTENDANCE` · `T-BE` **n/a** |
| Step 4b | **N/A** |
| Next slash | `/agent-tl-mobile` |
| Chain | **không** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.22 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T20:45:22.000Z |
| versionGate | rechecked |
| contentHash | sha256:attendance-mobile-hub-20260819 |
| bffContentHash | sha256:attendance-mobile-bff-20260819 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.22 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
