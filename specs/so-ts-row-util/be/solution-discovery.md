# SA — Solution discovery — so-ts-row-util (Sổ TS — CT HTKT trong HL)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_39043d1b`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-row-util` |
| title | Sổ TS — CT HTKT trong HL |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `ROW_UTIL` |
| cluster | `land` · ô KCHT `t08` |
| dump | `tbl_infrastructure_row` |
| status | `confirmed` |
| design_confirm | approve (`task_34dbb85e`) |
| solution_confirm | **approve** (autoApprove=ON · `task_39043d1b`) |
| domain_map | **Asset** (`so-ts-row-util` → inherit parent `asset` · prefix `api/v1/asset`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=ROW_UTIL` · alias board `/so-ts-row-util` |
| mfeStdUrl | `http://localhost:9301/so-ts-row-util` |
| peerStdUrl | `http://localhost:9301/so-ts?type=ROW_UTIL` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-row-util-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-row-util-real-data.md` |
| design | `specs/so-ts-row-util/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| headerFingerprintPrior | `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_39043d1b` |
| priorTask | `task_34dbb85e` (design completed) |
| updatedAt | `2026-09-02T03:58:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · SSOT skill/workflow/rules · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-02) | New (Design+analy chốt) | Action |
|------|---------------------------|-------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-row-util` chưa liệt kê | Cite **Asset** · docs delta optional row `so-ts-row-util`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr ROW_UTIL · mirror `tencongtrinh_htk`→`name` | **no Schema_*** flatten |
| Import name | rebuild weak `name=route` khi thiếu | `name` ← `tencongtrinh_htk` · trống OK · **cấm** IsWeak → đoạn — **GAP-ROWUTIL-NAME-01** | guard rebuild + form bind |
| Prefix | `DefaultCodePrefix` → `TS-` | create/import prefix **`HT-`** · GIS short `HT` giữ — **GAP-ROWUTIL-PREFIX-01** | `DefaultCodePrefix` per type |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu key HTKT | Label VN đủ header dump · form Input/Select merge keys — **GAP-ROWUTIL-SPEC-01** | FE labels + form write |
| LOOKUP 6 fields | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data delta arrays — **GAP-ROWUTIL-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Text đủ dump · merge vào `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | schema chung (+ peer types) | Hide `type`/SL/ĐVT · show CT HTKT/loại/3 tầng/kmFrom/kmTo/dài/số trụ/chủ · hide-empty length/number_post/distance | FE type-profile |
| Range `kmTo` | form hiện / peer types vary | **S-LOC-RANGE** · **hiện** kmFrom+kmTo · optional khi trống · **cấm** ép `"0"` · **không** S-LOC-POINT — **GAP-ROWUTIL-RANGE-01** | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-row-util` board-only · optional Navigate — **GAP-ROWUTIL-ROUTE-01** | FE optional |
| TZ / XCO / SHARE | live list UTC range · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `htkt` cite only).

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · list `AssetListPage` · form `AssetFormPage` · **cấm** fork 32 file |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `RoadAssetsController` · `[Route("api/v1/asset/road-assets")]` |
| Service | `RoadAssetService` / `IRoadAssetService` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs` · table `rmms_road_assets` |
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `ROW_UTIL` · dump `tbl_infrastructure_row` · unit `HTKT` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `FindOfficialName` incl. `tencongtrinh_htk` · Prefix `HT` · **cấm** IsWeak→đoạn |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-row-util.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` §4 |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=ROW_UTIL` · alias board `/so-ts-row-util` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` |
| GIS | `htkt` ↔ `ROW_UTIL` · icon short `HT` (= IdCode prefix stem) |

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
| Auth perm | `asset.road-assets.read|create|update|delete` · FE `rmms-asset:road-assets:read|write` — debt align Auth |
| Persist | no-parent-json · flat scalars + `DumpSpecs` text JSON **attrs only** · **cấm** invent child table P1 |
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `htkt` |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinErpListFilterBar · LinCatalogDataGrid · LinCatalogListPagination · LinCatalogUiSchemaEditorModal · LinCatalogHistoryModal · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | re-export only · BFF only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Persist | `no-parent-json-field` | dumpSpecs = attr bag |
| BFF | proxy only | no business logic |
| Config | catalogKind `road-assets` · `LinCatalogUiSchemaEditorModal` | **cấm** `LinListTableConfigModal` |
| Filter layout | `filter-bar-layout-hard` | 1 hàng wrap · input+🔍 cụm phải · **cấm** nút Tìm riêng |
| Form surface | full-page · `data-form-cols="5"` · header chrome Lưu | **cấm** footer Lưu · **cấm** Slideout/Modal hồ sơ |
| Form reuse | S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` · **cấm** tab legacy |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | Parent API optional range — **không** mount trên pack |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | tenant-only · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-02T03:58:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=ROW_UTIL` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=ROW_UTIL`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `HT-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-row-util` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=ROW_UTIL&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=ROW_UTIL` · IdCode prefix **`HT-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** ROW_UTIL LOOKUP arrays |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t08` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · kmTo · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · … |
| Attr dump | `DumpSpecs` JSON text | tencongtrinh_htk · type_work_id · length · number_post · owner · located_within_id · protection_tructure · type_protection_structure_id · support_type_id · distance_road_center · distance_between_supports · status_hiring_is_within_row · build_location · tinhthanhpho · xaphuong |
| Flatten | **DEFER P2** | **GAP-ROWUTIL-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary name | `name` ← dump `tencongtrinh_htk` · trống OK |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`HT-`** (align import set gov-vn · `HT-infrastructure_row_*`) |
| GIS short | **`HT`** giữ (icon group htkt) |
| DefaultCodePrefix live | hôm nay `TS-` → đổi theo type `ROW_UTIL` hoặc override create — **GAP-ROWUTIL-PREFIX-01** |

### LOOKUP init-data delta (P1)

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `rowUtilWorkTypes` | distinct `type_work_id` | Dropdown * |
| `rowUtilLocatedWithin` | distinct `located_within_id` | Dropdown |
| `rowUtilProtectionTypes` | distinct `type_protection_structure_id` | Dropdown |
| `rowUtilSupportTypes` | distinct `support_type_id` | Dropdown |
| `rowUtilHiringStatuses` | distinct `status_hiring_is_within_row` | Dropdown |
| `rowUtilCrossSections` | distinct `build_location` | Dropdown |

**Cấm** hardcode FE không cite seed/init. Key dump `protection_tructure` **giữ typo** (không rename).

---

## 3. FormMode ↔ field bind (slim)

| Zone | Fields | controlHint | write |
|------|--------|-------------|-------|
| S-META | code · status · source · type(lock ROW_UTIL) | Text ro / Dropdown / SearchInput | scalar |
| S-ROUTE | route · routeNamed · routeSegment | SearchInput road-route | scalar |
| S-LOC-RANGE | kmFrom · kmTo | Text | scalar · **hiện cả hai** · optional khi trống · **cấm** ép `"0"` |
| S-NAME | name (`tencongtrinh_htk`) | Text | scalar + dumpSpecs mirror |
| S-ATTR | type_work · length · number_post · owner · located_within · protection_tructure · type_protection · support_type · distance_road_center · distance_between_supports · status_hiring · build_location · tinh/xa | Dropdown/Number/Text | dumpSpecs merge |
| S-GPS | lat · lng | Number | scalar |

Grid: ON CT HTKT/loại/3 tầng/kmFrom/kmTo/dài/số trụ/chủ · hide-empty length/number_post/distance · ẩn type/SL/ĐVT.

---

## 4. Tasks (ids → TL pack)

| ID | Owner | Summary |
|----|-------|---------|
| T-ROWUTIL-01 | Dev FE | Type profile `ROW_UTIL` grid columns + hide-empty rules |
| T-ROWUTIL-02 | Dev FE | S-ATTR editable + dumpSpecLabels VN (GAP-ROWUTIL-SPEC-01) |
| T-ROWUTIL-03 | Dev FE | Range: hiện kmFrom+kmTo · optional empty · no `"0"` coerce · S-LOC-RANGE only (GAP-ROWUTIL-RANGE-01) |
| T-ROWUTIL-04 | Dev FE/BE | name ← tencongtrinh_htk · cấm IsWeak→đoạn (GAP-ROWUTIL-NAME-01) |
| T-ROWUTIL-05 | Dev BE | DefaultCodePrefix / IdCode create `HT-` · GIS `HT` giữ (GAP-ROWUTIL-PREFIX-01) |
| T-ROWUTIL-06 | Dev BE | init-data LOOKUP arrays ROW_UTIL (GAP-ROWUTIL-LOOKUP-01) |
| T-ROWUTIL-07 | Dev FE | LeaveConfirmModal · useAlert · cấm native confirm |
| T-ROWUTIL-08 | Dev FE | Alias board `/so-ts-row-util` optional (GAP-ROWUTIL-ROUTE-01) |
| T-ROWUTIL-09 | Docs | Optional DOMAIN-MAP row `so-ts-row-util`→Asset |
| T-ROWUTIL-10 | TL | Task pack + acceptance · Dev `/agent-dev` |

**Migration:** none ở SA · flatten **DEFER**.

---

## 5. Quality / cấm

- **Cấm** ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · demo/localStorage SSOT  
- **Cấm** yarn build/e2e/start:std · Step 4b/migration ở role SA  
- BFF = proxy only · dumpSpecs P1 · no Schema_*  
- E2E: queued `/agent-qa*` only  

---

## 6. Handoff

| Role | Need |
|------|------|
| **TL** | task/so-ts-row-util.md · T-ROWUTIL-* · gates recorded |
| Dev | profile · S-ATTR · labels · prefix HT- · init LOOKUP · LeaveConfirm · alias · Range |
| QA | e2e queued · filter `?type=ROW_UTIL` · CRUD live · leave-confirm |

## Version meta

| | |
|--|--|
| skillId | `agent-sa` |
| skillVersion | `2026.08.24.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| headerFingerprintPrior | `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| status | `confirmed` |
| solution_confirm | `approve` |
| writtenAt | `2026-09-02T03:58:00.000Z` |
