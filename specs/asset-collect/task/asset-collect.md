# TL — Tasks — asset-collect (Thu thập thủ công)

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| title | [Mobile] [Tài sản] -> Thủ công |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-ASSET-COLLECT-PACK-01 **closed** · **cấm** bottom-sheet) |
| stack | `native_dual` |
| thisAction | **Thu thập thủ công** `#sc-asset-collect` `DES-MOB-ASSET-COLLECT` only · entry hub tile Thủ công `#i-plus` → push · GET types + init-data · GPS · local PhotoRow · POST create · toast Code · **cấm** gộp AI / adjust / list / detail / hub (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · hub `#sc-asset-hub` tile Thủ công → **push** `#sc-asset-collect` · back «Tài sản» → pop hub · pack `tabs: none` · shell Tab 5 **giữ** · tab **`home`** active · deep link **n/a** P1 |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `AssetCollectController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Asset + Integration + optional Patrol · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_b5598b84` · solution_confirm=approve · contentHash `sha256:asset-collect-sa-solution-20260830` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_c6bccf74` · contentHash `sha256:asset-collect-design-20260831` |
| prior · po | **confirmed** · `po/requirement.md` · `task_96a9045a` · contentHash `sha256:asset-collect-po-requirement-20260830` |
| prior · data_analy | **confirmed** · `_data-analy/asset-collect-control-hint.md` · `asset-collect-bff-endpoints.md` · `asset-collect-action-tree.md` · `asset-collect-real-data.md` · controlHint `sha256:asset-collect-control-hint-20260830` · realDataHash `sha256:asset-collect-real-data-20260830` · bffContentHash `sha256:asset-collect-bff-20260830` · actionTreeHash `sha256:asset-collect-action-tree-20260830` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_88c9d912` |
| updatedAt | `2026-08-30T22:45:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-collect` / `AssetCollectController` / Finance `api/v1/assets` · invent media upload P1 (`GAP-MOB-ASSET-COLLECT-MEDIA-01`) · fake lat/lng · gõ tay GPS · fake HTTP 200 / invent Code khi POST fail · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · «Có mạng» · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue Create/type/name/route/gps/status/photo (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e ở role TL · implement native code ở role TL · hardcode demo 4–5 loại khi catalog live (`GAP-MOB-ASSET-COLLECT-TYPE-01`).

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — screen owner `asset-collect` · entry reuse `asset-hub` tile Thủ công → push · không tab mới · không deep link P1 |
| `kit_skip` / PhotoRow | TopBar / Select / TextField / Primary / Toast / GPS deny / Leave **đã map** · PhotoRow + CameraButton = **compose pattern** (`kit_missing_confirm` **approve** · Design/SA) · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — Create + init-data + asset-types **LIVE** · media upload **DEFER** (không Signed P1 · **không** pack `T-BE-*` turn này) · **cấm** TL chạy Step 4b / migration |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ `asset/*` · `integration/*` · `patrol/*` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Tab 5 · tab **`home`** → `#sc-asset-hub` · tap tile **Thủ công** `#i-plus` → **push** `#sc-asset-collect` `DES-MOB-ASSET-COLLECT` (thay toast stub `asset.tile.collect`). Back «Tài sản» (iOS text + chevron · Android icon-only OK) → `go('asset-hub')` / pop hub. Type / name / routeKm / gps / status / photo / Create = **cùng slug**. Pack `tabs: none` · shell Tab 5 **giữ**. Sibling AI / adjust / list / detail = **OUT** · **không** enqueue. |
| route_b / route_c | — không dùng |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `kit_skip=yes` · `T-BE=n/a` · `2026-08-30T22:45:00.000Z`.

---

## Live gap (TL audit 2026-08-30)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-asset-collect` | **MISSING** — không `Presentation/Features/AssetCollect/*` | **T-IOS-ASSET-COLLECT** |
| Android `#sc-asset-collect` | **MISSING** — không `presentation/feature/assetcollect/*` | **T-AND-ASSET-COLLECT** |
| Hub tile Thủ công | **DELTA** — iOS `AssetHubViewModel` `.tileCollect` → toast «Thủ công» · Android `TileCollect` cùng toast · **chưa** push | **wire trong T-IOS + T-AND** (thay toast → navigate AssetCollect) · **cấm** reimplement hub chrome |
| `GET integration/asset-types` | BE + Mobile.Bff proxy live · `FetchAssetTypesUseCase` iOS/Android live | **reuse** · bind typeSelect · **cấm** hardcode demo options khi API OK |
| `GET asset/road-assets/init-data` | BE live · app **chưa** gọi | **DELTA** thin client + use case · bind statusField dual |
| `POST asset/road-assets` | BE `RoadAssetsController.Create` live · app **chỉ** GET list/by-id | **DELTA** Create body `CreateRoadAssetRequest` · toast `Code` |
| optional `GET patrol/sessions` / `integration/road-routes/search` | live · use cases hub/patrol **đã có** | **optional** prefill Route/Km |
| GPS / deny modal | `GetCurrentLocationUseCase` · `GpsDenyModal` / `GpsDenyDialog` live | **reuse** · CTA off khi deny |
| Camera / PhotoRow | peer IncidentCreate / VisCapture still capture + PhotoRow compose | **reuse pattern** · local only · **cấm** invent upload |
| Kit TopBar/Select/TextField/Primary/Toast | dual map | **reuse** · **cấm** `T-KIT-*` |
| New BE endpoint / Schema_* / media upload | Create **LIVE** · media **MISSING** | **T-BE-*** = **n/a** P1 · MEDIA-01 DEFER |
| Sibling AI / adjust / list / detail | out of pack | **cấm** ship / start (`GAP-MOB-ACT-06`) |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-ASSET-COLLECT` | iOS | SA confirmed · kit_skip · Design dual · route_a | `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` | Ship `DES-MOB-ASSET-COLLECT` form · wire hub tile → push · types + init-data + GPS + PhotoRow local · POST create · toast Code · leave/GPS deny |
| `T-AND-ASSET-COLLECT` | Android | SA confirmed · kit_skip · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` | Compose parity dual · CameraX still · same BFF/GPS/offline · Status + photo label dual |
| `T-BE-*` | BE | — | — | **N/A** · Create + init-data + types LIVE · media **không** Signed P1 · **cấm** invent path / migration |
| `T-BFF-*` | — | — | — | **N/A** · proxy catch-all |
| `T-KIT-*` | — | — | — | **N/A** · kit reuse + PhotoRow compose |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **home** active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| `T-QA-ASSET-COLLECT` | QA | T-IOS · T-AND | `/agent-qa-mobile` | Maestro slug `asset-collect` · `yarn e2e-qa-mobile` · store PNG `qa/store/asset-collect` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-ASSET-COLLECT`) → `/agent-dev-android` (`T-AND-ASSET-COLLECT`) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling · **cấm** Step 4b ở Dev P1 (media DEFER).

---

## Source map (cite live paths)

### T-IOS-ASSET-COLLECT

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/AssetCollect/*` — screen + form fields + PhotoRow + GPS deny + leave · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/AssetHub/AssetHubViewModel.swift` — `.tileCollect` **thay toast** → open collect · `App/AppRouter.swift` — `navigationDestination` push dưới hub (pattern `showAssetList`) · **cấm** reimplement hub |
| Router | `App/AppRouter.swift` · home tab · stack dưới AssetHub |
| Use cases | reuse `FetchAssetTypesUseCase` · **NEW** init-data + `CreateRoadAssetUseCase` · `GetCurrentLocationUseCase` · optional `FetchPatrolSessionsUseCase` / `SearchRoadRoutesUseCase` · still camera capture |
| Location | `CoreLocationReader` · deny → `GpsDenyModal` · **chặn** Create · **cấm** fake / gõ tay |
| Camera | AVFoundation **still** · PhotoRow `#i-camera` · local only · **không** upload P1 · **không** continuous finder |
| Repo | extend `AssetRepository` / Impl — `GET …/init-data` · `POST asset/road-assets` · reuse Integration asset-types · **cấm** invent `asset-collect` path |
| Deny / leave | reuse `Presentation/Shared/GpsDenyModal.swift` · leave dirty in-app · **cấm** `UIAlertController` |
| Copy | VN SSOT Design · toast «Đã thêm tài sản · {Code}» · err toast |
| Store privacy | Info.plist camera + location **đã có** · verify PrivacyInfo (`GAP-SA-STORE-01`) |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-ASSET-COLLECT` · `DES-MOB-GPS-DENY` · `DES-MOB-LEAVE` · `#sc-asset-collect` |
| kit | `LinmTopBar` · `LinmSelect` · `LinmTextField` · `LinmPrimaryButton` · `LinmToast` · PhotoRow + CameraButton **compose** · SectionLabel «Ảnh» · Tab shell · typography `LinmTokens` label **13** · value/button **≥16** (`GAP-TYP-01`) · cite `ui/html-to-native-map.md` |
| BFF | `GET integration/asset-types` · `GET asset/road-assets/init-data` · `POST asset/road-assets` · optional sessions/routes · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent `asset-collect` path · **cấm** fake 200/Code |

### T-AND-ASSET-COLLECT

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/assetcollect/*` — screen + form + PhotoRow + GPS deny + leave |
| Entry wire | `presentation/feature/assethub/AssetHubViewModel.kt` · `TileCollect` thay toast · `MainTabScreen.kt` — `navController.navigate("asset-collect")` từ hub (pattern `asset-list`) · **cấm** reimplement hub |
| Use cases | same dual · Create + init-data + types + location + still camera |
| Location | `AndroidLocationReader` / `GetCurrentLocationUseCase` |
| Camera | CameraX `ImageCapture` · permission `CAMERA` + Play Data safety |
| Repo | extend `AssetRepository` / `ApiService` — init-data + POST create · same paths |
| Deny | reuse `presentation/feature/shared/GpsDenyDialog.kt` · **cấm** system raw AlertDialog product |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK · **Status Select + photo label bắt buộc** (đóng STATUS-01) |
| DI | Hilt |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | same paths · offline parity |

### T-BE-* / T-BFF-*

| | |
|--|--|
| Status | **N/A** — `POST/GET api/v1/asset/road-assets` + `…/init-data` + `GET integration/asset-types` LIVE · Mobile.Bff catch-all đủ · media upload **DEFER** (`GAP-MOB-ASSET-COLLECT-MEDIA-01`) · **không** pack `T-BE-*` / migration P1 |
| TL turn | **pack only** · **cấm** Step 4b / implement / migration |
| App P1 | Create **không** gửi photos · local PhotoRow only · **không** block thiếu ảnh |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Thu thập thủ công** full (`DES-MOB-ASSET-COLLECT`): nav back → hub · title fixed · type · name · routeKm · gps · status · PhotoRow · CTA · toast · **cấm** bottom-sheet chrome.
2. Entry: hub tile Thủ công → push owner · **cấm** toast-only sau ship · **cấm** reimplement hub.
3. Appear: parallel GET types + init-data · start GPS · optional sessions/routes · fail catalog → empty select + **disable** CTA + toast · **cấm** hardcode demo options làm SSOT khi API OK.
4. Type Select * bind catalog **code** · live = SSOT (`GAP-MOB-ASSET-COLLECT-TYPE-01`).
5. Name Text * → `Name` · label **13** / value **≥16**.
6. RouteKm readonly * display «QL.1 · Km …» style → wire parse `Route` + `KmFrom` · thiếu → validation · **cấm** fake `QL.1` khi live reject (`GAP-MOB-ASSET-COLLECT-ROUTE-01`).
7. GPS pin readonly * · Lat,Lng · ±m · deny/poor → `DES-MOB-GPS-DENY` · CTA **disabled** · **cấm** fake / gõ tay (`GAP-MOB-ASSET-COLLECT-GPS-01`).
8. Status Select * từ init-data · default `tot` / «Tốt» · **dual cả hai nền** (`GAP-MOB-ASSET-COLLECT-STATUS-01`).
9. PhotoRow + `#i-camera` · local only P1 · **không** invent upload · **không** block Create thiếu ảnh (`GAP-MOB-ASSET-COLLECT-MEDIA-01`).
10. Primary **Thêm tài sản** → POST `asset/road-assets` · `Source=manual` (omit OK) · busy · toast **Đã thêm tài sản · {Code}** · **chặn** thiếu Type/Name/Route/KmFrom/Status/GPS · 422/mạng → toast lỗi · giữ form · **cấm** invent Code · **cấm** `Source=ai`.
11. Leave dirty → `DES-MOB-LEAVE` in-app · **cấm** system alert.
12. Kit reuse map · PhotoRow compose · **cấm** watermark Gói / device label / «Có mạng».
13. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
14. Tab 5 shell giữ · pack `tabs: none` · tab **home** active (`T-QA-TAB-01`).
15. Store: verify camera + location privacy trước ship (`GAP-SA-STORE-01`) · **cấm** localhost/LAN listing · **cấm** iPad listing claim.
16. Offline: màn mở · POST fail → toast lỗi · **cấm** fake 200 / fake Code.
17. **Cấm** ship sibling surfaces trên pack này (`asset-ai` · adjust · list · detail).

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack / title | `LinmTopBar` | iOS back **Tài sản** · Android icon-only |
| typeSelect | `LinmSelect` | GET asset-types · code bind |
| nameField | `LinmTextField` | → `Name` |
| routeKm | `LinmTextField` readonly | parse `Route`+`KmFrom` |
| gpsPin | `LinmTextField` readonly | Lat,Lng · ±m · required UI |
| statusField | `LinmSelect` | init-data · default `tot` · **dual** |
| photoLabel | SectionLabel 13 | **Ảnh** · Android **thêm** |
| photos / addPhoto | PhotoRow compose + camera | local · `#i-camera` |
| btnAdd | `LinmPrimaryButton` | disable khi thiếu required / GPS deny |
| toastOk / toastErr | `LinmToast` | Code / message · **cấm** alert |
| gpsDeny* | modal reuse | `DES-MOB-GPS-DENY` |
| leaveDirty | modal reuse | `DES-MOB-LEAVE` |
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
| Catalog loại | `GET integration/asset-types` | typeSelect · code |
| Init status | `GET asset/road-assets/init-data` | Statuses · default `tot` |
| Prefill (optional) | `GET patrol/sessions` · `GET integration/road-routes/search` | Route/Km |
| Create | `POST asset/road-assets` | `Name` · `Type` · `Route` · `KmFrom` · `Status` · `Lat`/`Lng` · `Source` omit→manual |
| GPS / camera / toast / nav | — | device / local |

**Cấm** invent `api/v1/asset-collect`.

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| `#sc-asset-ai` / Camera AI | sibling · **cấm** gộp |
| `#sc-asset-adjust` PUT/DELETE | sibling |
| `#sc-asset-list` / `#sc-asset-detail` | sibling · hub list wire **đã** riêng |
| Media upload API / Signed Step 4b | **DEFER** MEDIA-01 · **cấm** invent P1 |
| Invent `AssetCollectController` / `api/v1/asset-collect` | **cấm** |
| New kit chrome package | **cấm** `T-KIT-*` (PhotoRow = compose) |
| Step 4b / migration / e2e | **không** ở TL · QA khi tới lượt |
| Watermark Gói / device label / proto-click | **cấm** |

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-ASSET-COLLECT`) rồi `/agent-dev-android` (`T-AND-ASSET-COLLECT`) |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-collect/ui/prototype/{ios,android}/index.html` · ship `?ship=1` · deny `?deny=1` |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `asset-collect` · store PNG `qa/store/asset-collect` · **chỉ** `/agent-qa*` |
| Step 4b | **N/A** Create · media **DEFER** · **cấm** TL chạy · **cấm** invent media path |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/asset-collect.md | **PASS** · T-IOS-ASSET-COLLECT · T-AND-ASSET-COLLECT · T-BE **n/a** · T-BFF **n/a** · T-KIT **n/a** · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read abs · hashes khớp · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có · autoApprove route_a |
| Kit | **PASS** · reuse map · PhotoRow compose · T-KIT **n/a** |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-30T22:45:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-collect-tl-task-20260830 |
| priorControlHintHash | sha256:asset-collect-control-hint-20260830 |
| priorRealDataHash | sha256:asset-collect-real-data-20260830 |
| priorBffHash | sha256:asset-collect-bff-20260830 |
| priorActionTreeHash | sha256:asset-collect-action-tree-20260830 |
| priorPoHash | sha256:asset-collect-po-requirement-20260830 |
| priorDesignHash | sha256:asset-collect-design-20260831 |
| priorSaHash | sha256:asset-collect-sa-solution-20260830 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked dorGate=PASS -->
