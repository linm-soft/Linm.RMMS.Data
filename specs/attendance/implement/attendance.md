# Implement — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_c33a0de3` |
| updatedAt | 2026-08-14T21:10:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form (`slideout-form-layout` footer_only)  
gaps fixed this turn: **T-UI-UX** (footer labels, no emoji) · **T-UI-FIELD** (View Select → `Input` readOnly, cấm disabled/raw input)  
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
| T-UI-LKP lookup master | **n/a** — SA scalars `UserName`/`Route` (varchar) · no lookup API |
| T-UI-FIELD field type/BE | **PASS** — DateTime → `datetime-local` · lat/lng number · status/inZone Select (edit) / Input readOnly (view) |
| cấm Resource · View=disabled | **PASS** — no Resource · View=`readOnly` not disabled |
| T-UI-UX constitution | **PASS** — footer labels text-only |

## Done this turn (task_c33a0de3 · /agent-dev · roleOnly)

Live page re-audit Field `AttendanceListPage` + `AttendanceFormSlideout`. LIST A–D **không rewrite**. BE Step 4b verify: API + BFF + migration already in `Linm.RMMS.WebService` domain **Patrol** — no new endpoint this turn.

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

## Verify (task_c33a0de3 · 2026-08-14)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2, 0 errors, size warnings only)
dotnet build Linm.RMMS.WebService.sln -c Release → PASS (0 Error(s), 0 Warning(s))
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
| generatedAt | 2026-08-14T21:10:00.000Z |
| versionGate | rechecked |
| taskId | `task_c33a0de3` |
