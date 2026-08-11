# Implement — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_13e76e73` |
| updatedAt | 2026-08-10T16:20:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form (`slideout-form-layout` footer_only)  
gaps fixed this turn: **GAP-P2-ACT-DELETE** · **GAP-P2-SLIDE-TOP-ACT** · **GAP-P2-SLIDE-DUP-SAVE**  
then: **fix_all**

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** (`DEFAULT_CATALOG_LIST_TABLE_CONFIG` + `resizable: true`) |
| Footer `LinCatalogListPagination` | **PASS** · sizes 50/100/200/500 |
| flex + skeleton + **LAYOUT-06** | **PASS** |
| toolbar `catalogToolbar` | **PASS** · refresh · history · config · create · **delete** |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist · `actions=footer_only` | **PASS** — no Z1 Quay lại/Hủy/Lưu; View Đóng/Sửa/Sao chép in footer |

## Done this turn (task_13e76e73 · crud_formtype)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired Delete toolbar + row menu · action inventory closed |
| T-BE-CRUD-01 | Verified API list/get/create/update/soft-delete + BFF DELETE · domain Patrol |
| Form polish | `AttendanceFormSlideout` footer-only (GAP-P2-SLIDE-*) |
| Verify | typecheck + webpack build + BE Release **PASS** |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Patrol/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/AttendanceLogEntity.cs` |
| Migration | `20260809063754_Schema_RmmsAttendanceLogs` |
| BFF | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/AttendanceLogsBffController.cs` |
| MFE list | `pages/AttendanceListPage/AttendanceListPage.tsx` |
| MFE form | `pages/AttendanceListPage/AttendanceFormSlideout.tsx` |
| Perm | `services/attendance/permissions.ts` |
| Route prefix | `api/v1/patrol/attendance-logs` |
| mfeStdRoute | `/patrol/attendance` |
| mfeStdUrl | `http://localhost:9304/patrol/attendance` |

**Cấm** ERP.* — void.

## Verify (task_13e76e73)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| History API | window.alert stub — wire khi Auth/event sẵn |
| Schema editor | Config hint dialog P1 — full `LinCatalogUiSchemaEditorModal` later |
| Kind E report/map APIs | `/attendance/report|summary|zones` — P2 out of list pack |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-10T16:20:00.000Z |
| versionGate | rechecked |
| taskId | `task_13e76e73` |
