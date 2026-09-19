# SA — Solution discovery — csdl-bieu-10 (edit_page · T-XLS-S10 export/import)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_c2ecf0a6`)  
> Standards: api-endpoint · bff-api-structure · company-field · api-permission-gate · repo-path-guard · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · `/implement-export-import-excel`  
> Requires: Design **confirmed** · data_analy/po compact · real-data §B · **cấm** invent API · **cấm** re-scan demo  
> **Cấm:** Write MFE/native · ERP.* · invent `api/v1/infra/*` · toast stub=done · filter-bar export · golden 12+8 · 2-sheet invent · yarn build/e2e/start:std · Step 4b/migration @ SA · reopen typed new_page CRUD

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Xuất/Nhập Excel (Kè, tường chắn) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** keep · Kind **D** Slideout keep · **+toolbar** Xuất/Nhập) |
| status | `confirmed` |
| design_confirm | approve (`task_00ebbcea`) |
| solution_confirm | **approve** (autoApprove=ON · `task_c2ecf0a6`) |
| domain_map | **Asset** · `csdl-bieu-10` → `asset` · **keep** (typed prior) |
| sa_tz_gate | **`tz_na`** (keep) |
| sa_xco_gate | **`xco_get_only`** (keep · export inherits list XCO filter) |
| sa_shared_table | **`share_tenant`** (keep · no new table) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-10` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=retaining-walls` |
| peerSoTs | **`so-ts-retaining`** toolbar deep-link · **≠** merge form · **≠** `road-assets` · **GAP-CSDL-CUC-11** |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `retaining-walls` |
| formNo | `10` |
| columns | `21` · **1 sheet** · crest* cùng hàng · **cấm** 2 sheet invent |
| IdCode | `KE-` (keep · import upsert) |
| catalogKind | `retaining-walls` (keep) |
| heightAlias | UI `heightM` ↔ DB `WidthM` · **Q-XLS-HEIGHT=height_alias** · export/import map giữ SA typed |
| controlHint | `specs/_data-analy/features/csdl-bieu-10-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-bieu-10-real-data.md` |
| design | `specs/csdl-bieu-10/ui/design.md` (confirmed) |
| priorSaTyped | `specs/csdl-bieu-10/be/solution-discovery.md` prior `task_652dcd09` · **keep** Schema_CsdlBieu10 |
| contentHashPriorDataAnaly | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| headerFingerprintPrior | `sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598` |
| analyReuse | **hash match** · **cấm** invent API / re-CRUD typed |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_c2ecf0a6` |
| priorTask | `task_00ebbcea` (design completed) |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 **`T-XLS-S10`** |
| updatedAt | `2026-09-18T06:25:00.000Z` |
| versionGate | `aligned` (contentHash match prior compact) |

## § Delta Current vs New (`edit_page` · T-XLS-S10)

| Area | Current (typed shipped) | New (this SA) | Action |
|------|-------------------------|---------------|--------|
| Form / list typed | 21 cột · 2 section · Schema_CsdlBieu10 · heightM↔WidthM | **Unchanged** | **cấm** reopen |
| Toolbar | Refresh/Add/History/Schema/CRUD · peer | **+Xuất Excel +Nhập Excel** | GAP-BIEU10-XLS-01 |
| Filter bar | LinErpListFilterBar | Unchanged · **cấm** Xuất | GAP-FILTER-BAR-08 / GAP-BIEU10-XLS-04 |
| Export | Missing / stub | `GET …/export?resource=retaining-walls` binary | GAP-BIEU10-XLS-05 |
| Import | Missing / stub | `POST …/import?resource=retaining-walls` multipart P1 | Q-XLS-IMPORT=import_now |
| Scope | — | **filtered** (+ current filter QS) | Q-XLS-SCOPE |
| Layout | — | **1 sheet** 21 cols · crest* cùng hàng | GAP-BIEU10-XLS-06 · **cấm** 2 sheet |
| Filename | — | `Bieu10_KeTuongChan_{yyyyMMdd}.xls` | Q-XLS-FILENAME |
| Height map | heightM↔WidthM typed | **keep** on export/import | Q-XLS-HEIGHT · GAP-BIEU10-XLS-07 |
| Golden | — | Cục 16-sheet · sheet Biểu 10 · checksum **21** | GAP-BIEU10-XLS-03 |
| Done gate | Typed CRUD done | File mở được · **≠** toast stub | GAP-BIEU10-XLS-02 |
| Entity / migration | Schema_CsdlBieu10 | **No new table** | keep |
| BFF | proxy CRUD | proxy **binary** stream | T-BFF-XLS |

**Không đổi:** typed DTO · shell+child 1:1 · soft-delete · tenant `CompanyCode` · pageSize · LeaveConfirm · filter-bar-layout-hard · Slideout 2 section · peer deep-link · **cấm** ERP.*.

---

## 1. Ownership (delta)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · `CsdlBieu10Page` / hub entry · `fromCatalogToolbar` + export/import actions |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · **widen** `export` / `import` · **giữ** route prefix |
| Service | `CsdlCatalogService` · branch `resource=retaining-walls` → typed map → Excel Biểu 10 · map `heightM`↔`WidthM` |
| Persist | **keep** `CsdlBieu10Entity` / `rmms_csdl_bieu10` / **`Schema_CsdlBieu10`** · **no** migration this pack |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** · stream binary |
| FE | `services/csdlSoSach/endpoint.ts` BASE `/asset/csdl-records` · +`/export` · +`/import` |
| Dev slash | **`/implement-export-import-excel`** |

**Cấm** invent parallel host · invent `api/v1/infra/*` · ERP.* · filter-bar export button · 2 workbook sheets · reopen typed entity.

### Route / domain

| Surface | Path |
|---------|------|
| UI hub / alias | `/so-ts/csdl-so-sach?resource=retaining-walls` · `/csdl-bieu-10` |
| Peer Sổ TS | toolbar → `/so-ts/so-ts-retaining` (deep-link · keep) |
| CRUD (keep) | `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` |
| **Export** | `GET api/v1/asset/csdl-records/export?resource=retaining-walls` (+ filter QS) |
| **Import** | `POST api/v1/asset/csdl-records/import?resource=retaining-walls` (multipart) |
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
| Persist | **reuse** Schema_CsdlBieu10 · import upsert by IdCode/tenant · heightM↔WidthM in API mapper |
| Auth | `asset.csdl-records.read` (export) · `create|update` (import) · Auth debt keep |
| Excel engine | BE generate/parse · golden Cục sheet Biểu 10 · **cấm** CSV grid dump |

---

## Implement gates (confirm) — RECORDED

| Gate | Decision | Note |
|------|----------|------|
| TZ | **`tz_na`** | Export **không** thêm fromDate/toDate |
| XCO | **`xco_get_only`** | Export rows = same XCO as list GET |
| SHARE | **`share_tenant`** | No new entity · tenant via shell |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T06:25:00.000Z`

---

## FormType pack (`list`) — keep + XLS surfaces

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B keep · toolbar +Xuất/Nhập · peer | list | API-01 keep |
| S-FORM-* | Kind D Slideout keep · 2 section | create/edit/view/copy | API-02..05 keep |
| **S-XLS-EXPORT** | catalogToolbar button | — (action) | **API-XLS-01** GET export |
| **S-XLS-IMPORT** | catalogToolbar + file | — (action) | **API-XLS-02** POST import |

### FormMode ↔ API (REQUIRED)

| FormMode / action | Load | Save / action | Notes |
|-------------------|------|---------------|-------|
| list / CRUD | **keep** prior typed | **keep** | **cấm** đổi DTO 21 · **cấm** đổi Schema_CsdlBieu10 |
| **exportExcel** | current filter QS | GET `/export?resource=retaining-walls` + same QS as list | binary · Content-Disposition filename · heightM↔WidthM |
| **importExcel** | file multipart | POST `/import?resource=retaining-walls` | upsert typed · height_alias · toast errors · reload list |

### Export query keys (mirror list filter)

`resource` (required) · `search` · `province` · `status` · `roadCode` · `kmFrom` · `kmTo` · `side` · `wallKind` · (**cấm** invent extra date QS)

Q-XLS-SCOPE=**filtered** → export = rows khớp filter hiện tại; vẫn **1 sheet** 21 cột · crest* cùng hàng.

---

## 2. Excel contract (Biểu 10)

| Item | Decision |
|------|----------|
| Workbook | `.xls` · filename `Bieu10_KeTuongChan_{yyyyMMdd}.xls` |
| Sheets | **1** sheet · header merge theo mẫu Cục Biểu 10 |
| Columns | **21** SSOT: `code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes` |
| Crest | 4 field crest* **cùng hàng** data · **cấm** sheet/section invent riêng |
| Height | Excel/API col `heightM` · persist `WidthM` · **Q-XLS-HEIGHT=height_alias** |
| Golden | Cục `1. Biểu mẫu CSDL.xls` sheet Biểu 10 · checksum 21 · **cấm** hồ sơ 12+8 |
| Empty export | File tải · 0 data row · header OK · toast info |
| Fail | toast · **cấm** silent · **cấm** fake blob / CSV generic |
| Import | P1 import_now · validate wallKind/LOOKUP · tenant share_tenant · map height_alias |

---

## 3. API catalog (delta)

| Id | Method | Path | Response | Gate |
|----|--------|------|----------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=retaining-walls` + filter QS | `application/vnd.ms-excel` (or octet-stream) + Content-Disposition | read + XCO list |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=retaining-walls` | JSON summary (created/updated/errors) | create/update |
| BFF-XLS-01/02 | same | `/web-bff/api/v1/asset/csdl-records/export|import` | proxy binary / JSON | proxy only |

CRUD API-01..05 · LKP road-route: **unchanged** (prior SA typed).

---

## 4. BFF vs API

| Concern | Decision |
|---------|----------|
| Business Excel map | **API** (`CsdlCatalogService` · Schema_CsdlBieu10 join · heightM↔WidthM) |
| BFF | **proxy only** · forward QS · stream body · **cấm** FE→API direct · **cấm** remap height ở BFF |
| MFE | blob download · `a[download]` · filename từ header hoặc fallback Q-XLS-FILENAME |

---

## 5. Entity / migration

| Item | Decision |
|------|----------|
| New entity | **none** |
| Schema_CsdlBieu10 | **keep** |
| Migration / Step 4b | **skip** @ SA · **không** cần Dev migration cho XLS pack |
| Parent *Json | **cấm** |
| CrestDitch child | **cấm** (keep flat) |

---

## 6. Tasks for Team Lead (ids)

| Id | Owner | One-liner |
|----|-------|-----------|
| T-XLS-S10-BE-01 | BE | GET export binary Biểu 10 · filtered · 21 cols · 1 sheet · heightM↔WidthM |
| T-XLS-S10-BE-02 | BE | POST import multipart · upsert typed · height_alias · validation toast |
| T-XLS-S10-BFF-01 | BFF | proxy export/import binary |
| T-XLS-S10-FE-01 | FE | catalogToolbar Xuất/Nhập · wire QS · **cấm** filter-bar |
| T-XLS-S10-FE-02 | FE | download filename · empty/fail toast · **cấm** stub done |
| T-XLS-S10-QA-01 | QA | golden checksum 21 · filtered · 0-row · import_now (queued e2e) |
| T-OUT-01 | — | org SearchInput P2 · map · **keep OUT** |

---

## 7. GAP / Cấm

| ID | Note |
|----|------|
| GAP-BIEU10-XLS-01…07 | Toolbar · toast≠done · golden Cục · filter-bar · path · 1 sheet · height map |
| GAP-FILTER-BAR-08 | **cấm** Xuất trên LinErpListFilterBar |
| GAP-CSDL-CUC-11 | peer Sổ TS toolbar only · **≠** merge |

**Cấm:** ERP.* · invent infra · toast=done · golden 12+8 · 2-sheet · re-CRUD typed new_page · Write MFE @ SA · yarn build/e2e/start:std @ SA.

---

## Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON |
| confirmedAt | `2026-09-18T06:25:00.000Z` |
| confirmedBy | agent-sa · `task_c2ecf0a6` |
| next | team-lead · `pending` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302 changeScope=edit_page taskId=task_c2ecf0a6 -->
