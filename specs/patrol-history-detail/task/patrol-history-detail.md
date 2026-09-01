# Team lead — Task — patrol-history-detail (mobile · Chi tiết ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history-detail` |
| title | [Mobile] [Lịch sử phiên] -> Chi tiết ca |
| this role | `team_lead` · `/agent-tl-mobile` |
| requestSource | run packet `task_edc8421b` · `/agent-qldb-workflow-mobile` · roleOnly=`team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`sheet`** meta · surface **Full** `#sc-patrol-detail` (PO PACK-01) |
| stack | `native_dual` |
| Feature Kind | **Full screen** push `#sc-patrol-detail` `DES-MOB-PAT-DETAIL` · **cấm** Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| route_confirm | **route_a** (autoApprove=ON) — `#sc-patrol-history` row → **push** `#sc-patrol-detail` + `Id` · Back → pop list · CTA map → `patrol-map` + Id · END/Share toast · **cấm** toast-only entry khi pack ship · **cấm** `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/store/patrol-history-detail` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web · **cấm** TL chạy e2e |
| prior · data_analy | **confirmed** · `_data-analy/patrol-history-detail-control-hint.md` · `…-bff-endpoints.md` · `…-real-data.md` · `…-action-tree.md` · contentHash `sha256:patrol-history-detail-control-hint-20260831` · realDataHash `sha256:patrol-history-detail-real-data-20260831` · bffContentHash `sha256:patrol-sessions-getbyid-passthrough` · actionTreeHash `sha256:patrol-history-detail-action-tree-20260831` · compact **missing** → full Read |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_74ed698b` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-patrol-detail` · `ui/review/demo-parity.md` · `handoff/design-compact.md` · `task_5777786c` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · `handoff/sa-compact.md` · `task_47202291` |
| taskId | `task_edc8421b` |
| updatedAt | `2026-09-01T01:07:48.000Z` |
| thisAction | **Chi tiết ca** `#sc-patrol-detail` only · appear GET `patrol/sessions/{id}` · hero+info+timeline demo SSOT · CTA map nav · END/Share toast · parent list rewire push + Id |

**Cấm:** gộp `#sc-patrol-history` list/filter · `#sc-checkin-detail` / `#sheet-checkin` save (`patrol-checkin`) · invent `api/v1/patrol-history-detail` / `GET …/check-ins` P1 · PUT/DELETE session · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `NavigationBar` / M3 bar / `TabView` · watermark Gói · fake 200 · start sibling `patrol-map` / `patrol-checkin` implement (`GAP-MOB-ACT-06`) · enqueue write (`GAP-MOB-ACT-07`) · `scaffold_new` / `/mobile-app-architecture` · Step 4b / migration · TL e2e / `yarn build` / `yarn start:std` · implement native Write ở role TL.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Patrol · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | **chỉ** `GET patrol/sessions/{id}` Bearer · XCO giữ |
| kit | reuse map dual — `LinmTopBar` · `LinmBadge` · `LinmSectionLabel` · `LinmListRow` · `LinmTimelineRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · `LinmEmptyChrome` · `LinmTabBar` shell · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** patrol-history · **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse live `GET patrol/sessions/{id}` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: `#sc-patrol-history` list row tap → **push** `#sc-patrol-detail` `DES-MOB-PAT-DETAIL` pass `Id` · **thay** toast-only `Chi tiết phiên` khi pack ship (`GAP-MOB-PAT-HIST-DET-NAV-01` / `DEMO-01`). Back / leading «Lịch sử»+chevron (iOS) / icon-only (Android) → pop `#sc-patrol-history` · **cấm** reimplement list. Appear: GET by id · 404 EmptyChrome + back · network fail → demo SSOT + toast · screen **vẫn mở** · **cấm** fake 200. Thiếu Id nav → back list + toast · **cấm** blank invent. Primary **Mở bản đồ ca** → `go('patrol-map')` pass session `Id` · toast P1 nếu sibling chưa ship · **cấm** start sibling (`GAP-MOB-ACT-06`). Secondary **Kết thúc ca** → toast «Kết thúc ca — xác nhận sau» · **cấm** PUT. Trailing ellipsis → toast Chia sẻ · **cấm** share sheet P1. Timeline 3 rows demo SSOT · tap done → `go('checkin-detail')` owner `patrol-checkin` · **≠** save. Shell Tab 5 **giữ** selected **Tuần đường** · pack `tabs: none` · **cấm** invent segment (`GAP-TAB-01`). |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng (không invent tab) |

IA lock: `(auth) Login → Tab 5 · Tuần đường hub → Lịch sử phiên #sc-patrol-history → push #sc-patrol-detail · Back = list`. **Cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar` / `LinmTopBar`.

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `route_confirm=route_a` · `2026-09-01T01:07:48.000Z`.

---

## Live gap (TL audit 2026-09-01)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-patrol-detail` | **DELTA** — **chưa** feature folder Chi tiết ca · list row = toast only | **T-IOS-PAT-DETAIL** |
| Android `#sc-patrol-detail` | **DELTA** — **chưa** detail screen · list row = toast only | **T-AND-PAT-DETAIL** |
| `GET patrol/sessions/{id}` | BE `PatrolSessionsController.GetById` + XCO + Mobile.Bff proxy **live** · app **chưa** gọi GetById trên detail | **reuse** path · Dev thêm GetById / Retrofit `@GET` · **cấm** invent path |
| `PatrolSessionDto` | live fields đủ §B | **reuse** · **cấm** fork DTO |
| List → detail entry | toast stub | wire push + `Id` · supersede toast-only · **cấm** reimplement list chrome |
| Timeline | demo SSOT 3 rows P1 | **UI-only** · **cấm** GET check-ins P1 |
| END / Share | toast P1 | **cấm** PUT / share sheet |
| Map CTA | nav `patrol-map` | reuse · toast nếu chưa ship · **cấm** start |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit detail | dual map Design · `kit_missing` **N/A** | Dev **cấm** raw NavBar/TabView · **cấm** `T-KIT-*` |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-PAT-DETAIL | kit | — | **n/a** | — | Kit detail **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-PAT-DETAIL** | ios | SA · route_a | pending | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | Ship `Presentation/Features/PatrolHistoryDetail/*` · kit parity · GET by id · offline demo SSOT · wire list → push · timeline 3 · CTA map/end/share · Status VN · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** + **iPad Pro 13-inch (M5)** PASS · ghi `implement/ios.md` |
| **T-AND-PAT-DETAIL** | android | SA · route_a | pending | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/patrolhistorydetail/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — GetById **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-TAB-01 | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | Shell Tab **Tuần đường** · pack `tabs: none` · **cấm** invent segment (`GAP-TAB-01`) |
| T-QA-PAT-DETAIL | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `patrol-history-detail` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/patrol-history-detail` · **cấm** sibling list/checkin CRUD in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`patrol-history` list chrome · `patrol-map` embed · `patrol-checkin` save) vào task như in-scope implement. Sibling = reuse / toast P1 — **cấm** auto start (`GAP-MOB-ACT-06`).

**devSlash:** T-IOS → `/agent-dev-ios` · T-AND → `/agent-dev-android` · **cấm** `/agent-dev` web.

---

## T-IOS-PAT-DETAIL — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-PAT-DETAIL` · `DES-MOB-PAT-DETAIL-NAV` · `HERO` · `INFO` · `TL` · `CTA` · `DES-MOB-TABBAR` · `#sc-patrol-detail` |
| Pattern | Screen push Full · **không** Modal/Sheet product · frame proto 390×844 |
| `devSlash` | `/agent-dev-ios` |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | text «Lịch sử» + chevron · pop list · e2e `btn-pat-detail-back` |
| title | `LinmTopBar` title | **Chi tiết ca** fixed |
| navShare | `LinmTopBar` trailing `#i-ellipsis` | toast Chia sẻ · **cấm** share sheet |
| codeLabel | Caption Text **13** | **Mã phiên** fixed |
| codeHero | Display Text **≥26 / 28** bold | GET `Code` |
| badgeStatus | `LinmBadge` | Status VN + OfflineQueued override |
| sectionInfo | `LinmSectionLabel` | **Thông tin** |
| rowUser…Coverage | `LinmListRow` | label **13** / value **≥16** · §B bind |
| sectionTimeline | `LinmSectionLabel` | **Điểm tuần** |
| tlItem | `LinmTimelineRow` | demo SSOT 3 rows · tap done → checkin-detail |
| btnMap | `LinmPrimaryButton` | **Mở bản đồ ca** · `go('patrol-map')` + Id · e2e `btn-pat-detail-map` |
| btnEnd | `LinmSecondaryButton` | **Kết thúc ca** · toast · **cấm** PUT · e2e `btn-pat-detail-end` |
| toast | `LinmToast` | GET fail · share · end · thiếu Id · **cấm** `UIAlert` |
| empty404 | `LinmEmptyChrome` | NotFound · back list |
| tabField | `LinmTabBar` | shell selected **Tuần đường** · **cấm** invent |

**Cấm** raw `NavigationBar` / `TabView` · **cấm** ship foot Gói · **cấm** request CLLocation trên detail.

### Demo / fallback SSOT (PAT-20260810-0014)

| Field | Value |
|-------|-------|
| Code | PAT-20260810-0014 |
| Status | Đang tuần |
| UserName | Nguyễn Văn A |
| Route | QL.1 · Km 1551+200–1561+134 |
| PatrolType | Tuần đường |
| PlannedDate | 10/08/2026 |
| StartedAt | 07:20 (UTC+7) |
| Coverage | 67% |
| tlDone1 | Km 1551+200 · Xuân Hải · 07:28 · định vị đạt · Ảnh ×1 |
| tlDone2 | Km 1556+000 · Cống ngang · 08:05 |
| tlPending | Km 1561+134 · Phước Dinh · Đang tới · ~180 m |

### Status VN map

| API `Status` (raw) | UI badge |
|--------------------|----------|
| `active` / `in_progress` / «Đang tuần» / empty+isActive | Đang tuần |
| `done` / `completed` / «Hoàn thành» / «Xong» | Hoàn thành |
| `missed` / «Bỏ sót» | Bỏ sót |
| `offline` / `sync_pending` / OfflineQueued=true | Mất sóng |
| other | `{Status raw}` |

### Bind (real-data §B · SA)

| Line | Rule |
|------|------|
| code | `Code` raw (PAT-*) |
| badge | Status VN · OfflineQueued=true → «Mất sóng» |
| user | `UserName` raw |
| route | `Route` raw · demo append Km khi offline thiếu |
| type | `PatrolType` raw |
| plan date | `PlannedDate` → `dd/MM/yyyy` |
| started | `StartedAt` → `HH:mm` local + `(UTC+7)` |
| coverage | `CoveragePercent` → `{n}%` |
| timeline | demo SSOT 3 · **không** GET check-ins |
| map CTA | pass session `Id` · **không** fake coords |
| end / share | toast only |

### API / store

| Step | Spec |
|------|------|
| Appear | UseCase → `GET patrol/sessions/{id}` Bearer |
| Repo | extend PatrolHistory / PatrolSession repo GetById · **cấm** fork DTO · **cấm** URLSession in View |
| Fail / offline | demo SSOT · toast · **cấm** fake 200 · **không** OfflineQueue write |
| 404 | EmptyChrome · back list |
| 403 XCO | toast · back list |
| Thiếu Id | back list + toast |
| Sibling API | **cấm** check-ins list / PUT session / POST check-ins trên slug này |

### Router / shell

| Entry | Behavior |
|-------|----------|
| List row | **thay** toast → push `#sc-patrol-detail` + `Id` |
| Back | pop `#sc-patrol-history` |
| btnMap | `go('patrol-map')` + Id |
| tlTapDone | `go('checkin-detail')` · owner patrol-checkin · ≠ save |
| Tab | Tuần đường selected · `tabs: none` |

### DoD

- Field parity dual + kit map cite
- GET by id live bind · offline demo fallback
- Parent rewire push
- Timeline demo 3 · END/Share toast · Map nav
- `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** + **iPad Pro 13-inch (M5)** PASS
- `implement/ios.md` written
- **Cấm** invent path / PUT / check-ins GET / ERP.* / mfeStdUrl

---

## T-AND-PAT-DETAIL — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | same dual · `#sc-patrol-detail` |
| Pattern | Screen push Full · Compose |
| `devSlash` | `/agent-dev-android` |

Same UI / bind / API / Status / Demo / Router DoD as T-IOS · folder `presentation/feature/patrolhistorydetail/*` · Retrofit `@GET("patrol/sessions/{id}")` · TopBar leading **icon-only** (parity Design) · `./gradlew :app:assembleDebug` PASS · `implement/android.md`.

**Cấm** AlertDialog · invent path · PUT · GET check-ins · reimplement list · start sibling.

---

## T-BE-API / T-BE-MIG

| id | status | Note |
|----|--------|------|
| T-BE-API | **n/a** | GetById live · Step 4b N/A · **cấm** `/new-endpoint` |
| T-BE-MIG | **n/a** | **không** Schema_* / Seed_* / `/database-migration` |

---

## T-QA-PAT-DETAIL / T-QA-TAB-01

| id | Scope |
|----|-------|
| T-QA-TAB-01 | Tab **Tuần đường** on · no invent segment |
| T-QA-PAT-DETAIL | Appear GET · hero/info bind · timeline 3 · map CTA · end/share toast · list push · 404/offline · PNG store · **chỉ** `/agent-qa*` chạy e2e |

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| DoD TL | task MD + route_a + T-IOS/T-AND pending · T-BE n/a · compact written |
| Next | `/agent-dev-ios` rồi `/agent-dev-android` · **cấm** TL implement · **cấm** e2e ở Dev trừ DoD build |
| OUT | invent path · PUT · check-ins GET · ERP.* · mfeStdUrl · Step 4b |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| taskId | `task_edc8421b` |
| writtenAt | `2026-09-01T01:07:48.000Z` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
