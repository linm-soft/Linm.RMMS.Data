# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-offline
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:45:00.000Z
contentHash: sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1

## Decisions
- changeScope: new_page
- formPattern: Mobile full list (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-offline
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Integration · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff routes
- demo: N/A
- UI 1-1 Android #sc-patrol-offline · DES-MOB-PAT-OFFLINE · bỏ Me tabs
- queue: local-only · replay POST …/check-ins · optional offline-batch after OK
- labels: useFormOptions() / offline.* · cấm hardcode VN form
- GPS list: dùng lat/lng đã lưu · cấm re-geolocate fake
- out: journal/kết ca/tồn tại/tần suất (mobile-b…e) · iOS/Android edits
- open questions: UNCLEAR-INCIDENT-REPLAY · UNCLEAR-STORE-KEY

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
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-INCIDENT-REPLAY: P1 filter-only · P2 POST incident/incidents
- UNCLEAR-STORE-KEY: web IndexedDB schema align peer payload

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-offline-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-offline-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-offline.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- peer: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol-offline.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/STATUS.md
