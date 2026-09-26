# Handoff compact — po

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T15:45:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile list + full create/detail · phone max-width 430 · no ERP Modal/Slideout · master no demo
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-nghiem-thu · mfeStdRoute /web-rmms-nghiem-thu
- nativeRoutes: /field/nghiem-thu · /new · /:id · Android NghiemThu* 1-1
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol nghiem-thu · cấm ERP.*
- demo: N/A · hash-skip analy · no re-scan
- API: GET/POST/PUT patrol/nghiem-thu · init-data · files/* MediaIds≤10 · cấm invent
- mau-01…10 = MAU-10 / init-data · cấm «Mẫu nghiệm thu NN»
- ResultCode pass/fail/deduct · Scores[] init-data · Status draft on Lưu nháp
- Entry: Field hub quick action · no tab · no gộp tuần đường/tuần kiểm/mnt
- labels: useFormOptions / nghiemThu.* · cấm hardcode VN
- GPS: geolocation → FieldInfo/ZoneOrgCode · deny = no fake
- FILTER P1: search only · status/route/date/templateType OUT P1
- DELETE: OUT P1
- STD-ROUTE: STATUS /web-rmms-nghiem-thu + SCREENS /field/nghiem-thu*
- DOMAIN-MAP + BFF-PROXY: open → SA
- Leave: desktop Field · invent path · iOS/Android edit · DES-GRID · demo SSOT · ERP.* · Web BFF base

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Static | GET list · search P1 |
| rowIcon/status/result | row | Icon/Badge | Check success |
| btnCreate | chrome | Button/Nav | → new |
| templateType | mau | Select | MAU-10 / init-data |
| route/fieldInfo/km | form | Text/Number | create* |
| resultCode/scores | result | Select/Checklist | pass/fail/deduct |
| mediaIds | media | PhotoRow | files/* ≤10 |
| gpsCapture | GPS | Action | FieldInfo/ZoneOrgCode |
| saveCreate/saveEdit | CTA | Button | POST / PUT |

## Screens / zones (ids only)
- NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-07 · NT-08 · NT-09 · NT-10 · NT-11
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-nghiem-thu
- DES-GRID / LinErpListFilterBar: N/A phone list
- Grid AC: AC-G-01…12 · Form AC: AC-F-01…09 · Report AC: N/A

## API / tasks (ids only)
- FormMode↔API: GET list · GET init-data · POST create · GET/{id} · PUT/{id} · files/*
- real-data §A+§B: PASS (reuse)
- T-*: (team_lead) · cite T-W3-08

## UNCLEAR
- UNCLEAR-FILTER-UI: RESOLVED → search only P1
- UNCLEAR-DELETE: RESOLVED → OUT P1
- UNCLEAR-STD-ROUTE: RESOLVED → STATUS + SCREENS dual
- UNCLEAR-DOMAIN-MAP-NT: SA add row web-rmms-nghiem-thu — open
- UNCLEAR-BFF-PROXY: SA confirm Mobile.Bff proxy — open

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-nghiem-thu.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
