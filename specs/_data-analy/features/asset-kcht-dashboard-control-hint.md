# Data-analy — controlHint — asset-kcht-dashboard

| Field | Value |
|-------|-------|
| feature | `asset-kcht-dashboard` |
| packKind | `dashboard` (Kind E tiles · count cards) |
| mode | `feature_context` |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.18.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `rechecked` |
| analyzedAt | `2026-08-23T11:15:00.000Z` |
| taskId | `task_9791424e` |

> Hub 4×10 count cards · **không** LinCatalogDataGrid · **không** ParcelComponent Report.  
> Consumer shell = `Linm.Web.Dashboard` `WIDGET_REGISTRY` · widget `@linm/rmms-asset-kcht-widget`.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/asset-kcht-dashboard.md` |
| Parent list | `docs/context/features/asset.md` · `specs/_data-analy/features/asset-control-hint.md` |
| Catalog 36 | `docs/context/features/asset-kcht-32.md` · `asset-kcht-32-control-hint.md` |
| Master tuyến | `docs/context/features/road-route.md` |
| Master đoạn | `docs/context/features/pavement-section.md` |
| CSDL | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` |
| Host contract | `D:/MFE-CORE/Linm.Web.Dashboard` `WidgetArea.tsx` |

## Report / dashboard gate

| Field | Value |
|-------|-------|
| sourceFeature | `asset` (list **done** · T-UI-LIST-01) |
| sourceTables | `rmms_road_assets` · `rmms_road_routes` · `rmms_pavement_sections` · master `asset-types` |
| sourceFormReady | **yes** — `specs/asset/STATUS.md` T-UI-LIST-01 **done** |
| packKind | `dashboard` (≠ Report KPI slug `dashboard`) |

### Map cột lưới nguồn → ô hub

| Ô hub (label SSOT) | Nguồn count | Field / filter list nguồn |
|--------------------|-------------|---------------------------|
| Thông tin tuyến | `rmms_road_routes` | `totalCount` list |
| Thông tin đoạn tuyến | `rmms_pavement_sections` | `totalCount` list |
| 38 ô loại TS | `rmms_road_assets.Type` | `GET summary-by-type` group `Type` |
| 3 ô ops/report | — | count **0** · navigate Report leaf |

## § Delta Current vs New

| Current | New |
|---------|-----|
| Không hub count KCHT trên Web Sổ TS | Page `/so-ts/hang-muc` · 40 card grid |
| Dashboard chỉ placeholder widgets | Widget `@linm/rmms-asset-kcht-widget` mount `WIDGET_REGISTRY` |
| RoadAssets chỉ list/CRUD | + `GET …/road-assets/summary-by-type` aggregate |
| GOVOne 40 ô (screenshot) | P1 = screenshot order · thiếu type = count 0 |

## Control hint — hub tile (Kind E)

| Zone | Pattern | controlHint |
|------|---------|-------------|
| Standalone page | Full page + H1 | Title «Hạng Mục Kết Cấu Hạ Tầng» |
| Widget body | Cards only | **cấm** H1 trùng host header |
| Grid | 4-col responsive | Card: icon tròn · label · count `vi-VN` |
| Card click | Navigate | `type` → `/so-ts?type=` · tuyến → `/master/road-route` · đoạn → `/so-ts/pl-mat-duong` · ops → Report leaf |
| GAP-AKD-01 | No asset-type code | count 0 · toast «chưa có danh mục» |

## API bind (đề xuất SA)

| UI | Method | Path | Notes |
|----|--------|------|-------|
| Count by type | GET | `/asset/road-assets/summary-by-type` | BFF proxy · group `Type` tenant |
| Asset types label | GET | `/integration/asset-types` | label + icon |
| Tuyến count | GET | `/integration/road-routes?pageSize=1` | `totalCount` |
| Đoạn count | GET | `/asset/pavement-sections?pageSize=1` | `totalCount` |

**Cấm** `api/v1/dashboard/kcht` · **cấm** ERP.* · **cấm** N+1 list pageSize lớn.

## Gaps (PO confirm)

| ID | Default |
|----|---------|
| GAP-AKD-01 | Ô không có `asset-type` → count 0 · toast |
| GAP-AKD-02 | Bãi đỗ vs trạm dừng nghỉ = 2 ô |
| GAP-AKD-03 | 3 ô ops → Report leaf count 0 |
| GAP-AKD-04 | Hub = screenshot 40 · seed thiếu = 0 |
| GAP-AKD-WIDGET-MAP | Dev thêm importmap key widget |
| GAP-AKD-WIDGET-CSS | `.widgetBody` stretch khi `parcelName` |

## Handoff

→ **PO:** Kind E dashboard · 40 ô inventory · gaps table  
→ **Design:** prototype 4-col grid + reviewUrl · widget body variant  
→ **SA:** `summary-by-type` · BFF · DOMAIN-MAP Asset  
→ **TL/Dev:** widget entry webpack · Dashboard registry

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-23T11:15:00.000Z |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.15.19 schemaVersion=1 workflowVersion=2026.08.18.02 rulesVersion=2026.08.16.05 versionGate=rechecked -->
