# SA — Solution discovery — csdl-bieu-08 (edit_page · T-XLS-S08)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_72b0354c`)  
> Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · form-type-task-pack (`list`) · filter-bar-layout-hard · **/implement-export-import-excel**  
> Requires: Design **confirmed** · prior typed SA KEEP · compact priors · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration @ SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT · Xuất/Nhập Excel |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** (T-XLS-S08 · Wave 1 · pilot with S01) |
| packKind | **`list`** |
| status | `confirmed` |
| design_confirm | approve (`task_b2622193`) |
| solution_confirm | **approve** (autoApprove=ON · `task_72b0354c`) |
| domain_map | **Asset** · `csdl-bieu-08` → `asset` · **KEEP** |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `traffic-safety` |
| formNo | `08` |
| columns | `45` · **11 nhóm** |
| IdCode | `AT-yyyyMMdd-nnnn` (KEEP) |
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **import_now** |
| Q-XLS-FILENAME | `Bieu08_HeThongATGT_{yyyyMMdd}.xls` |
| Q-XLS-TYPE | **one_sheet_45** |
| golden | Cục 16-sheet · sheet **Biểu 8** · **cấm** 12+8 · **cấm** wide-row |
| controlHint | `specs/_data-analy/features/csdl-bieu-08-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-08-real-data.md` |
| design | `specs/csdl-bieu-08/ui/design.md` (confirmed) |
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| analyReuse | **hash match** · **cấm** reopen typed 45/11 · delta XLS only |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_72b0354c` |
| priorTask | `task_b2622193` (design completed) |
| priorTypedSa | `task_53a8d473` (Schema_CsdlBieu8+11 KEEP) |
| peerPilot | `csdl-bieu-01` T-XLS-S01 |
| updatedAt | `2026-09-18T05:15:00.000Z` |
| versionGate | `aligned` |

## § Delta Current vs Target (`edit_page` · export/import)

| Area | Current live | Target (T-XLS-S08) | Action |
|------|--------------|--------------------|--------|
| Typed CRUD | Schema_CsdlBieu8 + 11 children · Slideout shared+1 | **KEEP** | **cấm** reopen |
| Toolbar | CRUD actions | **+Xuất Excel +Nhập Excel** catalogToolbar | **GAP-BIEU08-XLS-01** / UI |
| Export API | stub / toast ≠ done · no filter parity | filtered · golden sheet **Biểu 8** · `Bieu08_HeThongATGT_{yyyyMMdd}.xls` · binary · **one_sheet_45** | **GAP-BIEU08-XLS-01**/05 |
| Import API | missing / generic | import_now · map sheet Biểu 8 → shell+typed+child · skipBridge soft | **GAP-BIEU08-XLS-05** |
| BFF | proxy CRUD | **KEEP** proxy binary + multipart | T-XLS-BFF-01 |
| Filter bar | list filters | **cấm** Xuất trên LinErpListFilterBar | **GAP-BIEU08-XLS-04** / GAP-FILTER-BAR-08 |
| Scope | — | **Q-XLS-SCOPE=filtered** · same QS as list | pass-through |
| Layout | typed | **cấm** 1 hàng kéo ngang lệch mẫu | **GAP-BIEU08-XLS-06** |
| Golden | — | Cục 16-sheet sheet Biểu 8 · **cấm** 12+8 | **GAP-BIEU08-XLS-03** |
| Toast | stub = done | real blob download | **GAP-BIEU08-XLS-02** |

**Không đổi:** typed entity/migration · BFF proxy-only · soft-delete · tenant `CompanyCode` · pageSize · LeaveConfirm · filter-bar-layout-hard · alias/hub · **cấm** ERP.*.

---

## 1. Ownership (KEEP + XLS widen)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · alias `/csdl-bieu-08` · hub `?resource=traffic-safety` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **widen** export/import |
| Service | `CsdlCatalogService` · branch `resource=traffic-safety` → Excel Biểu 8 map |
| Persist | shell + **`CsdlBieu8Entity`** + **11 children** · **KEEP** · **no new migration** @ XLS |
| Schema | **`Schema_CsdlBieu8`** KEEP |
| BFF | `CsdlCatalogRecordsBffController` · proxy only = **yes** (export + multipart) |
| FE | `services/csdlSoSach/endpoint.ts` BASE `/asset/csdl-records` · catalogToolbar + blob |
| Skill | `/implement-export-import-excel` |

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-08` |
| UI hub | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| API CRUD | `api/v1/asset/csdl-records` (**KEEP**) |
| Export | `GET api/v1/asset/csdl-records/export?resource=traffic-safety&…filters` |
| Import preview | `POST api/v1/asset/csdl-records/import/preview` multipart |
| Import commit | `POST api/v1/asset/csdl-records/import` multipart |
| BFF | `web-bff/api/v1/asset/csdl-records/{export\|import\|import/preview}` |
| FE BASE | `/asset/csdl-records` |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` |
| Domain | **Asset** / `asset` |
| Export/Import | same controller · Excel service · **binary** export · multipart import |
| BFF | proxy only = yes |
| MFE | toolbar Xuất/Nhập · filter QS → export · **cấm** filter-bar export |
| Persist | typed KEEP on import · **cấm** DetailJson dump · **cấm** wide 45 |
| Auth | `asset.csdl-records.read` (export) · `create/update` (import) |
| Out of pack | Step 4b @ SA · new migration · org SearchInput P2 · map |

## SSOT / anti-duplicate

| Concern | Note |
|---------|------|
| UI | Lin* SSOT · export **không** trên LinErpListFilterBar |
| HTTP | `apiClient` · BFF only |
| Excel | `/implement-export-import-excel` · golden Cục sheet Biểu 8 · checksum **45** cols |
| Persist | no-parent-json-field · child_tables KEEP |

## Implement gates (RECORDED · KEEP)

| Gate | Decision | Note |
|------|----------|------|
| TZ | **`tz_na`** | export không date-range business |
| XCO | **`xco_get_only`** | export/list tenant; detail GET view only |
| SHARE | **`share_tenant`** | import rows inherit `CompanyCode` |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T05:15:00.000Z`

---

## FormType pack (`list`) — delta surfaces

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST / S-FORM-* | KEEP typed | list/create/edit/view/copy | API-01…05 **KEEP** |
| **S-XLS-EXPORT** | catalogToolbar | export | **API-XLS-01** |
| **S-XLS-IMPORT** | catalogToolbar + file | import | **API-XLS-02** (+ preview **API-XLS-03**) |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list/create/edit/view/copy/delete | **KEEP** prior typed | **KEEP** | Schema_CsdlBieu8+11 |
| **export** | — | GET export + **same filter QS** | filtered · binary · filename locked · one_sheet_45 |
| **import** | file pick → optional preview | POST import multipart | import_now · skipBridge · typed+child upsert |

### List filter query keys (KEEP — also export QS)

| Query key | UI control | Export |
|-----------|------------|--------|
| `resource` | const `traffic-safety` | required |
| `search` | SearchTextInput | apply |
| `province` | Dropdown | apply |
| `status` | Dropdown | apply |
| `roadCode` | SearchInput | apply |
| `kmFrom` / `kmTo` | Number | apply |
| `side` | Dropdown | apply |
| `type` / `assetType` | Dropdown 11 enum | apply |
| `page` / `pageSize` | pagination | **export ignores page** · filter only · cap per policy |

---

## 2. Form data analysis (XLS)

| Surface | Inputs | Persist | Notes |
|---------|--------|---------|-------|
| S-XLS-EXPORT | filter QS only | derived list | flatten **45** header cols · **cấm** invent body · **cấm** wide-row layout |
| S-XLS-IMPORT | `file` + `skipBridge` | shell + parent + **1** child | golden sheet **Biểu 8** · map 45 → typed · subset_by_type |

**controlHint:** `exportExcel` / `importExcel` = ToolbarButton (+file) — **không** invent SearchInput/Dropdown.

Header SSOT (45):  
`code|roadCode|roadName|province|kmFrom|kmTo|side|assetType|signCode|signSize|signPoleCount|signPoleHeightM|markerKind|markerQty|markerStructure|markerAreaM2|medianKind|medianStructure|medianLengthM|medianHeightM|antiGlareKind|antiGlareStructure|antiGlareQty|antiGlareLengthM|islandType|islandStructure|islandAreaM2|studSize|studQty|guardrailKind|guardrailStructure|guardrailLengthM|guardrailReflector|markCode|markLengthM|markWidthM|markAreaM2|cushionQty|mirrorQty|signalPoleKind|signalHeightM|lampKind|lampQty|builtYear|status`

---

## 3. API catalog (XLS — full blocks)

### API-XLS-01: GET `/api/v1/asset/csdl-records/export`

| Field | Value |
|-------|-------|
| Purpose | Xuất Excel Biểu 08 · filtered · binary |
| Method/Path | `GET …/export?resource=traffic-safety&…` |
| Auth | `asset.csdl-records.read` |
| Response | `application/vnd.ms-excel` · `Content-Disposition: Bieu08_HeThongATGT_{yyyyMMdd}.xls` |
| Sheet | one_sheet_45 · golden Cục sheet Biểu 8 |
| Form surfaces | S-XLS-EXPORT · catalogToolbar |
| Gap live | stub/toast → **GAP-BIEU08-XLS-01**/02/05 |

### API-XLS-02: POST `/api/v1/asset/csdl-records/import`

| Field | Value |
|-------|-------|
| Purpose | Nhập Excel · commit typed rows (import_now) |
| Method/Path | `POST …/import?resource=traffic-safety` multipart |
| Auth | `asset.csdl-records.create` (+ update upsert) |
| Body | `file` · `skipBridge` |
| Form surfaces | S-XLS-IMPORT |
| Gap live | missing/generic → **GAP-BIEU08-XLS-05** |

### API-XLS-03: POST `/api/v1/asset/csdl-records/import/preview`

| Field | Value |
|-------|-------|
| Purpose | Preview validate trước commit |
| Method/Path | `POST …/import/preview` multipart |
| Form surfaces | S-XLS-IMPORT (pre-step) |
| Notes | soft errors · **không** persist |

---

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Typed parent/children | **KEEP** Schema_CsdlBieu8 + 11 child tables |
| XLS migration | **none** mới @ SA — import writes existing typed schema |
| Step 4b | **cấm** @ SA · Dev only if schema drift (none expected) |

---

## 5. BFF vs API

| Layer | Decision |
|-------|----------|
| API | Excel build/parse · filter apply · typed map · filename |
| BFF | **proxy only** — export QS forward · multipart forward · binary passthrough |
| FE | blob download · file input · toast real result · pass filter QS |

---

## 6. Tasks for Team Lead (ids)

| Id | Scope |
|----|-------|
| T-XLS-BE-01 | Widen `ExportAsync` — filter QS · Biểu 8 **45** cols · golden sheet · filename locked · one_sheet_45 |
| T-XLS-BE-02 | Widen Import commit/preview — sheet Biểu 8 → shell+parent+1 child · skipBridge |
| T-XLS-BE-03 | Controller bind export filter query params (parity list · incl. `type`) |
| T-XLS-BFF-01 | Verify binary + multipart proxy (no logic) |
| T-XLS-FE-01 | catalogToolbar Xuất/Nhập · blob download · file input · toast |
| T-XLS-FE-02 | Pass **current filter QS** to export · **cấm** filter-bar export btn |
| T-XLS-QA-01 | E2E S-XLS-EXPORT / S-XLS-IMPORT (queued `/agent-qa*`) |

---

## 7. Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=import_now · Q-XLS-FILENAME locked · Q-XLS-TYPE=one_sheet_45 · Design approve)

## 8. Cấm (SA)

- ERP.* · invent API prefix · export trên LinErpListFilterBar · 12+8 hồ sơ · wide-row · 11-sheet invent  
- reopen typed 45/11 CRUD · Write MFE/native · Step 4b/migration · yarn build/e2e/start:std  
- toast-stub=done · invent infra

## Version meta (REQUIRED)

| Key | Value |
|-----|-------|
| skillVersion | 2026.09.05.03 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| contentHash | sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c |
| headerFingerprint | sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f |
| solution_confirm | approve |
| writtenAt | 2026-09-18T05:15:00.000Z |
