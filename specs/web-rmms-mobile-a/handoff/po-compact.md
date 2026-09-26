# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T06:45:00.000Z
taskId: task_50f286a6
contentHash: sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e

## Decisions
- changeScope: new_page
- formPattern: Full page (TD-02/TK-01/hubs) · Sheet (TD-03) · phone max-width 430
- Grid AC Kind B: N/A · Report AC: N/A · Leave: LeaveConfirmModal (dirty forms)
- packKind confirm: list (phone Field hub ≠ desktop Kind B)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration+Auth+Files · cấm ERP.*
- demo: N/A · hash skip · cấm rescan
- wave A Live-only · out: TD-04/05/06 · TK-02…07
- labels: useFormOptions() · GPS deny blocks TD-03 save
- open questions: UNCLEAR-PLAN-POINT (empty OK/no MatchOk) · UNCLEAR-NOTE-ENCODE (SA)
- next: /agent-design · roleOnly stop (GAP-PKT-ROLE-01)
- autoApprove: ON · e2eQa queued QA

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
- TD-00 · TD-01 · TD-02(Full) · TD-03(Sheet) · TD-07 · TK-00 · TK-01(Full)
- Grid/Report: N/A · Leave: yes · peerStdUrl=http://localhost:9301/web-rmms-mobile-a
- reviewUrl= (Design) · DES-GRID / LinErpListFilterBar: N/A phone hub
- controlHint cite: specs/_data-analy/features/web-rmms-mobile-a-control-hint.md

## API / tasks (ids only)
- FormMode↔API: Create session POST patrol/sessions · CI POST …/check-ins · list GET sessions
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-PLAN-POINT: empty plan-points · no auto MatchOk (PO chốt)
- UNCLEAR-NOTE-ENCODE: Note format → SA

## Full paths (Read only if needed)
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
