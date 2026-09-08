# handoff-compact — sa → team-lead · incident

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `sa` |
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| solution_confirm | `approve` |
| taskId | `task_343230dc` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.25.02` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| runMode | `full_pipeline` · `qa_fail_rollback` |

## Artifacts (full)

| Kind | Path |
|------|------|
| solution | `specs/incident/be/solution-discovery.md` |
| prior compact | `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md` |
| keep | API-01…08 · FormMode · LKP · `rmms_incidents` · list A–D |

## § Delta (NEW P1 · TL/Dev ONLY)

| ID | SA chốt | Layer |
|----|---------|-------|
| GAP-QA-BFF-INIT-01 | Source `GetInitData` **có** · live BFF **404** → rebuild/redeploy host → **200** · **cấm** invent path | BFF |
| GAP-INC-MEDIA-01 | FileService.Bff `files/*` · DTO/`IncidentEntity.MediaIds` CSV max 10 · FE FileUpload | BFF+API+FE |
| GAP-INC-MEDIA-HARD | cấm invent FilesController · `/implement-file-service` · persist presigned · ERP.* | lock |

## FileService / persist

| Field | Value |
|-------|-------|
| NuGet | `Linm.Platform.FileService.Bff` · host `RMMS.Service.Bff` |
| Routes | `web-bff/api/v1/files/*` |
| Wire | `mediaIds` `List<string>?` (= fileIds/attachmentKeys) |
| DB | `MediaIds` varchar(2000) CSV · mig `Schema_RmmsIncidents_MediaIds` (Dev 4b) |
| Peer | Patrol MediaIds |
| Dev slash | `/init-bff-file` · `/integrate-file-upload-web` · `/agent-dev` |

## FormMode ↔ API (delta)

| Mode | mediaIds |
|------|----------|
| create/edit | replace-all after files/* upload |
| view | resign gallery · cấm persist URL |
| list | **cấm** cột media |

## Gates / route

- tz_na · xco_get_only · share_tenant · file_service_bff_reuse
- route_keep `/su-co` · reject `/incident`
- FormType CRUD **CLOSED**

## Bind prefix

- CRUD: `api/v1/incident/incidents` · BFF `web-bff/api/v1/incident/incidents`
- Files: `web-bff/api/v1/files/*`
- Table: `rmms_incidents`

## Handoff next

| Role | Do |
|------|----|
| TL | Tasks **chỉ** 2 GAP NEW (+ HARD) · **cấm** re-CRUD |
| Dev | BFF init 200 + FileService + MediaIds mig/DTO/FE |
| QA | After Dev · re-queue e2e |

## Cấm

- ERP.* · invent FilesController · persist presigned · rewrite A–D · e2e/start:std/Step4b ở SA

<!-- compact schemaVersion=1 role=sa feature=incident taskId=task_343230dc -->
