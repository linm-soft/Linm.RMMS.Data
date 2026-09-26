# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T06:34:00.000Z
contentHash: sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e

## Decisions
- changeScope: new_page
- formPattern: Mobile full / sheet (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Integration + Auth + Files · cấm ERP.*
- demo: N/A
- wave A Live-only: sessions · check-ins · plan-points GET · road-routes · profile · files
- out of A: journal-lines · findings · TD-04/05/06 · TK-02…07
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation · deny blocks TD-03 save · cấm fake coords
- open questions: UNCLEAR-PLAN-POINT · UNCLEAR-NOTE-ENCODE (SA)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | road-route search |
| direction | chiều | Dropdown | Note chieu=* |
| userName | người | Text RO | auth/profile |
| plannedDate | ngày | Date | |
| kmFrom/kmTo | km | Number | Note encode TK-01 |
| inspectMode | hình thức | Dropdown | dinh-ky/dot-xuat |
| inspectReason | lý do | Text | if dot-xuat |
| planPointLabel | điểm KH | Text | plan-points empty OK |
| lat/lng/accuracyM | GPS | GPS | TD-03 HARD |
| content | nội dung | Text | check-in |
| photoLocalIds | ảnh | FileMulti | files/* |
| historyCards | lịch sử | List | GET sessions filter |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02 · TD-03 · TD-07 · TK-00 · TK-01
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a
- DES-GRID / LinErpListFilterBar: N/A phone hub

## API / tasks (ids only)
- FormMode↔API: open session POST patrol/sessions · check-in POST …/check-ins · list GET sessions
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-PLAN-POINT: empty plan-points · no auto MatchOk
- UNCLEAR-NOTE-ENCODE: chiều/km/mode in Note until Schema D

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mobile-a.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
