# PO — Requirement — incident-create (mobile screen)

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| title | [Mobile] Ghi sự cố |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · demo `#sc-inc-form` full · **đóng** GAP-MOB-INC-CREATE-PACK-01 — STATUS/scan meta `sheet` = mislabel · pattern field-reflect) |
| stack | `native_dual` |
| thisAction | **Ghi sự cố** `#sc-inc-form` only · owner `DES-MOB-INC-FORM` · kind `DES-MOB-INC-KIND` · entry `startIncidentPick()` · **cấm** gộp `field-reflect` / `#sheet-incident` / `incident-list` CRUD / web Kind F |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_4dd8f7a1` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/incident-create` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/incident-create-control-hint.md` · `incident-create-bff-endpoints.md` · `incident-create-action-tree.md` · `incident-create-real-data.md` · contentHash `sha256:incident-create-control-hint-20260829` · real-data `sha256:incident-create-real-data-20260829` · bffContentHash `sha256:incident-create-mobile-bff-20260829` · action-tree `sha256:incident-create-action-tree-20260829` · cluster `specs/incident-create/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/incident-create-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-29T00:32:00.000Z` |
| taskId | `task_4dd8f7a1` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/incident-create` / `IncidentCreateController` · invent checklist API · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · badge P1/P2 header · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Create/draft/kind/photo/detect/checklist/pick (`GAP-MOB-ACT-07`) · fake lat/lng · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Ghi sự cố** native dual (iOS SwiftUI + Android Compose): chọn loại tài sản (KCHT-32) → form gắn **TÀI SẢN ĐÃ CHỌN** — loại ghi nhận **Hư / Mất / Hỏng** · checklist theo loại · ảnh hiện trường · (tuỳ) nhận diện AI · GPS chốt · mức độ · mô tả → **Tạo vấn đề** gắn tài sản · hoặc **Lưu nháp mất sóng**. Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `incident-create` = screen `#sc-inc-form` `DES-MOB-INC-FORM` (+ kind pills `DES-MOB-INC-KIND`). **Cấm** gộp `field-reflect` (phản ánh tay không bắt buộc pick TS) · `#sheet-incident` (`DES-MOB-INC-CREATE-SHEET`) · `incident-list` list/detail CRUD · web Sự cố Kind F (`GAP-MOB-ACT-01`). **Không** child sheet riêng (`GAP-MOB-ACT-02` = none · surface = **full screen**). Pick / kind / checklist / photo / detect / Create / draft = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`).

Entry: Home quick «Ghi sự cố» · FAB `#sc-incident-list` · CTA «Ghi sự cố» trên `#sc-asset-type` — tất cả qua `startIncidentPick()` → pick asset-types → `openIncidentForm(code)`.

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: Home quick / FAB toast hoặc stub — **chưa** màn `#sc-inc-form` → **không** đổi thành `edit_page`. Delta Design/Dev = ship full `#sc-inc-form` dual + wire BFF + pick gate. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-inc-form` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back «Thông tin tài sản» + chevron · Android icon-btn chevron only — **OK**).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-inc-form` `DES-MOB-INC-FORM`: nav back → asset-type / pick · title **Ghi sự cố** · WalletCard TÀI SẢN ĐÃ CHỌN · kind pills · checklist · PhotoRow + camera · AI row · loc readonly * · severity select · mô tả · CTA «Tạo vấn đề» + 3 secondary · toast. Frame proto iOS 390×844 · Android 412×915. Tab 5: tab **`home`** active · `tabs: none` trên surface (`GAP-TAB-01`). **Cấm** badge P1/P2 trên header.
2. Entry pick (cùng flow · **không** slug riêng): `startIncidentPick()` → banner «Chọn loại tài sản để ghi sự cố» · grid 32 loại (`GET integration/asset-types` / catalog) · click → `openIncidentForm(code)` · toast pick nếu thiếu chọn · **cấm** enqueue pack pick.
3. WalletCard **TÀI SẢN ĐÃ CHỌN** bind code · title/sub (demo Cầu · BRIDGE · Kết cấu) · **chặn** Create nếu chưa chọn TS.
4. Kind pills **Hư / Mất / Hỏng** (`DES-MOB-INC-KIND`) · single select · default **Hư** · **cấm** invent loại ngoài closed set 3.
5. Checklist theo loại TS — P1 local CHK by asset `code` từ `asset-kcht-32` (`GAP-MOB-INC-CREATE-CHK-01`) · optional host `GET integration/asset-types` · **cấm** invent `api/v1/.../checklist`.
6. PhotoRow + camera slot `#i-camera` · `openCapture('inc-form')` · permission deny → toast/in-app · **không** crash · **cấm** fake detection khi no camera.
7. AI row «Nhận diện từ ảnh» · empty SSOT **Chưa có ảnh — chụp để phân loại** · optional `POST ai-vision/detect` sau ảnh · fail → toast · giữ empty · **cấm** fake nhận diện.
8. Loc readonly **Vị trí đã chốt *** · demo **QL.1 · Km 1556+080 · định vị ±5 m** · device GPS · optional `GET patrol/sessions` prefill Route/Km · deny → modal `DES-MOB-GPS-DENY` · **chặn** Create · **cấm** fake lat/lng.
9. Severity select: Nghiêm trọng · **Cao** (default) · Trung bình · Thấp · closed set 4 · **cấm** invent severity API.
10. Description textarea · placeholder **Mô tả hiện trường…**.
11. Primary **Tạo vấn đề** → `POST incident/incidents` bind asset + kind + GPS + checklist/mô tả · toast **Đã tạo vấn đề SC-* · gắn tài sản đã chọn** (demo SC-2418) · nav detail OK · **cấm** native alert · **cấm** invent SC khi fail · **chặn** Create nếu thiếu asset / GPS chưa chốt / deny.
12. Secondary (reuse · **không** enqueue):
    - **Thu thập bằng camera** → `cam-patrol` (`shared_action`)
    - **Giao việc xử lý** → `estimate` (sibling)
    - **Lưu nháp mất sóng** → local queue · reuse `patrol-offline` · toast **Nháp mất sóng** · **cấm** fake 200 / fake SC
13. Kit reuse map: `LinmTopBar` · `LinmWalletCard` · `LinmSegment`/pills · PhotoRow · `LinmListRow` · CheckboxList · `LinmSelect` · `LinmTextArea` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · GPS deny modal reuse `DES-MOB-GPS-DENY` · `LinmQuickItem` / FAB entry. **Cấm** invent tên kit mới nếu chưa có trên `html-to-native-map` · Design `kit_missing_confirm` nếu cần (`GAP-MOB-ACT-05`).
14. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
15. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
16. QA (role sau): Maestro slug `incident-create` only · live sim 6.9" + emulator · store PNG `qa/store/incident-create` · **cấm** `yarn e2e-qa` web · **cấm** test sibling in-scope.
17. BE align: **không** invent `incident-create` path — reuse `GET integration/asset-types` · `GET patrol/sessions` · `POST ai-vision/detect` · `POST ai-vision/uploads` · `POST incident/incidents`. Step 4b **Pending SA** (media trên Incident · checklist schema) — **cấm** PO chạy migration. **Cấm** `IncidentCreateController` trên Mobile.Bff.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/incident-create.md` | screen · pick · kind · checklist · create/draft |
| CTX-02 | `docs/context/features/incident.md` | Create incident domain |
| CTX-03 | `docs/context/features/asset-kcht-32.md` | catalog 32 · checklist taxonomy |
| CTX-04 | `docs/context/features/home.md` | entry quick |
| CTX-05 | `docs/context/features/cam-patrol.md` | secondary shared_action |
| CTX-06 | `docs/context/features/estimate.md` | secondary sibling |
| CTX-07 | `docs/context/features/patrol-offline.md` | reuse queue mất sóng |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-inc-form` | iOS 390×844 · `DES-MOB-INC-FORM` · `DES-MOB-INC-KIND` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-inc-form` | Android 412×915 · **cùng copy** |
| DEM-03 | entry `startIncidentPick()` · FAB · asset-type CTA | pick gate |
| DEM-04 | `specs/incident-create/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| DES | `specs/mobile-p1/ui/design.md` | flow ghi sự cố |
| MAP | `docs/html-to-native-map.md` | TopBar / WalletCard / ListRow / Select / TextArea / Primary / Secondary / Toast / pills |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/incident-create-control-hint.md` | controlHint · tech factors |
| DA-02 | `specs/_data-analy/incident-create-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/incident-create-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/incident-create-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Incident · Integration · AiVision · Patrol · **cấm ERP.*** · **không** `api/v1/incident-create` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / WalletCard / ListRow / Buttons / Toast / Segment / Select / TextArea **đã có** · PhotoRow/Checkbox = map Design |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-inc-form` dual. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| screenTitle | Ghi sự cố | TopBar title | * | `LinmTopBar` | `DES-MOB-INC-FORM` · fixed 17 · **cấm** badge P1/P2 |
| navBack | Thông tin tài sản | BackButton | * | `LinmTopBar` leading | `go('asset-type')` · Android icon-only OK |
| assetCard | TÀI SẢN ĐÃ CHỌN | WalletCard | * | `LinmWalletCard` | bind code · title/sub |
| kindLabel | Loại ghi nhận | SectionLabel | * | | **13** |
| kindPills | Hư / Mất / Hỏng | PillSelect (single) | * | `LinmSegment` / pills | `DES-MOB-INC-KIND` · default Hư |
| chkLabel | Checklist theo loại | SectionLabel | * | | **13** |
| checklist | checklist items | CheckboxList | * | `data-inc-chk` | theo asset code · GAP-MOB-INC-CREATE-CHK-01 |
| photoLabel | Ảnh hiện trường | SectionLabel | * | | **13** |
| photos | Ảnh | PhotoRow | | slots + filled | attach |
| addPhoto | (camera slot) | CameraButton | | `LinmIconButton` `#i-camera` | `openCapture('inc-form')` |
| aiRow | Nhận diện từ ảnh | ListRow | | `LinmListRow` | empty / detect bind · 13 / ≥16 |
| location | Vị trí đã chốt * | TextField readonly | * | | GPS chốt · label 13 / value ≥16 · **cấm** fake |
| severity | Mức độ | Select | * | `LinmSelect` | 4 options · default Cao |
| description | Mô tả | MultilineText | | `LinmTextArea` | placeholder SSOT |
| btnCreate | Tạo vấn đề | PrimaryButton | * | `LinmPrimaryButton` | POST incident · busy spinner |
| btnCam | Thu thập bằng camera | SecondaryButton | | `LinmSecondaryButton` | `go('cam-patrol')` · shared_action |
| btnAssign | Giao việc xử lý | SecondaryButton | | `LinmSecondaryButton` | `go('estimate')` · sibling |
| btnDraft | Lưu nháp mất sóng | SecondaryButton | * | `LinmSecondaryButton` | offline · reuse `patrol-offline` |
| toastOk | Đã tạo vấn đề SC-… · gắn tài sản đã chọn | Toast | * | `LinmToast` | sau Create 200 |
| toastDraft | Nháp mất sóng | Toast | * | `LinmToast` | sau draft |
| toastPick | Chọn loại tài sản để ghi sự cố | Toast | * | `LinmToast` | entry pick |
| gpsDeny | Định vị bị tắt | Modal | * | `DES-MOB-GPS-DENY` | reuse chrome · chặn create |
| homeQuick | Ghi sự cố | QuickItem | * | `LinmQuickItem` | entry home |
| fabCreate | Ghi sự cố | FAB | | | entry `#sc-incident-list` |
| pickBanner | Chọn loại tài sản để ghi sự cố | Banner | * | | `[data-ak32-pick]` |
| assetGrid | (36 loại) | Grid 3 cột stretch | * | `LinmAssetKchtPict` | reuse asset-types · pict QCVN theo `code` · label 3 dòng · → `openIncidentForm(code)` |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `incident-create`? |
|---------------|--------|------|----------------------------|
| Catalog loại TS (pick + checklist host) | GET | `integration/asset-types` | **yes** |
| Prefill ca / tuyến (loc Route-Km) | GET | `patrol/sessions` | optional — filter «Đang tuần» client |
| Optional media init | POST | `ai-vision/uploads` | optional · GAP-MOB-INC-CREATE-MEDIA-01 |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | optional |
| Nhận diện sau ảnh | POST | `ai-vision/detect` | **yes** — stub · → SA |
| Tạo vấn đề | POST | `incident/incidents` | **yes** — asset + kind + GPS + Description |
| GPS chốt / camera | — | — | device · **không** API |
| Checklist ticks | — | — | local CHK `asset-kcht-32` · **cấm** invent path |
| Kind pills / severity | — | — | local enum → Create body |
| Lưu nháp mất sóng | — | — | local → `patrol-offline` reuse |

**Cấm** `GET/POST incident-create` · `IncidentCreateController` · DbContext trên Mobile.Bff · app `:5101`.

### Create body map (P1)

| UI | → CreateIncidentRequest |
|----|-------------------------|
| Asset card title/sub | `Title` (prefix) · `AssetLabel` |
| Kind pill Hư/Mất/Hỏng | `IncidentType` (hoặc prefix Description) |
| Severity select | `Severity` |
| Loc Route / Km | `RouteName` · `KmStart` |
| Detection `Id` | `DetectionId` |
| GPS chốt | `HasGps=true` |
| Checklist + mô tả | `Description` (join) P1 |
| Status | `Mới` / `Nháp` theo product convention |
| RequestedAt | device UTC now |

Required validate live: `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt`.

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-INC-CREATE-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-inc-form`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome / `#sheet-*` trong pack này. |
| GAP-MOB-INC-CREATE-SHEET-01 | `#sheet-incident` «Tạo sự cố» | **OUT pack** — không ship · không gộp (`GAP-MOB-ACT-02`). |
| GAP-MOB-INC-CREATE-MEDIA-01 | Create chưa `media[]` | **P1:** optional upload/detect · bind Title/AssetLabel/Description/Note · **không** block Create nếu chưa upload. SA mở rộng media trên Incident khi Signed · Step 4b **không** ở PO. |
| GAP-MOB-INC-CREATE-CHK-01 | Checklist API? | **P1:** local CHK `asset-kcht-32` theo asset `code` (+ optional `GET integration/asset-types`). **Cấm** invent checklist endpoint. |
| Entry pick | slug riêng? | **Không** — cùng flow `startIncidentPick` · **cấm** enqueue (`GAP-MOB-ACT-07`). |
| Sibling enqueue | Create / draft / kind / photo / detect / checklist / cam / estimate | **none** — cùng slug hoặc reuse owner đã có (`GAP-MOB-ACT-06/07`). |
| Cluster path | `specs/incident-create/specs/_data-analy/` | **N/A.** Dùng `_data-analy/incident-create-*.md`. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup. |
| UNCLEAR fields | — | **none** — không AskQuestion field · hash skip · **cấm** re-crawl CTX/demo. |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Ghi sự cố | `#sc-inc-form` `DES-MOB-INC-FORM` · kind `DES-MOB-INC-KIND` · iOS + Android | **Screen** (tab home · **không** Modal/Sheet pack) | create (form · không CRUD list) | pick asset · GET asset-types · GPS · camera · optional upload/detect · POST incident · draft local · toast · secondary nav | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sheet-incident` · `#sc-field-reflect` · `incident-list` CRUD · web Kind F · watermark Gói · invent path.

Reuse only: `home` (entry) · `incident-list` FAB (entry) · asset-types pick · `cam-patrol` / `estimate` / `patrol-offline` (secondary/reuse) · `DES-MOB-GPS-DENY` · `asset-kcht-32` CHK taxonomy (cite · không enqueue).

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn mở · Create fail → queue / «Lưu nháp» · toast nháp · **cấm** fake SC · **cấm** full-screen block tab |
| AC-D-02 | GPS deny | Modal `DES-MOB-GPS-DENY` · **không** Create · **cấm** fake lat/lng · **cấm** system alert |
| AC-D-03 | Leave dirty | Back với ảnh/checklist/mô tả đã nhập → confirm leave in-app (toast/modal kit) · **cấm** native alert · draft optional |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | Textarea mô tả · keyboard không đè CTA Primary |
| AC-D-06 | Safe area | TopBar + scroll form + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **home** active · **cấm** segment riêng ngoài kind pills · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | Permission deny → toast/in-app · **không** crash · **cấm** fake detection |
| AC-D-12 | Push | **N/A** |
| AC-F-01 | Appear | Sau pick asset · bind WalletCard · start GPS · default kind Hư · severity Cao · load checklist theo code |
| AC-F-02 | Kind change | Update local state · **cấm** invent kind |
| AC-F-03 | Photo / detect | Capture → optional upload → POST detect · bind aiRow · fail → toast · **cấm** fake nhận diện |
| AC-F-04 | Create | POST `incident/incidents` · toast SC-* · **cấm** Create khi thiếu asset / GPS chưa chốt / deny |
| AC-F-05 | Draft | Local queue · toast **Nháp mất sóng** · reuse `patrol-offline` |
| AC-F-06 | Dual parity | iOS + Android **cùng** copy zones (trừ back chrome) · **cấm** lệch (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Entry | Home/FAB/asset CTA → pick → push owner · **cấm** toast-only sau ship |
| AC-F-08 | Empty catalog | Banner/toast pick · **cấm** fake asset · **cấm** Create không TS |
| AC-F-09 | Secondary routes | cam-patrol / estimate = navigate reuse · **không** reimplement |

Typography: label/tab **13** · field value **≥16** (`typography-analy-qa.md`).

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | In-app confirm (kit) · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| GPS deny | Modal `DES-MOB-GPS-DENY` · **cấm** native alert |
| Detect / Create fail | `LinmToast` lỗi · **cấm** alert |
| Offline POST | Queue + toast nháp · sibling offline |
| Draft success | Toast **Nháp mất sóng** |
| Create success | Toast **Đã tạo vấn đề SC-* · gắn tài sản đã chọn** |
| Pick thiếu TS | Toast **Chọn loại tài sản để ghi sự cố** |

## 11. Out of scope (this pack)

- `#sheet-incident` · `field-reflect` · `incident-list` CRUD · web Kind F assign/close
- Invent `api/v1/incident-create` / dedicated IncidentCreateController / checklist API
- Bottom-sheet chrome (packKind scan `sheet` = mislabel → PO **screen**)
- Media[] trên CreateIncidentRequest P1 (SA Signed)
- Step 4b / migration media/checklist (SA)
- Watermark Gói / device label / mfeStdUrl / ERP.* / badge P1/P2 header
- Enqueue sibling Create/draft/kind/photo/detect/checklist/pick
- Re-scan demo HTML

## 12. KPI (HĐ Gói 1 — màn này)

Ghi sự cố gắn tài sản đã chọn = chọn loại TS → Hư/Mất/Hỏng + checklist + ảnh + GPS + mức → tạo vấn đề (hoặc nháp offline). DoD pack: `#sc-inc-form` dual + pick + WalletCard + kind + PhotoRow + checklist + Create/draft — **không** omni-implement `field-reflect` / `#sheet-incident` / list CRUD trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `incident-create` / **`screen`** (confirmed · đóng GAP-MOB-INC-CREATE-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/incident-create/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-inc-form` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen `#sc-inc-form` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-inc-form` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | TopBar/WalletCard/Segment/ListRow/Select/TextArea/Buttons/Toast/PhotoRow/Checkbox reuse · `kit_missing_confirm` nếu cần · **cấm** sheet chrome |
| BFF | `incident-create-bff-endpoints.md` · asset-types + sessions + detect + uploads + incident |
| Open questions | §7 đã chốt — Design **không** sheet · `#sheet-incident` OUT · media/checklist GAP ghi note · Create = POST incident |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| SA note | GAP-MOB-INC-CREATE-MEDIA-01 · GAP-MOB-INC-CREATE-CHK-01 · GAP-MOB-INC-CREATE-SHEET-01 OUT |

Design: HIG + Material · IA lock Tab 5 home · copy VN đúng HTML · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T00:32:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:incident-create-po-requirement-20260829 |
| priorControlHintHash | sha256:incident-create-control-hint-20260829 |
| priorRealDataHash | sha256:incident-create-real-data-20260829 |
| bffContentHash | sha256:incident-create-mobile-bff-20260829 |
| actionTreeHash | sha256:incident-create-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
