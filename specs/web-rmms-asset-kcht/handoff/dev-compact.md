# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-asset-kcht
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:10:00.000Z
taskId: task_00503b01
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
changeScope: new_page
e2eQa: queued

## Decisions
- formPattern: Mobile type-grid / full · phone 430 · N/A ERP Modal/Slideout · no CRUD · no POST/PUT
- domain: Integration asset-types · cite Asset · cấm ERP.* · cấm invent AssetKcht API
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-asset-kcht` · alias `/asset/kcht` · Hub tile STD
- mfeStdUrl: http://localhost:9301/web-rmms-asset-kcht
- be: Linm.RMMS.WebService · Mobile.Bff Live GET only · Step 4b **skip**
- Live: GET integration/asset-types → tiles code/name/icon
- TAP: `/asset/list?type={code}` · SEARCH client P1 · back Hub · GPS none
- labels: useFormOptions web-rmms-asset-kcht · assetKcht.* fallback
- build: yarn build PASS · dotnet build PASS · e2e cấm Dev
- T-01…T-05 done · T-06 /agent-qa · T-07 /agent-review
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub |
| pageTitle | Text RO | assetKcht.title |
| search | Text/Search | client filter |
| typeTile | HubTile | GET asset-types |
| empty/error | Empty/Button | toast · retry |
| typeTap | Button/Nav | list ?type= |

## Screens / zones
- AK-00 · AK-01 · AK-02 · AK-03 · AK-04 · AK-05 · AK-06
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-kcht

## API / tasks
- FormMode↔API: asset-types GET only · tiles nav peer list · no write
- BFF: reuse AssetTypesBffController · no new controller
- T-01…T-05 done · T-06 QA · T-07 review

## UNCLEAR
- (none) peer /asset/list may be stub until list STD — query wired

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/implement/web-rmms-asset-kcht.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/task/web-rmms-asset-kcht.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/STATUS.md
