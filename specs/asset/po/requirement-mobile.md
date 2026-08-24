# PO — Requirement — asset (mobile list · Danh mục tài sản)

| Field | Value |
|-------|-------|
| feature | `asset` |
| title | [Mobile] List danh mục tài sản |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · data-analy đề xuất · **≠** web Kind B catalog) |
| stack | `native_dual` |
| thisAction | **List danh mục TS** `#sc-asset-list` `DES-MOB-ASSET-LIST` only · entry `asset-hub` tile Danh sách · **không** gộp form/detail/collect |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_d5c147af` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA/Review tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/asset` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/features/asset-control-hint.md` · `specs/_data-analy/features/asset-real-data.md` · cluster `specs/_data-analy/clusters/cluster-asset-header-v1.md` · contentHash `sha256:b21de98e21ce800f30383fb452770f85aa87d5be969e4bf0ccd5387c2acd17af` · bffContentHash `sha256:asset-mobile-list-road-assets-proxy-20260823` · mobile sibling ref `specs/_data-analy/asset-hub-bff-endpoints.md` · `asset-hub-action-tree.md` · cluster `specs/asset/specs/_data-analy/` **không tồn tại** — SSOT = feature controlHint + real-data + hub BFF sibling table · **no Excel** |
| prior web | `po/requirement.md` **done** (`task_9ab7f74a`) · MFE Kind B **shipped** — mobile **không** AC web Grid/Report |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-23T17:00:00.000Z` |
| taskId | `task_d5c147af` |

**Cấm:** gộp sibling `asset-detail` / `asset-collect` / `asset-adjust` / `asset-form` / `gis-map` (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-list` / `AssetListController` · Grid AC web / Report AC Lin* / `LinPageLayout` · ERP.* · Finance `api/v1/assets` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue create/update/delete trên list (`GAP-MOB-ACT-07`) · Dropdown 8 nhãn demo type/route · parent JSON string.

## 1. Goal

Màn **Danh sách tài sản** native dual (iOS SwiftUI + Android Compose): search · list row mã/tên/loại/tuyến/lý trình. Persona: Tuần đường · Hạt QLĐB · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `asset` = màn list `#sc-asset-list` `DES-MOB-ASSET-LIST`. **Cấm** gộp `asset-detail` / `asset-collect` / `asset-adjust` / `asset-form` / `gis-map` / web full-page form (`GAP-MOB-ACT-01`). `#sc-asset-list` **không** child form/sheet (`GAP-MOB-ACT-02` = none). **Không** enqueue POST/PUT/DELETE trên list (`GAP-MOB-ACT-07`).

Entry: `asset-hub` tile **Danh sách** → push `#sc-asset-list` (`reuse=asset-hub`). Back «Tài sản» → pop `#sc-asset-hub`.

**≠** web Kind B `LinPageLayout` A–D + `LinCatalogDataGrid` + full-page `AssetFormPage` — kept `po/requirement.md`. Mobile P1 = **list browse + search** only.

## 2. changeScope `edit_page` — Current → New

Nguồn SSOT: data-analy `asset-control-hint.md` + `asset-real-data.md` (`task_67ce475b`) · dual HTML `#sc-asset-list` · web list **đã ship** MFE `Linm.Web.RMMS.Asset`.

| ID | Current (web MFE + demo 2026-08-14 · prior Review `task_bf4df098`) | New (this PO mobile `task_d5c147af`) | Surface |
|----|---------------------------------------------------------------------|--------------------------------------|---------|
| GAP-MOB-ASSET-NAV-01 | `asset-hub` tile Danh sách → toast **Danh sách** (hub prior) | **push** `#sc-asset-list` · back pop hub · leading **Tài sản** + `#i-chevron-left` | asset-hub · asset list |
| GAP-MOB-ASSET-LIST-01 | Native màn list **chưa** ship | Dual `#sc-asset-list`: `LinmTopBar` title **Danh sách** · `LinmSearchField` · `LinmListRow` ×N | asset list |
| GAP-MOB-ASSET-SEARCH-01 | Web Zone B SearchInput + filter type/route/km | Mobile P1 **search bar only** → query `search=` · placeholder **Tìm mã TS, tuyến, loại…** · apply → page=1 · filter sheet type/route/km = **P2** | asset list |
| GAP-MOB-ASSET-DATA-01 | Web GET `asset/road-assets` full grid | GET `asset/road-assets` `page=1` `pageSize=50` · bind `code` · `name` · `type` label · `route` · `kmFrom`/`kmTo` · fail/empty → demo 2 rows SSOT | asset · BFF |
| GAP-MOB-ASSET-ROW-01 | Web row menu Xem/Sửa/Copy/Lịch sử | Mobile P1 tap row → toast **Chi tiết tài sản** · **cấm** push `#sc-asset-detail` P1 (`GAP-MOB-ACT-06`) | asset list |
| GAP-MOB-ASSET-PIN-01 | Demo row badge **Ghim** | **P2 Nice** — P1 **không** bắt buộc pin badge · prototype alias only | design |
| GAP-MOB-ASSET-SL-01 | Web GAP-RPT-SRC-ASSET-01 `quantity`+`unitCode` on grid | List row P1 **không** hiện SL/ĐVT · bind API vẫn có field · detail/form sibling | list vs detail |
| PO artifact | `requirement-mobile.md` **thiếu** | **this turn** full `/agent-po-mobile` AC | po |

**Không** đổi: web entity `RoadAssetEntity` · API `api/v1/asset/road-assets` · BFF proxy `mobile-bff` · 23 `asset-type` / 38 `road-route` master · GAP-PO-ASSET-01..06 (web PO) · **cấm** ERP.* · **cấm** prefix `/rmms/`.

**Reuse:** domain Asset · paths `asset/road-assets` · kit `LinmTopBar` · `LinmSearchField` · `LinmListRow` · `LinmRowIcon` · `LinmToast` · parent entry `asset-hub` tile (`reuse=asset-hub`).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-asset-list`: nav back · title **Danh sách** · search · list rows. Frame proto iOS 390×844 · Android 412×915. Push từ hub · **không** tab bar trên màn này.
2. Nav back **Tài sản** → pop `#sc-asset-hub` · iOS leading label **Tài sản** + `#i-chevron-left`. Android icon chevron `#i-chevron-left` (HIG vs M3 chrome OK) · title **Danh sách** **cùng** 2 OS.
3. Search: `LinmSearchField` placeholder **Tìm mã TS, tuyến, loại…** · debounce/submit → GET `search=` · **page=1** · **cấm** filter toolbar type/route/km P1.
4. Rows live bind (hoặc demo SSOT khi fail/empty):

   | code | title line | subtitle | notes |
   |------|------------|----------|-------|
   | TS-20260810-014 | TS-20260810-014 · Cống ngang | QL.1 · Km 1556+000 · Cống | demo row 1 |
   | TS-20260809-088 | TS-20260809-088 · Biển P.127 | HCM · Biển báo | demo row 2 |

   Row chrome: `LinmListRow` + `LinmRowIcon` `#i-cube` (indigo/gray) · chevron trailing · title = `{code} · {name}` · subtitle = `{route}` · chainage · `{typeLabel}`.
5. GET `mobile-bff/api/v1/asset/road-assets` (`page=1` · `pageSize=50` · `search=`). **Cấm** invent `api/v1/asset-list` · **cấm** app gọi RMMS `:5101` · **cấm** Finance `api/v1/assets`.
6. GET fail / offline / empty live → demo 2 rows §3.4 · list **mở** · toast info **optional** · **cấm** crash · **cấm** block hub Tài sản.
7. Tap row → toast **Chi tiết tài sản** P1 · **cấm** push `#sc-asset-detail` · **cấm** start sibling (`GAP-MOB-ACT-06`).
8. **Cấm** row menu Xem/Sửa/Copy/Lịch sử trên mobile list P1 (web only) · **cấm** swipe actions CRUD.
9. **Cấm** Tạo mới / Thu thập / Cập nhật nút trên list P1 — sibling hub tiles only.
10. Kit **reuse map**: `LinmTopBar` · `LinmSearchField` · `LinmListRow` · `LinmRowIcon` · `LinmToast`. **Cấm** raw `List`/`LazyColumn` row chrome · **cấm** M3 `SearchBar` raw (`GAP-MOB-ACT-05`).
11. **Cấm** watermark Gói / device label / proto-click (`GAP-DEV-MOB-PLACEHOLDER-01` · `GAP-MOB-CHROME-01`).
12. Type: row title ≥ **16** (`fieldText`) · search placeholder **13** · **cấm** tab 10 / label 12 (`GAP-TYP-01`).
13. App chỉ `{BffPrefix}` · token Keychain / Encrypted.
14. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
15. QA (role sau): Maestro slug `asset` · live sim 6.9" + emulator · store PNG `qa/store/asset` · **cấm** `yarn e2e-qa` web.
16. BE align: **không** endpoint mới — reuse `GET asset/road-assets`. Step 4b `/new-endpoint` **N/A**. **Cấm** `AssetListController` trên Mobile.Bff.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/asset.md` | domain · API road-assets · mobile collect/map sibling |
| CTX-02 | `docs/context/features/asset-hub.md` | parent hub · entry tile Danh sách |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-asset-list` | iOS 390×844 · `DES-MOB-ASSET-LIST` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-asset-list` | Android 412×915 · **cùng copy** 2 rows |
| DEM-03 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | web visual SSOT · **không** clone chrome mobile |
| MAP | `docs/html-to-native-map.md` | `LinmSearchField` · `LinmListRow` · `LinmRowIcon` |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/features/asset-control-hint.md` | controlHint web → mobile search bind |
| DA-02 | `specs/_data-analy/features/asset-real-data.md` | bind list DTO |
| DA-03 | `specs/_data-analy/clusters/cluster-asset-header-v1.md` | cluster |
| DA-04 | `specs/_data-analy/asset-hub-bff-endpoints.md` | sibling `asset-list` GET paths |
| DA-05 | `specs/_data-analy/asset-hub-action-tree.md` | parent `asset-hub` · enqueue rules |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| WEB-PO | `specs/asset/po/requirement.md` | Kind B web — **không** AC mobile |
| IOS | `D:/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · `AssetListView` (role sau) |
| AND | `D:/AI-QLBD/Linm.RMMS.Mobile.Android` | native · `AssetListScreen` (role sau) |
| BFF | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` | `RoadAssetsController` · **cấm ERP.*** |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | list kit |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-asset-list` dual + DA-01/02. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tài sản | BackButton | * | `LinmTopBar` leading | `reuse=asset-hub` · pop hub · `#i-chevron-left` |
| title | Danh sách | Text | * | `LinmTopBar` title | DES-MOB-ASSET-LIST · dual same |
| search | Tìm mã TS, tuyến, loại… | SearchField | * | `LinmSearchField` | query `search=` · page=1 |
| items[].title | {code} · {name} | Text | * | `LinmListRow` title | DTO `code` + `name` |
| items[].subtitle | route · km · loại | Text | * | `LinmListRow` subtitle | `route` · `kmFrom`/`kmTo` · type label |
| rowIcon | — | RowIcon | * | `LinmRowIcon` `#i-cube` | indigo/gray |
| rowTap | — | ListRow action | * | `LinmListRow` onTap | toast **Chi tiết tài sản** P1 |
| empty | (trống) | EmptyChrome | | optional | 0 live + no demo — fail → demo rows |
| entryHub | Danh sách | HubTile | * | `LinmHubTile` hub | `reuse=asset-hub` · **cấm** reimplement hub |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map (`GAP-MOB-ACT-05`).

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action | Method | Path | In slug `asset`? |
|--------|--------|------|------------------|
| List | GET | `asset/road-assets` | **yes** — `search` · `page` · `pageSize` (default 50) |
| Init-data | GET | `asset/road-assets/init-data` | **no** P1 — sibling form/detail |
| Detail by id | GET | `asset/road-assets/{id}` | **no** P1 — sibling `asset-detail` |
| Create / update / delete | POST/PUT/DELETE | `asset/road-assets` … | **no** — sibling collect/adjust/form |
| Type/route lookup UI | GET | `integration/asset-types/search` · `integration/road-routes/search` | **no** P1 — search param only |
| Invent `asset-list` | GET | `asset-list` / `api/v1/asset-list` | **cấm** |
| Web-only import | POST | `asset/road-assets/import` | **no** |
| ERP / Finance fork | GET | `so-ts/*` · `api/v1/assets` | **cấm** |

DTO list row (minimum): `id` · `code` · `name` · `type` (code) · `typeName` or resolved label · `route` · `kmFrom` · `kmTo` · `status` · optional `quantity` · `unitCode` (bind only · **không** hiện P1).

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-ASSET-01 | Demo «Mặt đường» vs seed | **Giữ** web PO: không map «Mặt đường» → `LAND_ROW`. Production = 23 mã SearchInput web; mobile list hiện **label** từ API/demo. |
| GAP-PO-ASSET-02 | Demo «Cầu» không mã 1:1 | **Giữ** web PO: không invent `BRIDGE` seed pack này. |
| GAP-PO-ASSET-03 | 6 alias demo | **Giữ** canonical map web PO §6 (Biển báo→`GANTRY_SIGN` …). |
| GAP-PO-ASSET-04 | Form full-page web | **OUT** mobile list pack — sibling `asset-collect`/`asset-form` `pending_confirm`. |
| GAP-PO-ASSET-05 | Excel export | **OUT** mobile P1. |
| GAP-PO-ASSET-06 | parent JSON | **Cấm** parent JSON string. |
| GAP-F-ASSET-MOB-01 | Filter type/route/km toolbar | **OUT P1** — search `search=` only. Filter sheet = **P2** sibling hoặc web. |
| GAP-F-ASSET-MOB-02 | Tap row → detail | **P1 toast** «Chi tiết tài sản». Push `#sc-asset-detail` = sibling `pending_confirm`. |
| GAP-F-ASSET-MOB-03 | Badge Ghim demo | **P2 Nice** — không DoD P1. |
| GAP-F-ASSET-MOB-04 | Pagination footer | **OUT P1** — load page 1 size 50 · pull-to-refresh = **P2 Nice**. |
| packKind | data-analy `list` | **Confirm `list`.** **≠** web Kind B. **Cấm** Grid/Report AC. |
| Kit list | map + kit dual | Design **verify** dual. Thiếu kit → `kit_missing_confirm` · **cấm** Dev raw row. |
| Cluster web path | `specs/asset/specs/_data-analy/` | **N/A.** Dùng `_data-analy/features/asset-*`. |
| GAP-PO-STORE-01 | signup / xóa tài khoản | **N/A** — list không signup. |
| Prior web pipeline | Review `task_bf4df098` done | Mobile chain **mới** — không re-AC web MFE turn này. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Danh sách TS | `#sc-asset-list` `DES-MOB-ASSET-LIST` · iOS + Android | **List** (push từ hub · không Modal/Sheet) | none (không form) | Appear GET list · search apply · tap row toast · back pop hub | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-asset-detail` / `#sc-asset-collect` / `#sc-asset-adjust` / `#sc-asset-form` / `#sc-gis-map` · CRUD submit · web Kind B zones · watermark.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | List **mở** · demo 2 rows SSOT · toast info optional · **cấm** full-screen block · **cấm** block hub |
| AC-D-02 | GPS deny | **N/A** — list không GPS |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | Search focus OK · dismiss không crash |
| AC-D-06 | Safe area | TopBar + search + list không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên list · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | GET Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | `tabs: none` trên list · entry hub only · **cấm** invent segment |
| AC-D-11 | Camera / push | **N/A** |
| AC-D-12 | Type | Row title ≥ **16** · placeholder **13** · **cấm** GAP-TYP-01 |
| AC-D-13 | Dual parity | Cùng copy VN 2 rows + title **Danh sách** + toast **Chi tiết tài sản** · `#i-chevron-left` · **cấm** lệch text (`GAP-MOB-DEMO-COPY-*`) |
| AC-D-14 | Chrome skip | **Cấm** device label «iPhone» / «· Android» · **cấm** watermark Gói |
| AC-F-01 | Appear | GET `asset/road-assets` · bind rows · fail → demo |
| AC-F-02 | Entry hub | Tile **Danh sách** → `#sc-asset-list` · **cấm** toast-only stub |
| AC-F-03 | Search | `search=` apply · page=1 · re-fetch |
| AC-F-04 | Tap row | Toast **Chi tiết tài sản** · **cấm** push detail P1 |
| AC-F-05 | Back | Pop `#sc-asset-hub` |
| AC-F-06 | A11y / Maestro | `sc-asset-list` · `nav-back` · `search-asset` · `row-asset-{id}` · hub tile hittable |
| AC-F-07 | Watermark | **Cấm** «bản Gói N» / «gen realapp» trên UI |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| GET fail / offline | Demo rows + optional `LinmToast` · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Tap row | Toast **Chi tiết tài sản** |
| Search empty result | Empty state hoặc demo fallback · **cấm** crash |
| Back | pop — không confirm |

## 11. Out of scope (this pack)

- `#sc-asset-detail` · `#sc-asset-collect` · `#sc-asset-adjust` · `#sc-asset-form` · `#sc-gis-map` · `#sc-det-hitl`
- Filter sheet type/route/km · org-tree · pagination footer · pull-refresh (P2 Nice)
- Row menu Xem/Sửa/Copy/Lịch sử · swipe delete · Tạo mới trên list
- Web Kind B `LinPageLayout` · schema editor · Excel import/export
- Leaflet / Kind F map · AI detect confirm · media upload
- Invent `GET asset-list` / `AssetListController` · clone ERP.* · `mfeStdUrl`
- iPad Phase 2 (`A4-IPAD DEFER`)

## 12. KPI (HĐ Gói 1 — màn này)

Danh mục TS hiện trường: từ hub Tài sản mở list, tìm mã/tuyến/loại, xem hàng. DoD mobile-p1 `#sc-asset-list` dual + GET road-assets + search — **không** omni CRUD/detail/form trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `asset` / **`list`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/asset/STATUS.md` |
| Context / Demo / DI | CTX-01/02 · DEM dual `#sc-asset-list` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | List `#sc-asset-list` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/mobile-p1/ui/prototype/{ios,android}/index.html#sc-asset-list` + pack copy `specs/asset/ui/prototype/{ios,android}/` |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse map · verify dual `LinmTopBar` / `LinmSearchField` / `LinmListRow` |
| BFF | `asset-hub-bff-endpoints.md` sibling · GET `asset/road-assets` only P1 |
| Open questions | GAP-F-ASSET-MOB-* đã chốt §7 — Design **không** vẽ form · **không** filter bar · **không** CRUD chrome |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| Step 4b | **N/A** — reuse `RoadAssetsController` · **cấm** invent path |

Design: HIG + Material · copy VN đúng HTML · **cấm** skin Ministry · **cấm** «Có mạng» · packet `design-demo-ssot.md` · dual parity `/review-demo-design-mobile`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-08-23T17:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-mobile-edit-list-20260823 |
| bffContentHash | sha256:asset-mobile-list-road-assets-proxy-20260823 |
| contentHashPriorDataAnaly | sha256:b21de98e21ce800f30383fb452770f85aa87d5be969e4bf0ccd5387c2acd17af |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
