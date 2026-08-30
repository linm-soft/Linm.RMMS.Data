# Team lead — Task — incident-detail (mobile screen · Chi tiết vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-detail` |
| title | [Mobile] [Vấn đề] -> Chi tiết |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-INC-DETAIL-PACK-01 closed) |
| stack | `native_dual` |
| Feature Kind | **screen** push `#sc-incident-detail` `DES-MOB-INC-DETAIL` · **cấm** sheet chrome / `#sheet-incident` / Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| route_confirm | **route_a** — list card / `#i-list` + post-create toast → push `#sc-incident-detail` + `Id` · Back → `incident-list` · Giao việc → `estimate` (toast P1 nếu chưa ship) · Bản đồ → `gis-map` · Close = POST same slug · **cấm** `mfeStdUrl` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/screens` + `qa/store/incident-detail` · **cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa` web |
| prior · data_analy | **confirmed** · `_data-analy/incident-detail-control-hint.md` · `incident-detail-bff-endpoints.md` · `incident-detail-action-tree.md` · `incident-detail-real-data.md` · contentHash `sha256:incident-detail-control-hint-20260829` · realDataHash `sha256:incident-detail-mobile-real-data-20260829` · bffContentHash `sha256:incident-incidents-getbyid-close-proxy` · actionTreeHash `sha256:incident-detail-mobile-action-tree-20260829` |
| prior · po | **confirmed** · `po/requirement.md` · `task_7563d8e0` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-incident-detail` · `ui/review/demo-parity.md` · `task_db8582b2` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `solution_confirm=approve` · Step 4b **N/A** · `task_578d3886` |
| taskId | `task_fd50c854` |
| updatedAt | `2026-08-29T02:56:00.000Z` |
| thisAction | **Chi tiết vấn đề** `#sc-incident-detail` only · GET `incident/incidents/{id}` · POST `…/{id}/close` · hero+rows+3 CTA · offline demo SC-2401 · sibling nav reuse / toast P1 |

**Cấm:** gộp list / create form / `#sheet-incident` / chat (`GAP-MOB-ACT-01/02`) · invent `api/v1/incident-detail` / `IncidentDetailController` / PlaceName / Lat/Lng wire P1 · ERP.* · WebView HTML · `mfeStdUrl` · `UIAlert` / `AlertDialog` · raw `NavigationBar` / M3 bar / `TabView` · watermark Gói / device label / «Có mạng» · hardcode production khi GET OK · fake lat/lng khi live OK · fake SC-* khi API OK · sửa định vị · DELETE · POST assign trên CTA · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Close / GET / chrome (`GAP-MOB-ACT-07`) · `scaffold_new` / `/mobile-app-architecture` (repos đã có) · Step 4b / migration · TL chạy e2e / `yarn build` / `yarn start:std` · implement native Write ở role TL.

---

## Source lock

| Key | Value |
|-----|-------|
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| be | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` · Incident · **cấm ERP.*** |
| app base | `{BffBase}/mobile-bff/api/v1` — path **không** lặp prefix |
| API P1 | **chỉ** `GET incident/incidents/{id}` + `POST incident/incidents/{id}/close` Bearer · optional `CloseIncidentRequest.Note` empty OK |
| kit | reuse map dual — `LinmTopBar` · Text hero · `LinmBadge` · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · `LinmEmptyChrome` · `LinmTabBar` shell · map `ui/html-to-native-map.md` + `docs/html-to-native-map.md` · **không** `T-KIT-*` · `kit_missing_confirm` **N/A** |
| scaffold | repos **đã có** — **không** `scaffold_new` · **không** `/mobile-app-architecture` trước Dev |
| Step 4b | **N/A** — reuse live GetById + Close · Lat/Lng Signed **DEFER** · **không** `/new-endpoint` / `/database-migration` / `/create-bff-api-feature` |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Entry: `incident-list` card / `#i-list` **và** sau `incident-create` toast success → push `#sc-incident-detail` `DES-MOB-INC-DETAIL` pass `Id`. Back / leading «Vấn đề»+chevron (iOS) / icon-only (Android) → `go('incident-list')` · **cấm** reimplement list. Primary **Giao việc xử lý** → `go('estimate')` · nếu sibling chưa ship → `LinmToast` **Giao việc xử lý** · **cấm** POST assign · **cấm** start sibling (`GAP-MOB-ACT-06`). Secondary **Xem trên bản đồ** → `go('gis-map')` pass id/route nếu có · **không** embed map. **Đóng sự cố** → POST `incident/incidents/{id}/close` · toast **Đã đóng sự cố** · refresh badge · disable CTA · **cấm** DELETE · **cấm** offline queue Close. Shell tab 5 **giữ** · tab `incident` selected · pack `tabs: none` · **cấm** invent segment/tab 6 (`GAP-TAB-01`). Khi sibling Approve+ship → Dev cập nhật CTA push · **cấm** start sibling turn Dev này. |
| route_b | — không dùng (không deep-link web / `mfeStdUrl`) |
| route_c | — không dùng |

IA lock (design · ux-analy · SA): `(auth) Login → list/create → push detail · Back = incident-list`. **Cấm** `TabView` / M3 `NavigationBar` thay `LinmTabBar` / `LinmTopBar`.

AskQuestion (autoApprove=ON · không chờ board): `ios_repo_confirm` · `android_repo_confirm` · `route_confirm=route_a` · `2026-08-29T02:56:00.000Z`.

---

## Live gap (TL audit 2026-08-29)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-incident-detail` | **DELTA** — **chưa** feature folder · list `Detail` = toast `Chi tiết vấn đề` only · `IncidentRepository` chỉ `create` + `fetchList` | **T-IOS-INC-DETAIL** |
| Android `#sc-incident-detail` | **DELTA** — **chưa** `incidentdetail` · list `Detail` = toast only | **T-AND-INC-DETAIL** |
| `GET incident/incidents/{id}` | BE `IncidentsController.GetById` + Mobile.Bff proxy live · app **chưa** gọi | **reuse** path · Dev thêm `fetchById` / Retrofit `@GET` · **cấm** invent `incident-detail` path |
| `POST …/{id}/close` | BE `Close` + proxy live · app **chưa** gọi | **reuse** · Dev `close` use case · optional Note empty |
| `IncidentDto` Lat/Lng | **không** trên DTO · chỉ `HasGps` | bind HasGps + Route/Km · demo coords offline · Lat/Lng **DEFER** (`GAP-MOB-INC-DETAIL-GPS-01`) |
| List → detail entry | toast stub | wire push + `Id` · **cấm** reimplement list chrome |
| Create → detail | toast / stub nav | wire push after create success khi có `Id` |
| Sibling estimate / gis-map | reuse / pending | nav reuse · toast P1 nếu chưa ship · **cấm** API assign/comments · **cấm** start |
| Demo parity dual SC-2401 | Design closed · Nguồn dual khi có data | fallback SSOT 1 row |
| New BE endpoint / Schema_* | **không** | **T-BE-API** / **T-BE-MIG** = **n/a** · Lat/Lng Signed **DEFER** |
| Kit detail | dual map shipped | Dev **cấm** raw NavBar/TabView · **cấm** `T-KIT-*` |
| Foot «Phiên bản Gói…» / device label | demo chrome | **cấm ship** |

---

## Tasks

| id | layer | deps | status | skills | DoD |
|----|-------|------|--------|--------|-----|
| T-KIT-INC-DETAIL | kit | — | **n/a** | — | Kit detail **đã map dual** · Design `kit_missing_confirm` **N/A** — **không** giao Dev kit |
| **T-IOS-INC-DETAIL** | ios | SA · route_a | **pending** | `/agent-dev-ios` · `/ios-new-screen` · `/dev-ios-swiftui` · `/mobile-ui-ux-analy` packet · MVVM layer | Ship `Presentation/Features/IncidentDetail/*` · kit parity · GET by id · POST close · offline demo SC-2401 · wire list/create → push · toast CTAs · `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** PASS · ghi `implement/ios.md` |
| **T-AND-INC-DETAIL** | android | SA · route_a | **pending** | `/agent-dev-android` · `/android-new-screen` · `/dev-android-compose` · `/android-new-api-call` · cùng ux packet | Same field/API/DoD dual · `presentation/feature/incidentdetail/*` · `./gradlew :app:assembleDebug` PASS · ghi `implement/android.md` |
| **T-BE-API** | be | — | **n/a** | — | **không** `/new-endpoint` — GetById + Close **live** · Step 4b **N/A** · Lat/Lng **DEFER** |
| **T-BE-MIG** | be | — | **n/a** | — | **không** `/database-migration` |
| T-QA-INC-DETAIL | qa | T-IOS · T-AND | pending | `/agent-qa-mobile` | AC slug `incident-detail` only · `yarn e2e-qa-mobile` · live sim 6.9" + emulator · store PNG `qa/store/incident-detail` · **cấm** sibling screens in-scope · **cấm** `yarn e2e-qa` web |

**1 action = 1 feature.** **Cấm** gộp sibling (`incident-list` · `incident-create` · `estimate` form · `gis-map` embed · `incident-chat` · `#sheet-incident`) vào task file này như in-scope implement. Sibling giữ reuse / `pending_confirm` — **cấm** auto start (`GAP-MOB-ACT-06`).

---

## T-IOS-INC-DETAIL — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| `ssot.zones` | `DES-MOB-INC-DETAIL` · `DES-MOB-TABBAR` · `#sc-incident-detail` |
| Pattern | Screen push · **không** Modal/Sheet · frame proto 390×844 |

### UI (kit cite — `ui/html-to-native-map.md`)

| Field | Kit | Notes |
|-------|-----|-------|
| navBack | `LinmTopBar` leading `#i-chevron-left` | text «Vấn đề» + chevron · `go('incident-list')` · **cấm** reimplement list |
| title | `LinmTopBar` title | **Chi tiết** fixed |
| codeLabel | Caption Text **13** | **Mã** fixed |
| codeValue | Display Text bold **28** | DTO `Code` · SC-* |
| badge | `LinmBadge` | `"{SeverityVN} · {StatusVN}"` · red / warn / gray |
| rowType | `LinmListRow` | label **Loại** · `Title` ưu tiên · else `IncidentType` |
| rowLoc | `LinmListRow` | label **Vị trí ghim tự động** · `"{RouteName} · Km {KmStart}"` |
| rowGps | `LinmListRow` | label **Định vị** · HasGps + Route/Km · **cấm** fake lat/lng live · demo coords offline only |
| rowSource | `LinmListRow` | label **Nguồn** · DetectionId / Description·AssetLabel · empty **omit** · dual parity khi có data |
| btnAssign | `LinmPrimaryButton` | **Giao việc xử lý** · `go('estimate')` / toast P1 · **không** POST assign |
| btnMap | `LinmSecondaryButton` | **Xem trên bản đồ** · `go('gis-map')` |
| btnClose | `LinmSecondaryButton` | **Đóng sự cố** · POST close · disable nếu closed |
| toast | `LinmToast` | **Đã đóng sự cố** · sibling toast · offline optional |
| empty404 | `LinmEmptyChrome` | NotFound · back list |
| tabIncident | `LinmTabBar` | shell selected **Vấn đề** · label **13** · **cấm** invent segment |

**Cấm** raw `NavigationBar` / `TabView` product chrome · **cấm** ship foot Gói / device label · **cấm** «Có mạng» · **cấm** bottom-sheet chrome.

### Demo / fallback SSOT (**1** row — SC-2401)

| Field | Value |
|-------|-------|
| Code | SC-2401 |
| Badge | Nghiêm trọng · Đang mở |
| Loại | Nứt mặt đường |
| Vị trí | QL.1 · Km 1556+080 |
| Định vị (demo only) | 10.9620, 106.8518 · ±5 m |
| Nguồn (khi có) | Tuần đường PAT-…0014 |
| Toast close | Đã đóng sự cố |

### Badge VN map

| API `Severity` | API `Status` | Badge demo | chrome |
|----------------|--------------|------------|--------|
| `Nghiêm trọng` / `critical` | open / `new` / `Đang mở` / not closed | Nghiêm trọng · Đang mở | red |
| `Cao` / `high` | `in_progress` / giám sát | Cao · Đang được giám sát | warn/orange |
| any | `closed` / `Đóng` | … · Đã đóng | gray |
| other | other | `{Severity} · {Status raw}` | info |

### Bind (real-data §B · SA)

| Line | Rule |
|------|------|
| code | `Code` raw (SC-*) |
| badge | `"{SeverityVN} · {StatusVN}"` · map trên |
| type | ưu tiên `Title` · thiếu → `IncidentType` |
| loc | `"{RouteName} · Km {KmStart}"` · thiếu Km → Route only · **cấm** fake |
| gps | DTO **không** Lat/Lng → nếu `HasGps` → loc text + «đã chốt» · else «Chưa có định vị» · demo coords **chỉ** fallback offline |
| source | `DetectionId` prefix «AI DET-…» · hoặc «Tuần đường …» từ Description/AssetLabel · empty omit |
| close | 200 → toast «Đã đóng sự cố» · badge → Đã đóng · disable `btnClose` |
| Id | nav key từ list/create |

### API / store

| Step | Spec |
|------|------|
| Appear | `FetchIncidentByIdUseCase` → `GET incident/incidents/{id}` Bearer |
| Close | `CloseIncidentUseCase` → `POST incident/incidents/{id}/close` · body optional `Note` empty/omit |
| Repo | extend `IncidentRepository` + `IncidentRepositoryImpl` · thêm `fetchById` + `close` · **cấm** fork DTO · map `IncidentDto` → detail model |
| Bind | code · badge · type · loc · gps · source · isClosed · **cấm** invent Lat/Lng / PlaceName |
| Fail / offline | demo SSOT SC-2401 · screen **vẫn mở** · optional toast · **cấm** native alert · **cấm** block tab |
| 404 | `LinmEmptyChrome` · back list |
| Close offline | **online-only** · **cấm** enqueue write queue |
| Sibling API | **cấm** list GET · create POST · assign · comments trên slug này |

### Router / shell

| Entry | Behavior |
|-------|----------|
| List `#i-list` / card Detail | **thay** toast → push `#sc-incident-detail` + `Id` |
| Create success toast nav | push detail khi có `Id` · **cấm** reimplement create form |
| Back | `go('incident-list')` · **cấm** reimplement list |
| btnAssign | `go('estimate')` / toast **Giao việc xử lý** |
| btnMap | `go('gis-map')` pass id/route |
| DI | `AppContainer` wire `IncidentDetailViewModel` + use cases + repo → `ApiClient` path `incident/incidents/{id}` · `…/close` |
| Shell | `LinmTabBar` giữ tab `incident` · **không** segment trên detail |

**Cấm** WebView HTML · VM→URLSession trực tiếp.

### Build DoD

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

Fail → `build_fail_confirm` · **cấm** mark Dev done. Ghi `implement/ios.md`.

Optional Dest (skill TL): **iPad Pro 13-inch (M5)** khi team yêu cầu — **không** claim family `1` store.

---

## T-AND-INC-DETAIL — detail

| | |
|--|--|
| `source.repo` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| `ssot.zones` | cùng iOS · `#sc-incident-detail` · frame 412×915 |
| Pattern | Screen push · **không** Modal/Sheet · Material chrome OK |

### UI / API

Cùng bảng field · badge map · demo SC-2401 · bind · toast · kit cite như T-IOS.  
Title: **Chi tiết sự cố** (parity OK vs iOS «Chi tiết»).  
Back: **icon-only** `#i-chevron-left` (không bắt buộc text «Vấn đề»).  
Code hero: Display **24** bold. Copy VN còn lại **parity** iOS (`GAP-MOB-ALIGN-01`).

### Router / shell

| Entry | Behavior |
|-------|----------|
| List `Detail(id)` | **thay** toast → navigate `#sc-incident-detail` + `Id` |
| Create success | push detail khi có `Id` |
| Back | pop → list · `incident-list` reuse |
| btnAssign | `go('estimate')` / toast |
| btnMap | `go('gis-map')` |
| DI | Hilt `IncidentDetailViewModel` · use cases · repo → Retrofit/`ApiService` `@GET("incident/incidents/{id}")` · `@POST("…/close")` |

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
| T-BE-API | **n/a** — SA `solution_confirm=approve` · reuse GetById + Close · **cấm** `IncidentDetailController` / invent path · Lat/Lng Signed **DEFER** (không block ship) |
| T-BE-MIG | **n/a** — không bảng mới · `share_na` · **cấm** `/database-migration` |
| Step 4b | **N/A** — **cấm** TL/Dev chạy migration / `/new-endpoint` cho pack này |

---

## Device / field AC (Dev + QA cite)

| ID | AC |
|----|-----|
| AC-D-01 | Offline → detail mở · demo SC-2401 · toast in-app · **cấm** full-screen block |
| AC-D-04 | **Cấm** `UIAlert` / `AlertDialog` — mọi phản hồi = `LinmToast` |
| AC-D-06 | Safe area · nav + hero + rows + 3 CTA + tab shell |
| AC-D-10 | Shell tab **Vấn đề** · pack **không** segment (`GAP-TAB-01`) |
| AC-D-12 | label/caption **13** · code hero ≥**24/28** · field value ≥**16** (`GAP-TYP-01`) |
| AC-F-01 | Appear GET by id · fail → demo · 404 → EmptyChrome |
| AC-F-02 | Back → `incident-list` |
| AC-F-03 | Close open → POST · toast **Đã đóng sự cố** · badge Đã đóng · CTA disable |
| AC-F-04 | Closed → CTA disable / toast **Đã đóng** · **cấm** DELETE |
| AC-F-05 | Giao việc → `estimate` / toast · **cấm** POST assign |
| AC-F-06 | Bản đồ → `gis-map` · **không** embed |
| AC-F-07 | Dual demo SC-2401 + copy SSOT · Nguồn dual khi có data · empty omit |
| AC-F-08 | Entry list Detail + create success → push + `Id` |
| AC-F-09 | GPS HasGps+Route/Km · **cấm** fake lat/lng live · demo coords offline only |
| AC-F-10 | **Cấm** device label / proto-click / watermark Gói |
| AC-F-11 | **Cấm** invent PlaceName / Lat/Lng wire / `incident-detail` path |
| AC-F-12 | Close **online-only** · **cấm** offline write queue |

---

## Sibling backlog (cấm start)

| feature | status | note |
|---------|--------|------|
| `incident-list` | reuse shipped | back parent · entry card |
| `incident-create` | reuse shipped | entry sau create · **không** gộp form |
| `estimate` | reuse / pending | CTA Giao việc · toast P1 nếu chưa ship |
| `gis-map` | reuse / pending | CTA Bản đồ |
| `incident-chat` | `pending_confirm` / DEFER | **cấm** start từ detail |
| `#sheet-incident` | **OUT** | **cấm** ship sheet chrome |

**GAP-MOB-ACT-06:** board Approve riêng · **cấm** auto start sibling từ TL/Dev `incident-detail`.

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `incident-detail` / **`screen`** |
| route_confirm | **route_a** (autoApprove) |
| Tasks | `T-IOS-INC-DETAIL` · `T-AND-INC-DETAIL` · T-BE **n/a** · T-KIT **n/a** |
| BFF | **chỉ** `GET incident/incidents/{id}` + `POST …/{id}/close` |
| Real-data | `_data-analy/incident-detail-real-data.md` §A+§B |
| UX packet | `ui/ux-analy.md` · `ui/design.md` · dual proto · map |
| GPS | HasGps + Route/Km · Lat/Lng **DEFER** · demo offline only |
| Next slash | `/agent-dev-ios` rồi `/agent-dev-android` (serial / scoped locks) |
| Chain this turn | **không** (roleOnly=`team_lead` · **GAP-PKT-ROLE-01**) |
| e2eQa | ON queued QA · **cấm** TL chạy e2e |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/incident-detail.md | **PASS** · T-IOS · T-AND · T-BE n/a · route_a · source lock |
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
| generatedAt | 2026-08-29T02:56:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-control-hint-20260829 |
| realDataHash | sha256:incident-detail-mobile-real-data-20260829 |
| bffContentHash | sha256:incident-incidents-getbyid-close-proxy |
| taskId | `task_fd50c854` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
