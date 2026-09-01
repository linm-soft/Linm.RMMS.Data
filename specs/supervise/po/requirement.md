# PO — Requirement — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Mobile] Giám sát |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **Giám sát list** `#sc-supervise` only · entry home tile + patrol-home quick · **không** gộp sibling map / checkin detail |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_bdca2ab2` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/supervise` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/supervise-control-hint.md` · `supervise-bff-endpoints.md` · `supervise-action-tree.md` · contentHash `sha256:supervise-mobile-list-20260819` · bffContentHash `sha256:supervise-mobile-bff-20260819` · cluster `specs/supervise/specs/_data-analy/` **không tồn tại** — SSOT = 3 file `_data-analy/supervise-*` · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-19T15:04:28.000Z` |
| taskId | `task_bdca2ab2` |

**Cấm:** gộp sibling `patrol-map` / `checkin-detail` (`GAP-MOB-ACT-01/02`) · invent `api/v1/supervise` / `SuperviseController` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue submit (`GAP-MOB-ACT-07`).

## 1. Goal

Màn **Giám sát tuần đường** native dual (iOS SwiftUI + Android Compose): danh sách check-in rich-card · segment Danh sách/Bản đồ · lọc toast P1. Persona: Hạt trưởng giám sát · quản lý ca. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `supervise` = màn list `#sc-supervise` `DES-MOB-SUPERVISE`. **Cấm** gộp `patrol-map` / `checkin-detail` (`GAP-MOB-ACT-01`). `#sc-supervise` **không** child form/sheet (`GAP-MOB-ACT-02` = none). **Không** enqueue submit (`GAP-MOB-ACT-07`).

Entry: Home tile **Giám sát** · patrol-home quick **Giám sát** → push `#sc-supervise`.

## 2. changeScope `new_page`

Pack **list** theo data-analy. Native live-only (`SuperviseView` / `SuperviseScreen` + GET attendance-logs) — cleanup_mock `edit_page` (`task_65931a17`): **cấm** demo SSOT · OK empty = EmptyChrome · fail = empty + toast. SSOT visual = dual HTML `#sc-supervise` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-supervise`: nav back **Trang Chủ** · title **Giám sát tuần đường** · **Lọc** · segment 2 · rich-card list. Frame proto iOS 390×844 · Android 412×915. Push screen · **không** tab bar trên màn này (tab context = home).
2. Nav back **Trang Chủ** → pop `#sc-home` · **cấm** native alert.
3. **Lọc** → toast **Lọc tuyến · ngày** P1 (`GAP-MOB-SUP-01`) · **cấm** filter sheet / API filter UI P1.
4. Segment index **0** **Danh sách check in** (owner) · **1** **Bản đồ** → toast **Bản đồ** · reset segment **0** — **cấm** đổi thứ tự (`GAP-TAB-01`) · **cấm** push `#sc-patrol-map` P1 (`GAP-MOB-SUP-02`).
5. List rich-card ≥1 (live hoặc demo SSOT 2 rows):

   | userName | orgUnit | location | time | status |
   |----------|---------|----------|------|--------|
   | Nguyễn Văn A | Tổ tuần đường · VP-IV.1 | QL.1 Km 1556+000 · Xuân Hải | 2026-08-10 08:40:12 | Đã ghi điểm tuần |
   | Trần Khánh | Chi cục II.2 | QL.1 Km 1561+134 · Phước Dinh | 2026-08-10 09:12:44 | Đã ghi điểm tuần |

6. Card bind live: `UserName` · org demo/`Note` (`GAP-MOB-SUP-03`) · `Route`+`KmPoint` · `CheckInAt` local · `Status` → ok/warn strip · thumb placeholder gradient P1 (**cấm** camera P1).
7. Tap card → toast **Chi tiết check-in** P1 · **cấm** push `#sc-checkin-detail` · **cấm** start sibling (`GAP-MOB-ACT-06`).
8. Appear: GET `patrol/attendance-logs` · map cards · fail/empty/offline → demo SSOT · list **vẫn mở**.
9. Home tile / patrol-home quick **Giám sát** → push `#sc-supervise` (`reuse` entry · **cấm** reimplement Home / patrol-home hub).
10. Kit **reuse map**: `LinmTopBar` · `LinmSegment` · `LinmRichCheckinCard` (hoặc feature card cùng zone) · `LinmToast`. **Cấm** raw List / M3 `NavigationBar` / `TabView` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
11. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
12. Typography: label/tab **13** · field ≥**16** (`GAP-TYP-01`) · dual copy/`#i-*` parity (`GAP-MOB-DEMO-*`).
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `supervise` only · live sim 6.9" + emulator · store PNG `qa/store/supervise` · **cấm** test sibling screens in-scope · **cấm** `yarn e2e-qa` web.
15. BE align: **không** endpoint mới — reuse `GET patrol/attendance-logs` proxy. Step 4b `/new-endpoint` **N/A**. **Cấm** `SuperviseController` / invent `api/v1/supervise`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/supervise.md` | list · §2 UI · §3 API · GAP |
| CTX-02 | `docs/context/features/patrol.md` | domain attendance-logs |
| CTX-03 | `docs/context/features/home.md` | parent entry tile |
| CTX-04 | `docs/context/features/patrol-home.md` | parent entry quick |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-supervise` | iOS 390×844 · `DES-MOB-SUPERVISE` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-supervise` | Android 412×915 · **cùng copy** |
| DEM-03 | `specs/supervise/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `docs/html-to-native-map.md` | kit topbar / segment / toast |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/supervise-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/supervise-bff-endpoints.md` | BFF · `GET patrol/attendance-logs` |
| DA-03 | `specs/_data-analy/supervise-action-tree.md` | 1 list + sibling enqueue |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · `SuperviseView` |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · `SuperviseScreen` |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** `api/v1/supervise` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmSegment` / `LinmToast` |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-supervise` dual + DA-01. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Trang Chủ | Text+icon leading | * | `LinmTopBar` | pop home stack |
| navTitle | Giám sát tuần đường | Text title | * | `LinmTopBar` | fixed |
| navFilter | Lọc | Text trailing | * | `LinmTopBar` | toast **Lọc tuyến · ngày** |
| segList | Danh sách check in | Segment | * | `LinmSegment` index **0** | owner |
| segMap | Bản đồ | Segment | * | `LinmSegment` index **1** | toast **Bản đồ** · reset 0 |
| cardTitle | Nguyễn Văn A | Text | * | rich-card | `UserName` |
| cardOrg | Tổ tuần đường · VP-IV.1 | Text + `#i-building` | | rich-card | demo / `Note` · GAP-MOB-SUP-03 |
| cardLoc | QL.1 Km 1556+000 · Xuân Hải | Text + `#i-mappin` | * | rich-card | `Route` + `KmPoint` |
| cardTime | 2026-08-10 08:40:12 | Text muted | * | rich-card | `CheckInAt` local |
| cardStatus | Đã ghi điểm tuần | Status strip | * | rich-card | `Status` ok/warn |
| cardThumb | (placeholder) | Thumb | | rich-card | gradient P1 · camera P2 |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action / zone | Method | Path | In slug `supervise`? |
|---------------|--------|------|----------------------|
| List check-in | GET | `patrol/attendance-logs` | **yes** — page/pageSize |
| Detail drill | GET | `patrol/attendance-logs/{id}` | **no** P1 — toast card · P2 |
| Filter nav | — | — | toast only · **không** API P1 |
| Map segment | — | sibling `patrol-map` | **no** — toast only |

Query: `search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` (50 default).

DTO: `AttendanceLogDto` — `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note`.

**Cấm** `GET supervise` · `SuperviseController` · DbContext trên Mobile.Bff · app `:5101`.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-SUP-01 | Filter sheet / route picker | **P1 toast only** «Lọc tuyến · ngày». Sheet = P2 sibling. |
| GAP-MOB-SUP-02 | Map segment live | **P1 toast** «Bản đồ» · reset idx 0 · sibling `patrol-map` `pending_confirm`. |
| GAP-MOB-SUP-03 | Org unit on card | Live `Note` / demo fallback «Tổ tuần đường · VP-IV.1» · **cấm** invent org-unit API. |
| Demo `go('patrol-map')` / `go('checkin-detail')` | HTML navigate | **Chốt toast** dual · **cấm** push sibling P1. |
| packKind | data-analy `list` | **Confirm `list`.** **≠** hub. **Cấm** Grid/Report AC. |
| Kit rich-card | feature card / map | Design **verify** dual. Thiếu kit → `kit_missing_confirm` · **cấm** Dev raw. |
| Sibling 2 × `pending_confirm` | GAP-MOB-ACT-06 | **Không** start. Board Approve riêng. |
| Cluster web path | `specs/supervise/specs/_data-analy/` | **N/A.** Dùng `_data-analy/supervise-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — list không signup. |
| Prior full_pipeline | `task_e8ad42d2` VERIFY PASS | PO roleOnly **chốt requirement** · không re-ship code turn này. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Giám sát list | `#sc-supervise` `DES-MOB-SUPERVISE` · iOS + Android | **List** (push · không Modal/Sheet) | none (không form) | GET attendance-logs · display cards · tap theo §3 | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-patrol-map` / `#sc-checkin-detail` · filter sheet · map live · export · watermark Gói.

Reuse entry only: Home tile · patrol-home quick → push.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | List **mở** · demo SSOT cards · toast in-app không chặn · **cấm** full-screen block |
| AC-D-02 | GPS deny | **N/A** — không GPS trên list |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | **N/A** — không input P1 |
| AC-D-06 | Safe area | Nav + segment + cards không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên list (không status capsule) · **cấm** «Có mạng» |
| AC-D-09 | Token | GET logs Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / segment | Segment idx 0/1 lock · **cấm** invent / reorder (`GAP-TAB-01`) |
| AC-D-11 | Camera / push | Thumb placeholder only · camera **N/A** P1 |
| AC-D-12 | Typography | label/tab **13** · body/field ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear | GET `patrol/attendance-logs` · map · fallback demo |
| AC-F-02 | Back | Pop `#sc-home` |
| AC-F-03 | Filter | Toast **Lọc tuyến · ngày** |
| AC-F-04 | Segment Bản đồ | Toast **Bản đồ** · stay list idx 0 |
| AC-F-05 | Tap card | Toast **Chi tiết check-in** · **cấm** push detail |
| AC-F-06 | Dual parity | iOS + Android **cùng** copy zones · **cấm** lệch chrome (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Home / patrol entry | Tile / quick → push `#sc-supervise` |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Logs fail / offline | Demo fallback + optional toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Filter / map / card | Toast in-app §3 |
| Back | Pop · không confirm |
| Success load | Không toast bắt buộc · bind UI |

## 11. Out of scope (this pack)

- `#sc-patrol-map` · `#sc-checkin-detail`
- Filter sheet / route picker / map live / export excel
- Invent `GET supervise` / SuperviseController
- Camera media / GPS trên list
- Watermark Gói / device label / proto-click
- Start 2 sibling `pending_confirm`
- Clone AttendanceLogsController · ERP.* · `mfeStdUrl`

## 12. KPI (HĐ Gói 1 — màn này)

Giám sát list = hạt trưởng xem check-in tuần đường từ Home / Tuần đường. DoD pack: `#sc-supervise` dual + GET attendance-logs + kit list — **không** omni-implement map/detail trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `supervise` / **`list`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/supervise/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-supervise` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | List `#sc-supervise` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web Lin* |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-supervise` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · verify dual `LinmTopBar` / `LinmSegment` / rich-card · `LinmToast` |
| BFF | `supervise-bff-endpoints.md` · **chỉ** `GET patrol/attendance-logs` (+ detail P2) |
| Open questions | §7 đã chốt — Design **không** vẽ filter sheet · **không** map live · segment/map/card = toast |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · copy VN đúng HTML (trừ skip navigate sibling → toast · device label) · **cấm** skin Ministry · packet `design-demo-ssot.md`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T15:04:28.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-mobile-list-20260819 |
| bffContentHash | sha256:supervise-mobile-bff-20260819 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
