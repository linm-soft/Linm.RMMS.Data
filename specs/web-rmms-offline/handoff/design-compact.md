# Handoff compact — design

schemaVersion: 1
feature: web-rmms-offline
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T00:30:00.000Z
taskId: task_51030f4d
contentHash: sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full list OFF-00 · phone 430 · N/A Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone list
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-offline
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Integration · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- UI 1-1 Android #sc-patrol-offline · DES-MOB-PAT-OFFLINE · bỏ Me tabs
- DoD: list=local · sync=Live POST check-ins · clear only 2xx · GPS stored only
- Incident: P1 filter-only · P2 POST incident/incidents
- labels: useFormOptions() / offline.*
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: list=local · sync=POST mobile-bff/…/patrol/sessions/{id}/check-ins · receipt=POST …/integration/sync/offline-batch
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-INCIDENT-REPLAY: P1 filter-only · P2 POST incident/incidents
- UNCLEAR-STORE-KEY: web IndexedDB schema align peer payload

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-offline-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-offline-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/STATUS.md
