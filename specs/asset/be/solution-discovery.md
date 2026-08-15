# Solution discovery — asset

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_86f45a3c`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE)  
> SA: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · `form-type-task-pack.md` · `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** (autoApprove ON · Design 2026-08-14 full-page)  
> **Supersedes** solution 2026-08-09 (Slideout · type=8 nhãn demo · list query chỉ `search`+`type` · thiếu init-data / lookup master)  
> **Cấm** `ERP.Service.*` · `ERP.Master.*` · Finance `api/v1/assets` · prefix `/rmms/`

| Field | Value |
|-------|-------|
| feature | `asset` |
| packKind | `list` (Kind B catalog A–D + **full-page** form) |
| status | `confirmed` |
| design_confirm | **approve** (autoApprove ON · `task_86f45a3c` · 2026-08-14) |
| solution_confirm | **approve** (autoApprove ON · `task_86f45a3c`) |
| taskId | `task_86f45a3c` |
| updatedAt | `2026-08-14T16:00:00.000Z` |

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` (board tick giữ) |
| Domain | Asset / `asset` · DOMAIN-MAP |
| API host | `api/src/RMMS.Service.Api/Domains/Asset/` |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only = yes** |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged (local stub until `/upgrade-common-lib`) |
| Auth perm | `Linm.Platform.Authentication` · codes `asset.road-assets.read\|create\|update\|delete` — `[RequirePermission]` **TODO** khi CommonLib ≥1.4.0 (không block CRUD) |
| Persist | `no-parent-json-field` · `RoadAssetEntity` / `rmms_road_assets` **flat scalars** |
| Lookups (consume) | Integration domain — **không** clone master dưới Asset |
| Out of pack | Leaflet map · Excel import/export · media/QR generate · history API · Bridge table · `pavement-section` |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · **cấm** nested CatalogListShell / local pager |
| HTTP | `apiClient` SSOT · SETUP-P2-12 | MFE re-export only |
| BE envelope | CommonLib `ApiResponse` | cấm ad-hoc envelope mới |
| Auth | Authentication + `[RequirePermission]` | stub codes đến khi NuGet mount |
| Persist | `no-parent-json-field` | **cấm** `*LinesJson` / `PhotosJson` / blob inventory |
| Master lookup | Integration APIs đã có | SearchInput **cấm** Text/Select 8 nhãn |
| BFF | proxy only | không business logic |

## Implement gates (confirm)

> Matrix: Kind B **tenant catalog** (KCHT theo đơn vị). autoApprove ON → agent confirm.

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| **TZ** | **n/a** (`tz_na`) | API-01…06 — không `fromDate`/`toDate` · không DATE user-input trên body | `/review-timezone-implement` | `updatedAt`/`createdAt` = audit UTC server · FE **display** local readonly (`form-datetime-local-utc`) — không persist date filter. Nếu thêm kỳ lọc → re-Ask `tz_required` |
| **XCO** | **required** (`xco_get_only`) | **API-02** `GET …/road-assets/{id}` | `/implement-view-cross-company` | **Đã có** trên `RoadAssetService.GetByIdAsync`: tenant query → `IgnoreQueryFilters` + claim `allowed_company_ids` · 403/404. List **không** XCO |
| **SHARE** | **tenant_keep** | `RoadAssetEntity` | `/implement-shared-table` | Asset theo `CompanyCode`. Master `asset-type` / `road-route` / `org-unit` = Type A **trên Integration** (không đổi SHARE của road-asset) |

AskQuestion (autoApprove ON): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `data_import_unit=QL.1` · 2026-08-14T16:00:00.000Z.

## FormType pack (`packKind=list`)

### Screens (from Design)

| id | Surface | Pattern | Route / open | FormMode | Actions |
|----|---------|---------|--------------|----------|---------|
| S-LIST | List A–D | Full page `LinPageLayout` catalog | `/asset` | — | search, create, refresh, config, clear, row Xem/Sửa/Copy/Lịch sử(stub) |
| S-FORM | Form | **Full-page** `AssetFormPage` — **cấm** Slideout/Resource | `/asset/new` · `/asset/:id` · `/asset/:id/edit` · `/asset/:id/copy` | C/E/V/Copy | save, cancel, copy, edit, back · leave-confirm dirty |
| S-MOD-CFG | Column config | Modal | toolbar `fa-cog` | — | apply columns |

### FormMode ↔ API (REQUIRED)

| FormMode / action | Endpoint |
|-------------------|----------|
| List search + filter + page | **API-01** GET `road-assets` |
| View / Edit load | **API-02** GET `road-assets/{id}` |
| Create · Copy (POST new, IdCode mới) | **API-03** POST `road-assets` |
| Edit save | **API-04** PUT `road-assets/{id}` |
| Delete (nếu bật) | **API-05** DELETE `road-assets/{id}` |
| Form Dropdown status/source | **API-06** GET `road-assets/init-data` |
| SearchInput loại TS | **API-LKP-01** GET `integration/asset-types/search` |
| SearchInput tuyến | **API-LKP-02** GET `integration/road-routes/search` |
| SearchInput tree đơn vị | **API-LKP-03** GET `integration/org-units/tree` |
| History | **stub P1** — không API pack này |

`devSlash` (handoff TL): `/agent-dev` (list+form). **Không** `/agent-dev-oms-map` / `/agent-dev-ai-detect` pack này.

Canonical TL task ids (SA **không** viết HOW): T-CTX-01 · T-PERM-01 · T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-BE-CRUD-01 · **T-BE-INIT-01** · T-BE-01 · T-BE-02 · T-BFF-01 · T-QA-01 · T-QA-CRUD-01.

## Live BE / MFE (re-audit 2026-08-14)

| Layer | Exists | Gap vs Design 2026-08-14 |
|-------|--------|--------------------------|
| `RoadAssetsController` `api/v1/asset/road-assets` | yes | List query **thiếu** `route` · `kmFrom` · `kmTo` · `orgUnit` |
| Search `?search=` | yes | **thiếu** QR · Type trong ILIKE (chỉ code/name/route/kmFrom) |
| CRUD + soft delete | yes | OK |
| XCO GET/{id} | yes | giữ |
| IdCode `TS-yyyyMMdd-nnn` | yes stub | OK |
| `GET …/init-data` trên road-assets | **no** | **GAP-SA-INIT-01** — Dropdown status/source **cấm** FE-only enum |
| Lookup exists type/route | **no** 422 | **GAP-SA-LKP-EXISTS-01** |
| Integration asset-types / road-routes / org-units | yes | **consume** — seed 23 + 38 trước consumer |
| BFF `web-bff/api/v1/asset/road-assets` | yes proxy | thêm forward `init-data` + query mới |
| MFE `endpoint.ts` `BASE=/asset/road-assets` | yes | GAP-SA-ROUTE-01 **closed**; thiếu query route/km/org + init-data client |
| Form pattern | stale Slideout possible | Design = **full-page** |
| `Type` persist | string | **phải** = `asset-type.code` (23) — **cấm** 8 nhãn demo |

## 2. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Persist entity | Notes |
|-------------------|-------------|-------------|----------------|-------|
| List filter B | search, type, route, kmFrom, kmTo, orgTree | query | — | SearchInput master · Text chainage · tree org-unit |
| List grid C | code, name, type, route, kmFrom, kmTo, status, GPS | derived | `RoadAssetEntity` | type/route display `code — name` |
| Create / Edit / Copy | name*, type*, route*, kmFrom*, kmTo?, status*, source?, lat?, lng?, qr?, photos(P1 mock), valueVnd?, note? · code readonly | transaction | `RoadAssetEntity` | photos **không** cột DB |
| View | same · `readOnly` (không disabled xám) | transaction | same | `updatedAt` display UTC→local |
| Map / Excel | — | — | — | **OUT of pack** |

### controlHint → API shape

| controlHint (Design) | SA API |
|----------------------|--------|
| SearchInput text `search` | API-01 `?search=` (code · name · qr · route · type) |
| SearchInput `asset-type` | API-LKP-01 search · persist `type` = **code** |
| SearchInput `road-route` | API-LKP-02 search · persist `route` = **code** (vd `QL.1`) |
| SearchInput tree `org-unit` | API-LKP-03 `/tree` · list filter `orgUnit=` (code node) |
| Text kmFrom/kmTo | scalar query + body |
| Dropdown status / source | **API-06 init-data** `{ value, label }[]` — **cấm** KIND_LABEL FE-only |
| Text / Money / number | scalar DTO |
| Date `updatedAt` | response UTC · FE display only |
| photos P1 mock | **không** persist · **cấm** `PhotosJson` |

### Alias demo 8 (không persist)

| Demo label | Persist `type` |
|------------|----------------|
| Mặt đường | **không** `LAND_ROW` · mặt đường = `pavement-section` |
| Cầu | **không invent** `BRIDGE` |
| Biển báo | `GANTRY_SIGN` |
| Hộ lan | `GUARDRAIL` |
| Cột Km | `KM_POST` |
| Cống | `CULVERT_X` (default) / `CULVERT_L` |
| Taluy | `SLOPE_PROTECT` |
| Đèn | `LIGHTING` |

`LAND_ROW` vẫn trong 23 (đất hành lang) — SearchInput chọn được, **không** gắn nhãn «Mặt đường».

### Field map (ui → dto → db)

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| code | Code | `code` | server `TS-yyyyMMdd-nnn` · copy = mã mới |
| name | Name | `name` | required |
| type | Type | `type` | **asset-type.code** 23 |
| route | Route | `route` | **road-route.code** 38 |
| kmFrom | KmFrom | `km_from` | required text |
| kmTo | KmTo | `km_to` | optional |
| status | Status | `status` | init-data value |
| source | Source | `source` | `manual` \| `ai` |
| — | SourceRef | `source_ref` | AI candidate — out of UI pack |
| lat | Lat | `lat` | decimal? |
| lng | Lng | `lng` | decimal? |
| qr | Qr | `qr` | display P1 |
| photos | — | — | UI mock P1 |
| valueVnd | ValueVnd | `value_vnd` | money |
| note | Note | `note` | |
| updatedAt | UpdatedAt | `updated_at` | UTC |
| — | IsActive | `is_active` | soft delete |
| — | CompanyCode | `company_code` | tenant |

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables | n/a (flat catalog) |
| API shape | scalars only on `RoadAssetDto` / Create · Update |

## 3. API catalog

Base Asset: `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets`.  
Lookups: `api/v1/integration/…` · BFF `web-bff/api/v1/integration/…` (existing).

### API-01: GET /api/v1/asset/road-assets

| | |
|--|--|
| Purpose | Paged list + search/filter Zone B/C/D |
| Permission | `asset.road-assets.read` |
| Tenant | `X-Company-Id` · `companyCode` |
| Request | query: `search?`, `type?` (code), `route?` (code), `kmFrom?`, `kmTo?`, `orgUnit?` (org-unit.code), `page` default 1, `pageSize` default **50** (50/100/200/500) |
| Response | `{ items: RoadAssetDto[], totalCount, page, pageSize, totalPages }` |
| Errors | 401 · 403 |
| Form surfaces | S-LIST search must work · filter đổi → page=1 |
| Field map | §2 |
| **gates.tz** | n/a |
| **gates.xco** | n/a (list tenant-scoped) |
| **gates.shared** | tenant_keep |
| Context | `docs/context/features/asset.md` |
| Demo HTML | `Linm.RMMS.Demo/src/demo/asset/asset.html` · `asset-data.js` `filterRows` |
| Demo JSON | `asset-data.js` + seed QL.1 |
| **data-import** | `data-import/RMMS CUC 2/Chi cục QLĐB II.1/QL.1/` · GPS seed theo loại — **không** Excel import API |
| Sample | code `TS-…` · type `KM_POST` · route `QL.1` |
| Migration | đọc `Schema_RmmsRoadAssets` · **delta** indexes search CI nếu thiếu |
| **Delta Dev** | **GAP-SA-LIST-FILTER-01** · **GAP-SA-SEARCH-01** (qr + type) |

### API-02: GET /api/v1/asset/road-assets/{id}

| | |
|--|--|
| Purpose | Chi tiết View / Edit / Copy load |
| Permission | `asset.road-assets.read` |
| Tenant | company filter + XCO |
| Request | path `id` Guid |
| Response | `RoadAssetDto` |
| Errors | 404 · 403 XCO deny · 401 |
| Form surfaces | view · edit · copy load |
| **gates.tz** | n/a |
| **gates.xco** | **yes** |
| **gates.shared** | tenant_keep |
| Context | `asset.md` |
| Demo | form panel `asset.html` |
| data-import | n/a |
| Migration | none |
| **Delta Dev** | giữ XCO hiện có |

### API-03: POST /api/v1/asset/road-assets

| | |
|--|--|
| Purpose | Create + Copy (luôn POST new) |
| Permission | `asset.road-assets.create` |
| Tenant | set `CompanyCode` from context |
| Request | body: name*, type* (code), route* (code), kmFrom*, kmTo?, status*, source?, lat?, lng?, qr?, valueVnd?, note? — **không** gửi code |
| Response | `RoadAssetDto` (code generated) |
| Errors | 422 validation / lookup-exists · 401 |
| Form surfaces | create · copy |
| Field map | §2 · IdCode stub `TS-yyyyMMdd-nnn` |
| **gates.tz** | n/a |
| **gates.xco** | n/a |
| **gates.shared** | tenant_keep |
| Context / Demo | `asset.md` · `nextCode()` demo |
| data-import | n/a |
| **Delta Dev** | **GAP-SA-LKP-EXISTS-01** type+route phải tồn tại master |

### API-04: PUT /api/v1/asset/road-assets/{id}

| | |
|--|--|
| Purpose | Update |
| Permission | `asset.road-assets.update` |
| Request | same persist fields + optional `isActive` · **thêm** `source?` (**GAP-SA-UPD-SOURCE-01**) |
| Response | `RoadAssetDto` |
| Errors | 404 · 422 · 401 |
| Form surfaces | edit save |
| **gates.*** | inherit entity |
| Context / Demo | same API-03 |

### API-05: DELETE /api/v1/asset/road-assets/{id}

| | |
|--|--|
| Purpose | Soft delete `IsActive=false` |
| Permission | `asset.road-assets.delete` |
| Request | path id |
| Response | 200 `{ ok }` / envelope |
| Form surfaces | delete nếu bật (Design row menu không bắt buộc Xóa pack này) |
| **gates.*** | tenant_keep · tz n/a · xco n/a |

### API-06: GET /api/v1/asset/road-assets/init-data  (**NEW** · T-BE-INIT-01)

| | |
|--|--|
| Purpose | LOOKUP_STATIC Dropdown status + source — **cấm** enum FE-only |
| Permission | `asset.road-assets.read` |
| Request | none |
| Response | `{ statuses: [{ value, label }], sources: [{ value, label }] }` |
| Values (chốt) | status: `tot`→Tốt · `theo_doi`→Theo dõi · `can_bao_tri`→Cần bảo trì · source: `manual`→Nhập tay · `ai`→AI |
| Compat | BE chấp nhận **cả** value code **và** nhãn VN cũ khi đọc list (map display qua init-data) |
| Form surfaces | S-FORM Dropdown |
| **gates.tz** | n/a |
| **gates.xco** | n/a |
| **gates.shared** | tenant_keep |
| Context | controlHint status/source Dropdown |
| Demo | 3 tình trạng KT |
| data-import | n/a |
| Migration | none (static) |
| BFF | proxy `GET web-bff/api/v1/asset/road-assets/init-data` |

### API-LKP-01: GET /api/v1/integration/asset-types/search  (**consume existing**)

| | |
|--|--|
| Purpose | SearchInput loại TS (23) |
| Permission | `master.asset-types.read` |
| Request | `search?`, `page`, `pageSize`, `excludeCode?` |
| Response | `{ value, label }[]` / `AssetTypeSearchItemDto` (code — name) |
| Form surfaces | list filter type · form type |
| SHARE | Type A trên Integration — **không** đổi |
| Seed | `specs/_data-analy/shared-catalogs/asset-type-seed.json` **trước** consumer |
| **cấm** | Asset domain duplicate catalog · Dropdown 8 nhãn |

### API-LKP-02: GET /api/v1/integration/road-routes/search  (**consume existing**)

| | |
|--|--|
| Purpose | SearchInput tuyến (38) |
| Permission | `master.road-routes.read` |
| Request | `search?`, `page`, `pageSize` |
| Response | search items code — name |
| Form surfaces | list route · form route |
| Seed | `road-route-seed.json` |
| **cấm** | free-text route |

### API-LKP-03: GET /api/v1/integration/org-units/tree  (**consume existing**)

| | |
|--|--|
| Purpose | SearchInput tree Zone B `orgTree` |
| Permission | `master.org-units.read` |
| Request | none |
| Response | `OrgUnitTreeNodeDto[]` `parentCode` |
| Form surfaces | list filter `orgUnit=` |
| Filter semantics | P1 `orgUnit` = filter `CompanyCode` khớp node code (kind đơn vị); node tuyến → map `route` code. **Cấm** invent `org_unit_code` JSON. TL ghi DoD khớp seed. |

### OUT of pack

| API | Note |
|-----|------|
| nearby / bbox | Gis |
| media / QR generate | later |
| POST import Excel · export | P1 out |
| history | stub UI |
| Bridge / pavement-sections | other features |

## 4. BFF vs API · tenant

| Topic | Decision |
|-------|----------|
| Pattern | API owns CRUD + init-data · BFF **proxy only** |
| Existing | `RoadAssetsBffController` — **extend** init-data + query string (đã forward QS list) |
| Lookups | MFE gọi BFF Integration (đã có) — **không** proxy lookup qua Asset BFF |
| Tenant | `RoadAssetEntity : TenantEntity` · `X-Company-Id` |
| Auth | JWT stub · perm codes placeholder |

## 5. Data model / EF

| Entity | Table | Columns | Migration |
|--------|-------|---------|-----------|
| `RoadAssetEntity` | `rmms_road_assets` | Id, CompanyCode, Code, Name, Type, Route, KmFrom, KmTo, Status, Lat, Lng, Qr, ValueVnd, Note, Source, SourceRef, IsActive, CreatedAt, UpdatedAt | `Schema_RmmsRoadAssets` **exists** |
| Indexes | | unique `(company_code, code)` · CI search name/code/route/qr/type | follow-up nếu thiếu |

**Cấm** PostGIS Geom P1 · **cấm** polymorphic Bridge · **cấm** parent JSON.

### Files (BackendRoot) — delta vs live

| Layer | Path | Action |
|-------|------|--------|
| Entity | `…/Entities/RoadAssetEntity.cs` | keep (no new JSON col) |
| DTO | `…/DTOs/RoadAssetDtos.cs` | `RoadAssetInitDataDto` · Update + Source · list query |
| API | `RoadAssetsController.cs` | list params · **init-data** |
| Service | `RoadAssetService.cs` | filter + lookup-exists + search qr/type |
| BFF | `RoadAssetsBffController.cs` | GET init-data |
| Integration | AssetTypes / RoadRoutes / OrgUnits | **no Asset clone** |

### FE align (WHAT)

| File / surface | Change |
|----------------|--------|
| `endpoint.ts` | list query `route,kmFrom,kmTo,orgUnit` · `getInitData` · lookup clients Integration |
| List | SearchInput type/route/org · pageSize 50/100/200/500 |
| Form | **full-page** C/E/V/Copy · View readOnly · **cấm** Slideout |
| Type/route UI | `code — name` |

## 6. Risks / unknowns

| ID | Risk | Mitigation |
|----|------|------------|
| GAP-SA-LIST-FILTER-01 | Design filter route/km/org chưa trên GET list | T-BE-CRUD-01 delta |
| GAP-SA-SEARCH-01 | search thiếu qr/type | T-BE-CRUD-01 |
| GAP-SA-INIT-01 | Dropdown FE-only | T-BE-INIT-01 |
| GAP-SA-LKP-EXISTS-01 | type/route tự do | 422 lookup-exists |
| GAP-SA-UPD-SOURCE-01 | PUT không Source | Update DTO |
| GAP-SA-TYPE-CODE-01 | data cũ 8 nhãn VN | map display via alias-map Integration `GET …/asset-types/alias-map` — **không** persist nhãn mới |
| Auth stub | no RequirePermission | nợ cũ — không block |
| IdCode | stub sequence | IIdCodeService later |
| orgUnit P1 | entity không có org_unit_code | filter CompanyCode/route — **cấm** JSON |

## Confirm

- `design_confirm` = **approve** (autoApprove ON · Design full-page + reviewUrl)  
- `solution_confirm` = **approve** (autoApprove ON · `task_86f45a3c`)  
- `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant`  
- Route SSOT **`/api/v1/asset/road-assets`**

## Handoff → Team lead

| Field | Value |
|-------|-------|
| feature | `asset` |
| phase_from / phase_to | sa → **team-lead** |
| formType | `list` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| APIs | API-01…06 · API-LKP-01…03 |
| FormMode↔API | § FormType pack |
| Gaps | GAP-SA-LIST-FILTER-01 · SEARCH-01 · INIT-01 · LKP-EXISTS-01 · UPD-SOURCE-01 · TYPE-CODE-01 |
| Tasks (ids only) | T-CTX · T-PERM · T-UI-LIST/FORM/ACT/LKP/FIELD/PROD/UX · T-BE-CRUD · T-BE-INIT · T-BE · T-BFF · T-QA-CRUD |
| `devSlash` | `/agent-dev` |
| Next | `/agent-team-lead` · **pending** đến lượt · Dev sau `be_repo_confirm && ui_repo_confirm` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.14.3 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T16:00:00.000Z |
| versionGate | rechecked (`recheck_new`) |
| contentHashPriorDesign | design `task_52b245e2` · 2026-08-14T22:10:00.000Z |
| contentHashPriorPo | `task_9ab7f74a` |
| contentHashPriorDataAnaly | sha256:b21de98e21ce800f30383fb452770f85aa87d5be969e4bf0ccd5387c2acd17af |
