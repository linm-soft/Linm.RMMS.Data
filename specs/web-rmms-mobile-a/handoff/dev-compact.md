# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.27.1
writtenAt: 2026-09-27T14:34:00.000Z
contentHash: sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45
taskId: task_668b6ad0
autoApprove: ON
e2eQa: queued

## Decisions
- changeScope: edit_page · editTask=1 · wave A Live keep
- formPattern: Full · Sheet TD-03 Pattern B · phone 430 · LeaveConfirmModal
- Pattern B: CheckInSheet Lưu `disabled={saving}` only · GPS deny banner on-click · cấm fake GPS
- route: SearchInput live · no ROAD_ROUTE_SEED · miss `--`
- users: resolveCurrentUser → GET integration/users · miss `--` · no picker A
- transport: bindMobileApiClient / mobileApiBase only · cấm web-bff · cấm ERP.*
- BE: migration none · Mobile.Bff UsersMobileController already Live
- Grid/FILTER/CFG: WAIVE giữ
- mfeStdUrl: http://localhost:9301/web-rmms-mobile-a
- build: MFE yarn build PASS · WebService + Mobile.Bff dotnet PASS
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01) · cấm e2e ở Dev

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | no-seed · miss `--` |
| userName | người | Text RO+resolve | users Bff |
| submitCheckIn | Lưu | Button | Pattern B |
| lat/lng/accuracyM | GPS | GPS | banner on-click |
| direction/km/mode/reason | Note | — | SA encode keep |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02 · TD-03(Pattern B) · TD-07 · TK-00 · TK-01 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a

## API / tasks (ids only)
- APIs: sessions · check-ins · road-routes/search · integration/users · files/* · auth/profile
- T-UI-PATTERN-B-01 · T-UI-LKP-EDIT-01 · T-UI-USER-01 · T-UI-TRANSPORT-01 = **done**
- T-QA-EDIT-01 · T-REV-EDIT-01 = pending
- entity/migration: Live · none
- debt: e2e queued QA only

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/implement/web-rmms-mobile-a.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/task/web-rmms-mobile-a.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
