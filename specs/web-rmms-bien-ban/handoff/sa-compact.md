# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T16:10:00.000Z
taskId: task_b445a51e
contentHash: sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · packKind=list · phone 430 · N/A DES-GRID · keep Live artifacts
- domain: Patrol · DOMAIN-MAP `web-rmms-bien-ban` → patrol
- be: D:/AI-QLBD/Linm.RMMS.WebService · cấm ERP.* · cấm invent BienBan*
- mfe: Linm.Web.RMMS.Mobile · route `/bien-ban` · mobile-bff only
- Entity: Live reuse PatrolPetitionEntity + Schema_PatrolPetition · **none Mới**
- Parent: journal bool ViolationFlag · finding ViolationAction string
- BFF: mobile catch-all proxy patrol/* · web PatrolPetitionsBffController cite · cấm BFF biz
- FormMode↔API: GET/POST/GET{id} petitions · PUT journal-lines · PUT findings · GET road-routes/search · auth · files · sessions opt
- Delta HARD: Pattern B Lưu luôn bật · GPS deny-on-submit · SearchInput road-routes no SEED miss=`--` · capture=environment · cấm Excel
- LIST-SCOPE=petitions-only kind=hanh-lang · SO07=`csdl-bieu-07` nav · STD-ROUTE CLOSED `/bien-ban`
- Hai lối: BB-02 TD · BB-03 TK · UI key de-nghi-bien-ban → ViolationFlag=true
- UNCLEAR DOMAIN/BFF/JOURNAL/STD-ROUTE → CLOSED
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Empty | GET petitions hanh-lang |
| route | form | SearchInput | road-routes/search · no seed |
| sender/km/content | form | Text* | Pattern B banner |
| tdFlag / tkAction | flag/action | Button/Radio | bool / ViolationAction |
| gps / noFace | GPS | Action/Checkbox | deny on submit |
| save | CTA | Button | always on · saving only |
| leadSo07 | detail | Link | csdl-bieu-07 nav |

## Screens / zones (ids only)
- BB-00…BB-07 · DES-LEAVE
- Pattern=Full · routes `/bien-ban` · `/moi` · `/:id`
- Leave: LeaveConfirmModal dirty BB-02/03
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/bien-ban
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET|POST|GET{id} petitions · PUT journal-lines · PUT findings · GET road-routes/search · auth · files
- entity: Live petition/journal/finding · migration skip SA
- T-*: enhance/fix_gaps (team_lead) · Pattern B + SearchInput · devSlash=/agent-dev

## UNCLEAR
- none hard · soft LIST-SCOPE / SO07 stances in PO (chốt)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/handoff/design-compact.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
