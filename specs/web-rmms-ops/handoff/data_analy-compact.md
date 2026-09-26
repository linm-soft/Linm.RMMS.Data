# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-ops
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:28:40.379Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile inbox list / full (phone max-width 430) · N/A ERP Modal/Slideout · no master compose
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-ops
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Notification · cấm ERP.*
- demo: N/A · ≠ legacy desktop ops.md Kind B / demo HTML
- Inbox: GET notification/inbox page=1 pageSize=50 · POST mark-read · overview cite Home
- P1 no filter UI (API query sẵn: search/status/priority/type/unreadOnly)
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Field doors + journal/kết ca/tồn tại/tần suất → shell / web-rmms-mobile-a…e (out)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: none on /ops · peer deep navigator.geolocation · deny blocks coords
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-OPS · UNCLEAR-STD-PORT · UNCLEAR-OPS-DESKTOP-SCOPE · UNCLEAR-OPS-DETAIL

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| inboxList | list | List | GET inbox |
| rowTitle/SentAt/Unread | row | Text RO / Badge | item fields |
| markRead | action | Button/Action | POST mark-read |
| empty/title/back/refresh | chrome | Static/Button | copy keys |
| notifyBadge | peer | Number RO | overview · Home |

## Screens / zones (ids only)
- OP-00 · OP-01 · OP-02 · OP-03 · OP-04 · OP-05 · OP-06
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-ops
- DES-GRID / LinErpListFilterBar: N/A phone inbox

## API / tasks (ids only)
- FormMode↔API: inbox GET · mark-read POST · overview GET (peer)
- real-data §A+§B: PASS
- T-*: (team_lead) · cite T-W2-01

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-OPS: add DOMAIN-MAP row web-rmms-ops (SA) · slug ops exists
- UNCLEAR-STD-PORT: PLAN peer :9330 vs packet :9301 — follow STATUS URL
- UNCLEAR-OPS-DESKTOP-SCOPE: legacy Kind B compose out of mobile P1 (PO)
- UNCLEAR-OPS-DETAIL: row tap mark-read vs detail page — PO/Design

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ops-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ops-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-ops.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/STATUS.md
