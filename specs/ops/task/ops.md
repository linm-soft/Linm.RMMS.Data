# Team-lead — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` · gap=`crud_formtype` |
| taskId | `task_47576cf0` |
| updatedAt | 2026-08-14T20:20:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` | autopilot packet default |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Notification** | autopilot packet default |
| Routes | `mfeStdRoute=/ops` | `mfeStdUrl=http://localhost:9304/ops` |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` | refresh · history · config · create · delete · extras mark-all / nav / P2 |
| C | `LinCatalogDataGrid` | resize default ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks (prior — giữ)

| id | layer | deps | skills | DoD |
|----|-------|------|--------|-----|
| T-CTX-01 | docs | — | context | Update ops.md API routes + BE status Signed |
| T-BE-01 | api | T-CTX-01 | /new-endpoint | Entity · inbox CRUD · mark-read · overview · ApiResponse · XCO GetById |
| T-BE-02 | migration | T-BE-01 | /database-migration | `rmms_notifications` |
| T-BFF-01 | bff | T-BE-01 | /create-bff-api-feature | Proxy inbox + overview BFF |
| T-PERM-01 | ui+api | T-BE-01 | perm | FE permissions.ts · BE TODO RequirePermission |
| T-UI-LIST-01 | ui | T-BFF-01 · T-PERM-01 | /erp-form-context | Zones A–D · search · filters · pageSize 50 · LAYOUT-06 · KPI |
| T-UI-FORM-01 | ui | T-UI-LIST-01 | form checklist | Full-page `/ops/new` · `/ops/:id` · View `<dl>` · leave-confirm |
| T-QA-01 | qa | T-UI-FORM-01 | qa | scenarios + mfeStdUrl |

## FormType pack (canonical — `form-type-task-pack` · task_47576cf0 · quality gates)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM-01 | Dev | **done** | Full-page C/E/V/Copy · View display |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById + mark-read/mark-all (= prior T-BE-01 verify) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-UI-LKP-01 | Dev | **done** | SearchInput master status/priority/type/recipient/channel |
| T-UI-FIELD-01 | Dev | **done** | control-map ↔ NotificationDto / Create·Update |
| T-UI-PROD-01 | Dev | **done** | cấm Resource / Slideout / View=readOnly / Kind D |
| T-UI-UX-01 | Dev | **done** | spacing 4/8/16 · Lin* · no filterMaxWidthPx |
| T-QA-CRUD-01 | QA | **done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `notification.inbox.*` |
| T-CTX-01 | Dev | **done** | context |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema_RmmsNotifications |

**GAP-TL-FORMTYPE-01:** closed (stamped this turn) — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `/inbox` |
| Status / Priority / Type filter | S-LIST filter | `Select` → apply | GET `?status=&priority=&type=` |
| Unread toggle | extra bar | `handleUnreadChange` | GET `?unreadOnly=true` |
| Refresh | toolbar | `reloadAll` | GET `/inbox` · GET `/overview` |
| +Tạo | toolbar | `openCreate` → `/ops/new` | POST `/inbox` |
| Edit (toolbar) | toolbar | `openRow(edit)` → `/:id?mode=edit` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` → `/:id` | GET `/{id}` (+ mark-read if unread) |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | `historyStub(activeRow)` | DEFER stub |
| Config `fa-cog` | toolbar | `editConfigStub` | ui-schema hint |
| Mark all read | extra bar | `markAllRead` | POST `/inbox/mark-all-read` |
| Xuất / Nav patrol·gis·incident / Command P2 | extra bar | alert stubs | DEFER / cross-MFE |
| Row View/Edit/Copy/Delete | row menu | `handleRowMenuSelect` | same as above |
| Row Mark-read | row menu | `markReadRow` | POST `/{id}/mark-read` |
| Row Assign (P2) | row menu | alert stub | DEFER GAP-F-OPS-01 |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` when id |
| Form Send/Draft/Clear/Cancel/View actions | Form page footer + Z1 | `handleSave` | POST/PUT |

### T-UI-LKP-01
**status:** **pending→done** (Dev this turn)  
SearchInput init-data master `STATUS_LOOKUP` / `PRIORITY_LOOKUP` / `TYPE_LOOKUP` / `RECIPIENT_LOOKUP` / `CHANNEL_LOOKUP` trên list filter + form. Cấm native `<select>` / Text catalog.

### T-UI-FIELD-01
**status:** **pending→done** (Dev this turn)  
Map: search · status · priority · type · unread · title · body · recipient · channel · sender · linkRef · reply · sentAt ↔ `NotificationDto` / Create·Update request · API query.

### T-UI-PROD-01
**status:** **pending→done** (Dev this turn)  
Cấm Resource · Slideout · View=`readOnly` Input · Kind D. Form = `NotificationFormPage`. View = `<dl>` display.

### T-UI-UX-01
**status:** **pending→done** (Dev this turn)  
Spacing 4/8/16 · `LinPageLayout` list · `LinPageHeader` form · `LinCatalogDataGrid` · `LinCatalogListPagination` · không `filterMaxWidthPx`.

**GAP-P2-ACT-\* (pre-Dev audit):**

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar **thiếu** Delete dù row menu `showDelete` + `notificationService.delete` + API soft-delete sẵn | **CLOSED** — `canDelete`/`onDelete` · shared `deleteRow` |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById (XCO) · API-03 create · API-04 update · API-05 soft delete
- [x] API-06 mark-read · API-07 mark-all-read · overview GET
- [x] Route `api/v1/notification/inbox` · domain Notification · no ERP
- [x] BFF proxy DELETE/mark-read/mark-all-read present
- [x] `dotnet build` API + BFF PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** **done**  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [x] Smoke Create→Edit→View→Delete + row menu Delete + toolbar Delete
- [x] Mark-read / mark-all-read → dedicated API
- [x] Update `qa/scenarios.md` QA-CRUD rows

## Deps (FormType delta)

```
T-BE-01 ≈ T-BE-CRUD-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## SD flags

| Flag | Value |
|-------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-MAP | realtime map **cấm** trong MFE · nav Patrol/Gis |
| SD-SIGNALR | OpsHub DEFER P2 |
| SD-COMMAND | Command center P2 stub |

## list_parity / form

- list_parity Kind B — PASS (prior · giữ)
- form checklist Z1–Z3 — PASS (full-page · không Slideout)
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — PASS (prior · giữ)

## Handoff → Dev / Review

| Field | Value |
|-------|-------|
| Next | Dev T-UI-LKP/FIELD/PROD/UX · QA-CRUD smoke · Review autopilot |
| Anti-dup | reuse inbox CRUD · BE không đổi |
| UI SSOT | `MFE-Source/Linm.Web.RMMS.Field` · `NotificationListPage` · `NotificationFormPage` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Notification |
| HARD | `tl-retry-ssot-rereview` · fix_all · no list rewrite |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T20:20:00.000Z |
| versionGate | rechecked |
