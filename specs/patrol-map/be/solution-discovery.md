# SA — Solution — patrol-map (mobile map · Bản đồ ca)

| Field | Value |
|-------|-------|
| feature | `patrol-map` |
| title | [Mobile] Bản đồ ca |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_d5dd35ef`) |
| changeScope | `new_page` |
| packKind | **`map`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **map** push `#sc-patrol-map` · **cấm** Kind A–G web / Grid / Report / hub AC |
| domain | **Patrol** sessions read · overlay demo OMS · **cấm** `PatrolMapController` / invent `api/v1/patrol-map` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-patrol-map` · `task_4ba10fbc` |
| prior · po | **confirmed** · `po/requirement.md` · `task_58c8b2b2` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-map-*.md` · contentHash `sha256:patrol-map-control-hint-20260820` · bffContentHash `sha256:patrol-map-mobile-bff-20260820` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_d5dd35ef` |
| confirmedBy | agent autoApprove · `task_d5dd35ef` |
| updatedAt | `2026-08-19T19:02:00.000Z` |
| thisAction | **Bản đồ ca** `#sc-patrol-map` only · GET sessions bind next copy · MapKit/OSM composition · basemap/legend filter · toast CTAs · **cấm** check-in sheet |

**Cấm:** invent `GET patrol-map` / `PatrolMapController` · clone sessions controller trên Mobile.Bff · app `:5101` trực tiếp · gộp check-in sheet / GPS form (`GAP-MOB-ACT-01/02`) · invent Kind E tracks/coverage/check-ins P1 · WebView HTML Leaflet-as-app · `LinmMap` kit · ERP.* · `mfeStdUrl` / `yarn start:std` · native alert · `UIAlert` / `AlertDialog` · watermark Gói · device label.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync (map = demo overlay fallback · **cấm** full-screen block).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `PatrolSessionsController` · **không** RMMS `patrol-map` controller |
| API downstream | `PatrolSessionsController.GetList` → `GET api/v1/patrol/sessions` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `PatrolRepositoryImpl` · Android `PatrolRepository` / `ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Active / next copy | Client filter status «Đang tuần» · bind `Route` → next card · empty/fail → `PatrolMapOverlay.nextDemoTitle` |
| Overlay geometry | **Client** demo OMS SSOT (`map-oms.js` / `PatrolMapOverlay`) · **cấm** tracks API P1 |
| Map host | iOS **MapKit** · Android **osmdroid** OSM/Esri/sat tiles · **cấm** WebView HTML demo |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | POST check-in · POST tracks · GET coverage · OSRM live network · check-in sheet · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-map` → **map** · 1 màn `#sc-patrol-map` push từ `patrol-home` |
| App prefix | `mobile-bff/api/v1` |
| App path | **chỉ** `GET patrol/sessions` (Bearer) P1 |
| Downstream | `PatrolSessionsController.GetList` · query `search` · `status` · `route` · `page` · `pageSize` |
| Detail drill | `GET patrol/sessions/{id}` — **P2** · **không** gọi P1 |
| Step 4b | **N/A** — endpoint live · không BE align delta · **cấm** `/new-endpoint` · Kind E **P2** |
| Rationale | Live Patrol list đủ bind Route/Status next card · geometry = demo OMS · **cấm** invent map API |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `PatrolMapController` local |
| BE HTTP | `PatrolSessionsController` | live `GET api/v1/patrol/sessions` |
| Response DTO | `ApiResponse<PatrolSessionPagedResult>` → `PatrolSessionDto[]` | app decode `items` / `data.items` |
| DTO fields | `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `CheckInCount` · `CoveragePercent` · `Status` · `StartedAt` | map next title P1 |
| HTTP app | reuse `FetchPatrolSessionsUseCase` + `PatrolRepository*` | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers interceptor |
| Mapper | `PatrolDtoMapper.active(from:)` | filter «Đang tuần» / `isActive` |
| Demo fallback | `PatrolMapOverlay` track/pins/nextTitle | GET fail/empty → demo · map **vẫn mở** |
| Kit chrome | `LinmTopBar` · `LinmPrimaryButton` · `LinmChip` · `LinmMapPinGlyph` `#i-mappin` · `LinmToast` · `LinmTabBar` | Design `kit_missing_confirm` **N/A** |
| Map composition | feature MapKit / osmdroid | **cấm** `LinmMap` kit · **cấm** WebView HTML |

---

## BFF / API contract (live audit 2026-08-19)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Active / next copy | `GET patrol/sessions` | proxy | `GET api/v1/patrol/sessions` | **PASS** |
| Detail drill | `GET patrol/sessions/{id}` | proxy | `GetById` | live · **no P1** |
| Overlay geometry | — | — | demo OMS waypoints | **N/A** API P1 |
| Check-in POST | `POST …/check-ins` | — | CTX Kind E | **không** gọi · toast |
| Tracks POST | `POST …/tracks` | — | CTX Kind E | **P2** · Step 4b **N/A** |
| Coverage GET | `GET …/coverage` | — | CTX Kind E | **P2** |

### Query params (list)

`search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50)

### Response shape

`ApiResponse<PatrolSessionPagedResult>` where `Items[]` contains `PatrolSessionDto`. App maps via existing `PatrolSessionItem` / `PatrolDtoMapper.active`.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.read` | GET list/detail | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `patrol.sessions.create/update` | Writer siblings | **không** gọi turn này |
| Kind E tracks/coverage/check-ins | P2 | **cấm invent** P1 |

**Cấm** thêm `[RequirePermission]` mới trên Mobile.Bff · **cấm** invent permission slug mới.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | GET list — **không** form date | `/review-timezone-implement` | no date field on map |
| XCO | **xco_na** | list current-user sessions | `/implement-view-cross-company` | BE company filter live |
| SHARE | **n/a** | **không** bảng RMMS mới | `/implement-shared-table` | read + client overlay |
| Offline | **demo overlay** · map **vẫn mở** | GET fail → demo SSOT | offline-sync | **cấm** full-screen block · **cấm** native alert |
| GPS | **Live loc on pin-here** | pin CTA | — | loc + zoom + pin `.here` · deny/timeout toast · **cấm** fake lat/lng · **cấm** sheet · **cấm** revert toast-only |
| Camera | **n/a** | — | — | sibling |
| Push | **n/a** | — | — | — |
| Store | **n/a delta** | no new privacy claim | — | **cấm** `localhost` / LAN IP in solution |
| Step 4b | **N/A** | không endpoint mới | — | reuse Patrol live |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-19T19:02:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** — read existing Patrol sessions · overlay client-only |
| Client store | basemap/legend isolate = local UI state · **không** persist map state BE |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-19 / `task_d5dd35ef`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/sessions` | BE `PatrolSessionsController` + Mobile.Bff proxy live | **Giữ** · app path `patrol/sessions` |
| `PatrolMapController` / `GET patrol-map` | **không** | **Cấm** tạo |
| Kind E tracks/coverage/check-ins | **không** trên BE P1 | **Cấm invent** · overlay demo |
| Native `#sc-patrol-map` | scaffold prior VERIFY PASS | **DELTA** bind `Route` active → `nextTitle` (hiện hard demo) · verify Design zones dual |
| MapKit / osmdroid host | scaffolded | **Giữ** · live tiles · **cấm** WebView HTML |
| Basemap 4 + legend 4 | scaffolded local state | **Giữ** · client filter overlay |
| Check-in / pin | check-in toast · pin loc live | Check-in = **toast only** · pin = loc + zoom + pin here · deny toast · **cấm** sheet · **cấm** fake lat/lng |
| Entry hub hero/row | `patrol-home` push wired | **reuse** · **cấm** reimplement hub |
| Tab 5 shell | dưới map | **Giữ** · **cấm** invent tab (`GAP-TAB-01`) |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-patrol-map` map | nav · map · next · pin · basemap · legend · tab | GET sessions + demo overlay + local UI | **không** RMMS form entity |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tuần đường | — | local pop | `LinmTopBar` leading → `patrol-home` |
| title | Ca đang chạy | — | static | `LinmTopBar` |
| navCheckin | Ghi điểm tuần | — | toast | **cấm** POST / sheet |
| mapHost | Bản đồ tuần tra OMS | — | MapKit / OSM | live tiles |
| nextEyebrow | Điểm tiếp theo · OSRM | — | static SSOT | label 13 |
| nextTitle | Km 1561+134 · Phước Dinh | `Route` (active) | GET → active · else demo | **DELTA** bind Route |
| nextCheckin | Ghi điểm tuần | — | toast | `LinmPrimaryButton` |
| pinHere | Ghim vị trí hiện tại | — | loc live · zoom · pin `.here` · toast · deny copy | `LinmPrimaryButton` + `#i-mappin` |
| baseOsm/Esri/Sat | Đường / Phố / Vệ tinh | — | local | `LinmChip` · Đường default |
| fitAll | Toàn tuyến | — | local fitToken | fit overlay bounds |
| lgAll/Track/Done/Next | legend | — | local isolate | filter client pins/polyline |
| overlay track/pins | — | — | `PatrolMapOverlay` | demo OMS · **không** tracks API |

**Cấm** invent DTO map aggregate / Kind E endpoints on this slug.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub hero **Tiếp tục bản đồ** / row **Bản đồ ca** | push `#sc-patrol-map` | `reuse` entry `patrol-home` |
| Back **Tuần đường** | pop hub | `reuse=patrol-home` |
| Appear | `GET patrol/sessions` · bind next · overlay demo | owner |
| Ghi điểm tuần (nav + card) | toast **Ghi điểm tuần** | **cấm** sheet · sibling pending |
| Ghim vị trí hiện tại | loc live + zoom + pin here · toast · deny `patrol.map.locDeny` | owner |
| Basemap chips | switch tile / style | owner · cùng slug |
| Toàn tuyến | fit overlay | owner · cùng slug |
| Legend chips | isolate filter | owner · cùng slug |
| Tab 5 | shell giữ · field selected | **cấm** invent |

**Cấm** nav stub sibling form · **cấm** start `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue thêm check-in (`GAP-MOB-ACT-07`) · **cấm** `openSheet('checkin')` · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-F-PAT-MAP-01 | Check-in **P1 toast only** · **cấm** sheet (`GAP-MOB-ACT-02`) |
| GAP-F-PAT-MAP-02 | Pin **loc live + zoom + pin here** · deny/timeout toast · **cấm** fake lat/lng · **cấm** revert toast-only (**GAP-MOB-EDIT-01**) |
| GAP-F-PAT-MAP-03 | Overlay geometry = **demo OMS** · Kind E tracks/coverage **P2** · **cấm invent** |
| GAP-F-PAT-MAP-04 | `nextTitle` = active `Route` else demo SSOT · GET fail → map **vẫn mở** |
| GAP-TAB-01 | Tab 5 shell **giữ** · **cấm** invent tab trên map |
| GAP-MOB-ACT-01/02 | **none** child form — 1 map surface |
| GAP-MOB-ACT-05 | Kit chrome reuse · map = feature composition · **cấm** raw TabView / M3 NavBar |
| GAP-MOB-ACT-06/07 | Sibling check-in **pending_confirm** · **cấm** start / enqueue thêm |
| GAP-MOB-ALIGN-01 | iOS + Android **cùng** copy zones |
| GAP-MOB-REAL-01 | Path = BFF table only · demo overlay SSOT |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/PatrolMap/*` | `presentation/feature/patrolmap/*` |
| Use case | `FetchPatrolSessionsUseCase` · `GetCurrentLocationUseCase` | same |
| Repo | `PatrolRepositoryImpl` → `GET patrol/sessions` | `PatrolRepository` + `ApiService` |
| Mapper | `PatrolDtoMapper.active` → bind `Route` | same |
| State | `PatrolMapUiState` · base · isolate · fitToken · nextTitle · here? | same |
| Overlay | `PatrolMapOverlay` demo track/pins | same coords SSOT |
| Shell | `AppRouter` push from field / hub | `MainTabScreen` / nav host |
| Map | MapKit `Map` + polyline/Annotation | osmdroid `MapView` + overlays |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent map API.

### Delta Dev (role sau — không implement turn SA)

1. Bind `nextTitle` từ `PatrolDtoMapper.active` → `Route` (non-empty) else `PatrolMapOverlay.nextDemoTitle`.
2. Verify dual Design zones / kit / toast labels / legend+basemap.
3. Pin-here **required** loc + zoom + pin here dual — **không** toast-only revert · **không** sheet.
4. Verify builds: xcodegen + xcodebuild **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-map` / **`map`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET patrol/sessions` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-PAT-MAP` · `T-AND-PAT-MAP` · `T-BE-*` **n/a** |
| Kit | reuse chrome · map composition · verify dual Design |
| Delta Dev | bind Route → nextTitle · toast CTAs · **cấm** sheet · dual parity |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | `2026-08-19T19:02:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-map-control-hint-20260820 |
| bffContentHash | sha256:patrol-map-mobile-bff-20260820 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
