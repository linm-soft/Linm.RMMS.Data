# Team lead — tasks — csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` (G+B+D) |
| solution_confirm | **approve** (autopilot · task_de8226e1) |
| updatedAt | 2026-08-10T16:40:00.000Z |
| taskId | `task_9106e8fa` |
| TL SSOT | `tl-ssot-permission-tasks.md` · `tl-list-shell-height.md` · `tl-retry-ssot-rereview.md` · `form-type-task-pack.md` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | `/asset/csdl-so-sach` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-sach/ui/prototype/csdl-so-sach-list-prototype.html` |
| `mfeStdRoute` | `/asset/csdl-so-sach` |

## API contract

| id | Method | Path |
|----|--------|------|
| API-00 | GET | `/api/v1/asset/csdl-records/catalog` |
| API-01 | GET | `/api/v1/asset/csdl-records` |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` |
| API-03 | POST | `/api/v1/asset/csdl-records` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` |

FE BASE: `/asset/csdl-records`.

## Tasks

| id | layer | deps | DoD |
|----|-------|------|-----|
| T-CTX-01 | docs | — | Context sync route/API Asset; STATUS backend field |
| T-PERM-01 | ui+api | T-BE-01 | FE gate + BE perm codes stub `asset.csdl-records.*` |
| T-BE-01 | api | — | Controller+Service CRUD + catalog · XCO get · tenant filter |
| T-BE-02 | migration | T-BE-01 | `rmms_csdl_catalog_records` + `rmms_csdl_book_entries` |
| T-BFF-01 | bff | T-BE-01 | proxy-only controller |
| T-UI-LIST-01 | ui | T-BFF-01 | Hub + LinPageLayout A–D · LinCatalogDataGrid · LinCatalogListPagination · LAYOUT-06 · toolbar · search work · row menu |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | Slideout Z1–Z3 · Create/Edit/View/Copy · book entries · leave-confirm dirty |
| T-QA-01 | qa | T-UI-* · T-BE-* | scenarios hub/list/form/API |

## FormType pack (canonical — `form-type-task-pack` · task_9106e8fa)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Slideout C/E/V/Copy · View readOnly · footer-only |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById (= prior T-BE-01 verify) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `asset.csdl-records.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema_RmmsCsdlCatalogRecords |

**GAP-TL-FORMTYPE-01:** closed (stamped this turn) — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/` |
| Province / Status filter | S-LIST filter | `Select` → apply | GET `?province=&status=` |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Tạo | toolbar | `openCreate` → Slideout create | POST `/` |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `openHistory(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | `LinCatalogUiSchemaEditorModal` | ui-schema |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same as above |
| Deep-link `?resource=&form=` | URL | create/edit/view/copy | GET `/{id}` when id |
| Form Save/Cancel/View actions | Slideout footer only | `customFooter` | POST/PUT |
| Hub cards | Kind G hub | `openResource` | GET `/catalog` |

**GAP-P2-ACT-\* (pre-Dev audit):**

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar **thiếu** Delete dù `canDelete` + `csdlService.delete` + API-05 + row menu sẵn | **CLOSED** — `canDelete`/`onDelete` · shared `deleteRow` |
| GAP-P2-ACT-DEEPLINK | Thiếu deep-link `?resource=&form=`/`id` (parity Asset/Contract) | **CLOSED** — open slideout rồi strip form/id, giữ resource |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-00 catalog · API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] Route `api/v1/asset/csdl-records` · domain Asset · no ERP
- [x] BFF proxy DELETE present
- [x] `dotnet build` API + BFF PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** **done**  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [x] Smoke Create→Edit→View→Delete + row menu Delete + toolbar Delete
- [x] Update `qa/scenarios.md` QA-CRUD rows

## Deps (FormType delta)

```
T-BE-01 ≈ T-BE-CRUD-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## Handoff → Review

| Field | Value |
|-------|-------|
| Next | Review autopilot · GAP-P2-ACT-DELETE / DEEPLINK closed |
| Anti-dup | reuse `csdlService.delete` · BE controller sẵn |
| UI SSOT | `MFE-Source/Linm.Web.RMMS.Asset` · `pages/CsdlSoSachPage` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset |
| HARD | `tl-retry-ssot-rereview` · fix_all · no list rewrite |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | common-components Lin* | nested CatalogListShell · raw table pager |
| HTTP | apiClient | local ApiClient |
| Persist | flat + child rows | parent *Json |
| BFF | proxy only | business logic |

### LAYOUT-06 HARD

Standalone shell definite height · page `data-catalog-list-page` · flex fill · no blank/title clip.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T16:40:00.000Z |
| versionGate | rechecked |
| formTypePack | task_9106e8fa · gap=crud_formtype |
