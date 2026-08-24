# SA — Solution — asset (mobile list · Danh mục tài sản)

| Field | Value |
|-------|-------|
| feature | `asset` |
| title | [Mobile] List danh mục tài sản |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_657c2239`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO + Design confirm) |
| stack | `native_dual` |
| Feature Kind | **list** push `#sc-asset-list` · **cấm** Kind B web / Lin* grid / Report / full-page form |
| domain | **Asset** `RoadAssetsController` · **cấm** `AssetListController` / invent `api/v1/asset-list` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `D:/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `D:/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · dual `#sc-asset-list` · `task_179e1510` |
| prior · po | **confirmed** · `po/requirement-mobile.md` · `task_d5c147af` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/asset-control-hint.md` · `asset-real-data.md` · `asset-hub-bff-endpoints.md` · contentHash `sha256:asset-mobile-edit-list-20260823` · bffContentHash `sha256:asset-mobile-list-road-assets-proxy-20260823` |
| prior web SA | `be/solution-discovery.md` (web Kind B **done** · `task_86f45a3c`) — **không** AC mobile list |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| taskId | `task_657c2239` |
| confirmedBy | agent autoApprove · `task_657c2239` |
| updatedAt | `2026-08-24T06:30:00.000Z` |
| thisAction | **List danh mục TS** `#sc-asset-list` only · GET `asset/road-assets` · search · demo fallback · toast detail · **cấm** gộp form/detail/collect |

**Cấm:** invent `GET asset-list` / `AssetListController` · clone `RoadAssetsController` trên Mobile.Bff · app `:5101` trực tiếp · gộp sibling screens (`GAP-MOB-ACT-01/02`) · filter sheet type/route/km P1 · push `#sc-asset-detail` P1 · ERP.* · Finance `api/v1/assets` · `mfeStdUrl` / `yarn start:std` · native alert · `UIAlert` / `AlertDialog` · badge Ghim P1 · «Có mạng» · watermark Gói.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync (list = demo fallback · **cấm** block screen).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Asset `RoadAssetsController` · **không** RMMS `asset-list` controller |
| API downstream | `RoadAssetsController.GetList` → `GET api/v1/asset/road-assets` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `AssetRepositoryImpl` · Android `AssetRepository` + `ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Type label | Client mapper `AssetDtoMapper.typeLabel(from:)` — code → VN label via static alias + fallback `Type` code · **không** GET lookup P1 |
| Demo fallback | `AssetListCopy.demoRows` (2 rows SSOT) | GET fail/empty → demo · list **vẫn mở** |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | init-data · detail GET/{id} · CRUD POST/PUT/DELETE · filter type/route/km · pagination footer · pull-refresh · row menu · GIS map |

### Route decision

| | Choice |
|--|--------|
| Slug | `asset` → **list** · 1 màn `#sc-asset-list` |
| App prefix | `mobile-bff/api/v1` |
| App path | **chỉ** `GET asset/road-assets` (Bearer) |
| Downstream | `RoadAssetsController.GetList` · query `search` · `page` · `pageSize` |
| Detail drill | `GET asset/road-assets/{id}` — **P2** · P1 toast row |
| Init-data / lookups | **no P1** — sibling form/detail |
| Step 4b | **N/A** — endpoint live · không BE align delta · **cấm** `/new-endpoint` · **cấm** `/database-migration` |
| Rationale | Live Asset list đủ search + row bind P1 · **cấm** invent list aggregate |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `AssetListController` local |
| BE HTTP | `RoadAssetsController` | live `GET/POST/PUT/DELETE api/v1/asset/road-assets` · init-data |
| Web BFF (ref) | `RoadAssetsBffController` `web-bff/…` | mobile **không** gọi web-bff |
| Response DTO | `ApiResponse<RoadAssetPagedResult>` → `RoadAssetDto[]` | app decode `data.items` |
| DTO fields (list P1) | `Id` · `Code` · `Name` · `Type` · `Route` · `KmFrom` · `KmTo` · `Status` · optional `Quantity` · `UnitCode` | `Quantity`/`UnitCode` bind only · **không** hiện P1 |
| HTTP app | `AssetRepositoryImpl` iOS · Android | **cấm** URLSession/OkHttp trong View |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers interceptor |
| Mapper | `AssetDtoMapper.listRow(from:)` | title `{code} · {name}` · subtitle `{route} · Km {kmFrom} · {typeLabel}` |
| Demo fallback | `AssetListCopy.demoRows` | GET fail/empty → SSOT 2 rows · list **vẫn mở** |
| Kit | `LinmTopBar` · `LinmSearchField` · `LinmListRow` · `LinmRowIcon` · `LinmToast` | Design `kit_missing_confirm` **N/A** |
| Hub entry | `reuse=asset-hub` tile **Danh sách** | **cấm** reimplement hub |

---

## BFF / API contract (live audit 2026-08-24)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| List assets | `GET asset/road-assets` | proxy | `GET api/v1/asset/road-assets` | **PASS** |
| Search | `GET asset/road-assets?search=` | proxy | same + ILIKE code/name/route/type/qr | **PASS** |
| Detail drill | `GET asset/road-assets/{id}` | proxy | `GetById` + XCO | live · **no P1** |
| Init-data | `GET asset/road-assets/init-data` | proxy | static statuses/sources/units | live · **no P1** |
| Type/route lookup UI | `GET integration/asset-types/search` … | proxy | Integration | live · **no P1** |
| Invent list | `GET asset-list` | — | — | **cấm** |
| CRUD write | POST/PUT/DELETE | proxy | same | live · sibling collect/adjust |

### Query params (list — P1 app gửi)

`search?` · `page` (default 1) · `pageSize` (default **50**)

**P1 app không gửi:** `type` · `route` · `kmFrom` · `kmTo` · `orgUnit` · `fromDate` · `toDate` — filter toolbar = **P2** (`GAP-F-ASSET-MOB-01`).

### Response shape

`ApiResponse<RoadAssetPagedResult>` where `Data.Items[]` = `RoadAssetDto`. App maps to `AssetListItem`.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `asset.road-assets.read` | GET list | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `asset.road-assets.create/update/delete` | Writer siblings | **không** gọi turn này |
| `master.asset-types.read` | Lookup | **không** gọi P1 |

**Cấm** thêm `[RequirePermission]` mới trên Mobile.Bff · **cấm** invent permission slug mới.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | GET list — **không** form date input | `/review-timezone-implement` | `UpdatedAt` display N/A on list P1 |
| XCO | **xco_get_only** | list **n/a** · `GET …/{id}` sibling | `/implement-view-cross-company` | List tenant-scoped · detail XCO live |
| SHARE | **share_tenant** | `RoadAssetEntity` | `/implement-shared-table` | `CompanyCode` tenant filter live |
| Offline | **demo fallback** · list **vẫn mở** | GET fail → demo SSOT | offline-sync | **cấm** full-screen block · **cấm** native alert |
| GPS | **n/a** | list không GPS | — | — |
| Camera | **n/a** | row icon cube only | — | — |
| Push | **n/a** | không inbox | — | — |
| Step 4b | **N/A** | không endpoint mới | — | reuse Asset live |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-24T06:30:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** |
| Child tables this pack (BE) | **n/a** — read existing `RoadAssetEntity` / `rmms_road_assets` |
| Client store | **không** persist list state · demo in-memory only |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-24)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/asset/road-assets` | BE `RoadAssetsController` + Mobile.Bff proxy live | **Giữ** · app path `asset/road-assets` |
| `AssetListController` / `GET asset-list` | **không** | **Cấm** tạo |
| Native `#sc-asset-list` | **chưa ship** (Dev pending) | **DELTA UI** dual copy parity · search · toast detail · demo fallback |
| Hub tile Danh sách | prior toast stub possible | **DELTA** push `#sc-asset-list` · back pop hub |
| Filter type/route/km | BE query params live | **OUT P1** — search only |
| `Quantity`/`UnitCode` on DTO | live on entity | bind only · **không** subtitle P1 (`GAP-MOB-ASSET-SL-01`) |
| Type label subtitle | DTO `Type` = code only | client `AssetDtoMapper.typeLabel` + demo SSOT labels |
| `#sc-asset-detail` / collect / adjust | sibling `pending_confirm` | **cấm** start (`GAP-MOB-ACT-06`) |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-asset-list` list | nav · search · rows | GET road-assets + demo fallback | **không** RMMS form entity · FormMode **none** |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tài sản | — | local pop | `LinmTopBar` · `#i-chevron-left` |
| navTitle | Danh sách | — | fixed | dual same |
| search | Tìm mã TS, tuyến, loại… | `search` | GET query | debounce/submit · page=1 |
| rowTitle | {code} · {name} | `Code` + `Name` | GET | title ≥16 |
| rowSub route | QL.1 | `Route` | GET | subtitle segment |
| rowSub km | Km 1556+000 | `KmFrom` (+ `KmTo`?) | GET | chainage text |
| rowSub type | Cống / Biển báo | `Type` | GET + mapper | **không** lookup API P1 |
| rowIcon | cube | — | `LinmRowIcon` `#i-cube` | indigo row1 · gray row2 |
| rowTap | — | `Id` | toast | **Chi tiết tài sản** P1 |
| empty | (trống) | — | demo fallback | fail → 2 demo rows |

### Type label mapper (client P1)

| `Type` code (examples) | Display label |
|------------------------|---------------|
| `CULVERT_X` | Cống |
| `GANTRY_SIGN` | Biển báo |
| `KM_POST` | Cột Km |
| `GUARDRAIL` | Hộ lan |
| `LIGHTING` | Đèn |
| `SLOPE_PROTECT` | Taluy |
| unknown | fallback = raw `Type` code |

Demo rows SSOT use fixed labels regardless of live code mapping. Production: mapper + fallback — **cấm** Dropdown 8 nhãn demo as persist SSOT.

**Cấm** invent DTO `AssetListDto` / list aggregate API on this slug.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub tile Danh sách | push `#sc-asset-list` | `reuse` entry `asset-hub` |
| Nav back Tài sản | pop `#sc-asset-hub` | owner |
| Search apply | GET `search=` page=1 | owner |
| Tap row | toast **Chi tiết tài sản** | owner · sibling `asset-detail` pending |
| Filter type/route/km | **OUT P1** | **P2** |
| Tạo mới / Thu thập | **OUT** — hub tiles only | sibling `asset-collect` pending |

**Cấm** nav stub giả sibling form · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-F-ASSET-MOB-01 | Filter **OUT P1** — search `search=` only · filter sheet = **P2** |
| GAP-F-ASSET-MOB-02 | Tap row **P1 toast** · push detail = sibling `pending_confirm` |
| GAP-F-ASSET-MOB-03 | Badge Ghim **P2 Nice** — **không** DoD P1 |
| GAP-F-ASSET-MOB-04 | Pagination footer **OUT P1** — page 1 size 50 only |
| GAP-MOB-ASSET-SL-01 | `Quantity`/`UnitCode` bind only · **không** hiện list P1 |
| GAP-MOB-ASSET-DATA-01 | GET list + demo 2 rows SSOT on fail/empty |
| GAP-MOB-ACT-01/02 | **none** — 1 list · **cấm** child form/sheet |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw List / M3 SearchBar |
| GAP-MOB-ACT-06 | siblings `asset-detail` · `asset-collect` · `asset-adjust` giữ `pending_confirm` |
| GAP-MOB-ACT-07 | **cấm** enqueue POST/PUT/DELETE turn này |
| GAP-MOB-ALIGN-01 | iOS + Android **cùng** copy zones + 2 demo rows |
| GAP-SA-TYPE-LABEL-01 | Client mapper type code → label · **không** init-data/lookup P1 |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/Asset/AssetList/*` | `presentation/feature/asset/list/*` |
| Use case | `FetchAssetListUseCase` | same |
| Repo | `AssetRepositoryImpl` → `GET asset/road-assets` | `AssetRepositoryImpl` + `ApiService` |
| Mapper | `AssetDtoMapper` | `AssetDtoMapper` |
| State | `AssetListUiState` · items · search · toast | same |
| Shell | `AppRouter` push from hub · back pop hub | `NavHost` navigate `asset-list` |
| Demo | `AssetListCopy.demoRows` | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent asset-list API.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `asset` / **`list`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET asset/road-assets` · Step 4b **N/A** |
| Tasks đề xuất | `T-IOS-LIST-01` · `T-AND-LIST-01` · `T-BE` **n/a** · `T-BFF-01` **reuse** |
| Kit | reuse list kit · verify dual parity Design |
| Delta Dev | hub push tile · dual copy §Design · type label mapper · demo fallback · **cấm** push sibling |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl |
| Web SA ref | `be/solution-discovery.md` — Kind B form/list web · **không** TL task web trên mobile chain |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.22 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-24T06:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-mobile-edit-list-20260823 |
| bffContentHash | sha256:asset-mobile-list-road-assets-proxy-20260823 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.22 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
