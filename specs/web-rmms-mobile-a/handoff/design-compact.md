# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T07:00:00.000Z
taskId: task_e41da45e
contentHash: sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Full (TD-00/01/02/07·TK-00/01) · Sheet (TD-03) · phone 430 · LeaveConfirmModal
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone hub
- Report AC: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration+Auth+Files · cấm ERP.*
- demo: N/A · hash skip · cấm rescan
- wave A Live-only · out: TD-04/05/06 · TK-02…07 hide/disable
- labels: useFormOptions() · GPS deny blocks TD-03 save
- open questions: UNCLEAR-PLAN-POINT · UNCLEAR-NOTE-ENCODE (SA)
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | road-route |
| direction | chiều | Dropdown | Note chieu= |
| userName | người | Text RO | auth/profile |
| plannedDate | ngày | Date | |
| kmFrom/kmTo | km | Number | TK-01 Note |
| inspectMode | hình thức | Dropdown | dinh-ky/dot-xuat |
| inspectReason | lý do | Text | if dot-xuat |
| planPointLabel | điểm KH | Text | empty OK |
| lat/lng/accuracyM | GPS | GPS | TD-03 HARD |
| content | nội dung | Text | check-in |
| photoLocalIds | ảnh | FileMulti | files/* |
| historyCards | lịch sử | List | GET sessions |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02(Full) · TD-03(Sheet) · TD-07 · TK-00 · TK-01(Full) · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: Create session POST patrol/sessions · CI POST …/check-ins · list GET sessions
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-PLAN-POINT: empty plan-points · no auto MatchOk
- UNCLEAR-NOTE-ENCODE: Note format → SA

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
