# PO — Requirement — asset-detail (mobile · Chi tiết tài sản)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| title | [Mobile] [Tài sản] -> Chi tiết tài sản |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-DET-PACK-01 — STATUS/scan meta `sheet` = mislabel · demo surface = full `#sc-asset-detail`) |
| stack | `native_dual` |
| thisAction | **Chi tiết tài sản** `#sc-asset-detail` only · entry list row / adjust «Sửa» · **cấm** gộp list / collect / adjust / AI / hub |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_df4700bc` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/asset-detail` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/asset-detail-control-hint.md` · `asset-detail-bff-endpoints.md` · `asset-detail-action-tree.md` · `asset-detail-real-data.md` · contentHash `sha256:asset-detail-control-hint-20260830` · real-data `sha256:asset-detail-real-data-20260830` · bffContentHash `sha256:asset-detail-bff-20260830` · action-tree `sha256:asset-detail-action-tree-20260830` · demoContentHash `sha256:mobile-p1-sc-asset-detail-20260830` · cluster `specs/asset-detail/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/asset-detail-*` · **no Excel** · **hash skip** — **cấm** re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-30T21:20:00.000Z` |
| taskId | `task_df4700bc` |

**Cấm:** gộp `#sc-asset-list` / collect / adjust / AI / hub (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-detail` / `AssetDetailController` / mobile-only RoadAsset DTO fork · invent Finance `api/v1/assets` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `gis-map` / adjust (`GAP-MOB-ACT-06`) · enqueue GET by id / chrome / CTA map (`GAP-MOB-ACT-07`) · PUT/DELETE trên slug này · fake 200 khi GET fail · ship mock-only khi BFF live (`GAP-MOB-REAL-02`) · re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Chi tiết tài sản** native dual (iOS SwiftUI + Android Compose): hero mã TS · rows loại / tuyến · lý trình / tọa độ · CTA **Ghim trên bản đồ**. Persona: Tuần đường · Hạt QLĐB · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `asset-detail` = màn chi tiết `#sc-asset-detail` `DES-MOB-ASSET-DETAIL`. **Cấm** gộp list / collect / adjust / AI (`GAP-MOB-ACT-01`). Surface = **full screen** — **không** child sheet (`GAP-MOB-ACT-02`). GET by id · display rows · CTA map nav = **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`). PUT/DELETE = owner `asset-adjust` — **OUT**.

Entry: `asset` list `#sc-asset-list` `row-asset-*` (live P1 = toast → **wire push**) · adjust «Sửa» → `go('asset-detail')` + `Id`.

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: list row → toast `asset.list.toast.detail` — **chưa** push `#sc-asset-detail` → **không** đổi thành `edit_page`. Delta Design/Dev = ship full detail dual + wire GET by id + list toast → push. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-asset-detail` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back text «Tài sản» + chevron · Android icon-only · title iOS «Chi tiết» / Android «Chi tiết tài sản» — **OK** · Design parity note).

## 3. DoD (đo được)

1. Dual native push `#sc-asset-detail` `DES-MOB-ASSET-DETAIL`: nav back → `#sc-asset-list` · title **Chi tiết** (iOS) / **Chi tiết tài sản** (Android) · hero **Mã TS** + `Code` · rows Loại · Tuyến · lý trình · Tọa độ (khi có Lat/Lng) · CTA primary **Ghim trên bản đồ**. Frame proto iOS 390×844 · Android 412×915. Shell tab 5 **giữ** · `tabs: none` trên surface · tab `home` = shell entry (`GAP-TAB-01` · **cấm** invent tab 6 / segment trên detail).
2. Back → `go('asset-list')` / pop list (`reuse` parent `asset` · **cấm** reimplement list).
3. Appear: GET `asset/road-assets/{id}` · bind §6 · 404 → EmptyChrome + back list · network fail → demo SSOT TS-20260810-014 · screen **vẫn mở** · toast lỗi · **cấm** fake 200.
4. Demo / fallback SSOT (dual parity trừ chrome title/back):

   | Field | Value |
   |-------|-------|
   | Title iOS | Chi tiết |
   | Title Android | Chi tiết tài sản |
   | Code | TS-20260810-014 |
   | Loại | Cống |
   | Tuyến · lý trình | QL.1 · Km 1556+000 |
   | Tọa độ | 11.5300, 109.0040 (khi có Lat/Lng · ẩn nếu null) |
   | CTA | Ghim trên bản đồ |
   | Back | Tài sản |

5. List entry: `row-asset-*` toast → **wire** `go('asset-detail')` + `Id` khi pack ship (`GAP-MOB-ASSET-DET-NAV-01`). Adjust «Sửa» → cùng slug + `Id` · **không** gộp PUT/DELETE.
6. **Ghim trên bản đồ** → `go('gis-map')` pass Id / Lat / Lng nếu có · shared_action · **không** embed map · **cấm** start nếu đã pending (`GAP-MOB-ACT-06` · sibling `task_23d7eba0`) — toast **Ghim trên bản đồ** OK P1 nếu chưa ship.
7. Loại display = client `AssetDtoMapper.typeLabel(Type)` reuse list · unknown → raw `Type` · **không** lookup API P1 (`GAP-MOB-ASSET-DET-TYPE-01`).
8. Tọa độ: bind `Lat`/`Lng` khi có · format `"lat, lng"` · **ẩn** nếu null · **parity dual** cả iOS + Android (`GAP-MOB-ASSET-DET-GPS-01`) · **không** request location trên detail.
9. Kit **reuse map**: `LinmTopBar` · Text hero · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmEmptyChrome`. **Cấm** raw `NavigationBar` / M3 bar / `TabView` (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
10. Typography: label/caption **13** · code hero **≥24 / 28** bold · field value ≥**16** (`GAP-TYP-01`).
11. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
12. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
13. QA (role sau): Maestro slug `asset-detail` only · login → list → detail · CTA map toast/nav · live sim 6.9" + emulator · store PNG `qa/store/asset-detail` · **cấm** test list/collect/adjust/AI as in-scope · **cấm** `yarn e2e-qa` web.
14. BE align: **không** endpoint mới — reuse GET by id proxy. Step 4b `/new-endpoint` **N/A**. **Cấm** `AssetDetailController` / invent `api/v1/asset-detail` / Finance `api/v1/assets`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/asset-detail.md` | detail · § UI · § API · OOS list/collect/adjust/AI |
| CTX-02 | `docs/context/features/asset.md` | domain RoadAsset · peer web · mobile list |
| CTX-03 | `docs/context/features/asset-hub.md` | grandparent hub |
| CTX-04 | `docs/context/features/gis.md` / gis-map | CTA Ghim bản đồ |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-asset-detail` | iOS 390×844 · `DES-MOB-ASSET-DETAIL` · **copy SSOT** |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-asset-detail` | Android 412×915 · **parity** (+ GPS row demo) |
| DEM-03 | `specs/asset-detail/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `docs/html-to-native-map.md` | kit topbar / list row / primary / toast / empty **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/asset-detail-control-hint.md` | controlHint · **hash skip read** |
| DA-02 | `specs/_data-analy/asset-detail-bff-endpoints.md` | BFF · GET by id |
| DA-03 | `specs/_data-analy/asset-detail-action-tree.md` | 1 detail + siblings reuse |
| DA-04 | `specs/_data-analy/asset-detail-real-data.md` | bind §A+§B + demo SSOT |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · list toast stub |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Asset · **cấm ERP.*** · **không** `api/v1/asset-detail` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmListRow` / `LinmPrimaryButton` / `LinmToast` / `LinmEmptyChrome` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 control-hint + real-data §A+§B (**cấm** re-scan HTML). UNCLEAR field path = **none** (GAPs chốt §7).

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tài sản | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('asset-list')` · Android icon-only OK |
| title | Chi tiết / Chi tiết tài sản | Text | * | `LinmTopBar` title | iOS «Chi tiết» · Android «Chi tiết tài sản» — Design parity |
| codeLabel | Mã TS | Text | * | Caption **13** | fixed |
| codeValue | TS-* | Text | * | Display **≥24 / 28** bold | GET `Code` |
| rowType | Loại | ListRow | * | `LinmListRow` no-icon | `Type` + `typeLabel` |
| rowRouteKm | Tuyến · lý trình | ListRow | * | `LinmListRow` no-icon | `Route` · `KmFrom` · optional `KmTo` |
| rowGps | Tọa độ | ListRow | | `LinmListRow` no-icon | `Lat`,`Lng` · ẩn nếu null · **parity dual** |
| btnPinMap | Ghim trên bản đồ | PrimaryButton | * | `LinmPrimaryButton` | `go('gis-map')` · pass Id/coords |
| empty404 | (không tìm thấy) | EmptyChrome | | `LinmEmptyChrome` | NotFound · back list |
| toastErr | (lỗi mạng) | Toast | * | `LinmToast` | GET fail · **cấm** fake ok |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| rowAsset | (live code · name) | ListRow nav | `LinmListRow` `#i-cube` | parent `asset` · toast → **wire** push + `Id` |
| btnSuaAdjust | Sửa | SecondaryButton | adjust | `asset-adjust` · `go('asset-detail')` · **không** gộp |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `asset-detail`? |
|---------------|--------|------|-------------------------|
| Load chi tiết | GET | `asset/road-assets/{id}` | **yes** — bind hero + rows |
| Nav Ghim bản đồ | — | — | **local** · `gis-map` |
| Nav back list | — | — | **local** · `asset-list` |
| Toast err / empty | — | — | **local** UI |

### Bind (real-data §B)

| UI | DTO → display |
|----|---------------|
| codeValue | `Code` raw (TS-*) |
| rowType | `typeLabel(Type)` client · unknown → raw `Type` |
| rowRouteKm | `"{Route} · Km {KmFrom}"` · nếu có `KmTo` append · thiếu Route → «—» · **cấm** fake |
| rowGps | nếu `Lat`/`Lng` có → `"lat, lng"` · else **ẩn** row · **cấm** invent coords khi live OK · demo coords **chỉ** fallback offline |
| btnPinMap | nav · pass `Id` + Lat/Lng nếu có |
| empty404 | GET 404 |
| toastErr | GET network/5xx/403 · **cấm** fake 200 |
| nav key | `Id` |

**Cấm** `GET asset-detail` · `AssetDetailController` · DbContext trên Mobile.Bff · app `:5101` · Finance `api/v1/assets` · PUT/DELETE trên slug · invent lookup type API P1.

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-ASSET-DET-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-asset-detail`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome / `#sheet-*` trong pack này. |
| GAP-MOB-ASSET-DET-TITLE-01 | iOS «Chi tiết» · Android «Chi tiết tài sản» | **Giữ dual** — HIG/Material chrome OK · Design ghi parity note · **không** force cùng title string. |
| GAP-MOB-ASSET-DET-GPS-01 | Android có row Tọa độ · iOS demo thiếu | **Parity dual:** cả hai show row Tọa độ khi `Lat`/`Lng` có · ẩn nếu null · **cấm** request GPS trên detail · demo coords **chỉ** offline fallback. Design thêm row iOS khi data có. |
| GAP-MOB-ASSET-DET-TYPE-01 | Type code vs label | **Reuse** `AssetDtoMapper.typeLabel` từ list · **không** GET lookup P1 · unknown → raw `Type`. |
| GAP-MOB-ASSET-DET-NAV-01 | List toast → push | **Wire push** khi ship · parent list cập nhật nav · **cấm** giữ toast-only sau DoD. |
| CTA gis-map | Sibling `task_23d7eba0` pending | **Nav khi ship** · P1 toast nhãn nếu chưa · **cấm** start (`GAP-MOB-ACT-06`) · **cấm** re-enqueue. |
| PUT/DELETE | Same domain path | **OUT** slug — owner `asset-adjust` · **cấm** enqueue (`GAP-MOB-ACT-07`). |
| GET load | enqueue? | **Không** — cùng slug (`GAP-MOB-ACT-07`). |
| Kit | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. |
| Sibling | `gis-map` · `asset` · `asset-adjust` · collect / AI | **Không** start (`GAP-MOB-ACT-06`). Board Approve riêng. **Không** enqueue mới. |
| Cluster web path | `specs/asset-detail/specs/_data-analy/` | **N/A.** Dùng `_data-analy/asset-detail-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — detail không signup. |
| Step 4b | New endpoint? | **N/A** — reuse GetById live. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm** · shell tab `home` giữ · **không** segment trên detail (`GAP-TAB-01`). |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Chi tiết tài sản | `#sc-asset-detail` `DES-MOB-ASSET-DETAIL` · iOS + Android | **Screen** (push · **không** Modal/Sheet pack) | none (readonly detail) | GET by id · display hero/rows · toast err · empty 404 · nav gis-map / list | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-asset-list` · `#sc-asset-collect` · `#sc-asset-adjust` · `#sc-asset-ai` · `#sc-asset-hub` · PUT/DELETE · embed map · watermark Gói.

Reuse only: `asset` list (back/entry) · `asset-adjust` (entry «Sửa») · `gis-map` (CTA shared_action).

Frame: iOS 390×844 · Android 412×915 · safe area · nav + hero + rows + CTA + `LinmTabBar` không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Detail **mở** · demo SSOT TS-20260810-014 · toast lỗi · **cấm** full-screen block · **cấm** fake 200 · **cấm** block tab |
| AC-D-02 | GPS deny | **N/A** request — tọa độ **readonly** bind DTO · **cấm** request location · **cấm** invent coords khi live OK |
| AC-D-03 | Leave dirty | **N/A** — không form dirty |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / EmptyChrome |
| AC-D-05 | Keyboard | **N/A** — không input |
| AC-D-06 | Safe area | Nav + hero + rows + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell tab **Trang chủ** giữ · `tabs: none` surface · **cấm** invent tab 6 / segment · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera / push | **N/A** trên detail P1 |
| AC-D-12 | Typography | caption **13** · code ≥**24/28** · rows ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear | GET `asset/road-assets/{id}` · fail → demo SSOT + toast · 404 → Empty + back |
| AC-F-02 | Back | `go('asset-list')` · **cấm** reimplement list |
| AC-F-03 | Bind rows | code · type · route/km · gps per §6 |
| AC-F-04 | Ghim bản đồ | `go('gis-map')` / toast P1 · **cấm** embed map · **cấm** start sibling |
| AC-F-05 | Dual parity | iOS + Android **cùng** zones + copy SSOT (trừ back/title chrome) · GPS row parity khi có data (`GAP-MOB-ALIGN-01`) |
| AC-F-06 | Entry | List row / adjust «Sửa» → push detail pass `Id` · **cấm** toast-only sau ship |
| AC-F-07 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-08 | Type / GPS bind | typeLabel reuse · Lat/Lng hide-if-null · **cấm** invent lookup / invent coords |
| AC-F-09 | OUT mutate | **Cấm** PUT/DELETE / soft-delete UI trên slug |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Load fail / offline | Demo fallback TS-20260810-014 + toast lỗi · **cấm** native alert (`GAP-PO-LEAVE-01`) · **cấm** fake 200 |
| 404 | EmptyChrome · back list · **cấm** alert |
| 403 XCO | Toast · back list · **cấm** alert |
| Map chưa ship | Toast **Ghim trên bản đồ** · **cấm** system alert |
| Back | Pop list · không confirm |

## 11. Out of scope (this pack)

- `#sc-asset-list` / collect / adjust / AI / hub implement (trừ wire entry push)
- PUT / DELETE / soft-delete UI · invent submit trên detail
- Embed map / gis overlay trên slug
- Invent `api/v1/asset-detail` / `AssetDetailController` / Finance `api/v1/assets` / type lookup API
- Bottom-sheet chrome (packKind scan `sheet` = mislabel → PO **screen**)
- Watermark Gói / device label / proto-click / mfeStdUrl / ERP.*
- Start siblings `pending_confirm` · enqueue GET/CTA
- Re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`)
- Step 4b / migration / e2e ở role PO
- Grid AC web / Report AC Lin*
- Optional P1 OUT UI: `Name` subtitle · `Status` badge · Qr / Quantity / UnitCode / Note / Source

## 12. KPI (HĐ Gói 1 — màn này)

Chi tiết tài sản = hiện trường xem 1 TS (mã · loại · tuyến · lý trình · tọa độ) + điều hướng ghim bản đồ. DoD pack: `#sc-asset-detail` dual + GET by id + list wire push + kit detail — **không** omni-implement list/collect/adjust/AI trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `asset-detail` / **`screen`** (confirmed · đóng GAP-MOB-ASSET-DET-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/asset-detail/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-asset-detail` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | Screen `#sc-asset-detail` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack detail native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-asset-detail` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmListRow` / Primary / Toast / Empty |
| BFF | `asset-detail-bff-endpoints.md` · **chỉ** GET `{id}` |
| Real-data | `asset-detail-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **parity dual** · GPS row khi có Lat/Lng · **không** sheet chrome · **không** vẽ list/collect/adjust/AI trên slug · title dual OK |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 · `tabs: none` surface · copy VN đúng dual HTML (trừ sibling CTA chưa ship → toast P1 · skip device label) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-30T21:20:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-po-requirement-20260830 |
| priorControlHintHash | sha256:asset-detail-control-hint-20260830 |
| priorRealDataHash | sha256:asset-detail-real-data-20260830 |
| bffContentHash | sha256:asset-detail-bff-20260830 |
| actionTreeHash | sha256:asset-detail-action-tree-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-detail-20260830 |
| taskId | `task_df4700bc` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
