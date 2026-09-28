# Handoff compact — design

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:05:00.000Z
taskId: task_889425f7
contentHash: sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · keep BB-* · cấm typed CRUD new_page
- formPattern: Mobile list + create TD/TK + detail · phone 430 · Full · LeaveConfirmModal · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/bien-ban · route `/bien-ban`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.* · cấm invent BienBan*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Delta HARD: Pattern B Lưu luôn bật · banner+inline · GPS deny-on-submit · SearchInput road-routes · no SEED · miss=`--` · capture=environment · cấm Excel
- Hai lối: BB-02 ViolationFlag · BB-03 ViolationAction
- LIST-SCOPE: petitions-only kind=hanh-lang · SO07=`csdl-bieu-07` nav
- Live: petitions · journal-lines · findings · sessions · auth · files · road-routes/search
- open questions: none hard · CLOSED DOMAIN/BFF/JOURNAL/STD-ROUTE
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Empty | GET petitions |
| route | form | SearchInput | road-route · BFF · no seed |
| sender/km/content | form | Text* | Pattern B banner |
| tdFlag / tkAction | flag/action | Button/Radio | ViolationFlag / Action |
| gps / noFace | GPS | Action/Checkbox | deny on submit |
| save | CTA | Button | always on · saving only |

## Screens / zones (ids only)
- BB-00…BB-07 · DES-LEAVE
- Pattern=Full · routes `/bien-ban` · `/moi` · `/:id`
- Leave: LeaveConfirmModal dirty BB-02/03
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/bien-ban
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST/GET{id} petitions · PUT journal-lines · findings · road-routes/search · sessions · auth · files
- real-data §A+§B PASS · § Delta edit_page PASS
- T-*: enhance/fix_gaps (team_lead) · Pattern B + SearchInput · devSlash=/agent-dev

## UNCLEAR
- none hard · soft LIST-SCOPE / SO07 stances in PO

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-real-data.md
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
