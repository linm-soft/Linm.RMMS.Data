# SA — Solution — patrol-home (mobile hub · Tuần đường)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Mobile] Tuần đường |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_874f3421`) |
| changeScope | `new_page` |
| packKind | **`hub`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **hub** tab field `#sc-patrol-home` · **cấm** Kind A–G web / Lin* grid / Report |
| domain | **Patrol** sessions read-only display · **cấm** `PatrolHomeController` / hub aggregate API |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-patrol-home` · `task_e73de8f1` |
| prior · po | **confirmed** · `po/requirement.md` · `task_9415067f` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-home-*.md` · contentHash `sha256:7ad6e12c43d77ffc6133f5e3063b85200a6d18d6bd1f8ff91a265b989dcd3b9c` · bffContentHash `sha256:bcf39a561ac6a4ecf60df85f6c8526b926a1c33a3b3f34628aeaa9b9d6d36ead` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_874f3421` |
| confirmedBy | agent autoApprove · `task_874f3421` |
| updatedAt | `2026-08-19T14:30:00.000Z` |
| thisAction | **Hub Tuần đường** `#sc-patrol-home` only · GET sessions · client filter active · sibling toast · reuse `patrol-offline` |

**Cấm:** invent `GET patrol-home` / `PatrolHomeController` · clone `PatrolSessionsController` trên Mobile.Bff · app `:5101` trực tiếp · gộp sibling screens / check-in sheet / map live (`GAP-MOB-ACT-01/02`) · GET queue badge API · hardcode notify badge `3` · push `#sc-ops` trên pack này · ERP.* · `mfeStdUrl` / `yarn start:std` · native alert · `UIAlert` / `AlertDialog`.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync (hub = demo fallback · **cấm** block tab).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `PatrolSessionsController` · **không** RMMS `patrol-home` controller |
| API downstream | `PatrolSessionsController.GetList` → `GET api/v1/patrol/sessions` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `PatrolRepositoryImpl` · Android `ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Active session | Client-side filter status «Đang tuần» from list · fallback `PatrolHomeCopy.demoActive` |
| Offline badge | **Local** `FetchOfflineQueueCountUseCase` · sibling `patrol-offline` store · **cấm** GET queue API |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | POST check-in · GPS pin live · map · attendance segment implement · inbox GET · 6 sibling screens |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-home` → **hub** · 1 màn `#sc-patrol-home` |
| App prefix | `mobile-bff/api/v1` |
| App path | **chỉ** `GET patrol/sessions` (Bearer) |
| Downstream | `PatrolSessionsController.GetList` · query `search` · `status` · `route` · `page` · `pageSize` |
| Detail drill | `GET patrol/sessions/{id}` — **P2** · P1 toast row |
| Step 4b | **N/A** — endpoint live · không BE align delta · **cấm** `/new-endpoint` |
| Rationale | Live Patrol list đủ hero/KPI/today P1 · **cấm** invent hub aggregate |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `PatrolHomeController` local |
| BE HTTP | `PatrolSessionsController` | live `GET/POST/PUT/DELETE api/v1/patrol/sessions` |
| Response DTO | `ApiResponse<PatrolSessionPagedResult>` → `PatrolSessionDto[]` | app decode `items` or `data.items` |
| DTO fields | `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `CheckInCount` · `CoveragePercent` · `Status` · `StartedAt` | map hero/KPI/today |
| HTTP app | `PatrolRepositoryImpl` iOS · `PatrolRepository` Android | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers interceptor |
| Mapper | `PatrolDtoMapper.active(from:)` | filter «Đang tuần» / `isActive` |
| Demo fallback | `PatrolHomeCopy.demoActive` · `demoToday` | GET fail/empty → SSOT demo · hub **vẫn mở** |
| Kit | `LinmTopBar` · `LinmLargeTitle` · `LinmSegment` · `LinmHeroCard` · `LinmProgress` · `LinmPrimaryButton` · `LinmKpiStrip` · `LinmSectionLabel` · `LinmListRow` · `LinmNetSignalMark` · `LinmToast` · `LinmTabBar` | Design `kit_missing_confirm` **N/A** |
| Offline count | `FetchOfflineQueueCountUseCase` | local store · badge **ẩn khi 0** |

---

## BFF / API contract (live audit 2026-08-19)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| List hôm nay + active | `GET patrol/sessions` | proxy | `GET api/v1/patrol/sessions` | **PASS** |
| Detail drill | `GET patrol/sessions/{id}` | proxy | `GetById` | live · **no P1** |
| Nav sync / Lưu trữ | — | — | local nav · sibling `patrol-offline` | **N/A** |
| Offline badge | — | — | local queue count | **N/A** |
| Notify inbox | — | — | toast only · owner `ops` | **cấm** GET hub |
| Sibling actions | — | — | toast only | **pending_confirm** |

### Query params (list)

`search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50)

### Response shape

`ApiResponse<PatrolSessionPagedResult>` where `Items[]` contains `PatrolSessionDto`. App maps to `PatrolSessionItem` / hero/KPI fields.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.read` | GET list/detail | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `patrol.sessions.create/update` | Writer siblings check-in | **không** gọi turn này |
| `notification.inbox.read` | Ops inbox | **không** gọi turn này |

**Cấm** thêm `[RequirePermission]` mới trên Mobile.Bff · **cấm** invent permission slug mới.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | GET list — **không** form date input | `/review-timezone-implement` | `StartedAt` display only |
| XCO | **xco_na** | list current-user sessions | `/implement-view-cross-company` | BE company filter live |
| SHARE | **n/a** | **không** bảng RMMS mới | `/implement-shared-table` | read-only display |
| Offline | **demo fallback** · hub **vẫn mở** | GET fail → demo SSOT | offline-sync | **cấm** block tab · **cấm** native alert |
| GPS | **P2 defer** | pin = toast P1 | — | deny GPS P2 only |
| Camera | **n/a** | sibling rows toast | — | — |
| Push / inbox | **n/a** trên hub | badge **0 ẩn** | — | bell = toast **Thông báo** |
| Step 4b | **N/A** | không endpoint mới | — | reuse Patrol live |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-19T14:30:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** — read existing `PatrolSessions` |
| Client store | offline badge = local queue count only · **không** persist hub state |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-19)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/sessions` | BE `PatrolSessionsController` + BFF proxy live | **Giữ** · app path `patrol/sessions` |
| `PatrolHomeController` / `GET patrol-home` | **không** | **Cấm** tạo |
| Native `#sc-patrol-home` | scaffold shipped prior `task_26954659` | **DELTA UI** dual copy parity · toast siblings · badge 0 ẩn · **cấm** sheet check-in |
| `PatrolHomeViewModel` / `PatrolHomeViewModel` | GET sessions + demo fallback wired | **Giữ** · verify Design kit zones |
| Bell Android `go('ops')` | proto lệch | **Chốt toast Thông báo** dual · **cấm** push ops |
| Notify badge `3` / offline hardcode | HTML demo | Notify **0 ẩn** · offline = **local count** |
| Home entry quick/tile | wired switch tab field | **Giữ** · `reuse` entry |
| `#sc-patrol-offline` nav sync / Lưu trữ | shipped sibling | push **reuse** · **cấm** reimplement |
| Segment Chấm công | toast | sibling `attendance` **pending_confirm** |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-patrol-home` hub | nav · segment · hero · pin · KPI · today · quick | GET sessions + demo fallback + local offline count | **không** RMMS form entity |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| heroTitle | QL.1 · Km 1556+000 | `Route` | GET list → active | format `routeKm` |
| heroMeta code | PAT-* | `Code` | GET | |
| heroMeta user | user name | `UserName` | GET | fail → demo SSOT OK |
| heroProgress | 67% | `CoveragePercent` | GET active | `LinmProgress` |
| kpiChecked | Đã ghi điểm tuần | `CheckInCount` | GET active | demo 2 |
| kpiRemaining | Còn lại | computed | client | `3 - checkInCount` or demo 1 |
| kpiCoverage | Độ phủ | `CoveragePercent` | GET active | demo 67% |
| today[].code | PAT-* | `Code` | GET list | |
| today[].status | Đang tuần / Xong | `Status` | GET list | badge map |
| today[].sub | type · route · time | `PatrolType` · `Route` · `StartedAt` | GET list | |
| offlineBadge | N | — | local queue | `FetchOfflineQueueCountUseCase` · **ẩn 0** |
| signal | Tốt/TB/Yếu | — | OS path | `NetworkStatusRepository` · **cấm** «Có mạng» |

**Cấm** invent DTO hub aggregate / profile API on this slug.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Tab Tuần đường | show `#sc-patrol-home` | owner |
| Home quick Điểm tuần / tile Tuần đường | switch tab field | `reuse` entry from `home` |
| Nav sync / row Lưu trữ | push `#sc-patrol-offline` | `reuse=patrol-offline` |
| Bell | toast **Thông báo** · badge 0 ẩn | **cấm** push `ops` |
| Segment 1 Chấm công | toast **Chấm công** · reset idx 0 | `attendance` pending |
| Hero map / check-in / pin | toast nhãn | siblings pending |
| Today row tap | toast mã/row | drill P2 |
| Quick rows 5 | toast nhãn | siblings pending |
| Quick Lưu trữ | push `patrol-offline` | `reuse=patrol-offline` |

**Cấm** nav stub giả sibling form · **cấm** start `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** `openSheet('checkin')` · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-F-PAT-HOME-01 | Pin / check-in **P1 toast only** · **cấm** sheet · GPS live **P2** |
| GAP-F-PAT-HOME-02 | Bell **toast dual** · **cấm** Android push ops · notify badge **0 ẩn** |
| GAP-F-PAT-HOME-03 | Offline badge = **local count** · **ẩn khi 0** · **cấm** hardcode `3` |
| GAP-F-PAT-HOME-04 | Active session = client filter «Đang tuần» · empty/fail → demo SSOT |
| GAP-TAB-01 | Segment idx **0** Tuần đường · **1** Chấm công toast · **cấm** reorder |
| GAP-MOB-ACT-01/02 | **none** — 1 hub · **cấm** child form/sheet |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw TabView / M3 NavBar |
| GAP-MOB-ACT-06 | 6 sibling giữ `pending_confirm` |
| GAP-MOB-ACT-07 | **cấm** enqueue submit turn này |
| GAP-MOB-ACT-PAT-OFFLINE-01 | Nav sync wire **reuse** `patrol-offline` (shipped) |
| GAP-MOB-ALIGN-01 | iOS + Android **cùng** copy zones |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/PatrolHome/*` | `presentation/feature/patrolhome/*` |
| Use case | `FetchPatrolSessionsUseCase` · `FetchOfflineQueueCountUseCase` | same pattern |
| Repo | `PatrolRepositoryImpl` → `GET patrol/sessions` | `PatrolRepository` + `ApiService` |
| Mapper | `PatrolDtoMapper` | `PatrolDtoMapper` |
| State | `PatrolHomeUiState` · segment · signal · offlineCount | same |
| Shell | `AppRouter` field tab · Home wire `setOpenPatrolHome` | `MainTabScreen` · `HomeViewModel` |
| Demo | `PatrolHomeCopy.demoActive` · `demoToday` | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent hub API.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-home` / **`hub`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET patrol/sessions` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-PAT-HOME` · `T-AND-PAT-HOME` · `T-BE` **n/a** |
| Kit | reuse map hub · verify dual parity Design |
| Delta Dev | toast siblings · badge 0 · **cấm** sheet · dual copy §Design |
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
| generatedAt | 2026-08-19T14:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:7ad6e12c43d77ffc6133f5e3063b85200a6d18d6bd1f8ff91a265b989dcd3b9c |
| bffContentHash | sha256:bcf39a561ac6a4ecf60df85f6c8526b926a1c33a3b3f34628aeaa9b9d6d36ead |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
