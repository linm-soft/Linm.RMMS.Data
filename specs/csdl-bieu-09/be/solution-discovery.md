# SA — Solution discovery — csdl-bieu-09 (edit_page · T-XLS-S09 export/import)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_8ad5cfc2`)  
> Standards: api-endpoint · bff-api-structure · company-field · api-permission-gate · repo-path-guard · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · `/implement-export-import-excel`  
> Requires: Design **confirmed** · data_analy/po compact · real-data §B · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · invent `api/v1/infra/*` · toast stub=done · filter-bar export · golden 12+8 · 2-sheet invent · yarn build/e2e/start:std · Step 4b/migration @ SA · reopen typed new_page CRUD

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Xuất/Nhập Excel (Mốc lộ giới / GPMB) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** keep · Kind **D** Slideout keep · **+toolbar** Xuất/Nhập) |
| status | `confirmed` |
| design_confirm | approve (`task_a8101a28`) |
| solution_confirm | **approve** (autoApprove=ON · `task_8ad5cfc2`) |
| domain_map | **Asset** · `csdl-bieu-09` → `asset` · **keep** (typed prior) |
| sa_tz_gate | **`tz_na`** (keep) |
| sa_xco_gate | **`xco_get_only`** (keep · export inherits list XCO filter) |
| sa_shared_table | **`share_tenant`** (keep · no new table) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-09` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=boundary-markers` |
| peerSoTs | **none** · **≠** `road-assets` · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `boundary-markers` |
| formNo | `09` |
| columns | `17` · **1 sheet** cả RoadLimit+GPMB · **cấm** 2 sheet invent |
| IdCode | `MK-` (keep · import upsert) |
| catalogKind | `boundary-markers` (keep) |
| controlHint | `specs/_data-analy/features/csdl-bieu-09-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-09-real-data.md` |
| design | `specs/csdl-bieu-09/ui/design.md` (confirmed) |
| priorSaTyped | `specs/csdl-bieu-09/be/solution-discovery.md` prior `task_fe29c657` · **keep** Schema_CsdlBieu9 |
| contentHashPriorDataAnaly | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| headerFingerprintPrior | `sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77` |
| analyReuse | **hash match** · **cấm** invent API / re-CRUD typed |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_8ad5cfc2` |
| priorTask | `task_a8101a28` (design completed) |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 **`T-XLS-S09`** |
| updatedAt | `2026-09-18T05:50:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`edit_page` · T-XLS-S09)

| Area | Current (typed shipped) | New (this SA) | Action |
|------|-------------------------|---------------|--------|
| Form / list typed | 17 cột · 2 section · Schema_CsdlBieu9 | **Unchanged** | **cấm** reopen |
| Toolbar | Refresh/Add/History/Schema/CRUD | **+Xuất Excel +Nhập Excel** | GAP-BIEU09-XLS-01 |
| Filter bar | LinErpListFilterBar | Unchanged · **cấm** Xuất | GAP-FILTER-BAR-08 |
| Export | Missing / stub | `GET …/export?resource=boundary-markers` binary | GAP-BIEU09-XLS-05 |
| Import | Missing / stub | `POST …/import?resource=boundary-markers` multipart P1 | Q-XLS-IMPORT=import_now |
| Scope | — | **filtered** (+ current filter QS) | Q-XLS-SCOPE |
| Kind rows | — | **respect_filter** · 1 sheet 17 cols | Q-XLS-KIND |
| Filename | — | `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls` | Q-XLS-FILENAME |
| Golden | — | Cục 16-sheet · sheet Biểu 9 · checksum **17** | GAP-BIEU09-XLS-03 |
| Done gate | Typed CRUD done | File mở được · **≠** toast stub | GAP-BIEU09-XLS-02 |
| Entity / migration | Schema_CsdlBieu9 | **No new table** | keep |
| BFF | proxy CRUD | proxy **binary** stream | T-BFF-XLS |

**Không đổi:** typed DTO · shell+child 1:1 · soft-delete · tenant `CompanyCode` · pageSize · LeaveConfirm · filter-bar-layout-hard · Slideout · **cấm** ERP.*.

---

## 1. Ownership (delta)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · `CsdlBieu09Page` · `fromCatalogToolbar` + export/import actions |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · **widen** `export` / `import` · **giữ** route prefix |
| Service | `CsdlCatalogService` · branch `resource=boundary-markers` → typed map → Excel Biểu 9 |
| Persist | **keep** `CsdlBieu9Entity` / `rmms_csdl_bieu9` / **`Schema_CsdlBieu9`** · **no** migration this pack |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** · stream binary |
| FE | `services/csdlSoSach/endpoint.ts` BASE `/asset/csdl-records` · +`/export` · +`/import` |
| Dev slash | **`/implement-export-import-excel`** |

**Cấm** invent parallel host · invent `api/v1/infra/*` · ERP.* · filter-bar export button · 2 workbook sheets by kind.

### Route / domain

| Surface | Path |
|---------|------|
| UI hub / alias | `/so-ts/csdl-so-sach?resource=boundary-markers` · `/csdl-bieu-09` |
| CRUD (keep) | `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| **Export** | `GET api/v1/asset/csdl-records/export?resource=boundary-markers` (+ filter QS) |
| **Import** | `POST api/v1/asset/csdl-records/import?resource=boundary-markers` (multipart) |
| BFF mirror | `web-bff/api/v1/asset/csdl-records[/export|/import]` |
| FE BASE | `/asset/csdl-records` |

---

## Architecture

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` |
| Domain | **Asset** / `asset` |
| API | Widen existing `CsdlCatalogRecordsController` |
| BFF | proxy only · **pass-through binary** (no re-encode JSON) |
| MFE | catalogToolbar Xuất/Nhập · download blob · file picker import |
| Persist | **reuse** Schema_CsdlBieu9 · import upsert by IdCode/tenant |
| Auth | `asset.csdl-records.read` (export) · `create|update` (import) · Auth debt keep |
| Excel engine | BE generate/parse · golden Cục sheet Biểu 9 · **cấm** CSV grid dump |

---

## Implement gates (confirm) — RECORDED

| Gate | Decision | Note |
|------|----------|------|
| TZ | **`tz_na`** | Export **không** thêm fromDate/toDate |
| XCO | **`xco_get_only`** | Export rows = same XCO as list GET |
| SHARE | **`share_tenant`** | No new entity · tenant via shell |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T05:50:00.000Z`

---

## FormType pack (`list`) — keep + XLS surfaces

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B keep · toolbar +Xuất/Nhập | list | API-01 keep |
| S-FORM-* | Kind D Slideout keep | create/edit/view/copy | API-02..05 keep |
| **S-XLS-EXPORT** | catalogToolbar button | — (action) | **API-XLS-01** GET export |
| **S-XLS-IMPORT** | catalogToolbar + file | — (action) | **API-XLS-02** POST import |

### FormMode ↔ API (REQUIRED)

| FormMode / action | Load | Save / action | Notes |
|-------------------|------|---------------|-------|
| list / CRUD | **keep** prior typed | **keep** | **cấm** đổi DTO 17 |
| **exportExcel** | current filter QS | GET `/export?resource=boundary-markers` + same QS as list | binary · Content-Disposition filename |
| **importExcel** | file multipart | POST `/import?resource=boundary-markers` | upsert typed · toast errors · reload list |

### Export query keys (mirror list filter)

`resource` (required) · `search` · `province` · `status` · `roadCode` · `kmFrom` · `kmTo` · `side` · `markerKind` · (**cấm** invent extra date QS)

Q-XLS-SCOPE=**filtered** · Q-XLS-KIND=**respect_filter** → nếu filter `markerKind` set thì chỉ rows kind đó; vẫn **1 sheet** 17 cột.

---

## 2. Excel contract (Biểu 9)

| Item | Decision |
|------|----------|
| Workbook | `.xls` · filename `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls` |
| Sheets | **1** sheet · header merge theo mẫu Cục Biểu 9 |
| Columns | **17** SSOT: `code|roadCode|roadName|province|kmFrom|kmTo|side|markerKind|markerStructure|markerLengthM|markerWidthM|markerAreaM2|markerQty|completedYear|status|manageUnit|notes` |
| Kind | RoadLimit + GPMB trên **cùng** sheet · **cấm** 2 sheet invent |
| Golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 9 · checksum 17 · **cấm** hồ sơ 12+8 |
| Empty export | File tải · 0 data row · header OK · toast info |
| Fail | toast · **cấm** silent · **cấm** fake blob / CSV generic |
| Import | P1 import_now · validate markerKind/LOOKUP · tenant share_tenant |

---

## 3. API catalog (delta)

| Id | Method | Path | Response | Gate |
|----|--------|------|----------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=boundary-markers` + filter QS | `application/vnd.ms-excel` (or octet-stream) + Content-Disposition | read + XCO list |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=boundary-markers` | JSON summary (created/updated/errors) | create/update |
| BFF-XLS-01/02 | same | `/web-bff/api/v1/asset/csdl-records/export|import` | proxy binary / JSON | proxy only |

CRUD API-01..05 · LKP road-route: **unchanged** (prior SA).

---

## 4. BFF vs API

| Concern | Decision |
|---------|----------|
| Business Excel map | **API** (`CsdlCatalogService` · Schema_CsdlBieu9 join) |
| BFF | **proxy only** · forward QS · stream body · **cấm** FE→API direct |
| MFE | blob download · `a[download]` · filename từ header hoặc fallback Q-XLS-FILENAME |

---

## 5. Entity / migration

| Item | Decision |
|------|----------|
| New entity | **none** |
| Schema_CsdlBieu9 | **keep** |
| Migration / Step 4b | **skip** @ SA · **không** cần Dev migration cho XLS pack |
| Parent *Json | **cấm** |

---

## 6. Tasks for Team Lead (ids)

| Id | Owner | One-liner |
|----|-------|-----------|
| T-XLS-S09-BE-01 | BE | GET export binary Biểu 9 · filtered · 17 cols · 1 sheet |
| T-XLS-S09-BE-02 | BE | POST import multipart · upsert typed · validation toast |
| T-XLS-S09-BFF-01 | BFF | proxy export/import binary |
| T-XLS-S09-FE-01 | FE | catalogToolbar Xuất/Nhập · wire QS · **cấm** filter-bar |
| T-XLS-S09-FE-02 | FE | download filename · empty/fail toast · **cấm** stub done |
| T-XLS-S09-QA-01 | QA | golden checksum 17 · filtered · 0-row · import_now (queued e2e) |
| T-OUT-01 | — | org SearchInput P2 · map · **keep OUT** |

---

## 7. GAP / Cấm

| ID | Note |
|----|------|
| GAP-BIEU09-XLS-01…06 | Toolbar · toast≠done · golden Cục · filter-bar · path · 1 sheet |
| GAP-FILTER-BAR-08 | **cấm** Xuất trên LinErpListFilterBar |
| GAP-CSDL-CUC-11 | peer Sổ TS none |

**Cấm:** ERP.* · invent infra · toast=done · golden 12+8 · 2-sheet · re-CRUD typed new_page · Write MFE @ SA · yarn build/e2e/start:std @ SA.

---

## Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON |
| confirmedAt | `2026-09-18T05:50:00.000Z` |
| confirmedBy | agent-sa · `task_8ad5cfc2` |
| next | team-lead · `pending` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01 changeScope=edit_page taskId=task_8ad5cfc2 -->
