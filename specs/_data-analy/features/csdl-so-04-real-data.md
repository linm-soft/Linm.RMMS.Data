# Real-data bind — csdl-so-04 (Kind B list + Kind D Slideout · traffic-counts)

| | |
|---|---|
| feature | `csdl-so-04` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_85934368` |
| resource | `traffic-counts` |
| formNo | `04` · Cục **Tổng hợp đếm xe** · live title còn «(+ TNGT)» đến split so-05 |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master · **cấm** runtime `/api/v1/traffic-counts` (doc legacy §3.2) |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-04` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-counts` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprint | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| sourceTables | shell `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo04` (**SA/migration**) · **không** AccidenSummary trên resource này |
| catalogKind UI schema | `traffic-counts` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `SO` |
| peerLookup | `COUNT_STATION` / `so-ts-count-station` · `road-route` · report leaf `rpt-dem-xe` (read-only) |

## § Delta Current vs New (`new_page` · `task_85934368`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Resource | `traffic-counts` title «đếm xe (+ TNGT)» | Giữ key · title chỉ đếm xe · TNGT → `csdl-so-05` |
| Form | 3 ô `detail*` + entries Col1–3 | Typed T-SO-04 header + 16 class + totalCars |
| List cols | generic road/km/detail | bookNo · contractor · station · road · Km · year/quarter · method · totalCars |
| API | `…/csdl-records?resource=traffic-counts` | **giữ prefix** · widen typed — SA |
| Doc legacy | `/api/v1/traffic-counts` · accident-summaries | **cấm** runtime path cũ · AccidentSummary **không** bind so-04 |
| Import | stub | Sheet đếm xe — OUT XLS |
| Report | `rpt-dem-xe` / Report domain query | Drill source = typed so-04 · **cấm** CRUD trên report |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-04.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-04 · GAP-CSDL-CUC-07 | — | typed SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=traffic-counts&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast · unique station+year+quarter — **Q-UNIQUE** |
| `entity` | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Sổ 04 (**SA**) | — | Schema_CsdlSo04 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` · store `traffic-counts` | generic + TNGT title | typed replace / alias page · drop TNGT label |
| `catalog` | Integration ui-schema `traffic-counts` | bootstrap cols | toast |
| `lookup` | count-station · road-route · org-unit P2 | — | free-text khi đã chốt SearchInput |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` · optional `totalCars` sum | — | BE generate |
| `report` | `rpt-dem-xe` · Report `traffic-counts` query | — | **cấm** write từ report |

`sourceCite` = path/controller **có trong repo** hoặc analy cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `traffic-counts` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| stationCode | Trạm | SearchInput | count-station | `?stationCode=` / detail | `stationCode` (+ `stationName`) | yes · **GAP-SO04-STATION-01** |
| year | Năm | Integer/Dropdown | — | `?year=` | `year` | yes |
| quarter | Quý | Dropdown | LOOKUP_STATIC | `?quarter=` | `quarter` | yes |
| countMethod | Phương pháp | Dropdown | LOOKUP_STATIC | `?countMethod=` / detail | `countMethod` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| bookNo | Số quyển | Text | — | detail / list | `bookNo` | yes |
| contractor | Nhà thầu | Text | — | detail / list | `contractor` | yes · **GAP-CSDL-ORG-01** |
| kmFrom | Lý trình từ | Number | — | detail / list | `kmFrom` | yes |
| kmTo | Lý trình đến | Number | — | detail / list | `kmTo` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| class01…class16 | Hạng xe 01–16 | Number | — | detail | `class01`…`class16` | yes · **Q-CLASS-LABEL** |
| totalCars | Tổng ôtô | Number | — | detail / list | `totalCars` | yes · **Q-TOTAL** |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=traffic-counts` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=traffic-counts` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE. **Cấm** gọi Report `api/v1/report/traffic-counts` từ form CRUD.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status / quarter / countMethod | FE enums | PO chốt | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| count-station | peer Asset `COUNT_STATION` / integration search | `so-ts-count-station` LOOKUP · **GAP-CSDL-CUC-11** ROW riêng | merge PK RoadAsset vào sổ |
| org-unit (P2) | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| catalog ui-schema | Integration `traffic-counts` | `LinCatalogUiSchemaEditorModal` | invent schema path |

## §D — Map / vẽ

`none` trên pack list. Deep-link GIS bbox optional (T-GIS-01) · **cấm** canvas.

## §E — Empty / error / i18n

| Case | UX |
|------|-----|
| List empty | Grid copy VN «Chưa có dữ liệu tổng hợp đếm xe» |
| 422 thiếu resource | toast · không crash |
| 404 detail | đóng slideout · toast |
| Duplicate station+year+quarter | toast · **Q-UNIQUE** |
| Leave dirty | LeaveConfirmModal |
| TNGT fields trên form | **cấm** — chuyển `csdl-so-05` |

## §F — Cấm

- ERP.* / Domains/Master / invent `api/v1/infra/*` / runtime `api/v1/traffic-counts` / `api/v1/so-ts/csdl-records`
- Demo/localStorage làm SSOT runtime
- Chỉ 3 ô `detail*` hoặc flat `col1–3` làm DoD form
- Gộp AccidentSummary / điểm đen / TNGT vào resource này
- Guid IdCode · invent map canvas · yarn build/e2e ở data_analy
- Merge form với Sổ TS `so-ts-count-station` / hang-muc
- CRUD trên `rpt-dem-xe` / Report domain từ pack list này

## DoR real-data

- [x] §A–§F filled · status `done`
- [x] bind khớp control-hint headerFingerprint
- [x] API prefix live Asset cite
