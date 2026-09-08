# Real-data bind — csdl-bieu-04 (Kind B list + Kind D Slideout · culverts)

| | |
|---|---|
| feature | `csdl-bieu-04` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ea0d8d57` |
| resource | `culverts` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=culverts` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprint | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu4` (**SA/migration**) |
| catalogKind UI schema | `culverts` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `CG` |

## § Delta Current vs New (`new_page` · `task_ea0d8d57`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 17 cột Excel Biểu 4 |
| List cols | generic road/km/detail | Cột typed km · khẩu độ · hình · dài · tải · năm · TT |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=culverts` | **giữ prefix** · widen payload / typed table — SA |
| Import | stub | Sheet 17 cột — OUT XLS |
| Peer | `so-ts-culvert-x` Sổ TS | Deep-link · **cấm** merge form |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-04.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 4 | — | 17 cột SSOT |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=culverts&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 4 (**SA**) | — | Schema_CsdlBieu4 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `culverts` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 4 | — | import cite · not runtime SSOT |
| `peer` | `so-ts-culvert-x` · type `CULVERT_X` | — | deep-link only |
| `derived` | IdCode `CG-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `culverts` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmPoint | Km điểm | Number | — | filter / detail | `kmPoint` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| gpsCulvertX | GPS cống X | Number | — | detail | `gpsCulvertX` | yes · **GAP-BIEU04-GPS-01** |
| gpsCulvertY | GPS cống Y | Number | — | detail | `gpsCulvertY` | yes |
| gpsRoadX | GPS đường X | Number | — | detail | `gpsRoadX` | yes |
| gpsRoadY | GPS đường Y | Number | — | detail | `gpsRoadY` | yes |
| apertureM | Khẩu độ | Number | — | detail / list | `apertureM` | yes |
| shape | Hình | Dropdown | LOOKUP_STATIC | detail / list | `shape` | yes · **GAP-BIEU04-SHAPE-01** |
| bodyMaterial | Thân | Dropdown/Text | LOOKUP_STATIC | detail | `bodyMaterial` | yes |
| inletUpstream | Đầu T.Lưu | Text/Dropdown | — | detail | `inletUpstream` | yes |
| outletDownstream | Đầu H.Lưu | Text/Dropdown | — | detail | `outletDownstream` | yes |
| lengthM | Cdài | Number | — | detail / list | `lengthM` | yes |
| loadClass | Tải | Text/Dropdown | — | detail / list | `loadClass` | yes · **Q-LOAD** |
| builtYear | Năm | Number | — | detail / list | `builtYear` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| side | Bên | Dropdown | LOOKUP_STATIC | detail | `side` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=culverts` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=culverts` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L/R/C/Both | — | — |
| LOOKUP_STATIC shape | hộp / tròn | Excel Biểu 4 | free-text hình dạng |
| LOOKUP_STATIC bodyMaterial | BT / BTCT / thép / khác | Excel | — |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `culverts` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. GPS fields = số liệu form · **không** canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có cống» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / `api/v1/so-ts/*` invent  
- Form chỉ 3 ô `detail*`  
- Merge form Sổ TS `so-ts-culvert-x` vào biểu Cục  
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
| contentHash | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprint | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| generatedAt | 2026-09-05T05:52:43.665Z |
| versionGate | ok |
| taskId | task_ea0d8d57 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6 -->
