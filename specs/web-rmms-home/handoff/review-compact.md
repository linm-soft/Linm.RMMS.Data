# Handoff compact — review

schemaVersion: 1
feature: web-rmms-home
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T19:28:00.000Z
taskId: task_7526a700
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
review_confirm: done
autoApprove: ON
e2eQa: ON (prior QA PASS · cấm re-run Review)

## Decisions
- changeScope: new_page
- formPattern: Mobile Home / full · phone 430 · no master form · DES-LEAVE N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A WAIVE
- verdict: **PASS** · Must 0 · P0 0 · QUERY/SEC/UI-FN/BE-FN PASS
- hash: unchanged · skip data-analy rescan
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · /web-rmms-home · :9301
- be: Auth profile + Notification overview Live · migration none · cấm ERP.*
- DOMAIN-MAP: web-rmms-home → Notification/notification CLOSED
- Home owns HM-* · shell owns TabBar+login · me* REMOVED
- grid6: supervise·patrol-map·work·incident·asset·offline
- soft: peer aliases · LOOKUP_STATIC · profile 401 soft
- next: pipeline end · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestFaq/Privacy/Login | Static/Button | S0 · → LoginSheet |
| qaPatrolPoint/IncidentNew | Button/Nav | Field / incident |
| grid×6 | Button/Nav | SCREENS Home |
| walletAsset | Button/Nav | → /asset peer |
| notifyBadge | Number RO | GET overview → /ops |
| profileName | Text RO | GET auth/profile |

## Screens / zones (ids only)
- HM-00 · HM-01 · HM-02 · HM-03 · HM-04 · HM-05 · HM-06
- QA PNG: qa/screens/{S0,S1,QA-20}.png Aligned
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-home
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: guest=nav · staff=GET profile + overview · tiles=nav
- entity/migration: none
- T-*: BE/UI/QA done · review_confirm=done
- WAIVE: LIST/FILTER/CFG/UISCHEMA/LKP/FORM/LEAVE/QA-FILTER

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/handoff/qa-compact.md
