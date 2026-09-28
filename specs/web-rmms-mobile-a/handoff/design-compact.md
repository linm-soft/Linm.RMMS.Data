# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T14:20:00.000Z
taskId: task_2149670c
contentHash: sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · editTask=1 · § Delta only · keep screens A
- formPattern: Full (TD-00/01/02/07·TK-00/01) · Sheet (TD-03) · phone 430 · LeaveConfirmModal
- Pattern B: TD-03 Lưu always-on except saving · GPS deny banner on-click · cấm disabled={!gps}
- route: SearchInput no seed · miss → `--`
- users: resolve-only A via GET integration/users · miss → `--` · no picker A
- transport: mobileApiBase()/VITE_MOBILE_API_URL only · cấm web-bff · cấm ERP.*
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A/WAIVE phone hub
- Report AC: N/A
- align: /align-mobile-to-mfe · 430px · no new tab/route/icon
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration+Auth+Files
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- labels: useFormOptions()
- open questions: UNCLEAR-NOTE-ENCODE → SA · PLAN-POINT empty OK · USER-RESOLVE-A resolve-only
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | no seed · miss `--` |
| direction | chiều | Dropdown | Note chieu= |
| userName | người | Text RO+resolve | users · miss `--` |
| plannedDate | ngày | Date | |
| kmFrom/kmTo | km | Number | TK-01 Note |
| inspectMode | hình thức | Dropdown | dinh-ky/dot-xuat |
| inspectReason | lý do | Text | if dot-xuat |
| planPointLabel | điểm KH | Text | empty OK |
| checkInRoute | tuyến CI | Text RO | miss `--` |
| lat/lng/accuracyM | GPS | GPS | banner on Lưu click |
| submitCheckIn | Lưu | Button | Pattern B · disable only saving |
| content | nội dung | Text | check-in |
| photoLocalIds | ảnh | FileMulti | files/* |
| historyCards | lịch sử | List | GET sessions |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02(Full) · TD-03(Sheet·Pattern B) · TD-07 · TK-00 · TK-01(Full) · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: POST sessions · POST check-ins · GET sessions · GET road-routes/search · GET users · auth/profile · files/*
- real-data §A+§B: PASS · T-*: TL mint edit delta · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-PLAN-POINT: empty OK · no auto MatchOk
- UNCLEAR-NOTE-ENCODE: Note format → SA
- UNCLEAR-USER-RESOLVE-A: resolve-only A (PO/Design chốt)

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
