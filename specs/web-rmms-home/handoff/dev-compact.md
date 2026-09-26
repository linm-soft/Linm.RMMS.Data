# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-home
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T19:20:00.000Z
taskId: task_14fa52d5
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON queued /agent-qa*

## Decisions
- changeScope: new_page
- formPattern: Mobile Home / full · phone 430 · no master form · DES-LEAVE N/A
- Grid/DES-GRID/LinErpListFilterBar/ui-schema: N/A WAIVE
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-home · :9301
- be: Auth profile + Notification overview Live · migration/Step4b none · cấm ERP.*
- Home owns HM-* · shell owns TabBar+login · REMOVED me*
- grid6 nav: supervise·patrol-map·work·incident·asset·offline (+ SCREENS aliases)
- wallet→/asset · notify→/ops · login CTA→shell overlay
- build: yarn typecheck+build PASS · BFF Release PASS
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)
- e2e: cấm ở Dev · queued QA

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| guestFaq/Privacy/Login | Static/Button | HM-01/02 → LoginSheet |
| qaPatrolPoint/IncidentNew | Button/Nav | Field / incident |
| grid×6 | Button/Nav | SCREENS Home |
| walletAsset | Button/Nav | → /asset |
| notifyBadge | Number RO | GET overview → /ops |
| profileName | Text RO | GET auth/profile |

## Screens / zones (ids only)
- HM-00 · HM-01 · HM-02 · HM-03 · HM-04 · HM-05 · HM-06
- mfeStdUrl= http://localhost:9301/web-rmms-home
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/ui/prototype/index.html
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: guest=nav · staff=GET profile + overview · tiles=nav
- entity/migration: none
- T-*: BE/PERM/HOME/ACT/FIELD/PROD/UX/RESP/HIST = done · T-QA-* = pending
- WAIVE: LIST · FILTER · CFG · UISCHEMA · LKP · FORM · LEAVE

## Debt
- asset/offline/supervise/incident.new alias→peer until dedicated MFE
- Ops thin (count only)
- LOOKUP_STATIC until OMS seed · profile 401 soft fallback

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/implement/web-rmms-home.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-home/STATUS.md
