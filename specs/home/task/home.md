# Team lead — Task — home (mobile hub)

| Field | Value |
|-------|-------|
| feature | `home` |
| title | [Mobile] Trang Chủ |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`hub`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **hub** tab Trang Chủ `#sc-home` · **cấm** Kind A–G web / Lin* list / web `dashboard` |
| route_confirm | **route_a** (autoApprove=ON) — Tab 5 · selected **Trang Chủ** = `#sc-home` / `DES-MOB-HOME` · Login **ngoài** tab · Hồ sơ → tab **Tôi** `#sc-me` · sibling → toast nhãn · **cấm** deep-link web / `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/home` · **cấm** `yarn start:std` / `mfeStdUrl` |
| prior · data_analy | **confirmed** · `_data-analy/home-control-hint.md` · `home-bff-endpoints.md` · `home-action-tree.md` · contentHash `sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed` · bffContentHash `sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581` |
| prior · po | **confirmed** · `po/requirement.md` · `task_b088605a` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · dual `#sc-home` · `task_41cb12f0` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · `task_15a962de` |
| taskId | `task_b40d1e9d` |
| updatedAt | `2026-08-19T05:51:11.000Z` |
| thisAction | **Hub Trang Chủ** `#sc-home` only · sibling = backlog `pending_confirm` · reuse `me` / `ops` / `patrol-offline` |

**Cấm:** gộp sibling screens (`GAP-MOB-ACT-01/02`) · invent `api/v1/home` / wallet / org-unit · GET `notification/inbox` trên slug `home` · ship foot Gói · `ERP.*` · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `LazyVGrid` / `LazyVerticalGrid` / `TabView` / M3 `NavigationBar` · hardcode «Nguyễn Văn A» / badge `3` · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có).

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| Auth | Platform `Linm.Platform.Authentication.Bff` **1.26.0** (qua Mobile.Bff rewrite) · app path **chỉ** `GET auth/profile` |
| kit | reuse map dual — `LinmHeroTools` · `LinmProfileButton` · `LinmNotifyButton` · `LinmNotifyCountBadge` · `LinmStatusCapsule` · `LinmQuickActions` · `LinmQuickItem` · `LinmSectionLabel` · `LinmHomeGrid` · `LinmHomeTile` · `LinmWalletCard` · `LinmTabBar` · `LinmToast` · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — không endpoint mới · không migration · không `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **Trang Chủ** = hub `#sc-home` / `DES-MOB-HOME`. Tap **Hồ sơ** → chọn tab **Tôi** `#sc-me` (`reuse=me` đã ship). Sibling chưa ship → `LinmToast` **đúng nhãn control** · **không** mở màn sibling. Tap tín hiệu → toast **Đã làm mới** + refresh profile. |
| route_b | — không dùng (không deep-link web) |
| route_c | — không dùng |

IA lock (design §2): `(auth) Login (ngoài tab) → Tab 5 · Trang Chủ = this pack · Tôi = reuse=me`. **Cấm** invent tab · **cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar`.

---

## Live gap (TL audit 2026-08-19)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-home` hub | **DELTA** — `PlaceholderHomeView` + gallery + `btn-logout` (không hub production) | **T-IOS-HOME** |
| Android `#sc-home` hub | **DELTA** — `PlaceholderHomeScreen` + gallery | **T-AND-HOME** |
| `FetchProfileUseCase` + `UserProfile` | **shipped** (`me` / login) | **reuse** · **cấm** fork DTO / second repository |
| `GET auth/profile` | Auth BFF 1.26.0 live | app path `auth/profile` only |
| Role «Khu QLĐB IV» | **không** org field trên profile | **ẩn live** (`GAP-F-HOME-01`) |
| Wallet | **không** home/wallet API | **static demo** 3 dòng |
| Notify badge / inbox | proxy live `ops` | **không gọi** trên `home` · `notifyCount=0` ẩn (`GAP-F-HOME-02`) |
| Tab 5 / `LinmTabBar` | shell shipped · `tabLabel` **10** · Tuần đường `location.fill` ≡ `Place` | **giữ** · **cấm** revert `mappin` / proto 11 |
| `#sc-me` | shipped | tap Hồ sơ → tab Tôi · **cấm** reimplement |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit home | dual shipped + gallery | Dev **cấm** raw grid · **cấm** `T-KIT-*` |
| Foot «Phiên bản Gói…» | demo chrome | **cấm ship** (`GAP-F-HOME-03`) |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-HOME | kit | — | **n/a** | — | Kit home **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-HOME** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM layer | Replace `PlaceholderHome*` → `Presentation/Features/Home/*` · hub kit parity · GET `auth/profile` · offline fallback · toast nav · **gỡ** gallery / `btn-logout` trên home · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-HOME** | android | SA · route_a | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/home/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — Auth profile **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-HOME | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `home` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/home` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`patrol-home` · `incident-create` · `supervise` · `mnt-list` · `incident-list` · `asset-hub`) vào task file này như in-scope implement. Sibling giữ `pending_confirm` — **cấm** auto start (`GAP-MOB-ACT-06`).

---

## T-IOS-HOME — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-HOME` · `DES-MOB-HOME-HELLO` · `DES-MOB-HOME-QUICK` · `DES-MOB-HOME-GRID` · `DES-MOB-HOME-WALLET` · `#sc-home` |
| Pattern | Hub tab · **không** Modal/Sheet child · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| profileBtn | `LinmProfileButton` trong `LinmHeroTools` | tap → tab **Tôi** · e2e id theo ux-analy |
| notifyBtn | `LinmNotifyButton` · `LinmNotifyCountBadge` | toast **Thông báo** · badge **0 ẩn** · **cấm** GET inbox · **cấm** hardcode `3` |
| roleLine | `LinmStatusCapsule` `area` | **ẩn live** (`GAP-F-HOME-01`) |
| signal | `LinmStatusCapsule` / `LinmNetSignalMark` | OS `NWPathMonitor` · Tốt/TB/Yếu · tap toast **Đã làm mới** + refresh · **cấm** cycle · **cấm** «Có mạng» |
| who | typography hero | `fullName` trim từ profile · fail → `lastUserName` · **cấm** hardcode production |
| quickPatrol | `LinmQuickItem` trong `LinmQuickActions` | title **Điểm tuần** · phụ **Ghim định vị · lý trình** · toast |
| quickIncident | `LinmQuickItem` | title **Ghi sự cố** · phụ **Chọn tài sản · mẫu sự cố** · toast |
| sectionBiz | `LinmSectionLabel` | **Nghiệp vụ thường dùng** · không route |
| tileSupervise | `LinmHomeTile` bg `#FCB43C` | **Giám sát** · `#i-list` · toast |
| tilePatrol | `LinmHomeTile` bg `#F03C30` | **Tuần đường** · `#i-mappin` · toast |
| tileMnt | `LinmHomeTile` bg `#3CB448` | **Công việc** · `#i-wrench` · toast |
| tileIncident | `LinmHomeTile` bg `#FCB43C` | **Vấn đề** · `#i-warning` · toast |
| tileAsset | `LinmHomeTile` bg `#0C84C0` | **Tài sản** · `#i-cube` · toast |
| tileOffline | `LinmHomeTile` bg `#086A9A` | **Lưu trữ** · `#i-sync` · toast |
| wallet | `LinmWalletCard` | eyebrow **HỒ SƠ TÀI SẢN** · title **QL.1 · Khu IV** · subtitle **32 loại KCHT · thông số + checklist sự cố** · tap toast **Tài sản** |
| foot | — | **cấm ship** (`GAP-F-HOME-03`) |
| tabHome | `LinmTabBar` | selected **Trang Chủ** · label **10** · tabField `location.fill` ≡ `Place` |
| toast | `LinmToast` | sibling nhãn · signal · offline |

**Cấm** `LinmKitGallery` trên tab Trang Chủ production · **cấm** `btn-logout` trên `#sc-home` (Đăng xuất = `#sc-me`).

### API / store

| Step | Spec |
|------|------|
| Appear / refresh | `FetchProfileUseCase` → `GET auth/profile` Bearer |
| Bind | `.who` = `fullName` trim · ignore `id` / `phoneNumber` trên UI hub |
| Fail / offline | `.who` = `auth.lastUserName()` · hub **vẫn mở** · toast không block tab · **cấm** enqueue «home» |
| Inbox | **không** gọi |
| Wallet / org | **không** API |

### Router / shell

`AppRouter` / tab Home: thay `PlaceholderHomeView` → `HomeView` (Features/Home). DI `AppContainer` wire `HomeViewModel` + reuse `fetchProfileUseCase`. Tap Hồ sơ → chọn tab Me. **Cấm** WebView HTML.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done.

---

## T-AND-HOME — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng DES / `#sc-home` · frame 412×915 |
| Pattern | Hub tab · **không** Modal/Sheet child · **không** `AlertDialog` system |

### UI / API

Cùng bảng field + API như T-IOS. Kit dual Compose. Signal bind Connectivity / `NetworkCapabilities` · hạng Tốt/TB/Yếu · **cấm** cycle.  
`MainTabScreen` Home tab: thay `PlaceholderHomeScreen` → `HomeScreen`. Hilt `HomeViewModel` + reuse `FetchProfileUseCase`. Tap Hồ sơ → tab Me. Offline: fallback `lastUserName` · toast không block.

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
| Scope | Reuse live `GET auth/profile` only · **cấm** `HomeController` / `api/v1/home` / wallet / org |
| Build (baseline) | Mobile.Bff `dotnet build` PASS · **không** delta BE this pack |

**BE ALIGN:** SA chốt Step 4b **N/A**. Sau FE Dev **không** bắt buộc BE align delta — chỉ giữ verify BFF build xanh.

---

## Client contract (SSOT SA — bind Dev)

| Header | When |
|--------|------|
| `Authorization: Bearer {token}` | GET profile |
| `X-Company-Id` | interceptor chung |
| `X-Timezone` | interceptor chung |
| `Accept` | `application/json` |

| Envelope | Rule |
|----------|------|
| Profile 200 | `fullName` (root hoặc wrap `data`) · trim · empty → fallback |
| Fail / offline | không block hub · toast in-app |

---

## Navigation / toast matrix (P1)

| Control | Behavior |
|---------|----------|
| Hồ sơ | Tab **Tôi** `#sc-me` |
| Thông báo | toast **Thông báo** |
| Điểm tuần | toast **Điểm tuần** |
| Ghi sự cố | toast **Ghi sự cố** |
| Giám sát | toast **Giám sát** |
| Tuần đường | toast **Tuần đường** |
| Công việc | toast **Công việc** |
| Vấn đề | toast **Vấn đề** |
| Tài sản + wallet | toast **Tài sản** |
| Lưu trữ | toast **Lưu trữ** |
| Tín hiệu | toast **Đã làm mới** + refresh profile |

---

## Out of scope (this pack)

- Sibling màn: `patrol-home` · `incident-create` · `supervise` · `mnt-list` · `incident-list` · `asset-hub` (giữ `pending_confirm`)
- Live inbox badge / GET `notification/inbox` (owner `ops`)
- Live wallet / org role API
- Reimplement `Me*` / `LinmTabBar` shell
- Foot watermark Gói · kit gallery trên Home production

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `home` / **`hub`** |
| route_confirm | **route_a** |
| Tasks | `T-IOS-HOME` · `T-AND-HOME` · `T-BE-*` **n/a** · `T-KIT` **n/a** |
| STATUS | `specs/home/STATUS.md` |
| design / ux / solution | `ui/design.md` · `ui/ux-analy.md` · `be/solution-discovery.md` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-home` |
| Next slash | `/agent-dev-ios` + `/agent-dev-android` (role sau · **không** chain turn này nếu roleOnly=TL) |
| Verify | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |
| Chain this turn | **không** (roleOnly=`team_lead`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.19.20 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T05:51:11.000Z |
| versionGate | rechecked |
| contentHash | sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed |
| bffContentHash | sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.19.20 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
