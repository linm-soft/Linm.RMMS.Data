# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T17:20:00.000Z
taskId: task_9f56dd9a
contentHash: sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c
autoApprove: ON
changeScope: edit_page
mfeStdUrl: http://localhost:9301/tai-san/ai
mfeStdRoute: /tai-san/ai
nextRole: qa
e2eQa: queued

## Decisions
- changeScope: edit_page · delta SUBMIT-VALIDATE · cấm new_page typed CRUD · cấm invent API
- Pattern B: Detect always-on except detecting · validationAttempted · banner photo/route/GPS Acc≤30 + inline + scroll
- route: SearchInput ROAD_ROUTE_LOOKUP_CONFIG · no seed · miss `--` · sessions prefill keep
- GPS: deny/poor không khóa CTA trước · Acc≤30 gate on submit · cấm fake/type-in
- HITL: confirm/dismiss busy-only · pin local · score SHOW % · no auto-confirm
- DES-LEAVE: LeaveConfirmModal · cấm native confirm
- Labels: useFormOptions assetAi.* · lookupStatic fallback
- Kind B / ui-schema / filter-bar: WAIVE phone form
- BE Step 4b: no API/entity/migration write · verify build PASS · cấm ERP.*
- Build: MFE yarn build PASS · BE WebService.sln PASS
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued QA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub · DES-LEAVE |
| photo/gps/trip | fields | Photo/Text/Select | Pattern B |
| route | tuyến | SearchInput | no seed · miss `--` |
| nearbyWarn | warn | Alert | optional nearby |
| detect/cancel | CTA | Button | disabled={detecting} only |
| hitl fields/pin/score | HITL | Text/MapPin | Draft · score SHOW · local drag |
| confirm/dismiss | CTA | Button | busy-only |
| errBanner | errors | Banner | string[] after attempt |

## Screens / zones (ids only)
- AA-00…AA-14 · aaValidateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/tai-san/ai
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks (ids only)
- FormMode↔API: uploads · detect-assets · nearby · sessions · road-routes/search · candidates/{id} · confirm · dismiss
- BFF: mobileApiBase only · no new WS/BFF write
- T-01…T-05 done · T-EDIT done · T-BE N/A · T-QA pending · T-REV pending
- debt: (none) · Kind B WAIVE phone

## UNCLEAR
- (none)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/implement/web-rmms-asset-ai.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile
- be: D:/AI-QLBD/Linm.RMMS.WebService
