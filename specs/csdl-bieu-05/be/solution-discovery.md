# SA — Solution discovery — csdl-bieu-05 (edit_page · T-XLS-S05)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_c949c568`)  
> Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · ssot-no-duplicate · sa-implement-gates · form-type-task-pack (`list`) · filter-bar-layout-hard · **/implement-export-import-excel**  
> Requires: Design **confirmed** · PO compact · data_analy compact · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · yarn build/e2e/start:std · Step 4b/migration @ SA

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại · **Xuất Excel** (Import DEFER P1) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** (T-XLS-S05 · Wave 1) |
| packKind | **`list`** |
| status | `confirmed` |
| design_confirm | approve (`task_8d9445b7`) |
| solution_confirm | **approve** (autoApprove=ON · `task_c949c568`) |
| domain_map | **Asset** (`csdl-bieu-05` → `asset` · **KEEP**) |
| sa_tz_gate | **`tz_na`** (KEEP) |
| sa_xco_gate | **`xco_get_only`** (KEEP) |
| sa_shared_table | **`share_tenant`** (KEEP) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-05` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ditches` |
| peerSoTs | `so-ts-ditch` · deep-link only · **cấm** merge sheet |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-` (KEEP) |
| contentHash | `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| analyReuse | **hash match** · **cấm** reopen typed 18-col · delta XLS export only |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_c949c568` |
| priorSa | `task_e5779496` (typed CRUD · Schema_CsdlBieu5 · KEEP) |
| updatedAt | `2026-09-18T03:50:00.000Z` |
| versionGate | `aligned` (contentHash = prior PO/Design/data_analy) |

## § Delta Current vs Target (`edit_page` · export P0)

| Area | Current live | Target (T-XLS-S05) | Action |
|------|--------------|--------------------|--------|
| CRUD typed 18 | Schema_CsdlBieu5 · Slideout ditchKind · shape · range | **KEEP** | **cấm** reopen |
| Filter bar | LinErpListFilterBar | **KEEP** · **cấm** nút Xuất trên filter | GAP-FILTER-BAR-08 |
| Toolbar | CRUD actions | **+Xuất Excel** catalogToolbar · Import **ẩn** P1 | **GAP-BIEU05-XLS-01** |
| Export API | `GET …/export?resource=` → stub / weak | filtered · golden Cục **Biểu 5** · `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` · binary · **filter-all** | **GAP-BIEU05-XLS-02** |
| Import API | `POST …/import[/preview]` | **DEFER P1** (`Q-XLS-IMPORT=export_only_p0`) · UI ẩn | **GAP-BIEU05-XLS-03** DEFER |
| BFF | proxy export | **KEEP** proxy only · binary passthrough | T-XLS-BFF-01 |
| Golden | stub / generic | Cục **16-sheet** · sheet **Biểu 5** only · **18 cột** · **cấm** 12+8 hồ sơ | cite epic · **GAP-BIEU05-XLS-05** |
| Scope | ignores / partial filters | **Q-XLS-SCOPE=filtered** · same QS as list · empty = all visible tenant | pass-through |
| Filename | stub / wrong ext | `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` | **SA chốt `.xls`** (Cục golden + Wave1 peer Biểu 01–04 · override PO `.xlsx` draft) |
| Export mode | unclear page vs stream | **filter-all** · ignore `page`/`pageSize` · service row cap · **cấm** HTTP streaming P0 | **GAP-BIEU05-XLS-04** |
| Peer Sổ TS | `so-ts-ditch` deep-link | deep-link **KEEP** · **cấm** gộp vào sheet Biểu 5 | **GAP-BIEU05-XLS-PEER** |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize list · LeaveConfirm · typed entity/migration · ditchKind/shape/range · **cấm** ERP.*.

---

## 1. Ownership (KEEP + XLS widen)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · catalogToolbar **Xuất Excel** trên list Biểu 05 / hub `resource=ditches` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` |
| Excel service | `CsdlCatalogExcelService` — **widen** Export for `ditches` typed (Import widen = P1) |
| Persist | shell `rmms_csdl_catalog_records` + typed `rmms_csdl_bieu5` (**KEEP** · **cấm** parent *Json) |
| BFF | `CsdlCatalogRecordsBffController` · proxy only = **yes** |
| FE BASE | `/asset/csdl-records` |
| DOMAIN-MAP | `csdl-bieu-05` → Asset (**KEEP**) |

### Route / domain

| Surface | Path |
|---------|------|
| UI | `/so-ts/csdl-so-sach?resource=ditches` · alias `/csdl-bieu-05` |
| Export P0 | `GET api/v1/asset/csdl-records/export?resource=ditches&…filters` |
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
| Excel | `/implement-export-import-excel` | golden Cục sheet Biểu 5 |
| Filter | `filter-bar-layout-hard` | **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08) |
| Persist | `no-parent-json-field` | export from typed · **không** DetailJson |
| Peer | deep-link only | **cấm** merge `so-ts-ditch` vào sheet |

---

## Implement gates (confirm) — RECORDED KEEP

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | export **không** date-range business | KEEP |
| XCO | **`xco_get_only`** | export/list tenant; detail GET view only | KEEP |
| SHARE | **`share_tenant`** | shell + `CsdlBieu5Entity` | KEEP |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T03:50:00.000Z`

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
| list / create / edit / view / copy / delete | KEEP prior | KEEP | **cấm** reopen typed 18-col · ditchKind/shape/range KEEP |
| **export** | — | GET export + **same filter QS** | filtered · **filter-all** · binary · filename locked · **cấm** streaming P0 |
| import | — | — | **DEFER P1** |

### List filter query keys (KEEP — also export QS)

| Query key | UI | Export |
|-----------|-----|--------|
| `resource` | const `ditches` | **required** |
| `search` | SearchTextInput | pass |
| `province` | Dropdown | pass |
| `status` | Dropdown | pass |
| `roadCode` | SearchInput | pass |
| `kmFrom` | Number | pass |
| `kmTo` | Number | pass |
| `ditchKind` | Dropdown | pass |
| `page` / `pageSize` | pagination | **export ignores page** · filter-all · service row cap · **cấm** stream |

---

## 2. Form data analysis (XLS)

| Screen | Fields / payload | Source | Persist | Notes |
|--------|------------------|--------|---------|-------|
| S-XLS-EXPORT | filter QS only | derived list | — | **cấm** invent body |
| S-XLS-IMPORT | — | — | — | **DEFER P1** · UI ẩn |
| Typed columns | KEEP 18 | transaction | `rmms_csdl_bieu5` | real-data §B · ditchKind · shape · range · **cấm** invent |

**controlHint:** `exportExcel` = ToolbarButton · `importExcel` = ToolbarButton+file **ẩn P1** — **không** SearchInput/Dropdown invent.

### Q-XLS decisions (SA locked)

| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | **filtered** (QS · empty = all visible tenant) |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` · **ext `.xls`** (Cục golden + peer Biểu 01–04 Wave1 · override PO `.xlsx` draft) |
| Export mode | **filter-all** · ignore page · **cấm** HTTP streaming P0 |
| Peer | **cấm** gộp `so-ts-ditch` vào sheet Biểu 5 |

---

## 3. API catalog (XLS — P0 export)

### API-XLS-01: GET `/api/v1/asset/csdl-records/export`

| | |
|--|--|
| Purpose | Xuất Excel Biểu 5 theo **filter hiện tại** (binary · filter-all) |
| Permission | `asset.csdl-records.read` |
| Tenant | X-Company-Id · share_tenant |
| Request | query: `resource=ditches` **required** + list filter keys (search, province, status, roadCode, kmFrom, kmTo, ditchKind) · **không** dùng page/pageSize |
| Response | `File` binary · `Content-Disposition` filename=`Bieu05_RanhCacLoai_{yyyyMMdd}.xls` · content-type Excel (xls per implement skill) |
| Errors | 422 thiếu resource · empty → file headers-only hoặc toast FE “không có dữ liệu” (Dev chốt 1 · AC-XLS empty OK) |
| Form surfaces | S-XLS-EXPORT · catalogToolbar |
| Field map | list projection / typed 18 → golden sheet **Biểu 5** columns · ditchKind · shape · kmFrom/kmTo |
| Mode | **filter-all** · service row cap · **cấm** streaming P0 |
| Context | `docs/context/features/csdl-export-print.md` · `csdl-bieu-05.md` |
| Demo | N/A |
| Gap live | stub / weak filter / wrong name / peer merge → **GAP-BIEU05-XLS-02** · **GAP-BIEU05-XLS-04** · **GAP-BIEU05-XLS-05** · **GAP-BIEU05-XLS-PEER** |

### API-XLS-02 / API-XLS-03 — Import / preview — **DEFER P1**

Document only · routes may exist on controller · **cấm** FE wire · **cấm** widen ImportAsync cho Biểu 5 ở P0.

BFF mirror: `GET /web-bff/api/v1/asset/csdl-records/export` · proxy only.

**Cấm** invent prefix · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*`.

---

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Typed table | `rmms_csdl_bieu5` · Schema_CsdlBieu5 **KEEP** |
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
| T-XLS-BE-01 | Widen `CsdlCatalogExcelService` Export `resource=ditches` · golden Biểu 5 · 18 cols · filter-all |
| T-XLS-BE-02 | Filename `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` · Content-Disposition · empty OK |
| T-XLS-BFF-01 | Verify BFF export binary proxy (no remap) |
| T-XLS-FE-01 | catalogToolbar Xuất Excel · blob download · toast · **cấm** filter-bar export |
| T-XLS-FE-02 | Pass list filter QS · ignore page · Import UI ẩn P1 |
| T-XLS-QA-01 | AC-XLS-01..09 · GAP-BIEU05-XLS-01..05 · GAP-BIEU05-XLS-PEER |
| T-KEEP | typed CRUD / ditchKind / shape / range / Slideout / Schema_CsdlBieu5 — **cấm** reopen |

---

## 7. Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-BIEU05-XLS-01 | P0 | Toolbar +Xuất · Import ẩn |
| GAP-BIEU05-XLS-02 | P0 | Export filtered binary · golden Biểu 5 · 18 cols |
| GAP-BIEU05-XLS-03 | P1 | Import DEFER |
| GAP-BIEU05-XLS-04 | P0 | filter-all · **cấm** streaming |
| GAP-BIEU05-XLS-05 | P0 | Filename `.xls` · Cục sheet · **cấm** 12+8 |
| GAP-BIEU05-XLS-PEER | P0 | **cấm** merge so-ts-ditch |
| GAP-FILTER-BAR-08 | P0 | **cấm** Xuất trên filter bar |

---

## 8. Open questions

- **none** (Q-XLS-SCOPE=filtered · Q-XLS-IMPORT=export_only_p0 · Q-XLS-FILENAME `.xls` locked · export mode filter-all · Design approve · autoApprove ON)

## 9. Handoff

| Role | Need |
|------|------|
| **TL** | `task/csdl-bieu-05.md` · T-XLS-* · T-KEEP |
| Dev | `/implement-export-import-excel` · export ditches only P0 |
| QA | e2e queued `/agent-qa*` · **cấm** @ SA |

## Cấm (SA)

ERP.* · invent API · reopen typed 18-col · Guid IdCode · merge Sổ TS sheet · parent *Json · Step 4b/migration/e2e/build/start:std @ SA · Write MFE · re-scan demo · toast stub = done · filter-bar export
