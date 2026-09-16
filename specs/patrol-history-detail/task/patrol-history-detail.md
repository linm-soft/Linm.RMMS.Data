# Team lead — Task — patrol-history-detail (mobile · Chi tiết ca · edit_page)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [Mobile] [Lịch sử phiên] -> Chi tiết ca · timeline live |
| this role | `team_lead` · `/agent-tl-mobile` |
| requestSource | run packet `task_cacd86c6` · `/agent-qldb-workflow-mobile` · roleOnly=`team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | **`sheet`** meta · surface **Full** `#sc-patrol-detail` (PO PACK-01) |
| stack | `native_dual` |
| Feature Kind | **Full screen** push `#sc-patrol-detail` `DES-MOB-PAT-DETAIL` · **cấm** Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| route_confirm | **route_a** (keep · autoApprove=ON) — `#sc-patrol-history` / today → **push** `#sc-patrol-detail` + `Id` · Back → pop · CTA map → `patrol-map` + Id · tlTap → `checkin-detail` + Id · END/Share toast · **không** URL mới · **cấm** `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/store/patrol-history-detail` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web · **cấm** TL chạy e2e |
| prior · data_analy | **confirmed** · `_data-analy/patrol-history-detail-control-hint.md` · `…-bff-endpoints.md` · `…-real-data.md` · `…-action-tree.md` · contentHash `sha256:patrol-history-detail-control-hint-20260912-timeline-live` · realDataHash `sha256:patrol-history-detail-real-data-20260912-timeline-live` · bffContentHash `sha256:patrol-sessions-getbyid-plus-checkins` · actionTreeHash `sha256:patrol-history-detail-action-tree-20260912-timeline-live` · `handoff/data_analy-compact.md` · `task_dc906824` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_eef3894e` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-patrol-detail` · `handoff/design-compact.md` · `task_2b169a90` · `kit_missing_confirm` **N/A** · runtime ≠ demo TL |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · `handoff/sa-compact.md` · `task_9161b83a` · API-01+API-02 Live |
| taskId | `task_cacd86c6` |
| updatedAt | `2026-09-12T13:50:00.000Z` |
| thisAction | **Delta** `#sc-patrol-detail` · strip `timelineDemo` · appear **parallel** GET session + GET check-ins Live · empty TL OK · TAP nav CI-DETAIL · MAP nav + Id · END/Share toast keep · **cấm** invent / PUT / ERP.* |

**Cấm:** gộp `#sc-patrol-history` list/filter · `#sc-checkin-detail` / `#sheet-checkin` save (`patrol-checkin`) · invent path · PUT/DELETE session · POST check-ins · `timelineDemo` fallback · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `NavigationBar` / M3 bar / `TabView` · watermark Gói · fake 200 · start sibling implement (`GAP-MOB-ACT-06`) · enqueue write (`GAP-MOB-ACT-07`) · `scaffold_new` · Step 4b / migration · TL e2e / `yarn build` / `yarn start:std` · implement native Write ở role TL.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Patrol · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | `GET patrol/sessions/{id}` + `GET patrol/sessions/{id}/check-ins` Bearer · XCO giữ · **Live** |
| kit | reuse map dual — `LinmTopBar` · `LinmBadge` · `LinmSectionLabel` · `LinmListRow` · `LinmTimelineRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · `LinmEmptyChrome` · `LinmTabBar` shell · map `ui/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** detail screen · **edit_page** · **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — GetById + GetCheckIns **Live** · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON · keep)

| Option | Decision |
|--------|----------|
| **route_a** (chọn · giữ) | Entry: `#sc-patrol-history` / today → **push** `#sc-patrol-detail` + `Id` · Back → pop list. Appear: **parallel** API-01 + API-02. Session 404/403 → EmptyChrome + toast (+ pop). Session network fail → EmptyChrome + toast · **cấm** fake 200 / demo session. CI fail → empty TL + toast · **cấm** `timelineDemo`. CI `[]` → empty OK. Primary **Mở bản đồ ca** → `go('patrol-map')` + session `Id` · **no toast khi có Id** (`GAP-MOB-PAT-HIST-DET-MAP-01`). Secondary **Kết thúc ca** → toast P1 · **cấm** PUT (`GAP-MOB-PAT-HIST-DET-END-01`). Trailing ellipsis → toast Chia sẻ · **cấm** share sheet. Timeline tap done → `go('checkin-detail')` + check-in `Id` · **≠** toast · **≠** save (`GAP-MOB-PAT-HIST-DET-TAP-01`). Shell Tab **Tuần đường** · `tabs: none`. |
| route_b | — không dùng |
| route_c | — không dùng |

IA lock: `(auth) Login → Tab 5 · Tuần đường → Lịch sử / today → push #sc-patrol-detail · Back = list`. **Cấm** `TabView` / M3 `NavigationBar` thay kit.

AskQuestion (autoApprove=ON): `ios_repo_confirm` · `android_repo_confirm` · `route_confirm=route_a` · `2026-09-12T13:50:00.000Z`.

---

## Live gap (TL audit 2026-09-12 · edit_page)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-patrol-detail` | **DELTA** — screen **đã ship** · timeline vẫn `timelineDemo` / không GET check-ins | **T-IOS-PAT-DETAIL** edit |
| Android `#sc-patrol-detail` | **DELTA** — same · strip demo · wire API-02 | **T-AND-PAT-DETAIL** edit |
| `GET patrol/sessions/{id}` | Live · app đã gọi | **reuse** API-01 |
| `GET …/check-ins` | BE + Bff **Live** · app **chưa** / còn demo | **wire** API-02 · **cấm** invent |
| Timeline | demo SSOT 3 rows | **strip** `timelineDemo` · Live rows · empty OK (`GAP-MOB-PAT-HIST-DET-TIMELINE-01`) |
| Tap done | toast stub? | nav checkin-detail + Id (`GAP-MOB-PAT-HIST-DET-TAP-01`) |
| Map CTA | nav + Id | verify no toast khi có Id (`GAP-MOB-PAT-HIST-DET-MAP-01`) |
| END / Share | toast P1 | **keep** · **cấm** PUT (`GAP-MOB-PAT-HIST-DET-END-01`) |
| New BE / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit | dual map · `kit_missing` **N/A** | **không** `T-KIT-*` |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-PAT-DETAIL | kit | — | **n/a** | — | Kit **đã map** · **không** giao Dev kit |
| **T-IOS-PAT-DETAIL** | ios | SA · route_a | pending | `/agent-dev-ios` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | **Edit** `Presentation/Features/PatrolHistoryDetail/*` · strip `timelineDemo` · appear parallel API-01+API-02 · empty TL OK · TAP/MAP/END Gaps · kit parity · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** + **iPad Pro 13-inch (M5)** PASS · `implement/ios.md` |
| **T-AND-PAT-DETAIL** | android | SA · route_a | pending | `/agent-dev-android` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same dual DoD · edit `presentation/feature/patrolhistorydetail/*` · Retrofit check-ins · `./gradlew :app:assembleDebug` PASS · `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | GetById + GetCheckIns **Live** · Step 4b **N/A** · **cấm** `/new-endpoint` |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-TAB-01 | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | Shell Tab **Tuần đường** · `tabs: none` · **cấm** invent segment |
| T-QA-PAT-DETAIL | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug only · timeline Live / empty · TAP nav · MAP · END toast · `yarn e2e-qa-mobile` · PNG store · **cấm** web e2e |

**1 action = 1 feature.** Sibling = reuse / toast P1 — **cấm** auto start (`GAP-MOB-ACT-06`).

**devSlash:** T-IOS → `/agent-dev-ios` · T-AND → `/agent-dev-android` · **cấm** `/agent-dev` web.

---

## T-IOS-PAT-DETAIL — edit detail (timeline live)

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-PAT-DETAIL` · `DES-MOB-PAT-DETAIL-NAV` · `HERO` · `INFO` · `TL` · `TL-EMPTY` · `CTA` · `DES-MOB-TABBAR` · `#sc-patrol-detail` |
| Pattern | Screen push Full · **edit** existing · frame proto 390×844 |
| `devSlash` | `/agent-dev-ios` |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading | «Lịch sử» + chevron · pop · e2e `btn-pat-detail-back` |
| title | `LinmTopBar` title | **Chi tiết ca** fixed |
| navShare | `LinmTopBar` trailing `#i-ellipsis` | toast Chia sẻ · **cấm** share sheet |
| codeHero | Display Text **≥26 / 28** | GET `Code` |
| badgeStatus | `LinmBadge` | Status VN + OfflineQueued |
| rowUser…Coverage | `LinmListRow` | GET session §B |
| tlItem | `LinmTimelineRow` | **GET check-ins Live** · **cấm** `timelineDemo` |
| tlEmpty | Empty / chrome | `[]` OK · CI fail → empty + toast |
| tlTap | tap done | → `checkin-detail` + Id · **≠** toast |
| btnMap | `LinmPrimaryButton` | `go('patrol-map')` + Id · **no toast khi có Id** · e2e `btn-pat-detail-map` |
| btnEnd | `LinmSecondaryButton` | toast · **cấm** PUT · e2e `btn-pat-detail-end` |
| toast | `LinmToast` | session fail · CI fail · share · end · **cấm** `UIAlert` |
| empty404 | `LinmEmptyChrome` | session NotFound / fail · back |
| tabField | `LinmTabBar` | **Tuần đường** · **cấm** invent |

**Cấm** raw `NavigationBar` / `TabView` · **cấm** CLLocation request · **cấm** `timelineDemo` bất kỳ path.

### Status VN map

| API `Status` (raw) | UI badge |
|--------------------|----------|
| `active` / `in_progress` / «Đang tuần» / empty+isActive | Đang tuần |
| `done` / `completed` / «Hoàn thành» / «Xong» | Hoàn thành |
| `missed` / «Bỏ sót» | Bỏ sót |
| `offline` / `sync_pending` / OfflineQueued=true | Mất sóng |
| other | `{Status raw}` |

### Bind (real-data · SA)

| Line | Rule |
|------|------|
| code | `Code` raw (PAT-*) |
| badge | Status VN · OfflineQueued=true → «Mất sóng» |
| user…coverage | GET session §B · PlannedDate `dd/MM/yyyy` · StartedAt `HH:mm` local |
| timeline | **API-02** rows · empty `[]` OK · **cấm** demo SSOT 3 |
| map CTA | pass session `Id` · no toast khi có Id |
| end / share | toast only · **cấm** PUT |

### API / store

| Step | Spec |
|------|------|
| Appear | UseCase → **parallel** `GET patrol/sessions/{id}` + `GET patrol/sessions/{id}/check-ins` Bearer |
| Repo | extend PatrolSession repo GetById + GetCheckIns · **cấm** fork DTO · **cấm** URLSession in View |
| Session fail | EmptyChrome + toast · **cấm** fake 200 / demo session |
| CI fail | empty TL + toast · **cấm** `timelineDemo` |
| CI `[]` | empty OK |
| 404 / 403 XCO | EmptyChrome · toast · pop session |
| Thiếu Id | back list + toast |
| OUT | invent path · PUT · POST CI · `timelineDemo` |

### Router / shell

| Entry | Behavior |
|-------|----------|
| List / today | push `#sc-patrol-detail` + `Id` (đã ship — verify) |
| Back | pop list |
| btnMap | `go('patrol-map')` + Id · no toast khi có Id |
| tlTapDone | `go('checkin-detail')` + check-in Id · ≠ save · ≠ toast |
| Tab | Tuần đường · `tabs: none` |

### DoD

- Strip `timelineDemo` mọi path
- Appear parallel API-01 + API-02 Live bind
- Empty TL OK · CI fail empty+toast
- TAP / MAP / END Gaps closed per SA
- Kit parity dual · build dest PASS · `implement/ios.md`
- **Cấm** invent / PUT / ERP.* / mfeStdUrl / Step 4b

---

## T-AND-PAT-DETAIL — edit detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | same dual · `#sc-patrol-detail` |
| Pattern | Screen push Full · Compose · **edit** existing |
| `devSlash` | `/agent-dev-android` |

Same UI / bind / API / Status / Router DoD as T-IOS · folder `presentation/feature/patrolhistorydetail/*` · Retrofit `@GET("patrol/sessions/{id}")` + `@GET("patrol/sessions/{id}/check-ins")` · TopBar leading **icon-only** · `./gradlew :app:assembleDebug` PASS · `implement/android.md`.

**Cấm** AlertDialog · invent · PUT · `timelineDemo` · start sibling.

---

## T-BE-API / T-BE-MIG

| id | status | Note |
|----|--------|------|
| T-BE-API | **n/a** | GetById + GetCheckIns Live · Step 4b N/A · **cấm** `/new-endpoint` |
| T-BE-MIG | **n/a** | **không** Schema_* / Seed_* / `/database-migration` |

---

## T-QA-PAT-DETAIL / T-QA-TAB-01

| id | Scope |
|----|-------|
| T-QA-TAB-01 | Tab **Tuần đường** on · no invent segment |
| T-QA-PAT-DETAIL | Appear dual GET · hero/info · timeline Live / empty · TAP nav · MAP no-toast-with-Id · END/Share toast · **không** demo 3 · PNG store · **chỉ** `/agent-qa*` |

---

## Gaps → Dev (locked)

| Gap | Dev action |
|-----|------------|
| `GAP-MOB-PAT-HIST-DET-TIMELINE-01` | strip `timelineDemo` · GET check-ins Live · empty OK |
| `GAP-MOB-PAT-HIST-DET-TAP-01` | done → nav checkin-detail + Id · ≠ toast |
| `GAP-MOB-PAT-HIST-DET-MAP-01` | nav patrol-map + Id · no toast khi có Id |
| `GAP-MOB-PAT-HIST-DET-END-01` | keep toast P1 · **cấm** PUT |

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| DoD TL | task MD + route_a keep + T-IOS/T-AND pending · T-BE n/a · compact written |
| Next | `/agent-dev-ios` rồi `/agent-dev-android` · **cấm** TL implement · **cấm** e2e ở Dev trừ DoD build |
| OUT | invent path · PUT · timelineDemo · ERP.* · mfeStdUrl · Step 4b |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| taskId | `task_cacd86c6` |
| writtenAt | `2026-09-12T13:50:00.000Z` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
