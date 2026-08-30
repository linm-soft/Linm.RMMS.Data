# Team lead — Task — cam-view (Camera xem)

| Field | Value |
|-------|-------|
| feature | `cam-view` |
| title | [Mobile] Camera xem |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-CAMVIEW-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-CAM-VIEW` · **cấm** Kind A–G web / Grid / Report / invent tab / `mfeStdUrl` |
| thisAction | **Camera xem** `#sc-cam-view` only · entry reuse `me` row «Camera xem» + ops/home chip «Camera tuyến» · **cấm** gộp `camera-connect` / `cam-patrol` / `vis-capture` (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · `me` row → push `#sc-cam-view` · chip shared_action cùng route · Back → `me` · pack `tabs: none` · shell Tab 5 **giữ** · tab **`me`** active · **cấm** deep-link web / `mfeStdUrl` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `CamViewController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Camera · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_3d3bd784` · `solution_confirm=approve` · Step 4b **Skip** · T-BE **n/a** |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_a3c2af87` |
| prior · po | **confirmed** · `po/requirement.md` · `task_317a47d9` |
| prior · data_analy | **confirmed** · `_data-analy/cam-view-*.md` · contentHash `sha256:cam-view-control-hint-20260829` · realDataHash `sha256:cam-view-real-data-20260829` · bffContentHash `sha256:cam-view-mobile-bff-20260829` · actionTreeHash `sha256:cam-view-action-tree-20260829` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_6e2d8ab9` |
| updatedAt | `2026-08-29T18:05:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/cam-view` / `CamViewController` · fake Base64 / SpeedKmh / Plate · credentials `connect/snapshot` trên app · AVCapture / CameraX finder · RTSP/WebRTC P1 · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue Làm mới / JPEG / events (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e / `yarn build` / `yarn start:std` ở role TL · implement native Write ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse · host **OK** |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse · host **OK** |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · reuse Camera domain · **cấm ERP.*** |
| `route_confirm` | **route_a** — screen owner `cam-view` · entry `me` + chip · không tab mới · không deep-link web |
| `kit_missing_confirm` | **none** — TopBar / ListRow / Toast / EmptyState / ImageCard·MediaPreview **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — paths live · Step 4b **Skip** · **cấm** invent |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ `cameras*` |
| `version_mismatch_action` | **recheck_new** — stamp workflow `2026.08.29.1` · rules `2026.08.29.5` · prior hashes khớp |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **`me`** (Tôi) → `#sc-me` row **Camera xem** `#i-video` / `me.row.cam` → **push** `#sc-cam-view` `DES-MOB-CAM-VIEW` (thay toast stub). Secondary: ops/home chip **Camera tuyến** → **cùng** route (`shared_action` · **không** enqueue). Back → `go('me')` (iOS label **Tôi** + chevron · Android icon-only OK). Appear = GET cameras → pick first Online∧IsActive → POST snapshot + GET events. Trailing **Làm mới** = re-POST + re-GET + toast. Pack `tabs: none` · shell Tab 5 **giữ**. |
| route_b / route_c | — không dùng (không deep-link web / `mfeStdUrl`) |

IA lock (PO · Design · SA):

```
me (#sc-me) · row Camera xem → #sc-cam-view ← this pack
ops/home chip Camera tuyến → cùng #sc-cam-view (shared_action)
#sc-cam-view → back = me · refresh = POST snapshot + GET events
Tab 5 shell giữ · tab me active · pack tabs: none
```

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `be_repo_confirm` · `route_confirm=route_a` · `kit_missing_confirm=none` · `version_mismatch_action=recheck_new` · `2026-08-29T18:05:00.000Z`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · `CamerasController` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | `GET cameras` · `POST cameras/{id}/snapshot` · `GET cameras/events` · optional `GET cameras/{id}` |
| kit | reuse map dual — `LinmTopBar` · `LinmListRow` · `LinmToast` · EmptyState · ImageCard/MediaPreview · Tab shell · cite `ui/html-to-native-map.md` · typography `LinmTokens` label/section **13** · value ≥**16** (`GAP-TYP-01`) · **không** `T-KIT-*` |
| entry | `reuse=me` row «Camera xem» · ops/home chip «Camera tuyến» `shared_action` · **cấm** reimplement hub/chip chrome |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **Skip** — schema Camera DONE (`camera-connect`) · **không** `/new-endpoint` / `/database-migration` / invent `rmms_cam_view*` |

---

## Live gap (TL audit 2026-08-29)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-cam-view` | **DELTA** — **không** `Presentation/Features/CamView/*` · `MeViewModel.camView` = toast stub `me.row.cam` | **T-IOS-CAM-VIEW** |
| Android `#sc-cam-view` | **DELTA** — **không** `presentation/feature/camview/*` · `MeIntent.CamView` = toast stub | **T-AND-CAM-VIEW** |
| `GET cameras` | BE + Mobile.Bff proxy **live** · app **chưa** `CameraRepository*` | **reuse** path · Dev new repo/use cases · **cấm** invent `cam-view` |
| `POST cameras/{id}/snapshot` | live SnapshotById | **reuse** · JPEG Base64 bind · gate `Ok` |
| `GET cameras/events` | live | **reuse** · dual speed + plate rows + lane sub |
| Pick cam P1 | — | client first `Online=true` ∧ `IsActive=true` · EmptyState · **không** picker (`GAP-MOB-CAMVIEW-PICK-01` CLOSED) |
| Dual Android events | Design CLOSED | **2 rows** + lane · **cấm** 1-row Android (`GAP-MOB-CAMVIEW-DUAL-01`) |
| Entry `me` row | toast stub dual | **thay** toast → push owner |
| Chip «Camera tuyến» | demo / shared_action | wire cùng route · **không** enqueue · **cấm** reimplement chip chrome |
| Device cam / RTSP | — | **OUT** P1 · JPEG domain only (`GAP-MOB-CAMVIEW-LIVE-01`) |
| New BE / schema / BFF controller | **không** | **T-BE-*** / **T-BFF-*** = **n/a** · Step 4b **Skip** |
| Kit TopBar/ListRow/Toast/Empty/MediaPreview | dual map | **reuse** · **cấm** `T-KIT-*` |
| Sibling camera-connect / cam-patrol / vis-capture | out of pack | **cấm** ship / start (`GAP-MOB-ACT-06`) |
| Foot «Phiên bản Gói…» / device label | demo chrome | **cấm ship** |

---

## Tasks (1 action = 1 feature)

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-CAM-VIEW | kit | — | **n/a** | — | Kit **đã map dual** · `kit_missing_confirm=none` — **không** giao Dev kit |
| **T-IOS-CAM-VIEW** | ios | SA · route_a · kit n/a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/CamView/*` · Camera repo/use cases · JPEG decode · events dual · Làm mới · entry `me` (+ chip) · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-CAM-VIEW** | android | SA · route_a · serial after iOS preferred | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Compose parity dual (**2** event rows + lane) · same API · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — cameras* **live** · Step 4b **Skip** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` · **cấm** invent `rmms_cam_view*` |
| **T-BFF-01** | bff | — | **reuse** | — | Mobile.Bff proxy catch-all **live** · **cấm** `CamViewController` · optional Dev verify `dotnet build` (**không** TL) |
| T-QA-TAB-01 | qa cite | Dev dual PASS | pending | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **me** active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| T-QA-CAM-VIEW | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | Maestro slug `cam-view` only · `yarn e2e-qa-mobile` · store PNG `qa/store/cam-view` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-CAM-VIEW`) → `/agent-dev-android` (`T-AND-CAM-VIEW`) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling · **cấm** invent cam-view API.

---

## Source map (cite live paths)

### T-IOS-CAM-VIEW

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/CamView/*` — screen · JPEG MediaPreview · events list · empty · toast · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/Me/MeViewModel.swift` — `.camView` **thay toast** → push owner · ops/home chip jump cùng route nếu live |
| Router | `App/AppRouter.swift` · me tab dưới screen |
| Use cases (NEW) | `FetchCamerasUseCase` · `FetchCameraSnapshotUseCase` · `FetchCameraEventsUseCase` |
| Repo (NEW) | `CameraRepository*` → BFF `cameras` · `cameras/{id}/snapshot` · `cameras/events` · **cấm** URLSession trong View |
| Mapper / copy | `CamViewCopy` / LinmCopy keys VN SSOT Design · bind ModelCode · CapturedAt HH:mm · SpeedKmh · Plate |
| State | selectedDevice? · jpegBase64? · capturedAt? · events · busy · toast · empty |
| GPS / device cam | **n/a** — **cấm** AVCapture · **cấm** CoreLocation stamp pack này |
| Store privacy | **không** thêm camera/location claim (`GAP-SA-STORE-01`) |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-CAM-VIEW` · `#sc-cam-view` |
| kit | `LinmTopBar` · ImageCard/MediaPreview · `LinmListRow` · EmptyState · `LinmToast` · Tab shell · cite `ui/html-to-native-map.md` |
| BFF | `GET cameras` · `POST cameras/{id}/snapshot` · `GET cameras/events` · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent `cam-view` path · **cấm** fake 200/Base64 |

### T-AND-CAM-VIEW

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/camview/*` — screen · JPEG · events · empty |
| Entry wire | `presentation/feature/me/MeViewModel.kt` — `MeIntent.CamView` **thay toast** → navigate owner · chip shared_action cùng route |
| Use cases / repo | same dual · Retrofit/`ApiService` paths `cameras*` |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK · **2** event row types **bắt buộc** |
| DI | Hilt |
| ssot.zones | same DES · frame 412×915 |
| kit | same kit map · Material chrome shell only |
| BFF | same 3 paths · offline toast parity · **cấm** CameraX finder |

### T-BE-* / T-BFF — n/a · reuse

| id | Decision |
|----|----------|
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse live `GET/POST cameras*` · **cấm** invent `CamViewController` / `api/v1/cam-view` |
| T-BE-MIG | **n/a** — reuse `rmms_camera_devices` + `rmms_camera_events` · Step 4b **Skip** · **cấm** invent bảng |
| T-BFF-01 | **reuse** — Mobile.Bff catch-all proxy · **cấm** clone controller |
| Step 4b | **Skip** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack này |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Camera xem** full (`DES-MOB-CAM-VIEW`): nav back → `me` · title **Camera xem** · trailing **Làm mới** · JPEG card · section **Sự kiện** · event rows · toast · **cấm** bottom-sheet chrome.
2. Appear: `GET cameras` page=1 pageSize=20 → pick **first** `Online=true` ∧ `IsActive=true` → `POST cameras/{id}/snapshot` + `GET cameras/events?limit=20` (optional `host=` = Host) · EmptyState khi none · **cấm** fake TCM403.
3. JPEG card: bind `Base64` + `ContentType` · caption «Ảnh JPEG · {ModelCode}» · «Cập nhật {HH:mm}» từ `CapturedAt` local · placeholder `#i-video` khi chưa có / `Ok=false` / fail · **cấm** AVCapture/CameraX / fake Base64.
4. Events: rows «Tốc độ {n} km/h» + «Phát hiện biển {Plate}» · sub time · optional «làn …» / `Direction` · Android **phải** 2 kiểu row (`GAP-MOB-CAMVIEW-DUAL-01`) · empty list OK · fail → toast · giữ list cũ.
5. Làm mới: re-POST snapshot + re-GET events · toast **Đã làm mới ảnh** khi OK · fail → toast · **cấm** fake 200.
6. Entry: `me` row push (thay toast) · chip «Camera tuyến» cùng route · **cấm** reimplement hub/chip · **cấm** toast-only sau ship.
7. Kit reuse map · **cấm** system alert · **cấm** watermark Gói / device label / «Có mạng».
8. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
9. Tab 5 shell giữ · pack `tabs: none` · tab **me** active (`T-QA-TAB-01`).
10. Offline / `Ok=false`: toast · giữ placeholder · **cấm** fake JPEG/events · **cấm** OfflineQueue P1 · **cấm** full-screen block.
11. Store: **không** thêm camera/location claim (`GAP-SA-STORE-01`) · **cấm** localhost/LAN in solution · **cấm** iPad listing claim.
12. **Cấm** ship sibling `camera-connect` / `cam-patrol` / `vis-capture` / RTSP live trên pack này.
13. App chỉ `{BffPrefix}` · Bearer Keychain / Encrypted · **cấm** body credentials `connect/snapshot` · **cấm** biết RMMS `:5101`.

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | iOS **Tôi** + chevron · Android icon-only · `go('me')` |
| title | `LinmTopBar` | **Camera xem** fixed 17 |
| btnRefresh | TextButton trailing | **Làm mới** · re-POST + re-GET |
| jpegCard | ImageCard / MediaPreview | dark surface · `#i-video` placeholder |
| jpegModel | Text caption ≥16 | «Ảnh JPEG · {ModelCode}» |
| jpegUpdated | Text **13** | «Cập nhật {HH:mm}» |
| sectionEvents | SectionLabel **13** | **Sự kiện** |
| rowEventSpeed | `LinmListRow` | SpeedKmh · time · lane optional |
| rowEventPlate | `LinmListRow` | Plate · **dual bắt buộc** |
| emptyCam | EmptyState | no Online |
| toastOk / toastFail | `LinmToast` | **cấm** alert |
| typography | `LinmTokens` | `GAP-TYP-01` |

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew :app:assembleDebug` | debug APK |
| BFF | optional `dotnet build` nếu đụng Mobile.Bff | PASS |
| BE | **n/a** pack này | — |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` ở TL · mark Dev done khi build fail.

### API contract (from SA — cite only)

| Action | App path | Notes |
|--------|----------|-------|
| Pick cam | `GET cameras?page=1&pageSize=20` | client first Online∧IsActive · optional `online=true` |
| Optional reload | `GET cameras/{id}` | optional |
| JPEG / Làm mới | `POST cameras/{id}/snapshot` | gate `Ok` · bind Base64 · ContentType · CapturedAt |
| Events | `GET cameras/events?limit=20` | optional `host=` = Host cam đang xem |
| Invent | `cam-view` / CamViewController | **cấm** |

### Demo fallback SSOT (Design mock only — **không** ship fake API)

| Field | Value |
|-------|-------|
| Model | Ảnh JPEG · iDS-TCM403 |
| Updated | Cập nhật 08:41 |
| Event 1 | Tốc độ 72 km/h · 08:41 · làn 2 |
| Event 2 | Phát hiện biển P.127 · 08:36 |
| Toast refresh | Đã làm mới ảnh |

Runtime: **bind live** hoặc empty/placeholder — **cấm** fake khi fail.

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → toast · giữ placeholder/list cũ · **cấm** fake · **cấm** full-screen block |
| AC-D-02 | GPS — **N/A** pack này |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` / EmptyState |
| AC-D-06 | Safe area · TopBar + JPEG + events + tab |
| AC-D-10 | Tab **Tôi** active · **cấm** invent tab / segment |
| AC-D-11 | Device cam — **N/A** · JPEG domain only |
| AC-F-01 | Appear GET cameras → pick → POST snapshot + GET events |
| AC-F-02 | Làm mới → re-snapshot + re-events · toast OK/fail |
| AC-F-03 | Empty Online → EmptyState · **cấm** fake ModelCode JPEG |
| AC-F-04 | Snapshot fail / Ok=false → placeholder · toast |
| AC-F-05 | Events empty/fail → empty list / toast · **cấm** invent Speed/Plate |
| AC-F-06 | Dual **2** event row types + lane · copy parity |
| AC-F-07 | Entry `me` / chip → push owner · **cấm** toast-only sau ship |
| AC-F-08 | **Cấm** watermark Gói / device label / credentials connect |
| AC-F-09 | App paths **chỉ** cameras* qua Mobile.Bff |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `camera-connect` | peer web / OUT mobile HW | CRUD / connect / wall |
| `cam-patrol` | sibling | finder tuần · **cấm** gộp |
| `vis-capture` | sibling | AI mặt đường · **cấm** gộp |
| `me` | reuse shipped | entry only · **cấm** reimplement hub |
| ops/home chip | shared_action | entry only · **không** enqueue |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start sibling từ TL/Dev `cam-view`.

---

## Deps

```
T-KIT-CAM-VIEW (n/a)
T-BE-API / T-BE-MIG (n/a) · T-BFF-01 (reuse)
route_a + SA confirmed
  → T-IOS-CAM-VIEW
  → T-AND-CAM-VIEW
T-IOS + T-AND → T-QA-CAM-VIEW (+ T-QA-TAB-01 cite) (QA role)
```

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `cam-view` / **`screen`** |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-CAM-VIEW` · `T-AND-CAM-VIEW` · T-BE **n/a** · T-BFF **reuse** · T-KIT **n/a** |
| BFF | `GET cameras` · `POST cameras/{id}/snapshot` · `GET cameras/events` |
| Real-data | `_data-analy/cam-view-real-data.md` + SA field map |
| UX packet | `ui/ux-analy.md` · `ui/design.md` · dual proto · `ui/html-to-native-map.md` |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/cam-view.md | **PASS** · T-IOS-CAM-VIEW · T-AND-CAM-VIEW · T-BE n/a · T-BFF reuse · route_a · source lock |
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
| generatedAt | 2026-08-29T18:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-view-control-hint-20260829 |
| realDataHash | sha256:cam-view-real-data-20260829 |
| bffContentHash | sha256:cam-view-mobile-bff-20260829 |
| actionTreeHash | sha256:cam-view-action-tree-20260829 |
| taskId | `task_6e2d8ab9` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
