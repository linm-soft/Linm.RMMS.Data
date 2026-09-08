# Data-analy — controlHint — csdl-so-10 (Kind B list + Kind F map · Sổ 10 Bình đồ duỗi thẳng)

| Field | Value |
|-------|-------|
| feature | `csdl-so-10` |
| packKind | `map` |
| mode | `feature_context` (new_page · CTX + cluster analy + hub demo · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| versionGate | `ok` (first fill stubs · CTX+demo hash recorded · autoApprove queue) |
| contentHash | `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` |
| headerFingerprint | `sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad` |
| analyzedAt | `2026-09-06T00:25:00.000Z` |
| cluster | `csdl-cuc-2026` · T-SO-10 · **NEW** · bình đồ duỗi thẳng · Kind F |
| taskId | `task_7770663d` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-10-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=route-strip-maps` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-10` · hub deep-link `/so-ts/csdl-so-sach?resource=route-strip-maps` |
| resource | `route-strip-maps` (**MISSING** live · register catalog) |
| formNo | `10` · title VN **Bình đồ duỗi thẳng tuyến** |
| IdCode | `SO-` |
| peerSoTs | — (≠ Sổ TS `so-ts-*` · deep-link hub only · LOOKUP `road-route`) |
| runMode | `new_page` · typed book header + strip `entries[]` + **map canvas** · **cấm** chỉ 3 ô `detail*` / `col1–3` flat |
| MapGateSlash | `/agent-dev-oms-map` · R1–R11 (+ R4b/R4c/R4e/R5b/R7b/R7c · R-UX · R-LEAVE) |
| filterBar | inline § Filter-bar · **không** enqueue `/filter-bar-context` (cùng pattern Sổ 01–09) |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + Kind F chrome. SA **chốt** typed DTO + geometry + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> Media: ảnh bình đồ = **fallback** khi GIS chưa READY (Q-SO10) · **không** thay map P1 nếu GIS READY.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-10.md` | `f283e9fe67e048bfe3022bd1338bf83e6b06b678b220c5ad82d01139d81121ce` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | Kind G hub · polymorphic shell |
| Parent epic | `docs/context/features/csdl-cuc-2026.md` | Sổ 10 = map · packKind map |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | T-SO-10 · GAP-CSDL-CUC-05/10 · Q-SO10 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | `fae059f8cadad4523a0945af7d53d6ddf81373070582e1ecdaf5650dfff610f3` · UI chrome |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · **chưa** có `csdl-so-10` row · **cấm** Domains/Master |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` shell · resource **chưa** seed |
| Live MFE | hub `CsdlSoSachPage` · `CsdlFormSlideout` | **không** có key `route-strip-maps` — **GAP-SO10-RES-01** |
| OMS skill | `/agent-dev-oms-map` | R1–R11 · OSRM · Fit · line levels · LeaveConfirmModal |

Normalized header:

`code|bookNo|contractor|roadCode|roadName|kmFrom|kmTo|periodStart|periodEnd|status|province|manageUnit|notes|stripImageUrl|geometry|geomType|srid|entries.lineNo|entries.kmFrom|entries.kmTo|entries.baseWidthM|entries.surfaceWidthM|entries.medianWidthM|entries.thicknessM|entries.gradePct|entries.alignType|entries.structureType|entries.structureName|entries.atgtLeft|entries.atgtRight|entries.junction|entries.ditchLeft|entries.ditchRight|entries.wallLeft|entries.wallRight|entries.scdkDa|entries.surfaceStatus|entries.notes`

## § Delta Current vs New (`new_page` · `task_7770663d`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO10-RES-01 | Catalog **MISSING** `route-strip-maps` (GAP-CSDL-CUC-05) | Seed resource + card hub · formNo=`10` · title VN | hub / catalog |
| GAP-SO10-TYPED-01 | Không page · generic Col1–3 nếu bootstrap | Typed header T-SO-10 (thầu · Km · kỳ) + strip entries theo Km | form + list |
| GAP-SO10-MAP-01 | Không canvas | Kind F map strip · OMS R1–R11 · OSRM centerline · Fit · line levels | map |
| GAP-SO10-ROUTE-01 | Không route | Alias mfeStd `/csdl-so-10` · hub `?resource=route-strip-maps` | shell / Design |
| GAP-SO10-DM-01 | DOMAIN-MAP thiếu `csdl-so-10` | SA thêm slug → Asset domain | DOMAIN-MAP |
| GAP-SO10-FALLBACK-01 | Q-SO10 | Map P1 nếu GIS READY; không thì File upload ảnh bình đồ | form / map |
| GAP-CSDL-ROAD-01 | — | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | contractor / manageUnit Text | SearchInput `org-unit` / `partner-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột Word | Đóng gap Sổ 10 khi typed + map PASS | form + map |
| GAP-CSDL-CUC-05 | Sổ 10 chưa có resource | Đóng khi seed `route-strip-maps` | catalog |
| GAP-CSDL-CUC-10 | Sổ 10 = map strip | packKind **map** · Dev `/agent-dev-oms-map` | map |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet bình đồ — OUT pack Dev/XLS | toolbar |
| GAP-DA-MAP-01 | (n/a stub) | §D real-data OMS engine + tools + load/save geo | real-data |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · Kind B list A–D · IdCode `SO-yyyyMMdd-nnnn` · **cấm ERP.*** · **cấm** Guid IdCode · **cấm** merge Sổ TS · **cấm** invent `api/v1/infra/*` · **cấm** ERP.WebService / Domains/Master.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-10` | Title VN «Sổ 10 — Bình đồ duỗi thẳng tuyến» · back hub · **cấm** slug trên card |
| List A | Header | title VN · back hub · meta resource=`route-strip-maps` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (bookNo · contractor · road · Km · period · status) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout / dock Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · footer Lưu/Hủy |
| Entries | `pattern_inline_grid` | add/remove · strip theo Km (T-SO-10) · **cấm** chỉ Col1–3 |
| Map | Kind **F** host | `map-host` → `map-bar` · dock default · Fit · OSRM · line levels · **cấm** isolate legend trên MFE · **cấm** OSM.org/Esri CDN chip trên MFE |
| Fallback media | File upload | Ảnh bình đồ khi GIS chưa READY (Q-SO10) · MinIO qua `/integrate-file-upload-web` |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · sổ · đường · thầu |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | sổ status — PO |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` · kỳ sổ |
| toDate | Đến ngày | `Date` | — | QS `toDate` |

## Control hint — form header (Slideout / dock Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bookNo | Số quyển / sổ | `Text` | * | T-SO-10 header |
| contractor | Nhà thầu | `Text` → đề xuất `SearchInput` | * | partner-unit P2 · **GAP-CSDL-ORG-01** |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName · tuyến strip |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Lý trình từ | `Number` | * | decimal Km · bbox strip |
| kmTo | Lý trình đến | `Number` | * | |
| periodStart | Ngày bắt đầu kỳ | `Date` | * | kỳ sổ |
| periodEnd | Ngày kết thúc kỳ | `Date` | | |
| province | Tỉnh | `Dropdown` | * | LOOKUP_STATIC |
| manageUnit | ĐV QL | `Text` → org-unit P2 | | **GAP-CSDL-ORG-01** |
| status | Tình trạng | `Dropdown` | | |
| stripImageUrl | Ảnh bình đồ | `File` | fallback | Q-SO10 khi map chưa READY |
| geometry | Geometry | `Map` / GeoJSON | * (nếu map) | LineString/MultiLineString corridor |
| geomType | Loại geom | `Text` ro | auto | từ draw |
| srid | SRID | `Number` ro | auto | 4326 default |
| notes | Ghi chú sổ | `Textarea` | | |

## Control hint — entries[] (inline grid · T-SO-10 · strip theo Km)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lineNo | STT | `Integer` ro | auto | |
| kmFrom | Km từ | `Number` | * | đoạn strip |
| kmTo | Km đến | `Number` | * | |
| baseWidthM | B nền (m) | `Number` | | Bnền |
| surfaceWidthM | B mặt (m) | `Number` | | Bmặt |
| medianWidthM | KCMĐ (m) | `Number` | | dải phân cách |
| thicknessM | Dày (m) | `Number` | | dày kết cấu |
| gradePct | Dốc dọc (%) | `Number` | | |
| alignType | Thẳng / cong | `Dropdown` | | thẳng\|cong — PO |
| structureType | CT cầu/hầm/cống | `Dropdown` | | none\|cau\|ham\|cong |
| structureName | Tên CT | `Text` | | khi có CT |
| atgtLeft | ATGT trái | `Text` | | |
| atgtRight | ATGT phải | `Text` | | |
| junction | Nút giao | `Text` | | |
| ditchLeft | Rãnh trái | `Text` | | |
| ditchRight | Rãnh phải | `Text` | | |
| wallLeft | Tường trái | `Text` | | |
| wallRight | Tường phải | `Text` | | |
| scdkDa | SCĐK / DA | `Text` | | sự cố / dự án |
| surfaceStatus | TT mặt | `Dropdown` / `Text` | | tot/tb/kem — PO |
| notes | Ghi chú đoạn | `Textarea` | | |

## Map OMS factors (handoff Dev · `/agent-dev-oms-map`)

| # | Rule | Expect |
|---|------|--------|
| R1 | Live Leaflet | **cấm** screenshot / gradient map |
| R2 | Basemap MFE | clip TileUrl · **cấm** OSM.org/Esri/Google chip |
| R3 | Titles | OSM/Esri/Fit / toolbar có `title` + `aria-label` |
| R4–R4e | Layout | full/dock · host→bar · **cấm** 3D placeholder |
| R5/R5b | Zoom | no white-box · sat maxNativeZoom 17 |
| R6 | Icons | QCVN `mapAssetIcons` nếu pin CT |
| R7/R7b/R7c | Lines | corridor underlay + track pane · isolate · MFE click = popup only |
| R8/R9 | OSRM | routeAlongStreets · snap centerline · **cấm** raw cắt địa hình |
| R10 | z-index | overlay ≥ 5000 |
| R11 | Fit | load `fitVnClipMap` / Fit tài sản · **cấm** street-level default |
| R-LEAVE | Dirty | `LeaveConfirmModal` · **0** `window.alert` |

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road SearchInput · fromDate · toDate · actions (Tạo mới · Refresh…) · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-SO10 | Map strip P1 vs upload ảnh bình đồ khi GIS chưa READY — chốt P1 path |
| Q-ALIGN | alignType enum thẳng/cong đủ? thêm soft/hard curve? |
| Q-STRUCT | structureType catalog cố định hay Text free? |
| Q-SURF | surfaceStatus = tot/tb/kem hay catalog mặt đường master? |
| Q-PROV | Province static vs master |
| Q-ORG | contractor / manageUnit Text P1 vs partner/org SearchInput |
| Q-GEOM | geometry lưu trên shell jsonb vs typed PostGIS table — SA |

## DoR data_analy

- [x] control-hint `done` + version meta
- [x] real-data pair (§A+§B+§D map)
- [x] contentHash / headerFingerprint
- [x] handoff compact
- [x] **cấm** yarn build/e2e ở role này
