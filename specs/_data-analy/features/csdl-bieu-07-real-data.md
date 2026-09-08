# Real-data bind — csdl-bieu-07 (Kind B list + Kind D Slideout · shoulders-fences)

| | |
|---|---|
| feature | `csdl-bieu-07` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_480d8882` |
| resource | `shoulders-fences` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-07` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu7` (**SA/migration**) |
| catalogKind UI schema | `shoulders-fences` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `LE` |

## § Delta Current vs New (`new_page` · `task_480d8882`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 20 cột Excel Biểu 7 · 3 khối lề / taluy / HR |
| List cols | generic road/km/detail | Cột typed KC lề · dài/rộng/DT · taluy · fenceKind · số cột · dài km |
| formNo | Demo/live **10** | Renumber **7** · giữ resource key · **T-REN-01** |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=shoulders-fences` | **giữ prefix** · widen payload / typed table — SA |
| Import | stub | Sheet 20 cột — OUT XLS |
| Peer | type `SHOULDER` (chưa enqueue so-ts) | Deep-link · **cấm** merge form · **≠** road-assets |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-07.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 7 | — | 20 cột SSOT · 3 khối |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § ShoulderFence | — | field names (số biểu cũ 10) |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo · `csdl-so-sach-data.js`) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=shoulders-fences&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 7 (**SA**) | — | Schema_CsdlBieu7 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `shoulders-fences` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 7 | — | import cite · not runtime SSOT |
| `peer` | type `SHOULDER` · so-ts-type-grid | — | deep-link only · **cấm** bind biểu Cục vào road-assets |
| `derived` | IdCode `LE-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `shoulders-fences` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Km từ–đến | Number | — | filter / detail | `kmFrom` / `kmTo` | yes |
| side | Vị trí | Dropdown | LOOKUP_STATIC | filter / detail / list | `side` | yes · **Q-SIDE** |
| fenceKind | Loại HR | Dropdown/Text | LOOKUP_STATIC | filter / detail / list | `fenceKind` | yes · **GAP-BIEU07-FENCE-01** |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| shoulderStructure | KC lề | Dropdown/Text | LOOKUP_STATIC | detail / list | `shoulderStructure` | yes |
| shoulderLengthM | Dài lề | Number | — | detail / list | `shoulderLengthM` | yes |
| shoulderWidthM | Rộng lề | Number | — | detail / list | `shoulderWidthM` | yes |
| shoulderAreaM2 | DT lề | Number | — | detail / list | `shoulderAreaM2` | yes |
| slopeLengthM | Dài taluy | Number | — | detail / list | `slopeLengthM` | yes · map `SlopeClearingM` · **Q-SLOPE** |
| slopeAreaM2 | DT taluy | Number | — | detail / list | `slopeAreaM2` | yes |
| fencePostCount | Số cột | Number | — | detail / list | `fencePostCount` | yes |
| fenceLengthKm | Dài HR km | Number | — | detail / list | `fenceLengthKm` | yes · **Q-FENCE-LEN** |
| builtYear | Năm | Number | — | detail / list | `builtYear` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=shoulders-fences` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=shoulders-fences` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB SSOT map (SA): `ShoulderStructure`↔`shoulderStructure` · `ShoulderLengthM`↔`shoulderLengthM` · `ShoulderWidthM`↔`shoulderWidthM` · `ShoulderAreaM2`↔`shoulderAreaM2` · `SlopeClearingM`↔`slopeLengthM` (**Q-SLOPE**) · `FenceKind`↔`fenceKind` · `FencePostCount`↔`fencePostCount` · `FenceLengthM`↔`fenceLengthKm` (**Q-FENCE-LEN**) · `FencePanelCount` optional (**Q-PANEL**).

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L / R / Both | demo `side` | invent side set |
| LOOKUP_STATIC shoulderStructure | cứng / mềm / khác | Excel Biểu 7 · **Q-STRUCT** | free-text khi đã LOOKUP |
| LOOKUP_STATIC fenceKind | lưới / tôn / bê tông / khác | Excel · **Q-STRUCT** | invent fence set khi đã LOOKUP |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `shoulders-fences` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. **Cấm** invent map canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có lề / taluy / hàng rào» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge form Sổ TS `SHOULDER` / bind `road-assets` vào biểu Cục  
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
| contentHash | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| generatedAt | 2026-09-05T09:14:17.821Z |
| versionGate | ok |
| taskId | task_480d8882 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44 -->
