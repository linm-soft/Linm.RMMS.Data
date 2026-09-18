# SA — Solution discovery — csdl-bieu-14 (edit_page · T-XLS-S14 export)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_5dc0c863`)  
> Standards: api-endpoint · bff-api-structure · company-field · api-permission-gate · repo-path-guard · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · `/implement-export-import-excel`  
> Requires: Design **confirmed** · prior typed SA **keep** · compact data_analy/po/design · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · invent `api/v1/infra/*` · toast stub=done · filter-bar export · golden 12+8 · merge `so-ts-its-camera` / `road-assets` / ITS AiVision · yarn build/e2e/start:std · Step 4b/migration @ SA · reopen typed new_page CRUD

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) · Xuất Excel |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind B keep · toolbar **+DES-EXPORT** · Kind D Slideout keep) |
| status | `confirmed` |
| design_confirm | approve (`task_7d1a980f`) |
| solution_confirm | **approve** (autoApprove=ON · `task_5dc0c863`) · prior typed `task_c534e53a` **keep** |
| domain_map | **Asset** · `csdl-bieu-14` → `asset` (T-DM-01 keep) |
| sa_tz_gate | **`tz_na`** (keep · export không date-range business) |
| sa_xco_gate | **`xco_get_only`** (keep · export inherits list XCO filter) |
| sa_shared_table | **`share_tenant`** (keep) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-14` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-systems` |
| peerSoTs | `so-ts-its-camera` · cite only · **cấm** merge vào export |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` · device+infra+GPS **cùng hàng** |
| IdCode | `IT-` (keep · **cấm** đổi) |
| catalogKind | `its-systems` |
| epic | `docs/context/features/csdl-export-print.md` · Wave 1 **`T-XLS-S14`** |
| contentHashPriorDataAnaly | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_5dc0c863` |
| priorTypedSa | `task_c534e53a` · Schema_CsdlBieu14 **keep** |
| priorDesign | `task_7d1a980f` |
| priorPo | `task_23c0d73d` |
| updatedAt | `2026-09-18T01:50:00.000Z` |
| versionGate | `aligned` (contentHash match XLS compact) |

## § Delta Current vs New (`edit_page` · T-XLS-S14)

| Area | Current (typed keep) | New (XLS P0) | Action |
|------|----------------------|--------------|--------|
| CRUD / entity | Schema_CsdlBieu14 · shell+typed 1:1 · 21 · Slideout | **keep** · **cấm** reopen | — |
| Export | Missing / toast stub / OUT | `GET …/export?resource=its-systems` binary · 1 sheet 21 | **GAP-BIEU14-XLS-01/05** |
| Import | stub / OUT | **DEFER P1** · nút ẩn · **cấm** wire P0 | Q-XLS-IMPORT=`export_only_p0` |
| Toolbar | catalogToolbar CRUD | **+Xuất Excel** · DES-EXPORT | Design PASS |
| Filter bar | HARD keep | **cấm** nút export trên filter (GAP-FILTER-BAR-08) | **GAP-BIEU14-XLS-04** |
| Filename | — | `Bieu14_HeThongITS_{yyyyMMdd}.xls` | Q-XLS-FILENAME · SA **`.xls`** |
| Sheet | — | **one_sheet** · 21 cột · device+infra+GPS cùng hàng · golden Cục 16-sheet · **cấm** 12+8 | **GAP-BIEU14-XLS-03/06** |
| Scope | — | **filtered** · filter-all (no page) · empty=all tenant resource | Q-XLS-SCOPE |
| Peer | cite `so-ts-its-camera` | **cấm** merge peer / road-assets / AiVision vào export | **GAP-BIEU14-XLS-07** |
| Toast | stub | binary download ≠ toast-stub done · empty OK · fail toast | **GAP-BIEU14-XLS-02** |

**Không đổi:** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize list · LeaveConfirm · filter-bar-layout-hard · IdCode `IT-` · typed entity/migration · FormMode CRUD · **cấm** ERP.*.

---

## 1. Ownership (delta)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · hub / alias Biểu 14 · `fromCatalogToolbar` + export action |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · **widen** `export` · **giữ** route prefix · Import **skip P0** |
| Service | `CsdlCatalogService` · branch `resource=its-systems` → export map 21 cols (reuse typed join) |
| Persistence | shell + **`CsdlBieu14Entity`** · **`Schema_CsdlBieu14`** **keep** · **cấm** đổi entity / migration @ SA |
| BFF | `CsdlCatalogRecordsBffController` · proxy binary = yes |
| FE | `services/csdlSoSach/endpoint.ts` BASE `/asset/csdl-records` · +`/export` |
| Dev slash | **`/implement-export-import-excel`** |

**Cấm** invent parallel host · invent `api/v1/infra/*` · ERP.* · filter-bar export · 2 workbook sheets · reopen typed entity · merge peer / road-assets / AiVision.

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-bieu-14` |
| UI hub | `/so-ts/csdl-so-sach?resource=its-systems` |
| Peer Sổ TS | `so-ts-its-camera` · cite only · **cấm** merge vào export |
| API CRUD | `api/v1/asset/csdl-records` (keep) |
| **Export** | `GET api/v1/asset/csdl-records/export?resource=its-systems` (+ filter QS · **không** page/pageSize) |
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
| Persist | **keep** Schema_CsdlBieu14 · **không** migration @ SA |
| Auth | `asset.csdl-records.read` (export) · Auth debt keep |
| Out of pack | Import P0 · streaming P0 · org P2 · map · peer merge · AiVision |

## Implement gates (confirm) — RECORDED (keep + export inherit)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | export **không** filter `fromDate`/`toDate` business | keep |
| XCO | **`xco_get_only`** | export inherits list AllowedCompanyIds | keep |
| SHARE | **`share_tenant`** | shell + typed via parent | keep |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T01:50:00.000Z`

---

## FormType pack (`list`) — delta export

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H keep | list | API-01 keep |
| S-FORM-* | Kind D Slideout Z1–Z3 keep | C/E/V/Copy | API-02..05 keep |
| **S-XLS-EXPORT** | catalogToolbar button DES-EXPORT | — (action) | **API-XLS-01** GET export |
| **S-XLS-IMPORT** | hidden P1 | — | **DEFER** · **cấm** API-XLS-02 P0 |
| S-SKIP-PEER / MAP | keep | — | cite only · **cấm** merge |

### FormMode ↔ API (export action)

| Action | Load | Save / action | Notes |
|--------|------|---------------|-------|
| list/CRUD | keep typed | keep | **cấm** reopen |
| **exportExcel** | current filter QS (no page) | GET `/export?resource=its-systems` + same filter QS | binary · Content-Disposition · 1 sheet 21 · device+infra+GPS cùng hàng · **filter-all** |

### Export filter query keys (parity list · **cấm** page)

`resource` (required `its-systems`) · `search` · `province` · `operatingStatus` · `deviceType` · `roadCode` · `kmFrom` / `kmTo` · `side` · (**cấm** invent extra date QS · **cấm** `page`/`pageSize` trên export)

Q-XLS-SCOPE=**filtered** → export = **tất cả** rows khớp filter hiện tại (filter-all · không chỉ trang UI) · empty filter = all tenant resource · vẫn **1 sheet** 21 cột.

---

## 2. Excel contract (Biểu 14)

| Item | Spec |
|------|------|
| Header SSOT (21) | `code\|roadCode\|roadName\|province\|kmFrom\|kmTo\|side\|direction\|gpsLat\|gpsLng\|deviceType\|brand\|techSpec\|qtyOrLength\|operatingStatus\|infraKind\|clearanceM\|infraQty\|systemStatus\|yearBuilt\|notes` |
| Workbook | `.xls` · filename `Bieu14_HeThongITS_{yyyyMMdd}.xls` |
| Sheets | **1** · sheet name align Cục Biểu 14 · **cấm** 12+8 hồ sơ |
| Layout | device + infra + GPS **cùng hàng** · **cấm** invent dim sheet |
| Golden | Cục 16-sheet xls Biểu 14 · checksum 21 headers |
| Peer | cite `so-ts-its-camera` · **cấm** merge peer / road-assets / AiVision vào export |
| Empty export | File tải · 0 data row · header OK · toast info |
| Fail | toast error · **cấm** toast stub = done |

### PO Q-XLS locked

| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | **filtered** |
| Q-XLS-IMPORT | **export_only_p0** · Import DEFER P1 |
| Q-XLS-FILENAME | `Bieu14_HeThongITS_{yyyyMMdd}.xls` · SA **ext `.xls`** (Cục+Wave1 · override PO `.xls(x)`) |
| Q-XLS-SHEET | **one_sheet** · 21 · device+infra+GPS cùng hàng |
| typed prior Q-* | **keep** · **cấm** reopen new_page |

---

## 3. API contracts (export)

| ID | Method | Path | Response / notes | Auth |
|----|--------|------|------------------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=its-systems` + filter QS | `application/vnd.ms-excel` (or octet-stream) + Content-Disposition `Bieu14_HeThongITS_{yyyyMMdd}.xls` | read + XCO list |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=its-systems` | — | **DEFER P1** · **cấm** P0 |
| API-01..05 | keep | CRUD typed | keep | keep |

**BFF:** `GET web-bff/api/v1/asset/csdl-records/export` · proxy binary · **không** JSON wrap · forward QS.

**MFE:** blob download · `a[download]` · filename từ header hoặc fallback Q-XLS-FILENAME · **cấm** toast stub = done · **cấm** nút export trên `LinErpListFilterBar`.

DTO: reuse typed join projection → Excel row map 21 uiField · **cấm** invent columns.

---

## 4. Persistence

| Item | Spec |
|------|------|
| Entity / Schema | **keep** `CsdlBieu14Entity` · `Schema_CsdlBieu14` · `rmms_csdl_bieu14` |
| Migration @ SA | **none** |
| Export source | shell + typed join · same as list filter · Active only (soft-delete) |

---

## 5. Tasks (ids → TL)

| ID | Owner | One-liner |
|----|-------|-----------|
| T-XLS-S14-BE-01 | BE | GET export binary Biểu 14 · filtered filter-all · 21 cols · 1 sheet · device+infra+GPS cùng hàng · filename `.xls` |
| T-XLS-S14-BFF-01 | BFF | proxy export binary · QS forward |
| T-XLS-S14-FE-01 | FE | catalogToolbar Xuất · wire filter QS · **cấm** filter-bar · Import ẩn |
| T-XLS-S14-FE-02 | FE | download filename `.xls` · empty/fail toast · **cấm** stub done |
| T-XLS-S14-QA-01 | QA | golden checksum 21 · filtered · 0-row · **cấm** import P0 (queued e2e) |
| T-XLS-S14-BE-02 | BE | POST import — **OUT / DEFER P1** |

Typed T-* prior (`T-DM-01` · `T-BE-*` · `T-FE-*`) **done/keep** · **cấm** reopen.

---

## GAP (handoff)

| ID | One-liner |
|----|-----------|
| GAP-BIEU14-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 14 |
| GAP-BIEU14-XLS-02 | Toast stub ≠ done |
| GAP-BIEU14-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU14-XLS-04 | Cấm filter-bar export |
| GAP-BIEU14-XLS-05 | GET export path (+ QS) |
| GAP-BIEU14-XLS-06 | 1 sheet 21 · device+infra+GPS cùng hàng |
| GAP-BIEU14-XLS-07 | Cấm merge so-ts-its-camera/road-assets/AiVision |

## Out of pack (P0)

- Import wire · HTTP streaming export · org SearchInput · map canvas · peer toolbar · AiVision bind · Step 4b @ SA

## Open questions

- **none** — solution_confirm approve (autoApprove ON)

## DoR SA — PASS

- [x] Design confirmed + compact (XLS)
- [x] FormMode↔API + S-XLS-EXPORT
- [x] Entity keep Schema_CsdlBieu14 · **no** migration @ SA
- [x] BFF binary proxy vs API-XLS-01
- [x] Gates tz/xco/share recorded
- [x] Filename `.xls` · 21 checksum · filtered
- [x] solution_confirm approve
- [x] **cấm** Write MFE · Step 4b · ERP.* · invent infra · merge peer · filter-bar export · toast stub
- [x] handoff compact `handoff/sa-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | `task/csdl-bieu-14.md` · T-XLS-S14-* · `/implement-export-import-excel` |
| Dev | export binary + toolbar · **cấm** filter-bar export · Import ẩn |
| QA | e2e queued `/agent-qa*` only |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.17.3 |
| contentHashPrior | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| generatedAt | 2026-09-18T01:50:00.000Z |
| versionGate | aligned |
| taskId | task_5dc0c863 |
| packKind | list |
| changeScope | edit_page |
| epic | T-XLS-S14 |
