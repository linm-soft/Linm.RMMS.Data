# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:20:00.000Z
taskId: task_5a08f380
contentHash: sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667
dev_confirm: approve
autoApprove: ON
changeScope: new_page
build: PASS
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile full FR-00/01/02 · phone ≤430 · Android 1-1 · N/A ERP Modal · useFormOptions reflect.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-field-reflect · alias /field/reflect · hub PEER.reflect updated
- mfeStdUrl: http://localhost:9301/web-rmms-field-reflect
- be: Mobile.Bff :5202 · Patrol+Integration+AiVision+Incident Live · Step 4b skip · cấm invent field-reflect · cấm ERP.*
- HARD: GPS deny block Create/Detect/geo · Acc≤30 Detect · freshness≤30s · sessions live-only · checklist local → Description · MediaIds max10 · HasGps
- yarn build PASS · chunk web-rmms-field-reflect · Incident+AiVision Bff dotnet build PASS
- next: /agent-qa · roleOnly stop · e2eQa ON (QA only)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| assetPick | LookupGrid | GET integration/asset-types |
| kind | Segment | IncidentType |
| checklist | CheckboxGroup | local → Description |
| photos→FR-02 | PhotoRow/overlay | uploads → MediaIds |
| detect | Button | POST ai-vision/detect |
| sessionStamp | Text RO | GET patrol/sessions |
| gpsLock | GPS | deny/Acc gate · HasGps |
| severity | Select | LOOKUP_STATIC |
| create | Button | POST incident/incidents |
| draftOffline | Button | offlineQueue peer |

## Screens / zones
- FR-00 · FR-01 · FR-02 · GPS-DENY · toast · leave
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-field-reflect
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: sessions · asset-types · uploads · detect · incidents
- T-BE-CRUD/INIT/PERM · T-UI-FR-00/01/02 · LKP/ACT/FIELD/LEAVE/PROD/UX/RESP/HIST = done
- T-QA-* queued
- debt: capture=file input · MediaIds=uploads id

## UNCLEAR
- (none blocking) · GAP-PGC-BE-01 deferred HasGps only

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/implement/web-rmms-field-reflect.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/task/web-rmms-field-reflect.md
