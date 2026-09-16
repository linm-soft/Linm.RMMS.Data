# Team lead — Task — asset-detail (Chi tiết tài sản · mobile screen)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| title | [Mobile] [Tài sản] -> Chi tiết tài sản |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA chốt · GAP-MOB-ASSET-DET-PACK-01 **closed** · surface full `#sc-asset-detail` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **screen** push `#sc-asset-detail` `DES-MOB-ASSET-DETAIL` · **cấm** sheet chrome / Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| thisAction | **Chi tiết tài sản** `#sc-asset-detail` only · entry list `row-asset-*` / adjust «Sửa» · GET by id · bind hero+rows · CTA gis-map · **cấm** gộp list / collect / adjust / AI / hub / PUT/DELETE |
| route_confirm | **route_a** (autoApprove=ON) · `asset` list `#sc-asset-list` row → push `#sc-asset-detail` + `Id` · Back → `asset-list` · CTA **Ghim trên bản đồ** → `gis-map` / toast P1 · pack `tabs: none` · shell Tab 5 **giữ** · tab **`home`** active · **cấm** deep-link web / `mfeStdUrl` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · proxy catch-all **live** · **cấm** `AssetDetailController` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Asset · `RoadAssetsController.GetById` · **cấm ERP.*** · Step 4b **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_ce65a25c` · `solution_confirm=approve` · Step 4b **N/A** · T-BE **n/a** · saContentHash `sha256:asset-detail-solution-20260830` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_039c59ba` · designContentHash `sha256:asset-detail-design-20260830` |
| prior · po | **confirmed** · `po/requirement.md` · `task_df4700bc` · poContentHash `sha256:asset-detail-po-requirement-20260830` |
| prior · data_analy | **confirmed** · `_data-analy/asset-detail-control-hint.md` · `asset-detail-bff-endpoints.md` · `asset-detail-real-data.md` · `asset-detail-action-tree.md` · contentHash `sha256:asset-detail-control-hint-20260830` · realDataHash `sha256:asset-detail-real-data-20260830` · bffContentHash `sha256:asset-detail-bff-20260830` · actionTreeHash `sha256:asset-detail-action-tree-20260830` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/asset-detail` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_26ea4179` |
| updatedAt | `2026-08-30T21:45:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-detail` / `AssetDetailController` / mobile-only RoadAsset DTO fork · invent Finance `api/v1/assets` · ERP.* · WebView HTML · `mfeStdUrl` · system `UIAlert`/`AlertDialog` · watermark Gói · device label · «Có mạng» · badge Ghim P1 · raw `NavigationBar` / M3 bar / `TabView` · fake 200 khi GET fail · fake coords/TS-* khi live OK · request device GPS trên detail · PUT/DELETE trên slug · start `gis-map` / adjust / collect (`GAP-MOB-ACT-06`) · enqueue GET / chrome / CTA map (`GAP-MOB-ACT-07`) · gộp iOS+Android 1 task id · chạy Step 4b / migration / e2e / `yarn build` / `yarn start:std` ở role TL · implement native Write ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse · host **OK** |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse · host **OK** |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Asset · **cấm ERP.*** · Step 4b **N/A** |
| `route_confirm` | **route_a** — screen owner `asset-detail` · entry `asset` list row · không tab mới · không deep-link web |
| `kit_missing_confirm` | **N/A** / **none** — TopBar / Text hero / ListRow / Primary / Toast / EmptyChrome **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — **không** endpoint mới · reuse GetById live · Step 4b **N/A** |
| `T-BFF-*` | **reuse** / **no-op** — Mobile.Bff proxy catch-all **live** · **cấm** AssetDetailController |
| `version_mismatch_action` | **recheck_new** — stamp TL `2026.08.29.1` · workflow/rules `2026.08.31.2` · prior hashes khớp STATUS |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **`home`** → asset-hub → list `#sc-asset-list` → tap `row-asset-*` → **push** `#sc-asset-detail` `DES-MOB-ASSET-DETAIL` + `Id` (thay toast `asset.list.toast.detail`). Adjust «Sửa» (khi sibling ship) → cùng slug + `Id` · **không** gộp PUT/DELETE. Appear = GET `asset/road-assets/{id}`. Back → `go('asset-list')` (iOS label **Tài sản** + chevron · Android icon-only OK). CTA **Ghim trên bản đồ** → `go('gis-map')` pass Id/Lat/Lng nếu có · toast **Ghim trên bản đồ** P1 nếu sibling chưa ship · **cấm** embed map · **cấm** start `gis-map` (`task_23d7eba0`). 404 → EmptyChrome · back list. GET fail → demo SSOT TS-20260810-014 · screen **vẫn mở** · toast lỗi · **cấm** fake 200. Pack `tabs: none` · shell Tab 5 **giữ** · tab `home` active. |
| route_b / route_c | — không dùng (không deep-link web / `mfeStdUrl`) |

IA lock (PO · Design · SA):

```
home → asset-hub → #sc-asset-list · row → #sc-asset-detail ← this pack
#sc-asset-detail → GET by id · hero+rows · CTA gis-map · back = asset-list
Tab 5 shell giữ · tab home active · pack tabs: none
```

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `be_repo_confirm` · `route_confirm=route_a` · `kit_missing_confirm=N/A` · `version_mismatch_action=recheck_new` · `2026-08-30T21:45:00.000Z`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · proxy **live** |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Asset `RoadAssetsController.GetById` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | **chỉ** `GET asset/road-assets/{id}` Bearer · **cấm** invent `asset-detail` path |
| kit | reuse map dual — `LinmTopBar` · Text hero · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmEmptyChrome` · `LinmTabBar` shell · cite `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · typography caption **13** · code hero iOS **28** / Android **24** · row/CTA ≥**16** (`GAP-TYP-01`) · **không** `T-KIT-*` |
| entry | `reuse=asset` list `#sc-asset-list` `row-asset-*` · adjust «Sửa» khi ship · **cấm** reimplement list/hub |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse GetById live + XCO · **không** `/new-endpoint` / `/database-migration` / invent `rmms_*` mới |

---

## Live gap (TL audit 2026-08-30)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-asset-detail` | **DELTA** — **không** `Presentation/Features/AssetDetail/*` · list `.rowTap` = toast `asset.list.toast.detail` | **T-IOS-AL-01** + **T-IOS-AD-01** |
| Android `#sc-asset-detail` | **DELTA** — **không** `presentation/feature/assetdetail/*` · list row = toast hub | **T-AND-AL-01** + **T-AND-AD-01** |
| Entry `asset` list row | iOS toast · Android toast · **chưa** push + `Id` | **thay** → push owner (GAP-MOB-ASSET-DET-NAV-01) |
| `GET asset/road-assets/{id}` | BE `RoadAssetsController.GetById` + XCO + Mobile.Bff proxy **live** · app `AssetRepository` **chỉ** `fetchList` · **chưa** `fetchById` | **reuse** path · Dev extend repo + `FetchRoadAssetByIdUseCase` · **cấm** invent `asset-detail` |
| `RoadAssetItemDto` Lat/Lng | list DTO **thiếu** `lat`/`lng` | Dev extend detail DTO (hoặc shared item) bind `Lat`/`Lng` · **cấm** fork Finance assets |
| `AssetDtoMapper.typeLabel` | live list | **reuse** · unknown → raw `Type` · **không** lookup API P1 |
| CTA Ghim bản đồ | — | local nav / toast P1 · **cấm** start `gis-map` |
| Adjust «Sửa» entry | sibling pending / pipeline | wire khi adjust ship · **cấm** start adjust · **cấm** PUT/DELETE |
| BFF/BE GetById | live | **T-BE-*** = **n/a** · **T-BFF-*** = **reuse** · Step 4b **N/A** · **cấm invent** |
| Kit TopBar/ListRow/Primary/Toast/Empty | dual map | **reuse** · **cấm** `T-KIT-*` |
| Sibling list / collect / adjust / AI / hub / gis-map | out / pending | **cấm** ship / start (`GAP-MOB-ACT-06`) |
| Watermark Gói / device label / «Có mạng» | demo chrome | **cấm ship** |
| Tab 5 shell | dưới home | **giữ** · pack `tabs: none` · tab `home` active |

---

## Tasks (1 action = 1 feature)

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-ASSET-DETAIL | kit | — | **n/a** | — | Kit **đã map dual** · `kit_missing_confirm=N/A` — **không** giao Dev kit |
| **T-IOS-AL-01** | ios | route_a · kit n/a | **pending** | `/agent-dev-ios` | `AssetListViewModel` `.rowTap` toast → `setOpenAssetDetail(id)` / navigate push `#sc-asset-detail` + `Id` · wire `AppRouter` peer list destinations · **cấm** reimplement list chrome |
| **T-IOS-AD-01** | ios | SA · Design · T-IOS-AL-01 | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/AssetDetail/*` · GET by id · typeLabel reuse · GPS dual · CTA gis-map · demo fallback · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-AL-01** | android | route_a · kit n/a | **pending** | `/agent-dev-android` | `AssetListViewModel` row tap toast → `onOpenAssetDetail(id)` / `navController.navigate("asset-detail/{id}")` · wire `MainTabScreen` |
| **T-AND-AD-01** | android | SA · Design · T-AND-AL-01 · serial after iOS preferred | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Compose parity dual · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — GetById **live** · Step 4b **N/A** · **cấm invent** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` · **cấm** invent bảng |
| **T-BFF-01** | bff | — | **reuse** | — | Mobile.Bff proxy catch-all **live** · **cấm** `AssetDetailController` · optional Dev verify `dotnet build` (**không** TL) |
| T-QA-TAB-01 | qa cite | Dev dual PASS | pending | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **home** active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| T-QA-ASSET-DETAIL | qa | T-IOS-AD-01 · T-AND-AD-01 | pending | `/agent-qa-mobile` | Maestro slug `asset-detail` only · `yarn e2e-qa-mobile` · store PNG `qa/store/asset-detail` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-AL-01` + `T-IOS-AD-01` cùng turn) → `/agent-dev-android` (`T-AND-AL-01` + `T-AND-AD-01`) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling · **cấm** invent `asset-detail` API.

---

## Source map (cite live paths)

### T-IOS-AL-01 + T-IOS-AD-01

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/AssetDetail/*` — screen `DES-MOB-ASSET-DETAIL` · TopBar · hero code · ListRows · Primary CTA · Toast · EmptyChrome · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/AssetList/AssetListViewModel.swift` — `.rowTap` **thay toast** → `onOpenAssetDetail(id)` · `AssetListView.swift` row **giữ** · **cấm** reimplement list |
| Router | `App/AppRouter.swift` — pattern peer AssetList: `@State showAssetDetail` + `navigationDestination` + selected `Id` · `assetListViewModel.setOpenAssetDetail` |
| HTTP | `Domain/Repositories/AssetRepository.swift` + `Data/Repositories/AssetRepositoryImpl.swift` — thêm `fetchById(_ id:)` → `GET asset/road-assets/{id}` · `FetchRoadAssetByIdUseCase` · **cấm** URLSession trong View · **cấm** VM→ApiClient trực tiếp nếu repo pattern đã có |
| DTO / Mapper | extend `RoadAssetItemDto` (hoặc detail DTO cùng shape) + `lat`/`lng` · reuse `AssetDtoMapper.typeLabel` + detail bind · **cấm** second type mapper · **cấm** Finance assets path |
| Copy | `LinmCopy` / AssetDetail keys VN SSOT Design · keep list toast key unused after wire |
| DI | `App/AppContainer.swift` wire use case + VM |
| ssot.zones | `DES-MOB-ASSET-DETAIL` · `#sc-asset-detail` · `DES-MOB-TABBAR` |
| kit | cite `ui/html-to-native-map.md` · `#i-chevron-left` · Primary pin CTA |
| BFF | `GET asset/road-assets/{id}` · **cấm** invent path · **cấm** fake 200 |

### T-AND-AL-01 + T-AND-AD-01

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/assetdetail/*` — Compose screen parity · frame 412×915 |
| Entry wire | `presentation/feature/assetlist/AssetListViewModel.kt` — row tap **thay toast** → `onOpenAssetDetail(id)` · `AssetListScreen.kt` **giữ** |
| Router | `presentation/navigation/MainTabScreen.kt` — `navController.navigate("asset-detail/{id}")` + composable peer AssetList · `onOpenAssetDetail` |
| HTTP | `AssetRepository` + Impl — `fetchById` · Retrofit/`ApiService` `@GET("asset/road-assets/{id}")` · `FetchRoadAssetByIdUseCase` |
| Mapper | reuse `AssetDtoMapper.typeLabel` + detail bind · extend DTO Lat/Lng |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android title **Chi tiết tài sản** · back icon-only OK |
| DI | Hilt |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | same GET by id |

### T-BE-* / T-BFF — n/a · reuse

| id | Decision |
|----|----------|
| T-BE-API | **n/a** — SA `solution_confirm=approve` · GetById live · **cấm** invent AssetDetailController / `api/v1/asset-detail` |
| T-BE-MIG | **n/a** — Step 4b **N/A** · **cấm** invent bảng |
| T-BFF-01 | **reuse** — proxy catch-all live · **cấm** local AssetDetailController · **cấm** invent OpenAPI |
| Step 4b | **N/A** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack này |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Chi tiết tài sản** full (`DES-MOB-ASSET-DETAIL`): nav back → `#sc-asset-list` · title iOS **Chi tiết** / Android **Chi tiết tài sản** · hero **Mã TS** + `Code` · rows Loại · Tuyến · lý trình · Tọa độ (khi có Lat/Lng) · CTA primary **Ghim trên bản đồ** · **cấm** bottom-sheet chrome.
2. Appear → GET `asset/road-assets/{id}` · bind §B · 404 → EmptyChrome + back list · network fail → demo SSOT TS-20260810-014 · screen **vẫn mở** · toast lỗi · **cấm** fake 200.
3. Loại = client `AssetDtoMapper.typeLabel(Type)` reuse list · unknown → raw `Type` · **không** lookup API P1.
4. Tọa độ: bind `Lat`/`Lng` khi có → `"lat, lng"` · **ẩn** nếu null · **parity dual** · **cấm** request device GPS · **cấm** invent coords khi live OK.
5. CTA **Ghim trên bản đồ** → `go('gis-map')` pass Id/Lat/Lng nếu có · toast **Ghim trên bản đồ** P1 nếu sibling chưa ship · **không** embed map · **cấm** start sibling.
6. Entry (reuse list): `row-asset-*` → **push** `#sc-asset-detail` + `Id` (thay toast) · back «Tài sản» / chevron → list.
7. Kit reuse map · typography caption 13 · code hero ≥24/28 · row/CTA ≥16 · **cấm** invent kit · **cấm** watermark Gói / device label / «Có mạng».
8. Dual copy parity · Android back icon-only OK · title chrome OK (`GAP-MOB-ASSET-DET-TITLE-01` · `GAP-MOB-ALIGN-01`).
9. Tab 5 shell giữ · pack `tabs: none` · tab **home** active (`T-QA-TAB-01` · `GAP-TAB-01`).
10. Offline: màn **vẫn mở** · demo fallback · **cấm** full-screen block · **cấm** fake 200.
11. Store: **cấm** localhost/LAN listing · family `1` **cấm** iPad claim (`GAP-SA-STORE-01`).
12. **Cấm** ship sibling list chrome / collect / adjust / AI / hub / PUT/DELETE trên pack này.
13. App chỉ `{BffPrefix}` · path `asset/road-assets/{id}` · **cấm** biết `:5101` · **cấm** invent `asset-detail` path.

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | iOS **Tài sản** + chevron · Android icon-only · `go('asset-list')` |
| title | `LinmTopBar` | iOS **Chi tiết** · Android **Chi tiết tài sản** |
| codeLabel | Caption Text **13** | **Mã TS** fixed |
| codeValue | Display Text bold | DTO `Code` · iOS **28** · Android **24** |
| rowType | `LinmListRow` no-icon | **Loại** · `typeLabel(Type)` |
| rowRouteKm | `LinmListRow` no-icon | **Tuyến · lý trình** · `"{Route} · Km {KmFrom}"` · optional `KmTo` |
| rowGps | `LinmListRow` no-icon | **Tọa độ** · ẩn nếu null · dual parity |
| btnPinMap | `LinmPrimaryButton` | **Ghim trên bản đồ** · gis-map / toast P1 |
| empty404 | `LinmEmptyChrome` | NotFound · back list |
| toastErr | `LinmToast` | GET fail · **cấm** alert · **cấm** fake ok |
| listRow | `LinmListRow` `#i-cube` | reuse list · wire push + Id |
| typography | `LinmTokens` | `GAP-TYP-01` |
| tabHome | `LinmTabBar` | selected **Trang Chủ** · label **13** |

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew :app:assembleDebug` | debug APK |
| BFF | optional `dotnet build` nếu đụng Mobile.Bff | PASS / no-op OK |
| BE | **n/a** pack này | — |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` ở TL · mark Dev done khi build fail.

### API contract (from SA — cite only)

| Action | App path | Notes |
|--------|----------|-------|
| Load chi tiết | `GET asset/road-assets/{id}` | Bearer · XCO 403/404 · bind Code/Type/Route/Km/Lat/Lng |
| Nav Ghim bản đồ | — | local · `gis-map` · pass Id/coords |
| Nav back list | — | local · `asset-list` |
| Empty 404 | — | `LinmEmptyChrome` |
| Toast err | — | GET fail · demo SSOT |
| Invent | `asset-detail` / AssetDetailController / Finance `api/v1/assets` | **cấm** |

### Bind (real-data §B · SA)

| Line | Rule |
|------|------|
| code | `Code` raw (TS-*) |
| type | `typeLabel(Type)` · unknown → raw `Type` · **không** GET lookup |
| routeKm | `"{Route} · Km {KmFrom}"` · optional append `KmTo` · thiếu Route → «—» · **cấm** fake |
| gps | khi `Lat`/`Lng` có → `"lat, lng"` · else **ẩn** · dual · demo coords **chỉ** offline |
| pin map | local nav · pass `Id` + Lat/Lng nếu có |
| empty404 | GET 404 |
| toastErr | GET network/5xx/403 · **cấm** fake 200 |
| Id | nav key từ list/adjust |

### Demo / fallback SSOT (UI only khi GET fail — **không** fake GET 200)

| Field | Value |
|-------|-------|
| Title iOS | Chi tiết |
| Title Android | Chi tiết tài sản |
| Code | TS-20260810-014 |
| Loại | Cống |
| Tuyến · lý trình | QL.1 · Km 1556+000 |
| Tọa độ | 11.5300, 109.0040 (khi có Lat/Lng · ẩn nếu null · demo coords **chỉ** offline) |
| CTA | Ghim trên bản đồ |
| Back | Tài sản |

Runtime: **bind live GET** khi OK — **cấm** ship hardcode production thay live · **cấm** fake coords khi live OK.

---

## T-IOS-AD-01 — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-ASSET-DETAIL` · `DES-MOB-TABBAR` · `#sc-asset-detail` |
| Pattern | Screen push · **không** Modal/Sheet · frame proto 390×844 |

### Router / shell

| Entry | Behavior |
|-------|----------|
| List `row-asset-*` | **thay** toast → push `#sc-asset-detail` + `Id` |
| Adjust «Sửa» (khi ship) | push detail + `Id` · **cấm** gộp PUT/DELETE · **cấm** start adjust |
| Back | `go('asset-list')` · **cấm** reimplement list |
| btnPinMap | `go('gis-map')` / toast **Ghim trên bản đồ** |
| DI | `AppContainer` wire `AssetDetailViewModel` + `FetchRoadAssetByIdUseCase` + repo → `ApiClient` path `asset/road-assets/{id}` |
| Shell | `LinmTabBar` giữ tab `home` · **không** segment trên detail |

**Cấm** WebView HTML · VM→URLSession trực tiếp.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md`.

Optional Dest (skill TL): **iPad Pro 13-inch (M5)** khi team yêu cầu — **không** claim family `1` store.

---

## T-AND-AD-01 — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-asset-detail` · frame 412×915 |
| Pattern | Screen push · **không** Modal/Sheet · Material chrome OK |

### UI / API

Cùng bảng field · demo TS-20260810-014 · bind · toast · kit cite như T-IOS.  
Title: **Chi tiết tài sản**.  
Back: **icon-only** `#i-chevron-left`.  
Code hero: Display **24** bold. Copy VN còn lại **parity** iOS (`GAP-MOB-ALIGN-01`).

### Router / shell

| Entry | Behavior |
|-------|----------|
| List row tap | **thay** toast → navigate `asset-detail/{id}` |
| Back | pop → list · `asset-list` reuse |
| btnPinMap | `go('gis-map')` / toast |
| DI | Hilt `AssetDetailViewModel` · use case · repo → Retrofit `@GET("asset/road-assets/{id}")` |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/android.md`.

Optional verify (Dev, **không** TL): Mobile.Bff `dotnet build` PASS.

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → detail mở · demo TS-20260810-014 · toast in-app · **cấm** full-screen block |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` |
| AC-D-06 | Safe area · nav + hero + rows + CTA + tab shell |
| AC-D-10 | Shell tab **Trang Chủ** · pack **không** segment (`GAP-TAB-01`) |
| AC-D-12 | label/caption **13** · code hero ≥**24/28** · field value ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear GET by id · fail → demo · 404 → EmptyChrome |
| AC-F-02 | Back → `asset-list` |
| AC-F-03 | Loại = `typeLabel` · **không** lookup |
| AC-F-04 | GPS dual · ẩn null · **cấm** device GPS · **cấm** fake coords live |
| AC-F-05 | Ghim bản đồ → `gis-map` / toast · **không** embed · **cấm** start sibling |
| AC-F-06 | Dual demo TS-20260810-014 + copy SSOT |
| AC-F-07 | Entry list row → push + `Id` · **cấm** toast-only sau ship |
| AC-F-08 | **Cấm** invent `asset-detail` path / AssetDetailController / Finance assets |
| AC-F-09 | **Cấm** device label / proto-click / watermark Gói / «Có mạng» |
| AC-F-10 | **Cấm** PUT/DELETE / collect / adjust write trên slug |
| AC-F-11 | App chỉ `{BffPrefix}` · **cấm** `:5101` |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `asset` | reuse shipped | list parent · entry row · **cấm** reimplement |
| `asset-hub` | reuse shipped | grandparent · **cấm** reimplement |
| `asset-collect` | sibling | **cấm** gộp / start |
| `asset-adjust` | sibling / pending | «Sửa» entry · PUT/DELETE owner · **cấm** start / gộp |
| `gis-map` | `pending_confirm` · `task_23d7eba0` | CTA Ghim · toast P1 · **cấm** auto start |
| `asset` AI / form | sibling | **cấm** gộp |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start sibling từ TL/Dev `asset-detail`.

---

## Deps

```
T-KIT-ASSET-DETAIL (n/a)
T-BE-API / T-BE-MIG (n/a) · T-BFF-01 (reuse)
route_a + SA confirmed
  → T-IOS-AL-01 → T-IOS-AD-01
  → T-AND-AL-01 → T-AND-AD-01
T-IOS + T-AND → T-QA-ASSET-DETAIL (+ T-QA-TAB-01 cite) (QA role)
```

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `asset-detail` / **`screen`** |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-AL-01` · `T-IOS-AD-01` · `T-AND-AL-01` · `T-AND-AD-01` · T-BE **n/a** · T-BFF **reuse** · T-KIT **n/a** |
| BFF P1 | **chỉ** `GET asset/road-assets/{id}` · XCO giữ · Step 4b **N/A** · **cấm invent** |
| Real-data | `_data-analy/asset-detail-real-data.md` §A+§B + SA field map |
| UX packet | `ui/ux-analy.md` · `ui/design.md` · dual proto · `ui/html-to-native-map.md` |
| GPS | display `Lat`/`Lng` · ẩn null · dual · **không** device GPS |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/asset-detail.md | **PASS** · T-IOS-AL-01 · T-IOS-AD-01 · T-AND-AL-01 · T-AND-AD-01 · T-BE n/a · T-BFF reuse · route_a · source lock |
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
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T21:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-control-hint-20260830 |
| realDataHash | sha256:asset-detail-real-data-20260830 |
| bffContentHash | sha256:asset-detail-bff-20260830 |
| actionTreeHash | sha256:asset-detail-action-tree-20260830 |
| poContentHash | sha256:asset-detail-po-requirement-20260830 |
| designContentHash | sha256:asset-detail-design-20260830 |
| saContentHash | sha256:asset-detail-solution-20260830 |
| tlContentHash | sha256:asset-detail-tl-task-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-detail-20260830 |
| taskId | `task_26ea4179` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
