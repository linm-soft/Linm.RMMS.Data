# Data-analy — controlHint — csdl-so-04 (Kind B list + Kind D Slideout · Sổ 04 đếm xe)

| Field | Value |
|-------|-------|
| feature | `csdl-so-04` |
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
| contentHash | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprint | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| analyzedAt | `2026-09-05T22:06:16.761Z` |
| cluster | `csdl-cuc-2026` · T-SO-04 · TCVN 14182 PL B · Mẫu **4** |
| taskId | `task_85934368` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-04-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=traffic-counts` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** runtime `/api/v1/traffic-counts` (doc legacy) |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-04` · hub deep-link `/so-ts/csdl-so-sach?resource=traffic-counts` |
| resource | `traffic-counts` |
| formNo | `04` · title VN **Tổng hợp đếm xe** · live title còn «(+ TNGT)» đến tách Sổ 05 |
| IdCode | `SO-` |
| peerSoTs | LOOKUP `so-ts-count-station` / `COUNT_STATION` · **cấm** merge ROW · deep-link only |
| runMode | `new_page` · typed header + **1 row / trạm / quý** · 16 hạng xe TCVN + `totalCars` · **cấm** chỉ 3 ô `detail*` / `col1–3` · **cấm** nhét TNGT/điểm đen |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> Peer report Kind E: `rpt-dem-xe` — **cấm** copy CRUD vào report.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-04.md` | `97043e90df6fac6810772e39755beb8467466a0527f0aa4fd5884c6b7a600e3c` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-04 · GAP-CSDL-CUC-07 · map §1.3 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` · **cấm** Domains/Master |
| Live API | `CsdlCatalogRecordsController` · `CsdlCatalogService` | `api/v1/asset/csdl-records` · key `traffic-counts` |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` · store `traffic-counts` | generic book `col1–3` + title «(+ TNGT)» — **GAP-SO04-TYPED-01** · **GAP-SO04-SPLIT-01** |

Normalized header:

`code|bookNo|contractor|stationCode|stationName|roadCode|roadName|kmFrom|kmTo|year|quarter|countMethod|province|status|notes|class01|class02|class03|class04|class05|class06|class07|class08|class09|class10|class11|class12|class13|class14|class15|class16|totalCars`

## § Delta Current vs New (`new_page` · `task_85934368`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO04-TYPED-01 | Hub `traffic-counts` + form 3 ô `detail*` + `entries.col1–3` | Typed header T-SO-04 (nhà thầu · trạm · Km · quý/năm · thủ công/tự động) + **16 hạng xe** + `totalCars` | form + list |
| GAP-SO04-SPLIT-01 | Live title «đếm xe (+ TNGT)» · 1 resource gộp | Chỉ đếm xe · **tách** TNGT/điểm đen → `csdl-so-05` (**GAP-CSDL-CUC-07**) | hub card / catalog |
| GAP-SO04-ROUTE-01 | Chỉ deep-link hub `?resource=traffic-counts` | Alias mfeStd `/csdl-so-04` · giữ hub entry | shell / Design |
| GAP-SO04-FORMNO-01 | Live formNo `4` · title lẫn TNGT | Cục **Sổ 04** formNo=`04` · title VN không TNGT · **giữ** resource key | hub / T-REN-01 |
| GAP-SO04-STATION-01 | `detail*` / free text «Trạm đếm» | SearchInput peer `COUNT_STATION` / catalog count-station | form + filter |
| GAP-SO04-METHOD-01 | Không field method | `countMethod` Dropdown thủ công / tự động | form |
| GAP-SO04-ROW-01 | Journal Col1–3 multi-line | **1 row / trạm / quý** · matrix 16 class (không journal ngày) | form |
| GAP-CSDL-ROAD-01 | `roadName` Text free | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `contractor` Text | SearchInput `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Sổ 04 khi typed PASS | form |
| GAP-CSDL-CUC-07 | Đếm xe gộp TNGT | Đóng khi split PASS (+ so-05) | hub / BE |
| GAP-CSDL-CUC-11 | — | LOOKUP trạm/đường chung · **ROW riêng** ≠ Sổ TS | form |
| GAP-RPT-SRC-CSDL-01 | flat Col1–3 | Typed 16 class = report source `rpt-dem-xe` READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet đếm xe TCVN — OUT pack Dev/XLS | toolbar |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `traffic-counts` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS · **cấm** CRUD trên `rpt-dem-xe`.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-04` | Title VN «Sổ 04 — Tổng hợp đếm xe» · **không** «+ TNGT» · back hub · **cấm** slug trên card |
| List A | Header | title VN · back hub · meta resource=`traffic-counts` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · station SearchInput · year · quarter · countMethod · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (bookNo · contractor · station · road · Km · year/quarter · method · totalCars) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Count matrix | Z2 section (không journal add-row) | 16 `Number` class + `totalCars` · **cấm** chỉ Col1–3 |
| Map | deep-link only | **cấm** canvas trên list pack |
| Peer | deep-link Sổ TS trạm đếm | **cấm** gộp form |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · sổ · trạm · đường |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | sổ status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| stationCode | Trạm đếm | `SearchInput` | **count-station** | peer `COUNT_STATION` · **GAP-SO04-STATION-01** |
| year | Năm | `Integer` / `Dropdown` | — | QS `year` |
| quarter | Quý | `Dropdown` | LOOKUP_STATIC | 1–4 |
| countMethod | Phương pháp | `Dropdown` | LOOKUP_STATIC | thủ công / tự động |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bookNo | Số quyển / sổ | `Text` | * | T-SO-04 header |
| contractor | Nhà thầu | `Text` → đề xuất `SearchInput` | * | org-unit P2 · **GAP-CSDL-ORG-01** |
| stationCode | Mã trạm | `SearchInput` | * | count-station · bind stationName |
| stationName | Tên trạm | `Text` ro / display | * | từ SearchInput |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Lý trình từ | `Number` | * | decimal Km · vị trí trạm |
| kmTo | Lý trình đến | `Number` | | |
| year | Năm | `Integer` | * | kỳ năm |
| quarter | Quý | `Dropdown` | * | 1–4 · **1 row / trạm / quý** |
| countMethod | Thủ công / tự động | `Dropdown` | * | **GAP-SO04-METHOD-01** |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| status | Tình trạng | `Dropdown` | | |
| notes | Ghi chú sổ | `Textarea` | | |

## Control hint — count matrix (Z2 · 1 row)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| class01 … class16 | Hạng xe 01–16 (TCVN 14182 PL B) | `Number` integer ≥0 | * | Label VN **chốt PO** từ Excel/Word · **Q-CLASS-LABEL** · **cấm** gộp TNGT |
| totalCars | Tổng ôtô | `Number` integer ≥0 | * | T-SO-04 · có thể derived SA — **Q-TOTAL** |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road · station · year · quarter · countMethod · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop · filter-bar-layout-hard.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-CLASS-LABEL | 16 tên hạng xe đúng Excel/Word TCVN 14182 PL B (cite sheet) |
| Q-TOTAL | `totalCars` nhập tay vs sum class ôtô (SA rule) |
| Q-SPLIT | Timing tách title/TNGT vs feature `csdl-so-05` |
| Q-STATION | Bắt buộc SearchInput count-station P1 vs Text tạm |
| Q-UNIQUE | Unique constraint (station + year + quarter) — soft warn vs hard 422 |
| Q-PROV | Province static vs master |
| Q-ORG | contractor Text P1 vs org-unit SearchInput |
| Q-STATUS | Status enum sổ đếm |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
