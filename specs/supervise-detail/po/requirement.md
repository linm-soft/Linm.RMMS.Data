# PO — Requirement — supervise-detail (mobile · Chi tiết check-in)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| title | [Mobile] [Giám sát] -> Chi tiết check-in |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-SUP-DET-PACK-01 — STATUS/scan meta `sheet` = mislabel · demo surface = full `#sc-supervise-detail`) |
| stack | `native_dual` |
| thisAction | **Chi tiết check-in** `#sc-supervise-detail` only · entry supervise list rich-card · **cấm** gộp list/filter/segment · `#sc-checkin-detail` / `#sheet-checkin` (`patrol-checkin`) · attendance CRUD |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_bc7c9e03` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/supervise-detail` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/supervise-detail-control-hint.md` · `supervise-detail-bff-endpoints.md` · `supervise-detail-action-tree.md` · `supervise-detail-real-data.md` · contentHash `sha256:supervise-detail-control-hint-20260831` · real-data `sha256:supervise-detail-real-data-20260831` · bffContentHash `sha256:patrol-attendance-logs-getbyid-passthrough` · action-tree `sha256:supervise-detail-action-tree-20260831` · cluster `specs/supervise-detail/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/supervise-detail-*` · **no Excel** · **hash skip** — **cấm** re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-31T02:00:00.000Z` |
| taskId | `task_bc7c9e03` |

**Cấm:** gộp `#sc-supervise` list/filter/segment · `#sc-checkin-detail` / `#sheet-checkin` (`GAP-MOB-ACT-01/02`) · invent `api/v1/supervise-detail` / `checkin-detail` / `SuperviseDetailController` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `gis-map` / `patrol-checkin` (`GAP-MOB-ACT-06`) · enqueue GET load / chrome / CTA map (`GAP-MOB-ACT-07`) · POST/PUT/DELETE attendance trên slug · fake GET 200 · re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Chi tiết check-in** giám sát native dual (iOS SwiftUI + Android Compose): hero tên NV · mã · rows tổ / tuyến·km / thời điểm / trạng thái / tọa độ / trong vùng · CTA **Xem trên bản đồ**. Persona: Hạt trưởng giám sát · quản lý ca. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `supervise-detail` = màn chi tiết `#sc-supervise-detail` `DES-MOB-SUP-DETAIL`. **Cấm** gộp list / patrol-checkin (`GAP-MOB-ACT-01`). Surface = **full screen** — **không** child sheet (`GAP-MOB-ACT-02`). GET by id · display rows = **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`).

Entry: `#sc-supervise` rich-card (live P1 toast `supervise.toast.detail` → **wire** push detail + `Id`).

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: list card toast / **chưa** màn `#sc-supervise-detail` shipped → **không** đổi thành `edit_page`. Delta Design/Dev = ship full detail dual + GET by id + wire list → push · demo rewire khỏi CI-DETAIL. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-supervise-detail` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back text «Giám sát» + chevron · Android icon-only · title dual «Chi tiết check-in»).

## 3. DoD (đo được)

1. Dual native push `#sc-supervise-detail` `DES-MOB-SUP-DETAIL`: nav back → `#sc-supervise` · title **Chi tiết check-in** · hero `UserName` · caption **Mã** + `Code` · rows Tổ · Tuyến · Thời điểm · Trạng thái · Tọa độ · Trong vùng · CTA primary **Xem trên bản đồ**. Frame proto iOS 390×844 · Android 412×915. Shell Tab **Trang chủ** giữ · `tabs: none` trên surface · **cấm** segment trên detail (`GAP-TAB-01`).
2. Back → `go('supervise')` / pop list (`reuse` parent · **cấm** reimplement list).
3. Appear: GET `patrol/attendance-logs/{id}` · bind §6 · 404 → EmptyChrome + back list · network fail → demo SSOT · screen **vẫn mở** · **cấm** fake 200.
4. Demo / fallback SSOT (dual parity):

   | Field | Value |
   |-------|-------|
   | Title | Chi tiết check-in |
   | UserName | Nguyễn Văn A |
   | Code | CC-20260810-001 |
   | Tổ | Tổ tuần đường · VP-IV.1 |
   | Tuyến | QL.1 Km 1556+000 · Xuân Hải |
   | Thời điểm | 2026-08-10 08:40:12 |
   | Trạng thái | Đã ghi điểm tuần |
   | Tọa độ | 11.5300, 109.0040 |
   | Trong vùng | Trong vùng |
   | CTA | Xem trên bản đồ |
   | Back | Giám sát |

5. Status VN map (control-hint):

   | API `Status` (raw) | UI |
   |--------------------|-----|
   | `checked_in` / `ok` / chứa «ghi điểm» / empty+InZone | Đã ghi điểm tuần |
   | `out_zone` / `warn` / InZone=false | Ngoài vùng · cần kiểm |
   | other | `{Status raw}` |

6. List entry: supervise rich-card tap → **push** `#sc-supervise-detail` + `Id` · **cấm** toast-only khi pack này ship · **cấm** `go('checkin-detail')` / reuse CI-DETAIL (`GAP-MOB-SUP-DET-DEMO-01` · `GAP-MOB-ACT-06`).
7. **Xem trên bản đồ** → `go('gis-map')` pass `Id` + Lat/Lng · shared_action · **không** embed map P1 · **cấm** start sibling nếu đã enqueue/done (`GAP-MOB-ACT-06`) — toast nhãn CTA OK nếu chưa ship.
8. Org: bind `Note` non-empty · else demo fallback **Tổ tuần đường · VP-IV.1** · **cấm** invent OrgUnit API / field BE P1 (`GAP-MOB-SUP-DET-ORG-01`).
9. Kit **reuse map**: `LinmTopBar` · Text hero · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmEmptyChrome`. **Cấm** raw `NavigationBar` / M3 bar / `TabView` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
10. Typography: caption/label **13** · hero **≥24 / 28** bold · field value ≥**16** (`GAP-TYP-01`).
11. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
12. GPS trên detail: **readonly** display Lat/Lng · InZone · **không** request location (`AC-D-02`).
13. Camera: thumb **N/A** P1 · **không** capture trên detail.
14. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
15. QA (role sau): Maestro slug `supervise-detail` only · login → supervise list → detail · map CTA · live sim 6.9" + emulator · store PNG `qa/store/supervise-detail` · **cấm** test list/checkin/CRUD as in-scope · **cấm** `yarn e2e-qa` web.
16. BE align: **không** endpoint mới — reuse `GET patrol/attendance-logs/{id}` proxy. Step 4b `/new-endpoint` **N/A**. **Cấm** `SuperviseDetailController` / invent `api/v1/supervise-detail`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/supervise-detail.md` | detail · § UI · § API · OOS list/checkin |
| CTX-02 | `docs/context/features/supervise.md` | parent list · entry card |
| CTX-03 | `docs/context/features/patrol.md` | domain attendance-logs |
| CTX-04 | `docs/context/features/attendance.md` | peer web · **≠** mobile path invent |
| CTX-05 | `docs/context/features/patrol-checkin.md` | **≠** slug · CI-DETAIL OUT |
| CTX-06 | `docs/context/features/gis.md` / gis-map | CTA Bản đồ |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-supervise` entry · **target** `#sc-supervise-detail` | iOS 390×844 · `DES-MOB-SUP-DETAIL` · **hash skip** inventory từ DA |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` same | Android 412×915 · **parity** |
| DEM-03 | `specs/supervise-detail/ui/prototype/` | pack stub — Design chép dual + tạo `#sc-supervise-detail` |
| MAP | `docs/html-to-native-map.md` | kit topbar / list row / primary / toast / empty |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/supervise-detail-control-hint.md` | controlHint · **hash skip read** |
| DA-02 | `specs/_data-analy/supervise-detail-bff-endpoints.md` | BFF · GET by id |
| DA-03 | `specs/_data-analy/supervise-detail-action-tree.md` | 1 detail + siblings reuse |
| DA-04 | `specs/_data-analy/supervise-detail-real-data.md` | bind §A+§B + demo SSOT |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** `api/v1/supervise-detail` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmListRow` / `LinmPrimaryButton` / `LinmToast` / `LinmEmptyChrome` |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 control-hint + real-data §A+§B (**cấm** re-scan HTML). UNCLEAR field path = **none** (GAPs chốt §7).

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Giám sát | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('supervise')` · Android icon-only OK |
| title | Chi tiết check-in | Text | * | `LinmTopBar` title | dual fixed SSOT |
| userHero | (tên NV) | Text display | * | Display **≥24 / 28** bold | GET `UserName` |
| codeLabel | Mã | Text caption | * | Caption **13** | fixed |
| codeValue | CC-* | Text | * | ≥16 | GET `Code` |
| rowOrg | Tổ / đơn vị | ListRow | * | `LinmListRow` | `Note` · demo fallback · GAP ORG |
| rowLoc | Tuyến · lý trình | ListRow | * | `LinmListRow` | `Route` · `KmPoint` · địa danh Note/demo |
| rowTime | Thời điểm | ListRow | * | `LinmListRow` | `CheckInAt` local |
| rowStatus | Trạng thái | ListRow / status strip | * | `LinmListRow` | `Status` mapped VN |
| rowGps | Tọa độ | ListRow | * | `LinmListRow` | `Lat`,`Lng` |
| rowInZone | Trong vùng | ListRow | * | `LinmListRow` | `InZone` → Trong vùng / Ngoài vùng |
| btnMap | Xem trên bản đồ | PrimaryButton | * | `LinmPrimaryButton` | `go('gis-map')` · pass id/coords |
| empty404 | (không tìm thấy) | EmptyChrome | | `LinmEmptyChrome` | NotFound · back list |
| toastErr | (lỗi mạng) | Toast | * | `LinmToast` | GET fail · **cấm** fake ok |

### Entry (parent — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| cardCheckin | (live UserName · loc · time) | RichCard nav | `LinmRichCheckinCard` | `supervise` · wire `go('supervise-detail')` + `Id` |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `supervise-detail`? |
|---------------|--------|------|----------------------------|
| Load chi tiết | GET | `patrol/attendance-logs/{id}` | **yes** — bind hero + rows |
| Nav Bản đồ | — | — | **local** · `gis-map` |
| Nav back list | — | — | **local** · `supervise` |
| List GET | GET | `patrol/attendance-logs` | **no** — owner `supervise` |
| POST/PUT/DELETE | `patrol/attendance-logs*` | — | **OUT** |
| Field check-in | POST | `patrol/sessions/{id}/check-ins` | **OUT** — `patrol-checkin` |

### Bind (real-data §B)

| UI | DTO → display |
|----|---------------|
| userHero | `UserName` raw |
| codeValue | `Code` raw (CC-*) |
| rowOrg | `Note` nếu non-empty · else `Tổ tuần đường · VP-IV.1` |
| rowLoc | `"{Route} Km {KmPoint}"` · thiếu Km → Route only · địa danh demo append OK offline |
| rowTime | `CheckInAt` format `yyyy-MM-dd HH:mm:ss` local |
| rowStatus | map §3.5 · default «Đã ghi điểm tuần» khi raw khớp demo |
| rowGps | `"{Lat}, {Lng}"` (DTO non-null decimal) |
| rowInZone | `true` → «Trong vùng» · `false` → «Ngoài vùng» |
| map CTA | pass `Id` + Lat/Lng · **không** fake coords khi live OK |
| nav key | `Id` |

**Cấm** `GET supervise-detail` / `checkin-detail` · `SuperviseDetailController` · DbContext trên Mobile.Bff · app `:5101` · invent OrgUnit wire P1.

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-SUP-DET-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-supervise-detail`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome / `#sheet-*` trong pack này. |
| GAP-MOB-SUP-DET-ORG-01 | OrgUnit thiếu DTO | **P1:** `Note` non-empty · else demo «Tổ tuần đường · VP-IV.1» · **cấm** invent OrgUnit API / field BE. |
| GAP-MOB-SUP-DET-DEMO-01 | Demo card → `checkin-detail` | **Design:** tạo `#sc-supervise-detail` dual · rewire card `go('supervise-detail')` · **cấm** reuse CI-DETAIL / title «Ghi điểm tuần». |
| GAP-MOB-SUP-DET-NAV-01 | List toast → push | **P1 ship:** wire push + `Id` · supersede toast-only khi detail pack done. |
| GAP-MOB-SUP-DET-MAP-01 | CTA map | **Nav** `gis-map` · **không** embed · toast nếu sibling chưa ship · **cấm** start (`GAP-MOB-ACT-06`). |
| GAP-MOB-SUP-DET-TITLE-01 | Chrome title dual | Title dual «Chi tiết check-in» · back iOS text / Android icon-only — Design parity chrome only. |
| GET load | enqueue? | **Không** — cùng slug (`GAP-MOB-ACT-07`). |
| Kit | map dual | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. |
| Sibling | `gis-map` · `supervise` · `patrol-checkin` · `patrol-map` | **Không** start (`GAP-MOB-ACT-06`). **Không** enqueue mới. gis-map đã `task_23d7eba0`. |
| Cluster web path | `specs/supervise-detail/specs/_data-analy/` | **N/A.** Dùng `_data-analy/supervise-detail-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — detail không signup. |
| Step 4b | New endpoint? | **N/A** — reuse GetById live. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm** · shell Tab Trang chủ giữ · **không** segment trên detail (`GAP-TAB-01`). |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Chi tiết check-in | `#sc-supervise-detail` `DES-MOB-SUP-DETAIL` · iOS + Android | **Screen** (push · **không** Modal/Sheet pack) | none (readonly detail) | GET by id · display hero/rows · toast err · empty 404 · nav gis-map/list | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-supervise` list/filter/segment · `#sc-checkin-detail` · `#sheet-checkin` · attendance CRUD · embed map · watermark Gói.

Reuse only: `supervise` (back/entry) · `gis-map` (CTA shared_action).

Frame: iOS 390×844 · Android 412×915 · safe area · nav + hero + rows + CTA không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Detail **mở** · demo SSOT §3.4 · toast lỗi · **cấm** full-screen block · **cấm** fake 200 |
| AC-D-02 | GPS deny | **N/A** request — Lat/Lng **readonly** · **không** request location trên detail |
| AC-D-03 | Leave dirty | **N/A** — không form dirty |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / EmptyChrome |
| AC-D-05 | Keyboard | **N/A** — không input P1 |
| AC-D-06 | Safe area | Nav + hero + rows + CTA không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell Tab **Trang chủ** giữ · `tabs: none` surface · **cấm** invent tab / segment · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera / push | **N/A** capture P1 |
| AC-D-12 | Typography | caption **13** · hero ≥**24/28** · rows ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear | GET `patrol/attendance-logs/{id}` · fail → demo SSOT · 404 → Empty + back |
| AC-F-02 | Back | `go('supervise')` · **cấm** reimplement list |
| AC-F-03 | Bind rows | hero · code · org · loc · time · status · gps · inZone per §6 |
| AC-F-04 | Bản đồ | `go('gis-map')` pass Id/Lat/Lng · **cấm** embed · **cấm** start sibling |
| AC-F-05 | Entry | List rich-card → push detail + `Id` · **cấm** CI-DETAIL |
| AC-F-06 | Dual parity | iOS + Android **cùng** zones + copy SSOT (trừ back chrome) (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Org | Note / demo fallback · **cấm** invent OrgUnit API |
| AC-F-08 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-09 | Thiếu Id nav | back list + toast · **cấm** blank bind invent |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Load fail / offline | Demo fallback §3.4 + toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| 404 | EmptyChrome · back list · **cấm** alert |
| Map chưa ship | Toast nhãn CTA · **cấm** system alert |
| Back | Pop list · không confirm |
| Success load | Không toast bắt buộc · bind UI |

## 11. Out of scope (this pack)

- `#sc-supervise` list/filter/segment implement
- `#sc-checkin-detail` / `#sheet-checkin` / patrol-checkin field save
- POST/PUT/DELETE attendance · sessions check-ins
- Embed map / gis overlay trên slug
- Invent `api/v1/supervise-detail` / `checkin-detail` / OrgUnit wire P1
- Bottom-sheet chrome (packKind scan `sheet` = mislabel → PO **screen**)
- Watermark Gói / device label / proto-click / mfeStdUrl / ERP.*
- Start siblings · enqueue GET/CTA
- Re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role PO
- Grid AC web / Report AC Lin*

## 12. KPI (HĐ Gói 1 — màn này)

Chi tiết check-in giám sát = hạt trưởng xem 1 điểm tuần (NV · mã · tổ · tuyến · thời điểm · TT · GPS · in-zone) + điều hướng bản đồ. DoD pack: `#sc-supervise-detail` dual + GET by id + kit detail — **không** omni-implement list/checkin/CRUD trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `supervise-detail` / **`screen`** (confirmed · đóng GAP-MOB-SUP-DET-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/supervise-detail/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual target `#sc-supervise-detail` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | Screen `#sc-supervise-detail` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack detail native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-supervise-detail` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmListRow` / Primary / Toast / Empty |
| BFF | `supervise-detail-bff-endpoints.md` · **chỉ** GET `{id}` |
| Real-data | `supervise-detail-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **parity dual** · tạo `#sc-supervise-detail` · rewire card khỏi CI-DETAIL · **không** sheet chrome · **không** vẽ list/checkin trên slug |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 · `tabs: none` surface · copy VN đúng dual SSOT (trừ sibling CTA chưa ship → toast P1 · skip device label) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T02:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-control-hint-20260831 |
| realDataHash | sha256:supervise-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-getbyid-passthrough |
| actionTreeHash | sha256:supervise-detail-action-tree-20260831 |
| taskId | `task_bc7c9e03` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
