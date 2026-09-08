# Data-analy — controlHint — csdl-so-05 (Kind B list + Kind D Slideout · Sổ 05 TNGT + điểm đen)

| Field | Value |
|-------|-------|
| feature | `csdl-so-05` |
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
| contentHash | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprint | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| analyzedAt | `2026-09-05T22:43:57.821Z` |
| cluster | `csdl-cuc-2026` · T-SO-05 · TCVN 14182 PL C · Mẫu **5** · GAP-CSDL-CUC-07 |
| taskId | `task_6deceabd` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-05-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=accident-summaries` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** runtime `/api/v1/accident-summaries` (doc legacy) |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-05` · hub deep-link `/so-ts/csdl-so-sach?resource=accident-summaries` |
| resource | `accident-summaries` |
| formNo | `05` · title VN **TNGT + điểm đen** · **NEW** (tách từ live Sổ 4 «(+ TNGT)») |
| IdCode | `SO-` |
| peerSoTs | LOOKUP `road-route` · report leaf `rpt-tngt` · incident type TNGT read-link · **cấm** merge ROW · **cấm** gộp `traffic-counts` |
| runMode | `new_page` · typed header + **3 bảng** C.1 / C.2 / điểm đen · **cấm** chỉ 3 ô `detail*` / `col1–3` · **cấm** nhét đếm xe 16 hạng |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> Peer report Kind E: `rpt-tngt` — **cấm** copy CRUD vào report.  
> Peer sổ: `csdl-so-04` (`traffic-counts`) — **ROW/resource riêng** · đóng **GAP-CSDL-CUC-07**.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-05.md` | `57cea368f11fc3663cb235dea862fad654802483d207dbc34c37d41b57defcc6` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-05 · GAP-CSDL-CUC-07 · §1.3 Mẫu 5 · 3 grid |
| Peer analy | `specs/_data-analy/features/csdl-so-04-control-hint.md` | GAP-SO04-SPLIT-01 → so-05 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome · **chưa** card `accident-summaries` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` · **cấm** Domains/Master |
| Live API | `CsdlCatalogRecordsController` · `CsdlCatalogService` | `api/v1/asset/csdl-records` · key **NEW** `accident-summaries` |
| Live MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | live gộp TNGT trong `traffic-counts` title — **GAP-SO05-SPLIT-01** · resource chưa có |

Normalized header:

`code|bookNo|contractor|roadCode|roadName|kmFrom|kmTo|province|year|periodType|periodValue|status|notes|tableKind|c1RoadName|c1Location|c1AccidentCount|c1CauseRoad|c1CausePerson|c1CauseVehicle|c1Fatalities|c1Injuries|c1DamageInfra|c1DamageVehicle|c1Remarks|c2RoadName|c2AccidentCount|c2Fatalities|c2Injuries|c2DamageInfra|c2DamageVehicle|c2Remarks|bsLocation|bsKmFrom|bsKmTo|bsAccident12m|bsFatalities12m|bsInjuries12m|bsAssessment|bsStateFoundation|bsStateGeometry|bsStateAtgt|bsPreliminaryAction|bsMeasures|bsFollowUp`

## § Delta Current vs New (`new_page` · `task_6deceabd`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO05-RES-01 | Hub **không** có resource `accident-summaries` · TNGT dính title Sổ 4 | Catalog + card **Sổ 05** formNo=`05` · resource `accident-summaries` · title VN «TNGT + điểm đen» | hub / T-REN-01 |
| GAP-SO05-SPLIT-01 | Live title «đếm xe (+ TNGT)» 1 resource | Tách khỏi `traffic-counts` (**GAP-CSDL-CUC-07** · peer so-04) | hub / BE |
| GAP-SO05-TYPED-01 | Form generic 3 ô `detail*` + `col1–3` (nếu bind chung) | Typed header T-SO-05 + **3 grid** C.1 / C.2 / điểm đen | form + list |
| GAP-SO05-C1-01 | — | **C.1** tháng: đường · vị trí · số vụ · nguyên nhân (đường/người/PT) · chết/thương · thiệt hại cầu-đường/PT · nhận xét | form tab/grid |
| GAP-SO05-C2-01 | — | **C.2** tổng hợp 6 tháng / năm (cùng metric chính · kỳ `half`/`year`) | form tab/grid |
| GAP-SO05-BS-01 | — | **Điểm đen / tiềm ẩn:** 12 tháng vụ/chết/thương · ĐG · hiện trạng (nền/hình học/ATGT) · XL sơ bộ · BP · theo dõi | form tab/grid |
| GAP-SO05-ROUTE-01 | Chỉ hub (chưa deep-link) | Alias mfeStd `/csdl-so-05` · hub `?resource=accident-summaries` | shell / Design |
| GAP-SO05-FORMNO-01 | Live formNo sổ 4 gộp | Cục **Sổ 05** formNo=`05` · **không** reuse formNo 4 | hub |
| GAP-CSDL-ROAD-01 | `roadName` Text free | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `contractor` Text | SearchInput `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Sổ 05 khi typed PASS | form |
| GAP-CSDL-CUC-07 | Đếm xe gộp TNGT | Đóng khi so-04 + so-05 split PASS | hub / BE |
| GAP-CSDL-CUC-11 | — | LOOKUP đường chung · **ROW riêng** ≠ Sổ TS / hang-muc / `traffic-counts` | form |
| GAP-RPT-SRC-CSDL-01 | flat / thiếu typed TNGT | Typed C.1/C.2/BS = report source `rpt-tngt` READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet TNGT / điểm đen — OUT pack Dev/XLS | toolbar |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS · **cấm** CRUD trên `rpt-tngt` · **cấm** bind 16 hạng xe vào resource này.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-05` | Title VN «Sổ 05 — TNGT + điểm đen» · back hub · **cấm** slug trên card · **cấm** «(+ đếm xe)» |
| List A | Header | title VN · back hub · meta resource=`accident-summaries` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · year · periodType · tableKind · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (bookNo · contractor · road · Km · year/period · tableKind · fatalities · injuries · accidentCount) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Tables | Z2 tabs / sections | **3 grid:** C.1 · C.2 · Điểm đen · add-row per grid · **cấm** chỉ Col1–3 |
| Map | deep-link only | **cấm** canvas trên list pack |
| Peer | deep-link `rpt-tngt` / so-04 | **cấm** gộp form đếm xe |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · sổ · đường · vị trí |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | sổ status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| year | Năm | `Integer` / `Dropdown` | — | QS `year` |
| periodType | Loại kỳ | `Dropdown` | LOOKUP_STATIC | `month` · `half` · `year` |
| tableKind | Bảng | `Dropdown` | LOOKUP_STATIC | `c1` · `c2` · `blackspot` · (all) |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bookNo | Số quyển / sổ | `Text` | * | T-SO-05 header |
| contractor | Nhà thầu | `Text` → đề xuất `SearchInput` | * | org-unit P2 · **GAP-CSDL-ORG-01** |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Lý trình từ | `Number` | * | decimal Km |
| kmTo | Lý trình đến | `Number` | | |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| year | Năm | `Integer` | * | kỳ năm |
| periodType | Loại kỳ | `Dropdown` | * | month / half / year |
| periodValue | Kỳ | `Dropdown` / `Integer` | * | tháng 1–12 · nửa năm 1–2 · hoặc = year — **Q-PERIOD** |
| status | Tình trạng | `Dropdown` | | |
| notes | Ghi chú sổ | `Textarea` | | |
| tableKind | Bảng đang nhập | `Dropdown` / tabs | * | UI switch C.1 / C.2 / điểm đen |

## Control hint — C.1 tháng (Z2 grid · add-row)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| c1RoadName | Đường / đoạn | `Text` / SearchInput | * | T-SO-05 C.1 |
| c1Location | Vị trí / Km | `Text` | * | |
| c1AccidentCount | Số vụ | `Number` integer ≥0 | * | |
| c1CauseRoad | Nguyên nhân đường | `Number` / `Text` | | **Q-CAUSE** số vs mô tả |
| c1CausePerson | Nguyên nhân người | `Number` / `Text` | | |
| c1CauseVehicle | Nguyên nhân PT | `Number` / `Text` | | |
| c1Fatalities | Chết | `Number` integer ≥0 | * | |
| c1Injuries | Thương | `Number` integer ≥0 | * | |
| c1DamageInfra | Thiệt hại cầu-đường | `Number` / `Text` | | |
| c1DamageVehicle | Thiệt hại PT | `Number` / `Text` | | |
| c1Remarks | Nhận xét | `Textarea` | | |

## Control hint — C.2 6 tháng / năm (Z2 grid)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| c2RoadName | Đường / đoạn | `Text` / SearchInput | * | kỳ theo header periodType half/year |
| c2AccidentCount | Số vụ | `Number` integer ≥0 | * | |
| c2Fatalities | Chết | `Number` integer ≥0 | * | |
| c2Injuries | Thương | `Number` integer ≥0 | * | |
| c2DamageInfra | Thiệt hại cầu-đường | `Number` / `Text` | | |
| c2DamageVehicle | Thiệt hại PT | `Number` / `Text` | | |
| c2Remarks | Nhận xét | `Textarea` | | |

## Control hint — Điểm đen / tiềm ẩn (Z2 grid)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| bsLocation | Vị trí điểm đen | `Text` | * | |
| bsKmFrom | Km từ | `Number` | * | |
| bsKmTo | Km đến | `Number` | | |
| bsAccident12m | Số vụ 12 tháng | `Number` integer ≥0 | * | |
| bsFatalities12m | Chết 12 tháng | `Number` integer ≥0 | * | |
| bsInjuries12m | Thương 12 tháng | `Number` integer ≥0 | * | |
| bsAssessment | Đánh giá | `Dropdown` / `Text` | * | **Q-BS-ASSESS** |
| bsStateFoundation | Hiện trạng nền | `Textarea` | | |
| bsStateGeometry | Hiện trạng hình học | `Textarea` | | |
| bsStateAtgt | Hiện trạng ATGT | `Textarea` | | |
| bsPreliminaryAction | Xử lý sơ bộ | `Textarea` | | |
| bsMeasures | Biện pháp | `Textarea` | * | |
| bsFollowUp | Theo dõi | `Textarea` | | |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road · year · periodType · tableKind · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop · filter-bar-layout-hard.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-PERIOD | Mapping periodType/periodValue vs Excel (tháng · 6 tháng · năm) |
| Q-CAUSE | Nguyên nhân C.1: 3 cột số vụ theo nhóm vs free text |
| Q-DAMAGE | Thiệt hại: số tiền / mô tả / cả hai |
| Q-BS-ASSESS | Enum đánh giá điểm đen / tiềm ẩn (cite Word góp ý) |
| Q-GRID-MODEL | 1 book header + 3 entry collections vs 3 resource subtypes — SA |
| Q-SPLIT | Timing hub card so-05 vs drop «(+ TNGT)» trên so-04 |
| Q-PROV | Province static vs master |
| Q-ORG | contractor Text P1 vs org-unit SearchInput |
| Q-STATUS | Status enum sổ TNGT |
| Q-RPT | Drill `rpt-tngt` từ typed rows — READY khi? |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
