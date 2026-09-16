# PO — Requirement — patrol-pin (mobile CTA / sheet flow)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại |
| this role | `po` · `/agent-po-mobile` |
| changeScope | **`edit_page`** |
| packKind | **`sheet`** (PO confirm · data-analy đề xuất · CTA → flow ghim · handoff check-in sheet sibling) |
| stack | `native_dual` |
| thisAction | **Ghim vị trí hiện tại** `DES-MOB-CI-PIN-HERE` only · **không** gộp form check-in |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_cf3ce7eb` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` · GAP-MOB-PIN-PERSIST-01 |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-pin` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · compact `handoff/data_analy-compact.md` · `specs/_data-analy/patrol-pin-{control-hint,real-data,bff-endpoints,action-tree}.md` · contentHash `sha256:patrol-pin-control-hint-20260912-persist` · bffContentHash `sha256:patrol-pin-mobile-bff-20260912-persist` · **hash skip** · **no Excel** · **cấm** re-scan demo |
| shipped | prior `task_5b298c0a` / `task_6bd56781` — GPS+toast+deny · **không** persist server |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-12T12:00:00.000Z` |
| taskId | `task_cf3ce7eb` |

**Cấm:** gộp `patrol-checkin` form (`GAP-MOB-ACT-02`) · invent `api/v1/patrol-pin` · `POST …/pins` · fake lat/lng · pin auto-POST (thiếu PlanPointLabel/MatchOk) · ERP.* · native alert · watermark Gói · device label «iPhone» / «· Android» · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · re-scan demo (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Owner CTA **Ghim vị trí hiện tại** trên hub Tuần đường (+ reuse map): live GPS · toast lý trình + sai số · deny modal in-app · timeout toast · **real handoff** sibling `patrol-checkin` với `sessionId` + `LocationFix` (persist qua sibling POST) · **không** ship form trên pack này. Persona Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · `mfeStdUrl`.

**1 action = 1 feature.** Slug `patrol-pin` = CTA `DES-MOB-CI-PIN-HERE` / `pinHereCheckin()`. Form **Ghi điểm tuần** **không** in-scope (`GAP-MOB-ACT-02`). Persist owner = sibling `patrol-checkin` POST `patrol/sessions/{id}/check-ins` (BE Live `CreateCheckIn`).

Entry: hub `#sc-patrol-home` primary pin · map `#sc-patrol-map` overlay pin (`shared_action` reuse owner = pack này).

## 2. changeScope `edit_page`

Pack **sheet/CTA** đã ship (GPS+toast) — **edit** DoD persist theo GAP-MOB-PIN-PERSIST-01. Visual SSOT **giữ** dual HTML `DES-MOB-CI-PIN-HERE` · `DES-MOB-GPS-DENY` · `pinHereCheckin()` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material). Design **keep** layout trừ khi PO yêu cầu đổi UI.

### § Delta Current vs New (GAP-MOB-PIN-PERSIST-01)

| | Current (shipped) | New (DoD) |
|--|-------------------|-----------|
| GPS | Live device · deny modal · timeout toast | **giữ** · **cấm** fake |
| Toast pin | `Đã ghim… · {route} · ±N m` sau fix OK | **giữ** |
| Server write | **không** — chỉ GET sessions + toast | **bắt buộc** ghi vị trí vào ca Đang tuần |
| Persist path | — | **handoff** `patrol-checkin` với `sessionId` + `LocationFix` (lat/lng/accuracyM) · sibling **POST** `patrol/sessions/{id}/check-ins` (BE Live) |
| Handoff | stub toast «Handoff · Ghi điểm tuần» | **real** openSheet / navigate sibling · **cấm** form trên pack pin |
| Alt | — | SA **không** chọn pin auto-POST khi thiếu PlanPointLabel / MatchOk |
| Offline | toast + local GPS | toast + **queue** handoff payload · sync khi online (sibling / offline pack) |

## 3. DoD (đo được)

1. Hub `#sc-patrol-home` nút **Ghim vị trí hiện tại** (`#i-mappin`) → xin quyền vị trí → fix live → toast **Đã ghim vị trí hiện tại · {route} · ±N m** (route từ active session / empty-route copy live khi thiếu ca).
2. Map `#sc-patrol-map` cùng CTA → cùng toast + pin `.here` + camera follow (reuse owner · **cấm** fake lat/lng).
3. Deny → in-app modal `DES-MOB-GPS-DENY` (title **Định vị bị tắt** · body demo · **Sao chép hướng dẫn** / **Để sau**) · **không** handoff · **cấm** `UIAlert` / `AlertDialog` hệ thống.
4. Timeout/unavailable → toast `Chưa lấy được vị trí. Thử lại.` · **không** handoff.
5. GPS OK + active session → toast pin → **real** handoff `patrol-checkin` với payload `sessionId` + `LocationFix` `{lat,lng,accuracyM}` (+ route prefill) · **cấm** fields check-in / MatchOk UI trên pack này.
6. Persist = sibling POST `patrol/sessions/{id}/check-ins` · **cấm** invent `/pins` · **cấm** pin auto-POST.
7. Offline: toast pin vẫn OK nếu GPS OK · queue handoff payload · sync khi online (owner sibling/offline).
8. Kit: `LinmPrimaryButton` · `LinmMapPinGlyph` `#i-mappin` · `LinmToast` · in-app modal · **cấm** raw M3/HIG alert (`GAP-MOB-ACT-05`).
9. BFF in-slug: `GET patrol/sessions` · GPS device · POST check-ins = sibling · Step 4b **N/A**.
10. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
11. QA (role sau): Maestro slug `patrol-pin` only · live sim 6.9" + emulator · store PNG `qa/store/patrol-pin` · **cấm** `yarn e2e-qa` web.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-pin.md` | CTA pin · §2 UI · §3 API · sibling |
| CTX-02 | `docs/context/features/patrol.md` | domain sessions |
| CTX-03 | `docs/context/features/patrol-home.md` | parent hub entry CTA |
| CTX-04 | `docs/context/features/patrol-map.md` | map reuse pin surface |
| CTX-05 | `docs/context/features/patrol-checkin.md` | sibling persist owner |
| DEM-01 | `specs/patrol-pin/ui/prototype/ios/index.html` `DES-MOB-CI-PIN-HERE` / `DES-MOB-GPS-DENY` | iOS 390×844 · `pinHereCheckin()` · **hash skip — không re-scan** |
| DEM-02 | `specs/patrol-pin/ui/prototype/android/index.html` cùng DES | Android 412×915 · **cùng copy** |
| MAP | `specs/patrol-pin/ui/html-to-native-map.md` | kit pin/toast/modal **map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-pin-control-hint.md` | controlHint · packKind `sheet` · § Delta |
| DA-02 | `specs/_data-analy/patrol-pin-bff-endpoints.md` | BFF · GET sessions · POST check-ins sibling |
| DA-03 | `specs/_data-analy/patrol-pin-action-tree.md` | 1 CTA + handoff sibling |
| DA-04 | `specs/_data-analy/patrol-pin-real-data.md` | §A+§B bind Route + LocationFix + persist |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** `api/v1/patrol-pin` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmPrimaryButton` / `LinmMapPinGlyph` / `LinmToast` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn DA-01 + DEM (hash skip copy). UNCLEAR field = **none**. `tabs: none` — **cấm** invent segment (`GAP-TAB-01` · shell Tab 5 **giữ** khi đứng hub/map).

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| pinHere | Ghim vị trí hiện tại | PrimaryButton | * | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` | Hub + map · `DES-MOB-CI-PIN-HERE` · size ≥16 |
| pinToast | Đã ghim vị trí hiện tại · {route} · ±N m | Toast | * | `LinmToast` | Success sau fix OK · **trước** handoff · label 13–16 |
| locDenyTitle | Định vị bị tắt | ModalTitle | * | in-app modal | `DES-MOB-GPS-DENY` |
| locDenyBody | Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS. | ModalBody | * | in-app modal | copy demo |
| locDenyCopy | Sao chép hướng dẫn | PrimaryButton | * | `LinmPrimaryButton` | toast hướng dẫn sau copy |
| locDenyLater | Để sau | SecondaryButton | * | `LinmSecondaryButton` | đóng modal |
| locTimeout | Chưa lấy được vị trí. Thử lại. | Toast | * | `LinmToast` | warning · **không** handoff · **cấm** fake coords |
| handoffCheckin | Ghi điểm tuần | Route / Sheet | — | sibling `patrol-checkin` | **real** openSheet/navigate · payload `sessionId`+`LocationFix` · **cấm** form trên pack này |
| persistGate | (implicit) | — | — | — | Persist = sibling POST check-ins · **cấm** invent `/pins` · **cấm** auto-POST |

Toast / modal → kit in-app. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action / zone | Method | Path | In slug `patrol-pin`? |
|---------------|--------|------|------------------------|
| Route / active cho toast + sessionId | GET | `patrol/sessions` | **yes** — filter «Đang tuần» client-side |
| GPS fix | — | — | Device CL / Fused · **không** API pin |
| Persist ghim / check-in | POST | `patrol/sessions/{id}/check-ins` | **no** — sibling `patrol-checkin` owner · pin **handoff only** |
| Invent pin API | — | `patrol-pin` / `…/pins` | **cấm invent** |
| Pin auto-POST | POST | same check-ins | **cấm** từ pack pin (BE cần PlanPointLabel+MatchOk) |

**Cấm** `GET/POST patrol-pin` · `PatrolPinController` · DbContext trên Mobile.Bff · app `:5101`. Step 4b **N/A**.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Persist path | Toast-only vs server write | **Handoff + sibling POST.** Gap GAP-MOB-PIN-PERSIST-01. **Cấm** invent `/pins`. |
| Pin auto-POST | Direct POST từ pin | **Cấm.** BE yêu cầu PlanPointLabel+MatchOk — SA không chọn auto-POST. |
| Check-in form | Demo `openSheet('checkin')` | **Handoff only.** **Cấm** ship form trên pack này (`GAP-MOB-ACT-02`). |
| GPS pin live | Demo `pinHereCheckin` | **Live loc + toast route/±m.** Map: pin `.here` + follow. **Cấm** fake lat/lng. |
| Deny UX | System vs in-app | **In-app modal `DES-MOB-GPS-DENY`.** **Cấm** native alert. |
| packKind | data-analy `sheet` | **Confirm `sheet`.** CTA/flow · ≠ hub/list/map full. **Cấm** Grid/Report AC. |
| Design layout | Keep vs redesign | **Keep** dual prototype (designConfirm prior keep) trừ khi UX handoff stub → real cần micro-copy. |
| Offline | Block vs queue | Toast pin + **queue** handoff payload · sync khi online. |
| Sibling check-in | GAP-MOB-ACT-06/07 | **Không** start sibling pipeline turn này · handoff contract only. Deny/timeout/toast = **cùng slug**. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| CTA hub + map | `DES-MOB-CI-PIN-HERE` · `#sc-patrol-home` / `#sc-patrol-map` · iOS + Android | **Primary CTA + toast + deny modal + real handoff** (sheet flow · không full page mới) | none (không form) | GET sessions · live GPS · toast · deny modal · map pin reuse · handoff payload | `/agent-dev-ios` + `/agent-dev-android` |
| Deny modal | `DES-MOB-GPS-DENY` | In-app modal | none | Copy hướng dẫn / Để sau · **không** handoff | same |

**Không** trên pack này: check-in sheet/form · POST check-ins · invent pin API · watermark Gói · MatchOk UI.

Reuse only: `patrol-home` (hub surface) · `patrol-map` (map pin reuse) · handoff `patrol-checkin` (không implement form).

Frame: iOS 390×844 · Android 412×915 · safe area · CTA/modal không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-GPS-01 | Allow + active session | Toast success có route + ±m · rồi **real** handoff `sessionId`+`LocationFix` · **cấm** fake coords |
| AC-GPS-01b | Allow · no active session | Toast pin / empty-route copy · **không** POST · **không** bắt buộc openSheet nếu thiếu sessionId |
| AC-GPS-02 | Deny | Modal `DES-MOB-GPS-DENY` · Sao chép hướng dẫn / Để sau · **không** handoff · **cấm** `UIAlert` / `AlertDialog` |
| AC-GPS-03 | Timeout | Toast timeout · **không** handoff · **cấm** fake coords · không crash |
| AC-OFF-01 | Offline | Vẫn ghim (GPS local) · toast pin · **queue** handoff payload · **cấm** full-screen block |
| AC-PERSIST-01 | Persist ownership | Pin **không** gọi POST check-ins · sibling owner · **cấm** invent `/pins` · **cấm** auto-POST |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** mọi system alert · toast/modal in-app only |
| AC-D-05 | Keyboard | **N/A** — không input |
| AC-D-06 | Safe area | CTA + modal + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-09 | Token | GET sessions Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab | Shell Tab 5 **giữ** · `tabs: none` trên pack · **cấm** invent tab |
| AC-TYP-01 | Typography | Label/toast 13 · button ≥16 (`GAP-TYP-01`) |
| AC-SIB-01 | Sibling | **Cấm** ship form Ghi điểm tuần · toast «Đã ghi điểm tuần» = sibling |
| AC-F-05 | Dual parity | iOS + Android **cùng** copy · cùng `#i-mappin` · **cấm** lệch chrome (`GAP-MOB-ALIGN-01`) |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Loc deny | Modal `DES-MOB-GPS-DENY` · **cấm** native alert (`GAP-PO-LEAVE-01`) · **không** handoff |
| Loc timeout | Toast in-app · **không** handoff |
| Success pin | Toast §3.1 → real handoff sibling (không confirm leave) |
| Sessions fail / empty | Toast pin vẫn OK nếu GPS OK · không POST · empty-route copy live |
| Offline | Toast pin · queue handoff |

## 11. Out of scope (this pack)

- Form / sheet **Ghi điểm tuần** (`patrol-checkin`) — handoff contract only
- Invent `api/v1/patrol-pin` · `POST …/pins` · pin auto-POST check-ins
- Fake lat/lng · system GPS alert
- Watermark Gói / device label / proto-click tín hiệu
- Start sibling check-in full pipeline / enqueue thêm turn này
- Clone PatrolSessionsController · ERP.* · `mfeStdUrl` · `yarn start:std`
- Re-scan demo HTML / crawl DemoRoot (`GAP-PO-DEMO-RESCAN-01`)

## 12. KPI (HĐ Gói 1 — action này · Delta persist)

Ghim vị trí hiện tại = CTA hiện trường lấy loc live + toast lý trình/sai số + deny/timeout in-app từ hub/map + **đưa LocationFix vào ca Đang tuần** qua handoff sibling (POST check-ins). DoD pack: dual DES + GET sessions + device GPS + real handoff — **không** omni-implement check-in form trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-pin` / **`sheet`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| changeScope | **`edit_page`** · § Delta persist |
| STATUS | `specs/patrol-pin/STATUS.md` |
| Context / Demo / DI | CTX-01…05 · DEM dual pack prototype · no Excel · hash skip |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | CTA hub+map · Primary CTA + toast + deny + real handoff · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack sheet/CTA |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html` + reviewUrl **cả hai** · **keep** prior unless micro-copy handoff |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` (edit: verify handoff stub→real) |
| Kit | reuse `LinmPrimaryButton` / `LinmMapPinGlyph` / `LinmToast` / secondary · `kit_missing_confirm` verify dual map |
| BFF | DA-02 · GET `patrol/sessions` in-slug · POST check-ins = sibling |
| Open questions | §7 đã chốt — Design **không** vẽ form check-in · deny = in-app · handoff = real openSheet |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po · GAP-PKT-ROLE-01) |
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
| generatedAt | 2026-09-12T12:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-pin-control-hint-20260912-persist |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260912-persist |
| gapId | GAP-MOB-PIN-PERSIST-01 |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked contentHash=sha256:patrol-pin-control-hint-20260912-persist -->
