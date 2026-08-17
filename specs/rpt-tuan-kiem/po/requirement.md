# PO — rpt-tuan-kiem (Báo cáo tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `rpt-tuan-kiem` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo context + data-analy + DOMAIN-MAP slug `rpt-tuan-kiem` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form. |
| Feature Kind | **E** · leaf `/bao-cao/tuan-kiem` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_f58e9de2` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`done`/`confirmed` · artifact **`specs/_data-analy/features/rpt-tuan-kiem-control-hint.md`** (handoff path `specs/rpt-tuan-kiem/specs/_data-analy/clusters/rpt-tuan-kiem.md` **không tồn tại** — dùng artifact thật) · contentHash `sha256:rpt-tuan-kiem-context-20260816` · **no Excel cluster** · sourceKind=`feature_context` |
| sourceFeature | `patrol` |
| sourceTables | `PatrolSession` / `rmms_patrol_sessions` (`PatrolSessionEntity`) |
| sourceFormReady | **yes** — entity live `api/v1/patrol/sessions` · cột scalar chốt trên `PatrolSessionEntity` (không TBD / Col1–Col3). Pipeline list `patrol` có thể `blocked` (gap crud_formtype) **không** thiếu cột nguồn cho báo cáo. |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy + STATUS feature · SSOT live lệch `qldb-workflow-skill-version.json` nếu có — **không** regen; Autopilot không AskQuestion) |
| updatedAt | `2026-08-16T22:25:00.000Z` |
| taskId | `task_f58e9de2` |
| priorChain | `task_afa75ec9` (pipeline autoApprove ON — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `patrol`) |

## 1. Goal

Trang **Báo cáo tuần kiểm** — Kind **E** leaf tách khỏi hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · trạng thái CI · nhân viên · kỳ · tìm** → bấm **Xem** mới load lưới phiên tuần kiểm (`PatrolSession` · `PatrolType=inspect`). Xuất Excel CSV UTF-8 BOM theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill dòng về MFE nguồn `/patrol?id={sessionId}`.

**Khác** `rpt-nhat-ky-tuan-kiem`: **không** sổ `InspectionLogBook`/`InspectionLogEntry` · **cấm** reuse `GET api/v1/report/patrol-log-inspect`.  
**Khác** tuần đường: **cấm** gộp phiên `PatrolType=road` vào lưới P1 (seed road phải bị filter loại).

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/tuan-kiem` · mfeStdUrl `http://localhost:9311/bao-cao/tuan-kiem` · `yarn start:std` **:9311**.
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `patrol` giữ CRUD session. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne **OUT**.

## 2. Current → New (edit_page)

| Layer | Current (live / prior chain `task_afa75ec9`) | New (delta PO này — Design re-review) |
|-------|-----------------------------------------------|----------------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` | Prototype content-only A–D (+ chart SoCai) · **skip** chrome/sidebar/menu · leaf HTML khi Design |
| MFE | `PatrolInspectReportPage` `/bao-cao/tuan-kiem` · 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` · SearchInput tuyến / trạng thái CI / NV · Date kỳ · Input tìm · **Xem** mới fetch · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Excel · Config FULL (`ReportDisplayConfigModal`) · drill phiên · chart SoCai | **Giữ** Kind E · Design prototype + `reviewUrl` · **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · **cấm** Thêm mới Zone A · **cấm** Resource/Slideout form · **cấm** `LinListTableConfigModal` / `configHint` · **cấm** gộp nhật ký `patrol-log-inspect` / tuần đường |
| API | `GET api/v1/report/patrol-inspect` + `/export` · P1 in-memory seed 14 phiên `inspect` (+1 `road` excluded) · filter `PatrolType=inspect` | **Không** đổi prefix · SA confirm lookup Type A tuyến Integration · query read-model `PatrolSession` **P2** — **không** bắt schema warehouse P1 |
| Context API | `GET /api/v1/reports/patrol-inspect` | **Bỏ** — GAP-PO-BTK-01 chốt singular `report/patrol-inspect` |
| Prefix | DOMAIN-MAP singular Report | **`api/v1/report`** |
| BE | `Linm.RMMS.WebService` · Report · **cấm ERP.*** | STATUS `backend` = path + `api/v1/report/patrol-inspect` |
| Nguồn | `PatrolSessionEntity` · `sourceFormReady=yes` | **Không** expose CRUD trên trang báo cáo · tree Company→QL→Km **P2** (entity **không** có field Company/QL/Km riêng) |
| Chart | SoCai khi đã Xem + có dòng | **Giữ P1** |

## 3. DoD (đo được)

1. Đổi filter chỉ là **draft**; **Xem** mới gọi `GET api/v1/report/patrol-inspect`. Làm mới = re-fetch cùng filter đã Xem. **Làm mới khi chưa Xem** = toast SSOT, **không** fetch. Đổi filter sau Xem → page=1 khi Xem lại. Empty hint khi chưa Xem.
2. Zone A: title «Báo cáo tuần kiểm» — **cấm** Thêm mới trên A.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tuyến** · **trạng thái CI** · **nhân viên** · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` / `ReportDisplayConfigModal` — **cấm** stub/`configHint` · **cấm** `LinListTableConfigModal` height-only).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · skeleton · cột §5 · drill `/patrol?id={sessionId}`.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** hiện — **cấm** footerPagination / pageSizeBar / raw table.
6. Chart SoCai: chỉ khi `viewed === true` và có ≥1 dòng.
7. Excel: CSV UTF-8 BOM theo cột đang hiện · filename `patrol-inspect.csv`.
8. 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell.
9. Live: title + toolbar + grid/empty **không** blank/title-clip.
10. Auth JWT · tenant · perm `report.tuan-kiem.read` (FE gate ON · BE stub OK P1).
11. Dev: `yarn build` MFE PASS (+ `yarn typecheck` nếu có) · `dotnet build` BE PASS khi đụng API — ghi implement § Build.
12. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports` · **cấm** reuse `patrol-log-inspect`. Chỉ phiên `PatrolType=inspect`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-tuan-kiem.md` | feature Kind E — API plural `reports/patrol-inspect` **stale** |
| CTX-02 | `docs/context/features/patrol.md` | parent list / entity nguồn `PatrolSession` — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-tuan-kiem.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-tuan-kiem-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/tuan-kiem` · `http://localhost:9311/bao-cao/tuan-kiem` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 5. controlHint (PO chốt — từ data-analy)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| status | Trạng thái CI | `SearchInput` | enum `in_progress` / `done` / `missed` / `offline` — **cấm** native Select |
| staffId | Nhân viên | `SearchInput` | nva/ttb/lvc/pmd P1 — **cấm** native Select |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | trên `PlannedDate` / `day` |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · NV · ghi chú |

Grid (readonly — **cấm** Col1–Col3 placeholder · **cấm** cột Company/QL/Km riêng P1):

| Grid column | Source field | Table |
|-------------|--------------|-------|
| Ngày | `PlannedDate` → `day` | `PatrolSession` |
| Mã phiên | `Code` | `PatrolSession` |
| Tuyến | `Route` | `PatrolSession` |
| Nhân viên | `UserName` | `PatrolSession` |
| Loại tuần | `PatrolType` (`inspect` = Tuần kiểm) | `PatrolSession` |
| Điểm CI | `CheckInCount` | `PatrolSession` |
| Coverage % | `CoveragePercent` | `PatrolSession` |
| Trạng thái | `Status` | `PatrolSession` |
| Offline | `OfflineQueued` | `PatrolSession` |
| Ghi chú | `Note` | `PatrolSession` |
| Nguồn / drill | `Id` → `sessionId` | `PatrolSession` |

Lookup API (đề xuất SA — PO không đổi prefix):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/patrol-inspect?routeId=&status=&staffId=&from=&to=&q=&page=&pageSize=` |
| Excel | `GET api/v1/report/patrol-inspect/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| trạng thái / NV | enum/lookup FE P1 |

Perm: `report.tuan-kiem.read`.

Seed P1: **14** phiên `PatrolType=inspect` mapped `PatrolSession` (+ tối đa 1 seed road **excluded** khỏi lưới) · tuyến **CUC2** · **cấm QL.22**.

Drill: `/patrol?id={sessionId}`.

## 6. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-BTK-01 | API **`api/v1/report/patrol-inspect`** (+ `/export`) — **đóng** context `GET /api/v1/reports/patrol-inspect`. **Cấm** `api/v1/reports`. **Cấm** reuse `patrol-log-inspect`. |
| GAP-PO-BTK-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/tuan-kiem` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** CRUD catalog Kind B. |
| GAP-PO-BTK-03 | `sourceFormReady=yes` · nguồn `patrol` `PatrolSessionEntity`. **Cấm** copy CRUD session. |
| GAP-PO-BTK-04 | Seed **14** phiên inspect CUC2 (38 tuyến) · **cấm** invent `QL.22` / `ĐT.*`. Chỉ `PatrolType=inspect`. |
| GAP-PO-BTK-05 | Config cột **FULL** P1 — **cấm** stub toast/`configHint`. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. In stub OK nếu chưa print engine. |
| GAP-PO-BTK-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill `/patrol?id=`. |
| GAP-PO-BTK-07 | Read-model EF `rmms_patrol_sessions` **P2** — P1 in-memory Report domain chấp nhận. |
| GAP-PO-BTK-08 | mfeStdUrl **`http://localhost:9311/bao-cao/tuan-kiem`**. Dashboard KPI **không** gộp slug này. **Không** gộp nhật ký tuần kiểm / tuần đường. |
| GAP-PO-BTK-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-BTK-10 | autoApprove **ON** — Design/SA/Review tự confirm khi tới lượt · **không** auto tick BE+UI repo trước Dev. |
| GAP-PO-BTK-11 | Config report: `LinReportTableConfigModal` / `ReportDisplayConfigModal` — **không** bắt `LinCatalogUiSchemaEditorModal` (đó là Kind B catalog). |
| GAP-PO-BTK-12 | Tree Company→QL→Km **OUT P1** — entity không có field; **cấm** bịa cột Company/QL/Km trên lưới. |

## 7. Grid AC (REQUIRED · report list surface)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar/filter · C Grid · D Pagination** |
| AC-G-02 | **Xem** apply draft → fetch · page=1 · Làm mới `!viewed` = toast không fetch |
| AC-G-03 | Drill dòng → `/patrol?id={sessionId}` |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 **luôn** |
| AC-G-06 | 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Config cột FULL — **cấm** `LinListTableConfigModal` / `configHint` |
| AC-G-09 | Cột lưới đúng §5 (ngày · mã · tuyến · NV · loại · điểm CI · coverage · TT · offline · ghi chú · drill) |
| AC-G-10 | Lưới **chỉ** `PatrolType=inspect` — **cấm** hiện phiên road / nhật ký sổ |

## 8. Out of pack

- CRUD `patrol` / session trên slug này.
- Nhật ký sổ `InspectionLogBook` · reuse `patrol-log-inspect`.
- Gộp tuần đường (`road`) vào lưới P1.
- Cột Company / QL / Km tree P1.
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Warehouse schema P1.
- GOVOne chrome · parent JSON.
- Kind B nested CatalogListShell · `LinCatalogUiSchemaEditorModal` bắt buộc (catalog Kind B — report dùng report table config FULL).
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
| BE | `api/v1/report/patrol-inspect` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** `patrol-log-inspect` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |
| Chain | **ON** · pick cùng feature đến hết pipeline — **cấm** QA feature khác khi chain này còn pending |
| This task | `roleOnly=po` · **không** chạy Design trong task `task_f58e9de2` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T22:25:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-tuan-kiem-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| ssotLiveNote | STATUS stamp `2026.08.15.5` / schema `1` · **keep_current** (Autopilot không AskQuestion) |
| taskId | `task_f58e9de2` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
