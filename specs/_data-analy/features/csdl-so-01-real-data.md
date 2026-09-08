# Real-data bind — csdl-so-01 (Kind B list + Kind D Slideout · inspection-logs)

| | |
|---|---|
| feature | `csdl-so-01` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_3931d587` |
| resource | `inspection-logs` |
| formNo | `01` · Cục **Nhật ký tuần kiểm** · live hub còn label Sổ 8 đến T-REN-01 |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-01` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=inspection-logs` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprint | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| sourceTables | shell `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo01` (**SA/migration**) |
| catalogKind UI schema | `inspection-logs` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `SO` |

## § Delta Current vs New (`new_page` · `task_3931d587`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` + entries Col1–3 | Typed T-SO-01 header + entry fields + media sau SC |
| List cols | generic road/km/detail | bookNo · manageUnit · inspector · period · Km |
| API | `…/csdl-records?resource=inspection-logs` | **giữ prefix** · widen typed payload — SA |
| formNo label | Live Sổ 8 | Cục Sổ 01 · key `inspection-logs` giữ |
| File | không | FileService media sau SC · T-FILE-01 |
| Import | stub | Sheet tuần kiểm — OUT XLS |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-01.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-01 | — | typed SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=inspection-logs&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Sổ 01 (**SA**) | — | Schema_CsdlSo01 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace / alias page |
| `catalog` | Integration ui-schema `inspection-logs` | bootstrap cols | toast |
| `file` | FileService integrate-file-upload-web | — | media sau SC · **cấm** invent |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `inspection-logs` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | Date | — | `?fromDate=` | — | yes |
| toDate | Đến ngày | Date | — | `?toDate=` | — | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| bookNo | Số quyển | Text | — | detail / list | `bookNo` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| inspector | Người TK | Text | — | detail / list | `inspector` | yes |
| kmFrom | Lý trình từ | Number | — | detail / list | `kmFrom` | yes |
| kmTo | Lý trình đến | Number | — | detail / list | `kmTo` | yes |
| periodStart | Ngày BĐ | Date | — | detail | `periodStart` | yes |
| periodEnd | Ngày KT | Date | — | detail | `periodEnd` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| entries[].lineNo | STT | Integer | — | nested | `lineNo` | yes |
| entries[].inspectDate | Ngày | Date | — | nested | `inspectDate` | yes |
| entries[].itemProposal | Hạng mục/đề xuất | Text | — | nested | `itemProposal` | yes |
| entries[].kmFrom | Km từ | Number | — | nested | `kmFrom` | yes |
| entries[].kmTo | Km đến | Number | — | nested | `kmTo` | yes |
| entries[].location | Vị trí | Text | — | nested | `location` | yes |
| entries[].description | Mô tả | Textarea | — | nested | `description` | yes |
| entries[].estQuantity | KL ước | Text | — | nested | `estQuantity` | yes |
| entries[].inspectorOpinion | Ý kiến TK | Textarea | — | nested | `inspectorOpinion` | yes |
| entries[].remarkSign | Nhận xét+ký | Text | — | nested | `remarkSign` | yes |
| entries[].repairRequest | Yêu cầu SC/VP | Textarea | — | nested | `repairRequest` | yes |
| entries[].dueDate | Hạn | Date | — | nested | `dueDate` | yes |
| entries[].actualQtyQualityDate | KL/CL/ngày TT | Text | — | nested | `actualQtyQualityDate` | yes |
| entries[].postRepairMediaIds | File sau SC | FileMulti | — | nested | `postRepairMediaIds` | yes · **GAP-SO01-MEDIA-01** |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=inspection-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=inspection-logs` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status | FE statuses | PO chốt enum sổ | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit (P2) | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| catalog ui-schema | Integration `inspection-logs` | `LinCatalogUiSchemaEditorModal` | invent schema path |
| file | FileService upload | integrate-file-upload-web | invent file API |

## §D — Map / vẽ

`none` trên pack list. Deep-link GIS bbox optional (T-GIS-01) · **cấm** canvas. Media sau SC = file đính kèm · **không** OMS map.

## §E — Empty / error / i18n

| Case | UX |
|------|-----|
| List empty | Grid copy VN «Chưa có nhật ký tuần kiểm» |
| 422 thiếu resource | toast · không crash |
| 404 detail | đóng slideout · toast |
| Upload fail | toast · giữ draft form |
| Leave dirty | LeaveConfirmModal |

## §F — Cấm

- ERP.* / Domains/Master / invent `api/v1/infra/*` / `api/v1/so-ts/csdl-records`
- Demo/localStorage làm SSOT runtime
- Chỉ 3 ô `detail*` hoặc flat `col1–3` làm DoD form
- Guid IdCode · invent map canvas · yarn build/e2e ở data_analy
- Merge form với Sổ TS `so-ts-*`

## DoR real-data

- [x] §A–§F filled · status `done`
- [x] bind khớp control-hint headerFingerprint
- [x] API prefix live Asset cite
