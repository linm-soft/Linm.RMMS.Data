# SA — Solution discovery — csdl-bieu-12 (edit_page · T-XLS-S12 export)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_b183ffe0`)  
> Standards: api-endpoint · bff-api-structure · company-field · api-permission-gate · repo-path-guard · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · `/implement-export-import-excel`  
> Requires: Design **confirmed** · data_analy/po compact · real-data §B · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · invent `api/v1/infra/*` · toast stub=done · filter-bar export · golden 12+8 · 2-sheet invent · invent/merge `so-ts-green` · yarn build/e2e/start:std · Step 4b/migration @ SA · reopen typed new_page CRUD

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Xuất Excel (Cây xanh, thảm cỏ) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** keep · Kind **D** Slideout keep · **+toolbar** Xuất Excel) |
| status | `confirmed` |
| design_confirm | approve (`task_5391dd50`) |
| solution_confirm | **approve** (autoApprove=ON · `task_b183ffe0`) |
| domain_map | **Asset** · `csdl-bieu-12` → `asset` · **keep** (typed prior · T-DM-01 done) |
| sa_tz_gate | **`tz_na`** (keep) |
| sa_xco_gate | **`xco_get_only`** (keep · export inherits list XCO filter) |
| sa_shared_table | **`share_tenant`** (keep · no new table) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-12` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=green-assets` |
| peerSoTs | **none** · **cấm** invent `so-ts-green` · **≠** Sổ TS merge · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` · **1 sheet** · khóm+cỏ cùng hàng · **cấm** 2 sheet invent |
| IdCode | `CX-` (keep) |
| catalogKind | `green-assets` (keep) |
| controlHint | `specs/_data-analy/features/csdl-bieu-12-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-12-real-data.md` |
| design | `specs/csdl-bieu-12/ui/design.md` (confirmed) |
| priorSaTyped | prior `task_a36be038` · **keep** Schema_CsdlBieu12 |
| contentHashPriorDataAnaly | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprintPrior | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| analyReuse | **hash match** · **cấm** invent API / re-CRUD typed |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_b183ffe0` |
| priorTask | `task_5391dd50` (design completed) |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 **`T-XLS-S12`** |
| updatedAt | `2026-09-18T00:40:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`edit_page` · T-XLS-S12)

| Area | Current (typed shipped) | New (this SA) | Action |
|------|-------------------------|---------------|--------|
| Form / list typed | 15 cột · 2 section · Schema_CsdlBieu12 · khóm+cỏ flat | **Unchanged** | **cấm** reopen |
| Toolbar | Refresh/Add/History/Schema/CRUD · **no peer** | **+Xuất Excel** · Import **ẩn P1** | GAP-BIEU12-XLS-01 |
| Filter bar | LinErpListFilterBar | Unchanged · **cấm** Xuất | GAP-FILTER-BAR-08 / GAP-BIEU12-XLS-04 |
| Export | Missing / toast stub | `GET …/export?resource=green-assets` binary | GAP-BIEU12-XLS-05 |
| Import | Missing / stub | **DEFER P1** · **cấm** wire P0 | Q-XLS-IMPORT=`export_only_p0` |
| Scope | — | **filtered** (+ current filter QS) · **filter-all** ignore page | Q-XLS-SCOPE |
| Layout | — | **1 sheet** 15 cols · khóm+cỏ cùng hàng | GAP-BIEU12-XLS-06 · **cấm** 2 sheet |
| Filename | — | `Bieu12_CayXanh_{yyyyMMdd}.xls` · **ext `.xls`** | Q-XLS-FILENAME (override PO `.xlsx` draft · Cục + Wave1 peer) |
| Export mode | unclear | **filter-all** · ignore `page`/`pageSize` · service row cap · **cấm** HTTP streaming P0 | GAP-BIEU12-XLS-08 |
| Peer | none | **cấm** invent/merge so-ts-green | GAP-BIEU12-XLS-07 |
| Golden | — | Cục 16-sheet · sheet Biểu 12 · checksum **15** | GAP-BIEU12-XLS-03 |
| Done gate | Typed CRUD done | File mở được · **≠** toast stub | GAP-BIEU12-XLS-02 |
| Entity / migration | Schema_CsdlBieu12 | **No new table** | keep |
| BFF | proxy CRUD | proxy **binary** stream | T-BFF-XLS |

**Không đổi:** typed DTO · shell+child 1:1 · clumps/grass flat · soft-delete · tenant `CompanyCode` · pageSize list · LeaveConfirm · filter-bar-layout-hard · Slideout 2 section · IdCode `CX-` · **cấm** ERP.*.

---

## 1. Ownership (delta)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · hub/`CsdlBieu12` entry · `fromCatalogToolbar` + export action |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · **widen** `export` · **giữ** route prefix · Import **skip P0** |
| Service | `CsdlCatalogService` · branch `resource=green-assets` → typed map → Excel Biểu 12 · khóm+cỏ flat row · **cấm** invent so-ts-green |
| Persist | **keep** `CsdlBieu12Entity` / `rmms_csdl_bieu12` / **`Schema_CsdlBieu12`** · **no** migration this pack |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** · stream binary |
| FE | `services/csdlSoSach/endpoint.ts` BASE `/asset/csdl-records` · +`/export` |
| Dev slash | **`/implement-export-import-excel`** |

**Cấm** invent parallel host · invent `api/v1/infra/*` · ERP.* · filter-bar export button · 2 workbook sheets · reopen typed entity · invent peer Sổ TS.

### Route / domain

| Surface | Path |
|---------|------|
| UI hub / alias | `/so-ts/csdl-so-sach?resource=green-assets` · `/csdl-bieu-12` |
| Peer Sổ TS | **none** · **cấm** invent |
| CRUD (keep) | `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| **Export** | `GET api/v1/asset/csdl-records/export?resource=green-assets` (+ filter QS · **không** page/pageSize) |
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
| Persist | **reuse** Schema_CsdlBieu12 · **no** import upsert P0 |
| Auth | `asset.csdl-records.read` (export) · Auth debt keep |
| Excel engine | BE generate · golden Cục sheet Biểu 12 · **cấm** CSV grid dump |

---

## Implement gates (confirm) — RECORDED

| Gate | Decision | Note |
|------|----------|------|
| TZ | **`tz_na`** | Export **không** thêm fromDate/toDate |
| XCO | **`xco_get_only`** | Export rows = same XCO as list GET |
| SHARE | **`share_tenant`** | No new entity · tenant via shell |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T00:40:00.000Z`

---

## FormType pack (`list`) — keep + XLS surfaces

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B keep · toolbar +Xuất · **no peer** | list | API-01 keep |
| S-FORM-* | Kind D Slideout keep · 2 section khóm + thảm cỏ | create/edit/view/copy | API-02..05 keep |
| **S-XLS-EXPORT** | catalogToolbar button | — (action) | **API-XLS-01** GET export |
| **S-XLS-IMPORT** | hidden P1 | — | **DEFER** · **cấm** API-XLS-02 P0 |

### FormMode ↔ API (REQUIRED)

| FormMode / action | Load | Save / action | Notes |
|-------------------|------|---------------|-------|
| list / CRUD | **keep** prior typed | **keep** | **cấm** đổi DTO 15 · **cấm** đổi Schema_CsdlBieu12 |
| **exportExcel** | current filter QS (no page) | GET `/export?resource=green-assets` + same filter QS | binary · Content-Disposition · 1 sheet 15 · khóm+cỏ cùng hàng · **filter-all** |
| **importExcel** | — | — | **DEFER P1** · nút ẩn |

### Export query keys (mirror list filter · ignore page)

`resource` (required) · `search` · `province` · `status` · `roadCode` · `kmFrom` · `kmTo` · `side` · (**cấm** invent extra date QS · **cấm** `page`/`pageSize` trên export)

Q-XLS-SCOPE=**filtered** → export = **tất cả** rows khớp filter hiện tại (filter-all · không chỉ trang UI) · vẫn **1 sheet** 15 cột · khóm+cỏ cùng hàng.

---

## 2. Excel contract (Biểu 12)

| Item | Decision |
|------|----------|
| Workbook | `.xls` · filename `Bieu12_CayXanh_{yyyyMMdd}.xls` |
| Sheets | **1** sheet · header merge theo mẫu Cục Biểu 12 |
| Columns | **15** SSOT: `code\|roadCode\|roadName\|province\|kmFrom\|kmTo\|side\|oleanderClumps\|ngauClumps\|palmClumps\|otherClumps\|grassAreaM2\|status\|manageUnit\|notes` |
| Khóm+cỏ | 4 khóm + `grassAreaM2` **cùng hàng** data · **cấm** sheet/section invent riêng |
| Peer | **none** · **cấm** invent/merge so-ts-green vào export |
| Golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 12 · checksum 15 · **cấm** hồ sơ 12+8 |
| Mode | **filter-all** · service row cap · **cấm** HTTP streaming P0 |
| Empty export | File tải · 0 data row · header OK · toast info |
| Fail | toast · **cấm** silent · **cấm** fake blob / CSV generic |
| Import | **DEFER P1** · **cấm** P0 DoD |

**SA chốt open Q:**
| Q | Decision |
|---|----------|
| Q-XLS-FILENAME | `Bieu12_CayXanh_{yyyyMMdd}.xls` · **ext `.xls`** (Cục golden + Wave1 peer Biểu 01–11 · override PO `.xlsx` draft) |
| Export mode | **filter-all** · ignore page · **cấm** streaming P0 |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-SHEET | **one_sheet** · checksum 15 |

---

## 3. API catalog (delta)

| Id | Method | Path | Response | Gate |
|----|--------|------|----------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=green-assets` + filter QS | `application/vnd.ms-excel` (or octet-stream) + Content-Disposition | read + XCO list |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=green-assets` | — | **DEFER P1** · **cấm** P0 |
| BFF-XLS-01 | GET | `/web-bff/api/v1/asset/csdl-records/export` | proxy binary | proxy only |

CRUD API-01..05 · LKP road-route: **unchanged** (prior SA typed).

---

## 4. BFF vs API

| Concern | Decision |
|---------|----------|
| Business Excel map | **API** (`CsdlCatalogService` · Schema_CsdlBieu12 join · khóm+cỏ flat) |
| BFF | **proxy only** · forward QS · stream body · **cấm** FE→API direct · **cấm** remap cột ở BFF |
| MFE | blob download · `a[download]` · filename từ header hoặc fallback Q-XLS-FILENAME |

---

## 5. Entity / migration

| Item | Decision |
|------|----------|
| New entity | **none** |
| Schema_CsdlBieu12 | **keep** |
| Migration / Step 4b | **skip** @ SA · **không** cần Dev migration cho XLS pack |
| Parent *Json | **cấm** |
| Clump/grass child table | **cấm** (keep flat) |

---

## 6. Tasks for Team Lead (ids)

| Id | Owner | One-liner |
|----|-------|-----------|
| T-XLS-S12-BE-01 | BE | GET export binary Biểu 12 · filtered filter-all · 15 cols · 1 sheet · khóm+cỏ cùng hàng |
| T-XLS-S12-BFF-01 | BFF | proxy export binary |
| T-XLS-S12-FE-01 | FE | catalogToolbar Xuất · wire filter QS · **cấm** filter-bar · Import ẩn |
| T-XLS-S12-FE-02 | FE | download filename `.xls` · empty/fail toast · **cấm** stub done |
| T-XLS-S12-QA-01 | QA | golden checksum 15 · filtered · 0-row · **cấm** import P0 (queued e2e) |
| T-XLS-S12-BE-02 | BE | POST import — **OUT / DEFER P1** |
| T-OUT-01 | — | org SearchInput P2 · map · **keep OUT** |

---

## 7. GAP (TL / Dev must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU12-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 12 |
| GAP-BIEU12-XLS-02 | Toast stub ≠ done |
| GAP-BIEU12-XLS-03 | Golden Cục 16-sheet · checksum 15 · cấm 12+8 |
| GAP-BIEU12-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU12-XLS-05 | GET export · Import DEFER P1 |
| GAP-BIEU12-XLS-06 | 1 sheet 15 · cấm 2 sheet |
| GAP-BIEU12-XLS-07 | Cấm invent/merge so-ts-green |
| GAP-BIEU12-XLS-08 | filter-all · cấm streaming P0 |

---

## 8. Cấm (SA)

ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · invent so-ts-green · new_page typed re-CRUD · migration @ SA · Write MFE @ SA · yarn build/e2e/start:std @ SA · streaming P0 · Import wire P0

---

## Handoff

| Next | Need |
|------|------|
| **team_lead** | T-* matrix · route_a keep · `/implement-export-import-excel` · export_only_p0 |
| Dev | BE export + BFF + FE toolbar · **cấm** re-CRUD Schema_CsdlBieu12 |
| QA | queued e2e · golden 15 · filtered · 0-row |

**solution_confirm=approve** · autoApprove ON · `task_b183ffe0` · `2026-09-18T00:40:00.000Z`
