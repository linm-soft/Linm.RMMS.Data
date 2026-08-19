# SA — Solution — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Mobile] Giám sát |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_761211bf`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-supervise` · **cấm** Kind A–G web / Lin* grid / Report |
| domain | **Patrol** attendance-logs read · **cấm** `SuperviseController` / invent `api/v1/supervise` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-supervise` · `task_b163f3ae` |
| prior · po | **confirmed** · `po/requirement.md` · `task_bdca2ab2` |
| prior · data_analy | **confirmed** · `_data-analy/supervise-control-hint.md` · `supervise-bff-endpoints.md` · `supervise-action-tree.md` · contentHash `sha256:supervise-mobile-list-20260819` · bffContentHash `sha256:supervise-mobile-bff-20260819` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_761211bf` |
| confirmedBy | agent autoApprove · `task_761211bf` |
| updatedAt | `2026-08-19T15:24:26.000Z` |
| thisAction | **Giám sát list** `#sc-supervise` only · GET attendance-logs · toast filter/map/card · **cấm** gộp sibling map / checkin detail |

**Cấm:** invent `GET supervise` / `SuperviseController` · clone `AttendanceLogsController` trên Mobile.Bff · app `:5101` trực tiếp · gộp sibling screens (`GAP-MOB-ACT-01/02`) · filter sheet / map live / detail drill P1 · ERP.* · `mfeStdUrl` / `yarn start:std` · native alert · `UIAlert` / `AlertDialog` · start sibling `pending_confirm`.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync (list = demo fallback · **cấm** block screen).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `AttendanceLogsController` · **không** RMMS `supervise` controller |
| API downstream | `AttendanceLogsController.GetList` → `GET api/v1/patrol/attendance-logs` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `SuperviseRepositoryImpl` · Android `SuperviseRepositoryImpl` + `ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Org unit | Live `Note` nếu có · else demo fallback «Tổ tuần đường · VP-IV.1» (`GAP-MOB-SUP-03`) · **cấm** invent org-unit API |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | map live · checkin detail · filter sheet / API filter UI · camera media · GPS trên list |

### Route decision

| | Choice |
|--|--------|
| Slug | `supervise` → **list** · 1 màn `#sc-supervise` |
| App prefix | `mobile-bff/api/v1` |
| App path | **chỉ** `GET patrol/attendance-logs` (Bearer) · query `page` · `pageSize` P1 |
| Downstream | `AttendanceLogsController.GetList` · query `search` · `status` · `route` · `onlyOutZone` · `page` · `pageSize` |
| Detail drill | `GET patrol/attendance-logs/{id}` — **P2** · P1 toast card |
| Step 4b | **N/A** — endpoint live · không BE align delta · **cấm** `/new-endpoint` |
| Rationale | Live Patrol attendance-logs đủ list rich-card P1 · **cấm** invent supervise aggregate |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `SuperviseController` local |
| BE HTTP | `AttendanceLogsController` | live `GET/POST/PUT/DELETE api/v1/patrol/attendance-logs` |
| Web BFF (ref) | `AttendanceLogsBffController` `web-bff/…` | mobile **không** gọi web-bff |
| Response DTO | `ApiResponse<AttendanceLogPagedResult>` → `AttendanceLogDto[]` | app decode `data.items` |
| DTO fields | `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note` | map card zones |
| HTTP app | `SuperviseRepositoryImpl` iOS · Android | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers interceptor |
| Mapper | `SuperviseDtoMapper.checkin(from:)` | status ok/warn · time local · org from Note |
| Demo fallback | `SuperviseCopy.demoItems` (2 rows SSOT) | GET fail/empty → demo · list **vẫn mở** |
| Kit | `LinmTopBar` · `LinmSegment` · `LinmCard` feature composition · `LinmToast` | Design `kit_missing_confirm` **N/A** · **cấm** invent `LinmRichCheckinCard` |

---

## BFF / API contract (live audit 2026-08-19)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| List check-in | `GET patrol/attendance-logs` | proxy | `GET api/v1/patrol/attendance-logs` | **PASS** |
| Detail drill | `GET patrol/attendance-logs/{id}` | proxy | `GetById` | live · **no P1** |
| Filter nav | — | — | toast only | **N/A** API P1 |
| Map segment | — | — | toast only · sibling `patrol-map` | **N/A** |
| Card tap | — | — | toast · sibling `checkin-detail` | **N/A** |

### Query params (list)

`search` · `status` · `route` · `onlyOutZone` · `page` (default 1) · `pageSize` (default 50)

**P1 app gửi:** `page` · `pageSize` only. Filter UI toast — **không** bind query filter P1 (`GAP-MOB-SUP-01`).

### Response shape

`ApiResponse<AttendanceLogPagedResult>` where `Items[]` = `AttendanceLogDto`. App maps to `SuperviseCheckinItem`.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.attendance-logs.read` | GET list/detail | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `patrol.attendance-logs.create/update/delete` | Writer siblings | **không** gọi turn này |

**Cấm** thêm `[RequirePermission]` mới trên Mobile.Bff · **cấm** invent permission slug mới.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | GET list — **không** form date input | `/review-timezone-implement` | `CheckInAt` UTC store · display local |
| XCO | **xco_na** | list current-company logs | `/implement-view-cross-company` | BE company filter live · GetById XCO P2 |
| SHARE | **n/a** | **không** bảng RMMS mới | `/implement-shared-table` | read existing `rmms_attendance_logs` |
| Offline | **demo fallback** · list **vẫn mở** | GET fail → demo SSOT | offline-sync | **cấm** full-screen block · **cấm** native alert |
| GPS | **n/a** | list không GPS | — | map = sibling toast |
| Camera | **n/a** | thumb gradient P1 | — | camera P2 |
| Push | **n/a** | không signup / push URL | — | |
| Store | **n/a** list | không signup / xóa TK | `GAP-SA-STORE-01` | **cấm** localhost trong solution claim |
| Step 4b | **N/A** | không endpoint mới | — | reuse Patrol live |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-19T15:24:26.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** — read existing `AttendanceLogEntity` / `rmms_attendance_logs` |
| Client store | **không** persist list state · demo in-memory only |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-19)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/attendance-logs` | BE `AttendanceLogsController` + Mobile.Bff proxy live | **Giữ** · app path `patrol/attendance-logs` |
| `SuperviseController` / `GET supervise` | **không** | **Cấm** tạo |
| Native `#sc-supervise` | scaffold prior (`SuperviseView` / `SuperviseScreen` + GET + demo) | **DELTA UI** dual copy · kit zones · toast siblings · org fallback SSOT |
| `SuperviseRepository` / UseCase | GET + demo fallback wired | **Giữ** · verify Design kit + mapper delta |
| Org empty `Note` | mapper fallback «Tổ tuần đường» | **Chốt** fallback «Tổ tuần đường · VP-IV.1» dual (`GAP-MOB-SUP-03`) |
| Android `#i-building` | `Icons.Default.Business` | **DELTA** outline building motif · **cấm** Filled Business (`GAP-MOB-ICON-02`) |
| Home tile / patrol-home quick | wired push | **Giữ** · `reuse` entry · **cấm** reimplement hubs |
| Segment Bản đồ / tap card / Lọc | toast wired prior | **Giữ** · **cấm** push sibling |
| `#sc-patrol-map` / `#sc-checkin-detail` | sibling `pending_confirm` | **cấm** start (`GAP-MOB-ACT-06`) |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-supervise` list | nav · segment · rich-cards | GET attendance-logs + demo fallback | **không** RMMS form entity · FormMode **none** |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Trang Chủ | — | local pop | `LinmTopBar` |
| navTitle | Giám sát tuần đường | — | fixed | |
| navFilter | Lọc | — | toast | **không** API P1 |
| segList | Danh sách check in | — | idx 0 | owner |
| segMap | Bản đồ | — | toast · reset 0 | sibling |
| cardTitle | Nguyễn Văn A | `UserName` | GET | required map |
| cardOrg | Tổ tuần đường · VP-IV.1 | `Note` | GET / demo | empty Note → SSOT fallback |
| cardLoc | QL.1 Km 1556+000 · Xuân Hải | `Route` + `KmPoint` | GET | demo may append place |
| cardTime | 2026-08-10 08:40:12 | `CheckInAt` | GET | local display |
| cardStatus | Trạng thái: Đã ghi điểm tuần | `Status` | GET | map «Đúng tuyến»→«Đã ghi điểm tuần» · ok/warn |
| cardThumb | (placeholder) | — | gradient | **cấm** camera P1 |

**Cấm** invent DTO supervise / org-unit API on this slug.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Home tile Giám sát | push `#sc-supervise` | `reuse` entry `home` |
| patrol-home quick Giám sát | push `#sc-supervise` | `reuse` entry `patrol-home` |
| Nav back Trang Chủ | pop home stack | owner |
| Lọc | toast **Lọc tuyến · ngày** | owner · **cấm** sheet |
| Segment 0 | list owner | owner |
| Segment 1 Bản đồ | toast **Bản đồ** · reset idx 0 | `patrol-map` pending |
| Tap card | toast **Chi tiết check-in** | `checkin-detail` pending |

**Cấm** nav stub giả sibling form · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-SUP-01 | Filter **P1 toast only** · **cấm** sheet / API filter UI |
| GAP-MOB-SUP-02 | Map segment **P1 toast** · reset idx 0 · sibling `patrol-map` `pending_confirm` |
| GAP-MOB-SUP-03 | Org = live `Note` / demo fallback «Tổ tuần đường · VP-IV.1» · **cấm** invent org API · Dev align mapper empty-Note |
| GAP-TAB-01 | Segment idx **0** list · **1** map toast · **cấm** reorder |
| GAP-MOB-ACT-01/02 | **none** — 1 list · **cấm** child form/sheet |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw List / M3 NavBar / TabView |
| GAP-MOB-ACT-06 | 2 sibling giữ `pending_confirm` |
| GAP-MOB-ACT-07 | **cấm** enqueue submit turn này |
| GAP-MOB-ICON-02 | Dual outline building / mappin · **cấm** Android `Icons.Filled.Business` / Place lệch |
| GAP-MOB-ALIGN-01 | iOS + Android **cùng** copy zones |
| GAP-SA-STORE-01 | list · **n/a** signup · **cấm** localhost claim |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/Supervise/*` | `presentation/feature/supervise/*` |
| Use case | `FetchSuperviseCheckinsUseCase` | same |
| Repo | `SuperviseRepositoryImpl` → `GET patrol/attendance-logs` | `SuperviseRepositoryImpl` + `ApiService` |
| Mapper | `SuperviseDtoMapper` | `SuperviseDtoMapper` |
| State | `SuperviseUiState` · segment · items · toast | same |
| Shell | `AppRouter` push · Home / PatrolHome wire | `MainTabScreen` navigate `supervise` |
| Demo | `SuperviseCopy.demoItems` | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent supervise API.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `supervise` / **`list`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET patrol/attendance-logs` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-SUPERVISE` · `T-AND-SUPERVISE` · `T-BE` **n/a** |
| Kit | reuse map list · verify dual parity Design |
| Delta Dev | org fallback SSOT · Android building glyph · dual copy §Design · **cấm** push sibling |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.22 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T15:24:26.000Z |
| versionGate | rechecked |
| contentHash | sha256:supervise-mobile-list-20260819 |
| bffContentHash | sha256:supervise-mobile-bff-20260819 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.22 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
