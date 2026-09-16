# Team lead — Task — photo-geo-capture (Chụp ảnh kèm tọa độ)

| Field | Value |
|-------|-------|
| feature | `photo-geo-capture` |
| title | [Mobile] [Tuần đường] -> Chụp ảnh kèm tọa độ |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design + SA confirm · **cấm** hub row / Kind A–G web / invent screen tab) |
| stack | `native_dual` |
| Feature Kind | **sheet** · `DES-MOB-PGC` · `#sheet-pgc` · entry host PhotoRow `openCapture('photo-geo')` · **cấm** `mfeStdUrl` |
| route_confirm | **route_a** — hosts `#sc-field-reflect` · `#sc-vis-capture` · `#sc-inc-form` PhotoRow → present sheet `#sheet-pgc` · dismiss → host · **không** URL / hub / tab mới |
| autoApprove | **ON** |
| e2eQa | ON queued QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/store/photo-geo-capture` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở TL |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · `_data-analy/photo-geo-capture-*` · contentHash `sha256:photo-geo-capture-control-hint-20260912` · realDataHash `sha256:photo-geo-capture-real-data-20260912` · `task_fc7c8ad5` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_b9a20f2f` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `handoff/design-compact.md` · `task_a487c57b` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` · `solution_confirm=approve` · GAP-PGC-BE-01 / DETECT-01 **CLOSED P1** · Step 4b **N/A** · `task_c15db047` |
| taskId | `task_e264f99e` |
| updatedAt | `2026-09-12T17:40:00.000Z` |
| thisAction | **Chụp ảnh kèm tọa độ** · 3D ray ∩ mặt đường (`lensRangeM` từ ống kính + `distanceM` ngang) · tap still/thumb `#sheet-pgc-review` · ẩn `LinmTabBar` khi `#sheet-pgc` · HUD + zoom `LinmInAppCapture` + `#pgc-fullscreen` **cùng** `#btn-shutter` · HITL map · FileService `purpose=photo-geo-capture` · **cấm** kẹp 0.04/37 m · **cấm** system camera · **GAP-MOB-EDIT-PERM-01** granted ≠ deny |

**Cấm:** invent `api/v1/photo-geo*` / `PhotoGeoController` · fake attachmentId / object lat/lng · object = photographer EXIF · multi-pin · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · watermark Gói / device label · client objectKey / resign URL · conf>30m auto-attach detect · Step 4b / migration / e2e / `yarn build` / `yarn start:std` ở TL · gộp iOS+Android 1 task id · `scaffold_new`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · proxy catch-all · **T-BFF n/a** |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · FileService + optional AiVision + Incident MediaIds/HasGps · **cấm ERP.*** · **T-BE n/a** (Step 4b N/A) |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | `POST files/init` · `PUT files/{id}/object` · `POST files/commit` · `GET files/{id}/object` · optional `POST ai-vision/detect` (Lat/Lng = **object HITL**) · optional `GET patrol/sessions` · host `POST incident/incidents` MediaIds |
| kit | reuse dual — `LinmSheet` · **`LinmInAppCapture`** (pinch/± zoom) · ImageTapPin · `LinmListRow` · MapPinSheet · `LinmPrimaryButton` · GPS deny `DES-MOB-GPS-DENY` · map `ui/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **none** |
| scaffold | repos **đã có** — **không** `scaffold_new` |
| Step 4b | **N/A** — GAP-PGC-BE-01 CLOSED sidecar · **cấm** TL chạy `/new-endpoint` / `/database-migration` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: host PhotoRow `openCapture('photo-geo')` trên `#sc-field-reflect` · `#sc-vis-capture` · `#sc-inc-form` → **present** sheet `#sheet-pgc` `DES-MOB-PGC`. CTA **Dùng** → dismiss + callback `attachmentId`+object coords sidecar. GPS deny → `DES-MOB-GPS-DENY`. Offline → queue files/host (`patrol-offline` reuse). **Cấm** hub row · invent tab · deep-link web / `mfeStdUrl`. |
| route_b | — không dùng |
| route_c | — không dùng |

IA lock: `(auth) → host screen → sheet photo-geo → dismiss host`. **Cấm** treat as full screen / invent Tab 6.

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `route_confirm=route_a` · `kit_missing_confirm=none` · `T-BE=n/a` · `T-BFF=n/a` · `2026-09-12T17:40:00.000Z`.

---

## Live gap (TL audit 2026-09-12)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sheet-pgc` / PhotoGeo | **DELTA** — **không** `Presentation/Features/PhotoGeoCapture/*` | **T-IOS-PGC** |
| Android `#sheet-pgc` / PhotoGeo | **DELTA** — **không** `presentation/feature/photogeocapture/*` | **T-AND-PGC** |
| Host PhotoRow `openCapture('photo-geo')` | hosts may have other openCapture kinds · **wire** photo-geo kind | Dev dual entry |
| FileService init→PUT→commit | live · purpose `photo-geo-capture` | **reuse** · sidecar object lat/lng |
| `POST ai-vision/detect` | optional · Lat/Lng = object HITL · conf>30m → **no** detect | **reuse** · GAP-PGC-DETECT-01 CLOSED |
| Incident MediaIds / HasGps | live host bind | **reuse** · **cấm** Incident object columns |
| Mobile.Bff proxy | catch-all đủ | **T-BFF n/a** |
| Schema / MIG / photo-geo API | none | **T-BE n/a** · Step 4b **N/A** |
| Kit dual | Design map · kit_missing **none** | **T-KIT n/a** |
| Map HITL | reuse MapPinSheet peers | **reuse** · **cấm** re-own patrol-map |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-PGC | kit | — | **n/a** | — | Kit **đã map dual** · Design `kit_missing_confirm` **none** |
| **T-IOS-PGC** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · MVVM | Ship `Presentation/Features/PhotoGeoCapture/*` · sheet flow + host wire · files purpose + sidecar · HITL · GPS deny · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** (+ iPad if dual dest SSOT) PASS · `implement/ios.md` |
| **T-AND-PGC** | android | SA · route_a · serial sau iOS preferred | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` | Same field/API/DoD dual · `presentation/feature/photogeocapture/*` · `./gradlew :app:assembleDebug` PASS · `implement/android.md` |
| T-BE-PGC | be | — | **n/a** | — | Step 4b **N/A** · sidecar only · **cấm** invent photo-geo API / Incident object columns |
| T-BFF-PGC | bff | — | **n/a** | — | proxy catch-all đủ · **cấm** `PhotoGeoController` |
| T-QA-PGC | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `photo-geo-capture` · `yarn e2e-qa-mobile` · store PNG · **cấm** e2e ở TL |
| T-QA-TAB-01 | qa cite | Dev dual | pending | `/agent-qa-mobile` | Host shell Tab **giữ** · sheet overlay · **cấm** invent tab (`GAP-TAB-01`) |

**1 action = 1 feature.** Serial Dev: iOS → Android · **cấm** 1 id gộp hai OS.

---

## T-IOS-PGC — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-PGC` · `DES-MOB-GPS-DENY` · `#sheet-pgc` · `#capture-preview` · `#gim-pin` · `#map-confirm` · `#modal-gps` |
| Pattern | **Sheet** present · frame proto 390×844 · **không** full-screen hub |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| sheet | `LinmSheet` | `#sheet-pgc` title **Chụp ảnh kèm tọa độ** |
| capturePreview | ImagePreviewFullBleed | EXIF+IMU sidecar · crosshair |
| gimPin | ImageTapPin | **1 pin only** · **cấm** multi |
| rowPhotogGps | `LinmListRow` | **Vị trí đã chốt** · photographer |
| rowDistance | `LinmListRow` | **Khoảng cách ước lượng** · on-device |
| rowObjectCoord | `LinmListRow` | **Tọa độ vật thể** · after HITL only |
| mapConfirm | MapPinSheet | reuse peers · HITL object pin |
| btnConfirmMap / btnUse | `LinmPrimaryButton` | return `attachmentId`+object coords |
| gpsDeny | modal `DES-MOB-GPS-DENY` | chặn geo flow · **cấm** `UIAlert` |
| bannerConf | banner | conf>30m / compass · no auto-attach detect |

### Flow DoD

1. Host `openCapture('photo-geo')` → sheet.
2. Still camera + GPS gate · deny → modal.
3. Gim 1 pin → on-device object geo (pinhole ∩ mặt đường) · **≠** photographer EXIF.
4. MapPinSheet HITL confirm object lat/lng.
5. Files init→PUT→commit `purpose=photo-geo-capture` · JWT GET object · **cấm** client objectKey.
6. Optional detect: Lat/Lng = object HITL · conf>30m → skip detect attach · BE P1 **hard-default 200** trên `POST ai-vision/detect` (skip AiService HTTP · **cấm** toast detectFail khi 200).
7. Dismiss → host binds MediaIds + sidecar coords · offline queue OK.
8. Demo states cite: `?deny=1` · `?conf=45` · `?compass=1` · `?step=map` · `?fail=1`.

---

## T-AND-PGC — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | same dual · proto 412×915 |
| Pattern | bottom sheet / ModalBottomSheet kit · parity field/API |
| Paths | `presentation/feature/photogeocapture/*` |
| DoD | same flow · **cấm** `AlertDialog` system · assembleDebug PASS |

---

## T-BE / T-BFF

| | |
|--|--|
| Decision | **N/A** · GAP-PGC-BE-01 CLOSED P1 sidecar · MediaIds/HasGps only · detect Lat/Lng = object · **cấm** Step 4b / invent DTO/controller · BFF catch-all đủ |

---

## DoD (Dev · not TL)

| Gate | Criteria |
|------|----------|
| Sheet ship | `#sheet-pgc` dual · host openCapture wire |
| Object geo | on-device + HITL · ≠ photographer EXIF · **cấm** fake |
| Files | purpose `photo-geo-capture` · init→PUT→commit · JWT |
| Detect | optional object HITL coords · conf>30m no attach |
| Build | iOS xcodebuild · Android gradlew · **cấm** TL chạy |
| E2E | queued `/agent-qa-mobile` · **cấm** TL e2e / `start:std` |
| ERP / mfe / photo-geo API | **none** |

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| next | `/agent-dev-ios` · `T-IOS-PGC` → `/agent-dev-android` · `T-AND-PGC` |
| write | `implement/ios.md` · `implement/android.md` |
| compact | `handoff/team_lead-compact.md` |
| STATUS | phase → `dev` · team-lead **confirmed** · e2e queued QA |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/ios/index.html` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/photo-geo-capture/ui/prototype/android/index.html` |

## Full paths

- task: `specs/photo-geo-capture/task/photo-geo-capture.md`
- design: `specs/photo-geo-capture/ui/design.md`
- map: `specs/photo-geo-capture/ui/html-to-native-map.md`
- solution: `specs/photo-geo-capture/be/solution-discovery.md`
- STATUS: `specs/photo-geo-capture/STATUS.md`
