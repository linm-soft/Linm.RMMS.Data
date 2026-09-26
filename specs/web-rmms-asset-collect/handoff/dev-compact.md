# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T15:10:00.000Z
taskId: task_55cb554c
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-asset-collect
mfeStdRoute: /web-rmms-asset-collect

## Decisions
- formPattern: Mobile full form ≤430 · Create · no ERP Modal · assetCollect.* / useFormOptions
- Live: GET init-data · asset-types · road-routes/search · sessions prefill · POST road-assets Source=manual
- GPS: navigator.geolocation · deny blocks submit · cấm fake/type-in
- photos: local GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media
- DES-LEAVE: LeaveConfirmModal · cấm native confirm
- Kind B / ui-schema / filter-bar: WAIVE phone form
- BE: reuse road-assets · no entity/migration · DOMAIN-MAP row exists · cấm ERP.*
- Build: MFE yarn build PASS · BE dotnet build PASS
- e2eQa: queued /agent-qa* · cấm e2e Dev
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub · DES-LEAVE |
| name/type/route/km/status | Text/Select | CreateRoadAsset required |
| gpsPin | Text RO | geolocation gate |
| photos | PhotoRow | local GAP |
| submit/cancel | Button | POST · Hub |

## Screens / zones
- AC-00 · AC-01 · AC-02 · AC-03 · AC-04 · AC-05 · AC-06 · AC-07 · AC-08 · AC-09 · AC-10
- peerStdUrl= http://localhost:9301/web-rmms-asset-collect
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html

## API / tasks
- FormMode↔API: init-data · asset-types · road-routes/search · sessions · POST road-assets
- T-01…T-05 done · T-06 qa pending · T-07 review pending
- debt: media GAP · Kind B WAIVE

## UNCLEAR
- UNCLEAR-MEDIA-01: open GAP — local only

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/implement/web-rmms-asset-collect.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
