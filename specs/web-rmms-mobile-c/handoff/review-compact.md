# Handoff compact — review

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T09:26:00.000Z
taskId: task_7bdcc35e
contentHash: sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4
review_confirm: done
autoApprove: ON
e2eQa: ON (already ran QA · cấm re-e2e ở review)
mfeStdUrl: http://localhost:9301/web-rmms-mobile-c
verdict: PASS

## Decisions
- changeScope: edit_page
- formPattern: Full (TK-02 list · TK-03 form · TK-04 review · TK-05 recheck) · phone 430 · LeaveConfirmModal
- Kind B grid/filter: **WAIVE**
- QUERY/SEC/UI-FN/BE-FN: **PASS** · Must **0**
- soft: RequirePermission TODO · stock e2e :5101 · PUT findings edit N/A
- hash unchanged · skip re-analy
- cấm ERP.* · BE Patrol findings + journal review
- review_confirm=done · autoApprove · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| findingList | danh mục | List cards | GET findings?sessionId&status&route |
| filter.status/route | lọc | Chip/Select | phone · KindB WAIVE |
| source…mediaIds | form fields | LOOKUP+GPS+File | TK-03 · GPS HARD |
| review/reviewNote | khớp/lệch | Radio+Text | PUT journal review |
| createFromLech | lập phiếu | Button | → TK-03 prefill |
| recheckResult/confirmDone | kết luận | Radio+Button | POST …/recheck |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05 · DES-LEAVE
- QA PNG S0/S1/QA-20 Aligned
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-c

## API / tasks (ids only)
- PATH: GET/POST findings · GET/{id} · POST …/recheck · PUT journal-lines/{id}/review
- SEC: XCO get · tenant company · PERM soft TODO · GPS reject 0,0
- T-* all done · T-QA-FILTER WAIVE
- findings: specs/web-rmms-mobile-c/review/findings.md

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/handoff/qa-compact.md
