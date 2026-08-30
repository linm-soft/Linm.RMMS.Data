# Team lead — Task — asset (mobile list · Danh mục tài sản)

| Field | Value |
|-------|-------|
| feature | `asset` |
| title | [Mobile] List danh mục tài sản |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | **`list`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-asset-list` `DES-MOB-ASSET-LIST` · **cấm** Kind B web / Lin* catalog / Report / full-page form / `mfeStdUrl` |
| route_confirm | **route_a** — `asset-hub` tile **Danh sách** → `#sc-asset-list` · Back → pop `#sc-asset-hub` · **cấm** `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/asset` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web |
| prior · data_analy | **confirmed** · `_data-analy/features/asset-control-hint.md` · `asset-real-data.md` · `asset-hub-bff-endpoints.md` · `asset-hub-action-tree.md` · cluster `clusters/cluster-asset-header-v1.md` · contentHash `sha256:asset-mobile-edit-list-20260823` · bffContentHash `sha256:asset-mobile-list-road-assets-proxy-20260823` |
| prior · po | **confirmed** · `po/requirement-mobile.md` · `task_d5c147af` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-asset-list` · `ui/review/demo-parity.md` · `task_179e1510` |
| prior · sa | **confirmed** · `be/solution-discovery-mobile.md` · `solution_confirm=approve` · Step 4b **N/A** · `task_657c2239` |
| prior web TL | `task/asset.md` 2026-08-14 Kind B web (`task_31557cdc`) — **superseded** trên mobile chain · web pipeline **done** |
| taskId | `task_217f2173` |
| updatedAt | `2026-08-29T16:52:38.000Z` |
| thisAction | **List danh mục TS** `#sc-asset-list` only · GET `asset/road-assets` · search · demo fallback · toast detail · hub tile push · **cấm** gộp form/detail/collect |

**Cấm:** gộp sibling `asset-detail` / `asset-collect` / `asset-adjust` / `asset-form` / `gis-map` (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-list` / `AssetListController` · ERP.* · Finance `api/v1/assets` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `List` / `LazyColumn` product chrome / M3 `SearchBar` · watermark Gói / device label / «Có mạng» · badge Ghim P1 · filter type/route/km P1 · pagination footer P1 · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue POST/PUT/DELETE (`GAP-MOB-ACT-07`) · `scaffold_new` / `/mobile-app-architecture` · Step 4b / migration · TL chạy e2e / `yarn build` / `yarn start:std` · implement native Write.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Asset `RoadAssetsController` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | **chỉ** `GET asset/road-assets?page=1&pageSize=50&search=` Bearer |
| kit | reuse map dual — `LinmTopBar` · `LinmSearchField` · `LinmSearchGlyph` · `LinmListRow` · `LinmRowIcon` · `LinmToast` · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| entry | `reuse=asset-hub` tile **Danh sách** (`tile-list`) · **cấm** reimplement hub |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse live `GET asset/road-assets` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: `asset-hub` `#sc-asset-hub` tile **Danh sách** (`tile-list`) → push `#sc-asset-list` `DES-MOB-ASSET-LIST`. Back / leading → pop `#sc-asset-hub` (reuse hub · **cấm** reimplement). Search apply → GET `search=` page=1. Tap row → `LinmToast` **Chi tiết tài sản** · **cấm** push `#sc-asset-detail` P1. Sibling collect/adjust/map/AI tiles giữ toast / backlog · **cấm** start sibling turn Dev (`GAP-MOB-ACT-06`). **Không** tab bar trên màn list. |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng |

IA lock (design · ux-analy · SA):

```
home → #sc-asset-hub (reuse) → tile Danh sách → #sc-asset-list ← this pack
#sc-asset-list → back = pop asset-hub · search = GET · row = toast detail
```

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `route_confirm=route_a` · `2026-08-29T16:52:38.000Z`.

---

## Live gap (TL audit 2026-08-29)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-asset-list` | **DELTA** — **chưa** `AssetList*` · hub `tileList` = toast **Danh sách** | **T-IOS-LIST-01** |
| Android `#sc-asset-list` | **DELTA** — **chưa** list feature · `AssetHubIntent.TileList` = toast | **T-AND-LIST-01** |
| `GET asset/road-assets` | BE `RoadAssetsController` + Mobile.Bff `MobileApiProxyController` catch-all **live** · app **chưa** repo/DTO list | **reuse** path · Dev thêm `AssetRepository` + mapper · **cấm** invent `asset-list` |
| Hub tile Danh sách | toast stub | wire push list · **cấm** reimplement `#sc-asset-hub` |
| Type label | DTO `Type` = code | client `AssetDtoMapper.typeLabel` + demo SSOT labels · **không** lookup API P1 |
| Quantity / UnitCode | live on DTO | bind only · **không** hiện list P1 (`GAP-MOB-ASSET-SL-01`) |
| Filter type/route/km | BE query live | **OUT P1** — search only (`GAP-F-ASSET-MOB-01`) |
| Pagination footer | BE paged | **OUT P1** — page 1 size 50 (`GAP-F-ASSET-MOB-04`) |
| Badge Ghim | demo alias | **P2 Nice** — **không** DoD P1 |
| Sibling detail/collect/adjust | `pending_confirm` | toast / hub tiles · **cấm** API + **cấm** start |
| Demo parity dual 2 rows | Design closed | fallback SSOT 2 rows |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit list | dual map shipped | Dev **cấm** raw List/SearchBar · **cấm** `T-KIT-*` |
| Foot «Phiên bản Gói…» / device label | demo chrome | **cấm ship** |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-ASSET-LIST | kit | — | **n/a** | — | Kit list **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-LIST-01** | ios | SA · route_a | **done** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | New `Presentation/Features/AssetList/*` · hub tile push · GET `asset/road-assets` · typeLabel mapper · demo 2 rows · toast row · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-LIST-01** | android | SA · route_a | **done** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/assetlist/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — GET road-assets **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| **T-BFF-01** | bff | — | **reuse** | — | Mobile.Bff proxy catch-all **live** · **cấm** `AssetListController` local · optional Dev verify `dotnet build` (không TL) |
| T-QA-01 | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `asset` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/asset` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`asset-detail` · `asset-collect` · `asset-adjust` · form · gis) vào task file này như in-scope implement. Sibling giữ `pending_confirm` — **cấm** auto start (`GAP-MOB-ACT-06`).

---

## T-IOS-LIST-01 — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-ASSET-LIST` · `DES-MOB-ASSET-LIST-NAV` · `DES-MOB-ASSET-LIST-SEARCH` · `DES-MOB-ASSET-LIST-ROWS` · `#sc-asset-list` |
| Pattern | List push từ hub · **không** Modal/Sheet filter · **không** tab bar · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | label **Tài sản** + chevron · pop `#sc-asset-hub` |
| title | `LinmTopBar` title | **Danh sách** fixed |
| search | `LinmSearchField` · `LinmSearchGlyph` `#i-search` | placeholder **Tìm mã TS, tuyến, loại…** · debounce/submit → GET `search=` page=1 · placeholder **13** · field ≥**16** |
| rowIcon | `LinmRowIcon` `#i-cube` | indigo row1 · gray row2 (parity demo) |
| rowTitle | `LinmListRow` title | `{code} · {name}` ≥**16** |
| rowSub | `LinmListRow` subtitle | `{route} · Km {kmFrom} · {typeLabel}` · subtitle **13** |
| rowChev | `LinmListRow` `showsChevron` | `#i-chevron-right` iOS primary |
| rowTap | `LinmListRow` onTap | toast **Chi tiết tài sản** · pass `Id` khi sibling ship · **cấm** push detail P1 |
| empty | optional `LinmEmptyChrome` | fail/empty → demo 2 rows (list **vẫn mở**) |
| toast | `LinmToast` | detail · offline optional |

**Cấm** raw `List` / `LazyVStack` product chrome · **cấm** ship foot Gói / device label · **cấm** «Có mạng» · **cấm** badge Ghim P1 · **cấm** filter sheet.

### Demo / fallback SSOT (**2** rows — **cấm** rút 1)

| code | title line | subtitle | icon bg |
|------|------------|----------|---------|
| TS-20260810-014 | TS-20260810-014 · Cống ngang | QL.1 · Km 1556+000 · Cống | indigo |
| TS-20260809-088 | TS-20260809-088 · Biển P.127 | HCM · Biển báo | gray |

### Type label mapper (client P1)

| `Type` code (examples) | Display label |
|------------------------|---------------|
| `CULVERT_X` | Cống |
| `GANTRY_SIGN` | Biển báo |
| `KM_POST` | Cột Km |
| `GUARDRAIL` | Hộ lan |
| `LIGHTING` | Đèn |
| `SLOPE_PROTECT` | Taluy |
| unknown | fallback = raw `Type` code |

Demo rows SSOT dùng label cố định. Production: mapper + fallback — **cấm** Dropdown 8 nhãn demo làm persist SSOT · **cấm** GET lookup P1.

### Row bind (SA · real-data mobile)

| Line | Rule |
|------|------|
| title | `"{Code} · {Name}"` |
| subtitle | `"{Route} · Km {KmFrom} · {typeLabel}"` · optional `KmTo` nếu Design/mapper cần · **cấm** Quantity/UnitCode trên UI P1 |
| Id | nav key → detail (toast P1) |
| Status | bind optional · **không** bắt buộc hiển thị P1 |

### API / store

| Step | Spec |
|------|------|
| Appear / refresh | `FetchAssetListUseCase` → `GET asset/road-assets?page=1&pageSize=50` Bearer (+ `search=` khi apply) |
| Repo | new `AssetRepository` + `AssetRepositoryImpl` → `ApiClient` path `asset/road-assets` · **cấm** invent `asset-list` · **cấm** URLSession trong View |
| Mapper | `AssetDtoMapper.listRow(from:)` + `typeLabel(from:)` → `AssetListItem` |
| Bind | Code · Name · Type · Route · KmFrom · (KmTo) · Id · Status · Quantity/UnitCode bind-only |
| Fail / empty / offline | demo SSOT **2** rows · screen **vẫn mở** · optional toast · **cấm** native alert · **cấm** block hub |
| Search | server `search=` · page=1 · **không** gửi type/route/km/org P1 |
| Sibling API | **cấm** GET `/{id}` / POST/PUT/DELETE / init-data trên slug list P1 |

### Router / shell

| Entry | Behavior |
|-------|----------|
| Hub `tileList` / `tile-list` | **thay** toast → push `#sc-asset-list` (`AssetListView`) |
| Back | pop `#sc-asset-hub` · **cấm** reimplement hub |
| Other hub tiles | giữ toast / sibling backlog · **không** đổi trong pack này trừ wire list |
| DI | `AppContainer` wire `AssetListViewModel` + use case + repo |
| Accessibility | root `sc-asset-list` · search · rows |

**Cấm** WebView HTML · VM→URLSession trực tiếp.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md` (và/hoặc `implement/asset.md` theo Dev skill).

Optional Dest (skill TL): **iPad Pro 13-inch (M5)** khi team yêu cầu — **không** claim family `1` store.

---

## T-AND-LIST-01 — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-asset-list` · frame 412×915 |
| Pattern | List · **không** Modal/Sheet filter · Material chrome OK (back = icon `#i-chevron-left` / ArrowBack) |

### UI / API

Cùng bảng field · typeLabel · demo 2 rows · bind · toast · kit cite như T-IOS.  
Nav back: **icon-only** OK (HIG vs M3) · title **Danh sách** · copy VN **parity** iOS (`GAP-MOB-ALIGN-01`).

### Router / shell

| Entry | Behavior |
|-------|----------|
| `AssetHubIntent.TileList` / `tile-list` | **thay** toast → navigate `asset-list` / `#sc-asset-list` |
| Back | `popBackStack` → `asset-hub` reuse |
| DI | Hilt `AssetListViewModel` · use case · repo → Retrofit/`ApiService` `@GET("asset/road-assets")` |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/android.md`.

Optional verify (Dev, **không** TL): Mobile.Bff `dotnet build` PASS.

---

## T-BE-* / T-BFF — n/a · reuse

| id | Decision |
|----|----------|
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse `GET api/v1/asset/road-assets` · **cấm** `AssetListController` / invent path |
| T-BE-MIG | **n/a** — không bảng mới · `share_tenant` existing · **cấm** `/database-migration` |
| T-BFF-01 | **reuse** — Mobile.Bff catch-all proxy · **cấm** clone controller |
| Step 4b | **N/A** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack này |

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → list mở · demo 2 rows · toast in-app · **cấm** full-screen block |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` |
| AC-D-05 | Search focus · field ≥16 · keyboard không đè chrome |
| AC-D-06 | Safe area · nav + search + rows |
| AC-D-10 | **Không** tab bar trên `#sc-asset-list` |
| AC-D-12 | search placeholder **13** · title/row ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear GET road-assets · fail/empty → demo 2 |
| AC-F-02 | Back → `asset-hub` |
| AC-F-03 | Hub tile Danh sách → push list (không toast stub) |
| AC-F-04 | Search → GET `search=` page=1 |
| AC-F-05 | Tap row → toast **Chi tiết tài sản** · **cấm** push detail |
| AC-F-06 | Dual **2** rows + copy SSOT |
| AC-F-07 | **Cấm** filter type/route/km · badge Ghim · Quantity UI P1 |
| AC-F-08 | **Cấm** device label / proto-click / watermark Gói |
| AC-F-09 | Type code → typeLabel mapper · **cấm** lookup API P1 |
| AC-F-10 | App path **chỉ** `asset/road-assets` qua Mobile.Bff |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `asset-detail` | `pending_confirm` | row tap sau ship → push · P1 = toast |
| `asset-collect` | `pending_confirm` | hub tile Thủ công / Camera AI |
| `asset-adjust` | `pending_confirm` | hub tile Cập nhật / bớt |
| `gis-map` / asset map | reuse / pending | hub map tiles |
| `asset-hub` | reuse shipped | entry only · **cấm** reimplement |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start từ TL/Dev `asset`.

---

## Deps

```
T-KIT-ASSET-LIST (n/a)
T-BE-API / T-BE-MIG (n/a) · T-BFF-01 (reuse)
route_a + SA
  → T-IOS-LIST-01
  → T-AND-LIST-01
T-IOS + T-AND → T-QA-01 (QA role)
```

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `asset` / **`list`** |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-LIST-01` · `T-AND-LIST-01` · T-BE **n/a** · T-BFF **reuse** · T-KIT **n/a** |
| BFF | **chỉ** `GET asset/road-assets` |
| Real-data | `_data-analy/features/asset-real-data.md` + SA field map mobile |
| UX packet | `ui/ux-analy.md` · `ui/design.md` · dual proto · map |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/asset.md | **PASS** · T-IOS-LIST-01 · T-AND-LIST-01 · T-BE n/a · T-BFF reuse · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có trên host · autoApprove route_a |
| Kit | **PASS** · reuse map · T-KIT **n/a** |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-29T16:52:38.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-mobile-edit-list-20260823 |
| bffContentHash | sha256:asset-mobile-list-road-assets-proxy-20260823 |
| taskId | `task_217f2173` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
