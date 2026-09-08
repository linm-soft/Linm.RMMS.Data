# Review findings — incident

> Status: **done**  
> Mode: `review_only` · autoApprove=**ON** · `review_confirm`=**done**  
> reviewHash: `sha256:f97d7887de42851b5759a8e8adb8b3cb9fd80ba8e4c7cb68de3efc438b56e021` · rulesVersion: `2026.08.28.4`

| Field | Value |
|-------|-------|
| feature | `incident` |
| packKind | `list` |
| changeScope | `edit_page` |
| taskId | `task_3c03bd81` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| route_confirm | `route_keep` `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| prior QA | `task_715a9115` · S0/S1/QA-20 **PASS** · manifest `qa/screens/manifest.json` |
| live shell | **skip** roleOnly=review · **cấm** start:std · evidence = QA PNG+manifest + code |
| hashSkip | **no** · prior `REVIEW-META` draft · delta BFF-init + media |

## Scope

| Surface | Repo / path |
|---------|-------------|
| UI list+slideout | `Linm.Web.RMMS.Field` · `/su-co` · IncidentListPage + IncidentFormPage |
| BE | `Linm.RMMS.WebService` · `api/v1/incident/incidents` · **cấm ERP.*** |
| BFF | `web-bff/api/v1/incident/incidents` + `files/*` · `AddLinmFileServiceBff` |
| Delta | GAP-QA-BFF-INIT-01 · GAP-INC-MEDIA-01 · GAP-INC-MEDIA-HARD |

## Findings

| ID | Class | Sev | Where | Repro | Disposition |
|----|-------|-----|-------|-------|-------------|
| REV-Q-01 | query | — | IncidentRecordService · tenant filter · init-data catalogs | list/filter + init | **PASS** |
| REV-S-01 | security | P2 | `[RequirePermission]` stub peer pattern | Auth DEFER | **Debt** keep |
| REV-S-02 | security | — | files/* · MediaIds CSV guid · no presigned persist | upload path | **PASS** HARD |
| REV-UI-01 | ui-fn | — | Kind B A–D + filter + slideout footer | QA S0/S1/QA-20 | **PASS** |
| REV-UI-02 | ui-fn | — | DES-FORM-Z2-MEDIA · LinImageUpload · mediaIds≤10 | form create/edit | **PASS** |
| REV-UI-LAYOUT-06 | ui-fn | — | list shell title+toolbar+grid | QA S0 | **PASS** (evidence) |
| REV-UI-SLIDE-01 | ui-fn | — | slideout footer-only | QA-20 | **PASS** |
| REV-BE-01 | be-fn | — | BFF GetInitData → API init-data | live QA 200 | **PASS** · GAP closed |
| REV-BE-02 | be-fn | — | MediaIds CSV + mig Schema_RmmsIncidents_MediaIds | DTO/entity | **PASS** |
| REV-BE-03 | be-fn | — | domain Incident only · no ERP.* | path scan | **PASS** |
| REV-INFO-01 | info | P3 | File.Api `:5018` may be down | upload 2xx needs File.Api | Accept · BFF 401 OK |

**P0/P1 open:** none · **fix_gaps:** none

## Query (`/review-query`)

- Field SSOT bind `api/v1/incident/incidents` · BFF proxy · MediaIds serialize/parse CSV ≤10  
- Init-data LOOKUP_STATIC via BFF ForwardAsync · **200** (QA)  
- List filters routeName+incidentType+status prior · tenant HasQueryFilter  
- N+1/OOM: flat list page · no nested load gap

## Security

- JWT/BFF peer · X-Company-Id GetById claim prior OK  
- Permission attribute stub = peer debt (**REV-S-01** P2) · **cấm** invent FilesController  
- Media: ids only · resign gallery view · **cấm** persist presigned  
- No secrets in FE incident path · no ERP.* / citizen-incidents

## UI / BE function

- List Kind B A–D **KEEP** · **cấm** media col · filter LinErpListFilterBar (QA S1)  
- Form Kind D slideout + DES-FORM-Z2-MEDIA · LinImageUpload purpose `incident-media`  
- FormType CRUD ACT/DELETE/ASSIGN-CLOSE **CLOSED** prior · **cấm** re-open  
- BFF init-data proxy present (`IncidentsBffController.GetInitData`)  
- NuGet FileService.Bff 1.1.0 · host `RMMS.Service.Bff`  
- QA e2e S0/S1/QA-20 PASS · GAP-QA-BFF-INIT-01 + GAP-INC-MEDIA-01 **CLOSED**

## Confirm

`review_confirm` = **done** (autoApprove ON) · verdict **PASS** · no Dev fix_gaps

## Handoff → Dev

| Gap | Task hint |
|-----|-----------|
| — | none |

## Debt (carry)

- REV-S-01 Auth permission stub P2  
- GAP-INC-ORG-01 / GAP-RPT-SRC-INC-* / GAP-INC-MAP-01 DEFER  
- GAP-QA-E2E-PW-01 info · File.Api local optional  
- GAP-INC-MEDIA-HARD lock kept

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| reviewHash | `sha256:f97d7887de42851b5759a8e8adb8b3cb9fd80ba8e4c7cb68de3efc438b56e021` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| generatedAt | 2026-09-07T02:24:48.578Z |
| versionGate | rechecked |
| taskId | task_3c03bd81 |

<!-- Version meta: skillId=agent-review · skillVersion=2026.08.25.02 · reviewHash=sha256:f97d7887de42851b5759a8e8adb8b3cb9fd80ba8e4c7cb68de3efc438b56e021 · review_confirm=done · verdict=PASS -->
