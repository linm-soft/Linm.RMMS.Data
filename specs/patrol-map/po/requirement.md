# PO — Requirement — patrol-map (mobile map)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| title | [Mobile] Bản đồ ca |
| this role | `po` · `/agent-po-mobile` |
| changeScope | `new_page` |
| packKind | **`map`** (PO confirm · data-analy đề xuất) |
| stack | `native_dual` |
| thisAction | **Bản đồ ca** `#sc-patrol-map` only · push từ hub · **không** gộp check-in sheet |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_58c8b2b2` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-map` · **cấm** `yarn e2e-qa` / `yarn start:std` / `mfeStdUrl` / test thủ công thay runtime |
| prior | data-analy **confirmed** · `specs/_data-analy/patrol-map-control-hint.md` · `patrol-map-bff-endpoints.md` · `patrol-map-action-tree.md` · contentHash `sha256:patrol-map-control-hint-20260820` · bffContentHash `sha256:patrol-map-mobile-bff-20260820` · **no Excel** |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-08-20T01:52:00.000Z` |
| taskId | `task_58c8b2b2` |

**Cấm:** gộp check-in sheet / GPS form (`GAP-MOB-ACT-01/02`) · invent `api/v1/patrol-map` · invent tracks/coverage P1 · WebView HTML Leaflet · ERP.* · native alert · watermark Gói · device label «iPhone» / «· Android» · `mfeStdUrl` · `UIAlert` / `AlertDialog` / `window.alert`.

## 1. Goal

Màn **Bản đồ ca** native dual (iOS SwiftUI + Android Compose): full-page map OMS · overlay điểm tiếp theo · basemap chips · legend isolate. Persona Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`. **Cấm** ERP.* · WebView bọc HTML demo · `mfeStdUrl`.

**1 action = 1 feature.** Slug `patrol-map` = màn `#sc-patrol-map` `DES-MOB-PAT-MAP`. Check-in sheet **không** in-scope (`GAP-MOB-ACT-02`).

Entry: `patrol-home` hero **Tiếp tục bản đồ** · row **Bản đồ ca** → push `#sc-patrol-map`.

## 2. changeScope `new_page`

Pack **map mới** theo data-analy. Visual SSOT = dual HTML `#sc-patrol-map` (iOS 390×844 · Android 412×915 · **parity copy** trừ chrome HIG/Material). Map = **feature composition** (MapKit iOS · OSM tiles Android) · **cấm** kit `LinmMap` · **cấm** WebView demo HTML.

## 3. DoD (đo được)

1. Dual native push `#sc-patrol-map`: nav **Ca đang chạy** · map full · next card overlay · pin CTA · map-bar 4 chips · legend 4 chips. Frame proto iOS 390×844 · Android 412×915 · Tab 5 shell **giữ** dưới map (`GAP-TAB-01` · **cấm** invent tab).
2. Back → pop `patrol-home` (`reuse` · **cấm** reimplement hub).
3. **Ghi điểm tuần** (nav trailing + card CTA) P1 → toast **Ghi điểm tuần** · **cấm** sheet check-in.
4. **Ghim vị trí hiện tại** → quyền vị trí · **snap tim đường** (`snapPointToStreet` else `projectToPath`) · pin `.here` tip neo đáy · zoom/follow · toast **Ghim vị trí hiện tại**. Deny → toast `patrol.map.locDeny`. Timeout → `patrol.map.locTimeout`. **Cấm** fake lat/lng · **cấm** sheet.
5. Basemap chips: **Đường** default on · **Phố** · **Vệ tinh** · **Toàn tuyến** fit overlay polyline.
6. Legend isolate: **Tất cả** · **Hành trình** · **Đã ghi điểm tuần** · **Điểm kế tiếp** — filter overlay client-side P1.
7. Overlay QL.1 Xuân Hải → Phước Dinh **vẽ OSRM tim đường** (corridor + track) · pin check-in **projectToPath** · next **Km 1561+134 · Phước Dinh** (GET fail → demo title). OSRM fail → nét đứt + toast `patrol.map.osrmFallback`. GET `patrol/sessions` bind Route/Status khi có. **Cấm** polyline thẳng seed (**GAP-MAP-OSRM-ROUTE**).
8. Kit reuse: `LinmTopBar` · `LinmPrimaryButton` · `LinmChip` · `LinmMapPinGlyph` `#i-mappin` · `LinmToast` · `LinmTabBar` shell. Map host = feature MapKit/OSM · **cấm** WebView HTML demo · **cấm** raw M3 `NavigationBar` / `TabView` (`GAP-MOB-ACT-05`).
9. App chỉ `{BffPrefix}` · Step 4b **N/A** (reuse `GET patrol/sessions` · **cấm** Kind E invent tracks/coverage/check-ins P1).
10. Dev (role sau): iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · Android `assembleDebug` PASS · Mobile.Bff `dotnet build` PASS — **cấm** `yarn start:std`.
11. QA (role sau): Maestro slug `patrol-map` only · live sim 6.9" + emulator · store PNG `qa/store/patrol-map` · **cấm** `yarn e2e-qa` web.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/patrol-map.md` | map · §2 UI · §3 API · sibling |
| CTX-02 | `docs/context/features/patrol.md` | domain sessions |
| CTX-03 | `docs/context/features/patrol-home.md` | parent entry hero/row |
| DEM-01 | `specs/mobile-p1/ui/prototype/ios/index.html` `#sc-patrol-map` | iOS 390×844 · `DES-MOB-PAT-MAP` |
| DEM-02 | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-patrol-map` | Android 412×915 · **cùng copy** |
| DEM-03 | `specs/patrol-map/ui/prototype/{ios,android}/index.html` | pack stub — Design chép dual từ mobile-p1 |
| MAP | `specs/patrol-map/ui/html-to-native-map.md` | kit topbar/chip/pin **đã map dual** |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/patrol-map-control-hint.md` | controlHint |
| DA-02 | `specs/_data-analy/patrol-map-bff-endpoints.md` | BFF · `GET patrol/sessions` |
| DA-03 | `specs/_data-analy/patrol-map-action-tree.md` | 1 map + sibling enqueue |
| SCAN | `specs/_form-type-mobile/ACTION-TREE.md` | verify |
| IOS | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` | native · `PatrolMapView` |
| AND | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` | native · `PatrolMapScreen` |
| BFF | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` | `mobile-bff/api/v1` proxy |
| BE | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` | DOMAIN-MAP Patrol · **cấm ERP.*** · **không** `api/v1/patrol-map` |
| KIT | `Linm.Mobile.Kit.iOS` + `Linm.Mobile.Kit.Android` | `LinmTopBar` / `LinmChip` / `LinmPrimaryButton` / `LinmMapPinGlyph` **đã có** |

**Cấm** cite `mfeStdUrl` / `http://localhost:9301/` trên artifact native.

## 5. controlHint (PO chốt — Design map kit · SA map API)

Nguồn `#sc-patrol-map` dual + DA-01. UNCLEAR field = **none**.

| Field | VN | controlHint | Required | Kit (iOS+Android cùng turn) | Notes |
|-------|----|-------------|----------|------------------------------|-------|
| navBack | Tuần đường | IconButton / text+chevron | * | `LinmTopBar` leading | reuse `patrol-home` pop |
| title | Ca đang chạy | NavTitle | * | `LinmTopBar` | fixed |
| navCheckin | Ghi điểm tuần | TextButton | * | `LinmTopBar` trailing | toast P1 · **cấm** sheet |
| mapHost | Bản đồ tuần tra OMS | Map | * | feature MapKit / OSM | OSRM `routeAlongStreets` · **cấm** WebView HTML demo · **cấm** polyline thẳng |
| nextEyebrow | Điểm tiếp theo · OSRM | Text | * | overlay card | demo SSOT |
| nextTitle | Km 1561+134 · Phước Dinh | Text | * | overlay card | bind session.route P1 fallback demo |
| nextCheckin | Ghi điểm tuần | PrimaryButton | * | `LinmPrimaryButton` | toast P1 |
| pinHere | Ghim vị trí hiện tại | PrimaryButton | * | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` | loc live · **snap tim đường** · zoom · pin here tip neo đáy · toast · deny `patrol.map.locDeny` |
| baseOsm | Đường | Chip | * | `LinmChip` | default on |
| baseEsri | Phố | Chip | * | `LinmChip` | iOS ≈ standard muted / Android Esri |
| baseSat | Vệ tinh | Chip | * | `LinmChip` | imagery |
| fitAll | Toàn tuyến | Chip | * | `LinmChip` | fit overlay |
| lgAll | Tất cả | Chip | * | `LinmChip` | isolate all |
| lgTrack | Hành trình | Chip | * | `LinmChip` | polyline |
| lgDone | Đã ghi điểm tuần | Chip | * | `LinmChip` | pin done |
| lgNext | Điểm kế tiếp | Chip | * | `LinmChip` | pin next |

Toast / banner → `LinmToast`. **Cấm** AC implement raw control khi kit đã map.

## 6. BFF (PO chốt path — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

| Action / zone | Method | Path | In slug `patrol-map`? |
|---------------|--------|------|------------------------|
| Ca active / next copy | GET | `patrol/sessions` | **yes** — filter «Đang tuần» client-side P1 |
| Detail drill | GET | `patrol/sessions/{id}` | **no P1** — P2 |
| Overlay geometry | GET public | `router.project-osrm.org` route/nearest | waypoints `PatrolMapOverlay` · **paint OSRM** · pin snap/project · Kind E tracks **P2** |
| Check-in POST | POST | `patrol/sessions/{id}/check-ins` | **no** — toast P1 · **cấm** gọi |
| Tracks POST | POST | `patrol/sessions/{id}/tracks` | **no P1** — **P2** · Step 4b **N/A** |
| Coverage GET | GET | `patrol/sessions/{id}/coverage` | **no P1** — **P2** |

**Cấm** `GET patrol-map` · `PatrolMapController` · DbContext trên Mobile.Bff · app `:5101`.

## 7. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Check-in sheet | Demo `openSheet('checkin')` | **P1 toast only.** **Cấm** sheet / form trên map (`GAP-MOB-ACT-02`). |
| GPS pin live | Demo pin CTA | **Live loc + snap tim đường + zoom + pin here tip neo đáy.** Toast ok/deny/timeout. **Cấm** fake lat/lng · **cấm** sheet. **Cấm** chữ «GPS» trên máy. |
| Kind E tracks/coverage | CTX Kind E | **Không** Step 4b P1 · overlay demo SSOT · **cấm invent**. |
| packKind | data-analy `map` | **Confirm `map`.** **≠** hub/list. **Cấm** Grid/Report AC. |
| Kit map | `LinmMap` kit | **Không** `LinmMap` kit · feature MapKit/OSM composition · `kit_missing_confirm` **N/A** cho chrome. |
| Sibling check-in | GAP-MOB-ACT-06/07 | **Không** start · **cấm** enqueue thêm · toast CTA only. |
| Basemap / legend / fit | Same slug controls | **Cùng slug** filter + toast — **không** enqueue sibling. |
| Prior full_pipeline | `task_eae07681` VERIFY PASS | PO roleOnly **chốt requirement** · không re-ship code turn này. |

UNCLEAR field = **none** — không AskQuestion field.

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions **this** `{feature}` | `devSlash` |
|---------|------|---------|----------|------------------------------|------------|
| Bản đồ ca | `#sc-patrol-map` `DES-MOB-PAT-MAP` · iOS + Android | **Map full + overlay** (push · không Modal/Sheet) | none (không form) | GET sessions · display map/overlay · basemap/legend filter · toast CTAs | `/agent-dev-ios` + `/agent-dev-android` |

**Không** trên pack này: check-in sheet · POST tracks · GIS assets · OSRM live network · invent patrol-map API · watermark Gói.

Reuse only: `patrol-home` (back pop · entry hero/row).

Frame: iOS 390×844 · Android 412×915 · safe area · map + overlay không đè notch / home indicator / `LinmTabBar`.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Map **mở** · demo overlay SSOT · toast in-app không chặn · **cấm** full-screen block |
| AC-D-02 | Loc deny / timeout | toast `patrol.map.locDeny` / `patrol.map.locTimeout` · **cấm** fake pin · không crash |
| AC-D-03 | Leave dirty | **N/A** — không form |
| AC-D-04 | Native alert | **Cấm** `UIAlert` / `AlertDialog` / `window.alert`. Mọi phản hồi = `LinmToast` |
| AC-D-05 | Keyboard | **N/A** — không input |
| AC-D-06 | Safe area | Nav + map + overlay + tab không đè notch / home indicator |
| AC-D-07 | Biometric | **N/A** |
| AC-D-08 | Signal | **N/A** trên map (signal trên hub parent) |
| AC-D-09 | Token | GET sessions Bearer Keychain / Encrypted · app chỉ `{BffPrefix}` |
| AC-D-10 | Tab / swipe | Tab shell **giữ** dưới map · **cấm** invent tab trên map |
| AC-D-11 | Camera / push | **N/A** trên map |
| AC-F-01 | Entry | Hub hero **Tiếp tục bản đồ** / row **Bản đồ ca** → push `#sc-patrol-map` |
| AC-F-02 | Back | Pop `patrol-home` · **cấm** reimplement hub |
| AC-F-03 | Check-in / pin | Toast nhãn §3.3–3.4 · **cấm** sheet |
| AC-F-04 | Live map | MapKit/OSM live tiles · **cấm** screenshot/gradient-only · **cấm** WebView HTML |
| AC-F-05 | Dual parity | iOS + Android **cùng** copy zones · **cấm** lệch chrome (`GAP-MOB-ALIGN-01`) |
| AC-F-06 | Basemap / legend | 4 basemap + 4 legend chips filter overlay client-side P1 |

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | **Không áp dụng** |
| Sessions fail / offline | Demo fallback overlay · optional toast · **cấm** native alert (`GAP-PO-LEAVE-01`) |
| Check-in / pin tap | Toast in-app §3.3–3.4 |
| Back | Pop hub · không confirm |
| Success load | Không toast bắt buộc · bind UI |

## 11. Out of scope (this pack)

- Check-in sheet / GPS form (`GAP-MOB-ACT-02`)
- POST tracks · GET coverage · GIS assets · OSRM live network (native dùng demo polyline)
- Invent `GET patrol-map` / `PatrolMapController` / Kind E endpoints P1
- WebView HTML Leaflet · fake lat/lng pin
- Revert pin-here về toast-only (**GAP-MOB-EDIT-01**)
- Watermark Gói / device label / proto-click tín hiệu
- Start sibling check-in `pending_confirm`
- Clone PatrolSessionsController · ERP.* · `mfeStdUrl`

## 12. KPI (HĐ Gói 1 — màn này)

Bản đồ ca = màn hiện trường xem hành trình ca đang chạy · điểm kế tiếp · basemap/legend filter từ **một** push sau hub. DoD pack: `#sc-patrol-map` dual + GET sessions + map composition — **không** omni-implement check-in sheet/tracks API trong 1 slug.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-map` / **`map`** (confirmed) |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/patrol-map/STATUS.md` |
| Context / Demo / DI | CTX-01 · DEM dual `#sc-patrol-map` · no Excel |
| controlHint / UNCLEAR | §5 · none |
| Screens / Pattern / `devSlash` | Map `#sc-patrol-map` · `/agent-dev-ios` + `/agent-dev-android` |
| Grid AC / Report AC | **N/A** — pack map |
| peerStdUrl / reviewUrl | **cấm** `mfeStdUrl` · Design mở dual `file://…/prototype/{ios,android}/index.html#sc-patrol-map` + reviewUrl **cả hai** |
| ux-analy | `/mobile-ui-ux-analy` → `ui/ux-analy.md` §1–§9 **REQUIRED** trước `design_confirm` |
| Kit | reuse chrome kit · map = feature composition · `kit_missing_confirm` **N/A** · verify dual `LinmTopBar` / `LinmChip` / `LinmPrimaryButton` / `LinmMapPinGlyph` |
| BFF | `patrol-map-bff-endpoints.md` · **chỉ** `GET patrol/sessions` (+ detail P2) |
| Open questions | §7 đã chốt — Design **không** vẽ check-in sheet · overlay demo SSOT |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi Design xong **cả hai** mock + ux-analy |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** yarn start:std / mfeStdUrl |

Design: HIG + Material · copy VN đúng HTML (trừ skip sheet check-in / device label) · **cấm** skin Ministry · packet `design-demo-ssot.md`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-20T01:52:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-map-control-hint-20260820 |
| bffContentHash | sha256:patrol-map-mobile-bff-20260820 |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
