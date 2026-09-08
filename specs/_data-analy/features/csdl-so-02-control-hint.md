# Data-analy — controlHint — csdl-so-02 (Kind B list + Kind D Slideout · Sổ 02 tuần đường)

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| packKind | `list` |
| mode | `feature_context` (new_page · CTX + cluster analy + hub demo · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo hash recorded · autoApprove queue) |
| contentHash | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| headerFingerprint | `sha256:5da56778e38ecc53807d424082520372c7bbed355257bdacfa0457dba0036e3c` |
| analyzedAt | `2026-09-05T17:10:00.000Z` |
| cluster | `csdl-cuc-2026` · T-SO-02 · TT 41 PL VIII · Mẫu **2** |
| taskId | `task_1c1e0895` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-02-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=patrol-logs` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` · hub deep-link `/so-ts/csdl-so-sach?resource=patrol-logs` |
| resource | `patrol-logs` |
| formNo | `02` · title VN **Nhật ký tuần đường** · live label còn **Sổ 1** đến T-REN-01 |
| IdCode | `SO-` |
| peerSoTs | — (≠ Sổ TS `so-ts-*` · deep-link hub only) |
| runMode | `new_page` · typed book header + `entries[]` · **cấm** chỉ 3 ô `detail*` / `col1–3` flat |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> Sketch + media = FileService (`/integrate-file-upload-web`) · **cấm** invent file API.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-02.md` | `995ef7afd21d7877d574976619537e99f6bf557ee4d7b3895ef882807e45e4ab` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-02 · GAP-CSDL-CUC-02/03 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` · **cấm** Domains/Master |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` shell |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic book `col1–3` — **GAP-SO02-TYPED-01** |

Normalized header:

`code|bookNo|contractor|roadCode|roadName|kmFrom|kmTo|patrolStaff|periodStart|periodEnd|status|province|manageUnit|notes|entries.lineNo|entries.eventAt|entries.locationKm|entries.weatherEvent|entries.onSiteAction|entries.remarkSign|entries.note|entries.sketchRef|entries.mediaIds`

## § Delta Current vs New (`new_page` · `task_1c1e0895`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO02-TYPED-01 | Hub `patrol-logs` + form 3 ô `detail*` + `entries.col1–3` | Typed header T-SO-02 + entry fields (giờ·Km·thời tiết·XL·ký·ghi chú·sketch) | form + list |
| GAP-SO02-ROUTE-01 | Chỉ deep-link hub `?resource=patrol-logs` | Alias mfeStd `/csdl-so-02` · giữ hub entry | shell / Design |
| GAP-SO02-FORMNO-01 | Live label **Sổ 1** · key `patrol-logs` | Cục **Sổ 02** formNo=`02` · giữ resource key (`GAP-CSDL-CUC-02` / T-REN-01) | hub card / docs |
| GAP-SO02-SKETCH-01 | Không sketch / media typed | `sketchRef` + `mediaIds[]` via FileService | form · T-FILE-01 |
| GAP-CSDL-ROAD-01 | `roadName` Text free | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` / contractor Text | SearchInput `org-unit` / `partner-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Sổ 02 khi typed PASS | form |
| GAP-RPT-SRC-CSDL-01 | flat Col1–3 | Typed entries = report source READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet sổ tuần đường — OUT pack Dev/XLS | toolbar |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `patrol-logs` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-02` | Title VN «Sổ 02 — Nhật ký tuần đường» · back hub · **cấm** slug trên card |
| List A | Header | title VN · back hub · meta resource=`patrol-logs` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (bookNo · contractor · road · Km · NV tuần · period) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Entries | `pattern_inline_grid` | add/remove · typed cols · **cấm** chỉ Col1–3 |
| Sketch/media | upload zone | FileService · sketch + ảnh/video · **cấm** invent path |
| Map | deep-link only | **cấm** canvas trên list pack |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · sổ · đường · NV |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong hoặc sổ status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` · period |
| toDate | Đến ngày | `Date` | — | QS `toDate` |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bookNo | Số quyển / sổ | `Text` | * | T-SO-02 header |
| contractor | Nhà thầu | `Text` → đề xuất `SearchInput` | * | partner-unit P2 |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Lý trình từ | `Number` | * | decimal Km |
| kmTo | Lý trình đến | `Number` | | |
| patrolStaff | NV tuần đường | `Text` | * | người tuần |
| periodStart | Ngày bắt đầu | `Date` | * | kỳ sổ |
| periodEnd | Ngày kết thúc | `Date` | | |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| manageUnit | ĐV QL | `Text` → org-unit P2 | | **GAP-CSDL-ORG-01** |
| status | Tình trạng | `Dropdown` | | |
| notes | Ghi chú sổ | `Textarea` | | |

## Control hint — entries[] (inline grid)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lineNo | STT | `Integer` ro | auto | |
| eventAt | Giờ / ngày | `DateTime` | * | tuần đường |
| locationKm | Vị trí / Km SC-VP | `Text` | * | Km + mô tả vị trí |
| weatherEvent | Thời tiết + diễn biến | `Textarea` | * | |
| onSiteAction | Xử lý tại chỗ | `Textarea` | | |
| remarkSign | Nhận xét + ký | `Text` | | |
| note | Ghi chú dòng | `Text` | | |
| sketchRef | Sketch | `FileRef` | | FileService · GAP-SO02-SKETCH-01 |
| mediaIds | Ảnh / video | `FileMulti` | | T-FILE-01 |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road SearchInput · fromDate · toDate · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-FORMNO | Label hub «Sổ 1» → «Sổ 02» timing vs T-REN-01 |
| Q-STATUS | Status enum sổ tuần vs catalog tot/tb/kem/hong |
| Q-SKETCH | Sketch bắt buộc mỗi dòng hay optional · media max |
| Q-PROV | Province static vs master |
| Q-CONTRACTOR | Text P1 vs partner-unit SearchInput |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
