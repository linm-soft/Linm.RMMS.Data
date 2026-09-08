# Real-data bind — csdl-bieu-13 (Kind B list + Kind D Slideout · noise-barriers)

| | |
|---|---|
| feature | `csdl-bieu-13` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_3cec1103` |
| resource | `noise-barriers` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-13` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=noise-barriers` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu13` / `NoiseBarrier` (**SA/migration**) |
| catalogKind UI schema | `noise-barriers` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `TC` (**Q-PREFIX**) |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge so-ts-* · **cấm** reuse `road-assets` / dumpSpecs làm SSOT biểu |

## § Delta Current vs New (`new_page` · `task_3cec1103`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Hub | 12 biểu · **MISSING** Biểu 13 | NEW card · resource `noise-barriers` · formNo **13** |
| Form | N/A / 3 ô `detail*` nếu bootstrap | Typed 13 cột · dài · cao · DT |
| List cols | generic | Shared + lengthM/heightM/areaM2 |
| formNo | — | **13** · title «Tường chống ồn» |
| API | shell `csdl-records` · resource chưa đăng ký | **giữ prefix** · register `noise-barriers` + typed payload — SA |
| DB SSOT | Doc chỉ Biểu 1–12 | Schema_CsdlBieu13 · **GAP-BIEU13-DB-01** |
| Import | stub | Sheet 13 cột merge — OUT XLS |
| Peer | `so-ts-noise-barrier` / `road-assets` | **cấm** merge · ROW riêng · **GAP-CSDL-CUC-11** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-13.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 13 | — | 13 cột · dài/cao/DT · MISSING hub |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | **thiếu** § Biểu 13 | **GAP-BIEU13-DB-01** · SA viết entity |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect · `csdl-so-sach-data.js`) | hub thiếu card | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=noise-barriers&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 13 / `NoiseBarrier` (**SA**) | — | Schema_CsdlBieu13 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic / missing card | typed + hub card |
| `catalog` | Integration ui-schema `noise-barriers` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 13 | — | import cite · not runtime SSOT |
| `peer` | `so-ts-noise-barrier` · `api/v1/asset/road-assets` | — | **cite only** · **cấm** bind runtime |
| `derived` | IdCode `TC-yyyyMMdd-nnnn` | — | BE generate · **Q-PREFIX** |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.* · **cấm** invent `api/v1/infra/*` (doc legacy) · **cấm** bind peer `road-assets` làm list biểu.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `noise-barriers` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Km từ–đến | Number | — | filter / detail | `kmFrom` / `kmTo` | yes |
| side | Vị trí | Dropdown | LOOKUP_STATIC | filter / detail / list | `side` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| lengthM | Chiều dài (m) | Number | — | detail / list | `lengthM` | yes · **GAP-BIEU13-DIM-01** |
| heightM | Chiều cao (m) | Number | — | detail / list | `heightM` | yes |
| areaM2 | Diện tích (m²) | Number | — | detail / list | `areaM2` | yes · **Q-AREA-DERIVE** |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=noise-barriers` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=noise-barriers` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB đề xuất map: `LengthM`↔`lengthM` · `HeightM`↔`heightM` · `AreaM2`↔`areaM2` (**SA** confirm Excel).

**Cấm** bind: `api/v1/asset/road-assets?type=NOISE_BARRIER` · dumpSpecs peer · invent `api/v1/infra/noise-barriers`.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L / R / C / Both | demo `sides` | invent side set |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `noise-barriers` | Schema editor | generic 3-col only |
| asset-type peer | — | — | **cấm** dùng làm SSOT biểu Cục |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only (`chong-on` optional). **Cấm** invent map canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có tường chống ồn» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge / reuse `so-ts-noise-barrier` form · `road-assets` · dumpSpecs làm list biểu  
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
| contentHash | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| generatedAt | 2026-09-05T13:50:00.000Z |
| versionGate | ok |
| taskId | task_3cec1103 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a -->
