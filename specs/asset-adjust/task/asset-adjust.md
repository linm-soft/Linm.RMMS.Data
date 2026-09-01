# TL — Tasks — asset-adjust (Cập nhật / bớt)

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| title | [Mobile] [Tài sản] -> Cập nhật / bớt |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-ASSET-ADJUST-PACK-01 **closed** · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| thisAction | **Cập nhật / bớt** `#sc-asset-adjust` `DES-MOB-ASSET-ADJUST` only · entry hub tile `#i-minus` → push · GET list(+search) · Sửa → detail · Bớt soft DELETE + modal `#md-asset-remove` · toast Code · **cấm** gộp collect / AI / list / detail form / hub (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · hub `#sc-asset-hub` tile Cập nhật / bớt → **push** `#sc-asset-adjust` · back «Tài sản» → pop hub · pack `tabs: none` · shell Tab 5 **giữ** · tab **`home`** active · deep link **n/a** P1 |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `AssetAdjustController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Asset · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_39b7c7aa` · solution_confirm=approve · contentHash `sha256:asset-adjust-solution-20260830` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_6476a9ab` · contentHash `sha256:asset-adjust-design-20260830` |
| prior · po | **confirmed** · `po/requirement.md` · `task_eb71b522` · contentHash `sha256:asset-adjust-po-requirement-20260830` |
| prior · data_analy | **confirmed** · `_data-analy/asset-adjust-control-hint.md` · `asset-adjust-bff-endpoints.md` · `asset-adjust-action-tree.md` · `asset-adjust-real-data.md` · controlHint `sha256:asset-adjust-control-hint-20260830` · realDataHash `sha256:asset-adjust-real-data-20260830` · bffContentHash `sha256:asset-road-assets-list-put-delete-proxy-20260830` · actionTreeHash `sha256:asset-adjust-action-tree-20260830` · demoContentHash `sha256:mobile-p1-sc-asset-adjust-20260830` · ctxContentHash `sha256:asset-adjust-ctx-20260830` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_155edf48` |
| updatedAt | `2026-08-30T23:45:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-adjust` / `AssetAdjustController` / Finance `api/v1/assets` · invent media upload P1 (`GAP-MOB-ASSET-ADJUST-MEDIA-01`) · PUT edit form UI P1 (`GAP-MOB-ASSET-ADJUST-EDIT-01`) · hard delete · fake HTTP 200 / invent Code khi GET/DELETE fail · ship `demoItems` khi BFF live (`GAP-MOB-REAL-02`) · ERP.* · system `UIAlert`/`AlertDialog`/`window.alert`/`confirm()` · watermark Gói · device label · «Có mạng» · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue GET/search/DELETE/PUT (`GAP-MOB-ACT-07`) · start `asset-detail` / collect / AI (`GAP-MOB-ACT-06`) · chạy Step 4b / migration / e2e ở role TL · implement native code ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — screen owner `asset-adjust` · entry reuse `asset-hub` tile Cập nhật / bớt → push · không tab mới · không deep link P1 |
| `kit_skip` / kit_missing | TopBar / SearchField / ListRow / Secondary·Danger·Text / Modal / Toast / Empty / Tab shell **đã map** · `kit_missing_confirm` **N/A** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — GetList + SoftDelete **LIVE** · PUT UI **OUT** P1 · **cấm** TL chạy Step 4b / migration / `/new-endpoint` |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ `asset/*` |
| `T-HUB-WIRE` | **folded** vào `T-IOS-ASSET-ADJUST` + `T-AND-ASSET-ADJUST` (thay toast → navigate) · **không** task id riêng · **cấm** reimplement hub |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Tab 5 · tab **`home`** → `#sc-asset-hub` · tap tile **Cập nhật / bớt** `#i-minus` → **push** `#sc-asset-adjust` `DES-MOB-ASSET-ADJUST` (thay toast stub `asset.tile.adjust`). Back «Tài sản» (iOS text + chevron · Android icon-only OK) → `go('asset-hub')` / pop hub. Search / list GET / open modal / DELETE soft / toast = **cùng slug**. Sửa = `go('asset-detail')` + Id **reuse**. Pack `tabs: none` · shell Tab 5 **giữ**. Sibling collect / AI / list = **OUT** · **không** enqueue. Deep link **n/a** P1. |
| route_b / route_c | — không dùng |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `kit_skip=yes` · `T-BE=n/a` · `2026-08-30T23:45:00.000Z`.

---

## Live gap (TL audit 2026-08-30 / `task_155edf48`)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-asset-adjust` | **MISSING** — không `Presentation/Features/AssetAdjust/*` | **T-IOS-ASSET-ADJUST** |
| Android `#sc-asset-adjust` | **MISSING** — không `presentation/feature/assetadjust/*` | **T-AND-ASSET-ADJUST** |
| Hub tile Cập nhật / bớt | **DELTA** — iOS `AssetHubViewModel` `.tileAdjust` → toast «Cập nhật / bớt» · Android `TileAdjust` cùng toast · **chưa** push | **wire trong T-IOS + T-AND** (thay toast → navigate AssetAdjust) · **cấm** reimplement hub |
| `GET asset/road-assets` (+ search) | BE + Mobile.Bff proxy live · `FetchAssetListUseCase` / `AssetRepository.fetchList` iOS+Android live | **reuse** · bind adjust rows · **cấm** invent path |
| `DELETE asset/road-assets/{id}` soft | BE `SoftDeleteAsync` live · BFF proxy · app **chưa** có `softDelete` / `ApiClient.delete` / Retrofit `@DELETE` | **DELTA** client only · SoftDeleteRoadAssetUseCase + repo method · **không** T-BE |
| PUT `asset/road-assets/{id}` | domain live | **OUT** UI P1 · **cấm** form trên adjust |
| typeLabel mapper | `AssetDtoMapper.typeLabel` live list/detail | **reuse** · unknown → raw `Type` |
| Modal / toast / empty | kit dual map | **reuse** · **cấm** system alert |
| Kit TopBar/Search/ListRow/Modal/Toast | dual map | **reuse** · **cấm** `T-KIT-*` |
| New BE endpoint / Schema_* / AssetAdjustController | SoftDelete **LIVE** · không bảng mới | **T-BE-*** = **n/a** · Step 4b **N/A** |
| Sibling asset-detail / collect / AI | detail pipeline · collect/AI out | Sửa = reuse nav · **cấm** start (`GAP-MOB-ACT-06`) |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-ASSET-ADJUST` | iOS | SA confirmed · kit_skip · Design dual · route_a | `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` | Ship `DES-MOB-ASSET-ADJUST` + `#md-asset-remove` · wire hub tile → push · GET list(+search) · Sửa → detail · soft DELETE + toast Code · demo fallback |
| `T-AND-ASSET-ADJUST` | Android | SA confirmed · kit_skip · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` | Compose parity dual · same BFF/offline · wire hub TileAdjust → navigate |
| `T-BE-*` | BE | — | — | **N/A** · GetList + SoftDelete LIVE · PUT UI OUT · **cấm** invent path / migration |
| `T-BFF-*` | — | — | — | **N/A** · proxy catch-all |
| `T-KIT-*` | — | — | — | **N/A** · kit reuse map |
| `T-HUB-WIRE` | — | — | — | **folded** vào T-IOS + T-AND · **không** id riêng |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **home** active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| `T-QA-ASSET-ADJUST` | QA | T-IOS · T-AND | `/agent-qa-mobile` | Maestro slug `asset-adjust` · `yarn e2e-qa-mobile` · store PNG `qa/store/asset-adjust` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-ASSET-ADJUST`) → `/agent-dev-android` (`T-AND-ASSET-ADJUST`) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling · **cấm** Step 4b ở Dev P1.

---

## Source map (cite live paths)

### T-IOS-ASSET-ADJUST

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/AssetAdjust/*` — screen + search + list rows + Sửa/Bớt · modal `#md-asset-remove` · toast · empty · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/AssetHub/AssetHubViewModel.swift` — `.tileAdjust` **thay toast** → open adjust · `App/AppRouter.swift` — `navigationDestination` push dưới hub (pattern `showAssetList`) · **cấm** reimplement hub |
| Router | `App/AppRouter.swift` · home tab · stack dưới AssetHub · Sửa → existing `showAssetDetail` / detail push + Id |
| Use cases | reuse `FetchAssetListUseCase` · **NEW** `SoftDeleteRoadAssetUseCase` (hoặc tên peer) · **cấm** invent GetById trên adjust (detail sibling) |
| HTTP client | extend `Data/Network/ApiClient.swift` — thêm `delete` method (GET/POST/PUT live · DELETE **MISSING**) |
| Repo | extend `Domain/Repositories/AssetRepository.swift` + `Data/Repositories/AssetRepositoryImpl.swift` — `softDelete(id:)` → `DELETE asset/road-assets/{id}` · reuse `fetchList` · **cấm** invent `asset-adjust` path |
| Mapper | reuse `Data/Mappers/AssetDtoMapper.swift` `typeLabel` + list row bind · Code · Type · Route · KmFrom |
| Modal / toast | in-app modal kit · `LinmToast` · **cấm** `UIAlertController` |
| Copy / demo SSOT | VN Design · toast «Đã bớt tài sản · {Code}» · fallback rows khi GET fail (iOS sample 2) · `usingDemoFallback` · **cấm** ship mock khi BFF OK |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-ASSET-ADJUST` · `DES-MOB-ASSET-REMOVE` · `#sc-asset-adjust` · `#md-asset-remove` |
| kit | `LinmTopBar` · `LinmSearchField` · `LinmListRow` · Secondary/Danger/Text · Modal · `LinmToast` · EmptyState · Tab shell · typography `LinmTokens` label/placeholder **13** · row title **≥16** · sub **13** · modal title **17** (`GAP-TYP-01`) · cite `ui/html-to-native-map.md` |
| BFF | `GET asset/road-assets?search=&page=&pageSize=` · `DELETE asset/road-assets/{id}` soft · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent path · **cấm** fake 200 |

### T-AND-ASSET-ADJUST

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/assetadjust/*` — screen + search + rows + Sửa/Bớt · modal · toast · empty |
| Entry wire | `presentation/feature/assethub/AssetHubViewModel.kt` · `TileAdjust` thay toast · `MainTabScreen.kt` — `navController.navigate("asset-adjust")` từ hub (pattern `asset-list`) · **cấm** reimplement hub |
| Nav Sửa | `navController.navigate("asset-detail/$id")` reuse existing route |
| Use cases | same dual · list reuse + softDelete NEW |
| HTTP | extend `data/remote/ApiService.kt` — `@DELETE("asset/road-assets/{id}")` · **MISSING** live |
| Repo | extend `AssetRepository` / Impl — softDelete · reuse fetchList |
| Mapper | reuse `AssetDtoMapper.typeLabel` + list bind |
| Modal | in-app Dialog kit · **cấm** system raw AlertDialog product |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK · demo sample 1 row fallback OK (`GAP-MOB-ASSET-ADJUST-ROW-01`) |
| DI | Hilt |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | same paths · offline parity |

### T-BE-* / T-BFF-*

| | |
|--|--|
| Status | **N/A** — `GET/DELETE api/v1/asset/road-assets` SoftDelete LIVE · Mobile.Bff catch-all đủ · PUT UI **OUT** (`GAP-MOB-ASSET-ADJUST-EDIT-01`) · **không** pack `T-BE-*` / migration P1 |
| TL turn | **pack only** · **cấm** Step 4b / implement / migration |
| App P1 | soft delete only · **cấm** hard delete · **cấm** PUT form |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Cập nhật / bớt** full (`DES-MOB-ASSET-ADJUST`): nav back → hub · title fixed · SearchField · ListRow Code·Type / Route·Km · btn **Sửa** · btn **Bớt** · modal `#md-asset-remove` · toast · empty · **cấm** bottom-sheet chrome.
2. Entry: hub tile Cập nhật / bớt → push owner · **cấm** toast-only sau ship (`GAP-MOB-ASSET-ADJUST-NAV-01`) · **cấm** reimplement hub.
3. Appear: GET `asset/road-assets?search=&page=&pageSize=` · bind rows §B · empty → EmptyState · fail → demo SSOT rows UI-only + toast · screen **vẫn mở** · **cấm** fake 200 · **cấm** ship `demoItems` khi BFF live (`GAP-MOB-REAL-02`).
4. Search: placeholder SSOT **«Tìm mã TS cần sửa hoặc bớt…»** dual · debounce → GET `?search=` · refresh list (`GAP-MOB-ASSET-ADJUST-SEARCH-01`).
5. Row bind: title `Code · typeLabel(Type)` · subtitle `Route · Km {KmFrom}` · reuse mapper · unknown Type → raw · **cấm** invent lookup API P1. Demo row count (iOS 2 / Android 1) = sample only · live = GET (`GAP-MOB-ASSET-ADJUST-ROW-01`).
6. **Sửa** → `go('asset-detail')` + pass `Id` · reuse pack `asset-detail` · **cấm** start · **cấm** PUT form / inline edit P1 (`GAP-MOB-ASSET-ADJUST-EDIT-01`). Thiếu Id → toast · stay.
7. **Bớt** → open in-app modal `#md-asset-remove` `DES-MOB-ASSET-REMOVE` · **cấm** system alert. Copy: title **Bớt tài sản khỏi sổ?** · body demo SSOT · CTA **Bớt khỏi sổ** · **Giữ lại** = close.
8. Confirm **Bớt khỏi sổ** → DELETE `asset/road-assets/{id}` soft (`IsActive=false`) · 200 → toast **Đã bớt tài sản · {Code}** (Code từ row cache) · remove row · fail/404/403 → toast · giữ row · **cấm** fake 200 · **cấm** hard delete (`GAP-MOB-ASSET-ADJUST-DEL-01`).
9. Kit **reuse map**: `LinmTopBar` · `LinmSearchField` · `LinmListRow` · Secondary/Danger/Text · Modal · `LinmToast` · EmptyState · **cấm** raw bar / invent kit (`GAP-MOB-ACT-05`).
10. Typography: placeholder/label **13–16** · row title ≥**16** · sub **13** · modal title **17** · body **13** (`GAP-TYP-01`).
11. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** biết RMMS `:5101`.
12. Tab 5 shell giữ · pack `tabs: none` · tab **home** active (`T-QA-TAB-01` · `GAP-TAB-01`).
13. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
14. Offline: màn mở · DELETE fail → toast · giữ row · **cấm** fake 200 · **cấm** offline soft-delete queue P1.
15. Media OUT P1 (`GAP-MOB-ASSET-ADJUST-MEDIA-01`) · **cấm** invent upload.
16. **Cấm** ship sibling surfaces trên pack này (collect · AI · list form · hub reimplement · PUT edit).
17. Watermark Gói / device label / «Có mạng» / proto-click · **cấm**.

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack / title | `LinmTopBar` | iOS back **Tài sản** · Android icon-only |
| search | `LinmSearchField` | placeholder dài dual · debounce GET |
| rowAsset / rowSub | `LinmListRow` | Code·typeLabel · Route·Km |
| btnEdit | Secondary / Text | nav detail + Id · **cấm** PUT |
| btnRemove | Danger / Text error | open modal · cache Id+Code |
| mdTitle / mdBody | Modal | soft IsActive copy SSOT |
| mdConfirm | Primary danger | DELETE soft |
| mdCancel | Secondary | close |
| empty | EmptyState | GET empty |
| toastOk / toastErr | `LinmToast` | Code / message · **cấm** alert |
| typography | `LinmTokens` | `GAP-TYP-01` |

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew :app:assembleDebug` | debug APK |
| BFF | `dotnet build` `RMMS.Mobile.Bff.csproj` (nếu đổi client contract proxy — thường **không**) | PASS nếu đổi |
| BE | — | **N/A** P1 · **cấm** TL `dotnet build` / migration |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` ở TL · mark Dev done khi build fail.

### API contract (from SA — cite only)

| Action | App path | Notes |
|--------|----------|-------|
| Load / search | `GET asset/road-assets?search=&page=&pageSize=` | list bind · appear + debounce |
| Soft delete | `DELETE asset/road-assets/{id}` | soft IsActive=false · toast Code |
| Sửa (nav) | — | local · `asset-detail` + Id |
| PUT update | `PUT asset/road-assets/{id}` | **OUT** UI P1 |
| Toast / modal / back | — | local |

**Cấm** invent `api/v1/asset-adjust`.

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| `#sc-asset-collect` / `#sc-asset-ai` | sibling · **cấm** gộp |
| `#sc-asset-list` list pack | sibling |
| Detail GetById form / PUT edit UI | `asset-detail` / domain · EDIT-01 OUT adjust |
| Media upload | **OUT** MEDIA-01 · **cấm** invent P1 |
| Invent `AssetAdjustController` / `api/v1/asset-adjust` | **cấm** |
| New kit chrome package | **cấm** `T-KIT-*` |
| Step 4b / migration / e2e | **không** ở TL · QA khi tới lượt |
| Watermark Gói / device label / proto-click | **cấm** |

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-ASSET-ADJUST`) rồi `/agent-dev-android` (`T-AND-ASSET-ADJUST`) |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-adjust/ui/prototype/{ios,android}/index.html` · `#sc-asset-adjust` |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `asset-adjust` · store PNG `qa/store/asset-adjust` · **chỉ** `/agent-qa*` |
| Step 4b | **N/A** GetList + SoftDelete · **cấm** TL chạy · **cấm** invent path |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/asset-adjust.md | **PASS** · T-IOS-ASSET-ADJUST · T-AND-ASSET-ADJUST · T-BE **n/a** · T-BFF **n/a** · T-KIT **n/a** · T-HUB-WIRE folded · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read abs · hashes khớp · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có · autoApprove route_a |
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
| generatedAt | `2026-08-30T23:45:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-tl-task-20260830 |
| priorControlHintHash | sha256:asset-adjust-control-hint-20260830 |
| priorRealDataHash | sha256:asset-adjust-real-data-20260830 |
| priorBffHash | sha256:asset-road-assets-list-put-delete-proxy-20260830 |
| priorActionTreeHash | sha256:asset-adjust-action-tree-20260830 |
| priorPoHash | sha256:asset-adjust-po-requirement-20260830 |
| priorDesignHash | sha256:asset-adjust-design-20260830 |
| priorSaHash | sha256:asset-adjust-solution-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-adjust-20260830 |
| ctxContentHash | sha256:asset-adjust-ctx-20260830 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked dorGate=PASS -->
