# SA — Solution — asset-kcht-dashboard (Dashboard Hạng mục KCHT)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_97fd976e`)

| Field | Value |
|-------|-------|
| feature | `asset-kcht-dashboard` |
| title | [SA] Dashboard Hạng mục KCHT |
| this role | `sa` · `/agent-sa` |
| packKind | **`dashboard`** (Kind **E** hub tiles · count cards) — **cấm** Kind B list/CRUD |
| changeScope | `new_page` |
| status | `confirmed` |
| design_confirm | **approve** (`task_ac761cee`) |
| solution_confirm | **approve** (autoApprove ON · `task_97fd976e`) |
| domain | **Asset** (primary aggregate) × **Integration** (master reads) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `/so-ts/hang-muc` |
| dashboardHost | `D:/MFE-CORE/Linm.Web.Dashboard` · `@linm/dashboard` · `/dashboard` · :8502 |
| widgetKey | `@linm/rmms-asset-kcht-widget` · Asset :9201 |
| prior · design | **confirmed** · `ui/design.md` · prototype + reviewUrl · `task_ac761cee` |
| prior · po | **confirmed** · `po/requirement.md` · `task_bd941b19` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/asset-kcht-dashboard-control-hint.md` · `asset-kcht-dashboard-real-data.md` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn start:std` + docker + `yarn e2e-qa` |
| versionGate | `keep_current` |
| taskId | `task_97fd976e` |
| confirmedBy | agent autoApprove · `task_97fd976e` |
| updatedAt | `2026-08-23T12:00:00.000Z` |

**Cấm:** invent `api/v1/dashboard/kcht` · ERP.* · `Domains/Master` · bind API trên `@linm/dashboard` · N+1 list pageSize lớn thay aggregate · `LinCatalogDataGrid` / Zone F schema · `ParcelComponent` Report consumer · copy 40 ô vào Report KPI slug `dashboard`.

Standards: api-endpoint · bff-api-structure · company-field · ssot-no-duplicate · sa-implement-gates · DOMAIN-MAP Asset.

---

## 1. Ownership (DOMAIN-MAP)

| Layer | Repo / path |
|-------|-------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · route `/so-ts/hang-muc` · widget entry `src/widgets/kchtHangMucDashboardWidgetEntry.tsx` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API (delta) | `api/src/RMMS.Service.Api/Domains/Asset/` · `RoadAssetsController` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs` → `rmms_road_assets` |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` |
| Integration reads | `Domains/Integration/` · `AssetTypesController` · `RoadRoutesController` |
| Asset reads | `Domains/Asset/` · `PavementSectionsController` |
| Dashboard host | `D:/MFE-CORE/Linm.Web.Dashboard` · `WIDGET_REGISTRY` · **không** API trên host |

**DOMAIN-MAP:** feature slug `asset-kcht-dashboard` → domain **Asset** (`api/v1/asset` · BFF `web-bff/api/v1/asset`). Master label/icon đọc **Integration** (`api/v1/integration/asset-types`). Tuyến count đọc **Integration** (`integration/road-routes`). Đoạn count đọc **Asset** (`asset/pavement-sections`).

### Architecture

| Layer | Choice |
|-------|--------|
| Feature Kind | **E** — hub 4×10 count cards · read-only navigate |
| Domain prefix (delta) | `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| New endpoint | `GET …/summary-by-type` — group `Type` tenant · `IsActive=true` |
| Existing reads | `GET integration/road-routes?pageSize=1` · `GET asset/pavement-sections?pageSize=1` · optional `GET integration/asset-types` |
| Persist | **không** bảng mới · aggregate trên `rmms_road_assets.Type` |
| BFF | **proxy only** (passthrough) |
| Auth perm | `asset.road-assets.read` — BE `[RequirePermission]` stub TODO CommonLib |
| Tenant | `TenantEntity` + `X-Company-Id` |
| Widget | single-spa `{ bootstrap, mount, unmount }` · host **chỉ** `domElement` |

### Route decision

| | Choice |
|--|--------|
| Slug | `asset-kcht-dashboard` → Kind E hub · **≠** Report slug `dashboard` |
| FE standalone | `/so-ts/hang-muc` · H1 «Hạng Mục Kết Cấu Hạ Tầng» |
| FE widget | `@linm/rmms-asset-kcht-widget` · body cards only · **cấm** H1 trùng registry |
| API delta | `GET api/v1/asset/road-assets/summary-by-type` |
| BFF app path | `GET web-bff/api/v1/asset/road-assets/summary-by-type` |
| Step 4b | **`/new-endpoint`** on Asset domain · **cấm** `/database-migration` (no schema change P1) |
| Rationale | Một aggregate thay N+1 list · counts tuyến/đoạn reuse paged `totalCount` |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| Count by type | `RoadAssetsController.GetSummaryByType` | **cấm** invent `api/v1/dashboard/*` |
| Road routes total | `RoadRoutesController` list paged | `page=1&pageSize=1` → `totalCount` |
| Pavement sections total | `PavementSectionsController` list paged | same pattern |
| Asset type labels | `AssetTypesController` | P1 FE dùng static `KCHT_TILES` · API optional P2 refresh icon |
| Tile order | `kchtTileConfig.ts` `KCHT_TILES` | 40 ô screenshot SSOT · **cấm** derive order từ API |
| HTTP FE | `kchtDashboardService.ts` | prefix BFF `/asset/…` · `/integration/…` |

---

## 2. Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_na** | aggregate + paged totals — **không** DATE filter UI | header `X-Timezone` giữ interceptor chung |
| XCO | **xco_na** | hub read-only · **không** GET/{id} form | tenant filter server aggregate |
| SHARE | **share_a** | `rmms_road_assets` shared tenant scope | **cấm** cross-company count |
| Offline | **n/a** | fail → count 0 · skeleton → empty | real-data §D |
| Migration | **n/a** | no new table P1 | index `(CompanyCode, Type, IsActive)` optional perf P2 |

AskQuestion (autoApprove=ON · không chờ board): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_a` · `solution_confirm=approve` · `2026-08-23T12:00:00.000Z`.

---

## 3. Form data analysis (Kind E — REQUIRED)

Hub tile — **không** form fields · **không** LinCatalogDataGrid.

| Screen | Fields (UI) | Source type | Entity |
|--------|-------------|-------------|--------|
| Standalone `/so-ts/hang-muc` | H1 + 40 cards (label · icon · count) | query aggregate + static tile config | **không** RMMS form entity |
| Widget embed | 40 cards only | same | **không** props từ host |

### Field map (ui → dto → display)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| tileLabel | Nhãn ô (40 SSOT) | — | static `KCHT_TILES` | **cấm** bịa ô ngoài screenshot |
| tileCount | Số lượng | `count` | GET `summary-by-type` map `type` | format `vi-VN` · gap = 0 |
| roadRouteCount | Thông tin tuyến | `totalCount` | GET `integration/road-routes?pageSize=1` | ô #1 |
| pavementCount | Thông tin đoạn tuyến | `totalCount` | GET `asset/pavement-sections?pageSize=1` | ô #2 |
| opsTiles | 3 ô report | — | static count **0** P1 | navigate `/bao-cao/tngt` |
| gapClick | GAP-AKD-01/02 | — | toast | «Hạng mục chưa có danh mục…» · **cấm** navigate |

**Cấm** invent DTO hub aggregate ngoài `RoadAssetSummaryByTypeResult`.

---

## 4. API catalog

Base app FE: `web-bff/api/v1`. Path **không** lặp prefix trong `apiClient`.

### API-01: GET `/api/v1/asset/road-assets/summary-by-type` · **DELTA**

| | |
|--|--|
| Purpose | Aggregate count `RoadAsset` group `Type` (tenant · active) |
| Permission | `asset.road-assets.read` (stub) |
| Tenant | `X-Company-Id` · `IsActive=true` |
| Request | — |
| Response | `RoadAssetSummaryByTypeResult` `{ items: [{ type, count }], totalCount }` |
| Errors | 200 empty `items` |
| UI surfaces | 38 ô `asset-type` count |
| BFF | `web-bff/api/v1/asset/road-assets/summary-by-type` proxy-only |
| FE bind | `kchtDashboardService.getSummaryByType()` → `Record<type, count>` |
| Migration | **none** (read aggregate) |
| Live | `RoadAssetsController.GetSummaryByType` · `RoadAssetService.GetSummaryByTypeAsync` |

### API-02: GET `/api/v1/integration/road-routes` (existing)

| | |
|--|--|
| Purpose | Total count ô «Thông tin tuyến» |
| Request | `page=1&pageSize=1` |
| Response | paged `{ totalCount }` |
| UI | tile #1 |
| Live | `RoadRoutesController` |

### API-03: GET `/api/v1/asset/pavement-sections` (existing)

| | |
|--|--|
| Purpose | Total count ô «Thông tin đoạn tuyến» |
| Request | `page=1&pageSize=1` |
| Response | paged `{ totalCount }` |
| UI | tile #2 |
| Live | `PavementSectionsController` |

### API-04: GET `/api/v1/integration/asset-types` (existing · optional P1)

| | |
|--|--|
| Purpose | Label/icon refresh P2 |
| Request | `pageSize=200` |
| P1 | FE **không bắt buộc** — static `KCHT_TILES` + FA icons |
| Live | `AssetTypesController` |

### FormType pack (`dashboard` / Kind E)

| Surface | Pattern | Endpoint |
|---------|---------|----------|
| Hub standalone | Kind E A + GRID | API-01 + API-02 + API-03 |
| Widget embed | GRID only | same |
| Card click TS | navigate | **client** `/so-ts?type={code}` |
| Card click tuyến | navigate | **client** `/master/road-route` |
| Card click đoạn | navigate | **client** `/so-ts/pl-mat-duong` |
| Card click ops | navigate | **client** `/bao-cao/tngt` |
| CRUD / form | **OUT** | — |

**Cấm** T-UI-LIST / LinCatalogUiSchemaEditorModal / Zone F on this pack.

---

## 5. DTO (delta)

```csharp
public sealed class RoadAssetTypeCountDto
{
    public string Type { get; set; } = string.Empty;
    public int Count { get; set; }
}

public sealed class RoadAssetSummaryByTypeResult
{
    public IReadOnlyList<RoadAssetTypeCountDto> Items { get; set; } = Array.Empty<RoadAssetTypeCountDto>();
    public int TotalCount { get; set; }
}
```

JSON camelCase: `{ items: [{ type, count }], totalCount }`.

---

## 6. Widget host contract (SA confirm Design)

| | |
|--|--|
| Registry | `{ id: 'rmms-kcht-hang-muc', title: 'Hạng Mục Kết Cấu Hạ Tầng', parcelName: '@linm/rmms-asset-kcht-widget', cols: 3 }` |
| Export | `{ bootstrap, mount, unmount }` — `singleSpaReact` |
| Webpack | `linm-rmms-asset-kcht-widget.js` · entry riêng · **cấm** load main `@linm/rmms-asset` vào slot |
| Import map | `"@linm/rmms-asset-kcht-widget": "//localhost:9201/linm-rmms-asset-kcht-widget.js"` (GAP-AKD-WIDGET-MAP) |
| CSS host | `.widgetBody` stretch khi `parcelName` set (GAP-AKD-WIDGET-CSS) |
| customProps | **chỉ** `domElement` — widget tự gọi BFF |

Dev surfaces: Asset MFE + `Linm.Web.Dashboard` host repo — **không** Report MFE.

---

## 7. Gaps (SA chốt — align PO/Design)

| ID | Decision |
|----|----------|
| GAP-AKD-01 | Ô không có `asset-type` code → count **0** · click toast · **cấm** invent API |
| GAP-AKD-02 | Bãi đỗ vs trạm dừng nghỉ = **2 ô** · Bãi đỗ count 0 P1 |
| GAP-AKD-03 | 3 ô ops/report → count **0** · navigate Report leaf |
| GAP-AKD-04 | Hub = screenshot **40** · seed/type thiếu = 0 |
| GAP-P2-QUERY-01 | Một GET `summary-by-type` — **closed** P1 |
| GAP-AKD-WIDGET-MAP | Dev Root importmap alias widget |
| GAP-AKD-WIDGET-CSS | Dashboard `.widgetBody` stretch |
| GAP-AKD-WIDGET-BOOT | Named export bootstrap bắt buộc |

---

## 8. Live vs delta (audit 2026-08-23)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/road-assets/summary-by-type` | **LIVE** API + BFF + FE bind | **Giữ** — aggregate group `Type` |
| `GET …/integration/road-routes` | **LIVE** | **Giữ** · `totalCount` ô #1 |
| `GET …/asset/pavement-sections` | **LIVE** | **Giữ** · `totalCount` ô #2 |
| `GET …/integration/asset-types` | **LIVE** | Optional P1 · static tiles OK |
| FE `/so-ts/hang-muc` | **LIVE** | **Giữ** · LinPageLayout + `KchtHangMucDashboard` |
| Widget bundle | **LIVE** webpack entry | **Giữ** |
| Dashboard registry | **LIVE** `WIDGET_REGISTRY` | **Giữ** entry `rmms-kcht-hang-muc` |
| Import map Root | **GAP** local dev | Dev doc only — không BE |

Step 4b: **`/new-endpoint`** skill on Asset domain — endpoint **already implemented**; SA documents contract for TL/Dev parity.

---

## 9. Handoff → Team Lead

| Field | Value |
|-------|-------|
| Next slash | `/agent-team-lead` |
| packKind | **`dashboard`** Kind E — **cấm** Kind B list gates |
| Task pack | T-CTX · T-PERM · **T-UI-TILE** (standalone + widget) · T-UI-NAV · T-BE-API-01 · T-BFF-01 · T-HOST-01 · T-QA-HUB |
| **Cấm** | T-UI-LIST · T-UI-CFG · T-UI-FORM · LinCatalogDataGrid · Zone F |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| Chain | autoApprove=ON → TL pending enqueue |
| e2eQa | ON · QA `yarn start:std` + docker + `yarn e2e-qa` |

Canonical paths (Autopilot confirms):

- BE: `D:/AI-QLBD/Linm.RMMS.WebService`
- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset`
- Host: `D:/MFE-CORE/Linm.Web.Dashboard`

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-23T12:00:00.000Z |
| versionGate | keep_current |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.15.19 schemaVersion=1 workflowVersion=2026.08.18.02 rulesVersion=2026.08.16.05 versionGate=keep_current -->
