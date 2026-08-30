# Real-data bind — org-route-scope (Phân khu lý trình · zone km)

| | |
|---|---|
| feature | `org-route-scope` |
| packKind | `master` |
| changeScope | `new_page` (lớp gán mới · peers live giữ) |
| status | `done` |
| taskId | `task_8a74dc46` |
| prefix | peers **live** `web-bff/api/v1/integration` → API `api/v1/integration` · zone assignment API = **GAP** đến SA |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| mfeStdRoute | `/mas/phan-khu` |
| map | `none` (catalog list/form · LRS SearchInput 3 bước — **cấm** invent map canvas) |
| demo | **N/A** (`master-catalog-no-demo.md`) |
| contentHash | `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |

## § Delta Current vs New (`new_page` · `task_8a74dc46`)

| ID | Current | New |
|----|---------|-----|
| Artifacts | draft stubs | §A–§G filled · status **done** |
| Zone page | **0** MFE route `/mas/phan-khu` | Kind B list + form gán · nested đoạn **GAP** |
| Zone API / entity | **0** | SA `Schema_*` · DOMAIN-MAP row · **cấm** invent path live |
| Peer catalogs | org-unit / road-route / partner-unit **live** Integration | **giữ** — cite lookup only |
| Seed gán | dump **gap-no-source** | **0** invented-seed (**GOV-IMP-01/03**) |
| SearchInput org | live **mix** Sở (GAP-ORS-UI-01) | tree DRVN-only · partner SearchInput tách |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/org-route-scope.md` | — | version mismatch → gate |
| `context` | `docs/context/20-ORG-STRUCTURE-DRVN.md` | — | org SSOT |
| `context` | `docs/context/24-TUAN-DUONG-DUONG-BO.md` §6 | — | LRS |
| `context` | `docs/context/features/{org-unit,road-route,partner-unit,pavement-section,users,login,import-gov-ssot}.md` | — | peers |
| `import` | `docs/context/seed/org-unit-seed.json` | tree trống | seed job · 60 nodes |
| `import` | `docs/context/features/import-gov-ssot.md` · set `gov-vn` `road_routes` | — | **không** có bảng gán zone |
| `catalog` | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | — | APPROVED A · archive CUC 2 **cấm** production SSOT gán |
| `api` · org-unit **live** | `OrgUnitsController` `api/v1/integration/org-units` (+ `/tree` · `/search` · `/init-data`) | empty tree | toast · **cấm** alert |
| `api` · road-route **live** | `RoadRoutesController` `api/v1/integration/road-routes` | empty list | toast |
| `api` · partner-unit **live** | `PartnerUnitsController` `api/v1/integration/partner-units` | empty list | toast |
| `api` · BFF peers | `…/Integration.Bff/Controllers/*BffController.cs` | — | proxy-only |
| `api` · zone assignment | **GAP** — chưa có controller/entity (DOMAIN-MAP thiếu slug) | grid trống | toast · **cấm** mock rows |
| `api` · đoạn child | **GAP** nested dưới assignment | — | toast |
| `api` · users assign cite | SPEC login `PUT …/admin/user/{id}/assign-routes` | — | peer · **không** đủ zone CRUD |
| `mfe` · peers | `src/pages/{OrgUnit,RoadRoute,PartnerUnit}ListPage/*` · `services/{orgUnit,roadRoute,partnerUnit}/endpoint.ts` | — | live Kind B |
| `mfe` · zone page | **GAP** — `src/index.tsx` **chưa** `/mas/phan-khu` | — | Design/Dev |
| `domain` | `docs/DOMAIN-MAP.md` Integration rows org-unit/road-route/partner-unit | — | **GAP-ORS-DM-01** slug |

`sourceCite` = file **có trong repo**. Zone CRUD path = **GAP** đến SA — **cấm** bịa endpoint như live (**GAP-DA-REAL-03**).

## §B — Bind field (HARD)

### B1 — Lookups peer (live · sameMfe=yes trên peer pages)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| zoneOrgCode | Khu | SearchInput tree | org-unit | `GET …/org-units/search?kind=REG` · `/tree` | `zoneOrgCode` | cite peer · zone page **gap** |
| routeCode | Tuyến chính | SearchInput | road-route | `GET …/road-routes/search` | `routeCode` | cite peer · filter QUOC_LO/HCM/CAO_TOC |
| assigneeCode (VP/SU) | Đơn vị | SearchInput tree | org-unit | `GET …/org-units/search` | `assigneeCode` | cite · kind VP/SU |
| assigneeCode (PARTNER) | Nhà thầu / Sở | SearchInput | partner-unit | `GET …/partner-units/search` | `assigneeCode` | cite · **tách** tree |

**Prefix map peers (live):**

| Catalog | Operation | Path |
|---------|-----------|------|
| org-unit | Tree / Search / List | `GET /web-bff/api/v1/integration/org-units{/tree,/search,}` |
| road-route | Search / List | `GET /web-bff/api/v1/integration/road-routes{/search,}` |
| partner-unit | Search / List | `GET /web-bff/api/v1/integration/partner-units{/search,}` |

FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master/src/services/{orgUnit,roadRoute,partnerUnit}/endpoint.ts`.

### B2 — Zone assignment grid / form (HARD · **GAP**)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `GET …/{resource}?search=` **GAP** | — | **gap** |
| zoneOrgCode | Khu | SearchInput tree | org-unit | list filter **GAP** | `zoneOrgCode` | **gap** |
| routeCode | Tuyến | SearchInput | road-route | list filter **GAP** | `routeCode` | **gap** |
| kmFrom | Km từ | Number | — | detail **GAP** | `kmFrom` | **gap** |
| kmTo | Km đến | Number | — | detail **GAP** | `kmTo` | **gap** |
| effectiveFrom | HL từ | Date/Datetime | — | detail **GAP** | `effectiveFrom` | **gap** |
| effectiveTo | HL đến | Date/Datetime | — | detail **GAP** | `effectiveTo` | **gap** |
| isActive | Hiệu lực | Switch | — | detail **GAP** | `isActive` | **gap** |

**Đề xuất SA (không phải SSOT API):** resource dưới Integration — ví dụ `org-route-scopes` / `zone-route-assignments` — unique `(ZoneOrgCode, RouteCode, KmFrom, KmTo, EffectiveFrom)` · overlap cùng tuyến **cấm** trong cửa sổ hiệu lực. Migration `Schema_*` pair khi SA approve.

| Operation | Path (đề xuất SA · **GAP**) |
|-----------|------------------------------|
| List | `GET /web-bff/api/v1/integration/{resource}` |
| Detail | `GET …/{id}` |
| Create | `POST …` |
| Update | `PUT …/{id}` |
| Delete | `DELETE …/{id}` (soft / isActive) |

### B3 — Đoạn child (HARD · **GAP**)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| parentAssignmentId | Cha | hidden | — | nested **GAP** | `parentAssignmentId` | **gap** |
| kmFrom · kmTo | Km đoạn | Number | — | nested **GAP** | kmFrom/kmTo | **gap** |
| assigneeKind | Loại ĐV | Dropdown | assignee-kind | init-data **GAP** | `assigneeKind` | **gap** |
| assigneeCode | Đơn vị | SearchInput | org-unit \| partner-unit | peer search **live** | `assigneeCode` | cite picker · page **gap** |

### B4 — Consumer cascade (read · cite peers + GAP zone)

| uiField | controlHint | catalogKind | GET | write | sameMfe |
|---------|-------------|-------------|-----|-------|---------|
| org cascade | SearchInput tree | org-unit | `…/org-units/tree` **live** | filter | peer pages partial |
| routeFilter | SearchInput | road-route | `…/road-routes/search` **live** | filter | peer |
| zoneOnRoute | SearchInput | org-route-scope | **GAP** list by routeCode | filter | **gap** |
| segmentOnZone | SearchInput | segment | **GAP** child | filter | **gap** |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| org-unit | `…/org-units/search` · `/tree` **live** | `org-unit-seed.json` 60 · DRVN | Dropdown cứng · mix partner vào tree |
| road-route | `…/road-routes/search` **live** | `gov-vn` `road_routes` · INVESTIGATE §3 | free-text · chọn `KM0+000-*` làm tuyến chính |
| partner-unit | `…/partner-units/search` **live** | partner seed · INVESTIGATE §2 | nhét Sở dưới Cục |
| org-route-scope | **GAP** SA | **0** dump gán · file quản trị riêng | invented-seed từ CSV / `manage_unit` Sở |
| pavement-section | Asset peer | `tbl_rmd` | dùng làm đoạn quản lý zone |

## §D — Map / vẽ

`map: none` — pack master catalog. LRS = Number km + SearchInput 3 bước — **cấm** invent `api/v1/lrs-*` tại role này.

## §E — Progress / vòng đời

`progress: none` — catalog gán Type A · `isActive` + effectiveFrom/To soft window (không workflow trạng thái phức tạp).  
Overlap rule = SA validation (**GAP-ORS-08**) — không state machine.

## §F — Handoff / empty / fail

| Case | Behavior |
|------|----------|
| zone list empty | empty copy VN · **cấm** mock seed che API · **cấm** invent-seed |
| list fail | empty grid · toast |
| lookup peer fail | SearchInput empty · toast |
| zone API chưa ship | Design/Dev **blocked** đến SA DOMAIN-MAP + Schema · toast «chưa cấu hình» |
| soft delete | DELETE → inactive / hide |

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · no-demo · open Q GAP-ORS-* · **0** row bịa |
| Design | control-map khớp §B · Kind B `/mas/phan-khu` |
| SA | entity + migration · DOMAIN-MAP · **giữ** peer Integration paths đã cite |
| Dev | wire §B · **cấm** ERP.* · **cấm** `api/v1/rmms/*` · **cấm** invent path |

## §G — Cấm

| ❌ | ✅ |
|----|-----|
| Seed gán từ dump / `manage_unit` Sở | Config tay / file quản trị · GAP-ORS-01 |
| Nhét km vào `OrgUnit` | Bảng gán zone riêng |
| Mix Sở vào org tree SearchInput | partner-unit SearchInput tách |
| Dùng `pavement-section` làm đoạn quản lý | Đoạn child ⊆ zone |
| Invent API như live | Cite **GAP** đến SA |
| DEM / demo-json SSOT | `master-catalog-no-demo.md` |
| ERP.* / `api/v1/rmms/*` | Integration domain |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.04 |
| rulesVersion | 2026.08.30.5 |
| contentHash | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-30T10:43:51.475Z |
| versionGate | rechecked |
| taskId | task_8a74dc46 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.04 rulesVersion=2026.08.30.5 versionGate=rechecked contentHash=sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc -->
