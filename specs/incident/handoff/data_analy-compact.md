# handoff-compact — data_analy → po · incident

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_2ed457c2` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| analyzedAt | `2026-09-07T01:30:00.000Z` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.08.25.02` |
| autoApprove | `ON` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| runMode | `full_pipeline` · `qa_fail_rollback` |

## Artifacts (full)

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/incident-control-hint.md` |
| real-data | `specs/_data-analy/features/incident-real-data.md` |
| context | `docs/context/features/incident.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/incident-demo.html` |
| keep PO | `specs/incident/po/requirement.md` |
| keep Design | `specs/incident/ui/design.md` + prototype |

## § Delta (mandatory)

| ID | Current → New | Owner |
|----|---------------|-------|
| GAP-QA-BFF-INIT-01 | BFF init-data **404** → proxy **200** · `qa_fail_rollback` | SA/Dev/QA |
| GAP-INC-MEDIA-01 | no upload → FileUpload via `web-bff/api/v1/files/*` · FileService.Bff | Design/SA/Dev |
| GAP-INC-MEDIA-HARD | cấm `/implement-file-service` · copy FilesController · persist presigned · ERP.* | SA/Dev |

## Kind / zones

| Zone | Pattern |
|------|---------|
| List | Kind B A–D (keep) |
| Form | Kind D slideout + **mediaFiles** FileUpload |
| Map | Kind F DEFER MFE |

## Controls (delta only)

| key | controlHint | cite |
|-----|-------------|------|
| mediaFiles | FileUpload | `files/*` · NuGet `Linm.Platform.FileService.Bff` · host `RMMS.Service.Bff` |
| init-data | LOOKUP_STATIC consumer | `GET …/incidents/init-data` fix BFF |

## Bind prefix

- CRUD: `api/v1/incident/incidents` · BFF `web-bff/api/v1/incident/incidents`
- Files: `web-bff/api/v1/files/*`
- Table: `rmms_incidents`

## Open / defer

- GAP-INC-ORG-01 · GAP-RPT-SRC-INC-* · GAP-INC-MAP-01 = DEFER
- FormType CRUD = CLOSED · **cấm** re-open
- Q-INC-01/02/03 = prior defaults keep

## Handoff next

| Role | Do |
|------|----|
| PO | Patch requirement § Delta only · keep prior |
| Design | Prototype + reviewUrl · media zone |
| SA | BFF init + FileService confirm |
| TL/Dev | Tasks chỉ 2 GAP NEW |
| QA | After Dev · re-queue e2e |

## Cấm

- ERP.* · invent FilesController · persist presigned URL · demo-json SSOT · yarn build ở data_analy

<!-- compact schemaVersion=1 role=data_analy feature=incident taskId=task_2ed457c2 -->
