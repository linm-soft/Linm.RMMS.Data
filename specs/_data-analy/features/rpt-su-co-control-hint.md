# Data-analy — controlHint — rpt-su-co (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-su-co` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-su-co-context-20260816` |
| analyzedAt | `2026-08-16T09:40:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_4906443c` |
| autoApprove | `ON` |
| sourceFeature | `incident` |
| sourceFormReady | **yes** (`specs/incident/STATUS.md` T-UI-LIST-01 **done** · T-BE-01/02 **done** · `rmms_incidents`) |
| sourceTables | `rmms_incidents` (`IncidentEntity`) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent list pack `incident` — **cấm** copy CRUD.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-su-co.md` |
| Form nguồn | `docs/context/features/incident.md` · list MFE Field `/incident` |
| Entity | `IncidentEntity` → table `rmms_incidents` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «BC Sự cố» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput loại/tuyến/mức/TT · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · drill `/incident?id=` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| type | Loại | `SearchInput` | enum loại sự cố (P1 seed = `IncidentType`) |
| routeId | Tuyến | `SearchInput` | **road-route** |
| severity | Mức | `SearchInput` | Cao / TB / Nghiêm trọng / Thấp |
| status | Trạng thái | `SearchInput` | Mở / Đang xử lý / Đóng |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `RequestedAt` / DTO `at` |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · loại |

## Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| mã | `Code` | `rmms_incidents` |
| tuyến | `RouteName` | same |
| loại | `IncidentType` | same |
| mức | `Severity` | same |
| trạng thái | `Status` | same |
| thời gian | `RequestedAt` | same |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/incidents` |
| Excel | `GET api/v1/report/incidents/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại / mức / TT | enum seed FE P1 (khớp `IncidentEntity`) |

Perm stub: `report.su-co.read`. Context `api/v1/reports/incidents` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/su-co` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
