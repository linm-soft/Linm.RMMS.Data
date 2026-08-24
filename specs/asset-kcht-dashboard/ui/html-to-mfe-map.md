# HTML → MFE map — asset-kcht-dashboard (icon SSOT)

| Field | Value |
|-------|-------|
| prototype | `ui/prototype/asset-kcht-dashboard-prototype.html` |
| mfe | `Linm.Web.RMMS.Asset` |
| updatedAt | `2026-08-24T00:40:00.000Z` |

## Surface

| Prototype | MFE |
|-----------|-----|
| `#variant-standalone` + H1 | `KchtHangMucPage` + `LinPageLayout` |
| `#variant-widget` (no H1) | `KchtHangMucDashboard` `embedMode` · widget entry |
| `.grid` 4-col | `.grid` `role="list"` |
| `.card` | `<button>` card |
| Count | BFF `summary-by-type` / `road-routes.totalCount` / `pavement-sections.totalCount` · fail → «—» · **cấm** demo seed |

## Pict (HARD)

| Prototype | MFE (**done** `/edit-web-feature` icon) |
|-----------|----------------------------------------|
| `data-icon-code` | `KCHT_TILES[].iconCode` + `data-icon-code` trên card · t05 `CAU`/`PONTOON` · t16 `CN`/`SPILLWAY` · t24 `NH`/`RESCUE_VEHICLE` |
| `assetIconBareHtml(code)` | `@linm/rmms-map-asset-icons` → GIS `mapAssetIcons.ts` |
| `.icon` 40×40 circle | `.iconWrap` — `dangerouslySetInnerHTML` · **cấm** FA tile |
| H1 `.chrome` | `titleIconClass: 'fas fa-th-large'` (layout only) |

## Alias (TL HOW)

| Key | Path |
|-----|------|
| `{MapIconModule}` | `../Linm.Web.RMMS.Gis/src/shared/map/mapAssetIcons.ts` |
| Webpack | `webpack.config.js` **và** `webpack.widget.config.js` |
| Types | `declare module` — **cấm** tsc GIS `window.L` |

**Cấm** paste SVG / `ASSET_CODE_META` fork vào Asset.
