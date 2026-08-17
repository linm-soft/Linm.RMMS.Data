# Data-analy — controlHint — rpt-hang-muc-hu-hong (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-hang-muc-hu-hong` |
| packKind | `report` |
| mode | `feature_context` (Start `roleOnly=data_analy` · **no Excel**) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| contentHash | `sha256:rpt-hang-muc-hu-hong-context-20260816` |
| analyzedAt | `2026-08-16T05:30:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_39d5fcb1` |
| autoApprove | `ON` |
| sourceFeature | `ai-vision` |
| sourceFormReady | **yes** (`specs/ai-vision/STATUS.md` phase=`done`) |
| sourceTables | `rmms_ai_vision_detections` (`AiVisionDetectionEntity`) |

> **Cấm ERP.*** · domain **Report** · BE `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/report`** (không `api/v1/reports`).  
> Parent list pack `ai-vision` — **cấm** copy CRUD.

## Sources

| Source | Path |
|--------|------|
| Context | `docs/context/features/rpt-hang-muc-hu-hong.md` |
| Form nguồn | `docs/context/features/ai-vision.md` · controlHint `ai-vision-control-hint.md` |
| Entity | `AiVisionDetectionEntity` → table `rmms_ai_vision_detections` |
| Shared | CUC2 `road-route-seed.json` 38 tuyến · **cấm QL.22** |

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Hạng mục hư hỏng» — **cấm** Thêm mới |
| B | Toolbar + filter | Xem · Làm mới · In · Config FULL · Xuất Excel · SearchInput tuyến/loại/mức/nguồn · Date kỳ · Input tìm |
| C | `LinCatalogDataGrid` | kéo cột ON · drill `/ai-vision?id=` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** hiện |

## Control hint — filters

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** |
| defectClass | Loại hạng mục | `SearchInput` | enum taxonomy AI |
| severity | Mức | `SearchInput` | Critical/High/Medium/Low |
| sourceKind | Nguồn | `SearchInput` | week / AI |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | |
| qSearch | Tìm kiếm | `Input` | mã DET · tuyến · km |

## Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | Table |
|-------------|--------------|-------|
| mã | `Code` | `rmms_ai_vision_detections` |
| tuyến | `RouteLabel` | same |
| km / đoạn | `SectionId` | same |
| hạng mục | `DefectClass` | same |
| mức | `Severity` | same |
| nguồn | `SourceKind` / `Engine` | same |
| TT | `Status` | same |
| ngày | `DetectedAt` | same |
| incident | `IncidentCode` | same |
| score | `Score` | same |

## Lookup APIs

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/defects` |
| Excel | `GET api/v1/report/defects/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại / mức / nguồn | enum seed FE P1 (taxonomy AI) |

Perm stub: `report.hang-muc-hu-hong.read`. Context `api/v1/reports/defects` **stale** → singular DOMAIN-MAP.

## Handoff

→ PO Kind E leaf · không CRUD · route `/bao-cao/hang-muc-hu-hong` · `sourceFormReady=yes`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
