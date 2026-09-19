# SA — Solution discovery — csdl-bieu-13 (edit_page · T-XLS-S13 export)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_51c2f1f4`)  
> Standards: api-endpoint · bff-api-structure · company-field · api-permission-gate · repo-path-guard · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · `/implement-export-import-excel`  
> Requires: Design **confirmed** · data_analy/po compact · real-data §B · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · invent `api/v1/infra/*` · toast stub=done · filter-bar export · golden 12+8 · invent dim sheet · merge `so-ts-noise-barrier` / `road-assets` · yarn build/e2e/start:std · Step 4b/migration @ SA · reopen typed new_page CRUD

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Xuất Excel (Tường chống ồn) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** keep · Kind **D** Slideout keep · **+toolbar** Xuất Excel) |
| status | `confirmed` |
| design_confirm | approve (`task_82008258`) |
| solution_confirm | **approve** (autoApprove=ON · `task_51c2f1f4`) |
| domain_map | **Asset** · `csdl-bieu-13` → `asset` · **keep** (typed prior · T-DM-01 done) |
| sa_tz_gate | **`tz_na`** (keep) |
| sa_xco_gate | **`xco_get_only`** (keep · export inherits list XCO filter) |
| sa_shared_table | **`share_tenant`** (keep · no new table) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-13` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=noise-barriers` |
| peerSoTs | `so-ts-noise-barrier` · **cite only** · **cấm** merge · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` · **1 sheet** · dài/cao/DT cùng hàng · **cấm** sheet riêng kích thước |
| IdCode | `TC-` (keep) |
| catalogKind | `noise-barriers` (keep) |
| controlHint | `specs/_data-analy/features/csdl-bieu-13-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-13-real-data.md` |
| design | `specs/csdl-bieu-13/ui/design.md` (confirmed) |
| priorSaTyped | prior `task_66b443d8` · **keep** Schema_CsdlBieu13 |
| contentHashPriorDataAnaly | `sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f` |
| headerFingerprintPrior | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| analyReuse | **hash match** · **cấm** invent API / re-CRUD typed |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_51c2f1f4` |
| priorTask | `task_82008258` (design completed) |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 **`T-XLS-S13`** |
| updatedAt | `2026-09-18T01:30:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`edit_page` · T-XLS-S13)

| Area | Current (typed shipped) | New (this SA) | Action |
|------|-------------------------|---------------|--------|
| Form / list typed | 13 cột · section vị trí + kích thước · Schema_CsdlBieu13 · lengthM/heightM/areaM2 flat | **Unchanged** | **cấm** reopen |
| Toolbar | Refresh/Add/History/Schema/CRUD | **+Xuất Excel** · Import **ẩn P1** | GAP-BIEU13-XLS-01 |
| Filter bar | LinErpListFilterBar | Unchanged · **cấm** Xuất | GAP-FILTER-BAR-08 / GAP-BIEU13-XLS-04 |
| Export | Missing / toast stub | `GET …/export?resource=noise-barriers` binary | GAP-BIEU13-XLS-05 |
| Import | Missing / stub | **DEFER P1** · **cấm** wire P0 | Q-XLS-IMPORT=`export_only_p0` |
| Scope | — | **filtered** (+ current filter QS) · **filter-all** ignore page | Q-XLS-SCOPE |
| Layout | — | **1 sheet** 13 cols · dài/cao/DT cùng hàng | GAP-BIEU13-XLS-06 · **cấm** dim sheet |
| Filename | — | `Bieu13_TuongChongOn_{yyyyMMdd}.xls` · **ext `.xls`** | Q-XLS-FILENAME (override PO `.xlsx` draft · Cục + Wave1 peer) |
| Export mode | unclear | **filter-all** · ignore `page`/`pageSize` · service row cap · **cấm** HTTP streaming P0 | GAP-BIEU13-XLS-08 |
| Peer | cite `so-ts-noise-barrier` | **cấm** merge peer / road-assets vào export | GAP-BIEU13-XLS-07 |
| Golden | — | Cục 16-sheet · sheet Biểu 13 · checksum **13** | GAP-BIEU13-XLS-03 |
| Done gate | Typed CRUD done | File mở được · **≠** toast stub | GAP-BIEU13-XLS-02 |
| Entity / migration | Schema_CsdlBieu13 | **No new table** | keep |
| BFF | proxy CRUD | proxy **binary** stream | T-BFF-XLS |

**Không đổi:** typed DTO · shell+child 1:1 · LengthM/HeightM/AreaM2 flat · soft-delete · tenant `CompanyCode` · pageSize list · LeaveConfirm · filter-bar-layout-hard · Slideout section kích thước · IdCode `TC-` · barrierType **no_type_keep_13** · **cấm** ERP.*.

---

## 1. Ownership (delta)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · hub/`CsdlBieu13` entry · `fromCatalogToolbar` + export action |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · **widen** `export` · **giữ** route prefix · Import **skip P0** |
| Service | `CsdlCatalogService` · branch `resource=noise-barriers` → typed map → Excel Biểu 13 · dim flat row · **cấm** merge so-ts-noise-barrier |
| Persist | **keep** `CsdlBieu13Entity` / `rmms_csdl_bieu13` / **`Schema_CsdlBieu13`** · **no** migration this pack |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** · stream binary (`BuildExportPath` live) |
| FE | `services/csdlSoSach/endpoint.ts` BASE `/asset/csdl-records` · +`/export` |
| Dev slash | **`/implement-export-import-excel`** |

**Cấm** invent parallel host · invent `api/v1/infra/*` · ERP.* · filter-bar export button · 2 workbook sheets · reopen typed entity · merge peer Sổ TS / road-assets.

### Route / domain

| Surface | Path |
|---------|------|
| UI hub / alias | `/so-ts/csdl-so-sach?resource=noise-barriers` · `/csdl-bieu-13` |
| Peer Sổ TS | `so-ts-noise-barrier` · cite only · **cấm** merge vào export |
| CRUD (keep) | `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| **Export** | `GET api/v1/asset/csdl-records/export?resource=noise-barriers` (+ filter QS · **không** page/pageSize) |
| **Import** | `POST …/import` — **DEFER P1** · **cấm** P0 DoD |
| BFF mirror | `web-bff/api/v1/asset/csdl-records/export` |
| FE BASE | `/asset/csdl-records` |

---

## Architecture

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` |
| Domain | **Asset** / `asset` |
| API | Widen existing `CsdlCatalogRecordsController` |
| BFF | proxy only · **pass-through binary** (no re-encode JSON) |
| MFE | catalogToolbar Xuất · download blob · Import ẩn P1 |
| Persist | **reuse** Schema_CsdlBieu13 · **no** import upsert P0 |
| Auth | `asset.csdl-records.read` (export) · Auth debt keep |
| Excel engine | BE generate · golden Cục sheet Biểu 13 · **cấm** CSV grid dump |

---

## Implement gates (confirm) — RECORDED

| Gate | Decision | Note |
|------|----------|------|
| TZ | **`tz_na`** | Export **không** thêm fromDate/toDate |
| XCO | **`xco_get_only`** | Export rows = same XCO as list GET |
| SHARE | **`share_tenant`** | No new entity · tenant via shell |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T01:30:00.000Z`

---

## FormType pack (`list`) — keep + XLS surfaces

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B keep · toolbar +Xuất · peer cite only | list | API-01 keep |
| S-FORM-* | Kind D Slideout keep · section kích thước | create/edit/view/copy | API-02..05 keep |
| **S-XLS-EXPORT** | catalogToolbar button | — (action) | **API-XLS-01** GET export |
| **S-XLS-IMPORT** | hidden P1 | — | **DEFER** · **cấm** API-XLS-02 P0 |

### FormMode ↔ API (REQUIRED)

| FormMode / action | Load | Save / action | Notes |
|-------------------|------|---------------|-------|
| list / CRUD | **keep** prior typed | **keep** | **cấm** đổi DTO 13 · **cấm** đổi Schema_CsdlBieu13 |
| **exportExcel** | current filter QS (no page) | GET `/export?resource=noise-barriers` + same filter QS | binary · Content-Disposition · 1 sheet 13 · dài/cao/DT cùng hàng · **filter-all** |
| **importExcel** | — | — | **DEFER P1** · nút ẩn |

### Export query keys (mirror list filter · ignore page)

`resource` (required) · `search` · `province` · `status` · `roadCode` · `kmFrom` · `kmTo` · `side` · (**cấm** invent extra date QS · **cấm** `page`/`pageSize` trên export)

Q-XLS-SCOPE=**filtered** → export = **tất cả** rows khớp filter hiện tại (filter-all · không chỉ trang UI) · vẫn **1 sheet** 13 cột · dài/cao/DT cùng hàng.

---

## 2. Excel contract (Biểu 13)

| Item | Decision |
|------|----------|
| Workbook | `.xls` · filename `Bieu13_TuongChongOn_{yyyyMMdd}.xls` |
| Sheets | **1** sheet · header merge theo mẫu Cục Biểu 13 |
| Columns | **13** SSOT: `code\|roadCode\|roadName\|province\|kmFrom\|kmTo\|side\|lengthM\|heightM\|areaM2\|status\|manageUnit\|notes` |
| Dim | `lengthM` + `heightM` + `areaM2` **cùng hàng** data · **cấm** sheet/section invent riêng kích thước |
| Peer | cite `so-ts-noise-barrier` · **cấm** merge peer / road-assets vào export |
| Golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 13 · checksum 13 · **cấm** hồ sơ 12+8 |
| Mode | **filter-all** · service row cap · **cấm** HTTP streaming P0 |
| Empty export | File tải · 0 data row · header OK · toast info |
| Fail | toast · **cấm** silent · **cấm** fake blob / CSV generic |
| Import | **DEFER P1** · **cấm** P0 DoD |

**SA chốt open Q:**
| Q | Decision |
|---|----------|
| Q-XLS-FILENAME | `Bieu13_TuongChongOn_{yyyyMMdd}.xls` · **ext `.xls`** (Cục golden + Wave1 peer Biểu 01–12 · override PO `.xlsx` draft) |
| Export mode | **filter-all** · ignore page · **cấm** streaming P0 |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-SHEET | **one_sheet** · checksum 13 |
| Q-XLS-SCOPE | **filtered** · filter-all |

---

## 3. API surface (delta)

| Id | Method | Path | Response | Perm |
|----|--------|------|----------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=noise-barriers` + filter QS | `application/vnd.ms-excel` (or octet-stream) + Content-Disposition | read + XCO list |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=noise-barriers` | — | **DEFER P1** · **cấm** P0 |
| API-01..05 | keep | CRUD `csdl-records` | JSON typed | **unchanged** |

**BFF:** `GET web-bff/api/v1/asset/csdl-records/export` · proxy binary · **không** JSON wrap.

**MFE:** blob download · `a[download]` · filename từ header hoặc fallback Q-XLS-FILENAME · **cấm** toast stub = done.

---

## 4. Task split → TL

| Id | Owner | One-liner |
|----|-------|-----------|
| T-XLS-S13-BE-01 | BE | GET export binary Biểu 13 · filtered filter-all · 13 cols · 1 sheet · dài/cao/DT cùng hàng |
| T-XLS-S13-BFF-01 | BFF | proxy export binary |
| T-XLS-S13-FE-01 | FE | catalogToolbar Xuất · wire filter QS · **cấm** filter-bar · Import ẩn |
| T-XLS-S13-FE-02 | FE | download filename `.xls` · empty/fail toast · **cấm** stub done |
| T-XLS-S13-QA-01 | QA | golden checksum 13 · filtered · 0-row · **cấm** import P0 (queued e2e) |
| T-XLS-S13-BE-02 | BE | POST import — **OUT / DEFER P1** |

---

## 5. GAP trace

| ID | One-liner |
|----|-----------|
| GAP-BIEU13-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 13 |
| GAP-BIEU13-XLS-02 | Toast stub ≠ done |
| GAP-BIEU13-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU13-XLS-04 | Cấm filter-bar export |
| GAP-BIEU13-XLS-05 | GET export path (+ QS) |
| GAP-BIEU13-XLS-06 | 1 sheet 13 · dài/cao/DT cùng hàng |
| GAP-BIEU13-XLS-07 | Cấm merge so-ts-noise-barrier/road-assets |
| GAP-BIEU13-XLS-08 | filter-all · cấm streaming P0 |

---

## 6. Out of pack / debt keep

- Import Excel wire P0
- HTTP streaming export
- Org SearchInput P2 · Auth DEFER
- Peer toolbar deep-link / merge
- Typed CRUD reopen · migration @ SA
- GAP-QA-E2E-PW-01 · GAP-QA-ROAD-TESTID (prior)

---

## Confirm

**solution_confirm=approve** · autoApprove ON · `task_51c2f1f4` · `2026-09-18T01:30:00.000Z`

**Next:** TL `task/csdl-bieu-13.md` · T-XLS-S13-* · `/implement-export-import-excel` · **cấm** filter-bar export · e2e queued QA.
