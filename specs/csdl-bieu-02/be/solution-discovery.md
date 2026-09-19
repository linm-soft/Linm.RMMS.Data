# SA — Solution discovery — csdl-bieu-02 (edit_page · T-XLS-S02)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_5ee91442`)  
> Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · form-type-task-pack (`list`) · filter-bar-layout-hard · **/implement-export-import-excel**  
> Requires: Design **confirmed** · PO compact · data_analy compact · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · yarn build/e2e/start:std · Step 4b/migration @ SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu · **Xuất Excel** (Import DEFER P1) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** (T-XLS-S02 · Wave 1) |
| packKind | **`list`** |
| status | `confirmed` |
| design_confirm | approve (`task_d763be35`) |
| solution_confirm | **approve** (autoApprove=ON · `task_5ee91442`) |
| domain_map | **Asset** (`csdl-bieu-02` → `asset` · **KEEP**) |
| sa_tz_gate | **`tz_na`** (KEEP) |
| sa_xco_gate | **`xco_get_only`** (KEEP) |
| sa_shared_table | **`share_tenant`** (KEEP) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-02` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-` (KEEP) |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| analyReuse | **hash match** · **cấm** reopen typed 48-col · delta XLS export only |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_5ee91442` |
| priorSa | `task_547af74d` (typed CRUD · Schema_CsdlBieu2 · KEEP) |
| updatedAt | `2026-09-18T02:05:00.000Z` |
| versionGate | `aligned` (contentHash = prior PO/Design/data_analy) |

## § Delta Current vs Target (`edit_page` · export P0)

| Area | Current live | Target (T-XLS-S02) | Action |
|------|--------------|--------------------|--------|
| CRUD typed 48 | Schema_CsdlBieu2 · Slideout GPS×3 | **KEEP** | **cấm** reopen |
| Filter bar | LinErpListFilterBar | **KEEP** · **cấm** nút Xuất trên filter | GAP-FILTER-BAR-08 |
| Toolbar | CRUD actions | **+Xuất Excel** catalogToolbar · Import **ẩn** P1 | **GAP-BIEU02-XLS-01** |
| Export API | `GET …/export?resource=` → CSV stub / weak filter | filtered · golden Cục **Biểu 2** · `Bieu02_ThongKeCau_{yyyyMMdd}.xls` · binary · **filter-all** | **GAP-BIEU02-XLS-02** |
| Import API | `POST …/import[/preview]` | **DEFER P1** (`Q-XLS-IMPORT=export_only_p0`) · UI ẩn | **GAP-BIEU02-XLS-03** DEFER |
| BFF | proxy export (+ multipart) | **KEEP** proxy only · binary passthrough | T-XLS-BFF-01 |
| Golden | stub / generic | Cục **16-sheet** · sheet **Biểu 2** only · 48 cột · GPS 3 điểm · **cấm** 12+8 hồ sơ | cite epic |
| Scope | ignores / partial filters | **Q-XLS-SCOPE=filtered** · same QS as list · empty filter = all visible tenant | pass-through |
| Filename | `csdl-bridges-*.csv` / stub | `Bieu02_ThongKeCau_{yyyyMMdd}.xls` | **SA chốt `.xls`** (Cục golden + Wave1 peer Biểu 01) |
| Export mode | unclear page vs stream | **filter-all** · ignore `page`/`pageSize` · service row cap · **cấm** HTTP streaming P0 | **GAP-BIEU02-XLS-04** |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize list · LeaveConfirm · typed entity/migration · **cấm** ERP.*.

---

## 1. Ownership (KEEP + XLS widen)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · catalogToolbar **Xuất Excel** trên list Biểu 02 / hub `resource=bridges` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` |
| Excel service | `CsdlCatalogExcelService` — **widen** Export for `bridges` typed (Import widen = P1) |
| Persist | shell `rmms_csdl_catalog_records` + typed `rmms_csdl_bieu2` (**KEEP** · **cấm** parent *Json) |
| BFF | `CsdlCatalogRecordsBffController` · proxy only = **yes** |
| FE BASE | `/asset/csdl-records` |
| DOMAIN-MAP | `csdl-bieu-02` → Asset (**KEEP**) |

### Route / domain

| Surface | Path |
|---------|------|
| UI | `/so-ts/csdl-so-sach?resource=bridges` · alias `/csdl-bieu-02` |
| Export P0 | `GET api/v1/asset/csdl-records/export?resource=bridges&…filters` |
| Import P1 | `POST api/v1/asset/csdl-records/import[/preview]` — **DEFER** · **cấm** FE wire P0 |
| BFF | `web-bff/api/v1/asset/csdl-records/export` (P0) · import routes exist · unused P0 |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` |
| Domain | **Asset** / `asset` |
| Export | same controller · Excel service · **binary** response · filter-all |
| BFF | proxy only = yes · forward QS · binary passthrough · **cấm** remap |
| MFE | catalogToolbar Xuất · blob download · toast · **cấm** filter-bar export |
| Persist | typed read for export columns · **cấm** DetailJson dump |
| Auth | reuse `asset.csdl-records.read` (export) |
| Out of pack | Import P1 · Auth DEFER · org SearchInput P2 · map canvas · Step 4b @ SA |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalogDataGrid — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | BFF only |
| Excel | `/implement-export-import-excel` | golden Cục sheet Biểu 2 |
| Filter | `filter-bar-layout-hard` | **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08) |
| Persist | `no-parent-json-field` | export from typed · **không** DetailJson |

---

## Implement gates (confirm) — RECORDED KEEP

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | export **không** date-range business | KEEP |
| XCO | **`xco_get_only`** | export/list tenant; detail GET view only | KEEP |
| SHARE | **`share_tenant`** | shell + `CsdlBieu2Entity` | KEEP |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T02:05:00.000Z`

---

## FormType pack (`list`) — KEEP + export surface

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 KEEP |
| S-FORM-* | Kind D Slideout | create/edit/view/copy | API-02..05 KEEP |
| **S-XLS-EXPORT** | catalogToolbar | **export** | **API-XLS-01** |
| S-XLS-IMPORT | catalogToolbar + file | import | API-XLS-02/03 — **DEFER P1 · ẩn** |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list / create / edit / view / copy / delete | KEEP prior | KEEP | **cấm** reopen typed |
| **export** | — | GET export + **same filter QS** | filtered · **filter-all** · binary · filename locked · **cấm** streaming P0 |
| import | — | — | **DEFER P1** |

### List filter query keys (KEEP — also export QS)

| Query key | UI | Export |
|-----------|-----|--------|
| `resource` | const `bridges` | **required** |
| `search` | SearchTextInput | pass |
| `province` | Dropdown | pass |
| `status` | Dropdown | pass |
| `roadCode` | SearchInput | pass |
| `kmFrom` / `kmTo` | Number | pass |
| `beamType` | Dropdown optional | pass |
| `page` / `pageSize` | pagination | **export ignores page** · filter-all · service row cap · **cấm** stream |

---

## 2. Form data analysis (XLS)

| Screen | Fields / payload | Source | Persist | Notes |
|--------|------------------|--------|---------|-------|
| S-XLS-EXPORT | filter QS only | derived list | — | **cấm** invent body |
| S-XLS-IMPORT | — | — | — | **DEFER P1** · UI ẩn |
| Typed columns | KEEP 48 | transaction | `rmms_csdl_bieu2` | real-data §B · GPS six_numbers · **cấm** invent |

**controlHint:** `exportExcel` = ToolbarButton · `importExcel` = ToolbarButton+file **ẩn P1** — **không** SearchInput/Dropdown invent.

### Q-XLS decisions (SA locked)

| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | **filtered** (QS · empty = all visible tenant) |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | `Bieu02_ThongKeCau_{yyyyMMdd}.xls` · **ext `.xls`** (Cục golden + peer Biểu 01 Wave1 · override PO `.xlsx` draft) |
| Export mode | **filter-all** · ignore page · **cấm** HTTP streaming P0 |

---

## 3. API catalog (XLS — P0 export)

### API-XLS-01: GET `/api/v1/asset/csdl-records/export`

| | |
|--|--|
| Purpose | Xuất Excel Biểu 2 theo **filter hiện tại** (binary · filter-all) |
| Permission | `asset.csdl-records.read` |
| Tenant | X-Company-Id · share_tenant |
| Request | query: `resource=bridges` **required** + list filter keys (search, province, status, roadCode, kmFrom, kmTo, beamType) · **không** dùng page/pageSize |
| Response | `File` binary · `Content-Disposition` filename=`Bieu02_ThongKeCau_{yyyyMMdd}.xls` · content-type Excel (xls per implement skill) |
| Errors | 422 thiếu resource · empty → file headers-only hoặc toast FE “không có dữ liệu” (Dev chốt 1 · AC-XLS empty OK) |
| Form surfaces | S-XLS-EXPORT · catalogToolbar |
| Field map | list projection / typed 48 → golden sheet **Biểu 2** columns · GPS 3 điểm (6 số) |
| Mode | **filter-all** · service row cap · **cấm** streaming P0 |
| Context | `docs/context/features/csdl-export-print.md` · `csdl-bieu-02.md` |
| Demo | N/A |
| Gap live | stub / weak filter / wrong name → **GAP-BIEU02-XLS-02** · **GAP-BIEU02-XLS-04** |

### API-XLS-02 / API-XLS-03 — Import / preview — **DEFER P1**

Document only · routes may exist on controller · **cấm** FE wire · **cấm** widen ImportAsync cho Biểu 2 ở P0.

### API-01..05 · API-LKP-01 — **KEEP** (typed CRUD / road-route)

---

## 4. Entity / migration

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_bieu2` · Schema_CsdlBieu2 — **KEEP** (prior SA) |
| XLS migration | **none** mới @ SA — export reads existing typed schema |
| SA | **cấm** chạy migration / Step 4b |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — export QS forward · binary passthrough |
| Validation | API Excel service (resource, golden sheet Biểu 2, filters, row cap) |
| Filename | API sets Content-Disposition · FE dùng server filename |
| Errors | 422 + toast · **cấm** native alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-XLS-BE-01 | Widen `ExportAsync` — filter QS · typed Biểu 2 (48) · golden sheet · filename `.xls` · filter-all |
| T-XLS-BE-02 | Controller bind export filter query params (parity list · ignore page) |
| T-XLS-BFF-01 | Verify binary proxy (no logic) |
| T-XLS-FE-01 | catalogToolbar Xuất Excel · blob download · toast · Import **ẩn** |
| T-XLS-FE-02 | Pass **current filter QS** to export · **cấm** filter-bar export btn |
| T-XLS-QA-01 | E2E S-XLS-EXPORT (queued `/agent-qa*`) · Import N/A P0 |
| T-XLS-IMP-P1 | Import widen — **DEFER** backlog |
| T-* CRUD | prior KEEP — **cấm** reopen unless debt |

---

## 7. Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=export_only_p0 · Q-XLS-FILENAME `.xls` locked · export mode=filter-all · Design approve)

## 8. Cấm (SA)

- ERP.* · invent API prefix · export trên LinErpListFilterBar · 12+8 hồ sơ format · HTTP streaming P0  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e @ SA  
- parent `*Json` · re-scan demo · reopen typed 48 as new_page · wire Import P0  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.09.05.03 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| packKind | list |
| changeScope | edit_page |
| solution_confirm | approve |
| writtenAt | 2026-09-18T02:05:00.000Z |
| contentHashPrior | sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40 |
