# handoff-compact — dev → qa · incident

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `dev` |
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_f7a94b25` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| skillVersion | `2026.08.25.02` |
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
| writtenAt | `2026-09-06T19:05:00.000Z` |

## Artifacts (full)

| Kind | Path |
|------|------|
| implement | `specs/incident/implement/incident.md` |
| prior compact | `handoff/team_lead-compact.md` · sa · design · po · data_analy |
| keep | list A–D · FormType CRUD CLOSED · API-01…08 · LKP · filter |

## § Delta (DONE P1)

| ID | Dev result | Tasks |
|----|------------|-------|
| GAP-QA-BFF-INIT-01 | BFF init-data **200** live | **T-BFF-INIT-02** done |
| GAP-INC-MEDIA-01 | FileService.Bff + MediaIds CSV + FE LinImageUpload | **T-BE-MEDIA-01** · **T-BFF-FILE-01** · **T-UI-MEDIA-01** done |
| GAP-INC-MEDIA-HARD | no invent FilesController · no presigned persist · no ERP.* | lock kept |

## FileService / persist

| Field | Value |
|-------|-------|
| NuGet | `Linm.Platform.FileService.Bff` **1.1.0** · host `RMMS.Service.Bff` |
| Routes | `web-bff/api/v1/files/*` |
| Wire | `mediaIds` List≤10 · DB `MediaIds` varchar(2000) CSV |
| Mig | `Schema_RmmsIncidents_MediaIds` (`20260906190000`) |
| FE | `LinImageUpload` · purpose `incident-media` · DES-FORM-Z2-MEDIA |

## Kind / zones

| Zone | Pattern |
|------|---------|
| List | Kind B A–D **KEEP** · **cấm** media col |
| Form | Kind D + **DES-FORM-Z2-MEDIA** `data-zone=upload` |
| View | resign gallery · cấm persist URL |

## Controls (delta)

| key | controlHint | cite |
|-----|-------------|------|
| mediaIds | FileUpload | `files/*` · DES-FORM-Z2-MEDIA |
| init-data | LOOKUP_STATIC | BFF proxy **200** |

## API / tasks

- Done: **T-BFF-INIT-02** · **T-BE-MEDIA-01** · **T-BFF-FILE-01** · **T-UI-MEDIA-01**
- QA next: **T-QA-MEDIA-01** · T-QA-CRUD-01 re-smoke
- APIs: `api/v1/incident/incidents` (+ mediaIds) · `web-bff/api/v1/files/*`

## Build

- yarn build Field **PASS** · dotnet Api+Bff **PASS**

## Debt / note

- FileService API (`:5018`) may be down locally → files/* returns non-404 when BFF up; upload needs File.Api for 2xx
- **cấm** e2e ở Dev

## Handoff next

| Role | Do |
|------|----|
| QA | `/agent-qa*` · media + init-data re-smoke · e2e |
| Review | after QA PASS |

## Cấm

- ERP.* · invent FilesController · persist presigned · rewrite A–D · re-CRUD

<!-- compact schemaVersion=1 role=dev feature=incident taskId=task_f7a94b25 -->
