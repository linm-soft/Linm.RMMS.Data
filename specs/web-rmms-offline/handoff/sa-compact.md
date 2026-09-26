# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-offline
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:45:00.000Z
taskId: task_a1f562f8
contentHash: sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile full list OFF-00 · phone ≤430 · N/A ERP Modal · DES-GRID N/A
- domain: Patrol (`patrol`) · cite Integration offline-batch · DOMAIN-MAP row `web-rmms-offline` applied
- mfeStdRoute: /web-rmms-offline · mfeStdUrl http://localhost:9301/web-rmms-offline
- nativeCite: SCREENS /offline · Android #sc-patrol-offline · DES-MOB-PAT-OFFLINE · bỏ Me tabs
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent queue GET
- FormMode↔API: list=local · sync=POST patrol/sessions/{id}/check-ins Live · receipt=POST integration/sync/offline-batch · clear only 2xx
- Body: CreatePatrolCheckInRequest (PlanPointLabel·Route·Lat·Lng·AccuracyM·DistanceToPlanM·MatchOk·Content·PhotoLocalIds)
- GPS: stored lat/lng only · **cấm** re-geolocate
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions offline.* · Incident P1 filter-only · P2 deferred
- Out: Me tabs · journal/kết ca/tồn tại/tần suất · native edits · demo SSOT
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| queue.list | items | List local | cấm GET queue |
| title/location/status | card | Text/Badge | display |
| segCheckIn/Incident | segment | Segment | filter kind |
| syncBtn | Đồng bộ | Button | replay 2xx only clear |
| sessionId+body | payload | Hidden | CreatePatrolCheckInRequest |
| lat/lng | GPS stored | Hidden | no new fix |
| receipt | offline-batch | auto | RecordCount=OK count |

## Screens / zones (ids only)
- OFF-00 · DES-MOB-PAT-OFFLINE · NAV · SEG · BANNER · CARD · empty · toast
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-offline
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: local list · POST check-ins Live · POST offline-batch receipt
- DOMAIN-MAP-OFFLINE: resolved · BFF GAP-DA-OFF-BFF-01 HARD
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-INCIDENT-REPLAY: P1 filter-only · P2 POST incident/incidents
- UNCLEAR-STORE-KEY: Dev align IndexedDB · peer key linm.offline.queue.v1

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-offline-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/STATUS.md
