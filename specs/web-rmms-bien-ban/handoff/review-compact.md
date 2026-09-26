# Handoff compact — review

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:05:30.000Z
taskId: task_f17fb486
contentHash: sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2
review_confirm: approve
autoApprove: ON
changeScope: new_page
e2eQa: ON · prior QA PASS (S0/S1/QA-20)

## Decisions
- formPattern: Mobile list + create TD/TK + detail · phone ≤430 · LeaveConfirmModal · N/A ERP Modal
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-bien-ban · mfeStdUrl http://localhost:9301/web-rmms-bien-ban
- be: Mobile.Bff · Patrol petitions/journal/findings · cấm ERP.* · cấm invent BienBan* · Step 4b N/A
- Hai lối: BB-02 TD ViolationFlag · BB-03 TK ViolationAction · parent id required
- QUERY/SEC/UI-FN/BE-FN: **PASS** · P0=0 · hash skip unchanged
- review_confirm=approve · fix_gaps=none · phase=done
- next: — · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| list/search/empty | List/Search/Empty | PASS |
| btnCreateTd/Tk | Button/Nav | PASS |
| tdFlag / tkAction | Button/Radio | PASS |
| sender/route/km/content/kind | Text* | PASS |
| gps/noFace | GPS/Checkbox | PASS |
| save/cancel · DES-LEAVE | Button/Modal | PASS |
| leadSo07 | Link | PASS (disable+copy) |

## Screens / zones
- BB-00 · BB-01 · BB-02 · BB-03 · BB-04 · BB-05 · BB-06 · BB-07 · DES-LEAVE · DES-MOB-BIEN-BAN
- mfeStdUrl= http://localhost:9301/web-rmms-bien-ban
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- screens= specs/web-rmms-bien-ban/qa/screens/{S0,S1,QA-20}.png
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET|POST|GET{id} petitions · PUT journal ViolationFlag · PUT findings ViolationAction · auth
- T-BE/UI done · T-QA PASS/WAIVE · entity/migration none
- soft debt: e2e stock-port · SO07 Mobile host · create parent id

## Debt
- (none P0) · soft GAP-QA-E2E-STOCK-PORT · GAP-SO07-MOBILE-HOST · GAP-CREATE-PARENT-ID

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
