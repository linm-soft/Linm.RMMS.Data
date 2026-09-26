# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-field
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T02:40:00.000Z
taskId: task_e0a60198
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-field
mfeStdRoute: /web-rmms-field

## Decisions
- formPattern: Mobile Field hub / full · phone 430 · N/A Modal · DES-GRID N/A
- Live: GET mobile-bff/api/v1/patrol/sessions?pageSize=50 → sessionHint + door badges
- cấm hub POST/PUT · GPS none · labels useFormOptions('web-rmms-field')
- Step4b/API Mới/migration: skip · reuse PatrolSessionsController · cấm ERP.*
- sync badge = offlineQueueStore.pendingCount · nav /web-rmms-offline
- hub mount doors; deep=A · tiles→peers · guest gate unauth
- VERIFY: MFE yarn build PASS · BE dotnet build PASS · e2e NOT run (QA)
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API / notes |
|----|-------------|-------------|
| doorPatrol/Inspect | Button/Nav | → mobile-a tuan-duong/kiem |
| syncBtn+badge | Button/Number RO | local queue · → offline |
| tiles×7 | Button/Nav | attendance/history/NT/cam/reflect/supervise/map |
| sessionHint | Text RO | GET patrol/sessions |

## Screens / zones
- FL-00 · FL-01 · FL-02 · FL-03
- aliases: /field · /field/tuan-duong · /field/tuan-kiem · /field/history · /field/reflect · /field/supervise · /field/map
- peerStdUrl= http://localhost:9301/web-rmms-field
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- GET …/patrol/sessions (Live badge only)
- T-BE-* · T-PERM · T-UI-FL/ACT/FIELD/PROD/UX/RESP/HIST done
- T-QA-CRUD-01 · T-QA-FL-01 queued QA

## Debt
- tileReflect/supervise/map → closest peer (mobile-c / ops / gis) until dedicated MFE
- Shell SH-04 FieldDoorsPage retained for tab chrome

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/implement/web-rmms-field.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/STATUS.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsField/
