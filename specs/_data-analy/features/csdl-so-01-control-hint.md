# Data-analy — controlHint — csdl-so-01 (Kind B list + Kind D Slideout · Sổ 01 tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `csdl-so-01` |
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
| contentHash | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprint | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| analyzedAt | `2026-09-05T17:50:31.000Z` |
| cluster | `csdl-cuc-2026` · T-SO-01 · TT 41 PL VIII · Mẫu **1** |
| taskId | `task_3931d587` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-01-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=inspection-logs` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-01` · hub deep-link `/so-ts/csdl-so-sach?resource=inspection-logs` |
| resource | `inspection-logs` |
| formNo | `01` · title VN **Nhật ký tuần kiểm** · live label còn **Sổ 8** đến T-REN-01 |
| IdCode | `SO-` |
| peerSoTs | — (≠ Sổ TS `so-ts-*` · deep-link hub only) |
| runMode | `new_page` · typed book header + `entries[]` · **cấm** chỉ 3 ô `detail*` / `col1–3` flat |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> Media sau SC = FileService (`/integrate-file-upload-web`) · **cấm** invent file API.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-01.md` | `8fee536e8ca26ef98970338464360707ee1396165122029d50ab23651275c1ac` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-01 · GAP-CSDL-CUC-02/03 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` · **cấm** Domains/Master |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` shell |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic book `col1–3` — **GAP-SO01-TYPED-01** |

Normalized header:

`code|bookNo|manageUnit|inspector|roadCode|roadName|kmFrom|kmTo|periodStart|periodEnd|status|province|notes|entries.lineNo|entries.inspectDate|entries.itemProposal|entries.kmFrom|entries.kmTo|entries.location|entries.description|entries.estQuantity|entries.inspectorOpinion|entries.remarkSign|entries.repairRequest|entries.dueDate|entries.actualQtyQualityDate|entries.postRepairMediaIds`

## § Delta Current vs New (`new_page` · `task_3931d587`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO01-TYPED-01 | Hub `inspection-logs` + form 3 ô `detail*` + `entries.col1–3` | Typed header T-SO-01 + entry fields (ngày·hạng mục·Km·mô tả·KL·ý kiến·SC/VP·hạn·KL/CL TT·file sau SC) | form + list |
| GAP-SO01-ROUTE-01 | Chỉ deep-link hub `?resource=inspection-logs` | Alias mfeStd `/csdl-so-01` · giữ hub entry | shell / Design |
| GAP-SO01-FORMNO-01 | Live label **Sổ 8** · key `inspection-logs` | Cục **Sổ 01** formNo=`01` · giữ resource key (`GAP-CSDL-CUC-02` / T-REN-01) | hub card / docs |
| GAP-SO01-MEDIA-01 | Không media typed sau SC | `postRepairMediaIds[]` via FileService · T-FILE-01 | form |
| GAP-CSDL-ROAD-01 | `roadName` Text free | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Sổ 01 khi typed PASS | form |
| GAP-RPT-SRC-CSDL-01 | flat Col1–3 | Typed entries = report source READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet sổ tuần kiểm — OUT pack Dev/XLS | toolbar |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `inspection-logs` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-01` | Title VN «Sổ 01 — Nhật ký tuần kiểm» · back hub · **cấm** slug trên card |
| List A | Header | title VN · back hub · meta resource=`inspection-logs` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (bookNo · manageUnit · inspector · road · Km · period) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Entries | `pattern_inline_grid` | add/remove · typed cols · **cấm** chỉ Col1–3 |
| Media sau SC | upload zone | FileService · ảnh/video sau sửa chữa · **cấm** invent path |
| Map | deep-link only | **cấm** canvas trên list pack |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · sổ · đường · người TK |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong hoặc sổ status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` · period |
| toDate | Đến ngày | `Date` | — | QS `toDate` |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bookNo | Số quyển / sổ | `Text` | * | T-SO-01 header |
| manageUnit | ĐV QL | `Text` → đề xuất `SearchInput` | * | org-unit P2 · **GAP-CSDL-ORG-01** |
| inspector | Người tuần kiểm | `Text` | * | người TK |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Lý trình từ | `Number` | * | decimal Km |
| kmTo | Lý trình đến | `Number` | | |
| periodStart | Ngày bắt đầu | `Date` | * | kỳ sổ |
| periodEnd | Ngày kết thúc | `Date` | | |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| status | Tình trạng | `Dropdown` | | |
| notes | Ghi chú sổ | `Textarea` | | |

## Control hint — entries[] (inline grid)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lineNo | STT | `Integer` ro | auto | |
| inspectDate | Ngày | `Date` | * | ngày tuần kiểm dòng |
| itemProposal | Hạng mục / đề xuất | `Text` | * | |
| kmFrom | Km từ | `Number` | * | lý trình đoạn |
| kmTo | Km đến | `Number` | | |
| location | Vị trí | `Text` | | L/R / mô tả vị trí |
| description | Mô tả | `Textarea` | * | tình trạng / hư hỏng |
| estQuantity | KL ước | `Text` | | khối lượng ước tính |
| inspectorOpinion | Ý kiến TK | `Textarea` | | |
| remarkSign | Nhận xét + ký | `Text` | | |
| repairRequest | Yêu cầu SC / VP | `Textarea` | | sửa chữa / xử lý VP |
| dueDate | Hạn | `Date` | | hạn xử lý |
| actualQtyQualityDate | KL / CL / ngày TT | `Text` | | khối lượng · chất lượng · ngày thực tế |
| postRepairMediaIds | File sau SC | `FileMulti` | | FileService · **GAP-SO01-MEDIA-01** · T-FILE-01 |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road SearchInput · fromDate · toDate · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-FORMNO | Label hub «Sổ 8» → «Sổ 01» timing vs T-REN-01 |
| Q-STATUS | Status enum sổ tuần vs catalog tot/tb/kem/hong |
| Q-MEDIA | Media sau SC bắt buộc khi có yêu cầu SC · max file |
| Q-PROV | Province static vs master |
| Q-ORG | manageUnit Text P1 vs org-unit SearchInput |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
