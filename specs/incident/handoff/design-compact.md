# handoff-compact — design → sa · incident

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `design` |
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| design_confirm | `approve` |
| taskId | `task_e0587959` |
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
| design | `specs/incident/ui/design.md` |
| prototype | `specs/incident/ui/prototype/incident-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/prototype/incident-list-prototype.html` |
| prior compact | `handoff/po-compact.md` · `handoff/data_analy-compact.md` |

## § Delta (NEW P1)

| ID | Design chốt | Owner next |
|----|-------------|------------|
| GAP-INC-MEDIA-01 | DES-FORM-Z2-MEDIA · FileUpload · `files/*` · fileIds/attachmentKeys · optional | SA/Dev |
| GAP-INC-MEDIA-HARD | cấm invent FilesController · `/implement-file-service` · persist presigned · ERP.* | SA/Dev |
| GAP-QA-BFF-INIT-01 | cite only · BFF init-data → 200 | SA/Dev/QA |

## Kind / zones

| Zone | Pattern |
|------|---------|
| List | Kind B A–D **KEEP** · **cấm** rewrite |
| Form | Kind D slideout Z1–Z3 footer-only |
| Media | **DES-FORM-Z2-MEDIA** · `data-zone=upload` · sau Mô tả · View gallery resign |
| Map | Kind F DEFER |

## Controls (delta only)

| key | controlHint | cite |
|-----|-------------|------|
| mediaFiles | FileUpload | `web-bff/api/v1/files/*` · FileService.Bff · host `RMMS.Service.Bff` |
| init-data | LOOKUP_STATIC | BFF proxy fix **200** |

## Screens / Leave

- S-LIST `/su-co` · S-FORM-* Slideout + media · S-SKIP-MAP
- LeaveConfirmModal · files fail toast · **cấm** alert/confirm
- Media optional P1 · dirty on add/remove · **cấm** cột grid media

## Zone ids

DES-GRID-A · B · FILTER · C0–C3 · D · F · H · Z · **DES-FORM-Z2-MEDIA** · DES-MOD-LEAVE · DES-MOD-CONFIRM

## Bind prefix

- CRUD: `api/v1/incident/incidents` · BFF `web-bff/api/v1/incident/incidents`
- Files: `web-bff/api/v1/files/*`
- Table: `rmms_incidents`

## Decisions keep

- Q-INC-01/02/03 · FormType CRUD CLOSED · route_keep `/su-co`
- GAP-INC-ORG-01 · GAP-RPT-SRC-INC-* · GAP-INC-MAP-01 = DEFER
- Prior ROUTE/TYPE/HIST/FOOTER = CLOSED

## Handoff next

| Role | Do |
|------|----|
| SA | BFF init + FileService confirm · schema fileIds |
| TL/Dev | Tasks **chỉ** 2 GAP NEW (+ HARD) |
| QA | After Dev · re-queue e2e |

## Cấm

- ERP.* · invent FilesController · persist presigned · rewrite list A–D · re-scan demo · e2e/start:std ở Design

<!-- compact schemaVersion=1 role=design feature=incident taskId=task_e0587959 -->
