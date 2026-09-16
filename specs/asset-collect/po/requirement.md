# PO — Requirement — asset-collect (mobile · Thu thập thủ công)

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| title | [Mobile] [Tài sản] -> Thủ công |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-COLLECT-PACK-01 — STATUS/scan meta `sheet` = mislabel · demo surface = full `#sc-asset-collect`) |
| stack | `native_dual` |
| thisAction | **Thu thập thủ công** `#sc-asset-collect` only · owner `DES-MOB-ASSET-COLLECT` · entry hub tile Thủ công `#i-plus` · **cấm** gộp AI / adjust / list / detail / hub |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_96a9045a` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/asset-collect` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/asset-collect-control-hint.md` · `asset-collect-bff-endpoints.md` · `asset-collect-action-tree.md` · `asset-collect-real-data.md` · contentHash `sha256:asset-collect-control-hint-20260830` · real-data `sha256:asset-collect-real-data-20260830` · bffContentHash `sha256:asset-collect-bff-20260830` · action-tree `sha256:asset-collect-action-tree-20260830` · demoContentHash `sha256:mobile-p1-sc-asset-collect-20260830` · ctxContentHash `sha256:asset-collect-ctx-20260830` · cluster `specs/asset-collect/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/asset-collect-*` · **no Excel** · **hash skip** — **cấm** re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-30T22:29:16.000Z` |
| taskId | `task_96a9045a` |

**Cấm:** gộp `#sc-asset-ai` / adjust / list / detail / hub form (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-collect` / `AssetCollectController` / Finance `api/v1/assets` · invent media upload path P1 · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue submit/type/name/route/gps/status/photo (`GAP-MOB-ACT-07`) · gõ tay lat/lng · fake toast 200 khi POST fail · ship hardcode demo khi BFF live (`GAP-MOB-REAL-02`) · re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Form **Thu thập thủ công** native dual (iOS SwiftUI + Android Compose): chọn loại · tên/mô tả · tuyến/lý trình (readonly) · GPS ghim tự động · tình trạng · ảnh local · CTA **Thêm tài sản** → POST create · toast mã `TS-*`. Persona: Tuần đường · Hạt QLĐB · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `asset-collect` = screen `#sc-asset-collect` `DES-MOB-ASSET-COLLECT`. **Cấm** gộp Camera AI / adjust / list / detail (`GAP-MOB-ACT-01`). Surface = **full screen** — **không** child sheet (`GAP-MOB-ACT-02`). Type / name / routeKm / gps / status / photo / Create = **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`).

Entry: `asset-hub` tile **Thủ công** `#i-plus` (hiện toast `asset.tile.collect` → **wire** `go('asset-collect')`). Back «Tài sản» → `#sc-asset-hub`.

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: hub tile → toast **Thủ công** — **chưa** push `#sc-asset-collect` → **không** đổi thành `edit_page`. Delta Design/Dev = ship full form dual + wire hub toast → push + BFF Create. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-asset-collect` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back text «Tài sản» + chevron · Android icon-only — **OK** · Design parity note).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-asset-collect` `DES-MOB-ASSET-COLLECT`: nav back → hub · title **Thu thập thủ công** · Select loại * · Text tên/mô tả * · Text readonly tuyến/lý trình * · Text readonly GPS ghim * · Select tình trạng * (dual) · PhotoRow + camera · Primary **Thêm tài sản** · toast. Frame proto iOS 390×844 · Android 412×915. Shell Tab 5 giữ · `tabs: none` trên surface · tab `home` = shell entry (`GAP-TAB-01` · **cấm** invent tab 6 / segment trên form).
2. Entry: hub tile Thủ công → push `#sc-asset-collect` · **cấm** toast-only sau ship. Back → `go('asset-hub')` / pop hub (`reuse` parent · **cấm** reimplement hub).
3. Appear: parallel GET `integration/asset-types` + GET `asset/road-assets/init-data` · start device GPS · optional GET `patrol/sessions` / `integration/road-routes/search` prefill Route/Km · fail catalog → empty select + **disable** CTA · toast · **cấm** hardcode 4–5 option demo làm SSOT khi API OK.
4. Type Select * bind catalog live · `Type` = code · demo options (Cột km / Biển báo / Cống / Hộ lan / Cầu) = **preview only** — live catalog = SSOT (`GAP-MOB-ASSET-COLLECT-TYPE-01`).
5. Name Text * → POST `Name` · label **13** / value **≥16**.
6. RouteKm readonly * display «QL.1 · Km 1556+000» style → wire parse `Route` + `KmFrom` (+ optional `KmTo` P2) · nguồn GPS snap / ca tuần / route search · thiếu → validation UI · **cấm** fake `QL.1` khi live reject (`GAP-MOB-ASSET-COLLECT-ROUTE-01`).
7. GPS pin readonly * · Lat,Lng · ±m · required UI · deny / poor → modal `DES-MOB-GPS-DENY` · **CTA disabled** · **cấm** fake · **cấm** gõ tay (`GAP-MOB-ASSET-COLLECT-GPS-01`).
8. Status Select * từ init-data `Statuses` · prefer Value `tot` / Label «Tốt» · **Android phải có field** (đóng dual GAP) · default `tot` nếu thiếu chọn (`GAP-MOB-ASSET-COLLECT-STATUS-01`).
9. PhotoRow + `#i-camera` · `openCapture('asset')` · **local only P1** · **không** invent media API · **không** block Create nếu chưa ảnh · upload = SA Signed (`GAP-MOB-ASSET-COLLECT-MEDIA-01`).
10. Primary **Thêm tài sản** → POST `asset/road-assets` body `CreateRoadAssetRequest` · `Source=manual` (omit OK · service default) · **cấm** `Source=ai` trên slug này · busy spinner · toast **Đã thêm tài sản · {Code}** · **cấm** invent Code khi fail · **chặn** submit nếu thiếu Type/Name/Route/KmFrom/Status/GPS · 422/mạng → toast lỗi · giữ form · **cấm** fake 200.
11. Kit reuse map: `LinmTopBar` · `LinmSelect` · `LinmTextField` · PhotoRow / CameraButton · `LinmPrimaryButton` · `LinmToast` · GPS deny modal `DES-MOB-GPS-DENY` · SectionLabel «Ảnh». **Cấm** invent kit mới nếu chưa map · Design `kit_missing_confirm` nếu cần (`GAP-MOB-ACT-05`).
12. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
13. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
14. QA (role sau): Maestro slug `asset-collect` only · live sim 6.9" + emulator · store PNG `qa/store/asset-collect` · **cấm** `yarn e2e-qa` web · **cấm** test sibling in-scope.
15. BE align: **không** invent `asset-collect` path — reuse Create + init-data + asset-types (+ optional sessions/routes). Step 4b **N/A** Create (DONE) · media = GAP SA — **cấm** PO chạy migration. **Cấm** `AssetCollectController` trên Mobile.Bff · ERP.*.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/asset-collect.md` | screen · form create · GPS · media GAP |
| CTX-02 | `docs/context/features/asset.md` | CreateRoadAssetRequest · RoadAssetDto peer |
| CTX-03 | `docs/context/features/asset-hub.md` | parent entry tile Thủ công |
| CTX-04 | `docs/context/features/asset-kcht-32.md` | catalog loại peer |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-asset-collect` | iOS 390×844 · `DES-MOB-ASSET-COLLECT` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-asset-collect` | Android 412×915 · **cùng copy** (trừ STATUS/TYPE dual) |
| DEM-03 | STATUS demo `Linm.RMMS.Demo/src/demo/ios/index.html` | cite only · **cấm** re-crawl |
| DEM-04 | `specs/asset-collect/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `docs/html-to-native-map.md` | TopBar / Select / TextField / Primary / Toast / PhotoRow |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/asset-collect-control-hint.md` | controlHint · tech factors · dual |
| DA-02 | `specs/_data-analy/asset-collect-bff-endpoints.md` | BFF table · DTO bind |
| DA-03 | `specs/_data-analy/asset-collect-action-tree.md` | 1 action · share/reuse · **none** enqueue |
| DA-04 | `specs/_data-analy/asset-collect-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/` | packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · hub toast stub |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Asset · Integration · Patrol · **cấm ERP.*** · **không** `api/v1/asset-collect` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / Select / TextField / Primary / Toast **đã có** · PhotoRow = map Design |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-asset-collect` dual. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tài sản | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('asset-hub')` · Android icon-only OK |
| title | Thu thập thủ công | TopBar title | * | `LinmTopBar` | 17 · dual chrome only |
| typeSelect | Loại tài sản * | Select | * | `LinmSelect` | GET asset-types · code bind · label 13 / value ≥16 |
| nameField | Tên / mô tả * | TextField | * | `LinmTextField` | → `Name` |
| routeKm | Tuyến / lý trình * | TextField readonly | * | `LinmTextField` | display · wire `Route`+`KmFrom` |
| gpsPin | Định vị ghim tự động * | TextField readonly | * | `LinmTextField` | Lat,Lng · ±m · required UI |
| statusField | Tình trạng | Select | * | `LinmSelect` prefer | init-data Statuses · **dual cả hai nền** |
| photoLabel | Ảnh | SectionLabel | | | **13** · iOS demo có · Android **thêm** label parity |
| photos | (slots) | PhotoRow | | | local · MEDIA GAP |
| addPhoto | (camera) | CameraButton | | `#i-camera` | `openCapture('asset')` |
| btnAdd | Thêm tài sản | PrimaryButton | * | `LinmPrimaryButton` | POST create · busy |
| toastOk | Đã thêm tài sản · TS-… | Toast | * | `LinmToast` | Code từ response |
| toastErr | (lỗi mạng / 422) | Toast | * | `LinmToast` | **cấm** fake ok |
| gpsDeny | Định vị bị tắt | Modal | * | `DES-MOB-GPS-DENY` | reuse · CTA disabled |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| tileCollect | Thủ công | HubTile | `LinmHubTile` `#i-plus` | owner `asset-hub` · wire `go('asset-collect')` |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `asset-collect`? |
|---------------|--------|------|--------------------------|
| Catalog loại TS | GET | `integration/asset-types` | **yes** — typeSelect |
| Init status/source/unit | GET | `asset/road-assets/init-data` | **yes** — statusField |
| Prefill tuyến (optional) | GET | `patrol/sessions` | optional — routeKm |
| Resolve tuyến code | GET | `integration/road-routes/search` | optional — routeKm |
| Thêm tài sản | POST | `asset/road-assets` | **yes** — btnAdd |
| GPS ghim / camera | — | — | device · **không** API |
| Media upload TS | — | — | **OUT P1** · GAP MEDIA-01 · **cấm invent** |
| Nav back hub | — | — | local · **không** API |
| Toast ok / err | — | — | local UI |

**Cấm** `GET/POST asset-collect` · `AssetCollectController` · DbContext trên Mobile.Bff · app `:5101` · Finance `api/v1/assets`.

### Create body map (P1) — `CreateRoadAssetRequest`

| UI | → Wire | Required |
|----|--------|----------|
| typeSelect | `Type` (code) | yes |
| nameField | `Name` | yes |
| routeKm parse | `Route` · `KmFrom` | yes |
| gpsPin | `Lat` · `Lng` | yes UI · API optional |
| statusField | `Status` | yes |
| (service) | `Source` = `manual` nếu omit | default |
| photos | — | **OUT** P1 body |
| Note / Qr / Quantity / UnitCode / ValueVnd / CodePrefix / SourceRef | — | **OUT** P1 form |

Response toast: `RoadAssetDto.Code` → «Đã thêm tài sản · {Code}». `Id` → optional nav detail P2 · **OUT** P1 (stay / back hub OK).

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-ASSET-COLLECT-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-asset-collect`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome trong pack này. |
| GAP-MOB-ASSET-COLLECT-STATUS-01 | Android thiếu Tình trạng | **Dual bắt buộc:** cả iOS + Android có `LinmSelect` Status từ init-data · default `tot` / «Tốt». |
| GAP-MOB-ASSET-COLLECT-TYPE-01 | Option «Cầu» iOS-only | **Catalog live = SSOT options** · **cấm** hardcode demo 4–5 khi API OK · demo options = preview only. |
| GAP-MOB-ASSET-COLLECT-MEDIA-01 | Media upload? | **P1 local PhotoRow only** · **không** invent path · **không** block Create thiếu ảnh · SA Signed nếu cần upload. |
| GAP-MOB-ASSET-COLLECT-ROUTE-01 | 1 field gộp → wire | Display 1 field · parse/bind `Route`+`KmFrom` · nguồn GPS/session/routes · thiếu → validation UI. |
| GAP-MOB-ASSET-COLLECT-GPS-01 | Deny / poor GPS | Modal `DES-MOB-GPS-DENY` · CTA off · **cấm** fake · **cấm** gõ tay. |
| Sibling enqueue | Create / inputs / photo | **none** — cùng slug (`GAP-MOB-ACT-06/07`). |
| Cluster path | `specs/asset-collect/specs/_data-analy/` | **N/A.** Dùng `_data-analy/asset-collect-*.md`. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup. |
| Step 4b | Create / media | Create **N/A** (DONE) · media **Pending SA** — **cấm** PO migration. |
| UNCLEAR fields | — | **none** — không AskQuestion field · hash skip · **cấm** re-crawl CTX/demo. |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Thu thập thủ công | `#sc-asset-collect` `DES-MOB-ASSET-COLLECT` · iOS + Android | **Screen** (tab home · **không** Modal/Sheet pack) | create (form · không CRUD list) | GET types + init-data · GPS · optional sessions/routes · camera local · POST create · toast · back hub | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-asset-ai` · `#sc-asset-adjust` · `#sc-asset-list` · `#sc-asset-detail` · web Kind B Create · soft delete · invent media · watermark Gói.

Reuse only: `asset-hub` (entry + back) · `DES-MOB-GPS-DENY` · kit map.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn mở · POST fail → toast lỗi · optional queue draft P2 · **cấm** fake 200 / fake Code · **cấm** full-screen block tab |
| AC-D-02 | GPS deny | Modal `DES-MOB-GPS-DENY` · CTA **disabled** · **cấm** fake lat/lng · **cấm** gõ tay · **cấm** system alert |
| AC-D-03 | Leave dirty | Back với Name/Type/ảnh đã nhập → confirm leave in-app (kit) · **cấm** native alert |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | nameField · keyboard không đè CTA Primary |
| AC-D-06 | Safe area | TopBar + scroll form + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **home** active · `tabs: none` · **cấm** invent segment · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | Permission deny → toast/in-app · **không** crash · local only · **cấm** invent upload |
| AC-D-12 | Push | **N/A** |
| AC-F-01 | Appear | GET types + init-data · start GPS · optional sessions/routes · bind selects |
| AC-F-02 | Empty catalog | Empty select · disable CTA · toast · **cấm** hardcode demo options làm SSOT |
| AC-F-03 | GPS fix | Update gpsPin · enable CTA khi đủ required |
| AC-F-04 | Submit | POST create · toast Code · **chặn** thiếu Type/Name/Route/KmFrom/Status/GPS |
| AC-F-05 | 422 / mạng | Toast lỗi · giữ form · **cấm** invent Code |
| AC-F-06 | Dual parity | iOS + Android **cùng** fields (Status + photo label Android **thêm**) · chrome back HIG/Material OK · **cấm** lệch field bind (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Entry | Hub tile → push owner · **cấm** toast-only sau ship |
| AC-F-08 | Source | `manual` only · **cấm** AI Source trên slug này |
| AC-F-09 | Photo | Local fill OK · **không** block Create thiếu ảnh P1 |

Typography: label/tab **13** · field value **≥16** (`typography-analy-qa.md`).

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | In-app confirm (kit) · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| GPS deny | Modal `DES-MOB-GPS-DENY` · CTA off · **cấm** native alert |
| POST fail / 422 | `LinmToast` lỗi · **cấm** alert |
| Offline POST | Toast lỗi · optional draft P2 · **cấm** fake 200 |
| Create success | Toast **Đã thêm tài sản · {Code}** |
| Empty catalog | Toast + disable CTA |

## 11. Out of scope (this pack)

- `#sc-asset-ai` · `#sc-asset-adjust` · `#sc-asset-list` · `#sc-asset-detail` · web Kind B Create · soft delete UI
- Invent `api/v1/asset-collect` / AssetCollectController / Finance `api/v1/assets` / media upload path P1
- Bottom-sheet chrome (packKind scan `sheet` = mislabel → PO **screen**)
- Nearby/bbox · map embed · gis-map CTA trên form
- Step 4b / migration media (SA)
- Watermark Gói / device label / mfeStdUrl / ERP.*
- Enqueue sibling Create/inputs/photo
- Re-scan demo HTML / crawl CTX
- Gõ tay lat/lng · Source=`ai`

## 12. KPI (HĐ Gói 1 — màn này)

Thu thập thủ công hiện trường = hub tile → form loại + tên + tuyến/Km + GPS auto-pin + tình trạng + ảnh local → POST create thật → toast mã TS. DoD pack: `#sc-asset-collect` dual + catalog live + GPS deny chrome + Create BFF — **không** omni-implement AI / adjust / list / detail trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `asset-collect` / **`screen`** (confirmed · đóng GAP-MOB-ASSET-COLLECT-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/asset-collect/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-asset-collect` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen `#sc-asset-collect` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/mobile-p1/ui/prototype/{ios,android}/index.html#sc-asset-collect` + pack stub `specs/asset-collect/ui/prototype/` · reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | TopBar/Select/TextField/Primary/Toast/PhotoRow/SectionLabel reuse · GPS deny reuse · `kit_missing_confirm` nếu cần · **cấm** sheet chrome |
| BFF | `asset-collect-bff-endpoints.md` · types + init-data + POST create · media GAP |
| Open questions | §7 đã chốt — Design **không** sheet · Status dual Android · photo label Android · TYPE catalog live · MEDIA local only |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| SA note | GAP-MOB-ASSET-COLLECT-MEDIA-01 · Create path DONE · Step 4b N/A Create · **cấm** ERP.* |

Design: HIG + Material · IA lock Tab 5 home · copy VN đúng HTML · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-30T22:29:16.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-collect-po-requirement-20260830 |
| priorControlHintHash | sha256:asset-collect-control-hint-20260830 |
| priorRealDataHash | sha256:asset-collect-real-data-20260830 |
| bffContentHash | sha256:asset-collect-bff-20260830 |
| actionTreeHash | sha256:asset-collect-action-tree-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-collect-20260830 |
| ctxContentHash | sha256:asset-collect-ctx-20260830 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked dorGate=PASS -->
