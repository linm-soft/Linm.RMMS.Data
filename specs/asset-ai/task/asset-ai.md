# TL — Tasks — asset-ai (Camera AI)

| Field | Value |
|-------|-------|
| feature | `asset-ai` |
| title | [Mobile] [Tài sản] -> Camera AI |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design + SA confirm · GAP-MOB-ASSET-AI-PACK-01 **closed** · **cấm** bottom-sheet) |
| stack | `native_dual` |
| thisAction | **Camera AI** `#sc-asset-ai` `DES-MOB-ASSET-AI` only · entry hub tile Camera AI `#i-camera` → push · GPS* · capture · uploads→ImageUrl · POST detect-assets · bind AssetClass/Score% · toast Code · enqueue `det-hitl`+Id · **cấm** Confirm/Dismiss / auto sổ / gộp collect/adjust/cam-patrol (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · hub `#sc-asset-hub` tile Camera AI → **push** `#sc-asset-ai` · back «Tài sản» → pop hub · pack `tabs: none` · shell Tab 5 **giữ** · tab **`home`** active · deep link **n/a** P1 |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** invent `AssetAiController` / `api/v1/asset-ai` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP AiVision (+ Integration / optional Patrol) · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_e939f217` · solution_confirm=approve · contentHash `sha256:asset-ai-sa-solution-20260901` · compact `handoff/sa-compact.md` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `task_a951f813` · contentHash via `handoff/design-compact.md` · map `sha256:asset-ai-html-map-20260901` |
| prior · po | **confirmed** · `po/requirement.md` · `task_1c830b88` · contentHash `sha256:asset-ai-po-req-20260901` · compact `handoff/po-compact.md` |
| prior · data_analy | **confirmed** · `_data-analy/asset-ai-control-hint.md` · `asset-ai-bff-endpoints.md` · `asset-ai-action-tree.md` · `asset-ai-real-data.md` · controlHint `sha256:asset-ai-control-hint-20260901` · realDataHash `sha256:asset-ai-real-data-20260901` · bffContentHash `sha256:asset-ai-bff-20260901` · actionTreeHash `sha256:asset-ai-action-tree-20260901` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_e9f98e82` |
| updatedAt | `2026-09-01T17:25:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/asset-ai` / `AssetAiController` / Finance `api/v1/assets` · Confirm/Dismiss trên slug (HITL-01 · owner `det-hitl`) · fake lat/lng · gõ tay GPS · `mock://` ImageUrl · fake HTTP 200 / invent Code khi detect/upload fail · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · «Có mạng» · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue capture/GPS/upload/detect (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e ở role TL · implement native code ở role TL · ẩn Score% brand (`SCORE-01` P1 show).

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — sheet owner `asset-ai` · entry reuse `asset-hub` tile Camera AI → push · không tab mới · không deep link P1 |
| `kit_skip` / PhotoRow | TopBar / ListRow / Primary / Secondary / Toast / GPS deny **đã map** · PhotoRow + CameraButton = **compose pattern** (`kit_missing_confirm` **approve** · Design/SA) · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — detect-assets + uploads **LIVE** · **không** pack `T-BE-*` / migration · **cấm** TL chạy Step 4b |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ `ai-vision/*` · `integration/*` · `patrol/*` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Tab 5 · tab **`home`** → `#sc-asset-hub` · tap tile **Camera AI** `#i-camera` → **push** `#sc-asset-ai` `DES-MOB-ASSET-AI` (thay toast stub `asset.tile.ai`). Back «Tài sản» (iOS text + chevron · Android icon-only OK) → `go('asset-hub')` / pop hub. Camera / GPS / upload / detect / cancel = **cùng slug**. Pack `tabs: none` · shell Tab 5 **giữ**. Sibling collect / adjust / list / detail / Confirm HITL UI = **OUT** · Confirm chỉ **enqueue** `det-hitl`+Id sau detect ok. |
| route_b / route_c | — không dùng |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `kit_skip=yes` · `T-BE=n/a` · `2026-09-01T17:25:00.000Z`.

---

## Live gap (TL audit 2026-09-01)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-asset-ai` | **MISSING** — không `Presentation/Features/AssetAi/*` | **T-IOS-ASSET-AI** |
| Android `#sc-asset-ai` | **MISSING** — không `presentation/feature/assetai/*` | **T-AND-ASSET-AI** |
| Hub tile Camera AI | **DELTA** — iOS `AssetHubViewModel` `.tileAI` → toast `asset.tile.ai` · Android `TileAI` cùng toast · **chưa** push | **wire trong T-IOS + T-AND** (thay toast → navigate AssetAi) · **cấm** reimplement hub |
| `POST/PUT ai-vision/uploads/*` | BE + Mobile.Bff proxy live · app **chưa** client upload AiVision | **DELTA** thin client + use case · ImageUrl trước detect · **cấm** `mock://` |
| `POST ai-vision/detect-assets` | BE Detect + Create Draft live · app **chưa** gọi | **DELTA** `DetectAssetsRequest` · bind AssetClass/Score%/Code/Id |
| optional `GET patrol/sessions` / `integration/road-routes/search` | live · use cases hub/patrol **đã có** | **optional** prefill RouteId / RouteLabel rowPos |
| optional `GET ai-vision/asset-candidates/nearby` | live | **optional** soft warn · không block P1 |
| GPS / deny modal | `GetCurrentLocationUseCase` · `GpsDenyModal` / `GpsDenyDialog` live | **reuse** · CTA off khi deny · **cấm** fake |
| Camera / PhotoRow | peer AssetCollect / VisCapture still capture + PhotoRow compose | **reuse pattern** · rồi **uploads** (MEDIA-01 P1 required) |
| Kit TopBar/ListRow/Primary/Secondary/Toast | dual map | **reuse** · **cấm** `T-KIT-*` |
| New BE endpoint / Schema_* / invent path | detect + uploads **LIVE** | **T-BE-*** = **n/a** P1 |
| Confirm/Dismiss / det-hitl UI | sibling | **cấm** ship Confirm UI · chỉ enqueue + Id |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-ASSET-AI` | iOS | SA confirmed · kit_skip · Design dual · route_a | `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` | Ship `DES-MOB-ASSET-AI` sheet · wire hub tile → push · GPS · camera · uploads → ImageUrl · POST detect · bind class/score% · toast Code · push `det-hitl`+Id · GPS deny |
| `T-AND-ASSET-AI` | Android | SA confirmed · kit_skip · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` | Compose parity dual · CameraX still · same BFF/GPS/offline · Score% + dual chrome |
| `T-BE-*` | BE | — | — | **N/A** · detect + uploads LIVE · **cấm** invent path / migration |
| `T-BFF-*` | — | — | — | **N/A** · proxy catch-all |
| `T-KIT-*` | — | — | — | **N/A** · kit reuse + PhotoRow compose |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **home** active · **cấm** invent (`GAP-TAB-01`) |
| `T-QA-ASSET-AI` | QA | T-IOS · T-AND | `/agent-qa-mobile` | Maestro slug `asset-ai` · `yarn e2e-qa-mobile` · GPS deny · offline toast · SCORE% · HITL enqueue · store PNG `qa/store/asset-ai` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-ASSET-AI`) → `/agent-dev-android` (`T-AND-ASSET-AI`) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling · **cấm** Step 4b ở Dev P1.

---

## Source map (cite live paths)

### T-IOS-ASSET-AI

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/AssetAi/*` — sheet + PhotoRow + ListRows + GPS deny · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/AssetHub/AssetHubViewModel.swift` — `.tileAI` **thay toast** → open AI · `App/AppRouter.swift` — `navigationDestination` push dưới hub (pattern `showAssetCollect`) · **cấm** reimplement hub |
| Router | `App/AppRouter.swift` · home tab · stack dưới AssetHub · `showAssetAi` |
| Use cases | **NEW** upload init+object + `DetectAssetsUseCase` · `GetCurrentLocationUseCase` · optional sessions/routes · still camera · **cấm** invent path |
| Location | `CoreLocationReader` · deny → `GpsDenyModal` · **chặn** CTA · **cấm** fake / gõ tay |
| Camera | AVFoundation **still** · PhotoRow `#i-camera` · upload → ImageUrl · **không** continuous finder · **cấm** `mock://` |
| Repo | AiVision client — `POST ai-vision/uploads/init` · `PUT …/uploads/{id}/object` · `POST ai-vision/detect-assets` · optional nearby · **cấm** invent `asset-ai` path |
| Deny / leave | reuse `Presentation/Shared/GpsDenyModal.swift` · leave dirty in-app nếu dirty · **cấm** `UIAlertController` |
| Nav HITL | sau detect ok · toast Code · navigate `det-hitl` + candidate `Id` · **cấm** Confirm/Dismiss UI trên slug |
| Copy | VN SSOT Design · toast «Đã gửi · {Code}» · err toast |
| Store privacy | Info.plist camera + location **đã có** · verify PrivacyInfo (`GAP-SA-STORE-01`) |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-ASSET-AI` · `DES-MOB-GPS-DENY` · `#sc-asset-ai` |
| kit | `LinmTopBar` · PhotoRow + CameraButton **compose** · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell · typography `LinmTokens` label **13** · value/button **≥16** (`GAP-TYP-01`) · cite `ui/html-to-native-map.md` |
| BFF | uploads + detect-assets + optional sessions/routes · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent · **cấm** fake 200/Code |

### T-AND-ASSET-AI

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/assetai/*` — sheet + PhotoRow + ListRows + GPS deny |
| Entry wire | `presentation/feature/assethub/AssetHubViewModel.kt` · `TileAI` thay toast · `MainTabScreen` / nav — `navigate("asset-ai")` từ hub (pattern `asset-collect`) · **cấm** reimplement hub |
| Use cases | same dual · upload + detect + location + still camera |
| Location | `AndroidLocationReader` / `GetCurrentLocationUseCase` |
| Camera | CameraX `ImageCapture` · permission `CAMERA` + Play Data safety |
| Repo | extend `ApiService` / AiVision repo — same paths · DTO reuse |
| Deny | reuse `presentation/feature/shared/GpsDenyDialog.kt` · **cấm** system raw AlertDialog product |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK · Score% **bắt buộc** show |
| DI | Hilt |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | same paths · offline parity |

### T-BE-* / T-BFF-*

| | |
|--|--|
| Status | **N/A** — `POST api/v1/ai-vision/detect-assets` + `POST/PUT api/v1/ai-vision/uploads/*` LIVE · Mobile.Bff catch-all đủ · **không** pack `T-BE-*` / migration P1 |
| TL turn | **pack only** · **cấm** Step 4b / implement / migration |
| App P1 | uploads **required** trước detect · block CTA nếu thiếu ImageUrl / GPS / RouteId |

---

## DoD per task

### Shared AC (both native · cite PO + SA + Design)

1. Sheet **Camera AI** full (`DES-MOB-ASSET-AI`): nav back → hub · title fixed · section · PhotoRow · rowPos · rowClass · rowScore · CTA · cancel · toast · **cấm** bottom-sheet chrome.
2. Entry: hub tile Camera AI → push owner · **cấm** toast-only sau ship · **cấm** reimplement hub.
3. Appear: start GPS · optional sessions/routes prefill rowPos · PhotoRow empty · class/score empty until detect.
4. GPS pin * · Lat/Lng · deny/poor → `DES-MOB-GPS-DENY` · CTA **disabled** · **cấm** fake / gõ tay (`GAP-MOB-ASSET-AI-GPS-01`).
5. PhotoRow + `#i-camera` · capture → **uploads init+object** → `ImageUrl` · fail upload → toast · **block** detect · **cấm** `mock://` (`MEDIA-01`).
6. rowPos display Route+GPS · require `RouteId` + Lat/Lng trước detect.
7. Primary **Gửi nhận diện** → POST `ai-vision/detect-assets` · busy · bind `AssetClass` / `Score`% · toast **Đã gửi · {Code}** · enqueue navigate `det-hitl` + `Id` · 422/mạng → toast lỗi · giữ form · **cấm** invent Code · **cấm** fake 200.
8. Score % **P1 show** (`SCORE-01`) · **cấm** ẩn brand.
9. Confirm/Dismiss **không** trên slug · HITL owner `det-hitl` only (`HITL-01`).
10. Secondary **Hủy** / back → hub · leave dirty in-app nếu cần · **cấm** system alert.
11. Kit reuse map · PhotoRow compose · **cấm** watermark Gói / device label / «Có mạng».
12. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
13. Tab 5 shell giữ · pack `tabs: none` · tab **home** active (`T-QA-TAB-01`).
14. Store: verify camera + location privacy trước ship (`GAP-SA-STORE-01`) · **cấm** localhost/LAN listing · **cấm** iPad listing claim.
15. Offline: màn mở · upload/detect fail → toast lỗi · **cấm** fake 200 / fake Code.
16. **Cấm** ship sibling surfaces trên pack này (collect · adjust · list · detail · Confirm UI).

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack / title | `LinmTopBar` | iOS back **Tài sản** · Android icon-only |
| section | SectionLabel 13 | Chụp tài sản / thiết bị mới |
| photos / addPhoto | PhotoRow compose + camera | → uploads → ImageUrl · `#i-camera` |
| rowPos | `LinmListRow` | Route+GPS * · deny |
| rowClass | `LinmListRow` | AssetClass sau detect |
| rowScore | `LinmListRow` | Score % P1 show |
| btnSend | `LinmPrimaryButton` | disable khi thiếu photo/GPS/Route · busy |
| btnCancel | `LinmSecondaryButton` | hub |
| toastOk / toastErr | `LinmToast` | Code / message · **cấm** alert |
| gpsDeny* | modal reuse | `DES-MOB-GPS-DENY` |
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
| Upload init | `POST ai-vision/uploads/init` | MEDIA-01 P1 |
| Upload object | `PUT ai-vision/uploads/{id}/object` | → ImageUrl |
| Detect | `POST ai-vision/detect-assets` | `ImageUrl` · Lat/Lng · RouteId · bind AssetClass/Score/Code/Id |
| Prefill (optional) | `GET patrol/sessions` · `GET integration/road-routes/search` | rowPos |
| Nearby (optional) | `GET ai-vision/asset-candidates/nearby` | soft warn |
| GPS / camera / toast / nav HITL | — | device / local · enqueue `det-hitl` |

**Cấm** invent `api/v1/asset-ai` · Confirm/Dismiss paths trên slug này.

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| Confirm / Dismiss UI | sibling `det-hitl` |
| `#sc-asset-collect` / adjust / list / detail | sibling · **cấm** gộp |
| defect `POST ai-vision/detect` / cam-patrol | sibling |
| Invent `AssetAiController` / `api/v1/asset-ai` | **cấm** |
| New kit chrome package | **cấm** `T-KIT-*` (PhotoRow = compose) |
| Step 4b / migration / e2e | **không** ở TL · QA khi tới lượt |
| Watermark Gói / device label / proto-click | **cấm** |

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-ASSET-AI`) rồi `/agent-dev-android` (`T-AND-ASSET-AI`) |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-ai/ui/prototype/{ios,android}/index.html#sc-asset-ai` · gpsDeny `?gpsdeny=1` |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `asset-ai` · store PNG `qa/store/asset-ai` · **chỉ** `/agent-qa*` |
| Step 4b | **N/A** detect+uploads live · **cấm** TL chạy · **cấm** invent path |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/asset-ai.md | **PASS** · T-IOS-ASSET-AI · T-AND-ASSET-AI · T-BE **n/a** · T-BFF **n/a** · T-KIT **n/a** · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · compact + SA full · hashes khớp · **cấm** invent API / control |
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
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-09-01T17:25:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-ai-tl-task-20260901 |
| priorControlHintHash | sha256:asset-ai-control-hint-20260901 |
| priorRealDataHash | sha256:asset-ai-real-data-20260901 |
| priorBffHash | sha256:asset-ai-bff-20260901 |
| priorActionTreeHash | sha256:asset-ai-action-tree-20260901 |
| priorPoHash | sha256:asset-ai-po-req-20260901 |
| priorDesignHash | sha256:asset-ai-html-map-20260901 |
| priorSaHash | sha256:asset-ai-sa-solution-20260901 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked dorGate=PASS -->
