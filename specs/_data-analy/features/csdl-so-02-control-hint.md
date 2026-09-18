# Data-analy — controlHint — csdl-so-02 (Kind B list + Kind D Slideout · Sổ 02 tuần đường)

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| packKind | `list` |
| mode | `feature_context` (edit_page · CR PDF SRC-NKTD-PDF · **giữ** pack new_page) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (CR append · CTX+extract+review hash · **cấm** wipe new_page) |
| contentHash | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprint | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| analyzedAt | `2026-09-18T03:29:00.290Z` |
| cluster | `csdl-cuc-2026` · T-SO-02 · TT 41 PL VIII · Mẫu **2** |
| taskId | `task_2a2fd5c4` |
| cr | `nktd-pdf-20260917` · cite `SRC-NKTD-PDF` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-so-02-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=patrol-logs` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** invent `api/v1/patrol-logs` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` · hub deep-link `/so-ts/csdl-so-sach?resource=patrol-logs` |
| resource | `patrol-logs` |
| formNo | `02` · title VN **Nhật ký tuần đường** |
| IdCode | `SO-` |
| peerSoTs | — (≠ Sổ TS `so-ts-*` · deep-link hub only) |
| runMode | `edit_page` · live typed book + entries · Wave A form **trước** report |
| migrationHint | `Schema_CsdlSo02LocationText` CLI pair **nếu** cột DB mới · Step 4b Dev |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> Live: `CsdlSo02Page` · `CsdlSo02FormSlideout` · **cấm** re-scan demo HTML.  
> Sketch/media = FileRef text-id debt **GAP-SO02-FILE-01** · **cấm** invent file API.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-so-02.md` | CTX · CR note SRC-NKTD-PDF |
| Extract CR | `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` | **SRC-NKTD-PDF** · bìa+cột TT 41 |
| Review CR | `specs/_cr/nktd-pdf-20260917/review.md` | GAP-NKTD-LOC-01 · FILE-01 |
| TL pack CR | `specs/_cr/nktd-pdf-20260917/task-csdl-so-02.md` | T-CTX-CR-01 · LocationText |
| Prior analy | `specs/_data-analy/features/csdl-so-02-control-hint.md` (new_page) | **giữ** · không wipe |
| Live MFE | `CsdlSo02Page` · `CsdlSo02FormSlideout` | locationKm number * · weatherEvent Input 1 dòng · **không** locationText |
| Live BE | `Schema_CsdlSo02` · `CsdlBookEntry` | LocationKm · WeatherEvent · **thiếu** LocationText |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · **cấm** Domains/Master |
| Live API | `api/v1/asset/csdl-records?resource=patrol-logs` | **giữ** prefix |

Normalized header:

`code|bookNo|contractor|roadCode|roadName|kmFrom|kmTo|patrolStaff|periodStart|periodEnd|status|province|manageUnit|notes|entries.lineNo|entries.eventAt|entries.locationKm|entries.locationText|entries.weatherEvent|entries.onSiteAction|entries.remarkSign|entries.note|entries.sketchRef|entries.mediaIds`

## § Delta Current vs New (`new_page` · `task_1c1e0895`) — **giữ**

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-SO02-TYPED-01 | Hub `patrol-logs` + form 3 ô `detail*` + `entries.col1–3` | Typed header T-SO-02 + entry fields (giờ·Km·thời tiết·XL·ký·ghi chú·sketch) | form + list |
| GAP-SO02-ROUTE-01 | Chỉ deep-link hub `?resource=patrol-logs` | Alias mfeStd `/csdl-so-02` · giữ hub entry | shell / Design |
| GAP-SO02-FORMNO-01 | Live label **Sổ 1** · key `patrol-logs` | Cục **Sổ 02** formNo=`02` · giữ resource key | hub card / docs |
| GAP-SO02-SKETCH-01 | Không sketch / media typed | `sketchRef` + `mediaIds[]` via FileService | form · T-FILE-01 |
| GAP-CSDL-ROAD-01 | `roadName` Text free | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` / contractor Text | SearchInput `org-unit` / `partner-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Sổ 02 khi typed PASS | form |
| GAP-RPT-SRC-CSDL-01 | flat Col1–3 | Typed entries = report source READY sau form | form / report |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet sổ tuần đường — OUT pack Dev/XLS | toolbar |

## § Delta Current vs New (`edit_page` · CR PDF `SRC-NKTD-PDF` · `task_2a2fd5c4`)

| ID | Current (live done) | New (CR Wave A) | Surface |
|----|---------------------|-----------------|---------|
| **GAP-NKTD-LOC-01** | `entries.locationKm` Number * only · **không** `locationText` | Thêm `entries.locationText` controlHint=`Text` (Vị trí / SC-VP). Required: `eventAt` + (`locationKm` **OR** `locationText`) + `weatherEvent`. BE: `LocationText` nvarchar · migration **`Schema_CsdlSo02LocationText`** CLI pair nếu cột mới | form entry · list col · DTO |
| GAP-NKTD-WEATHER-01 | `weatherEvent` = `Input` 1 dòng | Đề xuất **`Textarea`** (T-SO-02 · PDF «Thời tiết, diễn biến») | form entry |
| **GAP-SO02-FILE-01** | sketchRef / mediaIds = ô text id | Giữ text-id + toast nếu FileService chưa READY · **cấm** invent file API / fake picker | form · debt |
| GAP-NKTD-HDR-01 | Header bìa live OK vs PDF | **Giữ** bookNo·contractor·road·kmFrom/To·patrolStaff·period · label bìa PDF | form header |
| GAP-NKTD-STATUS-01 | `status` tot/tb/kem/hong trên form/filter | **Không** cột sổ giấy · **giữ** filter list · **cấm** bắt như cột giấy | filter · OUT print |
| GAP-NKTD-RPT-PARK | Report Kind E | **OUT Wave A** · **cấm** enqueue `rpt-nhat-ky-tuan-duong` đến Review A PASS | report |

**Không đổi:** API `api/v1/asset/csdl-records?resource=patrol-logs` · IdCode `SO-` · Kind B list · Kind D Slideout · route_a `/csdl-so-02` · **cấm ERP.*** · **cấm** invent `api/v1/patrol-logs` · **cấm** overwrite `task/csdl-so-02.md` (new_page).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-so-02` | Title VN «Sổ 02 — Nhật ký tuần đường» · back hub |
| List A | Header | title VN · back hub · meta resource=`patrol-logs` |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · from/to Date · Tạo mới · Refresh · Delete · History · SchemaConfig · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed + **cột vị trí text** nếu có `locationText` · STT · row menu |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 | C/E/V/Copy · View=`readOnly` · leave-confirm · footer Lưu/Hủy · `data-form-cols="2"` |
| Entries | `pattern_inline_grid` | add/remove · typed · **locationKm + locationText** cạnh nhau · weatherEvent Textarea |
| Sketch/media | text-id / FileRef khi READY | **GAP-SO02-FILE-01** · **cấm** invent path |
| Map | deep-link only | **cấm** canvas trên list pack |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · sổ · đường · NV |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | giữ filter · **không** in PDF |
| roadCode | Tên đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | `Date` | — | QS `fromDate` · period |
| toDate | Đến ngày | `Date` | — | QS `toDate` |

## Control hint — form header (Slideout Z2)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã | `Text` readonly | auto | `SO-yyyyMMdd-nnnn` |
| bookNo | Số quyển / sổ | `Text` | * | PDF bìa · T-SO-02 |
| contractor | Nhà thầu | `Text` | * | PDF · partner-unit P2 DEFER |
| roadCode | Mã đường | `SearchInput` | * | road-route · bind roadName |
| roadName | Tên đường | `Text` ro / display | * | từ SearchInput |
| kmFrom | Lý trình từ | `Number` | * | PDF Từ Km |
| kmTo | Lý trình đến | `Number` | | PDF đến Km |
| patrolStaff | NV tuần đường | `Text` | * | PDF |
| periodStart | Ngày bắt đầu | `Date` | * | kỳ sổ |
| periodEnd | Ngày kết thúc | `Date` | | |
| province | Tỉnh | `Dropdown` | * | thừa vs bìa · giữ P1 |
| manageUnit | ĐV QL | `Text` | | **GAP-CSDL-ORG-01** |
| status | Tình trạng | `Dropdown` | | **không** cột giấy |
| notes | Ghi chú sổ | `Textarea` | | |

## Control hint — entries[] (inline grid)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lineNo | STT | `Integer` ro | auto | |
| eventAt | Giờ / ngày kiểm tra | `DateTime` | * | PDF cột 1 |
| locationKm | Lý trình (Km) | `Number` | soft | optional nếu có `locationText` |
| **locationText** | **Vị trí / SC-VP** | **`Text`** | soft | **GAP-NKTD-LOC-01** · PDF chữ · optional nếu có Km · **OR** rule với locationKm |
| weatherEvent | Thời tiết + diễn biến | **`Textarea`** | * | live Input → Textarea |
| onSiteAction | Xử lý tại chỗ | `Textarea` | | |
| remarkSign | Nhận xét + ký | `Text` | | |
| note | Ghi chú dòng | `Text` | | |
| sketchRef | Sketch | `FileRef` / Text id | | **GAP-SO02-FILE-01** debt |
| mediaIds | Ảnh / video | `FileMulti` / Text id | | cùng nợ |

**Entry required rule (HARD):** `eventAt` + (`locationKm` has value **OR** `locationText` not empty) + `weatherEvent`.

## Filter-bar layout (HARD)

1 row: SearchText · province · status · road SearchInput · fromDate · toDate · actions · **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop · Dev Write `csdl-so-02-filter-bar.md` từ live nếu thiếu.

## Open questions (PO)

| Q | Topic |
|---|-------|
| Q-LOC-REQ | PO confirm OR-rule Km\|Text (analy đề xuất) vs cả hai optional khi View |
| Q-WEATHER | Textarea rows mặc định (2–3) · max length |
| Q-FILE | FileRef READY timing vs giữ text-id P1 (**GAP-SO02-FILE-01**) |
| Q-LIST-COL | List grid luôn hiện cột vị trí text hay chỉ khi có data |

## DoR data_analy

- [x] control-hint `done` + version meta · `changeScope=edit_page`
- [x] real-data pair
- [x] contentHash **đổi** · headerFingerprint có `locationText`
- [x] § Delta CR PDF · cite SRC-NKTD-PDF · GAP-NKTD-LOC-01
- [x] handoff compact
- [x] **cấm** yarn build/e2e · **cấm** re-scan demo · **cấm** start PO
