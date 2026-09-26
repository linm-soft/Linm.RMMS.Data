# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T07:15:00.000Z
taskId: task_2698628e
contentHash: sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Full (TD-00/01/02/07·TK-00/01) · Sheet (TD-03) · phone 430 · LeaveConfirmModal
- Grid/DES-GRID/LinErpListFilterBar: N/A phone hub · query keys: status·route·page·pageSize
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration+Auth+Files · cấm ERP.*
- BFF: mobile-bff/api/v1/patrol/** proxy · API owns · web-bff cite peer
- entity: PatrolSession · PatrolCheckIn · migration **none** wave A
- Note-encode CLOSED: `chieu=` · `kmFrom/kmTo` · `mode=` · `reason=` · optional startLat/startLng · join `; `
- plan-point CLOSED: empty OK · no auto MatchOk
- demo: N/A · wave A Live-only · out TD-04/05/06·TK-02…07
- gates: TZ=tz_required · XCO=xco_get_only · SHARE=tenant_keep · road-route=share_a
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | road-routes/search |
| direction | chiều | Dropdown | Note chieu= |
| userName | người | Text RO | auth/profile |
| plannedDate | ngày | Date | PlannedDate |
| kmFrom/kmTo | km | Number | Note TK-01 |
| inspectMode | hình thức | Dropdown | Note mode= |
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

## API / tasks (ids only)
- FormMode↔API: GET sessions · GET/{id} · POST sessions · GET plan-points · POST check-ins · GET check-ins · road-routes/search · auth/profile · files/*
- entity/migration: Live · none A
- TZ/XCO/SHARE: tz_required · xco_get_only · tenant_keep
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- none

## Full paths (Read only if needed)
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
