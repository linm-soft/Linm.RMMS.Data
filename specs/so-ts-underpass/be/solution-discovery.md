# SA — Solution discovery — so-ts-underpass (Sổ TS — Hầm chui dân sinh)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_f5f39e3e`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-underpass` |
| title | Sổ TS — Hầm chui dân sinh |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `UNDERPASS` |
| cluster | `crossing` · ô KCHT `t06` |
| dump | `tbl_underpass_box` |
| status | `confirmed` |
| design_confirm | approve (`task_bee06bee`) |
| solution_confirm | **approve** (autoApprove=ON · `task_f5f39e3e`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-underpass`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=UNDERPASS` · alias board `/so-ts-underpass` |
| mfeStdUrl | `http://localhost:9301/so-ts-underpass` |
| peerStdUrl | `http://localhost:9301/so-ts?type=UNDERPASS` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-underpass-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-underpass-real-data.md` |
| design | `specs/so-ts-underpass/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprintPrior | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_f5f39e3e` |
| priorTask | `task_bee06bee` (design completed) |
| updatedAt | `2026-09-01T11:30:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-underpass` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-underpass`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr UNDERPASS (culvert/construction/weight/number/dims/structure/wingwall/pavement/lighting/signboard/barrier) | **no Schema_*** flatten P1 |
| Import | `RoadAssetCatalogHandler` · GIS `cong-chui` · DefaultCodePrefix live `TS-` | create/import prefix **`CC-`** · GIS short **`CC`** · type seed `UNDERPASS` · dump `tbl_underpass_box` — **GAP-UP-PREFIX-01** | `DefaultCodePrefix` + import |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu key hầm chui | Label VN đủ §B · form Input/Select merge keys — **GAP-UP-SPEC-01** | FE labels + form write |
| LOOKUP culvert/construction/structure/wingwall/pavement | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data delta arrays — **GAP-UP-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer) | Editable Dropdown/Number/Text đủ dump §4 · merge `dumpSpecs` on save — **GAP-SOTS-FORM-01** | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON: loại cống · 3 tầng · tên · lý trình · đường chui · thi công · tải · số ngăn · dài · kết cấu · hide low-fill pavement_*/lighting/signboard/barrier · ẩn type/kmTo/SL/ĐVT · primary = `culvert_type_id` / `name` | FE type-profile |
| Point | S-LOC-POINT peer | `kmFrom` + lat/lng · **ẩn `kmTo`** · **cấm** ép lytrinh `"0"` · **không** S-LOC-RANGE — **GAP-UP-POINT-01** | FE validation |
| Name | optional / weak risk | `name` ← `tencongchui` · fallback `name_underpass` · trống OK · **cấm** IsWeak → đoạn — **GAP-UP-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal — **GAP-UP-LEAVE-01** | FE only |
| Alias board | live filter only | `/so-ts-underpass` board-only · optional Navigate — **GAP-UP-ROUTE-01** | FE optional |
| Flatten attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-UP-FLAT-01** | no migration SA |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `cong-chui` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `UNDERPASS` · dump `tbl_underpass_box` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `CC` · **cấm** IsWeak ép đoạn |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-underpass.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=UNDERPASS` · alias board `/so-ts-underpass` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data culvert/construction/structure/wingwall/pavement |
| GIS | `cong-chui` ↔ `UNDERPASS` · icon short `CC` (= IdCode prefix family) · deep-link **out of pack** |

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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `cong-chui` |

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
| **C** Create | `/so-ts/tao-moi?type=UNDERPASS` | `POST …/road-assets` | `type=UNDERPASS` · IdCode auto **`CC-…`** · dumpSpecs merge attrs · `kmTo` omit/null |
| **E** Edit | `/so-ts/sua?id=` | `PUT …/road-assets/{id}` | merge dumpSpecs · giữ type lock |
| **V** View | same route readonly | `GET …/road-assets/{id}` | XCO gate |
| **Copy** | Create prefill | `GET` then `POST` | new IdCode `CC-` · không copy soft-deleted |
| Delete | list/form action | `DELETE …/road-assets/{id}` | soft · `isActive=false` |
| List | `/so-ts?type=UNDERPASS` | `GET …/road-assets?type=UNDERPASS&…` | FilterBar HARD |
| Init | form open | `GET …/road-assets/init-data` | + LOOKUP delta UNDERPASS |
| Tile | type-grid t06 | `GET …/road-assets/summary-by-type` | count UNDERPASS |

**Cấm** invent parallel CRUD host · **cấm** ERP.* DTO.

### Field write map (scalar vs dumpSpecs)

| uiField | Entity / write | Column / bag |
|---------|----------------|--------------|
| code | IdCode | `id_code` · prefix **CC-** |
| name | Name | `name` ← `tencongchui` / fallback `name_underpass` |
| type | Type | `type` = `UNDERPASS` |
| route | Route | `route` |
| routeNamed | RouteNamed | `route_named` |
| routeSegment | RouteSegment | `route_segment` |
| kmFrom | KmFrom | `km_from` · **cấm** ép `"0"` |
| kmTo | KmTo | **ẩn** form/grid UNDERPASS · null OK |
| status / source | Status / Source | scalars |
| unitCode / quantity | UnitCode / Quantity | **ẩn** grid · form optional |
| lat / lng | Lat / Lng | scalars S-GPS / point |
| qr / valueVnd / note | scalars | as live |
| culvert_type_id | DumpSpecs | `dumpSpecs.culvert_type_id` |
| construction_id | DumpSpecs | `dumpSpecs.construction_id` |
| weight / number | DumpSpecs | `dumpSpecs.weight` / `number` |
| width / height | DumpSpecs | `dumpSpecs.width` / `height` |
| crossing_length_culvert | DumpSpecs | `dumpSpecs.crossing_length_culvert` |
| structure_type_id | DumpSpecs | `dumpSpecs.structure_type_id` |
| number_wingwall / material_wingwall_id | DumpSpecs | wingwall keys |
| pavement_type_inside_underpass_id / area_pavement_inside_underpass | DumpSpecs | pavement keys · form ON · grid OFF |
| number_lighting / number_signboard / number_barrier | DumpSpecs | form ON · grid OFF |
| name_underpass / tencongchui | DumpSpecs (+ name) | S-NAME sync |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `UnderpassJson` / child table P1.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten underpass attrs | **DEFER P2** — **không** Schema_* this turn · **GAP-UP-FLAT-01** |
| dumpSpecs write | Form S-ATTR merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta LOOKUP arrays · UI schema `road-assets` type-profile hide low-fill · unit theo seed |
| data-import | `RoadAssetCatalogHandler` · rebuild CSV prefix `CC` · giữ attr UNDERPASS trong dumpSpecs · km trống khi null |
| DefaultCodePrefix | type `UNDERPASS` → **`CC-`** |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary list label | `name` (từ tencongchui) · fallback lưới `culvert_type_id` |
| Name | Text · trống OK · sync dump `tencongchui` / `name_underpass` — **GAP-UP-NAME-01** |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`CC-`** (GIS short `CC`) — **GAP-UP-PREFIX-01** · **cấm** `TS-` · HC legacy only |
| DefaultCodePrefix live | generic `TS-` → đổi theo type `UNDERPASS` |

### LOOKUP init-data delta (P1) — **GAP-UP-LOOKUP-01**

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `culvertTypes` | distinct `culvert_type_id` | Dropdown * LOOKUP_STATIC · grid ON |
| `constructionTypes` | distinct `construction_id` | Dropdown · grid ON |
| `structureTypes` | distinct `structure_type_id` | Dropdown · grid ON |
| `wingwallMaterials` | distinct `material_wingwall_id` | Dropdown · optional |
| `pavementInsideTypes` | distinct `pavement_type_inside_underpass_id` | Dropdown · form ON · grid OFF |

**Cấm** hardcode FE không cite dump/init · **cấm** SearchInput master P1 cho các LOOKUP trên.

### Point location (P1) — **GAP-UP-POINT-01**

| Keys | Control | Rule |
|------|---------|------|
| `kmFrom` | Text S-LOC-POINT | scalar · **cấm** ép `"0"` khi null |
| `kmTo` | — | **ẩn** form + grid UNDERPASS |
| `lat` / `lng` | Number S-GPS | scalars · dump XY `from_coordinate*` map khi import |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-UP-01 | FE profile | grid ON/hide · primary name/culvert_type · pagination 50/100/200/500 · ẩn type/kmTo/SL/ĐVT |
| T-UP-02 | FE form S-ATTR | editable dumpSpecs đủ §4 · labels VN · merge on save |
| T-UP-03 | FE Point | S-LOC-POINT · ẩn kmTo · cấm ép `"0"` · **không** S-LOC-RANGE |
| T-UP-04 | FE name | tencongchui→name · fallback name_underpass · cấm IsWeak |
| T-UP-05 | BE prefix | `DefaultCodePrefix` / create `CC-` · import GIS `cong-chui` align |
| T-UP-06 | BE LOOKUP | init-data culvertTypes · constructionTypes · structureTypes · wingwall · pavement |
| T-UP-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-UP-08 | FE alias | optional `/so-ts-underpass` Navigate |
| T-UP-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-UP-10 | Pack | type seed · dumpSpecLabels · tile t06 · unit seed · **cấm** fork form |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm `2026-09-01T11:30:00.000Z` |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-UP-* chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-underpass.md` · T-UP-* |
| Dev | profile · S-ATTR · CC- · LOOKUP · Leave · Point |
| QA | e2e queued `/agent-qa*` only |