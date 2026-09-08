# Real-data bind — csdl-bieu-12 (Kind B list + Kind D Slideout · green-assets)

| | |
|---|---|
| feature | `csdl-bieu-12` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_94fca237` |
| resource | `green-assets` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=green-assets` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu12` / `GreenAsset` (**SA/migration**) |
| catalogKind UI schema | `green-assets` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `CX` |
| peerSoTs | — · **cấm** invent so-ts-green · **cấm** merge so-ts-* |

## § Delta Current vs New (`new_page` · `task_94fca237`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 15 cột · khóm trúc đào/ngâu/cọ/khác · m² cỏ |
| List cols | generic road/km/detail | Shared + typed clump/grass fields |
| formNo | Demo/live **12** | **giữ 12** · title «Cây xanh, thảm cỏ» |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=green-assets` | **giữ prefix** · widen typed payload — SA |
| Import | stub | Sheet 15 cột merge — OUT XLS |
| Peer | none | **cấm** invent peer Sổ TS · **GAP-CSDL-CUC-11** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-12.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 12 | — | 15 cột · khóm + m² |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § GreenAsset | — | OleanderClumps · NgauClumps · PalmClumps · GrassAreaM2 |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo · `csdl-so-sach-data.js`) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=green-assets&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 12 / `GreenAsset` (**SA**) | — | Schema_CsdlBieu12 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `green-assets` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 12 | — | import cite · not runtime SSOT |
| `derived` | IdCode `CX-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.* · **cấm** invent `api/v1/infra/*` (doc legacy).

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `green-assets` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Km từ–đến | Number | — | filter / detail | `kmFrom` / `kmTo` | yes |
| side | Vị trí | Dropdown | LOOKUP_STATIC | filter / detail / list | `side` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| oleanderClumps | Khóm trúc đào | Number | — | detail / list | `oleanderClumps` | yes · **GAP-BIEU12-CLUMP-01** |
| ngauClumps | Khóm ngâu | Number | — | detail / list | `ngauClumps` | yes |
| palmClumps | Khóm cọ | Number | — | detail / list | `palmClumps` | yes |
| otherClumps | Khóm khác | Number | — | detail / list | `otherClumps` | yes · **Q-OTHER-CLUMP** |
| grassAreaM2 | Thảm cỏ m² | Number | — | detail / list | `grassAreaM2` | yes · **GAP-BIEU12-GRASS-01** |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=green-assets` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=green-assets` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB SSOT map: `OleanderClumps`↔`oleanderClumps` · `NgauClumps`↔`ngauClumps` · `PalmClumps`↔`palmClumps` · `GrassAreaM2`↔`grassAreaM2` · `OtherClumps`↔`otherClumps` (**SA** confirm Other nếu Excel có).

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L / R / C / Both | demo `sides` | invent side set |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `green-assets` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. **Cấm** invent map canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có cây xanh, thảm cỏ» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Invent peer Sổ TS / merge so-ts-* vào biểu Cục  
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
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| generatedAt | 2026-09-05T12:56:00.000Z |
| versionGate | ok |
| taskId | task_94fca237 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457 -->
