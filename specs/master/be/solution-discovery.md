# SA — Solution discovery — master (hub · 4 shared catalogs)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_1ca9c5a2`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **shared-master-catalog** · **master-catalog-no-demo** · **form-type-task-pack** (`master`)  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · child solutions **confirmed**  
> **Cấm:** Write MFE/native · invent `open-api` song song live · ERP.* · `api/v1/rmms/*` · re-scan DEM · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `master` |
| title | Master catalogs — Feature hub |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`master`** (Kind B ×4 · Modal form) |
| status | `confirmed` |
| design_confirm | approve |
| solution_confirm | **approve** (autoApprove=ON) |
| domain_map | **Integration** (DOMAIN-MAP live) |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **share_a** (Type A ×4 entities) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Master` |
| demo | **N/A** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdRoute | `/mas/co-cau-tc` |
| mfeStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/integration/*` |
| domain | **Integration** |
| childFeatures | `org-unit` (P0) · `road-route` (P0) · `asset-type` (P0) · `partner-unit` (P1) |
| controlHint | `specs/_data-analy/features/master-control-hint.md` |
| realData | `specs/_data-analy/features/master-real-data.md` |
| design | `specs/master/ui/design.md` (confirmed) |
| contentHash | `sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_1ca9c5a2` |
| priorTask | `task_b904272f` (design completed) |
| updatedAt | `2026-08-29T06:45:00.000Z` |
| versionGate | `rechecked` |

## § Delta Current vs New (`edit_page` · hub)

| Area | Current | New (this turn) | Action |
|------|---------|-----------------|--------|
| Hub SA | `be/solution-discovery.md` **draft** stub | Full hub Architecture · FormMode↔API ×4 · gates · gaps chốt | write |
| Child SA | org-unit / road-route / asset-type / partner-unit **confirmed** | **Reuse** contracts · hub cite + sync GAP-MAS-* | keep + cite |
| API docs CTX | hub `open-api` | **Live** `integration/*` SSOT · T-CTX sync | GAP-MAS-API-01 |
| UI routes docs | legacy `/master/*` | Live `/mas/*` SSOT | GAP-MAS-ROUTE-01 |
| GAP-PARTNER-01 | open → SA | Code = slug IdCode `SO-*` / `BOT-*` / `DN-*` | chốt |
| provinceCode | UNCLEAR SearchInput | **Text** P1 (PO) · reopen nếu province master sẵn | keep Text |

**Không đổi:** Kind B CatalogListShell · Modal C/E/V/Copy · share_a · BFF proxy-only · seed DRVN/`gov-vn` · SearchInput consumer · DEM skip · **cấm** map canvas.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · routes live `/mas/*` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| API domain | **`Integration`** — `api/src/…/Domains/Integration/` |
| Controllers | `OrgUnitsController` · `RoadRoutesController` · `AssetTypesController` · `PartnerUnitsController` |
| Models / DTO | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` |
| Migrations | `api/shared/RMMS.Service.Migrations/` — **đã có** child Schema_* (hub **không** new Schema trừ T-CTX/docs) |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/` · **proxy only = yes** |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · slugs → Integration |
| Docs / seed | `Linm.RMMS.Data/docs/context/features/{master,org-unit,road-route,asset-type,partner-unit}.md` · seed JSON |
| Child solutions | `specs/{org-unit,road-route,asset-type,partner-unit}/be/solution-discovery.md` **confirmed** |

**Cấm** `ERP.Service.*` · `ERP.Master.*` · invent parallel `open-api` host.

### Route / domain (live · DOMAIN-MAP)

| Slug | Domain | API prefix | BFF prefix | UI route live |
|------|--------|------------|------------|---------------|
| `org-unit` | Integration | `api/v1/integration/org-units` | `web-bff/api/v1/integration/org-units` | `/mas/co-cau-tc` |
| `road-route` | Integration | `…/road-routes` | `…/road-routes` | `/mas/tuyen-duong` |
| `asset-type` | Integration | `…/asset-types` | `…/asset-types` | `/mas/loai-ts` |
| `partner-unit` | Integration | `…/partner-units` | `…/partner-units` | `/mas/doi-tac` |

FE BASE (cite live): `src/services/{orgUnit,roadRoute,assetType,partnerUnit}/endpoint.ts` → `/integration/…`.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Integration** / `integration` · DOMAIN-MAP |
| API host | `Domains/Integration/` · 4 Controllers |
| BFF | `bff/domains/integration/…` · **proxy only = yes** (T-BFF-01) |
| MFE | `Linm.Web.RMMS.Master` · ui_repo_confirm |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | `master.{org-units\|road-routes\|asset-types\|partner-units}.read\|create\|update\|delete\|approve` |
| Persist | no-parent-json · 4 flat shared entities · **cấm** `*Json` tree blob |
| Out of pack | Asset CRUD · GIS/LRS snap · Excel wizard · Auth menu · ERP fork |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | SearchInput · LinTree · LinErpListFilterBar · LinCatalogUiSchemaEditorModal · LeaveConfirmModal · LinCatalogHistoryModal — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT · SETUP-P2-12 | re-export only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Auth | Authentication + `[RequirePermission]` | codes Auth |
| Persist | `no-parent-json-field` | no ChildrenJson / LinesJson |
| Shared | `ISharedMasterCatalogEntity` | Type A ×4 |
| BFF | proxy only | no business logic |
| Config | CatalogUiSchemaRegistry + seed `{catalogKind}` | FULL — **cấm** configHint |

## Implement gates (confirm) — RECORDED

> Matrix: Kind B **dm shared** ×4 · master catalog hub.  
> autoApprove=ON → tự confirm (khớp child: tz_na · xco_na · share_a).

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| **TZ** | **n/a** (`tz_na`) | Mọi API hub — không DATE / fromDate-toDate trên form/filter | `/review-timezone-implement` | History timestamps UTC only |
| **XCO** | **n/a** (`xco_na`) | Shared Scope — không tenant filter trên 4 master | `/implement-view-cross-company` | GET/{id} global shared · không AllowedCompanyIds tenant |
| **SHARE** | **Type A** (`share_a`) | `OrgUnitEntity` · `RoadRouteEntity` · `AssetTypeEntity` · `PartnerUnitEntity` | `/implement-shared-table` | Master catalog dùng chung toàn RMMS |

AskQuestion (autoApprove recorded): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_a` · `2026-08-29T06:45:00.000Z`.  
`solution_confirm=approve` · cùng timestamp.

---

## 2. Form data analysis (REQUIRED · controlHint chốt)

> Typography: label **13** · input D14/M16 (**GAP-TYP-01**).  
> **Cấm** đổi SearchInput → Text/Dropdown free khi controlHint = SearchInput master.

### 2a. Consumer 2li (other MFE)

| uiField | Label VN | Control | catalogKind | GET | write field |
|---------|----------|---------|-------------|-----|-------------|
| orgUnitCode | Đơn vị quản lý | **SearchInput** tree | org-unit | `GET …/org-units/search` · `/tree` | `orgUnitCode` |
| routeCode | Tuyến đường | **SearchInput** | road-route | `GET …/road-routes/search` | `routeCode` |
| assetTypeCode | Loại tài sản | **SearchInput** | asset-type | `GET …/asset-types/search` | `assetTypeCode` |
| partnerUnitCode | Đơn vị đối tác | **SearchInput** | partner-unit | `GET …/partner-units/search` | `partnerUnitCode` |
| note | Ghi chú | Text | — | — | scalar |
| measure | Số đo | Number / Text | — | — | scalar |
| enum nhỏ | — | Dropdown | LOOKUP_STATIC | init-data / static | — |

### 2b. org-unit (P0)

| Screen / FormMode | Fields (UI) | Source | Entity |
|-------------------|-------------|--------|--------|
| List filter | `search` · `kind` · `parentCode?` · page · pageSize | query | — |
| Tree | nodes code/name/kind | master | `OrgUnitEntity` |
| Create / Edit / Copy | code* · name* · kind* · parentCode (SearchInput tree) · legacyAlias · isActive | master | `OrgUnitEntity` |
| View | same · readOnly | master | `OrgUnitEntity` |

| uiField | dtoField | dbColumn | Control | Notes |
|---------|----------|----------|---------|-------|
| code | Code | `code` | Text code | UK · business key |
| name | Name | `name` | Text | primary · GAP-ORG-02 |
| kind | Kind | `kind` | Dropdown | init-data |
| parentCode | ParentCode | `parent_code` | **SearchInput** tree | exclude self · **cấm** Text |
| legacyAlias | LegacyAlias | `legacy_alias` | Text | secondary · badge hệ cũ khi `isLegacyExtra` |
| isActive | IsActive | `is_active` | Switch | soft |
| — | IsLegacyExtra | `is_legacy_extra` | — | GAP-ORG-01 keep_legacy |
| — | SortOrder | `sort_order` | — | seed |

**Filter query keys:** `search` · `kind` · `parentCode` · `page` · `pageSize` — UI = **`LinErpListFilterBar`** (1 hàng wrap · input+🔍 cụm phải) — **cấm** `filterItems` HOW.

### 2c. road-route (P0)

| uiField | dtoField | dbColumn | Control |
|---------|----------|----------|---------|
| code | Code | `code` | Text code |
| name | Name | `name` | Text |
| routeKind | RouteKind | `route_kind` | Dropdown |
| parentCode | ParentCode | `parent_code` | **SearchInput** catalogKind=road-route |
| notes | Notes | `notes` | Text |
| legacyAliases | LegacyAliases | `legacy_aliases` | Text/tags (JSON text) |
| isActive | IsActive | `is_active` | Switch |

**Filter query keys:** `search` · `routeKind` · `page` · `pageSize`.

### 2d. asset-type (P0)

| uiField | dtoField | dbColumn | Control |
|---------|----------|----------|---------|
| code | Code | `code` | Text code |
| name | Name | `name` | Text |
| groupCode | GroupCode | `group_code` | Dropdown |
| legacyAliases | LegacyAliases | `legacy_aliases` | Text multi |
| isActive | IsActive | `is_active` | Switch |

**Filter query keys:** `search` · `groupCode` · `page` · `pageSize`.

### 2e. partner-unit (P1)

| uiField | dtoField | dbColumn | Control | Notes |
|---------|----------|----------|---------|-------|
| code | Code | `code` | Text code | **GAP-PARTNER-01 chốt:** slug IdCode `SO-*` / `BOT-*` / `DN-*` (vd `SO-HATINH`, `BOT-TRUNGPHUONG`) |
| name | Name | `name` | Text | |
| partnerKind | PartnerKind | `partner_kind` | Dropdown | SO_GTVT · BOT · DOANH_NGHIEP |
| provinceCode | ProvinceCode | `province_code` | **Text** | P1 — **không** SearchInput province master |
| legacyFolderName | LegacyFolderName | `legacy_folder_name` | Text | |
| isActive | IsActive | `is_active` | Switch | |

**Filter query keys:** `search` · `partnerKind` · `page` · `pageSize`.

**Persist:** flat tables only — **cấm** parent `ChildrenJson` / tree blob / `*LinesJson`.

---

## 3. API catalog (cite live · real-data §B)

Base API: `api/v1/integration/{resource}` · BFF mirror `web-bff/api/v1/integration/{resource}` · **proxy only**.  
gates: `tz=n/a` · `xco=n/a` · `shared=share_a` trên mọi endpoint dưới.

### 3.1 org-units

| id | Method | Path | Purpose | Form surfaces | Permission |
|----|--------|------|---------|---------------|------------|
| OU-01 | GET | `/org-units` | List/search paged | list · filter · pager | `master.org-units.read` |
| OU-02 | GET | `/org-units/tree` | Tree nav (folders) | DES-GRID-T | `.read` |
| OU-03 | GET | `/org-units/search` | **SearchInput** parent + consumer `orgUnitCode` | Modal · consumer | `.read` |
| OU-04 | GET | `/org-units/init-data` | LOOKUP kinds | Dropdown | `.read` |
| OU-05 | GET | `/org-units/{id}` | View/Edit load | V · E · Copy | `.read` |
| OU-06 | POST | `/org-units` | Create | C · Copy save | `.create` |
| OU-07 | PUT | `/org-units/{id}` | Update | E save | `.update` |
| OU-08 | DELETE | `/org-units/{id}` | Soft-delete `isActive=false` | row delete | `.delete` |

| | |
|--|--|
| Request list | `search?` · `kind?` · `parentCode?` · `page` · `pageSize` |
| Request search | `q` / `search` · `take` · `excludeCode?` |
| Body C/U | code* · name* · kind* · parentCode? · legacyAlias? · isActive? |
| Errors | 401 · 403 · 404 · 409 duplicate · 422 parent/kind/cycle |
| Context | `features/org-unit.md` · `20-ORG-STRUCTURE-DRVN.md` |
| Demo | **N/A** · prototype child |
| data-import / seed | `org-unit-seed.json` 60 · `gapOrg01=keep_legacy` · CUC2 archive **không** production SSOT |
| FE | `src/services/orgUnit/endpoint.ts` |
| Migration | Schema_RmmsOrgUnits + Seed — **đã có** (child) |

### 3.2 road-routes

| id | Method | Path | Purpose | Form surfaces |
|----|--------|------|---------|---------------|
| RR-01 | GET | `/road-routes` | List/search | list filter |
| RR-02 | GET | `/road-routes/search` | SearchInput parent + `routeCode` | Modal · consumer |
| RR-03 | GET | `/road-routes/init-data` | routeKind options | Dropdown |
| RR-04 | GET | `/road-routes/{id}` | View/Edit | V · E · Copy |
| RR-05 | POST | `/road-routes` | Create | C · Copy |
| RR-06 | PUT | `/road-routes/{id}` | Update | E |
| RR-07 | DELETE | `/road-routes/{id}` | Soft-delete | delete |

| | |
|--|--|
| Request list | `search?` · `routeKind?` · `page` · `pageSize` |
| Body | code* · name* · routeKind* · parentCode? · notes? · legacyAliases? · isActive? |
| Context | `features/road-route.md` · `gov-vn` road_routes |
| Seed | `road-route-seed.json` |
| FE | `src/services/roadRoute/endpoint.ts` |
| Migration | Schema_RmmsRoadRoutes — đã có |

### 3.3 asset-types

| id | Method | Path | Purpose | Form surfaces |
|----|--------|------|---------|---------------|
| AT-01 | GET | `/asset-types` | List/search | list |
| AT-02 | GET | `/asset-types/search` | SearchInput `assetTypeCode` | consumer |
| AT-03 | GET | `/asset-types/init-data` | groupCode options | Dropdown |
| AT-04 | GET | `/asset-types/alias-map` | alias → code (import) | import ops |
| AT-05 | GET | `/asset-types/{id}` | View/Edit | V · E · Copy |
| AT-06 | POST | `/asset-types` | Create | C · Copy |
| AT-07 | PUT | `/asset-types/{id}` | Update | E |
| AT-08 | DELETE | `/asset-types/{id}` | Soft-delete | delete |

| | |
|--|--|
| Request list | `search?` · `groupCode?` · `page` · `pageSize` |
| Body | code* · name* · groupCode* · legacyAliases? · isActive? |
| Seed | `asset-type-seed.json` 23 |
| FE | `src/services/assetType/endpoint.ts` |
| Migration | Schema_RmmsAssetTypes — đã có |

### 3.4 partner-units

| id | Method | Path | Purpose | Form surfaces |
|----|--------|------|---------|---------------|
| PU-01 | GET | `/partner-units` | List/search | list |
| PU-02 | GET | `/partner-units/search` | SearchInput `partnerUnitCode` | consumer |
| PU-03 | GET | `/partner-units/init-data` | partnerKind options | Dropdown |
| PU-04 | GET | `/partner-units/{id}` | View/Edit | V · E · Copy |
| PU-05 | POST | `/partner-units` | Create | C · Copy |
| PU-06 | PUT | `/partner-units/{id}` | Update | E |
| PU-07 | DELETE | `/partner-units/{id}` | Soft-delete | delete |

| | |
|--|--|
| Request list | `search?` · `partnerKind?` · `page` · `pageSize` |
| Body | code* (`SO-*`/`BOT-*`/`DN-*`) · name* · partnerKind* · provinceCode? · legacyFolderName? · isActive? |
| Seed | `partner-unit-seed.json` 13 |
| FE | `src/services/partnerUnit/endpoint.ts` |
| Migration | Schema_RmmsPartnerUnits — đã có |

### 3.5 Shared platform (hub · Kind B)

| id | Method | Path | Purpose |
|----|--------|------|---------|
| UI-01 | GET/PUT | `/integration/catalogs/{catalogKind}/ui-schema` | `LinCatalogUiSchemaEditorModal` FULL · registry+seed |
| HIST-01 | — | CommonLib history | `LinCatalogHistoryModal` / `useCatalogHistoryModal` — DEFER stub ok nếu đã platform |

`catalogKind` ∈ `org-unit` · `road-route` · `asset-type` · `partner-unit`.

### FormMode ↔ API (FormType pack `master` / Kind B ×4) — REQUIRED

| Surface | FormMode | org-unit | road-route | asset-type | partner-unit |
|---------|----------|----------|------------|------------|--------------|
| List search/page | — | OU-01 | RR-01 | AT-01 | PU-01 |
| Tree | — | OU-02 | — | — | — |
| SearchInput lookup | C/E/Copy · consumer | OU-03 | RR-02 | AT-02 | PU-02 |
| Dropdown init | C/E · filter | OU-04 | RR-03 | AT-03 | PU-03 |
| View / Edit load | V · E · Copy | OU-05 | RR-04 | AT-05 | PU-04 |
| Create / Copy save | C · Copy | OU-06 | RR-05 | AT-06 | PU-05 |
| Edit save | E | OU-07 | RR-06 | AT-07 | PU-06 |
| Delete | — | OU-08 | RR-07 | AT-08 | PU-07 |
| Config schema | — | UI-01 | UI-01 | UI-01 | UI-01 |
| History | — | HIST-01 | HIST-01 | HIST-01 | HIST-01 |

**List filter UI (WHAT):** query keys §2 + component **`LinErpListFilterBar`** — **cấm** HOW (TL).

---

## 4. Entity / migration (hub summary)

| Entity | Table | Schema / Seed | SHARE |
|--------|-------|---------------|-------|
| `OrgUnitEntity` | `rmms_org_units` | Schema_RmmsOrgUnits · Seed 60 | Type A |
| `RoadRouteEntity` | `rmms_road_routes` | Schema_RmmsRoadRoutes · Seed | Type A |
| `AssetTypeEntity` | `rmms_asset_types` | Schema_RmmsAssetTypes · Seed 23 | Type A |
| `PartnerUnitEntity` | `rmms_partner_units` | Schema_RmmsPartnerUnits · Seed 13 | Type A |

Hub `edit_page`: **không** yêu cầu migration mới ở role SA — child Schema đã ship. TL/Dev chỉ mở Schema nếu drift review. EF gate: CLI pair `.cs`+`.Designer.cs` khi cần — **cấm** hand-write only.

Default seed II.1 / QL.1 giữ child decisions (`keep_legacy`).

---

## 5. Gaps chốt (SA)

| ID | Severity | Decision |
|----|----------|----------|
| **GAP-MAS-API-01** | P1 | SSOT API = **live** `api/v1/integration/*` · BFF `web-bff/api/v1/integration/*` · **cấm** invent `open-api` song song · T-CTX sync hub CTX `open-api` → `integration` |
| **GAP-MAS-ROUTE-01** | P1 | SSOT UI = live `/mas/*` · T-CTX sync docs legacy `/master/*` → `/mas/*` |
| **GAP-PARTNER-01** | P1 | **Chốt:** code = slug IdCode prefix theo `partnerKind`: `SO-*` · `BOT-*` · `DN-*` (uppercase · hyphen) |
| **GAP-PARTNER-02** | P2 | partner ↔ org-unit link — **OOS** hub |
| provinceCode | P2 | Giữ **Text** P1 · reopen SearchInput khi province master sẵn |
| GAP-ORG-01/02 | accept/P2 | keep_legacy · primary name / secondary legacyAlias — giữ child |
| GAP-ROUTE / ATYPE | P1–P2 | Giữ child — không reopen hub |

Empty/fail (§F real-data): empty copy VN · toast — **cấm** mock seed che API · **cấm** `window.alert`.

Leave / alert (Design): dirty → **LeaveConfirmModal** · xóa → **useAlert/Modal** — WHAT only (TL HOW).

---

## 6. FormType pack — task ids gợi ý TL (WHAT · không HOW)

`packKind=master` · `devSlash=/agent-dev` · deps T-BE → T-UI khi API/schema drift.

| Task id | Owner | Scope hub |
|---------|-------|-----------|
| T-CTX-01 | Dev/docs | Sync CTX hub GAP-MAS-API-01 · GAP-MAS-ROUTE-01 |
| T-BE-CRUD-01 | Dev | Verify 4 catalogs Integration CRUD + search + init (cite live) |
| T-BE-UISCHEMA-01 | Dev | registry+seed 4 `catalogKind` · GET/PUT ui-schema |
| T-BE-INIT-01 | Dev | init-data kinds |
| T-BFF-01 | Dev | proxy-only Integration BFF |
| T-PERM-01 | Dev | RequirePermission codes master.* |
| T-SEED-01 | Dev | seed/import cite — không mock UI |
| T-UI-LIST-01 | Dev | Kind B ×4 · LinCatalogUiSchemaEditorModal FULL |
| T-UI-FORM-01 | Dev | Modal C/E/V/Copy · `data-form-cols="2"` · footer only |
| T-UI-FILTER-01 | Dev | LinErpListFilterBar · query keys §2 |
| T-UI-LKP-01 | Dev | SearchInput master · **cấm** free-text |
| T-UI-LEAVE-01 | Dev | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | Toolbar FULL + row menu handlers |
| T-QA-01 | QA | scenarios · E2E queued `/agent-qa*` |

Child run order Dev: org-unit **P0** → road-route → asset-type → partner-unit **P1**.

---

## 7. Handoff → Team-lead

| Field | Value |
|-------|-------|
| feature | `master` |
| phase_from / phase_to | sa → team-lead |
| packKind | **master** |
| changeScope | `edit_page` |
| Kind / Form | B ×4 · **Modal** · `data-form-cols="2"` |
| solution_confirm | **approve** |
| gates | tz_na · xco_na · share_a |
| Architecture | BackendRoot RMMS.WebService · Domain Integration · BFF proxy · MFE Master |
| FormMode↔API | §3 map |
| controlHint | Design §3 = analy · **không** đổi |
| realData | §B live Integration |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/master/ui/prototype/master-hub-prototype.html` |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| child solutions | confirmed — hub SSOT + GAP chốt |
| Blockers | không |
| Next | `/agent-team-lead` · **cấm** start TL trong task SA này (**GAP-PKT-ROLE-01**) |
| Out | **cấm** Write MFE ở SA · **cấm** e2e/start:std ở SA |

---

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Design confirmed + controlHint + real-data §B đọc | ✅ |
| Architecture + SSOT + Implement gates | ✅ |
| FormMode↔API ×4 + FormType pack | ✅ |
| API blocks cite live Integration (không invent) | ✅ |
| SearchInput → search API · Dropdown → init-data · Text scalar | ✅ |
| no-parent-json · share_a Type A | ✅ |
| GAP-MAS-API/ROUTE · GAP-PARTNER-01 chốt | ✅ |
| solution_confirm approve (autoApprove) | ✅ |
| Version meta | ✅ |
| **Không** Write MFE · **không** e2e/build/start:std | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.28 |
| contentHash | sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-29T06:45:00.000Z |
| versionGate | rechecked |
| taskId | task_1ca9c5a2 |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.28 versionGate=rechecked contentHash=sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 -->
