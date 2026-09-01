# Team lead — Task — attendance-day (mobile screen · Chi tiết ngày công)

| Field | Value |
|-------|-------|
| feature | `attendance-day` |
| title | [Mobile] [Chấm công] -> Chi tiết ngày công |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-ATT-DAY-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** push `#sc-attendance-day` `DES-MOB-ATT-DAY` · **cấm** sheet chrome / `#sheet-*` / Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| route_confirm | **route_a** (autoApprove=ON) — hub `#sc-attendance` day row → push `#sc-attendance-day` + `dayKey` + `dayTitle` · Back → `go('attendance')` · tap log row → toast **Chi tiết lần chấm** P1 · **cấm** toast-only khi pack ship · **cấm** `go('supervise-detail')` GetById · **cấm** embed map / CTA bản đồ · **cấm** `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/attendance-day` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web |
| prior · data_analy | **confirmed** · `_data-analy/attendance-day-control-hint.md` · `attendance-day-bff-endpoints.md` · `attendance-day-action-tree.md` · `attendance-day-real-data.md` · contentHash `sha256:attendance-day-control-hint-20260831` · realDataHash `sha256:attendance-day-real-data-20260831` · bffContentHash `sha256:patrol-attendance-logs-list-day-filter` · actionTreeHash `sha256:attendance-day-action-tree-20260831` |
| prior · po | **confirmed** · `po/requirement.md` · `task_d3e63a01` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-attendance-day` · `ui/review/demo-parity.md` · `task_db7380c8` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · `task_cbc3f3ce` |
| taskId | `task_f515c7f2` |
| updatedAt | `2026-08-31T03:10:00.000Z` |
| thisAction | **Chi tiết ngày công** `#sc-attendance-day` only · entry hub day row · GET list + client filter `dayKey` · display hero/summary/logs · **cấm** gộp hub hero/segment/POST · `attendance-report` · `supervise-detail` GetById |

**Cấm:** gộp `#sc-attendance` hub hero/segment/POST · `#sc-supervise-detail` GetById · `attendance-report` · invent `api/v1/attendance-day` / `AttendanceDayController` · invent date-filter BE P1 · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `NavigationBar` / M3 bar / `TabView` · watermark Gói / device label / «Có mạng» · hardcode production khi GET OK · embed map P1 · POST/PUT/DELETE attendance · start sibling `attendance-report` (`GAP-MOB-ACT-06`) · enqueue GET / chrome / tap log toast (`GAP-MOB-ACT-07`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có) · Step 4b / migration · TL chạy e2e / `yarn build` / `yarn start:std` · implement native Write ở role TL.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Patrol · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | **chỉ** `GET patrol/attendance-logs` Bearer + **client filter** `dayKey` · XCO giữ |
| kit | reuse map dual — `LinmTopBar` · Text hero · `LinmBadge` · `LinmListRow` · `LinmSectionLabel` · `LinmEmptyChrome` · `LinmToast` · `LinmTabBar` shell · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** prior attendance hub · **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse live `GET patrol/attendance-logs` + client filter · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: `#sc-attendance` day row tap → **push** `#sc-attendance-day` `DES-MOB-ATT-DAY` pass `dayKey` (epoch start-of-day) + `dayTitle` · **thay** toast-only `attendance.toast.dayDetail` khi pack ship · **cấm** GetById / `go('supervise-detail')`. Back / leading «Chấm công»+chevron (iOS) / icon-only (Android) → `go('attendance')` · **cấm** reimplement hub. Appear: GET list + filter `dayKey` · bind hero/badge/summary/logs · empty count=0 → EmptyChrome + badge Nghỉ · network fail → demo SSOT + toast · screen **vẫn mở** · **cấm** fake 200. Tap log row → toast **Chi tiết lần chấm** P1 · **cấm** push supervise-detail. Thiếu dayKey nav → back hub + toast · **cấm** blank invent. Shell Tab 5 **giữ** selected **Tuần đường** · pack `tabs: none` · **cấm** invent segment/tab trên detail (`GAP-TAB-01`). |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng (không invent tab) |

IA lock (design §2 / ux-analy / SA): `(auth) Login → Tab 5 · Tuần đường → segment Chấm công → #sc-attendance → push #sc-attendance-day · Back = attendance`. **Cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar` / `LinmTopBar`.

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `route_confirm=route_a` · `2026-08-31T03:10:00.000Z`.

---

## Live gap (TL audit 2026-08-31)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-attendance-day` | **DELTA** — **chưa** feature folder · hub `tapDay` = toast `attendance.toast.dayDetail` only | **T-IOS-ATT-DAY** |
| Android `#sc-attendance-day` | **DELTA** — **chưa** `attendanceday` · hub day tap = toast only | **T-AND-ATT-DAY** |
| `GET …/patrol/attendance-logs` | BE `AttendanceLogsController.GetList` + XCO + Mobile.Bff proxy **live** · iOS `AttendanceRepositoryImpl.fetchLogs` · Android same | **reuse** · Dev filter single `dayKey` post-GET |
| `AttendanceDtoMapper.days` | hub 7-day bucket live | **Giữ** · extend filter single `dayKey` + summary aggregate |
| `AttendanceDayController` / `api/v1/attendance-day` | **không** | **Cấm** tạo |
| Hub `AttendanceViewModel.tapDay` | toast stub | **wire** push + `dayKey` + `dayTitle` · supersede toast-only |
| Sibling `attendance-report` | toast P1 · enqueue `task_eb560c57` | **cấm** start |
| Sibling `supervise-detail` | GetById 1 log · **≠** slug | tap log row toast P1 · **cấm** gộp |
| Demo parity dual | Design closed `#sc-attendance-day` | fallback SSOT T7 09/08 · CN 10/08 |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit detail | dual map shipped · Design `kit_missing_confirm` **N/A** | Dev **cấm** raw NavBar/TabView · **cấm** `T-KIT-*` |
| Foot «Phiên bản Gói…» / device label | demo chrome | **cấm ship** |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-ATT-DAY | kit | — | **n/a** | — | Kit detail **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit · **cấm** invent kit |
| **T-IOS-ATT-DAY** | ios | SA · route_a | pending | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM layer | Ship `Presentation/Features/AttendanceDay/*` · kit parity · GET list + filter `dayKey` · offline demo · wire hub → push · badge/range/count derived · log rows · tap log toast · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-ATT-DAY** | android | SA · route_a | pending | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/attendanceday/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — GetList **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-TAB-01 | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | Shell Tab **Tuần đường** · pack `tabs: none` · **cấm** invent segment trên detail (`GAP-TAB-01` · `tab-index-analy-review.md`) |
| T-QA-ATT-DAY | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `attendance-day` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/attendance-day` · **cấm** sibling hub POST/report/supervise in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`attendance` hub hero/POST · `attendance-report` · `supervise-detail` GetById) vào task file này như in-scope implement. Sibling giữ reuse / `pending_confirm` — **cấm** auto start (`GAP-MOB-ACT-06`).

---

## T-IOS-ATT-DAY — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-ATT-DAY` · `DES-MOB-TABBAR` · `#sc-attendance-day` |
| Pattern | Screen push · **không** Modal/Sheet · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | text «Chấm công» + chevron · `go('attendance')` · e2e `btn-att-day-back` · **cấm** reimplement hub |
| title | `LinmTopBar` title | **Chi tiết ngày công** fixed |
| dayHero | Display Text bold **28** | nav `dayTitle` hoặc format `E dd/MM` từ `dayKey` |
| dayBadge | `LinmBadge` | derived · 0→Nghỉ · 1→Đã chấm · ≥2→Đủ công · any outZone→warn optional |
| rowRange | `LinmListRow` | label **Khoảng giờ** · min/max `CheckInAt` · 0→«—» |
| rowRoute | `LinmListRow` | label **Tuyến · ca** · first log `Route` · shift demo «Ca sáng» offline |
| rowCount | `LinmListRow` | label **Số lần chấm** · `{n} lần chấm` |
| sectionLogs | `LinmSectionLabel` | **Các lần chấm** · hidden khi count=0 |
| logTime | `LinmListRow` title | `CheckInAt` HH:mm local · sort asc |
| logSub | `LinmListRow` subtitle | `{Route} · {Status} · {InZone VN}` |
| logBadge | `LinmBadge` optional | Trong vùng / Ngoài vùng · `InZone` |
| emptyDay | `LinmEmptyChrome` | «Không có lần chấm trong ngày» · badge Nghỉ |
| toast | `LinmToast` | GET fail · tap log · thiếu dayKey · **cấm** `UIAlert` |
| tabField | `LinmTabBar` | shell selected **Tuần đường** · label **13** · **cấm** invent |

**Cấm** raw `NavigationBar` / `TabView` product chrome · **cấm** ship foot Gói / device label · **cấm** «Có mạng» · **cấm** bottom-sheet chrome · **cấm** CTA bản đồ / embed map.

### Demo / fallback SSOT

| Case | dayTitle | badge | range | routeShift | count | logs |
|------|----------|-------|-------|------------|-------|------|
| đủ công | T7 09/08 | Đủ công | 07:05 – 16:40 | QL.1 · Ca sáng | 2 lần chấm | 07:05 · 16:40 · QL.1 · Đúng tuyến · Trong vùng |
| nghỉ | CN 10/08 | Nghỉ | — | — | 0 | empty «Không có lần chấm trong ngày» |
| Back | — | — | — | — | — | Chấm công → hub |

### Bind (real-data §B · SA)

| Line | Rule |
|------|------|
| dayHero | nav `dayTitle` hoặc format `E dd/MM` từ `dayKey` |
| badge | 0→Nghỉ · 1→Đã chấm · ≥2→Đủ công · any outZone→warn optional |
| range | 0 logs→«—» · 1→`HH:mm` · ≥2→`{min} – {max}` local |
| route | first log `Route` · ca=demo «Ca sáng» offline |
| count | `{n} lần chấm` · 0→hide section / show empty |
| log row | sort `CheckInAt` asc · sub=`{Route} · {Status} · {InZone VN}` |
| inZone | `true`→«Trong vùng» · `false`→«Ngoài vùng» |
| nav key | `dayKey` (epoch) · `dayTitle` (VN) |

### API / store

| Step | Spec |
|------|------|
| Appear | `FetchAttendanceDayUseCase` → reuse `AttendanceRepository.fetchLogs` → `GET patrol/attendance-logs` Bearer · filter `dayKey` client |
| Repo | extend `AttendanceRepository` **hoặc** `AttendanceDayRepository` same GET · **cấm** fork DTO |
| Mapper | extend `AttendanceDtoMapper` · day filter · summary + log rows · badge/range/count derived |
| Fail / offline | `AttendanceCopy.demoDays` + detail log rows T7/CN · screen **vẫn mở** · toast · **cấm** native alert · **cấm** fake 200 · **không** OfflineQueue |
| Empty day | `LinmEmptyChrome` · badge Nghỉ |
| 403 XCO | toast · back hub |
| Thiếu dayKey | back hub + toast · **cấm** blank invent |
| Tap log row | toast **Chi tiết lần chấm** · **cấm** GetById push |
| Sibling API | **cấm** POST/PUT/DELETE attendance / report APIs trên slug này |

### Router / shell

| Entry | Behavior |
|-------|----------|
| Hub day row / `tapDay` | **thay** toast → push `#sc-attendance-day` + `dayKey` + `dayTitle` |
| Back | `go('attendance')` · **cấm** reimplement hub |
| log row tap | toast P1 · **cấm** supervise-detail |
| DI | `AppContainer` wire `AttendanceDayViewModel` + use case + repo → `ApiClient` path `patrol/attendance-logs` |
| Shell | `LinmTabBar` giữ tab **field** (Tuần đường) · **không** segment trên detail |

**Cấm** WebView HTML · VM→URLSession trực tiếp.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md`.

---

## T-AND-ATT-DAY — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-attendance-day` · frame 412×915 |
| Pattern | Screen push · **không** Modal/Sheet · Material chrome OK |

### UI / API

Cùng bảng field · badge/range/count · demo T7/CN · bind · toast · kit cite như T-IOS.  
Title dual: **Chi tiết ngày công**.  
Back: **icon-only** `#i-chevron-left` (không bắt buộc text «Chấm công»).  
Hero: Display **24** bold. Copy VN còn lại **parity** iOS (`GAP-MOB-ALIGN-01`).

### Router / shell

| Entry | Behavior |
|-------|----------|
| Hub day tap | **thay** toast → navigate `#sc-attendance-day` + `dayKey` + `dayTitle` |
| Back | pop → hub · `attendance` reuse |
| log row tap | toast **Chi tiết lần chấm** · **cấm** GetById |
| DI | Hilt `AttendanceDayViewModel` · use case · repo → Retrofit/`ApiService` `@GET("patrol/attendance-logs")` |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/android.md`.

Optional verify (Dev, **không** TL): Mobile.Bff `dotnet build` PASS.

---

## T-BE-* — n/a

| id | Decision |
|----|----------|
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse GetList live + XCO · **cấm** `AttendanceDayController` / invent path |
| T-BE-MIG | **n/a** — không bảng mới · **cấm** `/database-migration` |
| Step 4b | **N/A** — **cấm** TL/Dev chạy migration / `/new-endpoint` / date-filter BE P1 cho pack này |

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | GET list |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| 200 | `ApiResponse<AttendanceLogPagedResult>` → `data.items[]` · filter `dayKey` · bind §B |
| empty filter | EmptyChrome · badge Nghỉ |
| 403 XCO | toast · back hub |
| Fail / offline | demo SSOT · screen **vẫn mở** · toast · **cấm** fake 200 · **cấm** native alert |

DTO bind P1 per log: `Id` · `CheckInAt` · `Route` · `Status` · `InZone`.  
`Code` · `UserName` · `KmPoint` · `Note` · `Lat` · `Lng` **không** bind P1 day summary (optional sub readonly).

### Client filter rule

| Input | Rule |
|-------|------|
| nav `dayKey` | epoch seconds · start-of-day local |
| `CheckInAt` | parse ISO → `Calendar.startOfDay` == `dayKey` |
| sort logs | `CheckInAt` asc per day |

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → detail mở · demo T7/CN SSOT · toast in-app · **cấm** full-screen block · **cấm** fake 200 |
| AC-D-02 | GPS **readonly** Lat/Lng trên log sub nếu bind · **không** request location trên detail |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` / EmptyChrome |
| AC-D-06 | Safe area · nav + hero + badge + rows + section logs + tab shell |
| AC-D-10 | Shell tab **Tuần đường** · pack **không** segment (`GAP-TAB-01`) |
| AC-D-11 | Camera **N/A** P1 · **không** capture |
| AC-D-12 | caption **13** · hero ≥**24/28** · rows ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear GET list + filter · fail → demo · empty → EmptyChrome |
| AC-F-02 | Back → `attendance` · **cấm** reimplement hub |
| AC-F-03 | Bind hero · badge · range · route · count · log rows per §B |
| AC-F-04 | Tap log → toast **Chi tiết lần chấm** · **cấm** supervise-detail push |
| AC-F-05 | Entry hub day row → push + `dayKey` + `dayTitle` · **cấm** toast-only khi ship |
| AC-F-06 | Dual parity copy SSOT (trừ back chrome) (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Badge aggregate khớp hub (`GAP-MOB-ATT-DAY-DATA-01`) |
| AC-F-08 | **Cấm** device label / proto-click / watermark Gói |
| AC-F-09 | Thiếu dayKey → back hub + toast · **cấm** blank invent |
| AC-F-10 | **Không** CTA bản đồ / embed map P1 (khác supervise-detail) |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `attendance` | reuse shipped | back parent · entry day row |
| `attendance-report` | reuse / pending (`task_eb560c57`) | toast P1 · **cấm** start |
| `supervise-detail` | **≠** slug · OUT | tap log **cấm** GetById push |
| `patrol-checkin` | sibling | **cấm** gộm hub POST |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start sibling từ TL/Dev `attendance-day`.

---

## Out of scope (this pack)

- `#sc-attendance` hub hero/segment/POST implement
- `#sc-supervise-detail` GetById / `#sc-attendance-report`
- POST/PUT/DELETE attendance · sessions check-ins
- Embed map / CTA bản đồ P1
- Invent `api/v1/attendance-day` / date-filter BE P1
- Bottom-sheet chrome · watermark Gói / device label / `mfeStdUrl` / ERP.*
- Start siblings · enqueue GET/chrome/tap log
- Step 4b / migration / e2e / `yarn start:std` ở role TL
- Implement native Write ở role TL

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `attendance-day` / **`screen`** |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-ATT-DAY` · `T-AND-ATT-DAY` · T-BE **n/a** · T-KIT **n/a** |
| BFF | **chỉ** `GET patrol/attendance-logs` + client filter `dayKey` · XCO giữ |
| Real-data | `_data-analy/attendance-day-real-data.md` §A+§B |
| UX packet | `ui/ux-analy.md` · `ui/design.md` · dual proto · `ui/html-to-native-map.md` |
| GPS | readonly Lat/Lng nếu bind sub · **không** request device location |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/attendance-day.md | **PASS** · T-IOS-ATT-DAY · T-AND-ATT-DAY · T-BE n/a · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có · autoApprove route_a |
| Kit | **PASS** · reuse map · T-KIT **n/a** |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T03:10:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-control-hint-20260831 |
| realDataHash | sha256:attendance-day-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-list-day-filter |
| actionTreeHash | sha256:attendance-day-action-tree-20260831 |
| taskId | `task_f515c7f2` |
| version_mismatch_action | **recheck_new** — stamp SSOT workflow/rules `2026.08.31.2` · khớp PO/Design/SA contentHash |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
