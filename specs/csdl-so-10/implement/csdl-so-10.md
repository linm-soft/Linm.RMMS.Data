# Implement â€” csdl-so-10

| Field | Value |
|-------|-------|
| feature | `csdl-so-10` |
| role | `dev` Â· `/agent-dev` + `/agent-dev-oms-map` |
| status | **done** |
| packKind | `map` |
| changeScope | `new_page` |
| resource | `route-strip-maps` |
| mfeStdRoute | `/csdl-so-10` |
| mfeStdUrl | `http://localhost:9301/csdl-so-10` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| taskId | `task_5b38ddba` (qa-fix) · prior `task_7ecb195f` |
| contentHash | `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| updatedAt | `2026-09-06T04:30:00.000Z` |

## retry.ssot_rereview

| # | Check | Result |
|---|-------|--------|
| 1â€“12 | TL checklist (LinPageLayout Â· grid Â· filter Â· Slideout 2col Â· Leave Â· Map OMS Â· hub) | **pass** on implement |

## Delta shipped

### BE (`Linm.RMMS.WebService`)
- `CsdlSo10Entity` Â· table `rmms_csdl_so10` (Contractor Â· Period* Â· Geometry jsonb Â· GeomType Â· Srid Â· StripImageUrl)
- Migration `Schema_CsdlSo10` (+ widen `CsdlBookEntryEntity` strip cols)
- `CsdlCatalogService` resource `route-strip-maps` Â· CRUD typed Â· GeoJSON validate Â· period TZ filter Â· IdCode `SO-`
- `CatalogUiSchemaRegistry/Seed` kind `route-strip-maps`
- DOMAIN-MAP row `csdl-so-10` â†’ Asset
- BFF: existing proxy-only (geom passthrough) â€” no remap

### FE (`Linm.Web.RMMS.Asset`)
- Page `CsdlSo10Page` + `CsdlSo10FormSlideout` (Kind D 2col footer_only)
- Filter `LinErpListFilterBar` per `csdl-so-10-filter-bar.md`
- Kind F `CsdlSo10MapPanel` hostâ†’bar Â· dock/full Â· Fit VN Â· OSRM LineString Â· File `stripImageUrl` fallback Â· LeaveConfirm
- Routes `/csdl-so-10` Â· hub `TYPED_RESOURCE_ROUTES['route-strip-maps']`

## QA-fix (`task_5b38ddba`)

| Gap | Fix | Status |
|-----|-----|--------|
| GAP-QA-SLIDE-FOOTER-01 | `footer` → `customFooter` · `open` → `isOpen` | **closed** |
| GAP-QA-INPUT-INVALID-01 | remove `invalid=` · `fieldInvalid` wrappers · SearchInput peer so-09 | **closed** |
| GAP-QA-COMPILE-01 | `devRoutes` badge `MAP` → `LIST` | **closed** |
| GAP-QA-E2E-PW-01 | P2 · out of Dev | open (QA) |

Files: `CsdlSo10FormSlideout.tsx` · `dev/devRoutes.ts` · **0** BE

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (qa-fix) |
| MFE `yarn build` | **PASS** (chunk `csdl-so-10.*`) |
| BE `dotnet build` RMMS.Service.Api | **PASS** · 0 delta |
| E2E / start:std | **skipped** (queued `/agent-qa*`) |

## Map gate (R1â€“R11 summary)

| Check | Note |
|-------|------|
| R1 live Leaflet | CDN Leaflet Â· draw LineString |
| R2 basemap chips | TiÃªu chuáº©n/Vá»‡ tinh labels Â· clip TileUrl reserved; raster Carto interim (**debt** full GL clip wire) |
| R4b/R4c | flex hostâ†’bar Â· dock/full |
| R7b | corridor + track panes |
| R7c | click draw only Â· no map-click Fit zoom |
| R8/R9 | OSRM `routeAlongStreets` |
| R11 | Fit VN bounds on load |
| R-LEAVE | LeaveConfirmModal form+draw dirty |
| Cesium | **OUT** P1 |

## Debt / defer

- GAP-SO10-POSTGIS-02 PostGIS P2
- GAP-CSDL-ORG-01 org SearchInput P2
- Full MapLibre clip GL wire (Asset) â€” interim Carto raster + chip labels
- Apply EF migration to target DB (ops)

## Next

QA `/agent-qa*` â€” Grid G-01â€¦G-10 Â· Map M-01â€¦M-12 Â· filter V1â€“V10 Â· CRUD Â· Leave

## QA verdict

| Field | Value |
|-------|-------|
| taskId | `task_47f0f225` |
| verdict | **FAIL** (prior) |
| at | `2026-09-06T02:05:00.000Z` |
| blockers | P0 **closed** by `task_5b38ddba` |
| evidence | S0/S1 PASS · QA-20 FAIL · typecheck FAIL → fixed |
| next | `/agent-qa*` re-run S0/S1/QA-20+map |

