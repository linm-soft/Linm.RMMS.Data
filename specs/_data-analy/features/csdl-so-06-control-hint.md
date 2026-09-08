# Data-analy — controlHint — csdl-so-06 (Kind B list + Kind D Slideout · Sổ 06 QL cầu / phiếu KT)

| Field | Value |
|-------|-------|
| feature | `csdl-so-06` |
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
| contentHash | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprint | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| analyzedAt | `2026-09-06T03:11:57.434Z` |
| cluster | `csdl-cuc-2026` · T-SO-06 · TT 41 · TCVN · Mẫu **6** Cục |
| taskId | `task_ff0beb8e` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-06-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=bridge-inspections` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** standalone `/api/v1/bridge-inspections` runtime |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` · hub deep-link `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| resource | `bridge-inspections` |
| formNo | `06` · title VN **QL cầu / phiếu KT** · live hub card «Phiếu KT cầu» (legacy index) đến T-REN-01 |
| IdCode | `SO-` |
| peerSoTs | — (≠ Sổ TS) · deep-link **Biểu 2** `bridges` / passport · **cấm** merge 1 form |
| runMode | `new_page` · typed header + **20 dòng cố định** `entries[]` · **cấm** chỉ 3 ô `detail*` / `col1–3` flat |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> Ảnh phiếu KT = FileService (`/integrate-file-upload-web`) · **cấm** invent file API · T-FILE-01.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-06.md` | `93172fa01fd6fdcf8bbd6266142a67c45537e5984af5dc6c0070e213fcc8858b` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-06 · GAP-CSDL-CUC-03 |
| API catalog cite | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.5 | 20 partCode EN + line fields · **runtime** = csdl-records |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · **GAP-SO06-DMAP-01** thiếu row `csdl-so-06` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` shell |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic book `col1–3` — **GAP-SO06-TYPED-01** |

Normalized header:

`code|bridgeId|bridgeName|roadCode|roadName|kmStation|manageUnit|passportRef|inspectedAt|inspector|province|adminArea|status|notes|entries.lineNo|entries.partCode|entries.partName|entries.damageDesc|entries.proposedActionQty|entries.priority|entries.photoIds|entries.notes`

## § Delta Current vs New (`new_page` · `task_ff0beb8e`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO06-TYPED-01 | Hub `bridge-inspections` + form 3 ô `detail*` + `entries.col1–3` | Typed header T-SO-06 + **20 dòng cố định** bộ phận (damage · KL kiến nghị · priority · ảnh · ghi chú) | form + list |
| GAP-SO06-ROUTE-01 | Chỉ deep-link hub `?resource=bridge-inspections` | Alias mfeStd `/csdl-so-06` · giữ hub entry | shell / Design |
| GAP-SO06-FORMNO-01 | Live card «Phiếu KT cầu» · legacy sổ index | Cục **Sổ 06** formNo=`06` · giữ resource key (`GAP-CSDL-CUC-02` / T-REN-01) | hub card / docs |
| GAP-SO06-FIXED20-01 | Col1–3 free lines | `partCode` seed 20 · **cấm** add/remove row · chỉ edit line fields | entries grid |
| GAP-SO06-MEDIA-01 | Không media typed | `photoIds[]` FileService / dòng · T-FILE-01 | form |
| GAP-SO06-PEER-01 | Không link Biểu 2 | SearchInput/deep-link `bridges` + `passportRef` · **cấm** merge form Biểu 2 | form |
| GAP-SO06-APILEGACY-01 | Doc cũ `/api/v1/bridge-inspections` | Runtime **chỉ** `api/v1/asset/csdl-records?resource=bridge-inspections` | BE / docs |
| GAP-SO06-DMAP-01 | DOMAIN-MAP thiếu `csdl-so-06` | SA thêm row Asset · `asset` (như so-01/02/03/08) | DOMAIN-MAP |
| GAP-CSDL-ROAD-01 | `roadName` Text free | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Sổ 06 khi typed PASS | form |
| GAP-RPT-SRC-CSDL-01 | flat Col1–3 | Typed lines = report source (`rpt-kiem-tra-cau` drill) READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet sổ QL cầu — OUT pack Dev/XLS | toolbar |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `bridge-inspections` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS / Biểu 2 form.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-06` | Title VN «Sổ 06 — QL cầu / phiếu KT» · back hub · **cấm** slug trên card |
| List A | Header | title VN · back hub · meta resource=`bridge-inspections` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · bridge SearchInput · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (code · bridgeName · road · kmStation · inspectedAt · inspector · status) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Entries | `pattern_inline_grid` **fixed 20** | seed partCode · **cấm** add/remove · **cấm** chỉ Col1–3 |
| Media | upload / dòng | FileService · ảnh phiếu KT · **cấm** invent path |
| Map | deep-link only | **cấm** canvas trên list pack |
| Peer | deep-link Biểu 2 | `bridges` / passport · không gộp bảng |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · cầu · đường · người KT |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | phiếu status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| bridgeId | Tên cầu | `SearchInput` | **bridges** / Biểu 2 | **GAP-SO06-PEER-01** |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` · inspectedAt |
| toDate | Đến ngày | `Date` | — | QS `toDate` |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bridgeId | Cầu | `SearchInput` | * | catalog bridges · bind bridgeName · **GAP-SO06-PEER-01** |
| bridgeName | Tên cầu | `Text` ro / display | * | từ SearchInput |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmStation | Lý trình (Km) | `Number` | * | Km cầu |
| manageUnit | ĐV QL | `Text` → đề xuất `SearchInput` | * | org-unit P2 · **GAP-CSDL-ORG-01** |
| passportRef | Lý lịch / passport | `Text` / link | | deep-link Biểu 2 passport · **cấm** embed full passport form |
| inspectedAt | Ngày kiểm tra | `Date` | * | |
| inspector | Người kiểm tra | `Text` | * | |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| adminArea | Địa phận | `Text` | | |
| status | Tình trạng phiếu | `Dropdown` | | |
| notes | Ghi chú phiếu | `Textarea` | | |

## Control hint — entries[] (20 dòng cố định)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lineNo | STT | `Integer` ro | auto | 1–20 cố định |
| partCode | Mã bộ phận | `Text` ro | * | seed EN key § dưới · **cấm** đổi |
| partName | Bộ phận | `Text` ro | * | label VN seed |
| damageDesc | Hư hỏng | `Textarea` | | mô tả tình trạng |
| proposedActionQty | KL kiến nghị | `Text` | | khối lượng / giải pháp kiến nghị |
| priority | Ưu tiên | `Dropdown` | | `quarter` / `before-storm` / `immediate` · label VN quý · trước bão · ngay |
| photoIds | Ảnh | `FileMulti` | | FileService · **GAP-SO06-MEDIA-01** |
| notes | Ghi chú dòng | `Text` | | |

### Seed 20 bộ phận (cố định · cite §3.5)

| # | partCode | partName VN |
|---|----------|-------------|
| 1 | `Signage` | Biển báo |
| 2 | `Approach10m` | Đường dẫn 10m |
| 3 | `Lighting` | Chiếu sáng |
| 4 | `ExpansionJoint` | Khe co giãn |
| 5 | `DeckMarking` | Vạch kẻ mặt cầu |
| 6 | `DeckDrainage` | Thoát nước mặt cầu |
| 7 | `Railing` | Lan can |
| 8 | `Abutment` | Mố |
| 9 | `AbutmentCone` | Nón mố |
| 10 | `RiverTraining` | Công trình chỉnh trị |
| 11 | `Pier` | Trụ |
| 12 | `Bearing` | Gối |
| 13 | `DeckSlab` | Bản mặt cầu |
| 14 | `MainGirder` | Dầm chính |
| 15 | `CrossGirder` | Dầm ngang |
| 16 | `LongitudinalBrace` | Liên kết dọc |
| 17 | `Arch` | Vòm |
| 18 | `RiverSignage` | Biển báo sông |
| 19 | `ClearanceEncroachment` | Xâm phạm khổ giới hạn |
| 20 | `AttachedDevices` | Thiết bị gắn kèm |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road SearchInput · bridge SearchInput · fromDate · toDate · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-FORMNO | Label hub «Phiếu KT cầu» → «Sổ 06» timing vs T-REN-01 |
| Q-STATUS | Status enum phiếu KT vs catalog tot/tb/kem/hong |
| Q-PRIORITY | Bắt buộc priority khi có `damageDesc`? |
| Q-MEDIA | Ảnh bắt buộc theo dòng / theo phiếu · max file |
| Q-BRIDGE | SearchInput bridges catalog READY vs Text + bridgeId manual P1 |
| Q-PROV | Province static vs master |
| Q-ORG | manageUnit Text P1 vs org-unit SearchInput |
| Q-DMAP | SA thêm DOMAIN-MAP `csdl-so-06` ngay wave này? |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
