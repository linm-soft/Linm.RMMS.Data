# Team-lead — integration (Open API và tích hợp)

| Field | Value |
|-------|-------|
| feature | `integration` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| packKind | `list` |
| Feature Kind | **G** hub + **B** Endpoints/Sync/Partners A–D+F + **full-page** Import/Job/Partner |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| autoApprove | **ON** (`task_4d837bc9`) |
| taskId | `task_4d837bc9` |
| prior · sa | `confirmed` · `be/solution-discovery.md` · `task_13deb688` |
| prior · design | `confirmed` · `ui/design.md` + prototype · `task_2581b59b` |
| prior · po | `confirmed` · `po/requirement.md` · `task_23f4a691` |
| prior · data_analy | `confirmed` · controlHint hash `sha256:integration-delta-schema-fullpage-20260816` |
| updatedAt | `2026-08-16T06:20:00.000+07:00` |

**SUPERSEDED:** `task/integration.md` prior (`task_fd8ec33e`) — Slideout Import · FormType «all done» · thiếu T-UI-LKP/FIELD/PROD/UX. Pack này **re-lock** Design+SA 2026-08-16 + live MFE audit.

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` | `ui_repo_confirm=approve` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** | `be_repo_confirm=approve` |
| Routes | hub `/integration` · import `/integration/import` · `/import/:id` · jobs `/jobs/new` · `/jobs/:id` · partners `/partners/:id` | `mfeStdUrl` :9314 |
| API | `api/v1/integration/*` · BFF `web-bff/api/v1/integration/*` | **cấm ERP.*** · **cấm** `api/v1/rmms/*` |

## retry.ssot_rereview (HARD — live 2026-08-16)

Checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? · form checklist.

| Check | Live | Result |
|-------|------|--------|
| 1× `LinPageLayout` kind=catalog · **cấm** nested `CatalogListShell` | `IntegrationListPage` only | **PASS** |
| `LinCatalogDataGrid` + kéo cột default ON | `tableConfig` ← `catalogListTableConfigFromSchema` · 3 tabs | **PASS** |
| Footer `LinCatalogListPagination` · **cấm** footerPagination / pageSizeBar / raw table | Sync + Partners 50+ | **PASS** |
| flex + skeleton · `data-catalog-list-page` | `skeletonRows={8}` | **PASS** |
| toolbar config FULL · `LinCatalogUiSchemaEditorModal` · `useCatalogUiSchema` · `columns={buildDynamicGridColumns(schema, uiColumns)}` | kinds `integration-sync-jobs` · `integration-partners` · `integration-endpoints` | **PASS** |
| **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** leftover grid `const columns` / `LinCatalogDataColumn` | none on integration pages (bootstrap helper OK) | **PASS** |
| list_parity Kind B A–D + F | present | **PASS** shell · GAP copy/badge/UX below |
| tree_master? | — | **n/a** |
| Form full-page Import/Job/Partner · View=`<dl>` · **cấm** Slideout/Resource | `ImportAssetFormPage` · `SyncJobFormPage` · `PartnerFormPage` · no `*Slideout` | **PASS** shell |
| SearchInput list + form enums · **cấm** native `<select>` | SearchInput | **PASS** control · GAP labels/phase |
| FE perm `integration.sync-jobs.*` · partners · import | `permissions.ts` | **PASS** (endpoints.read missing — P1 add) |
| Delete · leave-confirm | Import/Job `LeaveConfirmModal` | **PASS** leave · **FAIL** delete `window.confirm` |
| History | custom log modal | **GAP** Design `LinCatalogHistoryModal` |

**Cấm** chỉ patch 1 chỗ user nêu nếu còn GAP cùng surface — Dev **fix_all** GAPs dưới.

### GAPs còn (Dev P1 — cùng list/form surface)

| ID | Surface | Live | SSOT | Task |
|----|---------|------|------|------|
| GAP-TL-LIST-TITLE | Zone C | `listTitle="Hub OpenAPI · Sync · Partners · P1 baseline"` | Design: Endpoints «Catalog endpoint P1» · Sync «Danh sách sync jobs» · Partners «Partner adapters» | T-UI-LIST-01 |
| GAP-TL-LIST-BADGE | Zone A | title only | Design A: icon + title 22px + badge **Kind G hub** + **P1 baseline** · **cấm** Thêm/Import trên A | T-UI-LIST-01 |
| GAP-TL-UX-FILTERMAX | Zone B | `filterMaxWidthPx` trên `LinPageLayout` (1100) + `ErpListHeaderFilters` (1000/1100/600) | Design CSS: **cấm** `filterMaxWidth` | T-UI-UX-01 |
| GAP-TL-ACT-ADDJOB | Zone B | `catalogToolbar.canAdd` = Import only · **không** route `/integration/jobs/new` | Design B: **Import tài sản** + **Thêm job** · `/jobs/new` | T-UI-ACT-01 · T-UI-FORM-01 |
| GAP-TL-ACT-CONFIRM | list delete | `window.confirm` + `window.alert` | Lin `Modal` / `useAlert` · **cấm** `confirm`/`alert`/`prompt` | T-UI-ACT-01 |
| GAP-TL-ACT-RETRY-FORM | Job Z3 | footer Đóng/Sửa · **không** Retry | Design Z3 Job: Hủy · Retry · Lưu | T-UI-ACT-01 |
| GAP-TL-ACT-HISTORY | Sync | custom `logModal` | `LinCatalogHistoryModal` | T-UI-ACT-01 |
| GAP-TL-LKP-PHASE | Zone B | `PHASE_LOOKUP` value `P1`/`P2`/`P3` | Design enum `p1`/`p2`/`p3` · SA map uppercase khi so catalog | T-UI-LKP-01 |
| GAP-TL-LKP-ASSET | Import | label «Đèn chiếu sáng» | Design «Đèn» | T-UI-LKP-01 |
| GAP-TL-LKP-ROUTE | Import | label `CT.01` | Design `CT01` | T-UI-LKP-01 |
| GAP-TL-PROD-DEMO | Import | `genSyncCode(loadJobs())` từ `demo/integrationStore` | SA: POST **không** nhận Code · display `(tự sinh)` | T-UI-PROD-01 |
| GAP-TL-FIELD-NOTE | Import | `Input` 1 dòng | Design `Text` textarea | T-UI-FIELD-01 |
| GAP-TL-FORM-IMPORT-ID | routes | thiếu `/integration/import/:id` | Design hydrate View Import | T-UI-FORM-01 |
| GAP-TL-PERM-EP | perm | thiếu `integration.endpoints.read` | SA catalog | T-PERM-01 |
| GAP-SA-IMPORT-01 | Import FE | fileName required FE | BE không 422 thiếu file — **keep FE required** | T-UI-FIELD-01 |

**Keep (không rewrite):** hub CRUD API · BFF querystring · CatalogUiSchema 3 kinds · 1× LinPageLayout · schema editor · SearchInput · full-page shells · pagination 50/100/200/500 · IdCode server `SYNC-*`.

**P2 không block Dev complete:** inbound webhook runtime · `[RequirePermission]` CommonLib · full Swagger host · citizen/public API.

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | title «Open API và tích hợp» · badge Kind G + P1 · **cấm** Create/Import/Save trên A |
| B | hub toolbar + filters | OpenAPI · cog · Import · Thêm job **chỉ B** · SearchTextInput · SearchInput |
| C | `LinCatalogDataGrid` | title theo tab · resize ON · row menus |
| D | `LinCatalogListPagination` | 50/100/200/500 Sync+Partners |
| F | `LinCatalogUiSchemaEditorModal` | «Cấu hình hiển thị danh mục» · 3 catalogKind |
| Form | Import/Job/Partner pages | Z1 Quay lại · Z2/`<dl>` · Z3 footer · **cấm** Slideout |

## FormType pack (canonical)

| Task id | Role | Status | Maps to |
|---------|------|--------|---------|
| T-CTX-01 | Dev+docs | **pending** | TL re-lock Kind G+B full-page + DB columns — Dev stamp tracking |
| T-BE-01 | Dev | **pending** verify/no-op | SA PASS hub CRUD — **cấm** rewrite unless regression |
| T-BE-02 | — | **n/a** | `Schema_RmmsIntegrationHub` exists |
| T-BE-SCHEMA-01 | Dev | **pending** verify/no-op | seed 3 kinds SA PASS |
| T-BFF-01 | Dev | **pending** verify/no-op | querystring forward SA PASS |
| T-PERM-01 | Dev | **pending** delta | GAP-TL-PERM-EP · BE attribute stub P1 |
| T-UI-LIST-01 | Dev | **pending** delta | GAP-TL-LIST-TITLE · GAP-TL-LIST-BADGE · **cấm** rewrite shell |
| T-UI-FORM-01 | Dev | **pending** delta | GAP-TL-FORM-IMPORT-ID · `/jobs/new` · keep full-page · **cấm** Slideout |
| T-UI-LKP-01 | Dev | **pending** delta | GAP-TL-LKP-PHASE · ASSET · ROUTE · static 6 enums |
| T-UI-FIELD-01 | Dev | **pending** delta | Design §3 · GAP-TL-FIELD-NOTE · fileName * FE |
| T-UI-PROD-01 | Dev | **pending** delta | GAP-TL-PROD-DEMO |
| T-UI-UX-01 | Dev | **pending** delta | GAP-TL-UX-FILTERMAX · **cấm** `window.alert` copy/webhook |
| T-UI-ACT-01 | Dev | **pending** delta | ADDJOB · CONFIRM · RETRY-FORM · HISTORY |
| T-UI-LEAVE-01 | Dev | **pending** verify | Import/Job leave-confirm already wired |
| T-QA-01 | QA | **pending** | đến lượt |
| T-QA-CRUD-01 | QA | **pending** | đến lượt |

### T-CTX-01

**layer:** docs · **deps:** —  
**DoD:**
- [x] TL: context Kind G+B full-page · **cấm** Kind D slideout · entity `rmms_sync_jobs` / `rmms_partner_adapters`
- [ ] Dev stamp tracking `taskId` pipeline hiện tại trên context §8
- [ ] **Cấm** invent CUC2

### T-BE-01 / T-BE-SCHEMA-01 / T-BFF-01

**layer:** api Integration · **deps:** T-CTX-01  
**DoD:**
- [ ] Verify API-01..14 + XCO GetById job + IdCode server `SYNC-yyyyMMdd-nnnn` + soft delete
- [ ] Verify Registry kinds `integration-sync-jobs` · `integration-partners` · `integration-endpoints`
- [ ] Verify BFF `BuildListPath()` forwards `Request.QueryString`
- [ ] **No new migration** · **cấm** file dưới `ERP.Service.*` / `api/v1/rmms/*`
- [ ] `dotnet build` PASS **chỉ nếu** đụng API/schema; no-op → ghi implement «no BE write»

### T-PERM-01

**DoD:**
- [ ] Keep `integration.sync-jobs.read|create|update|delete|retry` · `partners.read|toggle` · `assets.import`
- [ ] Add FE `integration.endpoints.read` (GAP-TL-PERM-EP)
- [ ] BE `[RequirePermission]` = debt P1 — **không** block

### T-UI-LIST-01

**deps:** T-BFF-01 · T-PERM-01  
**DoD:**
- [ ] Keep A–D + F · 1 shell · dynamic columns · schema modal 3 kinds
- [ ] Zone C title theo tab (GAP-TL-LIST-TITLE)
- [ ] Zone A badge Kind G hub + P1 (GAP-TL-LIST-BADGE)
- [ ] Filter đổi → page=1 (keep debounce jobs)
- [ ] **Cấm** nested CatalogListShell · configHint · LinListTableConfigModal · native Select

### T-UI-FORM-01

**deps:** T-UI-LIST-01  
**DoD:**
- [ ] Routes `/integration/import` · `/import/:id` · `/jobs/new` · `/jobs/:id` · `/partners/:id`
- [ ] View=`<dl>` · footer only Save/Import/Retry/Toggle · **cấm** Save trên Z1
- [ ] **Cấm** `*Slideout` · Resource · View Input `readOnly` (trừ code IdCode)

### T-UI-LKP-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Static FE only — **không** API catalog master
- [ ] Phase Design `p1`/`p2`/`p3` + map `P1` khi filter catalog (GAP-TL-LKP-PHASE)
- [ ] Asset «Đèn» · Route `CT01` (GAP-TL-LKP-ASSET · ROUTE)
- [ ] sync-type / job-status labels Design §3

### T-UI-FIELD-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Fields Design §3 · required * Import asset/region/route/fileName
- [ ] note Import = textarea (GAP-TL-FIELD-NOTE)
- [ ] code IdCode readonly · **không** gửi Code client

### T-UI-PROD-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Import không `genSyncCode(loadJobs())` (GAP-TL-PROD-DEMO)
- [ ] Create display `(tự sinh)` until server
- [ ] Enums sống `services/integration/lookups.ts` (không phụ thuộc demo store cho product path)

### T-UI-UX-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Bỏ `filterMaxWidthPx` list (GAP-TL-UX-FILTERMAX)
- [ ] Spacing 4/8/16 · Input pad 6×10 · min-height 32 · form `data-form-cols="5"`
- [ ] Copy OpenAPI / webhook / errors → toast/`useAlert` · **cấm** `window.alert`
- [ ] Leave-confirm dirty — **cấm** `window.confirm`

### T-UI-ACT-01 / T-UI-LEAVE-01

**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Import + Thêm job Zone B (GAP-TL-ACT-ADDJOB)
- [ ] Delete job Lin Modal (GAP-TL-ACT-CONFIRM)
- [ ] Job form Retry footer (GAP-TL-ACT-RETRY-FORM)
- [ ] History `LinCatalogHistoryModal` (GAP-TL-ACT-HISTORY)
- [ ] Verify leave-confirm Import/Job

### T-QA-*

Pending đến lượt QA. **Cấm** QA-B khi integration Dev chưa completed.

## Action inventory (T-UI-ACT)

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search jobs/partners/ep | B | SearchTextInput → page=1 | GET `?search=` |
| Type/status/phase | B | SearchInput | GET `?syncType=` `?status=` · FE phase |
| Refresh | toolbar | reloadActive | GET |
| Import | toolbar B | `/import` | POST `/assets/import` |
| Thêm job | toolbar B | `/jobs/new` | POST `/sync-jobs` |
| View/Edit/Delete | toolbar + row | `/:id?mode=` | GET/PUT/DELETE |
| Retry | row + Job Z3 | retry | POST `…/retry` |
| History/log | row | LinCatalogHistoryModal | logJson |
| Partner View/Toggle | row + form | `/:id` · toggle | GET · POST toggle |
| Config | fa-cog | schema editor | GET/PUT ui-schema |
| Offline-batch | B | Modal | POST stub / contract |
| Webhook | B | stub P2 disabled | — |
| Chạy import | form Z3 | handleRun | POST import |
| Lưu job | form Z3 | handleSave | PUT |

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO CommonLib |
| SD-BFF | proxy-only |
| SD-JOB | sync retry mock in-process |
| SD-NOTIFY | webhook register DEFER stub |
| SD-MEDIA | import file name only P1 |

## Deps

```
T-CTX-01 → T-BE-01 → T-BE-SCHEMA-01 → T-BFF-01 → T-PERM-01
T-BFF-01 → T-UI-LIST-01 → T-UI-FORM-01 → T-UI-LKP-01
                                      → T-UI-FIELD-01
                                      → T-UI-PROD-01
                                      → T-UI-UX-01
                                      → T-UI-ACT-01 → T-UI-LEAVE-01 → T-QA-CRUD-01
T-UI-FORM-01 → T-QA-01
```

## Handoff → Dev (`/agent-dev`)

| Field | Value |
|-------|-------|
| Next | roleOnly=`dev` · chain ON · autoApprove ON |
| Scope | **delta GAPs** + verify BE/BFF/PERM — **cấm** rewrite list shell / **cấm** Slideout |
| Anti-dup | reuse `integrationService` · 3 catalogKind · form pages đã có |
| UI SSOT | `MFE-COMMON` Lin\* |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` Integration |
| HARD | `tl-retry-ssot_rereview` trên implement.md · `yarn build` PASS · `dotnet build` nếu đụng API · ghi § Build |
| Roles sau | QA · review = **pending** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.16.02 |
| generatedAt | 2026-08-16T06:20:00.000+07:00 |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.19 |
| orchestratorWorkflowVersion | 2026.08.15.19 |
| dataAnalySkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.17 |
| designSkillVersion | 2026.08.15.19 |
| saSkillVersion | 2026.08.15.19 |
| contentHashPriorDataAnaly | sha256:integration-delta-schema-fullpage-20260816 |
| taskId | `task_4d837bc9` |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · rulesVersion=2026.08.16.02 · versionGate=rechecked -->
