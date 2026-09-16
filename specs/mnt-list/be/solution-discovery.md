# SA — Solution — mnt-list (mobile list · Công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| title | [Mobile] [Trang Chủ] -> Công việc |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_bd81eda6`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-mnt-list` `DES-MOB-MNT-LIST` · **cấm** Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| domain | **Maintenance** work-orders GET list · **cấm** invent `api/v1/mnt-list` / `MntListController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-mnt-list` · `ui/review/demo-parity.md` · `task_9df501b1` |
| prior · po | **confirmed** · `po/requirement.md` · `task_18c2cf15` |
| prior · data_analy | **confirmed** · `_data-analy/mnt-list-control-hint.md` · `mnt-list-bff-endpoints.md` · `mnt-list-action-tree.md` · `mnt-list-real-data.md` · contentHash `sha256:mnt-list-mobile-list-20260828` · bffContentHash `sha256:mnt-list-mobile-bff-20260828` |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_bd81eda6` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_bd81eda6` |
| confirmedBy | agent autoApprove · `task_bd81eda6` |
| updatedAt | `2026-08-28T18:55:00.000Z` |
| thisAction | **List Công việc** `#sc-mnt-list` only · GET `maintenance/work-orders` · client search · toast Lọc / sibling CTAs · **cấm** gộp estimate/chat/progress/log |

**Cấm:** invent `api/v1/mnt-list` / `MntListController` · fork `WorkOrderDto` mobile-only · app `:5101` · DbContext trên Mobile.Bff · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · gộp sibling (`GAP-MOB-ACT-01/02`) · start `pending_confirm` (`GAP-MOB-ACT-06`) · re-scan demo · Write MFE/native ở role SA.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (list = **no write queue** · GET fail → demo SSOT).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Maintenance · `WorkOrdersController` · table `rmms_work_orders` |
| API downstream | `GET api/v1/maintenance/work-orders` · optional `GET …/init-data` **P2** |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `maintenance/*` (`docs/bff-route-map.md`) |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | estimate form · chat comments · progress POST · log sheet · WO create/edit · Kind E summary · SignalR |

### Route decision

| | Choice |
|--|--------|
| Slug | `mnt-list` → **list** · 1 màn `#sc-mnt-list` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 | **chỉ** `GET maintenance/work-orders?page=1&pageSize=50` (Bearer) |
| Init-data | `GET maintenance/work-orders/init-data` · **P2** filter sheet — **cấm** gọi P1 |
| Step 4b | **N/A** — reuse Signed endpoints live · **cấm** `/new-endpoint` |
| Rationale | Live Maintenance list đủ cards · BFF proxy passthrough · **cấm** invent mnt-list path |

---

## BFF / API contract (từ analy — **cấm** invent)

Nguồn: `_data-analy/mnt-list-bff-endpoints.md` · `mnt-list-real-data.md` §B · verify `WorkOrdersController` + `WorkOrderDto`.

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| WO list | GET | `maintenance/work-orders` | `WorkOrdersController.GetList` | **yes** · `page=1` · `pageSize=50` |
| Init lookup | GET | `maintenance/work-orders/init-data` | `GetInitData` | **P2** only |
| Hub / `#i-sum` | — | — | local | toast **Giao việc xử lý** · sau sibling `estimate` Approve+ship → `go('estimate')` |
| Back | — | — | local | pop `home` |
| Lọc / search UI | — | — | local | toast / client filter · **không** API P1 |
| Chat / progress / log | — | — | sibling | toast P1 · **không** API trên slug này |

### Query passthrough (list)

`search` · `status` · `workType` · `page` · `pageSize`  
Mobile P1: `page=1` · `pageSize=50` · search **client-side** OK (title / route / code / assign) nếu không gửi `search` query.

### Response shape (live)

`ApiResponse<WorkOrderPagedResult>` → `data.items[]` = `WorkOrderDto`:

| DTO field | Card bind |
|-----------|-----------|
| `title` | cardTitle |
| `teamName` + `assigneeName` | assignLine (rule dưới) |
| `createdAt` + `dueAt` | range `yyyy-MM-dd HH:mm — …` |
| `incidentId` + `routeName` | meta |
| `status` | statusLabel + chrome |
| `code` / `id` | search key · identity (không bắt buộc UI title) |

**Cấm** AssignerName — DTO **không có** (`GAP-F-MNT-MOB-01`).

### Assign / meta rules (real-data §B)

| Line | Rule |
|------|------|
| assignLine | `"{teamName} giao việc cho {assigneeName}"` · thiếu team → `"Giao việc cho {assigneeName}"` · cả thiếu → demo copy fallback |
| meta | có `incidentId` → `"Từ sự cố {incidentId} · {routeName}"` · không → `routeName` only |

### Status VN map

| API `status` | VN | chrome |
|--------------|----|--------|
| `new` | Chờ xử lý | warn |
| `in_progress` | Đang xử lý | info |
| `done` | Đã hoàn thành | ok |
| `cancelled` | Đã hủy | gray |

### OUT slug `mnt-list` P1 (sibling / web)

| Method | Path | Owner |
|--------|------|-------|
| GET/PUT/DELETE | `maintenance/work-orders/{id}` | web / sibling |
| POST | `maintenance/work-orders` | web / estimate |
| POST | `…/{id}/progress` | `mnt-progress` |
| POST | `…/{id}/complete` | stub P2 |
| POST | `…/{id}/comments` | `mnt-chat` **DEFER** |
| GET | `maintenance/summary` | Kind E — **OUT** |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| HTTP app | `ApiClient` iOS · `ApiService` Android | **cấm** URLSession/OkHttp trong View · **cấm** VM→ApiClient trực tiếp nếu repo pattern đã có |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` interceptor |
| DTO | reuse `WorkOrderDto` wire fields · **cấm** fork mobile DTO | map → UI model list card |
| Kit | `LinmTopBar` · `LinmSearchField` · `LinmListRow` · rich-card · `LinmBadge` · `LinmIconButton` · `LinmToast` · `LinmEmptyChrome` (opt) · `LinmTabBar` shell | Design `kit_missing_confirm` **N/A** · **cấm** raw `List` / M3 `NavigationBar` / `TabView` |
| Persist | no-parent-json-field | list **không** ghi inventory JSON · **không** queue write |
| Tab | shell tab `work` = entry · in-screen tabs **none** | **cấm** invent segment (`tab-index`) |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | display `CreatedAt`/`DueAt` local · **không** DATE filter form P1 | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_na** | list current-company via BE + headers · **không** View catalog GET/{id} | `/implement-view-cross-company` | — |
| SHARE | **n/a** | đọc existing `rmms_work_orders` · **không** bảng mới | `/implement-shared-table` | migration **không** |
| Offline | **no write queue** · list **vẫn mở** | GET fail / empty → demo **2** cards SSOT · toast info optional | offline-sync | **cấm** block screen |
| GPS | **n/a** | — | — | sibling `mnt-progress` |
| Camera | **n/a** | — | — | sibling `mnt-progress` |
| Push | **n/a** | — | — | — |
| Store | **N/A** signup | no account create/delete trên list | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP listing · family `1` **cấm** iPad claim |
| Step 4b | **N/A** | reuse GET work-orders | — | **cấm** `/new-endpoint` |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-08-28T18:55:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — existing `WorkOrderEntity` / `rmms_work_orders` |
| API shape | paged `WorkOrderDto` scalars |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/maintenance/work-orders` | BE `WorkOrdersController` + Mobile.Bff proxy | **Giữ** · app path `maintenance/work-orders` |
| `GET …/init-data` | live | **P2** — **không** gọi P1 |
| Native `#sc-mnt-list` | **chưa** (stub/toast từ Home) | **DELTA UI** dual list kit · replace stub |
| Home tile / tab `work` | entry → stub | Nav push `#sc-mnt-list` · **cấm** reimplement `#sc-home` |
| AssignerName | **không** trên DTO | bind TeamName+AssigneeName · demo fallback (`GAP-F-MNT-MOB-01`) |
| `MntListController` / `api/v1/mnt-list` | **không** | **Cấm** tạo |
| Sibling estimate/chat/progress/log | pending_confirm | toast P1 · **cấm** start |
| Demo parity dual 2 cards | Design closed GAP-MOB-MNT-DEMO-01 | fallback SSOT 2 rows |

### Demo / fallback cards SSOT (**2**)

| title | assignLine | range | meta | status |
|-------|------------|-------|------|--------|
| Vá mặt đường | Hạt trưởng VP-IV.1 giao việc cho Nguyễn Văn A · Tổ tuần đường | 2026-08-10 08:30 — 2026-08-12 17:00 | Từ sự cố SC-2401 · QL.1 Km 1556+080 | `new` → Chờ xử lý |
| Nạo cống | Hạt trưởng giao việc cho Trần Khánh · Chi cục II.2 | 2026-08-09 07:00 — 2026-08-09 16:00 | Tuyến HCM | `done` → Đã hoàn thành |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-mnt-list` list | topbar · search · hub · cards · actions · tab shell | query Maintenance list + static chrome / demo fallback | `WorkOrder` read-only |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | (chevron) | — | local | pop `home` |
| title | Danh sách công việc | — | fixed | dual |
| navFilter | Lọc | — | toast | **Bộ lọc · tuyến đường** · **cấm** sheet P1 |
| search | Tìm kiếm công việc… | — | client filter | title/route/code/assign |
| hubTitle / hubSub | Giao việc xử lý · … | — | toast P1 | later `go('estimate')` khi sibling ship |
| cardTitle | (tên CV) | `title` | GET list | |
| cardAssign | … giao việc cho … | `teamName` · `assigneeName` | derived | **cấm** AssignerName |
| cardRange | from — to | `createdAt` · `dueAt` | display local | |
| cardMeta | sự cố · tuyến | `incidentId` · `routeName` | derived | |
| cardStatus | Tình trạng xử lý: … | `status` | map VN + chrome | |
| actChat | Trao đổi | — | toast | **Trao đổi công việc** |
| actProgress | Cập nhật trạng thái | — | toast | **Cập nhật trạng thái · ảnh + định vị** |
| actEstimate | Ước lượng / giao | — | toast | **Giao việc xử lý** |
| actLog | Nhật ký xử lý | — | toast | done card · **Nhật ký xử lý** |
| empty | (trống) | — | optional | 0 live + no demo gate |

**Cấm** invent DTO AssignerName / mnt-list aggregate.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Home tile / tab Công việc | push `#sc-mnt-list` | `mnt-list` (this) · entry `reuse=home` |
| Back | pop `home` | `home` reuse |
| Lọc | `LinmToast` **Bộ lọc · tuyến đường** | chrome P1 |
| Search | client filter | same slug (`GAP-MOB-ACT-07`) |
| Hub / `#i-sum` | toast **Giao việc xử lý** | `estimate` pending_confirm |
| `#i-chat` | toast **Trao đổi công việc** | `mnt-chat` pending_confirm |
| `#i-sync` | toast **Cập nhật trạng thái · ảnh + định vị** | `mnt-progress` pending_confirm |
| `#i-list` (done) | toast **Nhật ký xử lý** | `mnt-log` pending_confirm |

**Cấm** nav stub giả màn sibling · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog` / `window.alert`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-F-MNT-MOB-01 | AssignerName **không** DTO · bind TeamName+AssigneeName · demo fallback |
| GAP-MOB-MNT-DEMO-01 | **closed** Design · dual 2 cards SSOT fallback |
| GAP-MOB-MNT-NAV-01 / LIST-01 / DATA-01 | Dev ship push list + GET bind + offline demo |
| GAP-MOB-MNT-HUB-01 | P1 toast · push estimate **sau** sibling Approve+ship |
| GAP-MOB-ACT-01/02 | **none** — 1 list · không child form/sheet |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw List/NavBar |
| GAP-MOB-ACT-06 | Sibling giữ `pending_confirm` |
| GAP-MOB-ACT-07 | Search/Lọc cùng slug · **không** enqueue |
| GAP-MOB-BFF-01 | **không** hàng mới — GET work-orders live đủ |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/MntList/*` (hoặc `Maintenance/WorkOrders/*`) | `presentation/feature/mntlist/*` |
| Use case | `FetchWorkOrdersUseCase` | same |
| Repo | `WorkOrderRepository` / `MntListRepositoryImpl` → `GET maintenance/work-orders` | same |
| State | items · query · toast · loading · usingDemoFallback | same |
| DI | `AppContainer` wire VM | Hilt ViewModel |
| Shell | Home tile + tab `work` → push list · `LinmTabBar` **giữ** | same |
| Offline | appear: try GET → fail/empty → demo 2 cards · screen mở | same |
| Demo SSOT | `MntListCopy.demoCards` (2 rows) | same |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · hardcode production thay live khi GET OK.

---

## VERIFY GATE (roleOnly=`sa`)

| Check | Result |
|-------|--------|
| be/solution-discovery.md | **PASS** · solution_confirm approve · BFF map analy |
| Design + control-hint + real-data §B | **PASS** · read · **cấm** invent API / control |
| be_repo_confirm | **PASS** · `Linm.RMMS.WebService` · Maintenance · **cấm ERP.*** |
| Step 4b / migration | **N/A** — reuse `GET maintenance/work-orders` |
| yarn build / e2e / start:std | **SKIP** (cấm role SA) |
| Write MFE / native | **SKIP** (cấm role SA) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `mnt-list` / **`list`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET maintenance/work-orders` · Step 4b **N/A** |
| Real-data | `_data-analy/mnt-list-real-data.md` §A+§B |
| Tasks đề xuất | `T-IOS-MNT-LIST` · `T-AND-MNT-LIST` · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | Home/tab work → push list · sibling CTAs = toast P1 |
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
| generatedAt | 2026-08-28T18:55:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-list-20260828 |
| bffContentHash | sha256:mnt-list-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
