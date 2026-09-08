# handoff-compact — qa → review · incident

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| role | `qa` |
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| verdict | `PASS` |
| taskId | `task_715a9115` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.25.02` |
| autoApprove | `ON` |
| e2eQa | `ON` · S0/S1/QA-20 **PASS** |
| design_confirm | `approve` |
| solution_confirm | `approve` |
| route_confirm | `route_keep` `/su-co` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| runMode | `fill_gaps` · `qa_fail_rollback` cleared |
| writtenAt | `2026-09-06T19:22:00.000Z` |

## Artifacts (full)

| Kind | Path |
|------|------|
| scenarios | `specs/incident/qa/scenarios.md` |
| screens | `specs/incident/qa/screens/{S0,S1,QA-20}.png` + `manifest.json` |
| prior compact | `handoff/dev-compact.md` · team_lead · sa · design · po · data_analy |

## § Delta verify

| ID | QA result |
|----|-----------|
| GAP-QA-BFF-INIT-01 | **CLOSED** · BFF init-data **200** |
| GAP-INC-MEDIA-01 | **CLOSED** · LinImageUpload + files/init **401** + mediaIds |
| GAP-INC-MEDIA-HARD | lock kept |

## E2E

| Case | Result | Note |
|------|--------|------|
| S0 | PASS | list `rmms-incident-list-page` |
| S1 | PASS | filter status «Mới» |
| QA-20 | PASS | `?form=create` slideout |
| method | fallback | chromium-1187 `executablePath` · yarn e2e-qa install hung |

## Tasks

- **T-QA-MEDIA-01** done · **T-QA-CRUD-01** done · T-QA-FILTER/FORM prior PASS
- next: **review** pending

## Debt / note

- File.Api `:5018` may be down → upload 2xx needs File.Api · BFF route OK
- Packet `/incident` rejected · SSOT `/su-co`

## Handoff next

| Role | Do |
|------|----|
| Review | `/agent-review*` · findings · autoApprove |
| — | **cấm** phase=done |

## Cấm

- ERP.* · invent FilesController · persist presigned · rewrite A–D · re-CRUD · kill worker node/yarn

<!-- compact schemaVersion=1 role=qa feature=incident taskId=task_715a9115 verdict=PASS -->
