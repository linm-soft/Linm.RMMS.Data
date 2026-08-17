# Data-analy — controlHint — rpt-thien-tai (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-thien-tai` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-thien-tai-context-20260816` |
| analyzedAt | `2026-08-16T10:50:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_b580eac0` |
| autoApprove | `ON` |
| sourceFeature | `incident` |
| sourceFormReady | **yes** (`specs/incident/STATUS.md` T-UI-LIST-01 **done** · T-BE-01/02 **done** · `rmms_incidents`) |
| sourceTables | `rmms_incidents` (`IncidentEntity`) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`**.  
> Parent list pack `incident` — **cấm** copy CRUD. Chỉ sự kiện thiên tai.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-thien-tai.md` |
| Form nguồn | `docs/context/features/incident.md` · MFE Field `/incident` |
| Entity | `IncidentEntity` → `rmms_incidents` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Thiên tai, bão lũ» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput tuyến/loại · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · drill `/incident?id=` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| type | Loại sự kiện | `SearchInput` | Bão / Lũ / Sạt lở / Ngập úng / Lốc / Sét |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `RequestedAt` / DTO `at` |
| qSearch | Tìm kiếm | `Input` | tuyến · loại · km · thiệt hại |

## Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| ngày | `RequestedAt` | `rmms_incidents` |
| tuyến | `RouteName` | same |
| loại | `IncidentType` | same |
| phạm vi km | `KmStart`–`KmEnd` | same |
| mức | `Severity` | same |
| thiệt hại tóm tắt | `Description` (P1 typed = tóm tắt thiệt hại; **không** Col*) | same |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/disasters` |
| Excel | `GET api/v1/report/disasters/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại | enum FE P1 (disaster subset) |

Perm stub: `report.thien-tai.read`. Context plural `api/v1/reports/disasters` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/thien-tai` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
