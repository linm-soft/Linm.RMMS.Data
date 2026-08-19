# Team lead — Task — patrol-home (mobile hub)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Mobile] Tuần đường |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`hub`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **hub** tab field `#sc-patrol-home` · **cấm** Kind A–G web / Lin* grid / Report |
| route_confirm | **route_a** (autoApprove=ON) — Tab 5 · selected **Tuần đường** = `#sc-patrol-home` / `DES-MOB-PAT-HOME` · Home quick **Điểm tuần** / tile **Tuần đường** → switch tab field · nav sync / row Lưu trữ → push `#sc-patrol-offline` (`reuse=patrol-offline`) · sibling → toast nhãn · **cấm** deep-link web / `mfeStdUrl` / push `#sc-ops` / check-in sheet |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/patrol-home` · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-home-control-hint.md` · `patrol-home-bff-endpoints.md` · `patrol-home-action-tree.md` · contentHash `sha256:7ad6e12c43d77ffc6133f5e3063b85200a6d18d6bd1f8ff91a265b989dcd3b9c` · bffContentHash `sha256:bcf39a561ac6a4ecf60df85f6c8526b926a1c33a3b3f34628aeaa9b9d6d36ead` |
| prior · po | **confirmed** · `po/requirement.md` · `task_9415067f` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-patrol-home` · `task_e73de8f1` · `kit_missing_confirm` **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · `task_874f3421` |
| taskId | `task_34b03527` |
| updatedAt | `2026-08-19T14:35:00.000Z` |
| thisAction | **Hub Tuần đường** `#sc-patrol-home` only · GET `patrol/sessions` · client filter active · sibling toast · reuse `patrol-offline` |

**Cấm:** gộp sibling screens / check-in sheet / map live (`GAP-MOB-ACT-01/02`) · invent `GET patrol-home` / `PatrolHomeController` · hardcode notify badge `3` · push `#sc-ops` trên pack này · enqueue submit (`GAP-MOB-ACT-07`) · `ERP.*` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `TabView` / M3 `NavigationBar` · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có prior `task_26954659`).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| kit | reuse map hub dual — `LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmProgress` · `LinmPrimaryButton` · `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `LinmNetSignalMark` · `LinmToast` · `LinmTabBar` · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** prior `task_26954659` — **không** `scaffold_new` · **không** `/mobile-app-architecture` |
| Step 4b | **N/A** — reuse `GET patrol/sessions` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **Tuần đường** = hub `#sc-patrol-home` / `DES-MOB-PAT-HOME`. Home quick **Điểm tuần** / tile **Tuần đường** → switch tab field. Nav sync / row Lưu trữ → push `#sc-patrol-offline` (`reuse=patrol-offline`). Bell → toast **Thông báo** · badge **0 ẩn**. Segment **1** Chấm công → toast · reset idx **0**. Sibling chưa ship → `LinmToast` **đúng nhãn control** · **cấm** sheet check-in · **cấm** push màn sibling (trừ offline). |
| route_b | — không dùng (không deep-link web) |
| route_c | — không dùng (không invent tab) |

IA lock (design §2 / ux-analy §1): `(auth) Login → Tab 5 · Tuần đường = this pack · patrol-offline = reuse push`. **Cấm** invent tab · **cấm** Modal/Sheet child · **cấm** `GET patrol-home` hub API.

---

## Live gap (TL audit 2026-08-19)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-patrol-home` | **DELTA** — scaffold shipped prior `task_26954659` · pin CTA raw `Button` (chưa `LinmPrimaryButton`) · nav/hero/KPI/today/quick kit OK | **T-IOS-PAT-HOME** |
| Android `#sc-patrol-home` | **DELTA** — scaffold shipped · pin CTA raw `Row` (chưa `LinmPrimaryButton`) · bell toast OK (fixed proto `go('ops')`) · rest kit OK | **T-AND-PAT-HOME** |
| `PatrolHomeViewModel` + GET sessions | **shipped** — `FetchPatrolSessionsUseCase` · demo fallback · offline count | **reuse** · verify bind |
| Nav sync → patrol-offline | **shipped** iOS `PatrolHomeNavBar` + Android `LinmTopBar` | **reuse** |
| Home quick/tile → tab field | **shipped** `setOpenPatrolHome` / `onOpenPatrolHome` | **reuse** |
| Bell toast dual | **shipped** · notify badge **0 ẩn** · **cấm** hardcode `3` | **reuse** |
| Segment attendance toast | **shipped** · reset idx 0 | **reuse** |
| Offline badge quick Lưu trữ | **shipped** local `FetchOfflineQueueCountUseCase` · **ẩn khi 0** | **reuse** |
| `GET patrol/sessions` | BFF proxy + BE `PatrolSessionsController` **live** | **reuse** · app path `patrol/sessions` |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Sibling 6 × `pending_confirm` | backlog | **cấm** auto start (`GAP-MOB-ACT-06`) |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-PAT-HOME | kit | — | **n/a** | — | Kit hub **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-PAT-HOME** | ios | SA · route_a | pending | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet | Delta `#sc-patrol-home`: migrate pin → `LinmPrimaryButton` · verify dual copy parity §Design · toast siblings · badge 0 · nav sync wire · GET sessions + demo fallback · **cấm** sheet · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-PAT-HOME** | android | SA · route_a | pending | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · cùng ux packet | Same field/API/DoD dual · migrate pin → `LinmPrimaryButton` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — `GET patrol/sessions` **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-PAT-HOME | qa | T-IOS · T-AND | **confirmed** | `/agent-qa-mobile` | AC slug `patrol-home` only · `yarn e2e-qa-mobile` **ok:true** · live sim 6.9" + emulator · store PNG `qa/store/patrol-home` · **cấm** sibling in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`attendance` · `patrol-map` · check-in form · `field-reflect` · `cam-patrol` · `patrol-history` · `supervise` · `ops`) vào task file này như in-scope implement.

---

## T-IOS-PAT-HOME — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-PAT-HOME` · `DES-MOB-PAT-HOME-NAV` · `DES-MOB-PAT-SEG` · `DES-MOB-PAT-ACTIVE` · `DES-MOB-CI-PIN-HERE` · `DES-MOB-PAT-KPI` · `DES-MOB-PAT-TODAY` · `DES-MOB-PAT-QUICK` · `#sc-patrol-home` |
| Pattern | Hub tab field · **không** Modal/Sheet child · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navSync | `LinmTopBar` leading icon | push `#sc-patrol-offline` · e2e `btn-sync` |
| navNotify | `LinmTopBar` trailing icon | toast **Thông báo** · badge **0 ẩn** · e2e `btn-notify` |
| title | `LinmLargeTitle` | **Tuần đường** |
| segPatrol / segAttendance | `LinmSegment` idx **0** / **1** | idx 1 → toast **Chấm công** · reset 0 · **cấm** reorder |
| heroEyebrow | `LinmHeroCard` + signal | Ca đang chạy · Tốt/TB/Yếu · **cấm** «Có mạng» |
| heroTitle / meta / progress | `LinmHeroCard` · `LinmProgress` | bind active session or demo SSOT |
| heroMap / heroCheckin | `LinmHeroAction` | toast P1 · **cấm** sheet |
| pinHere | **`LinmPrimaryButton`** | toast P1 · **DELTA** migrate from raw Button |
| kpiStrip | `LinmKpiStrip` | 2 / 1 / 67% |
| sectionToday | `LinmSectionLabel` + `LinmListRow` + `LinmRowIcon` | 2 rows · `#i-walk`/`#i-check` · iOS chevron · tap toast mã P1 |
| sectionQuick | `LinmListRow` + `LinmRowIcon` | 6 rows · `#i-*` · toast / Lưu trữ push · offline badge local · **ẩn 0** |
| toast | `LinmToast` | **cấm** `UIAlert` |

### API / store

| Step | Spec |
|------|------|
| Appear | `FetchPatrolSessionsUseCase` → `GET patrol/sessions` Bearer |
| Active | `PatrolDtoMapper.active(from:)` filter «Đang tuần» |
| Fail / offline | `PatrolHomeCopy.demoActive` · hub **vẫn mở** · **cấm** block tab |
| Offline badge | `FetchOfflineQueueCountUseCase` local · **ẩn khi 0** |
| Inbox | **không** gọi |

### Router / shell

`AppRouter` tab field: `PatrolHomeNavBar` + `PatrolHomeView`. Home wire `setOpenPatrolHome { tab = .field }`. Sync / Lưu trữ → `showPatrolOfflineFromField`. **Cấm** WebView HTML.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-PAT-HOME — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-patrol-home` · frame 412×915 |
| Pattern | Hub tab field · **không** Modal/Sheet · **không** `AlertDialog` system |

### UI / store / API

Cùng bảng field + API như T-IOS. **DELTA:** migrate `pinButton` raw Row → **`LinmPrimaryButton`**.  
`MainTabScreen`: field tab → `PatrolHomeScreen` · Home wire → select field tab · sync/Lưu trữ → navigate patrol-offline.

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
| Scope | Reuse live `GET api/v1/patrol/sessions` via BFF proxy · **cấm** `PatrolHomeController` |
| Build (baseline) | Mobile.Bff `dotnet build` PASS · **không** delta BE this pack |

**BE ALIGN:** SA chốt Step 4b **N/A**. Sau FE Dev **không** bắt buộc BE align delta — chỉ giữ verify BFF build xanh.

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
| List 200 | `ApiResponse<PatrolSessionPagedResult>` · map `items[]` → hero/KPI/today |
| Fail / offline | demo SSOT · hub **vẫn mở** · **cấm** native alert |

Query: `search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50).

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Tab Tuần đường | show `#sc-patrol-home` |
| Home quick Điểm tuần / tile Tuần đường | switch tab field |
| Nav sync / row Lưu trữ | push `#sc-patrol-offline` |
| Bell | toast **Thông báo** · badge 0 ẩn |
| Segment 1 Chấm công | toast **Chấm công** · reset idx 0 |
| Hero map / check-in / pin | toast nhãn · **cấm** sheet |
| Today row tap | toast mã/row |
| Quick rows 5 | toast nhãn |
| Quick Lưu trữ | push `patrol-offline` · badge local · **ẩn khi 0** |

---

## Out of scope (this pack)

- Mọi màn sibling (`attendance` · `patrol-map` · check-in form · `field-reflect` · `cam-patrol` · `patrol-history` · `supervise` · `ops`)
- Invent `GET patrol-home` / hub controller / queue badge API
- Live GPS pin / map / camera trên hub
- Hardcode badge notify `3`
- Start 6 sibling `pending_confirm`
- Clone PatrolSessionsController · ERP.* · `mfeStdUrl`

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-home` / **`hub`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-PAT-HOME` · `T-AND-PAT-HOME` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| STATUS | `specs/patrol-home/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `be/solution-discovery.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-patrol-home` |
| Next slash | `/agent-dev-ios` + `/agent-dev-android` (role sau · **không** chain turn này) |
| Verify | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |
| Chain this turn | **không** (roleOnly=`team_lead`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T14:35:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:7ad6e12c43d77ffc6133f5e3063b85200a6d18d6bd1f8ff91a265b989dcd3b9c |
| bffContentHash | sha256:bcf39a561ac6a4ecf60df85f6c8526b926a1c33a3b3f34628aeaa9b9d6d36ead |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
