# Team-lead — task pack · drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| status | `done` |
| mfeStdRoute | `/drone` (route_confirm autopilot — keep DOMAIN-MAP ownership) |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Drone` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` |

## SSOT re-review (HARD before Dev Write)

| Check | Expected |
|-------|----------|
| LinPageLayout | **1×** — cấm nested CatalogListShell |
| Grid | `LinCatalogDataGrid` · column drag default ON |
| Footer | `LinCatalogListPagination` only |
| Flex+skeleton | `useServerPagedListLoading` |
| Toolbar | refresh · history · config · add |
| Search | `SearchTextInput` work |
| Form | C/E/V/Copy · readOnly view · required name/flightType/road |

## DES-GRID → Lin*

| DES | Lin* |
|-----|------|
| A/B/C/D | LinPageLayout + catalogToolbar + LinCatalogDataGrid + LinCatalogListPagination |
| C3 | LinCatalogRowActionMenu |

## Tasks

| id | page | role | deps | layer | DoD |
|----|------|------|------|-------|-----|
| T-CTX-01 | drone | team_lead | — | docs | context+demo+controlHint linked |
| T-PERM-01 | drone | dev | T-CTX-01 | FE | `useDronePermissions` stub allow-all |
| T-BE-01 | scans | dev | — | BE | Entity+DTO+Service+Controller `api/v1/drone/scans` |
| T-BE-02 | scans | dev | T-BE-01 | BFF | proxy `web-bff/api/v1/drone/scans` |
| T-BE-03 | scans | dev | T-BE-01 | MIG | `Schema_RmmsDroneScans` tables |
| T-UI-LIST | /drone | dev | T-PERM-01,T-BE-01 | FE | Kind B list DoD |
| T-UI-FORM | /drone/:id | dev | T-UI-LIST | FE | form + artifacts + process stub |
| T-QA-01 | drone | qa | T-UI-FORM,T-BE-02 | QA | scenarios + mfeStdUrl |
| T-RV-01 | drone | review | T-QA-01 | RV | findings |

## FormType pack (canonical · task_df075284)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST | Dev | **done** | A–D · **không** rewrite (already PASS) |
| T-UI-FORM | Dev | **done** | C/E/V/Copy · View readOnly · artifacts |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById (= prior T-BE-01 verify) |
| T-UI-MAP-FORM | — | **n/a** | packKind=`list` — không map OMS |
| T-QA-CRUD-01 | QA | **done** | Create→Edit→View→Delete + row menu |

**GAP-TL-FORMTYPE-01:** closed this turn — prior task chỉ LIST+FORM thiếu ACT/CRUD ids.

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `handleSearch` | GET `/drone/scans` |
| Flight/status/office | S-LIST filter | selects → apply | GET `?flightType=&status=&office=` |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Tạo scan | toolbar | `navigate('/drone/new')` | POST `/` |
| Edit (toolbar) | toolbar | `openEdit` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openView` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` soft |
| History (toolbar) | toolbar | history stub | DEFER |
| Config | toolbar | config hint | P2 schema later |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same |
| Upload files | row menu | stub P2 | POST upload STUB |
| Process | row menu / form | `droneService.process` | POST `/{id}/process` |
| Viewer stub | row menu | modal Cesium | — |
| Xem artifacts | row menu | `openView` | GET `/{id}` + artifacts |
| Gửi sự cố | row menu | stub | DEFER event |
| GIS Twin / AiVision / Excel | row menu | stub/nav | DEFER |
| Form Lưu / Lưu nháp / Hủy | footer | `handleSave` / `leave` | POST/PUT |
| Hủy job | form footer | confirm + `delete` | DELETE `/{id}` |
| Artifact add/remove | form lines | local state → save | PUT artifacts |

**GAP-P2-ACT-\*** (live audit `DroneListPage` + `DroneFormPage`):

| ID | Gap | Fix |
|----|-----|-----|
| GAP-P2-ACT-DELETE | Toolbar/row **thiếu** Delete dù `canDelete` + `droneService.delete` + API DELETE | **CLOSED** — `canDelete`/`onDelete` · `showDelete` · `case 'delete'` |
| GAP-P2-ACT-FORM-CANCEL | Form thiếu «Hủy job» dù inventory destructive | **CLOSED** — Footer confirm + soft-delete |
| GAP-P2-ACT-ROW-PAIR | Artifacts / sự cố / GIS / Excel / AiVision chưa pair row menu | **CLOSED** — navigate/stub |

### T-BE-CRUD-01
**layer:** api  
**status:** **done** (verify — = prior T-BE-01)  
**DoD:**
- [x] API-01 list/search · API-02 getById · API-03 create · API-04 update · API-05 soft delete
- [x] Route `api/v1/drone/scans` · domain Drone · no ERP
- [x] BFF proxy DELETE present
- [x] `dotnet build` API + BFF PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** **done**  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01  
**DoD:**
- [x] Smoke Create→Edit→View→Delete + row menu Delete
- [x] Update `qa/scenarios.md` QA-CRUD rows

## source.*

| Key | Path |
|-----|------|
| list | `src/pages/DroneListPage/` |
| form | `src/pages/DroneFormPage/` |
| service | `src/services/drone/` |
| demo store | `src/demo/droneStore.ts` |
| entity | `api/shared/.../Entities/DroneScanEntity.cs` |
| domain | `api/src/.../Domains/Drone/` |
| bff | `bff/domains/drone/` |

## Handoff → Dev

Repo confirms from RUN PACKET: BE=`Linm.RMMS.WebService` · UI=`MFE-Source/Linm.Web.RMMS.Drone`. Build PASS required. Set `mfeStdUrl=http://localhost:9313/drone`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| workflowVersion | 2026.08.09.02 |
| versionGate | ok |
