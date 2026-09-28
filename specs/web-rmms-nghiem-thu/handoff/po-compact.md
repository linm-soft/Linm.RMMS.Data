# Handoff compact — po

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T21:58:52.540Z
taskId: task_8f5b3f9f
contentHash: sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4
changeScope: edit_page

## Decisions
- changeScope: edit_page · NEW AutocodeTask · cấm typed CRUD new_page · keep prior artifacts
- citeDelta: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · NghiemThuFormPage.tsx
- formPattern: Mobile list+create/detail ≤430 · Pattern B validate · no ERP Modal · master no demo
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/nghiem-thu/moi · mfeStdRoute /nghiem-thu/moi
- nativeRoutes: /field/nghiem-thu* alias → /nghiem-thu* · Android 1-1 keep · cấm sửa iOS/Android
- be: Linm.RMMS.WebService · Mobile.Bff :5202 mobileApiBase() · Patrol nghiem-thu · cấm ERP.* · cấm web-bff base
- demo: N/A · hash-skip analy · no re-scan
- API keep: GET/POST/PUT patrol/nghiem-thu · init-data · files/* ≤10
- Delta API: road-routes/search · integration/users (BFF forward gap)
- Delta UX: Pattern B always-on CTA · banner string[] · SearchInput route+assignee · capture=environment · cấm disabled={!canSave} · cấm alert.warning thay banner
- mau-01…10 / ResultCode / Scores / draft / Field hub / no gộp / GPS no fake — keep
- FILTER search P1 · DELETE OUT P1 — keep
- STD-ROUTE: /nghiem-thu/moi (update từ legacy /web-rmms-nghiem-thu)
- DOMAIN-MAP + BFF-PROXY: prior SA RESOLVED — keep
- align cuối: /align-mobile-to-mfe · no android/ios prototype · no new tab/route/icon
- Leave: desktop Field · invent · Excel · new_page · seed routes · ERP UserSearchInput nguyên

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Static | keep |
| rowIcon/status/result | row | Icon/Badge | Check success |
| btnCreate | chrome | Button/Nav | → /moi |
| templateType | mau | Select | MAU-10 / init-data |
| route * | form | SearchInput | road-routes/search · no seed |
| fieldInfo/km | form | Text/Number | keep |
| assignee * | form | SearchInput | integration/users |
| resultCode/scores | result | Select/Checklist | keep |
| mediaIds * | media | PhotoRow | capture |
| validationBanner * | form | Banner | Pattern B |
| saveCreate/saveEdit * | CTA | Button | always-on except saving |
| gpsCapture | GPS | Action | deny=no fake · no pre-lock |

## Screens / zones (ids only)
- NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-07 · NT-08 · NT-09 · NT-10 · NT-11
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/nghiem-thu/moi
- DES-GRID / LinErpListFilterBar: N/A phone list
- Grid AC: AC-G-01…12 · Form AC: AC-F-01…13 · Report AC: N/A

## API / tasks (ids only)
- FormMode↔API: GET list · GET init-data · POST · GET/{id} · PUT/{id} · files/* · road-routes/search · users search
- real-data §A+§B: PASS · Delta fields marked *
- T-*: (team_lead) · cite T-W3-08 + SUBMIT-VALIDATE

## UNCLEAR
- UNCLEAR-USERS-BFF: SA/Dev forward GET integration/users on Mobile.Bff
- UNCLEAR-ROUTE-SEED: Dev remove ROAD_ROUTE_SEED/filterSeed/QL.22 (peer)
- UNCLEAR-SEARCHINPUT-PKG: Design/Dev MFE SearchInput · cấm ERP UserSearchInput nguyên
- RESOLVED: STD-ROUTE /nghiem-thu/moi · FILTER P1 · DELETE OUT · DOMAIN-MAP · BFF-PROXY

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md
- submit-validate: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
