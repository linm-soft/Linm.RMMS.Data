# Design — incident (Quản lý sự cố / Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog list A–D+F + **Kind D Slideout** form Z1–Z3 |
| status | `confirmed` (autopilot) |
| design_confirm | **approve** (`autoApprove=ON` · `task_c4cdbe48`) |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `crud_formtype` · FormType CRUD **CLOSED** · delta P1: ROUTE/TYPE/HIST/FOOTER |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · route **`/su-co`** |
| mfeStdRoute | `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| peerStdUrl | `http://localhost:9304/su-co` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Incident** · **`api/v1/incident/incidents`** · **cấm ERP.*** |
| domain | **Incident** |
| prior · data_analy | `confirmed` · hash skip · `specs/_data-analy/features/incident-control-hint.md` · `incident-real-data.md` · contentHash `sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577` |
| prior · po | `confirmed` · `po/requirement.md` · `task_4fa6ad08` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role Design |
| shared_grid_example | `v1` |
| slideout_layout | `footer_actions_only` |
| real_view_parity | `v1` |
| list_config | **FULL** · `LinCatalogUiSchemaEditorModal` · **cấm** `configHint` |
| leave_standard | `LeaveConfirmModal` · **cấm** native alert/confirm |
| filter_bar | `LinErpListFilterBar` · **filter-bar-layout-hard** · input + 🔍 cụm phải |
| updatedAt | `2026-08-29T02:36:00.000Z` |
| taskId | `task_c4cdbe48` |

## 0. Context & Demo (from PO · hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/incident.md` | Signed feature |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md` | control-map cite |
| DEM-01 | `Linm.RMMS.Demo/.../incident-demo.html` | entry · **zone ref only** · **không** SSOT data |
| DEM-02 | `…/incident/incident.html` | page · **không** crawl lại (**GAP-DES-DEMO-RESCAN-01**) |
| DA-01 | `specs/_data-analy/features/incident-control-hint.md` | controlHint SSOT · done |
| DA-02 | `specs/_data-analy/features/incident-real-data.md` | §A–§F bind |
| PO-01 | `specs/incident/po/requirement.md` | DoD · Grid AC · Screens · Leave |
| MFE list | `IncidentListPage.tsx` | Kind B A–D live |
| MFE form | `IncidentFormSlideout.tsx` | Kind D live |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Incident · `api/v1/incident` |

Persona: Tuần đường · tuần kiểm · Hạt · Ban QLDA. **≠** Cổng người dân / citizen chrome · **cấm** badge AI trên Zone A header.

**Không đổi (FormType CLOSED):** Kind B A–D · Slideout C/E/V/Copy · leave-confirm · Delete + assign/close API · IdCode `VD-yyyyMMdd-nnnn` · prefix `api/v1/incident/incidents` · route `/su-co`.

## 1. Kind + UI pattern

| | |
|--|--|
| Feature Kind | **B** + **D** |
| List | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · `buildDynamicGridColumns` |
| Footer | **`LinCatalogListPagination`** 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** `ErpListHeaderFilters` / stack (**GAP-FILTER-BAR-01/07**) |
| Form | Kind **D Slideout** · **`data-form-cols=2`** · **footer actions only** (`slideout-form-layout`) |
| Toolbar | `catalog-list-toolbar` + `erp-control-icon-map` (`editConfig`=`fa-cog`) |
| View | `readOnly` display — **cấm** Input `disabled` xám toàn form |
| Leave | **`LeaveConfirmModal`** — **cấm** native `confirm`/`alert` |
| History | **`LinCatalogHistoryModal`** — **cấm** `window.alert` (**GAP-INC-HIST-01**) |
| Map | Kind F **DEFER** — **cấm** MFE list pack (**Q-INC-03**) |
| Typography | label **13px** · input D14/M16 (**GAP-TYP-01**) |

## 2. Screens (expand PO §7)

| id | Surface | Pattern | Open | FormMode | Actions |
|----|---------|---------|------|----------|---------|
| S-LIST | Danh sách sự cố | Kind B A–D + F + H | `/su-co` | — | search · status · severity · route · type · Tạo mới · Refresh · Delete · config · History |
| S-FORM-CREATE | Form sự cố | Kind D Slideout Z1–Z3 | toolbar / `?form=` | create | **footer only**: Hủy · Lưu |
| S-FORM-EDIT | Form sự cố | Kind D Slideout | row / dbl | edit | footer: Hủy · Lưu |
| S-FORM-VIEW | Form sự cố | Kind D Slideout | row / mã | view | footer: Đóng · Sửa · Sao chép · **cấm** disabled xám |
| S-FORM-COPY | Form sự cố | Kind D Slideout | row menu | create(copy) | POST new · clear id · new code · footer Hủy/Lưu |
| S-ACT-ASSIGN | Modal giao việc | Modal stacked | row / footer | — | Platform Task · `rmms-task-integrate` · **cấm** CV mock |
| S-ACT-CLOSE | Confirm đóng | Confirm modal | row / footer | — | `POST …/close` |
| S-ACT-DELETE | Confirm xóa | Confirm modal | toolbar / row | — | soft delete |
| S-HIST | Lịch sử | `LinCatalogHistoryModal` | toolbar / row | — | **GAP-INC-HIST-01** |
| S-MOD-CONFIG | Cấu hình cột | `LinCatalogUiSchemaEditorModal` | fa-cog | — | catalogKind=`incidents` |
| S-MOD-LEAVE | Rời form dirty | `LeaveConfirmModal` | Đóng/Hủy/route | — | Ở lại · Rời đi |
| S-SKIP-MAP | Kind F | — | — | — | **cấm** list pack |

**devSlash:** `/agent-dev` · **cấm** `/agent-dev-oms-map` · `/agent-dev-ai-detect` · `/agent-dev-camera-connect`.

**Tab index:** none (single slideout form · không multi-tab).

## 3. Prototype + reviewUrl (REQUIRED)

| | |
|--|--|
| Base | `agent-design/example/shared-grid-example.html` |
| Artifact | [`ui/prototype/incident-list-prototype.html`](./prototype/incident-list-prototype.html) |
| Scope | **content-only** — skip note/sidebar/menu/chrome demo · **skip** Kind F map |
| Zones | DES-GRID-A · B · FILTER · C0–C3 · C2a · D · F · H · Z (Z1–Z3 footer-only) · DES-MOD-LEAVE · DES-MOD-CONFIRM |
| TL map | `tl-design-grid-component-map.md` |
| SSOT | `list-shell-prototype` · `po-design-grid-standard` · `filter-bar-layout-hard` · `slideout-form-layout` · `design-real-view-parity` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/prototype/incident-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9304/su-co` |
| **real_view_parity** | `v1` — cùng shell peer Field Kind B (`LinPageLayout` · toolbar · filter bar · grid · pager · slideout) |

### Wire (list A–D)

```
[A] fa-exclamation-triangle + «Sự cố / Vấn đề»  (≠ citizen badge OK · NO AI badge · NO Thêm trên A)
[B] Làm mới · Lịch sử · fa-cog · Xem/Sửa · Xóa | [+ Tạo mới]
[FILTER] LinErpListFilterBar · SearchTextInput · status Dropdown · severity Dropdown
         · route SearchInput(road-route) · type Dropdown · 🔍 cụm phải
[C] title «Danh sách sự cố» · row-menu help · grid STT·□·Mã·Tiêu đề·Đoạn·Loại·Mức·TT·Ngày YC·AI·⋮
[D] LinCatalogListPagination — Tổng · Trang · Hiển thị [50|100|200|500] · FA ««‹›»»
[F] LinCatalogUiSchemaEditorModal «Cấu hình hiển thị danh mục» — List/width/filter/sort/Thêm cột
[H] LinCatalogHistoryModal (stub timeline · cấm alert)
```

### Wire (slideout DES-GRID-Z · footer only · GAP-INC-FOOTER-01)

```
[Z1] title · mode badge · dirty · ✕ close — cấm top Quay lại/Hủy/Lưu
[Z2a] validation banner
[Z2b] fields 2-col (control-map §5.2) · routeName=SearchInput · incidentType=Dropdown 6
[Z3] View: Đóng / Sao chép / Sửa / Giao việc / Đóng vấn đề
     C/E/Copy: Hủy / Lưu  (+ Giao việc / Đóng vấn đề khi edit có quyền)
```

## 4. DES-GRID → Lin* map

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / `LinPageHeader` |
| B | DES-GRID-B | `catalogToolbar` · `ERP_LIST_TOOLBAR_ACTIONS` |
| FILTER | DES-GRID-FILTER | `LinErpListFilterBar` (`data-lin-list-layout="erp-filter-bar"`) |
| C0 | DES-GRID-C0 | grid card title + help |
| C1 | DES-GRID-C1 | `SearchTextInput` trong filter bar — **search must work** |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · `buildDynamicGridColumns` · kéo cột ON |
| C2a | DES-GRID-C2a | column filter panel |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` |
| D | DES-GRID-D | **`LinCatalogListPagination`** |
| F | DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** · catalogKind=`incidents` |
| H | DES-GRID-H | `LinCatalogHistoryModal` · `useCatalogHistoryModal` |
| Z | DES-GRID-Z | Kind D slideout · footer-only · `data-form-cols=2` |
| — | shell | **1×** `LinPageLayout` |

**Config FULL (HARD):** title «Cấu hình hiển thị danh mục» · **cấm** `LinListTableConfigModal` · **cấm** leftover `const columns` · **cấm** `configHint`.

## 5. Control-map (chốt từ controlHint · PO §5)

### 5.1 List filters (Zone B / FILTER)

| Field key | Label | Control (chốt) | catalogKind | Notes |
|-----------|-------|----------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tiêu đề · đoạn · DET — **must work** |
| status | Trạng thái | `Dropdown` | LOOKUP_STATIC | `new` · `in_progress` · `closed` · trống=Tất cả |
| severity | Mức độ | `Dropdown` | LOOKUP_STATIC | `low` · `medium` · `high` · `critical` |
| routeName | Đoạn đường | **`SearchInput`** | **road-route** | **GAP-INC-ROUTE-01** · **cấm** Text free |
| incidentType | Loại sự cố | `Dropdown` | LOOKUP_STATIC | **Q-INC-01** · 6 mã init-data |
| orgTree | Công ty / Người ghi | — | org-unit | **DEFER P2** (**GAP-INC-ORG-01**) |
| hasGps | Định vị | `Checkbox` | — | optional filter P2 |

Filter đổi → **page=1**. **Cấm** nút Tìm riêng ngoài 🔍 bar.

### 5.2 Form fields (Slideout Kind D)

| Field key | Label | Control | Required | FormMode lock | Notes |
|-----------|-------|---------|----------|---------------|-------|
| code | Mã sự cố | `Text` readonly | auto | all readonly | IdCode `VD-yyyyMMdd-nnnn` |
| title | Tiêu đề | `Text` | * | view=readOnly | |
| routeName | Đoạn đường | **`SearchInput`** | * | view=readOnly | **road-route** · **GAP-INC-ROUTE-01** |
| incidentType | Loại sự cố | `Dropdown` | * | view=readOnly | LOOKUP_STATIC 6 loại |
| status | Trạng thái | `Dropdown` | * | view=readOnly | LOOKUP_STATIC |
| severity | Mức độ | `Dropdown` | | view=readOnly | LOOKUP_STATIC |
| requestedAt | Ngày yêu cầu | `Date` (datetime-local) | * | view=readOnly | local display · ISO write |
| reporterName | Người báo | `Text` | | view=readOnly | P2 → SearchInput users |
| assigneeName | Người xử lý | `Text` | | view=readOnly | assign API · P2 SearchInput |
| handleDirection | Hướng xử lý | `Dropdown` | | view=readOnly | Theo dõi · Sửa chữa ngay · Lập KH BT · Giao CV |
| readStatus | Trạng thái đọc | `Dropdown` | | view=readOnly | Chưa đọc · Đã đọc |
| reportStatus | TT báo cáo | `Dropdown` | | view=readOnly | Chưa BC · Đã BC hạt · Đã BC sở |
| assetLabel | Tài sản / hạng mục | `Text` | | view=readOnly | P2 SearchInput (**GAP-RPT-SRC-INC-HM** DEFER) |
| kmStart | Km đầu | `Text` | | view=readOnly | chainage |
| kmEnd | Km cuối | `Text` | | view=readOnly | |
| weather | Thời tiết | `Text` | | view=readOnly | |
| detectionId | AI Detection Id | `Text` | | view=readOnly | DET-* · **không** AI badge Zone A |
| causesCongestion | Gây ùn tắc | `Dropdown` bool | | view=readOnly | true/false |
| hasGps | Có GPS | `Dropdown` bool | | view=readOnly | |
| description | Mô tả | `Text` multiline | | view=readOnly | DamageSummary text OK |
| durationMin | Thời lượng (phút) | — | | | **DEFER** entity (**Q-INC-02**) |
| defectItem | Hạng mục hư hỏng | — | | | **DEFER** |
| sourceKind | Nguồn | — | | | **DEFER** |

### 5.3 Enum values (Design chốt · SA seed init-data)

**incidentType** (6 mã — **GAP-INC-TYPE-01** · mở rộng FE 4 → 6)

| value | Label |
|-------|--------|
| `o-ga` | Ổ gà |
| `sat-taluy` | Sạt taluy |
| `bien-bao` | Biển báo |
| `ngap-ung` | Ngập úng |
| `un-tac` | Ùn tắc |
| `khac` | Khác |

**status**

| value | Label |
|-------|--------|
| `new` | Mới |
| `in_progress` | Đang XL |
| `closed` | Đã đóng |

**severity**

| value | Label |
|-------|--------|
| `low` | Thấp |
| `medium` | Trung bình |
| `high` | Cao |
| `critical` | Critical |

**handleDirection**

| value | Label |
|-------|--------|
| `theo-doi` | Theo dõi |
| `sua-chua-ngay` | Sửa chữa ngay |
| `lap-kh-bt` | Lập KH BT |
| `giao-cv` | Giao CV |

**readStatus:** `chua-doc` · `da-doc`  
**reportStatus:** `chua-bc` · `da-bc-hat` · `da-bc-so`

### List columns (kéo cột ON)

STT · □ · **Mã** · **Tiêu đề** · **Đoạn** · **Loại** · **Mức độ** · **Trạng thái** · **Ngày YC** · **AI** (detectionId) · ⋮

**Cấm** header cột tên `TT`.

### Row menu (DES-GRID-C3)

**Xem · Sửa · Sao chép · Xóa · Giao việc · Đóng vấn đề · Lịch sử**

## 6. Leave / alert (REQUIRED · GAP-DES-LEAVE-01)

| Case | Control | Cấm |
|------|---------|-----|
| Dirty form / Đóng / Hủy / route leave | **`LeaveConfirmModal`** | native `window.confirm` / `beforeunload` only |
| Xóa / Đóng vấn đề | **`useAlert` / Confirm Modal** | `window.alert` / `prompt` / native `confirm` |
| History | `LinCatalogHistoryModal` | `window.alert` stub (**GAP-INC-HIST-01**) |
| API 4xx/5xx | `useAppToast` | silent fail / fake success |
| detail 404 | toast · đóng slideout | silent |
| Overlay trên Slideout | Modal stacked SSOT | z-index hack |

## 7. Current → New (Design delta P1)

| ID | Current (live) | New (design chốt) | P1 |
|----|----------------|-------------------|-----|
| GAP-INC-ROUTE-01 | `routeName` Text free | **SearchInput** `road-route` filter + form | **YES** |
| GAP-INC-TYPE-01 | Dropdown 4 mã FE | Dropdown 6 mã + init-data | **YES** |
| GAP-INC-HIST-01 | `window.alert` stub | `LinCatalogHistoryModal` | **YES** |
| GAP-INC-FOOTER-01 | top Quay lại/Hủy/Lưu | footer-only actions | **YES** |
| GAP-INC-ORG-01 | thiếu org filter | org-unit tree | **DEFER P2** |
| GAP-RPT-SRC-INC-* | thiếu DurationMin/child/DefectItem | ghi gap · không pretend | **DEFER** |
| GAP-INC-MAP-01 | demo Kind F | MFE map | **DEFER** |
| FormType CRUD | live CLOSED | **giữ** path/DTO | **CLOSED** |

## 8. APIs (handoff SA — **giữ** path cite · **cấm** invent)

Domain **Incident** · BFF `web-bff/api/v1/incident` · **cấm ERP.*** · **cấm** `api/v1/su-co/*` fork · **cấm** `api/v1/rmms/*`.

| Op | Method | Path |
|----|--------|------|
| list | GET | `/api/v1/incident/incidents` |
| detail | GET | `/api/v1/incident/incidents/{id}` |
| create | POST | `/api/v1/incident/incidents` |
| update | PUT | `/api/v1/incident/incidents/{id}` |
| soft delete | DELETE | `/api/v1/incident/incidents/{id}` |
| assign | POST | `/api/v1/incident/incidents/{id}/assign` |
| close | POST | `/api/v1/incident/incidents/{id}/close` |
| init-data | GET | **đề xuất** `/api/v1/incident/incidents/init-data` |
| road-route | GET | Integration road-routes search |
| comments | POST | CTX comments · **DEFER P2** |

FE cite: `src/services/incident/incidentService.ts` · relative `/incident/incidents`.

init-data seed: statuses · severities · types(6) · handleDirs · read/report.  
road-route → SearchInput (**GAP-INC-ROUTE-01**).

## 9. Out of scope (align PO)

- Leaflet / Kind F map MFE
- Full SLA Workflow
- Citizen / tổng đài portal
- Comment entity + related WO API
- Excel export 47 GOVOne tools
- Damage child lines / DefectItem / sourceKind / DurationMin entity
- org-unit filter tree P2
- Re-open FormType CRUD rewrite
- ERP.* / invent API fork

## 10. Open questions (PO closed — Design **không** re-open)

| ID | Decision |
|----|----------|
| Q-INC-01 | Dropdown LOOKUP_STATIC 6 loại + init-data · **không** SearchInput master P1 |
| Q-INC-02 | DEFER DurationMin/child tới report resume |
| Q-INC-03 | **Không** Kind F vào list pack |
| GAP-INC-ORG-01 | DEFER P2 |
| design_confirm | **approve** (autoApprove ON · DoR PASS) |

## 11. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| packKind | `list` |
| Kind / surfaces | B A–D+F + D Slideout Z1–Z3 · Screens §2 |
| controlHint | §5 — **không** Text cho `routeName` · types = 6 Dropdown |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/prototype/incident-list-prototype.html` |
| peerStdUrl | `http://localhost:9304/su-co` |
| zone ids | DES-GRID-A…D · FILTER · F · H · Z |
| API | giữ `api/v1/incident/incidents` · đề xuất init-data · road-route lookup |
| gaps P1 | ROUTE-01 · TYPE-01 · HIST-01 · FOOTER-01 |
| next | SA → TL → Dev → QA → Review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |
| blockedReason | — |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-08-29T02:36:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 |
| headerFingerprintPrior | sha256:0be4e953e4c54c6f55452779bb215d3ad32aa1d2899a3f0407fc2676f58e68cd |
| orchestratorSkillVersion | 2026.08.25.02 |
| orchestratorWorkflowVersion | 2026.08.25.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| taskId | `task_c4cdbe48` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 taskId=task_c4cdbe48 -->
