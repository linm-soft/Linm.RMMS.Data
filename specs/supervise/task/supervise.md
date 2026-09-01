# Team lead — Task — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Mobile] Giám sát |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-supervise` · **cấm** Kind A–G web / Lin* grid / Report |
| route_confirm | **route_a** (autoApprove=ON) — push `#sc-supervise` / `DES-MOB-SUPERVISE` từ Home tile **Giám sát** + patrol-home quick **Giám sát** · nav back **Trang Chủ** = pop · Lọc / segment Bản đồ / tap card → toast · **cấm** invent tab / deep-link web / `mfeStdUrl` / push `#sc-patrol-map` / `#sc-checkin-detail` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/supervise` · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/supervise-control-hint.md` · `supervise-bff-endpoints.md` · `supervise-action-tree.md` · contentHash `sha256:supervise-mobile-list-20260819` · bffContentHash `sha256:supervise-mobile-bff-20260819` |
| prior · po | **confirmed** · `po/requirement.md` · `task_bdca2ab2` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-supervise` · `task_b163f3ae` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · `task_761211bf` · Step 4b **N/A** |
| taskId | `task_706e0bec` |
| updatedAt | `2026-08-19T15:28:30.000Z` |
| thisAction | **Giám sát list** `#sc-supervise` only · GET `patrol/attendance-logs` · toast filter/map/card · org fallback SSOT · **cấm** gộp sibling map / checkin detail |

**Cấm:** gộp sibling `patrol-map` / `checkin-detail` (`GAP-MOB-ACT-01/02`) · invent `GET supervise` / `SuperviseController` · filter sheet / map live / detail drill P1 · enqueue submit (`GAP-MOB-ACT-07`) · `ERP.*` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `TabView` / M3 `NavigationBar` · invent kit `LinmRichCheckinCard` · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có prior `task_e8ad42d2`).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| kit | reuse map dual — `LinmTopBar` · `LinmSegment` · `LinmCard` feature composition · `LinmToast` · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** prior `task_e8ad42d2` — **không** `scaffold_new` · **không** `/mobile-app-architecture` |
| Step 4b | **N/A** — reuse `GET patrol/attendance-logs` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5. Home tile **Giám sát** / patrol-home quick **Giám sát** → push `#sc-supervise` / `DES-MOB-SUPERVISE` (stack Home hoặc Field). Nav back **Trang Chủ** → pop parent. **Lọc** → toast **Lọc tuyến · ngày**. Segment idx **0** list owner · idx **1** **Bản đồ** → toast **Bản đồ** · reset idx **0**. Tap card → toast **Chi tiết check-in**. **Cấm** push `#sc-patrol-map` / `#sc-checkin-detail` · **cấm** filter sheet · **cấm** invent tab. |
| route_b | — không dùng (không deep-link web) |
| route_c | — không dùng (không invent tab) |

IA lock (design §2 / ux-analy §1): `(auth) Login → Tab 5 · Home/patrol-home entry → push #sc-supervise · không tab bar trên màn`. **Cấm** invent tab · **cấm** Modal/Sheet child · **cấm** `GET supervise`.

AskQuestion (autoApprove=ON · không chờ board): `route_confirm=route_a` · `2026-08-19T15:28:30.000Z`.

---

## Live gap (TL audit 2026-08-19)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-supervise` | **shipped** Dev `task_e29847e6` — org fallback «Tổ tuần đường · VP-IV.1» · `#i-building` Path + `LinmMapPinGlyph` · toast · GET | **T-IOS-SUPERVISE** **confirmed** |
| Android `#sc-supervise` | **shipped** — gỡ Filled Business/Place · outline building `d=` + `LinmMapPinGlyph` · org SSOT | **T-AND-SUPERVISE** **confirmed** |
| `SuperviseViewModel` + GET attendance-logs | **shipped** — `FetchSuperviseCheckinsUseCase` · live-only EmptyChrome · toast filter/map/card | **cleanup_mock** `task_65931a17` |
| Home tile / patrol-home quick → push | **shipped** `setOpenSupervise` / navigate `supervise` | **reuse** · **cấm** reimplement hubs |
| Demo SSOT 2 rows | **removed** — **cấm** `SuperviseCopy.demoItems` | **closed** cleanup_mock |
| Org empty `Note` | mapper **«Tổ tuần đường · VP-IV.1»** | **closed** Dev dual (`GAP-MOB-SUP-03`) |
| Android `#i-building` / `#i-mappin` | outline Path `d=` / `LinmMapPinGlyph` | **closed** (`GAP-MOB-ICON-02`) |
| Card kit | feature composition (custom) · chưa `LinmCard` wrapper | **DELTA verify** zone `DES-MOB-SUP-CARD` · wrap `LinmCard` content **nếu** kit slot khớp · **cấm** invent `LinmRichCheckinCard` |
| `GET patrol/attendance-logs` | BFF proxy + BE `AttendanceLogsController` **live** | **reuse** · app path `patrol/attendance-logs` · query `page`/`pageSize` only |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Sibling 2 × `pending_confirm` | `patrol-map` · `checkin-detail` | **cấm** auto start (`GAP-MOB-ACT-06`) |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-SUPERVISE | kit | — | **n/a** | — | Kit list **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit · **cấm** invent `LinmRichCheckinCard` |
| **T-IOS-SUPERVISE** | ios | SA · route_a | **confirmed** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet | Delta `#sc-supervise`: org fallback SSOT · dual copy parity §Design · toast siblings · verify `LinmCard` composition · GET attendance-logs + demo · **cấm** push sibling · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-SUPERVISE** | android | SA · route_a | **confirmed** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · cùng ux packet | Same field/API/DoD dual · org fallback SSOT · migrate Business/Place → outline building/mappin · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — `GET patrol/attendance-logs` **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-TAB-01 | qa | T-IOS · T-AND | **confirmed** | `/agent-qa-mobile` | Segment idx **0** list · **1** map toast · **cấm** reorder (`GAP-TAB-01` · `tab-index-analy-review.md`) |
| T-QA-SUPERVISE | qa | T-IOS · T-AND | **confirmed** | `/agent-qa-mobile` | AC slug `supervise` only · `yarn e2e-qa-mobile` **ok:true** · live sim 6.9" + emulator · store PNG `qa/store/supervise` · **cấm** sibling in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`patrol-map` · `checkin-detail`) vào task file này như in-scope implement.

---

## T-IOS-SUPERVISE — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-SUPERVISE` · `DES-MOB-SUP-NAV` · `DES-MOB-SUP-SEG` · `DES-MOB-SUP-LIST` · `DES-MOB-SUP-CARD` · `#sc-supervise` |
| Pattern | Push list · **không** Modal/Sheet child · frame proto 390×844 · **không** tab bar trên màn |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading text | **Trang Chủ** · pop · e2e `btn-sup-back` |
| navTitle | `LinmTopBar` title | **Giám sát tuần đường** |
| navFilter | `LinmTopBar` trailing text | toast **Lọc tuyến · ngày** · e2e `btn-sup-filter` |
| segList / segMap | `LinmSegment` idx **0** / **1** | idx 1 → toast **Bản đồ** · reset 0 · e2e `sup-segment` · **cấm** reorder |
| cardTitle | Text 17 bold | `UserName` |
| cardOrg | composition + `building.2` | live `Note` / empty → **Tổ tuần đường · VP-IV.1** |
| cardLoc | composition + `mappin` | `Route` + `KmPoint` |
| cardTime | muted 12–13 | `CheckInAt` local |
| cardStatus | strip 13 | ok/warn · «Trạng thái: …» |
| cardThumb | 56 gradient | **cấm** camera P1 |
| card shell | `LinmCard` composition **hoặc** feature card cùng zone | **cấm** invent kit |
| toast | `LinmToast` / session toast | **cấm** `UIAlert` |

### API / store

| Step | Spec |
|------|------|
| Appear | `FetchSuperviseCheckinsUseCase` → `GET patrol/attendance-logs` Bearer · `page`/`pageSize` |
| Map | `SuperviseDtoMapper.checkin(from:)` · empty Note → «Tổ tuần đường · VP-IV.1» |
| Fail / offline / empty | `SuperviseCopy.demoItems` · list **vẫn mở** · **cấm** block screen |
| Filter / map / detail | toast only · **không** API filter P1 |

### Router / shell

`AppRouter`: Home `setOpenSupervise` → `showSuperviseFromHome` · Field `setOpenSupervise` → `showSuperviseFromField` · `SuperviseView` + `SuperviseViewModel`. **Cấm** WebView HTML · **cấm** reimplement Home / patrol-home.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-SUPERVISE — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-supervise` · frame 412×915 |
| Pattern | Push list · **không** Modal/Sheet · **không** `AlertDialog` system |

### UI / store / API

Cùng bảng field + API như T-IOS. **DELTA:** replace `Icons.Default.Business` / `Place` → outline building / mappin motif (`GAP-MOB-ICON-02`). Org mapper empty → «Tổ tuần đường · VP-IV.1».  
`MainTabScreen`: navigate `supervise` từ Home tile / patrol-home quick · back pop. Hilt `SuperviseViewModel` + `FetchSuperviseCheckinsUseCase`.

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
| Scope | Reuse live `GET api/v1/patrol/attendance-logs` via BFF proxy · **cấm** `SuperviseController` / invent `api/v1/supervise` |
| Build (baseline) | Mobile.Bff `dotnet build` PASS · **không** delta BE this pack |

**BE ALIGN:** SA chốt Step 4b **N/A**. Sau FE Dev **không** bắt buộc BE align delta — chỉ giữ verify BFF build xanh.

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | GET attendance-logs |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| List 200 | `ApiResponse<AttendanceLogPagedResult>` · map `items[]` → `SuperviseCheckinItem` |
| Fail / offline / empty | demo SSOT · list **vẫn mở** · **cấm** native alert |

Query P1 app: `page` · `pageSize` (default 50). Filter UI toast — **không** bind `search`/`status`/`route`/`onlyOutZone` P1.

DTO bind: `Id` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Status` · `Note` (org).

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Home tile Giám sát | push `#sc-supervise` |
| patrol-home quick Giám sát | push `#sc-supervise` |
| Nav back Trang Chủ | pop parent stack |
| Lọc | toast **Lọc tuyến · ngày** |
| Segment 0 Danh sách check in | owner list |
| Segment 1 Bản đồ | toast **Bản đồ** · reset idx 0 |
| Tap card | toast **Chi tiết check-in** |

---

## Out of scope (this pack)

- Sibling màn: `patrol-map` · `checkin-detail` (giữ `pending_confirm`)
- Filter sheet / API filter UI · map live · detail drill GET by id
- Invent `GET supervise` / `SuperviseController` / org-unit API
- Camera media trên thumb · GPS trên list
- Reimplement Home / patrol-home hubs
- Start 2 sibling `pending_confirm`
- Clone AttendanceLogsController trên Mobile.Bff · ERP.* · `mfeStdUrl`

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `supervise` / **`list`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-SUPERVISE` · `T-AND-SUPERVISE` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| STATUS | `specs/supervise/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `be/solution-discovery.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-supervise` |
| Next slash | `/agent-qa-mobile` (role sau Dev `task_e29847e6` · **không** chain turn Dev) |
| Verify | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |
| Chain this turn | **không** (roleOnly=`team_lead`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.22 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T15:28:30.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-mobile-list-20260819 |
| bffContentHash | sha256:supervise-mobile-bff-20260819 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.22 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
