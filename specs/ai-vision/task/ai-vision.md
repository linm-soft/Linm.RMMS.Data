# Team lead — tasks — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `confirmed` |
| updatedAt | 2026-08-08T08:45:00.000Z |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| BE API/BFF | `D:/ERP/Linm.Web.ERP.WebService` |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/ai-vision/` |
| Context | `Linm.RMMS.Data/docs/context/features/ai-vision.md` |

## Tasks

| id | page | layer | role | deps | skills | status | DoD |
|----|------|-------|------|------|--------|--------|-----|
| T-BE-01 | detections | api | dev | — | create-bff-api-feature | pending | Entity+DTO+Service+Controller+DI · build PASS |
| T-BE-02 | ai-vision | bff | dev | T-BE-01 | create-bff-api-feature | pending | AiVisionBffController · build PASS |
| T-BE-03 | detections | migration | dev | T-BE-01 | database-migration | pending | Schema_RmmsAiVisionDetections |
| T-FE-01 | /ai-vision | ui-list | dev | — | erp-form-context Kind B | pending | LinPageLayout catalog · build PASS |
| T-FE-02 | /ai-vision/:id | ui-form | dev | T-FE-01 | erp-form-context | pending | C/E/V/Copy · incident · build PASS |
| T-FE-03 | client | ui-api | dev | T-BE-01,T-FE-01 | — | pending | `/ai-vision/detections` + fallback |
| T-QA-01 | ai-vision | qa | qa | T-FE-02,T-BE-02 | — | pending | scenarios.md |
| T-RV-01 | ai-vision | review | review | T-QA-01 | review-query | pending | findings.md |

## Deps order

T-BE-01 → T-BE-02 / T-BE-03 → T-FE-03 → T-FE-01 → T-FE-02 → T-QA-01 → T-RV-01
