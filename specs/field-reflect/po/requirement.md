# PO — Requirement — field-reflect (mobile screen)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · demo `#sc-field-reflect` full · **đóng** GAP-MOB-FIELD-PACK-01 — STATUS/scan meta `sheet` = mislabel) |
| stack | `native_dual` |
| thisAction | **Ghi nhận hư hỏng** `#sc-field-reflect` only · owner `DES-MOB-FIELD-REFLECT` · kind `DES-MOB-FIELD-KIND` · entry `patrol-home` `#row-reflect` · **cấm** gộp `cam-patrol` / `inc-form` / `#sheet-incident` / `cam-view` / web `camera-connect` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_d6774c35` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/field-reflect` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/field-reflect-control-hint.md` · `field-reflect-bff-endpoints.md` · `field-reflect-action-tree.md` · `field-reflect-real-data.md` · contentHash `sha256:field-reflect-control-hint-20260829` · real-data `sha256:field-reflect-real-data-20260829` · bffContentHash `sha256:field-reflect-mobile-bff-20260829` · action-tree `sha256:field-reflect-action-tree-20260829` · cluster `specs/field-reflect/specs/_data-analy/` **không tồn tại** — SSOT = 4 file `_data-analy/field-reflect-*` · **no Excel** · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-28T22:15:00.000Z` |
| taskId | `task_d6774c35` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/field-reflect` / `FieldReflectController` · invent checklist API · Grid AC web / Report AC Lin* · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · watermark «Phiên bản Gói N» / «gen realapp» · «Có mạng» · device label «iPhone» / «· Android» · badge P1/P2 header · AC tap-cycle tín hiệu · AC implement lại kit đã map (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Create/draft/kind/photo/detect/checklist (`GAP-MOB-ACT-07`) · fake lat/lng · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Ghi nhận hư hỏng** native dual (iOS SwiftUI + Android Compose): trong ca tuần đường — chọn loại phản ánh **Hư / Mất / Hỏng** · chụp ảnh hiện trường · GPS chốt · (tuỳ chọn) nhận diện AI · checklist theo loại TS · **Tạo vấn đề** gắn ca · hoặc **Lưu nháp mất sóng**. Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · clone controller · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `field-reflect` = screen `#sc-field-reflect` `DES-MOB-FIELD-REFLECT` (+ kind pills `DES-MOB-FIELD-KIND`). **Cấm** gộp `cam-patrol` (finder AI liên tục) · `inc-form` / `#sheet-incident` · `cam-view` · web `camera-connect` (`GAP-MOB-ACT-01`). **Không** child form/sheet riêng (`GAP-MOB-ACT-02` = none · surface = **full screen**). Kind / photo / detect / checklist / Create / draft = **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`).

Entry: `patrol-home` row «Ghi nhận hư hỏng» `#row-reflect` · `#i-camera` · `go('field-reflect')`.

## 2. changeScope `new_page`

Pack **screen mới** theo data-analy (`changeScope=new_page`). Native hiện: stub / toast / missing owner trên hub — **chưa** màn `#sc-field-reflect` → **không** đổi thành `edit_page`. Delta Design/Dev = ship full `#sc-field-reflect` dual + wire BFF. Không bảng Current vs New web. SSOT visual = dual HTML `#sc-field-reflect` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material: iOS back «Tuần đường» + chevron · Android icon-btn chevron only — **OK**).

## 3. DoD (đo được)

1. Dual native: iOS SwiftUI + Android Compose — **cùng** zone `#sc-field-reflect` `DES-MOB-FIELD-REFLECT`: nav back → `patrol-home` · title **Ghi nhận hư hỏng** · kind pills · PhotoRow + camera · card Nhận diện / Mức / Vị trí đã chốt · checklist · CTA «Tạo vấn đề» / «Lưu nháp mất sóng» · toast. Frame proto iOS 390×844 · Android 412×915. Tab 5: tab **`field`** (Tuần đường) active · `tabs: none` trên surface (`GAP-TAB-01`). **Cấm** badge P1/P2 trên header.
2. Kind pills **Hư / Mất / Hỏng** (`DES-MOB-FIELD-KIND`) · single select · default **Hư** · filter checklist theo kind · **cấm** invent loại ngoài closed set 3.
3. PhotoRow + camera slot `#i-camera` · `openCapture('reflect')` · permission deny → toast/in-app · **không** crash · **cấm** fake detection khi no camera.
4. Card rows sau detect (optional) / prefill:

   | Row | Demo SSOT | Ship |
   |-----|-----------|------|
   | Nhận diện | Ổ gà · Mặt đường | bind detect `DefectClass` (+ surface) · empty OK nếu chưa detect |
   | Mức | Cao | bind detect `Severity` · badge orange |
   | Vị trí đã chốt | QL.1 · Km 1556+040 · ±4 m | route · Km · ±m · **device GPS** · **cấm** fake lat/lng |

5. Checklist theo loại TS — P1 SSOT PAVEMENT từ `asset-kcht-32` demo CHK (`GAP-MOB-FIELD-CHK-01`) · optional host catalog `GET integration/asset-types` · **cấm** invent `api/v1/.../checklist`.
6. Primary **Tạo vấn đề** → `POST incident/incidents` bind kind + detect + GPS + checklist join Description · toast **Đã tạo vấn đề SC-* · gắn ca tuần** (demo SC-2408) · **cấm** native alert · **cấm** invent SC khi fail · **chặn** Create nếu GPS chưa chốt / deny.
7. Secondary **Lưu nháp mất sóng** → local queue · reuse sibling `patrol-offline` · toast **Đã lưu nháp · Lưu trữ** · **cấm** fake 200 / fake SC (`GAP-MOB-REAL-01` §E).
8. Prefill ca / tuyến: `GET patrol/sessions` filter `Status=Đang tuần` · empty → banner/toast «Không có ca đang tuần» · **vẫn** cho draft offline · **cấm** fake ca.
9. Optional media: `POST ai-vision/uploads` (+ object) trước detect khi Signed/ready · P1 Create **chưa** `media[]` trên `CreateIncidentRequest` (`GAP-MOB-FIELD-MEDIA-01`) — bind Title/AssetLabel/Description · SA mở rộng nếu Signed · **cấm** invent path media trên Incident ở PO.
10. Optional detect: `POST ai-vision/detect` sau ảnh · fail → toast · giữ empty rows · **cấm** fake «Ổ gà» (`GAP-MOB-CAM-DETECT-01` reuse stub · SA expand body).
11. Entry (reuse, **cấm** reimplement hub): `patrol-home` quick **Ghi nhận hư hỏng** → **push** `#sc-field-reflect` (thay toast-only khi pack ship).
12. Kit reuse map: `LinmTopBar` · `LinmSegment`/pills · PhotoRow · `LinmListRow` · CheckboxList · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · GPS deny modal reuse `DES-MOB-GPS-DENY`. **Cấm** invent tên kit mới nếu chưa có trên `html-to-native-map` · Design `kit_missing_confirm` nếu cần (`GAP-MOB-ACT-05`).
13. App chỉ `{BffPrefix}` · **cấm** biết RMMS `:5101` · token Keychain / Encrypted.
14. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
15. QA (role sau): Maestro slug `field-reflect` only · live sim 6.9" + emulator · store PNG `qa/store/field-reflect` · **cấm** `yarn e2e-qa` web · **cấm** test sibling in-scope.
16. BE align: **không** invent `field-reflect` path — reuse `GET patrol/sessions` · `GET integration/asset-types` · `POST ai-vision/detect` · `POST ai-vision/uploads` · `POST incident/incidents`. Step 4b **Pending SA** (media trên Incident · detect body · checklist schema) — **cấm** PO chạy migration. **Cấm** `FieldReflectController` trên Mobile.Bff.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/field-reflect.md` | screen · kind · photo · detect · checklist · create/draft |
| CTX-02 | `docs/context/features/patrol-home.md` | entry hub |
| CTX-03 | `docs/context/features/incident.md` | Create incident |
| CTX-04 | `docs/context/features/cam-patrol.md` | peer detect (không gộp) |
| CTX-05 | `docs/context/features/asset-kcht-32.md` | checklist taxonomy |
| CTX-06 | `docs/context/features/patrol-offline.md` | reuse queue mất sóng |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-field-reflect` | iOS 390×844 · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-field-reflect` | Android 412×915 · **cùng copy** |
| DEM-03 | checklist `#ak32-chk-reflect-{ios,and}` | PAVEMENT demo rows |
| DEM-04 | `specs/field-reflect/ui/prototype/` | pack stub — Design chép dual từ mobile-p1 |
| DES | `specs/mobile-p1/ui/design.md` §5b bước 1 | flow phản ánh tay |
| MAP | `docs/html-to-native-map.md` | TopBar / ListRow / Primary / Secondary / Toast / pills |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/field-reflect-control-hint.md` | controlHint · tech factors |
| DA-02 | `specs/_data-analy/field-reflect-bff-endpoints.md` | BFF table |
| DA-03 | `specs/_data-analy/field-reflect-action-tree.md` | 1 action · share/reuse |
| DA-04 | `specs/_data-analy/field-reflect-real-data.md` | §A–§F bind |
| SCAN | `specs/_form-type-mobile/` | verify · packKind scan `sheet` → PO override **screen** |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | Patrol · AiVision · Incident · Integration · **cấm ERP.*** · **không** `api/v1/field-reflect` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | TopBar / ListRow / Buttons / Toast / Segment **đã có** · PhotoRow/Checkbox = map Design |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native. **Cấm** re-scan demo — inventory từ DA-* + CTX (hash skip).

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 `#sc-field-reflect` dual. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tuần đường | BackButton | * | `LinmTopBar` leading `#i-chevron-left` | `go('patrol-home')` · Android icon-only OK |
| title | Ghi nhận hư hỏng | TopBar title | * | `LinmTopBar` | fixed 17 · **cấm** badge P1/P2 |
| kindLabel | Loại phản ánh | SectionLabel | * | | **13** |
| kindPills | Hư / Mất / Hỏng | PillSelect (single) | * | `LinmSegment` / pills | `DES-MOB-FIELD-KIND` · default Hư |
| photoLabel | Ảnh hiện trường | SectionLabel | * | | **13** |
| photos | Ảnh | PhotoRow | * | slots + filled | attach |
| addPhoto | (camera slot) | CameraButton | * | `LinmIconButton` `#i-camera` | `openCapture('reflect')` |
| detectRow | Nhận diện | ListRow (readonly) | | `LinmListRow` | bind `DefectClass` · label 13 / value ≥16 · demo «Ổ gà · Mặt đường» |
| severityRow | Mức | ListRow + Badge | | `LinmListRow` | bind `Severity` · badge orange · demo «Cao» |
| locationRow | Vị trí đã chốt | ListRow (readonly) | * | `LinmListRow` | route · Km · ±m · GPS chốt · **cấm** fake |
| chkLabel | Checklist theo loại tài sản | SectionLabel | * | | **13** |
| checklist | checklist items | CheckboxList | * | `chk-row` | PAVEMENT SSOT · filter by kind · GAP-MOB-FIELD-CHK-01 |
| btnCreate | Tạo vấn đề | PrimaryButton | * | `LinmPrimaryButton` | POST incident · busy spinner |
| btnDraft | Lưu nháp mất sóng | SecondaryButton | * | `LinmSecondaryButton` | offline queue · reuse `patrol-offline` |
| toastOk | Đã tạo vấn đề SC-* · gắn ca tuần | Toast | * | `LinmToast` | từ Create `Code` |
| toastDraft | Đã lưu nháp · Lưu trữ | Toast | * | `LinmToast` | sau draft |
| gpsDeny | Định vị bị tắt | Modal | * | `DES-MOB-GPS-DENY` | deny · chặn create |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug `field-reflect`? |
|---------------|--------|------|--------------------------|
| Prefill ca / tuyến active | GET | `patrol/sessions` | **yes** — filter «Đang tuần» client |
| Catalog loại TS | GET | `integration/asset-types` | optional P1 — checklist host |
| Optional media init | POST | `ai-vision/uploads` | optional · GAP-MOB-FIELD-MEDIA-01 |
| Optional media object | PUT | `ai-vision/uploads/{id}/object` | optional |
| Nhận diện sau ảnh | POST | `ai-vision/detect` | **yes** — stub · GAP-MOB-CAM-DETECT-01 → SA |
| Tạo vấn đề | POST | `incident/incidents` | **yes** — kind + detect + GPS + Description |
| GPS chốt / camera | — | — | device · **không** API |
| Checklist ticks | — | — | local CHK `asset-kcht-32` · **cấm** invent path |
| Kind pills | — | — | local enum → `IncidentType` / Description |
| Lưu nháp mất sóng | — | — | local → `patrol-offline` reuse |

**Cấm** `GET/POST field-reflect` · `FieldReflectController` · DbContext trên Mobile.Bff · app `:5101`.

### Create body map (P1)

| UI / detect | → CreateIncidentRequest |
|-------------|-------------------------|
| Kind pill Hư/Mất/Hỏng | `IncidentType` (hoặc prefix Description) |
| DefectClass / Nhận diện | `Title` · `AssetLabel` |
| Severity / Mức | `Severity` |
| Route / Km chốt | `RouteName` · `KmStart` |
| Detection `Id` | `DetectionId` |
| GPS chốt | `HasGps=true` |
| Checklist ticks | `Description` (join labels) P1 |
| Status | `Nháp` / `Mới` theo product convention |
| RequestedAt | now |

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-FIELD-PACK-01 | STATUS/scan `sheet` vs demo full screen | **Chốt surface = screen** full `#sc-field-reflect`. Design cập nhật STATUS packKind → `screen`. **Cấm** bottom-sheet chrome / `#sheet-*`. |
| GAP-MOB-FIELD-MEDIA-01 | Create chưa `media[]` | **P1:** optional upload/detect · bind Title/AssetLabel/Description · **không** block Create nếu chưa upload. SA mở rộng media trên Incident khi Signed · Step 4b **không** ở PO. |
| GAP-MOB-FIELD-CHK-01 | Checklist API? | **P1:** local CHK `asset-kcht-32` PAVEMENT SSOT (+ optional `GET integration/asset-types`). **Cấm** invent checklist endpoint. |
| GAP-MOB-CAM-DETECT-01 | Detect body stub | **P1 wire stub hiện tại.** SA mở rộng ảnh/GPS khi Signed · cùng path `ai-vision/detect`. |
| Entry hub toast | patrol-home | Khi pack ship → **push** `field-reflect` · **cấm** giữ toast-only. |
| Sibling enqueue | Create / draft / kind / photo / detect / checklist | **none** — cùng slug (`GAP-MOB-ACT-06/07`). |
| Cluster path | `specs/field-reflect/specs/_data-analy/` | **N/A.** Dùng `_data-analy/field-reflect-*.md`. |
| GAP-PO-STORE-01 | signup / xóa TK | **N/A** — không signup. |
| UNCLEAR fields | — | **none** — không AskQuestion field · hash skip · **cấm** re-crawl CTX/demo. |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Ghi nhận hư hỏng | `#sc-field-reflect` `DES-MOB-FIELD-REFLECT` · kind `DES-MOB-FIELD-KIND` · iOS + Android | **Screen** (tab field · **không** Modal/Sheet pack) | create (field form · không CRUD list) | GET sessions · GPS · camera · optional upload/detect · POST incident · draft local · toast | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: `#sc-cam-patrol` · `#sc-inc-form` / `#sheet-incident` · `#sc-cam-view` · web camera-connect · watermark Gói · invent path.

Reuse only: `patrol-home` (back / entry) · `patrol-offline` (queue) · `DES-MOB-GPS-DENY` · `asset-kcht-32` CHK taxonomy (cite · không enqueue).

Frame: iOS 390×844 · Android 412×915 · safe area · content không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Màn mở · Create fail → queue / «Lưu nháp» · toast nháp · **cấm** fake SC · **cấm** full-screen block tab |
| AC-D-02 | GPS deny | Modal `DES-MOB-GPS-DENY` · **không** Create · **cấm** fake lat/lng · **cấm** system alert |
| AC-D-03 | Leave dirty | Back với ảnh/checklist đã chọn → confirm leave in-app (toast/modal kit) · **cấm** native alert · draft optional |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` / in-app modal |
| AC-D-05 | Keyboard | P1 không text field bắt buộc · nếu Note sau → keyboard không đè CTA |
| AC-D-06 | Safe area | TopBar + scroll form + CTA + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên chrome · **cấm** «Có mạng» · **cấm** tap-cycle |
| AC-D-09 | Token | Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab **Tuần đường** active · **cấm** segment riêng ngoài kind pills · **cấm** `TabView` / M3 `NavigationBar` raw |
| AC-D-11 | Camera | Permission deny → toast/in-app · **không** crash · **cấm** fake detection |
| AC-D-12 | Push | **N/A** |
| AC-F-01 | Appear | GET `patrol/sessions` · start GPS · default kind Hư · load checklist PAVEMENT |
| AC-F-02 | Kind change | Filter checklist · **cấm** invent kind |
| AC-F-03 | Photo / detect | Capture → optional upload → POST detect · bind card · fail → toast · **cấm** fake Ổ gà |
| AC-F-04 | Create | POST `incident/incidents` · toast SC-* · **cấm** Create khi GPS chưa chốt / deny |
| AC-F-05 | Draft | Local queue · toast nháp · reuse `patrol-offline` |
| AC-F-06 | Dual parity | iOS + Android **cùng** copy zones (trừ back chrome) · **cấm** lệch (`GAP-MOB-ALIGN-01`) |
| AC-F-07 | Entry | Hub → push owner · **cấm** toast-only sau ship |
| AC-F-08 | Empty session | Banner «Không có ca đang tuần» · draft vẫn OK · **cấm** fake ca |

Typography: label/tab **13** · field value **≥16** (`typography-analy-qa.md`).

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | In-app confirm (kit) · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| GPS deny | Modal `DES-MOB-GPS-DENY` · **cấm** native alert |
| Detect / Create fail | `LinmToast` lỗi · **cấm** alert |
| Offline POST | Queue + toast nháp · sibling offline |
| Draft success | Toast **Đã lưu nháp · Lưu trữ** |
| Create success | Toast **Đã tạo vấn đề SC-* · gắn ca tuần** |

## 11. Out of scope (this pack)

- `cam-patrol` · `inc-form` / `#sheet-incident` · `cam-view` · web `camera-connect` · Twin/YOLO local
- Invent `api/v1/field-reflect` / dedicated FieldReflectController / checklist API
- Bottom-sheet chrome (packKind scan `sheet` = mislabel)
- Media[] trên CreateIncidentRequest P1 (SA Signed)
- Step 4b / migration detect/media/checklist (SA)
- Watermark Gói / device label / mfeStdUrl / ERP.* / badge P1/P2 header
- Enqueue sibling Create/draft/kind/photo/detect/checklist
- Re-scan demo HTML

## 12. KPI (HĐ Gói 1 — màn này)

Phản ánh hiện trường tay = ghi nhận Hư/Mất/Hỏng theo tọa độ + ảnh + checklist → tạo vấn đề gắn ca tuần (hoặc nháp offline). DoD pack: `#sc-field-reflect` dual + GPS + kind + PhotoRow + checklist + Create/draft — **không** omni-implement `cam-patrol` / `inc-form` trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `field-reflect` / **`screen`** (confirmed · đóng GAP-MOB-FIELD-PACK-01) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/field-reflect/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-field-reflect` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Screen `#sc-field-reflect` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — không list/report web |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-field-reflect` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | TopBar/Segment/ListRow/Buttons/Toast/PhotoRow/Checkbox reuse · `kit_missing_confirm` nếu cần · **cấm** sheet chrome |
| BFF | `field-reflect-bff-endpoints.md` · sessions + asset-types + detect + uploads + incident |
| Open questions | §7 đã chốt — Design **không** sheet · media/checklist GAP ghi note · Create = POST incident |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |
| SA note | GAP-MOB-FIELD-MEDIA-01 · GAP-MOB-FIELD-CHK-01 · GAP-MOB-CAM-DETECT-01 |

Design: HIG + Material · IA lock Tab 5 field · copy VN đúng HTML · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo từ đầu nếu hash skip (`GAP-DES-DEMO-RESCAN-01`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-28T22:15:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:field-reflect-po-requirement-20260828 |
| priorControlHintHash | sha256:field-reflect-control-hint-20260829 |
| priorRealDataHash | sha256:field-reflect-real-data-20260829 |
| bffContentHash | sha256:field-reflect-mobile-bff-20260829 |
| actionTreeHash | sha256:field-reflect-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
