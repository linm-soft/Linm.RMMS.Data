# SA — Solution — incident-list (mobile list · Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| title | [Mobile] [Trang Chủ] -> Vấn đề |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_6ca4ad05`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-incident-list` `DES-MOB-INC-LIST` · **cấm** Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| domain | **Incident** · `IncidentsController.GetList` · **cấm** invent `api/v1/incident-list` / `IncidentListController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-incident-list` · `ui/review/demo-parity.md` · `task_6800d075` |
| prior · po | **confirmed** · `po/requirement.md` · `task_7fea88b7` |
| prior · data_analy | **confirmed** · `_data-analy/incident-list-control-hint.md` · `incident-list-bff-endpoints.md` · `incident-list-action-tree.md` · `incident-list-real-data.md` · contentHash `sha256:incident-list-mobile-list-20260829` · bffContentHash `sha256:incident-incidents-proxy-passthrough` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_6ca4ad05` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_6ca4ad05` |
| confirmedBy | agent autoApprove · `task_6ca4ad05` |
| updatedAt | `2026-08-29T01:50:00.000Z` |
| thisAction | **List Quản lý vấn đề** `#sc-incident-list` only · GET `incident/incidents` · client search · segment · banner · toast Lọc/chat · FAB create entry · nav siblings · **cấm** gộp create/detail/map/chat form |

**Cấm:** invent `api/v1/incident-list` / `IncidentListController` · fork `IncidentDto` mobile-only · app `:5101` · DbContext trên Mobile.Bff · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · gộp sibling (`GAP-MOB-ACT-01/02`) · start `pending_confirm` (`GAP-MOB-ACT-06`) · re-scan demo · Write MFE/native ở role SA · invent PlaceName / OrgName.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (list = **no write queue** · GET fail → demo SSOT).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Incident · `IncidentsController` · table `rmms_incidents` |
| API downstream | `GET api/v1/incident/incidents` · optional `GET …/{id}` **OUT** slug list UI |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `incident/*` |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | create form · detail CRUD · assign/close · comments · `#sheet-incident` · gis overlay · filter sheet · SignalR |

### Route decision

| | Choice |
|--|--------|
| Slug | `incident-list` → **list** · 1 màn `#sc-incident-list` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 | **chỉ** `GET incident/incidents?page=1&pageSize=50` (Bearer) |
| Prefetch detail | `GET incident/incidents/{id}` · **OUT** slug list UI (sibling `incident-detail`) |
| Step 4b | **N/A** — reuse Signed endpoints live · **cấm** `/new-endpoint` |
| Rationale | Live Incident list đủ cards · BFF proxy passthrough · **cấm** invent incident-list path |

---

## BFF / API contract (từ analy — **cấm** invent)

Nguồn: `_data-analy/incident-list-bff-endpoints.md` · `incident-list-real-data.md` §B · verify `IncidentsController` + `IncidentDto`.

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| Incident list | GET | `incident/incidents` | `IncidentsController.GetList` | **yes** · `page=1` · `pageSize=50` |
| Prefetch detail | GET | `incident/incidents/{id}` | `GetById` | **OUT** slug list |
| Banner vis | — | — | local | toast P1 / `go('vis-capture')` khi sibling ship |
| Seg / card map | — | — | local | `go('gis-map')` |
| Assign WO | — | — | local | `go('mnt-list')` |
| Detail | — | — | local | toast P1 / `go('incident-detail')` pass `Id` |
| FAB create | — | — | local | `startIncidentPick()` · owner `incident-create` |
| Lọc / search UI | — | — | local | toast / client filter · **không** API P1 |
| Chat | — | — | local | toast **Trao đổi sự cố** · comments **DEFER** |

### Query passthrough (list)

`search` · `status` · `severity` · `page` · `pageSize`  
Mobile P1: `page=1` · `pageSize=50` · search **client-side** OK (title / code / route) nếu không gửi `search` query.

### Response shape (live)

`ApiResponse<IncidentPagedResult>` → `data.items[]` = `IncidentDto`:

| DTO field | Card bind |
|-----------|-----------|
| `Title` | cardTitle |
| `IncidentType` · `Code` | cardTypeCode (`{IncidentType} · {Code}`) |
| `RouteName` · `KmStart` | cardLoc (+ place fallback) |
| `ReporterName` · `AssigneeName` | cardPerson |
| `RequestedAt` | cardTime |
| `Status` | cardStatus |
| `Id` | nav key → detail |
| `AssetLabel` / `Description` | place fallback only · **cấm** invent PlaceName |

**Cấm** app fork DTO khác BFF table.

### Card line rules (real-data §B)

| Line | Rule |
|------|------|
| typeCode | `"{IncidentType} · {Code}"` · thiếu type → `Code` only |
| loc | `"{RouteName} Km {KmStart}"` · place fallback từ `AssetLabel` / `Description` tail · **cấm** fake lat/lng · **cấm** invent PlaceName |
| person | `ReporterName` · nếu có `AssigneeName` khác reporter → append ` · {AssigneeName}` · org gắn trong name hoặc omit (`GAP-MOB-INC-LIST-ORG-01`) |
| time | format `yyyy-MM-dd HH:mm:ss` local từ `RequestedAt` |
| status | map Status VN · prefix UI `Trạng thái: ` |
| thumb | **DEFER** P1 · empty placeholder OK (`GAP-MOB-INC-LIST-THUMB-01`) · **không** Signed media P1 |

### Status VN map

| API `Status` (live string) | VN (demo) | chrome |
|----------------------------|-----------|--------|
| `Đợi phân công giám sát` / `Mới` / `new` | Đợi phân công giám sát | warn |
| `Đang được giám sát` / `in_progress` | Đang được giám sát | ok |
| `Đóng` / `closed` | Đã đóng | gray |
| other | raw `Status` | info |

### OUT slug `incident-list` P1 (sibling / web)

| Method | Path | Owner |
|--------|------|-------|
| POST | `incident/incidents` | `incident-create` |
| GET/PUT/DELETE | `incident/incidents/{id}` | `incident-detail` / web |
| POST | `…/assign` · `…/close` | sibling detail — **OUT** |
| POST | `…/comments` | `incident-chat` **DEFER** |
| Sheet UI | `#sheet-incident` | **OUT** |
| Screen | `#sc-inc-form` | `incident-create` — **OUT** |
| Web `web-bff/api/v1/incident/**` | — | web · mobile = `mobile-bff` proxy |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| HTTP app | `ApiClient` iOS · `ApiService` Android | **cấm** URLSession/OkHttp trong View · **cấm** VM→ApiClient trực tiếp nếu repo pattern đã có |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` interceptor |
| DTO | reuse `IncidentDto` wire fields · **cấm** fork mobile DTO | map → UI model list card |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmSearchField` · banner / `LinmListRow` · rich-card · `LinmBadge` · `LinmIconButton` · `LinmFAB` · `LinmToast` · `LinmEmptyChrome` (opt) · `LinmTabBar` shell | Design `kit_missing_confirm` **N/A** · **cấm** raw `List` / M3 `NavigationBar` / `TabView` |
| Persist | no-parent-json-field | list **không** ghi inventory JSON · **không** queue write |
| Tab | shell tab `incident` = entry · in-screen **segment-2** Danh sách / Bản đồ | **cấm** invent tab 6 (`tab-index`) |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | display `RequestedAt` local · **không** DATE filter form P1 | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_na** | list current-company via BE + headers · **không** View catalog GET/{id} | `/implement-view-cross-company` | — |
| SHARE | **n/a** | đọc existing `rmms_incidents` · **không** bảng mới | `/implement-shared-table` | migration **không** |
| Offline | **no write queue** · list **vẫn mở** | GET fail / empty → demo **2** cards SSOT · toast info optional | offline-sync | **cấm** block screen |
| GPS | **n/a** | — | — | sibling create / vis-capture / map |
| Camera | **n/a** | — | — | banner → `vis-capture` · FAB → create |
| Push | **n/a** | — | — | — |
| Store | **N/A** signup | no account create/delete trên list | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP listing · family `1` **cấm** iPad claim |
| Step 4b | **N/A** | reuse GET incidents | — | **cấm** `/new-endpoint` |
| Media thumb | **DEFER** | empty placeholder | — | Signed media **không** P1 |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-29T01:50:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — existing Incident entity / `rmms_incidents` |
| API shape | paged `IncidentDto` scalars |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/incident/incidents` | BE `IncidentsController` + Mobile.Bff proxy | **Giữ** · app path `incident/incidents` |
| Native `#sc-incident-list` | **chưa** (stub/toast từ Home/tab) | **DELTA UI** dual list kit · replace stub |
| Home tile / tab `incident` | entry → stub | Nav push `#sc-incident-list` · **cấm** reimplement `#sc-home` |
| PlaceName / OrgName | **không** trên DTO | bind RouteName+KmStart · AssetLabel/Description fallback · ReporterName org omit (`GAP-MOB-INC-LIST-PLACE-01` / `ORG-01`) |
| Thumb media | **không** Signed P1 | empty placeholder · **DEFER** (`GAP-MOB-INC-LIST-THUMB-01`) |
| `IncidentListController` / `api/v1/incident-list` | **không** | **Cấm** tạo |
| Sibling vis-capture / detail / chat / gis-map | pending_confirm / reuse | toast P1 hoặc nav reuse · **cấm** auto start |
| Demo parity dual 2 cards | Design closed | fallback SSOT 2 rows |

### Demo / fallback cards SSOT (**2**)

| title | typeCode | loc | person | time | status |
|-------|----------|-----|--------|------|--------|
| Nứt mặt đường | Sự cố nhanh · SC-2401 | QL.1 Km 1556+080 · Xuân Hải | Nguyễn Văn A · Tổ tuần đường VP-IV.1 | 2026-08-10 08:12:40 | Đợi phân công giám sát (warn) |
| Cống tắc | Hệ thống an toàn · SC-2398 | HCM · Km 12+400 | Trần Khánh · Chi cục II.2 | 2026-08-09 14:40:13 | Đang được giám sát (ok) |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-incident-list` list | topbar · segment · search · banner · cards · actions · FAB · tab shell | query Incident list + static chrome / demo fallback | `Incident` read-only |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | (chevron) | — | local | pop `home` |
| title | Quản lý vấn đề | — | fixed | dual |
| navFilter | Lọc | — | toast | **Lọc tuyến · loại · trạng thái** · **cấm** sheet P1 |
| segList | Danh sách | — | local | selected · stay |
| segMap | Bản đồ | — | nav | `go('gis-map')` |
| search | Tìm kiếm vấn đề… | — | client filter | title/code/route |
| bannerVis | Nhận diện mặt đường | — | toast/nav | P1 toast / `vis-capture` khi ship |
| cardTitle | (tên vấn đề) | `Title` | GET list | |
| cardTypeCode | loại · mã | `IncidentType` · `Code` | derived | |
| cardLoc | tuyến · km · nơi | `RouteName` · `KmStart` · place fallback | derived | **cấm** PlaceName invent |
| cardPerson | người · tổ | `ReporterName` · `AssigneeName` | derived | org omit OK |
| cardTime | datetime | `RequestedAt` | display local | |
| cardStatus | Trạng thái: … | `Status` | map VN + chrome | |
| cardThumb | thumb | — | DEFER | empty placeholder |
| actChat | Trao đổi | — | toast | **Trao đổi sự cố** |
| actAssign | Giao việc | — | nav | `go('mnt-list')` |
| actDetail | Chi tiết | `Id` | toast/nav | pass `Id` khi sibling ship |
| actMap | Bản đồ | — | nav | `go('gis-map')` |
| fabCreate | Ghi sự cố | — | local | `startIncidentPick()` |
| empty | (trống) | — | optional | 0 live + no demo gate |

**Cấm** invent DTO PlaceName / OrgName / `incident-list` aggregate.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Home tile / tab Vấn đề | push `#sc-incident-list` | `incident-list` (this) · entry `reuse=home` |
| Back | pop `home` | `home` reuse |
| Lọc | `LinmToast` **Lọc tuyến · loại · trạng thái** | chrome P1 |
| Search | client filter | same slug (`GAP-MOB-ACT-07`) |
| Segment Danh sách | stay list | same slug |
| Segment Bản đồ | `go('gis-map')` | `gis-map` shared / pending |
| Banner | toast **Nhận diện mặt đường** · sau ship → `go('vis-capture')` | `vis-capture` pending_confirm |
| Card / `#i-list` | toast **Chi tiết vấn đề** · sau ship → `go('incident-detail')` + `Id` | `incident-detail` pending_confirm |
| `#i-briefcase` | `go('mnt-list')` | `mnt-list` reuse |
| `#i-mappin` | `go('gis-map')` | `gis-map` |
| `#i-chat` | toast **Trao đổi sự cố** | `incident-chat` pending_confirm |
| FAB `#i-plus` | `startIncidentPick()` | `incident-create` reuse |

**Cấm** nav stub giả màn sibling · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog` / `window.alert`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-INC-LIST-PLACE-01 | **PO chốt** · bind RouteName+KmStart · AssetLabel/Description fallback · **cấm** invent PlaceName |
| GAP-MOB-INC-LIST-ORG-01 | **PO chốt** · ReporterName/AssigneeName only · org trong name hoặc omit |
| GAP-MOB-INC-LIST-THUMB-01 | **DEFER** P1 · empty placeholder · **không** Signed media P1 |
| GAP-MOB-INC-LIST-NAV-01 / LIST-01 / DATA-01 / SEG-01 / BANNER-01 / FAB-01 / FILTER-01 | Dev ship push list + GET bind + offline demo + chrome |
| GAP-MOB-ACT-01/02 | **none** — 1 list · không child form/sheet |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw List/NavBar |
| GAP-MOB-ACT-06 | Sibling giữ `pending_confirm` · **cấm** auto start |
| GAP-MOB-ACT-07 | Search/Lọc/GET cùng slug · **không** enqueue |
| GAP-MOB-BFF-01 | **không** hàng mới — GET incidents live đủ |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/IncidentList/*` (hoặc `Incident/List/*`) | `presentation/feature/incidentlist/*` |
| Use case | `FetchIncidentsUseCase` | same |
| Repo | `IncidentRepository` / `IncidentListRepositoryImpl` → `GET incident/incidents` | same |
| State | items · query · toast · loading · usingDemoFallback · segment | same |
| DI | `AppContainer` wire VM | Hilt ViewModel |
| Shell | Home tile + tab `incident` → push list · `LinmTabBar` **giữ** · segment-2 in-screen | same |
| Offline | appear: try GET → fail/empty → demo 2 cards · screen mở | same |
| Demo SSOT | `IncidentListCopy.demoCards` (2 rows) | same |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · hardcode production thay live khi GET OK.

---

## VERIFY GATE (roleOnly=`sa`)

| Check | Result |
|-------|--------|
| be/solution-discovery.md | **PASS** · solution_confirm approve · BFF map analy |
| Design + control-hint + real-data §B | **PASS** · read · **cấm** invent API / control |
| be_repo_confirm | **PASS** · `Linm.RMMS.WebService` · Incident · **cấm ERP.*** |
| Step 4b / migration | **N/A** — reuse `GET incident/incidents` |
| yarn build / e2e / start:std | **SKIP** (cấm role SA) |
| Write MFE / native | **SKIP** (cấm role SA) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `incident-list` / **`list`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET incident/incidents` · Step 4b **N/A** |
| Real-data | `_data-analy/incident-list-real-data.md` §A+§B |
| Tasks đề xuất | `T-IOS-INC-LIST` · `T-AND-INC-LIST` · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | Home/tab incident → push list · sibling CTAs = toast P1 / reuse nav |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl · **cấm** role SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-list-20260829 |
| bffContentHash | sha256:incident-incidents-proxy-passthrough |
| taskId | `task_6ca4ad05` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
