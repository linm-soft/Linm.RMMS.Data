# SA — Solution discovery — csdl-bieu-11 (edit_page · T-XLS-S11 export/import)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_bb1ffcd0`)  
> Standards: api-endpoint · bff-api-structure · company-field · api-permission-gate · repo-path-guard · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · `/implement-export-import-excel`  
> Requires: Design **confirmed** · data_analy/po compact · real-data §B · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · invent `api/v1/infra/*` · toast stub=done · filter-bar export · golden 12+8 · 2-sheet invent · dump điểm Sổ TS → qty · yarn build/e2e/start:std · Step 4b/migration @ SA · reopen typed new_page CRUD

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Xuất/Nhập Excel (Hệ thống chiếu sáng) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** keep · Kind **D** Slideout keep · **+toolbar** Xuất/Nhập) |
| status | `confirmed` |
| design_confirm | approve (`task_ec751c18`) |
| solution_confirm | **approve** (autoApprove=ON · `task_bb1ffcd0`) |
| domain_map | **Asset** · `csdl-bieu-11` → `asset` · **keep** (typed prior) |
| sa_tz_gate | **`tz_na`** (keep) |
| sa_xco_gate | **`xco_get_only`** (keep · export inherits list XCO filter) |
| sa_shared_table | **`share_tenant`** (keep · no new table) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-11` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| peerSoTs | **`so-ts-lighting`** toolbar deep-link · **≠** merge form · **≠** `road-assets` · qty ≠ điểm · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` · **1 sheet** · LED+NLMT cùng hàng · **cấm** 2 sheet invent |
| IdCode | `LT-` (keep · import upsert) |
| catalogKind | `lighting-systems` (keep) |
| cabinet | **split** `cabinetCount` ≠ `solarCabinetCount` · keep trên export/import |
| controlHint | `specs/_data-analy/features/csdl-bieu-11-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-11-real-data.md` |
| design | `specs/csdl-bieu-11/ui/design.md` (confirmed) |
| priorSaTyped | prior `task_e96d7cf9` · **keep** Schema_CsdlBieu11 |
| contentHashPriorDataAnaly | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| analyReuse | **hash match** · **cấm** invent API / re-CRUD typed |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_bb1ffcd0` |
| priorTask | `task_ec751c18` (design completed) |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 **`T-XLS-S11`** |
| updatedAt | `2026-09-18T07:00:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`edit_page` · T-XLS-S11)

| Area | Current (typed shipped) | New (this SA) | Action |
|------|-------------------------|---------------|--------|
| Form / list typed | 24 cột · 2 section · Schema_CsdlBieu11 · LED+NLMT flat | **Unchanged** | **cấm** reopen |
| Toolbar | Refresh/Add/History/Schema/CRUD · peer | **+Xuất Excel +Nhập Excel** | GAP-BIEU11-XLS-01 |
| Filter bar | LinErpListFilterBar | Unchanged · **cấm** Xuất | GAP-FILTER-BAR-08 / GAP-BIEU11-XLS-04 |
| Export | Missing / stub | `GET …/export?resource=lighting-systems` binary | GAP-BIEU11-XLS-05 |
| Import | Missing / stub | `POST …/import?resource=lighting-systems` multipart P1 | Q-XLS-IMPORT=import_now |
| Scope | — | **filtered** (+ current filter QS) | Q-XLS-SCOPE |
| Layout | — | **1 sheet** 24 cols · LED+NLMT cùng hàng | GAP-BIEU11-XLS-06 · **cấm** 2 sheet |
| Filename | — | `Bieu11_ChieuSang_{yyyyMMdd}.xls` | Q-XLS-FILENAME |
| Peer qty | qty bucket typed | **cấm** dump điểm so-ts-lighting | GAP-BIEU11-XLS-07 |
| Golden | — | Cục 16-sheet · sheet Biểu 11 · checksum **24** | GAP-BIEU11-XLS-03 |
| Done gate | Typed CRUD done | File mở được · **≠** toast stub | GAP-BIEU11-XLS-02 |
| Entity / migration | Schema_CsdlBieu11 | **No new table** | keep |
| BFF | proxy CRUD | proxy **binary** stream | T-BFF-XLS |

**Không đổi:** typed DTO · shell+child 1:1 · solar flat · cabinet split · soft-delete · tenant `CompanyCode` · pageSize · LeaveConfirm · filter-bar-layout-hard · Slideout 2 section · peer deep-link · **cấm** ERP.*.

---

## 1. Ownership (delta)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · `CsdlBieu11Page` / hub entry · `fromCatalogToolbar` + export/import actions |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · **widen** `export` / `import` · **giữ** route prefix |
| Service | `CsdlCatalogService` · branch `resource=lighting-systems` → typed map → Excel Biểu 11 · LED+NLMT flat row · **cấm** dump điểm Sổ TS |
| Persist | **keep** `CsdlBieu11Entity` / `rmms_csdl_bieu11` / **`Schema_CsdlBieu11`** · **no** migration this pack |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** · stream binary |
| FE | `services/csdlSoSach/endpoint.ts` BASE `/asset/csdl-records` · +`/export` · +`/import` |
| Dev slash | **`/implement-export-import-excel`** |

**Cấm** invent parallel host · invent `api/v1/infra/*` · ERP.* · filter-bar export button · 2 workbook sheets · reopen typed entity · merge Sổ TS form.

### Route / domain

| Surface | Path |
|---------|------|
| UI hub / alias | `/so-ts/csdl-so-sach?resource=lighting-systems` · `/csdl-bieu-11` |
| Peer Sổ TS | toolbar → `/so-ts/so-ts-lighting` (deep-link · keep) |
| CRUD (keep) | `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| **Export** | `GET api/v1/asset/csdl-records/export?resource=lighting-systems` (+ filter QS) |
| **Import** | `POST api/v1/asset/csdl-records/import?resource=lighting-systems` (multipart) |
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
| Persist | **reuse** Schema_CsdlBieu11 · import upsert by IdCode/tenant · cabinet split · solar flat |
| Auth | `asset.csdl-records.read` (export) · `create|update` (import) · Auth debt keep |
| Excel engine | BE generate/parse · golden Cục sheet Biểu 11 · **cấm** CSV grid dump |

---

## Implement gates (confirm) — RECORDED

| Gate | Decision | Note |
|------|----------|------|
| TZ | **`tz_na`** | Export **không** thêm fromDate/toDate |
| XCO | **`xco_get_only`** | Export rows = same XCO as list GET |
| SHARE | **`share_tenant`** | No new entity · tenant via shell |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T07:00:00.000Z`

---

## FormType pack (`list`) — keep + XLS surfaces

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B keep · toolbar +Xuất/Nhập · peer | list | API-01 keep |
| S-FORM-* | Kind D Slideout keep · 2 section lưới + NLMT | create/edit/view/copy | API-02..05 keep |
| **S-XLS-EXPORT** | catalogToolbar button | — (action) | **API-XLS-01** GET export |
| **S-XLS-IMPORT** | catalogToolbar + file | — (action) | **API-XLS-02** POST import |

### FormMode ↔ API (REQUIRED)

| FormMode / action | Load | Save / action | Notes |
|-------------------|------|---------------|-------|
| list / CRUD | **keep** prior typed | **keep** | **cấm** đổi DTO 24 · **cấm** đổi Schema_CsdlBieu11 |
| **exportExcel** | current filter QS | GET `/export?resource=lighting-systems` + same QS as list | binary · Content-Disposition · 1 sheet 24 · LED+NLMT cùng hàng |
| **importExcel** | file multipart | POST `/import?resource=lighting-systems` | upsert typed · LED allow_zero · solar optional · toast errors · reload list |

### Export query keys (mirror list filter)

`resource` (required) · `search` · `province` · `status` · `roadCode` · `kmFrom` · `kmTo` · `side` · (**cấm** invent extra date QS)

Q-XLS-SCOPE=**filtered** → export = rows khớp filter hiện tại; vẫn **1 sheet** 24 cột · LED+NLMT cùng hàng.

---

## 2. Excel contract (Biểu 11)

| Item | Decision |
|------|----------|
| Workbook | `.xls` · filename `Bieu11_ChieuSang_{yyyyMMdd}.xls` |
| Sheets | **1** sheet · header merge theo mẫu Cục Biểu 11 |
| Columns | **24** SSOT: `code\|roadCode\|roadName\|province\|kmFrom\|kmTo\|side\|gridLed600\|gridLed240\|gridLed150\|gridLed125\|gridStatus\|gridPoleCount\|cabinetCount\|substationCount\|solarPoleCount\|solarControllerCount\|solarPanel240Wp\|solarLamp100W\|solarBattery145Ah\|solarCabinetCount\|status\|manageUnit\|notes` |
| LED+NLMT | GridLed* + Solar* **cùng hàng** data · **cấm** sheet/section invent riêng |
| Cabinet | `cabinetCount` (lưới) ≠ `solarCabinetCount` (NLMT) · keep split |
| Peer | export **qty bucket** typed · **cấm** dump điểm `so-ts-lighting` |
| Golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 11 · checksum 24 · **cấm** hồ sơ 12+8 |
| Empty export | File tải · 0 data row · header OK · toast info |
| Fail | toast · **cấm** silent · **cấm** fake blob / CSV generic |
| Import | P1 import_now · validate LED/solar ≥0 · gridStatus LOOKUP · tenant share_tenant |

---

## 3. API catalog (delta)

| Id | Method | Path | Response | Gate |
|----|--------|------|----------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=lighting-systems` + filter QS | `application/vnd.ms-excel` (or octet-stream) + Content-Disposition | read + XCO list |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=lighting-systems` | JSON summary (created/updated/errors) | create/update |
| BFF-XLS-01/02 | same | `/web-bff/api/v1/asset/csdl-records/export\|import` | proxy binary / JSON | proxy only |

CRUD API-01..05 · LKP road-route: **unchanged** (prior SA typed).

---

## 4. BFF vs API

| Concern | Decision |
|---------|----------|
| Business Excel map | **API** (`CsdlCatalogService` · Schema_CsdlBieu11 join · LED+NLMT flat · cabinet split) |
| BFF | **proxy only** · forward QS · stream body · **cấm** FE→API direct · **cấm** remap cột ở BFF |
| MFE | blob download · `a[download]` · filename từ header hoặc fallback Q-XLS-FILENAME |

---

## 5. Entity / migration

| Item | Decision |
|------|----------|
| New entity | **none** |
| Schema_CsdlBieu11 | **keep** |
| Migration / Step 4b | **skip** @ SA · **không** cần Dev migration cho XLS pack |
| Parent *Json | **cấm** |
| Solar child table | **cấm** (keep flat) |

---

## 6. Tasks for Team Lead (ids)

| Id | Owner | One-liner |
|----|-------|-----------|
| T-XLS-S11-BE-01 | BE | GET export binary Biểu 11 · filtered · 24 cols · 1 sheet · LED+NLMT cùng hàng |
| T-XLS-S11-BE-02 | BE | POST import multipart · upsert typed · LED/solar validate · toast |
| T-XLS-S11-BFF-01 | BFF | proxy export/import binary |
| T-XLS-S11-FE-01 | FE | catalogToolbar Xuất/Nhập · wire QS · **cấm** filter-bar |
| T-XLS-S11-FE-02 | FE | download filename · empty/fail toast · **cấm** stub done |
| T-XLS-S11-QA-01 | QA | golden checksum 24 · filtered · 0-row · import_now (queued e2e) |
| T-OUT-01 | — | org SearchInput P2 · map · **keep OUT** |

---

## 7. GAP / Cấm

| ID | Note |
|----|------|
| GAP-BIEU11-XLS-01…07 | Toolbar · toast≠done · golden Cục · filter-bar · path · 1 sheet · qty≠điểm Sổ TS |
| GAP-FILTER-BAR-08 | **cấm** Xuất trên LinErpListFilterBar |
| GAP-CSDL-CUC-11 | peer Sổ TS toolbar only · **≠** merge · **cấm** dump điểm→qty |

**Cấm:** ERP.* · invent infra · toast=done · golden 12+8 · 2-sheet · re-CRUD typed new_page · Write MFE @ SA · yarn build/e2e/start:std @ SA.

---

## Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON |
| confirmedAt | `2026-09-18T07:00:00.000Z` |
| confirmedBy | agent-sa · `task_bb1ffcd0` |
| next | team-lead · `pending` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62 changeScope=edit_page taskId=task_bb1ffcd0 -->
