# PO — Requirement — patrol-pin (mobile CTA / sheet flow)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO confirm · data-analy đề xuất · CTA → flow ghim) |
| stack | `native_dual` |
| thisAction | **Ghim vị trí hiện tại** `DES-MOB-CI-PIN-HERE` only · **không** gộp form check-in |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_6bd56781` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-pin` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/patrol-pin-control-hint.md` · `patrol-pin-bff-endpoints.md` · `patrol-pin-action-tree.md` · `patrol-pin-real-data.md` · contentHash `sha256:patrol-pin-control-hint-20260821` · bffContentHash `sha256:patrol-pin-mobile-bff-20260821` · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-21T03:17:24.000Z` |
| taskId | `task_6bd56781` |

**Cấm:** gộp `patrol-checkin` form (`GAP-MOB-ACT-02`) · invent `api/v1/patrol-pin` · `POST …/pins` · fake lat/lng · ERP.* · native alert · watermark Gói · device label «iPhone» / «· Android» · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert`.

## 1. Goal

Owner CTA **Ghim vị trí hiện tại** trên hub Tuần đường (+ reuse map): live GPS · toast lý trình + sai số · deny modal in-app · timeout toast · handoff sibling `patrol-checkin` (**không** ship form). Persona Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · `mfeStdUrl`.

**1 action = 1 feature.** Slug `patrol-pin` = CTA `DES-MOB-CI-PIN-HERE` / `pinHereCheckin()`. Form **Ghi điểm tuần** **không** in-scope (`GAP-MOB-ACT-02`).

Entry: hub `#sc-patrol-home` primary pin · map `#sc-patrol-map` overlay pin (`shared_action` reuse owner = pack này).

## 2. changeScope `new_page`

Pack **sheet/CTA** mới theo data-analy (`changeScope=new_page`). Visual SSOT = dual HTML `DES-MOB-CI-PIN-HERE` · `DES-MOB-GPS-DENY` · `pinHereCheckin()` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material).

## 3. DoD (đo được)

1. Hub `#sc-patrol-home` nút **Ghim vị trí hiện tại** (`#i-mappin`) → xin quyền vị trí → fix live → toast **Đã ghim vị trí hiện tại · {route} · ±N m** (route từ active session / demo fallback `QL.1 · Km 1561+134`).
2. Map `#sc-patrol-map` cùng CTA → cùng toast + pin `.here` + camera follow (reuse owner · **cấm** fake lat/lng).
3. Deny → in-app modal `DES-MOB-GPS-DENY` (title **Định vị bị tắt** · body demo · **Sao chép hướng dẫn** / **Để sau**) · **cấm** `UIAlert` / `AlertDialog` hệ thống.
4. Timeout/unavailable → toast `Chưa lấy được vị trí. Thử lại.` (`patrol.map.locTimeout`).
5. Sau ghim thành công → handoff `patrol-checkin` (callback / toast sibling stub nếu sheet chưa ship) · **cấm** fields check-in trên pack này.
6. Kit: `LinmPrimaryButton` · `LinmMapPinGlyph` `#i-mappin` · `LinmToast` · in-app modal · **cấm** raw M3/HIG alert (`GAP-MOB-ACT-05`).
7. BFF: chỉ `GET patrol/sessions` bind Route · GPS device · Step 4b **N/A**.
8. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
9. QA (role sau): Maestro slug `patrol-pin` only · live sim 6.9" + emulator · store PNG `qa/store/patrol-pin` · **cấm** `yarn e2e-qa` web.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-pin.md` | CTA pin · §2 UI · §3 API · sibling |
| CTX-02 | `docs/context/features/patrol.md` | domain sessions |
| CTX-03 | `docs/context/features/patrol-home.md` | parent hub entry CTA |
| CTX-04 | `docs/context/features/patrol-map.md` | map reuse pin surface |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `DES-MOB-CI-PIN-HERE` / `DES-MOB-GPS-DENY` | iOS 390×844 · `pinHereCheckin()` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` cùng DES | Android 412×915 · **cùng copy** |
| DEM-03 | `specs/patrol-pin/ui/prototype/{ios,android}/index.html` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `specs/patrol-pin/ui/html-to-native-map.md` | kit pin/toast/modal **map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-pin-control-hint.md` | controlHint · packKind `sheet` |
| DA-02 | `specs/_data-analy/patrol-pin-bff-endpoints.md` | BFF · `GET patrol/sessions` |
| DA-03 | `specs/_data-analy/patrol-pin-action-tree.md` | 1 CTA + handoff sibling |
| DA-04 | `specs/_data-analy/patrol-pin-real-data.md` | bind Route + accuracy |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** `api/v1/patrol-pin` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmPrimaryButton` / `LinmMapPinGlyph` / `LinmToast` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn dual demo + DA-01. UNCLEAR field = **none**. `tabs: none` — **cấm** invent segment (`GAP-TAB-01` · shell Tab 5 **giữ** khi đứng hub/map).

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| pinHere | Ghim vị trí hiện tại | PrimaryButton | * | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` | Hub + map · `DES-MOB-CI-PIN-HERE` · size ≥16 |
| pinToast | Đã ghim vị trí hiện tại · {route} · ±N m | Toast | * | `LinmToast` | Success sau fix OK · label 13–16 |
| locDenyTitle | Định vị bị tắt | ModalTitle | * | in-app modal | `DES-MOB-GPS-DENY` |
| locDenyBody | Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS. | ModalBody | * | in-app modal | copy demo |
| locDenyCopy | Sao chép hướng dẫn | PrimaryButton | * | `LinmPrimaryButton` | toast hướng dẫn sau copy |
| locDenyLater | Để sau | SecondaryButton | * | `LinmSecondaryButton` | đóng modal |
| locTimeout | Chưa lấy được vị trí. Thử lại. | Toast | * | `LinmToast` | warning · **cấm** fake coords |
| handoffCheckin | (implicit) | Route | — | sibling `patrol-checkin` | Demo `openSheet('checkin')` · **cấm** form trên pack này |

Toast / modal → kit in-app. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action / zone | Method | Path | In slug `patrol-pin`? |
|---------------|--------|------|------------------------|
| Route / active cho toast | GET | `patrol/sessions` | **yes** — filter «Đang tuần» client-side P1 |
| GPS fix | — | — | Device CL / Fused · **không** API pin P1 |
| Persist pin / check-in | POST | `patrol/sessions/{id}/check-ins` | **no** — sibling `patrol-checkin` · **cấm** gọi P1 |
| Invent pin API | — | `patrol-pin` / `…/pins` | **cấm invent** |

**Cấm** `GET/POST patrol-pin` · `PatrolPinController` · DbContext trên Mobile.Bff · app `:5101`. Step 4b **N/A** (list live · GPS device).

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Check-in form | Demo `openSheet('checkin')` | **Handoff only.** **Cấm** ship form Ghi điểm tuần trên pack này (`GAP-MOB-ACT-02`). |
| GPS pin live | Demo `pinHereCheckin` | **Live loc + toast route/±m.** Map: pin `.here` + follow. **Cấm** fake lat/lng. |
| Deny UX | System vs in-app | **In-app modal `DES-MOB-GPS-DENY`.** **Cấm** native alert. |
| packKind | data-analy `sheet` | **Confirm `sheet`.** CTA/flow · ≠ hub/list/map full. **Cấm** Grid/Report AC. |
| Sibling check-in | GAP-MOB-ACT-06/07 | **Không** start · **cấm** enqueue thêm · handoff only. Deny/timeout/toast = **cùng slug**. |
| Prior full_pipeline | `task_5b298c0a` | PO roleOnly **chốt requirement** · không re-ship code turn này · VERIFY Dev khi tới lượt. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| CTA hub + map | `DES-MOB-CI-PIN-HERE` · `#sc-patrol-home` / `#sc-patrol-map` · iOS + Android | **Primary CTA + toast + deny modal** (sheet flow · không full page mới) | none (không form) | GET sessions · live GPS · toast · deny modal · map pin reuse | `/agent-dev-ios` + `/agent-dev-android` |
| Deny modal | `DES-MOB-GPS-DENY` | In-app modal | none | Copy hướng dẫn / Để sau | same |

**Không** trên pack này: check-in sheet/form · POST check-ins · invent pin API · watermark Gói.

Reuse only: `patrol-home` (hub surface) · `patrol-map` (map pin reuse) · handoff `patrol-checkin` (không implement).

Frame: iOS 390×844 · Android 412×915 · safe area · CTA/modal không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-GPS-01 | Allow | Toast success có route + ±m · **cấm** fake coords |
| AC-GPS-02 | Deny | Modal `DES-MOB-GPS-DENY` · Sao chép hướng dẫn / Để sau · **cấm** `UIAlert` / `AlertDialog` |
| AC-GPS-03 | Timeout | Toast timeout · **cấm** fake coords · không crash |
| AC-OFF-01 | Offline | Vẫn ghim được (GPS local) · GET fail → demo route toast · **cấm** full-screen block |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** mọi system alert · toast/modal in-app only |
| AC-D-05 | Keyboard | **N/A** — không input |
| AC-D-06 | Safe area | CTA + modal + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-09 | Token | GET sessions Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab | Shell Tab 5 **giữ** · `tabs: none` trên pack · **cấm** invent tab |
| AC-TYP-01 | Typography | Label/toast 13 · button ≥16 (`GAP-TYP-01`) |
| AC-SIB-01 | Sibling | **Cấm** ship form Ghi điểm tuần |
| AC-F-05 | Dual parity | iOS + Android **cùng** copy · cùng `#i-mappin` · **cấm** lệch chrome (`GAP-MOB-ALIGN-01`) |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Loc deny | Modal `DES-MOB-GPS-DENY` · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Loc timeout | Toast in-app |
| Success pin | Toast §3.1 · handoff sibling (không confirm leave) |
| Sessions fail | Demo route fallback · GPS vẫn chạy |

## 11. Out of scope (this pack)

- Form / sheet **Ghi điểm tuần** (`patrol-checkin`) — handoff only
- Invent `api/v1/patrol-pin` · `POST …/pins` · Kind E check-ins P1 trên pack này
- Fake lat/lng · system GPS alert
- Watermark Gói / device label / proto-click tín hiệu
- Start sibling check-in `pending_confirm` / enqueue thêm
- Clone PatrolSessionsController · ERP.* · `mfeStdUrl` · `yarn start:std`

## 12. KPI (HĐ Gói 1 — action này)

Ghim vị trí hiện tại = CTA hiện trường lấy loc live + toast lý trình/sai số + deny/timeout in-app từ hub/map. DoD pack: `DES-MOB-CI-PIN-HERE` dual + GET sessions + device GPS — **không** omni-implement check-in form trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-pin` / **`sheet`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/patrol-pin/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `DES-MOB-CI-PIN-HERE` / `DES-MOB-GPS-DENY` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | CTA hub+map · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack sheet/CTA |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse `LinmPrimaryButton` / `LinmMapPinGlyph` / `LinmToast` / secondary · `kit_missing_confirm` verify dual map |
| BFF | `patrol-pin-bff-endpoints.md` · **chỉ** `GET patrol/sessions` |
| Open questions | §7 đã chốt — Design **không** vẽ form check-in · deny = in-app modal |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · copy VN đúng HTML (trừ skip check-in form / device label) · **cấm** skin Ministry · packet `design-demo-ssot.md`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | 2026-08-21T03:17:24.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-pin-control-hint-20260821 |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260821 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
