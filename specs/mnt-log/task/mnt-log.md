# Team lead — Task — mnt-log (mobile sheet → screen · Nhật ký xử lý)

| Field | Value |
|-------|-------|
| feature | `mnt-log` |
| title | [Mobile] [Công việc] -> Nhật ký xử lý |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design + SA confirm · GAP-MOB-MNT-LOG-PACK-01 **closed** · surface = **full screen** `#sc-mnt-log` · **cấm** bottom-sheet chrome) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-MNT-LOG` · packKind meta `sheet` · **cấm** Kind A–G web / Lin* / Report / `mfeStdUrl` |
| route_confirm | **route_a** — mnt-list card `#i-list` (status=`done` only) → push `#sc-mnt-log` · Back → `mnt-list` · pack `tabs: none` · shell Tab 5 **giữ** · tab **`work`** · **cấm** `mfeStdUrl` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `LogController` / `MntLogController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Maintenance · `WorkOrdersController.GetById` · **cấm ERP.*** |
| thisAction | **Nhật ký xử lý** `#sc-mnt-log` only · entry mnt-list `#i-list` (**done** only) · **1 action = 1 feature** · **cấm** gộp `mnt-chat` / `mnt-progress` / `estimate` / list (`GAP-MOB-ACT-01/02`) |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/mnt-log` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web / e2e ở role TL |
| prior · data_analy | **confirmed** · `_data-analy/mnt-log-control-hint.md` · `mnt-log-bff-endpoints.md` · `mnt-log-action-tree.md` · `mnt-log-real-data.md` · contentHash `sha256:mnt-log-mobile-control-hint-20260829` · realDataHash `sha256:mnt-log-mobile-real-data-20260829` · bffContentHash `sha256:mnt-log-mobile-bff-20260829` · actionTreeHash `sha256:mnt-log-mobile-action-tree-20260829` · ctxContentHash `sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701` · demoContentHash `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| prior · po | **confirmed** · `po/requirement.md` · `task_d21ff1dc` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-mnt-log` · `ui/review/demo-parity.md` · `task_bda2e253` · `design_confirm` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · GAP HIST closed P1 · `task_a5028152` |
| taskId | `task_48352a56` |
| updatedAt | `2026-08-29T07:32:28.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/mnt-log` / `…/logs` / `…/progress-history` · invent `LogController` trên Mobile.Bff · invent history collection · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · watermark Gói · device label · badge P1/P2 header · Primary write CTA · composer chat · POST progress · fake timeline khi GET fail · enqueue timeline / header / empty / back (`GAP-MOB-ACT-07`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · gộp iOS+Android 1 task id · `scaffold_new` / `/mobile-app-architecture` · Step 4b / migration · TL chạy e2e / `yarn build` / `yarn start:std` · implement native code ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `be_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · reuse Maintenance |
| `route_confirm` | **route_a** — screen owner `mnt-log` · mnt-list `#i-list` (done) → push `#sc-mnt-log` · không tab mới · không deep-link web |
| `kit_missing_confirm` | **N/A** — TopBar / ListRow / List·Timeline / Empty / Toast / IconButton **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** P1 · GetById live · `T-BE-MNT-LOG-HIST` **DEFER** (không invent `…/logs`) · **không** `/new-endpoint` / `/database-migration` |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ path |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: mnt-list card `#i-list` (`actLog` · **status=`done` only**) → **push** `#sc-mnt-log` `DES-MOB-MNT-LOG` (thay toast-only · **GAP-MOB-MNT-LOG-NAV-01** / **SCR-01** / **ENTRY-01**). Prefill nav args (`id` · title · code · status) và/hoặc `GET maintenance/work-orders/{id}` · **client derive** timeline newest-first. Back / leading → `go('mnt-list')` (iOS text **Công việc** + chevron · Android icon-only OK). Pack `tabs: none` · shell Tab 5 **giữ** · tab **`work`** active. Header / timeline / empty / toast / banner = **cùng slug** — **cấm** enqueue · **cấm** Primary write. Siblings estimate / mnt-chat / mnt-progress = **không** ship / start (`GAP-MOB-ACT-06`). |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng |

IA lock (design · ux-analy): `(auth) → Tab 5 · Công việc / mnt-list → #i-list (done) = this pack · Back = mnt-list`. In-screen tabs **none** (`GAP-TAB-01`). **Cấm** invent tab · **cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar`.

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `be_repo_confirm` · `kit_missing_confirm=N/A` · `2026-08-29T07:32:28.000Z`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Maintenance · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 read | **`GET maintenance/work-orders/{id}`** · opt `GET …/init-data` (display only · chrome VN = mnt-list map) |
| API P1 write | **none** — readonly |
| Timeline | **client derive** từ Signed `WorkOrderDto` · newest-first · **cấm** invent `…/logs` / `…/progress-history` |
| GPS / camera | **n/a** — readonly |
| kit | reuse map dual — `LinmTopBar` · `LinmListRow` · SectionLabel · TimelineList/`LinmList` · EmptyChrome · `LinmToast` · `LinmIconButton` `#i-list` · `LinmTabBar` shell · map `ui/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse live GetById · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

---

## Live gap (TL audit 2026-08-29)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-mnt-log` | **DELTA** — no `Presentation/Features/MntLog/*` · `MntListViewModel` `.log` → toast only (`mnt.list.toast.log`) · `showsLogAction` đã gate done | **T-IOS-MNT-LOG** |
| Android `#sc-mnt-log` | **DELTA** — no `presentation/feature/mntlog/*` · `MntListViewModel` `Log` → toast only · `showsLogAction` gate done | **T-AND-MNT-LOG** |
| `GET …/work-orders/{id}` | BE `WorkOrdersController.GetById` + Mobile.Bff proxy live · peer `GetWorkOrderUseCase` (mnt-progress) | **reuse** · app path only · **cấm** invent `mnt-log` path |
| Timeline derive | **không** live feature mapper | ship `DeriveWorkOrderTimelineUseCase` shared map · **cấm** invent history API |
| `GET …/logs` / history | **không** | **cấm invent** · HIST **DEFER** |
| mnt-list `#i-list` entry | toast stub · done-only UI gate live | wire push → log screen · **cấm** reimplement list |
| Sibling estimate/chat/progress | separate packs | **cấm** start / gộp |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** · HIST expand **DEFER** |
| Kit TopBar + List + Empty + Toast | dual map Design | Dev **cấm** raw chrome · **cấm** `T-KIT-*` |
| Foot «Phiên bản Gói…» / device label | demo chrome | **cấm ship** |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-MNT-LOG | kit | — | **n/a** | — | Kit list/timeline **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-MNT-LOG** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/MntLog/*` · header + TimelineList + empty/banner/toast + derive · wire mnt-list `#i-list` done-only · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** (+ iPad Pro 13-inch M5 verify) PASS · ghi `implement/ios.md` |
| **T-AND-MNT-LOG** | android | SA · route_a | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/mntlog/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — GetById **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-BE-MNT-LOG-HIST | be | Signed history need | **DEFER** | — | Chỉ nếu Signed cần history collection · **cấm** invent `…/logs` path P1 |
| T-BFF-* | bff | — | **n/a** | — | proxy catch-all đủ |
| T-QA-TAB-01 | qa cite | Dev dual | pending | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **work** · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| T-QA-MNT-LOG | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `mnt-log` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/mnt-log` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`estimate` · `mnt-chat` · `mnt-progress` · `mnt-list` layout) vào task file này như in-scope implement. Sibling giữ pipeline riêng — **cấm** auto start (`GAP-MOB-ACT-06`).

**Serial Dev:** `/agent-dev-ios` (`T-IOS-MNT-LOG`) → `/agent-dev-android` (`T-AND-MNT-LOG`) · **cấm** 1 file task gộp hai nền · **cấm** TL chạy build/e2e.

---

## T-IOS-MNT-LOG — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-MNT-LOG` · `#sc-mnt-log` |
| Pattern | Full screen push · **không** Modal/Sheet chrome · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | text **Công việc** · `go('mnt-list')` |
| title | `LinmTopBar` title | **Nhật ký xử lý** fixed 17 · **cấm** badge P1/P2 |
| woTitle / woCode / woStatus | `LinmListRow` ×3 + badge | readonly · VN mnt-list map · label 13 / value ≥16 |
| sectionLog | SectionLabel | **Nhật ký** 13 |
| timeline | TimelineList / `LinmList` | newest-first · derive rows · at 13 / body ≥16 |
| empty | EmptyChrome | **Chưa có nhật ký** |
| toast | `LinmToast` | **Không tải được nhật ký** · **cấm** native alert · **cấm** fake rows |
| bannerMissing | in-app banner | **Thiếu công việc — không tải nhật ký. Mở từ mnt-list `#i-list`.** |
| tabWork | `LinmTabBar` | shell · selected **Công việc** |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · invent history API · Primary write · composer.

### Demo / fallback SSOT (API fail + Design gate)

| Field | Value |
|-------|-------|
| Title | Nạo cống |
| Code | CV-20260809-0002 |
| Status | Đã hoàn thành (`done`) |
| Timeline (newest-first) | Hoàn thành · Tiến độ hiện tại 100% · Hạn: 2026-08-09 16:00 · Tạo công việc |
| Empty | Chưa có nhật ký |
| Toast fail | Không tải được nhật ký |

**Cấm** fake timeline khi GET fail **không** Design gate.

### Status VN map (chrome · LABEL-01)

| API `status` | VN | chrome |
|--------------|----|--------|
| `new` | Chờ xử lý | warn |
| `in_progress` | Đang xử lý | info |
| `done` | Đã hoàn thành | ok |
| `cancelled` | Đã hủy | gray |

init-data labels **không** thay chrome list trên slug này.

### Timeline derive (P1 · Signed fields only · newest-first)

| kind | when | body VN | at |
|------|------|---------|-----|
| `done` | status=`done` | Hoàn thành | `UpdatedAt` |
| `note` | `Note` non-empty | {Note} | `UpdatedAt` |
| `progress` | `%`>0 hoặc status in_progress/done | Tiến độ hiện tại {n}% | `UpdatedAt` |
| `description` | `Description` non-empty | Mô tả: {Description} | `CreatedAt` |
| `due` | `DueAt` present | Hạn: {fmt} | `DueAt` |
| `created` | always | Tạo công việc | `CreatedAt` |

### API / store

| Step | Spec |
|------|------|
| Appear / prefill | nav args và/hoặc `GetWorkOrderUseCase` → `GET maintenance/work-orders/{id}` Bearer |
| Missing id | banner · empty · **không** gọi API · **cấm** fake rows |
| Fail GET | toast lỗi + empty · demo SSOT fallback **chỉ** Design gate · **cấm** fake timeline |
| Success | bind header · derive ≥1 row nếu `CreatedAt` có · sort newest-first |
| Write | **none** |
| Offline GET | toast + empty · **cấm** full-screen block tab |
| Sibling API | **cấm** comments / progress / estimate / list CRUD trên slug này |

### Router / shell

| Entry | Behavior |
|-------|----------|
| mnt-list `.log` / `#i-list` (done only · `showsLogAction`) | **thay** toast → push `MntLogView` + WO nav args |
| Back | pop `mnt-list` · **cấm** reimplement list |
| DI | `AppContainer` wire `MntLogViewModel` + GetWO + DeriveTimeline use cases + repo → `ApiClient` path `maintenance/work-orders/{id}` |

**Cấm** VM→URLSession trực tiếp · WebView HTML.

### Client architecture (cite SA)

| Layer | Path |
|-------|------|
| Feature UI (NEW) | `Presentation/Features/MntLog/*` — screen + header + TimelineList + empty + banner |
| Entry wire | `Presentation/Features/MntList/MntListViewModel.swift` — `.log` **thay toast** → push (**done** only giữ `showsLogAction`) |
| Use cases | `GetWorkOrderUseCase` (reuse mnt-progress peer) · `DeriveWorkOrderTimelineUseCase` (shared map) |
| Repo | reuse `WorkOrderRepository*` / Maintenance peer mnt-list GetById |
| Copy | `MntLogCopy` VN SSOT Design · status map mnt-list · derive templates |
| State | woId · title · code · status · timelineRows · loading · missingId · loadError · empty |
| Store claim | **no new** camera/location · **cấm** localhost/LAN · no iPad listing claim |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build
# verify also: iPad Pro 13-inch (M5) when available
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md`.

---

## T-AND-MNT-LOG — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-mnt-log` · frame 412×915 |
| Pattern | Full screen · **không** bottom-sheet · Material chrome OK (back = icon-only) |

### UI / API

Cùng bảng field · status map · demo SSOT · derive · toast · kit cite như T-IOS.  
Back: **icon-btn chevron only** (không bắt buộc text «Công việc») · copy VN còn lại **parity** iOS (`GAP-MOB-ALIGN-01`).

### Router / shell

| Entry | Behavior |
|-------|----------|
| `MntListViewModel` `Log` / `#i-list` | **thay** toast → navigate `MntLogScreen` + WO args (**done** only · `showsLogAction`) |
| Back | pop `mnt-list` · `home`/list reuse |
| DI | Hilt `MntLogViewModel` · GetWO + DeriveTimeline · repo → Retrofit/`ApiService` path GetById |

### Client architecture

| Layer | Path |
|-------|------|
| Feature UI (NEW) | `presentation/feature/mntlog/*` |
| Entry wire | `presentation/feature/mntlist/MntListViewModel.kt` — `Log` **thay toast** |
| Store claim | **no new** camera/location · **cấm** localhost/LAN |

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
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse `GET …/work-orders/{id}` · **cấm** `MntLogController` / invent path |
| T-BE-MIG | **n/a** — không bảng mới · `share_na` · **cấm** `/database-migration` |
| T-BE-MNT-LOG-HIST | **DEFER** — history API chỉ nếu Signed cần · **cấm** invent turn Dev P1 |
| T-BFF-* | **n/a** — proxy catch-all đủ |
| Step 4b | **N/A** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack P1 này |

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → màn mở · GET fail toast + empty · **cấm** fake timeline · **cấm** full-screen block |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` / banner |
| AC-D-06 | Safe area · TopBar + scroll timeline + tab |
| AC-D-10 | Shell tab **Công việc** · in-screen tabs **none** (`GAP-TAB-01`) |
| AC-D-12 | label **13** · field ≥**16** · title **17** (`GAP-TYP-01`) |
| AC-F-01 | Appear prefill nav/GET · fail → toast+empty (demo SSOT chỉ Design gate) · thiếu id → banner |
| AC-F-02 | Back → `mnt-list` |
| AC-F-03 | Header WO title · code · status VN readonly |
| AC-F-04 | Timeline client derive newest-first · templates PO §5 / SA |
| AC-F-05 | Empty **Chưa có nhật ký** khi 0 derive + no fallback |
| AC-F-06 | GET 404/network → toast **Không tải được nhật ký** · **cấm** fake |
| AC-F-07 | Entry mnt-list `#i-list` **done only** → **push** `#sc-mnt-log` (thay toast) |
| AC-F-08 | Dual parity fields + copy (`GAP-MOB-ALIGN-01`) trừ chrome back |
| AC-F-09 | **Cấm** device label / proto-click / watermark Gói |
| AC-F-10 | **Cấm** Primary write / composer / POST progress (`GAP-MOB-ACT-01/02`) |
| AC-F-11 | **Cấm** invent `…/logs` / history API P1 |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `estimate` | separate pack | hub / `#i-sum` · **cấm** gộp |
| `mnt-chat` | pipeline riêng | `#i-chat` · **cấm** start từ TL này |
| `mnt-progress` | pipeline riêng | `#i-sync` · **cấm** gộp |
| `mnt-list` | parent reuse | entry/back only · **cấm** reimplement |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start sibling từ TL/Dev `mnt-log`.

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-log` / **`sheet`** (surface **screen**) |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-MNT-LOG` · `T-AND-MNT-LOG` · T-BE **n/a** · T-KIT **n/a** · HIST **DEFER** |
| BFF | `GET maintenance/work-orders/{id}` primary · opt init-data · **client derive** · **cấm** invent logs |
| Real-data | `_data-analy/mnt-log-real-data.md` §A+§B |
| UX packet | `ui/ux-analy.md` §1–§9 · `ui/design.md` · dual proto · map |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/mnt-log.md | **PASS** · T-IOS-MNT-LOG · T-AND-MNT-LOG · T-BE n/a · route_a · source lock |
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
| generatedAt | 2026-08-29T07:32:28.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-log-mobile-control-hint-20260829 |
| realDataHash | sha256:mnt-log-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-log-mobile-bff-20260829 |
| actionTreeHash | sha256:mnt-log-mobile-action-tree-20260829 |
| ctxContentHash | sha256:87761a7752a493d6ad176d96d76ccaf6116ea407ec5ec5513b6e12372a58d701 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_48352a56` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
