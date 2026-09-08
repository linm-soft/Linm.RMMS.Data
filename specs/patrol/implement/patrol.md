# Implement — patrol (leftover + upload media)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` · gap=`crud_formtype` + upload media (W4-1 W4-2) |
| packKind | `list` |
| taskId | `task_12280943` |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — QA only) |
| updatedAt | `2026-09-06T18:10:00.000Z` |
| skillVersion | `2026.08.14.5` |
| contentHashPriorTl | `sha256:task_62694861` |

## retry.ssot_rereview (Dev)

checklist: leftover + FILE-01 media · list/form KEEP  
result: **fix_all** media path (MIG→BE→BFF→FE)

| Check | Live before | After |
|-------|-------------|-------|
| MediaIds column | thiếu | **PASS** `Schema_RmmsPatrolSessions_MediaIds` |
| DTO mediaIds[] max10 | thiếu | **PASS** Create/Update/GetById |
| Replace-all · no cascade delete files | — | **PASS** |
| BFF sessions body passthrough | KEEP | **PASS** (no BFF change) |
| files/* FE | thiếu | **PASS** `LinImageUpload` + `/files/*` |
| Form data-zone=upload FileMulti | thiếu | **PASS** |
| View data-zone=media-gallery resign | thiếu | **PASS** |
| Copy clone guid[] | thiếu | **PASS** |
| List no media col AC-G-08 | KEEP | **PASS** |
| Prior route/LKP/VAL/LIST/FORM | CLOSED | **KEEP** |

## Done this turn (`task_12280943`)

| Task | Result |
|------|--------|
| T-MIG-MEDIA | Migration add `MediaIds` varchar(2000) · entity + snapshot |
| T-BE-FILE-01 | DTO `mediaIds[]` · Serialize/Parse CSV · count≤10 · replace-all |
| T-BFF-FILE-01 | Sessions proxy-only KEEP · files/* FE→FileService trực tiếp |
| T-FE-FILE-01 | `mediaUpload.ts` · MIME image≤10MB / video≤50MB · guid only |
| T-UI-FORM-MEDIA | `LinImageUpload` zone upload · controlHint FileMulti |
| T-UI-VIEW-GALLERY | View gallery disabled + getObject resign |
| T-UI-COPY-MEDIA | Copy clones `mediaIds[]` guid |
| T-QA-MEDIA | **không** làm (QA role) |

**Cấm** `ERP.*` · invent `patrol-files` · persist full URL · jsonb · child table.

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Migration | `Migrations/20260906180000_Schema_RmmsPatrolSessions_MediaIds.cs` |
| Entity | `PatrolSessionEntity.MediaIds` |
| API | `PatrolSessionService` · `PatrolSessionDtos` |
| BFF | `PatrolSessionsBffController` (passthrough KEEP) |
| MFE | `PatrolFormPage.tsx` · `mediaUpload.ts` · models · `patrolStore` v4 |
| Files | `web-bff/api/v1/files/*` (common `createDefaultLinImageUploadApi`) |
| mfeStdUrl | `http://localhost:9304/patrol` |

## Step 4b BE ALIGN

- Schema_* MediaIds add-column only · sessions CRUD widen · **cấm** ERP.Service.*
- BFF proxy-only · FileService reuse outside Patrol BFF

## Build

```
yarn build (Linm.Web.RMMS.Field) → PASS (webpack · size warnings only)
dotnet build RMMS.Service.Api -c Release → PASS (0 Error(s))
dotnet build LINM.RMMS.Patrol.Bff -c Release → PASS (0 Error(s))
```

## Debt

- Kind E+F map/tracks **P2**
- child table media **P2**
- `code` readOnly leftover **P2**
- GAP-QA-PAT-CODE-DISABLED **P2**
- LinImageUpload `maxBytes` UI hint = 50MB video; image 10MB enforced in `createPatrolMediaUploadApi.init`
