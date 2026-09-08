# PO — Requirement — incident (Quản lý sự cố / Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`list`** (Kind **B** catalog A–D + **Kind D Slideout** form) — PO confirm |
| Feature Kind | **B** list + **D** Slideout Z1–Z3 — map Kind F **DEFER** |
| gap | `bff_init` + `media_upload` · FormType CRUD **CLOSED** · prior L3 gaps CLOSED/DEFER · **NEW** delta dưới |
| mode | `feature_context` · **no Excel** · CTX + demo zone ref + live MFE/BE |
| status | `done` |
| requestSource | run packet `task_900ecdd8` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · compact `handoff/data_analy-compact.md` · `specs/_data-analy/features/incident-control-hint.md` · `incident-real-data.md` · contentHash `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · route **`/su-co`** (**route_keep** · reject packet `/incident`) |
| mfeStdUrl | `http://localhost:9304/su-co` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Incident** · **`api/v1/incident/incidents`** · **cấm ERP.*** |
| domain | **Incident** |
| be_repo_confirm | `approve` (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (packet default `Linm.Web.RMMS.Field`) |
| updatedAt | `2026-09-07T01:40:00.000Z` |
| taskId | `task_900ecdd8` · analy `task_2ed457c2` · prior PO `task_4fa6ad08` |

## 1. Goal

Chốt delta **edit_page** (họp 04/09 + QA fail rollback) cho **Quản lý sự cố (Vấn đề)** trên web Field: **giữ** FormType CRUD list+slideout đã CLOSED · **giữ** prior PO/Design confirmed · đóng **2 GAP NEW**: BFF init-data 404 → 200 + media FileUpload via FileService.

Persona: Tuần đường · tuần kiểm · Hạt · Ban QLDA.

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind B A–D + Kind D Slideout — **không** report pack · **không** Kind F map MFE.

**≠** Cổng người dân (`citizen` / `citizen-incidents`) — **cấm** citizen chrome / badge AI trên header Zone A.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/su-co/*` API fork (UI route `/su-co` ≠ API segment) · **cấm** re-CRUD FormType rewrite không delta · **cấm** re-scan demo HTML · **cấm** `/implement-file-service` · **cấm** copy `FilesController` · **cấm** persist presigned URL.

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-07T01:30:00.000Z` · contentHash khớp STATUS · **không** crawl demo lại.

### § Delta NEW (`task_900ecdd8` · copy analy `task_2ed457c2`)

| Layer | Current (live 2026-09-07) | New (PO chốt) |
|-------|---------------------------|---------------|
| BFF init-data | `GET web-bff/api/v1/incident/incidents/init-data` → **404** · API `:5111` **200** · FE FALLBACK | BFF proxy/route **200** (swagger có) · **cấm** invent path · `qa_fail_rollback` (**GAP-QA-BFF-INIT-01**) |
| Form media | Slideout **không** upload ảnh/file | Zone media **FileUpload** · bind `web-bff/api/v1/files/*` · NuGet `Linm.Platform.FileService.Bff` · host `RMMS.Service.Bff` · slash `/init-bff-file` + `/integrate-file-upload-web` (**GAP-INC-MEDIA-01**) |
| Media HARD | — | **Cấm** `/implement-file-service` · copy `FilesController` · persist presigned URL · lane **web** only · **cấm ERP.*** (**GAP-INC-MEDIA-HARD**) |

### Keep prior (CLOSED / DEFER — **cấm** re-open FormType)

| Layer | Current | Keep |
|-------|---------|------|
| List Kind B | A–D live · `LinPageLayout` · `LinCatalogDataGrid` · pagination | **Giữ** — search must work · filter bar HARD |
| Form Kind D | Slideout Z1–Z3 · C/E/V/Copy · leave-confirm · footer-only | **Giữ** |
| `routeName` | SearchInput target `road-route` | **Giữ** (**GAP-INC-ROUTE-01**) · **cấm** free-text khi master READY |
| `incidentType` | Dropdown LOOKUP_STATIC + init-data 6 loại | **Giữ** (**Q-INC-01**) |
| Filter org | org-unit | **DEFER P2** (**GAP-INC-ORG-01**) |
| History | `LinCatalogHistoryModal` | **Giữ** CLOSED |
| Report fields | DurationMin / DefectItem / damage / sourceKind thiếu | **DEFER** (**Q-INC-02**) |
| Map | Kind F demo only | **DEFER** MFE (**Q-INC-03**) |
| Giao việc | Platform Task | Cite `rmms-task-integrate` · **cấm** CV mock |
| API / BFF CRUD | `api/v1/incident/incidents` | **Giữ** path/DTO — **cấm** invent |
| Demo | zone/action ref | **cấm** demo-json SSOT |

**Không đổi:** Kind B A–D · `LinCatalogListPagination` 50/100/200/500 · Slideout C/E/V/Copy · View=`readOnly` (không disabled xám) · leave-confirm dirty · Delete + assign/close API · IdCode `VD-yyyyMMdd-nnnn` · prefix `api/v1/incident/incidents` · route `/su-co` · FormType CRUD CLOSED.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER)

| ID | New | P1 |
|----|-----|----|
| **GAP-QA-BFF-INIT-01** | BFF init-data **200** · **cấm** invent path · `qa_fail_rollback` | **YES · NEW** |
| **GAP-INC-MEDIA-01** | FileUpload zone · `web-bff/api/v1/files/*` · FileService.Bff | **YES · NEW** |
| **GAP-INC-MEDIA-HARD** | Cấm implement-file-service / copy FilesController / persist presigned / ERP.* | **YES · NEW** (constraint) |
| GAP-INC-ROUTE-01 | `routeName` → SearchInput `road-route` | keep prior target |
| GAP-INC-TYPE-01 | Dropdown + init-data 6 loại (**Q-INC-01**) | keep |
| GAP-INC-HIST-01 | `LinCatalogHistoryModal` | **CLOSED** prior |
| GAP-INC-FOOTER-01 | Slideout footer only | **CLOSED** prior |
| GAP-INC-ORG-01 | Filter org-unit tree | **DEFER P2** |
| GAP-RPT-SRC-INC-UN-TAC | `DurationMin` + congestion\|flood | **DEFER** |
| GAP-RPT-SRC-INC-THIET-HAI | Child lines KL/ĐVT | **DEFER** |
| GAP-RPT-SRC-INC-HM | `DefectItem` / `sourceKind` / asset SearchInput | **DEFER** |
| GAP-INC-MAP-01 | Kind F MFE | **DEFER** |
| FormType CRUD | CRUD list/form/assign/close | **CLOSED** — **cấm** re-open |

## 3. DoD (đo được)

1. List load BFF `GET …/incident/incidents` — empty «Không có dữ liệu sự cố» / filter empty copy — **cấm** fake row · **cấm** demo-json SSOT.
2. Zone A: title «Sự cố / Vấn đề» — **cấm** Thêm mới trên A · **cấm** badge AI chrome header.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · status · severity · **route SearchInput road-route** · incidentType Dropdown · Tạo mới primary · Refresh · Delete · History · config schema — filter đổi → page=1 · **search must work**.
4. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · Mã · Tiêu đề · Đoạn · Loại · Mức · TT · Ngày YC · AI (detectionId) · actions — row menu Xem/Sửa/Copy/Xóa/Giao việc/Đóng/Lịch sử — **cấm** header `TT`.
5. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination raw.
6. Zone F: `LinCatalogUiSchemaEditorModal` catalog `incidents` — **cấm** `configHint` / leftover `const columns`.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required `title` · `routeName` · `incidentType` · `status` · `requestedAt` · code IdCode readonly `VD-*`.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. `routeName` = SearchInput master road-route — **cấm** free Text khi master READY (**GAP-INC-ROUTE-01**).
10. `incidentType` = Dropdown LOOKUP_STATIC 6 mã seed init-data — **cấm** invent master SearchInput P1.
11. Slideout actions **footer only** — **cấm** top Quay lại/Hủy/Lưu (**GAP-INC-FOOTER-01**).
12. History = `LinCatalogHistoryModal` — **cấm** `window.alert` (**GAP-INC-HIST-01**).
13. Delete / Đóng = Confirm modal · Assign/Giao việc = modal pattern (Platform Task cite) — **cấm** native `confirm`.
14. Leave-confirm dirty · toast 4xx/5xx — **cấm** native alert/confirm.
15. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
16. `yarn build` PASS **ở role Dev** (PO **cấm** build/e2e/start:std).
17. **NEW** BFF `GET …/incidents/init-data` qua `web-bff` → **200** · FE **không** còn phụ thuộc FALLBACK làm SSOT (**GAP-QA-BFF-INIT-01**).
18. **NEW** Slideout zone media: FileUpload upload/list/delete qua `web-bff/api/v1/files/*` · persist **fileIds / attachmentKeys** (không persist presigned URL) · fail → toast · **không** block save scalars nếu media optional (**GAP-INC-MEDIA-01** · **GAP-INC-MEDIA-HARD**).

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/incident.md` | feature Signed |
| CTX-02 | `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md` | control-map cite |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/incident-demo.html` | entry redirect · **zone ref only** |
| DEM-02 | `Linm.RMMS.Demo/src/demo/incident/incident.html` | page · **không** SSOT data |
| DI-01 | — | **no Excel** |
| DA-01 | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/incident-control-hint.md` | controlHint SSOT · **done** |
| DA-02 | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/incident-real-data.md` | real-data §A–§F |
| DA-C | `specs/incident/handoff/data_analy-compact.md` | prior compact |
| RPT-GAP | `specs/_form-type/REPORT-SOURCE-FIELD-GAPS.md` | GAP-RPT-SRC-INC-* |
| MFE list | `Linm.Web.RMMS.Field/.../IncidentListPage.tsx` | Kind B A–D live |
| MFE form | `Linm.Web.RMMS.Field/.../IncidentFormSlideout.tsx` | Kind D live |
| MFE svc | `.../src/services/incident/incidentService.ts` | `/incident/incidents` |
| BE | `IncidentEntity` · `IncidentsController` · `IncidentDtos` | live CRUD |
| BFF | `RMMS.Service.Bff` · FileService.Bff NuGet | init + files |
| DOMAIN-MAP | `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Incident · `api/v1/incident` |
| TASK | `specs/rmms-task-integrate` | Giao việc Platform Task |

Normalized header (analy):  
`code|title|routeName|incidentType|status|severity|reporterName|handleDirection|readStatus|reportStatus|assetLabel|kmStart|kmEnd|weather|requestedAt|detectionId|description|causesCongestion|hasGps|assigneeName|search`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tiêu đề · đoạn · DET |
| status | Trạng thái | `Dropdown` | LOOKUP_STATIC | `new` · `in_progress` · `closed` · init-data |
| severity | Mức độ | `Dropdown` | LOOKUP_STATIC | `low` · `medium` · `high` · `critical` |
| routeName | Đoạn đường | `SearchInput` | **road-route** | **GAP-INC-ROUTE-01** · **cấm** Text free |
| incidentType | Loại sự cố | `Dropdown` | LOOKUP_STATIC | **Q-INC-01** · 6 mã seed init-data |
| orgTree | Công ty / Người ghi | `SearchInput` tree | **org-unit** | **DEFER P2** |
| hasGps | Định vị | `Checkbox` | — | optional filter · demo `ckDinhVi` |

### Form fields (Slideout Kind D)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã sự cố | `Text` readonly | auto | IdCode `VD-yyyyMMdd-nnnn` |
| title | Tiêu đề | `Text` | * | |
| routeName | Đoạn đường | `SearchInput` | * | **road-route** · **GAP-INC-ROUTE-01** |
| incidentType | Loại sự cố | `Dropdown` | * | LOOKUP_STATIC 6 loại |
| status | Trạng thái | `Dropdown` | * | LOOKUP_STATIC |
| severity | Mức độ | `Dropdown` | | LOOKUP_STATIC |
| requestedAt | Ngày yêu cầu | `Date` (datetime-local) | * | local display · ISO write |
| reporterName | Người báo | `Text` | | P2 → SearchInput users |
| assigneeName | Người xử lý | `Text` | | assign API · P2 SearchInput |
| handleDirection | Hướng xử lý | `Dropdown` | | Theo dõi · Sửa chữa ngay · Lập KH BT · Giao CV |
| readStatus | Trạng thái đọc | `Dropdown` | | Chưa đọc · Đã đọc |
| reportStatus | TT báo cáo | `Dropdown` | | Chưa BC · Đã BC hạt · Đã BC sở |
| assetLabel | Tài sản / hạng mục | `Text` | | P2 SearchInput asset-type (**GAP-RPT-SRC-INC-HM** DEFER) |
| kmStart | Km đầu | `Text` | | chainage |
| kmEnd | Km cuối | `Text` | | chainage |
| weather | Thời tiết | `Text` | | |
| detectionId | AI Detection Id | `Text` | | DET-* |
| causesCongestion | Gây ùn tắc | `Dropdown` bool | | true/false |
| durationMin | Thời lượng (phút) | `Text` (number) | | **DEFER** entity (**Q-INC-02**) |
| hasGps | Có GPS | `Dropdown` bool | | |
| description | Mô tả | `Text` multiline | | map `rpt-thien-tai` DamageSummary P1 text OK |
| **mediaFiles** | **Ảnh / tệp đính kèm** | **`FileUpload`** | | **GAP-INC-MEDIA-01** · `web-bff/api/v1/files/*` · write `fileIds`/`attachmentKeys` · **không** invent controller |
| defectItem | Hạng mục hư hỏng | — | | **DEFER** entity |
| sourceKind | Nguồn | — | | **DEFER** entity · ai · patrol · mobile · camera · citizen |

### Actions (toolbar / row / form)

| Action | controlHint / pattern | API | Notes |
|--------|----------------------|-----|-------|
| Tạo mới | Button primary Zone B | `POST …/incidents` | **cấm** trên A |
| Refresh | toolbar | GET list | refetch |
| Xóa | danger + Confirm modal | `DELETE …/{id}` | soft delete |
| Xem / Sửa / Copy | row menu · slideout | GET/PUT/POST | FormType |
| Giao việc | Modal → Platform Task | `POST /tasks` `domainSource=incident` | `rmms-task-integrate` |
| Đóng vấn đề | Confirm modal | `POST …/{id}/close` | status=closed |
| Assign | Modal / field | `POST …/{id}/assign` | assigneeName |
| Config cột | `LinCatalogUiSchemaEditorModal` | catalog `incidents` | **cấm** configHint-only |
| History | `LinCatalogHistoryModal` | — | CLOSED prior |
| **Upload media** | **FileUpload · FileService BFF** | **`web-bff/api/v1/files/*`** | **GAP-INC-MEDIA-01** · reuse package · **cấm** new FilesController |
| Xuất Excel | Modal export | — | **DEFER P2** |
| Basemap / zoom | Map chrome | — | **DEFER** MFE |

### Real-data bind (copy §B analy — SA **giữ** path cite)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/incident/incidents` → `GET /api/v1/incident/incidents` |
| Detail | `GET …/incidents/{id}` |
| Create | `POST …/incidents` |
| Update | `PUT …/incidents/{id}` |
| Soft delete | `DELETE …/incidents/{id}` |
| Assign | `POST …/incidents/{id}/assign` |
| Close | `POST …/incidents/{id}/close` |
| Comments | CTX `POST …/comments` — **DEFER P2** |
| road-route lookup | Integration road-routes search | SearchInput (**GAP-INC-ROUTE-01**) |
| init-data | `GET …/incidents/init-data` — API **200** · BFF target **200** (**GAP-QA-BFF-INIT-01**) | statuses · severities · types · handleDirs · read/report |
| **files** | **`web-bff/api/v1/files/*`** · FileService.Bff · host `RMMS.Service.Bff` | form media (**GAP-INC-MEDIA-01**) |

**Cấm** ERP.* · Finance · invent `api/v1/su-co/incidents` · `/implement-file-service` · copy `FilesController` · persist presigned URL.

### Incident type values (PO chốt · 6 mã seed)

Demo 6 loại → LOOKUP_STATIC init-data (mã SA normalize; FE hiện 4 mã mở rộng):

| Seed label (demo) | Notes |
|-------------------|-------|
| Ổ gà | map mã FE `o-ga` giữ + seed |
| Sạt taluy | `sat-taluy` |
| Biển báo | `bien-bao` |
| Khác | `khac` |
| (+2 demo còn lại) | SA/init-data seed đủ 6 · **cấm** Dropdown 4-only cứng làm SSOT cuối |

### Status / severity (giữ)

- status: `new` · `in_progress` · `closed`
- severity: `low` · `medium` · `high` · `critical`

## 6. Grid AC (REQUIRED · list packKind)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** (+ Zone F config) |
| AC-G-02 | Search + status/severity/route/type → page=1 khi filter đổi |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Giao việc / Đóng / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` — **cấm** `configHint` |
| AC-G-09 | Empty list copy VN — **cấm** fake row / demo-json SSOT |
| AC-G-10 | Toast 4xx/5xx · Confirm modal — **cấm** `window.alert`/`confirm` |
| AC-G-11 | Filter = **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** `ErpListHeaderFilters` / stack (**filter-bar-layout-hard**) |
| AC-G-12 | Toolbar FULL: Làm mới · Lịch sử · config `fa-cog` · Delete theo chọn · **+ Tạo mới** |
| AC-G-13 | Grid flow: sort · filter cột panel · chọn dòng · help đúp/Ctrl+chuột phải |
| AC-G-14 | **NEW** init-data BFF 200 — Dropdown LOOKUP_STATIC lấy từ init (không FALLBACK-only SSOT) |

### Report AC

**N/A** — packKind `list` · report source gaps **DEFER** (**GAP-PO-RPT-01** · **Q-INC-02**).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Tab index | Actions |
|---------|---------|----------|-----|-----------|---------|
| S-LIST | Kind B catalog A–D+F | filter | `/su-co` | — (list only) | search · filter · Tạo mới · Refresh · Delete · config · History |
| S-FORM-CREATE | Kind **D Slideout** Z1–Z3 | create | overlay trên `/su-co` | — (single form) | Lưu · Hủy · leave-confirm · **footer only** · **media FileUpload** |
| S-FORM-EDIT | Kind **D Slideout** | edit | overlay | — | Lưu · Hủy · footer only · media |
| S-FORM-VIEW | Kind **D Slideout** | view | overlay | — | readOnly · **không** disabled xám · media read |
| S-FORM-COPY | Kind **D Slideout** | create (copy) | overlay | — | POST new · clear id · new code · media policy SA |
| S-ACT-ASSIGN | Modal | — | — | — | assign / Giao việc Platform Task |
| S-ACT-CLOSE | Confirm modal | — | — | — | `POST …/close` |
| S-ACT-DELETE | Confirm modal | — | — | — | soft delete |
| S-HIST | `LinCatalogHistoryModal` | — | — | — | CLOSED prior |
| S-SKIP-MAP | Kind F | — | — | — | **Cấm** MFE list pack (**Q-INC-03**) |

**devSlash:** `/agent-dev` (list + slideout form · FileUpload wire · BFF init · **không** oms-map / ai-detect / camera · **không** implement-file-service).

**Cấm** Full-page form URL `/new`·`:id` cho pack này (giữ Slideout live) · **cấm** GOVOne chrome · **cấm** citizen portal.

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Form dirty · đóng slideout / navigate | `LeaveConfirmModal` + leave guard | `window.confirm` / native dialog |
| API 4xx validation | `useAppToast` business message | `window.alert` |
| API 5xx list/detail | toast error | silent empty / fake success |
| detail 404 | toast · đóng slideout | silent fail |
| Delete / Đóng / chặn | Confirm `Modal` / `useAlert` | native `confirm` |
| History | `LinCatalogHistoryModal` | `window.alert` stub |
| Lookup route no match | SearchInput empty · save 422 | free-text substitute master |
| init-data BFF fail | toast · tạm FALLBACK chỉ khi down · target = BFF 200 | silent / pretend master |
| **files upload fail** | toast · **không** block save scalars nếu media optional | `window.alert` · persist presigned |
| Overlay z-index (modal trên Slideout) | `useAlert` / Modal stacked SSOT | z-index hack / alert |

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Q-INC-01 | `incidentType` Dropdown 4–6 mã FE hay master SearchInput? | **KEEP** Dropdown LOOKUP_STATIC + init-data seed **6 loại demo**. **Không** SearchInput master P1. |
| Q-INC-02 | Wave report: `DurationMin` + child thiệt hại ngay hay DEFER? | **KEEP DEFER** child lines · `DurationMin` khi resume **`rpt-un-tac`**. |
| Q-INC-03 | Map Kind F vào list pack? | **KEEP Không** — SD-MAP defer. |
| GAP-INC-ORG-01 | Filter Công ty / Người ghi | **DEFER P2**. |
| GAP-QA-BFF-INIT-01 | BFF init 404? | **Fix BFF proxy → 200** · **cấm** invent path · `qa_fail_rollback`. |
| GAP-INC-MEDIA-01 | Upload tự build hay FileService? | **Reuse FileService** `web-bff/api/v1/files/*` · `/init-bff-file` + `/integrate-file-upload-web`. |
| GAP-INC-MEDIA-HARD | Implement mới FilesController? | **Cấm** `/implement-file-service` · copy controller · persist presigned · ERP.*. |
| Media optional? | Upload bắt buộc khi Lưu? | **Optional P1** — fail upload → toast · scalars vẫn save được. |

## 10. Out of scope (this pack)

- Leaflet / Kind F map MFE
- Full SLA escalation Workflow
- Citizen / tổng đài public portal
- Comment entity table + related WO (UI stub OK · API DEFER)
- Excel export 47 GOVOne tools
- Damage child lines / DefectItem / sourceKind entity (report DEFER)
- org-unit filter tree P2
- Re-open FormType CRUD rewrite
- `/implement-file-service` · invent FilesController · persist presigned URL
- ERP.* / Finance assets

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| packKind confirm | **`list`** |
| Kind / surfaces | B catalog A–D+F + Kind D Slideout Z1–Z3 + **media FileUpload zone** |
| Prototype | content-only zones A–D · slideout footer · **media zone** · **skip** note/sidebar/menu/chrome · **skip** Kind F · **cấm** rewrite list A–D |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | §5 — **mediaFiles=FileUpload** · **không** Text cho `routeName` · **không** đoán Text vs SearchInput |
| Screens | §7 · Grid AC §6 · Leave §8 |
| grid_standard | `po-design-grid-standard` + `filter-bar-layout-hard` + `slideout-form-layout` |
| peerStdUrl | `http://localhost:9304/su-co` |
| BE | `api/v1/incident/incidents` · init-data BFF fix · files FileService — **cấm** invent ERP path |
| Tab index | **none** (single slideout form · không multi-tab) |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt · chain ON |
| Dev scope | **chỉ** GAP-QA-BFF-INIT-01 + GAP-INC-MEDIA-01 (+ HARD) · **cấm** re-CRUD |
| e2e | queued `/agent-qa*` only |
| blockedReason | — |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-09-07T01:40:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad |
| headerFingerprintPrior | sha256:0be4e953e4c54c6f55452779bb215d3ad32aa1d2899a3f0407fc2676f58e68cd |
| orchestratorSkillVersion | 2026.08.25.02 |
| orchestratorWorkflowVersion | 2026.08.25.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.25.02 |
| dataAnalyRulesVersion | 2026.08.28.4 |
| taskId | `task_900ecdd8` |

---
<!-- Version meta: skillVersion=2026.08.25.02 · schemaVersion=1 · workflowVersion=2026.08.25.02 · rulesVersion=2026.08.28.4 · versionGate=rechecked · contentHashPriorDataAnaly=sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad · taskId=task_900ecdd8 -->
