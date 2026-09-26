# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:58:00.000Z
taskId: task_e32d080a
contentHash: sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: approve
mfeStdRoute: /web-rmms-bien-ban

## Decisions
- formPattern: Mobile list + create TD/TK + detail · phone ≤430 · LeaveConfirmModal · N/A Modal/Slideout · DES-GRID/FilterBar N/A
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-bien-ban · route /web-rmms-bien-ban
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Patrol · cấm ERP.* · cấm invent BienBan* · Step 4b/migration skip
- DOMAIN-MAP web-rmms-bien-ban → patrol CLOSED
- FormType: T-UI-LIST/FORM/LEAVE/ACT/FIELD/PROD/UX/RESP/HIST KEEP · FILTER/CFG/UISCHEMA/LKP/SCHEMA WAIVE · GAP-TL-FORMTYPE-01 PASS
- T-*: T-BE-CRUD/INIT/PERM · T-UI-LIST/FORM/ACT/LEAVE/FIELD/PROD/UX/RESP/HIST · T-QA-CRUD/FORM
- HARD: petitions kind=hanh-lang · POST+parent PUT · UI de-nghi-bien-ban→ViolationFlag bool · GPS deny trừ noFace · SO07 nav only · cite T38/TD-05§9/TK-03/TK-06
- Hai lối: BB-02 TD · BB-03 TK · BB-06 deep peer · labels useFormOptions
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| list/search/empty | List/Search/Empty | T-UI-LIST · T-BE-CRUD |
| btnCreateTd/Tk | Button/Nav | T-UI-LIST/ACT |
| entryPath · tdFlag · tkAction | Radio/Button | T-UI-FORM/FIELD |
| sender/route/km/content/kind | Text* | T-UI-FORM/FIELD · T-BE-CRUD |
| gps/noFace | Action/Checkbox | T-UI-FORM/ACT |
| save/cancel · DES-LEAVE | Button/Modal | T-UI-ACT/LEAVE |
| leadSo07 · BB-06 deep | Link/Nav | T-UI-ACT |

## Screens / zones
- BB-00 · BB-01 · BB-02 · BB-03 · BB-04 · BB-05 · BB-06 · BB-07 · DES-LEAVE
- Leave: dirty BB-02/03 · Save POST+parent · leadSo07 nav
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-bien-ban
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks
- FormMode↔API: GET|POST|GET{id} petitions · PUT journal-lines ViolationFlag · PUT findings ViolationAction · auth · files · sessions opt
- entity/migration: Live reuse · none Mới · T-BE-SCHEMA WAIVE
- T-* pending · devSlash=/agent-dev · T-UI-RESP=/dev-web-responsive · qaSlash=/agent-qa*
- WAIVE: SCHEMA · FILTER · CFG · UISCHEMA · LKP · KindB · T-QA-FILTER

## UNCLEAR
- (none — SA CLOSED DOMAIN-MAP/BFF/JOURNAL-KIND)

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/task/web-rmms-bien-ban.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
