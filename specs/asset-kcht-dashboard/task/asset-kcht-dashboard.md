# Team-lead — task pack · asset-kcht-dashboard (Kind E dashboard hub)

| Field | Value |
|-------|-------|
| feature | `asset-kcht-dashboard` |
| title | [Team lead] Dashboard Hạng mục KCHT |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| changeScope | `edit_page` (icon SSOT `/edit-web-feature` · **design + team-lead** only) |
| packKind | **`dashboard`** (Kind **E** hub tiles · count cards) — **cấm** Kind B catalog list/CRUD · **cấm** gộp slug `dashboard` KPI Report |
| updatedAt | `2026-08-23T22:10:00.000Z` |
| Feature Kind | **E** · hub 4×10 count cards · read-only navigate |
| mfeStdRoute | `/so-ts/hang-muc` |
| mfeStdUrl | `http://localhost:9301/so-ts/hang-muc` |
| widgetKey | `@linm/rmms-asset-kcht-widget` · Asset :9201 · Root :9000 `/dashboard` |
| route_confirm | **route_a** `/so-ts/hang-muc` standalone + widget embed |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn start:std` + docker + `yarn e2e-qa` |
| design_confirm | **approve** (`task_ac761cee`) |
| solution_confirm | **approve** (`task_97fd976e`) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/asset-kcht-dashboard-control-hint.md` · `asset-kcht-dashboard-real-data.md` |
| prior · po | **confirmed** · `po/requirement.md` · `task_bd941b19` |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_ac761cee` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_97fd976e` |
| taskId | `task_70de7844` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.18.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `keep_current` |
| Recheck | **`tl-retry-ssot-rereview` HARD** — audit live MFE/BE trước Dev Write |

**Supersedes** TL stub `task_9791424e` (ngắn). Pack này re-audit live MFE/BE + Design/SA confirmed `task_ac761cee` / `task_97fd976e`.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/dashboard/kcht` · **cấm** `LinCatalogDataGrid` / Zone F schema · **cấm** `ParcelComponent` Report consumer · copy 40 ô vào Report KPI slug `dashboard` · bind API trên `@linm/dashboard` host.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/asset-kcht-dashboard/ui/design.md` + reviewUrl | T-UI-TILE · T-UI-NAV · T-UI-UX · DES-TILE-A · DES-TILE-GRID · DES-TILE-CARD |
| Solution | `specs/asset-kcht-dashboard/be/solution-discovery.md` | T-BE-01 · T-BFF-01 · T-PERM · GAP-AKD-* |
| Prototype | `ui/prototype/asset-kcht-dashboard-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/asset-kcht-dashboard-control-hint.md` | hub tile · navigate drill |
| PO | `specs/asset-kcht-dashboard/po/requirement.md` | 40 ô inventory · GAP-AKD-01..04 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` kind=`catalog` · `dispatchAppToast` · **cấm** `LinCatalogDataGrid` |
| **MFE** | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` | `/so-ts/hang-muc` · widget webpack entry |
| **BE** | `Linm.RMMS.WebService` domain **Asset** | `api/v1/asset/road-assets/summary-by-type` |
| **BFF** | `LINM.RMMS.Asset.Bff` | proxy-only `web-bff/api/v1/asset/road-assets/summary-by-type` |
| **Host** | `D:/MFE-CORE/Linm.Web.Dashboard` | `WIDGET_REGISTRY` · **không** API trên host |
| **Auth** | CommonLib stub | `asset.road-assets.read` |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI standalone | 1× `LinPageLayout` + `KchtHangMucDashboard` | nested CatalogListShell · `LinCatalogDataGrid` · footer pagination |
| UI widget | `embedMode` body cards only | H1 trùng registry title |
| Tile order | static `KCHT_TILES` 40 ô screenshot | derive order từ API |
| HTTP | `kchtDashboardService.ts` via `apiClient` | fork ApiClient · N+1 list pageSize lớn |
| Lookup reads | `integration/road-routes` · `asset/pavement-sections` paged `totalCount` | invent hub aggregate |
| BFF | proxy only | business in BFF |
| Widget | `singleSpaReact` `{ bootstrap, mount, unmount }` | load main `@linm/rmms-asset` vào slot |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | `/so-ts/hang-muc` only P1 |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (DOMAIN-MAP slug `asset-kcht-dashboard` → `api/v1/asset`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `RoadAssetsController` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` |
| `source.persistence` | `rmms_road_assets` — aggregate group `Type` · **không** migration P1 |
| `source.host` | `D:/MFE-CORE/Linm.Web.Dashboard` · `WidgetArea.tsx` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset-kcht-dashboard/ui/prototype/asset-kcht-dashboard-prototype.html` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/hang-muc` |

## API contract (from SA — Dev P1)

Base BE: `api/v1/asset` · BFF: `web-bff/api/v1/asset` · FE prefix: `/asset/…` · `/integration/…`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-01 | GET | `/road-assets/summary-by-type` | **LIVE** aggregate group `Type` tenant active | **keep** |
| API-02 | GET | `/integration/road-routes?page=1&pageSize=1` | **LIVE** `totalCount` ô #1 | **keep** |
| API-03 | GET | `/asset/pavement-sections?page=1&pageSize=1` | **LIVE** `totalCount` ô #2 | **keep** |
| API-04 | GET | `/integration/asset-types` | **LIVE** optional P1 | static `KCHT_TILES` OK P1 |

Response API-01: `{ items: [{ type, count }], totalCount }` camelCase.

**Cấm** invent `api/v1/dashboard/*` · **cấm** path mới P1 ngoài delta đã ship.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_na** | aggregate — **không** DATE filter UI |
| XCO | **xco_na** | hub read-only |
| SHARE | **share_a** | tenant scope `CompanyCode` |
| Migration | **n/a** | no new table P1 |

## DES-TILE → Lin* (HARD · Kind E hub)

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-TILE-A | `LinPageLayout` kind=`catalog` · H1 «Hạng Mục Kết Cấu Hạ Tầng» · `fa-th-large` |
| GRID | DES-TILE-GRID | `KchtHangMucDashboard` `.grid` 4-col · `role="list"` |
| CARD | DES-TILE-CARD | `<button>` card · icon tròn xanh · label · count `vi-VN` |
| Widget | body only | `embedMode` · **cấm** H1 trong widget |
| B/D/Form | **OUT** | **cấm** toolbar · pagination · CRUD form |

## retry.ssot_rereview (TL live MFE 2026-08-23 · `KchtHangMucPage` + `KchtHangMucDashboard` + BE)

Audit `Linm.Web.RMMS.Asset` + `Linm.Web.Dashboard` `WidgetArea.tsx` + `RoadAssetsController` — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` standalone · **cấm** nested CatalogListShell | **PASS** `KchtHangMucPage` kind=`catalog` · 1 shell | — |
| 2 | `LinCatalogDataGrid` | **OUT** Kind E hub — **cấm** trên pack | **PASS** không dùng |
| 3 | Footer `LinCatalogListPagination` | **OUT** — **cấm** | **PASS** không dùng |
| 4 | flex + skeleton loading | **PASS** 40 skeleton placeholders khi `loading` | — |
| 5 | toolbar / config FULL | **OUT** Kind E hub | **PASS** không toolbar |
| 6 | Widget `embedMode` · **cấm** H1 trùng host | **PASS** `embedMode` body cards only | — |
| 7 | 40 ô SSOT order screenshot | **PASS** `KCHT_TILES` 40 items cột 1→4 | — |
| 8 | Count format `vi-VN` | **PASS** `formatKchtCount` | — |
| 9 | GAP-AKD-01 click toast | **PASS** `dispatchAppToast` «chưa có danh mục…» | — |
| 10 | Drill navigate paths | **PASS** `kchtNavigation.ts` road-route · pavement · asset-type · report | — |
| 11 | API `summary-by-type` bind | **PASS** `kchtDashboardService.getSummaryByType` | — |
| 12 | Paged totals tuyến/đoạn | **PASS** parallel fetch `road-routes` + `pavement-sections` | — |
| 13 | Widget `{ bootstrap, mount, unmount }` | **PASS** `kchtHangMucDashboardWidgetEntry.tsx` | — |
| 14 | `WIDGET_REGISTRY` entry | **PASS** `rmms-kcht-hang-muc` cols:3 | — |
| 15 | `.widgetBodyStretch` CSS | **PASS** `DashboardPage.module.css` | — |
| 16 | GAP-AKD-WIDGET-MAP importmap | **GAP** local Root dev doc only | **doc** — không crash host |
| 17 | **cấm** `window.alert`/`confirm` | **PASS** toast only | — |
| 18 | ERP.* / `api/v1/rmms/*` | **none** | **PASS** |
| 19 | Fail API → count 0 · hub vẫn mở | **PASS** catch → empty counts | — |
| 20 | Ops/report tiles count 0 P1 | **PASS** `resolveTileCount` report/gap → 0 | — |
| 21 | Kind B `LinCatalogUiSchemaEditorModal` | **OUT** | **PASS** không dùng |
| 22 | `configHint` / `LinListTableConfigModal` | **OUT** | **PASS** không dùng |

**Cấm** chỉ sửa importmap nếu còn GAP tile/grid/API cùng surface.

## Screens (form-type-task-pack · dashboard Kind E)

| id | Surface | Pattern | Route / mount | Zones | Actions |
|----|---------|---------|---------------|-------|---------|
| S-STANDALONE | Hub KCHT full page | Kind E A + GRID | `/so-ts/hang-muc` | A · GRID | display counts · click drill |
| S-WIDGET | Dashboard widget slot | Kind E body only | `@linm/rmms-asset-kcht-widget` cols:3 | GRID | same drill · host title from registry |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF · T-HOST

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | asset-kcht-dashboard | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E dashboard · prefix `api/v1/asset` · **cấm** ERP.* |
| **T-PERM-01** | asset-kcht-dashboard | ui+api | T-CTX-01 | stub | Code `asset.road-assets.read` · `[RequirePermission]` stub · **không** block P1 |
| **T-UI-COUNT-01** | hub + widget | ui | T-BE-01 | **done** | Count = DB `summary-by-type` · t05 `BRIDGE` · t16 `TUNNEL` · alias DITCH · 5xx toast · **cấm** mock |
| **T-UI-TILE-02** | widget | ui | T-UI-TILE-01 | **done** | `embedMode` cards only · webpack `linm-rmms-asset-kcht-widget.js` · single-spa lifecycles |
| **T-UI-NAV-01** | hub | ui | T-UI-TILE-01 | **done** | `type` → `/so-ts?type=` · tuyến → `/master/road-route` · đoạn → `/so-ts/pl-mat-duong` · ops → `/bao-cao/tngt` · gap → toast |
| **T-UI-FORM-01** | — | ui-form | — | **OUT PASS** | **không** CRUD form · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-UX-01** | hub | ui | T-UI-TILE-01 | **done** | gap 12px grid · hover border primary · focus-visible · toast SSOT · **cấm** alert |
| **T-BE-01** | api | api | T-CTX-01 | **done** | `GET api/v1/asset/road-assets/summary-by-type` · `GetSummaryByTypeAsync` group `Type` tenant active · **không** migration |
| **T-BFF-01** | bff | bff | T-BE-01 | **done** | Proxy GET summary-by-type · **không** business |
| **T-HOST-01** | dashboard | host | T-UI-TILE-02 | **done** | `WIDGET_REGISTRY` `rmms-kcht-hang-muc` · `.widgetBodyStretch` · **cấm** API trên host |
| **T-QA-HUB-01** | asset-kcht-dashboard | qa | T-HOST-01 | pending QA | scenarios · mfeStdUrl · widget mount · 40 cards · drill · build PASS |
| **T-UI-ICON-01** | /so-ts/hang-muc + widget | ui | T-UI-TILE-01 | **done** | `iconCode` + alias GIS `assetIconBareHtml` · Root importmap widget :9221 |
| **T-QA-ICON-01** | hub + widget | qa | T-UI-ICON-01 | **open** | 40 ô SVG GIS · không `fas fa-*` trên tile · chrome H1 FA OK |
| **T-UI-SEED-01** | hub + catalog | ui | T-UI-TILE-01 | **done** | **cấm** `withFallback` demo · hub fail «—» · GAP-WEB-EDIT-SEED |
| **T-RV-01** | asset-kcht-dashboard | review | T-QA-HUB-01 | pending Review | findings.md |

**Cấm** T-UI-LIST · T-UI-CFG · Kind B schema seed · `buildDynamicGridColumns`.

## T-UI-NAV inventory (P1)

| Tile kind | Handler | Target |
|-----------|---------|--------|
| `road-route` | `navigateKchtDrill` | `/master/road-route` |
| `pavement-section` | same | `/so-ts/pl-mat-duong` |
| `asset-type` | same | `/so-ts?type={code}` |
| `report` | same | `/bao-cao/tngt` (ops 3 ô) |
| `gap` | toast | «Hạng mục chưa có danh mục…» · **cấm** navigate |

## Build (TL verify gate 2026-08-23)

| Gate | Command | Result |
|------|---------|--------|
| MFE `yarn typecheck` | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset && yarn typecheck` | **PASS** (`task_70de7844`) |
| MFE `yarn build` | main + widget bundle | **PASS** (`task_70de7844`) |
| BE `dotnet build` | Asset API + BFF (baseline) | **PASS** (prior `task_9791424e`) |

**Cấm** `completed` nếu compile overlay / `module has no exports`.

## Out of pack

Slug `dashboard` KPI Report (`/bao-cao/dashboard`) · `ParcelComponent` · CRUD hub · invent `api/v1/dashboard/kcht` · ERP.* · Kind B list gates · `LinCatalogUiSchemaEditorModal` · `expand_tiles` beyond 40 P2.

## T-UI-ICON-01 / T-QA-ICON-01 — icon SSOT (`/edit-web-feature` · 2026-08-23)

**devSlash:** `/agent-dev` (hub dashboard · **không** `/agent-dev-oms-map`).  
**Cấm** T-BE mới · **cấm** route mới (`/so-ts/hang-muc` giữ) · **cấm** `route_confirm`.

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| Pict | `{MapIconModule}` `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis/src/shared/map/mapAssetIcons.ts` · `assetIconBareHtml(iconCode)` | `fas fa-*` trên tile · emoji · paste SVG vào Asset |
| Demo parity | `{DemoIconModule}` `rmms-map-asset-icons.js` cùng hàm | fork `ASSET_CODE_META` |
| Types | `declare module '{MapIconModule}'` export `assetIconBareHtml` | tsc follow GIS `window.L` |

### implement.wire

1. `kchtTileConfig.ts`: `iconCode: string` (bảng Design §6) · **xóa** `iconClass` khỏi tile tài sản.
2. `KchtHangMucDashboard.tsx`: `dangerouslySetInnerHTML={{ __html: assetIconBareHtml(tile.iconCode) }}` trong `.iconWrap`.
3. Alias **cả** `webpack.config.js` và `webpack.widget.config.js`:
   `{MapIconModule}` → `path.resolve(__dirname, '../Linm.Web.RMMS.Gis/src/shared/map/mapAssetIcons.ts')`
4. Widget entry import cùng module — **cấm** chỉ page.
5. CSS: SVG ~28×34 trong vòng 40×40 · **cấm** `color: #1677ff` trên glyph.
6. H1 `fa-th-large` = chrome · **không** đổi.

### T-QA-ICON-01 DoD

- Standalone + widget: 40 SVG · `data-icon-code` khớp Design §6.
- Grep tile: **0** `fas fa-` trong card pict.
- Map pin GIS cùng `iconCode` = cùng SVG.

## Handoff → Dev (icon delta — **không** chạy turn này)

User `/edit-web-feature` **design + team-lead only** — **cấm** enqueue `/agent-dev` / QA.

**Handoff:** icon Dev **done** this `/edit-web-feature` turn. Next: `/agent-qa` **T-QA-ICON-01** (không re-run PO→Dev). Hub T-UI-TILE-* **giữ done**.

| Field | Value |
|-------|-------|
| phase_from / phase_to | team_lead **icon tasks open** · dev **not this turn** |
| Next slash | `/agent-dev` (user) · **không** `/agent-qa` trước icon |
| e2eQa | ON sau Dev icon |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.15.19 schemaVersion=1 workflowVersion=2026.08.18.02 rulesVersion=2026.08.16.05 versionGate=keep_current -->
