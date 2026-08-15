# Team lead — tasks — copilot

| Field | Value |
|-------|-------|
| feature | `copilot` |
| status | `confirmed` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-15T13:08:00.000Z` |

## Source assignment

| Layer | Source |
|-------|--------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Copilot` |
| BE API/BFF | `D:/AI-QLBD/Linm.RMMS.WebService` · domain `Copilot` |
| Demo SSOT | `Linm.RMMS.Demo/src/demo/copilot/` |
| Context | `Linm.RMMS.Data/docs/context/features/copilot.md` |

**Cấm:** `Linm.Web.ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` ERP.

## Retry SSOT (HARD — trước Dev Write)

Dev **MUST** re-audit live list per `tl-retry-ssot-rereview.md`:

1. 1× LinPageLayout — cấm nested CatalogListShell  
2. Footer = LinCatalogListPagination — cấm footerPagination / pageSizeBar  
3. Flex + useServerPagedListLoading skeleton  
4. Toolbar refresh · history · config · +Thêm (Phiên mới)  
5. SearchTextInput + filters  
6. LinCatalogDataGrid columnDefs · resize default ON  
7. Drawer chat checklist (Kind D) — leave-confirm nháp · disclaimer  

Ghi `retry.ssot_rereview` trên implement MD. **Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface.

## Tasks

| id | page | layer | role | deps | skills | status | DoD |
|----|------|-------|------|------|--------|--------|-----|
| T-CTX-01 | copilot | docs | team_lead | — | — | done | Context+demo+control-map linked |
| T-PERM-01 | copilot | ui | team_lead | — | tl-ssot-permission | done | copilotListPermissions stub |
| T-UI-LIST | /copilot | ui-list | dev | T-CTX-01 | erp-form-context Kind B · retry SSOT | pending | Zones A–D · LinCatalogListPagination · LinCatalogDataGrid · build PASS |
| T-UI-DRAWER | /copilot drawer | ui-form | dev | T-UI-LIST | Kind D · agent-dev-ai-detect HITL n/a (chat) | pending | Chat · prompts · feedback · rate · disclaimer |
| T-BE-01 | sessions/chat | api | dev | — | new-endpoint · create-bff-api-feature | pending | Entity+DTO+Service+Controller+DI · build PASS |
| T-BE-02 | copilot | bff | dev | T-BE-01 | create-bff-api-feature | pending | BFF proxy · build PASS |
| T-BE-03 | sessions | migration | dev | T-BE-01 | database-migration | pending | Schema_RmmsCopilotSessions named |
| T-QA-01 | copilot | qa | qa | T-UI-DRAWER,T-BE-02 | — | pending | scenarios.md · T-UI-UX-01 |
| T-RV-01 | copilot | review | review | T-QA-01 | review-query | pending | findings.md |

## Deps order

T-CTX/T-PERM → T-BE-01 → T-BE-02/T-BE-03 + T-UI-LIST → T-UI-DRAWER → verify builds → T-QA → T-RV

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
