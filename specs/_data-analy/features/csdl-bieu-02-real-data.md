# Real-data bind — csdl-bieu-02 (Kind B list + Kind D Slideout · bridges)

| | |
|---|---|
| feature | `csdl-bieu-02` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_dd8553f8` |
| resource | `bridges` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| map | `none` · GPS fields only · **cấm** invent map canvas |
| contentHash | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu2` (**SA/migration**) |
| catalogKind UI schema | `bridges` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `BR` |

## § Delta Current vs New (`new_page` · `task_dd8553f8`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic (`bridgeName`/`lengthM`/`builtYear` sample) | Typed 48 cột Excel Biểu 2 · GPS 3 điểm · dầm/phần dưới/gối/lan can |
| List cols | generic road/km/detail | Cột typed tên cầu · dài · loại dầm · GPS summary |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=bridges` | **giữ prefix** · widen payload / typed table — SA |
| Import | stub | Sheet 48 cột · legacy 64–69 map/drop — OUT XLS |
| Peer | passport `/api/v1/bridges/{id}` · Sổ 6 | Deep-link · **cấm** merge form / dùng passport làm CRUD Biểu 2 |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-02.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 2 | — | 48 cột SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=bridges&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 2 (**SA**) | — | Schema_CsdlBieu2 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `bridges` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 2 | — | import cite · not runtime SSOT |
| `derived` | IdCode `BR-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.* · **cấm** dùng `/api/v1/bridges` passport làm CRUD list Biểu 2.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `bridges` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom | Từ Km | Number | — | filter / detail | `kmFrom` | yes |
| kmTo | Đến Km | Number | — | filter / detail | `kmTo` | yes |
| beamType | Loại dầm | Dropdown | LOOKUP_STATIC | filter optional / detail | `beamType` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| bridgeName | Tên cầu | Text | — | detail / list | `bridgeName` | yes |
| side | Bên | Dropdown | LOOKUP_STATIC | detail | `side` | yes |
| gpsStartLat | GPS đầu Lat | Number | — | detail | `gpsStartLat` | yes · **GAP-BIEU02-GPS-01** |
| gpsStartLng | GPS đầu Lng | Number | — | detail | `gpsStartLng` | yes |
| gpsMidLat | GPS giữa Lat | Number | — | detail | `gpsMidLat` | yes |
| gpsMidLng | GPS giữa Lng | Number | — | detail | `gpsMidLng` | yes |
| gpsEndLat | GPS cuối Lat | Number | — | detail | `gpsEndLat` | yes |
| gpsEndLng | GPS cuối Lng | Number | — | detail | `gpsEndLng` | yes |
| spanCount | Số nhịp | Number | — | detail / list | `spanCount` | yes |
| spanScheme | Sơ đồ nhịp | Text | — | detail | `spanScheme` | yes |
| beamLengthM | Dài dầm | Number | — | detail | `beamLengthM` | yes |
| abutmentCondition | Mố TT | Dropdown | LOOKUP_STATIC | detail | `abutmentCondition` | yes |
| abutmentFoundation | Móng mố | Text | — | detail | `abutmentFoundation` | yes |
| abutmentBody | Thân mố | Text | — | detail | `abutmentBody` | yes |
| pierCondition | Trụ TT | Dropdown | LOOKUP_STATIC | detail | `pierCondition` | yes |
| pierFoundation | Móng trụ | Text | — | detail | `pierFoundation` | yes |
| pierBody | Thân trụ | Text | — | detail | `pierBody` | yes |
| designLoad | Tải TK | Text | — | detail | `designLoad` | yes · **GAP-BIEU02-LOAD-01** |
| actualLoad | Tải TT | Text | — | detail | `actualLoad` | yes |
| bearingCount | Gối SL | Number | — | detail | `bearingCount` | yes |
| bearingType | Loại gối | Text | — | detail | `bearingType` | yes |
| railingLengthM | Lan can dài | Number | — | detail | `railingLengthM` | yes |
| curbAreaM2 | DT gờ | Number | — | detail | `curbAreaM2` | yes |
| handrailType | Tay vịn | Text | — | detail | `handrailType` | yes |
| drainPipeCount | Ống thoát SL | Number | — | detail | `drainPipeCount` | yes |
| drainPipeLengthM | Ống thoát dài | Number | — | detail | `drainPipeLengthM` | yes |
| reflectiveArea10mM2 | DT PQ 10m | Number | — | detail | `reflectiveArea10mM2` | yes |
| steelCompositeBeam | Dầm thép LH | Checkbox | — | detail | `steelCompositeBeam` | yes |
| pierAbutmentCrown | Đỉnh trụ/mố | Text | — | detail | `pierAbutmentCrown` | yes |
| lengthM | Cdài cầu | Number | — | detail / list | `lengthM` | yes |
| carriageWidthM | B xe chạy | Number | — | detail | `carriageWidthM` | yes |
| builtYear | Năm XD | Number | — | detail | `builtYear` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| updatedByName | Người | Text | — | detail | `updatedByName` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| waterClearanceM | Tĩnh không nước | Number | — | detail | `waterClearanceM` | yes |
| approachType | Đường dẫn | Text | — | detail | `approachType` | yes |
| navigationClass | Cấp thông thuyền | Text | — | detail | `navigationClass` | yes |
| legacyCol64 | Legacy 64 | Text hidden | — | detail | `legacyCol64` | yes · **GAP-BIEU02-LEGACY-01** |
| legacyCol69 | Legacy 69 | Text hidden | — | detail | `legacyCol69` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=bridges` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=bridges` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

**Không** bind CRUD Biểu 2 vào `GET/PUT /api/v1/bridges/{id}/passport` (Sổ/passport khác lớp).

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L/R/C/Both | — | — |
| LOOKUP_STATIC beamType | DUL/BTCT/dàn thép/I LH/vòm/khác | Excel Biểu 2 | free-text khi đã chốt Dropdown |
| LOOKUP_STATIC abutmentCondition / pierCondition | tot/tb/kem/hong | — | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `bridges` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. GPS = Number fields. Toolbar map → gis deep-link only · **cấm** canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có cầu» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| GPS thiếu bắt buộc | validation toast field · **cấm** silent save |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge form passport / Sổ 6 vào biểu Cục  
- Guid làm IdCode  
- Invent map canvas trên list  
- yarn build / e2e ở role data_analy  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| generatedAt | 2026-09-05T07:55:00.000Z |
| versionGate | ok |
| taskId | task_dd8553f8 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2 -->
