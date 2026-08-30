# Data-analy — controlHint — incident (Kind B list + Kind D slideout)

| Field | Value |
|-------|-------|
| feature | `incident` |
| packKind | `list` |
| mode | `feature_context` (edit_page · **no Excel** · CTX + demo + live MFE/BE cite) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.25.02` |
| rulesVersion | `2026.08.28.4` |
| versionGate | `rechecked` |
| contentHash | `sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577` |
| headerFingerprint | `sha256:0be4e953e4c54c6f55452779bb215d3ad32aa1d2899a3f0407fc2676f58e68cd` |
| analyzedAt | `2026-08-29T02:20:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_29a0c673` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/incident-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Incident** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · route `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| runMode | `fix_gaps` · gap=`crud_formtype` (FormType CRUD **CLOSED** prior) |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup/init-data.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **≠** Cổng người dân · **cấm** citizen-incident chrome.  
> Demo = zone/field/action **tham chiếu** — **cấm** demo-json làm SSOT data.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/incident.md` | `c9ead099beedf9b37d2cbea676300b118533652653d6e7f331e2c83b414694b2` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md` | `0c3671e5acc8397520e9292f0d8f8ef8555e5fe75f893211079890e4ade83400` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/incident-demo.html` | `b5e48f4b0808c3b72887d72b1e8b31bbd4475e10c73bcf38dc892b023b99dd92` |
| Demo page | `Linm.RMMS.Demo/src/demo/incident/incident.html` | `3a245e0a5b8cc0fcdd1b13fd0fe133ce4feff3a9c10079399ed0d0ba4272d5a0` |
| Entity | `Linm.RMMS.WebService/.../Entities/IncidentEntity.cs` | `8cb59a9efbdb8abb7f54418f75b413ee55bc0c86ee0160d988cc13d86a87da8d` |
| API | `.../Incident/Controllers/IncidentsController.cs` | `api/v1/incident/incidents` live |
| MFE list | `Linm.Web.RMMS.Field/.../IncidentListPage.tsx` | Kind B A–D |
| MFE form | `Linm.Web.RMMS.Field/.../IncidentFormSlideout.tsx` | Kind D Z1–Z3 |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Incident · `api/v1/incident` |
| Report gaps | `specs/_form-type/REPORT-SOURCE-FIELD-GAPS.md` | GAP-RPT-SRC-INC-* |

Normalized header (no Excel · entity + form inventory):

`code|title|routeName|incidentType|status|severity|reporterName|handleDirection|readStatus|reportStatus|assetLabel|kmStart|kmEnd|weather|requestedAt|detectionId|description|causesCongestion|hasGps|assigneeName|search`

## § Delta Current vs New (`edit_page` · `task_29a0c673`)

Giữ PO/Design/SA/TL/Dev/QA artifacts đã confirmed (FormType CRUD **CLOSED**). Delta **bắt buộc** pack edit = **thiếu L3 data-analy artifacts** (stub draft) + report-source debt:

| ID | Current (live inventory 2026-08-29) | New (SSOT CTX+demo+entity) | Surface |
|----|-------------------------------------|----------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form/actions + Version meta `done` | data-analy |
| GAP-INC-ROUTE-01 | Form/list `routeName` = **Text** free | **SearchInput** `catalogKind=road-route` (master 38) · **cấm** free-text khi master READY | filter + form |
| GAP-INC-TYPE-01 | `incidentType` Dropdown cứng `INCIDENT_TYPES` (4 mã FE) | Demo 6 loại · PO chốt closed-set **hoặc** master `incident-type` SearchInput | filter + form |
| GAP-INC-ORG-01 | Filter thiếu Công ty / Người ghi (legacy tree) | SearchInput tree `org-unit` · DEFER P2 nếu list pack giữ slim filter | Zone B |
| GAP-RPT-SRC-INC-UN-TAC | Entity **không** `DurationMin` | Field số + type congestion\|flood cho `rpt-un-tac` | form + BE |
| GAP-RPT-SRC-INC-THIET-HAI | **Không** bảng dòng thiệt hại (KL/ĐVT) | Child lines **hoặc** DEFER report pack | form / report |
| GAP-RPT-SRC-INC-HM | `AssetLabel` free text · thiếu `DefectItem`/`SourceKind` | SearchInput asset-type **hoặc** Text + `sourceKind` enum | form |
| GAP-INC-MAP-01 | Demo Kind F Leaflet live · MFE map **DEFER** (SD-MAP) | List pack **out of scope** map strip — Design giữ defer | map |
| GAP-INC-HIST-01 | History `window.alert` stub (implement debt) | `LinCatalogHistoryModal` — **cấm** alert | list |
| GAP-INC-FOOTER-01 | Slideout actions còn top Quay lại/Hủy/Lưu (Z1) | `slideout-form-layout` — actions **footer only** | form |

**Không** đổi: Kind B A–D · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · Slideout C/E/V/Copy · leave-confirm · Delete + assign/close API · prefix `api/v1/incident/incidents` · route `/su-co` · **cấm ERP.***

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Sự cố / Vấn đề» — **cấm** Thêm mới trên A · **cấm** badge AI chrome header |
| B | Toolbar + filter | SearchTextInput · status · severity · (**đề xuất**) route SearchInput · Tạo mới · Refresh · Delete · History · config schema · **search must work** |
| C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Xóa/Giao việc/Đóng/Lịch sử · STT · **cấm** header `TT` |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination raw |
| Form | Kind D Slideout Z1–Z3 | C/E/V/Copy · View=readOnly (**không** disabled xám) · leave-confirm dirty · footer actions SSOT |
| Map | Kind F (demo only) | Leaflet + basemap — MFE **DEFER** list pack |
| AI banner | optional strip | Critical/High DET → confirm create — P1 demo · MFE optional |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tiêu đề · đoạn · DET |
| status | Trạng thái | `Dropdown` | LOOKUP_STATIC | `new` · `in_progress` · `closed` · init-data |
| severity | Mức độ | `Dropdown` | LOOKUP_STATIC | `low` · `medium` · `high` · `critical` |
| routeName | Đoạn đường | `SearchInput` | **road-route** | **GAP-INC-ROUTE-01** · hiện Text free trên MFE |
| incidentType | Loại sự cố | `Dropdown` **hoặc** SearchInput | incident-type / static | **GAP-INC-TYPE-01** · PO chốt |
| orgTree | Công ty / Người ghi | `SearchInput` tree | **org-unit** | legacy · **DEFER** P2 slim list OK |
| hasGps | Định vị | `Checkbox` | — | demo `ckDinhVi` · optional filter |

## Control hint — form fields (Slideout)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã sự cố | `Text` readonly | auto | IdCode `VD-yyyyMMdd-nnnn` |
| title | Tiêu đề | `Text` | * | |
| routeName | Đoạn đường | `SearchInput` | * | **road-route** · **GAP-INC-ROUTE-01** |
| incidentType | Loại sự cố | `Dropdown` / SearchInput | * | **GAP-INC-TYPE-01** |
| status | Trạng thái | `Dropdown` | * | LOOKUP_STATIC |
| severity | Mức độ | `Dropdown` | | LOOKUP_STATIC |
| requestedAt | Ngày yêu cầu | `Date` (datetime-local) | * | local display · ISO write |
| reporterName | Người báo | `Text` | | P2 → SearchInput users |
| assigneeName | Người xử lý | `Text` | | assign API · P2 SearchInput |
| handleDirection | Hướng xử lý | `Dropdown` | | Theo dõi · Sửa chữa ngay · Lập KH BT · Giao CV |
| readStatus | Trạng thái đọc | `Dropdown` | | Chưa đọc · Đã đọc |
| reportStatus | TT báo cáo | `Dropdown` | | Chưa BC · Đã BC hạt · Đã BC sở |
| assetLabel | Tài sản / hạng mục | `Text` **hoặc** SearchInput | | **GAP-RPT-SRC-INC-HM** · asset-type |
| kmStart | Km đầu | `Text` | | chainage |
| kmEnd | Km cuối | `Text` | | chainage |
| weather | Thời tiết | `Text` | | |
| detectionId | AI Detection Id | `Text` | | DET-* · AI badge |
| causesCongestion | Gây ùn tắc | `Dropdown` bool | | true/false |
| durationMin | Thời lượng (phút) | `Text` (number) | | **GAP-RPT-SRC-INC-UN-TAC** · **chưa** entity |
| hasGps | Có GPS | `Dropdown` bool | | |
| description | Mô tả | `Text` multiline | | map `rpt-thien-tai` DamageSummary P1 |
| defectItem | Hạng mục hư hỏng | `Text` / SearchInput | | **GAP-RPT-SRC-INC-HM** · **chưa** entity |
| sourceKind | Nguồn | `Dropdown` | | ai · patrol · mobile · camera · citizen stub |

## Actions (toolbar / row / form)

| Action | controlHint / pattern | API | Notes |
|--------|----------------------|-----|-------|
| Tạo mới | Button primary | `POST …/incidents` | Zone B |
| Refresh | toolbar | GET list | refetch filter |
| Xóa | danger + Confirm modal | `DELETE …/{id}` | soft delete · **cấm** native confirm |
| Xem / Sửa / Copy | row menu · slideout mode | GET/PUT/POST | FormType |
| Giao việc | Modal → Platform Task | `POST /tasks` `domainSource=incident` | xem `rmms-task-integrate` · **cấm** CV mock SSOT |
| Đóng vấn đề | Confirm modal | `POST …/{id}/close` | status=closed |
| Assign | Modal / field | `POST …/{id}/assign` | assigneeName |
| Config cột | `LinCatalogUiSchemaEditorModal` | catalog `incidents` | **cấm** configHint-only |
| History | `LinCatalogHistoryModal` | — | **GAP-INC-HIST-01** |
| Xuất Excel | Modal export | DEFER P2 | demo 47 actions · list pack optional |
| Basemap / zoom | Map chrome | DEFER MFE | demo only |

## Lookup APIs (đề xuất SA — **chưa đổi path live**)

Domain **Incident** · prefix `api/v1/incident` · BFF `web-bff/api/v1/incident` · **cấm ERP.*** · **cấm** `/rmms/`.

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| list | `GET /api/v1/incident/incidents?search=&status=&severity=&page=&pageSize=` | Zone B + grid |
| by id | `GET /api/v1/incident/incidents/{id}` | slideout View/Edit/Copy |
| create / update | `POST` / `PUT …/incidents` | form |
| soft delete | `DELETE …/incidents/{id}` | |
| assign | `POST …/incidents/{id}/assign` | |
| close | `POST …/incidents/{id}/close` | |
| road-route | `GET /api/v1/…/road-routes/search` | SearchInput route (**GAP-INC-ROUTE-01**) |
| org-unit | `GET /api/v1/…/org-units/tree` | filter tree P2 |
| init-data | **đề xuất** `GET …/incidents/init-data` | statuses · severities · types · handleDirs · read/report |

## Open questions (PO AskQuestion trước Design nếu chạm)

| ID | Question | Default đề xuất |
|----|----------|-----------------|
| Q-INC-01 | `incidentType` giữ Dropdown 4–6 mã FE hay master SearchInput? | Dropdown LOOKUP_STATIC + init-data seed demo 6 loại |
| Q-INC-02 | Wave report: thêm `DurationMin` + child thiệt hại ngay hay DEFER report pack? | DEFER child lines · thêm `DurationMin` khi resume `rpt-un-tac` |
| Q-INC-03 | Map Kind F vào list pack? | **Không** — giữ SD-MAP defer |

## Handoff

| Role | Packet |
|------|--------|
| PO | Inventory + DoD lookup · Ask Q-INC-* |
| Design | control-map khớp bảng filter/form · typography · tab-index · slideout footer |
| SA | Giữ path `api/v1/incident/incidents` · gap fields DurationMin/DefectItem · init-data |
| TL | Chỉ task gap còn mở — **cấm** re-CRUD FormType đã CLOSED |
| Dev | Wire SearchInput road-route · history modal · **cấm** invent ERP path |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-08-29T02:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHash=sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 -->
