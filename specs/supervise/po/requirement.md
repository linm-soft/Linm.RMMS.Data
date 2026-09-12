# PO — Requirement — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Mobile] Giám sát — filter live + map sibling |
| this role | `po` · `/agent-po-mobile` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (PO confirm · data-analy) |
| stack | `native_dual` |
| thisAction | **edit** `#sc-supervise` — live filter sheet tuyến/ngày · segment Bản đồ → push sibling `patrol-map` · **cấm** toast giả lập filter/map |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_d7e615af` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA/Review tự confirm khi tới lượt · turn này **không** chain |
| e2eQa | ON · queued `/agent-qa*` · `yarn e2e-qa-mobile` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` this role |
| prior | data-analy **confirmed** · `handoff/data_analy-compact.md` · `specs/_data-analy/supervise-{control-hint,real-data,bff-endpoints,action-tree}.md` · contentHash `sha256:supervise-mobile-filter-live-20260912` · bffContentHash `sha256:supervise-mobile-bff-filter-20260912` · **hash skip** · **cấm** re-scan demo |
| keepPrior | prior PO `new_page` list base (`task_bdca2ab2`) + cleanup_mock live list/detail · **delta only** filter/map |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-12T09:46:46.000Z` |
| taskId | `task_d7e615af` |

**Cấm:** invent `api/v1/supervise` / `SuperviseController` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Gói N» / «gen realapp» · «Có mạng» · device label · AC tap-cycle tín hiệu · AC re-implement kit đã map (`GAP-MOB-ACT-05`) · auto-start full pipeline sibling (`GAP-MOB-ACT-06`) · enqueue submit (`GAP-MOB-ACT-07`) · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) · toast giả lập filter/map.

## 1. Goal

Giữ màn **Giám sát tuần đường** native dual (list rich-card + segment). **Delta edit_page:** (1) **Lọc** mở filter sheet live — tuyến → GET `route` · ngày → client filter `CheckInAt` · **cấm** toast «Lọc tuyến · ngày»; (2) segment **Bản đồ** → **push** sibling `patrol-map` · reset idx 0 · **cấm** toast «Bản đồ». Persona: Hạt trưởng. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`.

**1 action = 1 feature.** Slug `supervise` = list `#sc-supervise` `DES-MOB-SUPERVISE`. Filter sheet = **child owner** trên cùng slug (không feature mới). Sibling `patrol-map` / `supervise-detail` = **navigate only** · **cấm** gộp implement map/detail vào slug này (`GAP-MOB-ACT-01/02`).

Entry **giữ**: Home tile / patrol-home quick → push `#sc-supervise`.

## 2. changeScope `edit_page`

| Zone / hành vi | Current (ship) | New (Must) |
|----------------|----------------|------------|
| `btn-sup-filter` | toast «Lọc tuyến · ngày» | **Filter sheet** · Tuyến + Ngày · Apply / Clear · re-bind list |
| Filter · tuyến | không wire | GET `route=` (trim) · clear = omit param |
| Filter · ngày | không wire | client day trên `CheckInAt` · clear = all days in page · BE `fromDate`/`toDate` = **P2** |
| `segMap` idx 1 | toast «Bản đồ» + reset 0 | **push** `PatrolMapView` / `#sc-patrol-map` · reset seg 0 · **cấm** toast |
| List / cards / back / detail | live GET · EmptyChrome · tap → detail | **giữ** |
| Demo HTML filter/map | onclick toast | Design update dual prototype sheet + map CTA |

**Keep:** packKind `list` · GET `patrol/attendance-logs` · EmptyChrome live-only · kit map · detail push wired · **cấm** demoItems ship.

## 3. DoD (đo được)

1. Dual native `#sc-supervise`: nav **Trang Chủ** · title **Giám sát tuần đường** · **Lọc** · segment 2 · rich-card list. Frame proto iOS 390×844 · Android 412×915. Push screen · không tab bar trên màn này.
2. Nav back **Trang Chủ** → pop `#sc-home` · **cấm** native alert.
3. **Lọc** → mở **filter sheet** (Modal/bottom sheet) prefill route/date hiện tại · **cấm** toast filter (`GAP-MOB-SUP-01` **Must**).
4. Sheet fields: **Tuyến** (TextField) · **Ngày** (DatePicker) · **Áp dụng** · **Xóa lọc**. Apply → dismiss · GET ±`route` · client filter date · refresh cards. Clear → reset route+date · GET bare page.
5. Segment index **0** **Danh sách check in** (owner) · **1** **Bản đồ** → **push** `#sc-patrol-map` · reset segment **0** · **cấm** reorder (`GAP-TAB-01`) · **cấm** toast map (`GAP-MOB-SUP-02` **Must**). **Cấm** embed map trên list · **cấm** auto-start pipeline `patrol-map`.
6. List cards bind live GET ± filter:

   | uiField | Source |
   |---------|--------|
   | userName | `UserName` |
   | orgUnit | `Note` / prior fallback (`GAP-MOB-SUP-03`) |
   | location | `Route` + `KmPoint` |
   | time | `CheckInAt` local |
   | status | `Status` → ok/warn strip |
   | thumb | placeholder gradient P1 |

7. Tap card → push `supervise-detail` (**giữ** wire) · **cấm** toast «Chi tiết check-in» dead-end.
8. Appear: GET `patrol/attendance-logs?page=1&pageSize=50` · map cards. 0 items / 0 after filter → **EmptyChrome**. Fail → empty + toast loadFail · **cấm** demoItems ship · list **vẫn mở**.
9. Home tile / patrol-home quick **Giám sát** → push `#sc-supervise` (`reuse` · **cấm** reimplement hubs).
10. Kit **reuse map**: `LinmTopBar` · `LinmSegment` · `LinmRichCheckinCard` (hoặc feature card cùng zone) · sheet controls · `LinmToast` (error only). **Cấm** raw List / M3 bar / `TabView` (`GAP-MOB-ACT-05`).
11. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết `:5101`.
12. Typography: label/tab **13** · field ≥**16** (`GAP-TYP-01`) · dual copy/`#i-*` parity.
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `supervise` · filter Apply/Clear · map push · live sim 6.9" + emulator · store PNG `qa/store/supervise` · **cấm** `yarn e2e-qa` web.
15. BE align: **không** endpoint mới — reuse `GET patrol/attendance-logs` ± `route`. Step 4b **N/A**. BE `fromDate`/`toDate` = **P2** (`GAP-MOB-SUP-04`). **Cấm** invent `api/v1/supervise`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/supervise.md` | list · API · GAP |
| CTX-02 | `docs/context/features/patrol.md` | domain attendance-logs |
| CTX-03 | `docs/context/features/home.md` | entry tile |
| CTX-04 | `docs/context/features/patrol-home.md` | entry quick |
| DEM-01 | `specs/supervise/ui/prototype/ios/index.html` `#sc-supervise` | iOS 390×844 · `DES-MOB-SUPERVISE` |
| DEM-02 | `specs/supervise/ui/prototype/android/index.html` `#sc-supervise` | Android 412×915 · parity copy |
| MAP | `docs/html-to-native-map.md` | kit topbar / segment / toast |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/supervise-control-hint.md` | controlHint · § Delta |
| DA-02 | `specs/_data-analy/supervise-real-data.md` | §A/B PASS |
| DA-03 | `specs/_data-analy/supervise-bff-endpoints.md` | BFF |
| DA-04 | `specs/_data-analy/supervise-action-tree.md` | filter sheet + sibling map |
| SCAN | hash skip — **cấm** crawl DemoRoot | `data-analy-hash-gate` |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | `SuperviseView` |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | `SuperviseScreen` |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Patrol · **cấm ERP.*** |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / Segment / Toast |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — cite DA-01)

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| navBack | Trang Chủ | Text+icon leading | * | `LinmTopBar` | pop home |
| navTitle | Giám sát tuần đường | Text title | * | `LinmTopBar` | fixed |
| navFilter | Lọc | Text trailing · `btn-sup-filter` | * | `LinmTopBar` | **open filter sheet** |
| filterSheet | Sheet Lọc | Modal / bottom sheet | * | sheet | owner child |
| filterRoute | Tuyến | TextField | | TextField | → query `route` |
| filterDate | Ngày | DatePicker | | DatePicker | client `CheckInAt` day |
| filterApply | Áp dụng | Primary button | * | Button | dismiss · reload |
| filterClear | Xóa lọc | Ghost / text | | Button | clear · reload |
| segList | Danh sách check in | Segment idx **0** | * | `LinmSegment` | owner |
| segMap | Bản đồ | Segment idx **1** | * | `LinmSegment` | **push** `patrol-map` |
| cards | Rich check-in | feature card | * | rich-card | GET ± filter |
| cardTitle / Org / Loc / Time / Status / Thumb | (prior) | display | * / | | bind §3 |
| empty | EmptyChrome | empty | * | empty | 0 / fail |

UNCLEAR field = **none**. Toast error-only → `LinmToast`.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`.

| Action / zone | Method | Path | In slug `supervise`? |
|---------------|--------|------|----------------------|
| List check-in | GET | `patrol/attendance-logs` | **yes** — page/pageSize ± `route` |
| Filter · tuyến | GET query | `route` | **yes** |
| Filter · ngày | client | `CheckInAt` day | **yes** — không BE date P1 |
| Detail drill | — | sibling push | **navigate only** (wired) |
| Map segment | — | sibling `patrol-map` | **navigate only** · không attendance map API |

Query: `route` · `page` · `pageSize` (50) · optional `search`/`status`/`onlyOutZone`. DTO: `AttendanceLogDto` (Id · Code · UserName · Route · CheckInAt · KmPoint · Lat · Lng · InZone · Status · Note).

**Cấm** `GET supervise` · `SuperviseController` · DbContext trên Mobile.Bff · app `:5101`.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-SUP-01 | Filter live | **Must** sheet tuyến/ngày · Apply/Clear · **cấm** toast fake |
| GAP-MOB-SUP-02 | Map segment | **Must** push sibling `patrol-map` · reset idx 0 · **cấm** toast · **cấm** auto-start pipeline |
| GAP-MOB-SUP-04 | BE fromDate/toDate | **P2** — client day đủ DoD P1 |
| GAP-MOB-SUP-03 | Org on card | **giữ** `Note` / fallback · **cấm** invent org API |
| packKind | list | **Confirm `list`.** ≠ hub. Grid/Report AC web = **N/A** |
| Filter sheet | child form? | **owner sheet** trên `supervise` · không feature mới (`GAP-MOB-ACT-02`) |
| Sibling map STATUS | may blocked QA | native screen **exists** → wire nav đủ DoD |
| Detail | toast vs push | **giữ push** supervise-detail (analy) |
| GAP-PO-STORE-01 | signup | **N/A** |
| Hash skip | re-scan demo? | **cấm** (`GAP-PO-DEMO-RESCAN-01`) |

UNCLEAR = **none**.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Giám sát list | `#sc-supervise` `DES-MOB-SUPERVISE` · dual | **List** (push) | none CRUD | GET ± route · client date · cards · EmptyChrome | `/agent-dev-ios` + `/agent-dev-android` |
| Filter sheet | `#sc-supervise` sheet zones | **Sheet** (owner child) | sheet fields | open/Apply/Clear · stay on list | same |
| Nav map | sibling `#sc-patrol-map` | navigate only | — | push · reset seg 0 | **cấm** implement map in slug |
| Detail | sibling supervise-detail | navigate only | — | tap card push | **giữ** |

Reuse entry: Home tile · patrol-home quick → push.

Frame: iOS 390×844 · Android 412×915 · safe area.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline / fail | List **mở** · EmptyChrome + toast fail · **cấm** demoItems · **cấm** full-screen block |
| AC-D-02 | GPS deny | **N/A** on list (map = sibling) |
| AC-D-03 | Leave dirty | Sheet open → dismiss/clear không confirm bắt buộc · **N/A** dirty form CRUD |
| AC-D-04 | Native alert | **Cấm** UIAlert / AlertDialog / window.alert · feedback = sheet / EmptyChrome / `LinmToast` |
| AC-D-05 | Keyboard | Sheet TextField · dismiss không che Apply |
| AC-D-06 | Safe area | Nav + segment + sheet + cards không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** · **cấm** «Có mạng» |
| AC-D-09 | Token | Bearer Keychain / Encrypted · chỉ `{BffPrefix}` |
| AC-D-10 | Tab / segment | idx 0/1 lock · map → push + reset 0 (`GAP-TAB-01`) |
| AC-D-11 | Camera | Thumb placeholder · camera **N/A** P1 |
| AC-D-12 | Typography | label/tab **13** · field ≥**16** |
| AC-F-01 | Appear | GET bare page · map cards / EmptyChrome |
| AC-F-02 | Back | Pop `#sc-home` |
| AC-F-03 | Filter open | Sheet · **cấm** toast filter |
| AC-F-04 | Filter Apply | GET ±`route` · client date · refresh |
| AC-F-05 | Filter Clear | reset · GET bare |
| AC-F-06 | Segment Bản đồ | Push `#sc-patrol-map` · reset idx 0 · **cấm** toast |
| AC-F-07 | Tap card | Push supervise-detail |
| AC-F-08 | Dual parity | iOS + Android cùng zones/copy (`GAP-MOB-ALIGN-01`) |
| AC-F-09 | Home / patrol entry | Tile / quick → push `#sc-supervise` |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave CRUD | **Không áp dụng** |
| Sheet dismiss | Close sheet · giữ filter state đến Clear/Apply |
| Logs fail / offline | EmptyChrome + toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Filter / map | **live** · **cấm** toast giả lập |
| Back | Pop · không confirm |
| Success load | Bind UI · không toast bắt buộc |

## 11. Grid list AC / Report AC

| Flag | Value |
|------|-------|
| Grid AC web (DES-GRID / LinErpListFilterBar) | **N/A** — native mobile list · **cấm** Grid AC web |
| Report AC Lin* | **N/A** |
| Mobile filter | **Sheet** owner · không `LinErpListFilterBar` |

## 12. Out of scope (this pack)

- Implement/embed `#sc-patrol-map` UI trong slug `supervise`
- Auto-start full pipeline `patrol-map` / re-scope `supervise-detail`
- BE `fromDate`/`toDate` P1 · invent route-picker catalog API P1
- Invent `GET supervise` / SuperviseController
- Camera media / GPS trên list
- Watermark Gói / device label / proto-click
- ERP.* · `mfeStdUrl` · yarn start:std / e2e this role

## 13. KPI

Hạt trưởng lọc check-in theo tuyến/ngày và mở bản đồ tuần đường từ cùng màn Giám sát — không toast giả · không gộp map vào list slug.

## 14. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `supervise` / **`list`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| changeScope | `edit_page` · § Delta filter sheet + map CTA |
| STATUS | `specs/supervise/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-supervise` · no Excel · **hash skip** |
| controlHint / UNCLEAR | §5 · none · cite DA-01 |
| Screens / Pattern / `devSlash` | List + owner sheet · navigate map/detail · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** (§11) |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design dual `file://…/prototype/{ios,android}/index.html#sc-supervise` |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` trước `design_confirm` |
| Kit | reuse · verify sheet + TopBar/Segment/rich-card/Toast |
| BFF | `supervise-bff-endpoints.md` · GET ± `route` · date client |
| Open questions | §7 chốt — Design **vẽ** filter sheet + map push CTA · **cấm** toast filter/map |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong dual + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · GAP-PKT-ROLE-01) |
| e2eQa | ON queued QA · **cấm** e2e/start:std this role |

Design: HIG + Material · update dual prototype zones `btn-sup-filter` · filter sheet · `sup-segment` · **cấm** skin Ministry · `design-demo-ssot.md`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-12T09:46:46.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-mobile-filter-live-20260912 |
| bffContentHash | sha256:supervise-mobile-bff-filter-20260912 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
