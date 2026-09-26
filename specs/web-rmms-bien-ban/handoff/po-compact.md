# Handoff compact — po

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:40:00.000Z
contentHash: sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2
taskId: task_e85d8f14

## Decisions
- changeScope: new_page · packKind=list confirmed
- formPattern: Mobile list + create TD/TK + detail · phone max-width 430 · N/A ERP Modal/Slideout · DES-GRID/LinErpListFilterBar N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-bien-ban · route /web-rmms-bien-ban
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.* · cấm invent BienBan*
- demo: N/A · hash skip analy · cấm re-scan
- Hai lối: Tuần đường BB-02 ViolationFlag/de-nghi-bien-ban · Tuần kiểm BB-03 ViolationAction lap-bien-ban|de-nghi-vphc
- LIST-SCOPE: P1 petitions-only kind=hanh-lang · secondary optional flagged peer chips → BB-02/03
- STD-ROUTE: /web-rmms-bien-ban + deep BB-06 TD-05/TK-03
- SO07: leadSo07 → csdl-bieu-07 nav only · cấm embed · disable+copy nếu Mobile không host
- Live: GET|POST|GET{id} petitions · PUT journal-lines ViolationFlag · findings ViolationAction · sessions · auth · files/*
- labels: useFormOptions() / bienBan.* · cấm hardcode VN
- GPS: deny block trừ noFace · cấm fake · list/detail không GPS mới
- Shell: bỏ me · me-profile · me-settings · feedback · cam-view · cấm native · cấm desktop
- BFF: VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff client
- peer lock B–E · cấm sổ 07 form · petition ≠ inbox
- SA giữ: UNCLEAR-DOMAIN-MAP-BB · UNCLEAR-BFF-PROXY · UNCLEAR-JOURNAL-KIND-FIELD

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Empty | GET petitions |
| btnCreateTd/Tk | chrome | Button/Nav | BB-02 / BB-03 |
| entryPath | form | Radio/RO | tuan-duong \| tuan-kiem |
| tdFlag / tkAction | flag/action | Button/Radio | ViolationFlag / ViolationAction |
| sender/route/km/content | form | Text* | POST required |
| gps / noFace | GPS | Action/Checkbox | deny block |
| save/cancel | CTA | Button | POST + parent |
| leadSo07 | detail | Link | csdl-bieu-07 nav |

## Screens / zones (ids only)
- BB-00 · BB-01 · BB-02 · BB-03 · BB-04 · BB-05 · BB-06 · BB-07
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-bien-ban
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET/POST/GET{id} petitions · PUT journal-lines · findings ViolationAction · sessions · auth · files/*
- AC: L-01…07 · F-01…06 · G-01…03 · D-01…02 · X-01…04
- T-*: (team_lead) · cite T38 / TD-05 §9 / TK-03

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-BB → SA DOMAIN-MAP row Patrol
- UNCLEAR-BFF-PROXY → SA Mobile.Bff proxy patrol/* · cấm invent
- UNCLEAR-JOURNAL-KIND-FIELD → SA bool Live + UI key useFormOptions
- (resolved PO) LIST-SCOPE · STD-ROUTE · SO07 → see Decisions

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
