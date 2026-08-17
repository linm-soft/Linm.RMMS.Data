# Data-analy — controlHint — rpt-tngt (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tngt` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-tngt-context-20260816` |
| analyzedAt | `2026-08-16T20:20:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_46a44cfc` |
| autoApprove | `ON` |
| sourceFeature | `incident` |
| sourceFormReady | **yes** (`specs/incident/STATUS.md` T-UI-LIST-01 **done** · T-BE-01/02 **done** · `rmms_incidents`) |
| sourceTables | `rmms_incidents` (`IncidentEntity`) · read-model P1 in-memory Report seed `type=TNGT` |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> Parent list pack `incident` — **cấm** copy CRUD. **Một slug · 6 loại thống kê** — cấm 6 feature trùng filter.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-tngt.md` |
| Form nguồn | `docs/context/features/incident.md` · list MFE Field `/incident` |
| Entity | `IncidentEntity` → table `rmms_incidents` · **IncidentType = TNGT** |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Tai nạn giao thông» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput loại thống kê/tuyến/mức · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · drill `/incident?id=` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| tab | Loại thống kê | `SearchInput` | monthly · half-year · serious · compare · summary · stats |
| routeId | Tuyến | `SearchInput` | **road-route** |
| severity | Mức | `SearchInput` | Cao / TB / Nghiêm trọng / Thấp — tab `serious` mặc định **Nghiêm trọng** |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `RequestedAt` / DTO `at` · tab `half-year` = 6 tháng |
| qSearch | Tìm kiếm | `Input` | mã · tuyến |

Loại sự cố **khóa** `TNGT` — **không** filter type trên leaf.

## Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| mã | `Code` | `rmms_incidents` |
| tuyến | `RouteName` | same |
| loại | `IncidentType` | same (= TNGT) |
| mức | `Severity` | same |
| trạng thái | `Status` | same |
| thời gian | `RequestedAt` | same |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/traffic-accidents` |
| Excel | `GET api/v1/report/traffic-accidents/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại thống kê / mức | enum seed FE P1 |

Perm stub: `report.tngt.read`. Context plural `api/v1/reports/traffic-accidents` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/tngt` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
