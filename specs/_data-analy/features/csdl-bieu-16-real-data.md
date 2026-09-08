# Real-data bind — csdl-bieu-16 (Kind B list + Kind D Slideout · interchanges)

| | |
|---|---|
| feature | `csdl-bieu-16` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_70fe1d76` |
| resource | `interchanges` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-16` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=interchanges` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu16` / `Interchange` + `InterchangeBranch` (**SA/migration**) |
| catalogKind UI schema | `interchanges` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `IX` (**Q-PREFIX**) |
| peerSoTs | `so-ts-interchange` · **cấm** merge so-ts-* · **cấm** reuse `road-assets` / dumpSpecs làm SSOT biểu |

## § Delta Current vs New (`new_page` · `task_70fe1d76`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Hub | 12 biểu · **MISSING** Biểu 16 | NEW card · resource `interchanges` · formNo **16** |
| Form | N/A / 3 ô `detail*` nếu bootstrap | Typed **39 cột** · header + `branches[]` + ATGT |
| List cols | generic | Shared + name / interchangeType / kmMain / status |
| formNo | — | **16** · title «Nút giao» |
| API | shell `csdl-records` · resource chưa đăng ký | **giữ prefix** · register `interchanges` + typed payload — SA |
| DB SSOT | Doc chỉ Biểu 1–12 | Schema_CsdlBieu16 · **GAP-BIEU16-DB-01** |
| Child | — | `branches[]` 1–n · **GAP-CSDL-CUC-09** |
| Import | stub | Sheet 39 cột merge — OUT XLS |
| Peer | so-ts-interchange · `road-assets?type=INTERCHANGE` | **cấm** merge · ROW riêng · **GAP-CSDL-CUC-11** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-16.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 16 | — | 39 cột · MISSING hub · child nhánh |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | **thiếu** § Biểu 16 | **GAP-BIEU16-DB-01** · SA viết entity |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect · `csdl-so-sach-data.js`) | hub thiếu card | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=interchanges&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast · payload gồm `branches[]` |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 16 / `Interchange` + Branch (**SA**) | — | Schema_CsdlBieu16 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic / missing card | typed + hub card + child grid |
| `catalog` | Integration ui-schema `interchanges` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 16 | — | import cite · not runtime SSOT |
| `peer` | so-ts-interchange · `api/v1/asset/road-assets` | — | **cite only** · **cấm** bind runtime |
| `derived` | IdCode `IX-yyyyMMdd-nnnn` · `branchCount` | — | BE generate · **Q-PREFIX** |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.* · **cấm** invent `api/v1/infra/*` (doc legacy) · **cấm** bind peer `road-assets` làm list biểu.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `interchanges` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| interchangeType | Loại nút | Dropdown | LOOKUP_STATIC | `?interchangeType=` | `interchangeType` | yes · **GAP-BIEU16-TYPE-01** |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmMain | Km chính | Number | — | filter / detail | `kmMain` | yes · **GAP-BIEU16-KM-01** |
| kmAux | Km phụ | Number | — | detail | `kmAux` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| name | Tên nút | Text | — | detail / list | `name` | yes |
| side | Vị trí | Dropdown | LOOKUP_STATIC | detail | `side` | yes |
| trafficOrg | Tổ chức GT | Dropdown/Text | — | detail | `trafficOrg` | yes |
| mainBedWidth | B nền chính | Number | — | detail / list | `mainBedWidth` | yes · **GAP-BIEU16-MAIN-01** |
| mainSurfaceWidth | B mặt chính | Number | — | detail / list | `mainSurfaceWidth` | yes |
| mainMedianWidth | KC chính | Number | — | detail / list | `mainMedianWidth` | yes |
| mainLaneCount | Số làn | Number | — | detail / list | `mainLaneCount` | yes |
| atgtSign | ATGT biển | Number/Text | — | detail | `atgtSign` | yes · **GAP-BIEU16-ATGT-01** |
| atgtMarking | ATGT vạch | Number/Text | — | detail | `atgtMarking` | yes |
| atgtIsland | ATGT đảo | Number/Text | — | detail | `atgtIsland` | yes |
| atgtLight | ATGT đèn | Number/Text | — | detail | `atgtLight` | yes |
| branches | Nhánh | child grid | — | detail `branches[]` | `branches[]` | yes · **GAP-CSDL-CUC-09** |
| branchName … branchRadius | (trong child) | Text/Number/Dropdown | — | nested | nested | yes · **GAP-BIEU16-BRANCH-01** |
| yearBuilt | Năm | Number | — | detail / list | `yearBuilt` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| lat / lng | GPS | Number | — | detail | `lat` / `lng` | yes |
| branchCount | Số nhánh | Number ro | — | detail / list | derived | yes |
| formNo | Biểu | const | — | — | `16` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt / updatedBy | Cập nhật | DateTime/Text ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=interchanges` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=interchanges` + typed fields + `branches[]` |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB đề xuất map: `Name`↔`name` · `KmMain`/`KmAux` · `InterchangeType` · `TrafficOrg` · `MainBedWidth`/`MainSurfaceWidth`/`MainMedianWidth`/`MainLaneCount` · ATGT cols · child `InterchangeBranch` (Name/KmFrom/KmTo/Side/Direction/Length/Bed/Surface/Median/Radius) — **SA** confirm Excel · **Q-CHILD-API**.

**Cấm** bind: `api/v1/asset/road-assets?type=INTERCHANGE` · dumpSpecs peer · invent `api/v1/infra/interchanges` · so-ts-interchange form APIs làm list biểu.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC interchangeType | cite Excel · **Q-TYPE-SET** | analy § Biểu 16 | expand không confirm |
| LOOKUP_STATIC trafficOrg | nếu lookup · **Q-TRAFFIC-ORG** | — | invent set không cite |
| LOOKUP_STATIC status | tot/tb/kem/hong hoặc align hub | — | invent set không cite Excel |
| LOOKUP_STATIC side | L / R / C | shared hub | invent |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `interchanges` | Schema editor | generic 3-col only |
| asset-type peer | — | — | **cấm** dùng làm SSOT biểu Cục |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only (`nut-giao` optional cite peer). **Cấm** invent map canvas trên list.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có nút giao» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Child empty | theo **Q-BRANCH-MIN** · toast validate |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Flatten-only 1 nhánh · bỏ child grid (**GAP-CSDL-CUC-09**)  
- Merge / reuse so-ts-interchange form · `road-assets` · dumpSpecs làm list biểu  
- Guid làm IdCode  
- yarn build / e2e ở role data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-05T16:01:30.000Z |
| versionGate | ok |
| taskId | task_70fe1d76 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b -->
