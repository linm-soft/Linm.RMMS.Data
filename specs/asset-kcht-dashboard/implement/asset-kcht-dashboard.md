# Implement — asset-kcht-dashboard

| Field | Value |
|-------|-------|
| feature | `asset-kcht-dashboard` |
| status | **done** |
| taskId | `task_9f83afbd` |
| this role | `dev` · `/agent-dev` |
| mfe | `Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/hang-muc` |
| mfeStdUrl | `http://localhost:9301/so-ts/hang-muc` |
| widgetKey | `@linm/rmms-asset-kcht-widget` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/road-assets/summary-by-type` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.18.02` |
| updatedAt | `2026-08-23T22:40:00.000Z` |

## Build

| Gate | Command | Result |
|------|---------|--------|
| MFE `yarn typecheck` | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset && yarn typecheck` | **PASS** (`task_9f83afbd` · 2026-08-23) |
| MFE `yarn build` | main `linm-rmms-asset.*.js` + widget `linm-rmms-asset-kcht-widget.*.js` | **PASS** (`task_9f83afbd` · 2026-08-23) |
| BE `dotnet build` RMMS.Service.Api | Asset domain | **PASS** (`task_9f83afbd` · 2026-08-23) |
| BE `dotnet build` LINM.RMMS.Asset.Bff | BFF proxy | **PASS** (`task_9f83afbd` · 2026-08-23) |

Webpack chỉ có performance warnings (bundle size) — **không** compile error / `module has no exports`.

## Paths

### FE (`Linm.Web.RMMS.Asset`)
- `src/components/kcht/kchtTileConfig.ts` — 40 ô SSOT order screenshot
- `src/components/kcht/kchtNavigation.ts` — drill + gap toast
- `src/components/kcht/KchtHangMucDashboard/` — 4-col grid · skeleton · embedMode
- `src/services/kcht/kchtDashboardService.ts` — summary-by-type + paged totals
- `src/pages/KchtHangMucPage/` — standalone `LinPageLayout` kind=`catalog`
- `src/widgets/kchtHangMucDashboardWidgetEntry.tsx` — `{ bootstrap, mount, unmount }`
- `webpack.widget.config.js` — widget bundle entry
- `src/index.tsx` — route `/so-ts/hang-muc`

### BE (`Linm.RMMS.WebService`)
- `RoadAssetDtos.cs` — `RoadAssetSummaryByTypeResult`
- `IRoadAssetService` / `RoadAssetService` — `GetSummaryByTypeAsync` group `Type`
- `RoadAssetsController` — `GET summary-by-type`
- `RoadAssetsBffController` — BFF proxy `summary-by-type`

### Host (`Linm.Web.Dashboard`)
- `dashboardWidgets.ts` — Authen `menuType=widget` · size `defaultUrl` · parcel `redirectTo`
- `WidgetArea.tsx` — **Tổng quan tài sản** · `@linm/rmms-asset-kcht-widget` · `cols: 3`
- `DashboardPage.tsx` — Lối tắt nhanh gated `dashboard:widget:quick-links:read`
- `DashboardPage.module.css` — `.widgetBodyStretch`

### Authen (`Linm.Platform.Authentication`)
- set `dashboard` v2 — `dashboard:widget:quick-links:read` (mọi product)
- set `rmms-dashboard` — `dashboard:widget:rmms-asset:read` (chỉ ImportSets `rmms-*`)
- menu `dashboard-widget-*` · `menuType=widget` (ẩn sidebar) · gói RMMS + `MANAGER-RMMS` app `dashboard`

## Task completion (Dev P1)

| id | layer | status | notes |
|----|-------|--------|-------|
| T-BE-01 | api | **done** | `GET api/v1/asset/road-assets/summary-by-type` |
| T-BFF-01 | bff | **done** | proxy-only |
| T-UI-TILE-01 | ui | **done** | `/so-ts/hang-muc` · Kind E hub |
| T-UI-TILE-02 | widget | **done** | embedMode body only |
| T-UI-NAV-01 | ui | **done** | drill + gap toast |
| T-UI-UX-01 | ui | **done** | vi-VN count · hover/focus |
| T-HOST-01 | dashboard | **done** | WIDGET_REGISTRY |
| T-UI-ICON-01 | ui | **done** | GIS `assetIconBareHtml` · alias `@linm/rmms-map-asset-icons` · **cấm** copy SVG |

## GAP notes

- **GAP-AKD-WIDGET-MAP** **closed**: Root `mfe.config.json` + `mfe/fragments/rmms.json` map `@linm/rmms-asset-kcht-widget` → `:9221` (`yarn start:widget`). Port **9221** — không đụng Asset MFE `:9201`.

## retry.ssot_rereview (TL `task_70de7844` · Dev confirm `task_9f83afbd`)

Live audit `KchtHangMucPage` + `KchtHangMucDashboard` + widget entry + `WidgetArea` + BE — **PASS** (22 checks · 1 doc-only GAP importmap). Dev **không** thêm patch — implementation đã khớp SSOT Kind E hub.

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` · cấm nested CatalogListShell | **PASS** |
| cấm `LinCatalogDataGrid` / footer pagination / toolbar FULL | **PASS** (OUT Kind E) |
| 40 ô `KCHT_TILES` · skeleton · `vi-VN` count | **PASS** |
| widget `embedMode` · cấm H1 trùng host | **PASS** |
| API bind + fail → toast (không giả kho trống) | **PASS** GAP-DASH-COUNT-03 · nguồn lỗi «—» GAP-WEB-EDIT-SEED |
| Cấm demo `withFallback` asset/pavement/csdl | **PASS** `/edit-web-feature` 2026-08-24 — live BFF only |
| t05 `BRIDGE` · t16 `TUNNEL` count DB | **PASS** `/edit-web-feature` 2026-08-24 |
| cấm `window.alert` | **PASS** toast only |

## Notes (`/edit-web-feature` · 2026-08-30)

- Host `/dashboard`: Lối tắt nhanh + **Tổng quan tài sản** (cùng lưới KCHT `embedMode`).
- Size + parcel SSOT Authen: `menuType=widget` · `defaultUrl` = cols · `redirectTo` = parcel · set `rmms-dashboard` chỉ RMMS.
- Cấm hardcode ERP placeholder trên host RMMS.
- Nav L0 **Bảng điều khiển**: flatten group path `#` → leaf `/dashboard` (`buildSectionsFromDB`) · `forceShellNavigate` bỏ `#` / `@linm/…` (tránh `#` → `/` → `/so-ts`).

## Handoff → QA

| Field | Value |
|-------|-------|
| phase_from / phase_to | dev **completed** → qa **pending** |
| Next slash | `/agent-qa` |
| e2eQa | ON · `yarn start:std` + docker + `yarn e2e-qa` |
| mfeStdUrl | `http://localhost:9301/so-ts/hang-muc` |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.15.19 schemaVersion=1 workflowVersion=2026.08.18.02 versionGate=keep_current -->
