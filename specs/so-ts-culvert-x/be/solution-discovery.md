# SA — Solution discovery — so-ts-culvert-x (Sổ TS — Cống thoát nước ngang)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_50a770e3`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-culvert-x` |
| title | Sổ TS — Cống thoát nước ngang |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `CULVERT_X` |
| cluster | `crossing` · ô KCHT `t07` |
| dump | **thiếu** (`GAP-CULVERT-X-01`) · CSV 0 · UI từ mẫu · empty OK · **cấm** seed |
| status | `confirmed` |
| design_confirm | approve (`task_d82a3890`) |
| solution_confirm | **approve** (autoApprove=ON · `task_50a770e3`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-culvert-x`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=CULVERT_X` · alias **REQUIRED** `/so-ts-culvert-x` Navigate |
| mfeStdUrl | `http://localhost:9301/so-ts-culvert-x` |
| peerStdUrl | `http://localhost:9301/so-ts?type=CULVERT_X` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-culvert-x-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-culvert-x-real-data.md` |
| design | `specs/so-ts-culvert-x/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |
| headerFingerprintPrior | `sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_50a770e3` |
| priorTask | `task_d82a3890` (design completed) |
| updatedAt | 2026-09-01T12:36:51.307Z |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-culvert-x` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-culvert-x`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr CULVERT_X (proposed keys) · **không** Schema_* | **no Schema_*** flatten P1 |
| Import / dump | CSV 0 · thiếu `tbl_*` | empty OK · **cấm** seed · **GAP-CULVERT-X-01** · keys proposed đến khi dump — **GAP-CN-KEY-01** remap khi có `tbl_*` | keep proposed · remap later |
| Import prefix | GIS short `CN` · DefaultCodePrefix risk `TS-` | create/import prefix **`CN-`** · GIS layer **`cong`** · type seed `CULVERT_X` — **GAP-CN-PREFIX-01** | `DefaultCodePrefix` + GIS align |
| dumpSpecs attrs | FE labels thiếu key cống ngang | Label VN đủ §B · form Input/Select merge keys — **GAP-CN-SPEC-01** | FE labels + form write |
| LOOKUP shape/VL/KC/type_work | text mẫu | Dropdown **LOOKUP_STATIC** · init-data delta arrays — **GAP-CN-LOOKUP-01** (PO chốt) | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer) | Editable Dropdown/Number/Checkbox đủ mẫu · merge `dumpSpecs` on save — **GAP-SOTS-FORM-01** | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON: type_work · 3 tầng · lý trình · shape · weight · number · height · crossing_length · hide-empty width/material_body · ẩn type/kmTo/SL/ĐVT/name · primary = `type_work_id` / shape | FE type-profile |
| Point | S-LOC-POINT peer | `kmFrom` + lat/lng · **ẩn `kmTo`** · **cấm** ép lytrinh `"0"` · **không** S-LOC-RANGE — **GAP-CN-POINT-01** | FE validation |
| Name | optional | form Text optional · **list OFF** · **cấm** IsWeak → đoạn — **GAP-CN-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal — **GAP-CN-LEAVE-01** | FE only |
| Alias board | live filter only | `/so-ts-culvert-x` **REQUIRED** Navigate → `/so-ts?type=CULVERT_X` — **GAP-CN-ROUTE-01** | FE required |
| Flatten attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-CN-FLAT-01** | no migration SA |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `cong` cite only).

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · list `AssetListPage` · form `AssetFormPage` · **cấm** fork |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `RoadAssetsController` · `[Route("api/v1/asset/road-assets")]` |
| Service | `RoadAssetService` / `IRoadAssetService` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs` · table `rmms_road_assets` |
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `CULVERT_X` · dump **chưa có** (empty OK) |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `CN` · **cấm** IsWeak ép đoạn · **cấm** seed khi CSV 0 |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-culvert-x.md` · parent `so-ts-type-grid.md` · `import-gov-ssot.md` gap t07 |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=CULVERT_X` · alias **REQUIRED** `/so-ts-culvert-x` Navigate |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data typeWork/culvertShape/materialBody/structure* |
| GIS | `cong` ↔ `CULVERT_X` · icon short `CN` (= IdCode prefix family) · deep-link **out of pack** |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` · DOMAIN-MAP (feature inherit `asset`) |
| API host | `Domains/Asset/` · `RoadAssetsController` |
| BFF | `bff/domains/asset/…` · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Asset` · ui_repo_confirm |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | `asset.road-assets.read\|create\|update\|delete` · FE `rmms-asset:road-assets:read\|write` |
| Persist | no-parent-json · flat scalars + `DumpSpecs` text JSON **attrs only** · **cấm** invent child table P1 |
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `cong` |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinErpListFilterBar · LinCatalogDataGrid · LinCatalogListPagination · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | re-export only · BFF only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Persist | `no-parent-json-field` | dumpSpecs = attr bag |
| BFF | proxy only | no business logic |
| Config | catalogKind `road-assets` · `LinCatalogUiSchemaEditorModal` | **cấm** `LinListTableConfigModal` |
| Filter layout | `filter-bar-layout-hard` | 1 hàng wrap · input+🔍 cụm phải · **cấm** nút Tìm riêng |
| Form surface | full-page · `data-form-cols="5"` · header chrome Lưu | **cấm** footer Lưu · **cấm** Slideout/Modal hồ sơ |
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` · **cấm** tab legacy |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | Parent API optional range — **không** mount trên pack |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` | list/create/update cùng tenant · soft-delete |

---

## 2. FormMode ↔ API (HARD)

| FormMode | UI | API | Body notes |
|----------|----|-----|------------|
| **C** Create | `/so-ts/tao-moi?type=CULVERT_X` | `POST …/road-assets` | `type=CULVERT_X` · IdCode auto **`CN-…`** · dumpSpecs merge attrs · `kmTo` omit/null |
| **E** Edit | `/so-ts/sua?id=` | `PUT …/road-assets/{id}` | merge dumpSpecs · giữ type lock |
| **V** View | same route readonly | `GET …/road-assets/{id}` | XCO gate |
| **Copy** | Create prefill | `GET` then `POST` | new IdCode `CN-` · không copy soft-deleted |
| Delete | list/form action | `DELETE …/road-assets/{id}` | soft · `isActive=false` |
| List | `/so-ts?type=CULVERT_X` | `GET …/road-assets?type=CULVERT_X&…` | FilterBar HARD · empty OK |
| Init | form open | `GET …/road-assets/init-data` | + LOOKUP delta CULVERT_X |
| Tile | type-grid t07 | `GET …/road-assets/summary-by-type` | count CULVERT_X |

**Cấm** invent parallel CRUD host · **cấm** ERP.* DTO.

### Field write map (scalar vs dumpSpecs)

| uiField | Entity / write | Column / bag |
|---------|----------------|--------------|
| code | IdCode | `id_code` · prefix **CN-** |
| name | Name | `name` optional · list OFF · **cấm** IsWeak |
| type | Type | `type` = `CULVERT_X` |
| route | Route | `route` |
| routeNamed | RouteNamed | `route_named` |
| routeSegment | RouteSegment | `route_segment` |
| kmFrom | KmFrom | `km_from` · **cấm** ép `"0"` |
| kmTo | KmTo | **ẩn** form/grid CULVERT_X · null OK |
| status / source | Status / Source | scalars |
| unitCode / quantity | UnitCode / Quantity | **ẩn** grid · form optional |
| lat / lng | Lat / Lng | scalars S-GPS / point |
| qr / valueVnd / note | scalars | as live |
| type_work_id | DumpSpecs | `dumpSpecs.type_work_id` |
| culvert_shape_id | DumpSpecs | `dumpSpecs.culvert_shape_id` |
| weight / number | DumpSpecs | `dumpSpecs.weight` / `number` |
| width / height | DumpSpecs | `dumpSpecs.width` / `height` · hide-empty width grid |
| crossing_length_culvert | DumpSpecs | `dumpSpecs.crossing_length_culvert` |
| material_body_id | DumpSpecs | `dumpSpecs.material_body_id` · hide-empty grid |
| has_upstream_head / has_upstream_valve / has_downstream_head / has_downstream_valve | DumpSpecs | Checkbox keys |
| upstream_head_structure_id / upstream_apron_structure_id / downstream_apron_structure_id | DumpSpecs | LOOKUP_STATIC / Text |
| has_upstream_apron / has_downstream_apron / has_upstream_basin / has_downstream_basin | DumpSpecs | Checkbox |
| upstream_apron_area / downstream_apron_area / upstream_basin_width / downstream_basin_width | DumpSpecs | Number |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `CulvertXJson` / child table P1.  
**GAP-CN-KEY-01:** giữ proposed snake keys P1 · **remap** khi dump `tbl_*` xuất hiện (Dev/import) — **không** invent alternate names ở SA.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten culvert attrs | **DEFER P2** — **không** Schema_* this turn · **GAP-CN-FLAT-01** |
| dumpSpecs write | Form S-ATTR merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta LOOKUP arrays · UI schema `road-assets` type-profile hide-empty · **cấm** row seed CSV 0 |
| data-import | `RoadAssetCatalogHandler` · khi có dump: rebuild CSV prefix `CN` · giữ attr trong dumpSpecs · km trống khi null |
| DefaultCodePrefix | type `CULVERT_X` → **`CN-`** |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary list label | `type_work_id` / `culvert_shape_id` · **không** cột `name` list |
| Name | Text form optional · trống OK — **GAP-CN-NAME-01** |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`CN-`** (GIS short `CN`) — **GAP-CN-PREFIX-01** · **cấm** `TS-` |
| DefaultCodePrefix live | generic `TS-` → đổi theo type `CULVERT_X` |

### LOOKUP init-data delta (P1) — **GAP-CN-LOOKUP-01**

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `typeWorkTypes` | distinct `type_work_id` / static mẫu | Dropdown * LOOKUP_STATIC · grid ON |
| `culvertShapes` | Hộp / Bản (+ distinct) | Dropdown * LOOKUP_STATIC · grid ON |
| `materialBodyTypes` | distinct `material_body_id` | Dropdown · hide-empty grid |
| `upstreamHeadStructures` | distinct `upstream_head_structure_id` | Dropdown · khi has_upstream_head |
| `apronStructures` | distinct apron structure ids | Dropdown · khi has apron |

**Cấm** hardcode FE không cite dump/init · **cấm** SearchInput master P1 cho các LOOKUP trên (PO: LOOKUP_STATIC).  
Empty dump → init-data static tối thiểu từ mẫu (Hộp/Bản · loại CT) · **cấm** invent DB seed rows.

### Point location (P1) — **GAP-CN-POINT-01**

| Keys | Control | Rule |
|------|---------|------|
| `kmFrom` | Text S-LOC-POINT | scalar · **cấm** ép `"0"` khi null |
| `kmTo` | — | **ẩn** form + grid CULVERT_X |
| `lat` / `lng` | Number S-GPS | scalars · dump XY `from_coordinate*` map khi import |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-CN-01 | FE profile | grid ON/hide-empty · primary type_work/shape · pagination 50/100/200/500 · ẩn type/kmTo/SL/ĐVT/name |
| T-CN-02 | FE form S-ATTR | editable dumpSpecs đủ mẫu · labels VN · merge on save · Checkbox has_* |
| T-CN-03 | FE Point | S-LOC-POINT · ẩn kmTo · cấm ép `"0"` · **không** S-LOC-RANGE |
| T-CN-04 | FE name | optional form · list OFF · cấm IsWeak |
| T-CN-05 | BE prefix | `DefaultCodePrefix` / create `CN-` · GIS `cong` align |
| T-CN-06 | BE LOOKUP | init-data typeWork · culvertShapes · materialBody · structure* (static OK khi dump thiếu) |
| T-CN-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-CN-08 | FE alias | **REQUIRED** `/so-ts-culvert-x` Navigate → live |
| T-CN-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-CN-10 | Pack | type seed · dumpSpecLabels · tile t07 · empty OK · **cấm** fork form · **cấm** CSV seed |
| T-CN-11 | Key remap | khi có `tbl_*` — remap GAP-CN-KEY-01 · không đổi FormMode↔API |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm 2026-09-01T12:36:51.307Z |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-CN-* / GAP-CULVERT-X-01 chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-culvert-x.md` · T-CN-* |
| Dev | profile · S-ATTR · CN- · LOOKUP · Leave · Point · alias REQUIRED |
| QA | e2e queued `/agent-qa*` only |