# Team lead — Task — mnt-progress (mobile sheet → screen · Cập nhật trạng thái)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| title | [Mobile] [Công việc] -> Cập nhật trạng thái |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design + SA confirm · GAP-MOB-MNT-PROG-PACK-01 **closed** · surface = **full screen** `#sc-mnt-progress` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-MNT-PROGRESS` · packKind meta `sheet` · **cấm** Kind A–G web / Lin* / Report / `mfeStdUrl` |
| route_confirm | **route_a** — mnt-list card `#i-sync` → push `#sc-mnt-progress` · Back → `mnt-list` · pack `tabs: none` · shell Tab 5 **giữ** · tab **`work`** · **cấm** `mfeStdUrl` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `ProgressController` / `MntProgressController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Maintenance · `WorkOrdersController` · **cấm ERP.*** |
| thisAction | **Cập nhật trạng thái** `#sc-mnt-progress` only · entry mnt-list `#i-sync` · **1 action = 1 feature** · **cấm** gộp `mnt-chat` / `mnt-log` / `estimate` / list (`GAP-MOB-ACT-01/02`) |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/mnt-progress` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web / e2e ở role TL |
| prior · data_analy | **confirmed** · `_data-analy/mnt-progress-control-hint.md` · `mnt-progress-bff-endpoints.md` · `mnt-progress-action-tree.md` · `mnt-progress-real-data.md` · contentHash `sha256:mnt-progress-mobile-control-hint-20260829` · realDataHash `sha256:mnt-progress-mobile-real-data-20260829` · bffContentHash `sha256:mnt-progress-mobile-bff-20260829` · actionTreeHash `sha256:mnt-progress-mobile-action-tree-20260829` · ctxContentHash `sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec` · demoContentHash `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| prior · po | **confirmed** · `po/requirement.md` · `task_df7a4a8b` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-mnt-progress` · `ui/review/demo-parity.md` · `task_be38de39` · `design_confirm` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · `task_6dee11eb` |
| taskId | `task_5e103912` |
| updatedAt | `2026-08-29T06:19:21.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/mnt-progress` / `ProgressController` trên Mobile.Bff · invent MediaUrl / lat-lng trên `ProgressWorkOrderRequest` · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · watermark Gói · device label · badge P1/P2 header · fake toast 200 / fake % / fake lat-lng · enqueue Cập nhật / fields / camera / GPS (`GAP-MOB-ACT-07`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · gộp iOS+Android 1 task id · `scaffold_new` / `/mobile-app-architecture` · Step 4b / migration · TL chạy e2e / `yarn build` / `yarn start:std` · implement native code ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · reuse Maintenance |
| `route_confirm` | **route_a** — screen owner `mnt-progress` · mnt-list `#i-sync` → push `#sc-mnt-progress` · không tab mới · không deep-link web |
| `kit_missing_confirm` | **N/A** — TopBar / ListRow / TextField / TextArea / PhotoRow / IconButton / Primary / Toast / GPS deny / leave **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** P1 · progress/complete live · `T-BE-MNT-PROG-MEDIA` **DEFER** (không invent MediaUrl turn này) · **không** `/new-endpoint` / `/database-migration` |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ path |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: mnt-list card `#i-sync` (`actProgress`) → **push** `#sc-mnt-progress` `DES-MOB-MNT-PROGRESS` (thay toast-only · **GAP-MOB-MNT-PROG-NAV-01** / **SCR-01**). Prefill nav args (`id` · title · code · status · progress) và/hoặc `GET maintenance/work-orders/{id}`. Back / leading → `go('mnt-list')` (iOS text **Công việc** + chevron · Android icon-only OK). Pack `tabs: none` · shell Tab 5 **giữ** · tab **`work`** active. Header / % / ghi chú / PhotoRow / GPS / Cập nhật / complete = **cùng slug** — **cấm** enqueue. Siblings estimate / mnt-chat / mnt-log = **không** ship / start (`GAP-MOB-ACT-06`). |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng |

IA lock (design · ux-analy): `(auth) → Tab 5 · Công việc / mnt-list → #i-sync = this pack · Back = mnt-list`. In-screen tabs **none** (`GAP-TAB-01`). **Cấm** invent tab · **cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar`.

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `be_repo_confirm` · `kit_missing_confirm=N/A` · `2026-08-29T06:19:21.000Z`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Maintenance · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 write | **`POST maintenance/work-orders/{id}/progress`** · **`POST …/{id}/complete`** khi 100%/done |
| API P1 read | opt `GET maintenance/work-orders/{id}` · opt `GET …/init-data` (display only · chrome VN = mnt-list map) |
| API P1 media | optional `POST/PUT ai-vision/uploads…` — **không** MediaUrl progress body P1 |
| GPS / camera | device CL/Fused + AVFoundation/CameraX · embed GPS → `Note` · **cấm** invent lat/lng DTO |
| kit | reuse map dual — `LinmTopBar` · `LinmListRow` · `LinmTextField` number/slider · `LinmTextArea` · PhotoRow · `LinmIconButton` · `LinmPrimaryButton` · `LinmToast` · GPS deny / leave modals · `LinmTabBar` shell · map `ui/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse live progress + complete · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

---

## Live gap (TL audit 2026-08-29)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-mnt-progress` | **DELTA** — no `Presentation/Features/MntProgress/*` · `MntListViewModel` `.progress` → toast only (`mnt.list.toast.progress`) | **T-IOS-MNT-PROG** |
| Android `#sc-mnt-progress` | **DELTA** — no `presentation/feature/mntprogress/*` · `MntListViewModel` progress → toast only | **T-AND-MNT-PROG** |
| `POST …/work-orders/{id}/progress` | BE `WorkOrdersController` + Mobile.Bff proxy live | **reuse** · app path only · **cấm** invent `mnt-progress` path |
| `POST …/{id}/complete` | live | **reuse** · cùng slug khi 100%/done |
| `GET …/{id}` / init-data | live | **reuse** opt prefill · chrome VN = mnt-list |
| Progress DTO MediaUrl / LatLng | **không** | Device + Note embed · MEDIA **DEFER** · **cấm** invent |
| mnt-list `#i-sync` entry | toast stub | wire push → progress screen · **cấm** reimplement list |
| Sibling estimate/chat/log | separate packs | **cấm** start / gộp |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** · MEDIA expand **DEFER** |
| Kit form + PhotoRow + GPS | dual map Design | Dev **cấm** raw chrome · **cấm** `T-KIT-*` |
| Foot «Phiên bản Gói…» / device label | demo chrome | **cấm ship** |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-MNT-PROG | kit | — | **n/a** | — | Kit form **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-MNT-PROG** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/MntProgress/*` · form + PhotoRow + GPS + progress/complete · wire mnt-list `#i-sync` · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** (+ iPad Pro 13-inch M5 verify) PASS · ghi `implement/ios.md` |
| **T-AND-MNT-PROG** | android | SA · route_a | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/mntprogress/*` · CameraX + Fused · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — progress/complete **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-BE-MNT-PROG-MEDIA | be | Signed MediaUrl need | **DEFER** | — | Chỉ nếu Signed cần MediaUrl trên Progress · **cấm** invent path riêng P1 |
| T-BFF-* | bff | — | **n/a** | — | proxy catch-all đủ |
| T-QA-TAB-01 | qa cite | Dev dual | pending | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **work** · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| T-QA-MNT-PROG | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `mnt-progress` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/mnt-progress` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`estimate` · `mnt-chat` · `mnt-log` · `mnt-list` layout) vào task file này như in-scope implement. Sibling giữ pipeline riêng — **cấm** auto start (`GAP-MOB-ACT-06`).

**Serial Dev:** `/agent-dev-ios` (`T-IOS-MNT-PROG`) → `/agent-dev-android` (`T-AND-MNT-PROG`) · **cấm** 1 file task gộp hai nền · **cấm** TL chạy build/e2e.

---

## T-IOS-MNT-PROG — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-MNT-PROGRESS` · `#sc-mnt-progress` · GPS deny `DES-MOB-GPS-DENY` · leave `DES-MOB-LEAVE` |
| Pattern | Full screen push · **không** Modal/Sheet chrome · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | text **Công việc** · `go('mnt-list')` |
| title | `LinmTopBar` title | **Cập nhật trạng thái** fixed 17 · **cấm** badge P1/P2 |
| woTitle / woCode / woStatus | `LinmListRow` ×3 + badge | readonly · VN mnt-list map · label 13 / value ≥16 |
| progressPct | `LinmTextField` number / slider | **Tiến độ (%)** 0–100 * → `ProgressPercent` |
| note | `LinmTextArea` | **Ghi chú** · placeholder **Mô tả tiến độ / ghi chú hiện trường…** · + GPS text |
| photoLabel | SectionLabel | **Ảnh hiện trường** 13 |
| photos / addPhoto | PhotoRow · `LinmIconButton` `#i-camera` | device still · **không** MediaUrl progress body P1 |
| locationRow | `LinmListRow` | **Vị trí đã chốt** · device GPS · **cấm** fake · **cấm** map embed |
| btnUpdate | `LinmPrimaryButton` | **Cập nhật** · busy · @100 → complete |
| toast | `LinmToast` | ok **Đã cập nhật tiến độ · {n}%** · err · **cấm** native alert |
| gpsDeny | kit modal | `DES-MOB-GPS-DENY` · vẫn submit không GPS |
| leaveDirty | kit modal | `DES-MOB-LEAVE` · **cấm** UIAlert |
| bannerMissing | in-app banner | thiếu WO id · **chặn** Cập nhật |
| tabWork | `LinmTabBar` | shell · selected **Công việc** |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · invent MediaUrl/lat-lng DTO.

### Demo / fallback SSOT (API fail + Design gate)

| Field | Value |
|-------|-------|
| Title | Vá mặt đường |
| Code | CV-20260810-0001 |
| Status | Chờ xử lý (`new`) |
| ProgressPct default | `0` |
| Note placeholder | Mô tả tiến độ / ghi chú hiện trường… |
| Location sample | QL.1 · Km 1556+080 · ±5 m (chỉ khi GPS live) |
| Toast ok | Đã cập nhật tiến độ · {n}% |

**Cấm** fake POST success khi fail.

### Status VN map (chrome · LABEL-01)

| API `status` | VN | chrome |
|--------------|----|--------|
| `new` | Chờ xử lý | warn |
| `in_progress` | Đang xử lý | info |
| `done` | Đã hoàn thành | ok |
| `cancelled` | Đã hủy | gray |

init-data labels («Mới» / «Đang thực hiện»…) **không** thay chrome list trên slug này.

### API / store

| Step | Spec |
|------|------|
| Appear / prefill | nav args và/hoặc `GetWorkOrderUseCase` → `GET maintenance/work-orders/{id}` Bearer |
| Missing id | banner · **chặn** submit |
| Fail GET | demo SSOT fallback · screen **vẫn mở** · optional toast · **cấm** native alert |
| Update | `ProgressWorkOrderUseCase` → `POST …/{id}/progress` body `{ ProgressPercent, Note? }` |
| Complete | khi % = 100 / done → `CompleteWorkOrderUseCase` → `POST …/{id}/complete` · toast · back list |
| GPS | `GetCurrentLocationUseCase` · embed tóm tắt → `Note` · deny modal · **cấm** fake |
| Camera | AVFoundation still → PhotoRow · optional uploads · **không** bind MediaUrl progress body |
| Offline POST | toast lỗi · **cấm** fake 200/% · queue **DEFER** |
| Sibling API | **cấm** comments / estimate / list CRUD trên slug này |

### Router / shell

| Entry | Behavior |
|-------|----------|
| mnt-list `.progress` / `#i-sync` | **thay** toast → push `MntProgressView` + WO nav args |
| Back | pop `mnt-list` · **cấm** reimplement list |
| DI | `AppContainer` wire `MntProgressViewModel` + Progress/Complete/GetWO/Location use cases + repo → `ApiClient` paths `maintenance/work-orders/{id}/progress|complete` |

**Cấm** VM→URLSession trực tiếp · WebView HTML.

### Client architecture (cite SA)

| Layer | Path |
|-------|------|
| Feature UI (NEW) | `Presentation/Features/MntProgress/*` — screen + form + PhotoRow + GPS + modals |
| Entry wire | `Presentation/Features/MntList/MntListViewModel.swift` — `.progress` **thay toast** → push |
| Use cases | `GetWorkOrderUseCase` (opt) · `ProgressWorkOrderUseCase` · `CompleteWorkOrderUseCase` · `GetCurrentLocationUseCase` · camera · opt uploads |
| Repo | expand `WorkOrderRepository*` / Maintenance peer mnt-list + progress/complete methods |
| Copy | `MntProgressCopy` VN SSOT Design |
| State | woId · title · code · status · progressPct · note · photos · gps · busy · dirty · showGpsDeny · showLeave · missingId |
| Store claim | verify PrivacyInfo camera + location (đã declare) · **cấm** localhost/LAN · no iPad listing claim |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build
# verify also: iPad Pro 13-inch (M5) when available
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md`.

---

## T-AND-MNT-PROG — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-mnt-progress` · frame 412×915 |
| Pattern | Full screen · **không** bottom-sheet · Material chrome OK (back = icon-only) |

### UI / API

Cùng bảng field · status map · demo SSOT · bind · toast · kit cite như T-IOS.  
Back: **icon-btn chevron only** (không bắt buộc text «Công việc») · copy VN còn lại **parity** iOS (`GAP-MOB-ALIGN-01`).

### Router / shell

| Entry | Behavior |
|-------|----------|
| `MntListViewModel` progress / `#i-sync` | **thay** toast → navigate `MntProgressScreen` + WO args |
| Back | pop `mnt-list` · `home`/list reuse |
| DI | Hilt `MntProgressViewModel` · use cases · repo → Retrofit/`ApiService` paths progress/complete |

### Client architecture

| Layer | Path |
|-------|------|
| Feature UI (NEW) | `presentation/feature/mntprogress/*` |
| Entry wire | `presentation/feature/mntlist/MntListViewModel.kt` — progress **thay toast** |
| Camera / GPS | CameraX ImageCapture · `AndroidLocationReader` / Fused |
| Store claim | verify Play Data safety camera + location · **cấm** localhost/LAN |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/android.md`.

Optional verify (Dev, **không** TL): Mobile.Bff `dotnet build` PASS.

---

## T-BE-* — n/a (P1)

| id | Decision |
|----|----------|
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse `POST …/progress` + `POST …/complete` · **cấm** `MntProgressController` / invent path |
| T-BE-MIG | **n/a** — không bảng mới · `share_na` · **cấm** `/database-migration` |
| T-BE-MNT-PROG-MEDIA | **DEFER** — MediaUrl trên Progress chỉ nếu Signed cần · **cấm** invent turn Dev P1 |
| T-BFF-* | **n/a** — proxy catch-all đủ |
| Step 4b | **N/A** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack P1 này |

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → màn mở · POST fail toast · **cấm** fake 200/% · queue DEFER · **cấm** full-screen block |
| AC-D-02 | GPS deny → modal · vẫn submit không GPS · **cấm** fake lat/lng |
| AC-D-03 | Leave dirty → in-app confirm · **cấm** native alert |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` / kit modal |
| AC-D-05 | Number/% / note focus · keyboard không đè CTA |
| AC-D-06 | Safe area · TopBar + scroll form + CTA + tab |
| AC-D-10 | Shell tab **Công việc** · in-screen tabs **none** (`GAP-TAB-01`) |
| AC-D-11 | Camera PhotoRow · deny/cancel giữ form · MediaUrl body DEFER |
| AC-D-12 | label **13** · field ≥**16** · title **17** (`GAP-TYP-01`) |
| AC-F-01 | Appear prefill nav/GET · fail → demo SSOT · thiếu id → banner chặn submit |
| AC-F-02 | Back → `mnt-list` |
| AC-F-03 | Header WO title · code · status VN readonly |
| AC-F-04 | Progress % 0–100 required · invalid → không POST ok |
| AC-F-05 | Note optional ≥16 · + GPS text |
| AC-F-06 | Photo UX · **cấm** invent MediaUrl progress body |
| AC-F-07 | GPS chốt device · ListRow · deny modal · **cấm** fake |
| AC-F-08 | Cập nhật → POST progress · toast **Đã cập nhật tiến độ · {n}%** · **cấm** fake |
| AC-F-09 | 100%/done → POST complete · toast · back list |
| AC-F-10 | Entry mnt-list `#i-sync` → **push** `#sc-mnt-progress` (thay toast) |
| AC-F-11 | Dual parity fields + copy (`GAP-MOB-ALIGN-01`) trừ chrome back |
| AC-F-12 | **Cấm** device label / proto-click / watermark Gói |
| AC-F-13 | **Cấm** gộp estimate/chat/log (`GAP-MOB-ACT-01/02`) |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `estimate` | separate pack | hub / `#i-sum` · **cấm** gộp |
| `mnt-chat` | pipeline riêng | `#i-chat` · **cấm** start từ TL này |
| `mnt-log` | `pending_confirm` / pipeline | `#i-list` done · **cấm** start |
| `mnt-list` | parent reuse | entry/back only · **cấm** reimplement |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start sibling từ TL/Dev `mnt-progress`.

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-progress` / **`sheet`** (surface **screen**) |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-MNT-PROG` · `T-AND-MNT-PROG` · T-BE **n/a** · T-KIT **n/a** · MEDIA **DEFER** |
| BFF | opt `GET …/{id}` · **`POST …/progress`** · **`POST …/complete`** · opt uploads |
| Real-data | `_data-analy/mnt-progress-real-data.md` §A+§B |
| UX packet | `ui/ux-analy.md` §1–§9 · `ui/design.md` · dual proto · map |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/mnt-progress.md | **PASS** · T-IOS-MNT-PROG · T-AND-MNT-PROG · T-BE n/a · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có · autoApprove route_a |
| Kit | **PASS** · reuse map · T-KIT **n/a** |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:19:21.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| realDataHash | sha256:mnt-progress-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-progress-mobile-bff-20260829 |
| actionTreeHash | sha256:mnt-progress-mobile-action-tree-20260829 |
| ctxContentHash | sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_5e103912` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
