# Team lead — Task — supervise (mobile list · Giám sát · edit_page)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Mobile] Giám sát — filter live + map sibling |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | **`list`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-supervise` · **cấm** Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| route_confirm | **route_a** (autoApprove=ON) — giữ entry Home/patrol-home → `#sc-supervise` · **§ Delta:** Lọc → owner sheet live · seg Bản đồ → push `#sc-patrol-map` · tap card → keep `supervise-detail` · EmptyChrome live-only |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa-mobile` · **cấm** e2e / `yarn start:std` ở TL |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · `_data-analy/supervise-*` · contentHash `sha256:supervise-mobile-filter-live-20260912` |
| prior · po | **confirmed** · `handoff/po-compact.md` · `po/requirement.md` · `task_d7e615af` |
| prior · design | **confirmed** · `handoff/design-compact.md` · dual proto · `task_69283465` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `handoff/sa-compact.md` · `be/solution-discovery.md` · `solution_confirm=approve` · `task_2ac8625f` · Step 4b **N/A** |
| taskId | `task_f009ee98` |
| updatedAt | `2026-09-12T10:05:00.000Z` |
| thisAction | **§ Delta** filter sheet live + map sibling nav + detail keep · GET `patrol/attendance-logs` ±`route` · date client `CheckInAt` · **cấm** toast fake · **cấm** invent `/supervise` |

**Cấm:** invent `GET supervise` / `SuperviseController` · embed map in-screen · BE fromDate P1 (`GAP-MOB-SUP-04` = P2) · auto-start sibling pipeline (`GAP-MOB-ACT-06`) · gộp implement `patrol-map` / `supervise-detail` screen body vào pack này · `ERP.*` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · invent kit `LinmRichCheckinCard` · `scaffold_new` · demo/mock list fallback.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| kit | reuse map dual — `LinmTopBar` · `LinmSegment` · sheet/DatePicker TextField · `LinmCard` composition · `LinmToast` · cite `ui/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` |
| Step 4b | **N/A** — reuse `GET patrol/attendance-logs` ±`route` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Auth → Tab Home/Field · tile **Giám sát** / patrol-home quick → push `#sc-supervise` / `DES-MOB-SUPERVISE`. Back **Trang Chủ** → pop. **Lọc** → owner sheet (Tuyến + Ngày) · Apply = GET ±`route` + client day filter · Clear = clear+reload · **cấm** toast fake. Segment **0** list owner · **1 Bản đồ** → push `#sc-patrol-map` · reset idx **0** · **cấm** toast · **cấm** embed. Tap card → keep push `supervise-detail`. Fail/0 → EmptyChrome + toast · **cấm** demo list. |
| route_b | — không dùng |
| route_c | — không dùng |

IA lock: `(auth) → Home/patrol-home entry → push #sc-supervise · không tab bar trên màn`. **Cấm** invent tab · **cấm** invent `GET supervise`.

AskQuestion (autoApprove=ON): `route_confirm=route_a` · `2026-09-12T10:05:00.000Z`.

---

## Live gap (TL audit 2026-09-12 · edit_page)

| Surface | Live | TL task |
|---------|------|---------|
| iOS/Android `#sc-supervise` list + GET | **shipped** prior Dev | **keep** base · delta only |
| Filter UI | toast **Lọc tuyến · ngày** | **T-IOS/AND-SUP-FILTER** → sheet live |
| Map segment | toast **Bản đồ** | **T-IOS/AND-SUP-MAP-NAV** → push `#sc-patrol-map` |
| Card tap | toast chi tiết | **wire** keep `supervise-detail` (in FILTER/MAP tasks DoD) |
| Empty / fail | demo fallback legacy | **remove** → EmptyChrome live-only |
| Query `route` | app page/pageSize only | bind ±`route` on Apply |
| Date filter | none / toast | client filter `CheckInAt` day · **cấm** BE fromDate P1 |
| `GET attendance-logs` BFF/BE | live | **reuse** · T-BE **n/a** |
| Sibling `patrol-map` screen | native exists | **nav only** · **cấm** reimplement · **cấm** auto-start pipeline |
| BE fromDate/toDate | missing | **P2** `GAP-MOB-SUP-04` |

---

## Tasks

| id | layer | deps | status | skills / `devSlash` | DoD |
|----|-------|------|--------|---------------------|-----|
| T-KIT-SUPERVISE | kit | — | **n/a** | — | Kit map dual · **không** giao kit |
| **T-IOS-SUP-FILTER** | ios | SA · route_a | **pending** | **`/agent-dev-ios`** · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` | Owner sheet Tuyến+Ngày · Apply GET ±`route` + client day · Clear · EmptyChrome live-only · gỡ toast fake / demo · card → `supervise-detail` keep · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro Max** (+ **iPad Pro 13-inch (M5)** smoke) PASS · `implement/ios.md` |
| **T-IOS-SUP-MAP-NAV** | ios | SA · route_a | **pending** | **`/agent-dev-ios`** · `/dev-ios-swiftui` | seg idx1 → push `#sc-patrol-map` · reset 0 · **cấm** toast/embed · **cấm** rewrite map screen · same build DoD · ghi `implement/ios.md` |
| **T-AND-SUP-FILTER** | android | SA · route_a | **pending** | **`/agent-dev-android`** · `/android-new-screen` · `/dev-android-compose` | Same field/API dual · sheet live · EmptyChrome · detail keep · `./gradlew :app:assembleDebug` PASS · `implement/android.md` |
| **T-AND-SUP-MAP-NAV** | android | SA · route_a | **pending** | **`/agent-dev-android`** · `/dev-android-compose` | seg → push `patrol-map` · reset 0 · **cấm** toast/embed · assembleDebug PASS |
| **T-UI-FILTER-01** | ios+and | — | **mapped** | (covered by T-*-SUP-FILTER) | Native owner sheet — **không** `LinErpListFilterBar` / web filter-bar |
| **T-BE-API** | be | — | **n/a** | — | Reuse GET · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** migration |
| T-QA-TAB-01 | qa | T-IOS · T-AND | **pending** | `/agent-qa-mobile` | seg 0 list · 1 map **nav** · **cấm** reorder |
| T-QA-FILTER-01 | qa | T-*-FILTER | **pending** | `/agent-qa-mobile` | Apply/Clear live · route query · date client · **cấm** toast fake |
| T-QA-SUPERVISE | qa | T-IOS · T-AND | **pending** | `/agent-qa-mobile` | AC slug `supervise` · `yarn e2e-qa-mobile` · store PNG · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** Sibling screen body out-of-scope; **nav wire only**.

---

## T-IOS-SUP-FILTER — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-SUPERVISE` · `DES-MOB-SUP-NAV` · `SUP-FILTER` · `SUP-LIST` · `SUP-CARD` · `#sc-supervise` |
| `devSlash` | `/agent-dev-ios` |
| Pattern | Push list + **owner filter sheet** (Design) · frame proto 390×844 |

### UI

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` | **Trang Chủ** · pop · `btn-sup-back` |
| navTitle | `LinmTopBar` | **Giám sát tuần đường** |
| btn-sup-filter | trailing text | open sheet · **cấm** toast fake |
| filterRoute | TextField | query `route` |
| filterDate | DatePicker | client day on `CheckInAt` |
| filterApply | Primary | reload API-01 ±`route` + client date |
| filterClear | Ghost | clear state + reload |
| cards | feature / `LinmCard` | GET ± filter · tap → `supervise-detail` keep |
| empty | EmptyChrome | 0 / fail · **cấm** demo list · toast ok |
| toast | `LinmToast` | fail/offline only · **cấm** `UIAlert` |

### API / store

| Step | Spec |
|------|------|
| Appear / Apply | `FetchSuperviseCheckinsUseCase` → `GET patrol/attendance-logs` Bearer · `page`/`pageSize` · optional `route` |
| Date | filter client by local calendar day of `CheckInAt` · **cấm** BE fromDate P1 |
| Map DTO | keep `SuperviseDtoMapper` · org empty → «Tổ tuần đường · VP-IV.1» |
| Fail / empty | EmptyChrome + toast · list still opens · **cấm** `SuperviseCopy.demoItems` |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-IOS-SUP-MAP-NAV — detail

| | |
|--|--|
| `source.repo` | same iOS |
| `devSlash` | `/agent-dev-ios` |
| Behavior | `LinmSegment` idx **1** → push `#sc-patrol-map` (native sibling) · reset idx **0** · **cấm** toast **Bản đồ** · **cấm** embed map · **cấm** rewrite `patrol-map` UI |
| Build | same `xcodebuild` DoD |

---

## T-AND-SUP-FILTER — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-supervise` · frame 412×915 |
| `devSlash` | `/agent-dev-android` |
| Scope | Same sheet/API/EmptyChrome/detail as iOS · **cấm** `AlertDialog` system |
| Build | `./gradlew :app:assembleDebug` PASS |

---

## T-AND-SUP-MAP-NAV — detail

| | |
|--|--|
| `source.repo` | same Android |
| `devSlash` | `/agent-dev-android` |
| Behavior | segment Bản đồ → navigate `patrol-map` · reset 0 · **cấm** toast/embed |
| Build | `assembleDebug` PASS |

---

## T-BE-* (Step 4b — N/A)

| | |
|--|--|
| `source.repo` | WebService + Mobile.Bff |
| Skill | **không** `/new-endpoint` · **không** `/database-migration` · **không** `/create-bff-api-feature` |
| Scope | Reuse live `GET api/v1/patrol/attendance-logs` via BFF · optional query `route` already in SA · **cấm** invent supervise path |
| Build | **n/a** this pack (no BE delta) |

**BE ALIGN:** skip — Step 4b **N/A**.

---

## Client contract (SSOT SA)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | GET attendance-logs |
| `X-Company-Id` / `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| List 200 | `ApiResponse<AttendanceLogPagedResult>` → `SuperviseCheckinItem` |
| Fail / empty | EmptyChrome + toast · **cấm** demo · **cấm** native alert |

Query P1: `page` · `pageSize` · optional `route`. Date = client only.

DTO: `Id` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Status` · `Note`.

---

## Navigation / action matrix (edit_page)

| Control | Behavior |
|---------|----------|
| Home / patrol-home Giám sát | push `#sc-supervise` (reuse) |
| Nav back Trang Chủ | pop |
| Lọc | open sheet · **live** |
| Apply / Clear | reload ±`route` + client date |
| Segment 0 | owner list |
| Segment 1 Bản đồ | push `#sc-patrol-map` · reset 0 |
| Tap card | keep `supervise-detail` |

---

## Out of scope

- Implement/re-skin `patrol-map` / `supervise-detail` body
- BE fromDate/toDate (`GAP-MOB-SUP-04` P2)
- Invent supervise API · embed map · ERP.* · `mfeStdUrl`
- Auto-start sibling feature pipelines
- Web T-UI-LIST / LinErpListFilterBar / form CRUD LeaveConfirm

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `supervise` / **`list`** |
| changeScope | `edit_page` |
| route_confirm | **route_a** |
| Tasks | `T-IOS-SUP-FILTER` · `T-IOS-SUP-MAP-NAV` · `T-AND-SUP-FILTER` · `T-AND-SUP-MAP-NAV` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| `devSlash` | iOS `/agent-dev-ios` · Android `/agent-dev-android` |
| STATUS | `specs/supervise/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `be/solution-discovery.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-supervise` |
| Next | Dev dual → QA `/agent-qa-mobile` (e2eQa ON) |
| Chain this turn | **không** (roleOnly=`team_lead`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-12T10:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-mobile-filter-live-20260912 |
| bffContentHash | sha256:supervise-mobile-bff-filter-20260912 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
