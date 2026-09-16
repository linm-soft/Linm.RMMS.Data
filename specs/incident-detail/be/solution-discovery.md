# SA — Solution — incident-detail (mobile · Chi tiết vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-detail` |
| title | [Mobile] [Vấn đề] -> Chi tiết |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_578d3886`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-INC-DETAIL-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** push `#sc-incident-detail` `DES-MOB-INC-DETAIL` · **cấm** sheet chrome / `#sheet-incident` / Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| domain | **Incident** · `IncidentsController.GetById` · `Close` · **cấm** invent `api/v1/incident-detail` / `IncidentDetailController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-incident-detail` · `ui/review/demo-parity.md` · `task_db8582b2` |
| prior · po | **confirmed** · `po/requirement.md` · `task_7563d8e0` |
| prior · data_analy | **confirmed** · `_data-analy/incident-detail-control-hint.md` · `incident-detail-bff-endpoints.md` · `incident-detail-action-tree.md` · `incident-detail-real-data.md` · contentHash `sha256:incident-detail-control-hint-20260829` · realDataHash `sha256:incident-detail-mobile-real-data-20260829` · bffContentHash `sha256:incident-incidents-getbyid-close-proxy` · actionTreeHash `sha256:incident-detail-mobile-action-tree-20260829` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_578d3886` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_578d3886` |
| confirmedBy | agent autoApprove · `task_578d3886` |
| updatedAt | `2026-08-29T02:52:20.000Z` |
| thisAction | **Chi tiết vấn đề** `#sc-incident-detail` only · entry list card / create toast nav · GET by id · POST close · nav estimate / gis-map / list · **cấm** gộp list / create / sheet / chat |

**Cấm:** invent `api/v1/incident-detail` / `IncidentDetailController` · fork `IncidentDto` mobile-only · invent Lat/Lng trên wire P1 · app `:5101` · DbContext trên Mobile.Bff · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · gộp sibling (`GAP-MOB-ACT-01/02`) · start `pending_confirm` (`GAP-MOB-ACT-06`) · enqueue Close / GET (`GAP-MOB-ACT-07`) · re-scan demo · Write MFE/native ở role SA · fake lat/lng khi live OK · fake SC-* khi API OK · sửa định vị · DELETE hard · system `UIAlert` / `AlertDialog`.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (detail = **no write queue** · GET fail → demo SSOT · Close **online-only**).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Incident · `IncidentsController` · table `rmms_incidents` |
| API downstream | `GET api/v1/incident/incidents/{id}` · `POST api/v1/incident/incidents/{id}/close` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `incident/*` |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | list CRUD · create form · `#sheet-incident` · assign POST · comments/chat · media · sửa định vị · DELETE |

### Route decision

| | Choice |
|--|--------|
| Slug | `incident-detail` → **screen** · 1 màn `#sc-incident-detail` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | **chỉ** `GET incident/incidents/{id}` (Bearer) |
| App path P1 write | **chỉ** `POST incident/incidents/{id}/close` · body `CloseIncidentRequest` optional `Note` |
| Nav siblings | `go('incident-list')` · `go('estimate')` · `go('gis-map')` — **không** API trên slug này |
| Step 4b | **N/A** — reuse Signed GetById + Close live · **cấm** `/new-endpoint` · Lat/Lng Signed **DEFER** (xem GAP GPS) |
| Rationale | Live Incident GetById/Close đủ hero+rows+CTA · BFF proxy · **cấm** invent incident-detail path |

---

## BFF / API contract (từ analy — **cấm** invent)

Nguồn: `_data-analy/incident-detail-bff-endpoints.md` · `incident-detail-real-data.md` §B · verify live `IncidentsController` + `IncidentDto` (2026-08-29).

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| Load chi tiết | GET | `incident/incidents/{id}` | `IncidentsController.GetById` | **yes** · nav `Id` |
| Đóng sự cố | POST | `incident/incidents/{id}/close` | `IncidentsController.Close` | **yes** · optional `Note` empty OK |
| Nav Giao việc | — | — | local | `go('estimate')` / toast P1 nếu sibling chưa ship · **không** POST assign |
| Nav Bản đồ | — | — | local | `go('gis-map')` pass id/route nếu có |
| Nav back list | — | — | local | `go('incident-list')` |
| Empty 404 | — | — | local | `LinmEmptyChrome` · back list |

### Request — Close

| Body | Required | Notes |
|------|----------|-------|
| `CloseIncidentRequest.Note` | no | demo không nhập note · empty / omit OK |

Close set `Status = closed` server-side · response `IncidentDto` → refresh badge · toast «Đã đóng sự cố» · disable `btnClose`.

### Response shape (live)

`ApiResponse<IncidentDto>` → `data` = `IncidentDto`:

| DTO field | Detail zone |
|-----------|-------------|
| `Id` | route param / nav key |
| `Code` | codeValue hero |
| `Severity` · `Status` | badge VN map |
| `Title` | rowType (ưu tiên) |
| `IncidentType` | rowType fallback |
| `RouteName` · `KmStart` | rowLoc |
| `HasGps` | rowGps flag · **không** Lat/Lng trên DTO (verified live) |
| `DetectionId` | rowSource optional |
| `ReporterName` · `AssigneeName` | optional meta (không demo iOS hero) |
| `Description` · `AssetLabel` | source cite fallback / expand P2 |
| `RequestedAt` | optional meta P2 |

**Cấm** app fork DTO khác BFF table · **cấm** invent Lat/Lng trên wire P1.

### Display rules (real-data §B)

| Line | Rule |
|------|------|
| code | `Code` raw (SC-*) |
| badge | `"{SeverityVN} · {StatusVN}"` · map control-hint |
| type | ưu tiên `Title` · thiếu → `IncidentType` |
| loc | `"{RouteName} · Km {KmStart}"` · thiếu Km → Route only · **cấm** fake |
| gps | DTO **không** Lat/Lng → nếu `HasGps` → loc text + «đã chốt» · else «Chưa có định vị» · demo coords **chỉ** fallback offline (`GAP-MOB-INC-DETAIL-GPS-01` **closed P1**) |
| source | `DetectionId` prefix «AI DET-…» · hoặc «Tuần đường …» từ Description/AssetLabel · empty **omit** row · dual parity khi có data |
| close | 200 → toast «Đã đóng sự cố» · badge → Đã đóng · disable CTA |

### Badge VN map

| API `Severity` | API `Status` | Badge demo | chrome |
|----------------|--------------|------------|--------|
| `Nghiêm trọng` / `critical` | open / `new` / `Đang mở` / not closed | Nghiêm trọng · Đang mở | red |
| `Cao` / `high` | `in_progress` / giám sát | Cao · Đang được giám sát | warn/orange |
| any | `closed` / `Đóng` | … · Đã đóng | gray |
| other | other | `{Severity} · {Status raw}` | info |

### OUT slug `incident-detail` P1 (sibling / web)

| Method | Path | Owner |
|--------|------|-------|
| GET | `incident/incidents` | `incident-list` |
| POST | `incident/incidents` | `incident-create` |
| PUT | `incident/incidents/{id}` | **OUT** (không sửa định vị) |
| DELETE | `incident/incidents/{id}` | **OUT** feature-guide |
| POST | `…/assign` | live — UI P1 nav `estimate` · **không** gọi trên detail CTA |
| POST | `…/comments` | `incident-chat` **DEFER** |
| Sheet UI | `#sheet-incident` | **OUT** |
| Screen | `#sc-inc-form` | `incident-create` — **OUT** |
| Web `web-bff/api/v1/incident/**` | — | web · mobile = `mobile-bff` proxy |

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `incident.incidents.read` (GetById) | GET by id | **reuse** · BE `[RequirePermission]` TODO debt P1 OK |
| `incident.incidents.update` (Close) | POST close | **reuse** · BE TODO debt P1 OK |
| assign / comments / create / list | OUT slug | **cấm** gọi |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `IncidentDetailController` local trên BFF |
| BE HTTP | `IncidentsController` GetById · Close | live paths cited · verified |
| Response DTO | `ApiResponse<IncidentDto>` | scalars — **không** Lat/Lng |
| Request body (close) | `CloseIncidentRequest` live | `Note?` — **không** fork app-only |
| HTTP app | `FetchIncidentByIdUseCase` · `CloseIncidentUseCase` | **cấm** URLSession/OkHttp trong View · **cấm** VM→ApiClient trực tiếp nếu repo pattern đã có |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` interceptor |
| Kit | `LinmTopBar` · Text hero · `LinmBadge` · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · `LinmEmptyChrome` · `LinmTabBar` shell | Design `kit_missing_confirm` **N/A** · **cấm** raw `NavigationBar` / M3 bar / `TabView` |
| Persist | no-parent-json-field | detail **không** ghi inventory JSON · Close **không** offline queue |
| Tab | shell tab `incident` selected · pack `tabs: none` | **cấm** invent / segment trên detail (`GAP-TAB-01`) |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | optional `RequestedAt` local display P2 · **không** DATE form | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_na** | GetById / Close current-company via BE + headers · **không** View catalog | `/implement-view-cross-company` | — |
| SHARE | **n/a** | đọc/cập nhật existing `rmms_incidents` · **không** bảng mới | `/implement-shared-table` | migration **không** |
| Offline | **no write queue** · screen **vẫn mở** | GET fail → demo SSOT SC-2401 · Close **online-only** · 404 → EmptyChrome | offline-sync | **cấm** block screen · **cấm** enqueue Close |
| GPS | **read-only display** | `HasGps` + Route/Km · **cấm** fake lat/lng · **cấm** device GPS write · **cấm** sửa định vị | — | demo coords offline only · Lat/Lng Signed **DEFER** |
| Camera | **n/a** | — | — | media OUT P1 detail |
| Push | **n/a** | — | — | — |
| Store | **N/A** signup | no account create/delete trên detail | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP listing · family `1` **cấm** iPad claim |
| Step 4b | **N/A** | reuse GetById + Close | — | **cấm** `/new-endpoint` · Lat/Lng **không** Signed P1 |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-29T02:52:20.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — existing Incident entity / `rmms_incidents` |
| API shape | `IncidentDto` scalars + `CloseIncidentRequest.Note?` |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a P1** · Lat/Lng trên `IncidentDto` = **DEFER** optional (không block ship) |

---

## Live vs delta (audit 2026-08-29 / `task_578d3886`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/incident/incidents/{id}` | BE `IncidentsController.GetById` + Mobile.Bff proxy | **Giữ** · app path `incident/incidents/{id}` |
| `POST …/incident/incidents/{id}/close` | BE `Close` + proxy | **Giữ** · optional Note empty |
| `IncidentDto` Lat/Lng | **không** trên DTO / entity Incident (chỉ `HasGps`) | bind HasGps + Route/Km · demo coords offline · **cấm** invent · Signed Lat/Lng **DEFER** |
| Native `#sc-incident-detail` | **chưa** (list Chi tiết toast/stub) | **DELTA UI** dual detail kit · replace stub |
| `IncidentDetailController` / `api/v1/incident-detail` | **không** | **Cấm** tạo |
| Sibling estimate / gis-map / list | reuse / pending | nav reuse · toast P1 nếu chưa ship · **cấm** auto start |
| Demo parity dual | Design closed · Nguồn dual khi có data | fallback SSOT SC-2401 |

### Demo / fallback SSOT

| Field | Value |
|-------|-------|
| Code | SC-2401 |
| Badge | Nghiêm trọng · Đang mở |
| Loại | Nứt mặt đường |
| Vị trí | QL.1 · Km 1556+080 |
| Định vị (demo only) | 10.9620, 106.8518 · ±5 m |
| Nguồn (khi có) | Tuần đường PAT-…0014 |
| Toast close | Đã đóng sự cố |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-incident-detail` screen | topbar · hero code · badge · rows · 3 CTA · toast · empty | query Incident by id + Close write · nav local · demo fallback | `Incident` |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Vấn đề | — | local | `go('incident-list')` · iOS text+chevron · Android icon-only |
| title | Chi tiết | — | fixed | iOS «Chi tiết» · Android «Chi tiết sự cố» |
| codeLabel | Mã | — | fixed | caption 13 |
| codeValue | SC-* | `Code` | GET by id | hero ≥24/28 |
| badge | severity · status | `Severity` · `Status` | derived VN | `LinmBadge` |
| rowType | Loại | `Title` / `IncidentType` | GET | Title ưu tiên |
| rowLoc | Vị trí ghim tự động | `RouteName` · `KmStart` | GET | derived |
| rowGps | Định vị | `HasGps` (+ Route/Km) | GET | **không** Lat/Lng · demo offline only |
| rowSource | Nguồn | `DetectionId` / Description / AssetLabel | GET | empty omit · dual parity |
| btnAssign | Giao việc xử lý | — | local nav | `go('estimate')` · **không** POST assign |
| btnMap | Xem trên bản đồ | — | local nav | `go('gis-map')` |
| btnClose | Đóng sự cố | — | POST close | disable nếu closed |
| toastClose | Đã đóng sự cố | — | after 200 | `LinmToast` |
| empty404 | (không tìm thấy) | — | 404 | `LinmEmptyChrome` · back list |

**Cấm** invent DTO Lat/Lng / `incident-detail` aggregate.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| List card / `#i-list` / create toast | push `#sc-incident-detail` + `Id` | `incident-detail` (this) |
| Back | `go('incident-list')` | `incident-list` reuse |
| Giao việc xử lý | `go('estimate')` · toast **Giao việc xử lý** nếu sibling chưa ship | `estimate` reuse |
| Xem trên bản đồ | `go('gis-map')` pass id/route | `gis-map` shared |
| Đóng sự cố | POST close · toast · refresh | same slug (`GAP-MOB-ACT-07`) |
| Appear load | GET by id | same slug |
| 404 | EmptyChrome · back list | same slug |
| Network fail | demo SSOT · screen mở | same slug |

**Cấm** nav stub giả màn sibling · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog` / `window.alert`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-INC-DETAIL-PACK-01 | **closed** PO+Design · packKind=`screen` |
| GAP-MOB-INC-DETAIL-GPS-01 | **closed P1** · bind `HasGps` + Route/Km · demo coords offline only · **cấm** fake lat/lng live · **không** Signed Lat/Lng P1 (DTO/entity không có) · T-BE Lat/Lng **DEFER** optional |
| GAP-MOB-INC-DETAIL-SRC-01 | **closed** Design · dual Nguồn khi có data · empty omit |
| GAP-MOB-INC-DETAIL-NAV-01 / SCR-01 / DATA-01 / CLOSE-01 / ASSIGN-01 / MAP-01 | Dev ship push detail + GET/Close bind + offline demo + CTA |
| GAP-MOB-ACT-01/02 | **none** — 1 screen · không child form/sheet |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw NavBar/TabView |
| GAP-MOB-ACT-06 | Sibling giữ pending/reuse · **cấm** auto start |
| GAP-MOB-ACT-07 | GET / Close / chrome cùng slug · **không** enqueue |
| GAP-MOB-BFF-01 | **không** hàng mới — GetById + Close live đủ |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad |
| Step 4b / T-BE-* | **N/A P1** · Lat/Lng **DEFER** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/IncidentDetail/*` (hoặc `Incident/Detail/*`) | `presentation/feature/incidentdetail/*` |
| Use case | `FetchIncidentByIdUseCase` · `CloseIncidentUseCase` | same |
| Repo | `IncidentRepository` → `GET …/{id}` · `POST …/{id}/close` | same |
| State | detail · loading · toast · usingDemoFallback · closeInFlight · isClosed | same |
| DI | `AppContainer` wire VM | Hilt ViewModel |
| Shell | push từ list/create · `LinmTabBar` **giữ** tab `incident` · **không** segment | same |
| Offline | appear: try GET → fail → demo SC-2401 · 404 Empty · Close online-only | same |
| Demo SSOT | `IncidentDetailCopy.demo` (1 row) | same |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · hardcode production thay live khi GET OK.

---

## VERIFY GATE (roleOnly=`sa`)

| Check | Result |
|-------|--------|
| be/solution-discovery.md | **PASS** · solution_confirm approve · BFF map analy |
| Design + control-hint + real-data §B | **PASS** · read · **cấm** invent API / control |
| be_repo_confirm | **PASS** · `Linm.RMMS.WebService` · Incident · **cấm ERP.*** |
| Live verify GetById + Close + IncidentDto (no Lat/Lng) | **PASS** |
| Step 4b / migration | **N/A** — reuse GetById + Close |
| yarn build / e2e / start:std | **SKIP** (cấm role SA) |
| Write MFE / native | **SKIP** (cấm role SA) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `incident-detail` / **`screen`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET incident/incidents/{id}` + `POST …/{id}/close` · Step 4b **N/A** |
| Real-data | `_data-analy/incident-detail-real-data.md` §A+§B |
| GPS | HasGps + Route/Km · Lat/Lng **DEFER** · demo offline only |
| Tasks đề xuất | `T-IOS-INC-DETAIL` · `T-AND-INC-DETAIL` · `T-KIT` **n/a** · `T-BE` **n/a P1** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | list/create → push detail · assign/map = reuse nav · Close same slug |
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
| generatedAt | `2026-08-29T02:52:20.000Z` |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-control-hint-20260829 |
| realDataHash | sha256:incident-detail-mobile-real-data-20260829 |
| bffContentHash | sha256:incident-incidents-getbyid-close-proxy |
| taskId | `task_578d3886` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
