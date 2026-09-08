# Data-analy — controlHint — csdl-so-09 (Kind B list + Kind D Slideout · Sổ 09 ITS/ETC/KSTTX)

| Field | Value |
|-------|-------|
| feature | `csdl-so-09` |
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
| contentHash | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprint | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| analyzedAt | `2026-09-05T23:38:01.000Z` |
| cluster | `csdl-cuc-2026` · T-SO-09 · **NEW** · ca trực thiết bị · link Biểu 14 |
| taskId | `task_8076c138` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-09-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=its-ops-logs` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` · hub deep-link `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| resource | `its-ops-logs` (**MISSING** live · register catalog) |
| formNo | `09` · title VN **QL vận hành ITS/ETC/KSTTX** · **≠** live Biểu `boundary-markers` formNo 9 |
| IdCode | `SO-` |
| peerSoTs | — (≠ Sổ TS `so-ts-*` / ITS_CAMERA · deep-link hub only · LOOKUP chung Biểu 14) |
| runMode | `new_page` · typed book header + `entries[]` · **cấm** chỉ 3 ô `detail*` / `col1–3` flat |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> Không media bắt buộc trên Sổ 09 (T-FILE-01 = Sổ 1/2/6). Link Biểu 14 = deep-link / lookup `its-systems`.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-09.md` | `3a5cc7f081363f78c0d0bea4cd75d5e11a5951e5217fe4a8f66c085fd1c2d562` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-09 · GAP-CSDL-CUC-03 · GAP-CSDL-CUC-05 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `csdl-bieu-14` → Asset · **cấm** Domains/Master |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` shell · resource **chưa** seed |
| Live MFE | hub `CsdlSoSachPage` · `CsdlFormSlideout` | **không** có key `its-ops-logs` — **GAP-SO09-RES-01** |
| Peer Biểu 14 | `CsdlBieu14Page` · resource `its-systems` | link / SearchInput — **cấm** merge ROW |

Normalized header:

`code|bookNo|contractor|roadCode|roadName|kmFrom|kmTo|periodStart|periodEnd|status|province|manageUnit|notes|linkBieu14Id|entries.lineNo|entries.occurredAt|entries.shift|entries.operatorName|entries.systemStatus|entries.anomaly|entries.action|entries.result|entries.recommendation|entries.signature`

## § Delta Current vs New (`new_page` · `task_8076c138`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO09-RES-01 | Catalog **MISSING** `its-ops-logs` (GAP-CSDL-CUC-05) | Seed resource + card hub · formNo=`09` · title VN | hub / catalog |
| GAP-SO09-TYPED-01 | Không page · generic Col1–3 nếu bootstrap | Typed header T-SO-09 (thầu · Km · kỳ) + entry 9 cột ca trực + STT | form + list |
| GAP-SO09-ROUTE-01 | Không route | Alias mfeStd `/csdl-so-09` · hub `?resource=its-ops-logs` | shell / Design |
| GAP-SO09-LINK14-01 | — | Deep-link / lookup Biểu 14 `its-systems` · **cấm** gộp bảng | form |
| GAP-SO09-FORMNO-01 | Live formNo **9** = Biểu mốc `boundary-markers` | Sổ **09** book · **không** đụng Biểu 9 | hub card / docs |
| GAP-CSDL-ROAD-01 | — | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | contractor / manageUnit Text | SearchInput `org-unit` / `partner-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột Word | Đóng gap Sổ 09 khi typed PASS | form |
| GAP-CSDL-CUC-05 | Sổ 9 chưa có resource | Đóng khi seed `its-ops-logs` | catalog |
| GAP-RPT-SRC-CSDL-01 | — | Typed entries = report source READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet sổ ITS/ETC — OUT pack Dev/XLS | toolbar |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS / Biểu 14 rows · **cấm** invent `api/v1/infra/*`.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-09` | Title VN «Sổ 09 — QL vận hành ITS/ETC/KSTTX» · back hub · **cấm** slug trên card |
| List A | Header | title VN · back hub · meta resource=`its-ops-logs` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (bookNo · contractor · road · Km · period · status) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Entries | `pattern_inline_grid` | add/remove · typed 9 cột + STT · **cấm** chỉ Col1–3 |
| Link 14 | deep-link / SearchInput | mở Biểu 14 · **cấm** embed full form Biểu 14 trong slideout |
| Map | deep-link only | **cấm** canvas trên list pack |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · sổ · đường · thầu · người · ca |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | sổ status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` · period / ca |
| toDate | Đến ngày | `Date` | — | QS `toDate` |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bookNo | Số quyển / sổ | `Text` | * | T-SO-09 header |
| contractor | Nhà thầu | `Text` → đề xuất `SearchInput` | * | partner-unit P2 · **GAP-CSDL-ORG-01** |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName · tuyến |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Lý trình từ | `Number` | * | decimal Km |
| kmTo | Lý trình đến | `Number` | | |
| periodStart | Ngày bắt đầu kỳ | `Date` | * | kỳ sổ |
| periodEnd | Ngày kết thúc kỳ | `Date` | | |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| manageUnit | ĐV QL | `Text` → org-unit P2 | | **GAP-CSDL-ORG-01** |
| status | Tình trạng | `Dropdown` | | |
| linkBieu14Id | Liên kết Biểu 14 | `SearchInput` / link | | resource `its-systems` · **GAP-SO09-LINK14-01** |
| notes | Ghi chú sổ | `Textarea` | | |

## Control hint — entries[] (inline grid · T-SO-09 · ca trực thiết bị)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lineNo | STT | `Integer` ro | auto | |
| occurredAt | Ngày giờ | `DateTime` | * | ca trực |
| shift | Ca | `Dropdown` / `Text` | * | ca1/ca2/ca3 hoặc Text — PO |
| operatorName | Người | `Text` | * | người trực / vận hành |
| systemStatus | TT hệ thống | `Dropdown` / `Text` | * | tot/tb/kem/hong hoặc mô tả — PO |
| anomaly | TB bất thường | `Textarea` | | thiết bị / sự cố bất thường |
| action | Xử lý (XL) | `Textarea` | * | biện pháp XL tại ca |
| result | Kết quả | `Textarea` | * | kết quả XL |
| recommendation | Kiến nghị | `Textarea` | | |
| signature | Ký | `Text` | * | người ký / xác nhận ca |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road SearchInput · fromDate · toDate · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-SHIFT | shift = enum ca1–3 hay Text free? |
| Q-SYS-STATUS | systemStatus = catalog tot/tb/kem/hong hay Text mô tả ITS/ETC/KSTTX? |
| Q-LINK14 | linkBieu14 bắt buộc? 1:1 sổ↔hệ thống hay nhiều hệ thống / sổ? |
| Q-PROV | Province static vs master |
| Q-ORG | contractor / manageUnit Text P1 vs partner/org SearchInput |
| Q-SIGN | signature = Text tên hay e-sign / FileService sau? (T-FILE-01 **không** bắt buộc media Sổ 09) |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
