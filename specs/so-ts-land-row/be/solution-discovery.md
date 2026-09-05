# SA — Solution discovery — so-ts-land-row (Sổ TS — Đất thuộc TS HT)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_6047e0c0`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-land-row` |
| title | Sổ TS — Đất thuộc TS HT |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `LAND_ROW` |
| cluster | `land` · ô KCHT `t33` |
| dump | `tbl_land_btra` |
| status | `confirmed` |
| design_confirm | approve (`task_0abc91dc`) |
| solution_confirm | **approve** (autoApprove=ON · `task_6047e0c0`) |
| domain_map | **Asset** (`so-ts-land-row` → inherit parent `asset` · prefix `api/v1/asset`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=LAND_ROW` · alias board `/so-ts-land-row` |
| mfeStdUrl | `http://localhost:9301/so-ts-land-row` |
| peerStdUrl | `http://localhost:9301/so-ts?type=LAND_ROW` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-land-row-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-land-row-real-data.md` |
| design | `specs/so-ts-land-row/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| headerFingerprintPrior | `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_6047e0c0` |
| priorTask | `task_0abc91dc` (design completed) |
| updatedAt | `2026-09-01T08:45:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · SSOT skill/workflow/rules · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy chốt) | Action |
|------|---------------------------|-------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-land-row` chưa liệt kê | Cite **Asset** · docs delta optional row `so-ts-land-row`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr LAND_ROW · mirror `construction`→`name` | **no Schema_*** flatten |
| Import name | rebuild `FindOfficialName` / `IsWeakAssetName` · GIS short `HT` · DefaultCodePrefix **`TS-`** | `name` ← `construction` · trống OK · **cấm** IsWeak → đoạn · create/import prefix **`DT-`** · GIS `HT` giữ — **GAP-LAND-NAME-01** · **GAP-LAND-PREFIX-01** | guard rebuild + `DefaultCodePrefix` |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu key đất | Label VN đủ header dump · form Input/Select merge keys — **GAP-LAND-SPEC-01** | FE labels + form write |
| LOOKUP status_land_lot / exploited / pavement / location / access_road | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `landLotStatuses[]` · `landExploitTypes[]` · `landAccessPavementTypes[]` · `landCrossSections[]` · bool Có/Không — **GAP-LAND-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer types) | Editable Dropdown/Number/Text đủ dump · merge vào `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | 1 schema (+ profile peer types) | Hide `type`/`kmTo`/qty/unit · show CT · TT thửa · xã/tỉnh · CQ · dài/rộng/DT · hide-empty length/width/xaphuong | FE type-profile |
| Range `kmTo` | form hiện / bắt buộc với type ≠ KM_POST | **S-LOC-RANGE** · ẩn `kmTo` fill 0 · **cấm** ép `"0"` · **không** S-LOC-POINT — **GAP-LAND-RANGE-01** | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-land-row` board-only · optional Navigate — **GAP-LAND-ROUTE-01** | FE optional |
| TZ / XCO / SHARE | live list UTC range · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `dat-hlat` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `LAND_ROW` · dump `tbl_land_btra` · unit `HTKT` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `FindOfficialName` incl. `construction` · Prefix `DT` · `IsWeakAssetName` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-land-row.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=LAND_ROW` · alias board `/so-ts-land-row` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` |
| GIS | `dat-hlat` ↔ `LAND_ROW` · icon short `HT` (≠ IdCode `DT-`) |

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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `dat-hlat` |

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

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T08:45:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=LAND_ROW` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=LAND_ROW`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `DT-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-land-row` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=LAND_ROW&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=LAND_ROW` · IdCode prefix **`DT-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** LAND_ROW LOOKUP arrays |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t33` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · kmTo · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · … |
| Attr dump | `DumpSpecs` JSON text | construction · status_land_lot_id · under_managemen · under_operation · exploited_id · length · width · total_area · width_access_road · pavement_type_access_road_id · distance_road_center · access_road · location_id · lengthiness_access_road · tinhthanhpho · xaphuong |
| Flatten | **DEFER P2** | **GAP-LAND-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary name | `name` ← dump `construction` · trống OK |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`DT-`** (align import set gov-vn) |
| GIS short | **`HT`** giữ (icon group land · ≠ IdCode) |
| DefaultCodePrefix live | hôm nay `TS-` → đổi theo type `LAND_ROW` hoặc override create — **GAP-LAND-PREFIX-01** |

### LOOKUP init-data delta (P1)

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `landLotStatuses` | distinct `status_land_lot_id` | Dropdown * |
| `landExploitTypes` | distinct `exploited_id` | Dropdown |
| `landAccessPavementTypes` | distinct `pavement_type_access_road_id` | Dropdown |
| `landCrossSections` | distinct `location_id` (L/R) | Dropdown |
| bool labels | Có / Không | `access_road` |

**Cấm** hardcode FE không cite seed/init. Key dump `under_managemen` **giữ typo** (không rename).

---

## 3. FormMode ↔ field bind (slim)

| Zone | Fields | controlHint | write |
|------|--------|-------------|-------|
| S-META | code · status · source · type(lock LAND_ROW) | Text ro / Dropdown / SearchInput | scalar |
| S-ROUTE | route · routeNamed · routeSegment | SearchInput road-route | scalar |
| S-LOC-RANGE | kmFrom · **ẩn kmTo** fill 0 | Text | scalar · **cấm** ép `"0"` |
| S-NAME | name (`construction`) | Text | scalar + dumpSpecs mirror |
| S-ATTR | status_land_lot · under_managemen · under_operation · exploited · length/width/total_area · width_access_road · pavement · distance_road_center · access_road · location · lengthiness_access_road · tinh/xa | Dropdown/Number/Text | dumpSpecs merge |
| S-GPS | lat · lng | Number | scalar |

Grid: ON CT/tuyến/TT thửa/xã/tỉnh/CQ/dài/rộng/DT · hide-empty length/width/xaphuong · ẩn type/kmTo/SL/ĐVT.

---

## 4. Tasks (ids → TL pack)

| ID | Owner | Summary |
|----|-------|---------|
| T-LAND-01 | Dev FE | Type profile `LAND_ROW` grid columns + hide-empty rules |
| T-LAND-02 | Dev FE | S-ATTR editable + dumpSpecLabels VN (GAP-LAND-SPEC-01) |
| T-LAND-03 | Dev FE | Range: hide kmTo fill 0 · no `"0"` coerce · S-LOC-RANGE only (GAP-LAND-RANGE-01) |
| T-LAND-04 | Dev FE | name ← construction · cấm IsWeak→đoạn (GAP-LAND-NAME-01) |
| T-LAND-05 | Dev BE | DefaultCodePrefix / IdCode create `DT-` · GIS `HT` giữ (GAP-LAND-PREFIX-01) |
| T-LAND-06 | Dev BE | init-data LOOKUP arrays LAND_ROW (GAP-LAND-LOOKUP-01) |
| T-LAND-07 | Dev FE | LeaveConfirmModal · useAlert · cấm native confirm |
| T-LAND-08 | Dev FE | Alias board `/so-ts-land-row` optional (GAP-LAND-ROUTE-01) |
| T-LAND-09 | Docs | Optional DOMAIN-MAP row `so-ts-land-row`→Asset |
| T-LAND-10 | TL | Task pack + acceptance · Dev `/agent-dev` |

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
| **TL** | task/so-ts-land-row.md · T-LAND-* · gates recorded |
| Dev | profile · S-ATTR · labels · prefix DT- · init LOOKUP · LeaveConfirm · alias · Range hide kmTo |
| QA | e2e queued · filter `?type=LAND_ROW` · CRUD live · leave-confirm |

## Version meta

| | |
|--|--|
| skillId | `agent-sa` |
| skillVersion | `2026.08.24.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| headerFingerprintPrior | `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| status | `confirmed` |
| solution_confirm | `approve` |
| writtenAt | `2026-09-01T08:45:00.000Z` |
