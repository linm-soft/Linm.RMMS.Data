# Team lead — tasks — contract

| Field | Value |
|-------|-------|
| feature | `contract` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` (Kind B+D) |
| solution_confirm | **approve** (autopilot · task_7e4ef9d4) |
| updatedAt | 2026-08-09T14:55:00.000Z |
| TL SSOT | `tl-platform-ssot.md` · `tl-ssot-permission-tasks.md` · `tl-list-shell-height.md` · `tl-retry-ssot-rereview.md` |

## from design / solution

| Source | Path | Task |
|--------|------|------|
| Design | `ui/design.md` + reviewUrl | T-UI-LIST · T-UI-FORM · T-CTX |
| Solution | `be/solution-discovery.md` | T-BE · T-BFF · T-PERM |
| Prototype | `ui/prototype/contract-list-prototype.html` | UI DoD |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| `source.routes` | `/contract` · Slideout |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Contract** (`contract`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Contract/` |
| `source.bff` | `bff/domains/contract/LINM.RMMS.Contract.Bff/` |
| `mfeStdRoute` | `/contract` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/contract/ui/prototype/contract-list-prototype.html` |

## API contract

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/contract/contracts` |
| API-02 | GET | `/api/v1/contract/contracts/{id}` |
| API-03 | POST | `/api/v1/contract/contracts` |
| API-04 | PUT | `/api/v1/contract/contracts/{id}` |
| API-05 | DELETE | `/api/v1/contract/contracts/{id}` |

FE BASE: **`/contract/contracts`**. BFF proxy `web-bff/api/v1/contract/contracts/**`.

## Implement gates

| Gate | Decision |
|------|----------|
| TZ | n/a |
| XCO | get_only on API-02 |
| SHARE | tenant_keep |

## Retry SSOT re-review (HARD)

| # | Check | Target |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested CatalogListShell | PASS |
| 2 | Footer `LinCatalogListPagination` 50/100/200/500 | PASS |
| 3 | Flex + skeleton + LAYOUT-06 | PASS |
| 4 | Toolbar catalog: refresh · history · config · +Tạo | PASS |
| 5 | Filter SearchTextInput + Selects — cấm nút Tìm | PASS |
| 6 | `LinCatalogDataGrid` + column resize ON | PASS |
| 7 | Zone F schema editor | PASS |
| 8 | History modal (stub OK) | PASS |
| 9 | tree_master? | n/a |
| 10 | Form Create/Edit/View/Copy + payment lines | PASS |

## Task pack

### T-CTX-01
**layer:** docs · **status:** done  
**DoD:** Context/control-map khớp design+solution · API paths DOMAIN-MAP

### T-BE-01
**layer:** api · **status:** done  
**DoD:** Controllers/Services/DTOs API-01…05 · XCO GetById · ApiResponse · `dotnet build` API PASS · **cấm ERP.***

### T-BE-02
**layer:** migration · **status:** done  
**DoD:** `ContractEntity` + `ContractPaymentEntity` · DbSet · EF migration · no parent JSON

### T-BFF-01
**layer:** bff · **status:** done  
**DoD:** Proxy-only ContractsBffController · `dotnet build` BFF PASS

### T-PERM-01
**layer:** ui+api · **status:** done  
**DoD:** FE `permissions.ts` · BE Auth stub comments `contract.contracts.*`

### T-UI-LIST-01
**layer:** ui · **status:** done  
**DoD:** A–D · LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · KPI strip · search work · row menu · LAYOUT-06 · Zone F · history

### T-UI-FORM-01
**layer:** ui · **status:** done  
**DoD:** Slideout Z1–Z3 · Create/Edit/View/Copy · payment lines · leave-confirm dirty · validate

### T-QA-01
**layer:** qa · **status:** done  
**DoD:** scenarios.md · verify gates recorded

## FormType pack (canonical — `form-type-task-pack` · task_6b3f9c9c)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · SearchInput filter · **không** rewrite shell |
| T-UI-FORM-01 | Dev | **done** | Kind D Slideout C/E/V/Copy · footer only · `form-field-grid` |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById (= prior T-BE-01 verify) |
| T-UI-LKP-01 | Dev | **done** | SearchInput type/status/contractor/org/pay |
| T-UI-FIELD-01 | Dev | **done** | control-map ↔ ContractDto / Create·Update |
| T-UI-PROD-01 | Dev | **done** | cấm Resource / chữ «Slideout» trên UI (giữ component) |
| T-UI-UX-01 | Dev | **done** | ≤2 field/hàng · tên full · `helperText` mã · GAP-P2-FORM-GRID-01 closed |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | pending | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `contract.contracts.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema_RmmsContracts |

**GAP-TL-FORMTYPE-01:** closed (stamped this turn) — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/` |
| Type / Status filter | S-LIST filter | `Select` → apply | GET `?type=&status=` |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Tạo | toolbar | `openCreate` → Slideout create | POST `/` |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `openHistory(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | `LinCatalogUiSchemaEditorModal` | ui-schema |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same as above |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` when id |

**GAP-P2-ACT-\* (pre-Dev audit):**

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar/row menu **thiếu** Delete dù `canDelete` + `contractService.delete` + API-05 sẵn | **CLOSED** — wired `canDelete`/`onDelete` · `showDelete` · `case 'delete'` |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] Route `api/v1/contract/contracts` · domain Contract · no ERP
- [x] `dotnet build` API + BFF PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** **done**  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [x] Smoke Create→Edit→View→Delete + row menu Delete
- [x] Update `qa/scenarios.md` QA-CRUD rows

## Deps (FormType delta)

```
T-BE-01 ≈ T-BE-CRUD-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## Handoff → Review

| Field | Value |
|-------|-------|
| Next | Review autopilot · GAP-P2-ACT-DELETE closed |
| Anti-dup | `ssot-no-duplicate.md` — reuse only |
| HARD | `tl-retry-ssot-rereview` · fix_all · no list rewrite |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T16:25:00.000Z |
| versionGate | rechecked |
| taskId | `task_326682fd` (prior stamp `task_6b3f9c9c` — ids already present, no rewrite) |
| gap | `crud_formtype` |
