# Real-data bind — csdl-bieu-08 (Kind B list + Kind D Slideout · traffic-safety)

| | |
|---|---|
| feature | `csdl-bieu-08` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a21c4937` |
| resource | `traffic-safety` |
| prefix | **live shell** `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` · typed DTO **SA** |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` · hub `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety` |
| map | `none` · **cấm** invent map canvas |
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| sourceTables | shell `rmms_csdl_catalog_records` · typed `Schema_CsdlBieu8` + children (**SA/migration**) |
| catalogKind UI schema | `traffic-safety` (typed) · fallback hub `csdl-records` |
| IdCode prefix | `AT` |

## § Delta Current vs New (`new_page` · `task_a21c4937`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Form | 3 ô `detail*` polymorphic | Typed 45 cột / 11 nhóm · `assetType` + child · **cấm** wide 1 row |
| List cols | generic road/km/detail | Shared + subset theo type · filter `assetType` / `?type=` |
| formNo | Demo/live **7** | Renumber **8** · giữ resource key · **T-REN-01** |
| API | `GET/POST/PUT/DELETE …/csdl-records?resource=traffic-safety` | **giữ prefix** · widen payload / child tables — SA |
| Import | stub | Sheet 45 cột merge — OUT XLS |
| Peer | so-ts ATGT types | Deep-link · **cấm** merge form · **≠** road-assets |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/csdl-bieu-08.md` | — | version mismatch → gate |
| `analy` | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § Biểu 8 | — | 45 cột · 11 nhóm · GAP-CSDL-CUC-08 |
| `db-ssot` | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` § TrafficSafetyAsset | — | children entities (số biểu cũ 7) |
| `demo` | `Linm.RMMS.Demo/.../csdl-so-sach.html` (+ redirect demo · `csdl-so-sach-data.js`) | — | **UI only** · **cấm** SSOT data |
| `api` · list | `GET …/csdl-records?resource=traffic-safety&type=&…` | empty grid VN | 422 thiếu resource · toast |
| `api` · detail | `GET …/csdl-records/{id}` | — | 404 → đóng slideout · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `entity` | `CsdlCatalogRecordEntity` (shell) | — | tenant `CompanyCode` |
| `entity` | typed Biểu 8 + children (**SA**) | — | Schema_CsdlBieu8 pair · **cấm** wide |
| `mfe` | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic | typed replace |
| `catalog` | Integration ui-schema `traffic-safety` | bootstrap cols | toast |
| `excel` | `1. Biểu mẫu CSDL.xls` sheet Biểu 8 | — | import cite · not runtime SSOT |
| `peer` | so-ts ATGT types · type-grid | — | deep-link only · **cấm** bind biểu Cục vào road-assets |
| `derived` | IdCode `AT-yyyyMMdd-nnnn` | — | BE generate |

`sourceCite` = path/controller **có trong repo** hoặc analy Excel cite. **Cấm** invent `api/v1/so-ts/*` · **cấm** ERP.*.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| resource | Resource | QS / const | — | required `traffic-safety` | `resource` | yes |
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| province | Tỉnh | Dropdown | LOOKUP_STATIC | `?province=` | `province` | yes |
| status | TT | Dropdown | LOOKUP_STATIC | `?status=` | `status` | yes |
| roadCode | Đường | SearchInput | road-route | `?roadCode=` / detail | `roadCode` (+ display `roadName`) | yes · **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Km từ–đến | Number | — | filter / detail | `kmFrom` / `kmTo` | yes |
| side | Vị trí | Dropdown | LOOKUP_STATIC | filter / detail / list | `side` | yes |
| assetType | Chủng loại | Dropdown | LOOKUP_STATIC | `?type=` / detail / list | `assetType` | yes · **GAP-BIEU08-TYPE-01** |
| code | Mã | Text ro | — | detail `code` | auto | yes |
| signCode … signPoleHeightM | Biển | Text/Number | — | detail / list | child fields | yes · type=TRAFFIC_SIGN |
| markerKind … markerAreaM2 | Cọc/Km | Dropdown/Number | LOOKUP_STATIC | detail / list | child | yes · MARKER_POST |
| medianKind … medianHeightM | GPC | Dropdown/Number | — | detail / list | child | yes · MEDIAN |
| antiGlareKind … antiGlareLengthM | Chống chói | Dropdown/Number | — | detail / list | child | yes · ANTI_GLARE |
| islandType … islandAreaM2 | Đảo | Dropdown/Number | — | detail / list | child | yes · TRAFFIC_ISLAND |
| studSize / studQty | Đinh PQ | Text/Number | — | detail / list | child | yes · ROAD_STUD |
| guardrailKind … guardrailReflector | Hộ lan | Dropdown/Number | — | detail / list | child | yes · GUARDRAIL |
| markCode … markAreaM2 | Vạch sơn | Text/Number | — | detail / list | child | yes · ROAD_MARKING |
| cushionQty | Thùng GC | Number | — | detail / list | child | yes · CRASH_CUSHION |
| mirrorQty | Gương | Number | — | detail / list | child | yes · CONVEX_MIRROR |
| signalPoleKind … lampQty | Đèn | Dropdown/Number | — | detail / list | child | yes · TRAFFIC_SIGNAL |
| builtYear | Năm | Number | — | detail / list | `builtYear` | yes |
| manageUnit | ĐV QL | Text | — | detail / list | `manageUnit` | yes · **GAP-CSDL-ORG-01** |
| notes | Ghi chú | Textarea | — | detail | `notes` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |

**Prefix map:**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=traffic-safety` (+ optional `type=`) |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=traffic-safety` + typed/child fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |

API mirror: `api/v1/asset/csdl-records`. FE cite hub: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** cùng BASE.

DB SSOT child map (SA · số biểu cũ 7): `TrafficSign`↔TRAFFIC_SIGN · `RoadMarkerPost`↔MARKER_POST · `MedianBarrier`↔MEDIAN · `AntiGlarePanel`↔ANTI_GLARE · `TrafficIsland`↔TRAFFIC_ISLAND · `RoadStud`↔ROAD_STUD · `Guardrail`↔GUARDRAIL · `RoadMarking`↔ROAD_MARKING · `CrashCushion`↔CRASH_CUSHION · `ConvexMirror`↔CONVEX_MIRROR · `TrafficSignal`↔TRAFFIC_SIGNAL.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC province | FE `PROVINCES` P1 | demo align | Dropdown demo-only làm SSOT quốc gia |
| LOOKUP_STATIC status | tot/tb/kem/hong | — | — |
| LOOKUP_STATIC side | L / R / C / Both | demo `sides` | invent side set |
| LOOKUP_STATIC assetType | 11 enum trên | analy · Excel Biểu 8 | free-text chủng loại |
| LOOKUP_STATIC markerKind | cọc tiêu / H / Km / dẻo / thủy chí | Excel · **Q-MARKER-KIND** | invent khi đã LOOKUP |
| road-route | `GET /integration/road-routes/search` | shared catalog READY | free-text khi đã chốt SearchInput |
| org-unit | `GET /integration/org-units/search` | shared org · P2 | hardcode ĐV |
| ui-schema | Integration `traffic-safety` | Schema editor | generic 3-col only |

## §D — Map / vẽ

`none` — list pack. Toolbar map → gis deep-link only. **Cấm** invent map canvas.

## §E — Empty / error / permission

| Case | UX |
|------|-----|
| Empty list | Grid copy VN «Chưa có hệ thống ATGT» · CTA Tạo mới |
| 422 thiếu resource | toast · không alert |
| 404 detail | đóng slideout · toast |
| Soft-delete | row biến mất · list refresh |
| Permission | CommonLib Auth debt · **cấm** invent path |

## §F — Cấm

- Demo / localStorage / seed giả làm SSOT runtime  
- ERP.* / Domains/Master / `api/v1/infra/*` / invent `api/v1/so-ts/*`  
- Form chỉ 3 ô `detail*` · **1 entity wide 45 cột**  
- Merge form Sổ TS ATGT / bind `road-assets` vào biểu Cục  
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
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| generatedAt | 2026-09-05T16:58:08.958Z |
| versionGate | ok |
| taskId | task_a21c4937 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be -->
