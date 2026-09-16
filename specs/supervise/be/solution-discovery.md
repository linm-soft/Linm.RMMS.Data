# SA — Solution — supervise (mobile list · Giám sát · edit filter/map)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Mobile] Giám sát — filter live + map sibling |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_2ac8625f`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **list** `#sc-supervise` · **cấm** Kind A–G web / Lin* grid / Report |
| domain | **Patrol** attendance-logs read · **cấm** `SuperviseController` / invent `api/v1/supervise` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `handoff/design-compact.md` · `task_69283465` |
| prior · po | **confirmed** · `handoff/po-compact.md` · `task_d7e615af` |
| prior · data_analy | **confirmed** · `handoff/data_analy-compact.md` · `_data-analy/supervise-*` · contentHash `sha256:supervise-mobile-filter-live-20260912` · bffContentHash `sha256:supervise-mobile-bff-filter-20260912` |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** `yarn start:std` / e2e this role · **cấm** `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_2ac8625f` |
| confirmedBy | agent autoApprove · `task_2ac8625f` |
| updatedAt | `2026-09-12T10:00:00.000Z` |
| thisAction | **§ Delta** live filter sheet (`route` GET + date client) · push `#sc-patrol-map` · keep detail · EmptyChrome live · **cấm** toast fake filter/map |

**Cấm:** invent `GET supervise` / `SuperviseController` · clone controller trên Mobile.Bff · app `:5101` trực tiếp · embed map · invent `fromDate` BFF P1 · ERP.* · `mfeStdUrl` · native alert · auto-start sibling pipeline.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync.

---

## § Delta Current vs New (edit_page)

| Surface | Current (prior SA `task_761211bf`) | New (this pack) |
|---------|-----------------------------------|-----------------|
| Filter Lọc | toast only · **không** query | owner sheet Tuyến+Ngày · Apply → GET ±`route` · date client on `CheckInAt` |
| Segment Bản đồ | toast · reset 0 | **push** sibling `#sc-patrol-map` · reset seg 0 · **cấm** toast · **cấm** embed |
| Card tap | toast | **keep** push supervise-detail (prior wire) |
| Empty | demo fallback open | EmptyChrome live 0/fail · toast fail only · **cấm** native alert |
| BE fromDate/toDate | absent | **P2** GAP-MOB-SUP-04 · **không** Step 4b this turn |
| Endpoint | GET attendance-logs page/pageSize | **same** + optional `route` · **cấm** invent path |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `AttendanceLogsController` · **không** RMMS supervise controller |
| API downstream | `GetList` → `GET api/v1/patrol/attendance-logs` |
| BFF mobile | `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS/Android `SuperviseRepositoryImpl` · base `{BffBase}/mobile-bff/api/v1` |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Sibling | `patrol-map` nav wire only · `supervise-detail` keep · **cấm** auto-start pipelines |

### Route decision

| | Choice |
|--|--------|
| Slug | `supervise` → **list** `#sc-supervise` |
| App prefix | `mobile-bff/api/v1` |
| App path | `GET patrol/attendance-logs` · query `page` · `pageSize` · optional **`route`** |
| Date filter | **client** local day on `CheckInAt` · **không** BE fromDate P1 |
| Detail | `GET patrol/attendance-logs/{id}` — keep owner detail slug |
| Step 4b | **N/A** — reuse live GET · **cấm** `/new-endpoint` |
| Rationale | BFF `route` live · date P2 · **cấm** invent supervise aggregate |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `SuperviseController` local |
| BE HTTP | `AttendanceLogsController` | live GET list + `route` |
| Response DTO | `AttendanceLogPagedResult` → `AttendanceLogDto[]` | decode `data.items` |
| DTO fields | `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note` | card + client date |
| HTTP app | `SuperviseRepositoryImpl` dual | **cấm** URLSession/OkHttp in View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Mapper | `SuperviseDtoMapper` | status · time local · org Note fallback |
| Empty / fail | EmptyChrome | GET fail/0 → empty + toast · list opens · **cấm** full-screen block pretending success |
| Kit | TopBar · Segment · Card · Sheet · Toast · EmptyChrome | **cấm** invent RichCheckinCard type |

---

## BFF / API contract

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| List check-in | `GET patrol/attendance-logs` | proxy | `GetList` | **PASS** |
| Filter tuyến | same + `?route=` | proxy | `route` exact | **PASS** |
| Filter ngày | same GET → client | — | `CheckInAt` day | client P1 |
| Detail drill | `GET …/{id}` | proxy | `GetById` | keep |
| Map segment | — | — | push `patrol-map` | **N/A** API |

### API-01: GET /mobile-bff/api/v1/patrol/attendance-logs

| | |
|--|--|
| Purpose | List check-in cho Giám sát · optional filter tuyến |
| Permission | `patrol.attendance-logs.read` (reuse · **cấm** invent) |
| Tenant | X-Company-Id · companyCode interceptor |
| Request | query: `page` (int) · `pageSize` (int, default 50) · `route` (string, omit if empty) · optional passthrough `search`/`status`/`onlyOutZone` unused UI |
| Response | `ApiResponse<AttendanceLogPagedResult>` · `items[]` = `AttendanceLogDto` |
| Errors | 401 · 403 · network → EmptyChrome + toast · **cấm** alert |
| Form surfaces | list + owner filter sheet Apply/Clear |
| Field map | see § Form data |
| Context | `docs/context/features/supervise.md` |
| Demo | `#sc-supervise` · zones SUP-FILTER · SUP-LIST · SUP-CARD |
| data-import | **n/a** — transaction list live |
| Migration | **none** |
| Sample | `route=QL.1` → items matching Route |

### Query params (list)

| Param | P1 | Note |
|-------|----|------|
| `route` | **yes** | Trim · omit empty |
| `page` / `pageSize` | yes | AllowedPageSizes BE |
| `search` / `status` / `onlyOutZone` | unused UI | passthrough OK |
| `fromDate` / `toDate` | **no** | GAP-MOB-SUP-04 P2 |

### Permissions

| Permission | Scope | Pack |
|------------|-------|------|
| `patrol.attendance-logs.read` | GET list/detail | **reuse** |
| create/update/delete | writers | **không** gọi |

**Cấm** thêm `[RequirePermission]` mới trên Mobile.Bff · **cấm** invent permission slug.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_client_filter** | filterDate client day on `CheckInAt` | store UTC · display local · **không** BE date param P1 |
| XCO | **xco_na** | list current-company | BE company filter live |
| SHARE | **n/a** | không bảng RMMS mới | read `rmms_attendance_logs` |
| Offline | **empty + toast** | GET fail → EmptyChrome · **cấm** block | demo SSOT optional debt — **không** toast fake “đã lọc” |
| GPS | **n/a** list | map = sibling | **không** GPS on list |
| Camera | **n/a** | thumb placeholder | |
| Push | **n/a** | | |
| Store | **n/a** list | GAP-SA-STORE-01 · PrivacyInfo P2 review | **cấm** localhost claim |
| Step 4b | **N/A** | không endpoint mới | fromDate = P2 only |

AskQuestion (autoApprove=ON): `sa_tz_gate=tz_client_filter` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-09-12T10:00:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables | **n/a** — read existing |
| Client store | filter draft in sheet state only · **không** persist inventory blob |
| Migration | **không** Schema_* · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-supervise` list | nav · segment · cards · empty | GET ± route + client date | FormMode **none** CRUD |
| owner filter sheet | filterRoute · filterDate · Apply · Clear | query `route` + client day | — |

### FormMode ↔ API

| FormMode / surface | API | Notes |
|--------------------|-----|-------|
| List load / pull | API-01 GET | page/pageSize |
| Filter Apply | API-01 GET ±`route` | then client filter date |
| Filter Clear | API-01 GET no route | clear date · reload |
| Detail push | GET `…/{id}` | sibling/keep |
| Map segment | — | nav push `#sc-patrol-map` |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| btn-sup-filter | Lọc | — | open sheet | Must live |
| filterRoute | Tuyến | `Route` | query `route` | TextField |
| filterDate | Ngày | `CheckInAt` | client day | DatePicker · **không** BE P1 |
| filterApply | Áp dụng | — | reload API-01 | Primary |
| filterClear | Xóa lọc | — | clear+reload | Ghost |
| segList | Danh sách check in | — | idx 0 | owner |
| segMap | Bản đồ | — | push patrol-map · reset 0 | **cấm** toast |
| cardTitle | … | `UserName` | GET | |
| cardOrg | … | `Note` | GET / fallback SSOT | GAP-MOB-SUP-03 |
| cardLoc | … | `Route` + `KmPoint` | GET | |
| cardTime | … | `CheckInAt` | GET local | |
| cardStatus | … | `Status` | GET | ok/warn map |
| empty | EmptyChrome | — | 0 / fail | live-only |

**Cấm** invent DTO supervise / org-unit / fromDate BFF P1.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner |
|---------|-------------|-------|
| Home / patrol-home → Giám sát | push `#sc-supervise` | reuse entry |
| Nav back | pop | owner |
| Lọc | open sheet · Apply live | owner |
| Segment 0 | list | owner |
| Segment 1 Bản đồ | push `#sc-patrol-map` · reset 0 | sibling wire · **cấm** auto-start feature pipeline |
| Tap card | push supervise-detail | keep |

**Cấm** toast fake filter/map · **cấm** UIAlert / AlertDialog · **cấm** embed map.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-SUP-01 | Filter **live sheet** · Apply GET ±`route` · **cấm** toast fake |
| GAP-MOB-SUP-02 | Map **push** `patrol-map` · reset seg 0 · **cấm** toast · **cấm** embed |
| GAP-MOB-SUP-03 | Org = `Note` / fallback «Tổ tuần đường · VP-IV.1» · **cấm** invent org API |
| GAP-MOB-SUP-04 | BE fromDate/toDate = **P2** · client date P1 · **không** Step 4b now |
| GAP-TAB-01 | Segment 0 list · 1 map push · **cấm** reorder |
| GAP-MOB-ACT-01/02 | list owner + sheet · detail/map = sibling slugs · **cấm** gộp solution |
| GAP-MOB-ACT-06 | sibling assign nav only · **cấm** auto-start |
| GAP-SA-STORE-01 | list · PrivacyInfo P2 · **cấm** localhost |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/Supervise/*` | `presentation/feature/supervise/*` |
| Use case | `FetchSuperviseCheckinsUseCase` (± route) | same |
| Repo | `SuperviseRepositoryImpl` GET ±`route` | + `ApiService` |
| Mapper | `SuperviseDtoMapper` + client date filter | same |
| State | segment · filter draft · items · empty · toast | same |
| Shell | router push map/detail | navigate same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · invent supervise API · mfeStdUrl.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `supervise` / **`list`** |
| solution_confirm | **approve** |
| changeScope | `edit_page` |
| BFF | API-01 GET ±`route` · Step 4b **N/A** · fromDate P2 |
| FormMode↔API | List/Apply/Clear → API-01 · Map=nav · Detail=keep GET by id |
| TZ/XCO/SHARE | tz_client_filter · xco_na · share_na |
| entity/migration | **none** |
| Tasks đề xuất | `T-IOS-SUP-FILTER` · `T-AND-SUP-FILTER` · `T-IOS-SUP-MAP-NAV` · `T-AND-SUP-MAP-NAV` · `T-UI-FILTER-01` · `T-BE` **n/a** |
| Sibling | wire `patrol-map` · keep detail · **cấm** auto-start |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e this role |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-12T10:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-mobile-filter-live-20260912 |
| bffContentHash | sha256:supervise-mobile-bff-filter-20260912 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
