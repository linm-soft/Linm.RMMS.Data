# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T01:15:00.000Z
taskId: task_6c1e4a8b
contentHash: sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2
changeScope: new_page
mfeStdRoute: /web-rmms-bien-ban
mfeStdUrl: http://localhost:9301/web-rmms-bien-ban
build: yarn build PASS · dotnet build PASS
e2eQa: ON queued QA · cấm e2e ở Dev

## Decisions
- FE: WebRmmsBienBan · phone 430 · list+TD/TK create+detail · LeaveConfirmModal · useFormOptions bienBan.*
- Hai lối: BB-02 TD ViolationFlag (UI de-nghi-bien-ban) · BB-03 TK ViolationAction lap-bien-ban|de-nghi-vphc
- Parent required: journalLineId / findingId query · thiếu → chặn save
- LIST kind=hanh-lang · SO07 disable+copy · GPS deny block trừ noFace · auth hasAccessToken
- BE: petitions kind filter · PUT findings ViolationAction · migration none · cấm ERP.* · cấm BienBan*
- BFF: mobile catch-all · web FindingsBff PUT proxy cite
- Kind B / FilterBar / ui-schema: WAIVE phone
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| list/search/empty | List/Search | GET petitions kind=hanh-lang |
| btnCreateTd/Tk | Button/Nav | → td/new · tk/new |
| tdFlag | Button | PUT journal ViolationFlag |
| tkAction | Radio | PUT findings ViolationAction |
| sender/route/km/content/kind | Text* | POST petitions |
| gps/noFace | GPS | deny block |
| save/cancel · DES-LEAVE | Button/Modal | POST+parent |
| leadSo07 | Link | disable+copy |

## Screens / zones
- BB-00 · BB-01 · BB-02 · BB-03 · BB-04 · BB-05 · BB-06 · BB-07 · DES-LEAVE
- peerStdUrl= http://localhost:9301/web-rmms-bien-ban
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks
- FormMode↔API: GET|POST|GET{id} petitions · PUT journal-lines · PUT findings · auth
- T-BE-* · T-UI-* done · T-QA-* pending
- debt: SO07 not hosted · parent id required for create

## UNCLEAR
- (none)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/implement/web-rmms-bien-ban.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsBienBan
- be: D:/AI-QLBD/Linm.RMMS.WebService
