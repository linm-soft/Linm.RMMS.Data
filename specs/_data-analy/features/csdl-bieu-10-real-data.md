# Real-data bind — csdl-bieu-10 (Kind B list + Kind D Slideout · retaining-walls)

| | |
|---|---|
| feature | `csdl-bieu-10` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_6b4b8a1b` |
| resource | `retaining-walls` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-10` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprint | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu10` / `RetainingWall` (+ optional `CrestDitch`) (**SA/migration**) |
| catalogKind UI schema | `retaining-walls` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `KE` |
| peerSoTs | `so-ts-retaining` · type `RETAINING` · deep-link only |

## § Delta Current vs New (`new_page` · `task_6b4b8a1b`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 21 cột · wallKind + KC/VL/dài/cao/DT · rãnh đỉnh 4 field · năm SD |
| List cols | generic road/km/detail | Shared + typed wall/crest fields · filter `wallKind` |
| formNo | Demo/live **9** | Renumber **10** · giữ resource key · **T-REN-01** |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=retaining-walls` | **giữ prefix** · widen typed payload — SA |
| Import | stub | Sheet 21 cột merge — OUT XLS |
| Peer | `so-ts-retaining` | **≠** road-assets / merge form · **GAP-CSDL-CUC-11** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-10.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 10 | — | 21 cột · chủng · rãnh đỉnh · năm SD |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § RetainingWall | — | WallKind · Structure · Material · LengthM · WidthM · AreaM2 · CrestDitch* · InServiceYear (số biểu cũ 9) |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo · `csdl-so-sach-data.js`) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=retaining-walls&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 10 / `RetainingWall` (**SA**) | — | Schema_CsdlBieu10 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `retaining-walls` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 10 | — | import cite · not runtime SSOT |
| `peer` | `so-ts-retaining` / type `RETAINING` | — | deep-link · **cấm** share ROW |
| `derived` | IdCode `KE-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `retaining-walls` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Km từ–đến | Number | — | filter / detail | `kmFrom` / `kmTo` | yes |
| side | Vị trí | Dropdown | LOOKUP_STATIC | filter / detail / list | `side` (↔ WallSide) | yes |
| wallKind | Loại kè/tường | Dropdown | LOOKUP_STATIC | `?wallKind=` / detail / list | `wallKind` | yes · **GAP-BIEU10-KIND-01** |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| structure | Kết cấu | Dropdown | LOOKUP_STATIC | detail / list | `structure` | yes |
| material | Vật liệu | Dropdown | LOOKUP_STATIC | detail / list | `material` | yes |
| lengthM | Dài (m) | Number | — | detail / list | `lengthM` | yes |
| heightM | Cao (m) | Number | — | detail / list | `heightM` (DB WidthM · **Q-HEIGHT**) | yes |
| areaM2 | DT (m²) | Number | — | detail / list | `areaM2` | yes |
| crestDitchKind | Rãnh đỉnh — loại | Dropdown | LOOKUP_STATIC | detail | `crestDitchKind` | yes |
| crestDitchStructure | Rãnh đỉnh — KC | Dropdown | LOOKUP_STATIC | detail | `crestDitchStructure` | yes |
| crestDitchShape | Rãnh đỉnh — hình | Dropdown | LOOKUP_STATIC | detail | `crestDitchShape` | yes |
| crestDitchLengthM | Rãnh đỉnh — dài | Number | — | detail | `crestDitchLengthM` | yes |
| inServiceYear | Năm SD | Number | — | detail / list | `inServiceYear` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=retaining-walls` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=retaining-walls` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB SSOT map (số biểu cũ 9 → typed Biểu 10): `WallKind`↔`wallKind` · `Structure`↔`structure` · `Material`↔`material` · `LengthM`↔`lengthM` · `WidthM`↔`heightM` (**Q-HEIGHT**) · `AreaM2`↔`areaM2` · `CrestDitchKind/Structure/LengthM`↔ crest* · `InServiceYear`↔`inServiceYear`. `crestDitchShape` = Excel widen — SA confirm.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L / R / C / Both | demo `sides` | invent side set |
| LOOKUP_STATIC wallKind | trọng lực / rọ / BTCT / tường chắn | analy · Excel · **Q-KIND** | free-text loại kè |
| LOOKUP_STATIC structure | Excel seed | Excel · **Q-STRUCT** | invent khi đã LOOKUP |
| LOOKUP_STATIC material | Excel / demo «BT đá hộc»… | Excel · **Q-MAT** | invent set mù |
| LOOKUP_STATIC crestDitch* | loại / KC / hình | Excel · **Q-CREST** | bắt buộc khi optional |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `retaining-walls` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. **Cấm** invent map canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có kè / tường chắn» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge form Sổ TS `so-ts-retaining` / bind `road-assets` vào biểu Cục  
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
| contentHash | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprint | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| generatedAt | 2026-09-05T11:25:00.000Z |
| versionGate | ok |
| taskId | task_6b4b8a1b |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346 -->
