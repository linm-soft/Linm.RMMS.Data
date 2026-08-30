# Team lead — Task — mnt-list (mobile list · Công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| title | [Mobile] [Trang Chủ] -> Công việc |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-mnt-list` `DES-MOB-MNT-LIST` · **cấm** Kind A–G web / Lin* list / Report / `mfeStdUrl` |
| route_confirm | **route_a** — Home tile **Công việc** + shell tab `work` → `#sc-mnt-list` · Back → `home` · sibling CTAs = toast P1 · **cấm** `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/mnt-list` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web |
| prior · data_analy | **confirmed** · `_data-analy/mnt-list-control-hint.md` · `mnt-list-bff-endpoints.md` · `mnt-list-action-tree.md` · `mnt-list-real-data.md` · contentHash `sha256:mnt-list-mobile-list-20260828` · bffContentHash `sha256:mnt-list-mobile-bff-20260828` |
| prior · po | **confirmed** · `po/requirement.md` · `task_18c2cf15` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-mnt-list` · `ui/review/demo-parity.md` · `task_9df501b1` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · `task_bd81eda6` |
| taskId | `task_3e9686a0` |
| updatedAt | `2026-08-28T19:00:00.000Z` |
| thisAction | **List Công việc** `#sc-mnt-list` only · GET `maintenance/work-orders` · client search · toast Lọc / sibling CTAs · sibling = backlog `pending_confirm` |

**Cấm:** gộp estimate / mnt-chat / mnt-progress / mnt-log / WO create-edit (`GAP-MOB-ACT-01/02`) · invent `api/v1/mnt-list` / `MntListController` / AssignerName · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `List` / `LazyVStack` product chrome / M3 `NavigationBar` / `TabView` · watermark Gói / device label / «Có mạng» · hardcode production cards khi GET OK · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue search/filter/API sibling (`GAP-MOB-ACT-07`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có) · Step 4b / migration · TL chạy e2e / `yarn build` / `yarn start:std`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Maintenance · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | **chỉ** `GET maintenance/work-orders?page=1&pageSize=50` Bearer · init-data **P2** **cấm** gọi P1 |
| kit | reuse map dual — `LinmTopBar` · `LinmSearchField` · `LinmListRow` · rich-card · `LinmBadge` · `LinmIconButton` · `LinmToast` · `LinmEmptyChrome` (opt) · `LinmTabBar` shell · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse live `GET maintenance/work-orders` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: Home tile **Công việc** (`tile-mnt`) **và** shell tab `work` (`tab-work`) → surface `#sc-mnt-list` `DES-MOB-MNT-LIST`. Back / leading chevron → pop hoặc chọn tab **Trang Chủ** (`home` reuse · **cấm** reimplement hub). Trailing **Lọc** → `LinmToast` **Bộ lọc · tuyến đường** · **cấm** filter sheet. Hub / `#i-sum` → toast **Giao việc xử lý**. `#i-chat` → toast **Trao đổi công việc**. `#i-sync` → toast **Cập nhật trạng thái · ảnh + định vị**. `#i-list` (done) → toast **Nhật ký xử lý**. Khi sibling Approve+ship → Dev cập nhật CTA push (estimate/chat/progress/log) · **cấm** start sibling turn Dev này (`GAP-MOB-ACT-06`). |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng |

IA lock (design §2 · ux-analy §1): `(auth) Login → Tab 5 · tile/tab Công việc = this pack · Back = home`. In-screen tabs **none** (`GAP-TAB-01`). **Cấm** invent tab · **cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar`.

---

## Live gap (TL audit 2026-08-28)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-mnt-list` | **DELTA** — `AppRouter` `.work` = `TabPlaceholderView` · Home `tileMnt` = toast only | **T-IOS-MNT-LIST** |
| Android `#sc-mnt-list` | **DELTA** — `MainTab.Work` = `TabPlaceholder` · `HomeIntent.TileMnt` = toast only | **T-AND-MNT-LIST** |
| `GET maintenance/work-orders` | BE `WorkOrdersController` + Mobile.Bff proxy live | **reuse** · app path only · **cấm** invent `mnt-list` path |
| AssignerName | **không** trên DTO | bind TeamName+AssigneeName · demo fallback (`GAP-F-MNT-MOB-01`) |
| Home tile / tab `work` entry | toast / placeholder | wire push / tab root → list · **cấm** reimplement `#sc-home` |
| Sibling estimate/chat/progress/log | `pending_confirm` | toast P1 · **cấm** API + **cấm** start |
| Demo parity dual 2 cards | Design closed GAP-MOB-MNT-DEMO-01 | fallback SSOT 2 rows |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit list | dual map shipped | Dev **cấm** raw List/NavBar · **cấm** `T-KIT-*` |
| Foot «Phiên bản Gói…» / device label | demo chrome | **cấm ship** |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-MNT-LIST | kit | — | **n/a** | — | Kit list **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-MNT-LIST** | ios | SA · route_a | **done** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM layer | Replace Work placeholder + Home tile toast → `Presentation/Features/MntList/*` · list kit parity · GET `maintenance/work-orders` · offline demo 2 cards · toast CTAs · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` · `task_e238765c` |
| **T-AND-MNT-LIST** | android | SA · route_a | **done** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/mntlist/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` · `task_e238765c` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — GET work-orders **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-MNT-LIST | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `mnt-list` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/mnt-list` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`estimate` · `mnt-chat` · `mnt-progress` · `mnt-log`) vào task file này như in-scope implement. Sibling giữ `pending_confirm` — **cấm** auto start (`GAP-MOB-ACT-06`).

---

## T-IOS-MNT-LIST — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-MNT-LIST` · `DES-MOB-MNT-HUB` · `DES-MOB-MNT-CARD` · `DES-MOB-TABBAR` · `#sc-mnt-list` |
| Pattern | List push / tab root · **không** Modal/Sheet child · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | pop / tab **Trang Chủ** · e2e theo ux-analy |
| title | `LinmTopBar` title | **Danh sách công việc** fixed |
| navFilter | `LinmTopBar` trailing | iOS **text «Lọc»** · toast **Bộ lọc · tuyến đường** · **cấm** sheet |
| search | `LinmSearchField` · `LinmSearchGlyph` `#i-search` | placeholder **Tìm kiếm công việc…** · client filter title/route/code/assign · ≥16 |
| hub | `LinmListRow` leading `#i-sum` green | title **Giao việc xử lý** · sub **Khối lượng · thời hạn · giao việc** · toast P1 |
| cards | rich card / `LinmListRow` | title · assign · range · meta · status · actions |
| cardStatus | status bar text only | VN map · **cấm** `LinmBadge` trùng prefix (**GAP-MOB-EDIT-STATUS-01**) |
| actChat | `LinmIconButton` `#i-chat` | toast **Trao đổi công việc** · hàng nút **flex:1 dàn đều** (**GAP-MOB-EDIT-ACT-01**) |
| actProgress | `LinmIconButton` `#i-sync` | toast **Cập nhật trạng thái · ảnh + định vị** |
| actEstimate | `LinmIconButton` `#i-sum` | toast **Giao việc xử lý** |
| actLog | `LinmIconButton` `#i-list` | **chỉ** card `done` · toast **Nhật ký xử lý** |
| empty | `LinmEmptyChrome` | optional · 0 live + no demo gate |
| tabWork | `LinmTabBar` | selected **Công việc** · label **13** · wrench |
| toast | `LinmToast` | Lọc · hub · sibling · offline optional |

**Cấm** raw `List` / `LazyVStack` product chrome · **cấm** ship foot Gói / device label · **cấm** «Có mạng».

**Dev UI lock (`/edit-mobile-feature`):** **GAP-MOB-EDIT-STATUS-01** · **GAP-MOB-EDIT-ACT-01** — **cấm** revert badge cạnh prefix hoặc nút dồn trái. Cùng pattern `incident-list`.

### Demo / fallback SSOT (**2** cards — **cấm** rút 1)

| title | assignLine | range | meta | status |
|-------|------------|-------|------|--------|
| Vá mặt đường | Hạt trưởng VP-IV.1 giao việc cho Nguyễn Văn A · Tổ tuần đường | 2026-08-10 08:30 — 2026-08-12 17:00 | Từ sự cố SC-2401 · QL.1 Km 1556+080 | `new` → Chờ xử lý (warn) |
| Nạo cống | Hạt trưởng giao việc cho Trần Khánh · Chi cục II.2 | 2026-08-09 07:00 — 2026-08-09 16:00 | Tuyến HCM | `done` → Đã hoàn thành (ok) · actions + `#i-list` |

### Status VN map

| API `status` | VN | chrome |
|--------------|----|--------|
| `new` | Chờ xử lý | warn |
| `in_progress` | Đang xử lý | info |
| `done` | Đã hoàn thành | ok |
| `cancelled` | Đã hủy | gray |

### API / store

| Step | Spec |
|------|------|
| Appear / refresh | `FetchWorkOrdersUseCase` → `GET maintenance/work-orders?page=1&pageSize=50` Bearer |
| Bind | `title` · assignLine=`teamName`+`assigneeName` (rule SA/real-data) · range=`createdAt`—`dueAt` · meta=`incidentId`+`routeName` · `status`→VN · **cấm** AssignerName |
| Fail / empty / offline | demo SSOT **2** cards · screen **vẫn mở** · optional toast · **cấm** native alert · **cấm** block tab |
| Search | client-side only P1 · **không** bắt buộc query `search` |
| Init-data | **cấm** gọi P1 |
| Sibling API | **cấm** comments/progress/CRUD trên slug này |

### Router / shell

| Entry | Behavior |
|-------|----------|
| Home `tileMnt` / `tile-mnt` | mở `#sc-mnt-list` (push home stack **hoặc** chọn tab `work` root list — parity Android) · **thay** toast-only |
| Tab `.work` / `tab-work` | thay `TabPlaceholderView` → `MntListView` |
| Back | về `home` · **cấm** reimplement hub |
| DI | `AppContainer` wire `MntListViewModel` + `FetchWorkOrdersUseCase` + repo → `ApiClient` path `maintenance/work-orders` |

**Cấm** WebView HTML · VM→URLSession trực tiếp.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md`.

---

## T-AND-MNT-LIST — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-mnt-list` · frame 412×915 |
| Pattern | List · **không** Modal/Sheet · Material chrome OK (trailing filter = `#i-list` icon) |

### UI / API

Cùng bảng field · status map · demo 2 cards · bind · toast · kit cite như T-IOS.  
Trailing filter: **icon `#i-list`** (không bắt buộc text «Lọc») · copy VN còn lại **parity** iOS (`GAP-MOB-ALIGN-01` · `GAP-MOB-MNT-DEMO-01`).

### Router / shell

| Entry | Behavior |
|-------|----------|
| `HomeIntent.TileMnt` / `tile-mnt` | mở `#sc-mnt-list` · **thay** toast-only |
| `MainTab.Work` | thay `TabPlaceholder("Công việc")` → `MntListScreen` |
| Back | về Home tab / pop · `home` reuse |
| DI | Hilt `MntListViewModel` · use case · repo → Retrofit/`ApiService` path `maintenance/work-orders` |

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/android.md`.

Optional verify (Dev, **không** TL): Mobile.Bff `dotnet build` PASS.

---

## T-BE-* — n/a

| id | Decision |
|----|----------|
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse `GET maintenance/work-orders` · **cấm** `MntListController` / invent path |
| T-BE-MIG | **n/a** — không bảng mới · `share_na` · **cấm** `/database-migration` |
| Step 4b | **N/A** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack này |

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → list mở · demo 2 cards · toast in-app · **cấm** full-screen block |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` |
| AC-D-05 | Search focus · field ≥16 · keyboard không đè tab cứng |
| AC-D-06 | Safe area · nav + search + hub + cards + tab |
| AC-D-10 | Shell tab **Công việc** · in-screen tabs **none** (`GAP-TAB-01`) |
| AC-D-12 | label/tab **13** · title/search/card ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear GET work-orders · fail/empty → demo 2 |
| AC-F-02 | Back → home |
| AC-F-03 | Lọc → toast **Bộ lọc · tuyến đường** |
| AC-F-04 | Search client title/route/code/assign |
| AC-F-05 | Hub / `#i-sum` → toast **Giao việc xử lý** · **cấm** estimate form |
| AC-F-06 | Chat / sync / log → toast § · **cấm** API sibling |
| AC-F-07 | Dual **2** cards + hub + copy SSOT |
| AC-F-08 | Entry Home tile / tab Công việc |
| AC-F-09 | **Cấm** device label / proto-click / watermark Gói |
| AC-F-10 | TeamName+AssigneeName · **cấm** invent AssignerName |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `estimate` | `pending_confirm` | hub / `#i-sum` · sau Approve+ship → push `#sc-estimate` |
| `mnt-chat` | `pending_confirm` | `#i-chat` |
| `mnt-progress` | `pending_confirm` | `#i-sync` |
| `mnt-log` | `pending_confirm` | `#i-list` done |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start từ TL/Dev `mnt-list`.

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-list` / **`list`** |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-MNT-LIST` · `T-AND-MNT-LIST` · T-BE **n/a** · T-KIT **n/a** |
| BFF | **chỉ** `GET maintenance/work-orders` |
| Real-data | `_data-analy/mnt-list-real-data.md` §A+§B |
| UX packet | `ui/ux-analy.md` §1–§9 · `ui/design.md` · dual proto · map |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01`) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/mnt-list.md | **PASS** · T-IOS · T-AND · T-BE n/a · route_a · source lock |
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
| generatedAt | 2026-08-28T19:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-list-20260828 |
| bffContentHash | sha256:mnt-list-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
