# SA — Solution — supervise-detail (mobile · Chi tiết check-in)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| title | [Mobile] [Giám sát] -> Chi tiết check-in |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_01a1a301`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-SUP-DET-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** push `#sc-supervise-detail` `DES-MOB-SUP-DETAIL` · **cấm** sheet chrome / `#sheet-*` / Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| domain | **Patrol** · `AttendanceLogsController.GetById` · **cấm** invent `api/v1/supervise-detail` / `checkin-detail` / `SuperviseDetailController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-supervise-detail` · `ui/review/demo-parity.md` · `task_d9769d91` |
| prior · po | **confirmed** · `po/requirement.md` · `task_bc7c9e03` |
| prior · data_analy | **confirmed** · `_data-analy/supervise-detail-control-hint.md` · `supervise-detail-bff-endpoints.md` · `supervise-detail-action-tree.md` · `supervise-detail-real-data.md` · contentHash `sha256:supervise-detail-control-hint-20260831` · realDataHash `sha256:supervise-detail-real-data-20260831` · bffContentHash `sha256:patrol-attendance-logs-getbyid-passthrough` · actionTreeHash `sha256:supervise-detail-action-tree-20260831` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| version_mismatch_action | **recheck_new** — stamp SSOT workflow `2026.08.31.2` · rules `2026.08.31.2` · agent-sa-mobile `2026.08.20.03` (design/po stamped `2026.08.25.01` · contentHash khớp) |
| versionGate | `rechecked` |
| requestSource | run packet `task_01a1a301` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_01a1a301` |
| confirmedBy | agent autoApprove · `task_01a1a301` |
| updatedAt | `2026-08-31T02:02:30.000Z` |
| thisAction | **Chi tiết check-in** `#sc-supervise-detail` only · entry supervise list rich-card · GET by id · display hero/rows · CTA gis-map · **cấm** gộp list/filter/segment · `#sc-checkin-detail` / `#sheet-checkin` · attendance CRUD |

**Cấm:** invent `api/v1/supervise-detail` / `checkin-detail` / `SuperviseDetailController` · fork `AttendanceLogDto` mobile-only · invent OrgUnit API / field BE P1 · app `:5101` · DbContext trên Mobile.Bff · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · gộp sibling (`GAP-MOB-ACT-01/02`) · start `pending_confirm` / sibling (`GAP-MOB-ACT-06`) · enqueue GET / CTA map (`GAP-MOB-ACT-07`) · re-scan demo · Write MFE/native ở role SA · fake GET 200 · fake coords khi live OK · POST/PUT/DELETE attendance · system `UIAlert` / `AlertDialog` · Step 4b / migration / e2e ở role này.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (detail = **no write queue** · GET fail → demo SSOT · screen vẫn mở).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol · `AttendanceLogsController` · table `rmms_attendance_logs` |
| API downstream | `GET api/v1/patrol/attendance-logs/{id}` · XCO via `AllowedCompanyIds` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `patrol/*` |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | list/filter/segment · `#sc-checkin-detail` / `#sheet-checkin` · POST/PUT/DELETE attendance · embed map · OrgUnit invent |

### Route decision

| | Choice |
|--|--------|
| Slug | `supervise-detail` → **screen** · 1 màn `#sc-supervise-detail` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | **chỉ** `GET patrol/attendance-logs/{id}` (Bearer) |
| App path P1 write | **none** — readonly detail |
| Nav siblings | `go('supervise')` · `go('gis-map')` pass `Id`/`Lat`/`Lng` — **không** API trên slug này |
| Step 4b | **N/A** — reuse GetById live + XCO · **cấm** `/new-endpoint` |
| Rationale | Live Patrol GetById đủ hero+rows+CTA · BFF proxy · **cấm** invent supervise-detail path |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `SuperviseDetailController` local trên BFF |
| BE HTTP | `AttendanceLogsController` `[Route("api/v1/patrol/attendance-logs")]` | live GetById · 403/404 |
| Web BFF (ref) | `AttendanceLogsBffController` `web-bff/…` | mobile **không** gọi web-bff |
| Response DTO | `ApiResponse<AttendanceLogDto>` → `data` | **cấm** fork app-only DTO |
| DTO fields P1 | `Id` · `Code` · `UserName` · `Route` · `CheckInAt` · `KmPoint` · `Lat` · `Lng` · `InZone` · `Status` · `Note` | bind §B · `IsActive`/timestamps **không** bind P1 |
| HTTP app | extend `SuperviseRepository` (+ GetById) **hoặc** `SuperviseDetailRepository` · reuse list DTO shape | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Mapper | extend `SuperviseDtoMapper` / detail mapper | Status VN · org Note fallback · loc join · gps string |
| Demo fallback | `SuperviseDetailCopy.demo` (1 row SSOT) | GET fail → demo · screen **vẫn mở** · **cấm** fake 200 |
| Kit chrome | `LinmTopBar` · Text hero · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmEmptyChrome` | Design `kit_missing_confirm` **N/A** |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` | **cấm** invent / segment trên detail (`GAP-TAB-01`) |

---

## BFF / API contract (từ analy — **cấm** invent)

Nguồn: `_data-analy/supervise-detail-bff-endpoints.md` · `supervise-detail-real-data.md` §B · verify live `AttendanceLogsController.GetById` + `AttendanceLogDto` (2026-08-31).

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| Load chi tiết | GET | `patrol/attendance-logs/{id}` | `AttendanceLogsController.GetById` · XCO | **yes** · nav `Id` |
| Nav Bản đồ | — | — | local | `go('gis-map')` pass Id/Lat/Lng · toast P1 nếu sibling chưa ship |
| Nav back list | — | — | local | `go('supervise')` |
| Empty 404 | — | — | local | `LinmEmptyChrome` · back list |
| Toast err / offline | — | — | local | demo SSOT + `LinmToast` · **cấm** fake 200 |
| List GET | GET | `patrol/attendance-logs` | GetList | **OUT** — owner `supervise` |
| POST/PUT/DELETE | `patrol/attendance-logs*` | — | CRUD | **OUT** |
| Field check-in | POST | `patrol/sessions/{id}/check-ins` | — | **OUT** — `patrol-checkin` |

### Response shape (live)

`ApiResponse<AttendanceLogDto>` → `data` = `AttendanceLogDto`:

| DTO field | Detail zone |
|-----------|-------------|
| `Id` | route param / nav key |
| `Code` | codeValue |
| `UserName` | userHero |
| `Route` · `KmPoint` | rowLoc |
| `CheckInAt` | rowTime local |
| `Lat` · `Lng` | rowGps · CTA map pass |
| `InZone` | rowInZone |
| `Status` | rowStatus mapped VN |
| `Note` | rowOrg khi non-empty · else demo fallback |
| `IsActive` · timestamps | **không** bind P1 UI |

**Cấm** app fork DTO khác BFF table · **cấm** invent path `supervise-detail` / `checkin-detail`.

### Display rules (real-data §B)

| Line | Rule |
|------|------|
| hero | `UserName` raw |
| code | `Code` raw (CC-*) |
| org | `Note` nếu non-empty · else `Tổ tuần đường · VP-IV.1` (`GAP-MOB-SUP-DET-ORG-01`) |
| loc | `"{Route} Km {KmPoint}"` · thiếu Km → Route only · địa danh demo append OK khi offline |
| time | `CheckInAt` format `yyyy-MM-dd HH:mm:ss` local |
| status | map control-hint · default «Đã ghi điểm tuần» khi raw khớp demo |
| gps | `"{Lat}, {Lng}"` (DTO non-null decimal) · **không** fake khi live OK |
| inZone | `true` → «Trong vùng» · `false` → «Ngoài vùng» |
| map CTA | pass Id + Lat/Lng · **không** fake coords |

### Status VN map (demo SSOT)

| API `Status` (raw) | UI |
|--------------------|-----|
| `checked_in` / `ok` / chứa «ghi điểm» / empty+InZone | Đã ghi điểm tuần |
| `out_zone` / `warn` / InZone=false | Ngoài vùng · cần kiểm |
| other | `{Status raw}` |

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.attendance-logs.read` | GET by id | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `patrol.attendance-logs.create/update/delete` | Writer | **không** gọi turn này |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** DATE form · `CheckInAt` UTC store · display local | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_get_only** | **API** `GET …/attendance-logs/{id}` | `/implement-view-cross-company` | **Đã có** BE `GetByIdAsync` · IgnoreQueryFilters + `allowed_company_ids` · 403/404 · app toast + back · **cấm** bypass |
| SHARE | **tenant_keep** | đọc existing `rmms_attendance_logs` · **không** bảng mới | `/implement-shared-table` | migration **không** |
| Offline | **demo fallback** · screen **vẫn mở** | GET fail → demo SSOT + toast | offline-sync | **cấm** full-screen block · **cấm** fake 200 · **không** OfflineQueue (readonly) |
| GPS | **readonly display** | Lat/Lng · InZone từ DTO | — | **không** request CLLocation/Fused trên detail (`AC-D-02`) |
| Camera | **n/a** | thumb N/A P1 | — | **không** capture |
| Push | **n/a** | — | — | — |
| Store | **n/a** detail | không signup / xóa TK | `GAP-SA-STORE-01` | **cấm** localhost/LAN listing · family `1` **cấm** iPad |
| Step 4b | **N/A** | không endpoint mới | — | reuse GetById live |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-31T02:02:30.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** — read existing `AttendanceLogEntity` / `rmms_attendance_logs` |
| Client store | detail VM state · demo in-memory fallback only · **không** write queue |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-31 / `task_01a1a301`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/attendance-logs/{id}` | BE `AttendanceLogsController.GetById` + XCO + Mobile.Bff proxy | **Giữ** · app path `patrol/attendance-logs/{id}` |
| `AttendanceLogDto` | Code · UserName · Route · CheckInAt · KmPoint · Lat/Lng · InZone · Status · Note | bind §B · **cấm** invent field |
| `SuperviseDetailController` / `api/v1/supervise-detail` | **không** | **Cấm** tạo |
| Native `#sc-supervise-detail` | **chưa** (list card → toast `supervise.toast.detail`) | **DELTA UI** dual detail kit · push + GET bind |
| List `SuperviseRepository` | GET list live | **Giữ** · **extend** GetById **hoặc** detail repo · wire card → push + `Id` |
| Org empty `Note` | list mapper fallback | **Chốt** same fallback «Tổ tuần đường · VP-IV.1» trên detail |
| Sibling `gis-map` | đã enqueue `task_23d7eba0` / SA confirmed | nav reuse · toast P1 nếu chưa ship · **cấm** start |
| `#sc-checkin-detail` | owner `patrol-checkin` | **≠** slug · **cấm** reuse / gộp |
| Demo parity dual | Design closed `#sc-supervise-detail` | fallback SSOT CC-20260810-001 |

### Demo / fallback SSOT

| Field | Value |
|-------|-------|
| Title | Chi tiết check-in |
| UserName | Nguyễn Văn A |
| Code | CC-20260810-001 |
| Tổ | Tổ tuần đường · VP-IV.1 |
| Tuyến | QL.1 Km 1556+000 · Xuân Hải |
| Thời điểm | 2026-08-10 08:40:12 |
| Trạng thái | Đã ghi điểm tuần |
| Tọa độ | 11.5300, 109.0040 |
| Trong vùng | Trong vùng |
| CTA | Xem trên bản đồ |
| Back | Giám sát |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-supervise-detail` screen | topbar · hero · code · rows · CTA map · toast · empty | query AttendanceLog by id · nav local · demo fallback | `AttendanceLog` · FormMode **none** (readonly) |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Giám sát | — | local | `go('supervise')` · iOS text+chevron · Android icon-only |
| title | Chi tiết check-in | — | fixed | dual SSOT |
| userHero | (tên NV) | `UserName` | GET by id | ≥24/28 bold |
| codeLabel | Mã | — | fixed | caption 13 |
| codeValue | CC-* | `Code` | GET | ≥16 |
| rowOrg | Tổ / đơn vị | `Note` | GET / demo | empty → SSOT fallback |
| rowLoc | Tuyến · lý trình | `Route` · `KmPoint` | GET | derived join |
| rowTime | Thời điểm | `CheckInAt` | GET | local `yyyy-MM-dd HH:mm:ss` |
| rowStatus | Trạng thái | `Status` | GET + map | ok/warn tint |
| rowGps | Tọa độ | `Lat` · `Lng` | GET | `"{Lat}, {Lng}"` |
| rowInZone | Trong vùng | `InZone` | GET | Trong vùng / Ngoài vùng |
| btnMap | Xem trên bản đồ | — | local nav | `go('gis-map')` · pass Id/Lat/Lng |
| empty404 | (không tìm thấy) | — | 404 | `LinmEmptyChrome` · back list |
| toastErr | (lỗi mạng) | — | after GET fail | `LinmToast` · demo bind |

**Cấm** invent DTO OrgUnit / `supervise-detail` aggregate.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| List rich-card | push `#sc-supervise-detail` + `Id` · **cấm** toast-only khi pack ship · **cấm** `go('checkin-detail')` | `supervise-detail` (this) |
| Back | `go('supervise')` | `supervise` reuse |
| Xem trên bản đồ | `go('gis-map')` pass Id/Lat/Lng · toast nhãn CTA nếu sibling chưa ship | `gis-map` shared_action |
| Appear load | GET by id | same slug (`GAP-MOB-ACT-07`) |
| 404 | EmptyChrome · back list | same slug |
| 403 XCO | toast · back list | same slug |
| Network fail | demo SSOT · screen mở · toast | same slug |
| Thiếu Id nav | back list + toast · **cấm** blank invent | same slug |

**Cấm** nav stub giả sibling · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog` / `window.alert`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-SUP-DET-PACK-01 | **closed** PO+Design · packKind=`screen` |
| GAP-MOB-SUP-DET-ORG-01 | **closed** · Note / demo «Tổ tuần đường · VP-IV.1» · **cấm** invent OrgUnit API |
| GAP-MOB-SUP-DET-DEMO-01 | Design closed dual · Dev rewire card `go('supervise-detail')` · **cấm** CI-DETAIL |
| GAP-MOB-SUP-DET-NAV-01 / SCR-01 / DATA-01 / MAP-01 / TITLE-01 | Dev ship push detail + GET bind + offline demo + CTA map |
| GAP-MOB-ACT-01/02 | **none** — 1 screen · không child form/sheet · **≠** patrol-checkin |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw NavBar/TabView |
| GAP-MOB-ACT-06 | Sibling `gis-map` / `patrol-checkin` / `patrol-map` · **cấm** auto start |
| GAP-MOB-ACT-07 | GET / chrome / CTA map cùng slug · **không** enqueue |
| GAP-MOB-BFF-01 | **không** hàng mới — GetById live đủ |
| GAP-MOB-REAL-01/02 | §B khớp BFF · **cấm** ship hardcode khi BFF live |
| GAP-TAB-01 | `tabs: none` surface · shell Tab Trang chủ giữ |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/SuperviseDetail/*` (hoặc `Supervise/Detail/*`) | `presentation/feature/supervisedetail/*` |
| Use case | `FetchAttendanceLogByIdUseCase` (hoặc extend supervise) | same |
| Repo | `SuperviseRepository` + `getById` **hoặc** `SuperviseDetailRepository` → `GET …/{id}` | same |
| Mapper | extend `SuperviseDtoMapper` / detail mapper · Status VN · org/loc/gps | same |
| State | detail · loading · toast · usingDemoFallback · notFound | same |
| DI | `AppContainer` wire VM | Hilt ViewModel |
| Shell | push từ list · `LinmTabBar` **giữ** tab home · **không** segment | same |
| Entry wire | list card toast → **push** + `Id` · supersede toast-only | same |
| Offline | appear: try GET → fail → demo SSOT · 404 Empty · 403 toast+back | same |
| Demo SSOT | `SuperviseDetailCopy.demo` (1 row) | same |
| DTO delta | decode thêm `Code` · `Lat` · `Lng` · `InZone` trên item (list DTO hiện thiếu) | same |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · hardcode production thay live khi GET OK.

---

## VERIFY GATE (roleOnly=`sa`)

| Check | Result |
|-------|--------|
| be/solution-discovery.md | **PASS** · solution_confirm approve · BFF map analy |
| Design + control-hint + real-data §B | **PASS** · read · **cấm** invent API / control |
| be_repo_confirm | **PASS** · `Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| Live verify GetById + AttendanceLogDto + XCO | **PASS** |
| Step 4b / migration | **N/A** — reuse GetById |
| yarn build / e2e / start:std | **SKIP** (cấm role SA) |
| Write MFE / native | **SKIP** (cấm role SA) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `supervise-detail` / **`screen`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET patrol/attendance-logs/{id}` · XCO giữ · Step 4b **N/A** |
| Real-data | `_data-analy/supervise-detail-real-data.md` §A+§B |
| GPS | readonly Lat/Lng/InZone · **không** request device location |
| Tasks đề xuất | `T-IOS-SUP-DETAIL` · `T-AND-SUP-DETAIL` · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | list card → push detail · map = reuse nav · back list |
| Delta Dev | ship `#sc-supervise-detail` dual · wire list toast → push · decode Code/Lat/Lng/InZone · org fallback · Status VN map |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl · **cấm** role SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T02:02:30.000Z` |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-control-hint-20260831 |
| realDataHash | sha256:supervise-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-getbyid-passthrough |
| actionTreeHash | sha256:supervise-detail-action-tree-20260831 |
| taskId | `task_01a1a301` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
