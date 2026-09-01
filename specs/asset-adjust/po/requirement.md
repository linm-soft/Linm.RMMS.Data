# PO — Requirement — asset-adjust (mobile · Cập nhật / bớt)

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| title | [Mobile] [Tài sản] -> Cập nhật / bớt |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-ADJUST-PACK-01 — STATUS/scan meta `sheet` = mislabel · demo surface = full `#sc-asset-adjust`) |
| stack | `native_dual` |
| thisAction | **Cập nhật / bớt** `#sc-asset-adjust` only · owner `DES-MOB-ASSET-ADJUST` · entry hub tile `#i-minus` · **cấm** gộp collect / AI / list / detail form / hub |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_eb71b522` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/asset-adjust` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/asset-adjust-control-hint.md` · `asset-adjust-bff-endpoints.md` · `asset-adjust-action-tree.md` · `asset-adjust-real-data.md` · contentHash `sha256:asset-adjust-control-hint-20260830` · real-data `sha256:asset-adjust-real-data-20260830` · bffContentHash `sha256:asset-road-assets-list-put-delete-proxy-20260830` · action-tree `sha256:asset-adjust-action-tree-20260830` · demoContentHash `sha256:mobile-p1-sc-asset-adjust-20260830` · ctxContentHash `sha256:asset-adjust-ctx-20260830` · cluster `specs/asset-adjust/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/asset-adjust-*` · **no Excel** · **hash skip** — **cấm** re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-30T23:35:00.000Z` |
| taskId | `task_eb71b522` |

**Cấm:** gộp `#sc-asset-collect` / `#sc-asset-ai` / `#sc-asset-list` / detail form / hub (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-adjust` / `AssetAdjustController` / Finance `api/v1/assets` · invent media upload path · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` / system `confirm()` · hard delete · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `asset-detail` / collect / AI (`GAP-MOB-ACT-06`) · enqueue GET/search/DELETE/PUT submit (`GAP-MOB-ACT-07`) · fake toast 200 khi GET/DELETE fail · ship hardcode `demoItems` khi BFF live (`GAP-MOB-REAL-02`) · re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`) · PUT edit form UI P1 (`GAP-MOB-ASSET-ADJUST-EDIT-01`).

## 1. Goal

Màn **Cập nhật / bớt** native dual (iOS SwiftUI + Android Compose): tìm mã TS · danh sách trên tuyến · **Sửa** → chi tiết · **Bớt** = modal soft-delete (`IsActive=false`) + toast Code. Persona: Tuần đường · Hạt QLĐB · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `asset-adjust` = screen `#sc-asset-adjust` `DES-MOB-ASSET-ADJUST` (+ modal cùng slug `#md-asset-remove` `DES-MOB-ASSET-REMOVE`). **Cấm** gộp collect / AI / list / detail form (`GAP-MOB-ACT-01`). Surface = **full screen** — **không** child sheet pack chrome (`GAP-MOB-ACT-02`). Search / list GET / open modal / DELETE soft / toast = **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`). «Sửa» = **reuse** `asset-detail` nav — **không** start · **không** PUT UI trên adjust P1.

Entry: `asset-hub` tile **Cập nhật / bớt** `#i-minus` (hiện toast `asset.tile.adjust` → **wire** `go('asset-adjust')`). Back «Tài sản» → `#sc-asset-hub`.

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: hub tile → toast **Cập nhật / bớt** — **chưa** push `#sc-asset-adjust` → **không** đổi thành `edit_page`. Delta Design/Dev = ship full list+search dual + wire hub toast → push + GET list(+search) + soft DELETE + modal + Sửa → detail. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-asset-adjust` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back text «Tài sản» + chevron · Android icon-only · btn Sửa/Bớt filled vs text — **OK** · Design parity note).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-asset-adjust` `DES-MOB-ASSET-ADJUST`: nav back → hub · title **Cập nhật / bớt** · SearchField · ListRow Code·Type / Route·Km · btn **Sửa** · btn **Bớt** · modal `#md-asset-remove` · toast. Frame proto iOS 390×844 · Android 412×915. Shell Tab 5 giữ · `tabs: none` trên surface · tab `home` = shell entry (`GAP-TAB-01` · **cấm** invent tab 6 / segment trên adjust).
2. Entry: hub tile Cập nhật / bớt → push `#sc-asset-adjust` · **cấm** toast-only sau ship (`GAP-MOB-ASSET-ADJUST-NAV-01`). Back → `go('asset-hub')` / pop hub (`reuse` parent · **cấm** reimplement hub).
3. Appear: GET `asset/road-assets?search=&page=&pageSize=` · bind rows §6 · empty → EmptyState · fail → demo SSOT rows UI-only + toast lỗi · screen **vẫn mở** · **cấm** fake 200 · **cấm** ship `demoItems` khi BFF live (`GAP-MOB-REAL-02`).
4. Search: SearchField placeholder SSOT **«Tìm mã TS cần sửa hoặc bớt…»** (dual — đóng SEARCH-01) · debounce → GET `?search=` · refresh list.
5. Row bind: title `Code · typeLabel(Type)` · subtitle `Route · Km {KmFrom}` · reuse mapper list/detail · unknown Type → raw · **cấm** invent lookup API P1. Demo row count (iOS 2 / Android 1) = sample only · live = GET list (`GAP-MOB-ASSET-ADJUST-ROW-01`).
6. **Sửa** → `go('asset-detail')` + pass `Id` · reuse pack `asset-detail` (đã `task_f6ca06ad`) · **cấm** start · **cấm** PUT form / inline edit trên `#sc-asset-adjust` P1 (`GAP-MOB-ASSET-ADJUST-EDIT-01`). Thiếu Id → toast · stay.
7. **Bớt** → open in-app modal `#md-asset-remove` `DES-MOB-ASSET-REMOVE` · **cấm** system alert/confirm. Copy: title **Bớt tài sản khỏi sổ?** · body demo SSOT · CTA **Bớt khỏi sổ** · **Giữ lại** = close.
8. Confirm **Bớt khỏi sổ** → DELETE `asset/road-assets/{id}` soft (`IsActive=false`) · 200 → toast **Đã bớt tài sản · {Code}** (Code từ row cache) · remove row · **cấm** invent Code · fail/404/403 → toast · giữ row · **cấm** fake 200 · **cấm** hard delete.
9. Kit **reuse map**: `LinmTopBar` · `LinmSearchField` `#i-search` · `LinmListRow` · Secondary / Danger (or Text) buttons · Modal kit · `LinmToast` · EmptyState. **Cấm** raw bar / invent kit nếu đã map (`GAP-MOB-ACT-05` · `GAP-MOB-ALIGN-01`).
10. Typography: placeholder/label **13–16** · row title ≥**16** · sub **13** · modal title **17** · body **13** (`GAP-TYP-01`).
11. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
12. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
13. QA (role sau): Maestro slug `asset-adjust` only · login → hub → adjust · search · Sửa nav · Bớt soft · live sim 6.9" + emulator · store PNG `qa/store/asset-adjust` · **cấm** test collect/AI/list as in-scope · **cấm** `yarn e2e-qa` web.
14. BE align: **không** endpoint mới — reuse GetList + SoftDelete proxy (+ PUT domain OUT UI P1). Step 4b `/new-endpoint` **N/A**. **Cấm** `AssetAdjustController` / invent `api/v1/asset-adjust` / Finance `api/v1/assets` · ERP.*.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/asset-adjust.md` | adjust · § UI · § API · OOS collect/AI/list · soft delete |
| CTX-02 | `docs/context/features/asset.md` | domain RoadAsset · GetList · SoftDelete · Update |
| CTX-03 | `docs/context/features/asset-hub.md` | parent entry tile `#i-minus` |
| CTX-04 | `docs/context/features/asset-detail.md` | «Sửa» nav reuse |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-asset-adjust` | iOS 390×844 · `DES-MOB-ASSET-ADJUST` · modal `#md-asset-remove` · **copy SSOT** |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-asset-adjust` | Android 412×915 · **parity** (1 demo row) |
| DEM-03 | `specs/asset-adjust/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `docs/html-to-native-map.md` | kit topbar / search / list row / toast / modal **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/asset-adjust-control-hint.md` | controlHint · **hash skip read** |
| DA-02 | `specs/_data-analy/asset-adjust-bff-endpoints.md` | BFF · GET list + DELETE soft |
| DA-03 | `specs/_data-analy/asset-adjust-action-tree.md` | 1 adjust + siblings reuse |
| DA-04 | `specs/_data-analy/asset-adjust-real-data.md` | bind §A+§B + demo SSOT |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · hub toast stub |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Asset · **cấm ERP.*** · **không** `api/v1/asset-adjust` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmSearchField` / `LinmListRow` / Modal / `LinmToast` / Empty **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 control-hint + real-data §A+§B (**cấm** re-scan HTML). UNCLEAR field path = **none** (GAPs chốt §7).

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tài sản | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('asset-hub')` · Android icon-only OK |
| title | Cập nhật / bớt | Text | * | `LinmTopBar` title | dual same |
| search | Tìm mã TS cần sửa hoặc bớt… | SearchField | * | `LinmSearchField` `#i-search` | SSOT longer copy dual · debounce GET `?search=` |
| rowAsset | Code · Type | ListRow | * | `LinmListRow` | `Code` · `typeLabel(Type)` |
| rowSub | Route · Km | ListRow subtitle | * | | `Route` · `Km {KmFrom}` |
| btnEdit | Sửa | SecondaryButton / TextButton | * | Secondary / Text | `go('asset-detail')` + Id · **cấm** PUT |
| btnRemove | Bớt | DangerButton / TextButton | * | Danger / Text error | open `#md-asset-remove` · **cấm** system alert |
| empty | (không có TS) | EmptyState | | Empty | sau GET empty |
| toastErr | (lỗi mạng) | Toast | * | `LinmToast` | GET/DELETE fail · **cấm** fake ok |
| toastOk | Đã bớt tài sản · {Code} | Toast | * | `LinmToast` | sau DELETE 200 |

### Modal `#md-asset-remove` (`DES-MOB-ASSET-REMOVE`) — cùng slug

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| mdTitle | Bớt tài sản khỏi sổ? | ModalTitle | * | Modal | soft IsActive |
| mdBody | Ẩn khỏi danh sách hiện trường… | ModalBody | * | | copy demo SSOT |
| mdConfirm | Bớt khỏi sổ | PrimaryButton (danger) | * | Primary danger | DELETE `asset/road-assets/{id}` |
| mdCancel | Giữ lại | SecondaryButton | * | Secondary | close modal |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| tileAdjust | Cập nhật / bớt | HubTile | `LinmHubTile` `#i-minus` | parent `asset-hub` · toast → **wire** push |

Toast → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `asset-adjust`? |
|---------------|--------|------|-------------------------|
| Load / search list | GET | `asset/road-assets?search=&page=&pageSize=` | **yes** — bind rows |
| Bớt khỏi sổ | DELETE | `asset/road-assets/{id}` | **yes** — soft delete |
| Sửa (nav) | — | — | **local** · `asset-detail` + Id |
| Cập nhật field (P2) | PUT | `asset/road-assets/{id}` | **OUT** UI P1 · domain live only |
| Toast ok / err | — | — | **local** UI |
| Nav back hub | — | — | **local** · `asset-hub` |

### Bind (real-data §B)

| UI | DTO → display / write |
|----|------------------------|
| search | query `search` → GET |
| rowAsset | `Code` · `typeLabel(Type)` |
| rowSub | `Route` · `Km {KmFrom}` · optional `KmTo` |
| btnEdit | nav · pass `Id` |
| btnRemove | open modal · cache `Id` + `Code` |
| mdConfirm | DELETE `{id}` |
| toastOk | after DELETE 200 · display cached `Code` |
| toastErr | GET/DELETE network/5xx/403/404 · **cấm** fake 200 |
| empty | GET empty list |
| nav key | `Id` |

**Cấm** `GET/DELETE asset-adjust` · `AssetAdjustController` · DbContext trên Mobile.Bff · app `:5101` · Finance `api/v1/assets` · invent type lookup API P1 · hard delete · enqueue DELETE/PUT (`GAP-MOB-ACT-07`).

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-ASSET-ADJUST-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-asset-adjust`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome / `#sheet-*` trong pack này. Modal `#md-asset-remove` = confirm overlay **cùng slug** — **không** đổi packKind. |
| GAP-MOB-ASSET-ADJUST-SEARCH-01 | Placeholder dual iOS dài / Android ngắn | **SSOT longer iOS** — dual dùng **«Tìm mã TS cần sửa hoặc bớt…»**. Design cập nhật Android placeholder. |
| GAP-MOB-ASSET-ADJUST-ROW-01 | Android 1 row vs iOS 2 demo | **Live = GET list** · demo row count = sample fallback only · **không** force parity row count khi offline demo. |
| GAP-MOB-ASSET-ADJUST-EDIT-01 | Guide «Sửa tình trạng/ảnh» vs demo nav detail | **P1: Sửa = nav `asset-detail`** · **PUT edit form UI = OUT / P2**. **Cấm** invent inline edit trên adjust · **cấm** enqueue PUT. |
| GAP-MOB-ASSET-ADJUST-MEDIA-01 | Ảnh update | **OUT** P1 · **không** invent media path · cùng GAP collect nếu P2. |
| GAP-MOB-ASSET-ADJUST-NAV-01 | Hub toast → push | **Wire push** khi ship · **cấm** giữ toast-only sau DoD. |
| Modal vs system confirm | — | **In-app modal only** · **cấm** `UIAlert` / `AlertDialog` / `confirm()`. |
| Soft vs hard delete | — | **Soft only** `IsActive=false` · **cấm** hard delete DB. |
| Kit | map + kit dual đã có | **`kit_missing_confirm` N/A** — reuse map. Design **verify** dual. |
| Sibling | `asset-detail` · collect · AI · list · hub | **Không** start (`GAP-MOB-ACT-06`). detail = reuse · **không** re-enqueue. |
| Cluster web path | `specs/asset-adjust/specs/_data-analy/` | **N/A.** Dùng `_data-analy/asset-adjust-*.md`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — adjust không signup. |
| Step 4b | New endpoint? | **N/A** — GetList + SoftDelete live. |
| Hash skip | contentHash skip analy | **Cấm** re-scan demo HTML / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). |
| Tab index | analy `tabs: none` | **Confirm** · shell tab `home` giữ · **không** segment trên adjust (`GAP-TAB-01`). |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Cập nhật / bớt | `#sc-asset-adjust` `DES-MOB-ASSET-ADJUST` · iOS + Android | **Screen** (push · **không** Modal/Sheet pack) | none (list+search · không edit form) | GET list(+search) · display rows · Sửa nav · open modal · DELETE soft · toast | `/agent-dev-ios` + `/agent-dev-android` |
| Bớt confirm | `#md-asset-remove` `DES-MOB-ASSET-REMOVE` | Modal overlay **cùng slug** | confirm | Confirm DELETE · Cancel close | same |

**Không** trên pack này: `#sc-asset-collect` · `#sc-asset-ai` · `#sc-asset-list` · `#sc-asset-detail` form · `#sc-asset-hub` · PUT edit form · watermark Gói · hard delete · system confirm.

Reuse only: `asset-hub` (back/entry) · `asset-detail` (Sửa nav — **không** start).

Frame: iOS 390×844 · Android 412×915 · safe area · nav + search + list + modal + `LinmTabBar` không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Screen **mở** · demo SSOT rows UI-only · toast lỗi · **cấm** full-screen block · **cấm** fake 200 · **cấm** block tab |
| AC-D-02 | GPS deny | **N/A** — adjust không request GPS P1 |
| AC-D-03 | Leave dirty | **N/A** — không form dirty · modal open → Cancel/back đóng · **không** confirm leave |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert` / system `confirm()`. Bớt = in-app modal · phản hồi = `LinmToast` / Empty |
| AC-D-05 | Keyboard | SearchField · debounce · keyboard không đè list CTA · dismiss on scroll/submit search |
| AC-D-06 | Safe area | Nav + search + list + modal + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET/DELETE Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Shell tab **Trang chủ** giữ · `tabs: none` surface · **cấm** invent tab 6 / segment · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera / push | **N/A** trên adjust P1 · media OUT |
| AC-D-12 | Typography | placeholder/label **13–16** · row ≥**16** / sub **13** · modal title **17** (`GAP-TYP-01`) |
| AC-F-01 | Appear | GET list · fail → demo SSOT + toast · empty → EmptyState |
| AC-F-02 | Search | debounce GET `?search=` · placeholder SSOT dài dual |
| AC-F-03 | Sửa | `go('asset-detail')` + Id · **cấm** PUT UI · thiếu Id → toast |
| AC-F-04 | Bớt | open modal → DELETE soft → toast Code · fail giữ row |
| AC-F-05 | Dual parity | iOS + Android **cùng** zones + copy SSOT (trừ back chrome / btn style filled vs text) · search placeholder **cùng** (`GAP-MOB-ALIGN-01`) |
| AC-F-06 | Entry | Hub tile → push adjust · **cấm** toast-only sau ship |
| AC-F-07 | Chrome | **Cấm** device label / proto-click / watermark Gói |
| AC-F-08 | Bind | §6 Code/Type/Route/Km · typeLabel reuse · **cấm** invent |
| AC-F-09 | OUT mutate | **Cấm** PUT edit form / hard delete / invent media trên slug P1 |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Load fail / offline | Demo fallback rows + toast lỗi · **cấm** native alert (`GAP-PO-LEAVE-01`) · **cấm** fake 200 |
| Empty list | EmptyState · **cấm** alert |
| DELETE fail / 404 / 403 XCO | Toast · giữ row · **cấm** alert |
| Bớt confirm | In-app modal only · **cấm** system confirm |
| Back | Pop hub · không confirm (đóng modal trước nếu mở) |

## 11. Out of scope (this pack)

- `#sc-asset-collect` / `#sc-asset-ai` / `#sc-asset-list` / hub implement (trừ wire entry push)
- PUT / inline edit form / tình trạng·ảnh update UI P1
- Hard delete · system alert/confirm
- Invent `api/v1/asset-adjust` / `AssetAdjustController` / Finance `api/v1/assets` / media path
- Bottom-sheet chrome (packKind scan `sheet` = mislabel → PO **screen**)
- Watermark Gói / device label / proto-click / mfeStdUrl / ERP.*
- Start siblings · enqueue GET/DELETE/PUT · re-scan demo
- Step 4b / migration / e2e ở role PO
- Grid AC web / Report AC Lin*

## 12. KPI (HĐ Gói 1 — màn này)

Cập nhật / bớt = hiện trường tìm TS trên tuyến · mở chi tiết sửa · soft-bớt khỏi sổ. DoD pack: `#sc-asset-adjust` dual + GET list(+search) + Sửa→detail + Bớt soft DELETE + modal + hub wire — **không** omni-implement collect/AI/list/detail form trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `asset-adjust` / **`screen`** (confirmed · đóng GAP-MOB-ASSET-ADJUST-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/asset-adjust/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-asset-adjust` + `#md-asset-remove` · no Excel |
| controlHint / UNCLEAR | §5 · none (GAPs chốt §7) |
| Screens / Pattern / `devSlash` | Screen `#sc-asset-adjust` + modal cùng slug · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack list/action native · **cấm** Lin* grid AC |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-asset-adjust` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · `kit_missing_confirm` **N/A** · verify dual TopBar / Search / ListRow / Modal / Toast / Empty |
| BFF | `asset-adjust-bff-endpoints.md` · GET list + DELETE soft · PUT UI OUT |
| Real-data | `asset-adjust-real-data.md` §A+§B |
| Open questions | §7 đã chốt — Design **parity dual** · search placeholder SSOT dài · **không** sheet chrome · **không** vẽ PUT form / collect/AI trên slug · modal in-app |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy + `/review-demo-design-mobile` |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · **GAP-PKT-ROLE-01**) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · IA lock Tab 5 · `tabs: none` surface · copy VN đúng dual HTML (search SSOT dài · trừ chrome back / btn style) · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · `/review-demo-design-mobile` trước confirm · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-30T23:35:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-po-requirement-20260830 |
| priorControlHintHash | sha256:asset-adjust-control-hint-20260830 |
| priorRealDataHash | sha256:asset-adjust-real-data-20260830 |
| bffContentHash | sha256:asset-road-assets-list-put-delete-proxy-20260830 |
| actionTreeHash | sha256:asset-adjust-action-tree-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-adjust-20260830 |
| ctxContentHash | sha256:asset-adjust-ctx-20260830 |
| taskId | `task_eb71b522` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
