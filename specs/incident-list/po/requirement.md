# PO — Requirement — incident-list (mobile list · Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| title | [Mobile] Vấn đề |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`list`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **List Quản lý vấn đề** `#sc-incident-list` only · entry home tile + tab `incident` · **không** gộp create form / detail / map / sheet |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_7fea88b7` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/incident-list` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/incident-list-control-hint.md` · `incident-list-bff-endpoints.md` · `incident-list-action-tree.md` · `incident-list-real-data.md` · contentHash `sha256:incident-list-mobile-list-20260829` · real-data `sha256:incident-list-mobile-real-data-20260829` · bffContentHash `sha256:incident-incidents-proxy-passthrough` · action-tree `sha256:incident-list-mobile-action-tree-20260829` · cluster `specs/incident-list/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/incident-list-*` · **no Excel** · **hash skip** — **cấm** re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-29T01:35:00.000Z` |
| taskId | `task_7fea88b7` |

**Cấm:** gộp `#sc-inc-form` / `#sc-incident-detail` / `#sheet-incident` / gis overlay (`GAP-MOB-ACT-01/02`) · invent `api/v1/incident-list` / `IncidentListController` / mobile-only Incident DTO fork · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue search/filter/GET list sibling (`GAP-MOB-ACT-07`) · fake lat/lng / fake SC-* khi API OK · re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Quản lý vấn đề** native dual (iOS SwiftUI + Android Compose): list sự cố/vấn đề · search client-side · segment **Danh sách / Bản đồ** · banner **Nhận diện mặt đường** · rich cards (title · type+code · loc · reporter · time · status · thumb · actions) · FAB ghi sự cố. Persona: Tuần đường · tuần kiểm · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `incident-list` = màn list `#sc-incident-list` `DES-MOB-INC-LIST`. **Cấm** gộp create form / detail / map implement (`GAP-MOB-ACT-01`). `#sc-incident-list` **không** child form/sheet (`GAP-MOB-ACT-02` = none · **cấm** filter sheet). Search / Lọc / segment stay list / GET list = **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`).

Entry: `home` tile **Vấn đề** + shell tab `incident` (`TAB` → `incident-list`) → push `#sc-incident-list` (`reuse` hub · **cấm** reimplement `#sc-home`).

## 2. changeScope `new_page`

Pack **list mới** theo data-analy (`changeScope=new_page`). Native chưa có production list vấn đề khớp SSOT — stub/toast từ Home/tab **không** đếm là list shipped. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-incident-list` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS text «Lọc» · Android icon `#i-list` — **OK**).

## 3. DoD (đo được)

1. Dual native push `#sc-incident-list`: nav back Home · title **Quản lý vấn đề** · trailing **Lọc** · segment **Danh sách** (on) / **Bản đồ** · search · banner **Nhận diện mặt đường** · **2** rich cards SSOT (demo/fallback) · FAB `#i-plus`. Frame proto iOS 390×844 · Android 412×915. Shell tab 5 **giữ** · tab `incident` = entry · in-screen **segment-2** (`GAP-TAB-01` · **cấm** invent tab thứ 6).
2. Back → pop `home` (`reuse` · **cấm** reimplement hub).
3. Trailing **Lọc** P1 → toast **Lọc tuyến · loại · trạng thái** · **cấm** filter sheet / modal.
4. Demo / fallback cards SSOT (**2** hàng — dual parity):

   | title | typeCode | loc | person | time | statusLabel | chrome |
   |-------|----------|-----|--------|------|-------------|--------|
   | Nứt mặt đường | Sự cố nhanh · SC-2401 | QL.1 Km 1556+080 · Xuân Hải | Nguyễn Văn A · Tổ tuần đường VP-IV.1 | 2026-08-10 08:12:40 | Trạng thái: **Đợi phân công giám sát** | warn |
   | Cống tắc | Hệ thống an toàn · SC-2398 | HCM · Km 12+400 | Trần Khánh · Chi cục II.2 | 2026-08-09 14:40:13 | Trạng thái: **Đang được giám sát** | ok |

   Card actions (cả 2): `#i-chat` · `#i-briefcase` · `#i-list` · `#i-mappin` · thumb placeholder OK.
5. Appear: GET `incident/incidents` page 1 size 50 · live rows bind §6 · fail/empty/offline → demo SSOT 2 cards · screen **vẫn mở**.
6. Search client-side title / code / route. Kit `LinmSearchField` placeholder **Tìm kiếm vấn đề…**.
7. Status VN map (control-hint / DA):

   | API `Status` (live string) | VN (demo) | chrome |
   |----------------------------|-----------|--------|
   | `Đợi phân công giám sát` / `Mới` / `new` | Đợi phân công giám sát | warn |
   | `Đang được giám sát` / `in_progress` | Đang được giám sát | ok |
   | `Đóng` / `closed` | Đã đóng | gray |
   | other | raw `Status` | info |

   UI prefix: `Trạng thái: `.
8. Tap banner → `go('vis-capture')` khi sibling Approve+ship · P1 **cấm** start sibling (`GAP-MOB-ACT-06`) — nếu chưa ship: toast **Nhận diện mặt đường** OK · Design map CTA đúng demo.
9. Tap card / `#i-list` → `go('incident-detail')` pass `Id` khi sibling ship · P1 **cấm** start · toast **Chi tiết vấn đề** nếu chưa ship.
10. Tap `#i-briefcase` → `go('mnt-list')` (`reuse` · **không** enqueue).
11. Tap `#i-mappin` / seg **Bản đồ** → `go('gis-map')` (shared_action · **không** start nếu đã pending/done).
12. Tap `#i-chat` → toast **Trao đổi sự cố** · **cấm** comments API · **cấm** start `incident-chat`.
13. FAB `#i-plus` → `startIncidentPick()` · owner `incident-create` (`reuse` · **không** enqueue · **cấm** implement `#sc-inc-form` trên slug này).
14. Kit **reuse map**: `LinmTopBar` · `LinmSegment` · `LinmSearchField` · banner / `LinmListRow` · rich card / `LinmListRow` · status bar / `LinmBadge` · `LinmIconButton` · `LinmFAB` · `LinmToast` · `LinmEmptyChrome` (optional). **Cấm** raw `List` / M3 `NavigationBar` / `TabView` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
15. Typography: label/tab **13** · field/search/card ≥**16** (`GAP-TYP-01`) · dual copy parity trừ chrome HIG vs Material.
16. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
17. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
18. QA (role sau): Maestro slug `incident-list` only · login → Home tile/tab Vấn đề → `#sc-incident-list` · live sim 6.9" + emulator · store PNG `qa/store/incident-list` · **cấm** test create/detail/map/chat as in-scope · **cấm** `yarn e2e-qa` web.
19. BE align: **không** endpoint mới — reuse `GET incident/incidents` proxy. Step 4b `/new-endpoint` **N/A**. **Cấm** `IncidentListController` / invent `api/v1/incident-list`. Media thumb = **DEFER** P1 (`GAP-MOB-INC-LIST-THUMB-01`).

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/incident-list.md` | list · § UI · § API · OOS create/detail/sheet |
| CTX-02 | `docs/context/features/incident.md` | domain Incident · IncidentDto |
| CTX-03 | `docs/context/features/home.md` | parent entry tile + tab `incident` |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-incident-list` | iOS 390×844 · `DES-MOB-INC-LIST` · **copy SSOT** |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-incident-list` | Android 412×915 · **parity** copy |
| DEM-03 | `specs/incident-list/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `docs/html-to-native-map.md` | kit topbar / segment / search / list row / badge / icon / FAB **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/incident-list-control-hint.md` | controlHint · **hash skip read** |
| DA-02 | `specs/_data-analy/incident-list-bff-endpoints.md` | BFF · `GET incident/incidents` |
| DA-03 | `specs/_data-analy/incident-list-action-tree.md` | 1 list + siblings enqueue |
| DA-04 | `specs/_data-analy/incident-list-real-data.md` | bind §A+§B + 2 demo rows |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · **không** re-crawl demo |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Incident · **cấm ERP.*** · **không** `api/v1/incident-list` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmSegment` / `LinmSearchField` / `LinmListRow` / `LinmBadge` / `LinmIconButton` / `LinmFAB` / `LinmToast` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 control-hint + real-data §A+§B (**cấm** re-scan HTML). UNCLEAR field path = **none** (GAP bind chốt §7).

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | (chevron) | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | pop `home` |
| title | Quản lý vấn đề | Text | * | `LinmTopBar` title | fixed · `DES-MOB-INC-LIST` |
| navFilter | Lọc | Button / IconButton | * | `LinmTopBar` trailing | toast **Lọc tuyến · loại · trạng thái** · iOS text / Android `#i-list` |
| segList | Danh sách | Segment | * | `LinmSegment` | selected · stay list |
| segMap | Bản đồ | Segment | * | `LinmSegment` | `go('gis-map')` |
| search | Tìm kiếm vấn đề… | SearchField | * | `LinmSearchField` `#i-search` | client filter |
| bannerTitle | Nhận diện mặt đường | Banner / ListRow | * | `LinmListRow` `#i-camera` | `go('vis-capture')` / toast P1 |
| bannerSub | Chụp + định vị → gắn sự cố | Text | * | subtitle | fixed |
| cardTitle | (tên vấn đề) | Text | * | rich card / `LinmListRow` | DTO `Title` |
| cardTypeCode | loại · mã | Text | * | subtitle `#i-warning` | `IncidentType` · `Code` |
| cardLoc | tuyến · km · nơi | Text | * | subtitle `#i-mappin` | `RouteName` · `KmStart` · place fallback §7 |
| cardPerson | người · tổ | Text | * | subtitle `#i-person` | `ReporterName` · `AssigneeName` §7 |
| cardTime | datetime | Text | * | caption | `RequestedAt` `yyyy-MM-dd HH:mm:ss` |
| cardThumb | thumb | Image | | placeholder | **DEFER** media · empty OK |
| cardStatus | Trạng thái: … | Status bar text | * | 1 dòng prefix+label · full width dưới `.rc-main` · **cấm** `LinmBadge` trùng | Status → VN · **GAP-MOB-EDIT-STATUS-01** |
| actChat | Trao đổi | IconButton | * | `LinmIconButton` `#i-chat` | toast P1 |
| actAssign | Giao việc | IconButton | * | `LinmIconButton` `#i-briefcase` | `go('mnt-list')` |
| actDetail | Chi tiết | IconButton | * | `LinmIconButton` `#i-list` | `go('incident-detail')` / toast |
| actMap | Bản đồ | IconButton | * | `LinmIconButton` `#i-mappin` | `go('gis-map')` |
| fabCreate | Ghi sự cố | FAB | * | `LinmFAB` `#i-plus` | `startIncidentPick()` |
| empty | (trống) | EmptyChrome | | `LinmEmptyChrome` | optional · 0 live + no demo gate |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `incident-list`? |
|---------------|--------|------|--------------------------|
| Incident list | GET | `incident/incidents` | **yes** — page 1 size 50 · query search/status/severity **không bắt** P1 (search **client**) |
| Prefetch detail | GET | `incident/incidents/{id}` | **no** — sibling detail |
| Nav banner vis | — | — | **local** · `vis-capture` |
| Nav map | — | — | **local** · `gis-map` |
| Nav assign WO | — | — | **local** · `mnt-list` |
| Nav detail | — | — | **local** · `incident-detail` · pass `Id` |
| FAB create | — | — | **local** · `startIncidentPick()` · owner `incident-create` |
| Filter / search UI | — | — | **client** · toast Lọc |
| Chat | — | — | **local** toast · comments **DEFER** |

### Bind (real-data §B)

| UI | DTO → card |
|----|------------|
| title | `Title` |
| typeCode | `"{IncidentType} · {Code}"` · thiếu type → `Code` only |
| loc | `"{RouteName} Km {KmStart}"` · place fallback từ `AssetLabel` / `Description` tail · **cấm** fake lat/lng · **cấm** invent PlaceName |
| person | `ReporterName` · nếu `AssigneeName` khác reporter → append ` · {AssigneeName}` · org **không** field riêng |
| time | `RequestedAt` → `yyyy-MM-dd HH:mm:ss` local |
| statusLabel | `Status` → VN map §3.7 · prefix `Trạng thái: ` |
| nav key | `Id` → detail |

**Cấm** `GET incident-list` · `IncidentListController` · DbContext trên Mobile.Bff · app `:5101` · invent PlaceName / OrgName DTO.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-INC-LIST-PLACE-01 | Demo «Xuân Hải» · DTO không PlaceName | **Không invent PlaceName.** Bind `RouteName` + `KmStart` · place = tail `AssetLabel`/`Description` nếu có · else omit. Demo fallback giữ copy SSOT. Không block DoD list. |
| GAP-MOB-INC-LIST-ORG-01 | Demo «Tổ tuần đường VP-IV.1» · DTO không Org | **Không invent OrgName.** Bind `ReporterName` (+ `AssigneeName` nếu khác) · org gắn trong tên hoặc omit. Demo fallback OK. |
| GAP-MOB-INC-LIST-THUMB-01 | Thumb media | **DEFER P1** · empty placeholder OK · SA Signed media nếu cần sau · **không** Step 4b ở PO. |
| Tap banner / detail / map | Sibling chưa ship | **Nav khi ship** · P1 toast nhãn nếu chưa · **cấm** start siblings (`GAP-MOB-ACT-06`). |
| Tap chat | Demo toast | **Toast «Trao đổi sự cố».** Comments API **DEFER**. |
| Tap briefcase | Demo `go('mnt-list')` | **Reuse `mnt-list`** · **không** enqueue. |
| FAB | `startIncidentPick()` | **Reuse owner `incident-create`** · **cấm** form trên slug list. |
| Filter | Demo toast | **P1 toast «Lọc tuyến · loại · trạng thái».** **Cấm** sheet. |
| packKind | data-analy `list` | **Confirm `list`.** **≠** hub/dashboard/web Kind F. **Cấm** Grid/Report AC. |
| Kit | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. |
| Sibling | `vis-capture` · `incident-detail` · `incident-chat` · (± `gis-map`) | **Không** start (`GAP-MOB-ACT-06`). Board Approve riêng. |
| Cluster web path | `specs/incident-list/specs/_data-analy/` | **N/A.** Dùng `_data-analy/incident-list-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — list không signup. |
| Step 4b | New endpoint? | **N/A** — reuse `GET incident/incidents`. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: segment-2` | **Confirm segment-2** trên surface · shell tab `incident` = entry (`GAP-TAB-01`). |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Quản lý vấn đề | `#sc-incident-list` `DES-MOB-INC-LIST` · iOS + Android | **List** (push · không Modal/Sheet) | none (search ≠ form dirty) | GET incidents · display 2+ cards · client search · segment · banner CTA · toast Lọc/chat · FAB create entry · nav siblings | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-inc-form` · `#sc-incident-detail` · `#sheet-incident` · gis overlay implement · Kind F web full filter/KPI · watermark Gói · filter sheet.

Reuse only: `home` (back pop · entry tile/tab **Vấn đề**) · `mnt-list` (Giao việc) · `incident-create` (FAB owner) · `gis-map` (shared_action).

Frame: iOS 390×844 · Android 412×915 · safe area · nav + segment + search + banner + cards + FAB + `LinmTabBar` không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | List **mở** · demo SSOT 2 cards · toast in-app không chặn · **cấm** full-screen block · **cấm** block tab |
| AC-D-02 | GPS deny | **N/A** — list không GPS (sibling create / vis-capture / map) |
| AC-D-03 | Leave dirty | **N/A** — search không leave-modal |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | Search focus · field ≥16 · keyboard không đè tab bar cứng · dismiss không crash |
| AC-D-06 | Safe area | Nav + segment + search + banner + cards + FAB + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên list · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET incidents Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell tab **Vấn đề** giữ · in-screen **segment-2** Danh sách/Bản đồ · **cấm** invent tab 6 / reorder (`GAP-TAB-01`) · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera / push | **N/A** trên list (banner → vis-capture sibling) |
| AC-D-12 | Typography | label/tab **13** · title/search/card ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear | GET `incident/incidents` · fail/empty → demo 2 cards |
| AC-F-02 | Back | Pop `home` · **cấm** reimplement hub |
| AC-F-03 | Lọc | Toast **Lọc tuyến · loại · trạng thái** · **cấm** sheet |
| AC-F-04 | Search | Client filter title/code/route |
| AC-F-05 | Segment Bản đồ / `#i-mappin` | `go('gis-map')` · **cấm** map overlay trên slug |
| AC-F-06 | Banner | Nav `vis-capture` / toast · **cấm** start sibling |
| AC-F-07 | Card / `#i-list` | Nav `incident-detail` pass `Id` / toast · **cấm** CRUD trên list |
| AC-F-08 | `#i-briefcase` | `go('mnt-list')` reuse |
| AC-F-09 | `#i-chat` | Toast **Trao đổi sự cố** · **cấm** comments API |
| AC-F-10 | FAB | `startIncidentPick()` → `incident-create` · **cấm** form trên slug |
| AC-F-11 | Dual parity | iOS + Android **cùng** 2 cards + banner + segment + copy §3.4 (`GAP-MOB-ALIGN-01`) |
| AC-F-12 | Entry | Home tile / tab **Vấn đề** → push `#sc-incident-list` |
| AC-F-13 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-14 | Place / org bind | RouteName+KmStart · ReporterName(+Assignee) · **cấm** invent PlaceName/OrgName |
| AC-F-15 | Card status | 1 dòng `Trạng thái: {label}` full width dưới meta+thumb · **cấm** `LinmBadge` trùng prefix (**GAP-MOB-EDIT-STATUS-01**) |
| AC-F-16 | Card actions | 4 nút `#i-chat` `#i-briefcase` `#i-list` `#i-mappin` **flex:1 dàn đều** full card · tap 44 (**GAP-MOB-EDIT-ACT-01**) |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| List fail / offline | Demo fallback 2 cards + optional toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Lọc | Toast **Lọc tuyến · loại · trạng thái** |
| Chat | Toast **Trao đổi sự cố** |
| Banner / detail chưa ship | Toast nhãn CTA · **cấm** system alert |
| Back | Pop home · không confirm |
| Success load | Không toast bắt buộc · bind UI |

## 11. Out of scope (this pack)

- `#sc-inc-form` / `#sheet-incident` implement
- `#sc-incident-detail` CRUD / assign / close
- `vis-capture` / `incident-chat` / gis overlay implement trên slug
- Web Kind F full filter/KPI · assign/close modal web
- Filter sheet / status-severity catalog API bắt buộc P1
- Invent `GET incident-list` / `IncidentListController` / PlaceName / OrgName DTO
- Thumb media Signed bắt buộc P1 (DEFER)
- Reimplement `#sc-home`
- Watermark Gói / device label / proto-click tín hiệu
- Start siblings `pending_confirm`
- Clone IncidentsController · ERP.* · `mfeStdUrl`
- Grid AC web / Report AC Lin*
- Re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role PO

## 12. KPI (HĐ Gói 1 — màn này)

Vấn đề = hiện trường xem danh sách sự cố (title · loại/mã · vị trí · người · thời gian · trạng thái) từ **một** push sau Home/tab. DoD pack: `#sc-incident-list` dual + GET incidents + kit list — **không** omni-implement create/detail/map/chat trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `incident-list` / **`list`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/incident-list/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-incident-list` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | List `#sc-incident-list` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack list native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-incident-list` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmSegment` / `LinmSearchField` / banner / rich-card / `LinmBadge` / `LinmIconButton` / `LinmFAB` |
| BFF | `incident-list-bff-endpoints.md` · **chỉ** `GET incident/incidents` |
| Real-data | `incident-list-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **parity dual** 2 cards · **không** vẽ create/detail/map trên slug · **không** filter sheet · thumb placeholder OK |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 + segment-2 · copy VN đúng dual HTML (trừ sibling CTA chưa ship → toast P1 · skip device label) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:35:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-list-20260829 |
| bffContentHash | sha256:incident-incidents-proxy-passthrough |
| taskId | `task_7fea88b7` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
