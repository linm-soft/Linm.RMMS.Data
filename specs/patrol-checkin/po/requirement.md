# PO — Requirement — patrol-checkin (mobile sheet)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **Ghi điểm tuần** `DES-MOB-PAT-CHECKIN-SHEET` only · **không** gộp pin CTA / map |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_10f5eb97` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-checkin` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/patrol-checkin-control-hint.md` · `patrol-checkin-bff-endpoints.md` · `patrol-checkin-action-tree.md` · `patrol-checkin-real-data.md` · contentHash `sha256:patrol-checkin-control-hint-20260828` · bffContentHash `sha256:patrol-checkin-mobile-bff-20260828` · **no Excel** · **hash skip — cấm re-scan demo** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-28T19:55:30.000Z` |
| taskId | `task_10f5eb97` |

**Cấm:** gộp `patrol-pin` CTA/form (`GAP-MOB-ACT-02`) · invent `api/v1/patrol-checkin` · fake lat/lng · ERP.* · native alert · watermark Gói · device label «iPhone» / «· Android» · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Sheet **Ghi điểm tuần** native dual (iOS SwiftUI + Android Compose): prefill điểm KH / tuyến·lý trình / GPS ghim · banner đúng/sai điểm · Nội dung + ảnh · Lưu / Ghi nhận · leave modal · toast. Persona Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · `mfeStdUrl`.

**1 action = 1 feature.** Slug `patrol-checkin` = sheet `#sheet-checkin` `DES-MOB-PAT-CHECKIN-SHEET` (+ read `#sc-checkin-detail` `DES-MOB-CI-DETAIL` cùng slug). Pin CTA / map host **không** in-scope.

Entry: hub `patrol-home` CTA · map `patrol-map` CTA · handoff `patrol-pin` `openSheet('checkin')` (reuse parents · **không** enqueue sibling mới).

## 2. changeScope `new_page`

Pack **sheet** mới theo data-analy (`changeScope=new_page`). Visual SSOT = dual HTML `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET` · `#sc-checkin-detail` · `DES-MOB-CI-DETAIL` · `DES-MOB-LOC-MISMATCH` · `DES-MOB-LEAVE` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material). Android thiếu `section-label` Ảnh → Design parity thêm label (iOS SSOT).

## 3. DoD (đo được)

1. Dual native mở sheet **Ghi điểm tuần** (`LinmBottomSheet`): nav **Hủy** / **Lưu** · fields readonly · TextArea · PhotoRow · primary **Ghi nhận điểm tuần** · footer **Hủy**. Frame proto iOS 390×844 · Android 412×915 · Tab 5 shell **giữ** dưới sheet (`GAP-TAB-01` · `tabs: none` · **cấm** invent segment).
2. Prefill: **Điểm kế hoạch** · **Tuyến / lý trình** từ active session `GET patrol/sessions` (Status=Đang tuần) · fail/empty → demo SSOT `Km 1561+134 · Phước Dinh` / `QL.1 · Km 1561+134`.
3. **Định vị ghim tự động** + **Cách điểm KH** từ device GPS + haversine vs plan · banner `DES-MOB-LOC-MISMATCH`: đúng (`Đúng điểm · {d} m · định vị ±{a} m · ghim tự động`) / sai (`Sai điểm · …`). **Cấm** fake lat/lng.
4. `matchOk=false` → disable nav **Lưu** + primary **Ghi nhận** · toast **Chặn — không đúng điểm kế hoạch**.
5. GPS deny → reuse modal `DES-MOB-GPS-DENY` · **không** submit · **cấm** system alert.
6. PhotoRow + `#i-camera` → `openCapture('checkin')` · attach local URI P1.
7. Submit (Lưu / Ghi nhận) khi `matchOk=true`: POST `patrol/sessions/{id}/check-ins` khi BE live · **GAP-MOB-BFF-01** thiếu controller → P1 lưu local + enqueue `patrol-offline` · toast **Đã ghi điểm tuần · …** · **cấm** fake HTTP 200.
8. Dirty leave (Hủy / swipe) → modal `DES-MOB-LEAVE` (**Bỏ thay đổi?** / **Tiếp tục sửa**) · **cấm** native alert.
9. Read surface `#sc-checkin-detail` cùng slug: banner **Đã lưu** · rows Điểm KH / Cách điểm · back Ca.
10. Kit: `LinmBottomSheet` · `LinmTextField` · `LinmTextArea` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · PhotoRow / camera · in-app modals · **cấm** raw M3/HIG alert (`GAP-MOB-ACT-05`).
11. App chỉ `{BffPrefix}` · Step 4b **pending SA/TL** (GAP check-ins) — **cấm** PO chạy migration / Step 4b.
12. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
13. QA (role sau): Maestro slug `patrol-checkin` only · live sim 6.9" + emulator · store PNG `qa/store/patrol-checkin` · **cấm** `yarn e2e-qa` web.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-checkin.md` | sheet Ghi điểm tuần · §2 UI · §3 API · sibling |
| CTX-02 | `docs/context/features/patrol.md` | domain · Kind E `…/check-ins` |
| CTX-03 | `docs/context/features/patrol-home.md` | parent hub entry |
| CTX-04 | `docs/context/features/patrol-map.md` | map entry CTA |
| CTX-05 | `docs/context/features/patrol-pin.md` | handoff sau ghim |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sheet-checkin` / `#sc-checkin-detail` | iOS 390×844 · SSOT copy |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` cùng DES | Android 412×915 · **cùng copy** (+ parity label Ảnh) |
| DEM-03 | `specs/patrol-checkin/ui/prototype/{ios,android}/index.html` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `specs/patrol-checkin/ui/html-to-native-map.md` | kit sheet/fields/banner/photo **map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-checkin-control-hint.md` | controlHint · packKind `sheet` · contentHash `sha256:patrol-checkin-control-hint-20260828` |
| DA-02 | `specs/_data-analy/patrol-checkin-bff-endpoints.md` | BFF · GAP-MOB-BFF-01 · bffContentHash `sha256:patrol-checkin-mobile-bff-20260828` |
| DA-03 | `specs/_data-analy/patrol-checkin-action-tree.md` | 1 sheet + same-slug submit/camera/leave/detail |
| DA-04 | `specs/_data-analy/patrol-checkin-real-data.md` | §A+§B bind · demo fallback rows |
| SCAN | — | **hash skip** — **cấm** re-crawl demo/CTX (`GAP-PO-DEMO-RESCAN-01`) |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** invent `api/v1/patrol-checkin` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | BottomSheet / TextField / TextArea / Primary / Secondary / Toast |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn dual demo + DA-01 + DA-04. UNCLEAR field = **none**. `tabs: none` — **cấm** invent segment (`GAP-TAB-01` · shell Tab 5 **giữ** khi đứng hub/map dưới sheet).

### 5a. Sheet `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET`

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| sheetTitle | Ghi điểm tuần | SheetTitle | * | `LinmBottomSheet` nav | size 17 |
| navCancel | Hủy | TextButton | * | leading | → leave `DES-MOB-LEAVE` |
| navSave | Lưu | TextButton | * | trailing bold | submit · disable khi sai điểm |
| matchBanner | Đúng điểm · {d} m · định vị ±{a} m · ghim tự động / Sai điểm · … | Banner | * | ok green / warn red | `DES-MOB-LOC-MISMATCH` · size 13 |
| planPoint | Điểm kế hoạch | Text (readonly) | * | `LinmTextField` | label 13 / field ≥16 · demo `Km 1561+134 · Phước Dinh` |
| routeChainage | Tuyến / lý trình | Text (readonly) | * | `LinmTextField` | bind `Route` session |
| gpsPinned | Định vị ghim tự động | Text (readonly) | * | `LinmTextField` | lat,lng · ±N m · **cấm** fake |
| distPlan | Cách điểm KH | Text (readonly) | * | `LinmTextField` | `{m} m · Đúng điểm` / `Sai điểm` |
| content | Nội dung | TextArea | — | `LinmTextArea` | editable · demo `Mặt đường khô, lan can đạt` |
| photos | Ảnh | PhotoRow | — | slots + camera | section-label parity Android |
| addPhoto | (camera slot) | CameraButton | — | `LinmIconButton` `#i-camera` | `openCapture('checkin')` |
| btnSave | Ghi nhận điểm tuần | PrimaryButton | * | `LinmPrimaryButton` | `saveCheckin()` · chặn khi sai điểm · ≥16 |
| btnCancelFooter | Hủy | SecondaryButton | * | `LinmSecondaryButton` | close / leave |
| leaveTitle | Bỏ thay đổi? | ModalTitle | * | in-app | `DES-MOB-LEAVE` |
| leaveBody | Nội dung chưa lưu sẽ mất. | ModalBody | * | in-app | |
| leaveConfirm | Bỏ thay đổi | PrimaryButton | * | `LinmPrimaryButton` | discard |
| leaveKeep | Tiếp tục sửa | SecondaryButton | * | `LinmSecondaryButton` | |
| toastOk | Đã ghi điểm tuần · … | Toast | * | `LinmToast` | sau Lưu / Ghi nhận · 13–16 |
| toastBlock | Chặn — không đúng điểm kế hoạch | Toast | * | `LinmToast` | warning |

### 5b. Detail `#sc-checkin-detail` · `DES-MOB-CI-DETAIL` (cùng slug · read)

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| detailTitle | Ghi điểm tuần | TopBar title | * | `LinmTopBar` | 17 |
| backCa | Ca | BackButton | * | chevron | `go('patrol-detail')` / hub |
| savedBanner | Đã lưu · {time} | Banner | * | ok | 13 |
| planRow | Điểm KH | ListRow | * | | 13 / ≥16 |
| distRow | Cách điểm | ListRow | * | | 13 / ≥16 |

Toast / modal → kit in-app. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix. Nguồn DA-02 + DA-04 §B.

| Action / zone | Method | Path | In slug `patrol-checkin`? |
|---------------|--------|------|----------------------------|
| Prefill Route / CheckInCount / active | GET | `patrol/sessions` | **yes** — filter «Đang tuần» client P1 |
| Prefill session detail | GET | `patrol/sessions/{id}` | **yes** |
| Submit Lưu / Ghi nhận | POST | `patrol/sessions/{id}/check-ins` | **yes** — CTX Kind E · **GAP-MOB-BFF-01** MISSING controller → P1 local + `patrol-offline` · **cấm** fake 200 |
| GPS / distance / match | — | — | Device · **không** API pin |
| Camera attach | — | — | Device local URI · upload P2 nếu BE media |
| Invent check-in API | — | `patrol-checkin` / dedicated controller invent | **cấm invent** |

**Cấm** `GET/POST patrol-checkin` · DbContext trên Mobile.Bff · app `:5101` · ERP.*. Step 4b **pending SA/TL** (không chạy ở role PO).

Body đề xuất khi SA/TL tạo controller (khớp sheet · **không** fork DTO app-only): `planPointLabel` · `route` · `lat`·`lng`·`accuracyM` · `distanceToPlanM`·`matchOk` · `content` · `photoLocalIds[]`.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| packKind | data-analy `sheet` | **Confirm `sheet`.** Overlay · ≠ hub/list/map full. **Cấm** Grid/Report AC. |
| Match gate | Banner đúng/sai | **Sai điểm → disable Lưu + Ghi nhận + toast chặn.** `DES-MOB-LOC-MISMATCH`. |
| GPS | Prefill ghim | **Live device GPS.** Deny → `DES-MOB-GPS-DENY` reuse. **Cấm** fake lat/lng. |
| POST missing | GAP-MOB-BFF-01 | **P1 local save + enqueue `patrol-offline` + toast.** Stamp GAP · SA/TL T-BE. **Cấm** invent path / fake 200. |
| Pin / map | Sibling entry | **Reuse parents only.** **Cấm** ship pin CTA / map host trên pack này (`GAP-MOB-ACT-02`). |
| Submit / camera / leave / detail | GAP-MOB-ACT-07 | **Cùng slug** — **cấm** enqueue sibling mới. |
| Demo rescan | hash skip | **Cấm** re-scan demo / crawl CTX (`GAP-PO-DEMO-RESCAN-01`). Đọc control-hint + real-data. |
| Android Ảnh label | parity | Design thêm `section-label` Ảnh (iOS SSOT). |

UNCLEAR field = **none** — không AskQuestion field (autoApprove=ON).

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Sheet Ghi điểm tuần | `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET` · iOS + Android | **BottomSheet form** | edit (TextArea + photo) | GET sessions prefill · GPS match · camera · POST check-ins / offline queue · leave modal · toast | `/agent-dev-ios` + `/agent-dev-android` |
| Match banner | `DES-MOB-LOC-MISMATCH` | Banner ok/warn | — | gate primary | same |
| Leave modal | `DES-MOB-LEAVE` | In-app modal | — | discard / keep | same |
| GPS deny | `DES-MOB-GPS-DENY` | In-app modal (reuse) | — | block submit | same |
| Detail read | `#sc-checkin-detail` · `DES-MOB-CI-DETAIL` | TopBar + rows | read | back Ca | same |

**Không** trên pack này: pin CTA · map host · invent check-in path · watermark Gói · attendance form.

Reuse only: `patrol-home` / `patrol-map` / `patrol-pin` (entry/handoff) · `patrol-offline` (queue khi mất sóng / POST missing) · `DES-MOB-GPS-DENY` (deny chrome).

Frame: iOS 390×844 · Android 412×915 · safe area · sheet/modal không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-GPS-01 | Allow | Prefill Định vị + Cách điểm + banner · **cấm** fake coords |
| AC-GPS-02 | Deny | Modal `DES-MOB-GPS-DENY` · **không** submit · **cấm** `UIAlert` / `AlertDialog` |
| AC-GPS-03 | Timeout / unavailable | Toast / giữ sheet · **cấm** fake coords · không crash |
| AC-MATCH-01 | `matchOk=false` | Banner đỏ · disable Lưu + Ghi nhận · toast chặn |
| AC-MATCH-02 | `matchOk=true` | Banner xanh · enable submit |
| AC-CAM-01 | Capture | `#i-camera` → attach PhotoRow · local URI P1 |
| AC-OFF-01 | Offline / POST MISSING | Sheet mở · local queue `patrol-offline` · toast ok · **cấm** fake 200 · **cấm** full-screen block |
| AC-D-03 | Leave dirty | Modal `DES-MOB-LEAVE` · Bỏ thay đổi / Tiếp tục sửa · **trên** sheet (không under) · swipe dirty giữ sheet |
| AC-D-04 | Native alert | **Cấm** mọi system alert · toast/modal in-app only |
| AC-D-05 | Keyboard | TextArea Nội dung · không đè primary / home indicator |
| AC-D-06 | Safe area | Sheet + modal + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-09 | Token | GET/POST Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab | Shell Tab 5 **giữ** · `tabs: none` trên pack · **cấm** invent tab |
| AC-TYP-01 | Typography | Label/banner/toast 13 · field/button ≥16 (`GAP-TYP-01`) |
| AC-SIB-01 | Sibling | **Cấm** ship pin form / map host / invent path |
| AC-F-05 | Dual parity | iOS + Android **cùng** copy · cùng `#i-camera` · Android thêm label Ảnh · **cấm** lệch chrome (`GAP-MOB-ALIGN-01`) |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | Modal `DES-MOB-LEAVE` · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Loc deny | Modal `DES-MOB-GPS-DENY` reuse · **cấm** native alert |
| Sai điểm submit | Toast `Chặn — không đúng điểm kế hoạch` · không đóng sheet |
| Success save | Toast `Đã ghi điểm tuần · …` · đóng sheet / mở detail |
| Sessions fail | Prefill demo SSOT · GPS vẫn chạy |
| POST GAP / offline | Local queue + toast · stamp GAP-MOB-BFF-01 |

## 11. Out of scope (this pack)

- CTA / form **Ghim vị trí hiện tại** (`patrol-pin`) — handoff only
- Map host / basemap / tracks / coverage / kpi (`patrol-map` · Kind E OUT)
- Invent `api/v1/patrol-checkin` · dedicated invent controller ngoài CTX path
- Fake lat/lng · system GPS/camera alert
- Watermark Gói / device label / proto-click tín hiệu
- Chấm công `attendance` · form sự cố
- Start sibling `pending_confirm` / enqueue CTA mới (`GAP-MOB-ACT-06/07`)
- Clone ERP.* · `mfeStdUrl` · `yarn start:std` · Step 4b / migration ở role PO
- Re-scan demo HTML / crawl DemoRoot (`GAP-PO-DEMO-RESCAN-01`)

## 12. KPI (HĐ Gói 1 — action này)

Ghi điểm tuần = sheet hiện trường prefill điểm KH + GPS match gate + nội dung/ảnh + submit (live POST hoặc offline queue). DoD pack: `DES-MOB-PAT-CHECKIN-SHEET` dual + GET sessions + device GPS/camera + leave/match AC — **không** omni-implement pin/map trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-checkin` / **`sheet`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/patrol-checkin/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sheet-checkin` / `#sc-checkin-detail` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Sheet + detail · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack sheet |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse BottomSheet / TextField / TextArea / Primary / Secondary / Toast / camera · `kit_missing_confirm` verify dual map |
| BFF | `patrol-checkin-bff-endpoints.md` · GET sessions live · POST check-ins **GAP-MOB-BFF-01** |
| Real-data | `patrol-checkin-real-data.md` §A+§B+demo rows |
| Open questions | §7 đã chốt — Design **không** vẽ pin form · match gate + leave in-app · Android label Ảnh |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · copy VN đúng HTML (trừ device label) · **cấm** skin Ministry · packet `design-demo-ssot.md` · **cấm** re-scan demo ngoài SSOT đã cite.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | 2026-08-28T19:55:30.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
