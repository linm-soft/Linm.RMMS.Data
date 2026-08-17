# Data-analy — controlHint — rpt-vi-pham-hlatdb (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-vi-pham-hlatdb` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-vi-pham-hlatdb-context-20260816` |
| analyzedAt | `2026-08-16T16:40:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_24fb0ec1` |
| autoApprove | `ON` |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `RowViolation` (`rmms_csdl_catalog_records` kind `row-violations` · field typed CSDL §3.6) |
| sourceFormReady | **yes** — cột entity chốt tại `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.6 (không TBD / Col1–Col3) · T-UI-LIST-01 **done** trên `specs/csdl-so-sach/STATUS.md` |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent hub `reports` / list pack `csdl-so-sach` — **cấm** copy CRUD `RowViolation`.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-vi-pham-hlatdb.md` |
| Entity | `RowViolation` · `At` `StationKm` `AdminArea` `ViolationStatus` `OrgName` `MinutesDepot` `MinutesCommune` `MinutesAdmin` `CurrentState` `UnitConfirm` |
| Hub DA | `specs/_data-analy/features/reports-control-hint.md` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Grid ← form nguồn (cấm Col1–Col3)

**Tab `detail` (thống kê chi tiết)**

| Cột lưới | Field nguồn |
|----------|-------------|
| Ngày | `At` |
| Tuyến | `RouteId` / mã tuyến gắn vi phạm (P1 seed CUC2) |
| Km | `StationKm` |
| Địa bàn | `AdminArea` |
| TT / loại VP | `ViolationStatus` |
| Tổ chức | `OrgName` |
| BB hạt | `MinutesDepot` |
| BB xã | `MinutesCommune` |
| BB hành chính | `MinutesAdmin` |
| Hiện trạng | `CurrentState` |
| Đơn vị xác nhận | `UnitConfirm` |

**Tab `summary` (tổng hợp theo tuyến)** — aggregate read-model từ cùng bảng: tuyến · số VP · tồn đọng (`ViolationStatus=ton-dong`) · ngày gần nhất (`At`).

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Vi phạm HLATĐB» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput tab/tuyến/TT · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · 2 tab · drill CSDL sổ 6 `row-violations` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| tab | Tab | `SearchInput` | `detail` Thống kê chi tiết / `summary` Tổng hợp theo tuyến |
| routeId | Tuyến | `SearchInput` | **road-route** |
| status | Loại / TT vi phạm | `SearchInput` | `phat-hien` / `lap-bb` / `dang-xu-ly` / `da-xu-ly` / `ton-dong` / empty=Tất cả |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | trên `At` (`day`) |
| qSearch | Tìm kiếm | `Input` | tuyến · km · địa bàn · tổ chức · hiện trạng |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/row-violations` |
| Excel | `GET api/v1/report/row-violations/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm stub: `report.vi-pham-hlatdb.read`. Context `api/v1/reports/row-violations` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/vi-pham-hlatdb` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
