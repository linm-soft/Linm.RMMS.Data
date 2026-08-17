# PO — rpt-hang-muc-hu-hong (Hạng mục hư hỏng)

| Field | Value |
|-------|-------|
| feature | `rpt-hang-muc-hu-hong` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo context + data-analy + DOMAIN-MAP slug `rpt-*` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form. |
| Feature Kind | **E** · leaf `/bao-cao/hang-muc-hu-hong` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_f3810d11` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`done`/`confirmed` · artifact **`specs/_data-analy/features/rpt-hang-muc-hu-hong-control-hint.md`** (handoff path `specs/rpt-hang-muc-hu-hong/specs/_data-analy/clusters/rpt-hang-muc-hu-hong.md` **không tồn tại** — dùng artifact thật) · contentHash `sha256:rpt-hang-muc-hu-hong-context-20260816` · **no Excel cluster** · sourceKind=`feature_context` |
| sourceFeature | `ai-vision` |
| sourceFormReady | **yes** (`specs/ai-vision/STATUS.md` phase=`done`) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-16T05:15:00.000Z` |
| taskId | `task_f3810d11` |
| priorChain | `task_39d5fcb1` (full pipeline autoApprove ON — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `ai-vision`) |

## 1. Goal

Trang **Hạng mục hư hỏng** — Kind **E** leaf tách khỏi hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · kỳ · loại hạng mục · mức · nguồn · tìm** → bấm **Xem** mới load lưới. Xuất Excel theo cột lưới. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill dòng về MFE `ai-vision`.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/hang-muc-hu-hong` · mfeStdUrl `http://localhost:9311/bao-cao/hang-muc-hu-hong` · `yarn start:std` **:9311**.
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `ai-vision` giữ form nguồn. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne **OUT**.

## 2. Current → New (edit_page)

| Layer | Current (live / prior chain `task_39d5fcb1`) | New (delta PO này — Design re-review) |
|-------|-----------------------------------------------|----------------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` | Prototype content-only A–D (+ chart SoCai) · **skip** chrome/sidebar/menu · leaf HTML khi Design |
| MFE | `DefectReportPage` `/bao-cao/hang-muc-hu-hong` · 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` · SearchInput tuyến/loại/mức/nguồn · Date kỳ · Input tìm · **Xem** mới fetch · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Excel CSV · Config FULL · chart/print · drill `/ai-vision?id=` | **Giữ** Kind E · Design prototype + `reviewUrl` · **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · **cấm** Thêm mới Zone A · **cấm** Resource/Slideout form · **cấm** `LinListTableConfigModal` / `configHint` |
| API | `GET api/v1/report/defects` + `/defects/export` · in-memory P1 seed 12 mapped `AiVisionDetectionEntity` | **Không** đổi prefix · SA confirm lookup Type A tuyến Integration · query read-model EF `rmms_ai_vision_detections` **P2** — **không** bắt schema warehouse P1 |
| Context API | `GET /api/v1/reports/defects` | **Bỏ** — GAP-PO-HH-01 chốt `report/defects` |
| Prefix | DOMAIN-MAP singular Report | **`api/v1/report`** |
| BE | `Linm.RMMS.WebService` · Report · **cấm ERP.*** | STATUS `backend` = path + `api/v1/report` |
| Nguồn | `rmms_ai_vision_detections` · `sourceFormReady=yes` | **Không** expose CRUD trên trang báo cáo |
| Chart | SoCai khi đã Xem + có dòng | **Giữ P1** |

## 3. DoD (đo được)

1. Đổi filter chỉ là **draft**; **Xem** mới gọi `GET api/v1/report/defects`. Làm mới = re-fetch cùng filter đã Xem. Đổi filter sau Xem → page=1 khi Xem lại. Empty hint khi chưa Xem.
2. Zone A: title «Hạng mục hư hỏng» — **cấm** Thêm mới trên A.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tuyến** · **loại hạng mục** · **mức** · **nguồn** · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` / report display config — **cấm** stub/`configHint` · **cấm** `LinListTableConfigModal` height-only).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · skeleton · cột thật §5 · drill AI.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** hiện — **cấm** footerPagination / pageSizeBar / raw table.
6. Chart SoCai: chỉ khi `viewed === true` và có ≥1 dòng.
7. Excel: CSV UTF-8 BOM `defects.csv` theo cột đang hiện.
8. 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell.
9. Live: title + toolbar + grid/empty **không** blank/title-clip.
10. Auth JWT · tenant · perm `report.hang-muc-hu-hong.read` (FE gate ON · BE stub OK P1).
11. Dev: `yarn build` MFE PASS (+ `yarn typecheck` nếu có) · `dotnet build` BE PASS khi đụng API — ghi implement § Build.
12. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-hang-muc-hu-hong.md` | feature Kind E — API plural `reports` **stale** |
| CTX-02 | `docs/context/features/ai-vision.md` | parent list — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-hang-muc-hu-hong.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-hang-muc-hu-hong-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/hang-muc-hu-hong` · `http://localhost:9311/bao-cao/hang-muc-hu-hong` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 5. controlHint (PO chốt — từ data-analy)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| defectClass | Loại hạng mục | `SearchInput` | taxonomy AI enum seed FE P1 |
| severity | Mức | `SearchInput` | Critical / High / Medium / Low — **cấm** native Select |
| sourceKind | Nguồn | `SearchInput` | week / AI |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | |
| qSearch | Tìm kiếm | `Input` | mã DET · tuyến · km |

Grid (readonly — **cấm** Col1–Col3 placeholder):

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
| drill | `sourceId` | `/ai-vision?id=` |

Lookup API (đề xuất SA — PO không đổi prefix):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/defects?from=&to=&routeId=&defectClass=&severity=&sourceKind=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/defects/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại / mức / nguồn | enum seed FE P1 (taxonomy AI) |

Perm: `report.hang-muc-hu-hong.read`.

Seed P1: **12** dòng mapped `AiVisionDetectionEntity`.

## 6. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-HH-01 | API **`api/v1/report/defects`** (+ `/export`) — **đóng** context `GET /api/v1/reports/defects`. **Cấm** `api/v1/reports`. |
| GAP-PO-HH-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/hang-muc-hu-hong` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** CRUD catalog Kind B. |
| GAP-PO-HH-03 | `sourceFormReady=yes` · nguồn `ai-vision` / `rmms_ai_vision_detections`. **Cấm** copy CRUD detections/incident. |
| GAP-PO-HH-04 | Seed **12** CUC2 (38 tuyến) · **cấm** invent `QL.22` / `ĐT.*`. |
| GAP-PO-HH-05 | Config cột **FULL** P1 — **cấm** stub toast/`configHint`. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. In stub OK nếu chưa print engine. |
| GAP-PO-HH-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill `/ai-vision?id=`. |
| GAP-PO-HH-07 | Read-model EF join `rmms_ai_vision_detections` **P2** — P1 in-memory Report domain chấp nhận (review prior P2). |
| GAP-PO-HH-08 | mfeStdUrl **`http://localhost:9311/bao-cao/hang-muc-hu-hong`**. Dashboard KPI **không** gộp slug này. |
| GAP-PO-HH-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-HH-10 | autoApprove **ON** — Design/SA/Review tự confirm khi tới lượt · **không** auto tick BE+UI repo trước Dev. |

## 7. Grid AC (REQUIRED · report list surface)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar/filter · C Grid · D Pagination** |
| AC-G-02 | **Xem** apply draft → fetch · page=1 |
| AC-G-03 | Drill dòng → `/ai-vision?id={sourceId}` |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 **luôn** |
| AC-G-06 | 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Config cột FULL — **cấm** `LinListTableConfigModal` / `configHint` |

## 8. Out of pack

- CRUD detections / incident trên slug này.
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Warehouse schema P1.
- GOVOne chrome · parent JSON.
- Kind B nested CatalogListShell · `LinCatalogUiSchemaEditorModal` (catalog Kind B — report dùng report table config FULL).
- Lifecycle `/erp-feature`.
- `ERP.*` · `api/v1/rmms/*` · `api/v1/reports`.
- Invent tuyến ngoài CUC2 38.

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | **E** report A–D + chart SoCai (**không** Kind B form/CRUD) |
| Prototype | content-only zones A–D (+ chart) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo · **không** full demo clone |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | bảng §5 — **không** đổi SearchInput → Select |
| BE | `api/v1/report/defects` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |
| Chain | **ON** · pick cùng feature đến hết pipeline — **cấm** QA feature khác khi chain này còn pending |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T05:15:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-hang-muc-hu-hong-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| taskId | `task_f3810d11` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
