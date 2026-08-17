# Data-analy — controlHint — rpt-tinh-trang-mat-duong (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tinh-trang-mat-duong` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-tinh-trang-mat-duong-context-20260816` |
| analyzedAt | `2026-08-16T19:20:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_8ea2e70d` |
| autoApprove | `ON` |
| sourceFormReady | **yes** |
| sourceFeature | `pavement-section` |
| sourceTables | `rmms_pavement_sections` (`PavementSectionEntity`) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent list pack `pavement-section` — **cấm** copy CRUD vào trang này.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-tinh-trang-mat-duong.md` |
| Form nguồn | `specs/pavement-section/STATUS.md` **done** · PCI · LayerCode · MeasuredAt |
| Entity | `PavementSectionEntity` → `rmms_pavement_sections` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Tình trạng mặt đường» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput tuyến · SearchInput PCI band · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · đoạn · kmFrom–To · PCI · lớp · ngày đo · drill Asset |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| pciBand | PCI band | `SearchInput` | tot / kha / tb / kem / rat-kem |
| fromDate / toDate | Từ / Đến (kỳ đo) | `Date` | `MeasuredAt` |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · lớp |

## Grid ← form nguồn (cấm Col1–Col3)

| Grid key | Label | Source field |
|----------|-------|--------------|
| code | Đoạn / mã | `Code` |
| route | Tuyến | `RoadName` |
| kmFrom | Từ Km | `KmFrom` |
| kmTo | Đến Km | `KmTo` |
| pci | PCI | `Pci` |
| pciBandLabel | Band | derived `Pci` |
| layerCode | Lớp | `LayerCode` |
| measuredAt | Ngày đo | `MeasuredAt` |
| drill | Nguồn | `Id` → `/asset/pavement-section/{id}` |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/pavement-condition` |
| Excel | `GET api/v1/report/pavement-condition/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| PCI band | enum FE P1 |

Perm stub: `report.tinh-trang-mat-duong.read`. Context `api/v1/reports/pavement-condition` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/tinh-trang-mat-duong`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
