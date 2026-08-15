# Design — copilot (AI Copilot)

| Field | Value |
|-------|-------|
| feature | `copilot` |
| Feature Kind | **B** catalog sessions + **D** drawer chat |
| status | `confirmed` (autopilot · design_confirm=approve) |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-08-15T13:06:00.000Z` |

## Prototype + reviewUrl (REQUIRED)

| Artifact | Path |
|----------|------|
| Prototype HTML | [`ui/prototype/copilot-list-prototype.html`](./prototype/copilot-list-prototype.html) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/copilot/ui/prototype/copilot-list-prototype.html` |
| Demo SSOT | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/copilot-demo.html` |

> Autopilot: design_confirm=approve.

## UI-Ux P1–7

| # | Rule | Apply |
|---|------|--------|
| 1 | 1 LinPageLayout | Host `/copilot` — **cấm** nested CatalogListShell |
| 2 | LinCatalogDataGrid | Session list · column resize default ON |
| 3 | LinCatalogListPagination | Footer — **cấm** footerPagination / pageSizeBar / raw table |
| 4 | Flex + skeleton | `useServerPagedListLoading` · skeletonRows |
| 5 | Toolbar | Phiên mới · refresh · history · config · Mở Copilot |
| 6 | list_parity | Search + status filter |
| 7 | Drawer Kind D | Slideout chat · leave-confirm nháp · disclaimer |

## Zones

| Surface | Zones |
|---------|--------|
| List A | Title **AI Copilot** · badges AI support · P1 4o-mini · P2 RAG on-prem |
| List B | SearchTextInput + Dropdown status |
| List C | LinCatalogDataGrid sessions |
| List D | LinCatalogListPagination |
| Drawer Z1 | Toolbar đóng / phiên mới / xuất / lưu trữ / xóa · engine badge |
| Drawer Z2 | Prompt chips · message bubbles · citations · chart stub |
| Drawer Z3 | Composer · locale · Gửi · Escalate · disclaimer |

## Handoff → SA

API `api/v1/copilot/sessions` · `POST .../chat` · `POST .../feedback` · BFF `web-bff/api/v1/copilot/**` · tenant · rate 10/min

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
