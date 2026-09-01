# PO — Requirement — attendance-day (mobile · Chi tiết ngày công)

| Field | Value |
|-------|-------|
| feature | `attendance-day` |
| title | [Mobile] [Chấm công] -> Chi tiết ngày công |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ATT-DAY-PACK-01 — STATUS/scan meta `sheet` = queue label · demo surface = full `#sc-attendance-day`) |
| stack | `native_dual` |
| thisAction | **Chi tiết ngày công** `#sc-attendance-day` only · entry hub `#sc-attendance` day row · **cấm** gộm hub hero/segment/POST · `attendance-report` · `supervise-detail` GetById |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_d3e63a01` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/attendance-day` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/attendance-day-control-hint.md` · `attendance-day-bff-endpoints.md` · `attendance-day-action-tree.md` · `attendance-day-real-data.md` · contentHash `sha256:attendance-day-control-hint-20260831` · realDataHash `sha256:attendance-day-real-data-20260831` · bffContentHash `sha256:patrol-attendance-logs-list-day-filter` · actionTreeHash `sha256:attendance-day-action-tree-20260831` · **no Excel** · **hash skip** — **cấm** re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-31T02:58:00.000Z` |
| taskId | `task_d3e63a01` |

**Cấm:** gộm `#sc-attendance` hero/segment/POST · `#sc-supervise-detail` GetById · `attendance-report` · invent `api/v1/attendance-day` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» · «Có mạng» · device label · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `attendance-report` (`GAP-MOB-ACT-06`) · enqueue GET load / chrome / tap log drill (`GAP-MOB-ACT-07`) · POST/PUT/DELETE trên slug · fake GET 200 · embed map P1 · re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Chi tiết ngày công** native dual (iOS SwiftUI + Android Compose): hero ngày + badge · summary rows (khoảng giờ · tuyến/ca · số lần chấm) · section **Các lần chấm** với `LinmListRow` per log. Persona: tuần đường · NV chấm công xem aggregate 1 ngày. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `attendance-day` = màn chi tiết `#sc-attendance-day` `DES-MOB-ATT-DAY`. **Cấm** gộm hub check-in POST / report / supervise GetById (`GAP-MOB-ACT-01/02`). GET list + client filter + display bind = **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`).

Entry: `#sc-attendance` day row (live P1 toast `attendance.toast.dayDetail` → **wire** push detail + `dayKey` + `dayTitle`).

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: hub day row toast-only / **chưa** màn `#sc-attendance-day` shipped → **không** đổi thành `edit_page`. Delta Design/Dev = ship full detail dual + GET list filter `dayKey` + wire hub row → push · demo rewire `#sc-attendance-day`. SSOT visual = dual HTML `#sc-attendance-day` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back text «Chấm công» + chevron · Android icon-only · title dual «Chi tiết ngày công»).

## 3. DoD (đo được)

1. Dual native push `#sc-attendance-day` `DES-MOB-ATT-DAY`: nav back → `#sc-attendance` · title **Chi tiết ngày công** · hero `dayTitle` + badge · rows **Khoảng giờ** · **Tuyến · ca** · **Số lần chấm** · section **Các lần chấm** · log rows time + route/status/inZone. Frame proto iOS 390×844 · Android 412×915. Shell Tab **Tuần đường** giữ parent · `tabs: none` trên surface · **cấm** segment trên detail (`GAP-TAB-01`).
2. Back → `go('attendance')` / pop hub (`reuse` parent · **cấm** reimplement hub).
3. Appear: GET `patrol/attendance-logs` · client filter `dayKey` (epoch start-of-day local) · bind summary + log rows · empty count=0 → EmptyChrome + badge Nghỉ · network fail → empty chrome + toast · screen **vẫn mở** · **cấm** demo SSOT / mock T7/CN · **cấm** fake 200.
4. Live-only (edit-mobile-feature): GET OK empty = EmptyChrome + Nghỉ · GET fail = empty + toast · bind BE fields only · missing Route/Status → «—» · **cấm** invent QL.1 / Ca sáng / Đúng tuyến for display.

5. Badge aggregate (khớp hub):

   | Condition | badge |
   |-----------|-------|
   | 0 logs day | Nghỉ · idle |
   | 1 log | Đã chấm · ok |
   | ≥2 logs | Đủ công · ok |
   | any `InZone=false` | Lệch zone · warn (optional P1) |

6. Hub entry: day row tap → **push** `#sc-attendance-day` + `dayKey` + `dayTitle` · **cấm** toast-only khi pack này ship (`GAP-MOB-ATT-DAY-NAV-01` · `GAP-MOB-ATT-DAY-DEMO-01`).
7. Tap log row → toast **Chi tiết lần chấm** P1 · **cấm** push `supervise-detail` / GetById P1 (`GAP-MOB-ACT-07`).
8. Kit **reuse map**: `LinmTopBar` · Text hero · `LinmBadge` · `LinmListRow` · `LinmSectionLabel` · `LinmEmptyChrome` · `LinmToast`. **Cấm** raw `NavigationBar` / M3 bar / `TabView` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
9. Typography: label/section **13** · hero **≥24 / 28** bold · row value ≥**16** (`GAP-TYP-01`).
10. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
11. GPS trên detail: **readonly** display Lat/Lng trên log sub nếu bind · **không** request location (`AC-D-02`).
12. Map: **N/A** P1 · **không** CTA bản đồ · **không** embed (khác supervise-detail).
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `attendance-day` only · login → tab field → segment Chấm công → hub → day row → detail · live sim 6.9" + emulator · store PNG `qa/store/attendance-day` · **cấm** test hub POST/report as in-scope · **cấm** `yarn e2e-qa` web.
15. BE align: **không** endpoint mới — reuse `GET patrol/attendance-logs` proxy + client filter. Step 4b **N/A**. **Cấm** `AttendanceDayController` / invent `api/v1/attendance-day`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/attendance-day.md` | detail · § UI · § API · OOS hub/report/supervise |
| CTX-02 | `docs/context/features/attendance.md` | parent hub · entry day row |
| CTX-03 | `docs/context/features/supervise-detail.md` | peer **≠** slug · GetById 1 log OUT |
| CTX-04 | `docs/context/features/attendance-report.md` | sibling unique · toast OUT |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-attendance` entry · **target** `#sc-attendance-day` | iOS 390×844 · `DES-MOB-ATT-DAY` · **hash skip** inventory từ DA |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` same | Android 412×915 · **parity** |
| DEM-03 | `specs/attendance-day/ui/prototype/` | pack stub — Design chép dual + tạo `#sc-attendance-day` |
| MAP | `docs/html-to-native-map.md` | kit topbar / badge / list row / section / empty / toast |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/attendance-day-control-hint.md` | controlHint · **hash skip read** |
| DA-02 | `specs/_data-analy/attendance-day-bff-endpoints.md` | BFF · GET list |
| DA-03 | `specs/_data-analy/attendance-day-action-tree.md` | 1 detail + siblings reuse |
| DA-04 | `specs/_data-analy/attendance-day-real-data.md` | bind §A+§B + demo SSOT |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** `api/v1/attendance-day` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmBadge` / `LinmListRow` / `LinmSectionLabel` / `LinmEmptyChrome` / `LinmToast` |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 control-hint + real-data §A+§B (**cấm** re-scan HTML). UNCLEAR field path = **none** (GAPs chốt §7).

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Chấm công | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('attendance')` · Android icon-only OK |
| title | Chi tiết ngày công | Text | * | `LinmTopBar` title | dual fixed SSOT |
| dayHero | (T7 09/08) | Text display | * | Display **≥24 / 28** bold | nav `dayTitle` |
| dayBadge | Đủ công / Nghỉ / Đã chấm | Badge | * | `LinmBadge` | derived aggregate §3.5 |
| rowRange | Khoảng giờ | ListRow | * | `LinmListRow` label **13** / value **≥16** | min/max `CheckInAt` day |
| rowRoute | Tuyến · ca | ListRow | * | `LinmListRow` | first log `Route` · shift demo offline |
| rowCount | Số lần chấm | ListRow | * | `LinmListRow` | count filtered logs |
| sectionLogs | Các lần chấm | SectionLabel | * | `LinmSectionLabel` | hidden khi empty |
| logTime | (HH:mm) | ListRow title | * | `LinmListRow` | `CheckInAt` local |
| logSub | QL.1 · Đúng tuyến · Trong vùng | ListRow subtitle | * | same | Route · Status · InZone VN |
| logBadge | Trong vùng / Ngoài vùng | Badge optional | | `LinmBadge` | `InZone` |
| emptyDay | Không có lần chấm trong ngày | EmptyChrome | | `LinmEmptyChrome` | badge Nghỉ |
| toastErr | (lỗi mạng) | Toast | * | `LinmToast` | GET fail · **cấm** fake ok |
| toastLogTap | Chi tiết lần chấm | Toast | * | `LinmToast` | tap log row P1 · **cấm** GetById push |

### Entry (parent — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| dayRow | CN/T7… · time · badge | ListRow nav | `LinmListRow` | `attendance` · wire `go('attendance-day')` + `dayKey` |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `attendance-day`? |
|---------------|--------|------|---------------------------|
| Load ngày (logs) | GET | `patrol/attendance-logs` | **yes** — client filter `dayKey` |
| Filter ngày | — | — | **local** · nav `dayKey` epoch start-of-day |
| Summary aggregate | — | — | **local** · badge/range/count derived |
| Nav back hub | — | — | **local** · `go('attendance')` |
| Toast err / empty | — | — | **local UI** | |
| Tap log row | — | — | toast P1 · **cấm** GetById push |
| POST check-in | POST | `patrol/attendance-logs` | **OUT** — owner `attendance` |
| GetById | GET | `patrol/attendance-logs/{id}` | **OUT** P1 — owner `supervise-detail` |
| Report APIs | GET | `/attendance/report` · `/attendance/summary` | **OUT** — owner `attendance-report` |

Query list reuse: `search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` (50). **Không** `fromDate`/`toDate`/`dayKey` query P1.

### Bind (real-data §B)

| UI | Source → display |
|----|------------------|
| dayHero | nav `dayTitle` hoặc format `E dd/MM` từ `dayKey` |
| dayBadge | 0 → Nghỉ · 1 → Đã chấm · ≥2 → Đủ công · any outZone → warn optional |
| rowRange | 0 logs → «—» · 1 → `HH:mm` · ≥2 → `{min} – {max}` local |
| rowRoute | first log `Route` · ca = demo «Ca sáng» khi offline |
| rowCount | `{n} lần chấm` · 0 → hide section / show empty |
| log row | sort `CheckInAt` asc · sub = `{Route} · {Status} · {InZone VN}` |
| inZone | `true` → Trong vùng · `false` → Ngoài vùng |
| nav key | `dayKey` (epoch) · `dayTitle` (VN) |

**Cấm** `GET attendance-day/{dayKey}` · `AttendanceDayController` · DbContext trên Mobile.Bff · app `:5101` · ship hardcode khi BFF live (`GAP-MOB-REAL-02`).

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-ATT-DAY-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-attendance-day`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome / `#sheet-*` trong pack này. |
| GAP-MOB-ATT-DAY-NAV-01 | Hub row toast → push | **P1 ship:** wire push + `dayKey` + `dayTitle` · supersede toast-only khi detail pack done. |
| GAP-MOB-ATT-DAY-DEMO-01 | Demo rows chưa wire | **Design:** tạo `#sc-attendance-day` dual · rewire hub row `go('attendance-day')` + pass `dayKey`. |
| GAP-MOB-ATT-DAY-DATA-01 | GET + filter | **P1:** GET list live · client filter `CheckInAt` local day = `dayKey` · fail → demo SSOT · **cấm** mock-only khi BFF OK. |
| GAP-MOB-ATT-DAY-TITLE-01 | Chrome title dual | Title dual «Chi tiết ngày công» · back iOS text «Chấm công» / Android icon-only — Design parity chrome only. |
| GAP-MOB-ATT-DAY-SCR-01 | Thiếu màn detail | **Design** ship dual `#sc-attendance-day` `DES-MOB-ATT-DAY`. |
| Tap log row | enqueue supervise-detail? | **Không** — toast P1 only (`GAP-MOB-ACT-07`). GetById = P2 optional. |
| GET load | enqueue? | **Không** — cùng slug (`GAP-MOB-ACT-07`). |
| Kit | map dual | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. |
| Sibling | `attendance-report` · `supervise-detail` · hub POST | **Không** start (`GAP-MOB-ACT-06`). **Không** enqueue mới. |
| Shift label | BE thiếu ca | **P1:** demo «Ca sáng» khi offline · **cấm** invent shift API. |
| Step 4b | New endpoint? | **N/A** — reuse GetList live. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm** · shell Tab Tuần đường giữ parent · **không** segment trên detail (`GAP-TAB-01`). |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Chi tiết ngày công | `#sc-attendance-day` `DES-MOB-ATT-DAY` · iOS + Android | **Screen** (push · **không** Modal/Sheet pack) | none (readonly detail) | GET list + filter · display hero/summary/logs · toast err · empty day · nav hub | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-attendance` hero/segment/POST · `#sc-supervise-detail` · `#sc-attendance-report` · embed map · watermark Gói.

Reuse only: `attendance` (back/entry).

Frame: iOS 390×844 · Android 412×915 · safe area · nav + hero + summary + log list không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Detail **mở** · demo SSOT §3.4 · toast lỗi · **cấm** full-screen block · **cấm** fake 200 |
| AC-D-02 | GPS deny | **N/A** request — Lat/Lng **readonly** nếu bind sub · **không** request location trên detail |
| AC-D-03 | Leave dirty | **N/A** — không form dirty |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / EmptyChrome |
| AC-D-05 | Keyboard | **N/A** — không input P1 |
| AC-D-06 | Safe area | Nav + hero + rows + section không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell Tab **Tuần đường** giữ parent · `tabs: none` surface · **cấm** invent tab / segment · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera / push | **N/A** capture P1 |
| AC-D-12 | Typography | caption/section **13** · hero ≥**24/28** · rows ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear | GET `patrol/attendance-logs` · filter `dayKey` · fail → demo SSOT · empty → EmptyChrome |
| AC-F-02 | Back | `go('attendance')` · **cấm** reimplement hub |
| AC-F-03 | Bind rows | hero · badge · range · route · count · logs per §6 |
| AC-F-04 | Tap log | toast **Chi tiết lần chấm** · **cấm** GetById push |
| AC-F-05 | Entry | Hub day row → push detail + `dayKey` · **cấm** toast-only |
| AC-F-06 | Dual parity | iOS + Android **cùng** zones + copy SSOT (trừ back chrome) (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Badge | aggregate §3.5 khớp hub |
| AC-F-08 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-09 | Thiếu dayKey nav | back hub + toast · **cấm** blank bind invent |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Load fail / offline | Demo fallback §3.4 + toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Empty day | EmptyChrome «Không có lần chấm trong ngày» · badge Nghỉ |
| Tap log row | Toast **Chi tiết lần chấm** · **cấm** system alert · **cấm** push supervise-detail |
| Back | Pop hub · không confirm |
| Success load | Không toast bắt buộc · bind UI |

## 11. Out of scope (this pack)

- `#sc-attendance` hero/segment/POST check-in implement
- `#sc-attendance-report` · `#sc-supervise-detail` GetById drill
- POST/PUT/DELETE attendance · invent date-filter BE P1
- Embed map / gis overlay trên slug
- Invent `api/v1/attendance-day` / `AttendanceDayController`
- Bottom-sheet chrome (packKind scan `sheet` = queue label → PO **screen**)
- Watermark Gói / device label / proto-click / mfeStdUrl / ERP.*
- Start siblings · enqueue GET/tap log drill
- Re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role PO
- Grid AC web / Report AC Lin*

## 12. KPI (HĐ Gói 1 — màn này)

Chi tiết ngày công = NV tuần đường xem aggregate 1 ngày (badge · khoảng giờ · tuyến/ca · danh sách lần chấm). DoD pack: `#sc-attendance-day` dual + GET list filter + kit detail — **không** omni-implement hub POST/report/supervise trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `attendance-day` / **`screen`** (confirmed · đóng GAP-MOB-ATT-DAY-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/attendance-day/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual target `#sc-attendance-day` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | Screen `#sc-attendance-day` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack detail native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-attendance-day` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmBadge` / `LinmListRow` / Section / Empty / Toast |
| BFF | `attendance-day-bff-endpoints.md` · **chỉ** GET list + client filter |
| Real-data | `attendance-day-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **parity dual** · tạo `#sc-attendance-day` · rewire hub row khỏi toast · **không** sheet chrome · **không** vẽ hub POST/report trên slug |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 · `tabs: none` surface · copy VN đúng dual SSOT (trừ sibling chưa ship → toast P1 · skip device label) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T02:58:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-control-hint-20260831 |
| realDataHash | sha256:attendance-day-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-list-day-filter |
| actionTreeHash | sha256:attendance-day-action-tree-20260831 |
| taskId | `task_d3e63a01` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
