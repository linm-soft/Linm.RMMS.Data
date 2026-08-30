# PO — Requirement — cam-view (mobile screen)

| Field | Value |
|-------|-------|
| feature | `cam-view` |
| title | [Mobile] Camera xem |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · demo `#sc-cam-view` full · **đóng** GAP-MOB-CAMVIEW-PACK-01 — STATUS/scan meta `sheet` = mislabel · **cấm** bottom-sheet chrome / `#sheet-*`) |
| stack | `native_dual` |
| thisAction | **Camera xem** `#sc-cam-view` only · owner `DES-MOB-CAM-VIEW` · entry `me` row «Camera xem» + shared chip ops/home «Camera tuyến» · **cấm** gộp `camera-connect` / `cam-patrol` / `vis-capture` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_317a47d9` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/cam-view` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/cam-view-control-hint.md` · `cam-view-bff-endpoints.md` · `cam-view-action-tree.md` · `cam-view-real-data.md` · contentHash `sha256:cam-view-control-hint-20260829` · real-data `sha256:cam-view-real-data-20260829` · bffContentHash `sha256:cam-view-mobile-bff-20260829` · action-tree `sha256:cam-view-action-tree-20260829` · cluster `specs/cam-view/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/cam-view-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-29T17:40:00.000Z` |
| taskId | `task_317a47d9` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/cam-view` / `CamViewController` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Làm mới / JPEG / events (`GAP-MOB-ACT-07`) · fake JPEG / fake SpeedKmh / Plate · credentials `connect/snapshot` trên app · device AVCapture / CameraX finder · RTSP/WebRTC P1 · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Camera xem** native dual (iOS SwiftUI + Android Compose): user **xem** JPEG snapshot cam tuyến + feed **Sự kiện** (tốc độ · biển) — **không** form cấu hình HW. Persona: Tuần đường · Hạt · hiện trường (tab Tôi). App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `cam-view` = screen `#sc-cam-view` `DES-MOB-CAM-VIEW`. **Cấm** gộp web `camera-connect` (HW form) · `cam-patrol` (finder tuần) · `vis-capture` · `ai-asset-detect` (`GAP-MOB-ACT-01`). **Không** child form/sheet riêng (`GAP-MOB-ACT-02` = none · surface = **full screen**). JPEG preview / GET cameras / events / Làm mới = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`).

Entry: `me` row «Camera xem» `#i-video` · shared secondary chip ops/home «Camera tuyến» `data-jump="cam-view"` (`shared_action` · **không** enqueue).

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: stub / missing owner — **chưa** màn ship → **không** đổi thành `edit_page`. Delta Design/Dev = ship full `#sc-cam-view` dual + wire BFF Camera. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-cam-view` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back «Tôi» + chevron · Android icon-btn chevron only — **OK** · **Android phải** có 2 event rows = iOS gồm biển + sub «làn …» — đóng **GAP-MOB-CAMVIEW-DUAL-01**).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-cam-view` `DES-MOB-CAM-VIEW`: nav back → `me` · title **Camera xem** · trailing **Làm mới** · JPEG card (model + Cập nhật HH:mm) · section **Sự kiện** · event rows · toast. Frame proto iOS 390×844 · Android 412×915. Tab 5: tab **`me`** (Tôi) active (`data-tab="me"`) · `tabs: none` trên surface (`GAP-TAB-01`).
2. JPEG card: bind `Base64` + `ContentType` từ `POST cameras/{id}/snapshot` · caption «Ảnh JPEG · {ModelCode}» · «Cập nhật {HH:mm}» từ `CapturedAt` local TZ · placeholder `#i-video` khi chưa có / fail. **Cấm** AVCapture / CameraX / fake Base64.
3. Cam pick P1 (**GAP-MOB-CAMVIEW-PICK-01**): `GET cameras` page=1 pageSize=20 · client chọn **first** `Online=true` ∧ `IsActive=true` · **không** picker UI P1. Empty / không Online → EmptyState · **cấm** fake TCM403 JPEG.
4. Section **Sự kiện**: `GET cameras/events` (`limit` 20 · optional `host=` = Host cam đang xem) · rows bind:
   - «Tốc độ {n} km/h» ← `SpeedKmh` · sub `{HH:mm}` · optional «làn …» / `Direction`
   - «Phát hiện biển {Plate}» ← `Plate` / `RawKind` · sub time  
   Empty list OK (không invent tốc độ/biển). Fail → toast · giữ list cũ nếu có.
5. Trailing **Làm mới** → re-POST snapshot + re-GET events · toast **Đã làm mới ảnh** khi OK · fail → toast lỗi · **cấm** fake 200 JPEG.
6. Dual parity (**GAP-MOB-CAMVIEW-DUAL-01**): Android **phải** ship cùng 2 kiểu row (tốc độ + biển) + sub lane như iOS — **cấm** ship 1-row Android.
7. Offline / Ok=false: toast lỗi · giữ placeholder · **cấm** fake JPEG / events (`GAP-MOB-REAL-01` §E).
8. Entry (reuse, **cấm** reimplement hub/chip):
   - `me` row **Camera xem** `#i-video` → **push** `#sc-cam-view`
   - ops/home chip **Camera tuyến** → **cùng** route (`shared_action` · **không** enqueue)
9. Kit reuse map: `LinmTopBar` · `LinmListRow` · `LinmToast` · EmptyState · ImageCard/MediaPreview JPEG (Design map kit / `kit_missing_confirm` nếu slot chưa trên map — `GAP-MOB-ACT-05`). **Cấm** invent icon — entry `#i-video` đã có.
10. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted · **cấm** body credentials `connect/snapshot`.
11. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
12. QA (role sau): Maestro slug `cam-view` only · live sim 6.9" + emulator · store PNG `qa/store/cam-view` · **cấm** `yarn e2e-qa` web · **cấm** test sibling in-scope.
13. BE align: **không** invent `cam-view` path — reuse live `GET cameras` · `POST cameras/{id}/snapshot` · `GET cameras/events`. Step 4b **Skip** (schema Camera DONE `camera-connect`). **Cấm** `CamViewController` trên Mobile.Bff.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/cam-view.md` | screen · JPEG · events |
| CTX-02 | `docs/context/features/camera-connect.md` | peer domain Camera API |
| CTX-03 | `docs/context/features/me.md` | entry hub |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-cam-view` | iOS 390×844 · `DES-MOB-CAM-VIEW` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-cam-view` | Android 412×915 · **parity + dual GAP** |
| DES | `specs/mobile-p1/ui/design.md` § Camera xem | flow JPEG + events |
| MAP | `docs/html-to-native-map.md` | TopBar / ListRow / Toast |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/cam-view-control-hint.md` | controlHint · tech factors · dual |
| DA-02 | `specs/_data-analy/cam-view-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/cam-view-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/cam-view-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Camera domain · **cấm ERP.*** · **không** `api/v1/cam-view` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / ListRow / Toast **đã có** · JPEG card = Design map |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

### Demo rows SSOT (Design mock only — **không** ship fake API)

| Field | Value |
|-------|-------|
| Model | Ảnh JPEG · iDS-TCM403 |
| Updated | Cập nhật 08:41 |
| Event 1 | Tốc độ 72 km/h · 08:41 · làn 2 |
| Event 2 | Phát hiện biển P.127 · 08:36 |
| Toast refresh | Đã làm mới ảnh |

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-cam-view` dual. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tôi | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('me')` · Android icon-only OK |
| title | Camera xem | TopBar title | * | `LinmTopBar` | fixed 17 |
| btnRefresh | Làm mới | TextButton trailing | * | `LinmTopBar` trailing | POST snapshot + GET events · toast |
| jpegCard | Ảnh JPEG · {ModelCode} | ImageCard / MediaPreview | * | dark surface + `#i-video` placeholder | bind Base64 · caption model |
| jpegUpdated | Cập nhật {HH:mm} | Text caption | * | on card · **13** | bind `CapturedAt` local |
| sectionEvents | Sự kiện | SectionLabel | * | **13** | fixed |
| rowEventSpeed | Tốc độ {n} km/h | ListRow | * | `LinmListRow` | bind `SpeedKmh` · sub time · lane optional |
| rowEventPlate | Phát hiện biển {Plate} | ListRow | * | `LinmListRow` | bind `Plate` / RawKind · **dual parity** |
| toastRefresh | Đã làm mới ảnh | Toast | * | `LinmToast` | sau refresh OK |
| emptyCam | (empty-state) | EmptyState | * | | GET cameras empty / no Online |
| toastFail | (lỗi tải ảnh / sự kiện) | Toast | * | `LinmToast` | **cấm** fake |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| rowCamView | Camera xem | ListRow nav | `LinmListRow` `#i-video` | `me` · `go('cam-view')` |
| chipCamRoute | Camera tuyến | Chip jump | ops/home chip | `data-jump="cam-view"` · shared_action |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `cam-view`? |
|---------------|--------|------|---------------------|
| Pick cam / ModelCode | GET | `cameras` | **yes** — first Online · IsActive |
| Optional by id | GET | `cameras/{id}` | optional |
| JPEG preview / Làm mới | POST | `cameras/{id}/snapshot` | **yes** — preferred stored device |
| Sự kiện list | GET | `cameras/events` | **yes** — `limit` · optional `host` |
| Toast refresh / fail | — | — | local · **không** API |
| Device camera stream | — | — | **không** — OUT finder |
| CRUD / connect credentials | POST/PUT/DELETE | `cameras*` · `connect/*` | **OUT** — web `camera-connect` |
| Live RTSP | POST | `cameras/{id}/live/start` | **OUT** P2 |

**Cấm** `GET/POST cam-view` · `CamViewController` · DbContext trên Mobile.Bff · app `:5101` · `POST cameras/connect/snapshot` credentials trên mobile.

### DTO → UI (P1)

| dtoField | UI |
|----------|-----|
| `ModelCode` | «Ảnh JPEG · {ModelCode}» |
| `Base64` · `ContentType` | JPEG card image |
| `CapturedAt` | «Cập nhật {HH:mm}» |
| `Ok` / `Message` | gate toast fail khi `Ok=false` |
| `SpeedKmh` | «Tốc độ {n} km/h» |
| `Plate` | «Phát hiện biển {Plate}» |
| `At` | row-sub time |
| `Direction` / lane | optional sub «làn …» |
| `Host` | `events?host=` filter |
| `Online` · `IsActive` | pick filter |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-CAMVIEW-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-cam-view`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome. |
| GAP-MOB-CAMVIEW-PICK-01 | Demo 1 cam · chưa picker | **P1 = first Online ∧ IsActive.** Empty → EmptyState + toast. **Không** list picker UI P1. |
| GAP-MOB-CAMVIEW-DUAL-01 | Android thiếu row biển + «làn 2» | **Design dual parity iOS** — ship 2 rows (tốc độ + biển) + lane sub. **Cấm** 1-row Android. |
| GAP-MOB-CAMVIEW-LIVE-01 | RTSP/WebRTC | **OUT P2** · JPEG snapshot only. |
| GAP-MOB-CAMVIEW-HW-01 | Form connect | **OUT** web `camera-connect`. |
| Device cam / finder | — | **no** — JPEG domain only · **cấm** AVCapture/CameraX. |
| Sibling enqueue | — | **none** (`GAP-MOB-ACT-06/07`). |
| Cluster path | `specs/cam-view/specs/_data-analy/` | **N/A.** Dùng `_data-analy/cam-view-*.md`. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup. |
| UNCLEAR fields | — | **none** — không AskQuestion field. |
| Step 4b | migration Camera | **Skip** — schema DONE · **cấm** PO chạy migration. |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Camera xem | `#sc-cam-view` `DES-MOB-CAM-VIEW` · iOS + Android | **Screen** (tab me · **không** Modal/Sheet pack) | none (không form CRUD) | GET cameras · POST snapshot · GET events · Làm mới · toast · empty | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-cam-patrol` · `#sc-vis-capture` · web camera-connect HW · RTSP live · watermark Gói · invent path · picker list P1.

Reuse only: `me` (back / entry) · ops/home chip shared entry.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Toast mất sóng / lỗi tải · giữ placeholder · **cấm** fake JPEG/events · **cấm** full-screen block tab |
| AC-D-02 | GPS deny | **N/A** — không stamp GPS trên màn này |
| AC-D-03 | Leave dirty | **N/A** — không form text; back → `me` OK |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / EmptyState |
| AC-D-05 | Keyboard | **N/A** — không input text P1 |
| AC-D-06 | Safe area | TopBar + JPEG + events + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **Tôi** active · **cấm** segment riêng trên màn · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | **N/A device cam** — JPEG từ domain · **cấm** open device camera |
| AC-D-12 | Push | **N/A** |
| AC-F-01 | Appear | GET `cameras` · pick first Online · POST snapshot · GET events |
| AC-F-02 | Refresh | Trailing Làm mới → re-snapshot + re-events · toast OK/fail |
| AC-F-03 | Empty cam | EmptyState · **cấm** fake ModelCode JPEG |
| AC-F-04 | Snapshot fail | Placeholder `#i-video` · toast · **cấm** fake Base64 |
| AC-F-05 | Events empty/fail | Empty list / toast · **cấm** invent Speed/Plate |
| AC-F-06 | Dual parity | iOS + Android **cùng** copy zones (trừ back chrome) + **2 event row types** · **cấm** lệch (`GAP-MOB-ALIGN-01` / DUAL-01) |
| AC-F-07 | Entry | `me` / chip → push owner · **cấm** toast-only sau ship |

Typography: label/tab/section **13** · field value **≥16** (`typography-analy-qa.md`).

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** form — back hub OK |
| Snapshot / events fail | `LinmToast` lỗi · **cấm** alert (`GAP-PO-LEAVE-01`) |
| Offline | Toast mất sóng · **cấm** fake 200 |
| Empty cameras | EmptyState |
| Refresh OK | Toast **Đã làm mới ảnh** |

## 11. Out of scope (this pack)

- web `camera-connect` HW form / CRUD / connect test / wall
- `cam-patrol` · `vis-capture` · `ai-asset-detect` · finder continuous
- Invent `api/v1/cam-view` / dedicated CamViewController
- RTSP / WebRTC / live gateway (P2)
- Camera picker list UI P1
- Credentials `connect/snapshot` trên app
- Step 4b / migration Camera
- Watermark Gói / device label / mfeStdUrl / ERP.*
- Enqueue sibling refresh / events / JPEG
- Re-scan demo HTML

## 12. KPI (HĐ Gói 1 — màn này)

Camera xem = đọc snapshot + sự kiện cam tuyến hiện trường — **không** cấu hình HW · **không** tuần finder. DoD pack: `#sc-cam-view` dual + JPEG bind + events + Làm mới — **không** omni-implement camera-connect / cam-patrol trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `cam-view` / **`screen`** (confirmed · đóng GAP-MOB-CAMVIEW-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/cam-view/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-cam-view` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen `#sc-cam-view` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-cam-view` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | TopBar/ListRow/Toast reuse · JPEG card Design map · EmptyState · **parity Android 2 event rows** |
| BFF | `cam-view-bff-endpoints.md` · cameras + snapshot + events |
| Open questions | §7 đã chốt — Design **không** sheet · **parity Android** · first Online pick · JPEG only |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| SA note | Step 4b Skip · reuse Camera live |

Design: HIG + Material · IA lock Tab 5 me · copy VN đúng HTML (iOS SSOT cho events) · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T17:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-view-po-requirement-20260829 |
| priorControlHintHash | sha256:cam-view-control-hint-20260829 |
| priorRealDataHash | sha256:cam-view-real-data-20260829 |
| bffContentHash | sha256:cam-view-mobile-bff-20260829 |
| actionTreeHash | sha256:cam-view-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
