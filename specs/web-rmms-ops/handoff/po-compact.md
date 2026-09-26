# Handoff compact — po

schemaVersion: 1
feature: web-rmms-ops
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T12:35:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- packKind: list · phone inbox ≤430 · N/A DES-GRID / LinErpListFilterBar / filter UI P1
- formPattern: Mobile inbox list/full · no ERP Modal/Slideout · no master compose
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-ops
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Notification · cấm ERP.*
- P1: inbox GET + mark-read POST + empty + chrome · overview badge = peer Home
- Row tap unread = mark-read only · **no** detail page P1 (P2 stub optional)
- Desktop Kind B compose/KPI **out** · me*/feedback/cam-view/Field deep/journal… **out**
- GPS: none on /ops · labels useFormOptions · Android 1-1 · cấm iOS/Android native edit
- Closed: UNCLEAR-OPS-DESKTOP-SCOPE · UNCLEAR-OPS-DETAIL · UNCLEAR-STD-PORT (follow :9301)
- Open→SA: UNCLEAR-DOMAIN-MAP-OPS

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| inboxList | list | List | GET inbox p1/50 |
| rowTitle/SentAt/Unread | row | Text RO / Badge | + opt priority/type |
| markRead | action | Button/Action | POST mark-read |
| empty/title/back/refresh | chrome | Static/Button | copy keys |
| notifyBadge | peer | Number RO | overview · Home |

## Screens / zones (ids only)
- OP-00 · OP-01 · OP-02 · OP-03 · OP-04 · OP-05 · OP-06
- AC-L-01…08 (list) · reviewUrl=(Design)
- peerStdUrl= http://localhost:9301/web-rmms-ops
- DES-GRID / filter bar: N/A

## API / tasks (ids only)
- FormMode↔API: inbox GET · mark-read POST · overview GET (peer)
- real-data §A+§B: PASS · cite T-W2-01
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-OPS → SA add DOMAIN-MAP row web-rmms-ops

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ops-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-ops-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ops/STATUS.md
