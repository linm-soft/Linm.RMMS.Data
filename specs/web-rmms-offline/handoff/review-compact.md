# Handoff compact — review

schemaVersion: 1
feature: web-rmms-offline
packKind: list
role: review
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:55:00.000Z
taskId: task_9ae8b812
contentHash: sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1
review_confirm: approve
autoApprove: ON
e2eQa: ON · prior QA PASS
changeScope: new_page
verdict: PASS

## Decisions
- formPattern: Mobile full list OFF-00 · phone 430 · N/A ERP Modal · DES-GRID N/A
- domain: Patrol · cite Integration offline-batch · cấm ERP.* · cấm invent GET queue
- storeKey: `linm.offline.queue.v1` · UNCLEAR-STORE-KEY resolved
- FormMode↔API: list=local · sync=POST check-ins · receipt=offline-batch · clear only 2xx
- QUERY/SEC/UI-FN/BE-FN: PASS · hash skip unchanged
- Incident: P1 filter-only · P2 deferred (debt · non-blocking)
- Step4b/API Mới/migration: n/a
- fix_gaps: none · review_confirm=approve
- next: chain stop (GAP-PKT-ROLE-01) · **cấm** phase=done

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| queue.list | List local | PASS · no GET |
| title/location/status | Text/Badge | CARD |
| segCheckIn/Incident | Segment | P1 filter |
| syncBtn | Button | `#btn-sync` 2xx clear |
| sessionId+body | Hidden | CreatePatrolCheckInRequest |
| lat/lng | Hidden | stored GPS |
| receipt | auto | offline-batch |

## Screens / zones (ids only)
- OFF-00 · NAV · SEG · BANNER · CARD · empty · guestGate
- mfeStdUrl= http://localhost:9301/web-rmms-offline
- screens= specs/web-rmms-offline/qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- POST patrol/sessions/{id}/check-ins · POST integration/sync/offline-batch
- T-01…T-05 · T-QA · T-07 review = PASS

## Debt
- UNCLEAR-INCIDENT-REPLAY P2
- stock e2e soft (QA workaround PASS)

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/STATUS.md
