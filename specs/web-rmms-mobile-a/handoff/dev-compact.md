# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T07:20:00.000Z
taskId: task_d94ac8ac
contentHash: sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e
autoApprove: ON
mfeStdRoute: /web-rmms-mobile-a
mfeStdUrl: http://localhost:9301/web-rmms-mobile-a

## Decisions
- changeScope: new_page
- formPattern: Full (TD-00/01/02/07·TK-00/01) · Sheet (TD-03) · phone 430 · LeaveConfirmModal
- Kind B grid/filter/ui-schema: **WAIVE**
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- build: MFE yarn build+typecheck **PASS** · BE dotnet **PASS** · migration none
- Note-encode: chieu= · kmFrom/kmTo · mode= · reason=
- plan-point empty OK · MatchOk not forced · GPS deny blocks save
- duplicate open: FE navigate + BE **409**
- next: /agent-qa* (e2eQa queued) · roleOnly stop

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | road-routes/search |
| direction | chiều | Dropdown | LOOKUP_STATIC |
| userName | người | Text RO | auth profile |
| plannedDate | ngày | Date | PlannedDate |
| kmFrom/kmTo | km | Number | Note TK-01 |
| inspectMode | hình thức | Dropdown | LOOKUP_STATIC |
| inspectReason | lý do | Text | if dot-xuat |
| planPointLabel | điểm KH | Text | empty OK |
| lat/lng/accuracyM | GPS | GPS | TD-03 HARD |
| content | nội dung | Text | check-in |
| photoLocalIds | ảnh | FileMulti | files guid |
| historyCards | lịch sử | List | GET sessions |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02 · TD-03 · TD-07 · TK-00 · TK-01 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a

## API / tasks (ids only)
- FormMode↔API: GET/POST sessions · GET/{id} · POST/GET check-ins · plan-points · road-routes/search · auth · files/*
- T-*: BE-CRUD/INIT/PERM · UI-HUB/FORM/ACT/LEAVE/LKP/FIELD/PROD/UX/RESP/HIST = **done**
- WAIVE: LIST KindB · FILTER · CFG · UISCHEMA
- debt: RequirePermission TODO peer · LOOKUP_STATIC FE module · port 9301 vs start:std 9305 · QA live review

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/implement/web-rmms-mobile-a.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/task/web-rmms-mobile-a.md
