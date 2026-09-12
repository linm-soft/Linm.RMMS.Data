# PO — Requirement — patrol-checkin (mobile sheet)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `edit_page` |
| packKind | **`sheet`** (confirmed · giữ) |
| stack | `native_dual` |
| thisAction | **Ghi điểm tuần** `DES-MOB-PAT-CHECKIN-SHEET` only · **không** gộp pin CTA / map |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_07ab9a33` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-checkin` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** `task_7e0ff15b` · `_data-analy/patrol-checkin-{control-hint,bff-endpoints,real-data,action-tree}.md` · contentHash `sha256:patrol-checkin-control-hint-20260912-edit` · compact `handoff/data_analy-compact.md` · **hash skip — cấm re-scan demo** |
| keep | UI zones / kit / leave / detail · dual prototype · Screens table (không redesign) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-12T12:50:00.000Z` |
| taskId | `task_07ab9a33` |

**Cấm:** gộp `patrol-pin` CTA/form (`GAP-MOB-ACT-02`) · invent `api/v1/patrol-checkin` · invent `api/v1/mobile-files` · fake lat/lng · plan=GPS làm SSOT · ERP.* · native alert · watermark Gói · device label · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert` · re-scan demo HTML (`GAP-PO-DEMO-RESCAN-01`).

## 0. § Delta Current vs New (`edit_page` · PO confirm)

| ID | Current (native live) | New (DoD edit) | PO decision |
|----|----------------------|----------------|-------------|
| GAP-MOB-CI-PHOTO-UP-01 | PhotoRow `photoLocalIds` UUID local · chưa FileService | Capture → upload `files/*` (init→PUT→commit) · body = `attachmentId[]` · preview `GET /files/{id}/object` JWT | **Confirm.** Local UUID **không** đủ DoD. GAP-MOB-BFF-FILE-01 nếu NuGet Mobile.Bff thiếu → queue offline ảnh · **cấm** fake 200 upload. |
| GAP-MOB-CI-PLAN-BE-01 | `planLat/planLng` = GPS → distance≈0 · banner luôn đúng | Đối soát vs **plan-points BE khi có** · haversine nearest · `matchOk` thật · **cấm** gán plan=GPS SSOT | **Confirm.** Path Kind E `GET …/plan-points` — SA chốt · **cấm** invent path khác DOMAIN-MAP. MISSING → §E interim (label session · stamp GAP · **không** tuyên bố đúng điểm từ plan=GPS). |
| GAP-MOB-CI-FAKE-GPS-01 | Live GPS OK (cleanup_mock) | Giữ live GPS · **cấm** restore fake / demo Phước Dinh bind live | **Confirm.** Demo rows chỉ prototype SSOT. |
| GAP-MOB-BFF-01 | Prior POST missing | POST check-ins **live** (analy) | **Confirm closed** cho POST · body field photo = `attachmentId[]` (không chỉ `photoLocalIds`). |
| — keep | Sheet zones / VN / kit / leave / detail | **Không** đổi controlHint UI | **Confirm keep** · Design dual giữ · delta = data/API bind only. |

**OUT pack:** web Kind B · tracks/coverage/kpi · attendance · invent plan-points ngoài DOMAIN-MAP.

## 1. Goal

Sheet **Ghi điểm tuần** native dual: prefill điểm KH (BE plan khi có) / tuyến·lý trình / **live GPS** ghim · banner đúng/sai vs **plan BE** · Nội dung + ảnh **FileService** · Lưu / Ghi nhận · leave · toast. Persona Tuần đường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · `mfeStdUrl`.

**1 action = 1 feature.** Slug = `#sheet-checkin` `DES-MOB-PAT-CHECKIN-SHEET` (+ read `#sc-checkin-detail`). Pin/map **không** in-scope.

Entry: `patrol-home` / `patrol-map` CTA · `patrol-pin` `openSheet('checkin')` (reuse · **không** enqueue sibling).

## 2. changeScope `edit_page`

Pack **sheet** đã ship · edit = bind FileService + plan-points thật. Visual SSOT = dual HTML giữ zone ids (`#sheet-checkin` · `#sc-checkin-detail` · `DES-MOB-LOC-MISMATCH` · `DES-MOB-LEAVE` · `DES-MOB-GPS-DENY`). Frame iOS 390×844 · Android 412×915 · Tab 5 shell giữ (`GAP-TAB-01` · `tabs: none`).

## 3. DoD (đo được)

1. Dual native sheet **Ghi điểm tuần** giữ zones/kit §5 — **không** redesign.
2. Prefill **Tuyến / lý trình** từ `GET patrol/sessions` (Đang tuần). **Điểm kế hoạch**: label+coords từ `GET …/plan-points` **khi live** · else label session Route/Note · **cấm** invent coords · **cấm** plan=GPS SSOT.
3. **Định vị ghim** = live device GPS only. **Cách điểm KH** + banner = haversine(GPS, **plan BE**) khi plan live · `DES-MOB-LOC-MISMATCH`. Plan MISSING → stamp GAP-MOB-CI-PLAN-BE-01 · **không** luôn xanh từ plan=GPS.
4. `matchOk=false` (khi có plan BE) → disable Lưu + Ghi nhận · toast **Chặn — không đúng điểm kế hoạch**.
5. GPS deny → `DES-MOB-GPS-DENY` · **không** submit · **cấm** fake · **cấm** system alert.
6. PhotoRow + `#i-camera` → capture → **FileService** init/PUT/commit → `attachmentId[]` trên POST · detail preview `GET files/{id}/object`. File BFF MISSING → GAP-MOB-BFF-FILE-01 · queue offline · **cấm** fake 200.
7. Submit khi gate OK: POST `patrol/sessions/{id}/check-ins` **live** · body gồm `attachmentId[]` · fail → enqueue `patrol-offline` · **cấm** fake 200.
8. Dirty leave → `DES-MOB-LEAVE` · **cấm** native alert.
9. Detail `#sc-checkin-detail`: banner Đã lưu · rows · photos qua attachmentId khi có.
10. Kit giữ · **cấm** raw M3/HIG alert (`GAP-MOB-ACT-05`).
11. App chỉ `{BffPrefix}` · Step 4b plan-points **pending SA/TL** — **cấm** PO migration / Step 4b.
12. Dev sau: iOS `xcodegen`+`xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` — **cấm** `yarn start:std`.
13. QA sau: Maestro `patrol-checkin` · live sim 6.9"+emulator · store PNG — **cấm** `yarn e2e-qa` web.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-checkin.md` | sheet · API |
| CTX-02 | `docs/context/features/patrol.md` | Kind E · plan-points |
| CTX-03 | `docs/context/features/mobile-bff-file.md` | FileService sibling |
| CTX-04 | `docs/context/features/patrol-home.md` · `patrol-map.md` · `patrol-pin.md` | entry / handoff |
| DEM | `specs/patrol-checkin/ui/prototype/{ios,android}/index.html` | dual · **giữ zone** · hash skip |
| MAP | `specs/patrol-checkin/ui/html-to-native-map.md` | kit map dual |
| DI-01 | — | **no Excel** |
| DA-01…04 | `specs/_data-analy/patrol-checkin-*.md` | hash `20260912-edit` |
| SCAN | — | **hash skip** · `GAP-PO-DEMO-RESCAN-01` |
| IOS / AND / BFF / BE | Mobile.iOS · Mobile.Android · Mobile.Bff · WebService | **cấm ERP.*** · **cấm** invent path |

## 5. controlHint (PO chốt — **giữ** UI · delta bind)

Nguồn DA-01 + DA-04. UNCLEAR = **none**. `tabs: none`.

### 5a. Sheet `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET`

| Field | VN | controlHint | Required | Kit | Notes (edit bind) |
|-------|----|-------------|----------|-----|-------------------|
| sheetTitle | Ghi điểm tuần | SheetTitle | * | `LinmBottomSheet` | 17 |
| navCancel | Hủy | TextButton | * | leading | → `DES-MOB-LEAVE` |
| navSave | Lưu | TextButton | * | trailing bold | submit · gate match |
| matchBanner | Đúng/Sai điểm · {d} m · ±{a} m | Banner | * | ok/warn | vs **BE plan** khi có · `DES-MOB-LOC-MISMATCH` |
| planPoint | Điểm kế hoạch | Text (readonly) | * | `LinmTextField` | BE plan-points / session · **không** GPS SSOT |
| routeChainage | Tuyến / lý trình | Text (readonly) | * | `LinmTextField` | `Route` session |
| gpsPinned | Định vị ghim tự động | Text (readonly) | * | `LinmTextField` | **live GPS only** |
| distPlan | Cách điểm KH | Text (readonly) | * | `LinmTextField` | haversine vs plan BE |
| content | Nội dung | TextArea | — | `LinmTextArea` | |
| photos | Ảnh | PhotoRow | — | + `#i-camera` | upload → `attachmentId` |
| addPhoto | (camera) | CameraButton | — | `#i-camera` | capture + file commit |
| btnSave | Ghi nhận điểm tuần | PrimaryButton | * | `LinmPrimaryButton` | chặn khi `matchOk=false` |
| btnCancelFooter | Hủy | SecondaryButton | * | `LinmSecondaryButton` | |
| leave* | Bỏ thay đổi? | Modal | * | in-app | `DES-MOB-LEAVE` |
| toastOk / toastBlock | … | Toast | * | `LinmToast` | |

### 5b. Detail `#sc-checkin-detail` · `DES-MOB-CI-DETAIL`

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| detailTitle | Ghi điểm tuần | TopBar | `LinmTopBar` | |
| savedBanner / planRow / distRow | … | Banner / ListRow | | |
| photos | Ảnh đã lưu | PhotoRow | | preview `GET files/{id}/object` khi có `attachmentId` |

## 6. BFF (PO chốt — **cấm** invent)

App `{BffBase}/mobile-bff/api/v1`. Nguồn DA compact + real-data §B.

| Action / zone | Method | Path | In slug? |
|---------------|--------|------|----------|
| Prefill Route / active | GET | `patrol/sessions` | **yes** |
| Prefill session | GET | `patrol/sessions/{id}` | **yes** |
| Plan points (match source) | GET | `patrol/sessions/{id}/plan-points` | **yes** khi live · **GAP-MOB-CI-PLAN-BE-01** · SA chốt Kind E · **cấm** invent |
| Submit | POST | `patrol/sessions/{id}/check-ins` | **yes** · **live** · body `attachmentId[]` |
| File upload | init/PUT/commit | `files/*` | **yes** · sibling FileService · GAP-MOB-BFF-FILE-01? |
| File preview | GET | `files/{id}/object` | **yes** detail |
| GPS / distance | — | Device + plan BE | **cấm** plan=GPS |
| Invent | — | `patrol-checkin` / `mobile-files` | **cấm** |

Body POST (SA/TL align): `planPointLabel` · `route` · `lat`·`lng`·`accuracyM` · `distanceToPlanM`·`matchOk` · `content` · **`attachmentId[]`** (FileService · supersede local-only SSOT).

Step 4b plan-points **pending SA/TL** — **cấm** PO chạy.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| packKind | sheet | **Confirm keep `sheet`.** |
| changeScope | edit_page | **Confirm.** Delta photo+plan only · giữ UI. |
| Photo DoD | FileService | **Confirm GAP-MOB-CI-PHOTO-UP-01.** Local UUID ≠ done. |
| Plan match | BE plan-points | **Confirm GAP-MOB-CI-PLAN-BE-01.** **Cấm** plan=GPS SSOT. MISSING → interim §E stamp GAP. |
| Fake GPS | restore demo | **Cấm** (`GAP-MOB-CI-FAKE-GPS-01`). |
| File BFF missing | NuGet | GAP-MOB-BFF-FILE-01 · offline queue · **cấm** fake 200. |
| Match gate | sai điểm | Disable Lưu+Ghi nhận + toast (khi plan BE live). |
| Pin / map / sibling | | Reuse parents only · `GAP-MOB-ACT-02/07`. |
| Demo rescan | hash skip | **Cấm** (`GAP-PO-DEMO-RESCAN-01`). |

UNCLEAR = **none**.

## 8. Screens (REQUIRED — giữ)

| Surface | Demo | Pattern | FormMode | Actions **this** feature | `devSlash` |
|---------|------|---------|----------|--------------------------|------------|
| Sheet Ghi điểm tuần | `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET` | BottomSheet form | edit | GET sessions · GET plan-points (khi live) · GPS match · files upload · POST check-ins / offline · leave · toast | `/agent-dev-ios` + `/agent-dev-android` |
| Match banner | `DES-MOB-LOC-MISMATCH` | Banner | — | gate primary vs BE plan | same |
| Leave / GPS deny | `DES-MOB-LEAVE` · `DES-MOB-GPS-DENY` | Modal | — | discard / block | same |
| Detail read | `#sc-checkin-detail` · `DES-MOB-CI-DETAIL` | TopBar + rows | read | file preview · back Ca | same |

**Không** trên pack: pin CTA · map · invent path · watermark · attendance.

Reuse: `patrol-home` / `patrol-map` / `patrol-pin` · `patrol-offline` · `mobile-bff-file` · `DES-MOB-GPS-DENY`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-GPS-01 | Allow | Prefill Định vị · **cấm** fake |
| AC-GPS-02 | Deny | `DES-MOB-GPS-DENY` · **không** submit · **cấm** system alert |
| AC-GPS-03 | Timeout | Toast / giữ sheet · **cấm** fake |
| AC-MATCH-01 | `matchOk=false` (plan live) | Banner đỏ · disable submit · toast chặn |
| AC-MATCH-02 | `matchOk=true` | Banner xanh · enable |
| AC-MATCH-03 | plan-points MISSING | Stamp GAP-MOB-CI-PLAN-BE-01 · **không** pretend đúng điểm từ plan=GPS |
| AC-CAM-01 | Capture | `#i-camera` → FileService commit → `attachmentId` trên PhotoRow |
| AC-FILE-01 | File BFF MISSING | GAP-MOB-BFF-FILE-01 · queue offline · **cấm** fake 200 |
| AC-OFF-01 | Offline / POST fail | Queue `patrol-offline` · toast · **cấm** fake 200 |
| AC-D-03 | Leave dirty | `DES-MOB-LEAVE` · **cấm** native alert |
| AC-D-04…10 | alert / keyboard / safe / token / tab | Giữ prior · kit in-app · Bearer · Tab 5 giữ |
| AC-TYP-01 | Typography | 13 / ≥16 |
| AC-SIB-01 | Sibling | **Cấm** pin/map/invent |
| AC-F-05 | Dual parity | Cùng copy · `#i-camera` |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | `DES-MOB-LEAVE` · **cấm** native alert |
| Loc deny | `DES-MOB-GPS-DENY` |
| Sai điểm | Toast chặn · không đóng sheet |
| Success | Toast Đã ghi · đóng / detail |
| Plan MISSING | Stamp GAP · không xanh giả từ plan=GPS |
| File / POST fail | Offline queue · stamp GAP · **cấm** fake 200 |

## 11. Out of scope

- Pin CTA/form · map · tracks/coverage/kpi · attendance
- Invent `patrol-checkin` / `mobile-files` path
- Fake lat/lng · plan=GPS SSOT · system alert · watermark
- ERP.* · `mfeStdUrl` · `yarn start:std` · Step 4b / e2e ở role PO
- Re-scan demo (`GAP-PO-DEMO-RESCAN-01`) · redesign zone/kit

## 12. KPI

Edit DoD = FileService `attachmentId` trên check-in + match thật vs BE plan-points khi live · giữ sheet UX đã ship.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-checkin` / **`sheet`** |
| changeScope | `edit_page` · **giữ** dual mock · delta bind only |
| phase_from / phase_to | po **confirmed** → design pending (delta confirm) |
| STATUS | `specs/patrol-checkin/STATUS.md` |
| controlHint / UNCLEAR | §5 giữ · none |
| Screens / `devSlash` | Sheet + detail · `/agent-dev-ios` + `/agent-dev-android` |
| peerStdUrl | **cấm** `mfeStdUrl` · dual `file://…/prototype/{ios,android}/index.html` |
| DoD edit note | Photo FileService · plan BE · **cấm** fake GPS · Design **không** đổi zone ids |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON queued QA · **cấm** e2e ở PO |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-12T12:50:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260912-edit |
| realDataHash | sha256:patrol-checkin-real-data-20260912-edit |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
