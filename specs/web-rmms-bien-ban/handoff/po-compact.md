# Handoff compact — po

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T15:50:00.000Z
contentHash: sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e
taskId: task_3dddf896

## Decisions
- changeScope: edit_page · keep Design/SA · cấm typed CRUD new_page
- formPattern: Mobile list+create TD/TK+detail Full page · phone 430 · Pattern B · N/A ERP Modal
- packKind: list confirmed · Grid DES-GRID / LinErpListFilterBar **N/A phone**
- Leave: LeaveConfirmModal dirty · cấm native alert/confirm · Pattern B banner
- mfe: `/bien-ban` · http://localhost:9301/bien-ban · be Patrol · cấm ERP.*
- demo: N/A · hash skip · cấm re-scan (**GAP-PO-DEMO-RESCAN-01**)
- Delta HARD: (1) bỏ disabled={!canSave} · banner+inline (2) GPS deny-on-submit (3) SearchInput road-routes · no SEED · miss=`--` (4) capture=environment (5) cấm Excel
- UNCLEAR soft chốt: LIST-SCOPE=petitions-only · SO07=`csdl-bieu-07` nav · STD-ROUTE CLOSED `/bien-ban`
- open questions: none hard · autoApprove ON → Design keep

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Empty | GET petitions |
| route | form | SearchInput | road-route · BFF · no seed |
| sender/km/content | form | Text* | required · Pattern B |
| tdFlag / tkAction | flag/action | Button/Radio | ViolationFlag / Action |
| gps / noFace | GPS | Action/Checkbox | deny on submit |
| save | CTA | Button | always on · saving only |

## Screens / zones (ids only)
- BB-00…BB-07 · Pattern=Full · routes `/bien-ban` · `/moi` · `/:id`
- Grid AC: phone N/A · list AC L/F/G/X in requirement
- Leave: LeaveConfirmModal · Pattern B
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html (keep)
- peerStdUrl= http://localhost:9301/bien-ban
- controlHint cite: specs/_data-analy/features/web-rmms-bien-ban-control-hint.md

## API / tasks (ids only)
- FormMode↔API: GET/POST/GET{id} petitions · PUT journal-lines · findings · road-routes/search · sessions · auth · files
- real-data §A+§B PASS · § Delta edit_page PASS
- T-*: enhance/fix_gaps (team_lead) · Pattern B + SearchInput · align-mobile-to-mfe
- devSlash: `/agent-dev`

## UNCLEAR
- none hard · soft LIST-SCOPE / SO07 stances in requirement §12
- CLOSED: STD-ROUTE · DOMAIN-MAP · BFF-PROXY · JOURNAL-KIND-FIELD

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-real-data.md
- design keep: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
