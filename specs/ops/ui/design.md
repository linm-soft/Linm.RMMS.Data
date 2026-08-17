# Design — ops (Chỉ đạo điều hành / công văn)

| Field | Value |
|-------|-------|
| feature | `ops` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog list A–D + **full-page** form Z1–Z3 — **cấm** Kind D Slideout |
| status | `confirmed` (autopilot) |
| changeScope | `edit_page` |
| packKind | `list` |
| requestSource | run packet `task_6f04bbd7` · `/agent-qldb-workflow` · roleOnly=`design` · autoApprove=**ON** |
| prior · po | `confirmed` · `specs/ops/po/requirement.md` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/ops-control-hint.md` · contentHash `sha256:ops-delta-official-doc-20260816` |
| taskId | `task_6f04bbd7` |
| autoApprove | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/ops` · `http://localhost:9304/ops` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/notification/inbox`** (**cấm ERP.***) |
| domain | **Notification** |
| updatedAt | `2026-08-16T02:00:00.000Z` |
| design_confirm | `approve` (autopilot · task_6f04bbd7) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-OPS | `docs/context/features/ops.md` | Inbox · compose · KPI · ≠ patrol map |
| DEM-OPS | `Linm.RMMS.Demo/.../ops-demo.html` → `ops/ops.html` | visual SSOT · **không** clone chrome |
| DA-01 | `specs/_data-analy/features/ops-control-hint.md` | controlHint SSOT |
| DI-OPS | — | Excel out of pack |

**Delta pack (lock):** OfficialDocument trên inbox — `documentNumber` · `direction` · `summary` · `orgUnitCode`/`orgUnitName`. Stale Design (Slideout · 12 field không CV · native select · View=readOnly) **SUPERSEDED**.

Live MFE sau `task_31a9bbd8` đã ship CV + schema editor. Design **chốt UI** + proto content-only. Dev sau = verify / no-op nếu parity giữ.

**≠** GOVOne Giám sát (`patrol`) — map realtime **cấm** embed; nav Patrol/Gis.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** list + **full-page** form |
| List pattern | 1× `LinPageLayout kind="catalog"` — **cấm** nested CatalogListShell |
| Grid | `LinCatalogDataGrid` + kéo cột default **ON** · `columns={buildDynamicGridColumns(schema, uiColumns)}` |
| Footer | `LinCatalogListPagination` 50 / 100 / 200 / 500 — **cấm** footerPagination / pageSizeBar / raw table product |
| Form pattern | Full-page `NotificationFormPage` C/E/V/Copy — **cấm** Slideout / Resource / Modal form |
| View | `<dl>` display — **cấm** View=`readOnly` Input xám |
| Routes | List `/ops` · form `/ops/new` · `/ops/:id` · copy `/ops/:id?mode=copy` |
| Zone F | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · kind=`ops-inbox` — **cấm** `LinListTableConfigModal` editor cột · **cấm** `configHint` |
| Toolbar SSOT | `catalog-list-toolbar` + `erp-control-icon-map` |
| Badge | ≠ GOVOne giamsat · Command center **P2** stub |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Inbox chỉ đạo `/ops` | list | KPI strip · **A Header · B Toolbar · C Grid · D Pagination** · F schema modal | SearchText · SearchInput status/priority/type/**direction**/**org-unit** · unread toggle |
| Tạo / Chi tiết `/ops/new` · `/ops/:id` | create/edit/view/copy | **Z1** toolbar · **Z2a** banner · **Z2b** fields · **Z3** footer | controlHint §3 · View=`<dl>` |

### DES-GRID

| Zone | Spec |
|------|------|
| DES-GRID-A | Title «Chỉ đạo điều hành» — **cấm** Thêm mới trên A |
| DES-GRID-B | Tạo mới **primary** · Làm mới · history stub · config `fa-cog` · mark-all-read · export stub · nav Giám sát / Bản đồ / Sự cố · Command P2 stub |
| DES-GRID-B-filter | SearchText (mã · tiêu đề · số CV · trích yếu · đội) · SearchInput status / priority / type / **direction** / **orgUnitCode** · unread — đổi filter → page=1 |
| DES-GRID-C | `LinCatalogDataGrid` · resize ON · unread row emphasis · row menu Xem · Sửa · Sao chép · Đánh dấu đã đọc · Giao việc P2 stub |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | Schema editor mock + product `LinCatalogUiSchemaEditorModal` · seed `ops-inbox` |
| DES-KPI | 4 ô: Cán bộ online · Sự cố mở · WO đang SC · Chưa đọc (`GET overview`) |

### DES-FORM

| Zone | Spec |
|------|------|
| Z1 | Quay lại · Đóng · title · dirty badge · hint |
| Z2a | Validation banner (tiêu đề · nội dung · người nhận · status) |
| Z2b | Fields §3 — **cấm** native `<select>` lookup |
| Z3 | Gửi chỉ đạo · Lưu nháp · Xóa nội dung · Hủy · Giao việc P2 stub |
| View | `<dl>` — Copy → POST new · IdCode `OPS-YYYYMMDD-NNNN` readonly · leave-confirm dirty |

## 3. Field inventory (control-map chốt)

| uiField | Label VN | Control | Required | FormMode lock |
|---------|----------|---------|----------|---------------|
| code | Mã chỉ đạo | Text IdCode `OPS-*` | auto | all **readonly** |
| documentNumber | Số công văn | Text | | view=`<dl>` |
| direction | Chiều | SearchInput · **cv-direction** `di`/`den` | | view=`<dl>` |
| summary | Trích yếu | Text textarea | | view=`<dl>` |
| orgUnitCode | Đơn vị | SearchInput · **org-unit** · persist code+name | | view=`<dl>` |
| sender | Người gửi | Text | | create default · view=`<dl>` |
| sentAt | Thời gian gửi | Date (datetime) | | view=`<dl>` |
| status | Trạng thái | SearchInput · **ops-status** | * | view=`<dl>` |
| title | Tiêu đề | Text | * | view=`<dl>` |
| body | Nội dung | Text textarea | * | view=`<dl>` |
| recipient | Người nhận / đội | SearchInput | * | view=`<dl>` |
| priority | Độ ưu tiên | SearchInput · **ops-priority** | | view=`<dl>` |
| type | Loại chỉ đạo | SearchInput · **ops-type** | | view=`<dl>` |
| channel | Kênh gửi | SearchInput · **ops-channel** | | view=`<dl>` |
| linkRef | Liên kết nguồn | Text | | view=`<dl>` |
| reply | Phản hồi | Text textarea | P2 | view=`<dl>` |

**Cấm** native `<select>` / free-text đơn vị trên product UI. Prototype dùng `input`+`datalist` làm stand-in SearchInput.

### List columns (bootstrap schema `ops-inbox`)

STT · Mã · **Số CV** · **Chiều** · **Trích yếu** · **Đơn vị** · Tiêu đề · Người gửi · Người nhận · Ưu tiên · Loại · TT · Thời gian · actions

### Enums

| Enum | Values |
|------|--------|
| status | moi · dang-xu-ly · da-gui · nhap |
| priority | thap · trung-binh · cao · khan |
| type | tuan-tra · su-co · sua-chua · khac |
| channel | inbox · push · email |
| direction | di · den |

### Lookup (Design lock · SA không bắt buộc master API P1)

| catalogKind | Source |
|-------------|--------|
| ops-status / ops-priority / ops-type / ops-channel / recipient | FE `lookups.ts` |
| cv-direction | `DIRECTION_LOOKUP` Đi · Đến |
| org-unit | FE master Chi cục II (P1) · Integration API P2 |

## Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/ops-list-prototype.html` |
| Zones | **A–D** + KPI + filter CV + Zone F mock + **full-page** form Z1–Z3 (**không** Slideout) |
| Scope | content-only — skip note/sidebar/menu/chrome demo |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/ops-list-prototype.html` |
| design_confirm | **approve** (autoApprove=ON · agent · 2026-08-16) |

## Grid AC (Design)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D |
| AC-G-02 | Search + direction/orgUnit → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Sao chép / MarkRead / Giao việc P2 |
| AC-G-04 | Cột Số CV / Chiều / Trích yếu / Đơn vị |
| AC-G-05 | Pagination 50/100/200/500 |
| AC-G-06 | 1× page layout — không nested list shell |
| AC-G-07 | Flex + skeleton product — proto không blank body |
| AC-G-08 | Zone F schema editor — không configHint |

## Out of scope

- SignalR `OpsHub` · Command center full · map embed · Inventory track
- Clone chrome demo · Resource · Kind D Slideout
- Report leaf `rpt-cong-van` CRUD

## Handoff → SA

| Field | Value |
|-------|-------|
| API | `GET/POST/PUT/DELETE api/v1/notification/inbox` · `GET .../overview` · mark-read · mark-all-read |
| Query | `?search=&status=&priority=&type=&direction=&orgUnitCode=&unreadOnly=` |
| Schema | Integration catalogs kind=`ops-inbox` · `CatalogUiSchemaRegistry` |
| Lookup API | P1 FE constants — SA **không** invent ERP master · org-unit Integration P2 optional |
| BE root | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Notification** · **cấm** `ERP.Service.*` · `api/v1/rmms/*` |
| UI | Field `/ops` · form full-page |
| Next | sa = **pending** đến lượt (roleOnly=design this task) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T02:00:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:ops-delta-official-doc-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
