# Handoff compact — po

schemaVersion: 1
feature: web-rmms-offline
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:22:32.051Z
contentHash: sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1

## Decisions
- changeScope: new_page
- formPattern: Mobile full list (phone max-width 430) · N/A ERP Modal/Slideout
- DoD: list=local · sync=Live POST check-ins · clear only on 2xx · no invent GET queue
- UI 1-1 Android #sc-patrol-offline · DES-MOB-PAT-OFFLINE · bỏ Me tabs
- Grid AC: DES-GRID / LinErpListFilterBar N/A phone · segment local filter
- GPS: stored lat/lng only · cấm re-geolocate
- labels: useFormOptions() / offline.* · cấm hardcode VN
- BFF: mobile-bff only · cấm web-bff / ERP.*
- Incident: P1 filter-only · P2 POST incident/incidents
- autoApprove → Design
- out: Me tabs · journal/kết ca/tồn tại/tần suất · native edits · demo SSOT

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
- OFF-00 · DES-MOB-PAT-OFFLINE · NAV · SEG · BANNER · CARD
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-offline
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: list=local · sync=POST mobile-bff/…/patrol/sessions/{id}/check-ins · receipt=POST …/integration/sync/offline-batch
- real-data §A+§B: PASS
- perm: patrol.sessions.update · incident P2 create
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-INCIDENT-REPLAY: P1 filter-only · P2 POST incident/incidents
- UNCLEAR-STORE-KEY: web IndexedDB schema align peer payload

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-offline-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-offline-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-offline.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/STATUS.md
