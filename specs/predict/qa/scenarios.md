# QA — scenarios — predict

| Field | Value |
|-------|-------|
| feature | `predict` |
| status | `done` |
| mode | static review (e2eQa OFF) |
| mfeStdUrl | `http://localhost:9303/ai-vision/predict` |
| skillVersion | `2026.08.16.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T10:40:00.000Z` |

## Build gate (precondition)

| Gate | Result |
|------|--------|
| FE typecheck | PASS |
| FE build | PASS |
| BE API Release | PASS |
| BE BFF Release | PASS |

## Scenarios (static)

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-01 | Open S-LIST | Title · KPI · grid · footer pagination | PASS (code review) |
| QA-02 | Filter route/horizon/topN/scoreMin | List refreshes | PASS |
| QA-03 | Batch predict | Toast + list refresh | PASS |
| QA-04 | Row Xem → slideout | Features · drivers · chart · note | PASS |
| QA-05 | Edit note dirty → close | LeaveConfirmModal | PASS |
| QA-06 | Lưu ghi chú | Persist note · dirty clear | PASS |
| QA-07 | Chạy lại dự báo | Score update · audit row | PASS |
| QA-08 | Ưu tiên đại tu / Gắn KT BT | Toast stub · no WO | PASS |
| QA-09 | No AI badge on header | ai-chrome-skip | PASS |
| QA-10 | History | Catalog history / section audit | PASS |
| QA-11 | Create/Delete stub | CRUD codes wired | PASS |
| QA-12 | API path domain | `ai-vision/predict` not `ai-predict` | PASS |

## Gaps (non-blocking)

- Export / Dashboard = toast stub
- Real ML model OUT P1
- E2E browser OFF this packet

## Handoff → Review

Static QA done · build PASS · mfeStdUrl ready

---
<!-- Version meta: skillVersion=2026.08.16.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
