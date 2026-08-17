# Data-analy — controlHint — rpt-giay-phep-thi-cong (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-giay-phep-thi-cong` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-giay-phep-thi-cong-context-20260816` |
| analyzedAt | `2026-08-16T04:20:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_63e7d1ee` |
| autoApprove | `ON` |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `ConstructionPermit` |
| sourceFormReady | **yes** — cột entity chốt tại `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.6 (không TBD / Col1–Col3) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent hub `reports` / list pack `csdl-so-sach` — **cấm** copy CRUD cấp phép.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-giay-phep-thi-cong.md` |
| Entity | `ConstructionPermit` · `PermitNo` `PermitDate` `Issuer` `Investor` `Contractor` `WorkName` `StationKm` `IssuedAt` `ExpiresAt` `ExtendedAt` |
| Hub DA | `specs/_data-analy/features/reports-control-hint.md` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Grid ← form nguồn

| Cột lưới | Field nguồn |
|----------|-------------|
| Số GP | `PermitNo` |
| Tuyến | `RouteId` / mã tuyến gắn GP (P1 seed CUC2) |
| Km | `StationKm` |
| Chủ đầu tư | `Investor` |
| Công trình | `WorkName` |
| Hiệu lực | `IssuedAt` → `ExpiresAt` (+ `ExtendedAt`) |
| TT | trạng thái GP: `hieu-luc` / `het-han` / `gia-han` |
| Ngày GP | `PermitDate` |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Giấy phép thi công» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput tuyến/TT · Date từ/đến · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · số GP · tuyến · km · CĐT · hiệu lực · TT · drill CSDL sổ sách |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| status | Trạng thái GP | `SearchInput` | `hieu-luc` / `het-han` / `gia-han` / empty=Tất cả |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | trên `PermitDate` |
| qSearch | Tìm kiếm | `Input` | số GP · CĐT · công trình |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/construction-permits` |
| Excel | `GET api/v1/report/construction-permits/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.giay-phep-thi-cong.read`. Context `api/v1/reports/construction-permits` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/giay-phep-thi-cong`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
