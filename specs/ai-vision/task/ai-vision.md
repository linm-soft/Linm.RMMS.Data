# Team lead — tasks — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `confirmed` |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:35:00.000Z` |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| BE API/BFF | `D:/AI-QLBD/Linm.RMMS.WebService` · domain `AiVision` |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/ai-vision/` |
| Context | `Linm.RMMS.Data/docs/context/features/ai-vision.md` |
| controlHint | `specs/_data-analy/features/ai-vision-control-hint.md` |

**Cấm:** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP.

## Retry SSOT (HARD — trước Dev Write)

Dev **MUST** re-audit live list per `tl-retry-ssot-rereview.md`:

1. 1× LinPageLayout — cấm nested CatalogListShell  
2. Footer = LinCatalogListPagination — cấm footerPagination / pageSizeBar  
3. Flex + useServerPagedListLoading skeleton  
4. Toolbar refresh · history · config · +Thêm  
5. SearchTextInput + filters  
6. LinCatalogDataGrid columnDefs · resize default ON  
7. Form C/E/V/Copy checklist  

Ghi `retry.ssot_rereview` trên implement MD. **Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface.

## Tasks

| id | page | layer | role | deps | skills | status | DoD |
|----|------|-------|------|------|--------|--------|-----|
| T-CTX-01 | ai-vision | docs | team_lead | — | — | done | Context+demo+controlHint linked |
| T-PERM-01 | ai-vision | ui | team_lead | — | tl-ssot-permission | done | useAiVisionPermissions stub |
| T-UI-LIST | /ai-vision | ui-list | dev | T-CTX-01 | erp-form-context Kind B · retry SSOT | pending | Zones A–D · LinCatalogListPagination · LinCatalogDataGrid · build PASS |
| T-UI-FORM | /ai-vision/:id | ui-form | dev | T-UI-LIST | erp-form-context | pending | C/E/V/Copy · incident · build PASS |
| T-BE-01 | detections | api | dev | — | create-bff-api-feature | pending | Entity+DTO+Service+Controller+DI · build PASS |
| T-BE-02 | ai-vision | bff | dev | T-BE-01 | create-bff-api-feature | pending | BFF proxy · build PASS |
| T-BE-03 | detections | migration | dev | T-BE-01 | database-migration | pending | Schema_RmmsAiVisionDetections named |
| T-QA-01 | ai-vision | qa | qa | T-UI-FORM,T-BE-02 | — | pending | scenarios.md |
| T-RV-01 | ai-vision | review | review | T-QA-01 | review-query | pending | findings.md |

## Deps order

T-CTX/T-PERM → T-BE-01 → T-BE-02/T-BE-03 + T-UI-LIST → T-UI-FORM → verify builds → T-QA → T-RV

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
