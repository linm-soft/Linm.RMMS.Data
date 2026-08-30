# PO — Requirement — vis-capture (mobile screen)

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| title | [Mobile] [Vấn đề] -> Nhận diện mặt đường |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · demo `#sc-vis-capture` full · **đóng** GAP-MOB-VIS-PACK-01 — STATUS/scan meta `sheet` = mislabel · **cấm** bottom-sheet chrome / `#sheet-*`) |
| stack | `native_dual` |
| thisAction | **Nhận diện mặt đường** `#sc-vis-capture` only · owner `DES-MOB-VIS-CAPTURE` · entry `incident-list` `.vn-banner` · **cấm** gộp `cam-patrol` / `det-hitl` / `incident-create` / `cam-view` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_8735d614` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/vis-capture` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/vis-capture-control-hint.md` · `vis-capture-bff-endpoints.md` · `vis-capture-action-tree.md` · `vis-capture-real-data.md` · contentHash `sha256:vis-capture-control-hint-20260829` · real-data `sha256:vis-capture-real-data-20260829` · bffContentHash `sha256:vis-capture-mobile-bff-20260829` · action-tree `sha256:vis-capture-action-tree-20260829` · cluster `specs/vis-capture/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/vis-capture-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-29T08:35:00.000Z` |
| taskId | `task_8735d614` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/vis-capture` / `VisCaptureController` · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Gắn/Bỏ qua/detect/camera/GPS (`GAP-MOB-ACT-07`) · fake lat/lng · gõ tay tọa độ · nhận diện on-device · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Nhận diện mặt đường** native dual (iOS SwiftUI + Android Compose): từ tab Vấn đề — chụp ảnh mặt đường (still PhotoRow) + GPS chốt → server nhận diện (P1) → hiện phân loại/mức → user **Gắn sự cố** (POST incident + DetectionId) hoặc **Bỏ qua**. Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `vis-capture` = screen `#sc-vis-capture` `DES-MOB-VIS-CAPTURE`. **Cấm** gộp `cam-patrol` (continuous finder) · `det-hitl` · `incident-create` form · `cam-view` · web AiVision Kind B · Twin/ONNX local (`GAP-MOB-ACT-01`). **Không** child form/sheet riêng (`GAP-MOB-ACT-02` = none · surface = **full screen**). Photo / GPS / detect / Gắn / Bỏ qua = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`).

Entry: `incident-list` banner `.vn-banner` «Nhận diện mặt đường» `#i-camera` · also AI hub row / chip (`shared_action` · **không** enqueue).

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: prototype / stub entry — **chưa** màn owner ship → **không** đổi thành `edit_page`. Delta Design/Dev = ship full `#sc-vis-capture` dual + wire BFF. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-vis-capture` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back «Vấn đề» + chevron · Android icon-btn chevron only — **OK** · **Android phải** có section «Ảnh hiện trường» + CTA «Bỏ qua» — đóng **GAP-MOB-VIS-DUAL-01**).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-vis-capture` `DES-MOB-VIS-CAPTURE`: nav back → `incident-list` · title **Nhận diện mặt đường** · section **Ảnh hiện trường** · PhotoRow + camera · 4 rows (Loc · Acc · Phân loại · Mức+badge) · primary **Gắn sự cố** · secondary **Bỏ qua** · toast. Frame proto iOS 390×844 · Android 412×915. Tab 5: tab **`incident`** (Vấn đề) active (`data-tab="incident"`) · `tabs: none` trên surface (`GAP-TAB-01`).
2. PhotoRow still capture: `openCapture('vision')` · camera slot `#i-camera` · filled preview · **không** continuous finder (`cam-patrol` OUT). Permission deny → toast/in-app · **không** crash · **cấm** fake detection khi no camera.
3. Loc / Acc SSOT / live: demo **QL.1 · Km 1556+050** · **±4 m** · live = device GPS + optional session `Status=Đang tuần` từ `GET patrol/sessions` · fail/empty Route/Km → demo SSOT label · GPS accuracy **vẫn** từ device.
4. GPS gate (**GAP-MOB-VIS-GPS-01**): **chỉ** POST detect khi đã chốt GPS và `AccuracyM ≤ 30`. Thiếu GPS / sai số **> 30 m** → toastGpsBlock · **không** gửi detect · **cấm** fake lat/lng · **cấm** gõ tay tọa độ. Deny → modal reuse `DES-MOB-GPS-DENY` · chặn detect + Gắn.
5. Detection rows sau `POST ai-vision/detect`:

   | Row | Demo SSOT | Ship |
   |-----|-----------|------|
   | Vị trí đã chốt | QL.1 · Km 1556+050 | GPS + optional Route/Km |
   | Sai số định vị | ±4 m | device `AccuracyM` |
   | Phân loại | Nứt dọc | bind `DefectClass` |
   | Mức | Cao (badge orange) | bind `Severity` · badge map |

6. Primary **Gắn sự cố** → `POST incident/incidents` bind `DetectionId` + stamp · toast **Đã gắn sự cố** · back list OK · **cấm** native alert · **cấm** invent SC / class khi fail · **chặn** Gắn nếu thiếu detect / GPS chưa chốt / deny.
7. Secondary **Bỏ qua** → dismiss local · `go('incident-list')` · **không** API · dual parity Android **bắt buộc** (`GAP-MOB-VIS-DUAL-01`).
8. Offline / POST fail → queue local · reuse sibling `patrol-offline` · toast lỗi · **cấm** fake 200 / fake SC / fake class (`GAP-MOB-REAL-01` §E).
9. Entry (reuse, **cấm** reimplement list/hub):
   - `incident-list` `.vn-banner` **Nhận diện mặt đường** → **push** `#sc-vis-capture`
   - AI hub / chip jump → **cùng** route (`shared_action` · **không** enqueue)
10. Kit reuse map: `LinmTopBar` · SectionLabel · PhotoRow · `LinmListRow` · Badge · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · GPS deny modal reuse. **Cấm** invent tên kit mới nếu chưa có trên `html-to-native-map` · Design `kit_missing_confirm` nếu cần (`GAP-MOB-ACT-05`).
11. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
12. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
13. QA (role sau): Maestro slug `vis-capture` only · live sim 6.9" + emulator · store PNG `qa/store/vis-capture` · **cấm** `yarn e2e-qa` web · **cấm** test sibling in-scope.
14. BE align: **không** invent `vis-capture` path — reuse `POST ai-vision/detect` · optional uploads · `GET patrol/sessions` · `POST incident/incidents`. Step 4b **Pending SA** nếu Signed harden detect engine — **GAP-MOB-VIS-DETECT-01** · **cấm** PO/data-analy chạy migration. **Cấm** `VisCaptureController` trên Mobile.Bff.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/vis-capture.md` | screen · photo · GPS gate · detect · attach |
| CTX-02 | `docs/context/features/ai-vision.md` | detect domain |
| CTX-03 | `docs/context/features/incident-list.md` | entry banner · back |
| CTX-04 | `docs/context/features/patrol-offline.md` | reuse queue mất sóng |
| CTX-05 | `docs/context/features/cam-patrol.md` | sibling OUT · không gộp |
| CTX-06 | `docs/context/features/incident-create.md` | sibling form OUT |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-vis-capture` | iOS 390×844 · `DES-MOB-VIS-CAPTURE` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-vis-capture` | Android 412×915 · dual GAP |
| DEM-03 | entry `#sc-incident-list` `.vn-banner` `#i-camera` | push owner |
| DEM-04 | `specs/vis-capture/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| DES | `specs/mobile-p1/ui/design.md` AI mặt đường | flow · gate 30 m · **cấm** tên thuật toán |
| MAP | `docs/html-to-native-map.md` | TopBar / ListRow / Primary / Secondary / Toast |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/vis-capture-control-hint.md` | controlHint · tech factors |
| DA-02 | `specs/_data-analy/vis-capture-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/vis-capture-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/vis-capture-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | AiVision · Incident · Patrol · **cấm ERP.*** · **không** `api/v1/vis-capture` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / ListRow / Buttons / Toast **đã có** · PhotoRow / Badge = map Design |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-vis-capture` dual. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Vấn đề | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('incident-list')` · Android icon-only OK |
| title | Nhận diện mặt đường | TopBar title | * | `LinmTopBar` | fixed 17 |
| sectionPhoto | Ảnh hiện trường | SectionLabel | * | | **13** · dual Android **bắt buộc** |
| photos | (slots) | PhotoRow | * | camera slot `#i-camera` | `openCapture('vision')` · filled preview |
| rowLoc | Vị trí đã chốt / QL.1 · Km … | ListRow readonly | * | `LinmListRow` | GPS + optional Route/Km · 13 / ≥16 |
| rowAcc | Sai số định vị / ±{n} m | ListRow readonly | * | `LinmListRow` | device accuracyM · 13 / ≥16 |
| rowClass | Phân loại / {DefectClass} | ListRow readonly | * | `LinmListRow` | bind detect · 13 / ≥16 |
| rowSev | Mức / {Severity} | ListRow + Badge | * | `LinmListRow` · badge | bind Severity · color map |
| btnAttach | Gắn sự cố | PrimaryButton | * | `LinmPrimaryButton` | POST incident · busy spinner |
| btnSkip | Bỏ qua | SecondaryButton | * | `LinmSecondaryButton` | dismiss · dual Android **bắt buộc** |
| toastOk | Đã gắn sự cố | Toast | * | `LinmToast` | sau attach |
| toastGpsBlock | (thiếu GPS / > 30 m) | Toast | * | `LinmToast` | chặn detect |
| gpsDeny | (reuse) | Modal | * | `DES-MOB-GPS-DENY` | deny · chặn detect + attach |
| bannerVis | Nhận diện mặt đường · Chụp + định vị → gắn sự cố | BannerButton | * | `.vn-banner` `#i-camera` | incident-list entry · **không** control riêng slug |

### Severity display map (demo SSOT)

| Severity | Badge |
|----------|-------|
| Cao | orange |
| Nghiêm trọng | red (reuse incident) |
| Trung bình / Thấp | muted / green |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `vis-capture`? |
|---------------|--------|------|------------------------|
| Optional media init | POST | `ai-vision/uploads/init` | optional |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | optional |
| Optional media complete | POST | `ai-vision/uploads/complete` | optional |
| Nhận diện sau ảnh + GPS | POST | `ai-vision/detect` | **yes** — gate AccuracyM ≤ 30 · GAP-MOB-VIS-DETECT-01 → SA |
| Optional reload detection | GET | `ai-vision/detections/{id}` | optional |
| Prefill tuyến / ca (loc) | GET | `patrol/sessions` | optional — filter «Đang tuần» client |
| Gắn sự cố | POST | `incident/incidents` | **yes** — `DetectionId` + stamp |
| GPS chốt / camera | — | — | device · **không** API |
| Skip / dismiss | — | — | local · **không** API |
| Offline queue | — | — | local → `patrol-offline` reuse |

**Cấm** `GET/POST vis-capture` · `VisCaptureController` · DbContext trên Mobile.Bff · app `:5101`.

### Detect request (P1)

`DetectAiVisionRequest`: `Engine?` · `Note?` · `ImageBase64?` · `Lat?` · `Lng?` · `AccuracyM?` · `VideoRef?`  
→ `AiVisionDetectionDto`: `Id` · `Code` · `DefectClass` · `Score` · `Severity` · `Lat` · `Lng` · `RouteLabel` · …

### Create body map (P1)

| UI / detect | → CreateIncidentRequest |
|-------------|-------------------------|
| DefectClass / Phân loại | `Title` · `IncidentType` |
| RouteLabel / rowLoc | `RouteName` · `KmStart` |
| Detection `Id` | `DetectionId` |
| Severity / Mức | `Severity` |
| GPS chốt | `HasGps=true` |
| Note | `Description` optional |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-VIS-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-vis-capture`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome / `#sheet-*`. |
| GAP-MOB-VIS-DUAL-01 | Android thiếu section «Ảnh hiện trường» + «Bỏ qua» | **Design dual parity** — Android **phải** có section-label + Secondary «Bỏ qua» cùng iOS. Chrome back icon-only Android OK. |
| GAP-MOB-VIS-DETECT-01 | Detect engine stub | **P1 wire** path live hiện tại. SA harden engine khi Signed · Step 4b **không** ở PO. |
| GAP-MOB-VIS-GPS-01 | Gate accuracy | **Chốt ≤ 30 m** trước POST detect · toastGpsBlock nếu thiếu / > 30 m · **cấm** fake / gõ tay. |
| Design rule | Tên thuật toán trên UI? | **Cấm** — chỉ Loc / Acc / Phân loại / Mức. |
| Sibling enqueue | Gắn / Bỏ qua / detect / camera / GPS | **none** — cùng slug (`GAP-MOB-ACT-06/07`). OUT: `cam-patrol` · `det-hitl` · `incident-create`. |
| Cluster path | `specs/vis-capture/specs/_data-analy/` | **N/A.** Dùng `_data-analy/vis-capture-*.md`. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup. |
| UNCLEAR fields | — | **none** — không AskQuestion field · hash skip · **cấm** re-crawl CTX/demo. |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Nhận diện mặt đường | `#sc-vis-capture` `DES-MOB-VIS-CAPTURE` · iOS + Android | **Screen** (tab incident · **không** Modal/Sheet pack) | none (không form CRUD) | camera still · GPS gate · optional upload · POST detect · POST incident · Skip local · toast | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-cam-patrol` · `#sc-inc-form` · `det-hitl` · web AiVision catalog · watermark Gói · invent path · continuous finder.

Reuse only: `incident-list` (entry / back) · AI hub chip (shared entry) · `patrol-offline` (queue) · `DES-MOB-GPS-DENY`.

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn mở · detect/attach fail → queue local / toast lỗi · **cấm** fake SC / fake class · **cấm** full-screen block tab |
| AC-D-02 | GPS deny | Modal `DES-MOB-GPS-DENY` · **không** detect · **không** Gắn · **cấm** fake lat/lng · **cấm** system alert |
| AC-D-03 | Leave dirty | Back với ảnh đã chụp / detection hiện → confirm leave in-app (toast/modal kit) · **cấm** native alert · Skip = dismiss không confirm bắt buộc |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | **N/A** — không input text P1 |
| AC-D-06 | Safe area | TopBar + PhotoRow + rows + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **incident** (Vấn đề) active · **cấm** segment riêng trên màn · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | Permission deny → toast/in-app · **không** crash · **cấm** fake detection · still only (không finder continuous) |
| AC-D-12 | Push | **N/A** |
| AC-F-01 | Appear | start GPS · optional GET `patrol/sessions` · empty PhotoRow / rows |
| AC-F-02 | Capture | still photo → PhotoRow filled · **sau** GPS OK + ≤ 30 m → POST detect |
| AC-F-03 | Detect gate | Thiếu GPS / AccuracyM > 30 → toastGpsBlock · **không** POST detect |
| AC-F-04 | Detect | POST `ai-vision/detect` · bind rowClass / rowSev · fail → toast · **cấm** fake class |
| AC-F-05 | Attach | POST `incident/incidents` · toast **Đã gắn sự cố** · **cấm** Gắn khi thiếu detect / GPS |
| AC-F-06 | Skip | Dismiss · back `incident-list` · **không** API |
| AC-F-07 | Dual parity | iOS + Android **cùng** section ảnh + Bỏ qua + copy zones (trừ back chrome) · **cấm** lệch (`GAP-MOB-VIS-DUAL-01` / `GAP-MOB-ALIGN-01`) |
| AC-F-08 | Entry | Banner / hub → push owner · **cấm** toast-only sau ship |

Typography: label/tab **13** · field value **≥16** (`typography-analy-qa.md`).

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | Confirm in-app nếu có ảnh/detection · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| GPS deny | Modal `DES-MOB-GPS-DENY` · **cấm** native alert |
| GPS / accuracy block | Toast chặn detect · **cấm** alert |
| Detect / Attach fail | `LinmToast` lỗi · **cấm** alert · offline → queue |
| Skip | Nav `incident-list` · không toast bắt buộc |
| Success Attach | Toast **Đã gắn sự cố** |

## 11. Out of scope (this pack)

- `cam-patrol` continuous finder · `det-hitl` · `incident-create` form · `cam-view` · web AiVision Kind B · Twin/ONNX local · `ai-asset-detect`
- Invent `api/v1/vis-capture` / dedicated VisCaptureController
- Score % chrome bắt buộc trên UI (Score DTO optional · **không** row Độ tin cậy P1 — khác cam-patrol demo)
- Auto-POST incident trước user Gắn
- Step 4b / migration Detect engine (SA)
- Watermark Gói / device label / mfeStdUrl / ERP.*
- Enqueue sibling Gắn / Bỏ qua / detect / camera
- Re-scan demo HTML
- Fake lat/lng · gõ tay tọa độ · nhận diện on-device

## 12. KPI (HĐ Gói 1 — màn này)

Nhận diện mặt đường hiện trường = chụp + định vị đã chốt → server classify → gắn sự cố. DoD pack: `#sc-vis-capture` dual + PhotoRow + GPS gate 30 m + detect + Create incident — **không** omni-implement cam-patrol / incident-create / det-hitl trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `vis-capture` / **`screen`** (confirmed · đóng GAP-MOB-VIS-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/vis-capture/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-vis-capture` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen `#sc-vis-capture` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-vis-capture` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | TopBar/ListRow/Buttons/Toast/PhotoRow/Badge reuse · dual Android section + Bỏ qua |
| BFF | `vis-capture-bff-endpoints.md` · detect + uploads + sessions + incident |
| Open questions | §7 đã chốt — Design **không** sheet · **parity Android** · gate 30 m · **cấm** tên thuật toán |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| SA note | GAP-MOB-VIS-DETECT-01 Detect engine harden |

Design: HIG + Material · IA lock Tab 5 incident · copy VN đúng HTML · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T08:35:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:vis-capture-po-requirement-20260829 |
| priorControlHintHash | sha256:vis-capture-control-hint-20260829 |
| priorRealDataHash | sha256:vis-capture-real-data-20260829 |
| bffContentHash | sha256:vis-capture-mobile-bff-20260829 |
| actionTreeHash | sha256:vis-capture-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
