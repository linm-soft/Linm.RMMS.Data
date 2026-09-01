# Team lead — Task — ops (mobile list · Thông báo)

| Field | Value |
|-------|-------|
| feature | `ops` |
| title | [Mobile] Thông báo |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | **`list`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **list** inbox `#sc-ops` · **cấm** Kind B web schema editor / full-page form |
| route_confirm | **route_a** (autoApprove=ON) — push `#sc-ops` / `DES-MOB-OPS` từ Me `row-ops` hoặc Home `LinmNotifyButton` · back pop stack Me/Home · mark-read action trên list · **cấm** invent tab / deep-link web / `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/ops` · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/ops-control-hint.md` · `ops-bff-endpoints.md` · `ops-action-tree.md` · `ops-real-data.md` · contentHash `sha256:ops-mobile-edit-list-20260819` · bffContentHash `sha256:notification-inbox-proxy-passthrough` |
| prior · po | **confirmed** · `po/requirement-mobile.md` · `task_8f46a3b3` |
| prior · design | **confirmed** · `ui/design-mobile.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-ops` · `task_7e65792d` |
| prior · sa | **confirmed** · `be/solution-discovery-mobile.md` · `solution_confirm=approve` · `task_47a20229` |
| prior · native | Review `task_f2c9a5de` **approve** · list dual **đã ship** · TL turn = **DELTA verify** parity PO/Design/SA mới |
| taskId | `task_104d8dd0` |
| updatedAt | `2026-08-19T12:41:00.000Z` |
| thisAction | **List Thông báo** `#sc-ops` only · entry Me `row-ops` + Home bell · mark-read **không** enqueue (`GAP-MOB-ACT-07`) |

**Cấm:** gộp form create / Kind B schema / Command / SignalR (`GAP-MOB-ACT-01/02`) · invent `api/v1/ops` / `OpsController` · fork inbox DTO · enqueue mark-read như màn mới · `ERP.*` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `List`/`LazyColumn` row · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có) · `T-KIT-*` (kit map dual **N/A**).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| Auth | Bearer + `X-Company-Id` + `X-Timezone` interceptor chung |
| kit | reuse map dual — `LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` · entry `LinmNotifyButton` · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — Notification inbox/mark-read **Signed** · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên · Me tab **Tôi** → tap hàng **Thông báo** `row-ops` → **push** `#sc-ops` / `DES-MOB-OPS` trong stack dưới tab Me (giữ `LinmTabBar`). Home tab **Trang Chủ** → tap `LinmNotifyButton` (`hero-tools` / `btn-notify`) → **push** cùng slug `#sc-ops`. Back «Tôi» (iOS) / icon chevron (Android) → **pop** Me hoặc Home theo stack. Tap unread row → POST mark-read · toast **Đã đọc chỉ đạo** · badge → **Đã đọc**. Tap read row → no-op. |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng (không invent tab Thông báo) |

IA lock (design §2 / ux-analy §1): `me → push ops → pop me` · `home → push ops → pop home`. **Cấm** invent tab · **cấm** Modal/Sheet child · **cấm** form create trên list.

---

## Live gap (TL audit 2026-08-19)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-ops` | **SHIPPED** — `Presentation/Features/Ops/*` · kit parity · **live-only** · EmptyChrome | **T-IOS-OPS** · cleanup_mock `task_708dcc0b` |
| Android `#sc-ops` | **SHIPPED** — `presentation/feature/ops/*` · cùng copy VN | **T-AND-OPS** · **DELTA verify** |
| Me `row-ops` entry | **SHIPPED** — push `#sc-ops` | **verify** a11y id · **cấm** reimplement Me hub |
| Home `LinmNotifyButton` | **SHIPPED** — push `#sc-ops` cùng slug | **verify** hittable `hero-tools` / `btn-notify` |
| `GET notification/inbox` | **SHIPPED** — `NotificationRepositoryImpl` · page=1 · pageSize=50 | **verify** bind · fail → empty+toast · empty → EmptyChrome |
| `POST …/mark-read` | **SHIPPED** — tap unread only · live id | **verify** toast · POST fail giữ unread |
| `GET notification/overview` | repo có `unreadCount()` · **optional P2** Me/Home badge | **không** DoD P1 ops list |
| BFF proxy catch-all | **live** — **cấm** `OpsController` | **T-BFF-OPS** verify passthrough |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit list | dual shipped + map | Dev **cấm** raw row · **cấm** `T-KIT-*` |
| GAP-QA-OPS-IOS-01 | Maestro iOS nav **non-block** | fix Dev/QA `/edit-mobile-feature` |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-OPS | kit | — | **n/a** | — | Kit list **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-OPS** | ios | SA · route_a | pending | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM | **DELTA verify** `Presentation/Features/Ops/*` · parity PO/Design/SA · GET inbox + POST mark-read · demo fallback · Me/Home wire · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-OPS** | android | SA · route_a | pending | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · **DELTA verify** `presentation/feature/ops/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BFF-OPS** | bff | — | pending | — | Verify proxy passthrough `notification/inbox*` · **cấm** invent `OpsController` · `dotnet build` PASS |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — Notification **Signed** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-OPS | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `ops` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/ops` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp form create / Command / mark-all-read / filter UI vào task file này. Sibling giữ backlog web — **cấm** auto start (`GAP-MOB-ACT-06`).

---

## T-IOS-OPS — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-OPS` · `#sc-ops` |
| Pattern | List push từ Me/Home · **không** Modal/Sheet child · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` | title **Thông báo** · back label **Tôi** · pop stack · e2e `nav-back` |
| rowTitle | `LinmListRow` title | DTO `title` · demo «Ưu tiên SC-2401» |
| rowSub | `LinmListRow` subtitle | `sender · HH:mm` local |
| badgeUnread | `LinmBadge` info | **Mới** khi `isUnread` |
| badgeRead | `LinmBadge` neutral | **Đã đọc** |
| rowTap | `LinmListRow` onTap | mark-read nếu unread · e2e `row-ops-{id}` |
| toastRead | `LinmToast` | **Đã đọc chỉ đạo** · **cấm** `UIAlert` |
| entryMe | `LinmListRow` Me | `row-ops` · reuse parent |
| entryHome | `LinmNotifyButton` | `reuse=home` · **cấm** reimplement Home |

**Cấm** WebView HTML · watermark Gói · raw `List` row chrome.

### API / store

| Step | Spec |
|------|------|
| Appear | `GET notification/inbox?page=1&pageSize=50` |
| Bind | `title` · `sender`+`sentAt` → subtitle · `isUnread` → badge |
| Fail / offline | empty + toast loadFail · list **vẫn mở** · **cấm** demo · **cấm** block Me/Home |
| Mark-read | POST `notification/inbox/{id}/mark-read` · live id only |
| Overview | **không** gọi bắt buộc trên `#sc-ops` P1 |

### Router / shell

1. `AppRouter`: Me stack + Home `NavigationStack` destination `OpsView` · `showOpsFromHome`.
2. `MeView` / `HomeViewModel`: wire entry → push ops · **cấm** reimplement hub ngoài wire.
3. DI `AppContainer`: `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` · `NotificationRepositoryImpl`.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-OPS — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-ops` · frame 412×915 |
| Pattern | List push từ Me/Home · **không** Modal/Sheet · **không** `AlertDialog` system |

### UI / API

Cùng bảng field + API như T-IOS. Kit dual Compose.  
Parity note Design §5: Android back = icon chevron · title **Thông báo** cùng iOS.

`MainTabScreen`: Nav host push `OpsScreen` từ Me + Home · Hilt `OpsViewModel` + Retrofit paths trên `ApiService`. Offline: demo 2 rows · toast không block.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

---

## T-BFF-OPS (Step 4b — N/A)

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| Skill | **không** `/new-endpoint` · **không** `/create-bff-api-feature` |
| Scope | Reuse live `MobileApiProxyController` → `notification/inbox*` · **cấm** `OpsController` / `api/v1/ops` |
| Build | `dotnet build` PASS · **không** delta BFF this pack |

**BE ALIGN:** SA chốt Step 4b **N/A**. Sau FE Dev **không** bắt buộc BE align delta — chỉ giữ verify BFF build xanh.

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | mọi GET/POST inbox |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| inbox 200 | `data.items[]` → `title` · `sender` · `sentAt` · `isUnread` |
| mark-read 200 | `data` → updated item · badge **Đã đọc** |
| Fail / offline | demo 2 rows · **cấm** block hub |
| demo ids | prefix `demo-` · mark-read local · **không** POST |

---

## Navigation / action matrix (P1)

| Control | Behavior |
|---------|----------|
| Me `row-ops` | **push** `#sc-ops` |
| Home `LinmNotifyButton` | **push** `#sc-ops` cùng slug |
| Back | **pop** Me hoặc Home |
| Row unread tap | POST mark-read · toast **Đã đọc chỉ đạo** |
| Row read tap | no-op |
| Form create / detail | **OUT** sibling/web |
| Mark-all-read / filter | **OUT P1** |

**Cấm** enqueue mark-read như màn mới (`GAP-MOB-ACT-07`).

---

## Out of scope (this pack)

- Form create/edit/delete chỉ đạo · Kind B schema editor
- Command center · SignalR `OpsHub` · map embed
- Mark-all-read · filter toolbar · org-unit SearchInput
- Live unread badge Me/Home (P2 Nice · overview optional)
- Invent `GET ops` / `OpsController` trên Mobile.Bff
- Web KPI overview 4 ô trên mobile list
- Start sibling `pending_confirm`
- iPad Phase 2 (`A4-IPAD DEFER`)

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `ops` / **`list`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-OPS` · `T-AND-OPS` · `T-BFF-OPS` verify · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| STATUS | `specs/ops/STATUS.md` |
| design / ux / solution | `ui/design-mobile.md` · `ui/ux-analy.md` · `be/solution-discovery-mobile.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-ops` |
| Next slash | `/agent-dev-ios` + `/agent-dev-android` (role sau · **không** chain turn này — roleOnly=TL) |
| Verify | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |
| Chain this turn | **không** (roleOnly=`team_lead`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-08-19T12:41:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:ops-mobile-edit-list-20260819 |
| bffContentHash | sha256:notification-inbox-proxy-passthrough |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.21 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
