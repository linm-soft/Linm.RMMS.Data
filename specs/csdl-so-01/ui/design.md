# Design — csdl-so-01 (Sổ 01 — Nhật ký tuần kiểm · new_page)

| Field | Value |
|-------|-------|
| feature | `csdl-so-01` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F+H + **D** Slideout Z1–Z3 · entries `pattern_inline_grid` |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_09c37ee7`) |
| changeScope | `new_page` |
| packKind | `list` |
| gap | `new_page` · GAP-SO01-TYPED-01 · ROUTE-01 · FORMNO-01 · MEDIA-01 · GAP-CSDL-ROAD-01 · PROV-01 · CUC-03 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` **locked** (PO) |
| mfeStdRoute | `/csdl-so-01` |
| mfeStdUrl | `http://localhost:9301/csdl-so-01` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=inspection-logs` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-01/ui/prototype/csdl-so-01-list-prototype.html` |
| prototype | `specs/csdl-so-01/ui/prototype/csdl-so-01-list-prototype.html` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=inspection-logs`** · **cấm ERP.*** |
| resource | `inspection-logs` |
| formNo | `01` · title VN **Sổ 01 — Nhật ký tuần kiểm** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` · headerFingerprint `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_c379e304` · Q-* resolved |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| updatedAt | `2026-09-06T01:00:00.000Z` |
| taskId | `task_09c37ee7` · analy `task_3931d587` · po `task_c379e304` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

**Cấm:** Dev/BE · re-scan DEM · invent `api/v1/so-ts/*` / `api/v1/infra/*` · ERP.* · Guid IdCode · form chỉ `detail*`/`col1–3` · invent map canvas · invent file API · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-01.md` | feature CTX |
| DA-01 | `specs/_data-analy/features/csdl-so-01-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/csdl-so-01-real-data.md` | real-data §A–§F |
| PO-01 | `specs/csdl-so-01/po/requirement.md` | Grid AC · Screens · Leave · Q chốt |
| CLUSTER | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-01 | typed SSOT |
| DEM-01 | `…/csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | zone chrome only · **cấm** SSOT data |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · csdl-so-sach |
| MFE hub | `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace / alias |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` · **reuse** |

Persona: Khu QLĐB · Hạt trưởng · Người tuần kiểm · Nhà thầu BDTX.

**≠** Sổ TS `so-ts-*` · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng).

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub `?resource=inspection-logs` only | Alias **`/csdl-so-01`** + hub | GAP-SO01-ROUTE-01 |
| Hub label | Live «Sổ 8» | **«Sổ 01 — Nhật ký tuần kiểm»** · key giữ | GAP-SO01-FORMNO-01 |
| Form | 3 ô `detail*` + Col1–3 | Typed T-SO-01 header + entries + media sau SC | GAP-SO01-TYPED-01 · CUC-03 |
| `roadCode` | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| `province` | Select 5 tỉnh | LOOKUP_STATIC P1 keep | GAP-CSDL-PROV-01 |
| Media sau SC | không | FileMulti max 10 · FileService · conditional | GAP-SO01-MEDIA-01 |
| manageUnit | Text | **Text P1** · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Import/Export | stub | **OUT pack** stub only | GAP-CSDL-XLS-01 |
| Map | — | **none** | — |

**Không đổi:** API prefix · resource `inspection-logs` · Kind B A–D · Kind D Slideout · IdCode `SO-` · pagination 50/100/200/500 · **cấm** ERP.*.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng** · SearchText + 🔍 cụm phải — **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `slideout_layout: footer_actions_only` |
| Entries | `pattern_inline_grid` add/remove · typed cols — **cấm** chỉ Col1–3 |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind `inspection-logs` |
| Zone H | `LinCatalogHistoryModal` — **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| View mode | `readOnly` — **cấm** Input disabled xám toàn form |
| Map | `map: none` — deep-link GIS only |
| Skip chrome | GOVOne · demo sidebar/note |
| DES-RPT | **N/A** (list pack · report riêng · GAP-RPT-SRC-CSDL-01 form READY) |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| List (alias) | `/csdl-so-01` |
| Hub entry | `/so-ts/csdl-so-sach?resource=inspection-logs` |
| Form | overlay Slideout · QS `?form=` optional |
| Map | deep-link GIS only · **cấm** canvas |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A…D · F · H** | Typed cols · filter HARD |
| S-HUB-ENTRY | hub card | Kind G card | Title VN · open-resource · **cấm** slug trên card |
| S-FORM-CREATE | create | **DES-GRID-Z** · Z1–Z3 | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-ENTRIES | — | inline_grid trong Z2/Z3 | typed · media sau SC |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

### Zone A — Header (DES-GRID-A)

- Back hub · title **«Sổ 01 — Nhật ký tuần kiểm»** · meta `resource=inspection-logs`
- **Cấm** Thêm mới trên A

### Zone B — Toolbar + filter (DES-GRID-B · DES-GRID-B-FILTER)

**Toolbar (trái/phải):** Refresh · History · SchemaConfig · Import stub · Export stub · Delete · **Tạo mới** (primary phải).

**Filter 1 hàng (HARD):**

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` (+ 🔍 cụm phải) | text |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC (5 tỉnh) |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC `tot\|tb\|kem\|hong` |
| roadCode | Tên đường | `SearchInput` | **road-route** |
| fromDate | Từ ngày | `Date` | — |
| toDate | Đến ngày | `Date` | — |

Rules: search must work · **cấm** nút Tìm riêng · filter đổi → `page=1`.

### Zone C — Grid (DES-GRID-C)

| Col | Field | Notes |
|-----|-------|-------|
| STT | — | ổn định khi sort/kéo |
| Mã | `code` | link → View |
| Số quyển | `bookNo` | |
| ĐV QL | `manageUnit` | |
| Người TK | `inspector` | |
| Đường | `roadName` / `roadCode` | |
| Km | `kmFrom`–`kmTo` | |
| Kỳ | `periodStart`–`periodEnd` | |
| Tỉnh | `province` | |
| TT | `status` | |
| ⋮ | row menu | Xem / Sửa / Copy / Xóa / Lịch sử |

Empty copy VN: **«Chưa có nhật ký tuần kiểm»**.

### Zone D — Footer (DES-GRID-D)

`LinCatalogListPagination` **50 / 100 / 200 / 500** · đổi size → page=1.

### Form Slideout Z1–Z3 (DES-GRID-Z · DES-FORM-Z1–Z3)

| Zone | Content |
|------|---------|
| Z1 | Title mode Create/Edit/View/Copy · X đóng |
| Z2 | Header fields 2-col + entries inline grid |
| Z3 | Footer Lưu/Hủy (View: Đóng/Sửa/Copy) · leave-confirm dirty |

#### Control-map — form header (Design chốt = controlHint)

| key | Label | Control | req |
|-----|-------|---------|-----|
| code | Mã | Text **readonly** | auto `SO-` |
| bookNo | Số quyển / sổ | Text | * |
| manageUnit | ĐV QL | Text (P1) | * |
| inspector | Người tuần kiểm | Text | * |
| roadCode | Mã đường | SearchInput `road-route` | * |
| roadName | Tên đường | Text display (bind) | * |
| kmFrom | Lý trình từ | Number | * |
| kmTo | Lý trình đến | Number | |
| periodStart | Ngày bắt đầu | Date | * |
| periodEnd | Ngày kết thúc | Date | |
| province | Tỉnh | Dropdown LOOKUP_STATIC | * |
| status | Tình trạng | Dropdown tot/tb/kem/hong | |
| notes | Ghi chú sổ | Textarea | |

#### Control-map — entries[] inline grid

| key | Label | Control | req |
|-----|-------|---------|-----|
| lineNo | STT | Integer ro | auto |
| inspectDate | Ngày | Date | * |
| itemProposal | Hạng mục / đề xuất | Text | * |
| kmFrom | Km từ | Number | * |
| kmTo | Km đến | Number | |
| location | Vị trí | Text | |
| description | Mô tả | Textarea | * |
| estQuantity | KL ước | Text | |
| inspectorOpinion | Ý kiến TK | Textarea | |
| remarkSign | Nhận xét + ký | Text | |
| repairRequest | Yêu cầu SC / VP | Textarea | |
| dueDate | Hạn | Date | |
| actualQtyQualityDate | KL / CL / ngày TT | Text | |
| postRepairMediaIds | File sau SC | FileMulti max **10** | cond · ≥1 nếu repairRequest ≠ empty |

Required form DoD: bookNo · manageUnit · inspector · roadCode · kmFrom · periodStart · province · ≥1 entry với inspectDate · itemProposal · kmFrom · description.

## 3. Grid AC (Design mirror PO)

| AC | Assert |
|----|--------|
| G-01 | `LinCatalogDataGrid` · empty không crash |
| G-02 | SearchTextInput lọc mã/sổ/đường/người TK · **không** nút Tìm |
| G-03 | Filter province/status/road/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột ON · STT ổn định |
| G-05 | Row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| G-06 | Pagination 50/100/200/500 · size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới |
| G-08 | Soft-delete → row khỏi list · toast OK |
| G-09 | 422 thiếu resource → toast · không blank |
| G-10 | Empty «Chưa có nhật ký tuần kiểm» |

## 4. Leave / dirty / error

| Case | UX |
|------|-----|
| Dirty + Hủy/X/Esc/route | `LeaveConfirmModal` |
| View mode | Không leave-confirm |
| Save OK | Đóng · refresh · toast |
| Validation fail | Ở lại · toast field |
| 404 detail | Đóng slideout · toast |
| Upload fail | Toast · giữ draft |
| Media conditional | repairRequest có nội dung → ≥1 file · max 10/entry |

## 5. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=inspection-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` + typed body |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |
| road-route | `GET /integration/road-routes/search` |
| file | FileService `integrate-file-upload-web` |

FE: reuse `BASE=/asset/csdl-records`. SA: `Schema_CsdlSo01` · typed DTO/UiSchema.

## 6. Prototype + reviewUrl

| | |
|--|--|
| HTML | `specs/csdl-so-01/ui/prototype/csdl-so-01-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-01/ui/prototype/csdl-so-01-list-prototype.html` |
| Zones tagged | `data-des-id` DES-GRID-A/B/B-FILTER/C/D/Z · DES-FORM-Z1–Z3 · entries · leave |
| Sample rows | **synthetic UI chrome only** · **cấm** demo-json SSOT |

## 7. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Reason | autoApprove=ON · DoR PASS · control-map = controlHint · prototype + reviewUrl · filter-bar HARD · Q-* PO resolved · hash skip |
| Board | skipped (autoApprove) |

## 8. Out of scope / Cấm

- ERP.* / Domains/Master / invent infra / so-ts API
- Report pack / Kind F map canvas / Excel full wizard
- Guid IdCode · merge Sổ TS · parent JSON-only DoD
- Demo/localStorage SSOT · re-scan demo (**GAP-DES-DEMO-RESCAN-01**)
- yarn build / e2e / start:std ở Design
- manageUnit SearchInput P1 (DEFER P2)
- Master province P1 (DEFER P2)

## 9. Handoff

| Next | Need |
|------|------|
| **SA** | Schema_CsdlSo01 · typed DTO/UiSchema · FileService bind · migration pair |
| TL/Dev | alias page `/csdl-so-01` + typed form · reuse BASE |
| QA | Grid+form AC · e2e queued `/agent-qa*` only |

## DoR design

- [x] Kind B+D · zones A–D+F+H · Slideout Z1–Z3
- [x] Control-map chốt = controlHint (filters · header · entries)
- [x] Filter-bar HARD · Grid AC G-01…G-10
- [x] Prototype HTML + browser-openable reviewUrl
- [x] design_confirm **approve** (autoApprove)
- [x] hash skip · **cấm** re-scan demo
- [x] handoff compact ≤5KB
- [x] **cấm** Dev/BE · e2e · start:std · yarn build
