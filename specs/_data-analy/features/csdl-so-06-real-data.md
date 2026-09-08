# Real-data bind — csdl-so-06 (Kind B list + Kind D Slideout · bridge-inspections)

| | |
|---|---|
| feature | `csdl-so-06` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ff0beb8e` |
| resource | `bridge-inspections` |
| formNo | `06` · Cục **QL cầu / phiếu KT** · live hub card «Phiếu KT cầu» đến T-REN-01 |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master · **cấm** runtime `/api/v1/bridge-inspections` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=bridge-inspections` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprint | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| sourceTables | shell `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo06` (**SA/migration**) |
| catalogKind UI schema | `bridge-inspections` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `SO` |
| peer | Biểu 2 `bridges` / passport deep-link · report `rpt-kiem-tra-cau` drill · **cấm** merge ROW |

## § Delta Current vs New (`new_page` · `task_ff0beb8e`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` + entries Col1–3 | Typed T-SO-06 header + **20 fixed** lines + photoIds |
| List cols | generic road/km/detail | bridgeName · road · kmStation · inspectedAt · inspector |
| API | `…/csdl-records?resource=bridge-inspections` | **giữ prefix** · widen typed payload — SA |
| Legacy doc API | `/api/v1/bridge-inspections` (cite only) | **không** ship path mới · **GAP-SO06-APILEGACY-01** |
| formNo label | Live «Phiếu KT cầu» | Cục Sổ 06 · key `bridge-inspections` giữ |
| File | không | FileService photoIds / dòng · T-FILE-01 |
| Peer | không typed | SearchInput/deep-link Biểu 2 · **GAP-SO06-PEER-01** |
| Import | stub | Sheet QL cầu — OUT XLS |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-06.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-06 | — | typed SSOT |
| `catalog-doc` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.5 | 20 partCode | cite field · **không** = runtime path |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=bridge-inspections&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Sổ 06 (**SA**) | — | Schema_CsdlSo06 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace / alias page |
| `catalog` | Integration ui-schema `bridge-inspections` | bootstrap cols | toast |
| `file` | FileService integrate-file-upload-web | — | photoIds · **cấm** invent |
| `peer` | Biểu 2 `bridges` · passport | — | deep-link only |
| `report` | `rpt-kiem-tra-cau` drill `?resource=bridge-inspections&id=` | — | sau typed READY |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` | — | BE generate |
| `derived` | Create → seed 20 lines partCode | — | **cấm** empty entries |

`sourceCite` = path/controller **có trong repo** hoặc analy cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `bridge-inspections` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| bridgeId | Cầu | SearchInput | bridges | `?bridgeId=` / detail | `bridgeId` (+ `bridgeName`) | yes · **GAP-SO06-PEER-01** |
| fromDate | Từ ngày | Date | — | `?fromDate=` | — | yes |
| toDate | Đến ngày | Date | — | `?toDate=` | — | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| bridgeName | Tên cầu | Text ro | — | detail / list | display | yes |
| roadName | Tên đường | Text ro | — | detail / list | display | yes |
| kmStation | Lý trình | Number | — | detail / list | `kmStation` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| passportRef | Passport | Text/link | — | detail | `passportRef` | yes |
| inspectedAt | Ngày KT | Date | — | detail / list | `inspectedAt` | yes |
| inspector | Người KT | Text | — | detail / list | `inspector` | yes |
| adminArea | Địa phận | Text | — | detail | `adminArea` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| entries[].lineNo | STT | Integer | — | nested | `lineNo` | yes |
| entries[].partCode | Mã BP | Text ro | — | nested | `partCode` | yes · fixed seed |
| entries[].partName | Bộ phận | Text ro | — | nested | `partName` | yes |
| entries[].damageDesc | Hư hỏng | Textarea | — | nested | `damageDesc` | yes |
| entries[].proposedActionQty | KL kiến nghị | Text | — | nested | `proposedActionQty` | yes |
| entries[].priority | Ưu tiên | Dropdown | LOOKUP_STATIC | nested | `priority` | yes · quarter/before-storm/immediate |
| entries[].photoIds | Ảnh | FileMulti | — | nested | `photoIds` | yes · **GAP-SO06-MEDIA-01** |
| entries[].notes | Ghi chú dòng | Text | — | nested | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=bridge-inspections` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=bridge-inspections` + typed fields + seed 20 lines |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status | FE statuses | PO chốt enum phiếu | — |
| LOOKUP_STATIC priority | FE `quarter` / `before-storm` / `immediate` | T-SO-06 | invent enum khác |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| bridges | Biểu 2 / Integration search (**SA**) | peer Biểu 2 | merge form Biểu 2 |
| org-unit (P2) | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| catalog ui-schema | Integration `bridge-inspections` | `LinCatalogUiSchemaEditorModal` | invent schema path |
| file | FileService upload | integrate-file-upload-web | invent file API |

## §D — Map / vẽ

`none` trên pack list. Deep-link GIS bbox optional (T-GIS-01) · **cấm** canvas. Ảnh phiếu = file đính kèm · **không** OMS map.

## §E — Empty / error / i18n

| Case | UX |
|------|-----|
| List empty | Grid copy VN «Chưa có phiếu kiểm tra cầu» |
| 422 thiếu resource | toast · không crash |
| 404 detail | đóng slideout · toast |
| Create missing 20 lines | BE seed / FE seed · validation |
| Upload fail | toast · giữ draft form |
| Leave dirty | LeaveConfirmModal |

## §F — Cấm

- ERP.* / Domains/Master / invent `api/v1/infra/*` / `api/v1/so-ts/csdl-records`
- Runtime path `/api/v1/bridge-inspections` (doc §3.5 = cite only)
- Demo/localStorage làm SSOT runtime
- Chỉ 3 ô `detail*` hoặc flat `col1–3` làm DoD form
- Add/remove vượt 20 bộ phận · đổi `partCode` seed
- Guid IdCode · invent map canvas · yarn build/e2e ở data_analy
- Merge form với Sổ TS `so-ts-*` hoặc Biểu 2 `bridges`

## DoR real-data

- [x] §A–§F filled · status `done`
- [x] bind khớp control-hint headerFingerprint
- [x] API prefix live Asset cite
