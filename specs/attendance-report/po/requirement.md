# PO — Requirement — attendance-report (mobile · Báo cáo công)

| Field | Value |
|-------|-------|
| feature | `attendance-report` |
| title | [Mobile] [Chấm công] -> Báo cáo công |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ATT-RPT-PACK-01 — STATUS/scan meta `sheet` = queue label · demo surface = full `#sc-attendance-report`) |
| stack | `native_dual` |
| thisAction | **Báo cáo công** `#sc-attendance-report` only · entry hub `#sc-attendance` hero **Báo cáo** · **cấm** gộp hub POST Chấm vào · segment Tuần đường/Chấm công · `attendance-day` owner · web Excel/map |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_6ae4da65` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/attendance-report` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/attendance-report-control-hint.md` · `attendance-report-bff-endpoints.md` · `attendance-report-action-tree.md` · `attendance-report-real-data.md` · contentHash `sha256:3f9c045045e58aa32dbf36fb0c5a9a55dcb159b8e1c052efa69c1cad33e4c3e9` · compact `handoff/data_analy-compact.md` · **hash skip** — **cấm** re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-01T08:53:03.000Z` |
| taskId | `task_6ae4da65` |

**Cấm:** gộp `#sc-attendance` POST/segment hub · invent `api/v1/attendance/report` · `/attendance/summary` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» · device label · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start/re-enqueue `attendance-day` / hub POST / web `rpt-bao-cao-cong` (`GAP-MOB-ACT-06`) · enqueue GET load / periodSeg / KPI / chrome (`GAP-MOB-ACT-07`) · POST/PUT/DELETE trên slug · fake GET 200 · embed map / Excel P1 · re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Báo cáo công** native dual (iOS SwiftUI + Android Compose): period segment Tuần/Tháng · 4 KPI (ngày đủ công · số lần chấm · % trong vùng · ngoài vùng) · list **Chi tiết theo ngày** (day row → reuse `attendance-day`). Persona: tuần đường · NV xem tổng hợp kỳ từ logs. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · invent report controller · WebView bọc HTML · `mfeStdUrl`.

**1 action = 1 feature.** Slug `attendance-report` = màn báo cáo `#sc-attendance-report` `DES-MOB-ATT-RPT`. **Cấm** gộp hub check-in POST / day detail owner / web Kind E (`GAP-MOB-ACT-01/02`). GET list + client period aggregate + display bind = **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`).

Entry: `#sc-attendance` hero **Báo cáo** (live P1 toast `attendance.toast.report` → **wire** push report).

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: hub Báo cáo toast-only / **chưa** màn `#sc-attendance-report` shipped → **không** đổi thành `edit_page`. Delta Design/Dev = ship full report dual + GET list + client period filter + KPI/day derived + wire hero → push · demo tạo `#sc-attendance-report` + rewire `go('attendance-report')`. SSOT visual = dual HTML `#sc-attendance-report` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome: iOS back text «Chấm công» + chevron · Android icon-only · title dual «Báo cáo công»).

## 3. DoD (đo được)

1. Dual native push `#sc-attendance-report` `DES-MOB-ATT-RPT`: nav back → `#sc-attendance` · title **Báo cáo công** · `periodSeg` Tuần/Tháng (default **Tuần**) · KPI `kpiDays` · `kpiChecks` · `kpiInZone` · `kpiOut` · section **Chi tiết theo ngày** · `dayRow` list · `emptyPeriod` khi 0. Frame proto iOS 390×844 · Android 412×915. Shell Tab **Tuần đường** giữ parent · `tabs: none` trên surface · period = **segment filter** không Tab shell (`GAP-TAB-01`).
2. Back → `go('attendance')` / pop hub (`reuse` parent · **cấm** reimplement hub).
3. Appear: GET `patrol/attendance-logs` · client filter period window · bind KPI + day buckets · empty → EmptyChrome · network fail → toast + demo SSOT fallback UI · **cấm** fake 200 · **cấm** mock-only ship khi BFF OK (`GAP-MOB-REAL-02`).
4. Period rules:

   | Segment | Window (local) |
   |---------|----------------|
   | Tuần | startOfWeek → today |
   | Tháng | startOfMonth → today |

   Switch segment → re-filter client (không re-GET bắt buộc nếu cache page đủ).

5. KPI derived:

   | KPI | Rule |
   |-----|------|
   | kpiDays | count days với ≥2 logs («Ngày đủ công») |
   | kpiChecks | count logs in window |
   | kpiInZone | 0 logs → «—» · else `round(100 * inZone / total)%` |
   | kpiOut | count `InZone==false` |

6. Badge map day (khớp hub / attendance-day):

   | logs/day | Badge |
   |----------|-------|
   | 0 | Nghỉ |
   | 1 | Đã chấm |
   | ≥2 | Đủ công |

7. Hub entry: hero **Báo cáo** → **push** `#sc-attendance-report` · **cấm** toast-only khi pack này ship (`GAP-MOB-ATT-RPT-NAV-01` · `GAP-MOB-ATT-RPT-DEMO-01`).
8. Tap `dayRow` → push `attendance-day` + `dayKey` + `dayTitle` · **reuse** · **cấm** re-enqueue (`GAP-MOB-ACT-06`).
9. Kit **reuse map**: `LinmTopBar` · `LinmSegment` · KPI/Stat · `LinmSectionLabel` · `LinmListRow` · `LinmBadge` · `LinmEmptyChrome` · `LinmToast` · entry `LinmHeroAction` ghost. **Cấm** raw `NavigationBar` / M3 bar / `TabView` trên surface (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
10. Typography: label/section/segment **13** · title **17** · KPI value bold ≥**16** · list title ≥**16** (`GAP-TYP-01`).
11. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
12. GPS trên report: **N/A** — display-only derived từ logs · **không** request location (`AC-D-02`).
13. Map / Excel: **OUT** P1 · **không** embed Leaflet · **không** export (`GAP-MOB-ATT-RPT` web peer only).
14. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
15. QA (role sau): Maestro slug `attendance-report` only · login → tab field → segment Chấm công → hub → Báo cáo → report · period switch · day drill · live sim 6.9" + emulator · store PNG `qa/store/attendance-report` · **cấm** test hub POST as in-scope · **cấm** `yarn e2e-qa` web.
16. BE align: **không** endpoint mới — reuse `GET patrol/attendance-logs` proxy + client aggregate. Step 4b **N/A**. Dedicated `/attendance/report` = **P2 documented** · **cấm** invent P1.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/attendance-report.md` | report · § UI · § API MISSING · OOS Excel/map |
| CTX-02 | `docs/context/features/attendance.md` | parent hub · entry btn Báo cáo |
| CTX-03 | `docs/context/features/attendance-day.md` | sibling · reuse day drill |
| CTX-04 | `docs/context/features/rpt-bao-cao-cong.md` | web peer · Kind E · **≠** mobile |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-attendance` entry · **target** `#sc-attendance-report` | iOS 390×844 · `DES-MOB-ATT-RPT` · **hash skip** inventory từ DA |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` same | Android 412×915 · **parity** |
| DEM-03 | `specs/attendance-report/ui/prototype/` | pack stub — Design chép dual + tạo `#sc-attendance-report` |
| MAP | `docs/html-to-native-map.md` | kit topbar / segment / list / badge / empty / toast / hero |
| DI-01 | — | **no Excel** mobile P1 |
| DA-01 | `specs/_data-analy/attendance-report-control-hint.md` | controlHint · **hash skip read** |
| DA-02 | `specs/_data-analy/attendance-report-bff-endpoints.md` | BFF · GET list |
| DA-03 | `specs/_data-analy/attendance-report-action-tree.md` | 1 report + siblings reuse |
| DA-04 | `specs/_data-analy/attendance-report-real-data.md` | bind §A+§B + demo SSOT |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** invent report path |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / Segment / ListRow / Badge / Section / Empty / Toast / HeroAction |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 + real-data §A+§B (**cấm** re-scan HTML). UNCLEAR field path = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Chấm công | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('attendance')` · Android icon-only OK |
| title | Báo cáo công | Text | * | `LinmTopBar` title | dual fixed SSOT |
| periodSeg | Tuần / Tháng | Segment | * | `LinmSegment` | default **Tuần** · client filter |
| kpiDays | Ngày đủ công | KPI / Stat | * | KPI chip | days ≥2 logs |
| kpiChecks | Số lần chấm | KPI / Stat | * | KPI chip | count logs |
| kpiInZone | % Trong vùng | KPI / Stat | * | KPI chip | ratio / «—» |
| kpiOut | Ngoài vùng | KPI / Stat | * | KPI chip | `InZone==false` |
| sectionDays | Chi tiết theo ngày | SectionLabel | * | `LinmSectionLabel` | hide khi empty |
| dayTitle | (T7 09/08) | ListRow title | * | `LinmListRow` | local day key |
| daySub | range / — | ListRow subtitle | * | same | first–last `CheckInAt` |
| dayBadge | Đủ công / Nghỉ / Đã chấm | Badge | * | `LinmBadge` | hub map |
| emptyPeriod | Không có dữ liệu kỳ này | EmptyChrome | | `LinmEmptyChrome` | GET ok empty |
| toastErr | (lỗi mạng) | Toast | * | `LinmToast` | GET fail · **cấm** fake ok |

### Entry (parent — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| btnReport | Báo cáo | HeroAction ghost | `LinmHeroAction` | `attendance` · wire `go('attendance-report')` |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `attendance-report`? |
|---------------|--------|------|------------------------------|
| Load kỳ (logs) | GET | `patrol/attendance-logs` | **yes** — client period filter |
| Period filter | — | — | **local** · Tuần/Tháng window |
| KPI / day aggregate | — | — | **local** derived |
| Nav back hub | — | — | **local** · `go('attendance')` |
| Toast err / empty | — | — | **local UI** |
| Tap day row | — | — | push `attendance-day` · **reuse** |
| POST check-in | POST | `patrol/attendance-logs` | **OUT** — owner `attendance` |
| Dedicated report | GET | `/attendance/report` · `/attendance/summary` | **OUT** P1 · **P2 only** · **cấm invent** |
| Excel / map | — | web peer | **OUT** mobile P1 |

Query list reuse: `search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` (50). **Không** bắt buộc `fromDate`/`toDate` P1 (client filter). Optional from/to = P2 SA.

### Bind (real-data §B)

| UI | Source → display |
|----|------------------|
| periodSeg | local Tuần/Tháng · default Tuần |
| kpiDays | count day buckets ≥2 |
| kpiChecks | `n` logs in window |
| kpiInZone | 0 → «—» · else percent |
| kpiOut | count out-of-zone |
| day rows | sort dayKey desc · title `E dd/MM` · sub min–max · badge map |
| empty | GET ok + 0 in window |
| fail | toast + demo SSOT UI only |

**Cấm** `AttendanceReportController` · invent report path · DbContext trên Mobile.Bff · app `:5101` · ship hardcode khi BFF live (`GAP-MOB-REAL-02`).

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-ATT-RPT-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-attendance-report`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome / `#sheet-*` trong pack này. |
| GAP-MOB-ATT-RPT-NAV-01 | Hub Báo cáo toast → push | **P1 ship:** wire push · supersede toast-only khi report pack done. |
| GAP-MOB-ATT-RPT-DEMO-01 | Demo thiếu `#sc-attendance-report` | **Design:** tạo dual `#sc-attendance-report` · rewire hero `go('attendance-report')`. |
| GAP-MOB-ATT-RPT-SCR-01 | Thiếu màn report | **Design** ship dual `DES-MOB-ATT-RPT`. |
| GAP-MOB-ATT-RPT-DATA-01 | GET + aggregate | **P1:** GetList live · client period · fail → demo SSOT · **cấm** mock-only khi BFF OK. |
| GAP-MOB-ATT-RPT-API-01 | CTX `/attendance/report` MISSING | **Không invent** · P1 GetList aggregate · dedicated API = **P2**. |
| Default period | Tuần vs Tháng | **Tuần**. |
| Excel / map mobile | Bind web peer? | **OUT** P1. |
| Day tap | enqueue attendance-day? | **Không** — **reuse** push (`GAP-MOB-ACT-06`). |
| GET / period / KPI | enqueue? | **Không** — cùng slug (`GAP-MOB-ACT-07`). |
| Kit | map dual | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. |
| Sibling | hub POST · web report · day owner | **Không** start (`GAP-MOB-ACT-06`). |
| Step 4b | New endpoint? | **N/A** — reuse GetList. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm** · shell Tab Tuần đường giữ parent · period = segment filter (`GAP-TAB-01`). |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Báo cáo công | `#sc-attendance-report` `DES-MOB-ATT-RPT` · iOS + Android | **Screen** (push · **không** Modal/Sheet pack) | none (readonly report) | GET list + period aggregate · KPI · day list · empty · toast err · nav hub · day drill reuse | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-attendance` POST/segment hub · Excel · map embed · watermark Gói.

Reuse only: `attendance` (back/entry) · `attendance-day` (day tap).

## 9. Action-tree (1 action = 1 feature)

```
patrol-home
└── attendance                 ← hub · DES-MOB-ATT
    ├── (submit) check-in      ← OUT · owner attendance
    ├── attendance-day         ← reuse day tap · cấm re-enqueue
    └── attendance-report      ← this · DES-MOB-ATT-RPT · Báo cáo
        └── (GET + period agg) ← cùng slug · cấm enqueue
            └── attendance-day ← tap day · reuse
```

| feature | action | enqueue |
|---------|--------|---------|
| `attendance-report` | Báo cáo · full report screen | **this turn** |
| `attendance` | back / entry | **không** |
| `attendance-day` | tap day | **không** (reuse) |
| `rpt-bao-cao-cong` | web Kind E | **không** |

## 10. Device AC (native)

| ID | AC |
|----|----|
| AC-D-01 | Dual iOS+Android cùng DoD · kit map §5 |
| AC-D-02 | GPS **không** request trên report |
| AC-D-03 | Offline/fail: toast + demo SSOT · **cấm** fake 200 |
| AC-D-04 | Token Keychain/Encrypted trên GET |
| AC-D-05 | Camera / biometric / map / Excel **N/A** P1 |
| AC-D-06 | Typography §3.10 · `GAP-TYP-01` |
| AC-D-07 | Back HIG/Material chrome parity only |

## 11. Handoff Design

| Field | Value |
|-------|-------|
| next | `/agent-design-mobile` (pending · **không** start turn này) |
| write | `ui/design.md` · `ui/ux-analy.md` · `ui/prototype/{ios,android}/index.html` `#sc-attendance-report` |
| must | dual DES-MOB-ATT-RPT · rewire hub Báo cáo · control-map §5 · packKind→`screen` trên STATUS |
| cấm | invent report API · Excel/map · re-scan demo beyond DA inventory · mfeStdUrl |

## 12. Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | `2026-09-01T08:53:03.000Z` |
| versionGate | ok · autopilot keep_current |
| priorContentHash | sha256:3f9c045045e58aa32dbf36fb0c5a9a55dcb159b8e1c052efa69c1cad33e4c3e9 |
| taskId | `task_6ae4da65` |
| status | confirmed |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.31.2 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.09.01.1 versionGate=ok -->
