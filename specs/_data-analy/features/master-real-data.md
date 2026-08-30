# Real-data bind — master (hub · 4 shared catalogs)

| | |
|---|---|
| feature | `master` |
| packKind | `master` |
| changeScope | `edit_page` (hub SSOT · children live) |
| status | `done` |
| taskId | `task_ecc53315` |
| prefix | **live** `web-bff/api/v1/integration` → API `api/v1/integration` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| map | `none` (catalog list/tree · **cấm** invent map canvas) |
| demo | **N/A** (`master-catalog-no-demo.md`) |
| contentHash | `sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |

## § Delta Current vs New (`edit_page` · `task_ecc53315`)

| ID | Current | New |
|----|---------|-----|
| Hub artifacts | draft stubs | §A–§F filled · status **done** |
| API cite | CTX `open-api` | **Live** Integration controllers + MFE `endpoint.ts` |
| Routes | docs `/master/*` | Live `/mas/*` |
| Seed | org 60 · investigate A | bind import `gov-vn` + CUC2 archive only |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/master.md` | — | version mismatch → gate |
| `context` | `docs/context/features/{org-unit,road-route,asset-type,partner-unit}.md` | — | child CTX |
| `context` | `docs/context/20-ORG-STRUCTURE-DRVN.md` | — | org SSOT |
| `context` | `specs/_data-analy/shared-catalogs/INVESTIGATE-CUC2.md` | — | APPROVED A |
| `import` | `docs/context/features/import-gov-ssot.md` · set `gov-vn` | — | production seed |
| `import` | `docs/context/seed/org-unit-seed.json` | tree trống | seed job |
| `catalog` | `data-import/RMMS CUC 2` folder taxonomy | — | **archive/demo only** — **cấm** production SSOT |
| `api` · org-unit | `OrgUnitsController` `api/v1/integration/org-units` | empty tree/list | toast · **cấm** alert |
| `api` · road-route | `RoadRoutesController` `api/v1/integration/road-routes` | empty list | toast |
| `api` · asset-type | `AssetTypesController` `api/v1/integration/asset-types` | empty list | toast |
| `api` · partner-unit | `PartnerUnitsController` `api/v1/integration/partner-units` | empty list | toast |
| `api` · BFF | `…/Integration.Bff/Controllers/*BffController.cs` | — | proxy-only T-BFF-01 |
| `mfe` | `src/services/{orgUnit,roadRoute,assetType,partnerUnit}/endpoint.ts` | — | BASE=`/integration/…` |
| `mfe` | `src/pages/{OrgUnit,RoadRoute,AssetType,PartnerUnit}ListPage/*` | — | Kind B live |
| `domain` | `docs/DOMAIN-MAP.md` Integration rows | — | slug→integration |

`sourceCite` = file **có trong repo**. CTX `open-api` = **GAP-MAS-API-01** (không invent thêm path).

## §B — Bind field (HARD)

### B1 — org-unit

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `GET …/org-units?search=` | — | yes |
| kind | Loại | Dropdown | org-kind | `?kind=` · init-data | `kind` | yes |
| parentCode (filter) | Cha | SearchInput tree | org-unit | `?parentCode=` | — | yes |
| tree | Cây | SearchInput tree | org-unit | `GET …/org-units/tree` | — | yes |
| code | Mã | Text code | — | detail | `code` | yes |
| name | Tên | Text | — | detail | `name` | yes |
| parentCode | Cha | SearchInput tree | org-unit | `…/search` | `parentCode` | yes |
| legacyAlias | Alias | Text | — | detail | `legacyAlias` | yes |
| isActive | Hiệu lực | Switch | — | detail | `isActive` | yes |

**Prefix map org-unit (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/integration/org-units` |
| Tree | `GET /web-bff/api/v1/integration/org-units/tree` |
| Search | `GET /web-bff/api/v1/integration/org-units/search` |
| Init | `GET /web-bff/api/v1/integration/org-units/init-data` |
| Detail | `GET /web-bff/api/v1/integration/org-units/{id}` |
| Create | `POST /web-bff/api/v1/integration/org-units` |
| Update | `PUT /web-bff/api/v1/integration/org-units/{id}` |
| Delete | `DELETE /web-bff/api/v1/integration/org-units/{id}` |

FE: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master/src/services/orgUnit/endpoint.ts`.

### B2 — road-route

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `GET …/road-routes?search=` | — | yes |
| routeKind | Loại | Dropdown | route-kind | `?routeKind=` · init-data | `routeKind` | yes |
| code | Mã | Text code | — | detail | `code` | yes |
| name | Tên | Text | — | detail | `name` | yes |
| parentCode | Tuyến mẹ | SearchInput | road-route | `…/search` | `parentCode` | yes |
| notes | Ghi chú | Text | — | detail | `notes` | yes |
| legacyAliases | Alias | Text/tags | — | detail | `legacyAliases` | yes |
| isActive | Hiệu lực | Switch | — | detail | `isActive` | yes |

| Operation | Path |
|-----------|------|
| List / Search / Init / CRUD | `…/integration/road-routes` (+ `/search` · `/init-data` · `/{id}`) |

FE: `…/services/roadRoute/endpoint.ts`.

### B3 — asset-type

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `GET …/asset-types?search=` | — | yes |
| groupCode | Nhóm | Dropdown | asset-type-group | `?groupCode=` · init-data | `groupCode` | yes |
| code | Mã | Text code | — | detail | `code` | yes |
| name | Tên | Text | — | detail | `name` | yes |
| legacyAliases | Alias | Text multi | — | detail | `legacyAliases` | yes |
| isActive | Hiệu lực | Switch | — | detail | `isActive` | yes |

| Operation | Path |
|-----------|------|
| List / Search / Init / CRUD | `…/integration/asset-types` (+ `/search` · `/init-data` · `/{id}`) |

FE: `…/services/assetType/endpoint.ts`.

### B4 — partner-unit

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `GET …/partner-units?search=` | — | yes |
| partnerKind | Loại | Dropdown | partner-kind | `?partnerKind=` · init-data | `partnerKind` | yes |
| code | Mã | Text code | — | detail | `code` | yes |
| name | Tên | Text | — | detail | `name` | yes |
| provinceCode | Tỉnh | Text | — | detail | `provinceCode` | yes · UNCLEAR master |
| legacyFolderName | Folder | Text | — | detail | `legacyFolderName` | yes |
| isActive | Hiệu lực | Switch | — | detail | `isActive` | yes |

| Operation | Path |
|-----------|------|
| List / Search / Init / CRUD | `…/integration/partner-units` (+ `/search` · `/init-data` · `/{id}`) |

FE: `…/services/partnerUnit/endpoint.ts`.

### B5 — Consumer lookup (other MFE)

| uiField | controlHint | catalogKind | GET | write | sameMfe |
|---------|-------------|-------------|-----|-------|---------|
| orgUnitCode | SearchInput tree | org-unit | `GET …/org-units/search` · `/tree` | `orgUnitCode` | cite consumer |
| routeCode | SearchInput | road-route | `GET …/road-routes/search` | `routeCode` | cite |
| assetTypeCode | SearchInput | asset-type | `GET …/asset-types/search` | `assetTypeCode` | cite |
| partnerUnitCode | SearchInput | partner-unit | `GET …/partner-units/search` | `partnerUnitCode` | cite |

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| org-unit | `…/org-units/search` · `/tree` | `org-unit-seed.json` 60 · DRVN | Dropdown cứng demo CUC 2 |
| road-route | `…/road-routes/search` | `gov-vn` `road_routes.csv` · INVESTIGATE §3 | free-text route |
| asset-type | `…/asset-types/search` | catalog 36 + dump · INVESTIGATE §4 23 archive | Dropdown 8 nhãn demo |
| partner-unit | `…/partner-units/search` | partner seed · INVESTIGATE §2 13 archive | hardcode Sở/BOT labels |

## §D — Map / vẽ

`map: none` — master pack không canvas. LRS GPS snap = child GAP-TD-LRS-01 / map-service — **cấm** invent `api/v1/lrs-*` tại hub.

## §E — Progress / vòng đời

`progress: none` — catalog Type A CRUD · `isActive` soft flag only (không workflow trạng thái phức tạp).

## §F — Handoff / empty / fail

| Case | Behavior |
|------|----------|
| list/tree empty | empty copy VN · **cấm** mock seed che API |
| list fail | empty grid · toast |
| init-data fail | enum fallback `[]` · toast on save |
| lookup fail | SearchInput empty · 422 toast |
| soft delete | DELETE → inactive / hide |

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật» · no-demo · open Q GAP-MAS-* |
| Design | control-map khớp §B |
| SA | giữ path Integration đã cite · sync CTX `open-api` → `integration` |
| Dev | wire §B · **cấm** ERP.* · **cấm** `api/v1/rmms/*` |

## §G — Cấm

| ❌ | ✅ |
|----|-----|
| DEM-* / demo-json SSOT | CTX + seed + Integration API |
| Invent `open-api` mới song song live | Cite `integration` live · GAP-MAS-API-01 |
| Dropdown consumer thay SearchInput master | SearchInput + catalogKind |
| ERP.* / Finance assets fork | RMMS Integration only |
| Mock-only list khi BFF available | BFF proxy |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.28 |
| contentHash | sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-29T06:30:00.000Z |
| versionGate | rechecked |
| taskId | task_ecc53315 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.28 versionGate=rechecked contentHash=sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 -->
