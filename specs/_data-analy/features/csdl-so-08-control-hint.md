# Data-analy — controlHint — csdl-so-08 (Kind B list + Kind D Slideout · Sổ 08 Kết quả BDTX)

| Field | Value |
|-------|-------|
| feature | `csdl-so-08` |
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
| contentHash | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| headerFingerprint | `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` |
| analyzedAt | `2026-09-05T18:36:01.000Z` |
| cluster | `csdl-cuc-2026` · T-SO-08 · TT 41 PL IV · Mẫu **2** · **5 cột** entry |
| taskId | `task_aa2658e0` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-08-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=maintenance-work-logs` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-08` · hub deep-link `/so-ts/csdl-so-sach?resource=maintenance-work-logs` |
| resource | `maintenance-work-logs` |
| formNo | `08` · title VN **Ghi chép kết quả BDTX** · live hub **Sổ 8** (khớp Cục · không renumber key) |
| IdCode | `SO-` |
| peerSoTs | — (≠ Sổ TS `so-ts-*` · deep-link hub only) |
| runMode | `new_page` · typed book header + `entries[]` · **cấm** chỉ 3 ô `detail*` / `col1–3` flat |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> Không media bắt buộc trên Sổ 08 (T-FILE-01 = Sổ 1/2/6).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-08.md` | `c3c3e95d985ff52cc0cb0df218a8a8339ab6eb33f8e3e599b198dfddd26ed034` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-08 · GAP-CSDL-CUC-03 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` · **cấm** Domains/Master |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` shell |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic book `col1–3` — **GAP-SO08-TYPED-01** |

Normalized header:

`code|bookNo|contractor|roadCode|roadName|kmFrom|kmTo|officeUnit|zoneUnit|periodStart|periodEnd|status|province|manageUnit|notes|entries.lineNo|entries.workItem|entries.kmFrom|entries.kmTo|entries.solution|entries.mainResult|entries.note`

## § Delta Current vs New (`new_page` · `task_aa2658e0`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO08-TYPED-01 | Hub `maintenance-work-logs` + form 3 ô `detail*` + `entries.col1–3` | Typed header T-SO-08 (tuyến Km · thầu · VP · Khu) + entry 5 cột (việc · Km · giải pháp · kết quả chính · ghi chú) + STT | form + list |
| GAP-SO08-ROUTE-01 | Chỉ deep-link hub `?resource=maintenance-work-logs` | Alias mfeStd `/csdl-so-08` · giữ hub entry | shell / Design |
| GAP-SO08-FORMNO-01 | Live label **Sổ 8** · key `maintenance-work-logs` | Cục **Sổ 08** formNo=`08` · **giữ** resource key (đã khớp Cục) | hub card / docs |
| GAP-CSDL-ROAD-01 | `roadName` Text free | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` / contractor / VP / Khu Text | SearchInput `org-unit` / `partner-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột Word | Đóng gap Sổ 08 khi typed PASS | form |
| GAP-RPT-SRC-CSDL-01 | flat Col1–3 | Typed entries = report source READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet sổ BDTX — OUT pack Dev/XLS | toolbar |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `maintenance-work-logs` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-08` | Title VN «Sổ 08 — Kết quả BDTX» · back hub · **cấm** slug trên card |
| List A | Header | title VN · back hub · meta resource=`maintenance-work-logs` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (bookNo · contractor · road · Km · officeUnit · zoneUnit · period) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Entries | `pattern_inline_grid` | add/remove · typed 5 cột + STT · **cấm** chỉ Col1–3 |
| Map | deep-link only | **cấm** canvas trên list pack |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · sổ · đường · thầu · việc |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong hoặc sổ status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` · period |
| toDate | Đến ngày | `Date` | — | QS `toDate` |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bookNo | Số quyển / sổ | `Text` | * | T-SO-08 header |
| contractor | Nhà thầu | `Text` → đề xuất `SearchInput` | * | partner-unit P2 · **GAP-CSDL-ORG-01** |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName · tuyến |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Lý trình từ | `Number` | * | decimal Km |
| kmTo | Lý trình đến | `Number` | | |
| officeUnit | Văn phòng (VP) | `Text` → org-unit P2 | * | T-SO-08 header VP |
| zoneUnit | Khu | `Text` → org-unit P2 | * | T-SO-08 header Khu |
| periodStart | Ngày bắt đầu | `Date` | * | kỳ sổ |
| periodEnd | Ngày kết thúc | `Date` | | |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| manageUnit | ĐV QL | `Text` → org-unit P2 | | **GAP-CSDL-ORG-01** |
| status | Tình trạng | `Dropdown` | | |
| notes | Ghi chú sổ | `Textarea` | | |

## Control hint — entries[] (inline grid · TT 41 PL IV Mẫu 2 · 5 cột)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lineNo | STT | `Integer` ro | auto | |
| workItem | Việc thực hiện | `Text` | * | hạng mục / công việc BDTX |
| kmFrom | Km từ | `Number` | * | lý trình đoạn |
| kmTo | Km đến | `Number` | | |
| solution | Giải pháp | `Textarea` | * | biện pháp / giải pháp XL |
| mainResult | Kết quả chính | `Textarea` | * | kết quả BDTX |
| note | Ghi chú | `Text` | | dòng ghi chú |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road SearchInput · fromDate · toDate · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-VP-KHU | officeUnit / zoneUnit = Text P1 hay org-unit SearchInput · enum Khu cố định? |
| Q-STATUS | Status enum sổ BDTX vs catalog tot/tb/kem/hong |
| Q-PROV | Province static vs master |
| Q-ORG | contractor / manageUnit Text P1 vs partner/org SearchInput |
| Q-ENTRY-KM | Km entry = 1 ô `kmAt` hay cặp từ–đến — Word mẫu chốt |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
