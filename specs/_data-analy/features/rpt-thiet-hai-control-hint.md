# Data-analy — controlHint — rpt-thiet-hai (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-thiet-hai` |
| packKind | `report` |
| mode | `feature_context` |
| status | `done` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-thiet-hai-context-20260816` |
| taskId | `task_11d09197` |
| sourceFeature | `incident` |
| sourceFormReady | **yes** (`T-UI-LIST-01` · `T-BE-01/02` done · `rmms_incidents`) |
| sourceTables | `rmms_incidents` (`IncidentEntity`) |

> **Cấm ERP.*** · `api/v1/report` · parent `incident` — **cấm** copy CRUD.

## Filters

| Field key | Label | controlHint |
|-----------|-------|-------------|
| routeId | Tuyến | SearchInput road-route · cấm QL.22 |
| type | Hạng mục | SearchInput (AssetLabel) |
| fromDate / toDate | Kỳ | Date |
| qSearch | Tìm | Input · query `search` |

## Grid ← form nguồn

| Grid | Source |
|------|--------|
| tuyến | `RouteName` |
| hạng mục | `AssetLabel` |
| KL | typed Qty P1 seed |
| ĐVT | typed Unit P1 |
| ước giá | typed EstValue P1 |
| nguồn | typed Source P1 |

API: `GET api/v1/report/damage-qty` + `/export`. Perm `report.thiet-hai.read`.

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
