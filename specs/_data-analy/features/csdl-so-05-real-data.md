# Real-data bind — csdl-so-05 (Kind B list + Kind D Slideout · accident-summaries)

| | |
|---|---|
| feature | `csdl-so-05` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_6deceabd` |
| resource | `accident-summaries` |
| formNo | `05` · Cục **TNGT + điểm đen** · **NEW** (tách live Sổ 4 «(+ TNGT)») |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** Domains/Master · **cấm** runtime `/api/v1/accident-summaries` (doc legacy §3.4) |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-so-05` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=accident-summaries` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprint | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| sourceTables | shell `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed `Schema_CsdlSo05` (**SA/migration**) · **không** TrafficCountSummary / 16 class trên resource này |
| catalogKind UI schema | `accident-summaries` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `SO` |
| peerLookup | `road-route` · org-unit P2 · report leaf `rpt-tngt` (read-only) · peer sổ `traffic-counts` / `csdl-so-04` (**ROW riêng**) |

## § Delta Current vs New (`new_page` · `task_6deceabd`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Resource | **MISSING** `accident-summaries` · TNGT trong title `traffic-counts` | **NEW** key `accident-summaries` · formNo `05` · title «TNGT + điểm đen» |
| Form | generic detail* / Col1–3 (hub shell) | Typed T-SO-05 header + 3 grid C.1 / C.2 / điểm đen |
| List cols | N/A (chưa card) | bookNo · contractor · road · Km · year/period · tableKind · fatalities · injuries · accidentCount |
| API | `…/csdl-records?resource=traffic-counts` gộp label | **giữ prefix** · `resource=accident-summaries` · widen typed — SA |
| Doc legacy | `POST /api/v1/accident-summaries` · flat AccidentSummary | **cấm** runtime path cũ · bind qua `csdl-records` |
| Import | stub | Sheet TNGT/điểm đen — OUT XLS |
| Report | `rpt-tngt` / Report / Incident | Drill source = typed so-05 · **cấm** CRUD trên report |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-so-05.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-05 · GAP-CSDL-CUC-07 | — | typed SSOT |
| `analy` | peer `csdl-so-04-*` · GAP-SO04-SPLIT-01 | — | split timing |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | chưa card so-05 | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=accident-summaries&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` · `CsdlBookEntryEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Sổ 05 (**SA**) | — | Schema_CsdlSo05 pair · 3 entry collections |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | thiếu resource + TNGT trên so-04 | catalog card + typed page / alias |
| `catalog` | Integration ui-schema `accident-summaries` | bootstrap cols | toast |
| `lookup` | road-route · org-unit P2 | — | free-text khi đã chốt SearchInput |
| `derived` | IdCode `SO-yyyyMMdd-nnnn` | — | BE generate |
| `report` | `rpt-tngt` · Report / Incident TNGT | — | **cấm** write từ report |

`sourceCite` = path/controller **có trong repo** hoặc analy cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `accident-summaries` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| year | Năm | Integer/Dropdown | — | `?year=` | `year` | yes |
| periodType | Loại kỳ | Dropdown | LOOKUP_STATIC | `?periodType=` | `periodType` | yes |
| tableKind | Bảng | Dropdown | LOOKUP_STATIC | `?tableKind=` | `tableKind` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| bookNo | Số quyển | Text | — | detail / list | `bookNo` | yes |
| contractor | Nhà thầu | Text | — | detail / list | `contractor` | yes · **GAP-CSDL-ORG-01** |
| kmFrom | Lý trình từ | Number | — | detail / list | `kmFrom` | yes |
| kmTo | Lý trình đến | Number | — | detail / list | `kmTo` | yes |
| periodValue | Kỳ | Dropdown/Integer | — | detail | `periodValue` | yes · **Q-PERIOD** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| c1* | C.1 lines | grid | — | detail `entriesC1[]` | typed lines | yes · **GAP-SO05-C1-01** |
| c2* | C.2 lines | grid | — | detail `entriesC2[]` | typed lines | yes · **GAP-SO05-C2-01** |
| bs* | Điểm đen lines | grid | — | detail `entriesBlackSpot[]` | typed lines | yes · **GAP-SO05-BS-01** |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=accident-summaries` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=accident-summaries` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE. **Cấm** gọi Report `rpt-tngt` / Incident write từ form CRUD. **Cấm** runtime `POST /api/v1/accident-summaries`.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` (5) | demo align · **không** master P1 | Dropdown demo-only SSOT quốc gia |
| LOOKUP_STATIC status / periodType / tableKind | FE enums | PO chốt | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit (P2) | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| catalog ui-schema | Integration `accident-summaries` | `LinCatalogUiSchemaEditorModal` | invent schema path |
| peer so-04 | `traffic-counts` | split label only | merge PK / form đếm xe |

## §D — Map / vẽ

`none` trên pack list. Deep-link GIS bbox optional (T-GIS-01) · **cấm** canvas.

## §E — Empty / error / i18n

| Case | UX |
|------|-----|
| List empty | Grid copy VN «Chưa có dữ liệu TNGT / điểm đen» |
| 422 thiếu resource | toast · không crash |
| 404 detail | đóng slideout · toast |
| Leave dirty | LeaveConfirmModal |
| Đếm xe / 16 hạng trên form | **cấm** — thuộc `csdl-so-04` |
| Report CRUD | **cấm** — `rpt-tngt` read-only |

## §F — Cấm

- ERP.* / Domains/Master / invent `api/v1/infra/*` / runtime `api/v1/accident-summaries` / `api/v1/so-ts/csdl-records`
- Demo/localStorage làm SSOT runtime
- Chỉ 3 ô `detail*` hoặc flat `col1–3` làm DoD form
- Gộp TrafficCountSummary / 16 hạng xe vào resource này
- Guid IdCode · invent map canvas · yarn build/e2e ở data_analy
- Merge form với Sổ TS / hang-muc / `csdl-so-04`
- CRUD trên `rpt-tngt` / Report / Incident domain từ pack list này

## DoR real-data

- [x] §A–§F filled · status `done`
- [x] bind khớp control-hint headerFingerprint
- [x] API prefix live Asset cite
