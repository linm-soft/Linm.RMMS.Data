# Team lead — Task — patrol-history (mobile list · Lịch sử ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| title | [Mobile] [Tuần đường] -> Lịch sử phiên |
| this role | `team_lead` · `/agent-tl-mobile` |
| requestSource | run packet `task_c9e18eca` · `/agent-qldb-workflow-mobile` · roleOnly=`team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-patrol-history` `DES-MOB-PAT-LIST` · **cấm** Kind A–G web / Lin* grid / Report |
| route_confirm | **route_a** (autoApprove=ON) — Tab 5 · tab **Tuần đường** = hub `#sc-patrol-home` → quick row **Lịch sử phiên** → push `#sc-patrol-history` · back **Tuần đường** pop hub · trailing **Lọc** toast · tap row toast **Chi tiết phiên** · **cấm** filter sheet / push `#sc-patrol-detail` / `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-history` · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-history-control-hint.md` · `patrol-history-bff-endpoints.md` · `patrol-history-action-tree.md` · `patrol-history-real-data.md` · contentHash `sha256:patrol-history-control-hint-20260820` · bffContentHash `sha256:patrol-history-mobile-bff-20260820` |
| prior · po | **confirmed** · `po/requirement.md` · `task_580f12e0` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-patrol-history` · `task_c3eae165` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · `task_46949663` |
| taskId | `task_c9e18eca` |
| updatedAt | `2026-08-20T04:45:00.000Z` |
| thisAction | **Lịch sử ca** `#sc-patrol-history` only · GET `patrol/sessions` · client search · toast Lọc / Chi tiết phiên · **cấm** gộp `#sc-patrol-detail` |

**Cấm:** gộp `#sc-patrol-detail` / filter sheet (`GAP-MOB-ACT-01/02`) · invent `GET patrol-history` / `PatrolHistoryController` · clone `PatrolSessionsController` trên BFF · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `List` / M3 `NavigationBar` / `TabView` (`GAP-MOB-ACT-05`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue search/filter/submit sibling (`GAP-MOB-ACT-07`) · đổi `patrol.badge.done` hub («Xong») · `scaffold_new` / `/mobile-app-architecture`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| kit | reuse map list dual — `LinmTopBar` · `LinmLargeTitle` · `LinmSearchField` · `LinmSearchGlyph` · `LinmListRow` · `LinmBadge` · `LinmToast` · `LinmTabBar` · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** `PatrolHistoryView` / `PatrolHistoryScreen` + GET sessions + demo 4 rows + toast — **không** `scaffold_new` |
| Step 4b | **N/A** — reuse `GET patrol/sessions` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **Tuần đường** = hub `#sc-patrol-home`. Quick row **Lịch sử phiên** → push `#sc-patrol-history` / `DES-MOB-PAT-LIST` (`reuse` hub · **cấm** toast-only entry · **cấm** reimplement hub). Nav back **Tuần đường** → pop hub. Trailing **Lọc** → `LinmToast` **Lọc** · **cấm** sheet. Search client code/route/patrolType/status. Tap row → toast **Chi tiết phiên** · **cấm** GET `{id}` / push `#sc-patrol-detail`. Tab 5 shell **giữ** · in-screen tabs **none**. |
| route_b | — không dùng (không deep-link web) |
| route_c | — không dùng (không invent tab) |

AskQuestion (autoApprove=ON · không chờ board): `route_confirm=route_a` · `2026-08-20T04:45:00.000Z`.

IA lock (design §2 / ux-analy §1): `(auth) Login → Tab 5 · Tuần đường hub → row Lịch sử phiên → push #sc-patrol-history · back pop hub`. **Cấm** invent tab · **cấm** Modal/Sheet child · **cấm** `GET patrol-history`.

---

## Live gap (TL audit 2026-08-20)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-patrol-history` | **DELTA** — scaffold `PatrolHistoryView` + kit nav/search/rows + toast filter/detail + GET + demo 4 rows · **badge hoàn thành = «Xong»** (`historyBadgeTitle` → `patrol.badge.done`) · `historyBadgeKind` **không** map `Offline queue` · DTO `offlineQueued` **không** bind entity | **T-IOS-PAT-HIST** |
| Android `#sc-patrol-history` | **DELTA** — scaffold `PatrolHistoryScreen` + kit + toast + GET + demo 4 rows · cùng badge «Xong» · cùng thiếu `Offline queue` map · TopBar **leadingIcon only** (thiếu nhãn **Tuần đường**) · `LinmListRow` **không** set `leading=null` / no-icon | **T-AND-PAT-HIST** |
| `FetchPatrolHistoryUseCase` | **shipped** dual · page 1 size 50 · ≥3 live else demo · fail → demo · list vẫn mở | **reuse** · verify |
| Hub `onOpenHistory` | **shipped** iOS `showPatrolHistoryFromField` · Android `navigate("patrol-history")` | **reuse** · **cấm** toast-only |
| Search client | **shipped** dual `filteredItems` | **reuse** |
| Toast Lọc / Chi tiết phiên | **shipped** dual · **cấm** sheet / detail push | **reuse** |
| Demo 4 rows SSOT | **shipped** codes + sub copy · `statusKind` missed/offline = `.neutral` (UI badge **không** dùng statusKind) | **reuse** copy · GAP-F-PAT-HIST-02 **không** override kit kind |
| `GET patrol/sessions` | BFF proxy + BE `PatrolSessionsController` **live** | **reuse** · app path `patrol/sessions` |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Sibling `patrol-detail` | `pending_confirm` | **cấm** auto start (`GAP-MOB-ACT-06`) |

### Delta Dev (SA chốt · TL giao)

| ID | Gap live vs PO/Design | Fix (Dev dual) |
|----|------------------------|----------------|
| GAP-F-PAT-HIST-01 | `historyBadgeTitle` dùng `patrol.badge.done` = **«Xong»** | Key **riêng** `patrol.history.badge.done` = **Hoàn thành** · bind list này · **cấm** đổi `patrol.badge.done` hub |
| GAP-F-PAT-HIST-02 | Demo `statusKind` missed/offline = `.neutral` | **Giữ** · UI bind `historyBadgeKind` danger/warning theo status string |
| GAP-F-PAT-HIST-03 | Mapper không map `Offline queue` / `offlineQueued` | Bind `historyBadgeKind` + subtitle/badge: `Offline queue` **hoặc** `offlineQueued=true` → **Mất sóng** / warning · plumb DTO → item (field hoặc normalize `status` trong mapper history) |
| GAP-F-PAT-HIST-04 | `docs/mobile-strings.json` thiếu `patrol.history.*` (copy app `LinmCopy` đã có phần lớn) | Sync JSON SSOT + thêm `patrol.history.badge.done` dual `LinmCopy` |
| GAP-AND-NAV-01 | Android TopBar không `leadingText` **Tuần đường** | Dual parity Design DES-MOB-PAT-LIST-NAV · kit `LinmTopBar` leading text (không invent tab) |
| GAP-AND-ROW-01 | Android `LinmListRow` default leading | **Không** leading icon (`leadingSlot: 0` iOS · Compose omit leading) · chevron **có** |
| GAP-TAB-01 | Tab 5 shell | **Giữ** Tuần đường selected · in-screen tabs **none** |
| GAP-TYP-01 | label/tab 13 · search ≥16 | Kit `LinmSearchField` placeholder **Tìm** · **cấm** fork |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-PAT-HIST | kit | — | **n/a** | — | Kit list **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-PAT-HIST** | ios | SA · route_a | pending | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet | Delta `#sc-patrol-history`: GAP-F-PAT-HIST-01/03/04 · verify 4 demo rows · Lọc toast · tap toast · no leading icon · GET + demo fallback · **cấm** sheet/detail · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-PAT-HIST** | android | SA · route_a | pending | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · cùng ux packet | Same field/API/DoD dual + GAP-AND-NAV-01 + GAP-AND-ROW-01 · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — `GET patrol/sessions` **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-PAT-HIST | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `patrol-history` only · `yarn e2e-qa-mobile` **ok:true** · live sim 6.9" + emulator · store PNG `qa/store/patrol-history` · **cấm** `#sc-patrol-detail` in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp `patrol-detail` / filter sheet / hub reimplement vào task file này.

---

## T-IOS-PAT-HIST — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-PAT-LIST` · `DES-MOB-PAT-LIST-NAV` · `DES-MOB-PAT-LIST-SEARCH` · `DES-MOB-PAT-LIST-ROWS` · `DES-MOB-TABBAR` · `#sc-patrol-history` |
| Pattern | Push list · **không** Modal/Sheet child · frame proto 390×844 |
| Files | `Presentation/Features/PatrolHistory/PatrolHistoryView.swift` · `PatrolHistoryViewModel.swift` · `PatrolHistoryUiState.swift` · `Domain/Entities/PatrolHistoryModels.swift` · `Domain/UseCases/PatrolHomeUseCases.swift` (`FetchPatrolHistoryUseCase`) · `Data/Dto/PatrolDto.swift` · `Domain/Entities/PatrolHomeModels.swift` (`PatrolSessionItem`) · `Presentation/Shared/LinmCopy.swift` · `AppRouter` `showPatrolHistoryFromField` · `AppContainer` DI |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leadingText | **Tuần đường** · pop hub · e2e `btn-history-back` |
| navFilter | `LinmTopBar` trailingText | **Lọc** · toast · e2e `btn-history-filter` · **cấm** sheet |
| title | `LinmLargeTitle` | **Lịch sử ca** |
| search | `LinmSearchField` + `LinmSearchGlyph` | placeholder **Tìm** · client filter · e2e `history-search` |
| rows | `LinmListRow` | `leadingSlot: 0` · chevron **có** · badge 4 trạng thái · e2e `row-history-*` |
| toast | `LinmToast` | **Lọc** / **Chi tiết phiên** · **cấm** `UIAlert` |
| tab | `LinmTabBar` shell | field selected · **cấm** in-screen tabs |

### API / store

| Step | Spec |
|------|------|
| Appear | `FetchPatrolHistoryUseCase` → `GET patrol/sessions` Bearer · `page=1` `pageSize=50` |
| Bind | `items[]` → `PatrolSessionItem` · history subtitle/badge (không dùng hub `badgeTitle`) |
| Fail / empty / &lt;3 | `PatrolHistoryCopy.demoItems` (4 SSOT) · list **vẫn mở** · **cấm** native alert |
| Search | in-memory code / route / patrolType / status · **không** query BFF filter |
| OfflineQueued | map display **Mất sóng** (GAP-F-PAT-HIST-03) |

### Router / shell

`AppRouter`: `showPatrolHistoryFromField` · hub `setOpenHistory`. Back → `showPatrolHistoryFromField = false`. **Cấm** WebView HTML.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-PAT-HIST — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-patrol-history` · frame 412×915 |
| Pattern | Push list · **không** Modal/Sheet · **không** `AlertDialog` system |
| Files | `presentation/feature/patrolhistory/PatrolHistoryScreen.kt` · `PatrolHistoryViewModel.kt` · `PatrolHistoryUiState.kt` · `domain/model/PatrolHistoryModels.kt` · `domain/usecase/PatrolHomeUseCases.kt` · `data/mapper/PatrolDtoMapper.kt` · `data/remote/PatrolDto.kt` · `presentation/copy/LinmCopy.kt` · `MainTabScreen` route `patrol-history` |

### UI / store / API

Cùng bảng field + API như T-IOS. **DELTA thêm:** `LinmTopBar` leading **Tuần đường** (GAP-AND-NAV-01) · `LinmListRow` **không** leading icon (GAP-AND-ROW-01) · cùng GAP-F-PAT-HIST-01/03.

`MainTabScreen`: field → hub → navigate `patrol-history` · pop back hub.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

---

## T-BE-* (Step 4b — N/A)

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` + Mobile.Bff |
| Skill | **không** `/new-endpoint` · **không** `/database-migration` · **không** `/create-bff-api-feature` |
| Scope | Reuse live `GET api/v1/patrol/sessions` via BFF `MobileApiProxyController` catch-all · **cấm** `PatrolHistoryController` · **cấm** invent `api/v1/patrol-history` |
| Build (baseline) | Mobile.Bff `dotnet build` PASS · **không** delta BE this pack |
| Catalog | **Cấm** đổi AllowedStatuses P1 · display map client only |

**BE ALIGN:** SA chốt Step 4b **N/A**. Sau FE Dev **không** bắt buộc BE align delta — chỉ giữ verify BFF build xanh. Run packet «BE ALIGN REQUIRED» **không** áp dụng endpoint mới — **không** chạy `/new-endpoint`.

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | GET sessions |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| List 200 | `ApiResponse<PatrolSessionPagedResult>` · map `items` or `data.items` |
| Fail / offline / empty / &lt;3 | demo SSOT 4 rows · list **vẫn mở** · **cấm** native alert |

Query P1: **chỉ** `page` + `pageSize`. Filter `status`/`route`/`search` query **không bắt**.

### Display map (list này)

| BE `Status` / flag | UI badge | kit badgeKind |
|--------------------|----------|---------------|
| `Đang tuần` | **Đang tuần** | info |
| `Hoàn thành` / `Xong` (live) | **Hoàn thành** · **cấm** «Xong» | success |
| `Bỏ sót` | **Bỏ sót** | danger |
| `Offline queue` **hoặc** `offlineQueued=true` **hoặc** demo `Mất sóng` | **Mất sóng** | warning |

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Hub row **Lịch sử phiên** | push `#sc-patrol-history` |
| Nav back **Tuần đường** | pop hub |
| Trailing **Lọc** | toast **Lọc** |
| Search | client filter |
| Tap row | toast **Chi tiết phiên** |
| Tab Tuần đường | shell giữ |

---

## Out of scope (this pack)

- `#sc-patrol-detail` · filter sheet · GET `{id}`
- Invent `GET patrol-history` / history controller / queue badge API
- Reimplement `#sc-patrol-home`
- Đổi hub `patrol.badge.done` = «Xong»
- Start sibling `pending_confirm`
- Clone PatrolSessionsController · ERP.* · `mfeStdUrl`

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-history` / **`list`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-PAT-HIST` · `T-AND-PAT-HIST` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| STATUS | `specs/patrol-history/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `be/solution-discovery.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-patrol-history` |
| Next slash | `/agent-dev-ios` + `/agent-dev-android` (role sau · **không** chain turn này) |
| Verify | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |
| Chain this turn | **không** (roleOnly=`team_lead`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | 2026-08-20T04:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-control-hint-20260820 |
| bffContentHash | sha256:patrol-history-mobile-bff-20260820 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
