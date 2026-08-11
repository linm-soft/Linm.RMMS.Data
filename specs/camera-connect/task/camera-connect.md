# Team-lead — camera-connect

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| status | `confirmed` |
| packKind | `list` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_6baf42c3` |
| updatedAt | 2026-08-10T16:20:00.000Z |

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Camera` | board ui_repo_confirm |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Camera** | board be_repo_confirm |
| Routes | `mfeStdRoute=/camera` · form `/camera/new` · `/camera/:id` | Kind B list · Kind C connect form (Design) |

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header | 1 shell · no nested CatalogListShell |
| B | `catalogToolbar` | refresh · history · config · create · delete · view/edit |
| C | `LinCatalogDataGrid` | resize default ON · row menu |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks (prior · **không rewrite LIST nếu PASS**)

| id | layer | deps | skills | DoD | Status |
|----|-------|------|--------|-----|--------|
| T-CTX-01 | docs | — | context | camera-connect.md API CRUD | **pending→dev** |
| T-BE-01 | api | — | connect SDK/ISAPI | health · models · test · snapshot · ingest · events | **done** |
| T-BFF-01 | bff | T-BE-01 | proxy connect | **done** |
| T-UI-FORM | ui | — | Kind C connect | `/camera/new` Test+JPEG · **done** (CRUD save = ACT) |
| T-UI-LIST | ui | — | Kind B | **FAIL SSOT** (raw table) — fix under ACT surface (cấm skip GAP) |
| T-PERM-01 | ui | — | perm | `camera.devices.*` | **new** |

## FormType pack (canonical — `form-type-task-pack` · task_6baf42c3)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | A–D SSOT — Lin\* Kind B |
| T-UI-FORM-01 | Dev | **done** base · polish ACT | Kind C `/camera/new|:id` · footer Save/Cancel · View mode |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **done** | Create→Edit→View→Delete + row menu |
| T-PERM-01 | Dev | **done** | `camera.devices.*` |
| T-BFF-CRUD | Dev | **done** | BFF proxy CRUD on `/cameras` |
| T-BE-02 | Dev | **done** | migration `rmms_camera_devices` |

**GAP-TL-FORMTYPE-01:** closed this turn — prior STATUS thiếu ACT/CRUD ids · không có `task/`.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → applyFilters | GET `/cameras` |
| Online filter | S-LIST filter | `Select` online | GET `?online=` |
| Refresh | toolbar | reloadAll | GET `/` |
| +Thêm | toolbar | navigate `/camera/new` | POST `/` |
| Edit (toolbar) | toolbar | navigate `/camera/:id` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | navigate `/camera/:id?mode=view` | GET `/{id}` |
| Delete (toolbar) | toolbar | deleteRow confirm | DELETE `/{id}` soft |
| History (toolbar) | toolbar | historyStub(activeRow) | DEFER stub |
| Config `fa-cog` | toolbar | config hint dialog | P1 schema later |
| Row View/Edit/Copy/Delete/History | row menu | handleRowMenuSelect | same |
| Deep-link `?form=` | URL | create→`/camera/new` · edit/view/copy | GET when id |
| Form Save/Cancel | Kind C footer | create/update · navigate back | POST/PUT |
| Test / Live / Events | Kind C toolbar domain | connect APIs (prior) | `/connect/*` · `/events` |

**GAP-P2-ACT-\* (pre-Dev audit):**

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-LIST-SHELL | Raw table · no LinPageLayout/LinCatalogDataGrid/LinCatalogListPagination | **CLOSED** |
| GAP-P2-ACT-CRUD-API | `getList` stub `[]` · no C/U/D | **CLOSED** |
| GAP-P2-ACT-ROW-MENU | Chỉ nút Xem · thiếu Edit/Copy/Delete/History | **CLOSED** |
| GAP-P2-ACT-TOOLBAR | Không catalogToolbar refresh/history/config/delete | **CLOSED** |
| GAP-P2-FORM-SAVE | Form chỉ `localStorage` · không POST/PUT | **CLOSED** |
| GAP-P2-FORM-VIEW | Không mode=view readOnly | **CLOSED** |
| GAP-P2-FORM-TOP-SAVE | «Lưu local» trên toolbar (domain+CRUD lẫn) | **CLOSED** → footer Lưu |

### T-BE-CRUD-01
**layer:** api  
**status:** **done**  
**DoD:**
- [x] API-01 list/search · API-02 getById · API-03 create · API-04 update · API-05 soft delete
- [x] Entity `CameraDevice` · table `rmms_camera_devices` · domain Camera · no ERP
- [x] Route `api/v1/cameras` CRUD + giữ connect endpoints
- [x] BFF proxy GET/POST/PUT/DELETE
- [x] `dotnet build` API + BFF PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** **done**  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [x] Smoke Create→Edit→View→Delete + row menu Delete
- [x] Update `qa/scenarios.md` QA-CRUD rows
- [x] Form footer Save · View readOnly

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-TOKEN | n/a P1 |
| SD-PWD | PasswordEnc plain P1 · encrypt P2 |

## list_parity / form

- list_parity Kind B — **FAIL** live → Dev HARD re-review trước Write
- form Kind C connect — footer Save/Cancel · View readOnly
- tree_master — n/a

## Deps

```
T-BE-CRUD-01 → T-BE-02 → T-BFF-CRUD
T-BE-CRUD-01 → T-PERM-01 → T-UI-ACT-01 (list shell + actions)
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
```

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` — T-BE-CRUD-01 + T-UI-ACT-01 (list SSOT + actions + form save) · **cấm** rewrite connect Test/JPEG nếu PASS |
| Anti-dup | reuse `CamerasController` + connect services · add device CRUD |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Camera |
| HARD | `tl-retry-ssot-rereview` · fix **all** GAP-P2-ACT-* cùng surface · cấm patch mù 1 chỗ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-10T16:20:00.000Z |
| versionGate | rechecked |
| taskId | `task_6baf42c3` |
| priorVersion | STATUS 2026.08.09.04 → rechecked keep_current artifacts + stamp SSOT |
