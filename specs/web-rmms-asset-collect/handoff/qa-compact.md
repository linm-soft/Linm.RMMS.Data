# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T09:38:00.000Z
taskId: task_7609b588
contentHash: sha256:bf61e3677d8c0ff81bfccd4e08df8f452a069408ae43f3d025dde73959990a79
autoApprove: ON
e2eQa: ON
changeScope: edit_page
mfeStdUrl: http://localhost:9301/tai-san/thu-thap
mfeStdRoute: /tai-san/thu-thap
nextRole: review

## Decisions
- changeScope: edit_page · Pattern B · SearchInput route · GPS-on-submit · photos local GAP
- e2e: docker up + start:std :9301 (no kill) + capture_acollect · cases S0,S1,QA-20
- stock yarn e2e-qa FAIL soft (S1 DUP-01) · workaround capture Hub `/tai-san`
- visual: Aligned · Must 0 · P0 none · searchInput=true · submitDisabled=false
- WAIVE: filter-bar · POST create smoke · Leave click
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01) · cấm phase=done

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub · DES-LEAVE |
| name/type/km/status | Text/Select | Live lookups |
| route | SearchInput | no seed · miss `--` |
| gpsPin | Text RO | geolocation |
| photos | PhotoRow | local GAP |
| submit | Button | disabled={saving} only |
| errBanner | Banner | after attempt |

## Screens / zones
- AC-00…AC-10 · errBanner · S0/S1/QA-20 PNG PASS
- peerStdUrl= http://localhost:9301/tai-san/thu-thap
- hubStdUrl= http://localhost:9301/tai-san
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks
- Live: asset-types · form zones · Hub tileCollect → collect
- T-06 qa **done** · T-07 review pending
- debt: MEDIA GAP · STOCK-DUP · LOOKUP_WALLET_DASH

## UNCLEAR
- UNCLEAR-MEDIA-01: open GAP — local only

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
