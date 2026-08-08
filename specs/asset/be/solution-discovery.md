# Solution discovery — asset

> Status: **confirmed** (`solution_confirm=approve` · 2026-08-08)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE)  
> SA detail: `example/sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · prototype + reviewUrl  
> **Supersedes** prior draft that wrongly pointed ERP WebService / `ERP.Master.*`
> **Tasks:** `specs/asset/task/asset.md` (TL confirmed) · phase → **dev**


| Field          | Value                              |
| -------------- | ---------------------------------- |
| feature        | `asset`                            |
| packKind       | `list` (Kind B catalog + Slideout) |
| status         | `confirmed`                        |
| design_confirm | approve                            |
| solution_confirm | approve                          |
| updatedAt      | 2026-08-08T17:00:00.000Z           |




## 1. Ownership


| Layer           | Repo / module                                                      |
| --------------- | ------------------------------------------------------------------ |
| MFE             | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` (`/asset`)             |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService`                                  |
| API domain      | `api/src/RMMS.Service.Api/Domains/Asset/`                          |
| Models / DTO    | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/`                   |
| Persistence     | `api/shared/RMMS.Service.Persistence/`                             |
| Migrations      | `api/shared/RMMS.Service.Migrations/`                              |
| BFF             | `bff/domains/asset/LINM.RMMS.Asset.Bff/`                           |
| Docs            | `Linm.RMMS.Data/docs/context/features/asset.md` · DOMAIN-MAP Asset |


**Cấm** `ERP.Service.`* · `ERP.Master.*` · Finance `api/v1/assets` (TSCĐ).

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · be_repo_confirm |
| Domain | Asset / `asset` · DOMAIN-MAP |
| API host | `api/src/RMMS.Service.Api/Domains/Asset/` |
| BFF | `bff/domains/asset/…` · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Asset` · ui_repo_confirm |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | `Linm.Platform.Authentication` · codes `asset.road-assets.*` |
| Persist | no-parent-json-field · `RoadAssetEntity` flat scalars |
| Out of pack | map · Excel import API · media |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | no local Lin* / pager / toolbar clones |
| HTTP | `apiClient` SSOT · SETUP-P2-12 | MFE re-export only — cấm class ApiClient local |
| BE | `Linm.Platform.CommonLib` | ApiResponse — cấm ad-hoc envelope |
| Auth | Authentication + `[RequirePermission]` | codes Auth — cấm custom perm attr |
| Persist | `no-parent-json-field` | no parent `*LinesJson` / string JSON inventory |
| BFF | proxy only | no business logic / second client in BFF |

Ref: `common/skill/agent-qldb-workflow/example/ssot-no-duplicate.md`.

## Implement gates (confirm) — REQUIRED

> Matrix: `agent-sa/example/sa-implement-gates.md` · Kind B **tenant catalog** (KCHT theo đơn vị).

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| **TZ** | **n/a** (`tz_na`) | API-01…05 — filter `search`+`type` only · form không DATE/DATETIME · không `fromDate`/`toDate` | `/review-timezone-implement` | Nếu sau này thêm filter ngày → re-Ask `tz_required` |
| **XCO** | **required** (`xco_get_only`) | **API-02** `GET …/road-assets/{id}` (View/Edit load) | `/implement-view-cross-company` | Normal tenant query first · `IgnoreQueryFilters` + `allowed_company_ids` · 403/404 |
| **SHARE** | **tenant_keep** | `RoadAssetEntity` | `/implement-shared-table` | Asset theo `CompanyCode` — **không** shared master |

AskQuestion (recorded with solution confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · 2026-08-08.

### Route decision (align DOMAIN-MAP + MFE)


|                      | Choice                                                                                        |
| -------------------- | --------------------------------------------------------------------------------------------- |
| Domain prefix (SSOT) | `api/v1/asset` · BFF `web-bff/api/v1/asset`                                                   |
| Resource (this pack) | `/road-assets` → full path `api/v1/asset/road-assets`                                         |
| FE BASE (today)      | MFE `endpoint.ts` = `/rmms/road-assets` → **GAP-SA-ROUTE-01**: đổi thành `/asset/road-assets` |
| Rationale            | DOMAIN-MAP + scaffold health đã dùng `api/v1/asset`; tránh invent prefix `rmms/` ngoài map    |




## 2. Form data analysis (REQUIRED)


| Screen / FormMode    | Fields (UI)                                                                                             | Source type | Entity            | data-import / mock                               |
| -------------------- | ------------------------------------------------------------------------------------------------------- | ----------- | ----------------- | ------------------------------------------------ |
| List filter          | `search`, `type`, `page`, `pageSize`                                                                    | query       | —                 | Demo `asset-data.js` filterRows · real seed QL.1 |
| List grid            | code, name, type, route, kmFrom, kmTo, status, lat+lng                                                  | derived     | `RoadAssetEntity` | demo-json + DI folders                           |
| Create / Edit / Copy | name*, type*, route*, kmFrom*, kmTo?, status*, lat?, lng?, qr?, valueVnd?, note? · code readonly IdCode | transaction | `RoadAssetEntity` | —                                                |
| View                 | same · all readOnly                                                                                     | transaction | `RoadAssetEntity` | —                                                |
| Map / Import Excel   | —                                                                                                       | —           | —                 | **OUT of pack** (DI seed only for GPS samples)   |




### Field map (ui → dto → db)


| uiField  | dtoField              | dbColumn       | Notes                                     |
| -------- | --------------------- | -------------- | ----------------------------------------- |
| code     | Code                  | `code`         | BE IdCode `TS-yyyyMMdd-nnn` (demo parity) |
| name     | Name                  | `name`         | required                                  |
| type     | Type                  | `type`         | 8 loại KCHT (design labels)               |
| route    | Route                 | `route`        | QL./ĐT.                                   |
| kmFrom   | KmFrom                | `km_from`      | required · text `km12+000`                |
| kmTo     | KmTo                  | `km_to`        | optional                                  |
| status   | Status                | `status`       | Tốt / Theo dõi / Cần bảo trì              |
| lat      | Lat                   | `lat`          | decimal?                                  |
| lng      | Lng                   | `lng`          | decimal?                                  |
| qr       | Qr                    | `qr`           | display; generate OUT pack                |
| valueVnd | ValueVnd              | `value_vnd`    | money                                     |
| note     | Note                  | `note`         |                                           |
| —        | IsActive              | `is_active`    | soft delete                               |
| —        | CompanyCode           | `company_code` | tenant                                    |
| —        | CreatedAt / UpdatedAt | UTC            |                                           |




## 3. API catalog

Base: `api/v1/asset/road-assets` · BFF mirror `web-bff/api/v1/asset/road-assets` → loopback API.

### API-01: GET /api/v1/asset/road-assets


|                  |                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Purpose          | Paged list + search/filter loại (Zone C/D)                                                                                |
| Permission       | `asset.road-assets.read` (placeholder until auth NuGet)                                                                   |
| Tenant           | `X-Company-Id` · `companyCode` on entity                                                                                  |
| Request          | query: `search?`, `type?`, `page` (default 1), `pageSize` (default **50**; allow 50/100/200/500)                          |
| Response         | `{ items: RoadAssetDto[], totalCount, page, pageSize, totalPages }`                                                       |
| Errors           | 401 · 403                                                                                                                 |
| Form surfaces    | list search · type filter · pagination                                                                                    |
| Field map        | §2                                                                                                                        |
| **gates.tz**     | n/a (no fromDate/toDate)                                                                                                  |
| **gates.xco**    | n/a (list stays tenant-scoped)                                                                                            |
| **gates.shared** | tenant_keep                                                                                                               |
| **Context docs** | `docs/context/features/asset.md` §3                                                                                       |
| **Demo HTML**    | `Linm.RMMS.Demo/src/demo/asset/asset.html` · list table · `asset-data.js` `filterRows`                                    |
| **Demo JSON**    | inline `asset-data.js` seed (+ real-seed from QL.1)                                                                       |
| **data-import**  | `RMMS CUC 2/Chi cục QLĐB II.1/QL.1/` · subfolders theo loại (Cột KM, Hộ Lan, …) — **seed GPS**, không API import pack này |
| Sample           | `TS-…` · type `Cột Km` · route `QL.1` · lat/lng từ seed                                                                   |
| Migration        | đọc `Schema_RmmsRoadAssets`                                                                                               |




### API-02: GET /api/v1/asset/road-assets/{id}


|               |                          |
| ------------- | ------------------------ |
| Purpose       | Chi tiết View/Edit       |
| Permission    | `asset.road-assets.read` |
| Tenant        | company filter           |
| Request       | path `id` (Guid)         |
| Response      | `RoadAssetDto`           |
| Errors        | 404 · 403 (XCO deny) · 401 |
| Form surfaces | view · edit load         |
| **gates.tz**  | n/a                      |
| **gates.xco** | **yes** — `/implement-view-cross-company` |
| **gates.shared** | tenant_keep           |
| Context       | `asset.md` §3            |
| Demo          | form panel `asset.html`  |
| data-import   | n/a                      |
| Migration     | none (same table)        |




### API-03: POST /api/v1/asset/road-assets


|               |                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| Purpose       | Create (+ Copy → POST)                                                                                      |
| Permission    | `asset.road-assets.create`                                                                                  |
| Tenant        | set `CompanyCode` from context                                                                              |
| Request       | body: name*, type*, route*, kmFrom*, kmTo?, status*, lat?, lng?, qr?, valueVnd?, note? — **không** gửi code |
| Response      | `RoadAssetDto` (code generated)                                                                             |
| Errors        | 422 validation · 401                                                                                        |
| Form surfaces | create · copy                                                                                               |
| Field map     | §2 · code server `TS-yyyyMMdd-nnn` (IIdCodeService khi có; stub sequence OK P1)                             |
| Context       | `asset.md` §3 · design §3                                                                                   |
| Demo          | `nextCode()` in `asset-data.js`                                                                             |
| data-import   | n/a                                                                                                         |
| Migration     | Schema_*                                                                                                    |




### API-04: PUT /api/v1/asset/road-assets/{id}


|                |                                                              |
| -------------- | ------------------------------------------------------------ |
| Purpose        | Update                                                       |
| Permission     | `asset.road-assets.update`                                   |
| Request        | body = UpdateAssetRequest (same fields; optional `isActive`) |
| Response       | `RoadAssetDto`                                               |
| Errors         | 404 · 422 · 401                                              |
| Form surfaces  | edit · save                                                  |
| Context / Demo | same as API-03                                               |
| data-import    | n/a                                                          |




### API-05: DELETE /api/v1/asset/road-assets/{id}


|               |                                        |
| ------------- | -------------------------------------- |
| Purpose       | Soft delete                            |
| Permission    | `asset.road-assets.delete`             |
| Request       | path id                                |
| Response      | 204 / `{ ok: true }`                   |
| Behavior      | `IsActive = false` (không hard delete) |
| Form surfaces | row/toolbar delete (nếu bật)           |
| Context       | `asset.md` §3 soft delete              |
| data-import   | n/a                                    |




### OUT of pack (context roadmap — không implement list pack)


| API                         | Note                |
| --------------------------- | ------------------- |
| nearby / within-bbox        | Gis later           |
| media presign · QR generate | later               |
| POST import Excel           | Integration / later |




## 4. BFF vs API · tenant


| Topic    | Decision                                                                                      |
| -------- | --------------------------------------------------------------------------------------------- |
| Pattern  | API owns CRUD · BFF proxy `web-bff/api/v1/asset/road-assets/**` → `RmmsApi` client loopback   |
| Existing | `AssetHealthController` · `AssetBffController` health only — **extend**, không tạo domain mới |
| Tenant   | `RoadAssetEntity : TenantEntity` · filter `CompanyCode` · header `X-Company-Id`               |
| Auth     | JWT placeholder (scaffold TODO) — wire khi `/upgrade-common-lib` auth lands                   |




## 5. Data model / EF


| Entity            | Table              | Columns                                                                                                                      | Migration                                 |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `RoadAssetEntity` | `rmms_road_assets` | Id, CompanyCode, Code, Name, Type, Route, KmFrom, KmTo, Status, Lat, Lng, Qr, ValueVnd, Note, IsActive, CreatedAt, UpdatedAt | `Schema_RmmsRoadAssets` (+ Designer pair) |
| Indexes           |                    | `(company_code, code)` unique · trigram/ILIKE on name/code/route for `?search=`                                              | same Schema or follow-up                  |


**Cấm** PostGIS `Geom` P1 — lat/lng decimal đủ.  
**Cấm** polymorphic multi-table — 1 bảng list pack (GAP-F-ASSET-01 deferred).

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables | n/a (flat catalog — no line grid) |
| API shape | scalars only on `RoadAssetDto` / Create·Update |

### Files to add (under BackendRoot)


| Layer     | Path                                                                                        |
| --------- | ------------------------------------------------------------------------------------------- |
| Entity    | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs`                           |
| DbSet     | `AppDbContext.cs` + Fluent config                                                           |
| DTOs      | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAsset*.cs`                               |
| Service   | `api/src/RMMS.Service.Api/Domains/Asset/Services/IRoadAssetService.cs` + impl               |
| API       | `…/Domains/Asset/Controllers/RoadAssetsController.cs` `[Route("api/v1/asset/road-assets")]` |
| BFF       | extend `AssetBffController` or `RoadAssetsBffController` same prefix                        |
| DI        | Asset domain registration                                                                   |
| Migration | `dotnet ef migrations add Schema_RmmsRoadAssets`                                            |




### FE align


| File                             | Change                                                    |
| -------------------------------- | --------------------------------------------------------- |
| `src/services/asset/endpoint.ts` | `BASE = '/asset/road-assets'`                             |
| List paging                      | default **50** · options 50/100/200/500 (VatTu / design)  |
| UI                               | Kind B shell parity prototype (A–D · Slideout · icon map) |




## 6. Risks / unknowns


| ID               | Risk                                  | Mitigation                                                          |
| ---------------- | ------------------------------------- | ------------------------------------------------------------------- |
| GAP-SA-ROUTE-01  | MFE `/rmms/…` ≠ DOMAIN-MAP `/asset/…` | FE BASE đổi cùng BE ship                                            |
| GAP-SA-ERP-00    | Old SA file trỏ ERP                   | **superseded** — this file                                          |
| Auth NuGet stub  | No `[RequirePermission]` yet          | placeholder codes · harden later                                    |
| DI xlsx encoding | Folder names Unicode                  | Use path `…/Chi cục QLĐB II.1/QL.1/{loại}/` · seed via demo already |
| IdCode service   | May lack platform IdCode              | Stub `TS-{yyyyMMdd}-{nnn}` until NuGet                              |




## Confirm

`solution_confirm` = **approve** (2026-08-08) · route **`/api/v1/asset/road-assets`**.

## Handoff → Team lead → Dev


| Field                 | Value                                                            |
| --------------------- | ---------------------------------------------------------------- |
| feature               | `asset`                                                          |
| phase_from / phase_to | sa → team-lead → **dev**                                         |
| STATUS                | solution **confirmed** · tasks in `task/asset.md`                |
| BackendRoot           | `D:/AI-QLBD/Linm.RMMS.WebService`                                |
| MFE                   | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset`                      |
| APIs (ids)            | API-01 … API-05                                                  |
| Tasks                 | T-CTX · T-BE-01/02 · T-BFF · T-PERM · T-UI-LIST · T-UI-FORM · T-QA |
| Next                  | `/agent-dev` (T-BE-01 + T-CTX-01)                                |



