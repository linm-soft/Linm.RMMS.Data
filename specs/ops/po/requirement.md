# PO — ops (Chỉ đạo điều hành / công văn)

| Field | Value |
|-------|-------|
| feature | `ops` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** catalog list A–D + **full-page** form (`NotificationFormPage`) — **cấm** Kind D Slideout |
| status | `done` |
| requestSource | run packet `task_795b8b13` · `/agent-qldb-workflow` · roleOnly=`po` · autoApprove=**ON** |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/ops-control-hint.md` · contentHash `sha256:ops-delta-official-doc-20260816` · cluster `specs/ops/specs/_data-analy/clusters/ops.md` **không tồn tại** — SSOT = feature controlHint · **no Excel** · sourceKind=`synthetic` |
| taskId | `task_795b8b13` |
| autoApprove | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/ops` · `http://localhost:9304/ops` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/notification/inbox`** (**cấm ERP.***) |
| domain | **Notification** |
| updatedAt | `2026-08-16T01:50:00.000Z` |

## 1. Goal

Chốt yêu cầu Kind **B** list inbox + form full-page **Chỉ đạo điều hành** (công văn / điều hành) theo data-analy `feature_context`. Persona: Hạt trưởng · điều phối.

**Delta pack (SSOT lock):** OfficialDocument trên inbox — `documentNumber` · `direction` · `summary` · `orgUnitCode`/`orgUnitName`; Zone B SearchInput chiều/đơn vị; Zone F `LinCatalogUiSchemaEditorModal` kind=`ops-inbox`; View = `<dl>`. Align demo → MFE Field `/ops` · BE domain **Notification**.

Live MFE/BE sau `task_31a9bbd8` **đã ship** GAP data-analy (CV scalars · schema editor · filter direction/org-unit · View-dl). PO **không** invent field mới. Design **phải** rà prototype content-only A–D (cột CV · filter chiều/đơn vị · **không** Slideout). Dev = **verify / no-op** nếu parity giữ.

**≠** GOVOne Giám sát map (`patrol`) — realtime map **cấm** embed; nav Patrol/Gis.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `Domains/Master`.

## 2. Current → New (`edit_page`)

Nguồn SSOT: control-hint `2026-08-16T00:40:00.000Z` + live MFE `NotificationListPage` / `NotificationFormPage` + implement `task_31a9bbd8`.

| Layer | Current (live 2026-08-16) | New (delta this pack) |
|-------|---------------------------|------------------------|
| Kind / shell | 1× `LinPageLayout` A–D · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` | **keep** — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table |
| Zone B filter | SearchText + SearchInput status/priority/type · **direction** · **orgUnitCode** · unread toggle | **keep** — GET `?search=&status=&priority=&type=&direction=&orgUnitCode=&unreadOnly=` |
| Grid cols | STT · Mã · Số CV · Chiều · Trích yếu · Đơn vị · Tiêu đề · Người gửi · Người nhận · Ưu tiên · Loại · TT · Thời gian · actions | **keep** · schema-driven `buildDynamicGridColumns` |
| Zone F | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · seed `ops-inbox` | **keep** — **cấm** `LinListTableConfigModal` editor cột · **cấm** `configHint` |
| Form | Full page C/E/V/Copy · **5 cột** `data-form-cols="5"` · CV fields · View `<dl>` | **keep** — **cấm** Resource / Slideout / View=`readOnly` Input xám · **cấm** grid 2-cột (**GAP-P2-FORM-GRID-05**) |
| Prototype | `specs/ops/ui/prototype/ops-list-prototype.html` | **IN P1 Design:** content-only A–D + form **full-page** Z1–Z3 · cột CV · filter chiều/đơn vị · Zone F schema mock |
| Demo HTML | `ops-demo.html` → `ops/ops.html` | Giữ visual SSOT — **không** clone chrome |
| API / BE | Notification CRUD + OfficialDoc columns · BFF passthrough | **keep** · **cấm ERP.*** |
| Stale PO (trước pack) | Kind D Slideout · 12 fields không CV · configHint | **SUPERSEDED** — full-page + CV + schema editor |
| SignalR / Command / map | P2 stub | **OUT pack** |

## 3. Personas / DoD (đo được)

1. List load + **search work** (mã · tiêu đề · số CV · trích yếu · đội) — page=1 khi filter đổi.
2. Zone A: title «Chỉ đạo điều hành» — **cấm** Thêm mới trên A.
3. Zone B: Tạo mới primary · Làm mới · mark-all-read · export stub · nav patrol/gis/incident · Command center P2 stub · SearchInput status/priority/type/**direction**/**org-unit** · unread · config `fa-cog`.
4. Zone C: `LinCatalogDataGrid` + cột Số CV · Chiều · Trích yếu · Đơn vị · row menu Xem · Sửa · Sao chép · Đánh dấu đã đọc · Giao việc P2 stub.
5. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
6. Zone F: `LinCatalogUiSchemaEditorModal` kind=`ops-inbox`.
7. Form full-page: **5 cột** large · 3 medium · 2 small · validate + save · leave-confirm dirty · Copy → POST new · IdCode `OPS-YYYYMMDD-NNNN` readonly.
8. Required: title · body · recipient · status. CV fields optional. org-unit persist **code + name**.
9. View = `<dl>` display — **cấm** Input disabled xám toàn form.
10. Lookup: status/priority/type/channel/recipient/direction/org-unit = **SearchInput** — **cấm** native `<select>` / free-text đơn vị.
11. Overview KPI 4 ô (staffOnline · openIncidents · woInProgress · unread) — mock/API overview.
12. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build. **This PO role: no FE/BE write → build n/a.**

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/ops.md` | feature Kind B + full-page |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/ops-demo.html` | demo entry |
| DEM-02 | `Linm.RMMS.Demo/src/demo/ops/ops.html` | page |
| DI-01 | — | **no Excel cluster** |
| DA-01 | `specs/_data-analy/features/ops-control-hint.md` | controlHint SSOT |
| RPT-01 | `specs/_form-type/REPORT-SOURCE-FIELD-GAPS.md` | GAP-RPT-SRC-OPS-01 **CLOSED** live |
| MFE | `Linm.Web.RMMS.Field` `/ops` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Notification · `api/v1/notification/inbox` | API |

### List columns (bootstrap)

STT · Mã · Số CV · Chiều · Trích yếu · Đơn vị · Tiêu đề · Người gửi · Người nhận · Ưu tiên · Loại · TT · Thời gian · actions

### Form fields (controlHint — Design chốt UI · SA chốt API)

| Field key | Label | controlHint | required |
|-----------|-------|-------------|----------|
| code | Mã chỉ đạo | `Text` IdCode `OPS-*` readonly | auto |
| documentNumber | Số công văn | `Text` | |
| direction | Chiều | `SearchInput` · **cv-direction** | |
| summary | Trích yếu | `Text` textarea | |
| orgUnitCode | Đơn vị | `SearchInput` · **org-unit** | |
| sender | Người gửi | `Text` | |
| sentAt | Thời gian gửi | `Date` (datetime) | |
| status | Trạng thái | `SearchInput` · **ops-status** | * |
| title | Tiêu đề | `Text` | * |
| body | Nội dung | `Text` textarea | * |
| recipient | Người nhận / đội | `SearchInput` | * |
| priority | Độ ưu tiên | `SearchInput` · **ops-priority** | |
| type | Loại chỉ đạo | `SearchInput` · **ops-type** | |
| channel | Kênh gửi | `SearchInput` · **ops-channel** | |
| linkRef | Liên kết nguồn | `Text` | |
| reply | Phản hồi | `Text` textarea | P2 |

### Status / priority / type / channel / direction

| Enum | Values |
|------|--------|
| status | moi · dang-xu-ly · da-gui · nhap |
| priority | thap · trung-binh · cao · khan |
| type | tuan-tra · su-co · sua-chua · khac |
| channel | inbox · push · email |
| direction | di · den |

### Lookup (P1 constants FE — SA không bắt buộc master API)

| catalogKind | Source |
|-------------|--------|
| ops-status / ops-priority / ops-type / ops-channel / recipient | FE `lookups.ts` |
| cv-direction | `DIRECTION_LOOKUP` Đi · Đến |
| org-unit | FE master Chi cục II (P1) · Integration API P2 |

CRUD: `GET/POST/PUT/DELETE api/v1/notification/inbox` · `GET api/v1/notification/overview` · mark-read · ui-schema Integration catalogs `ops-inbox`.

## 5. Grid AC (REQUIRED · list)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + filters (kể cả direction/orgUnit) apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Sao chép / MarkRead / Giao việc P2 |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · cột Số CV / Chiều / Trích yếu / Đơn vị |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` — **cấm** `configHint` / `LinListTableConfigModal` cột |

## 6. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-RPT-SRC-OPS-01 | Số CV · chiều · trích yếu · đơn vị | **CLOSED live** (`task_31a9bbd8`). Keep DoD. Design proto **IN** nếu stale. |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | configHint | **CLOSED live**. Keep schema editor. |
| GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | leftover `const columns` | **CLOSED live**. Seed `ops-inbox`. |
| GAP-LIST-FILTER-CV | Filter chiều / đơn vị | **CLOSED live**. Keep. |
| Kind D Slideout | Stale PO/context capture | **SUPERSEDED** — full-page only. |
| GAP-F-OPS-01 | Command center full | **P2** badge + modal stub. |
| GAP-F-OPS-02 | Device/Vehicle track | **P2–P3** Inventory. |
| GAP-F-OPS-04 | Map realtime trong Notification | **Cấm** — nav Patrol/Gis. |
| SignalR OpsHub | Realtime | **DEFER P2**. |
| parent JSON / ERP | — | **Cấm**. BE = `Linm.RMMS.WebService` Notification. |

## 7. Out of scope (this pack)

- SignalR `OpsHub` realtime
- Command center full hub
- Map realtime trong Notification MFE
- Device/Vehicle track Inventory
- 22 GOVOne chrome actions — skip
- Clone chrome demo · Resource · Kind D Slideout
- Report leaf `rpt-cong-van` CRUD (leaf = Kind E; nguồn đọc từ ops — **không** copy CRUD sang report)

## 8. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B list A–D + Full page form Z1–Z3 (**không** Slideout / Modal) |
| Prototype | content-only · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome · **bắt buộc** cột CV + filter chiều/đơn vị |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm |
| controlHint | bảng §4 — **cấm** native select status/priority/type/direction/org-unit |
| Demo visual | `ops-demo.html` → `ops/ops.html` |
| BE | `api/v1/notification/inbox` + `overview` · **cấm** `api/v1/rmms/*` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T01:50:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:ops-delta-official-doc-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=2 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
