# Design — ai-vision (AI kiểm định mặt đường)

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| Feature Kind | **B** — Catalog list + form |
| status | `confirmed` (autopilot · design_confirm=approve) |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:33:00.000Z` |

## Prototype + reviewUrl (REQUIRED)

| Artifact | Path |
|----------|------|
| Prototype HTML | [`ui/prototype/ai-vision-list-prototype.html`](./prototype/ai-vision-list-prototype.html) |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html` |
| Demo SSOT | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/ai-vision-demo.html` |

> Autopilot: design_confirm=approve.

## Zones A–D (list-shell-prototype · content-only)

| Zone | Content |
|------|---------|
| A Header | Title **AI kiểm định mặt đường** · badges P1 online · AI support |
| B Filters | SearchTextInput + Dropdown defectClass/severity/status/engine |
| C Grid | LinCatalogDataGrid · column resize default · row menu |
| D Footer | **LinCatalogListPagination** (Tổng · pageSize · FA pager) — **cấm** footerPagination generic / pageSizeBar |

## Shell

- Root `data-catalog-list-page`
- **1** `LinPageLayout kind="catalog"` — cấm nested CatalogListShell
- `catalogToolbar`: +Thêm · refresh · history · config fa-cog
- `useServerPagedListLoading` · skeletonRows
- Form full page Create/Edit/View/Copy (not modal this pack)

## Handoff → SA

API `api/v1/ai-vision/detections` + BFF · soft delete · tenant · search+filters+page/pageSize

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
