# SA — Solution discovery — csdl-bieu-03 (edit_page · T-XLS-S03)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_124631cd`)  
> Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · form-type-task-pack (`list`) · filter-bar-layout-hard · **/implement-export-import-excel**  
> Requires: Design **confirmed** · PO compact · data_analy compact · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · yarn build/e2e/start:std · Step 4b/migration @ SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ · **Xuất Excel** (Import DEFER P1) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** (T-XLS-S03 · Wave 1) |
| packKind | **`list`** |
| status | `confirmed` |
| design_confirm | approve (`task_089e1774`) |
| solution_confirm | **approve** (autoApprove=ON · `task_124631cd`) |
| domain_map | **Asset** (`csdl-bieu-03` → `asset` · **KEEP**) |
| sa_tz_gate | **`tz_na`** (KEEP) |
| sa_xco_gate | **`xco_get_only`** (KEEP) |
| sa_shared_table | **`share_tenant`** (KEEP) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-03` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-` (KEEP) |
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| analyReuse | **hash match** · **cấm** reopen typed 42-col · delta XLS export only |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_124631cd` |
| priorSa | `task_539bb440` (typed CRUD · Schema_CsdlBieu3 · KEEP) |
| updatedAt | `2026-09-18T02:40:00.000Z` |
| versionGate | `aligned` (contentHash = prior PO/Design/data_analy) |

## § Delta Current vs Target (`edit_page` · export P0)

| Area | Current live | Target (T-XLS-S03) | Action |
|------|--------------|--------------------|--------|
| CRUD typed 42 | Schema_CsdlBieu3 · Slideout GPS×3 · two_rows | **KEEP** | **cấm** reopen |
| Filter bar | LinErpListFilterBar | **KEEP** · **cấm** nút Xuất trên filter | GAP-FILTER-BAR-08 |
| Toolbar | CRUD actions | **+Xuất Excel** catalogToolbar · Import **ẩn** P1 | **GAP-BIEU03-XLS-01** |
| Export API | `GET …/export?resource=` → CSV stub / weak filter | filtered · golden Cục **Biểu 3** · `Bieu03_HamDuongBo_{yyyyMMdd}.xls` · binary · **filter-all** | **GAP-BIEU03-XLS-02** |
| Import API | `POST …/import[/preview]` | **DEFER P1** (`Q-XLS-IMPORT=export_only_p0`) · UI ẩn | **GAP-BIEU03-XLS-03** DEFER |
| BFF | proxy export (+ multipart) | **KEEP** proxy only · binary passthrough | T-XLS-BFF-01 |
| Golden | stub / generic | Cục **16-sheet** · sheet **Biểu 3** only · 42 cột · GPS 3 điểm · **1 row/ống** · **cấm** 12+8 hồ sơ | cite epic · **GAP-BIEU03-XLS-05** / XLS-TUBE |
| Scope | ignores / partial filters | **Q-XLS-SCOPE=filtered** · same QS as list · empty filter = all visible tenant | pass-through |
| Filename | stub / wrong ext | `Bieu03_HamDuongBo_{yyyyMMdd}.xls` | **SA chốt `.xls`** (Cục golden + Wave1 peer Biểu 01/02 · override PO `.xlsx` draft) |
| Export mode | unclear page vs stream | **filter-all** · ignore `page`/`pageSize` · service row cap · **cấm** HTTP streaming P0 | **GAP-BIEU03-XLS-04** |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize list · LeaveConfirm · typed entity/migration · tube two_rows CRUD · **cấm** ERP.*.

---

## 1. Ownership (KEEP + XLS widen)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · catalogToolbar **Xuất Excel** trên list Biểu 03 / hub `resource=road-tunnels` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` |
| Excel service | `CsdlCatalogExcelService` — **widen** Export for `road-tunnels` typed (Import widen = P1) |
| Persist | shell `rmms_csdl_catalog_records` + typed `rmms_csdl_bieu3` (**KEEP** · **cấm** parent *Json) |
| BFF | `CsdlCatalogRecordsBffController` · proxy only = **yes** |
| FE BASE | `/asset/csdl-records` |
| DOMAIN-MAP | `csdl-bieu-03` → Asset (**KEEP**) |

### Route / domain

| Surface | Path |
|---------|------|
| UI | `/so-ts/csdl-so-sach?resource=road-tunnels` · alias `/csdl-bieu-03` |
| Export P0 | `GET api/v1/asset/csdl-records/export?resource=road-tunnels&…filters` |
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
| Excel | `/implement-export-import-excel` | golden Cục sheet Biểu 3 |
| Filter | `filter-bar-layout-hard` | **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08) |
| Persist | `no-parent-json-field` | export from typed · **không** DetailJson |

---

## Implement gates (confirm) — RECORDED KEEP

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | export **không** date-range business | KEEP |
| XCO | **`xco_get_only`** | export/list tenant; detail GET view only | KEEP |
| SHARE | **`share_tenant`** | shell + `CsdlBieu3Entity` | KEEP |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T02:40:00.000Z`

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
| list / create / edit / view / copy / delete | KEEP prior | KEEP | **cấm** reopen typed · tube two_rows KEEP |
| **export** | — | GET export + **same filter QS** | filtered · **filter-all** · binary · filename locked · **1 Excel row = 1 ống** · **cấm** streaming P0 |
| import | — | — | **DEFER P1** |

### List filter query keys (KEEP — also export QS)

| Query key | UI | Export |
|-----------|-----|--------|
| `resource` | const `road-tunnels` | **required** |
| `search` | SearchTextInput | pass |
| `province` | Dropdown | pass |
| `status` | Dropdown | pass |
| `tunnelClass` | Dropdown | pass |
| `roadCode` | SearchInput | pass |
| `kmFrom` / `kmTo` | Number | pass |
| `page` / `pageSize` | pagination | **export ignores page** · filter-all · service row cap · **cấm** stream |

---

## 2. Form data analysis (XLS)

| Screen | Fields / payload | Source | Persist | Notes |
|--------|------------------|--------|---------|-------|
| S-XLS-EXPORT | filter QS only | derived list | — | **cấm** invent body |
| S-XLS-IMPORT | — | — | — | **DEFER P1** · UI ẩn |
| Typed columns | KEEP 42 | transaction | `rmms_csdl_bieu3` | real-data §B · GPS six_numbers · tube two_rows · **cấm** invent |

**controlHint:** `exportExcel` = ToolbarButton · `importExcel` = ToolbarButton+file **ẩn P1** — **không** SearchInput/Dropdown invent.

### Q-XLS decisions (SA locked)

| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | **filtered** (QS · empty = all visible tenant) |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | `Bieu03_HamDuongBo_{yyyyMMdd}.xls` · **ext `.xls`** (Cục golden + peer Biểu 01/02 Wave1 · override PO `.xlsx` draft) |
| Export mode | **filter-all** · ignore page · **cấm** HTTP streaming P0 |
| XLS-TUBE | **1 Excel row = 1 ống** (+ GPS bộ) · parity CRUD two_rows · **cấm** gộp 2 ống 1 row |

---

## 3. API catalog (XLS — P0 export)

### API-XLS-01: GET `/api/v1/asset/csdl-records/export`

| | |
|--|--|
| Purpose | Xuất Excel Biểu 3 theo **filter hiện tại** (binary · filter-all) |
| Permission | `asset.csdl-records.read` |
| Tenant | X-Company-Id · share_tenant |
| Request | query: `resource=road-tunnels` **required** + list filter keys (search, province, status, tunnelClass, roadCode, kmFrom, kmTo) · **không** dùng page/pageSize |
| Response | `File` binary · `Content-Disposition` filename=`Bieu03_HamDuongBo_{yyyyMMdd}.xls` · content-type Excel (xls per implement skill) |
| Errors | 422 thiếu resource · empty → file headers-only hoặc toast FE “không có dữ liệu” (Dev chốt 1 · AC-XLS empty OK) |
| Form surfaces | S-XLS-EXPORT · catalogToolbar |
| Field map | list projection / typed 42 → golden sheet **Biểu 3** columns · GPS 3 điểm (6 số) · **1 row/ống** |
| Mode | **filter-all** · service row cap · **cấm** streaming P0 |
| Context | `docs/context/features/csdl-export-print.md` · `csdl-bieu-03.md` |
| Demo | N/A |
| Gap live | stub / weak filter / wrong name / gộp ống → **GAP-BIEU03-XLS-02** · **GAP-BIEU03-XLS-04** · **GAP-BIEU03-XLS-05** |

### API-XLS-02 / API-XLS-03 — Import / preview — **DEFER P1**

Document only · routes may exist on controller · **cấm** FE wire · **cấm** widen ImportAsync cho Biểu 3 ở P0.

### API-01..05 · API-LKP-01 — **KEEP** (typed CRUD / road-route)

---

## 4. Entity / migration

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_bieu3` · Schema_CsdlBieu3 — **KEEP** (prior SA) |
| XLS migration | **none** mới @ SA — export reads existing typed schema |
| SA | **cấm** chạy migration / Step 4b |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — export QS forward · binary passthrough |
| Validation | API Excel service (resource, golden sheet Biểu 3, filters, row cap, tube row rule) |
| Filename | API sets Content-Disposition · FE dùng server filename |
| Errors | 422 + toast · **cấm** native alert · **cấm** toast stub = export done |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-XLS-BE-01 | Widen `ExportAsync` — filter QS · typed Biểu 3 (42) · golden sheet · filename `.xls` · filter-all · **1 row/ống** |
| T-XLS-BE-02 | Controller bind export filter query params (parity list · ignore page) |
| T-XLS-BFF-01 | Verify binary proxy (no logic) |
| T-XLS-FE-01 | catalogToolbar Xuất Excel · blob download · toast · Import **ẩn** |
| T-XLS-FE-02 | Pass **current filter QS** to export · **cấm** filter-bar export btn |
| T-XLS-QA-01 | E2E S-XLS-EXPORT (queued `/agent-qa*`) · Import N/A P0 · AC-XLS-01..09 |
| T-XLS-IMP-P1 | Import widen — **DEFER** backlog |
| T-* CRUD | prior KEEP — **cấm** reopen unless debt |

---

## 7. Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=export_only_p0 · Q-XLS-FILENAME `.xls` locked · export mode=filter-all · XLS-TUBE 1row/ống · Design approve)

## 8. Cấm (SA)

- ERP.* · invent API prefix · export trên LinErpListFilterBar · 12+8 hồ sơ format · HTTP streaming P0  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e @ SA  
- parent `*Json` · re-scan demo · reopen typed 42 as new_page · wire Import P0  
- gộp 2 ống thành 1 Excel row · toast stub = export done  

## 9. Handoff

- compact: `specs/csdl-bieu-03/handoff/sa-compact.md`  
- next: team_lead (`pending`) · **cấm** start role khác trong cùng task SA  
- STATUS: phase=`team_lead` sau confirm · roles sau = pending  
