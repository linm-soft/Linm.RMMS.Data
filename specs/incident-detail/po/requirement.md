# PO — Requirement — incident-detail (mobile · Chi tiết vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-detail` |
| title | [Mobile] [Vấn đề] -> Chi tiết |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-INC-DETAIL-PACK-01 — STATUS/scan meta `sheet` = mislabel · demo surface = full `#sc-incident-detail`) |
| stack | `native_dual` |
| thisAction | **Chi tiết vấn đề** `#sc-incident-detail` only · entry list card / create toast nav · **cấm** gộp list / create form / `#sheet-incident` / chat |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_7563d8e0` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/incident-detail` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/incident-detail-control-hint.md` · `incident-detail-bff-endpoints.md` · `incident-detail-action-tree.md` · `incident-detail-real-data.md` · contentHash `sha256:incident-detail-control-hint-20260829` · real-data `sha256:incident-detail-mobile-real-data-20260829` · bffContentHash `sha256:incident-incidents-getbyid-close-proxy` · action-tree `sha256:incident-detail-mobile-action-tree-20260829` · cluster `specs/incident-detail/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/incident-detail-*` · **no Excel** · **hash skip** — **cấm** re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-29T02:44:00.000Z` |
| taskId | `task_7563d8e0` |

**Cấm:** gộp `#sc-incident-list` / `#sc-inc-form` / `#sheet-incident` / chat (`GAP-MOB-ACT-01/02`) · invent `api/v1/incident-detail` / `IncidentDetailController` / mobile-only Incident DTO fork · invent Lat/Lng trên wire P1 · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Close / GET by id / chrome (`GAP-MOB-ACT-07`) · fake lat/lng khi live GetById OK · fake SC-* khi API OK · sửa định vị đã lưu · xóa hẳn (OUT feature-guide) · re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Chi tiết vấn đề** native dual (iOS SwiftUI + Android Compose): hero mã · badge severity×status · rows loại / vị trí / định vị (readonly) / nguồn · CTA **Giao việc xử lý** · **Xem trên bản đồ** · **Đóng sự cố**. Persona: Tuần đường · tuần kiểm · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `incident-detail` = màn chi tiết `#sc-incident-detail` `DES-MOB-INC-DETAIL`. **Cấm** gộp list / create form / `#sheet-incident` / chat (`GAP-MOB-ACT-01`). Surface = **full screen** — **không** child sheet (`GAP-MOB-ACT-02`). GET by id · POST close · display rows = **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`).

Entry: `incident-list` card / `#i-list` · sau `incident-create` toast `go('incident-detail')` pass `Id`.

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: list Chi tiết toast/stub — **chưa** màn `#sc-incident-detail` shipped → **không** đổi thành `edit_page`. Delta Design/Dev = ship full detail dual + wire GET/Close. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-incident-detail` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back text «Vấn đề» + chevron · Android icon-only · title iOS «Chi tiết» / Android «Chi tiết sự cố» — **OK** · Design parity title optional).

## 3. DoD (đo được)

1. Dual native push `#sc-incident-detail` `DES-MOB-INC-DETAIL`: nav back → `incident-list` · title **Chi tiết** (iOS) / **Chi tiết sự cố** (Android) · hero **Mã** + `Code` · badge severity×status · rows Loại · Vị trí ghim tự động · Định vị · Nguồn · CTA primary **Giao việc xử lý** · secondary **Xem trên bản đồ** · **Đóng sự cố**. Frame proto iOS 390×844 · Android 412×915. Shell tab 5 **giữ** · `tabs: none` trên surface · tab `incident` = shell entry (`GAP-TAB-01` · **cấm** invent tab 6 / segment trên detail).
2. Back → `go('incident-list')` (`reuse` parent · **cấm** reimplement list).
3. Appear: GET `incident/incidents/{id}` · bind §6 · 404 → EmptyChrome + back list · network fail → demo SSOT SC-2401 · screen **vẫn mở**.
4. Demo / fallback SSOT (dual parity trừ Nguồn khi empty):

   | Field | Value |
   |-------|-------|
   | Code | SC-2401 |
   | Badge | Nghiêm trọng · Đang mở |
   | Loại | Nứt mặt đường |
   | Vị trí | QL.1 · Km 1556+080 |
   | Định vị (demo only) | 10.9620, 106.8518 · ±5 m |
   | Nguồn (khi có) | Tuần đường PAT-…0014 |
   | Toast close | Đã đóng sự cố |

5. Badge VN map (control-hint):

   | API `Severity` | API `Status` | Badge demo | chrome |
   |----------------|--------------|------------|--------|
   | `Nghiêm trọng` / `critical` | open / `new` / `Đang mở` / not closed | Nghiêm trọng · Đang mở | red |
   | `Cao` / `high` | `in_progress` / giám sát | Cao · Đang được giám sát | warn/orange |
   | any | `closed` / `Đóng` | … · Đã đóng | gray |
   | other | other | `{Severity} · {Status raw}` | info |

6. **Giao việc xử lý** → `go('estimate')` · **không** POST assign trên slug này · **cấm** start sibling nếu chưa ship (`GAP-MOB-ACT-06`) — toast **Giao việc xử lý** OK P1.
7. **Xem trên bản đồ** → `go('gis-map')` pass id/route nếu có · shared_action · **không** embed map · **cấm** start nếu đã pending/done.
8. **Đóng sự cố** (open) → POST `incident/incidents/{id}/close` · toast **Đã đóng sự cố** · refresh badge → Đã đóng · disable CTA. Đã closed → disable / toast **Đã đóng** · **không** DELETE · **không** enqueue Close (`GAP-MOB-ACT-07`).
9. Định vị **readonly** · bind `HasGps` + Route/Km · **cấm** fake lat/lng khi live OK · **cấm** sửa định vị (OUT) · demo coords **chỉ** fallback offline (`GAP-MOB-INC-DETAIL-GPS-01`).
10. Nguồn: bind `DetectionId` / reporter / Description-AssetLabel cite · empty omit OK · **parity dual** khi có data (`GAP-MOB-INC-DETAIL-SRC-01`).
11. Kit **reuse map**: `LinmTopBar` · Text hero · `LinmBadge` · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · `LinmEmptyChrome`. **Cấm** raw `NavigationBar` / M3 bar / `TabView` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
12. Typography: label/caption **13** · code hero **≥24 / 28** · field value ≥**16** (`GAP-TYP-01`).
13. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
14. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
15. QA (role sau): Maestro slug `incident-detail` only · login → list → detail · close toast · live sim 6.9" + emulator · store PNG `qa/store/incident-detail` · **cấm** test list/create/chat as in-scope · **cấm** `yarn e2e-qa` web.
16. BE align: **không** endpoint mới — reuse GET by id + POST close proxy. Step 4b `/new-endpoint` **N/A** ở PO · Lat/Lng Signed = GAP SA nếu cần sau. **Cấm** `IncidentDetailController` / invent `api/v1/incident-detail`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/incident-detail.md` | detail · § UI · § API · OOS list/create/sheet/chat |
| CTX-02 | `docs/context/features/incident.md` | domain Incident · IncidentDto |
| CTX-03 | `docs/context/features/incident-list.md` | parent entry card / back |
| CTX-04 | `docs/context/features/incident-create.md` | entry sau Create |
| CTX-05 | `docs/context/features/estimate.md` | CTA Giao việc |
| CTX-06 | `docs/context/features/gis.md` / gis-map | CTA Bản đồ |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-incident-detail` | iOS 390×844 · `DES-MOB-INC-DETAIL` · **copy SSOT** |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-incident-detail` | Android 412×915 · **parity** |
| DEM-03 | `specs/incident-detail/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `docs/html-to-native-map.md` | kit topbar / badge / list row / primary / secondary / toast **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/incident-detail-control-hint.md` | controlHint · **hash skip read** |
| DA-02 | `specs/_data-analy/incident-detail-bff-endpoints.md` | BFF · GET by id · POST close |
| DA-03 | `specs/_data-analy/incident-detail-action-tree.md` | 1 detail + siblings reuse |
| DA-04 | `specs/_data-analy/incident-detail-real-data.md` | bind §A+§B + demo SSOT |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Incident · **cấm ERP.*** · **không** `api/v1/incident-detail` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmBadge` / `LinmListRow` / `LinmPrimaryButton` / `LinmSecondaryButton` / `LinmToast` / `LinmEmptyChrome` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 control-hint + real-data §A+§B (**cấm** re-scan HTML). UNCLEAR field path = **none** (GAPs chốt §7).

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Vấn đề | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('incident-list')` · Android icon-only OK |
| title | Chi tiết | Text | * | `LinmTopBar` title | iOS «Chi tiết» · Android «Chi tiết sự cố» — Design parity |
| codeLabel | Mã | Text | * | Caption **13** | fixed |
| codeValue | SC-* | Text | * | Display **≥24 / 28** bold | DTO `Code` |
| badge | severity · status | Badge | * | `LinmBadge` | `Severity` · `Status` → VN |
| rowType | Loại | ListRow | * | `LinmListRow` | `Title` ưu tiên · else `IncidentType` |
| rowLoc | Vị trí ghim tự động | ListRow | * | `LinmListRow` | `"{RouteName} · Km {KmStart}"` |
| rowGps | Định vị | ListRow | | `LinmListRow` | `HasGps` · **cấm** fake lat/lng · GAP coords |
| rowSource | Nguồn | ListRow | | `LinmListRow` | `DetectionId` / reporter · dual parity · empty omit |
| btnAssign | Giao việc xử lý | PrimaryButton | * | `LinmPrimaryButton` | `go('estimate')` · **không** POST assign P1 |
| btnMap | Xem trên bản đồ | SecondaryButton | * | `LinmSecondaryButton` | `go('gis-map')` |
| btnClose | Đóng sự cố | SecondaryButton | * | `LinmSecondaryButton` | POST close · disable nếu closed |
| toastClose | Đã đóng sự cố | Toast | * | `LinmToast` | after Close 200 |
| empty404 | (không tìm thấy) | EmptyChrome | | `LinmEmptyChrome` | NotFound · back list |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `incident-detail`? |
|---------------|--------|------|----------------------------|
| Load chi tiết | GET | `incident/incidents/{id}` | **yes** — bind hero + rows |
| Đóng sự cố | POST | `incident/incidents/{id}/close` | **yes** — body `CloseIncidentRequest` optional `Note` (demo empty OK) |
| Nav Giao việc | — | — | **local** · `estimate` |
| Nav Bản đồ | — | — | **local** · `gis-map` |
| Nav back list | — | — | **local** · `incident-list` |

### Bind (real-data §B)

| UI | DTO → display |
|----|---------------|
| codeValue | `Code` raw (SC-*) |
| badge | `"{SeverityVN} · {StatusVN}"` · map §3.5 |
| rowType | `Title` ưu tiên · thiếu → `IncidentType` |
| rowLoc | `"{RouteName} · Km {KmStart}"` · thiếu Km → Route only · **cấm** fake |
| rowGps | nếu DTO có Lat/Lng (hiện **không**) → `"lat, lng · ±N m"` · else nếu `HasGps` → loc text + «đã chốt» · else «Chưa có định vị» · demo coords **chỉ** fallback offline |
| rowSource | `DetectionId` prefix «AI DET-…» · hoặc «Tuần đường …» từ Description/AssetLabel · empty omit |
| close | 200 → toast · badge Đã đóng · disable CTA |
| nav key | `Id` |

**Cấm** `GET/POST incident-detail` · `IncidentDetailController` · DbContext trên Mobile.Bff · app `:5101` · invent Lat/Lng trên wire P1 · POST assign trên CTA detail.

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-INC-DETAIL-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-incident-detail`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome / `#sheet-*` trong pack này. |
| GAP-MOB-INC-DETAIL-GPS-01 | DTO thiếu Lat/Lng | **P1:** bind `HasGps` + Route/Km · demo coords **chỉ** offline fallback · **cấm** fake lat/lng khi live OK · **cấm** sửa định vị. SA Signed Lat/Lng nếu cần sau · Step 4b **không** ở PO. |
| GAP-MOB-INC-DETAIL-SRC-01 | Android «Nguồn» · iOS demo thiếu | **Parity dual:** cả hai show row Nguồn khi bind có `DetectionId`/reporter cite · empty → omit (không invent). Design thêm row iOS khi data có. |
| CTA estimate / gis-map | Sibling chưa ship | **Nav khi ship** · P1 toast nhãn nếu chưa · **cấm** start siblings (`GAP-MOB-ACT-06`). |
| Assign API | Live POST assign | **OUT P1 trên slug** — CTA = nav `estimate` only. |
| Close / GET | enqueue? | **Không** — cùng slug (`GAP-MOB-ACT-07`). |
| Kit | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. |
| Sibling | `estimate` · `gis-map` · `incident-list` · `incident-create` · `incident-chat` | **Không** start (`GAP-MOB-ACT-06`). Board Approve riêng. **Không** enqueue mới. |
| Cluster web path | `specs/incident-detail/specs/_data-analy/` | **N/A.** Dùng `_data-analy/incident-detail-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — detail không signup. |
| Step 4b | New endpoint? | **N/A** — reuse GetById + Close. Lat/Lng = SA GAP nếu Signed. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm** · shell tab `incident` giữ · **không** segment trên detail (`GAP-TAB-01`). |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Chi tiết vấn đề | `#sc-incident-detail` `DES-MOB-INC-DETAIL` · iOS + Android | **Screen** (push · **không** Modal/Sheet pack) | none (readonly detail · close = submit cùng slug) | GET by id · display hero/rows · POST close · toast · nav estimate/gis-map/list · empty 404 | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-incident-list` · `#sc-inc-form` · `#sheet-incident` · chat/comment · assign modal · sửa định vị · DELETE · embed map · watermark Gói.

Reuse only: `incident-list` (back/entry) · `incident-create` (entry after create) · `estimate` (CTA) · `gis-map` (CTA shared_action).

Frame: iOS 390×844 · Android 412×915 · safe area · nav + hero + rows + CTA + `LinmTabBar` không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Detail **mở** · demo SSOT SC-2401 · Close **cần online** · fail → toast · **cấm** full-screen block · **cấm** block tab |
| AC-D-02 | GPS deny | **N/A** edit — định vị **readonly** · **cấm** fake lat/lng · **cấm** sửa định vị |
| AC-D-03 | Leave dirty | **N/A** — không form dirty |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / EmptyChrome |
| AC-D-05 | Keyboard | **N/A** P1 (Close không bắt note UI) |
| AC-D-06 | Safe area | Nav + hero + rows + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET/POST Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell tab **Vấn đề** giữ · `tabs: none` surface · **cấm** invent tab 6 / segment · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera / push | **N/A** trên detail P1 |
| AC-D-12 | Typography | caption **13** · code ≥**24/28** · rows ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear | GET `incident/incidents/{id}` · fail → demo SSOT · 404 → Empty + back |
| AC-F-02 | Back | `go('incident-list')` · **cấm** reimplement list |
| AC-F-03 | Bind rows | code · badge · type · loc · gps · source per §6 |
| AC-F-04 | Giao việc | `go('estimate')` / toast P1 · **không** assign API · **cấm** start sibling |
| AC-F-05 | Bản đồ | `go('gis-map')` · **cấm** embed map trên slug |
| AC-F-06 | Đóng sự cố | POST close · toast **Đã đóng sự cố** · refresh · disable nếu closed · **không** DELETE |
| AC-F-07 | Dual parity | iOS + Android **cùng** zones + copy SSOT (trừ back/title chrome) · Nguồn parity khi có data (`GAP-MOB-ALIGN-01`) |
| AC-F-08 | Entry | List card / create nav → push detail pass `Id` |
| AC-F-09 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-10 | GPS / source bind | HasGps+Route/Km · **cấm** invent Lat/Lng · **cấm** invent Nguồn khi empty |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Load fail / offline | Demo fallback SC-2401 + optional toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| 404 | EmptyChrome · back list · **cấm** alert |
| Close success | Toast **Đã đóng sự cố** |
| Close khi đã closed | Disable / toast **Đã đóng** |
| Close fail / offline | Toast lỗi · **cấm** alert · **cấm** fake closed |
| Estimate / map chưa ship | Toast nhãn CTA · **cấm** system alert |
| Back | Pop list · không confirm |

## 11. Out of scope (this pack)

- `#sc-incident-list` / `#sc-inc-form` / `#sheet-incident` / chat implement
- POST assign trên CTA · assign modal web
- Sửa định vị · DELETE / xóa hẳn
- Embed map / gis overlay trên slug
- Invent `api/v1/incident-detail` / `IncidentDetailController` / Lat/Lng wire P1
- Bottom-sheet chrome (packKind scan `sheet` = mislabel → PO **screen**)
- Watermark Gói / device label / proto-click / mfeStdUrl / ERP.*
- Start siblings `pending_confirm` · enqueue Close/GET
- Re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role PO
- Grid AC web / Report AC Lin*

## 12. KPI (HĐ Gói 1 — màn này)

Chi tiết vấn đề = hiện trường xem 1 sự cố (mã · mức×TT · loại · vị trí · định vị readonly · nguồn) + đóng hoặc điều hướng giao việc / bản đồ. DoD pack: `#sc-incident-detail` dual + GET by id + POST close + kit detail — **không** omni-implement list/create/chat/sheet trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `incident-detail` / **`screen`** (confirmed · đóng GAP-MOB-INC-DETAIL-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/incident-detail/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-incident-detail` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | Screen `#sc-incident-detail` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack detail native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-incident-detail` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmBadge` / `LinmListRow` / Primary / Secondary / Toast / Empty |
| BFF | `incident-detail-bff-endpoints.md` · **chỉ** GET `{id}` + POST close |
| Real-data | `incident-detail-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **parity dual** · Nguồn khi có data · **không** sheet chrome · **không** vẽ list/create/chat trên slug · GPS readonly |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 · `tabs: none` surface · copy VN đúng dual HTML (trừ sibling CTA chưa ship → toast P1 · skip device label) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T02:44:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-control-hint-20260829 |
| realDataHash | sha256:incident-detail-mobile-real-data-20260829 |
| bffContentHash | sha256:incident-incidents-getbyid-close-proxy |
| taskId | `task_7563d8e0` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
