# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-field-reflect
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T12:25:00.000Z
taskId: task_a905fb59
contentHash: sha256:d8f13df3772c0f27b367c5e01a5ce2cf942b1a27640c1390e76e34c3a8c267f2
dev_confirm: approve
autoApprove: ON
changeScope: edit_page
build: PASS
e2eQa: ON (queued /agent-qa*)

## Decisions
- formPattern: Mobile full FR-00/01/02 · phone 430 · Pattern B SUBMIT-VALIDATE · N/A ERP Modal/DES-GRID
- mfeStdRoute: /phan-anh · mfeStdUrl http://localhost:9301/phan-anh · product /field/reflect
- be: Mobile.Bff :5202 · Live keep · Step 4b skip · cấm invent field-reflect · cấm ERP.*
- HARD: Detect/Create disabled chỉ detecting|creating · banner string[] on click · Acc>30 chặn POST detect · GPS deny không khóa CTA
- Align: SSOT FieldReflectPage · data-phone-frame=430 · cấm tab/route/icon mới · cấm android/ios proto
- yarn build PASS · chunk phan-anh · next /agent-qa · roleOnly stop · e2eQa ON (QA only)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| assetPick | LookupGrid | GET integration/asset-types |
| photos | PhotoRow | uploads → MediaIds · banner on Detect |
| detect | Button | POST ai-vision/detect · Acc handler |
| sessionStamp | Text RO | GET patrol/sessions · banner on Create |
| gpsLock | GPS | deny/Acc banner on click · HasGps |
| validationBanner | Banner | Pattern B string[] |
| create | Button | POST incident/incidents |
| draftOffline | Button | offlineQueue peer |

## Screens / zones
- FR-00 · FR-01 · FR-02 · validationBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/ui/prototype/index.html
- modes=?miss=1 · ?deny=1 · ?acc=1
- peerStdUrl= http://localhost:9301/phan-anh
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks
- FormMode↔API: sessions · asset-types · uploads · detect · incidents
- T-UI-VAL-B-01 · T-UI-ACC-01 · T-UI-GPS-B-01 · T-UI-ALIGN-01 = done
- T-QA-VAL-B-01 queued
- debt: capture=PGC · MediaIds=uploads id

## UNCLEAR
- VALIDATE-B / ALIGN-01 closed Dev · QA AC pending · GAP-PGC-BE-01 deferred HasGps only

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/implement/web-rmms-field-reflect.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/STATUS.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field-reflect/task/web-rmms-field-reflect.md
