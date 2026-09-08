# Real-data bind — csdl-bieu-15 (Kind B list + Kind D Slideout · ops-facilities)

| | |
|---|---|
| feature | `csdl-bieu-15` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_23453ac3` |
| resource | `ops-facilities` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-15` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=ops-facilities` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu15` / `OpsFacility` (**SA/migration**) |
| catalogKind UI schema | `ops-facilities` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `OF` (**Q-PREFIX**) |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge so-ts-* · **cấm** reuse `road-assets` / dumpSpecs làm SSOT biểu |

## § Delta Current vs New (`new_page` · `task_23453ac3`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Hub | 12 biểu · **MISSING** Biểu 15 | NEW card · resource `ops-facilities` · formNo **15** |
| Form | N/A / 3 ô `detail*` nếu bootstrap | Typed **20 cột** · facility + area + equipment |
| List cols | generic | Shared + facilityKind/name/status/yearBuilt |
| formNo | — | **15** · title «TMC / thu phí / hạt / kho» |
| API | shell `csdl-records` · resource chưa đăng ký | **giữ prefix** · register `ops-facilities` + typed payload — SA |
| DB SSOT | Doc chỉ Biểu 1–12 | Schema_CsdlBieu15 · **GAP-BIEU15-DB-01** |
| Import | stub | Sheet 20 cột merge — OUT XLS |
| Peer | so-ts-toll / rest-area / station-house · `road-assets?type=…` | **cấm** merge · ROW riêng · **GAP-CSDL-CUC-11** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-15.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 15 | — | 20 cột · MISSING hub |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | **thiếu** § Biểu 15 | **GAP-BIEU15-DB-01** · SA viết entity |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect · `csdl-so-sach-data.js`) | hub thiếu card | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=ops-facilities&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 15 / `OpsFacility` (**SA**) | — | Schema_CsdlBieu15 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic / missing card | typed + hub card |
| `catalog` | Integration ui-schema `ops-facilities` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 15 | — | import cite · not runtime SSOT |
| `peer` | so-ts-toll / rest-area / station-house · `api/v1/asset/road-assets` | — | **cite only** · **cấm** bind runtime |
| `derived` | IdCode `OF-yyyyMMdd-nnnn` | — | BE generate · **Q-PREFIX** |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.* · **cấm** invent `api/v1/infra/*` (doc legacy) · **cấm** bind peer `road-assets` làm list biểu.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `ops-facilities` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| facilityKind | Loại CS | Dropdown | LOOKUP_STATIC | `?facilityKind=` | `facilityKind` | yes · **GAP-BIEU15-KIND-01** |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes · **GAP-BIEU15-STATUS-01** |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Km từ–đến | Number | — | filter / detail | `kmFrom` / `kmTo` | yes · **Q-KM** |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| facilityName | Tên CS | Text | — | detail / list | `facilityName` | yes |
| courtyardAreaM2 | DT khuôn viên | Number | — | detail / list | `courtyardAreaM2` | yes · **GAP-BIEU15-AREA-01** |
| buildingQty | Nhà SL | Number | — | detail / list | `buildingQty` | yes |
| buildingAreaM2 | Nhà DT | Number | — | detail / list | `buildingAreaM2` | yes |
| otherStructQty | KT khác SL | Number | — | detail / list | `otherStructQty` | yes |
| otherStructAreaM2 | KT khác DT | Number | — | detail / list | `otherStructAreaM2` | yes |
| yearBuilt | Năm | Number | — | detail / list | `yearBuilt` | yes |
| equipmentKind | TB chủng | Text/Dropdown | — | detail / list | `equipmentKind` | yes · **GAP-BIEU15-EQ-01** |
| equipmentQty | TB SL | Number | — | detail / list | `equipmentQty` | yes |
| equipmentStatus | TB TT | Dropdown | LOOKUP_STATIC | detail / list | `equipmentStatus` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=ops-facilities` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=ops-facilities` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB đề xuất map: `FacilityKind`↔`facilityKind` · `FacilityName`↔`facilityName` · `CourtyardAreaM2`↔`courtyardAreaM2` · `BuildingQty`/`BuildingAreaM2` · `OtherStructQty`/`OtherStructAreaM2` · `Status`↔`status` · `YearBuilt`↔`yearBuilt` · `EquipmentKind`/`EquipmentQty`/`EquipmentStatus` — **SA** confirm Excel.

**Cấm** bind: `api/v1/asset/road-assets?type=TOLL|REST_AREA|…` · dumpSpecs peer · invent `api/v1/infra/ops-facilities` · so-ts-* form APIs làm list biểu.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC facilityKind | tmc / toll_station / rest_area / station_house / warehouse | analy § Biểu 15 | expand không confirm |
| LOOKUP_STATIC status | tot/tb/kem/hong hoặc align hub | — | invent set không cite Excel |
| LOOKUP_STATIC equipmentStatus | align status hoặc riêng | **Q-EQ-SET** | invent |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `ops-facilities` | Schema editor | generic 3-col only |
| asset-type peer | — | — | **cấm** dùng làm SSOT biểu Cục |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. **Cấm** invent map canvas trên list.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có cơ sở TMC / thu phí / hạt / kho» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge / reuse so-ts-toll / rest-area / station-house form · `road-assets` · dumpSpecs làm list biểu  
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
| contentHash | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| generatedAt | 2026-09-05T15:17:00.000Z |
| versionGate | ok |
| taskId | task_23453ac3 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7 -->
