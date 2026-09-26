# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:55:00.000Z
taskId: task_edc348ac
contentHash: sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · packKind=list · phone 430 · N/A DES-GRID
- domain: Patrol · DOMAIN-MAP `web-rmms-bien-ban` → patrol (row added)
- be: D:/AI-QLBD/Linm.RMMS.WebService · cấm ERP.* · cấm invent BienBan*
- mfe: Linm.Web.RMMS.Mobile · /web-rmms-bien-ban · mobile-bff only
- Entity: Live reuse PatrolPetitionEntity + Schema_PatrolPetition · **none Mới**
- Parent: journal bool ViolationFlag · finding ViolationAction string
- BFF: mobile catch-all proxy patrol/* · web PatrolPetitionsBffController cite · cấm BFF biz
- FormMode↔API: GET/POST/GET{id} petitions · PUT journal-lines ViolationFlag · PUT findings ViolationAction · auth · files · sessions opt
- LIST: kind=hanh-lang · POST body CreatePatrolPetitionRequest Live · Code server KN-*
- UI key de-nghi-bien-ban → ViolationFlag=true (LOOKUP_STATIC) · cấm string column invent
- Hai lối: BB-02 TD · BB-03 TK · SO07 nav only · GPS deny block trừ noFace
- UNCLEAR-DOMAIN-MAP-BB · UNCLEAR-BFF-PROXY · UNCLEAR-JOURNAL-KIND-FIELD → CLOSED
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Empty | GET petitions hanh-lang |
| btnCreateTd/Tk | chrome | Button/Nav | BB-02 / BB-03 |
| entryPath | form | Radio/RO | tuan-duong \| tuan-kiem |
| tdFlag / tkAction | flag/action | Button/Radio | bool / ViolationAction |
| sender/route/km/content/kind | form | Text* | POST required |
| gps / noFace | GPS | Action/Checkbox | deny block |
| save/cancel | CTA | Button | POST + parent PUT |
| leadSo07 | detail | Link | csdl-bieu-07 nav |

## Screens / zones (ids only)
- BB-00 · BB-01 · BB-02 · BB-03 · BB-04 · BB-05 · BB-06 · BB-07 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-bien-ban
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET|POST|GET{id} petitions · PUT journal-lines · PUT findings · auth · files
- entity: Live petition/journal/finding · migration skip SA
- T-*: (team_lead) · cite T38 / TD-05 §9 / TK-03 / TK-06

## UNCLEAR
- (none — all CLOSED this SA)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/handoff/design-compact.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
