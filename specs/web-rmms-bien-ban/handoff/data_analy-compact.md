# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:25:00.000Z
contentHash: sha256:bc9070c4ab20da1960355a727eae18029943c2d95865aebd7d9bcb443ea60cd2

## Decisions
- changeScope: new_page
- formPattern: Mobile list + create TD/TK + detail (phone max-width 430) · N/A ERP Modal/Slideout · master no demo · /erp-form-context labels
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-bien-ban
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol · cấm ERP.* · cấm invent BienBan*
- demo: N/A
- Hai lối Field: Tuần đường (BDTX)=BB-02 ViolationFlag/de-nghi-bien-ban · Tuần kiểm (Khu/VP)=BB-03 ViolationAction lap-bien-ban|de-nghi-vphc
- Peer lock: journal/ket-ca/finding/frequency = web-rmms-mobile-b…e
- API Live: GET|POST|GET{id} patrol/petitions · PUT journal-lines ViolationFlag · findings ViolationAction · sessions · auth/profile · files/*
- cấm mở/clone form sổ 07 · chỉ đề nghị + link dẫn
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation · deny = block nút cần tọa độ · noFace exception · cấm fake
- Shell: bỏ me · me-profile · me-settings · feedback · cam-view · cấm sửa iOS/Android · cấm MFE desktop
- BFF HARD: VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff client · cấm Route mobile-bff trên web-bff
- open questions: UNCLEAR-DOMAIN-MAP-BB · UNCLEAR-BFF-PROXY · UNCLEAR-LIST-SCOPE · UNCLEAR-STD-ROUTE · UNCLEAR-SO07-LINK · UNCLEAR-JOURNAL-KIND-FIELD

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Empty | GET petitions |
| btnCreateTd/Tk | chrome | Button/Nav | BB-02 / BB-03 |
| entryPath | form | Radio/RO | tuan-duong \| tuan-kiem |
| tdFlag / tkAction | flag/action | Button/Radio | ViolationFlag / ViolationAction |
| sender/route/km/content | form | Text* | POST petitions required |
| gps / noFace | GPS | Action/Checkbox | deny block |
| save/cancel | CTA | Button | POST + parent write |

## Screens / zones (ids only)
- BB-00 · BB-01 · BB-02 · BB-03 · BB-04 · BB-05 · BB-06 · BB-07
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-bien-ban
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET/POST/GET{id} petitions · PUT journal-lines · findings ViolationAction · sessions · auth · files/*
- real-data §A+§B: PASS
- T-*: (team_lead) · cite T38 / TD-05 §9 / TK-03

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-BB: SA add DOMAIN-MAP row web-rmms-bien-ban · Patrol
- UNCLEAR-BFF-PROXY: Mobile.Bff proxy patrol/* — SA confirm · cấm invent
- UNCLEAR-LIST-SCOPE: petitions-only vs union flagged journal/finding — PO/Design
- UNCLEAR-STD-ROUTE: /web-rmms-bien-ban vs Field deep TD-05/TK-03 — follow STATUS
- UNCLEAR-SO07-LINK: deep link sổ 07 slug — PO · cấm embed form
- UNCLEAR-JOURNAL-KIND-FIELD: bool ViolationFlag vs UI key de-nghi-bien-ban — SA

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-bien-ban.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md
- gap: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
