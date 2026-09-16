# SA — Solution — asset-detail (mobile · Chi tiết tài sản)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| title | [Mobile] [Tài sản] -> Chi tiết tài sản |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_ce65a25c`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-ASSET-DET-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** push `#sc-asset-detail` `DES-MOB-ASSET-DETAIL` · **cấm** sheet chrome / Kind A–G web / Lin* grid / Report / `mfeStdUrl` |
| domain | **Asset** · `RoadAssetsController.GetById` · `RoadAssetDto` · **cấm** invent `api/v1/asset-detail` / `AssetDetailController` / Finance `api/v1/assets` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-asset-detail` · `ui/review/demo-parity.md` · `task_039c59ba` · designContentHash `sha256:asset-detail-design-20260830` |
| prior · po | **confirmed** · `po/requirement.md` · `task_df4700bc` · poContentHash `sha256:asset-detail-po-requirement-20260830` |
| prior · data_analy | **confirmed** · `_data-analy/asset-detail-control-hint.md` · `asset-detail-bff-endpoints.md` · `asset-detail-action-tree.md` · `asset-detail-real-data.md` · contentHash `sha256:asset-detail-control-hint-20260830` · realDataHash `sha256:asset-detail-real-data-20260830` · bffContentHash `sha256:asset-detail-bff-20260830` · actionTreeHash `sha256:asset-detail-action-tree-20260830` |
| prior · list SA | `specs/asset/be/solution-discovery-mobile.md` · list GET only · detail GET/{id} was P2 → **this pack** owns GetById |
| autoApprove | **ON** |
| e2eQa | ON — queued QA · `yarn e2e-qa-mobile` · **cấm** role SA chạy e2e / `yarn start:std` / `mfeStdUrl` |
| versionGate | `rechecked` |
| requestSource | run packet `task_ce65a25c` · `/agent-qldb-workflow-mobile` · roleOnly=`sa` · `/agent-sa-mobile` |
| taskId | `task_ce65a25c` |
| confirmedBy | agent autoApprove · `task_ce65a25c` |
| updatedAt | `2026-08-30T21:35:00.000Z` |
| thisAction | **Chi tiết tài sản** `#sc-asset-detail` only · entry list row / adjust «Sửa» · GET by id · bind hero+rows · CTA gis-map · **cấm** gộp list / collect / adjust / AI / PUT/DELETE |

**Cấm:** invent `api/v1/asset-detail` / `AssetDetailController` · fork `RoadAssetDto` mobile-only · invent Finance `api/v1/assets` · app `:5101` · DbContext trên Mobile.Bff · parent JSON · ERP.* · `mfeStdUrl` / `yarn start:std` · `localhost` / LAN IP trong store listing (`GAP-SA-STORE-01`) · claim iPad family `1` · gộp sibling (`GAP-MOB-ACT-01/02`) · start `gis-map` / adjust (`GAP-MOB-ACT-06`) · enqueue GET / chrome / CTA map (`GAP-MOB-ACT-07`) · re-scan demo · Write MFE/native ở role SA · fake TS-* / coords khi live OK · request device location trên detail · PUT/DELETE · system `UIAlert` / `AlertDialog`.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · ios networking · android api-client · offline-sync (detail = **no write queue** · GET fail → demo SSOT).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Asset · `RoadAssetsController` · table `rmms_road_assets` · DOMAIN-MAP Asset |
| API downstream | **chỉ** `GET api/v1/asset/road-assets/{id}` |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` · path `asset/*` |
| App | iOS `ApiClient` · Android Retrofit/`ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Type label | Client `AssetDtoMapper.typeLabel(Type)` — **reuse list** · unknown → raw `Type` · **không** lookup P1 |
| Persist | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | list search · collect POST · adjust PUT/DELETE · AI · hub · embed map · init-data · Finance assets |

### Route decision

| | Choice |
|--|--------|
| Slug | `asset-detail` → **screen** · 1 màn `#sc-asset-detail` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 | **chỉ** `GET asset/road-assets/{id}` (Bearer) |
| Nav siblings | `go('asset-list')` · `go('gis-map')` — **không** API trên slug này |
| Step 4b | **N/A** — reuse GetById live + XCO · **cấm** `/new-endpoint` |
| Rationale | Live Asset GetById đủ hero+rows · BFF proxy · **cấm** invent asset-detail path |

---

## BFF / API contract (từ analy — **cấm** invent)

Nguồn: `_data-analy/asset-detail-bff-endpoints.md` · `asset-detail-real-data.md` §B · peer web SA API-02 · list mobile SA · Design confirmed.

| Action / zone | Method | App `{BffPrefix}` path | Downstream | P1 |
|---------------|--------|------------------------|------------|-----|
| Load chi tiết | GET | `asset/road-assets/{id}` | `RoadAssetsController.GetById` · XCO | **yes** · nav `Id` |
| Nav Ghim bản đồ | — | — | local | `go('gis-map')` pass Id/Lat/Lng · toast P1 nếu sibling chưa ship |
| Nav back list | — | — | local | `go('asset-list')` |
| Empty 404 | — | — | local | `LinmEmptyChrome` · back list |
| Toast err | — | — | local | GET fail · demo SSOT · **cấm** fake 200 |

### Response shape (live)

`ApiResponse<RoadAssetDto>` → `data` = `RoadAssetDto`:

| DTO field | Detail zone P1 |
|-----------|----------------|
| `Id` | route param / nav key |
| `Code` | codeValue hero |
| `Type` | rowType + client `typeLabel` |
| `Route` · `KmFrom` · (`KmTo`?) | rowRouteKm |
| `Lat` · `Lng` | rowGps · ẩn nếu null · dual parity |
| `Name` · `Status` · `Qr` · `Quantity` · `UnitCode` · `Note` · `Source` | **OUT** P1 detail UI (optional P2) |
| `IsActive` · timestamps | **không** bind P1 |

**Cấm** app fork DTO khác BFF table · **cấm** invent path `asset-detail`.

### Display rules (real-data §B + Design)

| Line | Rule |
|------|------|
| code | `Code` raw (TS-*) |
| type | `typeLabel(Type)` · unknown → raw `Type` · **không** GET lookup |
| routeKm | `"{Route} · Km {KmFrom}"` · optional append `KmTo` nếu có |
| gps | khi `Lat`/`Lng` có → `"lat, lng"` · **ẩn** nếu null · **parity dual** · **không** request location |
| pin map | local nav · pass Id + Lat/Lng nếu có |

### OUT slug `asset-detail` P1 (sibling / web)

| Method | Path | Owner |
|--------|------|-------|
| GET | `asset/road-assets` | `asset` list |
| GET | `asset/road-assets/init-data` | form / web |
| GET | `asset/road-assets/summary-by-type` | dashboard |
| POST | `asset/road-assets` | collect / web |
| PUT | `asset/road-assets/{id}` | `asset-adjust` |
| DELETE | `asset/road-assets/{id}` | `asset-adjust` |
| GET | `integration/asset-types/search` | **không** P1 detail |
| Web | `web-bff/api/v1/asset/**` | web · mobile = `mobile-bff` proxy |

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `asset.road-assets.read` (GetById) | GET by id | **reuse** · BE `[RequirePermission]` TODO debt P1 OK |
| create / update / delete | OUT slug | **cấm** gọi |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `AssetDetailController` local trên BFF |
| BE HTTP | `RoadAssetsController.GetById` | live · XCO 403/404 |
| Response DTO | `ApiResponse<RoadAssetDto>` | scalars flat |
| HTTP app | `FetchRoadAssetByIdUseCase` (hoặc extend `AssetRepository`) | **cấm** URLSession/OkHttp trong View · **cấm** VM→ApiClient trực tiếp nếu repo pattern đã có |
| Token | Keychain / EncryptedSharedPreferences | Bearer + `X-Company-Id` + `X-Timezone` interceptor |
| Type label | `AssetDtoMapper.typeLabel` | **reuse list** · **cấm** invent second mapper |
| Kit | `LinmTopBar` · Text hero · `LinmListRow` · `LinmPrimaryButton` · `LinmToast` · `LinmEmptyChrome` · `LinmTabBar` shell | Design `kit_missing_confirm` **N/A** · **cấm** raw `NavigationBar` / M3 bar / `TabView` |
| Persist | no-parent-json-field | detail **không** ghi inventory JSON · **không** offline write queue |
| Tab | shell tab `home` selected · pack `tabs: none` | **cấm** invent / segment trên detail (`GAP-TAB-01`) |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** DATE form · timestamps audit không bind P1 | `/review-timezone-implement` | header `X-Timezone` interceptor chung |
| XCO | **xco_get_only** | **API** `GET …/road-assets/{id}` | `/implement-view-cross-company` | **Đã có** BE `GetByIdAsync` · IgnoreQueryFilters + `allowed_company_ids` · 403/404 · app **cấm** bypass |
| SHARE | **tenant_keep** | đọc existing `rmms_road_assets` · **không** bảng mới | `/implement-shared-table` | migration **không** |
| Offline | **no write queue** · screen **vẫn mở** | GET fail → demo SSOT TS-20260810-014 · 404 → EmptyChrome · toast lỗi | offline-sync | **cấm** block screen · **cấm** fake 200 · **cấm** ship mock-only khi BFF OK (`GAP-MOB-REAL-02`) |
| GPS | **display only** | bind `Lat`/`Lng` · ẩn null · **cấm** device GPS request · **cấm** fake coords live | — | dual parity (GAP-MOB-ASSET-DET-GPS-01 **closed**) |
| Camera | **n/a** | — | — | sibling collect/AI |
| Push | **n/a** | — | — | — |
| Store | **N/A** signup | no account create/delete trên detail | GAP-SA-STORE-01 | **cấm** `localhost` / LAN IP listing · family `1` **cấm** iPad claim |
| Step 4b | **N/A** | reuse GetById | — | **cấm** `/new-endpoint` · **cấm** migration |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-30T21:35:00.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — existing `RoadAssetEntity` / `rmms_road_assets` |
| API shape | `RoadAssetDto` scalars (read-only P1) |
| Migration | **không** `Schema_*` · **không** `/database-migration` |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (audit 2026-08-30 / `task_ce65a25c`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/asset/road-assets/{id}` | BE `RoadAssetsController.GetById` + XCO + Mobile.Bff proxy | **Giữ** · app path `asset/road-assets/{id}` |
| `RoadAssetDto` Code/Type/Route/Km/Lat/Lng | yes | bind §B · typeLabel client |
| Native `#sc-asset-detail` | **MISSING** (list row → toast `asset.list.toast.detail`) | **DELTA UI** dual detail kit · wire list toast → push + Id |
| `AssetDetailController` / `api/v1/asset-detail` | **không** | **Cấm** tạo |
| PUT/DELETE | live domain | **OUT** — owner `asset-adjust` |
| Sibling gis-map | `task_23d7eba0` pending_confirm | nav reuse · toast P1 nếu chưa ship · **cấm** auto start |
| Demo parity dual | Design closed | fallback SSOT TS-20260810-014 |

### Demo / fallback SSOT (UI only khi GET fail — **không** fake GET 200)

| Field | Value |
|-------|-------|
| Title iOS | Chi tiết |
| Title Android | Chi tiết tài sản |
| Code | TS-20260810-014 |
| Loại | Cống |
| Tuyến · lý trình | QL.1 · Km 1556+000 |
| Tọa độ | 11.5300, 109.0040 (khi có Lat/Lng · ẩn nếu null · demo coords **chỉ** offline) |
| CTA | Ghim trên bản đồ |
| Back | Tài sản |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-asset-detail` screen | topbar · hero code · rows · CTA · toast · empty | query RoadAsset by id · nav local · demo fallback | `RoadAsset` |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tài sản | — | local | `go('asset-list')` · iOS text+chevron · Android icon-only |
| title | Chi tiết / Chi tiết tài sản | — | fixed | iOS «Chi tiết» · Android «Chi tiết tài sản» (GAP-MOB-ASSET-DET-TITLE-01 **closed**) |
| codeLabel | Mã TS | — | fixed | caption **13** |
| codeValue | TS-* | `Code` | GET by id | hero iOS **28** · Android **24** bold |
| rowType | Loại | `Type` + `typeLabel` | GET + derived | reuse list mapper |
| rowRouteKm | Tuyến · lý trình | `Route` · `KmFrom` · (`KmTo`) | GET | `"{Route} · Km {KmFrom}"` |
| rowGps | Tọa độ | `Lat` · `Lng` | GET optional | ẩn nếu null · dual |
| btnPinMap | Ghim trên bản đồ | — | local nav | `go('gis-map')` pass Id/coords |
| empty404 | (không tìm thấy) | — | 404 | `LinmEmptyChrome` · back list |
| toastErr | (lỗi mạng) | — | after GET fail | `LinmToast` · **cấm** fake ok |

**Cấm** invent DTO / `asset-detail` aggregate / Finance assets path.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| List `row-asset-*` | toast → **wire** push `#sc-asset-detail` + `Id` | `asset-detail` (this) · parent `asset` |
| Adjust «Sửa» | `go('asset-detail')` + `Id` · **không** gộp PUT/DELETE | this · adjust stays owner write |
| Back | `go('asset-list')` | `asset` reuse |
| Ghim trên bản đồ | `go('gis-map')` pass Id/Lat/Lng · toast **Ghim trên bản đồ** nếu sibling chưa ship | `gis-map` shared · **cấm** start |
| Appear load | GET by id | same slug (`GAP-MOB-ACT-07`) |
| 404 | EmptyChrome · back list | same slug |
| Network fail | demo SSOT · screen mở · toast | same slug |

**Cấm** nav stub giả màn sibling · **cấm** start `pending_confirm` · **cấm** `UIAlert` / `AlertDialog` / `window.alert`.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-ASSET-DET-NAV-01 | Dev ship: list toast → push detail + Id |
| GAP-MOB-ASSET-DET-SCR-01 | Dev ship: full `#sc-asset-detail` dual kit |
| GAP-MOB-ASSET-DET-DATA-01 | GET by id bind §B · fail → demo · **cấm** fake 200 |
| GAP-MOB-ASSET-DET-MAP-01 | CTA → `gis-map` nav · **không** API · **không** embed |
| GAP-MOB-ASSET-DET-TITLE-01 | **closed** PO+Design · iOS «Chi tiết» · Android «Chi tiết tài sản» |
| GAP-MOB-ASSET-DET-GPS-01 | **closed** Design · dual row khi có Lat/Lng · ẩn null · **không** device GPS |
| GAP-MOB-ASSET-DET-TYPE-01 | **closed** · reuse `AssetDtoMapper.typeLabel` · **không** lookup |
| GAP-MOB-ASSET-DET-PACK-01 | **closed** · packKind=`screen` |
| GAP-MOB-ACT-01/02 | **none** — 1 screen · không child form/sheet |
| GAP-MOB-ACT-05 | Kit reuse map · **cấm** raw NavBar/TabView |
| GAP-MOB-ACT-06 | `gis-map` `task_23d7eba0` · adjust pipeline · **cấm** auto start |
| GAP-MOB-ACT-07 | GET / chrome / CTA map cùng slug · **không** enqueue · PUT/DELETE **không** enqueue từ detail |
| GAP-MOB-BFF-01 | **không** hàng mới — GetById live đủ |
| GAP-MOB-REAL-01/02 | §B khớp BFF · **cấm** ship hardcode khi live OK |
| GAP-SA-STORE-01 | **cấm** localhost/LAN listing · family `1` **cấm** iPad |
| Step 4b / T-BE-* | **N/A** |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/AssetDetail/*` (hoặc `Asset/Detail/*`) | `presentation/feature/assetdetail/*` |
| Use case | `FetchRoadAssetByIdUseCase` | same |
| Repo | extend `AssetRepository` → `GET …/road-assets/{id}` | same |
| Mapper | reuse `AssetDtoMapper.typeLabel` + detail bind | same |
| State | detail · loading · toast · usingDemoFallback · gpsVisible | same |
| DI | `AppContainer` wire VM | Hilt ViewModel |
| Parent | `AssetList` row tap → navigate AssetDetail(id) (thay toast) | same |
| Shell | push từ list/adjust · `LinmTabBar` **giữ** tab `home` · **không** segment | same |
| Offline | appear: try GET → fail → demo TS-20260810-014 · 404 Empty | same |
| Demo SSOT | `AssetDetailCopy.demo` (1 row) | same |

**Cấm** WebView HTML · watermark Gói · device label · «Có mạng» · hardcode production thay live khi GET OK.

---

## VERIFY GATE (roleOnly=`sa`)

| Check | Result |
|-------|--------|
| be/solution-discovery.md | **PASS** · solution_confirm approve · BFF map analy |
| Design + control-hint + real-data §B | **PASS** · read · **cấm** invent API / control |
| be_repo_confirm | **PASS** · `Linm.RMMS.WebService` · Asset · **cấm ERP.*** |
| Live verify GetById + RoadAssetDto + XCO | **PASS** (analy + peer SA cite) |
| Step 4b / migration | **N/A** — reuse GetById |
| yarn build / e2e / start:std | **SKIP** (cấm role SA) |
| Write MFE / native | **SKIP** (cấm role SA) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `asset-detail` / **`screen`** |
| solution_confirm | **approve** |
| BFF | **chỉ** `GET asset/road-assets/{id}` · XCO giữ · Step 4b **N/A** |
| Real-data | `_data-analy/asset-detail-real-data.md` §A+§B |
| GPS | display `Lat`/`Lng` · ẩn null · dual · **không** device GPS |
| Tasks đề xuất | `T-IOS-ASSET-DETAIL` · `T-AND-ASSET-DETAIL` · `T-LIST-WIRE` (toast→push) · `T-KIT` **n/a** · `T-BE` **n/a** |
| Kit | reuse map dual — **không** `implement_kit` |
| Nav | list/adjust → push detail · map = reuse nav · back list |
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
| generatedAt | `2026-08-30T21:35:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-solution-20260830 |
| priorControlHintHash | sha256:asset-detail-control-hint-20260830 |
| priorRealDataHash | sha256:asset-detail-real-data-20260830 |
| priorDesignHash | sha256:asset-detail-design-20260830 |
| priorPoHash | sha256:asset-detail-po-requirement-20260830 |
| bffContentHash | sha256:asset-detail-bff-20260830 |
| demoContentHash | sha256:mobile-p1-sc-asset-detail-20260830 |
| taskId | `task_ce65a25c` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
