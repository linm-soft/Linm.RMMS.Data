# Handoff compact — review

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:26:00.000Z
taskId: task_32e69e2b
contentHash: sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e
review_confirm: approve
autoApprove: ON
changeScope: edit_page
mfeStdRoute: /bien-ban
mfeStdUrl: http://localhost:9301/bien-ban
e2eQa: ON · prior QA PASS (S0/S1/QA-20)

## Decisions
- formPattern: Mobile list+create TD/TK+detail · phone ≤430 · Pattern B · LeaveConfirmModal · N/A ERP Modal
- mfe: Linm.Web.RMMS.Mobile · route `/bien-ban` · peerStdUrl :9301/bien-ban
- be: Mobile.Bff · Patrol petitions/journal/findings · road-routes · cấm ERP.* · cấm invent BienBan* · Step 4b N/A
- Delta HARD PASS: Save `disabled={saving}` · banner+inline · GPS deny-on-submit · SearchInput miss=`--` · no Excel
- Hai lối: BB-02 ViolationFlag · BB-03 ViolationAction · parent id required
- QUERY/SEC/UI-FN/BE-FN: **PASS** · P0=0 · hash skip unchanged
- review_confirm=approve · fix_gaps=none · phase=done
- next: — · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | review |
|----|-------------|--------|
| list/search/empty | List/Search/Empty | PASS |
| btnCreateTd/Tk | Button/Nav | PASS |
| route | SearchInput | PASS |
| tdFlag / tkAction | Button/Radio | PASS |
| sender/km/content | Text* | PASS |
| gps/noFace | GPS/Checkbox | PASS |
| save/cancel · DES-LEAVE | Button/Modal | PASS |
| leadSo07 | Link | PASS (disable+copy) |

## Screens / zones
- BB-00…BB-07 · DES-LEAVE · DES-MOB-BIEN-BAN
- mfeStdUrl= http://localhost:9301/bien-ban
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- screens= specs/web-rmms-bien-ban/qa/screens/{S0,S1,QA-20}.png
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: GET|POST|GET{id} petitions · PUT journal ViolationFlag · PUT findings ViolationAction · road-routes/search · auth
- T-BE/UI done · T-QA PASS/WAIVE · entity/migration none
- soft debt: e2e stock-port · SO07 Mobile host · create parent id · ipv6-localhost

## Debt
- (none P0) · soft GAP-QA-E2E-STOCK-PORT · GAP-SO07-MOBILE-HOST · GAP-CREATE-PARENT-ID · GAP-IPV6-LOCALHOST

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
