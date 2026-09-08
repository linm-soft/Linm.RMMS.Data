# Real-data bind — csdl-bieu-06 (Kind B list + Kind D Slideout · underpasses)

| | |
|---|---|
| feature | `csdl-bieu-06` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b6ef926c` |
| resource | `underpasses` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-06` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu6` (**SA/migration**) |
| catalogKind UI schema | `underpasses` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `HC` |

## § Delta Current vs New (`new_page` · `task_b6ef926c`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 19 cột Excel Biểu 6 · gồm hộp KT |
| List cols | generic road/km/detail | Cột typed khẩu độ · số ống · thân/cửa · dài · tải · mặt trong · chiếu sáng · thoát · năm · loại |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=underpasses` | **giữ prefix** · widen payload / typed table — SA |
| Import | stub | Sheet 19 cột — OUT XLS |
| Peer | `so-ts-underpass` Sổ TS (`road-assets`) | Deep-link · **cấm** merge form · **≠** so-ts-underpass |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-06.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 6 | — | 19 cột SSOT |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § Underpass | — | field names |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo · `csdl-so-sach-data.js`) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=underpasses&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 6 (**SA**) | — | Schema_CsdlBieu6 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `underpasses` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 6 | — | import cite · not runtime SSOT |
| `peer` | `so-ts-underpass` · type `UNDERPASS` · `api/v1/asset/road-assets` | — | deep-link only · **cấm** bind biểu Cục vào road-assets |
| `derived` | IdCode `HC-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `underpasses` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmPoint | Km | Number | — | filter / detail | `kmPoint` | yes · **GAP-BIEU06-POINT-01** |
| underpassKind | Loại | Dropdown | LOOKUP_STATIC | filter / detail / list | `underpassKind` | yes · **GAP-BIEU06-KIND-01** |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| apertureM | Khẩu độ | Number | — | detail / list | `apertureM` | yes · **Q-APERTURE** |
| pipeCount | Số ống | Number | — | detail / list | `pipeCount` | yes · **GAP-BIEU06-PIPE-01** |
| bodyStructure | KC thân | Dropdown/Text | LOOKUP_STATIC | detail / list | `bodyStructure` | yes |
| portalStructure | KC cửa | Dropdown/Text | LOOKUP_STATIC | detail / list | `portalStructure` | yes |
| lengthM | Cdài | Number | — | detail / list | `lengthM` | yes |
| designLoad | Tải | Dropdown/Text | LOOKUP_STATIC | detail / list | `designLoad` | yes · **GAP-BIEU06-LOAD-01** |
| pavementInside | Mặt trong | Dropdown | LOOKUP_STATIC | detail / list | `pavementInside` | yes · **GAP-BIEU06-PAVE-01** |
| lighting | Chiếu sáng | Text/Dropdown | — | detail / list | `lighting` | yes · **Q-LIGHT** |
| drainage | Thoát nước | Text/Dropdown | — | detail / list | `drainage` | yes · **Q-DRAIN** |
| builtYear | Năm | Number | — | detail / list | `builtYear` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=underpasses` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=underpasses` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB SSOT map (SA): `UnderpassCode`↔`code` · `ApertureM`↔`apertureM` · `BodyStructure`↔`bodyStructure` · `PortalStructure`↔`portalStructure` · `LengthM`↔`lengthM` · `DesignLoad`↔`designLoad` · `PavementInside`↔`pavementInside` · `Lighting`↔`lighting` · `Drainage`↔`drainage` · `BuiltYear`↔`builtYear`. `pipeCount` / `underpassKind` = Excel/analy widen — SA migration.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC underpassKind | hầm chui DS / hộp KT | CTX + Excel Biểu 6 · **Q-KIND** | free-text loại |
| LOOKUP_STATIC pavementInside | BTXM / BTN | analy | invent pavement set |
| LOOKUP_STATIC designLoad | HL93 / H30 / khác | Excel · **Q-LOAD** | invent load set khi đã LOOKUP |
| LOOKUP_STATIC body/portal | BT / BTCT / đá xây / khác | Excel | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `underpasses` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only (`cong-chui` peer optional). **Cấm** invent map canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có hầm chui / hộp KT» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge form Sổ TS `so-ts-underpass` / bind `road-assets` vào biểu Cục  
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
| contentHash | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| generatedAt | 2026-09-05T07:12:53.176Z |
| versionGate | ok |
| taskId | task_b6ef926c |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0 -->
