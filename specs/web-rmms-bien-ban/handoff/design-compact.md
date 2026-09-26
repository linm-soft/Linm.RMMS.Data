# Handoff compact — design

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:45:00.000Z
taskId: task_9648a32d
contentHash: sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile list + create TD/TK + detail · phone 430 · LeaveConfirmModal · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-bien-ban · route /web-rmms-bien-ban
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.* · cấm invent BienBan*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Hai lối: BB-02 TD ViolationFlag/de-nghi-bien-ban · BB-03 TK ViolationAction lap-bien-ban|de-nghi-vphc
- LIST-SCOPE: P1 petitions-only kind=hanh-lang · optional flagged chips → BB-02/03
- SO07: leadSo07 → csdl-bieu-07 nav only · cấm embed
- Live: GET|POST|GET{id} petitions · PUT journal-lines ViolationFlag · findings ViolationAction · sessions · auth · files/*
- labels: useFormOptions() / bienBan.* · GPS deny block trừ noFace · cấm fake
- Shell: bỏ me* · cấm native · cấm desktop · BFF Mobile.Bff only
- open questions: UNCLEAR-DOMAIN-MAP-BB · UNCLEAR-BFF-PROXY · UNCLEAR-JOURNAL-KIND-FIELD → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Empty | GET petitions hanh-lang |
| btnCreateTd/Tk | chrome | Button/Nav | BB-02 / BB-03 |
| entryPath | form | Radio/RO | tuan-duong \| tuan-kiem |
| tdFlag / tkAction | flag/action | Button/Radio | ViolationFlag / ViolationAction |
| sender/route/km/content/kind | form | Text* | POST required |
| gps / noFace | GPS | Action/Checkbox | deny block |
| save/cancel | CTA | Button | POST + parent |
| leadSo07 | detail | Link | csdl-bieu-07 nav |

## Screens / zones (ids only)
- BB-00 · BB-01 · BB-02 · BB-03 · BB-04 · BB-05 · BB-06 · BB-07 · DES-LEAVE
- Leave: dirty BB-02/03 · Save POST+parent · leadSo07 nav
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-bien-ban
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/POST/GET{id} petitions · PUT journal-lines · findings ViolationAction · sessions · auth · files/*
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-BB: DOMAIN-MAP row Patrol → SA
- UNCLEAR-BFF-PROXY: Mobile.Bff proxy patrol/* → SA · cấm invent
- UNCLEAR-JOURNAL-KIND-FIELD: bool Live + UI key useFormOptions → SA

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
