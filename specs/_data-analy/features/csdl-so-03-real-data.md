# Real-data bind — csdl-so-03 (Kind B list + Kind D Slideout · duty-incident-logs)

| | |
|---|---|
| feature | `csdl-so-03` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_bbeb376c` |
| resource | `duty-incident-logs` |
| formNo | `03` · Cục **Trực BĐGT + chốt + sự cố** · live hub còn Sổ 2 (`duty-logs`) + Sổ 3 (`checkpoint-duties`) đến merge |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-03` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=duty-incident-logs` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprint | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| sourceTables | shell `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo03` (**SA/migration**) · retire keys `duty-logs` · `checkpoint-duties` |
| catalogKind UI schema | `duty-incident-logs` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `SO` |

## § Delta Current vs New (`new_page` · `task_bbeb376c`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Resources | `duty-logs` + `checkpoint-duties` (2 card) | 1 `duty-incident-logs` · **xoá** 2 key cũ (Q-SO3) |
| Form | 3 ô `detail*` + entries Col1–3 | Typed T-SO-03 header + entry fields |
| List cols | generic road/km/detail | bookNo · contractor · road · Km · period |
| API | `…/csdl-records?resource=duty-logs` / `checkpoint-duties` | **giữ prefix** · resource mới · widen typed — SA |
| formNo label | Live Sổ 2 + Sổ 3 | Cục Sổ 03 · 1 card |
| Import | stub | Sheet sổ trực — OUT XLS |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-03.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-03 · Q-SO3 | — | typed SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=duty-incident-logs&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Sổ 03 (**SA**) | — | Schema_CsdlSo03 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` · store `duty-logs` / `checkpoint-duties` | generic | typed replace / alias page · retire 2 keys |
| `catalog` | Integration ui-schema `duty-incident-logs` | bootstrap cols | toast |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `duty-incident-logs` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| fromDate | Từ ngày | Date | — | `?fromDate=` | — | yes |
| toDate | Đến ngày | Date | — | `?toDate=` | — | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| bookNo | Số quyển | Text | — | detail / list | `bookNo` | yes |
| contractor | Nhà thầu | Text | — | detail / list | `contractor` | yes · **GAP-CSDL-ORG-01** |
| kmFrom | Lý trình từ | Number | — | detail / list | `kmFrom` | yes |
| kmTo | Lý trình đến | Number | — | detail / list | `kmTo` | yes |
| periodStart | Kỳ từ | Date | — | detail | `periodStart` | yes |
| periodEnd | Kỳ đến | Date | — | detail | `periodEnd` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| entries[].lineNo | STT | Integer | — | nested | `lineNo` | yes |
| entries[].dutyDate | Ngày | Date | — | nested | `dutyDate` | yes |
| entries[].shift | Ca | Text | — | nested | `shift` | yes |
| entries[].personName | Tên | Text | — | nested | `personName` | yes |
| entries[].content | Nội dung | Textarea | — | nested | `content` | yes |
| entries[].handling | Xử lý | Textarea | — | nested | `handling` | yes |
| entries[].signRemark | Ký / nhận xét | Text | — | nested | `signRemark` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=duty-incident-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=duty-incident-logs` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE. Legacy QS `duty-logs` / `checkpoint-duties` → redirect hoặc map SA (PO/Q-MERGE).

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status | FE statuses | PO chốt enum sổ | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit (P2) | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| catalog ui-schema | Integration `duty-incident-logs` | `LinCatalogUiSchemaEditorModal` | invent schema path |

## §D — Map / vẽ

`none` trên pack list. Deep-link GIS bbox optional (T-GIS-01) · **cấm** canvas.

## §E — Empty / error / i18n

| Case | UX |
|------|-----|
| List empty | Grid copy VN «Chưa có nhật ký trực BĐGT / chốt / sự cố» |
| 422 thiếu resource | toast · không crash |
| 404 detail | đóng slideout · toast |
| Legacy resource QS | toast hoặc redirect `duty-incident-logs` — PO |
| Leave dirty | LeaveConfirmModal |

## §F — Cấm

- ERP.* / Domains/Master / invent `api/v1/infra/*` / `api/v1/so-ts/csdl-records`
- Demo/localStorage làm SSOT runtime
- Chỉ 3 ô `detail*` hoặc flat `col1–3` làm DoD form
- Giữ song song 2 resource cũ làm DoD P1 (phải merge)
- Guid IdCode · invent map canvas · yarn build/e2e ở data_analy
- Merge form với Sổ TS `so-ts-*`

## DoR real-data

- [x] §A–§F filled · status `done`
- [x] bind khớp control-hint headerFingerprint
- [x] API prefix live Asset cite
