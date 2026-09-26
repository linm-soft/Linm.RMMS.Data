# Handoff compact — review

schemaVersion: 1
feature: web-rmms-asset-list
packKind: list
role: review
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T15:05:00.000Z
taskId: task_2706048d
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
review_confirm: approve
autoApprove: ON
e2eQa: ON
mfeStdUrl: http://localhost:9301/web-rmms-asset-list

## Decisions
- changeScope: new_page · formPattern: Mobile List+Detail / full · phone 430 · no PUT · Leave N/A
- verdict: **PASS** · Must 0 · visual Aligned (QA S0/S1/QA-20)
- QUERY: GET road-assets list+detail only · type passthrough · pin=/gis?focus · mobile-bff · cấm ERP.*
- SEC: auth gate · toast no alert · GPS stored-only · encode id
- UI-FN: AL-00…13 wired · useFormOptions · Kind B WAIVE
- BE-FN: DOMAIN-MAP Asset · dual mobile-bff RoadAssetsBff · no migration
- hash unchanged · demo N/A · cấm e2e/build ở Review
- soft carry: GAP-QA-E2E-STOCK-PORT/DUP · LOOKUP_HINT · DEV_CHROME
- next: none · roleOnly stop (GAP-PKT-ROLE-01) · review gate closed

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| navBack | Button/Nav | Hub |
| pageTitle | Text RO | assetList.title |
| search | Search | GET ?search |
| listRow | ListRow | Live · ?id= |
| empty/error | Empty/Button | toast · retry |
| detail.* | Text RO | GET /{id} · hide null |
| pinMap | Button/Nav | /gis?focus · disable no coords |

## Screens / zones (ids only)
- AL-00 · AL-01 · AL-02 · AL-03 · AL-04 · AL-05 · AL-06 · AL-10 · AL-11 · AL-12 · AL-13
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-list
- QA PNG: qa/screens/{S0,S1,QA-20}.png

## API / tasks (ids only)
- FormMode↔API: road-assets GET list+detail · pin=Gis nav · no write
- T-01…T-07 = done · T-QA-* PASS · Kind B WAIVE

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/handoff/qa-compact.md
