# Team lead — Task — incident-list (mobile list · Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| title | [Mobile] [Trang Chủ] -> Vấn đề |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-incident-list` `DES-MOB-INC-LIST` · **cấm** Kind A–G web / Lin* list / Report / `mfeStdUrl` |
| route_confirm | **route_a** — Home tile **Vấn đề** + shell tab `incident` → `#sc-incident-list` · Back → `home` · FAB / quick-incident → `incident-create` · sibling CTAs = toast P1 · **cấm** `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/incident-list` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web |
| prior · data_analy | **confirmed** · `_data-analy/incident-list-control-hint.md` · `incident-list-bff-endpoints.md` · `incident-list-action-tree.md` · `incident-list-real-data.md` · contentHash `sha256:incident-list-mobile-list-20260829` · bffContentHash `sha256:incident-incidents-proxy-passthrough` |
| prior · po | **confirmed** · `po/requirement.md` · `task_7fea88b7` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-incident-list` · `ui/review/demo-parity.md` · `task_6800d075` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · `task_6ca4ad05` |
| taskId | `task_08bb7863` |
| updatedAt | `2026-08-29T01:47:00.000Z` |
| thisAction | **List Quản lý vấn đề** `#sc-incident-list` only · GET `incident/incidents` · client search · segment · banner · toast Lọc/chat/detail · FAB create entry · sibling = backlog `pending_confirm` |

**Cấm:** gộp create form / detail / chat / gis / vis-capture (`GAP-MOB-ACT-01/02`) · invent `api/v1/incident-list` / `IncidentListController` / PlaceName / OrgName · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `List` / `LazyVStack` product chrome / M3 `NavigationBar` / `TabView` · watermark Gói / device label / «Có mạng» · hardcode production cards khi GET OK · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue search/filter/API sibling (`GAP-MOB-ACT-07`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có) · Step 4b / migration · TL chạy e2e / `yarn build` / `yarn start:std`.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Incident · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | **chỉ** `GET incident/incidents?page=1&pageSize=50` Bearer · prefetch `GET …/{id}` **OUT** slug list |
| kit | reuse map dual — `LinmTopBar` · `LinmSegment` · `LinmSearchField` · banner / `LinmListRow` · rich-card · `LinmBadge` · `LinmIconButton` · `LinmFAB` · `LinmToast` · `LinmEmptyChrome` (opt) · `LinmTabBar` shell · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse live `GET incident/incidents` · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: Home tile **Vấn đề** (`tile-incident`) **và** shell tab `incident` (`tab-incident`) → surface `#sc-incident-list` `DES-MOB-INC-LIST`. Back / leading chevron → pop hoặc chọn tab **Trang Chủ** (`home` reuse · **cấm** reimplement hub). Trailing **Lọc** → `LinmToast` **Lọc tuyến · loại · trạng thái** · **cấm** filter sheet. Segment **Danh sách** = stay · **Bản đồ** → `go('gis-map')`. Banner → toast **Nhận diện mặt đường** (sau ship → `vis-capture`). Card / `#i-list` → toast **Chi tiết vấn đề** (sau ship → `incident-detail` + `Id`). `#i-briefcase` → `go('mnt-list')`. `#i-mappin` → `go('gis-map')`. `#i-chat` → toast **Trao đổi sự cố**. FAB `#i-plus` → `startIncidentPick()` / `incident-create` reuse. Home **quick-incident** giữ create · **tile Vấn đề đổi** từ create → list. Khi sibling Approve+ship → Dev cập nhật CTA push · **cấm** start sibling turn Dev này (`GAP-MOB-ACT-06`). |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng |

IA lock (design · ux-analy · SA): `(auth) Login → Tab 5 · tile/tab Vấn đề = this pack · Back = home`. In-screen **segment-2** Danh sách / Bản đồ (`GAP-TAB-01` · **cấm** invent tab 6). **Cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar`.

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `route_confirm=route_a` · `2026-08-29T01:47:00.000Z`.

---

## Live gap (TL audit 2026-08-29)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-incident-list` | **DELTA** — `AppRouter` `.incident` = `TabPlaceholderView` · Home `tileIncident` = `onOpenIncidentCreate` (sai entry list) | **T-IOS-INC-LIST** |
| Android `#sc-incident-list` | **DELTA** — `MainTab.Incident` = `TabPlaceholder` · `HomeIntent.TileIncident` = `onOpenIncidentCreate` | **T-AND-INC-LIST** |
| `GET incident/incidents` | BE `IncidentsController` + Mobile.Bff proxy live · app repo **chỉ** `create` | **reuse** path · Dev thêm `fetchList` / Retrofit `@GET` · **cấm** invent `incident-list` path |
| PlaceName / OrgName | **không** trên DTO | bind RouteName+KmStart · AssetLabel/Description fallback · ReporterName/AssigneeName (`GAP-MOB-INC-LIST-PLACE-01` / `ORG-01`) |
| Thumb media | **không** Signed P1 | empty placeholder · **DEFER** (`GAP-MOB-INC-LIST-THUMB-01`) |
| Home tile / tab `incident` entry | create / placeholder | wire push / tab root → list · quick-incident + FAB giữ create · **cấm** reimplement `#sc-home` |
| Sibling vis-capture / detail / chat / gis-map | `pending_confirm` / reuse | toast P1 hoặc nav reuse · **cấm** API + **cấm** start |
| Demo parity dual 2 cards | Design closed | fallback SSOT 2 rows |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** |
| Kit list | dual map shipped | Dev **cấm** raw List/NavBar · **cấm** `T-KIT-*` |
| Foot «Phiên bản Gói…» / device label | demo chrome | **cấm ship** |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-INC-LIST | kit | — | **n/a** | — | Kit list **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-INC-LIST** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM layer | Replace Incident placeholder + Home tile create-entry → `Presentation/Features/IncidentList/*` · list kit parity · GET `incident/incidents` · offline demo 2 cards · toast CTAs · FAB create · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-INC-LIST** | android | SA · route_a | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/incidentlist/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — GET incidents **live** · Step 4b **N/A** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-INC-LIST | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `incident-list` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/incident-list` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`vis-capture` · `incident-detail` · `incident-chat` · `gis-map` · `incident-create` form) vào task file này như in-scope implement. Sibling giữ `pending_confirm` — **cấm** auto start (`GAP-MOB-ACT-06`). `incident-create` = FAB/quick reuse only.

---

## T-IOS-INC-LIST — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-INC-LIST` · `DES-MOB-TABBAR` · `#sc-incident-list` |
| Pattern | List push / tab root · **không** Modal/Sheet child filter · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | pop / tab **Trang Chủ** · e2e theo ux-analy |
| title | `LinmTopBar` title | **Quản lý vấn đề** fixed |
| navFilter | `LinmTopBar` trailing | iOS **text «Lọc»** · toast **Lọc tuyến · loại · trạng thái** · **cấm** sheet |
| segList / segMap | `LinmSegment` | Danh sách selected · Bản đồ → `go('gis-map')` · label **13** |
| search | `LinmSearchField` · `LinmSearchGlyph` `#i-search` | placeholder **Tìm kiếm vấn đề…** · client filter title/code/route · ≥16 |
| bannerVis | banner / `LinmListRow` `#i-camera` | title **Nhận diện mặt đường** · sub **Chụp + định vị → gắn sự cố** · toast P1 |
| cards | rich card / `LinmListRow` | title · typeCode · loc · person · time · status · thumb placeholder · actions |
| cardStatus | status bar text only | VN map · prefix `Trạng thái: ` · full width dưới meta+thumb · **cấm** `LinmBadge` trùng (**GAP-MOB-EDIT-STATUS-01**) |
| cardThumb | Image / placeholder | **DEFER** media · empty OK |
| actChat | `LinmIconButton` `#i-chat` | toast **Trao đổi sự cố** · hàng 4 nút **flex:1 dàn đều** (**GAP-MOB-EDIT-ACT-01**) |
| actAssign | `LinmIconButton` `#i-briefcase` | `go('mnt-list')` |
| actDetail | `LinmIconButton` `#i-list` | toast **Chi tiết vấn đề** · pass `Id` khi sibling ship |
| actMap | `LinmIconButton` `#i-mappin` | `go('gis-map')` |
| fabCreate | `LinmFAB` `#i-plus` | `startIncidentPick()` · owner `incident-create` |
| empty | `LinmEmptyChrome` | optional · 0 live + no demo gate |
| tabIncident | `LinmTabBar` | selected **Vấn đề** · label **13** · warning triangle |
| toast | `LinmToast` | Lọc · banner · chat · detail · offline optional |

**Cấm** raw `List` / `LazyVStack` product chrome · **cấm** ship foot Gói / device label · **cấm** «Có mạng».

**Dev UI lock (`/edit-mobile-feature`):** **GAP-MOB-EDIT-STATUS-01** · **GAP-MOB-EDIT-ACT-01** — **cấm** revert badge cạnh prefix hoặc 4 nút dồn trái.

### Demo / fallback SSOT (**2** cards — **cấm** rút 1)

| title | typeCode | loc | person | time | status |
|-------|----------|-----|--------|------|--------|
| Nứt mặt đường | Sự cố nhanh · SC-2401 | QL.1 Km 1556+080 · Xuân Hải | Nguyễn Văn A · Tổ tuần đường VP-IV.1 | 2026-08-10 08:12:40 | Đợi phân công giám sát (warn) |
| Cống tắc | Hệ thống an toàn · SC-2398 | HCM · Km 12+400 | Trần Khánh · Chi cục II.2 | 2026-08-09 14:40:13 | Đang được giám sát (ok) |

### Status VN map

| API `Status` (live string) | VN (demo) | chrome |
|----------------------------|-----------|--------|
| `Đợi phân công giám sát` / `Mới` / `new` | Đợi phân công giám sát | warn |
| `Đang được giám sát` / `in_progress` | Đang được giám sát | ok |
| `Đóng` / `closed` | Đã đóng | gray |
| other | raw `Status` | info |

### Card bind (real-data §B · SA)

| Line | Rule |
|------|------|
| typeCode | `"{IncidentType} · {Code}"` · thiếu type → `Code` only |
| loc | `"{RouteName} Km {KmStart}"` · place fallback `AssetLabel` / `Description` tail · **cấm** fake lat/lng · **cấm** invent PlaceName |
| person | `ReporterName` · nếu `AssigneeName` khác → append ` · {AssigneeName}` · org omit OK |
| time | `RequestedAt` → `yyyy-MM-dd HH:mm:ss` local |
| status | Status → VN + chrome · prefix `Trạng thái: ` |
| Id | nav key → detail (toast P1) |

### API / store

| Step | Spec |
|------|------|
| Appear / refresh | `FetchIncidentsUseCase` → `GET incident/incidents?page=1&pageSize=50` Bearer |
| Repo | extend `IncidentRepository` + `IncidentRepositoryImpl` (hiện chỉ `create`) · **cấm** fork DTO · map `IncidentDto` → list card model |
| Bind | Title · typeCode · loc · person · time · status · Id · **cấm** PlaceName / OrgName invent |
| Fail / empty / offline | demo SSOT **2** cards · screen **vẫn mở** · optional toast · **cấm** native alert · **cấm** block tab |
| Search | client-side only P1 · **không** bắt buộc query `search` |
| Sibling API | **cấm** comments / assign / close / CRUD detail trên slug này |
| Prefetch `GET …/{id}` | **OUT** slug list |

### Router / shell

| Entry | Behavior |
|-------|----------|
| Home `tileIncident` / `tile-incident` | mở `#sc-incident-list` (push home stack **hoặc** chọn tab `incident` root list — parity Android) · **thay** `onOpenIncidentCreate` |
| Home `quickIncident` | **giữ** `onOpenIncidentCreate` · **không** đổi sang list |
| Tab `.incident` / `tab-incident` | thay `TabPlaceholderView` → `IncidentListView` |
| FAB | `startIncidentPick()` / open `incident-create` |
| Back | về `home` · **cấm** reimplement hub |
| DI | `AppContainer` wire `IncidentListViewModel` + `FetchIncidentsUseCase` + repo → `ApiClient` path `incident/incidents` |

**Cấm** WebView HTML · VM→URLSession trực tiếp.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md`.

Optional Dest (skill TL): **iPad Pro 13-inch (M5)** khi team yêu cầu — **không** claim family `1` store.

---

## T-AND-INC-LIST — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-incident-list` · frame 412×915 |
| Pattern | List · **không** Modal/Sheet filter · Material chrome OK (trailing filter = `#i-list` icon) |

### UI / API

Cùng bảng field · status map · demo 2 cards · bind · toast · kit cite như T-IOS.  
Trailing filter: **icon `#i-list`** (không bắt buộc text «Lọc») · copy VN còn lại **parity** iOS (`GAP-MOB-ALIGN-01`).

### Router / shell

| Entry | Behavior |
|-------|----------|
| `HomeIntent.TileIncident` / `tile-incident` | mở `#sc-incident-list` · **thay** `onOpenIncidentCreate` |
| Home quick-incident | **giữ** create |
| `MainTab.Incident` | thay `TabPlaceholder("Vấn đề")` → `IncidentListScreen` |
| FAB | `startIncidentPick()` / navigate `incident-create` |
| Back | về Home tab / pop · `home` reuse |
| DI | Hilt `IncidentListViewModel` · use case · repo → Retrofit/`ApiService` `@GET("incident/incidents")` |

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
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse `GET incident/incidents` · **cấm** `IncidentListController` / invent path |
| T-BE-MIG | **n/a** — không bảng mới · `share_na` · **cấm** `/database-migration` |
| Step 4b | **N/A** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack này |

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → list mở · demo 2 cards · toast in-app · **cấm** full-screen block |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` |
| AC-D-05 | Search focus · field ≥16 · keyboard không đè tab cứng |
| AC-D-06 | Safe area · nav + segment + search + banner + cards + FAB + tab |
| AC-D-10 | Shell tab **Vấn đề** · in-screen **segment-2** only (`GAP-TAB-01`) |
| AC-D-12 | label/tab/segment **13** · title/search/card ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear GET incidents · fail/empty → demo 2 |
| AC-F-02 | Back → home |
| AC-F-03 | Lọc → toast **Lọc tuyến · loại · trạng thái** |
| AC-F-04 | Search client title/code/route |
| AC-F-05 | Segment Bản đồ → `gis-map` · Danh sách stay |
| AC-F-06 | Banner / chat / detail → toast § · **cấm** API sibling |
| AC-F-07 | Dual **2** cards + copy SSOT |
| AC-F-08 | Entry Home tile / tab Vấn đề → list · quick-incident giữ create |
| AC-F-09 | FAB → `incident-create` · **cấm** implement form trên slug list |
| AC-F-10 | **Cấm** device label / proto-click / watermark Gói |
| AC-F-11 | RouteName+KmStart · **cấm** invent PlaceName / OrgName |
| AC-F-12 | Thumb empty placeholder · **cấm** Signed media P1 |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `vis-capture` | `pending_confirm` | banner · sau Approve+ship → push |
| `incident-detail` | `pending_confirm` | card / `#i-list` · pass `Id` |
| `incident-chat` | `pending_confirm` | `#i-chat` |
| `gis-map` | reuse / pending | segment Bản đồ · `#i-mappin` |
| `incident-create` | reuse shipped | FAB / quick-incident only · **không** gộp form vào list task |
| `mnt-list` | reuse shipped | `#i-briefcase` Giao việc |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start từ TL/Dev `incident-list`.

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `incident-list` / **`list`** |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-INC-LIST` · `T-AND-INC-LIST` · T-BE **n/a** · T-KIT **n/a** |
| BFF | **chỉ** `GET incident/incidents` |
| Real-data | `_data-analy/incident-list-real-data.md` §A+§B |
| UX packet | `ui/ux-analy.md` · `ui/design.md` · dual proto · map |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/incident-list.md | **PASS** · T-IOS · T-AND · T-BE n/a · route_a · source lock |
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
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:47:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-list-20260829 |
| bffContentHash | sha256:incident-incidents-proxy-passthrough |
| taskId | `task_08bb7863` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
