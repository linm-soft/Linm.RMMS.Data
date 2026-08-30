# Real-data bind — csdl-so-sach (Kind G hub + B list + D slideout)

| | |
|---|---|
| feature | `csdl-so-sach` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_21f924bd` |
| prefix | **live** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · route `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| map | `none` (list pack · deep-link gis only) · **cấm** invent map canvas |
| contentHash | `sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad` |
| headerFingerprint | `sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14` |
| sourceTables | `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` |
| catalogKind UI schema | `csdl-records` |

## § Delta Current vs New (`edit_page` · `task_21f924bd`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | STATUS lệch `so-ts` | Cite controller **`api/v1/asset/csdl-records`** |
| MFE route docs | Design `/asset/…` | Cite `index.tsx` **`/so-ts/csdl-so-sach`** |
| Hub/list/form | CRUD live BFF | **giữ** — cấm demo/localStorage fallback (`GAP-WEB-EDIT-SEED`) |
| roadName / org | Text free | đề xuất SearchInput master (GAP) — không đổi path API |
| Entries Col1–3 | flat child | GAP-RPT-SRC-CSDL-01 report · out of pack |
| Auth / History | TODO / stub | debt P1/P2 · không invent endpoint |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-sach.md` | — | version mismatch → gate |
| `context` | `docs/context/features/csdl-so-sach-control-map.md` | — | fields/actions |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `api` · catalog hub | `CsdlCatalogRecordsController` `GET …/csdl-records/catalog` | KPI/card count 0 | toast · **cấm** alert |
| `api` · list | `GET …/csdl-records?resource=&search=&province=&status=&fromDate=&toDate=&page=&pageSize=` | empty grid copy | 422 thiếu `resource` · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` · table `rmms_csdl_catalog_records` | — | tenant `CompanyCode` |
| `entity` | `CsdlBookEntryEntity` · table `rmms_csdl_book_entries` | grid trống sổ | — |
| `mfe` · hub+list | `CsdlSoSachPage.tsx` | hub empty cards OK | live |
| `mfe` · form | `CsdlFormSlideout.tsx` | — | live BFF only |
| `mfe` · service | `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` | — | live |
| `catalog` · UI schema | Integration catalog `csdl-records` ui-schema | bootstrap columns | toast |
| `derived` | IdCode prefix theo resource (`MD`·`BR`·…·`SO`) | — | BE generate |
| `derived` | Hub KPI counts | — | aggregate catalog |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/csdl-records` · **cấm** ERP.*.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| catalogTab | Tab | Tab | — | client | — | yes |
| resource | Resource | Card / QS | — | required list QS | `resource` (create) | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| fromDate | Từ ngày | Date | — | `?fromDate=` | — | yes |
| toDate | Đến ngày | Date | — | `?toDate=` | — | yes |
| code | Mã | Text readonly | — | detail `code` | auto | yes |
| roadName | Đường | Text | — | detail / list | `roadName` | yes · **GAP-CSDL-ROAD-01** |
| kmFrom | Lý trình từ | Number | — | detail | `kmFrom` | yes |
| kmTo | Lý trình đến | Number | — | detail | `kmTo` | yes |
| side | Bên | Dropdown | LOOKUP_STATIC | detail | `side` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| ownerUnit | Chủ QLSD | Text | — | detail | `ownerUnit` | yes · **GAP-CSDL-ORG-01** |
| detailPrimary | Chi tiết chính | Text | — | detail / list | `detailPrimary` | yes |
| detailSpec | Thông số | Text | — | detail | `detailSpec` | yes |
| detailExtra | Bổ sung | Text | — | detail | `detailExtra` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| bookNo | Số sổ | Text | — | detail | `bookNo` | yes (book) |
| contractor | Nhà thầu | Text | — | detail | `contractor` | yes (book) |
| entries[].lineNo | STT dòng | Integer | — | nested | `lineNo` | yes |
| entries[].col1 | Cột 1 | Text | — | nested | `col1` | yes · **GAP-RPT-SRC-CSDL-01** |
| entries[].col2 | Cột 2 | Text | — | nested | `col2` | yes |
| entries[].col3 | Cột 3 | Text | — | nested | `col3` | yes |
| entries[].note | Ghi chú dòng | Text | — | nested | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| kpi.count | Hub count | derived | — | `GET …/catalog` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| Catalog hub | `GET /web-bff/api/v1/asset/csdl-records/catalog` |
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=…` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records` (`CsdlCatalogRecordsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/csdlSoSach/endpoint.ts`.

### Resources (polymorphic `Resource` key)

| resource | Biểu/Sổ | prefix IdCode |
|----------|---------|---------------|
| `pavement-sections` … `green-assets` | 12 biểu CSDL | MD·BR·TN·CV·RN·HC·AT·MK·KE·LE·LT·CX |
| `patrol-logs` … `inspection-logs` | 8 sổ BDTX (`book=true`) | SO |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master API P1 | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | FE `STATUSES` | tot/tb/kem/hong | — |
| LOOKUP_STATIC side | FE `SIDES` | L/R/C/Both | — |
| road-route (**đề xuất**) | `GET /integration/road-routes/search` | shared catalog 38 READY | free-text khi đã chốt SearchInput |
| org-unit (**đề xuất**) | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| partner-unit (P2 sổ) | `GET /integration/partner-units/search` | 13 READY | — |
| catalog ui-schema | Integration `csdl-records` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — pack list. Toolbar deep-link gis / Biểu1 pavement-section only. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| status | entity `Status` | user C/E | PUT body | chip / Select |
| isActive | entity | delete soft | DELETE | confirm · reload list |
| catalog counts | aggregate | system | GET catalog | hub KPI |

Không workflow multi-step approval → progress slim OK.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data BFF thật» · Ask Q-ROAD / Q-PROV / Q-ENTRIES |
| Design | control-map khớp §B · giữ Slideout |
| SA | **giữ** path đã cite · entity flat + child entries · **cấm** parent JSON |
| Dev | `csdlService` BFF only · **cấm** localStorage fallback |
| QA | queued `/agent-qa*` — E2E **không** chạy ở role này |

## Empty / fail

| Case | Behavior |
|------|----------|
| list empty | empty grid · totalCount=0 · copy VN |
| list fail | empty grid · toast |
| thiếu `resource` | API 422 · FE không gọi list khi hub |
| getById 404 | đóng slideout |
| save 422 | field invalid banner + toast |
| catalog fail | hub items=[] · totalCount=0 |

## Cấm

| ❌ | ✅ |
|----|-----|
| Mock / `rmms-mfe-csdl-list` LS làm SSOT | BFF `csdlService` |
| `api/v1/so-ts/csdl-records` / ERP.* / `api/v1/infra/*` | `api/v1/asset/csdl-records` |
| Parent `EntriesJson` / `DetailJson` | Child `rmms_csdl_book_entries` |
| Resource/full-page form thay Slideout (đã chốt D) | Kind D Slideout |
| Yarn build / e2e / start:std ở data_analy | VERIFY roleOnly=data_analy artifact+STATUS |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.31 |
| contentHash | `sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad` |
| headerFingerprint | `sha256:0528db4c9a04d817a2fd2d9867ace7ebf739fb05aac01942032a7110d9ff6a14` |
| generatedAt | 2026-08-29T10:45:00.000Z |
| versionGate | rechecked |
| taskId | task_21f924bd |
| packKind | list |
| changeScope | edit_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.31 versionGate=rechecked contentHash=sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad -->
