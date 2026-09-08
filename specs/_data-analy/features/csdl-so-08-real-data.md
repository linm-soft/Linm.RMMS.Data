# Real-data bind — csdl-so-08 (Kind B list + Kind D Slideout · maintenance-work-logs)

| | |
|---|---|
| feature | `csdl-so-08` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_aa2658e0` |
| resource | `maintenance-work-logs` |
| formNo | `08` · Cục **Kết quả BDTX** · live hub **Sổ 8** (khớp · không đổi key) |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-08` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=maintenance-work-logs` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| headerFingerprint | `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` |
| sourceTables | shell `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo08` (**SA/migration**) |
| catalogKind UI schema | `maintenance-work-logs` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `SO` |

## § Delta Current vs New (`new_page` · `task_aa2658e0`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` + entries Col1–3 | Typed T-SO-08 header (thầu · VP · Khu · tuyến Km) + entry 5 cột |
| List cols | generic road/km/detail | bookNo · contractor · road · Km · officeUnit · zoneUnit · period |
| API | `…/csdl-records?resource=maintenance-work-logs` | **giữ prefix** · widen typed payload — SA |
| formNo label | Live Sổ 8 | Cục Sổ 08 · key `maintenance-work-logs` giữ |
| File | không | **không** bắt buộc (T-FILE-01 = Sổ 1/2/6) |
| Import | stub | Sheet BDTX — OUT XLS |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-08.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-08 | — | typed SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=maintenance-work-logs&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Sổ 08 (**SA**) | — | Schema_CsdlSo08 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace / alias page |
| `catalog` | Integration ui-schema `maintenance-work-logs` | bootstrap cols | toast |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `maintenance-work-logs` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | Date | — | `?fromDate=` | — | yes |
| toDate | Đến ngày | Date | — | `?toDate=` | — | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| bookNo | Số quyển | Text | — | detail / list | `bookNo` | yes |
| contractor | Nhà thầu | Text | — | detail / list | `contractor` | yes · **GAP-CSDL-ORG-01** |
| officeUnit | Văn phòng (VP) | Text | — | detail / list | `officeUnit` | yes |
| zoneUnit | Khu | Text | — | detail / list | `zoneUnit` | yes |
| kmFrom | Lý trình từ | Number | — | detail / list | `kmFrom` | yes |
| kmTo | Lý trình đến | Number | — | detail / list | `kmTo` | yes |
| periodStart | Ngày BĐ | Date | — | detail | `periodStart` | yes |
| periodEnd | Ngày KT | Date | — | detail | `periodEnd` | yes |
| manageUnit | ĐV QL | Text | — | detail | `manageUnit` | yes |
| notes | Ghi chú sổ | Textarea | — | detail | `notes` | yes |
| entries[].lineNo | STT | Integer | — | nested | `lineNo` | yes |
| entries[].workItem | Việc | Text | — | nested | `workItem` | yes |
| entries[].kmFrom | Km từ | Number | — | nested | `kmFrom` | yes |
| entries[].kmTo | Km đến | Number | — | nested | `kmTo` | yes |
| entries[].solution | Giải pháp | Textarea | — | nested | `solution` | yes |
| entries[].mainResult | Kết quả chính | Textarea | — | nested | `mainResult` | yes |
| entries[].note | Ghi chú | Text | — | nested | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=maintenance-work-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=maintenance-work-logs` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status | FE statuses | PO chốt enum sổ | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit / partner-unit (P2) | `GET /integration/org-units/search` · partner search | shared READY | hardcode ĐV / thầu |
| catalog ui-schema | Integration `maintenance-work-logs` | `LinCatalogUiSchemaEditorModal` | invent schema path |

## §D — Map / vẽ

`none` trên pack list. Deep-link GIS bbox optional (T-GIS-01) · **cấm** canvas.

## §E — Empty / error / i18n

| Case | UX |
|------|-----|
| Empty list | grid empty VN «Chưa có dữ liệu» · CTA Tạo mới |
| 422 validation | toast field · giữ slideout mở |
| 404 detail | đóng slideout · toast |
| Network | toast lỗi · Retry trên list |
| Labels | VN only trên UI · **cấm** slug trên card |

## DoR real-data

- [x] §A–E đủ · bind khớp control-hint
- [x] prefix `api/v1/asset/csdl-records` · resource `maintenance-work-logs`
- [x] **cấm** ERP.* / invent infra
- [x] contentHash khớp control-hint
