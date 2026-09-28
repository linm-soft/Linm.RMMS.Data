# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T06:55:00.000Z
contentHash: sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45
taskId: task_cd2a366e

## Decisions
- changeScope: edit_page · editTask=1 · keep prior PO/Design · § Delta only
- formPattern: Mobile Full (TD-02/TK-01) · Sheet (TD-03) · hub Full · N/A ERP Modal
- packKind: list (phone hub) · Grid Kind B N/A/WAIVE · Report N/A
- Leave: LeaveConfirmModal on TD-02/TK-01/TD-03 · cấm native alert/confirm
- Pattern B: CheckInSheet Lưu always on except saving · GPS deny banner on-click
- route: SearchInput no ROAD_ROUTE_SEED · miss → `--`
- users: A resolve-only via GET integration/users · miss → `--` · picker waves d+
- transport: mobileApiBase()/VITE_MOBILE_API_URL only · Bff users forward · cấm web-bff · cấm ERP.*
- align: /align-mobile-to-mfe · 430px · no new tab/route/icon
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration+Auth+Files
- autoApprove: ON · e2eQa queued QA
- open questions: UNCLEAR-NOTE-ENCODE → SA · PLAN-POINT empty OK · USER-RESOLVE-A chốt resolve-only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | no seed · miss `--` |
| userName | người | Text RO+resolve | users catalog |
| userSearch | chọn người | SearchInput | Bff · not A picker |
| direction | chiều | Dropdown | Note chieu=* |
| plannedDate | ngày | Date | |
| kmFrom/kmTo | km | Number | Note encode |
| inspectMode | hình thức | Dropdown | dinh-ky/dot-xuat |
| inspectReason | lý do | Text | Pattern B no pre-disable |
| planPointLabel | điểm KH | Text | empty OK · no MatchOk auto |
| lat/lng/accuracyM | GPS | GPS | banner on submit |
| submitCheckIn | Lưu | Button | disable only saving |
| content | nội dung | Text | |
| photoLocalIds | ảnh | FileMulti | files/* |
| historyCards | lịch sử | List | GET sessions |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02 · TD-03 · TD-07 · TK-00 · TK-01
- Pattern: Full/Sheet · tabs: none · devSlash=/agent-dev
- Grid AC: N/A/WAIVE · Report AC: N/A · Leave: §10
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a
- Design: keep prototype · patch TD-03 Pattern B + route/user `--`

## API / tasks (ids only)
- FormMode↔API: POST sessions · POST check-ins · GET sessions · GET road-routes/search · GET users · auth/profile · files/*
- real-data §A+§B: PASS · controlHint cite DA-01
- T-*: prior done · TL mint edit delta T-* (Pattern B · no-seed · users Bff · mobileApiBase)

## UNCLEAR
- UNCLEAR-NOTE-ENCODE → SA format Note (chieu/km/mode)
- UNCLEAR-PLAN-POINT → empty OK (PO chốt)
- UNCLEAR-USER-RESOLVE-A → resolve-only A (PO chốt)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-a-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
