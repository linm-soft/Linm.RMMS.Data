# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-mobile-a
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.27.1
writtenAt: 2026-09-27T14:35:00.000Z
contentHash: sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45
taskId: task_90723ead
route_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · editTask=1 · keep wave A Live · mint edit T-* only
- formPattern: Full · Sheet TD-03 Pattern B · phone 430 · LeaveConfirmModal
- route_confirm: `/web-rmms-mobile-a` approve · no new URL
- Pattern B: Lưu always-on trừ saving · GPS deny banner on-click · cấm disabled={!gps} · cấm fake GPS
- route: SearchInput no ROAD_ROUTE_SEED · miss → `--`
- users: resolve-only A · GET integration/users · Mobile.Bff forward · miss → `--`
- transport: mobileApiBase()/VITE_MOBILE_API_URL only · cấm web-bff · cấm ERP.*
- Note-encode CLOSED SA · plan-point empty OK
- Grid/FILTER/CFG/UISCHEMA: WAIVE giữ
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-a
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration+Auth+Files · migration none
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| route | tuyến | SearchInput | T-UI-LKP-EDIT-01 no-seed |
| userName | người | Text RO+resolve | T-UI-USER-01 |
| submitCheckIn | Lưu | Button | T-UI-PATTERN-B-01 |
| lat/lng/accuracyM | GPS | GPS | banner on-click |
| direction/km/mode/reason | Note | — | SA encode cite |

## Screens / zones (ids only)
- TD-00 · TD-01 · TD-02 · TD-03(Pattern B) · TD-07 · TK-00 · TK-01 · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-a

## API / tasks (ids only)
- FormMode↔API: sessions · check-ins · road-routes/search · integration/users · files/* · auth/profile
- T-* edit pending: T-UI-PATTERN-B-01 · T-UI-LKP-EDIT-01 · T-UI-USER-01 · T-UI-TRANSPORT-01 · T-QA-EDIT-01 · T-REV-EDIT-01
- prior wave A T-*: done · Kind B/FILTER WAIVE
- entity/migration: Live · none
- devSlash=/agent-dev

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/task/web-rmms-mobile-a.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/STATUS.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
