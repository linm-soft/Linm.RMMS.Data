# handoff-compact — po → design · incident

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `po` |
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_900ecdd8` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| skillVersion | `2026.08.25.02` |
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
| requirement | `specs/incident/po/requirement.md` |
| control-hint | `specs/_data-analy/features/incident-control-hint.md` |
| real-data | `specs/_data-analy/features/incident-real-data.md` |
| prior compact | `specs/incident/handoff/data_analy-compact.md` |
| keep Design | `specs/incident/ui/design.md` + prototype |

## § Delta (mandatory · NEW P1)

| ID | Current → New | Owner |
|----|---------------|-------|
| GAP-QA-BFF-INIT-01 | BFF init-data **404** → proxy **200** · `qa_fail_rollback` | SA/Dev/QA |
| GAP-INC-MEDIA-01 | no upload → FileUpload `web-bff/api/v1/files/*` · FileService.Bff | Design/SA/Dev |
| GAP-INC-MEDIA-HARD | cấm `/implement-file-service` · copy FilesController · persist presigned · ERP.* | SA/Dev |

## Kind / zones

| Zone | Pattern |
|------|---------|
| List | Kind B A–D (keep · **cấm** rewrite) |
| Form | Kind D slideout + **mediaFiles** FileUpload |
| Map | Kind F DEFER MFE |

## Controls (delta only)

| key | controlHint | cite |
|-----|-------------|------|
| mediaFiles | FileUpload | `files/*` · NuGet `Linm.Platform.FileService.Bff` · host `RMMS.Service.Bff` |
| init-data | LOOKUP_STATIC consumer | `GET …/incidents/init-data` fix BFF **200** |

## Grid / Screens / Leave (PO confirm)

- Grid AC: AC-G-01…14 · packKind=`list` · Report AC=N/A
- Screens: S-LIST `/su-co` · S-FORM-* Slideout · media zone · S-SKIP-MAP
- Leave: LeaveConfirmModal · toast · files fail toast · **cấm** alert/confirm
- Media: **optional P1** · write `fileIds`/`attachmentKeys`

## Decisions keep

- Q-INC-01/02/03 = prior defaults keep
- FormType CRUD = CLOSED · **cấm** re-open
- GAP-INC-ORG-01 · GAP-RPT-SRC-INC-* · GAP-INC-MAP-01 = DEFER
- route_keep `/su-co` · reject packet `/incident`

## Bind prefix

- CRUD: `api/v1/incident/incidents` · BFF `web-bff/api/v1/incident/incidents`
- Files: `web-bff/api/v1/files/*`
- Table: `rmms_incidents`

## Handoff next

| Role | Do |
|------|----|
| Design | Prototype + reviewUrl · **media zone** · keep list A–D |
| SA | BFF init + FileService confirm |
| TL/Dev | Tasks **chỉ** 2 GAP NEW (+ HARD) |
| QA | After Dev · re-queue e2e |

## Cấm

- ERP.* · invent FilesController · persist presigned · demo-json SSOT · re-CRUD · re-scan demo · e2e/start:std ở PO

<!-- compact schemaVersion=1 role=po feature=incident taskId=task_900ecdd8 -->
