# Real-data bind — csdl-bieu-14 (Kind B list + Kind D Slideout · its-systems)

| | |
|---|---|
| feature | `csdl-bieu-14` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_db0e2ea1` |
| resource | `its-systems` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=its-systems` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu14` / `ItsSystem` (**SA/migration**) |
| catalogKind UI schema | `its-systems` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `IT` (**Q-PREFIX**) |
| peerSoTs | `so-ts-its-camera` · **cấm** merge so-ts-* · **cấm** reuse `road-assets` / dumpSpecs làm SSOT biểu |

## § Delta Current vs New (`new_page` · `task_db0e2ea1`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Hub | 12 biểu · **MISSING** Biểu 14 | NEW card · resource `its-systems` · formNo **14** |
| Form | N/A / 3 ô `detail*` nếu bootstrap | Typed **21 cột** · device + infra + GPS |
| List cols | generic | Shared + deviceType/brand/operatingStatus/infraKind |
| formNo | — | **14** · title «Hệ thống ITS (GTTM)» |
| API | shell `csdl-records` · resource chưa đăng ký | **giữ prefix** · register `its-systems` + typed payload — SA |
| DB SSOT | Doc chỉ Biểu 1–12 | Schema_CsdlBieu14 · **GAP-BIEU14-DB-01** |
| Import | stub | Sheet 21 cột merge — OUT XLS |
| Peer | `so-ts-its-camera` / `road-assets?type=ITS_CAMERA` | **cấm** merge · ROW riêng · **GAP-CSDL-CUC-11** |
| ITS MFE | `its-traffic-detect` · `its-anpr-overload` | **cấm** bind runtime · **GAP-BIEU14-PEER-ITS-01** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-14.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 14 | — | 21 cột · MISSING hub |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | **thiếu** § Biểu 14 | **GAP-BIEU14-DB-01** · SA viết entity |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect · `csdl-so-sach-data.js`) | hub thiếu card | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=its-systems&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 14 / `ItsSystem` (**SA**) | — | Schema_CsdlBieu14 pair |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic / missing card | typed + hub card |
| `catalog` | Integration ui-schema `its-systems` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 14 | — | import cite · not runtime SSOT |
| `peer` | `so-ts-its-camera` · `api/v1/asset/road-assets` | — | **cite only** · **cấm** bind runtime |
| `derived` | IdCode `IT-yyyyMMdd-nnnn` | — | BE generate · **Q-PREFIX** |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.* · **cấm** invent `api/v1/infra/*` (doc legacy) · **cấm** bind peer `road-assets` / ITS AiVision làm list biểu.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `its-systems` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| operatingStatus | TT HĐ | Dropdown | LOOKUP_STATIC | `?operatingStatus=` | `operatingStatus` | yes |
| deviceType | Loại TB | Dropdown | LOOKUP_STATIC | `?deviceType=` | `deviceType` | yes · **GAP-BIEU14-DEV-01** |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Km từ–đến | Number | — | filter / detail | `kmFrom` / `kmTo` | yes |
| side | Vị trí | Dropdown | LOOKUP_STATIC | filter / detail / list | `side` | yes |
| direction | Hướng tuyến | Dropdown/Text | — | detail / list | `direction` | yes · **Q-DIR** |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| gpsLat / gpsLng | GPS | Number | — | detail / list | `gpsLat` / `gpsLng` | yes · **GAP-BIEU14-GPS-01** |
| brand | Hãng | Text | — | detail / list | `brand` | yes |
| techSpec | TS | Text | — | detail | `techSpec` | yes |
| qtyOrLength | SL/dài | Number/Text | — | detail / list | `qtyOrLength` | yes · **Q-QTY-UNIT** |
| infraKind | Hạ tầng | Dropdown | LOOKUP_STATIC | detail / list | `infraKind` | yes · **GAP-BIEU14-INFRA-01** |
| clearanceM | KC (m) | Number | — | detail / list | `clearanceM` | yes |
| infraQty | SL HT | Number | — | detail / list | `infraQty` | yes |
| systemStatus | TT HT | Dropdown | LOOKUP_STATIC | detail / list | `systemStatus` | yes |
| yearBuilt | Năm | Number | — | detail / list | `yearBuilt` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=its-systems` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=its-systems` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB đề xuất map: `DeviceType`↔`deviceType` · `Brand`↔`brand` · `TechSpec`↔`techSpec` · `QtyOrLength`↔`qtyOrLength` · `OperatingStatus`↔`operatingStatus` · `InfraKind`↔`infraKind` · `ClearanceM`↔`clearanceM` · `InfraQty`↔`infraQty` · `SystemStatus`↔`systemStatus` · `YearBuilt`↔`yearBuilt` · `GpsLat`/`GpsLng` · `Direction` (**SA** confirm Excel).

**Cấm** bind: `api/v1/asset/road-assets?type=ITS_CAMERA` · dumpSpecs peer · invent `api/v1/infra/its-systems` · `its-traffic-detect` · `its-anpr-overload` APIs.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC operatingStatus | tot/tb/kem/hong hoặc on/off · **Q** | — | invent set không cite Excel |
| LOOKUP_STATIC deviceType | cáp / CCTV / ANPR / VMS / tủ | analy § Biểu 14 | expand không confirm |
| LOOKUP_STATIC infraKind | cần vươn / long môn / đế BT | analy | invent |
| LOOKUP_STATIC side | L / R / C / Both | demo `sides` | invent side set |
| LOOKUP_STATIC systemStatus | align operatingStatus hoặc riêng | **Q** | invent |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `its-systems` | Schema editor | generic 3-col only |
| asset-type peer | — | — | **cấm** dùng làm SSOT biểu Cục |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. **Cấm** invent map canvas trên list.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có hệ thống ITS» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*`  
- Merge / reuse `so-ts-its-camera` form · `road-assets` · dumpSpecs · ITS AiVision/Camera APIs làm list biểu  
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
| contentHash | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| generatedAt | 2026-09-05T14:30:00.000Z |
| versionGate | ok |
| taskId | task_db0e2ea1 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112 -->
