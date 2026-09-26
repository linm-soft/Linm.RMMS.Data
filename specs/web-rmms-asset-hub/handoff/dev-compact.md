# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-asset-hub
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:45:00.000Z
taskId: task_e1a6313e
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON queued /agent-qa*
changeScope: new_page

## Decisions
- formPattern: Mobile Hub / full · phone 430 · N/A ERP Modal/Slideout · no master · no CRUD
- domain: Asset · DOMAIN-MAP closed · cấm ERP.* · cấm invent Hub CRUD / wallet org API
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-asset-hub` · alias `/asset` · mfeStdUrl http://localhost:9301/web-rmms-asset-hub
- be: Mobile.Bff :5202 · Live 3 GET on Mobile.Bff controllers · cấm alias mobile-bff trên Web BFF · migration/API Mới: none
- Live: GET integration/road-routes/search · GET integration/asset-types · GET ai-vision/asset-candidates
- GAP-F-AHUB-01: wallet title = first road-route · DES-GRID N/A · GPS none
- labels: useFormOptions('web-rmms-asset-hub') + LOOKUP_STATIC
- build: yarn build PASS · BFF PASS · REMOVED me*/feedback/cam-view
- T-01…T-05 done · T-06/T-07 pending
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01) · e2e cấm ở Dev

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Home |
| wallet.* | Text RO | 2×GET Integration |
| tile×5 | Button/Nav | /asset/kcht\|list\|collect\|ai\|adjust |
| rowGis | Button/Nav | /gis |
| aiPending | ListRow/CTA | GET candidates Draft · empty hide |

## Screens / zones
- AH-00 · AH-01 · AH-02 · AH-03 · AH-04 · AH-05 · AH-06 · AH-07
- mfeStdUrl= http://localhost:9301/web-rmms-asset-hub
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: wallet 2×GET · candidates GET · tiles=nav
- entity/migration: none · BFF mobile-bff route align ×3
- T-01…T-05=done · T-06 QA · T-07 review
- WAIVE: LIST/FILTER/CFG/UISCHEMA/FORM/LEAVE

## Debt
- LOOKUP_STATIC until OMS seed
- peer deep /asset/* · /gis until sibling mounts
- GAP-F-AHUB-01 wallet org

## UNCLEAR
- none blocking

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/implement/web-rmms-asset-hub.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/STATUS.md
