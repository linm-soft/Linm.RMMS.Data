# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:30:00.000Z
taskId: task_863a1efc
contentHash: sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e
changeScope: edit_page
mfeStdRoute: /bien-ban
mfeStdUrl: http://localhost:9301/bien-ban
build: yarn build PASS · dotnet build PASS
e2eQa: ON queued QA · cấm e2e ở Dev

## Decisions
- FE edit_page: Pattern B Lưu `disabled={saving}` · banner+inline · GPS deny-on-submit · SearchInput ROAD_ROUTE_LOOKUP_CONFIG no SEED miss=`--`
- Hai lối giữ: BB-02 ViolationFlag (de-nghi-bien-ban) · BB-03 ViolationAction · POST+parent PUT
- Route STD `/bien-ban` · phone 430 · LeaveConfirmModal · useFormOptions bienBan.* · cấm Excel
- capture=environment N/A (no file input on BB create/detail)
- BE Step 4b: Live reuse · migration skip · DOMAIN-MAP `/bien-ban` · Mobile.Bff road-routes Live · cấm ERP.* · cấm BienBan*
- Kind B / FilterBar / ui-schema: WAIVE phone
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| list/search/empty | List/Search | GET petitions kind=hanh-lang |
| route | SearchInput | GET road-routes/search |
| sender/km/content | Text* | POST petitions · Pattern B |
| tdFlag / tkAction | Button/Radio | PUT journal / findings |
| gps/noFace | GPS/Checkbox | deny-on-submit |
| save | Button | always on · saving only |
| leadSo07 · BB-06 | Link/Nav | csdl-bieu-07 · peer TD/TK |

## Screens / zones
- BB-00…BB-07 · DES-LEAVE
- peerStdUrl= http://localhost:9301/bien-ban
- DES-GRID / LinErpListFilterBar: N/A WAIVE

## API / tasks
- FormMode↔API: GET|POST|GET{id} petitions · PUT journal-lines · PUT findings · GET road-routes/search · auth
- T-BE-* · T-UI-* done · T-QA-* pending
- debt: SO07 not hosted · parent id required · capture when media added

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/implement/web-rmms-bien-ban.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsBienBan
- be: D:/AI-QLBD/Linm.RMMS.WebService
