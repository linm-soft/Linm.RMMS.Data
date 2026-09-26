# Handoff compact — review

schemaVersion: 1
feature: web-rmms-mnt-chat
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T06:44:36.017Z
taskId: task_b3ebe776
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
review_confirm: approve
autoApprove: ON
changeScope: new_page
e2eQa: ON · prior QA PASS (S0/S1/QA-20)

## Decisions
- formPattern: Mobile chat WORK-C · phone ≤430 · LinmChatThread+Composer · #sc-mnt-chat · N/A ERP Modal
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-mnt-chat · mfeStdUrl http://localhost:9301/web-rmms-mnt-chat
- productRoute: /work/chat?id= → alias STD · entry peer WORK-L #i-chat
- be: Mobile.Bff :5202 · GET/POST work-orders/{id}/messages · GET {id} · init-data opt · cấm ERP.* · Step 4b N/A
- Thread P1 flat · no parentId FE · re-GET after POST · cấm SignalR · GPS none
- QUERY/SEC/UI-FN/BE-FN: **PASS** · P0=0 · hash skip unchanged
- review_confirm=approve · fix_gaps=none · phase=done
- next: — · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| topBarBack/Title/Subtitle | Button/Static/Text RO | PASS |
| threadItems / bubbleMine|Theirs | ChatThread/Bubble | PASS |
| emptyThread | EmptyState | PASS |
| composerInput/Send | TextArea/Button | PASS |
| missingId / emptyBack | EmptyState | PASS |
| entry.chatIcon | Button/Nav peer #i-chat | PASS |

## Screens / zones
- CH-00 · CH-01 · CH-02 · CH-03 · SH-02 · #sc-mnt-chat
- mfeStdUrl= http://localhost:9301/web-rmms-mnt-chat
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/ui/prototype/index.html
- screens= specs/web-rmms-mnt-chat/qa/screens/{S0,S1,QA-20}.png
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET {id} · GET/POST messages · re-GET · init-data opt · no parentId
- T-01…T-05 done · T-QA PASS/WAIVE · T-BE N/A
- soft debt: missingId banner dup · e2e stock port · WDS · playwright

## Debt
- (none P0) · soft GAP-QA-UI-MISSING-BANNER · e2e stock-port / WDS / playwright

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-chat/STATUS.md
