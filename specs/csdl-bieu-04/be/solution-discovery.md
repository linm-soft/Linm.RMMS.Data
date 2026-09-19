# SA — Solution discovery — csdl-bieu-04 (edit_page · T-XLS-S04)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_2c8beb5b`)  
> Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · form-type-task-pack (`list`) · filter-bar-layout-hard · **/implement-export-import-excel**  
> Requires: Design **confirmed** · PO compact · data_analy compact · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · yarn build/e2e/start:std · Step 4b/migration @ SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại · **Xuất Excel** (Import DEFER P1) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** (T-XLS-S04 · Wave 1) |
| packKind | **`list`** |
| status | `confirmed` |
| design_confirm | approve (`task_394a88a3`) |
| solution_confirm | **approve** (autoApprove=ON · `task_2c8beb5b`) |
| domain_map | **Asset** (`csdl-bieu-04` → `asset` · **KEEP**) |
| sa_tz_gate | **`tz_na`** (KEEP) |
| sa_xco_gate | **`xco_get_only`** (KEEP) |
| sa_shared_table | **`share_tenant`** (KEEP) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-04` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=culverts` |
| peerSoTs | `so-ts-culvert-x` · deep-link only · **cấm** merge sheet |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-` (KEEP) |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| analyReuse | **hash match** · **cấm** reopen typed 17-col · delta XLS export only |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_2c8beb5b` |
| priorSa | `task_c8366fab` (typed CRUD · Schema_CsdlBieu4 · KEEP) |
| updatedAt | `2026-09-18T03:20:00.000Z` |
| versionGate | `aligned` (contentHash = prior PO/Design/data_analy) |

## § Delta Current vs Target (`edit_page` · export P0)

| Area | Current live | Target (T-XLS-S04) | Action |
|------|--------------|--------------------|--------|
| CRUD typed 17 | Schema_CsdlBieu4 · Slideout GPS four_xy · shape | **KEEP** | **cấm** reopen |
| Filter bar | LinErpListFilterBar | **KEEP** · **cấm** nút Xuất trên filter | GAP-FILTER-BAR-08 |
| Toolbar | CRUD actions | **+Xuất Excel** catalogToolbar · Import **ẩn** P1 | **GAP-BIEU04-XLS-01** |
| Export API | `GET …/export?resource=` → stub / weak | filtered · golden Cục **Biểu 4** · `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · binary · **filter-all** | **GAP-BIEU04-XLS-02** |
| Import API | `POST …/import[/preview]` | **DEFER P1** (`Q-XLS-IMPORT=export_only_p0`) · UI ẩn | **GAP-BIEU04-XLS-03** DEFER |
| BFF | proxy export | **KEEP** proxy only · binary passthrough | T-XLS-BFF-01 |
| Golden | stub / generic | Cục **16-sheet** · sheet **Biểu 4** only · **17 cột** · **cấm** 12+8 hồ sơ | cite epic · **GAP-BIEU04-XLS-05** |
| Scope | ignores / partial filters | **Q-XLS-SCOPE=filtered** · same QS as list · empty = all visible tenant | pass-through |
| Filename | stub / wrong ext | `Bieu04_CongCacLoai_{yyyyMMdd}.xls` | **SA chốt `.xls`** (Cục golden + Wave1 peer Biểu 01–03 · override PO `.xlsx` draft) |
| Export mode | unclear page vs stream | **filter-all** · ignore `page`/`pageSize` · service row cap · **cấm** HTTP streaming P0 | **GAP-BIEU04-XLS-04** |
| Peer Sổ TS | `so-ts-culvert-x` deep-link | deep-link **KEEP** · **cấm** gộp vào sheet Biểu 4 | **GAP-BIEU04-XLS-PEER** |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize list · LeaveConfirm · typed entity/migration · GPS four_xy · **cấm** ERP.*.

---

## 1. Ownership (KEEP + XLS widen)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · catalogToolbar **Xuất Excel** trên list Biểu 04 / hub `resource=culverts` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` |
| Excel service | `CsdlCatalogExcelService` — **widen** Export for `culverts` typed (Import widen = P1) |
| Persist | shell `rmms_csdl_catalog_records` + typed `rmms_csdl_bieu4` (**KEEP** · **cấm** parent *Json) |
| BFF | `CsdlCatalogRecordsBffController` · proxy only = **yes** |
| FE BASE | `/asset/csdl-records` |
| DOMAIN-MAP | `csdl-bieu-04` → Asset (**KEEP**) |

### Route / domain

| Surface | Path |
|---------|------|
| UI | `/so-ts/csdl-so-sach?resource=culverts` · alias `/csdl-bieu-04` |
| Export P0 | `GET api/v1/asset/csdl-records/export?resource=culverts&…filters` |
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
| Excel | `/implement-export-import-excel` | golden Cục sheet Biểu 4 |
| Filter | `filter-bar-layout-hard` | **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08) |
| Persist | `no-parent-json-field` | export from typed · **không** DetailJson |
| Peer | deep-link only | **cấm** merge `so-ts-culvert-x` vào sheet |

---

## Implement gates (confirm) — RECORDED KEEP

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | export **không** date-range business | KEEP |
| XCO | **`xco_get_only`** | export/list tenant; detail GET view only | KEEP |
| SHARE | **`share_tenant`** | shell + `CsdlBieu4Entity` | KEEP |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T03:20:00.000Z`

---

## FormType pack (`list`) — KEEP + export surface

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 KEEP |
| S-FORM-* | Kind D Slideout | create/edit/view/copy | API-02..05 KEEP |
| **S-XLS-EXPORT** | catalogToolbar | **export** | **API-XLS-01** |
| S-XLS-IMPORT | catalogToolbar + file | import | API-XLS-02/03 — **DEFER P1 · ẩn** |
| S-PEER-SOTS | deep-link | — | **cấm** merge sheet |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list / create / edit / view / copy / delete | KEEP prior | KEEP | **cấm** reopen typed 17-col · GPS four_xy KEEP |
| **export** | — | GET export + **same filter QS** | filtered · **filter-all** · binary · filename locked · **cấm** streaming P0 |
| import | — | — | **DEFER P1** |

### List filter query keys (KEEP — also export QS)

| Query key | UI | Export |
|-----------|-----|--------|
| `resource` | const `culverts` | **required** |
| `search` | SearchTextInput | pass |
| `province` | Dropdown | pass |
| `status` | Dropdown | pass |
| `roadCode` | SearchInput | pass |
| `kmPoint` | Number | pass |
| `page` / `pageSize` | pagination | **export ignores page** · filter-all · service row cap · **cấm** stream |

---

## 2. Form data analysis (XLS)

| Screen | Fields / payload | Source | Persist | Notes |
|--------|------------------|--------|---------|-------|
| S-XLS-EXPORT | filter QS only | derived list | — | **cấm** invent body |
| S-XLS-IMPORT | — | — | — | **DEFER P1** · UI ẩn |
| Typed columns | KEEP 17 | transaction | `rmms_csdl_bieu4` | real-data §B · GPS four_xy · shape · **cấm** invent |

**controlHint:** `exportExcel` = ToolbarButton · `importExcel` = ToolbarButton+file **ẩn P1** — **không** SearchInput/Dropdown invent.

### Q-XLS decisions (SA locked)

| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | **filtered** (QS · empty = all visible tenant) |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · **ext `.xls`** (Cục golden + peer Biểu 01–03 Wave1 · override PO `.xlsx` draft) |
| Export mode | **filter-all** · ignore page · **cấm** HTTP streaming P0 |
| Peer | **cấm** gộp `so-ts-culvert-x` vào sheet Biểu 4 |

---

## 3. API catalog (XLS — P0 export)

### API-XLS-01: GET `/api/v1/asset/csdl-records/export`

| | |
|--|--|
| Purpose | Xuất Excel Biểu 4 theo **filter hiện tại** (binary · filter-all) |
| Permission | `asset.csdl-records.read` |
| Tenant | X-Company-Id · share_tenant |
| Request | query: `resource=culverts` **required** + list filter keys (search, province, status, roadCode, kmPoint) · **không** dùng page/pageSize |
| Response | `File` binary · `Content-Disposition` filename=`Bieu04_CongCacLoai_{yyyyMMdd}.xls` · content-type Excel (xls per implement skill) |
| Errors | 422 thiếu resource · empty → file headers-only hoặc toast FE “không có dữ liệu” (Dev chốt 1 · AC-XLS empty OK) |
| Form surfaces | S-XLS-EXPORT · catalogToolbar |
| Field map | list projection / typed 17 → golden sheet **Biểu 4** columns · GPS four_xy · shape |
| Mode | **filter-all** · service row cap · **cấm** streaming P0 |
| Context | `docs/context/features/csdl-export-print.md` · `csdl-bieu-04.md` |
| Demo | N/A |
| Gap live | stub / weak filter / wrong name / peer merge → **GAP-BIEU04-XLS-02** · **GAP-BIEU04-XLS-04** · **GAP-BIEU04-XLS-05** · **GAP-BIEU04-XLS-PEER** |

### API-XLS-02 / API-XLS-03 — Import / preview — **DEFER P1**

Document only · routes may exist on controller · **cấm** FE wire · **cấm** widen ImportAsync cho Biểu 4 ở P0.

BFF mirror: `GET /web-bff/api/v1/asset/csdl-records/export` · proxy only.

**Cấm** invent prefix · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*`.

---

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Typed table | `rmms_csdl_bieu4` · Schema_CsdlBieu4 **KEEP** |
| Migration @ XLS | **none mới** · export reads typed + shell |
| Parent *Json | **cấm** |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward QS · binary passthrough · **cấm** remap filename/cols |
| Validation | API (resource required · tenant) |
| Permissions | `asset.csdl-records.read` |
| Errors | 422 / toast FE · **cấm** alert |

---

## 6. Tasks for Team Lead (ids)

| ID | Scope |
|----|-------|
| T-XLS-BE-01 | Widen `CsdlCatalogExcelService` Export `resource=culverts` · golden Biểu 4 · 17 cols · filter-all |
| T-XLS-BE-02 | Filename `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · Content-Disposition · empty OK |
| T-XLS-BFF-01 | Verify BFF export binary proxy (no remap) |
| T-XLS-FE-01 | catalogToolbar Xuất Excel · blob download · toast · **cấm** filter-bar export |
| T-XLS-FE-02 | Pass list filter QS · ignore page · Import UI ẩn P1 |
| T-XLS-QA-01 | AC-XLS-01..09 · GAP-BIEU04-XLS-01..05 · GAP-BIEU04-XLS-PEER |
| T-KEEP | typed CRUD / GPS / Slideout / Schema_CsdlBieu4 — **cấm** reopen |

---

## 7. Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-BIEU04-XLS-01 | P0 | Toolbar +Xuất · Import ẩn |
| GAP-BIEU04-XLS-02 | P0 | Export binary filtered golden Biểu 4 |
| GAP-BIEU04-XLS-03 | P1 | Import DEFER |
| GAP-BIEU04-XLS-04 | P0 | filter-all · no stream |
| GAP-BIEU04-XLS-05 | P0 | golden 17 cols · cấm 12+8 |
| GAP-BIEU04-XLS-PEER | P0 | cấm merge so-ts-culvert-x |
| GAP-FILTER-BAR-08 | P0 | cấm Xuất trên filter bar |

## 8. Open questions

- **none** (Q-XLS-* + ext `.xls` + filter-all chốt · autoApprove)

## 9. Cấm (SA)

- ERP.* · invent API · reopen typed 17 · merge Sổ TS sheet · Write MFE/native  
- yarn build/e2e/start:std · Step 4b/migration/e2e @ SA · streaming P0 · Import wire P0  

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
| writtenAt | 2026-09-18T03:20:00.000Z |
| contentHashPrior | sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9 |
