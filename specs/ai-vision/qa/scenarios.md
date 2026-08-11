# QA — scenarios — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `done` |
| mfeStdUrl | `http://localhost:9303/ai-vision` |
| skillVersion | `2026.08.08.31` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.08.31` |
| versionGate | `ok` |
| updatedAt | `2026-08-08T16:39:00.000Z` |

## Smoke (standalone)

| # | Scenario | Steps | Expect |
|---|----------|-------|--------|
| Q1 | List load | Open mfeStdUrl | Grid + badges P1/AI · skeleton then rows (API or localStorage) |
| Q2 | Search | Type code/class · Tìm | Page reset 1 · filtered rows |
| Q3 | Filters | Dropdown class/sev/status/engine | AND with search |
| Q4 | Pagination | Change pageSize · next page | Footer LinCatalogListPagination updates · server/local page |
| Q5 | Row menu | Open ⋯ · Xem/Sửa/Sao chép | Navigate form modes |
| Q6 | Critical incident | Draft+Critical · Tạo Vấn đề | status IncidentCreated · VI-* |
| Q7 | Create | Toolbar + · fill required · Lưu | New DET-* in list |
| Q8 | View readonly | Open View | Fields not editable (not disabled-gray anti-pattern) |
| Q9 | Toolbar config | fa-cog | Hint modal opens/closes |
| Q10 | Build gate | typecheck + build + BE build | PASS (recorded implement) |

## Notes

- Map Kind F / real GPT infer OUT pack — not tested.
- BFF/API optional when FE fallback active.

---
<!-- Version meta: skillVersion=2026.08.08.31 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.08.31 · versionGate=ok -->
