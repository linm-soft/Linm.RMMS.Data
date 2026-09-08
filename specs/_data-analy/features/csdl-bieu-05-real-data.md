# Real-data bind — csdl-bieu-05 (Kind B list + Kind D Slideout · ditches)

| | |
|---|---|
| feature | `csdl-bieu-05` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fdcb7c28` |
| resource | `ditches` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-05` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=ditches` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu5` (**SA/migration**) |
| catalogKind UI schema | `ditches` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `RN` |

## § Delta Current vs New (`new_page` · `task_fdcb7c28`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 18 cột Excel Biểu 5 |
| List cols | generic road/km/detail | Cột typed từ–đến · hở/kín · KC · hình · khẩu độ · dài · thoát · năm · TT |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=ditches` | **giữ prefix** · widen payload / typed table — SA |
| Import | stub | Sheet 18 cột — OUT XLS |
| Peer | `so-ts-ditch` Sổ TS | Deep-link · **cấm** merge form · **≠** so-ts-ditch |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-05.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 5 | — | 18 cột SSOT |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § Ditch | — | field names |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=ditches&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 5 (**SA**) | — | Schema_CsdlBieu5 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `ditches` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 5 | — | import cite · not runtime SSOT |
| `peer` | `so-ts-ditch` · type `DITCH` | — | deep-link only |
| `derived` | IdCode `RN-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `ditches` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom | Km từ | Number | — | filter / detail | `kmFrom` | yes · **GAP-BIEU05-RANGE-01** |
| kmTo | Km đến | Number | — | filter / detail | `kmTo` | yes |
| ditchKind | Hở/Kín | Dropdown | LOOKUP_STATIC | filter / detail / list | `ditchKind` | yes · **GAP-BIEU05-KIND-01** |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| side | Bên | Dropdown | LOOKUP_STATIC | detail / list | `side` | yes |
| structure | KC | Dropdown/Text | LOOKUP_STATIC | detail / list | `structure` | yes |
| shape | Hình | Dropdown | LOOKUP_STATIC | detail / list | `shape` | yes · **GAP-BIEU05-SHAPE-01** |
| apertureSize | Khẩu độ | Text/Number | — | detail / list | `apertureSize` | yes · **Q-APERTURE** |
| lengthM | Cdài | Number | — | detail / list | `lengthM` | yes |
| drainageCapacity | Thoát | Text/Number | — | detail / list | `drainageCapacity` | yes · **GAP-BIEU05-DRAIN-01** |
| builtYear | Năm | Number | — | detail / list | `builtYear` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| ownerUnit | ĐV SH | Text | — | detail | `ownerUnit` | yes |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=ditches` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=ditches` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L/R/C/Both | — | — |
| LOOKUP_STATIC ditchKind | hở / kín | Excel Biểu 5 · DB `DitchKind` | free-text loại |
| LOOKUP_STATIC shape | chữ nhật / thang / tròn | Excel · **Q-SHAPE** | invent shape set |
| LOOKUP_STATIC structure | BT / BTCT / đá xây / khác | Excel | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `ditches` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. **Cấm** invent map canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có rãnh» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / `api/v1/so-ts/*` invent  
- Form chỉ 3 ô `detail*`  
- Merge form Sổ TS `so-ts-ditch` vào biểu Cục  
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
| contentHash | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| generatedAt | 2026-09-05T06:30:58.027Z |
| versionGate | ok |
| taskId | task_fdcb7c28 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117 -->
