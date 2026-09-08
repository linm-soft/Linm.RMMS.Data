# Data-analy — controlHint — csdl-so-03 (Kind B list + Kind D Slideout · Sổ 03 trực BĐGT+chốt+SC)

| Field | Value |
|-------|-------|
| feature | `csdl-so-03` |
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
| contentHash | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprint | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| analyzedAt | `2026-09-05T19:23:00.000Z` |
| cluster | `csdl-cuc-2026` · T-SO-03 · TT 41 PL VIII · Mẫu **3** |
| taskId | `task_bbeb376c` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-03-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=duty-incident-logs` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-03` · hub deep-link `/so-ts/csdl-so-sach?resource=duty-incident-logs` |
| resource | `duty-incident-logs` |
| formNo | `03` · title VN **Trực BĐGT + chốt + sự cố** · live còn **Sổ 2** (`duty-logs`) + **Sổ 3** (`checkpoint-duties`) đến merge/T-REN-01 |
| IdCode | `SO-` |
| peerSoTs | — (≠ Sổ TS `so-ts-*` · deep-link hub only) |
| runMode | `new_page` · typed book header + `entries[]` · **cấm** chỉ 3 ô `detail*` / `col1–3` flat · **merge** 2 resource cũ |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration + retire `duty-logs` / `checkpoint-duties`.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-03.md` | `115f989f064b0c128c68b744648b91fd7710ff5736e0840755f3f093becb0d12` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-03 · Q-SO3 · GAP-CSDL-CUC-06 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` · **cấm** Domains/Master |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` shell |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` · store keys `duty-logs` + `checkpoint-duties` | generic book `col1–3` — **GAP-SO03-TYPED-01** · **GAP-SO03-MERGE-01** |

Normalized header:

`code|bookNo|contractor|roadCode|roadName|kmFrom|kmTo|periodStart|periodEnd|status|province|notes|entries.lineNo|entries.dutyDate|entries.shift|entries.personName|entries.content|entries.handling|entries.signRemark`

## § Delta Current vs New (`new_page` · `task_bbeb376c`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO03-MERGE-01 | Live tách `duty-logs` (Sổ 2) + `checkpoint-duties` (Sổ 3) | 1 resource `duty-incident-logs` · Cục **1 mẫu** · **xoá** 2 key cũ (Q-SO3 · GAP-CSDL-CUC-06) | hub card / catalog / SA |
| GAP-SO03-TYPED-01 | Hub form 3 ô `detail*` + `entries.col1–3` | Typed header T-SO-03 (nhà thầu · Km · kỳ) + entry (ngày · ca · tên · nội dung · XL · ký) | form + list |
| GAP-SO03-ROUTE-01 | Chỉ deep-link hub `?resource=duty-logs` / `checkpoint-duties` | Alias mfeStd `/csdl-so-03` · hub `?resource=duty-incident-logs` | shell / Design |
| GAP-SO03-FORMNO-01 | Live label Sổ 2 + Sổ 3 | Cục **Sổ 03** formNo=`03` · 1 card · giữ key mới | hub / T-REN-01 |
| GAP-CSDL-ROAD-01 | `roadName` Text free | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `contractor` Text | SearchInput `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Sổ 03 khi typed PASS | form |
| GAP-CSDL-CUC-06 | 2 resource live ≠ 1 mẫu Cục | Merge PASS = đóng gap | hub / BE |
| GAP-RPT-SRC-CSDL-01 | flat Col1–3 | Typed entries = report source READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet sổ trực — OUT pack Dev/XLS | toolbar |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-03` | Title VN «Sổ 03 — Trực BĐGT + chốt + sự cố» · back hub · **cấm** slug trên card · **1** card (không 2 card cũ) |
| List A | Header | title VN · back hub · meta resource=`duty-incident-logs` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (bookNo · contractor · road · Km · period) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Entries | `pattern_inline_grid` | add/remove · typed cols · **cấm** chỉ Col1–3 |
| Map | deep-link only | **cấm** canvas trên list pack |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · sổ · đường · người trực · nội dung |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | sổ status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` · period / dutyDate |
| toDate | Đến ngày | `Date` | — | QS `toDate` |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bookNo | Số quyển / sổ | `Text` | * | T-SO-03 header |
| contractor | Nhà thầu | `Text` → đề xuất `SearchInput` | * | org-unit P2 · **GAP-CSDL-ORG-01** |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Lý trình từ | `Number` | * | decimal Km |
| kmTo | Lý trình đến | `Number` | | |
| periodStart | Kỳ từ | `Date` | * | kỳ sổ |
| periodEnd | Kỳ đến | `Date` | | |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| status | Tình trạng | `Dropdown` | | |
| notes | Ghi chú sổ | `Textarea` | | |

## Control hint — entries[] (inline grid)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lineNo | STT | `Integer` ro | auto | |
| dutyDate | Ngày | `Date` | * | ngày ca trực / ghi nhận |
| shift | Ca | `Text` | * | ca trực (sáng/chiều/đêm hoặc mã ca) |
| personName | Tên | `Text` | * | người trực / nhân viên |
| content | Nội dung | `Textarea` | * | BĐGT · chốt · SC / hotline — gộp 1 cột |
| handling | Xử lý | `Textarea` | | XL tại chỗ / biện pháp |
| signRemark | Ký / nhận xét | `Text` | | ký xác nhận |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road SearchInput · fromDate · toDate · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-MERGE | Migrate data `duty-logs` + `checkpoint-duties` → `duty-incident-logs` · soft-retire timing hub cards |
| Q-DUTYKIND | Cần cột `dutyKind` (BĐGT / chốt / SC) riêng hay gộp trong `content` — analy T-SO-03 không tách |
| Q-FORMNO | Label hub Sổ 2+3 → 1 card Sổ 03 vs T-REN-01 |
| Q-STATUS | Status enum sổ trực |
| Q-PROV | Province static vs master |
| Q-ORG | contractor Text P1 vs org-unit SearchInput |
| Q-SHIFT | Ca = free Text vs LOOKUP_STATIC |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
