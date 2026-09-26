# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-offline
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:40:00.000Z
taskId: task_b19318b7
contentHash: sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1
autoApprove: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-offline
mfeStdRoute: /web-rmms-offline

## Decisions
- formPattern: Mobile full list OFF-00 · phone 430 · N/A ERP Modal · DES-GRID N/A
- domain: Patrol · cite Integration offline-batch · cấm ERP.* · cấm invent GET queue
- storeKey: `linm.offline.queue.v1` (localStorage JSON · peer payload) — UNCLEAR-STORE-KEY resolved
- FormMode↔API: list=local · sync=POST patrol/sessions/{id}/check-ins · receipt=POST integration/sync/offline-batch · clear only 2xx
- GPS: stored lat/lng only · Incident P1 filter-only (no clear on check-in sync)
- Step4b/API Mới/migration/T-BE/T-BFF: n/a
- entry: Home gridOffline + Field syncBtn → `/web-rmms-offline` · CheckInSheet enqueue on network fail
- labels: useFormOptions('web-rmms-offline') / offline.* LOOKUP_STATIC
- VERIFY: MFE yarn build PASS · BE dotnet build PASS · e2e NOT run (QA)
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API / notes |
|----|-------------|-------------|
| queue.list | List local | key linm.offline.queue.v1 |
| title/location/status | Text/Badge | CARD |
| segCheckIn/Incident | Segment | local filter kind |
| syncBtn | Button | replay 2xx only clear |
| sessionId+body | Hidden | CreatePatrolCheckInRequest |
| lat/lng | Hidden | stored GPS |
| receipt | auto | offline-batch RecordCount=OK |

## Screens / zones
- OFF-00 · DES-MOB-PAT-OFFLINE · NAV · SEG · BANNER · CARD · empty · toast
- aliases: /offline · /field/offline
- peerStdUrl= http://localhost:9301/web-rmms-offline

## API / tasks
- POST …/patrol/sessions/{id}/check-ins
- POST …/integration/sync/offline-batch
- T-01…T-05 done · T-06 /agent-qa · T-07 /agent-review

## Debt
- Incident P2 POST deferred (UNCLEAR-INCIDENT-REPLAY)
- offline-batch receipt fail does not restore cleared OK items (by design)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/implement/web-rmms-offline.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/STATUS.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsOffline/
