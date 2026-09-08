# handoff-compact — team_lead → dev · incident

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `team_lead` |
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_554b5a39` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.08.25.02` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| design_confirm | `approve` |
| solution_confirm | `approve` |
| route_confirm | `route_keep` `/su-co` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| runMode | `fill_gaps` · `qa_fail_rollback` |
| writtenAt | `2026-09-07T01:52:00.000Z` |

## Artifacts (full)

| Kind | Path |
|------|------|
| task | `specs/incident/task/incident.md` |
| prior compact | `handoff/sa-compact.md` · `design` · `po` · `data_analy` |
| keep | list A–D · FormType CRUD CLOSED · API-01…08 · LKP · filter |

## § Delta (NEW P1 · Dev ONLY)

| ID | TL chốt | Tasks |
|----|---------|-------|
| GAP-QA-BFF-INIT-01 | BFF init-data 404→200 · rebuild host · cấm invent path | **T-BFF-INIT-02** |
| GAP-INC-MEDIA-01 | FileService.Bff + MediaIds CSV + FE FileUpload | **T-BE-MEDIA-01** · **T-BFF-FILE-01** · **T-UI-MEDIA-01** |
| GAP-INC-MEDIA-HARD | cấm invent FilesController · `/implement-file-service` · persist presigned · ERP.* | lock all |

## FileService / persist

| Field | Value |
|-------|-------|
| NuGet | `Linm.Platform.FileService.Bff` · host `RMMS.Service.Bff` |
| Routes | `web-bff/api/v1/files/*` |
| Wire | `mediaIds` List≤10 · DB `MediaIds` varchar(2000) CSV |
| Mig | `Schema_RmmsIncidents_MediaIds` (Dev 4b) |
| Dev slash | `/agent-dev` · `/init-bff-file` · `/integrate-file-upload-web` |

## Kind / zones

| Zone | Pattern |
|------|---------|
| List | Kind B A–D **KEEP** · **cấm** media col · **cấm** rewrite |
| Form | Kind D + **DES-FORM-Z2-MEDIA** `data-zone=upload` |
| View | resign gallery · cấm persist URL |
| Map | Kind F DEFER |

## Controls (delta only)

| key | controlHint | cite |
|-----|-------------|------|
| mediaFiles / mediaIds | FileUpload | `files/*` · DES-FORM-Z2-MEDIA |
| init-data | LOOKUP_STATIC | BFF proxy **200** |

## API / tasks (ids only)

- **T-BFF-INIT-02** · **T-BE-MEDIA-01** · **T-BFF-FILE-01** · **T-UI-MEDIA-01**
- QA: **T-QA-MEDIA-01** · T-QA-CRUD-01 re-smoke (queued)
- Prior CLOSED: CRUD · filter · form shell · LKP · hist · leave
- next: `/agent-dev` pending

## Gates / route

- route_keep `/su-co` · reject `/incident`
- FormType CRUD **CLOSED** · qa_fail_rollback **active**

## Bind prefix

- CRUD: `api/v1/incident/incidents` · BFF `web-bff/api/v1/incident/incidents`
- Files: `web-bff/api/v1/files/*`
- Table: `rmms_incidents`

## Handoff next

| Role | Do |
|------|----|
| Dev | 4 tasks NEW P1 only · mig MediaIds · BFF init 200 · FileService · FE upload |
| QA | After Dev · re-queue e2e |
| Review | after QA PASS |

## Cấm

- ERP.* · invent FilesController · persist presigned · rewrite A–D · re-CRUD · e2e/start:std/build/Step4b ở TL

<!-- compact schemaVersion=1 role=team_lead feature=incident taskId=task_554b5a39 -->
