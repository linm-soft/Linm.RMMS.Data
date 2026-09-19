# SA — Solution discovery — csdl-bieu-01 (edit_page · T-XLS-S01)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_24cf3664`)  
> Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · form-type-task-pack (`list`) · filter-bar-layout-hard · **/implement-export-import-excel**  
> Requires: Design **confirmed** · PO compact · data_analy compact · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · yarn build/e2e/start:std · Step 4b/migration @ SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường · **Xuất/Nhập Excel** |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** (T-XLS-S01 · Wave 1) |
| packKind | **`list`** |
| status | `confirmed` |
| design_confirm | approve (`task_8009a294`) |
| solution_confirm | **approve** (autoApprove=ON · `task_24cf3664`) |
| domain_map | **Asset** (`csdl-bieu-01` → `asset` · **KEEP**) |
| sa_tz_gate | **`tz_na`** (KEEP) |
| sa_xco_gate | **`xco_get_only`** (KEEP) |
| sa_shared_table | **`share_tenant`** (KEEP) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=pavement-sections` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `pavement-sections` |
| formNo | `01` |
| columns | `38` |
| IdCode | `MD-` (KEEP) |
| contentHash | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| analyReuse | **hash match** · **cấm** reopen typed 38-col · delta XLS only |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_24cf3664` |
| priorSa | `task_2a18844f` (typed CRUD · KEEP) |
| updatedAt | `2026-09-17T18:15:00.000Z` |
| versionGate | `aligned` (contentHash = prior PO/Design/data_analy) |

## § Delta Current vs Target (`edit_page` · export/import)

| Area | Current live | Target (T-XLS-S01) | Action |
|------|--------------|--------------------|--------|
| CRUD typed 38 | Schema_CsdlBieu1 · Slideout | **KEEP** | **cấm** reopen |
| Filter bar | LinErpListFilterBar | **KEEP** · **cấm** nút Xuất trên filter | GAP-FILTER-BAR-08 |
| Toolbar | CRUD actions | **+Xuất Excel +Nhập Excel** catalogToolbar | **GAP-BIEU01-XLS-UI-01** |
| Export API | `GET …/export?resource=` → CSV stub · **no filter QS** · name `csdl-{resource}-*.csv` | filtered · golden Cục **Biểu 1** · `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` · binary | **GAP-BIEU01-XLS-EXP-01** |
| Import API | `POST …/import[/preview]` multipart · generic shell rows | import_now · map sheet **Biểu 1** → typed `CsdlBieu1` · skipBridge soft | **GAP-BIEU01-XLS-IMP-01** |
| BFF | proxy export + multipart | **KEEP** proxy only | T-BFF-XLS-01 verify |
| Golden | stub CSV / generic | Cục **16-sheet** · sheet **Biểu 1** only · **cấm** 12+8 hồ sơ | cite epic |
| Scope | ExportAsync ignores list filters | **Q-XLS-SCOPE=filtered** · same QS as list | pass-through |
| Filename | `csdl-pavement-sections-*.csv` | `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` | PO locked |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize · LeaveConfirm · typed entity · **cấm** ERP.*.

---

## 1. Ownership (KEEP + XLS widen)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · catalogToolbar Xuất/Nhập trên list Biểu 01 / hub resource |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` |
| Excel service | `CsdlCatalogExcelService` — **widen** Export/Import for `pavement-sections` typed |
| Persist | shell `rmms_csdl_catalog_records` + typed `rmms_csdl_bieu1` (**KEEP** · **cấm** parent *Json) |
| BFF | `CsdlCatalogRecordsBffController` · proxy only = **yes** (export + multipart đã có) |
| FE BASE | `/asset/csdl-records` |
| DOMAIN-MAP | `csdl-bieu-01` → Asset (**KEEP**) |

### Route / domain

| Surface | Path |
|---------|------|
| UI | `/so-ts/csdl-so-sach?resource=pavement-sections` · alias `/csdl-bieu-01` |
| Export | `GET api/v1/asset/csdl-records/export?resource=pavement-sections&…filters` |
| Import preview | `POST api/v1/asset/csdl-records/import/preview` multipart |
| Import commit | `POST api/v1/asset/csdl-records/import` multipart |
| BFF | `web-bff/api/v1/asset/csdl-records/{export\|import\|import/preview}` |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` |
| Domain | **Asset** / `asset` |
| Export/Import | same controller · Excel service · **binary** response export · multipart import |
| BFF | proxy only = yes · forward QS + multipart · **cấm** remap |
| MFE | catalogToolbar buttons · blob download · file picker · toast (≠ stub done) |
| Persist | typed table on import · **cấm** DetailJson dump |
| Auth | reuse `asset.csdl-records.read` (export) · `create/update` (import) |
| Out of pack | Auth DEFER · org SearchInput P2 · map canvas |

## SSOT / anti-duplicate

| Concern | Rule |
|---------|------|
| UI | Lin* SSOT · **cấm** local clone · export **không** trên LinErpListFilterBar |
| HTTP | apiClient · BFF only |
| Excel | `/implement-export-import-excel` · golden Cục sheet Biểu 1 |
| Persist | no-parent-json-field |
| Filter | filter-bar-layout-hard · query keys KEEP |

## Implement gates (RECORDED · KEEP)

| Gate | Decision | Note |
|------|----------|------|
| TZ | **`tz_na`** | export không date-range business |
| XCO | **`xco_get_only`** | export/list tenant; detail GET view only |
| SHARE | **`share_tenant`** | import rows inherit `CompanyCode` |

AskQuestion (autoApprove=ON): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-17T18:15:00.000Z`

---

## FormType pack (`list`) — delta surfaces

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B KEEP | list | API-01 KEEP |
| S-FORM-* | Kind D Slideout KEEP | C/E/V/Copy | API-02..05 KEEP |
| **S-XLS-EXPORT** | catalogToolbar | export | **API-XLS-01** |
| **S-XLS-IMPORT** | catalogToolbar + file | import | **API-XLS-02** (+ preview **API-XLS-03**) |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list + filters | — | KEEP |
| create/edit/view/copy/delete | KEEP typed | KEEP | **cấm** reopen |
| **export** | — | GET export + **same filter QS** | filtered · binary download · filename locked |
| **import** | file pick → optional preview | POST import multipart | import_now · skipBridge · typed upsert |

### List filter query keys (KEEP — also export QS)

| Query key | UI | Export |
|-----------|-----|--------|
| `resource` | const `pavement-sections` | **required** |
| `search` | SearchTextInput | pass |
| `province` | Dropdown | pass |
| `status` | Dropdown | pass |
| `roadCode` | SearchInput | pass |
| `kmFrom` / `kmTo` | Number | pass |
| `page` / `pageSize` | pagination | **export ignores page** · apply filter only · cap rows per service policy |

---

## 2. Form data analysis (XLS)

| Screen | Fields / payload | Source | Persist | Notes |
|--------|------------------|--------|---------|-------|
| S-XLS-EXPORT | filter QS only | derived list | — | **cấm** invent body |
| S-XLS-IMPORT | `file` + `skipBridge` (+ optional `sheetMap`) | import-excel | shell+typed | golden sheet **Biểu 1** · 38-col map → `CsdlBieu1` |
| Typed columns | KEEP 38 | transaction | `rmms_csdl_bieu1` | real-data §B · **cấm** invent |

**controlHint:** `exportExcel` / `importExcel` = ToolbarButton (+file) — **không** SearchInput/Dropdown invent.

---

## 3. API catalog (XLS — full blocks)

### API-XLS-01: GET `/api/v1/asset/csdl-records/export`

| | |
|--|--|
| Purpose | Xuất Excel Biểu 1 theo **filter hiện tại** (binary) |
| Permission | `asset.csdl-records.read` |
| Tenant | X-Company-Id · share_tenant |
| Request | query: `resource=pavement-sections` **required** + list filter keys (search, province, status, roadCode, kmFrom, kmTo) |
| Response | `File` binary · `Content-Disposition` filename=`Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` · content-type Excel (xls/xlsx per implement skill) |
| Errors | 422 thiếu resource · empty → file headers-only hoặc toast FE “không có dữ liệu” (Dev chốt 1) |
| Form surfaces | S-XLS-EXPORT · catalogToolbar |
| Field map | list projection / typed 38 → golden sheet **Biểu 1** columns |
| Context | `docs/context/features/csdl-export-print.md` · `csdl-bieu-01.md` |
| Demo | N/A |
| Gap live | CSV stub · no filter · wrong name → **GAP-BIEU01-XLS-EXP-01** |

### API-XLS-02: POST `/api/v1/asset/csdl-records/import`

| | |
|--|--|
| Purpose | Nhập Excel · commit typed rows (import_now) |
| Permission | `asset.csdl-records.create` (+ update if upsert) |
| Tenant | inherit CompanyCode |
| Request | multipart: `file` required · `skipBridge` default true · optional `sheetMap` |
| Response | `CsdlImportResultDto` { Imported, Skipped, Errors[] } |
| Errors | 422 thiếu file / invalid sheet · row errors in DTO |
| Form surfaces | S-XLS-IMPORT |
| Field map | sheet Biểu 1 cells → shell + `CsdlBieu1` scalars · **cấm** DetailJson |
| Gap live | generic shell import → **GAP-BIEU01-XLS-IMP-01** |

### API-XLS-03: POST `/api/v1/asset/csdl-records/import/preview`

| | |
|--|--|
| Purpose | Preview sheets/rows trước commit (optional UX; P1 allowed) |
| Permission | same create |
| Request/Response | multipart → `CsdlImportPreviewDto` |
| Form surfaces | S-XLS-IMPORT (pre-step) |
| Note | BFF route đã có — **KEEP** proxy |

### API-01..05 · API-LKP-01 — **KEEP** (typed CRUD / road-route)

---

## 4. Entity / migration

| Item | Spec |
|------|------|
| Typed table | `rmms_csdl_bieu1` · Schema_CsdlBieu1 — **KEEP** (đã plan/prior) |
| XLS migration | **none** mới @ SA — import writes existing typed schema |
| SA | **cấm** chạy migration / Step 4b |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — export QS forward · multipart forward · binary passthrough |
| Validation | API Excel service (resource, golden sheet, filters, skipBridge) |
| Filename | API sets Content-Disposition · FE dùng server filename |
| Errors | 422 + toast · **cấm** native alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-XLS-BE-01 | Widen `ExportAsync` — filter QS · typed Biểu 1 columns · golden sheet · filename locked |
| T-XLS-BE-02 | Widen Import commit/preview — sheet Biểu 1 → shell+typed · skipBridge |
| T-XLS-BE-03 | Controller bind export filter query params (parity list) |
| T-XLS-BFF-01 | Verify binary + multipart proxy (no logic) |
| T-XLS-FE-01 | catalogToolbar Xuất/Nhập · blob download · file input · toast |
| T-XLS-FE-02 | Pass **current filter QS** to export · **cấm** filter-bar export btn |
| T-XLS-QA-01 | E2E S-XLS-EXPORT / S-XLS-IMPORT (queued `/agent-qa*`) |
| T-* CRUD | prior KEEP — **cấm** reopen unless debt |

---

## 7. Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=import_now · Q-XLS-FILENAME locked · Design approve)

## 8. Cấm (SA)

- ERP.* · invent API prefix · export trên LinErpListFilterBar · 12+8 hồ sơ format  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e @ SA  
- parent `*Json` · re-scan demo · reopen typed 38 as new_page  

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
| writtenAt | 2026-09-17T18:15:00.000Z |
| contentHashPrior | sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085 |
| headerFingerprintPrior | sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2 |
