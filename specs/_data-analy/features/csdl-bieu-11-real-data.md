# Real-data bind — csdl-bieu-11 (Kind B list + Kind D Slideout · lighting-systems)

| | |
|---|---|
| feature | `csdl-bieu-11` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ed491c32` |
| resource | `lighting-systems` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-11` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu11` / `LightingSystem` (**SA/migration**) |
| catalogKind UI schema | `lighting-systems` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `LT` |
| peerSoTs | `so-ts-lighting` · type `LIGHTING` · deep-link only · bucket qty ≠ điểm |

## § Delta Current vs New (`new_page` · `task_ed491c32`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 24 cột · LED qty 4 mức · TT/cột/tủ/TBA · NLMT 6 field |
| List cols | generic road/km/detail | Shared + typed grid/solar fields |
| formNo | Demo/live **11** | **giữ 11** · title «Hệ thống chiếu sáng» |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=lighting-systems` | **giữ prefix** · widen typed payload — SA |
| Import | stub | Sheet 24 cột merge — OUT XLS |
| Peer | `so-ts-lighting` | **≠** road-assets / merge form · **GAP-CSDL-CUC-11** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-11.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 11 | — | 24 cột · LED + NLMT qty |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § LightingSystem | — | GridLed* · GridStatus · GridPoleCount · CabinetCount · SubstationCount · Solar* |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo · `csdl-so-sach-data.js`) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=lighting-systems&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 11 / `LightingSystem` (**SA**) | — | Schema_CsdlBieu11 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `lighting-systems` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 11 | — | import cite · not runtime SSOT |
| `peer` | `so-ts-lighting` / type `LIGHTING` | — | deep-link · **cấm** share ROW |
| `derived` | IdCode `LT-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.* · **cấm** invent `api/v1/infra/*` (doc legacy).

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `lighting-systems` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Km từ–đến | Number | — | filter / detail | `kmFrom` / `kmTo` | yes |
| side | Vị trí | Dropdown | LOOKUP_STATIC | filter / detail / list | `side` | yes |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| gridLed600 | LED 600W | Number | — | detail / list | `gridLed600` | yes · **GAP-BIEU11-GRID-01** |
| gridLed240 | LED 240W | Number | — | detail / list | `gridLed240` | yes |
| gridLed150 | LED 150W | Number | — | detail / list | `gridLed150` | yes |
| gridLed125 | LED 125W | Number | — | detail / list | `gridLed125` | yes |
| gridStatus | TT lưới | Dropdown | LOOKUP_STATIC | detail / list | `gridStatus` | yes |
| gridPoleCount | Số cột lưới | Number | — | detail / list | `gridPoleCount` | yes |
| cabinetCount | Số tủ lưới | Number | — | detail / list | `cabinetCount` | yes |
| substationCount | Số TBA | Number | — | detail / list | `substationCount` | yes |
| solarPoleCount | Cột THGT | Number | — | detail | `solarPoleCount` | yes · **GAP-BIEU11-SOLAR-01** |
| solarControllerCount | Bộ ĐK | Number | — | detail | `solarControllerCount` | yes |
| solarPanel240Wp | Pin 240Wp | Number | — | detail | `solarPanel240Wp` | yes |
| solarLamp100W | Đèn pha 100W | Number | — | detail | `solarLamp100W` | yes |
| solarBattery145Ah | Acquy 145Ah | Number | — | detail | `solarBattery145Ah` | yes |
| solarCabinetCount | Tủ NLMT | Number | — | detail | `solarCabinetCount` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=lighting-systems` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=lighting-systems` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB SSOT map: `GridLed600`↔`gridLed600` · `GridLed240`↔`gridLed240` · `GridLed150`↔`gridLed150` · `GridLed125`↔`gridLed125` · `GridStatus`↔`gridStatus` · `GridPoleCount`↔`gridPoleCount` · `CabinetCount`↔`cabinetCount` · `SubstationCount`↔`substationCount` · Solar* ↔ solar* camelCase (**SA** confirm exact Solar column names).

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L / R / C / Both | demo `sides` | invent side set |
| LOOKUP_STATIC gridStatus | Excel / align status · **Q-GRID-STATUS** | analy | free-text TT lưới |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `lighting-systems` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. **Cấm** invent map canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có hệ thống chiếu sáng» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge form Sổ TS `so-ts-lighting` / bind `road-assets` vào biểu Cục  
- Dump điểm Sổ TS vào qty bucket LED/solar  
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
| contentHash | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| generatedAt | 2026-09-05T12:11:10.761Z |
| versionGate | ok |
| taskId | task_ed491c32 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8 -->
