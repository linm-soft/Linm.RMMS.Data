# SA — solution-discovery — predict

| Field | Value |
|-------|-------|
| feature | `predict` |
| status | `confirmed` (autopilot · solution_confirm=approve) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **AiVision** · DOMAIN-MAP slug `predict` |
| apiPrefix | `api/v1/ai-vision/predict` |
| bffPrefix | `web-bff/api/v1/ai-vision/predict` |
| skillVersion | `2026.08.15.15` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| formTypePack | `ai` §2c · T-UI-LIST + FORM + ACT + T-BE-CRUD |
| updatedAt | `2026-08-17T10:37:00.000Z` |

> **Cấm** ERP.WebService · Domains/Master · `api/v1/ai-predict` (legacy doc → normalize).

## APIs

| Method | Path | FormMode |
|--------|------|----------|
| GET | `/priority-list` | List |
| GET | `/init-data` | List/Form options |
| GET | `/sections/{sectionId}` | View |
| POST | `/sections` | Create |
| POST | `/sections/{sectionId}` | Re-predict (Act) |
| POST | `/batch` | Act batch |
| PUT | `/sections/{sectionId}/note` | Edit note |
| DELETE | `/sections/{sectionId}` | Delete |
| GET | `/sections/{sectionId}/history` | History |

## Persist

| Entity | Table |
|--------|-------|
| `PredictResultEntity` | `rmms_ai_vision_predict_results` |
| `PredictAuditEntity` | `rmms_ai_vision_predict_audits` |

Migration: `20260817180000_Schema_RmmsAiVisionPredict` · tenant `CompanyCode` · unique `(CompanyCode, SectionId)`.

## BFF

Proxy-only `AiVisionPredictBffController` · Forward `X-Company-Id` / `Authorization`.

## Perms (codes)

`ai-vision.predict.read|create|update|delete|run` · `[RequirePermission]` TODO attr same as Estimate.

## Handoff → TL

Tasks: T-UI-LIST · T-UI-FORM · T-UI-ACT · T-UI-LEAVE · T-BE-CRUD · T-BFF · T-MIG · peer Estimate paths

---
<!-- Version meta: skillVersion=2026.08.15.15 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
