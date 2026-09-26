# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-asset-adjust
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:00:00.000Z
taskId: task_fc91c814
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-asset-adjust
mfeStdRoute: /web-rmms-asset-adjust

## Decisions
- formPattern: Mobile list + confirm · phone 430 · no ERP Modal · no PUT P1
- Live GET asset/road-assets?search&page&pageSize · DELETE soft · edit=nav peer list ?id=
- Soft-delete: AA-08 confirm + toast · reload · cấm silent/hard
- labels: assetAdjust.* / useFormOptions · Kind B / filter-bar: WAIVE phone
- BE: Step4b skip · DOMAIN-MAP Asset · no entity/migration · cấm ERP.*
- Build: MFE yarn build PASS · BE dotnet build PASS
- e2eQa: queued /agent-qa* · cấm e2e Dev
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub |
| pageTitle | Text RO | assetAdjust.title |
| search | Text/Search | GET ?search |
| listRow | ListRow | GET road-assets · no LatLng |
| empty/error | Empty/Button | toast · retry |
| remove | Button+Dialog | DELETE soft · AA-08 |
| edit | Button/Nav | peer list ?id= · no PUT |

## Screens / zones
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08
- peerStdUrl= http://localhost:9301/web-rmms-asset-adjust
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html

## API / tasks
- FormMode↔API: GET road-assets · DELETE soft · edit=nav peer
- T-01…T-05 done · T-06 qa pending · T-07 review pending
- debt: Kind B WAIVE · no PUT / no LatLng P1

## UNCLEAR
- (none)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/implement/web-rmms-asset-adjust.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/STATUS.md
