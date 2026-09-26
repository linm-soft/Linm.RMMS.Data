# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T15:25:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile list + full create/detail (phone max-width 430) · N/A ERP Modal/Slideout · master no demo · /erp-form-context labels
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-nghiem-thu
- nativeRoutes: /field/nghiem-thu · /new · /:id · Android NghiemThuScreen/Create/Detail 1-1
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Patrol nghiem-thu · cấm ERP.*
- demo: N/A · cite #sc-nghiem-thu* only
- API reuse: GET/POST/PUT patrol/nghiem-thu · init-data · files/* MediaIds≤10 · cấm entity/path mới
- mau-01…10 labels = MAU-10.md / init-data · cấm «Mẫu nghiệm thu NN»
- ResultCode pass/fail/deduct · Scores[] init-data · Status draft on Lưu nháp
- Entry: Field hub quick action · no new tab · no gộp tuần đường/tuần kiểm/mnt
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation → FieldInfo/ZoneOrgCode · deny = no fake
- copy: Android Check icon success row · cấm sửa iOS/Android · cấm MFE desktop Field
- DELETE: OUT P1
- open questions: UNCLEAR-DOMAIN-MAP-NT · UNCLEAR-BFF-PROXY · UNCLEAR-STD-ROUTE · UNCLEAR-FILTER-UI · UNCLEAR-DELETE

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Static | GET list |
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

## API / tasks (ids only)
- FormMode↔API: GET list · GET init-data · POST create · GET/{id} · PUT/{id} · files/*
- real-data §A+§B: PASS
- T-*: (team_lead) · cite T-W3-08

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-NT: add DOMAIN-MAP row web-rmms-nghiem-thu (SA) · slug nghiem-thu exists
- UNCLEAR-BFF-PROXY: Mobile.Bff proxy patrol/nghiem-thu — SA confirm · cấm invent
- UNCLEAR-STD-ROUTE: SCREENS /field/nghiem-thu* vs mfeStdRoute /web-rmms-nghiem-thu — follow STATUS
- UNCLEAR-FILTER-UI: P1 search only vs stub status/route/date — PO/Design
- UNCLEAR-DELETE: DELETE live web · OUT P1 mobile — PO keep OUT

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-nghiem-thu.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- mau: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/nghiem-thu-mau/MAU-10.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
