# PO — Requirement — cam-patrol (mobile screen)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập camera |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · demo `#sc-cam-patrol` full · **đóng** GAP-MOB-CAM-PACK-01 — STATUS/scan meta `sheet` = mislabel) |
| stack | `native_dual` |
| thisAction | **Thu thập bằng camera** `#sc-cam-patrol` only · owner `DES-MOB-CAM-PATROL` · entry `patrol-home` + shared `inc-form` · **cấm** gộp `field-reflect` / `cam-view` / `vis-capture` / `camera-connect` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_078f6674` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/cam-patrol` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/cam-patrol-control-hint.md` · `cam-patrol-bff-endpoints.md` · `cam-patrol-action-tree.md` · `cam-patrol-real-data.md` · contentHash `sha256:cam-patrol-control-hint-20260828` · real-data `sha256:cam-patrol-real-data-20260828` · bffContentHash `sha256:cam-patrol-mobile-bff-20260828` · action-tree `sha256:cam-patrol-action-tree-20260828` · cluster `specs/cam-patrol/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/cam-patrol-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-28T21:05:00.000Z` |
| taskId | `task_078f6674` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/cam-patrol` / `CamPatrolController` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Confirm/Skip/detect (`GAP-MOB-ACT-07`) · fake lat/lng · score chrome ship % (`GAP-MOB-CAM-SCORE-01`) · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Thu thập bằng camera** native dual (iOS SwiftUI + Android Compose): trong ca tuần đường — camera finder + GPS chốt → AI detect mặt đường → user **Xác nhận · tạo vấn đề** (POST incident) hoặc **Bỏ qua**. Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `cam-patrol` = screen `#sc-cam-patrol` `DES-MOB-CAM-PATROL` (+ finder `DES-MOB-CAM-FINDER`). **Cấm** gộp `field-reflect` · `cam-view` · `vis-capture` · `ai-asset-detect` · web `camera-connect` (`GAP-MOB-ACT-01`). **Không** child form/sheet riêng (`GAP-MOB-ACT-02` = none · surface = **full screen**). Confirm / Skip / detect / stamp = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`).

Entry: `patrol-home` row «Thu thập bằng camera» `#i-video` · shared secondary từ `#sc-inc-form` (`reuse` owner · **không** enqueue).

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: hub toast `cam-patrol` trên `patrol-home` — **chưa** màn owner → **không** đổi thành `edit_page`. Delta Design/Dev = ship full `#sc-cam-patrol` dual + wire BFF. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-cam-patrol` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back «Tuần đường» + chevron · Android icon-btn chevron only — **OK**).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-cam-patrol` `DES-MOB-CAM-PATROL`: nav back → `patrol-home` · title **Thu thập bằng camera** · finder `DES-MOB-CAM-FINDER` · stamp tuyến/Km · stamp GPS · card Phát hiện (+ Hành động) · CTA Confirm / Skip · toast. Frame proto iOS 390×844 · Android 412×915. Tab 5: tab **`field`** (Tuần đường) active (`data-tab="field"`) · `tabs: none` trên surface (`GAP-TAB-01`).
2. Finder live: continuous camera preview + FOV box · **cấm** fake placeholder ảnh tĩnh thay camera khi permission granted.
3. Stamp tuyến/Km SSOT / live: **QL.1 · Km 1556+040** (demo) · live = session `Status=Đang tuần` từ `GET patrol/sessions` · fail/empty → demo SSOT · GPS **vẫn** chạy.
4. Stamp GPS: `{lat}, {lng} · ±{a} m · đã chốt` · **device GPS only** · **cấm** fake lat/lng. Deny → modal reuse `DES-MOB-GPS-DENY` · **chặn** Confirm.
5. Detection card sau `POST ai-vision/detect`:

   | Row | Demo SSOT | Ship |
   |-----|-----------|------|
   | Phát hiện | Ổ gà · Mặt đường | bind `DefectClass` (+ surface) |
   | Độ tin cậy | 91% | **Ẩn % / ẩn row** (`GAP-MOB-CAM-SCORE-01` · Design **cấm** score chrome) |
   | Hành động | Tạo vấn đề sau xác nhận | copy cố định P1 |

6. Primary **Xác nhận · tạo vấn đề** → `POST incident/incidents` bind `DetectionId` + stamp · toast **Đã tạo vấn đề SC-* · định vị đã chốt** (demo SC-2409) · **cấm** native alert · **cấm** invent SC code khi fail.
7. Secondary **Bỏ qua** → clear detection card local · toast **Đã bỏ · nhận nhầm** · finder tiếp tục · **không** API.
8. Offline / POST fail → queue local · reuse sibling `patrol-offline` · toast nháp · **cấm** fake 200 / fake SC (`GAP-MOB-REAL-01` §E).
9. Entry (reuse, **cấm** reimplement hub/form):
   - `patrol-home` quick **Thu thập bằng camera** → **push** `#sc-cam-patrol` (thay toast-only khi pack ship)
   - `#sc-inc-form` secondary **Thu thập bằng camera** → **cùng** route (`shared_action` · **không** enqueue)
10. Kit reuse map: `LinmTopBar` · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · GPS deny modal reuse. Finder = **app native camera surface** `DES-MOB-CAM-FINDER` + overlay stamps — **không** invent tên kit mới nếu chưa có trên `html-to-native-map` · Design `kit_missing_confirm` nếu cần slot/chrome (`GAP-MOB-ACT-05`).
11. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
12. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
13. QA (role sau): Maestro slug `cam-patrol` only · live sim 6.9" + emulator · store PNG `qa/store/cam-patrol` · **cấm** `yarn e2e-qa` web · **cấm** test sibling in-scope.
14. BE align: **không** invent `cam-patrol` path — reuse `GET patrol/sessions` · `POST ai-vision/detect` · `POST incident/incidents`. Step 4b **Pending SA** nếu mở rộng `DetectAiVisionRequest` (ảnh · lat/lng · video) — **GAP-MOB-CAM-DETECT-01** · **cấm** PO/data-analy chạy migration. **Cấm** `CamPatrolController` trên Mobile.Bff.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/cam-patrol.md` | screen · finder · detect · confirm |
| CTX-02 | `docs/context/features/patrol-home.md` | entry hub |
| CTX-03 | `docs/context/features/ai-vision.md` | detect domain |
| CTX-04 | `docs/context/features/patrol-offline.md` | reuse queue mất sóng |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-cam-patrol` | iOS 390×844 · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-cam-patrol` | Android 412×915 · **cùng copy** |
| DEM-03 | `specs/mobile-p1/ui/prototype/workflow-cam-patrol/index.html` | workflow anim (Design ref) |
| DEM-04 | `specs/cam-patrol/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| DES | `specs/mobile-p1/ui/design.md` §5b bước 2 | flow · **cấm** score chrome |
| MAP | `docs/html-to-native-map.md` | TopBar / ListRow / Primary / Secondary / Toast |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/cam-patrol-control-hint.md` | controlHint · tech factors |
| DA-02 | `specs/_data-analy/cam-patrol-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/cam-patrol-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/cam-patrol-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · hub toast entry hôm nay |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | AiVision · Incident · Patrol · **cấm ERP.*** · **không** `api/v1/cam-patrol` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / ListRow / Buttons / Toast **đã có** · Finder = app surface |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-cam-patrol` dual. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tuần đường | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('patrol-home')` · Android icon-only OK |
| title | Thu thập bằng camera | TopBar title | * | `LinmTopBar` | fixed 17 |
| finder | (viewfinder) | CameraFinder | * | native camera layer | `DES-MOB-CAM-FINDER` · FOV · Design kit confirm |
| stampRoute | QL.1 · Km 1556+040 | OverlayStamp | * | on finder | bind Route + chainage · 13 |
| stampGps | {lat}, {lng} · ±{a} m · đã chốt | OverlayStamp | * | on finder | device GPS · **cấm** fake |
| rowDetect | Phát hiện / Ổ gà · Mặt đường | ListRow | * | `LinmListRow` | bind `DefectClass` · label 13 / value ≥16 |
| rowScore | Độ tin cậy / 91% | ListRow | | `LinmListRow` | **demo only** · **ship ẩn** (`GAP-MOB-CAM-SCORE-01`) |
| rowAction | Hành động / Tạo vấn đề sau xác nhận | ListRow | * | `LinmListRow` | copy cố định P1 |
| btnConfirm | Xác nhận · tạo vấn đề | PrimaryButton | * | `LinmPrimaryButton` | POST incident · busy spinner |
| btnSkip | Bỏ qua | SecondaryButton | * | `LinmSecondaryButton` | dismiss local |
| toastOk | Đã tạo vấn đề SC-* · định vị đã chốt | Toast | * | `LinmToast` | từ Create `Code` |
| toastSkip | Đã bỏ · nhận nhầm | Toast | * | `LinmToast` | sau skip |
| gpsDeny | (reuse) | Modal | * | `DES-MOB-GPS-DENY` | deny · chặn confirm |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `cam-patrol`? |
|---------------|--------|------|------------------------|
| Prefill tuyến / ca active | GET | `patrol/sessions` | **yes** — filter «Đang tuần» client |
| Auto detect (frame) | POST | `ai-vision/detect` | **yes** — stub `Engine?`·`Note?` · GAP-MOB-CAM-DETECT-01 → SA |
| Optional detections | GET | `ai-vision/detections` · `…/{id}` | optional |
| Confirm · tạo vấn đề | POST | `incident/incidents` | **yes** — `DetectionId` + stamp |
| GPS stamp / camera stream | — | — | device · **không** API |
| Skip / dismiss | — | — | local · **không** API |
| Offline queue | — | — | local → `patrol-offline` reuse |

**Cấm** `GET/POST cam-patrol` · `CamPatrolController` · DbContext trên Mobile.Bff · app `:5101`.

### Create body map (P1)

| UI / detect | → CreateIncidentRequest |
|-------------|-------------------------|
| DefectClass | `Title` · `IncidentType` |
| RouteLabel / stamp QL.1 | `RouteName` |
| Km stamp | `KmStart` |
| Detection `Id` | `DetectionId` |
| GPS chốt | `HasGps=true` |
| Note / action | `Description` |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-CAM-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-cam-patrol`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome. |
| GAP-MOB-CAM-SCORE-01 | Demo 91% vs Design cấm score | **Ship ẩn % / ẩn row Độ tin cậy.** Demo HTML giữ 91% cho mock Design only. |
| GAP-MOB-CAM-DETECT-01 | Detect body stub mỏng | **P1 wire stub hiện tại.** SA mở rộng ảnh/GPS/video khi Signed · Step 4b **không** ở PO. |
| design §5b «tự POST rồi xác nhận Đúng/Không» | Lệch demo CTA | **Chốt demo SSOT:** Confirm = **POST create** · Skip = dismiss. **Không** auto-POST trước confirm P1. |
| Kit CameraFinder | Chưa trên map | Design `kit_missing_confirm` · app native surface OK · **cấm** invent tên kit lạ im lặng. |
| Entry hub toast | patrol-home P1 toast | Khi pack ship → **push** `cam-patrol` · **cấm** giữ toast-only. |
| Sibling enqueue | — | **none** (`GAP-MOB-ACT-06/07`). |
| Cluster path | `specs/cam-patrol/specs/_data-analy/` | **N/A.** Dùng `_data-analy/cam-patrol-*.md`. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup. |
| UNCLEAR fields | — | **none** — không AskQuestion field. |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Thu thập bằng camera | `#sc-cam-patrol` `DES-MOB-CAM-PATROL` · finder `DES-MOB-CAM-FINDER` · iOS + Android | **Screen** (tab field · **không** Modal/Sheet pack) | none (không form CRUD) | GET sessions · GPS · POST detect · POST incident · Skip local · toast | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-field-reflect` · `#sc-cam-view` · web camera-connect · score % ship · watermark Gói · invent path.

Reuse only: `patrol-home` (back / entry) · `patrol-offline` (queue) · `DES-MOB-GPS-DENY` · `inc-form` shared entry.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Finder mở · detect/confirm fail → queue local / toast nháp · **cấm** fake SC · **cấm** full-screen block tab |
| AC-D-02 | GPS deny | Modal `DES-MOB-GPS-DENY` · **không** Confirm · **cấm** fake lat/lng · **cấm** system alert |
| AC-D-03 | Leave dirty | **N/A** — không form text; Skip clears card · back → patrol-home không confirm bắt buộc |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | **N/A** — không input text P1 |
| AC-D-06 | Safe area | TopBar + finder + card + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên stamp · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **Tuần đường** active · **cấm** segment riêng trên màn · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | Permission deny → toast/in-app · **không** crash · **cấm** fake detection khi no camera |
| AC-D-12 | Push | **N/A** |
| AC-F-01 | Appear | GET `patrol/sessions` · stamp route · start GPS · start finder |
| AC-F-02 | Detect | POST `ai-vision/detect` · bind card · fail → toast · **cấm** fake 200 detection |
| AC-F-03 | Confirm | POST `incident/incidents` · toast SC-* · **cấm** Confirm khi GPS chưa chốt / deny |
| AC-F-04 | Skip | Clear card · toast bỏ · finder tiếp |
| AC-F-05 | Dual parity | iOS + Android **cùng** copy zones (trừ back chrome) · **cấm** lệch (`GAP-MOB-ALIGN-01`) |
| AC-F-06 | Score | **Không** hiện % ship |
| AC-F-07 | Entry | Hub / inc-form → push owner · **cấm** toast-only sau ship |

Typography: label/tab **13** · field value **≥16** (`typography-analy-qa.md`).

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** form — back hub OK |
| GPS deny | Modal `DES-MOB-GPS-DENY` · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Detect / Confirm fail | `LinmToast` lỗi · **cấm** alert |
| Offline POST | Queue + toast nháp · sibling offline |
| Skip | Toast **Đã bỏ · nhận nhầm** |
| Success Confirm | Toast **Đã tạo vấn đề SC-* · định vị đã chốt** |

## 11. Out of scope (this pack)

- `field-reflect` · `cam-view` · `vis-capture` · `ai-asset-detect` · web `camera-connect` · Twin/YOLO local
- Invent `api/v1/cam-patrol` / dedicated CamPatrolController
- Score chrome % trên UI ship
- Auto-POST incident trước Confirm (design §5b aspirational)
- Step 4b / migration Detect body (SA)
- Watermark Gói / device label / mfeStdUrl / ERP.*
- Enqueue sibling Confirm/Skip/detect
- Re-scan demo HTML

## 12. KPI (HĐ Gói 1 — màn này)

Camera tuần = thu thập hiện trường theo tọa độ → tạo vấn đề sau xác nhận user. DoD pack: `#sc-cam-patrol` dual + GPS + detect + Create incident — **không** omni-implement field-reflect / cam-view trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `cam-patrol` / **`screen`** (confirmed · đóng GAP-MOB-CAM-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/cam-patrol/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-cam-patrol` · workflow-cam-patrol · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen `#sc-cam-patrol` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-cam-patrol` + reviewUrl **cả hai** (+ workflow optional) |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | TopBar/ListRow/Buttons/Toast reuse · Finder = native surface · `kit_missing_confirm` nếu cần slot · **ẩn score %** |
| BFF | `cam-patrol-bff-endpoints.md` · sessions + detect + incident |
| Open questions | §7 đã chốt — Design **không** sheet · **không** score chrome · Confirm = create |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| SA note | GAP-MOB-CAM-DETECT-01 Detect body expand |

Design: HIG + Material · IA lock Tab 5 field · copy VN đúng HTML (trừ ẩn %) · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T21:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-po-requirement-20260828 |
| priorControlHintHash | sha256:cam-patrol-control-hint-20260828 |
| priorRealDataHash | sha256:cam-patrol-real-data-20260828 |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260828 |
| actionTreeHash | sha256:cam-patrol-action-tree-20260828 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
