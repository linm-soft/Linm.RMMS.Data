# SA — Solution — asset-adjust (mobile · Cập nhật / bớt)

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| title | [Mobile] [Tài sản] -> Cập nhật / bớt |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_39b7c7aa`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-ASSET-ADJUST-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** push `#sc-asset-adjust` `DES-MOB-ASSET-ADJUST` + modal cùng slug `#md-asset-remove` `DES-MOB-ASSET-REMOVE` · **cấm** sheet chrome / Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| domain | **Asset** · `RoadAssetsController.GetList` + `SoftDeleteAsync` · `RoadAssetDto` · **cấm** invent `api/v1/asset-adjust` / `AssetAdjustController` / Finance `api/v1/assets` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-asset-adjust` · `ui/review/demo-parity.md` · `task_6476a9ab` · designContentHash `sha256:asset-adjust-design-20260830` |
| prior · po | **confirmed** · `po/requirement.md` · `task_eb71b522` · poContentHash `sha256:asset-adjust-po-requirement-20260830` |
| prior · data_analy | **confirmed** · `_data-analy/asset-adjust-control-hint.md` · `asset-adjust-bff-endpoints.md` · `asset-adjust-action-tree.md` · `asset-adjust-real-data.md` · contentHash `sha256:asset-adjust-control-hint-20260830` · realDataHash `sha256:asset-adjust-real-data-20260830` · bffContentHash `sha256:asset-road-assets-list-put-delete-proxy-20260830` · actionTreeHash `sha256:asset-adjust-action-tree-20260830` · demoContentHash `sha256:mobile-p1-sc-asset-adjust-20260830` · ctxContentHash `sha256:asset-adjust-ctx-20260830` |
| prior · peer SA | list `specs/asset/be/solution-discovery-mobile.md` (GetList) · detail `specs/asset-detail/be/solution-discovery.md` (GetById · Sửa nav) · **this pack** owns SoftDelete + adjust list surface |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_39b7c7aa` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_39b7c7aa` |
| confirmedBy | agent autoApprove · `task_39b7c7aa` |
| updatedAt | `2026-08-30T23:42:00.000Z` |
| thisAction | **Cập nhật / bớt** `#sc-asset-adjust` only · entry hub tile `#i-minus` · GET list(+search) · Sửa → detail · Bớt soft DELETE · **cấm** gộp collect / AI / list / detail form / hub · **cấm** PUT UI P1 |

**Cấm:** invent `api/v1/asset-adjust` / `AssetAdjustController` · fork `RoadAssetDto` mobile-only · invent Finance `api/v1/assets` · app `:5101` · DbContext trên Mobile.Bff · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · gộp sibling (`GAP-MOB-ACT-01/02`) · start `asset-detail` / collect / AI (`GAP-MOB-ACT-06`) · enqueue GET/search/DELETE/PUT (`GAP-MOB-ACT-07`) · re-scan demo · Write MFE/native ở role SA · fake 200 khi GET/DELETE fail · ship `demoItems` khi BFF live (`GAP-MOB-REAL-02`) · hard delete · system `UIAlert` / `AlertDialog` / `window.alert` / `confirm()` · PUT edit form UI P1.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (GET fail → demo SSOT · DELETE fail → toast · **cấm** offline fake success).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Asset · `RoadAssetsController` · table `rmms_road_assets` · DOMAIN-MAP Asset |
| API downstream | **P1** `GET api/v1/asset/road-assets` + `DELETE api/v1/asset/road-assets/{id}` (soft) · PUT domain **OUT** UI P1 |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `asset/*` |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Type label | Client `AssetDtoMapper.typeLabel(Type)` — **reuse list/detail** · unknown → raw `Type` · **không** lookup P1 |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | collect POST · AI · asset list pack · hub implement (trừ wire entry) · detail GetById · embed map · init-data · Finance assets · hard delete · media upload |

### Route decision

| | Choice |
|--|--------|
| Slug | `asset-adjust` → **screen** · 1 màn `#sc-asset-adjust` + modal `#md-asset-remove` cùng slug |
| App prefix | `mobile-bff/api/v1` |
| App path P1 | `GET asset/road-assets?search=&page=&pageSize=` · `DELETE asset/road-assets/{id}` (Bearer) |
| Nav siblings | `go('asset-hub')` · `go('asset-detail')` + Id — **không** API PUT trên slug này P1 |
| Step 4b | **N/A** — reuse GetList + SoftDelete live + proxy · **cấm** `/new-endpoint` |
| Rationale | Live Asset GetList + SoftDelete đủ list/search/Bớt · BFF proxy · **cấm** invent asset-adjust path |

---

## BFF / API contract (từ analy — **cấm** invent)

Nguồn: `_data-analy/asset-adjust-bff-endpoints.md` · `asset-adjust-real-data.md` §B · Design confirmed · PO §6.

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| Load / search list | GET | `asset/road-assets?search=&page=&pageSize=` | `RoadAssetsController.GetList` · active only | **yes** · appear + debounce search |
| Bớt khỏi sổ | DELETE | `asset/road-assets/{id}` | `SoftDeleteAsync` · `IsActive=false` | **yes** · modal confirm |
| Sửa (nav) | — | — | local | `go('asset-detail')` + Id · **không** API trên adjust |
| Cập nhật field | PUT | `asset/road-assets/{id}` | `UpdateAsync` · `UpdateRoadAssetRequest` | **OUT** UI P1 · EDIT-01 |
| Toast ok / err | — | — | local | after DELETE 200 / GET·DELETE fail |
| Nav back hub | — | — | local | `go('asset-hub')` / pop |

### Response shape (live)

`ApiResponse<RoadAssetPagedResult>` → list items = `RoadAssetDto`:

| DTO field | Adjust zone P1 |
|-----------|----------------|
| `Id` | row key · DELETE · nav Sửa |
| `Code` | row title + toast cache |
| `Type` | typeLabel · row title |
| `Route` · `KmFrom` | row subtitle · `Km {KmFrom}` |
| `KmTo` | optional append nếu có |
| `Name` · `Status` · `Lat` · `Lng` · … | **OUT** P1 adjust row |
| `IsActive` | filter active only trên GET |

### DELETE response

| Field | UI |
|-------|-----|
| `{ id }` + message | toast **Đã bớt tài sản · {Code}** · Code từ **row cache** trước DELETE · remove row |

### PUT body — `UpdateRoadAssetRequest` (**domain live · UI OUT P1**)

| Wire | UI P1 |
|------|-------|
| `Name` · `Type` · `Route` · `KmFrom` · `Status` · … | **không** form trên `#sc-asset-adjust` |

**Cấm** app fork DTO khác BFF table · **cấm** invent path `asset-adjust`.

### Display rules (real-data §B + Design)

| Line | Rule |
|------|------|
| search | query `search` · placeholder SSOT **«Tìm mã TS cần sửa hoặc bớt…»** dual · debounce GET |
| row title | `Code · typeLabel(Type)` · unknown → raw `Type` · **không** GET lookup |
| row sub | `"{Route} · Km {KmFrom}"` · optional `KmTo` |
| Sửa | local nav detail + Id · thiếu Id → toast · stay |
| Bớt | in-app modal only · **cấm** system alert |
| toast ok | after DELETE 200 · cached `Code` |
| toast err | GET/DELETE fail / 404 / 403 · **cấm** fake 200 |
| empty | GET empty → EmptyState |
| offline | screen **vẫn mở** · demo SSOT rows UI-only + toast · **cấm** ship mock khi BFF OK |

### OUT slug `asset-adjust` P1 (sibling / web)

| Method | Path | Owner |
|--------|------|-------|
| GET | `asset/road-assets/{id}` | `asset-detail` (Sửa nav reuse) |
| POST | `asset/road-assets` | `asset-collect` |
| GET | `asset/road-assets/init-data` | form / web |
| GET | `asset/road-assets/summary-by-type` | dashboard |
| PUT | `asset/road-assets/{id}` | domain live · **UI OUT** adjust P1 |
| Web | `web-bff/api/v1/asset/**` | web · mobile = `mobile-bff` proxy |

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `asset.road-assets.read` (GetList) | GET list/search | **reuse** · BE `[RequirePermission]` TODO debt P1 OK |
| `asset.road-assets.delete` (SoftDelete) | DELETE soft | **reuse** · SoftDeleteAsync live |
| create / update UI | OUT slug P1 | **cấm** gọi PUT từ adjust UI |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `AssetAdjustController` local trên BFF |
| BE HTTP | `RoadAssetsController.GetList` + `Delete` → `SoftDeleteAsync` | live · tenant filter · **không** hard delete |
| Response DTO | `ApiResponse` + `RoadAssetDto` / paged | scalars flat |
| HTTP app | extend `AssetRepository` / use cases list+softDelete | **cấm** URLSession/OkHttp trong View · **cấm** VM→ApiClient trực tiếp nếu repo pattern đã có |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` interceptor |
| Type label | `AssetDtoMapper.typeLabel` | **reuse list/detail** · **cấm** invent second mapper |
| Kit | `LinmTopBar` · `LinmSearchField` · `LinmListRow` · Secondary/Danger/Text · Modal · `LinmToast` · EmptyState · `LinmTabBar` shell | Design `kit_missing_confirm` **N/A** · **cấm** raw `NavigationBar` / M3 bar / `TabView` / system alert |
| Persist | no-parent-json-field | soft delete = BE `IsActive` · **không** parent JSON inventory · offline write queue **optional P2** — P1 **cấm** fake DELETE 200 offline |
| Tab | shell tab `home` selected · pack `tabs: none` | **cấm** invent / segment trên adjust (`GAP-TAB-01`) |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** DATE form · timestamps audit không bind P1 | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_get_only** (peer list/detail) | List/Delete **tenant-scoped** query filter · detail GetById XCO live (sibling) · 403/404 → toast · **cấm** app bypass | `/implement-view-cross-company` | SoftDelete **không** IgnoreQueryFilters · cross-tenant → 404 · real-data XCO deny toast |
| SHARE | **tenant_keep** | đọc/ghi soft existing `rmms_road_assets` · **không** bảng mới | `/implement-shared-table` | migration **không** |
| Offline | **no fake success** · screen **vẫn mở** | GET fail → demo SSOT + toast · DELETE fail → toast · giữ row · **cấm** queue soft-delete P1 (optional P2) | offline-sync | **cấm** fake 200 · **cấm** ship mock-only khi BFF OK (`GAP-MOB-REAL-02`) |
| GPS | **n/a** | **không** pin / device GPS trên adjust list P1 | — | control-hint GPS n/a |
| Camera | **n/a** | media OUT P1 (MEDIA-01) | — | sibling collect/AI |
| Push | **n/a** | — | — | — |
| Store | **N/A** signup | no account create/delete trên adjust | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP listing · family `1` **cấm** iPad claim |
| Step 4b | **N/A** | reuse GetList + SoftDelete | — | **cấm** `/new-endpoint` · **cấm** migration |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-30T23:42:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — existing `RoadAssetEntity` / `rmms_road_assets` |
| API shape | `RoadAssetDto` list read + soft delete by id |
| Soft delete | BE `IsActive=false` · **cấm** hard delete DB |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-30 / `task_39b7c7aa`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/asset/road-assets` (+ search) | BE `GetList` + Mobile.Bff proxy | **Giữ** · app path `asset/road-assets?search=&page=&pageSize=` |
| `DELETE …/asset/road-assets/{id}` | BE `SoftDeleteAsync` · `IsActive=false` | **Giữ** · soft only · toast Code |
| `PUT …/asset/road-assets/{id}` | domain live | **OUT** UI P1 · owner domain / P2 |
| `RoadAssetDto` Code/Type/Route/Km | yes | bind §B · typeLabel client |
| Native `#sc-asset-adjust` | **MISSING** (hub tile → toast `asset.tile.adjust`) | **DELTA UI** dual adjust kit · wire hub toast → push |
| `AssetAdjustController` / `api/v1/asset-adjust` | **không** | **Cấm** tạo |
| Sibling asset-detail | pipeline / confirmed SA | Sửa = reuse nav · **cấm** start |
| Demo parity dual | Design closed | fallback SSOT rows UI-only |

### Demo / fallback SSOT (UI only khi GET fail — **không** fake GET/DELETE 200)

| Field | Value |
|-------|-------|
| Title | Cập nhật / bớt |
| Search | Tìm mã TS cần sửa hoặc bớt… (dual) |
| Row1 | TS-20260810-014 · Cống ngang · QL.1 · Km 1556+000 |
| Row2 (iOS sample) | TS-20260809-088 · Biển P.127 · HCM · Biển báo |
| Modal | Bớt tài sản khỏi sổ? · Bớt khỏi sổ · Giữ lại |
| Toast ok | Đã bớt tài sản · TS-20260810-014 |
| Back | Tài sản → hub |

Demo row count (iOS 2 / Android 1) = sample only · live = GET list (`GAP-MOB-ASSET-ADJUST-ROW-01`).

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-asset-adjust` screen | topbar · search · list · Sửa · Bớt · toast · empty | query RoadAsset list · nav local · demo fallback | `RoadAsset` |
| `#md-asset-remove` modal | title · body · confirm · cancel | local chrome · DELETE write | `RoadAsset` soft |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tài sản | — | local | `go('asset-hub')` · iOS text+chevron · Android icon-only |
| title | Cập nhật / bớt | — | fixed | dual same |
| search | Tìm mã TS cần sửa hoặc bớt… | query `search` | GET list | debounce · SSOT dài dual |
| rowAsset | Code · Type | `Code` · `Type` + typeLabel | GET list | title ≥16 |
| rowSub | Route · Km | `Route` · `KmFrom` | GET list | sub 13 |
| btnEdit | Sửa | `Id` | local nav | `go('asset-detail')` · **cấm** PUT |
| btnRemove | Bớt | `Id` · `Code` cache | local | open `#md-asset-remove` |
| mdTitle | Bớt tài sản khỏi sổ? | — | fixed | 17 |
| mdBody | Ẩn khỏi danh sách hiện trường… | — | fixed | demo SSOT |
| mdConfirm | Bớt khỏi sổ | `Id` | DELETE soft | toast Code · remove row |
| mdCancel | Giữ lại | — | local | close modal |
| empty | (không có TS) | — | GET empty | EmptyState |
| toastOk | Đã bớt tài sản · {Code} | cached `Code` | after DELETE 200 | `LinmToast` |
| toastErr | (lỗi mạng) | — | after GET/DELETE fail | **cấm** fake ok |

**Cấm** invent DTO / `asset-adjust` aggregate / Finance assets path.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub tile `#i-minus` | toast → **wire** push `#sc-asset-adjust` | `asset-adjust` (this) · parent `asset-hub` |
| Back | `go('asset-hub')` / pop | `asset-hub` reuse |
| Appear / search | GET list(+search) | same slug (`GAP-MOB-ACT-07`) |
| Sửa | `go('asset-detail')` + Id · **không** start · **không** PUT | `asset-detail` reuse |
| Bớt | open `#md-asset-remove` | same slug |
| Confirm Bớt khỏi sổ | DELETE soft → toast Code · remove row | same slug |
| Giữ lại / fail | close / toast · giữ row | same slug |
| Network fail | demo SSOT · screen mở · toast | same slug |

**Cấm** nav stub giả màn sibling · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog` / `window.alert` / system `confirm()`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-ASSET-ADJUST-NAV-01 | Dev ship: hub toast → push adjust |
| GAP-MOB-ASSET-ADJUST-SCR-01 | Dev ship: full `#sc-asset-adjust` dual kit + modal |
| GAP-MOB-ASSET-ADJUST-SEARCH-01 | **closed** PO+Design · placeholder SSOT dài dual |
| GAP-MOB-ASSET-ADJUST-LIST-01 | GET list + search bind §B · fail → demo · **cấm** fake 200 |
| GAP-MOB-ASSET-ADJUST-ROW-01 | **closed** · live GET · demo row count = fallback only |
| GAP-MOB-ASSET-ADJUST-EDIT-01 | **closed** · Sửa = nav detail · PUT UI **OUT** P1 |
| GAP-MOB-ASSET-ADJUST-DEL-01 | DELETE soft + toast Code · **cấm** hard delete |
| GAP-MOB-ASSET-ADJUST-MEDIA-01 | **closed OUT** P1 · **không** invent media |
| GAP-MOB-ASSET-ADJUST-PACK-01 | **closed** · packKind=`screen` |
| GAP-MOB-ACT-01/02 | **none** — 1 screen · modal cùng slug · không gộp collect/AI/list/detail form |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw NavBar/TabView/system alert |
| GAP-MOB-ACT-06 | detail / collect / AI · **cấm** auto start |
| GAP-MOB-ACT-07 | GET/search/modal/DELETE/toast cùng slug · **không** enqueue · PUT **không** enqueue |
| GAP-MOB-BFF-01 | **không** hàng mới — GetList + SoftDelete live đủ |
| GAP-MOB-REAL-01/02 | §B khớp BFF · **cấm** ship hardcode khi live OK |
| GAP-TAB-01 | `tabs: none` · shell `home` · **cấm** invent tab/segment |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/AssetAdjust/*` (hoặc `Asset/Adjust/*`) | `presentation/feature/assetadjust/*` |
| Use case | `FetchRoadAssetListUseCase` · `SoftDeleteRoadAssetUseCase` (reuse/extend list repo) | same |
| Repo | extend `AssetRepository` → GET list + DELETE soft | same |
| Mapper | reuse `AssetDtoMapper.typeLabel` + list bind | same |
| State | list · search · loading · modal · toast · usingDemoFallback · removingId | same |
| DI | `AppContainer` wire VM | Hilt ViewModel |
| Parent | `AssetHub` tile → navigate AssetAdjust (thay toast) | same |
| Sibling | Sửa → AssetDetail(id) reuse | same |
| Shell | push từ hub · `LinmTabBar` **giữ** tab `home` · **không** segment | same |
| Offline | appear: try GET → fail → demo SSOT · DELETE fail toast giữ row | same |
| Demo SSOT | `AssetAdjustCopy.demo` (iOS 2 / Android 1 sample) | same |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · hardcode production thay live khi GET OK.

---

## VERIFY GATE (roleOnly=`sa`)

| Check | Result |
|-------|--------|
| be/solution-discovery.md | **PASS** · solution_confirm approve · BFF map analy |
| Design + control-hint + real-data §B | **PASS** · read · **cấm** invent API / control |
| be_repo_confirm | **PASS** · `Linm.RMMS.WebService` · Asset · **cấm ERP.*** |
| Live verify GetList + SoftDelete + RoadAssetDto | **PASS** (analy + BE cite `RoadAssetsController`) |
| Step 4b / migration | **N/A** — reuse GetList + SoftDelete |
| yarn build / e2e / start:std | **SKIP** (cấm role SA) |
| Write MFE / native | **SKIP** (cấm role SA) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `asset-adjust` / **`screen`** |
| solution_confirm | **approve** |
| BFF | `GET asset/road-assets?search=&page=&pageSize=` · `DELETE asset/road-assets/{id}` soft · PUT UI **OUT** · Step 4b **N/A** |
| Real-data | `_data-analy/asset-adjust-real-data.md` §A+§B |
| GPS / Camera | **n/a** P1 |
| Offline | GET fail → demo + toast · DELETE fail → toast · **cấm** fake 200 |
| Tasks đề xuất | `T-IOS-ASSET-ADJUST` · `T-AND-ASSET-ADJUST` · `T-HUB-WIRE` (toast→push) · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | hub → push adjust · Sửa = detail reuse · back hub |
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
| generatedAt | `2026-08-30T23:42:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-solution-20260830 |
| priorControlHintHash | sha256:asset-adjust-control-hint-20260830 |
| priorRealDataHash | sha256:asset-adjust-real-data-20260830 |
| priorDesignHash | sha256:asset-adjust-design-20260830 |
| priorPoHash | sha256:asset-adjust-po-requirement-20260830 |
| bffContentHash | sha256:asset-road-assets-list-put-delete-proxy-20260830 |
| actionTreeHash | sha256:asset-adjust-action-tree-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-adjust-20260830 |
| ctxContentHash | sha256:asset-adjust-ctx-20260830 |
| taskId | `task_39b7c7aa` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
