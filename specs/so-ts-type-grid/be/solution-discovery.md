# SA — Solution discovery — so-ts-type-grid (Sổ TS — shell grid/form theo loại)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_38fc194c`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-type-grid` |
| title | Sổ TS — grid/form theo loại (shell + section) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | — (shell · `?type=` · clusters CTX §3 · out `route_master`/`pavement`) |
| cluster | shell · mount S-* by cluster |
| dump | per-type gov-vn · parent SSOT · **không** flatten Schema_* P1 |
| status | `confirmed` |
| design_confirm | approve (`task_1123e84d`) |
| solution_confirm | **approve** (autoApprove=ON · `task_38fc194c`) |
| domain_map | **Asset** · **MUST** add slug `so-ts-type-grid` → Asset (`GAP-SOTS-DOMAIN-01`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts` · alias board `/so-ts-type-grid` |
| mfeStdUrl | `http://localhost:9301/so-ts-type-grid` |
| peerStdUrl | `http://localhost:9301/so-ts` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-type-grid-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-type-grid-real-data.md` |
| design | `specs/so-ts-type-grid/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c` |
| headerFingerprintPrior | `sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_38fc194c` |
| priorTask | `task_1123e84d` (design completed) |
| updatedAt | `2026-09-19T01:15:00.000Z` |
| versionGate | `rechecked` (stub draft → first fill · SSOT pack `sa/list@session`) |

## § Delta Current vs New (`edit_page` · SA)

| Area | Current (live) | New (Design+PO+analy) | Action |
|------|----------------|----------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · cite live · CTX `so-ts` = **alias docs only** | keep · **cấm** invent `api/v1/so-ts/*` |
| BFF | `web-bff/api/v1/asset/road-assets` proxy | **giữ** proxy only | keep |
| DOMAIN-MAP | thiếu slug shell | add `so-ts-type-grid` → Asset | docs delta · T-DOC |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs JSON P1 · **no Schema_*** flatten | **GAP-SOTS-FORM-01 = dumpSpecs P1** |
| List columns | ad-hoc `*_HIDE_COLS` | shared `typeColumnProfiles` · hide-empty fill% · children override | FE · T-PROF |
| Form sections | inline ATTR blocks 1 file | Mountable S-META/ROUTE/LOC-*/NAME/ATTR/GPS · **cấm** fork | FE · T-SEC |
| Tab legacy | risk DRVN multi-tab | **cấm** tab · CatalogFormShell 5col only | FE |
| Filter bar | LinErpListFilterBar | harden · search must work · **cấm** nút Tìm | FE · T-FILTER |
| gap-no-source | CULVERT_X CSV 0 | empty + toast · **cấm** seed | FE · T-CHILD note |
| Out of scope | route_master / PAVEMENT on `/so-ts` | slug `road-route` · `pavement-section` | keep OUT |
| Leave | `window.confirm` risk | `LeaveConfirmModal` | FE |
| CRUD | live BFF | **giữ** — cấm demo/localStorage | keep |

**Không đổi:** Kind B shell `/so-ts` · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT · entity table / controller route.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · list `AssetListPage` · form `AssetFormPage` · **cấm** fork 32 type files |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `RoadAssetsController` · `[Route("api/v1/asset/road-assets")]` |
| Service | `RoadAssetService` / `IRoadAssetService` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs` · table `rmms_road_assets` |
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seeds + dumpSpecs |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` (+ children) |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` · **add** `so-ts-type-grid` |
| Docs | `docs/context/features/so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts` · `?type=` optional · alias board `/so-ts-type-grid` → `/so-ts` |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` · DOMAIN-MAP (feature shell → Asset) |
| API host | `Domains/Asset/` · `RoadAssetsController` |
| BFF | `bff/domains/asset/…` · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Asset` · ui_repo_confirm |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | `asset.road-assets.read|create|update|delete` · FE `rmms-asset:road-assets:read|write` |
| Persist | no-parent-json · flat scalars + `DumpSpecs` text JSON **attrs only** · **cấm** invent child table / parent `*Json` P1 |
| Out of pack | Schema_* flatten · History API invent · Kind F map · Excel wizard · seed CULVERT_X |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · `LinCatalogHistoryModal` · `LeaveConfirmModal` · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT · SETUP-P2-12 | re-export only · BFF only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Auth | Authentication + `[RequirePermission]` | codes Auth · debt stub |
| Persist | `no-parent-json-field` | dumpSpecs = attr bag · **không** line array parent JSON |
| BFF | proxy only | no business logic |
| Config | catalogKind `road-assets` · `LinCatalogUiSchemaEditorModal` | **cấm** `LinListTableConfigModal` / `configHint` |
| Filter layout | `filter-bar-layout-hard` | 1 hàng wrap · input+🔍 cụm phải · **cấm** nút Tìm riêng |
| Form surface | full-page · `data-form-cols="5"` · header chrome Lưu | **cấm** footer Lưu · **cấm** Slideout/Modal hồ sơ · **cấm** tab legacy |
| Form reuse | S-META · S-ROUTE · S-LOC-POINT\|RANGE · S-NAME · S-ATTR · S-GPS | **cấm** fork · children mount same |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | `/review-timezone-implement` | Parent API optional `fromDate`/`toDate` — **không** mount shell pack |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | `/implement-view-cross-company` | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 path |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | `/implement-shared-table` | tenant-only road asset · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-19T01:15:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=&search=&route=&kmFrom=&kmTo=&orgUnit=` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (+ type from QS/form) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| S-ALIAS | navigate | — | `/so-ts-type-grid` → `/so-ts` |
| Lookup type | SearchInput | filter (+ form) | Integration asset-types · ẩn khi `?type=` |
| Lookup route | SearchInput ×3 | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list + filters | — | page=1 on filter change · profile cột theo `?type=` / all-types |
| create | empty · init-data · type từ QS hoặc SearchInput | POST body + dumpSpecs merge | IdCode BE · POINT ẩn `kmTo` nếu dump không có |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | LeaveConfirmModal dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `type` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (ẩn khi deep-link) | optional · lock khi `?type=` |
| `search` | SearchTextInput | mã · tên · tuyến · QR |
| `route` | SearchInput road-route | master |
| `kmFrom` | Text chainage | filter range start |
| `kmTo` | Text chainage | filter range end · POINT form ẩn cột |
| `orgUnit` | SearchInput tree org-unit | QS |
| `page` / `pageSize` | pagination | 50/100/200/500 |

**Không mount** trên Zone B shell: `fromDate` · `toDate`.

---

## 2. Form data analysis

| Screen | Fields | Source type | Persist | Notes |
|--------|--------|-------------|---------|-------|
| List filter | search · type · route · kmFrom/kmTo · orgUnit | query | — | LinErpListFilterBar |
| List grid | S-META scalars + route 3 cột + dumpSpecs parse per profile | transaction + dumpSpecs | `RoadAssetEntity` | typeColumnProfiles · hide-empty |
| Form S-* | § Field map shell | transaction + dumpSpecs | scalars + DumpSpecs text | full 5 cột · mount by cluster |
| History | shared modal | — | — | stub OK |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · ẩn khi QS |
| route | SearchInput `road-route` | `?route=` / body `route` |
| routeNamed | SearchInput `road-route` | body `routeNamed` |
| routeSegment | SearchInput `road-route` | body `routeSegment` |
| kmFrom | Text chainage | `?kmFrom=` / body `kmFrom` |
| kmTo | Text | `?kmTo=` / body · **ẩn** POINT khi dump không có |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode |
| name | Text / SearchInput (biển) | body `name` |
| status | Dropdown | init-data `statuses` · body `status` |
| source | Dropdown | init-data `sources` · body `source` |
| quantity / unitCode | Number / Text | scalars · hide-empty |
| dumpSpecs.* | Select/SearchInput/Number/Text | **dumpSpecs** JSON bag · S-ATTR · children keys |
| side | Dropdown LOOKUP_STATIC | dumpSpecs / scalar · POINT |
| lat / lng | Number | body `lat`/`lng` |
| qr / value / note | Text / Money / TextArea | scalars |
| updatedAt | Date readonly | audit UTC display |

### Field map (ui → dto → db / dumpSpecs) — shell scalars

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` |
| type | Type | `type` |
| route | Route | `route` |
| routeNamed | RouteNamed | `route_named` |
| routeSegment | RouteSegment | `route_segment` |
| kmFrom | KmFrom | `km_from` |
| kmTo | KmTo | `km_to` (null OK · POINT ẩn) |
| status | Status | `status` |
| source | Source | `source` |
| quantity | Quantity | `quantity` |
| unitCode | UnitCode | `unit_code` |
| lat / lng | Lat / Lng | `lat` / `lng` |
| qr | Qr | `qr` |
| value | ValueVnd | `value_vnd` |
| note | Note | `note` |
| dumpSpecs.* | via DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** invent parallel parent JSON · **cấm** child table P1 trên shell. ATTR keys per type = children features / dumpSpecLabels — shell chỉ mount rules.

### Persist / migration / dumpSpecs vs flatten — **GAP-SOTS-FORM-01**

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten ATTR → Schema_* | **DEFER P2** — **giữ dumpSpecs JSON** this turn (PO · Design · SA chốt) |
| dumpSpecs write | Form S-ATTR merge keys → JSON string trên POST/PUT · list parse cùng keys |
| New Schema_* / migration | **none** P1 · **không** Step 4b ở SA/Dev trừ ticket flatten riêng |
| Seed / init | giữ init-data statuses/sources/units/vitriOptions · **cấm** seed CULVERT_X |
| data-import | `RoadAssetCatalogHandler` · count 0 OK · gap-no-source toast |

---

## 3. API catalog

### API-01: GET `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Paged list · optional `type` |
| Permission | `asset.road-assets.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | query: `type` · `search` · `route` · `kmFrom` · `kmTo` · `orgUnit` · `page` · `pageSize` |
| Response | `RoadAssetPagedResult` · items `RoadAssetDto` (+ dumpSpecs) |
| Errors | toast · empty grid OK · gap-no-source toast |
| Form surfaces | S-LIST |
| Field map | grid ← DTO + parse dumpSpecs per profile |
| Migration | none |

### API-02: GET `/api/v1/asset/road-assets/{id}`

| | |
|--|--|
| Purpose | Detail · View/Edit/Copy |
| Permission | `asset.road-assets.read` |
| XCO | `xco_get_only` |
| Response | `RoadAssetDto` |
| Errors | 404 → list + toast · 403 toast |
| Form surfaces | S-FORM-EDIT/VIEW/COPY |

### API-03: POST `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Create |
| Permission | `asset.road-assets.create` |
| Body | scalars + `dumpSpecs` merge |
| FormMode | create · copy |

### API-04: PUT `/api/v1/asset/road-assets/{id}`

| | |
|--|--|
| Purpose | Update scalars + replace dumpSpecs merge |
| Permission | `asset.road-assets.update` |
| FormMode | edit |

### API-05: DELETE `/api/v1/asset/road-assets/{id}`

| | |
|--|--|
| Purpose | Soft delete |
| Permission | `asset.road-assets.delete` |
| Form surfaces | S-ACT-DELETE |

### API-06: GET `/api/v1/asset/road-assets/init-data`

| | |
|--|--|
| Purpose | statuses · sources · units · vitriOptions (+ type-specific arrays khi children delta) |
| Permission | `asset.road-assets.read` |
| Form surfaces | create/edit |

**BFF:** cùng path dưới `web-bff/api/v1/asset/road-assets` · **proxy only** · **cấm** business logic BFF.

---

## Gaps chốt (SA → TL)

| ID | Decision | Owner |
|----|----------|-------|
| GAP-SOTS-COL-01 | module `typeColumnProfiles` shared · children override | Dev FE · T-PROF |
| GAP-SOTS-FORM-01 | **dumpSpecs JSON P1** · Schema_* flatten **DEFER P2** | SA confirmed · Dev FE merge |
| GAP-SOTS-DOMAIN-01 | add `so-ts-type-grid` → Asset on DOMAIN-MAP | Dev/docs · T-DOC |
| GAP-SOTS-API-DOC | cite `api/v1/asset/road-assets` · CTX `so-ts` = alias | T-DOC |
| GAP-CULVERT-X-01 | UI mẫu · empty+toast · **cấm** seed | Dev FE · T-CHILD |
| GAP-SOTS-REUSE-01 | mount S-* · **cấm** fork | Dev FE · T-SEC |
| GAP-SOTS-TAB-01 | **cấm** tab legacy | Dev FE |
| GAP-FILTER-BAR-01 | LinErpListFilterBar · **cấm** nút Tìm · search must work | Dev FE · T-FILTER |
| GAP-SOTS-LEAVE-01 | LeaveConfirmModal · **cấm** native | Dev FE |
| GAP-SOTS-OUT-01 | route_master/pavement out `/so-ts` | keep |

## Tasks đề xuất (ids · TL chốt)

| id | Việc | Layer |
|----|------|-------|
| T-PROF | Module `typeColumnProfiles` · cluster defaults · hide-empty fill% · replace ad-hoc | FE |
| T-SEC | Extract S-META/S-ROUTE/S-LOC-*/S-NAME/S-ATTR/S-GPS · mount by cluster | FE |
| T-FORM | ATTR editable đủ mẫu · merge dumpSpecs · bỏ `<dl>`-only path | FE |
| T-FILTER | Harden LinErpListFilterBar · search must work · **cấm** nút Tìm | FE |
| T-DOC | DOMAIN-MAP slug + CTX API path cite `asset/road-assets` | docs |
| T-CHILD | Queue `so-ts-{kebab(type)}` reuse shell · gap-no-source | FE/queue |

**BE P1:** không API mới · không migration · optional docs only.

---

## Out of pack

- Schema_* / DB flatten ATTR  
- invent History API / map canvas / Excel wizard  
- seed CULVERT_X / invent rows  
- invent `api/v1/so-ts/*` · ERP.*  
- Step 4b / yarn build / e2e / start:std ở role SA  

---

## Confirm

| Gate | Value |
|------|-------|
| design_confirm | approve (`task_1123e84d`) |
| solution_confirm | **approve** (autoApprove=ON · `task_38fc194c`) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |

## Handoff → TL

| Item | Value |
|------|-------|
| FormMode↔API | § FormType pack |
| Entity | `RoadAssetEntity` flat + DumpSpecs · **cấm** parent line JSON · **no** flatten P1 |
| BFF | proxy only |
| MFE | edit `AssetListPage` / `AssetFormPage` · **cấm** Write native ở SA |
| Tasks | T-PROF · T-SEC · T-FORM · T-FILTER · T-DOC · T-CHILD |
| compact | `handoff/sa-compact.md` |

## DoR checklist (PASS)

| Check | |
|-------|--|
| Design confirmed + compact read | ✅ |
| real-data §A+§B cite · **cấm** invent API | ✅ |
| FormType list · FormMode↔API đủ | ✅ |
| BFF vs API · ownership · DOMAIN-MAP | ✅ |
| Persist dumpSpecs P1 · no flatten migration · no-parent-json | ✅ |
| Gates TZ/XCO/SHARE recorded | ✅ |
| solution_confirm approve (autoApprove) | ✅ |
| compact ≤5KB written | ✅ |
| **cấm** Write MFE · **cấm** e2e/build | ✅ |

## Version meta (REQUIRED)

| Key | Value |
|-----|-------|
| skillVersion | `2026.08.25.01` (sa pack session) |
| schemaVersion | `1` (handoff compact) |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c` |
| writtenAt | `2026-09-19T01:15:00.000Z` |
| taskId | `task_38fc194c` |
