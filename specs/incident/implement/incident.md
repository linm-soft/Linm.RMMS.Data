# Implement — incident (Dev · fill_gaps P1 · qa_fail_rollback)

| Field | Value |
|-------|-------|
| feature | `incident` |
| this role | `dev` · `/agent-dev` |
| status | `done` (autoApprove=ON · DoR PASS) |
| packKind | `list` |
| changeScope | `edit_page` |
| runMode | `fill_gaps` · `qa_fail_rollback` · gap=`bff_init` + `media_upload` |
| taskId | `task_f7a94b25` |
| prior · team_lead | `confirmed` · `task/incident.md` · `task_554b5a39` · compact `handoff/team_lead-compact.md` |
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/su-co` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/incident/incidents` · **cấm ERP.*** |
| updatedAt | `2026-09-06T19:05:00.000Z` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |

**Cấm** rewrite list A–D · **cấm** re-CRUD · **cấm** invent FilesController · **cấm** e2e / `yarn start:std` (queued `/agent-qa*`).

---

## Gaps closed (P1 · NEW only)

| Task | Result |
|------|--------|
| T-BFF-INIT-02 | Live `GET web-bff/…/incidents/init-data` **HTTP 200** (proxy keep · no invent path) · closes **GAP-QA-BFF-INIT-01** |
| T-BE-MEDIA-01 | `MediaIds` varchar(2000) CSV · DTO `mediaIds` List≤10 · replace-all · mig `Schema_RmmsIncidents_MediaIds` |
| T-BFF-FILE-01 | NuGet `Linm.Platform.FileService.Bff` 1.1.0 · `AddLinmFileServiceBff` + controllers · `ServiceEndpoints:FileService` · routes `web-bff/api/v1/files/*` |
| T-UI-MEDIA-01 | `LinImageUpload` DES-FORM-Z2-MEDIA · `data-zone=upload` · View gallery resign · guid-only persist |

**KEEP:** list A–D · FormType CRUD CLOSED · API-01…08 · LKP · filter · hist · leave

**DEFER:** GAP-INC-ORG-01 · GAP-RPT-SRC-INC-* · GAP-INC-MAP-01

---

## Files touched

### BE (`Linm.RMMS.WebService`)
- `IncidentEntity.cs` · `IncidentDtos.cs` · `IncidentRecordService.cs` — MediaIds CSV serialize/parse
- `AppDbContext.cs` · `Migrations/20260906190000_Schema_RmmsIncidents_MediaIds.cs` · snapshot
- `bff/.../Program.cs` · `RMMS.Service.Bff.csproj` · appsettings(+Docker) · `docker-compose.yml` — FileService endpoint

### FE (`Linm.Web.RMMS.Field`)
- `src/services/incident/mediaUpload.ts` (new)
- `requestModel.ts` · `responseModel.ts` · `incidentService.ts` · `demo/incidentStore.ts`
- `IncidentFormPage.tsx` (+ CSS) — DES-FORM-Z2-MEDIA after Mô tả

---

## Build (HARD)

| Gate | Result |
|------|--------|
| `dotnet build` RMMS.Service.Api | **PASS** 0 warn / 0 err |
| `dotnet build` RMMS.Service.Bff | **PASS** (1 pre-existing CS8604 HomeShell) |
| MFE `yarn build` | **PASS** exit 0 (asset size WARN only) |
| Overlay / webpack module-export fail | none |

---

## Verify notes (Dev)

- Route keep `/su-co` · reject `/incident`
- BFF init-data live **200** (curl `localhost:5201`)
- Files BFF registered (NuGet · no local FilesController)
- Media optional P1 · dirty on add/remove · **cấm** grid media col
- Persist guid only · **cấm** presigned URL

E2E / live smoke: **queued** `/agent-qa*` only.

---

## Handoff → QA

| Field | Value |
|-------|-------|
| Next | `/agent-qa` · T-QA-MEDIA-01 · T-QA-CRUD-01 re-smoke · T-PILOT-01 |
| mfeStdUrl | `http://localhost:9304/su-co` |
| API | `api/v1/incident/incidents` (+ mediaIds) · init-data · files `web-bff/api/v1/files/*` |
| blockedReason | none for Dev DoR · FileService API host may be down → upload 5xx until File.Api up (QA note) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-09-06T19:05:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad |
| teamLeadSkillVersion | 2026.08.19.04 |
| taskId | `task_f7a94b25` |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.25.02 schemaVersion=2 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHash=sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad taskId=task_f7a94b25 -->
