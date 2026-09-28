# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: data_analy
status: done
changeScope: edit_page
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T09:45:09.284Z
contentHash: sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c
taskId: task_38801b3b

## Decisions
- changeScope: edit_page · NEW task · cấm typed CRUD new_page · cấm Excel/export
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · AssetAiDetectPage
- formPattern: Mobile full 430 · Pattern B validate · SearchInput route · no ERP Modal · no demo · /erp-form-context
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/tai-san/ai · route /tai-san/ai
- nativeRouteCite: SCREENS /asset/ai + /asset/ai/hitl/{id}
- be: Linm.RMMS.WebService · Mobile.Bff :5202 · AiVision (+Asset/Integration/Patrol) · cấm ERP.* · cấm web-bff client
- demo: N/A
- Current→New: drop disabled={!canDetect} · banner on click (photo+route+GPS) · route SearchInput no seed miss=-- · GPS deny không khóa CTA trước · keep capture + AA-* APIs
- HITL: confirm/dismiss busy-only · pin local · cấm auto-confirm
- REMOVED: me* · feedback · cam-view · collect/adjust in slug
- labels: useFormOptions() · cấm hardcode VN
- align cuối: /align-mobile-to-mfe · no new tab/route/icon · mobileApiBase only
- keep PO/Design artifacts · roles sau re-confirm Delta
- open: UNCLEAR-DOMAIN-MAP-AAI · UNCLEAR-HITL-SPLIT · UNCLEAR-SCORE-01 · UNCLEAR-STD-ROUTE=resolved

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| photo/gps/route/trip | fields | Photo/Text/SearchInput/Select | DetectAssetsRequest · Pattern B |
| nearbyWarn | warn | Alert | optional nearby |
| detect/cancel | CTA | Button | POST detect Pattern B · Hub |
| hitl fields/pin | HITL | Text/MapPin | Draft · local drag |
| confirm/dismiss | CTA | Button | POST confirm|dismiss · busy |

## Screens / zones (ids only)
- AA-00…AA-14
- reviewUrl= specs/web-rmms-asset-ai/ui/prototype/index.html (Design keep)
- peerStdUrl= http://localhost:9301/tai-san/ai
- DES-GRID / filterBar / Excel: N/A phone

## API / tasks (ids only)
- FormMode↔API: uploads · detect-assets · nearby · sessions · road-routes/search · confirm · dismiss
- real-data §A+§B: PASS · § Delta PASS
- T-*: (team_lead) patch detect validate + SearchInput

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-AAI: SA row web-rmms-asset-ai · AiVision
- UNCLEAR-HITL-SPLIT: peer split — packet gộp HITL
- UNCLEAR-SCORE-01: Design chốt % ship

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-ai.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
