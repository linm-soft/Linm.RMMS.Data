# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:12:00.000Z
taskId: task_151bec53
contentHash: sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e
team_lead_confirm: approve
autoApprove: ON
changeScope: edit_page
route_confirm: approve
mfeStdRoute: /bien-ban

## Decisions
- formPattern: Mobile list+create TD/TK+detail · phone ≤430 · Pattern B · LeaveConfirmModal · N/A Modal/Slideout · DES-GRID/FilterBar N/A
- mfe: Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/bien-ban · route /bien-ban (supersede prior /web-rmms-bien-ban)
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Patrol · cấm ERP.* · cấm invent BienBan* · Step 4b/migration skip
- DOMAIN-MAP web-rmms-bien-ban → patrol CLOSED
- FormType: LIST/FORM/LEAVE/ACT/FIELD/PROD/UX/RESP/HIST/LKP(KEEP SearchInput) · FILTER/CFG/UISCHEMA/SCHEMA WAIVE · GAP-TL-FORMTYPE-01 PASS
- T-*: T-BE-CRUD/INIT/PERM · T-UI-LIST/LKP/FORM/ACT/LEAVE/FIELD/PROD/UX/RESP/HIST · T-QA-CRUD/FORM
- Delta HARD: Pattern B Lưu luôn bật · GPS deny-on-submit · SearchInput road-routes no SEED miss=`--` · capture=environment · cấm Excel
- HARD: petitions kind=hanh-lang · POST+parent PUT · UI de-nghi-bien-ban→ViolationFlag bool · SO07 nav only
- Hai lối: BB-02 TD · BB-03 TK · BB-06 deep peer · labels useFormOptions
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| list/search/empty | List/Search/Empty | T-UI-LIST · T-BE-CRUD |
| btnCreateTd/Tk | Button/Nav | T-UI-LIST/ACT |
| route | SearchInput | T-UI-LKP · T-BE-CRUD |
| entryPath · tdFlag · tkAction | Radio/Button | T-UI-FORM/FIELD |
| sender/km/content/kind | Text* | T-UI-FORM/FIELD · Pattern B |
| gps/noFace | Action/Checkbox | T-UI-FORM/ACT deny-on-submit |
| save/cancel · DES-LEAVE | Button/Modal | T-UI-ACT/LEAVE · Save always on |
| leadSo07 · BB-06 deep | Link/Nav | T-UI-ACT |

## Screens / zones
- BB-00 · BB-01 · BB-02 · BB-03 · BB-04 · BB-05 · BB-06 · BB-07 · DES-LEAVE
- Leave: dirty BB-02/03 · Save POST+parent · leadSo07 nav
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/bien-ban
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks
- FormMode↔API: GET|POST|GET{id} petitions · PUT journal-lines ViolationFlag · PUT findings ViolationAction · GET road-routes/search · auth · files · sessions opt
- entity/migration: Live reuse · none Mới · T-BE-SCHEMA WAIVE
- T-* pending · devSlash=/agent-dev · T-UI-RESP=/dev-web-responsive · qaSlash=/agent-qa*
- WAIVE: SCHEMA · FILTER · CFG · UISCHEMA · KindB · T-QA-FILTER · LKP catalog-only (KEEP SearchInput)

## UNCLEAR
- none hard · soft LIST-SCOPE/SO07 chốt PO

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/task/web-rmms-bien-ban.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/handoff/sa-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
