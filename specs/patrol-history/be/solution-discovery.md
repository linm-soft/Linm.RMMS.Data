# SA — Solution — patrol-history (mobile list · Lịch sử ca)

| Field | Value |
|-------|-------|
| feature | `patrol-history` |
| title | [SA] [Mobile] [Tuần đường] -> Lịch sử phiên |
| this role | `sa` · `/agent-sa-mobile` |
| status | **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` · `task_46949663`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-patrol-history` `DES-MOB-PAT-LIST` · **cấm** Kind A–G web / Lin* grid / Report |
| domain | **Patrol** sessions read-only list · **cấm** `PatrolHistoryController` / invent `api/v1/patrol-history` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · `be_repo_confirm` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · `ios_repo_confirm` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · `android_repo_confirm` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-patrol-history` · `task_c3eae165` |
| prior · po | **confirmed** · `po/requirement.md` · `task_580f12e0` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-history-control-hint.md` · `patrol-history-bff-endpoints.md` · `patrol-history-action-tree.md` · `patrol-history-real-data.md` · contentHash `sha256:patrol-history-control-hint-20260820` · bffContentHash `sha256:patrol-history-mobile-bff-20260820` · cluster `specs/patrol-history/specs/_data-analy/` **N/A** |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_46949663` |
| confirmedBy | agent autoApprove · `task_46949663` |
| updatedAt | `2026-08-20T04:40:00.000Z` |
| thisAction | **Lịch sử ca** `#sc-patrol-history` only · GET sessions · client search · toast Lọc / Chi tiết phiên · **cấm** gộp `#sc-patrol-detail` |

**Cấm:** invent `GET patrol-history` / `PatrolHistoryController` · clone `PatrolSessionsController` trên Mobile.Bff · app `:5101` trực tiếp · filter sheet / GET `{id}` P1 (`GAP-MOB-ACT-01/02`) · enqueue search/filter sibling (`GAP-MOB-ACT-07`) · start `patrol-detail` `pending_confirm` (`GAP-MOB-ACT-06`) · ERP.* · `mfeStdUrl` / `yarn start:std` · native alert · `UIAlert` / `AlertDialog` · `localhost` / IP LAN **trong solution production** (`GAP-SA-STORE-01`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios `networking.md` · android `api-client.md` · offline-sync (list = demo fallback · **cấm** block tab).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `PatrolSessionsController` · **không** RMMS `patrol-history` controller |
| API downstream | `PatrolSessionsController.GetList` → `GET api/v1/patrol/sessions` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · **không** DbContext |
| App | iOS `PatrolRepositoryImpl` · Android `ApiService` `@GET("patrol/sessions")` · base `{BffBase}/mobile-bff/api/v1` |
| List bind | `FetchPatrolHistoryUseCase` · ≥3 live rows else `PatrolHistoryCopy.demoItems` (4 SSOT) |
| Search | **client** filter code / route / patrolType / status · **không** bắt query BFF P1 |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | GET `{id}` · filter sheet · POST/PUT/DELETE sessions · hub reimplement · sibling detail |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-history` → **list** · 1 màn `#sc-patrol-history` |
| App prefix | `mobile-bff/api/v1` |
| App path | **chỉ** `GET patrol/sessions` (Bearer) · query `page=1` `pageSize=50` |
| Downstream | `PatrolSessionsController.GetList` · query `search` · `status` · `route` · `page` · `pageSize` **optional** — P1 **không** gửi filter sheet |
| Detail drill | `GET patrol/sessions/{id}` — **P2** · P1 toast **Chi tiết phiên** · **cấm** gọi turn này |
| Step 4b | **N/A** — endpoint live · không BE align delta · **cấm** `/new-endpoint` |
| Rationale | Live Patrol list đủ 4+ hàng P1 · **cấm** invent history aggregate |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `PatrolHistoryController` local |
| BE HTTP | `PatrolSessionsController` | live `GET/POST/PUT/DELETE api/v1/patrol/sessions` — pack này **chỉ GET list** |
| Response DTO | `ApiResponse<PatrolSessionPagedResult>` → `PatrolSessionDto[]` | app decode `items` or `data.items` |
| DTO fields | `Id` · `Code` · `UserName` · `Route` · `PatrolType` · `CheckInCount` · `CoveragePercent` · `Status` · `StartedAt` · `OfflineQueued` · `IsActive` | map row title/sub/badge |
| HTTP app | `PatrolRepositoryImpl` iOS · `PatrolRepository` + `ApiService` Android | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers interceptor · **cấm** biết `:5101` |
| Mapper | `PatrolDtoMapper.session` + history subtitle/badge | **không** fork DTO |
| Demo fallback | `PatrolHistoryCopy.demoItems` | GET fail/empty/<3 → SSOT 4 rows · list **vẫn mở** |
| Kit | `LinmTopBar` · `LinmLargeTitle` · `LinmSearchField` · `LinmSearchGlyph` · `LinmListRow` · `LinmBadge` · `LinmToast` · `LinmTabBar` | Design `kit_missing_confirm` **N/A** |
| Entry | `patrol-home` row **Lịch sử phiên** | `reuse` hub · **cấm** reimplement `#sc-patrol-home` |

---

## BFF / API contract (live audit 2026-08-20)

| Action | App path | BFF | Downstream | Live | In slug? |
|--------|----------|-----|------------|------|----------|
| List lịch sử | `GET patrol/sessions` | proxy | `GET api/v1/patrol/sessions` | **PASS** | **yes** |
| Detail drill | `GET patrol/sessions/{id}` | proxy | `GetById` | live | **no P1** |
| Filter sheet | — | — | — | — | **no** — toast **Lọc** |
| Search | — | — | client on payload | — | **yes** client |
| POST/PUT/DELETE sessions | — | — | writer | live | **cấm** pack này |

### Query params (list)

`search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50 · BE allow 50/100/200/500)

P1 app gửi **chỉ** `page` + `pageSize`. Filter `status`/`route`/`search` query **không bắt** — search UI = client.

### Response shape

`ApiResponse<PatrolSessionPagedResult>` where `Items[]` contains `PatrolSessionDto`. App maps to `PatrolSessionItem`.

### BE catalog (read-only — **cấm** đổi AllowedStatuses P1)

Live write catalog: `Đang tuần` · `Hoàn thành` · `Bỏ sót` · `Offline queue`. Display P1 map:

| BE `Status` / flag | UI badge (list này) | kit badgeKind |
|--------------------|---------------------|---------------|
| `Đang tuần` | **Đang tuần** | info |
| `Hoàn thành` | **Hoàn thành** · **cấm** «Xong» | success |
| `Bỏ sót` | **Bỏ sót** | danger |
| `Offline queue` **hoặc** `OfflineQueued=true` **hoặc** demo `Mất sóng` | **Mất sóng** | warning |

**Cấm** đổi BE catalog / thêm bảng / fork DTO. Client map display only.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.read` | GET list/detail | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `patrol.sessions.create/update/delete` | Writer | **không** gọi turn này |

**Cấm** thêm `[RequirePermission]` mới trên Mobile.Bff · **cấm** invent permission slug mới.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | GET list — **không** form date input | `/review-timezone-implement` | `StartedAt` chỉ timeLabel nếu bind live |
| XCO | **xco_na** | list current-company sessions | `/implement-view-cross-company` | BE company filter live trên GetList · GetById XCO **không** gọi P1 |
| SHARE | **n/a** | **không** bảng RMMS mới | `/implement-shared-table` | read existing `PatrolSessions` |
| Offline | **demo fallback** · list **vẫn mở** | GET fail → 4 rows SSOT | offline-sync | **cấm** block tab · **cấm** native alert |
| GPS | **n/a** | list không ghim | — | AC-D-02 N/A |
| Camera | **n/a** | — | — | — |
| Push | **n/a** | — | — | — |
| Store | **no new privacy this pack** | list = network + token đã có | `/review-app-submit` | **cấm** `localhost` production · family `1` **cấm** iPad listing · signup/xóa TK **N/A** (không signup) · `PrivacyInfo.xcprivacy` app-level **QA/submit** (GPS sibling map đã declare) |
| Step 4b | **N/A** | không endpoint mới | — | reuse Patrol live |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-20T04:40:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** — read existing `PatrolSessions` |
| Client store | search text in-memory only · **không** persist list state |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-20)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/sessions` | BE `PatrolSessionsController.GetList` + BFF proxy live | **Giữ** · app path `patrol/sessions` page 1 size 50 |
| `PatrolHistoryController` / `GET patrol-history` | **không** | **Cấm** tạo |
| Native `#sc-patrol-history` | scaffold prior (`PatrolHistoryView` / `PatrolHistoryScreen` + GET + demo + toast) | **DELTA UI/copy** dưới — **không** đổi API |
| Hub entry `onOpenHistory` | wired push | **Giữ** · `reuse` · **cấm** toast-only entry |
| Tap row HTML `go('patrol-detail')` | proto | **Chốt toast Chi tiết phiên** · **cấm** GET `{id}` |
| Trailing Lọc | toast | **Giữ** · **cấm** sheet |
| Sibling `patrol-detail` | `pending_confirm` | **Cấm** start (`GAP-MOB-ACT-06`) |

### Delta Dev (TL split) — SA chốt, Dev dual cùng turn

| ID | Gap live vs PO/Design | Fix |
|----|------------------------|-----|
| GAP-F-PAT-HIST-01 | `historyBadgeTitle` dùng `patrol.badge.done` = **«Xong»** | Key riêng `patrol.history.badge.done` = **Hoàn thành** · **cấm** «Xong» trên list này · **cấm** đổi `patrol.badge.done` hub |
| GAP-F-PAT-HIST-02 | Demo `statusKind` missed/offline = `.neutral` (iOS/Android copy) | Kit bind đã danger/warning theo `status` string — **giữ** `historyBadgeKind` · demo tone **không** override UI |
| GAP-F-PAT-HIST-03 | Mapper `badgeKind` không map Bỏ sót / Offline queue | History UI **không** dùng `statusKind` cho badge; bind `historyBadgeKind(status)` · map `Offline queue` + `offlineQueued` → **Mất sóng** |
| GAP-F-PAT-HIST-04 | `mobile-strings.json` thiếu `patrol.history.*` | Keys đã có `LinmCopy` dual — **giữ** · optional sync JSON SSOT Dev |
| GAP-TAB-01 | Tab 5 shell | **Giữ** Tuần đường selected · in-screen tabs **none** |
| GAP-TYP-01 | label/tab 13 · search ≥16 | Kit `LinmSearchField` · **cấm** fork |
| GAP-MOB-ACT-05 | Kit reuse | **Cấm** raw `List` / M3 `NavigationBar` / `TabView` |
| Android `leadingSlot` | Compose row default | Verify **no** leading icon (`leadingSlot: 0` iOS · Android equivalent) |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-patrol-history` list | nav · large title · search · rows | GET sessions + demo fallback | **không** form entity · search ≠ dirty |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tuần đường | — | local pop | `LinmTopBar` leading · `#i-chevron-left` |
| navFilter | Lọc | — | toast | **cấm** query BFF |
| largeTitle | Lịch sử ca | — | copy | `LinmLargeTitle` |
| search | Tìm | — | client | kit placeholder **Tìm** |
| rowCode | PAT-… | `Code` | GET list | no leading icon |
| rowSub | status-aware | `Route` · `PatrolType` · `CheckInCount` · `CoveragePercent` · `Status` | GET | PO §3.4 |
| rowBadge | 4 trạng thái | `Status` · `OfflineQueued` | GET | **cấm** «Xong» |
| rowChev | — | — | kit | `showsChevron` dual P1 |

**Cấm** invent DTO history-only / profile API on this slug.

### Demo rows SSOT (fallback)

| code | sub | badge | kit |
|------|-----|-------|-----|
| PAT-20260810-0014 | QL.1 · Tuần đường · 2/3 điểm | Đang tuần | info |
| PAT-20260810-0009 | HCM · Tuần kiểm · 100% | Hoàn thành | success |
| PAT-20260809-0021 | QL.1 · Thiếu điểm tuần | Bỏ sót | danger |
| PAT-20260809-0015 | Chờ đồng bộ · 1 điểm tuần | Mất sóng | warning |

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub row **Lịch sử phiên** | push `#sc-patrol-history` | `reuse` entry `patrol-home` |
| Nav back **Tuần đường** | pop hub | owner |
| Trailing **Lọc** | toast **Lọc** | owner · **cấm** sheet |
| Search | client filter | owner · **cấm** enqueue |
| Tap row | toast **Chi tiết phiên** | owner · **cấm** `patrol-detail` |
| Tab Tuần đường | shell giữ | `GAP-TAB-01` |

**Cấm** nav stub giả detail form · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-ACT-01 | 1 list · **cấm** gộp detail |
| GAP-MOB-ACT-02 | **none** child form/sheet |
| GAP-MOB-ACT-05 | Kit reuse map |
| GAP-MOB-ACT-06 | `patrol-detail` giữ `pending_confirm` |
| GAP-MOB-ACT-07 | **cấm** enqueue search/filter/submit sibling |
| GAP-MOB-ALIGN-01 | dual 4 rows + Lọc + copy |
| GAP-F-PAT-HIST-01 | Badge hoàn thành = **Hoàn thành** · **cấm** «Xong» |
| GAP-F-PAT-HIST-03 | Map `Offline queue` → **Mất sóng** client |
| GAP-SA-STORE-01 | **cấm** localhost production URL trong solution · Debug xcconfig local **không** ship Release |
| GAP-TAB-01 | **cấm** invent in-screen tabs |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/PatrolHistory/*` | `presentation/feature/patrolhistory/*` |
| Use case | `FetchPatrolHistoryUseCase` | same |
| Repo | `PatrolRepositoryImpl` → `GET patrol/sessions` | `PatrolRepository` + `ApiService` |
| Mapper | `PatrolDtoMapper` + `PatrolHistoryModels` | `PatrolDtoMapper.history*` |
| State | `PatrolHistoryUiState` · client `filteredItems` | same |
| Shell | `AppRouter` `showPatrolHistoryFromField` | `MainTabScreen` nav |
| Demo | `PatrolHistoryCopy.demoItems` | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent history API.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-history` / **`list`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET patrol/sessions` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-PAT-HIST` · `T-AND-PAT-HIST` · `T-BE` **n/a** |
| Kit | reuse map list · verify dual parity Design |
| Delta Dev | GAP-F-PAT-HIST-01/03 badge copy + Offline queue map · **cấm** detail push · **cấm** «Xong» |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | 2026-08-20T04:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-control-hint-20260820 |
| bffContentHash | sha256:patrol-history-mobile-bff-20260820 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
