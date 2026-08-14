# Team-lead — pavement-section

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_e95b3b89` |
| updatedAt | 2026-08-14T13:32:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` | autopilot packet default |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** | autopilot packet default |
| Routes | `mfeStdRoute=/asset/pavement-section` | `mfeStdUrl=http://localhost:9301/asset/pavement-section` |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` | refresh · history · config · create · **delete** |
| C | `LinCatalogDataGrid` | resize default ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks (prior — giữ)

| id | layer | deps | skills | DoD |
|----|-------|------|--------|-----|
| T-CTX-01 | docs | — | context | Context API path note Asset (không infra) |
| T-BE-01 | api | SA | /new-endpoint | Controller+Service+DTO `api/v1/asset/pavement-sections` |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_pavement_sections` + indexes |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy `web-bff/api/v1/asset/pavement-sections` |
| T-PERM-01 | ui+api | — | perm | FE `pavementListPermissions` · BE TODO RequirePermission |
| T-UI-LIST-01 | ui | design | /erp-form-context | 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · toolbar FULL · LAYOUT-06 · list_parity |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | Full page Z1–Z3 · View display · Copy |
| T-QA-01 | qa | Dev | qa | Smoke mfeStdUrl + scenarios |

## FormType pack (canonical — `form-type-task-pack` · task_e95b3b89)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Full page C/E/V/Copy · View `<dl>` |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-UI-LKP-01 | Dev | **pending→done** | SearchInput master province/status/structure/roadClass |
| T-UI-FIELD-01 | Dev | **pending→done** | control-map ↔ PavementSectionDto / Create·Update |
| T-UI-PROD-01 | Dev | **pending→done** | cấm Resource / Slideout / View=readOnly / Kind D |
| T-UI-UX-01 | Dev | **pending→done** | spacing 4/8/16 · Lin* · no ad-hoc filterMaxWidth |
| T-QA-CRUD-01 | QA | **pending→done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `asset.pavement-sections.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema_RmmsPavementSections |

**GAP-TL-FORMTYPE-01:** closed prior. **GAP-TL-QUALITY-01:** closed this turn (LKP/FIELD/PROD/UX).

### T-UI-ACT-01 — action inventory (giữ)

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/pavement-sections` |
| Province / Status filter | S-LIST filter | `SearchInput` master → apply | GET `?province=` · `?status=` |
| Refresh | toolbar | `reloadAll` | GET `/pavement-sections` |
| +Tạo | toolbar | `openCreate` → `/asset/pavement-section/new` | POST |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `openHistory(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | `setConfigOpen` | ui-schema |
| Row View/Edit/Copy/Delete | row menu | `handleRowMenuSelect` | same as above |
| Form Save/Cancel / View→Edit / Delete | Full page Z1+Z3 | `handleSave` · `handleDelete` | POST/PUT/DELETE |
| Map live | form toolbar | `/gis?layerCode=mat-duong` | n/a |

### T-UI-LKP-01
**status:** **done**  
SearchInput init-data master `PROVINCE_LOOKUP` / `STATUS_LOOKUP` / `STRUCTURE_LOOKUP` / `ROAD_CLASS_LOOKUP` trên list filter + form. Cấm native `<select>` / Text catalog.

### T-UI-FIELD-01
**status:** **done**  
Map: search · provinceName · status · roadName · kmFrom · kmTo · lengthKm · baseWidthM · surfaceWidthM · structureType · surfaceThicknessCm · roadClass · yearsInService · handover* · last*Year · constructionUnit · manageUnit · ownerUnit · notes · code/updatedAt/updatedBy ↔ `PavementSectionDto` / Create·Update request · API query.

### T-UI-PROD-01
**status:** **done**  
Cấm Resource · Slideout · View=`readOnly` Input · Kind D. Form = `PavementSectionFormPage`. View = `<dl>` display.

### T-UI-UX-01
**status:** **done**  
Spacing 4/8/16 · `LinPageLayout` list · `LinPageHeader` form · `LinCatalogDataGrid` · `LinCatalogListPagination` · không `filterMaxWidthPx`.

### T-BE-CRUD-01
**layer:** api · **status:** **done** (verify — no Write delta)

### T-QA-CRUD-01
**layer:** qa · **status:** **done**

## Deps (quality delta)

```
T-UI-FORM-01 → T-UI-LKP-01 → T-UI-FIELD-01
T-UI-FORM-01 → T-UI-PROD-01 → T-UI-UX-01 → T-QA-CRUD-01
```

## SD flags

| Flag | Value |
|-------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| Excel import/export | OUT pack |
| History API | stub |
| form-init-data | master constants (OUT remote init) |

## list_parity / form

- list_parity Kind B — PASS (prior · giữ)
- form checklist Z1–Z3 — PASS
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — PASS (prior · giữ)

## Handoff → Dev / Review

| Field | Value |
|-------|-------|
| Next | Dev T-UI-LKP/FIELD/PROD/UX · QA-CRUD · Review autopilot |
| Anti-dup | **cấm** rewrite T-UI-LIST-01 shell |
| UI SSOT | `MFE-Source/Linm.Web.RMMS.Asset` · `pages/PavementSectionPage` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset |
| HARD | `tl-retry-ssot-rereview` · fix_all · no list rewrite |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-14T13:32:00.000Z |
| versionGate | rechecked |
