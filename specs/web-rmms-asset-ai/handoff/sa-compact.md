# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: sa
status: confirmed
changeScope: edit_page
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:30:00.000Z
contentHash: sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c
taskId: task_a31635c7
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · cấm typed CRUD new_page · cấm Excel · cấm invent API
- domain: AiVision `ai-vision` · DOMAIN-MAP row confirmed · cấm ERP.* · cấm AssetAiController
- BFF: Mobile.Bff :5202 `mobile-bff/api/v1` · cấm web-bff client
- Delta: Pattern B detect (drop !canDetect) · SearchInput route no seed miss=-- · GPS deny không khóa CTA · HITL busy-only · score SHOW % · no auto-confirm
- API Mới / migration / Step 4b: **none** · T-BE N/A · Live reuse
- formPattern: Mobile 430 · Pattern B · SearchInput · no ERP Modal · useFormOptions assetAi.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/tai-san/ai · mfeStdUrl http://localhost:9301/tai-san/ai
- nativeRouteCite: /asset/ai + /asset/ai/hitl/{id}
- demo: N/A · hash skip · cấm Write MFE/native at SA
- DES-LEAVE: in-app discard · cấm native confirm
- REMOVED: me* · feedback · cam-view · collect/adjust · ROAD_ROUTE_SEED · disabled={!canDetect}
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| photo/gps/route/trip | fields | Photo/Text/SearchInput/Select | Pattern B · SearchInput Live |
| nearbyWarn | warn | Alert | optional nearby |
| detect/cancel | CTA | Button | Pattern B · chỉ disable detecting |
| hitl fields/pin/score | HITL | Text/MapPin | Draft · score SHOW · local drag |
| confirm/dismiss | CTA | Button | busy-only |

## Screens / zones (ids only)
- AA-00…AA-14
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/tai-san/ai
- DES-GRID / filterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: uploads · detect-assets · nearby · sessions · road-routes/search · candidates/{id} · confirm · dismiss
- Live BFF paths: mobile-bff/api/v1/ai-vision/* · integration/road-routes/search · patrol/sessions
- real-data §A+§B: PASS · T-EDIT FE only · T-BE N/A · T-QA queued

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-AAI: **resolved** — DOMAIN-MAP AiVision row
- UNCLEAR-HITL-SPLIT: **resolved Design** — HITL in-scope
- UNCLEAR-SCORE-01: **resolved Design** — SHOW %
- UNCLEAR-STD-ROUTE: **resolved** — /tai-san/ai

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/be/solution-discovery.md
- design-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
