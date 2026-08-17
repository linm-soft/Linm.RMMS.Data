# Data-analy — controlHint — rpt-cong-van (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-cong-van` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-cong-van-context-20260815` |
| analyzedAt | `2026-08-15T15:32:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_6f9f0ca2` |
| autoApprove | `ON` |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent hub `reports` / list pack `ops` — **cấm** copy CRUD.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-cong-van.md` |
| Hub DA | `specs/_data-analy/features/reports-control-hint.md` |
| Shared | org-unit Chi cục II.* · **cấm QL.22** trên seed tuyến (N/A filter tuyến P1) |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Công văn đi — đến» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput chiều/đơn vị · Date từ/đến · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · số CV · ngày · trích yếu · chiều · đơn vị · drill Ops |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| direction | Chiều | `SearchInput` | `di` / `den` / empty=Tất cả |
| orgUnitId | Đơn vị | `SearchInput` | **org-unit** |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | |
| qSearch | Tìm kiếm | `Input` | số CV · trích yếu |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/official-docs` |
| Excel | `GET api/v1/report/official-docs/export` |
| đơn vị | seed org-unit P1 (Type A Integration P2) |

Perm stub: `report.cong-van.read`. Context `api/v1/reports/official-docs` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/cong-van`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
