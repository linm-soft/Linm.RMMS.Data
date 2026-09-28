# Handoff compact — po

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: po
status: confirmed
changeScope: edit_page
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:05:00.000Z
contentHash: sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c
taskId: task_48d759a3

## Decisions
- changeScope: edit_page · packKind list confirm · cấm typed CRUD new_page · cấm Excel
- Delta: Pattern B detect (drop !canDetect) · SearchInput route no seed miss=-- · GPS deny không khóa CTA · keep HITL busy-only · no auto-confirm
- formPattern: Mobile 430 · Pattern B · SearchInput · no ERP Modal · /erp-form-context labels
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/tai-san/ai · mfeStdUrl http://localhost:9301/tai-san/ai
- nativeRouteCite: /asset/ai + /asset/ai/hitl/{id}
- be: AiVision (+Asset/Integration/Patrol) · Mobile.Bff · cấm ERP.* · cấm web-bff
- demo: N/A · hash skip · cấm re-scan
- Grid/filterBar: N/A phone
- REMOVED: me* · feedback · cam-view · collect/adjust
- align cuối: /align-mobile-to-mfe · no new tab/route/icon
- open: UNCLEAR-DOMAIN-MAP-AAI · UNCLEAR-HITL-SPLIT · UNCLEAR-SCORE-01 · STD-ROUTE=resolved

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| photo/gps/route/trip | fields | Photo/Text/SearchInput/Select | Pattern B · SearchInput live |
| nearbyWarn | warn | Alert | optional |
| detect/cancel | CTA | Button | Pattern B · Hub |
| hitl fields/pin | HITL | Text/MapPin | Draft · local drag |
| confirm/dismiss | CTA | Button | busy-only |

## Screens / zones (ids only)
- AA-00…AA-14
- reviewUrl= specs/web-rmms-asset-ai/ui/prototype/index.html (Design keep)
- peerStdUrl= http://localhost:9301/tai-san/ai
- DES-GRID / filterBar / Excel: N/A phone

## API / tasks (ids only)
- FormMode↔API: uploads · detect-assets · nearby · sessions · road-routes/search · confirm · dismiss
- real-data §A+§B: PASS · § Delta PASS
- T-EDIT: patch detect validate + SearchInput · T-QA queued

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-AAI: SA row AiVision
- UNCLEAR-HITL-SPLIT: gộp HITL
- UNCLEAR-SCORE-01: Design chốt %

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-real-data.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
