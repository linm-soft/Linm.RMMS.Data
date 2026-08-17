# Team-lead — contract (Hợp đồng)

| Field | Value |
|-------|-------|
| feature | `contract` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| packKind | `list` (Kind **B** catalog A–D+F + **full-page** form) |
| changeScope | `edit_page` · gap=`formtype_quality` |
| mode | `fix_gaps` |
| solution_confirm | **approve** (autoApprove ON · `task_3c7f663e`) |
| design_confirm | **approve** (autoApprove ON · `task_eba480e8`) |
| be_repo_confirm | **approved** (`Linm.RMMS.WebService`) |
| ui_repo_confirm | **approved** (`Linm.Web.RMMS.Contract`) |
| autoApprove | **ON** |
| updatedAt | `2026-08-16T04:40:00.000Z` |
| taskId | `task_f8dd6827` |
| prior | SA `task_3c7f663e` · Design `task_eba480e8` · PO `task_08b3dd0a` |
| TL SSOT | `form-type-task-pack` · `list-form-quality-gates` · `tl-retry-ssot-rereview` · `tl-list-shell-height` · `tl-catalog-list-parity` · `ssot-no-duplicate` · `dev-ui-ux-constitution` |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/contract/ui/design.md` + prototype A–D+F + full-page form | T-UI-LIST · T-UI-CONFIG · T-UI-FORM · T-CTX |
| Solution | `be/solution-discovery.md` | T-BE-CRUD · T-BE-SCHEMA · T-BFF · T-PERM · TZ/XCO/SHARE |
| Prototype | `ui/prototype/contract-list-prototype.html` | UI DoD |
| controlHint | `specs/_data-analy/features/contract-control-hint.md` · hash `sha256:0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73` | T-UI-LKP · T-UI-FIELD |
| PO | `po/requirement.md` | DoD đo được |

**SUPERSEDED:** task pack 2026-08-09 / Kind D Slideout / `skillVersion` 2026.08.09.02. **Keep** CRUD + list shell; **re-lock** Kind B full-page + schema seed + Lin confirm.

**SA chốt:** API-01…05 + BFF querystring **PASS**. **IN P1** `CatalogUiSchemaRegistry` kind `contracts`. Lookups P1 = in-memory enum — **cấm** extra lookup API. **Cấm ERP.***

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** + Integration ui-schema | **cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` |
| **Auth** | `contract.contracts.read\|create\|update\|delete` | FE gate · BE `[RequirePermission]` **OUT pack** (NuGet TODO) |

## Implement HOW (TL)

| Topic | Decision |
|-------|----------|
| **Wire** | Page → `services/contract` → `web-bff/api/v1/contract/contracts` → `api/v1/contract/contracts` |
| **Lookups** | type / status / contractor / orgUnit / payStatus = **SearchInput** in-memory enum (**T-BE-INIT n/a**) |
| **Ui-schema** | `catalogUiSchemaService` → `api/v1/integration/catalogs/contracts/ui-schema` (**không** clone vào Contract BFF) |
| **List** | `ContractListPage` · `useCatalogUiSchema('contracts')` · `buildDynamicGridColumns` |
| **Form** | Full-page `ContractFormPage` C/E/V/Copy — **cấm** Resource / Slideout / View=`readOnly` Input xám toàn form |
| **Skills** | `/erp-form-context` · catalog toolbar · leave-confirm · TZ na · XCO get_only · SHARE tenant |

### ssot.reuse

Reuse `ContractsController` · `ContractsService` · BFF `ContractsBffController` · Integration `CatalogUiSchemaController`. **Cấm** clone ERP catalog. **Cấm** regen `rmms_contracts` / `rmms_contract_payments` migration.

## retry.ssot_rereview (TL **trước** handoff Dev · live 2026-08-16 · `task_f8dd6827`)

Live: `Linm.Web.RMMS.Contract/src/pages/ContractListPage/ContractListPage.tsx` · `ContractFormPage.tsx`.

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | Footer `LinCatalogListPagination` 50/100/200/500 | **PASS** |
| 3 | Flex + skeleton + LAYOUT-06 | **PASS** (`showTableLoading` · `skeletonRows={8}`) |
| 4 | Toolbar catalog: refresh · history · config · +Tạo | **PASS** |
| 5 | Filter SearchTextInput + SearchInput — cấm nút Tìm | **PASS** (type / status / **contractor**) |
| 6 | `LinCatalogDataGrid` + column resize ON | **PASS** (`tableConfig` từ schema) |
| 7 | Zone F schema editor | **PASS FE** — `LinCatalogUiSchemaEditorModal` kind=`contracts` · **cấm** `configHint` live list · **FAIL BE** seed (GAP-SA-SCHEMA-01) |
| 8 | History modal (stub OK) | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form Create/Edit/View/Copy + payment lines | **PASS** full-page · View=`<dl>` · code IdCode `readOnly` display OK |
| 11 | leftover `const columns` / `LinCatalogDataColumn[]` grid | **PASS** — `uiColumns` bootstrap + `buildDynamicGridColumns` |
| 12 | `filterMaxWidthPx` | **PASS** (không trên Contract list) |
| 13 | native `<select>` catalog | **PASS** — SearchInput |
| 14 | Lin confirm (cấm `window.confirm`) | **FAIL** — list delete + form dirty/delete dùng `window.confirm` |

**Cấm** Dev chỉ patch 1 chỗ user nêu nếu còn GAP cùng surface (schema seed + confirm).

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | title «Hợp đồng và ngân sách» · `fa-file-contract` · **cấm** Thêm trên A |
| KPI | `beforeToolbar` | 4 ô IN P1 |
| B | `catalogToolbar` | refresh · history stub · config cog · create · delete |
| B filter | `SearchTextInput` · `SearchInput` type/status/**contractor** | apply → page=1 |
| C | `LinCatalogDataGrid` | resize default ON · row menu · schema columns |
| D | `LinCatalogListPagination` | 50/100/200/500 |
| F | `LinCatalogUiSchemaEditorModal` | title «Cấu hình hiển thị danh mục» · kind=`contracts` |

## Gaps (this pack)

| ID | Gap | Task | Status |
|----|-----|------|--------|
| GAP-SA-SCHEMA-01 | Registry/Seed **thiếu** `contracts` | **T-BE-SCHEMA-01** | **CLOSED** `task_d7cdf08b` |
| GAP-TL-CONFIRM-01 | `window.confirm` list/form | **T-UI-ACT-01** · **T-UI-UX-01** | **CLOSED** `task_d7cdf08b` |
| GAP-DA-CTR-SLIDEOUT / VIEW-RO / SELECT / FILTER-NT | Design/live | T-UI-FORM / LKP / LIST | **CLOSED live** |
| GAP-P2-CC-06 / CONFIG-PLACEHOLDER / GRID-SCHEMA-BOOTSTRAP | FE editor wired | T-UI-CONFIG | **CLOSED FE** · BE seed OPEN |
| GAP-F-CTR-02 Kind B+D | context stale | **T-CTX-01** | **CLOSED this TL** (context re-lock) |
| SD-AUTH RequirePermission | CommonLib | T-PERM | **OUT pack** |

## Task pack (canonical — `form-type-task-pack`)

### T-CTX-01
**layer:** docs  
**status:** **done** (this TL · `task_f8dd6827`)  
**DoD:**
- [x] Context re-lock Kind **B** list + **full-page** form — **cấm** Kind D Slideout / Resource
- [x] API `api/v1/contract/contracts` · DOMAIN-MAP Contract
- [x] **cấm ERP.*** · **cấm** `api/v1/rmms/*`

### T-PERM-01
**layer:** ui+api  
**status:** **verify / no-op**  
**DoD:**
- [x] FE `contract.contracts.*` / `contractListPermissions`
- [ ] BE `[RequirePermission]` **OUT** (stub TODO CommonLib)

### T-BE-01 / T-BE-CRUD-01
**layer:** api  
**status:** **verify / no-op** (SA `task_3c7f663e`)  
**from_solution:** API-01…05  
**source:** backend=`D:/AI-QLBD/Linm.RMMS.WebService` · domain=`Contract`  
**skills:** `/new-endpoint` · `/implement-view-cross-company` · `/implement-shared-table`  
**DoD:**
- [x] List `search` · `type` · `status` · **`contractor`** · `page` · `pageSize` (50/100/200/500)
- [x] getById XCO get_only · create/update · soft delete
- [x] Nested `Payments[]` · `Disbursed` computed · DTO scalars · **cấm** parent `*Json`
- [x] **cấm** regen migration · **cấm ERP.***

### T-BE-02
**layer:** migration  
**status:** **n/a** (tables exist)

### T-BE-SCHEMA-01
**layer:** api Integration  
**status:** **done** (`task_d7cdf08b`)  
**from_solution:** GAP-SA-SCHEMA-01  
**skills:** `/new-endpoint` (Integration domain only)  
**DoD:**
- [x] `CatalogUiSchemaRegistry` + `Supported` + const **`Contracts = "contracts"`**
- [x] `CatalogUiSchemaSeed.GetRequired` kind `contracts` — cols Design Zone C: code · contractNo · name · type · contractor · amount · kpiScore · status · effectiveTo
- [x] `GET/PUT api/v1/integration/catalogs/contracts/ui-schema` works (no throw)
- [x] **cấm** `configHint` · **cấm ERP.*** · **cấm** clone schema vào Contract BFF
- [x] `dotnet build` PASS khi Dev viết seed

### T-BFF-01
**layer:** bff  
**status:** **verify / no-op**  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [x] Proxy GET list **forward `Request.QueryString`** (search/type/status/contractor/page/pageSize)
- [x] GET/{id} · POST · PUT · DELETE
- [x] Ui-schema **không** clone vào Contract BFF

### T-UI-LIST-01
**layer:** ui  
**status:** **verify / no-op — A–D+F PASS · cấm rewrite shell**  
**DoD:**
- [x] Zones A · KPI · B · C · D · F
- [x] 1× `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination`
- [x] Filter SearchTextInput + SearchInput type/status/**contractor** → page=1
- [x] Row menu Xem / Sửa / Copy / Lịch sử / Xóa
- [x] LAYOUT-06 · list_parity
- [x] Delete confirm → Lin dialog (cùng **GAP-TL-CONFIRM-01** / T-UI-ACT) — **cấm** rewrite grid

### T-UI-CONFIG-01
**layer:** ui  
**status:** **done** (`task_d7cdf08b`)  
**DoD:**
- [x] `LinCatalogUiSchemaEditorModal` kind=`contracts` · `useCatalogUiSchema` · `buildDynamicGridColumns`
- [x] **cấm** `LinListTableConfigModal` editor cột · leftover `const columns` grid · **cấm** `configHint`
- [x] After seed: load/save schema **không** throw `No UI schema seed`

### T-UI-FORM-01
**layer:** ui  
**status:** **verify / no-op** (keep full-page)  
**DoD:**
- [x] Full-page `/contract/new` · `/contract/:id` · `?mode=view` · `?copyFrom=` · footer Save/Cancel
- [x] View = **`<dl>`** display — **cấm** Input `readOnly` xám toàn form (IdCode `readOnly` display OK)
- [x] Payment lines `pattern_inline_grid` · Copy → POST new · IdCode server
- [x] Required: contractNo · name · type · contractor · amount · status · payment period/amount
- [x] **cấm** Resource / Slideout / Kind D / Modal form
- [x] Dirty/delete confirm Lin (GAP-TL-CONFIRM-01)

### T-UI-ACT-01
**layer:** ui  
**status:** **done** (`task_d7cdf08b`) · rest **verify / no-op**

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST | `SearchTextInput` → applyFilters page=1 | GET `/contracts` |
| Type / Status / Contractor | S-LIST | `SearchInput` | GET `?type=&status=&contractor=` |
| Refresh | toolbar | `reloadAll` | GET |
| +Tạo hợp đồng | toolbar B only | `/contract/new` | POST |
| Edit / View / Delete | toolbar + row | `openRow` / `deleteRow` | GET/PUT/DELETE |
| History | toolbar + row | `LinCatalogHistoryModal` stub | OUT |
| Config | toolbar | `setConfigOpen` | GET/PUT ui-schema |
| Form Save/Cancel | full-page footer | create/update · back | POST/PUT |
| View → Sửa / Sao chép | header view | navigate | GET |
| Ký / Ghi nhận TT / KPI | row menu | P2 stub OK | OUT pack |

**IN:** replace `window.confirm` (list delete · form dirty leave · form delete) bằng **Lin confirm** — **cấm** `window.alert` / `window.confirm`.

### T-UI-LKP-01
**layer:** ui  
**status:** **verify / no-op** (P1 in-memory enum)  
**DoD:**
- [x] List+form type/status/contractor/orgUnit/payStatus = **SearchInput** — **cấm** native `<select>`
- [x] **cấm** dedicated lookup API P1
- [ ] partner-unit / org-unit CUC2 / road-route master **OUT P1 UNCLEAR**

### T-UI-FIELD-01
**layer:** ui  
**status:** **verify / no-op**  
**DoD:**
- [x] control-map ↔ `ContractDto` / Create·Update (Design §3 · SA field map)
- [x] List query `search` · `type` · `status` · `contractor` · `page` · `pageSize`
- [x] `disbursed` computed display — **cấm** client overwrite source of truth
- [x] Dates UTC on write · local display FE

### T-UI-PROD-01
**layer:** ui  
**status:** **verify / no-op**  
**DoD:**
- [x] **cấm** Resource · Slideout · Kind D · chữ «Slideout» trên UI
- [x] **cấm** View=`readOnly` Input xám toàn form
- [x] Form = `ContractFormPage` full-page

### T-UI-UX-01
**layer:** ui  
**status:** **done** (`task_d7cdf08b`) · rest **PASS**  
**DoD:**
- [x] **cấm** `filterMaxWidthPx` trên Contract `LinPageLayout`
- [x] spacing 4/8/16 · Lin* list filters · Money max-width 200px
- [x] Lin confirm (cùng GAP-TL-CONFIRM-01) — `dev-ui-ux-constitution`

### T-UI-MAP-FORM
**status:** **n/a** (`packKind=list` — không map OMS)

### T-BE-INIT
**status:** **n/a** (enums in-memory)

### T-QA-01 / T-QA-CRUD-01
**layer:** qa  
**status:** **pending**  
**deps:** Dev pack (schema + confirm)  
**DoD:**
- [ ] Smoke list A–D+F + Create→Edit→**View `<dl>`**→Copy→Delete + row menu
- [ ] Filter nhà thầu `?contractor=` · page=1
- [ ] Zone F schema editor kind `contracts` · **cấm** `configHint`
- [ ] Lin confirm (không `window.confirm`)
- [ ] mfeStdUrl `http://localhost:9312/contract`
- [ ] Update `qa/scenarios.md`

## Deps

```
T-CTX-01 (done TL)
T-BE-CRUD-01 → T-BFF-01 (verify)
T-BE-SCHEMA-01 → T-UI-CONFIG-01 (runtime save)
T-UI-LIST-01 (keep shell) → T-UI-ACT-01 (Lin confirm) → T-UI-UX-01
T-UI-FORM-01 (keep) → T-UI-LKP-01 → T-UI-FIELD-01 → T-UI-PROD-01
T-UI-ACT-01 → T-QA-CRUD-01
```

## Handoff → Dev (`/agent-dev`)

| Field | Value |
|-------|-------|
| Next | Dev **pending** chain · autoApprove ON · roleOnly=`dev` |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 shell (PASS) · **cấm** regen Contract migration · **cấm** new lookup endpoints |
| Delta IN | **GAP-SA-SCHEMA-01** seed `contracts` · **GAP-TL-CONFIRM-01** Lin confirm |
| Verify | CRUD `?contractor=` · list A–D+F · TZ na · XCO GET · SHARE tenant · View `<dl>` |
| UI SSOT | `Linm.Web.RMMS.Contract` · `/contract` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Contract + Integration ui-schema |
| HARD | `tl-retry-ssot-rereview` · fix **all** GAP cùng surface · stamp `retry.ssot_rereview` trên implement MD |
| Build | MFE `yarn build` PASS · BE `dotnet build` **bắt buộc** vì T-BE-SCHEMA-01 — **cấm** Dev completed nếu fail |
| Out of pack | Excel · quyết toán full · inventory CRUD · dedicated sign+kpi APIs · History API · RequirePermission mount · partner/org/road master · ERP.* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T04:40:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.19 |
| saSkillVersion | 2026.08.15.19 |
| designSkillVersion | 2026.08.15.19 |
| poSkillVersion | 2026.08.15.19 |
| dataAnalySkillVersion | 2026.08.08.20 |
| contentHashPriorDataAnaly | sha256:0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73 |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
