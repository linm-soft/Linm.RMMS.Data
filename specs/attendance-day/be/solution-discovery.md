# SA — Solution — attendance-day (mobile · Chi tiết ngày công)

| Field | Value |
|-------|-------|
| feature | `attendance-day` |
| title | [Mobile] [Chấm công] -> Chi tiết ngày công |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_cbc3f3ce`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-ATT-DAY-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** push `#sc-attendance-day` `DES-MOB-ATT-DAY` · **cấm** sheet chrome / `#sheet-*` / Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| domain | **Patrol** · `AttendanceLogsController.GetList` + client filter `dayKey` · **cấm** invent `api/v1/attendance-day` / `AttendanceDayController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-attendance-day` · `ui/review/demo-parity.md` · `task_db7380c8` |
| prior · po | **confirmed** · `po/requirement.md` · `task_d3e63a01` |
| prior · data_analy | **confirmed** · `_data-analy/attendance-day-control-hint.md` · `attendance-day-bff-endpoints.md` · `attendance-day-action-tree.md` · `attendance-day-real-data.md` · contentHash `sha256:attendance-day-control-hint-20260831` · realDataHash `sha256:attendance-day-real-data-20260831` · bffContentHash `sha256:patrol-attendance-logs-list-day-filter` · actionTreeHash `sha256:attendance-day-action-tree-20260831` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| version_mismatch_action | **recheck_new** — stamp SSOT workflow `2026.08.31.2` · rules `2026.08.31.2` · agent-sa-mobile `2026.08.20.03` (design/po stamped `2026.08.25.01` · contentHash khớp) |
| versionGate | `rechecked` |
| requestSource | run packet `task_cbc3f3ce` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_cbc3f3ce` |
| confirmedBy | agent autoApprove · `task_cbc3f3ce` |
| updatedAt | `2026-08-31T03:05:00.000Z` |
| thisAction | **Chi tiết ngày công** `#sc-attendance-day` only · entry hub day row · GET list + client filter `dayKey` · display hero/summary/logs · **cấm** gộm hub hero/segment/POST · `attendance-report` · `supervise-detail` GetById |

**Cấm:** invent `api/v1/attendance-day` / `AttendanceDayController` · fork `AttendanceLogDto` mobile-only · invent date-filter BE P1 · app `:5101` · DbContext trên Mobile.Bff · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · gộp sibling (`GAP-MOB-ACT-01/02`) · start `pending_confirm` / sibling (`GAP-MOB-ACT-06`) · enqueue GET load / tap log drill (`GAP-MOB-ACT-07`) · re-scan demo · Write MFE/native ở role SA · fake GET 200 · POST/PUT/DELETE attendance · system `UIAlert` / `AlertDialog` · embed map P1 · Step 4b / migration / e2e ở role này.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (detail = **no write queue** · GET fail → demo SSOT · screen vẫn mở).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol · `AttendanceLogsController` · table `rmms_attendance_logs` |
| API downstream | `GET api/v1/patrol/attendance-logs` · XCO via `AllowedCompanyIds` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `patrol/*` |
| App | iOS `AttendanceRepositoryImpl.fetchLogs` · Android same + `ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Client filter | nav `dayKey` epoch start-of-day local · filter `CheckInAt` post-GET · reuse `AttendanceDtoMapper` bucket logic |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | hub hero/POST · report APIs · GetById drill · embed map · invent date query BE |

### Route decision

| | Choice |
|--|--------|
| Slug | `attendance-day` → **screen** · 1 màn `#sc-attendance-day` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | **chỉ** `GET patrol/attendance-logs` (Bearer) + **client filter** `dayKey` |
| App path P1 write | **none** — readonly detail |
| Nav siblings | `go('attendance')` back hub · tap log row toast P1 · **cấm** `go('supervise-detail')` |
| Step 4b | **N/A** — reuse GetList live + client filter · **cấm** `/new-endpoint` |
| Rationale | Live Patrol GetList đủ aggregate day · hub đã dùng cùng endpoint · **cấm** invent attendance-day path |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `AttendanceDayController` local trên BFF |
| BE HTTP | `AttendanceLogsController` `[Route("api/v1/patrol/attendance-logs")]` | live GetList · query `search`/`status`/`route`/`onlyOutZone`/`page`/`pageSize` |
| Web BFF (ref) | `web-bff/…/patrol/attendance-logs` | mobile **không** gọi web-bff |
| Response DTO | `ApiResponse<AttendanceLogPagedResult>` → `data.items[]` | **cấm** fork app-only DTO |
| DTO fields P1 | `Id` · `CheckInAt` · `Route` · `Status` · `InZone` · (`Lat`/`Lng` readonly nếu bind sub) | bind §B · `Code`/`UserName`/`KmPoint`/`Note` **không** bind P1 day summary |
| HTTP app | extend `AttendanceRepository` (reuse list) **hoặc** `AttendanceDayRepository` same GET | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Mapper | extend `AttendanceDtoMapper` · day filter · badge/range/count derived | reuse hub bucket logic |
| Demo fallback | `AttendanceCopy.demoDays` + detail SSOT rows | GET fail → demo · screen **vẫn mở** · **cấm** fake 200 |
| Kit chrome | `LinmTopBar` · Text hero · `LinmBadge` · `LinmListRow` · `LinmSectionLabel` · `LinmEmptyChrome` · `LinmToast` | Design `kit_missing_confirm` **N/A** |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` | **cấm** invent / segment trên detail (`GAP-TAB-01`) |

---

## BFF / API contract (từ analy — **cấm** invent)

Nguồn: `_data-analy/attendance-day-bff-endpoints.md` · `attendance-day-real-data.md` §B · verify live `AttendanceLogsController.GetList` + `AttendanceLogDto` (2026-08-31).

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| Load ngày (logs) | GET | `patrol/attendance-logs` | `AttendanceLogsController.GetList` | **yes** · client filter `dayKey` |
| Filter ngày | — | — | local | nav `dayKey` epoch start-of-day |
| Summary aggregate | — | — | local | badge/range/count derived |
| Nav back hub | — | — | local | `go('attendance')` |
| Toast err / empty | — | — | local | demo SSOT + `LinmToast` · **cấm** fake 200 |
| Tap log row | — | — | toast P1 | **cấm** GetById push |
| POST check-in | POST | `patrol/attendance-logs` | CreateAsync | **OUT** — owner `attendance` |
| GetById | GET | `patrol/attendance-logs/{id}` | GetById | **OUT** P1 — owner `supervise-detail` |
| Report APIs | GET | `/attendance/report` · `/attendance/summary` | — | **OUT** — owner `attendance-report` |

### Query params (list — reuse parent)

`search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` (50 default)

**Không** có `fromDate`/`toDate`/`dayKey` query P1 — filter client sau GET.

### Client filter rule

| Input | Rule |
|-------|------|
| nav `dayKey` | epoch seconds · start-of-day local |
| `CheckInAt` | parse ISO → `Calendar.startOfDay` == `dayKey` |
| empty filter | empty chrome + demo SSOT nếu GET fail |
| sort logs | `CheckInAt` asc per day |

### Response shape (live)

`ApiResponse<AttendanceLogPagedResult>` → `data.items[]` = `AttendanceLogDto[]`:

| DTO field | Detail zone |
|-----------|-------------|
| `CheckInAt` | logTime · rowRange min/max |
| `Route` | logSub · rowRoute |
| `Status` | logSub |
| `InZone` | logSub · logBadge |
| `Lat` · `Lng` | **không** bind P1 list row (readonly optional sub) |
| `Id` | nav key / future P2 drill |
| `Code` · `UserName` · `KmPoint` · `Note` | **không** bind P1 day summary |

**Cấm** app fork DTO khác BFF table · **cấm** invent path `attendance-day`.

### Display rules (real-data §B)

| Line | Rule |
|------|------|
| dayHero | nav `dayTitle` hoặc format `E dd/MM` từ `dayKey` |
| badge | 0 → Nghỉ · 1 → Đã chấm · ≥2 → Đủ công · any outZone → warn optional |
| range | 0 logs → «—» · 1 → `HH:mm` · ≥2 → `{min} – {max}` local |
| route | first log `Route` · ca = demo «Ca sáng» khi offline |
| count | `{n} lần chấm` · 0 → hide section / show empty |
| log row | sort `CheckInAt` asc · sub = `{Route} · {Status} · {InZone VN}` |
| inZone | `true` → Trong vùng · `false` → Ngoài vùng |

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.attendance-logs.read` | GET list | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `patrol.attendance-logs.create/update/delete` | Writer | **không** gọi turn này |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** DATE form · `CheckInAt` UTC store · display local | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_get_only** | **API** `GET …/attendance-logs` | `/implement-view-cross-company` | **Đã có** BE `GetListAsync` · XCO giữ · app filter client · **cấm** bypass |
| SHARE | **tenant_keep** | đọc existing `rmms_attendance_logs` · **không** bảng mới | `/implement-shared-table` | migration **không** |
| Offline | **demo fallback** · screen **vẫn mở** | GET fail → demo SSOT + toast | offline-sync | **cấm** full-screen block · **cấm** fake 200 · **không** OfflineQueue (readonly) |
| GPS | **readonly display** | Lat/Lng trên log sub nếu bind | — | **không** request CLLocation/Fused trên detail (`AC-D-02`) |
| Camera | **n/a** | — | — | **không** capture |
| Map | **n/a** P1 | **không** embed map · **không** CTA bản đồ | — | khác supervise-detail |
| Push | **n/a** | — | — | — |
| Store | **n/a** detail | không signup / xóa TK | `GAP-SA-STORE-01` | **cấm** localhost/LAN listing · family `1` **cấm** iPad |
| Step 4b | **N/A** | không endpoint mới · **cấm** date-filter BE P1 | — | reuse GetList live |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-31T03:05:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** — read existing `AttendanceLogEntity` / `rmms_attendance_logs` |
| Client store | detail VM state · demo in-memory fallback only · **không** write queue |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-31 / `task_cbc3f3ce`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/attendance-logs` | BE `AttendanceLogsController.GetList` + XCO + Mobile.Bff proxy | **Giữ** · app path `patrol/attendance-logs` |
| iOS `AttendanceRepositoryImpl.fetchLogs` | `GET patrol/attendance-logs` live | **Giữ** · reuse cho detail filter |
| `AttendanceDtoMapper.days` | hub 7-day bucket live | **Giữ** · extend filter single `dayKey` |
| `AttendanceDayController` / `api/v1/attendance-day` | **không** | **Cấm** tạo |
| Native `#sc-attendance-day` | **chưa** (hub day row → toast `attendance.toast.dayDetail`) | **DELTA UI** dual detail kit · push + GET filter bind |
| Hub `AttendanceViewModel.tapDay` | toast only | **wire** push + `dayKey` + `dayTitle` · supersede toast |
| Sibling `attendance-report` | toast P1 · enqueue `task_eb560c57` | **cấm** start |
| Sibling `supervise-detail` | GetById 1 log · **≠** slug | tap log row toast P1 · **cấm** gộp |
| Demo parity dual | Design closed `#sc-attendance-day` | fallback SSOT T7 09/08 · CN 10/08 |

### Demo / fallback SSOT

| Case | dayTitle | badge | range | routeShift | count | logs |
|------|----------|-------|-------|------------|-------|------|
| đủ công | T7 09/08 | Đủ công | 07:05 – 16:40 | QL.1 · Ca sáng | 2 lần chấm | 07:05 · 16:40 · QL.1 · Đúng tuyến · Trong vùng |
| nghỉ | CN 10/08 | Nghỉ | — | — | 0 | empty «Không có lần chấm trong ngày» |
| Back | — | — | — | — | — | Chấm công → hub |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-attendance-day` screen | topbar · hero · badge · summary rows · section logs · empty · toast | GET list + client filter `dayKey` · nav local · derived aggregate · demo fallback | `AttendanceLog[]` filtered · FormMode **none** (readonly) |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Chấm công | — | local | `go('attendance')` · iOS text+chevron · Android icon-only |
| title | Chi tiết ngày công | — | fixed | dual SSOT |
| dayHero | (T7 09/08) | nav `dayTitle` | nav / derived | ≥24/28 bold |
| dayBadge | Đủ công / Nghỉ / Đã chấm | derived | count logs day | aggregate §3.5 PO |
| rowRange | Khoảng giờ | `CheckInAt` min/max | GET filtered | 0 → «—» |
| rowRoute | Tuyến · ca | `Route` | GET first log | shift demo offline |
| rowCount | Số lần chấm | derived | count filtered | `{n} lần chấm` |
| sectionLogs | Các lần chấm | — | fixed | hidden khi empty |
| logTime | (HH:mm) | `CheckInAt` | GET per log | local |
| logSub | Route · Status · InZone | `Route` · `Status` · `InZone` | GET per log | VN map |
| logBadge | Trong vùng / Ngoài vùng | `InZone` | GET | optional |
| emptyDay | Không có lần chấm… | derived | count=0 | `LinmEmptyChrome` |
| toastErr | (lỗi mạng) | — | after GET fail | `LinmToast` · demo bind |
| toastLogTap | Chi tiết lần chấm | — | tap log row | P1 stub · **cấm** GetById push |

**Cấm** invent DTO day aggregate / `attendance-day` path.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub day row | push `#sc-attendance-day` + `dayKey` + `dayTitle` · **cấm** toast-only khi pack ship | `attendance-day` (this) |
| Back | `go('attendance')` | `attendance` reuse |
| Appear load | GET list + filter `dayKey` | same slug (`GAP-MOB-ACT-07`) |
| Empty day | EmptyChrome · badge Nghỉ | same slug |
| Network fail | demo SSOT · screen mở · toast | same slug |
| Tap log row | toast **Chi tiết lần chấm** · **cấm** push supervise-detail | same slug |
| Thiếu dayKey nav | back hub + toast · **cấm** blank invent | same slug |

**Cấm** nav stub giả sibling · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog` / `window.alert`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-ATT-DAY-PACK-01 | **closed** PO+Design · packKind=`screen` |
| GAP-MOB-ATT-DAY-NAV-01 | Dev wire hub row push + `dayKey` + `dayTitle` · supersede toast-only |
| GAP-MOB-ATT-DAY-SCR-01 | Dev ship dual `#sc-attendance-day` `DES-MOB-ATT-DAY` |
| GAP-MOB-ATT-DAY-DEMO-01 | Design closed dual · Dev rewire hub row |
| GAP-MOB-ATT-DAY-DATA-01 | GET list live + client filter · fail → demo SSOT · **cấm** mock-only khi BFF OK |
| GAP-MOB-ATT-DAY-TITLE-01 | Title dual «Chi tiết ngày công» · back iOS text / Android icon-only |
| GAP-MOB-ACT-01/02 | **none** — 1 screen · không child form/sheet · **≠** supervise-detail |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw NavBar/TabView |
| GAP-MOB-ACT-06 | Sibling `attendance-report` · **cấm** auto start |
| GAP-MOB-ACT-07 | GET / chrome / tap log toast cùng slug · **không** enqueue |
| GAP-MOB-BFF-01 | **không** hàng mới — GetList live đủ |
| GAP-MOB-REAL-01/02 | §B khớp BFF · **cấm** ship hardcode khi BFF live |
| GAP-TAB-01 | `tabs: none` surface · shell Tab Tuần đường giữ |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/AttendanceDay/*` (new) | `presentation/feature/attendanceday/*` |
| Use case | `FetchAttendanceDayUseCase` (reuse `AttendanceRepository.fetchLogs` + filter) | same |
| Repo | `AttendanceRepository` → `GET patrol/attendance-logs` | same |
| Mapper | extend `AttendanceDtoMapper` · day filter · summary + log rows | same |
| State | detail · loading · toast · usingDemoFallback · dayKey/dayTitle | same |
| DI | `AppContainer` wire VM + router push | Hilt ViewModel |
| Shell | push từ hub · `LinmTabBar` **giữ** tab field · **không** segment | same |
| Entry wire | hub day row toast → **push** + `dayKey` + `dayTitle` · supersede toast-only | same |
| Offline | appear: try GET → fail → demo SSOT | same |
| Demo SSOT | `AttendanceCopy.demoDays` + detail log rows T7/CN | same |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · hardcode production thay live khi GET OK.

---

## VERIFY GATE (roleOnly=`sa`)

| Check | Result |
|-------|--------|
| be/solution-discovery.md | **PASS** · solution_confirm approve · BFF map analy |
| Design + control-hint + real-data §B | **PASS** · read · **cấm** invent API / control |
| be_repo_confirm | **PASS** · `Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| Live verify GetList + AttendanceLogDto + XCO | **PASS** |
| Step 4b / migration | **N/A** — reuse GetList + client filter |
| yarn build / e2e / start:std | **SKIP** (cấm role SA) |
| Write MFE / native | **SKIP** (cấm role SA) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `attendance-day` / **`screen`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET patrol/attendance-logs` + client filter `dayKey` · Step 4b **N/A** |
| Real-data | `_data-analy/attendance-day-real-data.md` §A+§B |
| GPS | readonly Lat/Lng nếu bind sub · **không** request device location |
| Tasks đề xuất | `T-IOS-ATT-DAY` · `T-AND-ATT-DAY` · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | hub day row → push detail · back hub · tap log toast P1 |
| Delta Dev | ship `#sc-attendance-day` dual · wire hub toast → push · GET filter bind · badge/range/count derived |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl · **cấm** role SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T03:05:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-control-hint-20260831 |
| realDataHash | sha256:attendance-day-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-list-day-filter |
| actionTreeHash | sha256:attendance-day-action-tree-20260831 |
| taskId | `task_cbc3f3ce` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
