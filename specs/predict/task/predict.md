# Team-lead — task pack — predict

| Field | Value |
|-------|-------|
| feature | `predict` |
| status | `done` |
| formType | `ai` · S-LIST Kind B+D |
| mfe | `Linm.Web.RMMS.AiVision` |
| route | `/ai-vision/predict` |
| backend | `Linm.RMMS.WebService` · AiVision |
| devSlash | `/agent-dev` |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T10:38:00.000Z` |

## Tasks

| id | page | role | deps | notes |
|----|------|------|------|-------|
| T-CTX-01 | predict | team_lead | — | controlHint + demo + design |
| T-PERM-01 | predict | team_lead | — | `ai-vision.predict.*` |
| T-MIG-01 | predict | dev | — | Schema_RmmsAiVisionPredict |
| T-BE-CRUD-01 | predict | dev | T-MIG-01 | priority-list · CRUD · note · batch · history |
| T-BFF-01 | predict | dev | T-BE-CRUD-01 | AiVisionPredictBffController |
| T-UI-LIST-01 | /ai-vision/predict | dev | T-CTX-01 | LinPageLayout · grid · pagination · KPI · no AI chrome |
| T-UI-FORM-01 | slideout | dev | T-UI-LIST-01 | drivers · chart · note · FormMode |
| T-UI-ACT-01 | predict | dev | T-UI-LIST-01 | batch · rerun · major/attach stub |
| T-UI-LEAVE-01 | slideout | dev | T-UI-FORM-01 | LeaveConfirmModal dirty note |
| T-UI-UX-01 | predict | dev | T-UI-LIST-01 | constitution · score badge |
| T-QA-01 | predict | qa | T-UI-* · T-BE-* | scenarios static |
| T-RV-01 | predict | review | T-QA-01 | findings |

## Source assignment

| Layer | Path |
|-------|------|
| UI | `src/pages/PredictListPage/` · `src/services/predict/` · `src/demo/predictStore.ts` |
| BE | Domains/AiVision Controllers/Services · Models PredictDtos · Entities Predict* |
| BFF | `bff/domains/ai-vision/.../AiVisionPredictBffController.cs` |

## Handoff → Dev

beRepo+uiRepo confirmed (run packet) · peer Estimate · build HARD before QA

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
