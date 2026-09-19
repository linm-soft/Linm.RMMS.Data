# SA — Solution discovery — csdl-bieu-16 (edit_page · T-XLS-S16 export)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_17aa79d5`)  
> Standards: api-endpoint · bff-api-structure · company-field · api-permission-gate · repo-path-guard · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · `/implement-export-import-excel`  
> Requires: Design **confirmed** · prior typed SA **keep** · compact data_analy/po/design · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · invent `api/v1/infra/*` · toast stub=done · filter-bar export · golden 12+8 · merge `so-ts-interchange` / `road-assets` · yarn build/e2e/start:std · Step 4b/migration @ SA · reopen typed new_page CRUD · flatten-only mất nhánh

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao · Xuất Excel |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind B keep · toolbar **+DES-EXPORT** · Kind D Slideout keep · child `branches[]`) |
| status | `confirmed` |
| design_confirm | approve (`task_4db008e6`) |
| solution_confirm | **approve** (autoApprove=ON · `task_17aa79d5`) · prior typed `task_5c3d4c6b` **keep** |
| domain_map | **Asset** · `csdl-bieu-16` → `asset` (T-DM-01 keep · live map có slug) |
| sa_tz_gate | **`tz_na`** (keep · export không date-range business) |
| sa_xco_gate | **`xco_get_only`** (keep · export inherits list XCO filter) |
| sa_shared_table | **`share_tenant`** (keep) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-16` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=interchanges` |
| peerSoTs | `so-ts-interchange` · cite only · **cấm** merge vào export |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + flatten `branch*` + ATGT · **1 row / nhánh** |
| IdCode | `IX-` (keep · **cấm** đổi) |
| catalogKind | `interchanges` |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 **`T-XLS-S16`** |
| contentHashPriorDataAnaly | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_17aa79d5` |
| priorTypedSa | `task_5c3d4c6b` · Schema_CsdlBieu16 + Branch **keep** |
| priorDesign | `task_4db008e6` |
| priorPo | `task_de6499fc` |
| priorAnaly | `task_e344020d` |
| updatedAt | `2026-09-18T03:20:00.000Z` |
| versionGate | `aligned` (contentHash match XLS compact) |

## § Delta Current vs New (`edit_page` · T-XLS-S16)

| Area | Current (typed keep) | New (XLS P0) | Action |
|------|----------------------|--------------|--------|
| CRUD / entity | Schema_CsdlBieu16 · Branch · shell+typed 1:1 · 39 · Slideout · `branches[]` embed | **keep** · **cấm** reopen | — |
| Export | Missing / toast stub / OUT | `GET …/export?resource=interchanges` binary · 1 sheet «Biểu 16» · 39 · flatten 1 row/nhánh | **GAP-BIEU16-XLS-01/05/06** |
| Import | stub / OUT | **DEFER P1** · nút ẩn · **cấm** wire P0 | Q-XLS-IMPORT=`export_only_p0` |
| Toolbar | catalogToolbar CRUD | **+Xuất Excel** · DES-EXPORT | Design PASS |
| Filter bar | HARD keep | **cấm** nút export trên filter (GAP-FILTER-BAR-08) | **GAP-BIEU16-XLS-04** |
| Filename | — | `Bieu16_NutGiao_{yyyyMMdd}.xls` | Q-XLS-FILENAME · SA **`.xls`** |
| Sheet | — | **name_cuc** «Biểu 16» · 39 cột · golden Cục 16-sheet · **cấm** 12+8 | **GAP-BIEU16-XLS-03/06** |
| Branch flatten | runtime `branches[]` | Excel **1 row / nhánh** (repeat header) · **0 nhánh → 1 row** `branch*` trống | Q-XLS-BRANCH=`header_blank` |
| Scope | — | **filtered** · filter-all (no page) · empty=all tenant resource | Q-XLS-SCOPE |
| Peer | cite so-ts-interchange | **cấm** merge peer / road-assets vào export | **GAP-BIEU16-XLS-07** |
| Toast | stub | binary download ≠ toast-stub done · empty OK · fail toast | **GAP-BIEU16-XLS-02** |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize list · LeaveConfirm · filter-bar-layout-hard · IdCode `IX-` · typed entity/migration · FormMode CRUD · child embed min_1 · **cấm** ERP.*.

---

## 1. Ownership (delta)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · hub / alias Biểu 16 · `fromCatalogToolbar` + export action |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · **widen** `export` · **giữ** route prefix · Import **skip P0** |
| Service | `CsdlCatalogService` · branch `resource=interchanges` → export map 39 cols · flatten `branches[]` |
| Persistence | shell + **`CsdlBieu16Entity`** + **`CsdlBieu16BranchEntity`** · **`Schema_CsdlBieu16`** **keep** · **cấm** đổi entity / migration @ SA |
| BFF | `CsdlCatalogRecordsBffController` · proxy binary = yes |
| FE | `services/csdlSoSach/endpoint.ts` BASE `/asset/csdl-records` · +`/export` |
| Dev slash | **`/implement-export-import-excel`** |

**Cấm** invent parallel host · invent `api/v1/infra/*` · ERP.* · filter-bar export · 2 workbook sheets · invent sheet Branch riêng · reopen typed entity · merge so-ts-interchange / road-assets.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-16` |
| UI hub | `/so-ts/csdl-so-sach?resource=interchanges` |
| Peer Sổ TS | so-ts-interchange · cite only · **cấm** merge vào export |
| API CRUD | `api/v1/asset/csdl-records` (keep) |
| **Export** | `GET api/v1/asset/csdl-records/export?resource=interchanges` (+ filter QS · **không** page/pageSize) |
| Import | `POST …/import` · **DEFER P1** |
| BFF mirror | `web-bff/api/v1/asset/csdl-records/export` |
| FE BASE | `/asset/csdl-records` |

---

## Architecture (delta)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` |
| API | widen existing export · **cấm** new controller |
| BFF | proxy only = yes · **binary passthrough** · no JSON wrap |
| MFE | catalogToolbar Xuất · blob download |
| Persist | **keep** Schema_CsdlBieu16 + Branch · **không** migration @ SA |
| Auth | `asset.csdl-records.read` (export) · Auth debt keep |
| Out of pack | Import P0 · streaming P0 · org P2 · map · peer merge |

## Implement gates (confirm) — RECORDED (keep + export inherit)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | export **không** filter `fromDate`/`toDate` business | keep |
| XCO | **`xco_get_only`** | export inherits list AllowedCompanyIds | keep |
| SHARE | **`share_tenant`** | shell + typed + branch via parent | keep |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T03:20:00.000Z`

---

## FormType pack (`list`) — delta export

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H keep | list | API-01 keep |
| S-FORM-* | Kind D Slideout Z1–Z3 + BRANCH keep | C/E/V/Copy | API-02..05 keep · `branches[]` embed |
| **S-XLS-EXPORT** | catalogToolbar button DES-EXPORT | — (action) | **API-XLS-01** GET export |
| **S-XLS-IMPORT** | hidden P1 | — | **DEFER** · **cấm** API-XLS-02 P0 |
| S-SKIP-PEER / MAP | keep | — | cite only · **cấm** merge |

### FormMode ↔ API (export action)

| Action | Load | Save / action | Notes |
|--------|------|---------------|-------|
| list/CRUD | keep typed + branches embed | keep | **cấm** reopen |
| **exportExcel** | current filter QS (no page) | GET `/export?resource=interchanges` + same filter QS | binary · Content-Disposition · 1 sheet «Biểu 16» · 39 · flatten 1 row/nhánh · **filter-all** · **không** dirty Leave |

### Export filter query keys (parity list · **cấm** page)

`resource` (required `interchanges`) · `search` · `province` · `status` · `interchangeType` · `roadCode` · `kmFrom` / `kmTo` · (**cấm** invent extra date QS · **cấm** `page`/`pageSize` trên export)

Q-XLS-SCOPE=**filtered** → export = **tất cả** rows khớp filter hiện tại (filter-all · không chỉ trang UI) · empty filter = all tenant resource · vẫn **1 sheet** 39 cột · flatten theo nhánh.

---

## 2. Excel contract (Biểu 16)

| Item | Spec |
|------|------|
| Header SSOT (39) | `code\|name\|roadCode\|roadName\|province\|kmMain\|kmAux\|interchangeType\|trafficOrg\|mainBedWidth\|mainSurfaceWidth\|mainMedianWidth\|mainLaneCount\|branchName\|branchKmFrom\|branchKmTo\|branchSide\|branchDirection\|branchLength\|branchBedWidth\|branchSurfaceWidth\|branchMedianWidth\|branchRadius\|atgtSign\|atgtMarking\|atgtIsland\|atgtLight\|status\|yearBuilt\|manageUnit\|notes\|lat\|lng\|updatedBy\|updatedAt\|isActive\|branchCount\|formNo\|side` |
| Workbook | `.xls` · filename `Bieu16_NutGiao_{yyyyMMdd}.xls` |
| Sheets | **1** · sheet name **«Biểu 16»** (name_cuc) · **cấm** 12+8 hồ sơ · **cấm** sheet Branch riêng |
| Layout | **1 data row / nhánh** · header fields **repeat** mỗi nhánh · **0 nhánh → 1 row** với `branch*` trống (`header_blank`) |
| Golden | Cục 16-sheet xls Biểu 16 · checksum **39** headers |
| Peer | cite so-ts-interchange · **cấm** merge peer / road-assets vào export |
| Empty export | File tải · 0 data row · header OK · toast info |
| Fail | toast error · **cấm** toast stub = done |

### PO Q-XLS locked

| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | `Bieu16_NutGiao_{yyyyMMdd}.xls` · SA **ext `.xls`** (Cục+Wave1 · override PO `.xls(x)`) |
| Q-XLS-BRANCH | **header_blank** · 0 nhánh → 1 row · `branch*` trống |
| Q-XLS-SHEET | **name_cuc** · sheet «Biểu 16» · 39 · flatten 1 row/nhánh |
| typed prior Q-* | **keep** · **cấm** reopen new_page |

---

## 3. API contracts (export)

| ID | Method | Path | Response / notes | Auth |
|----|--------|------|------------------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=interchanges` + filter QS | `application/vnd.ms-excel` (or octet-stream) + Content-Disposition `Bieu16_NutGiao_{yyyyMMdd}.xls` | read + XCO list |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=interchanges` | — | **DEFER P1** · **cấm** P0 |
| API-01..05 | keep | CRUD typed + branches embed | — | keep |

**BFF:** `GET web-bff/api/v1/asset/csdl-records/export` · proxy binary · **không** JSON wrap · forward QS.

**MFE:** blob download · `a[download]` · filename từ header hoặc fallback Q-XLS-FILENAME · **cấm** toast stub = done · **cấm** nút export trên `LinErpListFilterBar`.

---

## 4. Persistence

| Item | Spec |
|------|------|
| Entity / schema | **`Schema_CsdlBieu16`** · shell + typed 1:1 + Branch 1–n **keep** |
| Migration @ SA | **none** · **cấm** Step 4b |
| Export source | join shell + typed + branches · flatten 1 row/nhánh · map 39 cols · **cấm** parent `*Json` · **cấm** flatten-only mất nhánh |

---

## 5. Tasks (ids → TL)

| ID | Owner | One-liner |
|----|-------|-----------|
| T-XLS-S16-BE-01 | BE | GET export binary Biểu 16 · filtered filter-all · 39 cols · 1 sheet «Biểu 16» · flatten 1 row/nhánh · header_blank · filename `.xls` |
| T-XLS-S16-BFF-01 | BFF | proxy export binary · QS forward |
| T-XLS-S16-FE-01 | FE | catalogToolbar Xuất · wire filter QS · **cấm** filter-bar · Import ẩn |
| T-XLS-S16-FE-02 | FE | download filename `.xls` · empty/fail toast · **cấm** stub done |
| T-XLS-S16-QA-01 | QA | golden checksum 39 · flatten · filtered · header_blank · 0-row · **cấm** import P0 (queued e2e) |
| T-XLS-S16-BE-02 | BE | POST import — **OUT / DEFER P1** |

---

## 6. GAP close map

| ID | One-liner |
|----|-----------|
| GAP-BIEU16-XLS-01 | Toolbar Xuất binary sheet Biểu 16 |
| GAP-BIEU16-XLS-02 | Toast stub ≠ done |
| GAP-BIEU16-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU16-XLS-04 | Cấm filter-bar export |
| GAP-BIEU16-XLS-05 | GET export path (+ QS) |
| GAP-BIEU16-XLS-06 | 1 sheet 39 · flatten 1 row/nhánh |
| GAP-BIEU16-XLS-07 | Cấm merge so-ts-interchange/road-assets |

## Out of pack

- Import wire · HTTP streaming export · org SearchInput · map canvas · peer toolbar · Step 4b @ SA · reopen typed CRUD

## Open questions

- **none** — solution_confirm approve (autoApprove ON)

## DoR SA — PASS

- [x] Design confirmed + compact
- [x] FormMode↔API (CRUD keep + export action)
- [x] Entity keep Schema_CsdlBieu16 + Branch · **cấm** migration @ SA
- [x] BFF binary proxy vs API-XLS-01
- [x] Gates tz/xco/share recorded (keep)
- [x] Filename `.xls` · 39 checksum · flatten · header_blank · filtered · sheet «Biểu 16»
- [x] solution_confirm approve
- [x] **cấm** Write MFE · Step 4b · ERP.* · invent infra · merge peer · filter-bar export · toast stub
- [x] handoff compact `handoff/sa-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | `task/csdl-bieu-16.md` · T-XLS-S16-* · `/implement-export-import-excel` |
| Dev | export binary + toolbar · flatten branches · **cấm** filter-bar export · Import ẩn |
| QA | e2e queued `/agent-qa*` only |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| contentHashPrior | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| generatedAt | 2026-09-18T03:20:00.000Z |
| versionGate | aligned |
| taskId | task_17aa79d5 |
| packKind | list |
| changeScope | edit_page |
| epic | T-XLS-S16 |
