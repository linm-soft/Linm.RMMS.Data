# Data-analy — controlHint — csdl-so-07 (Kind B list + Kind D Slideout · Sổ 07 HL + GPTC + Dự án)

| Field | Value |
|-------|-------|
| feature | `csdl-so-07` |
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
| contentHash | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprint | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| analyzedAt | `2026-09-05T21:06:41.298Z` |
| cluster | `csdl-cuc-2026` · T-SO-07 · TT 41 · Mẫu **7** Cục · live hub card «Hành lang ATĐB + GP thi công» formNo **6** |
| taskId | `task_20842c29` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-07-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=row-violations` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** standalone `/api/v1/row-violations` · `/api/v1/construction-permits` runtime |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-07` · hub deep-link `/so-ts/csdl-so-sach?resource=row-violations` |
| resource | `row-violations` |
| formNo | `07` · title VN **HL + GPTC + Dự án** · live formNo `6` đến T-REN-01 |
| IdCode | `SO-` |
| peerSoTs | — (≠ Sổ TS) · peer report `rpt-vi-pham-hlatdb` drill · **cấm** merge 1 form |
| runMode | `new_page` · book header + **2 tab** A VP / B GPTC+DA · **cấm** chỉ 3 ô `detail*` / `col1–3` flat |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> Delta Cục: thêm khối **Dự án / QLDA** trên tab GPTC (T-SO-07).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-07.md` | `9f458b9309157b2421fea6a4ff5550775127a97d659e64479a13221566720cc2` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-07 · GAP-CSDL-CUC-03 |
| API catalog cite | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.6 | RowViolation + ConstructionPermit · **runtime** = csdl-records |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · **GAP-SO07-DMAP-01** thiếu row `csdl-so-07` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` shell |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic book `col1–3` — **GAP-SO07-TYPED-01** |

Normalized header:

`code|contractor|roadCode|roadName|kmFrom|kmTo|manageUnit|province|status|notes|violations.at|violations.stationKm|violations.adminArea|violations.violationStatus|violations.orgName|violations.minutesDepot|violations.minutesCommune|violations.minutesAdmin|violations.currentState|violations.unitConfirm|permits.permitNo|permits.permitDays|permits.issuer|permits.investor|permits.projectMgmtUnit|permits.contractor|permits.workName|permits.stationKm|permits.expiresAt|permits.extendedAt|permits.progress`

## § Delta Current vs New (`new_page` · `task_20842c29`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO07-TYPED-01 | Hub `row-violations` + form 3 ô `detail*` + `entries.col1–3` | Typed book header + **2 tab** A VP / B GPTC+DA (T-SO-07) | form + list |
| GAP-SO07-PROJECT-01 | §3.6 ConstructionPermit **không** QLDA / DA | Thêm `projectMgmtUnit` (QLDA) + khối Dự án trên tab B | form tab B |
| GAP-SO07-ROUTE-01 | Chỉ deep-link hub `?resource=row-violations` | Alias mfeStd `/csdl-so-07` · giữ hub entry | shell / Design |
| GAP-SO07-FORMNO-01 | Live card formNo **6** «Hành lang ATĐB + GP thi công» | Cục **Sổ 07** formNo=`07` · giữ resource key (`GAP-CSDL-CUC-02` / T-REN-01) | hub card / docs |
| GAP-SO07-TABS-01 | 1 grid Col1–3 | Tab A `violations[]` · Tab B `permits[]` · **cấm** flatten 1 bảng | form |
| GAP-SO07-APILEGACY-01 | Doc cũ `/api/v1/row-violations` · `/construction-permits` | Runtime **chỉ** `api/v1/asset/csdl-records?resource=row-violations` | BE / docs |
| GAP-SO07-DMAP-01 | DOMAIN-MAP thiếu `csdl-so-07` | SA thêm row Asset · `asset` (như so-01/02/03/06/08) | DOMAIN-MAP |
| GAP-CSDL-ROAD-01 | `roadName` Text free | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` / nhà thầu Text | SearchInput `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Sổ 07 khi typed PASS | form |
| GAP-RPT-SRC-CSDL-01 | flat Col1–3 | Typed lines = report source (`rpt-vi-pham-hlatdb` drill) READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet sổ HL/GPTC — OUT pack Dev/XLS | toolbar |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `row-violations` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-07` | Title VN «Sổ 07 — HL + GPTC + Dự án» · back hub · **cấm** slug trên card |
| List A | Header | title VN · back hub · meta resource=`row-violations` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (code · road · km · contractor · status · updatedAt) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Tab A | `violations[]` inline grid | VP fields T-SO-07 · add/remove dòng OK |
| Tab B | `permits[]` inline grid | GPTC + **QLDA/DA** · add/remove dòng OK |
| Map | deep-link only | **cấm** canvas trên list pack |
| Peer | report drill | `rpt-vi-pham-hlatdb` · không gộp bảng |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · tổ chức VP · số GP · QLDA |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | sổ / VP status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` |
| toDate | Đến ngày | `Date` | — | QS `toDate` |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| contractor | Nhà thầu / ĐV | `Text` → đề xuất `SearchInput` | * | org-unit P2 · **GAP-CSDL-ORG-01** |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Km từ | `Number` | * | đoạn quản lý |
| kmTo | Km đến | `Number` | * | |
| manageUnit | ĐV QL | `Text` → đề xuất `SearchInput` | * | org-unit P2 |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| status | Tình trạng sổ | `Dropdown` | | |
| notes | Ghi chú | `Textarea` | | |

## Control hint — Tab A · violations[] (VP hành lang)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| at | Ngày | `Date` | * | cite §3.6 `At` |
| stationKm | Lý trình (Km) | `Number` / `Text` | * | `StationKm` |
| adminArea | Địa phận | `Text` | | `AdminArea` |
| violationStatus | TT vi phạm | `Dropdown` | * | `ViolationStatus` — PO enum |
| orgName | Tổ chức VP | `Text` | * | `OrgName` |
| minutesDepot | BB hạt | `Text` | | `MinutesDepot` |
| minutesCommune | BB xã | `Text` | | `MinutesCommune` |
| minutesAdmin | BB VP / CQ | `Text` | | `MinutesAdmin` |
| currentState | Hiện trạng | `Textarea` | | `CurrentState` |
| unitConfirm | Xác nhận ĐV | `Text` | | `UnitConfirm` |

## Control hint — Tab B · permits[] (GPTC + Dự án)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| permitNo | Mã / số GP | `Text` | * | `PermitNo` |
| permitDays | Số ngày GP | `Integer` | | T-SO-07 · bind/derive từ IssuedAt–ExpiresAt OK |
| issuer | ĐV cấp | `Text` | * | `Issuer` |
| investor | Chủ đầu tư | `Text` | * | `Investor` · CĐT |
| projectMgmtUnit | Ban QLDA | `Text` | | **GAP-SO07-PROJECT-01** · khối Dự án |
| contractor | Nhà thầu TC | `Text` | | `Contractor` |
| workName | Tên công trình | `Text` | * | `WorkName` |
| stationKm | Lý trình (Km) | `Number` / `Text` | * | `StationKm` |
| expiresAt | Hạn GP | `Date` | * | `ExpiresAt` |
| extendedAt | Gia hạn | `Date` | | `ExtendedAt` |
| progress | Tình hình TC / DA | `Textarea` | | T-SO-07 «tình hình» |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road SearchInput · fromDate · toDate · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-FORMNO | Label hub formNo 6 → «Sổ 07» timing vs T-REN-01 |
| Q-STATUS | Enum TT VP / status sổ vs catalog tot/tb/kem/hong |
| Q-TABS | 1 slideout 2 tab vs 2 resource tách — **đề xuất** 1 resource + 2 nested arrays |
| Q-PROJECT | `projectMgmtUnit` bắt buộc khi có GP? SearchInput org vs Text P1 |
| Q-PERMITDAYS | Lưu `permitDays` riêng hay derive IssuedAt/ExpiresAt |
| Q-PROV | Province static vs master |
| Q-ORG | contractor/manageUnit Text P1 vs org-unit SearchInput |
| Q-DMAP | SA thêm DOMAIN-MAP `csdl-so-07` ngay wave này? |
| Q-RPT | Drill report `rpt-vi-pham-hlatdb` sau typed — timing |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
