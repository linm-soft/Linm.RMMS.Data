# Team lead — tasks — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `confirmed` |
| updatedAt | 2026-08-08T12:20:00.000Z |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| BE API/BFF | `D:/AI-QLBD/Linm.RMMS.WebService` · domain `AiVision` |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/ai-vision/` |
| Context | `Linm.RMMS.Data/docs/context/features/ai-vision.md` |

**Cấm:** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP.

## Tasks

| id | page | layer | role | deps | skills | status | DoD |
|----|------|-------|------|------|--------|--------|-----|
| T-BE-01 | detections | api | dev | — | create-bff-api-feature | in_progress | Entity+DTO+Service+Controller+DI · build PASS |
| T-BE-02 | ai-vision | bff | dev | T-BE-01 | create-bff-api-feature | pending | Detections BFF proxy · build PASS |
| T-BE-03 | detections | migration | dev | T-BE-01 | database-migration | pending | Schema_RmmsAiVisionDetections |
| T-FE-01 | /ai-vision | ui-list | dev | — | erp-form-context Kind B | done | LinPageLayout catalog · build PASS |
| T-FE-02 | /ai-vision/:id | ui-form | dev | T-FE-01 | erp-form-context | done | C/E/V/Copy · incident · build PASS |
| T-FE-03 | client | ui-api | dev | T-BE-01,T-FE-01 | — | done | `/ai-vision/detections` + fallback |
| T-QA-01 | ai-vision | qa | qa | T-FE-02,T-BE-02 | — | pending | scenarios.md |
| T-RV-01 | ai-vision | review | review | T-QA-01 | review-query | pending | findings.md |

## Deps order

T-BE-01 → T-BE-02 / T-BE-03 → verify FE build → T-QA-01 → T-RV-01
