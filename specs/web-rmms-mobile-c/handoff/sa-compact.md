# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mobile-c
packKind: list
role: sa
status: done
changeScope: edit_page
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T08:15:00.000Z
taskId: task_8e6ea5bb
contentHash: sha256:4a38b53861c732cbbde7208c21d766f1b8b2c8decc007d2dc24ea34a4793339c
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · Pattern B + capture · **no** new schema/migration/Step 4b
- FormMode↔API KEEP Live: GET/POST findings · GET byId · POST recheck · PUT journal review · peers sessions/files/auth
- BFF: mobile-bff proxy only · **cấm** web-bff MFE · users forward if missing (GAP-DA-MOB-C-BFF-USERS-01)
- GPS: BE 422 hard · FE Pattern B check on click (not pre-disable CTA)
- capture=environment TK-03/05 · no fork LinImageUpload · UNCLEAR-CAPTURE-PROP → Dev
- feedback: Pattern B only if Live · UNCLEAR-FEEDBACK-SCOPE soft · no CRUD D
- mfeStdRoute=/phat-hien · mfeStdUrl http://localhost:9301/phat-hien
- be Patrol · cấm ERP.* · domain DOMAIN-MAP web-rmms-mobile-c
- solution_confirm approve (autoApprove) · next /agent-team-lead · roleOnly stop

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| saveFinding | Lưu TK-03 | Button | POST findings · PB |
| reviewSave | Lưu đối chiếu | Button | PUT review · PB |
| submitFeedback | Gửi phản hồi | Button | POST feedback if Live · PB |
| confirmDone | Xác nhận recheck | Button | POST recheck · PB |
| mediaIds | ảnh | FileMulti | + capture |
| lat/lng | GPS | GPS | deny→banner on submit |
| findingList…fields | baseline C | List/form | KEEP bind Live |

## Screens / zones (ids only)
- TK-02 · TK-03 · TK-04 · TK-05 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/phat-hien
- DES-GRID / export: N/A

## API / tasks (ids only)
- API-01 GET findings · API-02 POST findings · API-03 GET findings/{id}
- API-04 POST findings/{id}/recheck · API-05 PUT journal-lines/{id}/review
- peers: sessions · journal-lines · files · road-routes · users (BFF forward)
- migration: none · T-*: (team_lead) Pattern B 3 pages + capture + BFF users align

## UNCLEAR
- UNCLEAR-CAPTURE-PROP: prop vs local input — Dev
- UNCLEAR-FEEDBACK-SCOPE: Pattern B only, no CRUD D

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/be/solution-discovery.md
- design-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/handoff/design-compact.md
- po-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/handoff/po-compact.md
- data_analy-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/STATUS.md
