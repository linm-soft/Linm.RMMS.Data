# Team-lead — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_2eb59012` (prior `task_9722cb4b` ACT/CRUD **kept**) |
| updatedAt | 2026-08-14T21:20:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` | autopilot packet default |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** | autopilot packet default |
| Routes | `mfeStdRoute=/integration/citizen` | autopilot |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` | refresh · history · config · create |
| C | `LinCatalogDataGrid` | resize default ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks

| id | layer | deps | skills | DoD |
|----|-------|------|--------|-----|
| T-CTX-01 | docs | — | context | Update citizen.md API route + BE status |
| T-BE-01 | api | T-CTX-01 | /new-endpoint | Entity · CRUD · public · ApiResponse · XCO GetById |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_citizen_incidents` |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy CitizenIncidentsBffController |
| T-PERM-01 | ui+api | T-BE-01 | perm | FE permissions.ts · BE TODO RequirePermission |
| T-UI-LIST-01 | ui | T-BFF-01 · T-PERM-01 | /erp-form-context | Zones A–D · search · status filter · pageSize 50 · LAYOUT-06 |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | Slideout Z1–Z3 Create/Edit/View/Copy · readOnly view · leave-confirm |
| T-QA-01 | qa | T-UI-FORM-01 | qa | scenarios + mfeStdUrl | **pending** |

## FormType pack (canonical — `form-type-task-pack` · task_9722cb4b)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Full-page C/E/V/Copy · View `<dl>` |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById (= prior T-BE-01 verify) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **pending** | Create→Edit→View→Delete + row menu |
| T-UI-LKP-01 | Dev | **done** | SearchInput status / incidentType |
| T-UI-FIELD-01 | Dev | **done** | control-map ↔ DTO |
| T-UI-PROD-01 | Dev | **done** | Removed Slideout · `CitizenFormPage` |
| T-UI-UX-01 | Dev | **done** | 4/8/16 · no filterMaxWidthPx |
| T-PERM-01 | Dev | **done** | `integration.citizen-incidents.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema migration |

**GAP-TL-FORMTYPE-01:** closed this turn — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/` |
| Status filter | S-LIST filter | `SearchInput` → debounce applyFilters | GET `?status=` |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Thêm | toolbar | `openCreate` → `/integration/citizen/new` | POST `/` |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `historyStub(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | config hint dialog | P1 schema later |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same as above |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` when id |
| Form Save/Cancel/View actions | Form page footer only | `CitizenFormPage` Z3 | POST/PUT |

**GAP-P2-ACT-\*** (live audit `CitizenListPage` + `CitizenFormSlideout`):

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar/row menu **thiếu** Delete dù `canDelete` + `citizenService.delete` + API DELETE sẵn | Wire `canDelete`/`onDelete` · `showDelete` · `case 'delete'` |
| GAP-P2-SLIDE-TOP-ACT | Z1 «Quay lại» + Hủy/Lưu/Sửa/Sao chép trên header form | footer-only |
| GAP-P2-SLIDE-DUP-SAVE | Hai cụm Lưu (top + footer) | footer only · View Đóng/Sửa/Sao chép in footer |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] Route `api/v1/integration/citizen-incidents` · domain Integration · no ERP
- [x] BFF proxy DELETE present
- [x] `dotnet build` API + BFF PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** **pending** (QA next)  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [ ] Smoke Create→Edit→View→Delete + row menu Delete on full-page form
- [ ] Update `qa/scenarios.md` QA-CRUD rows
- [ ] Form footer-only actions (Z1 Quay lại only)

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-TOKEN | Citizen temp token DEFER · public anonymous P1 |
| SD-PII | enc-at-rest DEFER |
| SD-MEDIA | mediaMeta string stub · presign DEFER |

## list_parity / form

- list_parity Kind B — PASS required
- form checklist Z1–Z3 · `implement.form_shell.actions=footer_only` — PASS required
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — PASS required

## Deps

```
T-CTX-01 → T-BE-01 → T-BE-02 → T-BFF-01
                ↘ T-PERM-01
T-BE-01 → T-UI-LIST-01 → T-UI-FORM-01 → T-QA-01
T-BE-01 ≈ T-BE-CRUD-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## Handoff → QA

| Field | Value |
|-------|-------|
| Next | `/agent-qa` — T-QA-01 · T-QA-CRUD-01 full-page form + SearchInput |
| Anti-dup | reuse `citizenService` · BE controller sẵn |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Integration |
| HARD | form routes `/integration/citizen/new` · `/:id` · View `<dl>` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-14T18:55:00.000Z |
| versionGate | rechecked |
| taskId | `task_2eb59012` |
