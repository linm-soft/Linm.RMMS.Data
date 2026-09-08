# Real-data bind — csdl-bieu-09 (Kind B list + Kind D Slideout · boundary-markers)

| | |
|---|---|
| feature | `csdl-bieu-09` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b7a89508` |
| resource | `boundary-markers` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprint | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu9` / `BoundaryMarker` (**SA/migration**) |
| catalogKind UI schema | `boundary-markers` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `MK` |

## § Delta Current vs New (`new_page` · `task_b7a89508`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 17 cột · `markerKind` + KC/DT/SL/năm HT · 2 khối LG/GPMB |
| List cols | generic road/km/detail | Shared + typed marker fields · filter `markerKind` |
| formNo | Demo/live **8** | Renumber **9** · giữ resource key · **T-REN-01** |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=boundary-markers` | **giữ prefix** · widen typed payload — SA |
| Import | stub | Sheet 17 cột merge — OUT XLS |
| Peer | — | **≠** road-assets / so-ts · **GAP-CSDL-CUC-11** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-09.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 9 | — | 17 cột · 2 khối LG/GPMB |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § BoundaryMarker | — | MarkerKind · Structure · AreaM2 · CompletedYear (số biểu cũ 8) |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo · `csdl-so-sach-data.js`) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=boundary-markers&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 9 / `BoundaryMarker` (**SA**) | — | Schema_CsdlBieu9 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `boundary-markers` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 9 | — | import cite · not runtime SSOT |
| `derived` | IdCode `MK-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `boundary-markers` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Km từ–đến | Number | — | filter / detail | `kmFrom` / `kmTo` | yes |
| side | Vị trí | Dropdown | LOOKUP_STATIC | filter / detail / list | `side` | yes |
| markerKind | Loại mốc | Dropdown | LOOKUP_STATIC | `?markerKind=` / detail / list | `markerKind` | yes · **GAP-BIEU09-KIND-01** |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| markerStructure | Kết cấu | Dropdown | LOOKUP_STATIC | detail / list | `markerStructure` | yes |
| markerLengthM | Dài (m) | Number | — | detail / list | `markerLengthM` | yes |
| markerWidthM | Rộng (m) | Number | — | detail / list | `markerWidthM` | yes |
| markerAreaM2 | DT (m²) | Number | — | detail / list | `markerAreaM2` | yes |
| markerQty | SL | Number | — | detail / list | `markerQty` | yes |
| completedYear | Năm HT | Number | — | detail / list | `completedYear` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=boundary-markers` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=boundary-markers` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB SSOT map (số biểu cũ 8 → typed Biểu 9): `MarkerKind`↔`markerKind` · `Structure`↔`markerStructure` · `AreaM2`↔`markerAreaM2` · `CompletedYear`↔`completedYear`. Length/Width/Qty = Excel widen — SA confirm.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L / R / C / Both | demo `sides` | invent side set |
| LOOKUP_STATIC markerKind | RoadLimit / GPMB | analy · DB SSOT · Excel | free-text loại mốc |
| LOOKUP_STATIC markerStructure | bê tông / đá / khác… | Excel · **Q-STRUCT** | invent khi đã LOOKUP |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `boundary-markers` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. **Cấm** invent map canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có mốc lộ giới / GPMB» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge form Sổ TS / bind `road-assets` vào biểu Cục  
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
| contentHash | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprint | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| generatedAt | 2026-09-05T10:50:00.000Z |
| versionGate | ok |
| taskId | task_b7a89508 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4 -->
