# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-offline
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:30:00.000Z
taskId: task_0069a0fe
contentHash: sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1
route_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile full list OFF-00 · phone 430 · N/A ERP Modal · DES-GRID N/A · segment local filter
- domain: Patrol (`patrol`) · cite Integration offline-batch · DOMAIN-MAP applied · cấm ERP.* · cấm invent GET queue
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-offline` · mfeStdUrl http://localhost:9301/web-rmms-offline · native `/offline` · `#sc-patrol-offline` · DES-MOB-PAT-OFFLINE · bỏ Me tabs
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` · API Mới/migration/Step4b: none · T-BE/T-BFF n/a
- FormMode↔API: list=local · sync=POST patrol/sessions/{id}/check-ins Live · receipt=POST integration/sync/offline-batch · clear only 2xx
- Body: CreatePatrolCheckInRequest · GPS stored only · Incident P1 filter-only · P2 deferred
- labels: useFormOptions() / offline.* · UI 1-1 Android
- T-*: T-01 shell/route · T-02 local store+list · T-03 sync replay · T-04 receipt+toast/P1 · T-05 labels/auth/entry · T-06 qa · T-07 review
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued /agent-qa*

## Inventory (slim)
| id | controlHint | API / notes |
|----|-------------|-------------|
| queue.list | List local | cấm GET queue |
| title/location/status | Text/Badge | CARD |
| segCheckIn/Incident | Segment | filter kind |
| syncBtn | Button | replay 2xx only clear |
| sessionId+body | Hidden | CreatePatrolCheckInRequest |
| lat/lng | Hidden | stored GPS |
| receipt | auto | offline-batch RecordCount=OK |

## Screens / zones
- OFF-00 · DES-MOB-PAT-OFFLINE · NAV · SEG · BANNER · CARD · empty · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-offline

## API / tasks
- FormMode↔API: local list · POST check-ins · POST offline-batch receipt
- BFF: Mobile.Bff only · no queue controller
- T-01…T-05 → /agent-dev · T-06 /agent-qa · T-07 /agent-review

## UNCLEAR
- UNCLEAR-INCIDENT-REPLAY: P1 filter-only · P2 deferred
- UNCLEAR-STORE-KEY: Dev align IndexedDB · peer key linm.offline.queue.v1

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/task/web-rmms-offline.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/STATUS.md
