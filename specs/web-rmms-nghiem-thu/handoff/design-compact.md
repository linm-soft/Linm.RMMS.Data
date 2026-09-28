# Handoff compact — design

schemaVersion: 1
feature: web-rmms-nghiem-thu
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T15:10:00.000Z
taskId: task_c6a6da70
contentHash: sha256:b8f3ce70ff3e80073c39d2dac6a01d2fed2e98232877ef6979881eef8e37acb4
changeScope: edit_page
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · keep prior prototype shell NT-00…11 · Delta form only · cấm typed CRUD new_page
- citeDelta: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · NghiemThuFormPage.tsx
- formPattern: Mobile list+create/detail ≤430 · Pattern B validate · no ERP Modal · master no demo
- Grid AC / DES-GRID / LinErpListFilterBar: N/A phone list · Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/nghiem-thu/moi
- mfeStdRoute: /nghiem-thu/moi · nativeRouteCite SCREENS /field/nghiem-thu* alias → /nghiem-thu*
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol nghiem-thu · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Delta UX: Pattern B always-on CTA · banner string[] · SearchInput route+assignee · capture=environment · cấm disabled={!canSave} · cấm alert.warning
- Delta API cite: road-routes/search · integration/users (BFF forward gap)
- FILTER P1 search only · DELETE OUT P1 · mau MAU-10 · GPS no fake · DES-LEAVE in-app
- reviewUrl keep · peerStdUrl=/nghiem-thu/moi
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
| mediaIds * | media | PhotoRow | capture=environment |
| validationBanner * | form | Banner | Pattern B string[] |
| saveCreate/saveEdit * | CTA | Button | always-on except saving |
| gpsCapture | GPS | Action | deny=no fake · no pre-lock |

## Screens / zones (ids only)
- NT-00 · NT-01 · NT-02 · NT-03 · NT-04 · NT-05 · NT-06 · NT-07 · NT-08 · NT-09 · NT-10 · NT-11
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/nghiem-thu/moi
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET list · GET init-data · POST · GET/{id} · PUT/{id} · files/* · road-routes/search · users search
- real-data §A+§B: PASS · Delta fields marked *
- T-*: (team_lead) · cite T-W3-08 + SUBMIT-VALIDATE · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-USERS-BFF: SA/Dev forward GET integration/users on Mobile.Bff
- UNCLEAR-ROUTE-SEED: Dev remove ROAD_ROUTE_SEED/filterSeed/QL.22 (peer)
- UNCLEAR-SEARCHINPUT-PKG: Dev MFE SearchInput · cấm ERP UserSearchInput nguyên
- RESOLVED: STD-ROUTE /nghiem-thu/moi · FILTER P1 · DELETE OUT · DOMAIN-MAP · BFF-PROXY

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-nghiem-thu-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-nghiem-thu/STATUS.md
