# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-home
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:30:00.000Z
taskId: task_074ab0e0
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile Home / full · phone 430 · no master form · DES-LEAVE N/A
- Grid/DES-GRID/LinErpListFilterBar: N/A · WAIVE T-UI-LIST-01→T-UI-HOME-01 · FILTER/CFG/UISCHEMA/LKP/FORM/LEAVE WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-home · :9301
- be: Auth profile + Notification overview · mobile-bff :5202 · cấm ERP.* · migration/Step4b none
- DOMAIN-MAP: web-rmms-home → Notification/notification · CLOSED
- Home owns HM-* · shell owns TabBar+login · REMOVED me*
- grid6: /supervise · /patrol-map · tab Work · tab Incident · /asset · /offline
- wallet→/asset · notify→/ops · login CTA→/login · GPS none
- GAP-TL-FORMTYPE-01: PASS
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)
- e2eQa: ON queued /agent-qa* · cấm e2e ở TL/dev

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestFaq/Privacy/Login | Static/Button | → /login |
| qaPatrolPoint/IncidentNew | Button/Nav | Field / incident/new |
| grid×6 | Button/Nav | SCREENS Home |
| walletAsset | Button/Nav | → /asset |
| notifyBadge | Number RO | GET notification/overview → /ops |
| profileName | Text RO | GET auth/profile |

## Screens / zones (ids only)
- HM-00 · HM-01 · HM-02 · HM-03 · HM-04 · HM-05 · HM-06
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-home
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: guest=nav · staff=GET profile + overview · tiles=nav
- entity/migration: none
- T-*: T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-HOME-01 · T-UI-ACT-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 · T-QA-CRUD-01 · T-QA-HOME-01
- WAIVE: T-UI-LIST-01(→HOME) · FILTER · CFG · UISCHEMA · LKP · FORM · LEAVE · QA-FILTER
- devSlash=/agent-dev · qaSlash=/agent-qa*

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/task/web-rmms-home.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/STATUS.md
